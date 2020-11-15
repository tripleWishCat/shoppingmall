import { DataTypes } from 'sequelize'
import sequelize from './db'

const Review = sequelize.define('Review', {
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
  reg_date: {
    type: DataTypes.DATE
  },
  chg_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
})

const Comment = sequelize.define('Comment', {
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

const ReviewLike = sequelize.define('ReviewLike', {
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