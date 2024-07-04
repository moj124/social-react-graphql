const postsResolvers = require('./post');
const usersResolvers = require('./user');
const commentsResolvers = require('./comments');

module.exports = {
    Post: {
        likeCount(parent) {
            console.log(parent);
            return parent.likes.length;

        },
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
};