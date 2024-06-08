const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy for the REST API server
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3060',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove base path
  },
}));

// Proxy for the web server
app.use('/', createProxyMiddleware({
  target: 'http://localhost:5173',
  changeOrigin: true,
  pathRewrite: {
    '^/': '', // remove base path
  },
}));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Reverse proxy server is running on port ${PORT}`);
});