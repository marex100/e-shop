const express = require ('express');
const path=require('path');
const port = process.env.PORT || 4260;

const app  = express();

const destinationDir= path.join(__dirname, '../dist');


//hosting from this folder
app.use(express.static(destinationDir));
console.log('Express hosting from ${destinationDir}');

// serving index.html
app.get('*', (req,res )=>{
    res.sendfile(path.join(destinationDir, 'index.html'));
});

console.log('Serving index.html');


//initializa app and listen to port
app.listen(port, ()=>console.log('server is running from port '+ port));