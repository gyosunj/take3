const logger = require('../../utils/logger');

const indexHandler = (req, res, next) => {
  logger.info({
    level: 'info',
    message: 'a request came to api/color-list',
  });

  res.status(200).json({
    title: 'Test Title',
    itemsList: [
      {
        id: 0,
        color: 'red',
      },
      {
        id: 1,
        color: 'blue',
      },
    ],
  });
};

module.exports = indexHandler;
