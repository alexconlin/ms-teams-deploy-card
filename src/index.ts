import { setFailed, getInput, info } from "@actions/core";
import { formatAndNotify } from "./utils";

export function run() {
  try {
    const showCardOnStart = getInput(`show-on-start`).toLowerCase() == "true";
    if (showCardOnStart) {
      formatAndNotify("start");
    } else {
      info("Configured to not show card upon job start.");
    }
  } catch (error) {
    if (error instanceof Error) {
      setFailed(error.message);
    }
  }
}

if (!process.env.JEST_WORKER_ID) {
  run();
}

