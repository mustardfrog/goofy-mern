const express = require('express');
const { faker } = require('@faker-js/faker');

const User = require('./User');
const db  = require('./db/db');

const app = express();

const port = 8000;

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

db.connectDb();

async function run() {
    const first_user = await User.create({
        name: faker.person.fullName(),
        age: faker.number.int(100),
        address: {
            unit: faker.number.int(3000),
            street: faker.person.jobArea()
        }
    });

    console.log(first_user);
}

run()

// console.log(db)
