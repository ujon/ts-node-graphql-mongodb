import { schemaComposer } from "graphql-compose";

import user from "./user";

schemaComposer.merge(user);

export default schemaComposer.buildSchema();
