import { env } from "config";
import { createServer } from "http";
import app from "app";

env.load();

const port = process.env.PORT || 3000;

const server = createServer(app);
server.listen(port, () => {
  console.log(`listening to port: ${port} `);
});
