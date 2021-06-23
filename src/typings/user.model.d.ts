export interface IUserAttributes {
    id?: number,
    login: string,
    password: string,
    email?: string
    username?: string,
    isActive: boolean,
    createdAt?: Date,
    updatedAt?: Date
}

export type UserCreationAttrubutes = Pick<IUserAttributes, 'id'>