// Synchronous version: create storage folder, create info.txt, append full name, read, overwrite with initials, read, clear, append full name again
import fs from 'node:fs';

const baseDir = 'C:\\Users\\A\\Desktop\\WAF\\M.Rayyan Bhatti_wafLab_task1_S26';
const storageDir = baseDir + '\\storage';
const infoPath = storageDir + '\\info.txt';
const fullName = 'M. Rayyan Bhatti';

try {
  if (!fs.existsSync(storageDir)) fs.mkdirSync(storageDir);
  // create or empty file
  fs.writeFileSync(infoPath, '');
  // append full name
  fs.appendFileSync(infoPath, fullName + '\n');
  // read and display
  console.log('Initial read:', fs.readFileSync(infoPath, 'utf8'));
  // overwrite with initials
  const initials = fullName.split(' ').map(s => s[0]).join('');
  fs.writeFileSync(infoPath, initials);
  console.log('After overwrite (initials):', fs.readFileSync(infoPath, 'utf8'));
  // clear all data
 fs.writeFileSync(infoPath, "");
    console.log("File cleared");
  // write full name again
  fs.appendFileSync(infoPath, fullName + '\n');
  console.log('After clearing and writing full name again:', fs.readFileSync(infoPath, 'utf8'));
} catch (err) {
  console.error('Error (sync):', err);
}
