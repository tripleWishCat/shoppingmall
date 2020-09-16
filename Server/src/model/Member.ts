import { DataTypes } from 'sequelize'
import sequelize from './db'

// sequelize가 자체적으로 createdAt과 updatedAt을 제공함

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.STRING(20),
    allowNull: false,
    primaryKey: true
  },
  pwd: {
    type: DataTypes.STRING(2000)
  },
  salt: {
    type: DataTypes.STRING(64)
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
    type: DataTypes.STRING(10),
    defaultValue: 'user' // 어떤 값을 줘야하나
  },
  humanYn: {
    type: DataTypes.STRING(1),
    defaultValue: 'N'
  },
  deleteYn: {
    type: DataTypes.STRING(1),
    defaultValue: 'N'
  },
  reg_date: {
    type: DataTypes.DATE,
    defaultValue: Date.now().toString()
  },
  regId: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1'
  },
  chg_date: {
    type: DataTypes.DATE,
    defaultValue: Date.now().toString()
  },
  chgId: {
    type: DataTypes.STRING(20),
    defaultValue: 'admin1'
  },
  recId: {
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
