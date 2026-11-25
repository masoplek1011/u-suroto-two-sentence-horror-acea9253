import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Two-sentence horror: a nursery kept ready for a baby who was never there.
// The second sentence reframes the first: the care was real, the child was not,
// and something has started taking what is made for it.
const STORY =
  "I finished knitting the last tiny sock tonight, folded it beside the others in the drawer, and left the nursery lamp burning low, the way I always do. " +
  "There has never been a baby in this house, and the sock I finished yesterday is gone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
