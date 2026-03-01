

import fs from 'node:fs';

const inputFile = "MOCK_DATA.json";

// Read JSON file
const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

// Clear output files before writing
fs.writeFileSync("com.txt", "");
fs.writeFileSync("edu.txt", "");
fs.writeFileSync("gov.txt", "");
fs.writeFileSync("uk.txt", "");

// Loop through each record
data.forEach(record => {
    const email = record.email || record.Email;

    if (!email) return;

    if (email.endsWith(".com")) {
        fs.appendFileSync("com.txt", JSON.stringify(record) + "\n");
    }
    else if (email.endsWith(".edu")) {
        fs.appendFileSync("edu.txt", JSON.stringify(record) + "\n");
    }
    else if (email.endsWith(".org")) {
        fs.appendFileSync("gov.txt", JSON.stringify(record) + "\n");
    }
    else if (email.endsWith(".uk")) {
        fs.appendFileSync("uk.txt", JSON.stringify(record) + "\n");
    }
});

console.log("Domain classification completed.");