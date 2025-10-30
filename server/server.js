import app from "./express.js";
import config from '../config/config.js';
import mongoose from 'mongoose';
import assetRouter from "./routers/assets_router.js";

mongoose.Promise = global.Promise; 
mongoose.connect(config.mongoUri); 

mongoose.connection.on("connected", () => {
    console.log(`MongoDB successfully connected to ${config.mongoUri}.`);
}); 

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}.`);
}); 

app.use("/src", assetRouter);
app.listen(3000);
console.log("Server running at http://localhost:3000/");

export default app; 