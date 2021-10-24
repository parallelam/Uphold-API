import axios from 'axios';

export default async function fetcher() {
  let fetchValue;
  try {
    fetchValue = await axios.get('https://api.uphold.com/v0/ticker/BTC-USD');
    console.log('fetchValue:', fetchValue.data);
    return fetchValue.data;
  } catch (e) {
    console.error('BTC fetch Error', e);
  }
}
