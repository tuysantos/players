const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Player = require('../models/player');

class PlayersRepository {

    getPlayers(skip, top, callback){
        console.log('*** PlayersRepository.getPlayers');
        Player.count((err, plsCount) => {
            let count = plsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Players count: ${count}`);

            Player.find({})
                    .sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, players) => {
                        if (err) { 
                            console.log(`*** PlayersRepository.getPlayers error: ${err}`); 
                            return callback(err); 
                        }
                        callback(null, {
                            count: count,
                            players: players
                        });
                    });

        });
    }
}

module.exports = new PlayersRepository();
