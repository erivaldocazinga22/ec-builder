import cors from "cors";
import express from "express";
import { router } from "./app/routers";

const server = express();
const PORT = process.env.ECBUILDER_PORT || 3000;

server.use(cors());
server.use(express.json());
server.use("/api", router);

server.use("/storage", express.static("public/uploads"));

server.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});