const mongoose = require('mongoose')

const mongoUri = process.env.MONGO_URI

const connectDatabase = async() => {
    try {
        await mongoose.connect(mongoUri)
        console.log('Base de Datos Conectada')
    } catch(error) {
        console.log(error)
    }
}

module.exports = connectDatabase;
