import express from "express";
const app = express();
import cors from "cors";
import {dragonballRouter as dragonballRoutes} from "./routes/dragonballRoutes";
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/dragonball", dragonballRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
