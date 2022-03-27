const { Post } = require('../models');

const postData = [{
        title: '11111',
        content: '11111111.',
        user_id: 1

    },
    {
        title: '2222222222',
        content: '2222222222222',
        user_id: 2
    },
    {
        title: '33333333',
        content: '3333333',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;