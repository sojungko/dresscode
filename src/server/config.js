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
  likes: Sequelize.INTEGER,
  dislikes: Sequelize.INTEGER,
});

const Comment = db.define('Comment', {
  content: Sequelize.TEXT,
});

Picture.belongsTo(User);
User.hasMany(Picture);
Comment.belongsTo(Picture);
Picture.hasMany(Comment);

exports.User = User;
exports.Picture = Picture;
exports.Comment = Comment;
