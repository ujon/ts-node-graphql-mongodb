import { ApolloServer } from "apollo-server-express";
import schema from "gql/schema";

const apollo = (): ApolloServer => {
  return new ApolloServer({
    schema: schema,
    context: ({ req }) => {
      console.log(req.baseUrl);
    },
  });
};

export const apolloServer = apollo();
