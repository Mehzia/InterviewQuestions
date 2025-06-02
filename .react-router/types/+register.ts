import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }

  interface Future {
    unstable_middleware: false
  }
}

type Params = {
  "/": {};
  "/login": {};
  "/query": {};
  "/xml": {};
  "/fetch": {};
  "/axios": {};
  "/sidebar": {};
  "/overview": {};
  "/overview/overview/contacts": {};
  "/overview/overview/personal-info": {};
};