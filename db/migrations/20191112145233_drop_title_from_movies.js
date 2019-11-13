'use strict';

exports.up = async (knex) => {
  await knex.schema.table('movies', (table) => {
    table.dropColumn('title');
  });
  await knex.raw('ALTER TABLE movies ADD CONSTRAINT movies_name_not_null CHECK (name IS NOT NULL) NOT VALID');
  await knex.raw('ALTER TABLE movies VALIDATE CONSTRAINT movies_name_not_null');
};

exports.down = (knex) => {
  return knex.schema.table('movies', (table) => {
    table.text('title');
  })
  .then(() => {
    return knex.raw('ALTER TABLE movies DROP CONSTRAINT movies_name_not_null');
  });
};
