import { Sequelize } from "sequelize";
import db  from '../config/database.js';
const { DataTypes } = Sequelize;

const Product = db.define('produits', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
});


export default Product;