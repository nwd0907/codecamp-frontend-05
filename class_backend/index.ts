import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Board } from "./Board.postgres";

const typeDefs = gql`
  type Board {
    number: Int
    wrtier: String
    title: String
    age: Int
  }

  input CreateBoardInput {
    writer: String!
    title: String!
    age: Int!
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput): String
    deleteBoard(number: Int!): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      // DB 와 연결
      const result = await Board.find({
        where: { wrtier: "철수", deletedAt: null },
      });
      console.log(result);

      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // delteBoard({ number: 22 });

      // DB 와 연결
      await Board.insert({
        // ...args.createBoardInput,
        wrtier: args.createBoardInput.writer,
        title: args.createBoardInput.title,
        age: args.createBoardInput.age,
      });

      return "createBoard를 요청하셨습니다!!!";
    },

    deleteBoard: async (parent: any, args: any) => {
      await Board.update(
        { number: args.number || parent.number },
        { deletedAt: new Date() }
      );
      // Board.delete({ wrtier: "철수" });

      return "삭제가 완료되었습니다!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

console.log("Hello Typescript!!!");

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5001, // 각자의 포트로 입력하기!!,
  host: "34.64.187.209",
  entities: ["./*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결 성공시 실행!!
    console.log("접속 완료!!!");

    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 연결 실패시 실행!!
    console.log(error);
  });
