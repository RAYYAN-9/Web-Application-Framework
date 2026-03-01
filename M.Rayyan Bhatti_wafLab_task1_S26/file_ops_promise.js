// Manual Promise wrappers version (using callback-style fs wrapped in new Promise)
const fs = require('fs');

const baseDir = 'C:\\Users\\A\\Desktop\\WAF\\M.Rayyan Bhatti_wafLab_task1_S26';
const storageDir = baseDir + '\\storage';
const infoPath = storageDir + '\\info.txt';
const fullName = 'M. Rayyan Bhatti';

function mkdirP() {
  return new Promise((resolve, reject) => {
    fs.access(storageDir, (err) => {
      if (!err) {
        return resolve();
      }
      fs.mkdir(storageDir, (err) => err ? reject(err) : resolve());
    });
  });
}
function writeFileP(content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(infoPath, content, (err) => err ? reject(err) : resolve());
  });
}
function appendFileP(content) {
  return new Promise((resolve, reject) => {
    fs.appendFile(infoPath, content, (err) => err ? reject(err) : resolve());
  });
}
function readFileP() {
  return new Promise((resolve, reject) => {
    fs.readFile(infoPath, 'utf8', (err, data) => err ? reject(err) : resolve(data));
  });
}
function clear() {
  return new Promise((resolve, reject) => {
    fs.writeFile(infoPath, '', (err) => err ? reject(err) : resolve());
  });
}

mkdirP()
  .then(() => writeFileP(''))
  .then(() => appendFileP(fullName + '\n'))
  .then(() => readFileP())
  .then(data => { 
    console.log('Initial read:', data); 
    return data; 
})
  .then(() => {
    const initials = fullName.split(' ').map(s => s[0]).join('');
    return writeFileP(initials);
  })
  .then(() => readFileP())
  .then(data => { 
    console.log('After overwrite (initials):', data); 
      return clear(); 
})
  .then(() => appendFileP(fullName + '\n'))
  .then(() => readFileP())
  .then(data => console.log('After clearing and writing full name again:', data))
  .catch(err => console.error('Error (promise):', err));
