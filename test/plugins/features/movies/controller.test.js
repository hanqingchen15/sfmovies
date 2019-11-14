'use strict';

const Knex = require('../../../../lib/libraries/knex');

const Controller = require('../../../../lib/plugins/features/movies/controller');

describe('movie controller', () => {

  const payload = { name: 'test', release_year: 2000 };

  beforeEach(async () => {
    await Knex.truncate('movies');
  });

  describe('create', () => {

    it('creates a movie', async () => {
      const movie = await Controller.create(payload);
      expect(movie.get('name')).to.eql(payload.name);
    });

  });

  describe('fetch', () => {

    let movie = {};
    beforeEach(async () => {
      movie = await Controller.create(payload);
    });

    it('fetches a movie', async () => {
      const fetchedMovie = await Controller.fetch(movie.id);
      expect(fetchedMovie.get('name')).to.eql(payload.name);
    });

  });

  describe('fetch all', () => {

    beforeEach(async () => {
      await Controller.create(payload);
    });

    it('fetches all movies', async () => {
      const movies = await Controller.fetchAll();
      expect(movies.length).to.eql(1);
    });

  });

});
