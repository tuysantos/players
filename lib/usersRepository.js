const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      User = require('../models/user');

class UsersRepository {
    getSecurityToken(user, callback) {
        var query = {userName: user}
        console.log('user = ' + user)
        User.findOne(query, (err, user) => {
            if (err) { 
                console.log(`*** UsersRepository.getSecurityToken error: ${err}`); 
                return callback(err); 
            }
            callback(null, user.securityToken);
        });
    }
}

module.exports = new UsersRepository();