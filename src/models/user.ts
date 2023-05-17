import { DataTypes, Model } from 'sequelize';
import { DB } from '../database';
import { IUser } from '../interfaces';

interface IUserModel extends Model<IUser>, IUser { }

const userModel = DB.define<IUserModel>('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING(100), allowNull: false },
  lastName: { type: DataTypes.STRING(100), allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: { type: DataTypes.STRING(64), allowNull: false },
  hasVerifiedEmail: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  status: { type: DataTypes.ENUM('active', 'inactive'), allowNull: false, defaultValue: 'active' },
  token: { type: DataTypes.STRING, allowNull: false, defaultValue: '' },
  expiredToken: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() },
})

export default userModel;