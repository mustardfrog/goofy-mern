const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const User = require('./User');

export const connectDb = mongoose.connect("mongodb://localhost:27017/mongoose_db")

async function createUser() {
    const first_user = await User.create({
        name: faker.person.fullName(),
        age: faker.number.int(100),
        address: {
            unit: faker.number.int(3000),
            street: faker.person.jobArea()
        }
    })
}

// module.exports = createUser;
