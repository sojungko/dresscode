const Comment = require('../db/config').Comment;
const Picture = require('../db/config').Picture;

module.exports = {
/* -- Comment Methods -- */
  getComments: ({ payload: { uri } }, reply) => {
    Picture.findAll({ where: { url: uri } })
      .then(({ id }) => Comment.findAll({ where: { pictureId: id } }))
      .then(comments => reply(comments).code(200));
  },

  postComment: ({ payload: { username, uri, comment } }, reply) => {
    Picture.findAll({ where: { url: uri } })
      .then(({ id }) => Comment.create({ pictureId: id, content: comment }))
      .then(commentObj => reply(commentObj).code(201));
  },

/* TODO: How to grab commentId? */
  deleteComment: ({ payload: uri, comment }, reply) => {
    Comment.findAll({ where: { content: comment } })
      .then(target => target.destroy())
      .then(() => reply().code(200));
  },
};
