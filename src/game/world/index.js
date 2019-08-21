import axios from 'axios';
import path from 'path';

const env = process.env.NODE_ENV || 'dev';

const dataCache = {}

if (env === 'test') {
  dataContext = require.context('../../../data', true, /\.json$/);
  _.each(dataContext.keys(), file => {
    const key = path.parse(file).name;
    dataCache[key] = dataContext(file);
  });
  console.log('The following data was loaded:')
  console.log(dataCache);
}


export function getData(key, callback) {
  if (_.has(dataCache, key)) {
    callback({data: dataCache[key]});
  } else {
    axios.get(`/data/${key}.json`)
      .then(({data}) => {
        dataCache[key] = data;
        callback({data});
      });
  }
}