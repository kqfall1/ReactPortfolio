import authRouter from './routers/auth_router.js';
import assetRouter from "./routers/assets_router.js";
import contactRouter from './routers/contact_router.js';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import educationRouter from './routers/education_router.js';
import express from 'express';
import helmet from 'helmet';
import projectRouter from './routers/project_router.js';
import userRouter from './routers/users_router.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(compress());
app.use(helmet());
app.use("/src", assetRouter);
app.use('/api/auth', authRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/educations', educationRouter);
app.use('/api/projects', projectRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message})
    }
    else if (err) {
        res.status(400).json({"error" : err.name + ": " + err.message})
        console.log(err)
    }
})

export default app;