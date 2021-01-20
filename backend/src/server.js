import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import {PORT, MONGO_URI} from "./config/keys.js";
import {ProductRouter} from "./routes/ProductRoutes.js";
import {UserRouter} from "./routes/UserRoutes.js";

const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect(MONGO_URI,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false},
    () => console.log('mongo connected')
)

app.get('/', (req, res) => res.send('Server running'))

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, 'src/uploads')));
app.use('/api', ProductRouter)
app.use('/api', UserRouter)

app.listen(PORT, () => { console.log(`server running at port:${PORT}`) })