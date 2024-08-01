import { model } from "mongoose";

import workerSchema from "./worker.model.js";

export default model("Employee", workerSchema);
