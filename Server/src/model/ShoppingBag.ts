import { DataTypes } from 'sequelize'
import sequelize from './db'

const SHOPPINGBAG = sequelize.define('SHOPPING_BAG', {
  USER_ID: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  PROD_ID: {
    type: DataTypes.INTEGER({scale:10}),
    allowNull: false,
    primaryKey: true
  },
  AMOUNT: {
    type: DataTypes.INTEGER({scale:10}),
    defaultValue: 0
  },
  REG_DATE: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  REG_ID: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1'
  },
  CHG_DATE: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  CHG_ID: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1'
  },
}, {
    createdAt: 'REG_DATE',
    updatedAt: 'CHG_DATE'
})

sequelize.sync({ alter: true })

export { SHOPPINGBAG }