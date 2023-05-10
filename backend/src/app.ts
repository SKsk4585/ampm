import express from "express";
import routeNotFound from "./3-midllware/routeNotFound";
import catchAll from "./3-midllware/catchAll";
import appConfig from "./2-utils/appconfig";

import cors from "cors";
import ampmControllers from "./6-controllers/ampmControllers";




const server = express()
server.use(cors())
server.use(express.json())
server.use("/api",ampmControllers,)
server.use("*",routeNotFound)
server.use(catchAll)
server.listen(appConfig.port,(()=>console.log(`listen on port ${appConfig.port}`)))
