
const express = require('express'),
exphbs = require('express-handlebars'),
hbsHelpers = require('handlebars-helpers'),
hbsLayouts = require('handlebars-layout'),
bodyParser = require('body-parser'),
session = require('express-session'),
errorhandler = require('errorhandler'),
csfr = reuire('csurf'),
morgan = reuire('morgan'),
favicon = require('serve-favicon'),
router = require('./routes/router'),
database = require('./lib/database'),
seeder = require('./lib/dbseeder'),
app = express(),
port = 3000;

class Server {
    constructor(){
        this.initViewEngine();
        this.initDbSeeder();
        this.initRoutes();
        this.start();
    }

    start() {
        app.listen(port, (err) => {
            console.log('[%s] listening on http://localhost:%d', process.env.NODE_ENV, port)
        });
    }

    initViewEngine() {
        const hbs = exphbs.create({
            extname: '.hbs',
            defaultLayout: 'master'
        });
        app.engine('hbs', hbs.engine);
        app.set('view engine', 'hbs');
        hbsLayouts.register(hbs.handlebars, {});
    }

    initDbSeeder() {
        database.open(function(){
            if(process.env.NODE_ENV === 'development'){
                seeder.init();
            }
        })
    }

    initRoutes(){
        router.load(app, './controllers');

        //redirect all othersto the index (HTML5 history)
        app.all('/*', function(req, res){
            res.sendFile(__dirname + '/public/index.html');
        })
    }
}
