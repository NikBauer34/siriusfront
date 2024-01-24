import RegPage from "../../pages/RegPage";
import MainPage from "../../pages/MainPage";
import Marking from "../../pages/Marking.tsx";
import FormDataTest from "../../pages/FormDataTest.tsx";
import { LoginPage } from "../../pages/index";
import IRouting from "./IRouting.ts";
import MarkupPage from "../../pages/MarkupPage.tsx";
import ComparisonPage from "../../pages/ComparisonPage.tsx";
import VersionsPage from "../../pages/VersionsPage.tsx";

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
  ,
  {
    path: 'marking',
    component: Marking
  },
  {
    path: 'markup',
    component: MarkupPage
  },
  {
    path: 'comparison',
    component: ComparisonPage
  },
  {
    path: 'formdata',
    component: FormDataTest
  },
  {
    path: 'versions',
    component: VersionsPage
  }
]
export const secondRouting: IRouting[] = [

]