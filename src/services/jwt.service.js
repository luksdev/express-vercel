const db = require("../utils/db.server.js");

const getUser = async (id) => {
  return await db.users.findUnique({
    where: {
      id,
    },
  });
};

module.exports = {
  getUser,
};
