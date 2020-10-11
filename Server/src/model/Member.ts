import { DataTypes } from 'sequelize'
import sequelize from './db'

// sequelize가 자체적으로 createdAt과 updatedAt을 제공함

const Member = sequelize.define('Member', {
  user_id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  pwd: {
    type: DataTypes.STRING(2000)
  },
  salt: {
    type: DataTypes.STRING(1000)
  },
  user_name: {
    type: DataTypes.STRING(200)
  },
  post_num: {
    type: DataTypes.STRING(200)
  },
  address_b: {
    type: DataTypes.STRING(1000)
  },
  address_d: {
    type: DataTypes.STRING(1000)
  },
  phone_num: {
    type: DataTypes.STRING(11)
  },
  h_phone_num: {
    type: DataTypes.STRING(11)
  },
  email: {
    type: DataTypes.STRING(200)
  },
  birth_ymd: {
    type: DataTypes.STRING(10)
  },
  group: {
    type: DataTypes.STRING(10),
    defaultValue: 'user' // 어떤 값을 줘야하나
  },
  human_yn: {
    type: DataTypes.STRING(1),
    defaultValue: 'N'
  },
  delete_yn: {
    type: DataTypes.STRING(1),
    defaultValue: 'N'
  },
  reg_date: {
    type: DataTypes.DATE
  },
  reg_id: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1'
  },
  chg_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  chg_id: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1'
  },
  rec_id: {
    type: DataTypes.STRING(20)
  },
  grade: {
    type: DataTypes.STRING(20),
    defaultValue: 'normal' // default값 뭐로하지?
  },
  point: {
    type: DataTypes.STRING(200),
    defaultValue: '0'
  }
})

sequelize.sync({ alter: true })

export default Member
