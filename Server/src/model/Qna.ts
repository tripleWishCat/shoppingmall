import { DataTypes } from 'sequelize'
import sequelize from './db'

const QNA = sequelize.define('QNA', {
    QA_ID: {
        type: DataTypes.INTEGER({scale:10}),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    PROD_ID: {
        type: DataTypes.INTEGER({scale:10}),
        allowNull: false,
        primaryKey: true,
      },
    TITLE: {
        type: DataTypes.STRING(300)
    },
    SECRET_YN: {
        type: DataTypes.STRING(1)
    },
    SECRET_PW: {
        type: DataTypes.STRING(20)
    },
    CONTENT: {
        type: DataTypes.STRING(2000)
    },
    HITS: {
        type: DataTypes.INTEGER({scale:10}),
        defaultValue: 0
    },
    REPLY_YN: {
        type: DataTypes.STRING(1)
    },
    QA_ID2: {
        type: DataTypes.INTEGER({scale:10})
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

export { QNA }