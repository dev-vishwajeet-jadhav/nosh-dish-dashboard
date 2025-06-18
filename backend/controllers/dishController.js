// Logioc for API routes (get and toggle)

const Dish = require("../models/Dish");

// GET all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TOGGLE isPublished
exports.toggleDishStatus = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (!dish) return res.status(404).json({ message: "Dish not found" });

    dish.isPublished = !dish.isPublished;
    await dish.save();
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
