it("페이지 이동 연습해보기", () => {
  cy.visit("http://localhost:3000/34-04-cypress-integration-test-1");
  cy.get("button").click();
  cy.get("div").contains("철수야 놀자~~~");
});
