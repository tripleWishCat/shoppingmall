import { Sequelize, DataTypes } from 'sequelize'
import sequelize from './db'

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    // unique: true,
    primaryKey: true,
    autoIncrement: true,
  },
  pwd: {
    type: DataTypes.STRING(2000)
  },
  name: {
    type: DataTypes.STRING(200)
  },
  postNum: {
    type: DataTypes.STRING(200)
  },
  addrB: {
    type: DataTypes.STRING(1000)
  },
  addrD: {
    type: DataTypes.STRING(1000)
  },
  phoneNum: {
    type: DataTypes.STRING(11)
  },
  hPhoneNum: {
    type: DataTypes.STRING(11)
  },
  email: {
    type: DataTypes.STRING(200)
  },
  birthYmd: {
    type: DataTypes.STRING(10)
  },
  group: {
    type: DataTypes.STRING(10)
  },
  humanYn: {
    type: DataTypes.STRING(1)
  },
  deleteYn: {
    type: DataTypes.STRING(1)
  },
  // reg_date: {
  //   type: DataTypes.DATE
  // },
  regId: {
    type: DataTypes.STRING(20)
  },
  // chg_date: {
  //   type: DataTypes.DATE
  // },
  chgId: {
    type: DataTypes.STRING(20)
  },
  recId: {
    type: DataTypes.STRING(20)
  },
  grade: {
    type: DataTypes.STRING(20)
  },
  point: {
    type: DataTypes.STRING(200)
  }
})

// createdAt과 updatedAt을 제공함
// await Member.sync({ alter: true })
