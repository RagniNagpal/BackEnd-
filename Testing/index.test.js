const app=require("./index.js");
const request=require("supertest");



//all tests in one
describe("POST /sum",()=>{
  test("should return addition of two numbers",async ()=>{
    let response = await request(app).post("/sum").send({
      a:2,
      b:3
    })
    expect(response.body.data).toBe(5);
  })
  it("should return all arguments must be passed",async ()=>{
    let response=await request(app).post("/sum").send({
      a:2,
    })
    expect(response.body.message).toBe("invalid argument");
  })
  /* 
  response={
  body:{
    api response
  }
   }
 */

})