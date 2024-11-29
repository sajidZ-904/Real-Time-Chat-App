const request = require("supertest");
const app = require("../app");

describe("Chat API", () => {
  it("should retrieve chat history", async () => {
    jest.setTimeout(10000);
    const res = await request(app).get("/api/chats/test-room");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("room", "test-room");
  });
});
