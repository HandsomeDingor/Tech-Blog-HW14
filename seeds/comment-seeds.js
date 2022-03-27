const { Comment } = require('../models');

const commentData = [{
        comment_text: "AAAAAA",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "BBBBB",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "CCCCCCCCCC",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;