export type IRole = 'первая ступень' | 'вторая ступень'
export interface UserDto {
  user_id: string,
  name: string,
  surname: string,
  nikname: String,
  role: IRole
}