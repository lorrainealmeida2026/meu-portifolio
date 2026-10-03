const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const root=__dirname;
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.txt':'text/plain; charset=utf-8','.xml':'application/xml'};
http.createServer((req,res)=>{
 const url=new URL(req.url,'http://localhost');
 const route=url.pathname.replace(/\/index\.html$/,'').replace(/\/+$/,'');
 let file;
 if(['','/forlex','/purple','/portal','/sobre','/moodboard'].includes(route)){
  if(route && !url.pathname.endsWith('/') && !url.pathname.endsWith('/index.html')){res.writeHead(302,{Location:route+'/'+url.search});return res.end();}
  file=route?route.slice(1)+'/index.html':'index.html';
 }
 else if(['/style.css','/app.js','/case.css','/forlex/case.css','/forlex/case.js','/purple/case.css','/purple/case.js','/portal/case.css','/portal/case.js','/robots.txt','/sitemap.xml'].includes(route))file=route.slice(1);
 else {res.writeHead(404);return res.end('404: Página não encontrada');}
 if(route==='/moodboard')res.setHeader('X-Robots-Tag','noindex, nofollow');
 fs.readFile(path.join(root,file),(err,data)=>{if(err){res.writeHead(404);return res.end('Not found');}res.setHeader('Content-Type',types[path.extname(file)]);res.end(data);});
}).listen(3000,'127.0.0.1',()=>console.log('Portfolio: http://localhost:3000'));



