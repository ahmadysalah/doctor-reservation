const axios = require('axios');
require('env2')('config.env');

// fetch news by outside api by url, and the api-key inside the env file.
const fetchData = {
  covid: async (req, res) => {
    const URL = `http://newsapi.org/v2/everything?q=covid-19&apiKey=${process.env.API_KEY}`;
    try {
      const { data } = await axios.get(URL);
      res.status(200).json({ status: 200, message: 'successfully', data });
    } catch (e) {
      res.status(400).json({ status: 400, message: 'Failed fetching news' });
    }
  },
};

module.exports = fetchData;
