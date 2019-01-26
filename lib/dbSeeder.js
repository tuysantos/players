// Module dependencies
const   mongoose = require('mongoose'),
        Player = require('../models/player'),
        User = require('../models/user'),
        dbConfig = require('./configLoader').databaseConfig
        connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
        connection = null;

class DBSeeder {
    init() {
        this.cleanUpDatabase();
        mongoose.connection.db.listCollections([{name: 'players'}, {name: 'users'}])
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    }
                });
    } 

    btoa(str) {
        if (Buffer.byteLength(str) !== str.length)
          throw new Error('bad string!');
        return Buffer(str, 'binary').toString('base64');
      }

    cleanUpDatabase(){
        console.log('Dropping tables...');
        this.dropTables(['players', 'users'])
        console.log('Dropping completed ok');
    }

    dropTables(tables){
        for(var i=0; i< tables.length; i++){
            mongoose.connection.db.collection(tables[i]).drop(function(err, delOK){
                if (err) {
                    //console.log("error dropping table " + tables[i]);
                    throw err;
                }
                //if (delOK) console.log("table " + tables[i] + " deleted");
            });
        }
    }

    seed() {
        console.log('Seeding data....');

        //Players
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
            "Ivan,Arnatovic,CM,AUS",
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

        //user
        var users = [
            {userName: 'admin', userPassword: 'test123', securityToken: this.btoa('admin:test123')}
        ]

        User.remove({});

        for(var x=0; x< users.length; x++){
            var user = new User({userName: users[x].userName, userPassword: users[x].userPassword, securityToken: users[x].securityToken});
            user.save();
        }
        
        console.log('Seed completed successfuly');
    }
}

module.exports = new DBSeeder();
