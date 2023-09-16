//ALem das configuracoes basicas para encurtar caminhos e atalhos não posso esquecer do 
// npm i -D tsconfig-paths
// depois alterar o ts config

// {
//     "compilerOptions": {
//       "outDir": "dist",
//       "esModuleInterop": true,
//       "module": "CommonJS",
//       "moduleResolution": "Node",
//       "baseUrl": "src",
//       "paths": {
//           "@/*": [
//               "*"
//           ]
//       }
//     },
//     "ts-node": {
//       "esm": true
//     },
//   }

// criar o arquivo nodemon.json e configurar
// {
//     "execMap":{
//         "ts": "node --require ts-node/register --require tsconfig-paths/register"
//     }
// }

//   agora as rotas ao invés de receber ../../../ irá receber @/