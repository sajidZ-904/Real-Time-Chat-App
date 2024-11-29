const Chat = require("../models/message");

const getChatHistory = async (req, res, next) => {
  try {
    const { room } = req.params;
    const chat = await Chat.findOne({ room });
    res.status(200).json(chat || { room, messages: [] });
  } catch (error) {
    next(error);
  }
};

module.exports = { getChatHistory };
