#!/usr/bin/env node
require("child_process").spawn("java", ["-jar", __dirname+"/java/Goat.jar","10"]);
