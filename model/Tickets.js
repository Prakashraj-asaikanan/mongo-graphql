const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    subject: {
        type: String,
        required: true,
        allowNull: false
    },
    description: {
        type: String,
        required: true,
        allowNull: false
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    ticketpriority: {
        type : Schema.Types.ObjectId,
        ref : 'Priority'
    },
    ticketStatus: {
        type : Schema.Types.ObjectId,
        ref : 'Status'
    },
    assignee: {
        type : Schema.Types.ObjectId,
        ref : 'Users'
        
    },
}, { timestamps: true });


module.exports = mongoose.model('Tickets',TicketSchema)





