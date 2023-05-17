import { DB } from '../database';
/* import { userModel } from '../models';
import { userSeed } from './dataSeed'; */

export const importDevData = async () => {
  try {
    await DB.authenticate();

    //Create Tables
    await DB.sync();

    //Import Data
    /* await Promise.allSettled([
      userModel.bulkCreate(userSeed),
    ]); */

    process.exit();
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

export const deleteDevData = async () => {
  try {
    //Delete Tables
    await DB.sync({ force: true });

    process.exit();
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

if (process.argv[2] === '-importDev') {
  importDevData();
}
if (process.argv[2] === '-deleteDev') {
  deleteDevData();
}