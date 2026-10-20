// 1. Es necesario importar el módulo nativo HTTP
const http = require('http');

// 2. Definición del servidor con tu enrutador
const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(`Petición recibida en la ruta: ${url}`);

  // Configurar la cabecera por defecto para texto plano
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  if (url === '/') {
    res.end('Hello From Node.js');
  } else if (url === '/contact') {
    res.end('The Contact Page, hola ds');
  } else if (url === '/about') {
    res.end('The About Page');
  } else {
    // Es buena práctica enviar el código de estado explícito
    res.writeHead(404);
    res.end('Not Found');
  }
});

// 3. El servidor debe escuchar en un puerto específico para recibir peticiones
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
