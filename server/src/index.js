const { ApolloServer, MockList } = require("apollo-server");

const typeDefs = require("./schema");
const mocks = {
  Query: () => ({
    tracksForHome: () => new MockList([6, 9]),
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => ({
      name: "Grumpy Cat",
      proto:
        "https://info.umkc.edu/unews/wp-content/uploads/2016/04/janet_mock.jpg.size_.xxlarge.promo_.jpg",
    }),
    thumbnail: () =>
      "https://media.gettyimages.com/photos/cat-giving-you-a-disdainful-look-picture-id1227403521?s=2048x2048",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
  playground: {
    endpoint: "/graphql",
  },
});

const PORT = 6969;
server.listen(PORT).then(() => {
  console.log(`
    Server is running!
    Listening on port ${PORT}
    Query at https://localhost:6969/
  `);
});
