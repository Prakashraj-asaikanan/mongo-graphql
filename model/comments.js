const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: {
        type: String,
        required: true,
        allowNull: false
    },
    userId: {
        type : Schema.Types.ObjectId,
        ref : 'Users'
    },
    ticketId: {
        type : Schema.Types.ObjectId,
        ref : 'Tickets'
    }
},{timestamps: true});


module.exports = mongoose.model('Comment',CommentSchema)

