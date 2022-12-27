// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/joke.ts";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/philosophy.tsx";
import * as $$0 from "./islands/ChecklistItem.tsx";
import * as $$1 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $0,
    "./routes/index.tsx": $1,
    "./routes/philosophy.tsx": $2,
  },
  islands: {
    "./islands/ChecklistItem.tsx": $$0,
    "./islands/Counter.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
