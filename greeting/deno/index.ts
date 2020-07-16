import capitalize from "../../pkg/deno/capitalize/v1.ts";

function greeting(name: string): void {
  console.log(`Hello ${capitalize(name)}`);
}

greeting("deno");
