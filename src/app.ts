import express from "express";
import { mongo, apolloServer } from "config";
import routes from "routes";

const app = express();

app.use(mongo.middleware());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apolloServer.getMiddleware());

app.use(routes);

export default app;
