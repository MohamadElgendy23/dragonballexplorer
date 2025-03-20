const express = require("express");
const app = express();
const cors = require("cors");
const dragonballRoutes = require("./routes/dragonballRoutes")
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/dragonball", dragonballRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
