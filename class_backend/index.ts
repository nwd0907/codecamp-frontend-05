import { createConnection } from "typeorm";

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
  })
  .catch((error) => {
    // 연결 실패시 실행!!
    console.log(error);
  });
