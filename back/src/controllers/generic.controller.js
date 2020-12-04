const boom = require('boom');

const genericCrud = (model) => ({
  async get({params: {id}}, res) {
    try {
      const item = await model.findById(id)
      return res.status(200).send({item, message: 'Опачки! У Вас все получилось, прилетел только один :)'})
    } catch (err) {
      return res.status(400).send(boom.boomify(err), {message: 'Упс! Что то пошло не так... :('});
    }
  },
  async getAll(req, res) {
    try {
      const items = await model.find()
      return res.status(200).send({items, message: 'Опачки! У Вас все получилось, прилетели все :)'})
    } catch (err) {
      return res.status(400).send(boom.boomify(err), {message: 'Упс! Что то пошло не так... :('});
    }
  },
  async create({body}, res) {
    try {
      const item = new model(body);
      const newItem = await item.save();
      return res.status(200).send({newItem, message: 'Опачки! Вы что-то там создали :)'})
    } catch (err) {
      return res.status(400).send(boom.boomify(err), {message: 'Упс! Что то пошло не так... :('});
    }
  },
  async update({params: {id}, body}, res) {
    try {
      const item = await model.findByIdAndUpdate(id, body, {new: true});
      return res.status(200).send({item, message: 'Опачки! Вы что-то там обновили :)'})
    } catch (err) {
      return res.status(400).send(boom.boomify(err), {message: 'Упс! Что то пошло не так... :('});
    }
  },
  async delete({params: {id}}, res) {
    try {
      await model.findByIdAndDelete(id);
      return res.status(200).send({states: 'OK', message: 'Опачки! Вы что-то там удалили :)'})
    } catch (err) {
      return res.status(400).send(boom.boomify(err), {message: 'Упс! Что то пошло не так... :('});
    }
  },
});

module.exports = genericCrud;
