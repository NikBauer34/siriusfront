export type IRole = string;
export interface UserDto {
  user_id: string;
  name: string;
  surname: string;
  nikname: String;
  role: IRole;
}