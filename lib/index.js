const path = require("path");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: ".env" });

const app = express();


app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    PORT,
    app.get("env")
  );
  console.log("Press CTRL-C to stop\n");
});
