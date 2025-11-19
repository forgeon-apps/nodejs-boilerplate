import { Request, Response, Router } from 'express';

const route = Router();


const renderPage = (title: string, inner: string) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${title} · Forgeon Playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #000;
        color: #f5f5f5;
      }
      .shell {
        width: 100%;
        max-width: 640px;
        padding: 1.5rem;
      }
      .card {
        border: 1px solid #333;
        border-radius: 0.75rem;
        padding: 1.75rem 1.75rem 1.5rem;
        background: #050505;
      }
      h1 {
        font-size: 1.4rem;
        margin: 0 0 0.35rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .subtitle {
        font-size: 0.85rem;
        color: #b3b3b3;
        margin: 0 0 1.25rem;
      }
      .section-title {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.22em;
        color: #a3a3a3;
        margin: 1rem 0 0.5rem;
      }
      ul {
        margin: 0;
        padding-left: 1rem;
        font-size: 0.8rem;
        color: #d4d4d4;
      }
      li {
        margin-bottom: 0.3rem;
      }
      code {
        background: #111;
        border-radius: 0.25rem;
        padding: 0.12rem 0.35rem;
        font-size: 0.78rem;
        color: #f5f5f5;
      }
      a {
        color: #f5f5f5;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 3px;
      }
      a:hover {
        text-decoration-style: dotted;
      }
      .hint {
        margin-top: 1.25rem;
        font-size: 0.75rem;
        color: #a3a3a3;
      }
      .footer {
        margin-top: 1.5rem;
        font-size: 0.75rem;
        color: #8c8c8c;
        border-top: 1px solid #1f1f1f;
        padding-top: 0.75rem;
      }
      pre {
        background: #020202;
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        font-size: 0.8rem;
        overflow-x: auto;
        border: 1px solid #1f1f1f;
      }
    </style>
  </head>
  <body>
    <div class="shell">
      <div class="card">
        ${inner}
      </div>
    </div>
  </body>
</html>
`;

export default (app: Router) => {
  app.use('/playground', route);

  // Health / readiness probe
  route.get('/readyz', (_req: Request, res: Response) => {
    return res.status(200).send('ok');
  });

  // Simple HTML playground page (black & white style)
  route.get('/', (_req: Request, res: Response) => {
    return res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Forgeon Playground</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              background: #000;
              color: #f5f5f5;
            }
            .shell {
              width: 100%;
              max-width: 640px;
              padding: 1.5rem;
            }
            .card {
              border: 1px solid #333;
              border-radius: 0.75rem;
              padding: 1.75rem 1.75rem 1.5rem;
              background: #050505;
            }
            h1 {
              font-size: 1.4rem;
              margin: 0 0 0.35rem;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
            .subtitle {
              font-size: 0.85rem;
              color: #b3b3b3;
              margin: 0 0 1.25rem;
            }
            .section-title {
              font-size: 0.75rem;
              text-transform: uppercase;
              letter-spacing: 0.22em;
              color: #a3a3a3;
              margin: 1rem 0 0.5rem;
            }
            ul {
              margin: 0;
              padding-left: 1rem;
              font-size: 0.8rem;
              color: #d4d4d4;
            }
            li {
              margin-bottom: 0.3rem;
            }
            code {
              background: #111;
              border-radius: 0.25rem;
              padding: 0.12rem 0.35rem;
              font-size: 0.78rem;
              color: #f5f5f5;
            }
            a {
              color: #f5f5f5;
              text-decoration: underline;
              text-decoration-thickness: 1px;
              text-underline-offset: 3px;
            }
            a:hover {
              text-decoration-style: dotted;
            }
            .hint {
              margin-top: 1.25rem;
              font-size: 0.75rem;
              color: #a3a3a3;
            }
            .footer {
              margin-top: 1.5rem;
              font-size: 0.75rem;
              color: #8c8c8c;
              border-top: 1px solid #1f1f1f;
              padding-top: 0.75rem;
            }
          </style>
        </head>
        <body>
          <div class="shell">
            <div class="card">
              <h1>Forgeon Playground</h1>
              <p class="subtitle">
                Minimal demo endpoints to test networking, containers, and health checks.
              </p>

              <p class="section-title">Endpoints</p>
              <ul>
                <li>
                  <code><a href="/api/playground/readyz">GET /api/playground/readyz</a></code> – basic health probe
                </li>
                <li>
                  <code><a href="/api/playground/info">GET /api/playground/info</a></code> – service info
                </li>
                <li>
                  <code><a href="/api/playground/samples">GET /api/playground/samples</a></code> – sample payload
                </li>
              </ul>

              <p class="section-title">How this is used</p>
              <ul>
                <li>Verify container is running and reachable from Forgeon runtime.</li>
                <li>Test reverse proxy / ingress rules without touching real business logic.</li>
                <li>Quick smoke checks during deployment or troubleshooting.</li>
              </ul>

              <p class="footer">
                Forgeon is a modern deployment platform focused on simple DX:
                ship apps, APIs, and static sites with CI, SSL, domains, and logs
                wired in. This playground route is just a safe place to point probes
                and experiments while you wire everything up.
              </p>

              <p class="hint">
                Tip: use <code>curl /api/playground/info</code> from inside your containers
                or health checks to confirm connectivity.
              </p>
            </div>
          </div>
        </body>
      </html>
    `);
  });

  
  // Info endpoint (HTML)
  route.get('/info', (_req: Request, res: Response) => {
    const json = {
      name: 'forgeon-playground',
      status: 'online',
      version: '1.0.0',
      description:
        'Static playground routes used to test networking, health checks, and container connectivity in Forgeon deployments.',
      docs_hint: 'Hit /api/playground/samples for a static JSON-style payload.',
      links: {
        root: '/api/playground',
        readyz: '/api/playground/readyz',
        info: '/api/playground/info',
        samples: '/api/playground/samples',
      },
    };

    return res
      .status(200)
      .send(
        renderPage(
          'Info',
          `
          <h1>Playground Info</h1>
          <p class="subtitle">
            Basic metadata for the Forgeon playground service.
          </p>

          <p class="section-title">Summary</p>
          <ul>
            <li><strong>Name:</strong> forgeon-playground</li>
            <li><strong>Status:</strong> online</li>
            <li><strong>Version:</strong> 1.0.0</li>
          </ul>

          <p class="section-title">Useful links</p>
          <ul>
            <li><a href="/api/playground/readyz"><code>/api/playground/readyz</code></a> – health probe</li>
            <li><a href="/api/playground/info"><code>/api/playground/info</code></a> – this page</li>
            <li><a href="/api/playground/samples"><code>/api/playground/samples</code></a> – sample payload</li>
          </ul>

          <p class="section-title">Raw payload (for reference)</p>
          <pre>${JSON.stringify(json, null, 2)}</pre>

          <p class="footer">
            Forgeon is a modern deployment platform focused on developer experience:
            ship apps, APIs, databases, and static sites with SSL, logs, and events
            wired in. These playground endpoints are safe targets for health checks,
            smoke tests, and debugging without touching your real business logic.
          </p>
        `,
        ),
      );
  });

  // Samples endpoint (HTML)
  route.get('/samples', (_req: Request, res: Response) => {
    const samples = [
      {
        id: 1,
        title: 'Container smoke test',
        description: 'Simple response to verify HTTP routing and decoding.',
      },
      {
        id: 2,
        title: 'Forgeon playground',
        description: 'Static endpoint used for demos, health checks, and debugging.',
      },
    ];

    return res
      .status(200)
      .send(
        renderPage(
          'Samples',
          `
          <h1>Sample Payloads</h1>
          <p class="subtitle">
            Static examples you can use to test requests from your containers or clients.
          </p>

          <p class="section-title">Samples</p>
          <ul>
            ${samples
              .map(
                (s) => `
              <li>
                <strong>#${s.id} – ${s.title}</strong><br />
                <span>${s.description}</span>
              </li>
            `,
              )
              .join('')}
          </ul>

          <p class="section-title">As JSON (for curl / tooling)</p>
          <pre>${JSON.stringify(samples, null, 2)}</pre>

          <p class="hint">
            Try:<br />
            <code>curl http://localhost:3000/api/playground/samples</code><br />
            or open it directly in your browser.
          </p>
        `,
        ),
      );
  });
};
