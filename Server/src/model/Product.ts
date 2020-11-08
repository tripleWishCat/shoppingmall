import { DataTypes } from 'sequelize'
import sequelize from './db'

// sequelize가 자체적으로 createdAt과 updatedAt을 제공함

const Product_M = sequelize.define('PRODUCT_M', {
  PROD_ID: {
    type: DataTypes.INTEGER({scale:10}),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  TITLE: {
    type: DataTypes.STRING(200)
  },
  SUB_TITLE: {
    type: DataTypes.STRING(200)
  },
  TUMB_IMG: {
    type: DataTypes.STRING(5000)
  },
  PRICE: {
    type: DataTypes.STRING(100)
  },
  SALE_YN: {
    type: DataTypes.STRING(1)
  },
  S_PRICE: {
    type: DataTypes.STRING(100)
  },
  S_RATE: {
    type: DataTypes.STRING(3)
  },
  NOTICE: {
    type: DataTypes.STRING(4)
  },
  CATEGORY: {
    type: DataTypes.STRING(4)
  },
  RATE: {
    type: DataTypes.STRING(10)
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

const Product_D = sequelize.define('PRODUCT_D', {
    PROD_ID: {
      type: DataTypes.INTEGER({scale:10}),
      allowNull: false,
      primaryKey: true
    },
    P_POINT: {
      type: DataTypes.STRING(100)
    },
    DELI_LOC: {
      type: DataTypes.STRING(50)
    },
    DELI_WAY: {
      type: DataTypes.STRING(50)
    },
    DELI_FEE: {
      type: DataTypes.STRING(100)
    },
    DELI_FREE_AMT: {
      type: DataTypes.STRING(100)
    },
    STOCK: {
      type: DataTypes.STRING(100)
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

  const Product_D_IMG = sequelize.define('PRODUCT_D_IMG', {
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

  const PRODUCT_RLT = sequelize.define('PRODUCT_RLT', {
    PROD_ID1: {
      type: DataTypes.INTEGER({scale:10}),
      allowNull: false,
      primaryKey: true
    },
    PROD_ID2: {
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

export {Product_M, PRODUCT_RLT, Product_D, Product_D_IMG};
