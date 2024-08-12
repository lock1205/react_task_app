const database = require('../database/database');

exports.getTasks = async (req, res) => {
  const userId = req.params.userId;
  try {
    const results = await database.query(
      'SELECT * FROM task where userId = $1',
      [userId]
    );
    return res.status(200).json(results.rows);
  } catch (error) {}
};

exports.getAllTasks = async (req, res) => {
  const userId = req.params.userId;
  try {
    const results = await database.query('SELECT * FROM task');
    return res.status(200).json(results.rows);
  } catch (error) {}
};
