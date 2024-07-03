const mongoose = require("mongoose");

const connectDb = async (url) => {
    await mongoose.connect(url).then(() => console.log('connected'))
}

module.exports = connectDb