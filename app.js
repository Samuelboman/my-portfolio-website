import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import projectRoutes from "./routes/project.js";
import contactRoutes from "./routes/contact.js";
import aboutRoutes from "./routes/about.js";
import homeRoutes from "./routes/home.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public')));
app.set('views', join(__dirname, 'views'));

app.use("/", homeRoutes);
app.use("/about", aboutRoutes);
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404-Page" });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;