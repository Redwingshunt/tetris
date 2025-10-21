// // scripts/create.js
// const fs = require('fs').promises;
// const path = require('path');

// const argv = process.argv.slice(2);
// const projectName = argv[0] || '.'; // `.` means current folder
// const outDir = projectName === '.' ? process.cwd() : path.join(process.cwd(), projectName);

// const htmlTemplate = (title = 'My App') => `<!doctype html>
// <html lang="en">
// <head>
//   <meta charset="utf-8"/>
//   <meta name="viewport" content="width=device-width,initial-scale=1"/>
//   <title>${title}</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <div id="app">
//     <h1>${title}</h1>
//     <p>Hello — your app is ready.</p>
//   </div>
//   <script src="app.js"></script>
// </body>
// </html>
// `;

// const cssTemplate = `/* style.css - starter */
// * { box-sizing: border-box; }
// body { font-family: system-ui, sans-serif; margin: 0; padding: 20px; }
// #app { max-width: 900px; margin: 0 auto; }
// `;

// const jsTemplate = `// app.js - starter
// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.getElementById('app');
//   console.log('App loaded', el);
// });
// `;

// async function ensureDir(dir) {
//     try {
//         await fs.mkdir(dir, { recursive: true });
//     } catch (err) {
//         console.error('Failed to create directory', dir, err);
//         process.exit(1);
//     }
// }

// async function writeIfNotExists(filePath, content) {
//     try {
//         await fs.access(filePath);
//         console.log('Skipped (exists):', path.relative(process.cwd(), filePath));
//     } catch {
//         await fs.writeFile(filePath, content, 'utf8');
//         console.log('Created:', path.relative(process.cwd(), filePath));
//     }
// }

// (async () => {
//     await ensureDir(outDir);
//     await writeIfNotExists(path.join(outDir, 'index.html'), htmlTemplate(projectName === '.' ? 'My App' : projectName));
//     await writeIfNotExists(path.join(outDir, 'style.css'), cssTemplate);
//     await writeIfNotExists(path.join(outDir, 'app.js'), jsTemplate);

//     // optional README
//     const readme = `# ${projectName === '.' ? 'My App' : projectName}\n\nScaffolded with js-starter.\n`;
//     await writeIfNotExists(path.join(outDir, 'README.md'), readme);

//     console.log('\nDone. Next steps:');
//     if (projectName === '.') {
//         console.log('  open the current folder in your editor and start coding.');
//     } else {
//         console.log(`  cd ${projectName} && code .  # open in VS Code (if installed)`);
//     }
// })();
