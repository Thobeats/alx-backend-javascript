export default function getResponseFromAPI() {
  return new Promise(((resolve, reject) => {
    resolve('done');
    reject(new Error('not done'));
  }));
}
