const db = require('../models/index');

const getAllHikes = async (req, res) => {
  try {
    const date = Date.now();
    const result = await db.hike.find({
    });
    res.status(200);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send('Internal Server Error');
  }
};

const submitHike = async (req, res) => {
  try {
    const result = await db.hike.create(req.body);
    res.status(201);
    res.send('post created ' + JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send('Internal Server Error');
  }
};

const deleteHike = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await db.hike.create(req.body);
    res.status(201);
    res.send('post created ' + JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send('Internal Server Error');
  }
};

const deleteHikes = async (req, res) => {
  try {
    const result = await db.hike.create(req.body);
    res.status(201);
    res.send('post created ' + JSON.stringify(result));
  } catch (error) {
    console.log(error);
    res.status(400);
    res.send('Internal Server Error');
  }
};

module.exports = {
  getAllHikes,
  submitHike,
  deleteHikes
};
