const knex = require("../database/knex");

class MovieNotes {
  async create(req, res) {
    const { title, description, rating, tags } = req.body;
    const { user_id } = req.params;

    // O return do insert é o ID da inserção, que está sendo capturado pelo [note_id] usando array destructuring
    const [note_id] = await knex("movieNotes").insert({
      title,
      description,
      rating,
      user_id,
    });

    const movieTags = tags.map((tag) => {
      return {
        note_id,
        user_id,
        name: tag,
      };
    });

    await knex("movieTags").insert(movieTags);

    return res.status(200).json("Notes e tags inseridas com sucesso!");
  }

  async show(req, res) {
    const { note_id } = req.params;

    const note = await knex("movieNotes").where("id", note_id).select().first();

    res.status(200).json(note);
  }

  async index(req, res) {
    const notes = await knex("movieNotes").select().orderBy("created_at");

    res.status(200).json(notes);
  }

  async delete(req, res) {
    const { note_id } = req.params;

    await knex("movieNotes").where("id", note_id).del();

    res.status(200).json("Nota deletada com sucesso!");
  }
}

module.exports = MovieNotes;
