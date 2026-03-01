// Promise chaining version using fs.promises
import fs from 'node:fs/promises';

const baseDir = 'C:\\Users\\A\\Desktop\\WAF\\M.Rayyan Bhatti_wafLab_task1_S26';
const storageDir = baseDir + '\\storage';
const infoPath = storageDir + '\\info.txt';
const fullName = 'M. Rayyan Bhatti';


fs.access(storageDir)
  .catch(() => fs.mkdir(storageDir))
  .then(() => fs.writeFile(infoPath, ''))
  .then(() => fs.appendFile(infoPath, fullName + '\n'))
  .then(() => fs.readFile(infoPath, 'utf8'))
  .then(data => {
     console.log('Initial read:', data); return data; 
    })
  .then(() => {
    const initials = fullName.split(' ').map(s => s[0]).join('');
    return fs.writeFile(infoPath, initials);
  })
  .then(() => fs.readFile(infoPath, 'utf8'))
  .then(data => { 
    console.log('After overwrite (initials):', data); 
    return fs.truncate(infoPath, 0); 
})
  .then(() => fs.appendFile(infoPath, fullName + '\n'))
  .then(() => fs.readFile(infoPath, 'utf8'))
  .then(data => {
    console.log('After clearing and writing full name again:', data);
  })
  .catch(err => console.error('Error (chaining):', err));
