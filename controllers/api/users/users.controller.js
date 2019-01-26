const usersRepo = require('../../../lib/usersRepository'),
      util = require('util');

class UserController {
    constructor(router) {
        router.get('/:user', this.getSecurityToken.bind(this));
    }

    getSecurityToken(req, res){
        const userVal = req.params.user,
        pwdVal = req.params.pwd;
        
        if((userVal)&&(pwdVal)){
            usersRepo.getSecurityToken(userVal, (err, securityToken) => {
                if (err) {
                    console.log('*** getSecurityToken error: ' + util.inspect(err));
                    res.json(null);
                } else {
                    console.log('*** getSecurityToken ok');
                    console.log('securityToken = ', securityToken)
                    res.json(securityToken);
                }
            });
        }
        else {
            return res.status(401).send({ auth: false, message: 'You must provide a user and password' });
        }
    }
}

module.exports = UserController;