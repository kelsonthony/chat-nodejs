/** exportar o módulo do framework express */
var express = require('express');

/** importar o módulo do express-validator */
var expressValidator = require('body-parser');

/** importar o módulo body-parser */
var bodyParser = require('body-parser');

/** exportar o módulo do consign */
var consign = require('consign');

/** iniciar o objeto do express */
var app = express();

/** setar as variáveis 'view engine' e o views do express e o ejs */
app.set('view engine', 'ejs');
app.set('views', 'app/views');

/** configurar o middleware express.static */
app.use(express.static('./app/public'));

/**configurar o middleware body-parser */
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded());

/**configurar o middleware express validator */
app.use(expressValidator());

/** configurar o consign para o autoload das routes, controllers e models para o objeto app */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/** exportar o objet app */
module.exports = app;