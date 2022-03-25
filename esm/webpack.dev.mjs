import { merge } from "webpack-merge";

import common from "./webpack.common.mjs";
import dev from "../webpack.dev.mjs";

export default merge(common, dev);
