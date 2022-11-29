const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(createProxyMiddleware({
    router: (req) => new URL(req.path.substring(1)),
    pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
    changeOrigin: true,
    logger: console
  }));

app.listen(3000, () => {
    console.log("Server is running");
});