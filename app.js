import express from "express";
import projectRoutes from "./routes/project.js";
import contactRoutes from "./routes/contact.js";
import aboutRoutes from "./routes/about.js";
import homeRoutes from "./routes/home.js";
import path from "path";
const app = express();
const port = 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', './views');

app.use("/", homeRoutes);
app.use("/about", aboutRoutes);
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404-Page" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
