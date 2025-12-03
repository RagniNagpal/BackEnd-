const User = require("./model/user.model");
const mongoose = require("mongoose");
let app = require("./server");
let request = require("supertest");
let { MongoMemoryServer } = require("mongodb-memory-server");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  let url = mongoServer.getUri();
  await mongoose.connect(url);
});

afterEach(async () => {
  await User.deleteMany();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/users/register", () => {

  it("should return user already exist if email is r@gmail.com", async () => {

    await User.create({
      name: "dada",
      email: "r@gmail.com",
      password: "adasda"
    });

    let response = await request(app)
      .post("/api/users/register")
      .send({
        name: "Ragni",
        email: "r@gmail.com",
        password: "1234",
      });

    expect(response.body.message).toBe("user already exist");
  });

  it("should create a new user with email r@gmail.com", async () => {

    let response = await request(app)
      .post("/api/users/register")
      .send({
        name: "Ragni",
        email: "r@gmail.com",
        password: "1234"
      });

    let userData = await User.findById(response.body.data._id);

    expect(response.body.data._id).toBe(userData._id.toString());
    expect(response.body.data.name).toBe(userData.name);
    expect(response.body.data.email).toBe(userData.email);
  });

});
