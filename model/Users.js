const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    displayName: {
        type: String,
        required : true,
        allowNull: false
    },
    emailAddress: {
        type: String,
        required : true,
        allowNull: false
    },
    password: {
        type: String,
        required : true,
        allowNull: false
    },
    userRole: {
        type : Schema.Types.ObjectId,
        ref : 'usersRoles'
    }
},{timestamps:true})




module.exports = mongoose.model('Users',usersSchema)









