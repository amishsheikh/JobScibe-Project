require("dotenv").config();
const app = require("./src/app");
const connecttodb = require("./src/DB/db");

connecttodb();

// This code reads the room number from the hotel (Render)
const port = process.env.PORT || 3000;

// This code goes to that room
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
