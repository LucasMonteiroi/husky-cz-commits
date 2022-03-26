import "reflect-metadata";
import express from "express";

import { errorHandler } from "./middlewares/errorHandler";

const port = 3000;
const app = express();

app.use(express.json());

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}!`));
