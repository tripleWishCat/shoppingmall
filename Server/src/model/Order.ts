import { DataTypes } from 'sequelize'
import sequelize from './db'

const Order_M = sequelize.define('ORDER_M', {
  MERCHANT_UID: {
    type: DataTypes.STRING(40),
    allowNull: false,
    primaryKey: true,
  },
  USER_ID: {
    type: DataTypes.STRING(20),
  },
  PG: {
    type: DataTypes.STRING(100),
  },
  PAY_METHOD: {
    type: DataTypes.STRING(100),
  },
  ESCROW: {
    type: DataTypes.STRING(1),
  },
  NAME: {
    type: DataTypes.STRING(1000),
  },
  AMOUNT: {
    type: DataTypes.INTEGER({scale:10}),
  },
  CUSTOM_DATA: {
    type: DataTypes.STRING(1000),
  },
  TAX_FREE: {
    type: DataTypes.INTEGER({scale:10}),
  },
  VAT: {
    type: DataTypes.INTEGER({scale:10}),
  },
  CURRENCY: {
    type: DataTypes.STRING(100),
  },
  BUYER_NAME: {
    type: DataTypes.STRING(100),
  },
  BUYER_TEL: {
    type: DataTypes.STRING(15),
  },
  BUYER_EMAIL: {
    type: DataTypes.STRING(500),
  },
  BUYER_ADDR: {
    type: DataTypes.STRING(500),
  },
  BUYER_POSTCODE: {
    type: DataTypes.STRING(20),
  },
  PAY_YN: {
    type: DataTypes.STRING(1),
  },
  ERROR: {
    type: DataTypes.STRING(2),
  },
  REG_DATE: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  REG_ID: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1'
  },
  CHG_DATE: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  CHG_ID: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1',
  },
}, {
    createdAt: 'REG_DATE',
    updatedAt: 'CHG_DATE',
});

const Order_D = sequelize.define('ORDER_D', {
    MERCHANT_UID: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true,
    },
    PROD_ID: {
      type: DataTypes.INTEGER({scale:10}),
      allowNull: false,
      primaryKey: true,
    },
    AMOUNT: {
      type: DataTypes.INTEGER({scale:10}),  
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

export { Order_M, Order_D };