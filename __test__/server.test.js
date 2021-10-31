"use strict";
const server = require('../server.js');
//i don't have to run the server and i don't need it to be running to test it i want to test it's code

// we need to install a package called supertest it will create like a fake server so we can test it without needing to run our server it is a devDependance so npm i -D supertest

const supertest = require("supertest");
const request = supertest(server.app);

describe("API Server", () => {
    //test cases & scenarios
    it("handles not fount request", async () => {
        const response = await request.get("/asd");
        expect(response.status).toEqual(404);
        // expect(response.status).toBe(404);
    });
    it("handles server internal errors", async () => {
        const response = await request.post("/bad");
        expect(response.status).toEqual(500);
        // expect(response.status).toBe(404);
        // we can add more expect
    });
    it("getting data from /data ", async () => {
        const response = await request.get("/data");
        expect(response.status).toEqual(200);
        // expect(response.status).toBe(404);
        expect(typeof response.body).toEqual("object"); //we gonna use superagent is behind this so we will use response.body
    });
    it("getting data from / home route is working", async () => {
        const response = await request.get("/");
        expect(response.status).toEqual(200);
        // expect(response.status).toBe(404);
        console.log(response.text);
        expect(response.text).toEqual("Hello From Home Route"); //we used .text because we are using .send in the server
    });
});