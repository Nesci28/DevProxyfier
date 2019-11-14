const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('*', async (req, res) => {
  const url = `${process.env.PROXY_URL}${req.originalUrl}`;
  const key = getHeadersKey(req.originalUrl);
  if (key) {
    const data = await axios.get(url, {
      headers: {
        key,
      },
    });
    res.json(data.data);
  } else {
    res.json({
      error: 'Missing API KEY detected!',
    });
  }
});

router.post('*', async (req, res) => {
  const url = `${process.env.PROXY_URL}${req.originalUrl}`;
  const key = getHeadersKey(req.originalUrl);
  if (key) {
    const data = await axios.post(url, req.body, {
      headers: {
        key,
      },
    });
    res.json(data.data);
  } else {
    res.json({
      error: 'Missing API KEY detected!',
    });
  }
});

function getHeadersKey(originalUrl) {
  originalUrl = originalUrl.split('/').filter(e => e !== '');
  for (let i = originalUrl.length; i > 0; i--) {
    const getProcessEnv = `KEY_${originalUrl
      .slice(0, i)
      .join('_')
      .toUpperCase()}`;
    if (process.env[getProcessEnv]) {
      console.log('process.env[process] :', process.env[getProcessEnv]);
      return process.env[getProcessEnv];
    }
  }
  return null;
}

module.exports = router;
