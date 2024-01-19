import axios, { AxiosResponse } from "axios";
import { IRole, UserDto } from "../api/index.ts";
import { makeAutoObservable } from 'mobx'
import { AuthResponse } from "../api/index.ts";
import { AuthService } from "../api/index.ts";
import { API_URL } from "../constants/index.ts";
export default class UserStore {
  user = {} as UserDto;
  // name = this.user.name as string;
  // surname = this.user.surname as string;
  // role = this.user.role as IRole;
  isAuth = false;
  isLoading = false;
  isError = false;

  constructor() {
    makeAutoObservable(this)
  }
  setAuth(bool: boolean): void {
    this.isAuth = bool;
  }
  setUser(user: UserDto): void {
    this.user = user;
  }
  setLoading(bool: boolean): void {
    this.isLoading = bool;
  }
  setError(bool: boolean): void {
    this.isError = bool;
  }

  async login(nikname: string, password: string): Promise<string | AxiosResponse<AuthResponse, any>> {
    try {
      this.setLoading(true);
      const response = await AuthService.login(nikname, password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true);
      this.setUser(response.data.user)
      this.setError(false);
      return response
    } catch (e: any) {
      this.setError(true);
      return e.response?.data?.message
    } finally {
      this.setLoading(false);
    }
  }
  async registration(name: string, surname: string, nikname: string, password: string, role: IRole): Promise<string | AxiosResponse<AuthResponse, any>> {
    try {
      this.setLoading(true);
      const response = await AuthService.registration(name, surname, nikname, password, role)
      alert(response.data.accessToken)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true);
      this.setUser(response.data.user)
      this.setError(false);
      return response
    } catch (e: any) {
      this.setError(true);
      return e.response?.data?.message
    } finally {
      this.setLoading(false);
    }
  }
  async logout() {
    try {
      const response = await AuthService.logout()
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as UserDto);
      this.setError(false);
    } catch (e: any) {
      this.setError(true);
      console.log(e.response?.data?.message)
    }
  }
  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/token/refresh`, { withCredentials: true })
      this.setLoading(true);
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true);
      this.setUser(response.data.user)
      this.setError(false);
    } catch (e: any) {
      this.setError(true);
      console.log(e.response?.data?.message)
    } finally {
      this.setLoading(false);
    }
  }
}