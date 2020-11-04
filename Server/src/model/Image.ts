import { DataTypes } from 'sequelize'
import sequelize from './db'

const IMAGE = sequelize.define('IMAGE', {
  IMG_ID: {
    type: DataTypes.INTEGER({scale:10}),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  IMG_URL: {
    type: DataTypes.STRING(4000)
  },
  DELETE_YN: {
    type: DataTypes.STRING(1),
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
});

const PRODUCT_D_IMG = sequelize.define('PRODUCT_D_IMG', {
    PROD_ID: {
      type: DataTypes.INTEGER({scale:10}),
      allowNull: false,
      primaryKey: true
    },
    IMG_ID: {
      type: DataTypes.INTEGER({scale:10}),
      allowNull: false,
      primaryKey: true
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
});

sequelize.sync({ alter: true });

export {IMAGE, PRODUCT_D_IMG};
