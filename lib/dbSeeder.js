// Module dependencies
const   mongoose = require('mongoose'),
        Player = require('../models/player'),
        dbConfig = require('./configLoader').databaseConfig;
        //connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
        //connection = null;

class DBSeeder {
    init() {
        mongoose.connection.db.listCollections({name: 'players'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    }
                });
    }

    seed() {
        console.log('Seeding data....');
        var playerNames = [
            "Andy,Gray,LB,ENG",
            "Paul,Lennon,RB,ENG",
            "Cristian,Perez,CM,ARG",
            "Francois,Delan,RM,FRA",
            "Nick,Cherkov,STK,RUS",
            "Adam,Lanana,STK,ENG",
            "Pedro,Santos,CB,POR",
            "Miquielini,Passotti,GK,ITA",
            "Ryan,Babel,CB,ENG",
            "Paulo,Flores,LM,MEX",
            "Ivan,SArnatovic,CM,AUS",
            "Chris,Kamara,STK,SEN",
            "Raul,Oviedo,LB,SPA",
            "Alan,McDonald,RM,IRE",
            "Hans,Muller,LM,GER",
            "Paolo,Santi,RB,ITA",
            "Lionel,Messi,STK,ARG",
            "Cristiano,Ronaldo,STK,POR",
            "Andreas,Pirlo,CM,ITA",
            "Erik,Koeman,CD,HOL",
            "Vladimir,Gusnetzov,LM,RUS",
            "Aitor,Karanka,GK,SPA",
            "Patrick,Viera,DM,FRA",
            "Alvaro,Morata,DM,SPA",
            "Larious,Klass,RM,LIT",
            "Paul,Smith,CM,ENG",
            "John,Barnes,LM,ENG"
        ];
        Player.remove({});

        for(var i=0; i< playerNames.length; i++){
            var seedData = playerNames[i].split(',');
            var player = new Player({
                'firstName': seedData[0],
                'lastName': seedData[1],
                'position': seedData[2],
                'nationality': seedData[3]
            });

            player.save();
        }
        console.log('Seed completed successfuly');
    }
}

module.exports = new DBSeeder();