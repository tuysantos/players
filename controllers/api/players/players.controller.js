const playersRepo = require('../../../lib/playersRepository'),
      usersRepo = require('../../../lib/usersRepository')
      util = require('util'),
      jwt = require('jsonwebtoken');

var environmentToken = {
        securityToken: btoa('admin:test123')
      };


function btoa(str) {
        if (Buffer.byteLength(str) !== str.length)
          throw new Error('bad string!');
        return Buffer(str, 'binary').toString('base64');
      }

class PlayerController {

    constructor(router) {
        router.get('/', this.getPlayers.bind(this));
        router.get('/:skip/:top', this.getPlayers.bind(this));
        router.get('/:criteria/:skip/:top', this.findPlayers.bind(this));
    }

    getPlayers(req, res) {
        console.log('*** getPlayers');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

            var token = req.headers['x-access-token'];

            if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

            usersRepo.getSecurityToken('admin', (err, securityToken)=>{
                if (err) {
                    console.log('*** getSecurityToken error: ' + util.inspect(err));
                    return res.status(404).send({ auth: false, message: 'Internal error while validating token.' });
                } else {
                    console.log('*** getSecurityToken ok');
                    console.log('*** SecurityToken = ', securityToken);
                    if(token != securityToken) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

                    playersRepo.getPlayers(skip, top, (err, data) => {
                        res.setHeader('X-PlayerCount', data.count);
                        if (err) {
                            console.log('*** getPlayers error: ' + util.inspect(err));
                            res.json(null);
                        } else {
                            console.log('*** getPlayers ok');
                            res.json(data.players);
                        }
                    }); 
                }
            });

        }
    
    findPlayers(req, res) {
        console.log('*** findPlayers');
        const criteria = req.params.criteria,
                topVal = req.params.top,
                skipVal = req.params.skip,
                top = (isNaN(topVal)) ? 10 : +topVal,
                skip = (isNaN(skipVal)) ? 0 : +skipVal;
        var token = req.headers['x-access-token'];

        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

        usersRepo.getSecurityToken('admin', (err, securityToken)=>{
            if (err) {
                console.log('*** getSecurityToken error: ' + util.inspect(err));
                return res.status(404).send({ auth: false, message: 'Internal error while validating token.' });
            } else {
                console.log('*** getSecurityToken ok');
                console.log('*** SecurityToken = ', securityToken);
                if(token != securityToken) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

                playersRepo.findPlayers(criteria, skip, top, (err, data) => {
                    res.setHeader('X-PlayerCount', data.count);
                    if (err) {
                        console.log('*** findPlayers error: ' + util.inspect(err));
                        res.json(null);
                    } else {
                        console.log('*** findPlayers ok');
                        res.json(data.players);
                    }
                }); 
            }
        });
    }
}

module.exports = PlayerController;