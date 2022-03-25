import { merge } from "webpack-merge";

import common from "./webpack.common.mjs";
import prod from "../webpack.prod.mjs";

export default merge(common, prod);
