import serverless from "serverless-http";
import app from "./App/app.js";

export const handler = serverless(app);
