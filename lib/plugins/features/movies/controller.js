'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {

  const movie = await new Movie().save(payload);

  return new Movie({ id: movie.id }).fetch();
};

exports.fetchAll = async () => {
  return await Movie.fetchAll();
};

exports.fetch = async (id) => {
  return await new Movie({ id }).fetch();
};
