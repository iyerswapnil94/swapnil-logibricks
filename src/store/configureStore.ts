import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./combinedReducers";
import { rootSaga } from "./root.saga";

export const sagaMiddleware = createSagaMiddleware();

export class AppStore {
  public static created: boolean;
  // @ts-ignore
  private static _instance: Store = null;
  private constructor() {}

  public static getInstance(initialState?: any): Store<any> {
    if (!AppStore._instance && initialState) {
      const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
      );

      sagaMiddleware.run(rootSaga);

      if (module.hot) {
        module.hot.accept("./combinedReducers.ts", () => {
          // @ts-ignore
          const nextRootReducer = rootReducer.default;
          store.replaceReducer(nextRootReducer);
        });
      }

      AppStore._instance = store;
    }

    return AppStore._instance;
  }
}
