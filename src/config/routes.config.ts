export interface IRoute {
  to: string;
  id?: string;
  name: string;
}
// This config is created to add as many routes as required during Naigation between pages
const home: IRoute = {
  to: "/",
  id: "home",
  name: "Home"
};

export const routes = { home };
