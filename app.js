const express = require ('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const outsideSubtitle = 'podtytuł'
const dataFromFunctionsJS = require('./functions')
app.set ('view engine', 'hbs')
app.use('/assets', express.static(path.join(__dirname, './assets')) );
app.use ('js', express.static(path.join(__dirname, './js')));
app.get ('/', function(req, res){
    res.render('index', {
        pageTitle: "Zajęcia AFM",
        subtitle:outsideSubtitle, 
        example: dataFromFunctionsJS.sayHello2(),
    })
})

app.get ('/about', function(req, res){
    res.render('about');
})

app.listen(port, (err) => {
    if (err) {return console.log(`wyspąpił błąd' ${err.message}`); }
        return console.log (`apka działa na porcie ${port}`);
})
