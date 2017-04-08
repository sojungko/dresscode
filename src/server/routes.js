const Users = require('./controller/users');
const Pictures = require('./controller/pictures');
const Comments = require('./controller/comments');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/user/{username}',
      payload: 'parse',
      handler: Users.getUser,
    },
    {
      method: 'POST',
      path: '/api/user/post',
      payload: 'parse',
      handler: Users.postUser,
    },
    {
      method: 'POST',
      path: '/api/user/signin',
      payload: 'parse',
      handler: Users.signInUser,
    },
    {
      method: 'POST',
      path: '/api/user/update',
      payload: 'parse',
      handler: Users.updateUser,
    },
    {
      method: 'POST',
      path: '/api/user/follow',
      payload: 'parse',
      handler: Users.followUser,
    },
    {
      method: 'POST',
      path: '/api/user/unfollow',
      payload: 'parse',
      handler: Users.unfollowUser,
    },
    {
      method: 'POST',
      path: '/api/user/setpic',
      payload: 'parse',
      handler: Users.setProfilePic,
    },
    {
      method: 'POST',
      path: '/api/user/removepic',
      payload: 'parse',
      handler: Users.removeProfilePic,
    },
    {
      method: 'GET',
      path: '/api/picture/{username}',
      payload: 'parse',
      handler: Pictures.getPics,
    },
    {
      method: 'POST',
      path: '/api/picture/post',
      payload: 'parse',
      handler: Pictures.postPic,
    },
    {
      method: 'POST',
      path: '/api/picture/delete',
      payload: 'parse',
      handler: Pictures.deletePic,
    },
    {
      method: 'POST',
      path: '/api/picture/like',
      payload: 'parse',
      handler: Pictures.likePic,
    },
    {
      method: 'POST',
      path: '/api/picture/dislike',
      payload: 'parse',
      handler: Pictures.dislikePic,
    },
    {
      method: 'POST',
      path: '/api/picture/unlike',
      payload: 'parse',
      handler: Pictures.unlikePic,
    },
    {
      method: 'POST',
      path: '/api/picture/undislike',
      payload: 'parse',
      handler: Pictures.unDislikePic,
    },
    {
      method: 'GET',
      path: '/api/comment/getAll',
      payload: 'parse',
      handler: Comments.getComments,
    },
    {
      method: 'POST',
      path: '/api/comment/post',
      payload: 'parse',
      handler: Comments.postComment,
    },
    {
      method: 'POST',
      path: '/api/comment/delete',
      payload: 'parse',
      handler: Comments.deleteComment,
    },
  ],
};
