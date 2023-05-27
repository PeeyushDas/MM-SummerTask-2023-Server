const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Articll = require("./models/articlemodel");
const trends = require("./models/trendingmodel");

app.use(express.json());

app.post("/api/article", async (req, res) => {
  try {
    const articll = await Articll.create(req.body);
    res.status(200).json(articll);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/article/all", async (req, res) => {
  try {
    const articles = await Articll.find({});
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/article/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articll.findById({ id });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/article/trending", async (req, res) => {
  try {
    const trendings = await trends.find({});
    res.status(200).json(trendings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/article/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articll.findByIdAndUpdate(id, req.body);
    if (!article) {
      return res.status(404).json({ message: "Article not found " });
    }
    const updatedArticle = await Articll.findById(id);
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/article/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articll.findByIdAndDelete(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found " });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/article/:id/like", async (req, res) => {});

app.post("/api/article/:id/like", async (req, res) => {});

mongoose
  .connect(
    "mongodb+srv://Peeyushdas:mmserverpassword@cluster0.spweagf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MONGOserver");
    app.listen(2000, () => {
      console.log("connected to server at 2000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
