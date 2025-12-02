const app = require("./server"); 
const User = require("./model/user.model");
const request = require("supertest");

jest.mock("./model/user.model");

describe("POST /api/users/register", () => {

  it("should return user already exists if email is R@gmail.com", async () => {
    User.findOne.mockResolvedValueOnce(true);

    const response = await request(app)
      .post("/api/users/register")
      .send({
        name: "R",
        email: "R@mail.com",
        password: "1234"
      });

    expect(response.body.message).toBe("user already exist");
  });

  it("should create a new user with email R@gmail.com", async () => {
    User.findOne.mockResolvedValue(null);

    const mockUser = {
      name: "Ragni",
      email: "R@gmail.com",
      password: "1234"
    };

    User.create.mockResolvedValue(mockUser);

    const response = await request(app)
      .post("/api/users/register")
      .send({
        name: "Ragni",
        email: "R@gmail.com",
        password: "1234"
      });

    expect(response.body.message).toBe("user registered successfully");

    expect(response.body.data).toEqual({
      name: "Ragni",
        email: "R@gmail.com",
        password: "1234"
    });
  });

});
