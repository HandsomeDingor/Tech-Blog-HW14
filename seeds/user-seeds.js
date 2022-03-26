const { User } = require('../models');

const userData = [{
        username: 'John',
        password: 'john'

    },
    {
        username: 'Jake',
        password: 'jake'
    },
    {
        username: 'Jason',
        password: 'jason'
    }
];

const seedUsers = () => User.bulkCreate(userData,{individualHooks: true});

module.exports = seedUsers;