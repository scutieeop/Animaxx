const express = require('express');
const path = require('path');
const router = express.Router();

class Router {
  constructor(animaxEngine) {
    this.router = express.Router();
    this.engine = animaxEngine;
    this.setupRoutes();
  }

  // Temel rotaları ayarla
  setupRoutes() {
    // Ana sayfa
    this.router.get('/', (req, res) => {
      res.redirect('/anasayfa');
    });

    // Ana sayfa içeriği
    this.router.get('/anasayfa', async (req, res) => {
      try {
        const filePath = path.join(__dirname, '..', 'views', 'pages', 'anasayfa.max');
        const rendered = await this.engine.processFile(filePath, {
          sayfa: {
            baslik: 'AniMax - Ana Sayfa',
            aciklama: 'Node.js Web Motoru'
          }
        });
        res.send(rendered);
      } catch (error) {
        res.status(500).send(this.renderError(error));
      }
    });

    // Hata sayfası
    this.router.get('/hata', (req, res) => {
      const error = req.query.mesaj || 'Bilinmeyen hata';
      res.send(this.renderError(error));
    });

    // 404 - Sayfa bulunamadı
    this.router.use((req, res) => {
      res.status(404).send(this.renderError('Sayfa bulunamadı', 404));
    });
  }

  // Yeni rota ekle
  addRoute(path, handler) {
    this.router.get(path, async (req, res) => {
      try {
        const result = await handler(req, res, this.engine);
        res.send(result);
      } catch (error) {
        res.status(500).send(this.renderError(error));
      }
    });
  }

  // Hata sayfası oluştur
  renderError(error, code = 500) {
    return `
            <!DOCTYPE html>
            <html lang="tr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hata ${code}</title>
                <style>
                    body {
                        font-family: 'Segoe UI', sans-serif;
                        margin: 0;
                        padding: 20px;
                        background: #f0f2f5;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                    }
                    .error-container {
                        background: white;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        max-width: 600px;
                        width: 100%;
                    }
                    .error-code {
                        font-size: 72px;
                        color: #e74c3c;
                        margin: 0;
                        text-align: center;
                    }
                    .error-message {
                        font-size: 18px;
                        color: #2c3e50;
                        margin: 20px 0;
                        text-align: center;
                    }
                    .error-stack {
                        background: #f8f9fa;
                        padding: 15px;
                        border-radius: 5px;
                        font-family: monospace;
                        white-space: pre-wrap;
                        margin-top: 20px;
                        font-size: 14px;
                        color: #e74c3c;
                    }
                    .back-button {
                        display: block;
                        text-align: center;
                        margin-top: 20px;
                        color: #3498db;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>
                <div class="error-container">
                    <h1 class="error-code">${code}</h1>
                    <div class="error-message">${error.message || error}</div>
                    ${error.stack ? `<div class="error-stack">${error.stack}</div>` : ''}
                    <a href="/anasayfa" class="back-button">Ana Sayfaya Dön</a>
                </div>
            </body>
            </html>
        `;
  }

  // Router'ı döndür
  getRouter() {
    return this.router;
  }
}

module.exports = Router; 