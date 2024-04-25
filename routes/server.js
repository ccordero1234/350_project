const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const staticRoute = require("./static")
const firebaseRoute = require("./firebase")
const rootRoute = require("./root")
const templateRoute = require("./template")

app.use("/static", staticRoute);
app.use("/firebase", firebaseRoute);
app.use("/", rootRoute);
app.use("/templates", templateRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
