const mongoose = require('mongoose');

//Configuraçao do mongoose
mongoose.Promise = global.Promise;//Ajuda a evitar erros
mongoose.connect('mongodb://localhost/codigoMongo', {
  useMongoClient: true//Ajuda a evitar erros
}).then(() => {
  console.log('Conectou ao mongo');
}).catch((erro) => {
  console.log('Erro: '+erro);
});
//Mondel de usuarios
const UsuarioSchema = mongoose.Schema({
  nome:{
    type: String,
    require: true
  },
  sobrenome:{
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  }
});

mongoose.model('usuarios', UsuarioSchema);

const newUser = mongoose.model('usuarios');

new newUser({
  nome: 'Cassio',
  sobrenome: 'Elias da Silva',
  email: 'cassio_qwe@Outlook.com',
  idade: 20
}).save().then(() => {
  console.log('usuario registrado');
}).catch((erro) => {
  console.log('erro ao registrar: '+erro);
});
