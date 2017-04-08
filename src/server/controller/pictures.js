const Picture = require('../db/config').Picture;
const User = require('../db/config').User;

module.exports = {
/* -- Picture Methods -- */
  getPics: ({ payload: { id }, params: { username } }, reply) => {
    if (id) {
      Picture.findAll({ where: { userId: id } })
        .then(pictures => reply(pictures).code(200));
    } else if (username) {
      User.findAll({ where: { username } })
        .then(user => Picture.findAll({ where: { userId: user.id } }))
        .then(pictures => reply(pictures).code(200));
    }
  },

  postPic: ({ payload: { id, uri } }, reply) => {
    /*
    Creates Picture instance with userId
    */
    Picture.create({ url: uri, userId: id })
      .then(picture => reply(picture).code(201));
  },

  deletePic: ({ payload: { uri } }, reply) => {
    Picture.findAll({ where: { url: uri } })
      .then(picture => picture.destroy())
      .then(() => reply().code(200));
  },

  likePic: ({ payload: { uri } }, reply) => {
    Picture.findAll({ where: { url: uri } })
      .then(picture => picture.increment('likes'))
      .then(() => reply().code(201));
  },

  dislikePic: ({ payload: { uri } }, reply) => {
    Picture.findAll({ where: { url: uri } })
      .then(picture => picture.increment('dislikes'))
      .then(() => reply().code(200));
  },

  unlikePic: ({ payload: { uri } }, reply) => {
    Picture.findAll({ where: { url: uri } })
      .then(picture => picture.decrement('likes'))
      .then(() => reply().code(200));
  },

  unDislikePic: ({ payload: { uri } }, reply) => {
    Picture.findAll({ where: { url: uri } })
      .then(picture => picture.decrement('dislikes'))
      .then(() => reply().code(200));
  },
};
