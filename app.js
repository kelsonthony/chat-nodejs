/* importar as configurações do servidor */
var app = require('./config/server');

/*parametrizar a porta correta para receber requisições */
app.listen(80, function(){
    console.log("Servidor Online na porta 80, happy hacking!");
});