import $api from "../http/http.ts";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../http/AuthResponse";
import { IRole } from "../http/IUser";

export default class AuthService {
  static async login(nikname: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/user/login', {nikname, password});
  }
  static async registration(name: string, surname: string, nikname: string, password: string, role: IRole): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/user/registration', {name, surname, nikname, password, role});
  }
  static async logout(): Promise<void> {
    return $api.post('/user/logout');
  }
}