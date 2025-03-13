import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();
const student = {
    name: "John",
    age: 20,
    filme: [
        "Avatar",
        "Matrix",
        "Interstellar",
        "Fear and Loathing in Las Vegas",
    ],
};

// serve index.html
app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("/student", async (c) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return c.json(student);
});
app.get("*", serveStatic({ root: "./static" }));

Deno.serve(app.fetch);
