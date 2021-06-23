import { Model, Sequelize, DataTypes, ModelDefined } from 'sequelize';
import { IUserAttributes, UserCreationAttrubutes } from '../../typings/user.model'

export interface IUserInstance
	extends Model<IUserAttributes, UserCreationAttrubutes>,
		IUserAttributes {}

type UserModelDefined = ModelDefined<IUserAttributes, UserCreationAttrubutes>

const User = (sequelize: Sequelize): UserModelDefined => {
	return sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			login: {
				type: DataTypes.STRING
			},
			password: {
				type: DataTypes.STRING
			},
			email: {
				type: DataTypes.STRING
			},
			username: {
				type: DataTypes.STRING
			},
			idActive: {
				type: DataTypes.BOOLEAN
			}
		},
		{
			tableName: 'users',
			underscored: true,
			createdAt: 'createdAt',
			updatedAt: 'updatedAt'
		}
	) as UserModelDefined
}

export default User