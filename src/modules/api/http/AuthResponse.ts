import { UserDto } from "./IUser.ts";

export interface AuthResponse {
  accessToken: string,
  refreshToken: string,
  user: UserDto
}

