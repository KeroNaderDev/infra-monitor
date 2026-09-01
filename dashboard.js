const express = require('express');
const app = express();
app.use(express.json());
let hosts = [];
app.post('/api/monitor', (req,res)=>{
  const {host, uptime, load} = req.body;
  hosts.push({host, uptime, load, timestamp: new Date().toISOString()});
  if(hosts.length>100) hosts.shift();
  res.json({ok:true});
});
app.get('/api/hosts', (req,res)=> res.json(hosts));
app.get('/', (req,res)=> res.send(`<h1>Infra Monitor</h1><p>${hosts.length} hosts</p><pre>${JSON.stringify(hosts,null,2)}</pre>`));
app.listen(3000, ()=> console.log('Infra Monitor Dashboard on 3000'));
