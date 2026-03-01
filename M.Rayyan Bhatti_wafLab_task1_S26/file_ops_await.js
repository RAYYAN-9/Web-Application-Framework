// Async/Await version using fs.promises
import fs from 'node:fs/promises';

const baseDir = 'C:\\Users\\A\\Desktop\\WAF\\M.Rayyan Bhatti_wafLab_task1_S26';
const storageDir = baseDir + '\\storage';
const infoPath = storageDir + '\\info.txt';
const fullName = 'M. Rayyan Bhatti';

async function main() {
  try {
    try {
      await fs.access(storageDir);
    } catch (e) {
      await fs.mkdir(storageDir);
    }
    await fs.writeFile(infoPath, '');
    await fs.appendFile(infoPath, fullName + '\n');
    let data = await fs.readFile(infoPath, 'utf8');
    console.log('Initial read:', data);
    const initials = fullName.split(' ').map(s => s[0]).join('');
    await fs.writeFile(infoPath, initials);
    data = await fs.readFile(infoPath, 'utf8');
    console.log('After overwrite (initials):', data);
   await fs.writeFile(infoPath, "");
    console.log("File cleared");
    await fs.appendFile(infoPath, fullName + '\n');
    data = await fs.readFile(infoPath, 'utf8');
    console.log('After clearing and writing full name again:', data);
  } catch (err) {
    console.error('Error (await):', err);
  }
}
main();
