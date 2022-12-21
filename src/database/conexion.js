import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    "sipply",
    "root",
    "800825ers",
    {
        host:"localhost",
        dialect:"mysql"
    }
);