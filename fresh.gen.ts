// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/joke.ts";
import * as $1 from "./routes/checklist.tsx";
import * as $2 from "./routes/developers.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/philosophy.tsx";
import * as $$0 from "./islands/ChecklistItem.tsx";
import * as $$1 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $0,
    "./routes/checklist.tsx": $1,
    "./routes/developers.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/philosophy.tsx": $4,
  },
  islands: {
    "./islands/ChecklistItem.tsx": $$0,
    "./islands/Counter.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
