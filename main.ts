/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="deno.ns" />
/// <reference lib="esnext" />

import { start } from "$fresh/server.ts";
import { $live } from "$live/mod.ts";
import manifest from "deco-sites/starting/live.gen.ts";
import decoPlugins from "deco-sites/std/plugins/mod.ts";
import partytownPlugin from "partytown/mod.ts";
import site from "./site.json" assert { type: "json" };

await start($live(manifest, site), {
  plugins: [
    ...decoPlugins(),
    partytownPlugin(),
  ],
});
