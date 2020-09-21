const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StatusSchema = new Schema({
    slug: {
        type: String,
        required:true,
        allowNull: false
    },
    name: {
        type: String,
        required:true,
        allowNull: false
    }
});
module.exports = mongoose.model('Status',StatusSchema)


