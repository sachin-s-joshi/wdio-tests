import { Given, When, Then } from '@cucumber/cucumber'
import fetch, { Response } from 'node-fetch'
import * as jp from 'jsonpath'
const data = require('../data/post.json')

let base: string;
let res: Response;
Given('I have an {string} to call', async function (baseUrl: string) {
    base = baseUrl
})
When('I invoke {string} with GET request on it', async function (path: string) {
    let endpoint = base + path;
    console.log(endpoint)
    res = await fetch(endpoint, { method: "GET" });

})

Then('I should expect {int} status', async function (status: number) {
    expect(res.status).toBe(status);
    var body = JSON.parse(await res.text())
    console.log("ID:", jp.query(body, '$..id')[0])  //just to showcase we can use this to query json body

});

When('I invoke {string},{string} with POST request on it', async function (path: string, body: string) {
    let endpoint = base + path
    console.log(data)

    res = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
})

When('I invoke {string},{string} with PUT request on it', async function (path: string, body: string) {
    let endpoint = base + path
    console.log(data)

    res = await fetch(endpoint, {
        method: "PUT",
        body: JSON.stringify({ title: "updated" }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })

    console.log(await (await fetch(endpoint, { method: "GET" })).text()) //won't update the atual response as its mentioned in jsonplaceholder doc
})

When('I invoke {string} with DELETE request on it', async function (path: string) {
    let endpoint = base + path;
    console.log(endpoint)
    res = await fetch(endpoint, { method: "DELETE" });
    
})
