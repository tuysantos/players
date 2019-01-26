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

    findPlayers(criteria, skip, top, callback){
        var query = { $or: [{firstName: {$regex: '^' + this.Capitalize(criteria)}}, 
                            {lastName: {$regex: '^' + this.Capitalize(criteria)}}, 
                            {position: {$regex: '^' + this.ToUpperCase(criteria)}}, 
                            {nationality: {$regex: '^' + this.ToUpperCase(criteria)}}
                        ]};

        Player.count(query, (err, plsCount) => {
            let count = plsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Players count: ${count}`);

            Player.find(query)
                    .sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, players) => {
                        if (err) { 
                            console.log(`*** PlayersRepository.findPlayers error: ${err}`); 
                            return callback(err); 
                        }
                        callback(null, {
                            count: count,
                            players: players
                        });
                    });

        });
    }

    Capitalize(value){
        if(value){
            value = value.toLowerCase();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    }

    ToUpperCase(value){
        if(value){
            return value.toUpperCase();
        }
        return value;
    }
}

module.exports = new PlayersRepository();
