import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

const movies = [
    {
      id: 100,
      title: 'Avenger',
      author: 'Kate Chopin',
    },
    {
      id: 101,
      title: 'Avatar',
      author: 'James',
    },
  ];

const typeDefs = `
  type Movie {
    id: Int
    title: String
    author: String
  }

  type Query {
    movies: [Movie]
  }
`;

const resolvers = {
  Query: {
    movies: () => movies,
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url }  = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`Server listening at: ${url}`);
