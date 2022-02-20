'use strict'
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    topicId: DataTypes.INTEGER,
  }, {});

  Comment.associate = (models) => {
    Comment.belongsTo(models.Topic, {foreingKey: 'topicId', as : 'topic'})
  };

  return Comment;
}