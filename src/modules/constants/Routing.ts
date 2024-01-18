import RegPage from "../../pages/RegPage";
import MainPage from "../../pages/MainPage";
import { LoginPage } from "../../pages/index";
import IRouting from "./IRouting.ts";

export const publicRouting: IRouting[] = [
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/registration',
    component: RegPage
  },

]
export const firstRouting: IRouting[] = [
  {
    path: 'main',
    component: MainPage
  }
  //,
  // {
  //   path: 'magnitograms',
  //   component: 
  // }
]
export const secondRouting: IRouting[] = [

]