import RegPage from "../../pages/RegPage.tsx";
import {LoginPage, FirstPage1, FirstPage2, SecondPage1, Error404} from "../../pages/index.ts";
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
  // ошибка: 
  // перед инициализацией нельзя...
  // {
  //   path: '*',
  //   component: Error404
  // }
]
export const firstRouting: IRouting[] = [
  {
    path: 'fro',
    component: FirstPage1
  },
  {
    path: 'frs',
    component: FirstPage2
  },{
    path: '*',
    component: RegPage
  }
]
export const secondRouting: IRouting[] = [
  {
    path: 'sro',
    component: SecondPage1
  },{
    path: '*',
    component: RegPage
  }
]