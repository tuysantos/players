const playersRepo = require('../../../lib/playersRepository'),
      util = require('util');

class PlayerController {

    constructor(router) {
        router.get('/', this.getPlayers.bind(this));
        router.get('/:skip/:top', this.getPlayers.bind(this));
    }

    getPlayers(req, res) {
        console.log('*** getPlayers');
        const topVal = req.params.top,
              skipVal = req.params.skip,
              top = (isNaN(topVal)) ? 10 : +topVal,
              skip = (isNaN(skipVal)) ? 0 : +skipVal;

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
}

module.exports = PlayerController;