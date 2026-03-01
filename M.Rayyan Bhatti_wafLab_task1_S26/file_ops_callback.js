// Callback-based (async) version
import fs from 'node:fs';

const baseDir = 'C:\\Users\\A\\Desktop\\WAF\\M.Rayyan Bhatti_wafLab_task1_S26';
const storageDir = baseDir + '\\storage';
const infoPath = storageDir + '\\info.txt';
const fullName = 'M. Rayyan Bhatti';

function runSequence() {
  fs.writeFile(infoPath, '', (err) => {
    if (err) {
        return console.error('writeFile error:', err);
    }
    fs.appendFile(infoPath, fullName + '\n', (err) => {
      if (err) {
        return console.error('appendFile error:', err);
      }
      fs.readFile(infoPath, 'utf8', (err, data) => {
        if (err) {
             return console.error('readFile error:', err);
        }
        console.log('Initial read:', data);
        const initials = fullName.split(' ').map(s => s[0]).join('');
        fs.writeFile(infoPath, initials, (err) => {
          if (err) {
            return console.error('writeFile (initials) error:', err);
          }
          fs.readFile(infoPath, 'utf8', (err, data2) => {
            if (err) {
                return console.error('readFile (after initials) error:', err);
            }
            console.log('After overwrite (initials):', data2);
            fs.writeFile(infoPath, '', (err) => {
              if (err) {
                return console.error('Clear error:', err);
              }
              console.log('File cleared successfully');
              fs.appendFile(infoPath, fullName + '\n', (err) => {
                if (err) {
                    return console.error('appendFile (final) error:', err);
                }
                fs.readFile(infoPath, 'utf8', (err, final) => {
                  if (err) {
                    return console.error('readFile (final) error:', err);
                  }
                  console.log('After clearing and writing full name again:', final);
                });
              });
            });
          });
        });
      });
    });
  });
}

// Ensure storageDir exists: check access first, then mkdir if missing (simple approach)
fs.access(storageDir, (err) => {
  if (err) {
    fs.mkdir(storageDir, (err) => {
      if (err) {
        return console.error('mkdir error:', err);
      }
      runSequence();
    });
  } else {
    runSequence();
  }
});
