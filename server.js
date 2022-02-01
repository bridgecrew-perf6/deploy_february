const express = require("express");
const cors = require("cors")


const app = express();
const port = 8000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())


const routeFile = "pet.routes" //change the routeFile for each project

require("./server/config/config");
require(`./server/routes/${routeFile}`)(app)

app.listen(port, () => console.log(`Listening on port: ${port}`))