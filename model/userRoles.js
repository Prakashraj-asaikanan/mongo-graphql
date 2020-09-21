const mongoose =  require('mongoose');

const Schema =  mongoose.Schema;

const userRolesSchema = new Schema({
    slug: {
        type: String,
        required: true,
        allowNull: false
    },
    name: {
        type: String,
        required: true,
        allowNull: false
    }

})

module.exports = mongoose.model('usersRoles',userRolesSchema)


