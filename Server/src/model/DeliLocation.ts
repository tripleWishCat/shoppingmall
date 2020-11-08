import { DataTypes } from 'sequelize'
import sequelize from './db'

// sequelize가 자체적으로 createdAt과 updatedAt을 제공함
const DeliLocation = sequelize.define('DELI_LOCATION', {
  deli_loc_id : {
    type: DataTypes.INTEGER({scale:10}),
    autoIncrement: true,
    primaryKey: true
  },
  deli_loc_nm : {
    type: DataTypes.STRING(20)
  },
  rec_nm : {
    type: DataTypes.STRING(1000)
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
  phone: {
    type: DataTypes.STRING(11)
  },
  m_phone: {
    type: DataTypes.STRING(11)
  },
  deli_message: {
    type: DataTypes.STRING(1000)
  },
  reg_date: {
    type: DataTypes.DATE
  },
  chg_date: {
    type: DataTypes.DATE
  },
  user_id: {
    type: DataTypes.STRING(20)
  },
  base_yn: {
    type: DataTypes.BOOLEAN
  }
})

sequelize.sync({ alter: true })

export default DeliLocation