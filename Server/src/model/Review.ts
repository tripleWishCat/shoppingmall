import { DataTypes } from 'sequelize'
import sequelize from './db'

const Review = sequelize.define('REVIEW', {
  re_id : {
    type: DataTypes.INTEGER({scale:10}),
    autoIncrement: true,
    primaryKey: true
  },
  prod_id: {
    type: DataTypes.INTEGER({scale:10})
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
  user_id: {
    type: DataTypes.STRING(20)
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

const Comment = sequelize.define('COMMENT', {
  co_id : {
    type: DataTypes.INTEGER({scale:10}),
    autoIncrement: true,
    primaryKey: true
  },
  re_id : {
    type: DataTypes.INTEGER({scale:10})
  },
  comment: {
    type: DataTypes.INTEGER({scale:10})
  },
  delete_yn: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  user_id: {
    type: DataTypes.STRING(20)
  },
  reg_date: {
    type: DataTypes.DATE
  },
  chg_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
})

const ReviewLike = sequelize.define('REVIEWLIKE', {
  user_id: {
    type: DataTypes.STRING(20),
    primaryKey: true
  },
  re_id : {
    type: DataTypes.INTEGER({scale:10}),
    primaryKey: true
  },
  delete_yn: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  reg_date: {
    type: DataTypes.DATE
  },
  chg_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
})

sequelize.sync({ alter: true })

export { Review, Comment, ReviewLike }