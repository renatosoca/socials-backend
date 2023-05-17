import { Sequelize } from "sequelize";

export const connectionDB = async (): Promise<void> => {
  try {
    await DB.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export const DB = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`, {
  host: `${process.env.DB_HOST}`,
  port: 5432,
  dialect: 'postgres',
  define: {
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  /* logging: false, */
});