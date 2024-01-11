import {Auth, FirstPage1, FirstPage2, SecondPage1} from "../../pages/index.ts";
import IRouting from "./IRouting.ts";

export const publicRouting: IRouting[] = [
  {
    path: '/login',
    component: Auth
  },
  {
    path: '/registration',
    component: Auth
  }
]
export const firstRouting: IRouting[] = [
  {
    path: 'fro',
    component: FirstPage1
  },
  {
    path: 'frs',
    component: FirstPage2
  }
]
export const secondRouting: IRouting[] = [
  {
    path: 'sro',
    component: SecondPage1
  }
]