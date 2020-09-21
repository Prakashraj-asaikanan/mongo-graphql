const userRoles = require('../../model/userRoles');
const userModel = require('../../model/Users');
const alluserroles = () => {
    return userRoles.find().then(result => {
        return result;
    }).catch(error => {
        throw error;
    })
}
const userrolebyId = args => {
    return userRoles.findById(args).then(result => {
        return result;
    }).catch(error => {
        throw error;
    });
}
const listUsers = () => {

    return userModel.find().then(result => {

        return result.map(usersDetails => {
            return {
                _id: usersDetails._id,
                displayName: usersDetails.displayName,
                password: null,
                emailAddress: usersDetails.emailAddress,
                userRole: userrolebyId.bind(this, usersDetails.userRole),
            }
        })

    }).catch(error => {
        return error;
    })

}


module.exports = {
    Query: {
        userroles: () => {
            return alluserroles();
        },
        allusers: () => {
            return listUsers();
        }
    },
    Mutation: {
        createUserRoles: (obj, args, context, info) => {

            const userrole = new userRoles({
                slug: args.input.slug,
                name: args.input.name
            })
            return userrole
                .save()
                .then(res => {
                    return alluserroles();
                }).catch(error => {
                    throw error;
                })
        },
        updateUserRoles: (obj, args, context, info) => {
            return userRoles.findOneAndUpdate({ _id: args.input.id || "5f6452f4f614992dd7167f3f" }, { slug: args.input.slug, name: args.input.name },
                null, function (err, docs) {
                    if (err) {
                        throw err;
                    }
                    else {
                        return alluserroles();
                    }
                });
        },
        deleteUserRoles: (obj, args, context, info) => {
            return userRoles.deleteOne({ "_id": (args._id) }).then(result => {
                if (result) {
                    return alluserroles();
                }
                else {
                    throw new Error('Error in Deleting the user Role');
                }
            }).catch(error => {
                throw error;
            })
        },
        createUser: (obj, args, context, info) => {
            return userModel.findOne({
                emailAddress: args.input.emailAddress
            }).then(result => {
                if (result) {
                    throw new Error('User Already Registered');
                }
                else {
                    const users = new userModel({
                        displayName: args.input.displayName,
                        emailAddress: args.input.emailAddress,
                        password: args.input.password,
                        userRole: "5f645eef42eabc6149059785"
                    })
                    return users
                        .save()
                        .then(result => {
                            return listUsers();
                        }).catch(error => {
                            return error;
                        })
                }
            })

        },
        deleteUser: (obj, args, context, info) => {

            return userModel.findById(args._id).then(result => {
                if (!result) {
                    throw new Error('There is no User');
                }
                return userModel.deleteOne({
                    _id: result._id
                }).then(deleteResult => {
                    return listUsers();
                }).catch(error=>{
                    throw error;
                })
            })
        }
    }

}