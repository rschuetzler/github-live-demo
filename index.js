const express = require('express');

// index.js - basic Express.js homepage

const app = express();
const PORT = process.env.PORT || 3000;

// Serve a simple homepage
app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Home - Express</title>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <style>
      body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial; margin: 2rem; }
      header { margin-bottom: 1.5rem; }
      a.button { display: inline-block; padding: .5rem .75rem; background:#0366d6; color:#fff; border-radius:6px; text-decoration:none; }
    </style>
  </head>
  <body>
    <header>
      <p>A beautiful page served by IS 404, the best class in the core</p>
      <a class="button" href="/about">About</a>
    </header>

    <main>
      <section>
        <h2>Quick start</h2>
        <p>Run the server with <code>node index.js</code> and visit <code>http://localhost:${PORT}</code>.</p>
      </section>
    </main>
  </body>
</html>`);
});

// Optional example route
app.get('/about', (req, res) => {
  res.send('<h1>About</h1><p>This is a basic Express homepage.</p>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
