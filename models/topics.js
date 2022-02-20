'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title  : DataTypes.STRING,
    content: DataTypes.TEXT 
  }, {})
  Topic.associate = (models) => {
    Topic.hasMany(models.Comment, {as: 'comments'})
  }

  return Topic;
};