import { DataTypes } from 'sequelize'
import sequelize from './db'

const SHOPPINGBAG = sequelize.define('SHOPPING_BAG', {
    user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true
      },
      PROD_ID: {
        type: DataTypes.INTEGER({scale:10}),
        allowNull: false,
        primaryKey: true,
      },
  img: {
    type: DataTypes.STRING(5000)
  },
  content: {
    type: DataTypes.STRING(3000)
  },
  hits: {
    type: DataTypes.INTEGER({scale:10}),
    defaultValue: 0
  },
  rate: {
    type: DataTypes.DOUBLE({length:2, decimals:2}),
    defaultValue: 0
  },
  share: {
    type: DataTypes.BOOLEAN,
    defaultValue:true
  },
  delete_yn: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
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