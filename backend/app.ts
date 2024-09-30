import express from "express";
import bodyParser from "body-parser";
import { ArticleController } from "./src/interfaces/controllers/ArticleController";

const app = express();
app.use(bodyParser.json());

app.post("/articles", ArticleController.create);
app.get("/articles", ArticleController.getAll);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
