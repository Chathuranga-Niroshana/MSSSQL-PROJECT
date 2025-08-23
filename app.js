import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { companyRegistryPool } from "./config/companyRegistryDb.js";
import { companyOperationPool } from "./config/companyOperationsDb.js";
import companyRouter from "./routes/company.js";
import accountRouter from "./routes/account.js"
import accountGroupRouter from "./routes/accountGroup.js"
import costCenterRouter from "./routes/costCenter.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

await companyRegistryPool();
await companyOperationPool()


app.use('/api/company', companyRouter);
app.use('/api/account', accountRouter);
app.use('/api/account_group', accountGroupRouter);
app.use('/api/cost_center', costCenterRouter);

export default app;