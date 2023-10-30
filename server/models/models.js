const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CarModel = sequelize.define('car', {
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    people: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    removedAt: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


const CarImageModel = sequelize.define("car_image", {
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    src: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const TransportationModel = sequelize.define("transportation", {
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    startLocation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endLocation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentWeight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    additionWeight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currentPeople: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    additionPeople: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

CarModel.hasMany(CarImageModel, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE',
});

CarImageModel.belongsTo(CarModel, {
    foreignKey: 'car_id',
});

CarModel.hasMany(TransportationModel, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
})

TransportationModel.belongsTo(CarModel, {
    foreignKey: 'car_id',
});

module.exports = {CarImageModel, CarModel, TransportationModel};