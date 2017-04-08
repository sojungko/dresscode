const Users = require('./controller/users');
const Pictures = require('./controller/pictures');
const Comments = require('./controller/comments');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/user/{username}',
      handler: Users.getUser,
    },
    {
      method: 'POST',
      path: '/api/user/post',
      config: { payload: { parse: true } },
      handler: Users.postUser,
    },
    {
      method: 'POST',
      path: '/api/user/signin',
      config: { payload: { parse: true } },
      handler: Users.signInUser,
    },
    {
      method: 'POST',
      path: '/api/user/update',
      config: { payload: { parse: true } },
      handler: Users.updateUser,
    },
    {
      method: 'POST',
      path: '/api/user/follow',
      config: { payload: { parse: true } },
      handler: Users.followUser,
    },
    {
      method: 'POST',
      path: '/api/user/unfollow',
      config: { payload: { parse: true } },
      handler: Users.unfollowUser,
    },
    {
      method: 'POST',
      path: '/api/user/setpic',
      config: { payload: { parse: true } },
      handler: Users.setProfilePic,
    },
    {
      method: 'POST',
      path: '/api/user/removepic',
      config: { payload: { parse: true } },
      handler: Users.removeProfilePic,
    },
    {
      method: 'GET',
      path: '/api/picture/{username}',
      handler: Pictures.getPics,
    },
    {
      method: 'POST',
      path: '/api/picture/post',
      config: { payload: { parse: true } },
      handler: Pictures.postPic,
    },
    {
      method: 'POST',
      path: '/api/picture/delete',
      config: { payload: { parse: true } },
      handler: Pictures.deletePic,
    },
    {
      method: 'POST',
      path: '/api/picture/like',
      config: { payload: { parse: true } },
      handler: Pictures.likePic,
    },
    {
      method: 'POST',
      path: '/api/picture/dislike',
      config: { payload: { parse: true } },
      handler: Pictures.dislikePic,
    },
    {
      method: 'POST',
      path: '/api/picture/unlike',
      config: { payload: { parse: true } },
      handler: Pictures.unlikePic,
    },
    {
      method: 'POST',
      path: '/api/picture/undislike',
      config: { payload: { parse: true } },
      handler: Pictures.unDislikePic,
    },
    {
      method: 'GET',
      path: '/api/comment/getAll',
      handler: Comments.getComments,
    },
    {
      method: 'POST',
      path: '/api/comment/post',
      config: { payload: { parse: true } },
      handler: Comments.postComment,
    },
    {
      method: 'POST',
      path: '/api/comment/delete',
      config: { payload: { parse: true } },
      handler: Comments.deleteComment,
    },
  ],
};
