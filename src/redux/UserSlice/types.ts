export interface initialUsersTypes {
    users: Array<usersItemType>
}
export interface usersItemType{
    createdAt: number,
    id: string,
    name: string,
    surname: string
}