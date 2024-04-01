const { Category } = require("../model/category");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    return res.status(401).json({ msg: "No categories found" });
  }
  res.json(categoryList);
});

router.get("/", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(401).json({ msg: "No categories found" });
  }
  res.status(200).send(category); 
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
    icon: req.body.icon,
    color: req.body.color,
  });

  category = await category.save();

  if (!category) return res.status(400).send("Invalid category");

  res.send(category);
});

router.put("/:id",async (req,res)=>{
const category =await Category.findByIdAndUpdate(req.params.id,{
  name : req.body.name || null,
  icon : req.body.icon || null,
  color: req.body.color || null ,

},{new :true});
if (!category) return res.status(400).send("Invalid category");

res.send(category);
});

router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (category) {
      res.status(200).json({ message: "Deleted the category" });
    } else {
      res.status(404).send("The category was not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
