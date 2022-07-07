const http = require('http');
const host = 'http://localhost';
const PORT = 8000;
const stats = require('./pcRamUsage');


http.createServer((req, res) => {
    const url = req.url;

    if(url === '/stats'){
    res.end(JSON.stringify(stats, null, 2));
} else {
    res.end('<h1>Seja bem Vinda!</h1>')
}
}).listen(PORT, () => console.log(`Servidor Rodando bem ${host}:${PORT}, ${stats}`));