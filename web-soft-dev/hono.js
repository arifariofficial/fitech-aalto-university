import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", (c) => {
    let name = c.req.query("name") ?? "Linus";
    return c.text(
        `Once upon a time, there was a young kid called ${name}. ${name} was happy.`
    );
});

Deno.serve(app.fetch);
