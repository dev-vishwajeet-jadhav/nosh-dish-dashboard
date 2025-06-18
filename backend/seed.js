// Script to insert sample dishes

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Dish = require("./models/Dish");

dotenv.config();

const organizedSampleDishes = {
  "dish001": {
    "dishId": "dish001",
    "dishName": "Paneer Butter Masala",
    "imageUrl": "https://images.unsplash.com/photo-1594917537330-d3a958e8b3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish002": {
    "dishId": "dish002",
    "dishName": "Chicken Biryani",
    "imageUrl": "https://images.unsplash.com/photo-1631387693633-87515f91f7c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish003": {
    "dishId": "dish003",
    "dishName": "Masala Dosa",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish004": {
    "dishId": "dish004",
    "dishName": "Rajma Chawal",
    "imageUrl": "https://images.unsplash.com/photo-1650303889601-526431e78c89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish005": {
    "dishId": "dish005",
    "dishName": "Butter Naan",
    "imageUrl": "https://images.unsplash.com/photo-1605330310705-d1f0d3b3c3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish006": {
    "dishId": "dish006",
    "dishName": "Chole Bhature",
    "imageUrl": "https://images.unsplash.com/photo-1605330310705-d1f0d3b3c3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish007": {
    "dishId": "dish007",
    "dishName": "Pav Bhaji",
    "imageUrl": "https://images.unsplash.com/photo-1626243883015-0b0b0b0b0b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish008": {
    "dishId": "dish008",
    "dishName": "Hyderabadi Biryani",
    "imageUrl": "https://images.unsplash.com/photo-1631387693633-87515f91f7c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish009": {
    "dishId": "dish009",
    "dishName": "Idli Sambar",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish010": {
    "dishId": "dish010",
    "dishName": "Vada Pav",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish011": {
    "dishId": "dish011",
    "dishName": "Palak Paneer",
    "imageUrl": "https://images.unsplash.com/photo-1594917537330-d3a958e8b3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish012": {
    "dishId": "dish012",
    "dishName": "Tandoori Chicken",
    "imageUrl": "https://images.unsplash.com/photo-1626243883015-0b0b0b0b0b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish013": {
    "dishId": "dish013",
    "dishName": "Kadhai Paneer",
    "imageUrl": "https://images.unsplash.com/photo-1594917537330-d3a958e8b3b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish014": {
    "dishId": "dish014",
    "dishName": "Samosa",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish015": {
    "dishId": "dish015",
    "dishName": "Pani Puri",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish016": {
    "dishId": "dish016",
    "dishName": "Dhokla",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish017": {
    "dishId": "dish017",
    "dishName": "Poha",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish018": {
    "dishId": "dish018",
    "dishName": "Dal Makhani",
    "imageUrl": "https://images.unsplash.com/photo-1605330310705-d1f0d3b3c3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish019": {
    "dishId": "dish019",
    "dishName": "Upma",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish020": {
    "dishId": "dish020",
    "dishName": "Rasgulla",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish021": {
    "dishId": "dish021",
    "dishName": "Gulab Jamun",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish022": {
    "dishId": "dish022",
    "dishName": "Jalebi",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  },
  "dish023": {
    "dishId": "dish023",
    "dishName": "Daal Tadka",
    "imageUrl": "https://images.unsplash.com/photo-1605330310705-d1f0d3b3c3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish024": {
    "dishId": "dish024",
    "dishName": "Aloo Paratha",
    "imageUrl": "https://images.unsplash.com/photo-1605330310705-d1f0d3b3c3c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": true
  },
  "dish025": {
    "dishId": "dish025",
    "dishName": "Fish Curry",
    "imageUrl": "https://images.unsplash.com/photo-1626359059530-5881a8b5b7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    "isPublished": false
  }
};


const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Dish.deleteMany(); // Clear previous data
    await Dish.insertMany(sampleDishes);
    console.log("Sample dishes inserted");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error seeding database:", err);
  }
};

seedDB();
