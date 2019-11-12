'use strict';

const Movie = require('../../../models/movie');

exports.create = async (payload) => {
  let newPayload = { name: payload.title };
  newPayload = Object.assign(newPayload, payload);
  const movie = await new Movie().save(newPayload);

  return new Movie({ id: movie.id }).fetch();
};
