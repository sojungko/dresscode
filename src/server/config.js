const Sequelize = require('sequelize');

const db = new Sequelize('dresscode', 'root', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

const User = db.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      isAlpha: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [6, 16],
    },
  },
  profilePic: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
});

const Picture = db.define('Picture', {
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
});

const Comment = db.define('Comment', {
  content: Sequelize.TEXT,
});

const Like = db.define('Like', {
  liked: {
    type: Sequelize.BOOLEAN,
    defaultValue: null,
  },
});

Picture.belongsTo(User);
User.hasMany(Picture);



exports.User = User;
exports.Picture = Picture;
exports.Comment = Comment;
exports.Like = Like;
