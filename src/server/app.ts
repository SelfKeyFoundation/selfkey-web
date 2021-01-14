import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import ejs from "express-ejs-layouts";

const app = express();

app.set("app-name", "sselfkey-web");
app.set("port", process.env.PORT || 3000);
app.set("root", __dirname);
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.set("env", process.env.NODE_ENV);

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);
// app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(ejs);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout", "application");

// CORS Headers
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }
);

app.locals.rmWhitespace = true;
app.locals.env = app.settings.env;
app.locals.lang = "en";

app.use((
  error: Error,
  req: express.Request,
  res: express.Response /*, next: express.NextFunction */
) => {
  console.error(error.stack);
  res.status(500).render("error_500", { layout: "application" });
});

export default app;
