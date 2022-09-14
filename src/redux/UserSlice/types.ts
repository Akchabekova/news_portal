export interface initialUsersTypes {
    users: IUsersItemType[],
    isLoading: boolean,
    error: string,
}
export interface IUsersItemType{
    createdAt: number,
    id: string,
    name: string,
    surname: string
}
