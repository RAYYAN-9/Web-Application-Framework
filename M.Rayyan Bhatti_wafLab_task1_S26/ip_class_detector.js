

import fs from 'node:fs';

const inputFile = "MOCK_DATA.json";

// Read JSON data
const data = JSON.parse(fs.readFileSync(inputFile, "utf8"));

// Clear output files
fs.writeFileSync("IP_Class_A.txt", "");
fs.writeFileSync("IP_Class_B.txt", "");
fs.writeFileSync("IP_Class_C.txt", "");
fs.writeFileSync("IP_Class_D.txt", "");
fs.writeFileSync("IP_Class_E.txt", "");

// Loop through records
data.forEach(record => {
    const ip = record.ip_address || record.IP_Address || record.ip;

    if (!ip) return;

    const firstOctet = parseInt(ip.split(".")[0]);

    if (firstOctet >= 1 && firstOctet <= 126) {
        fs.appendFileSync("IP_Class_A.txt", JSON.stringify(record) + "\n");
    }
    else if (firstOctet >= 128 && firstOctet <= 191) {
        fs.appendFileSync("IP_Class_B.txt", JSON.stringify(record) + "\n");
    }
    else if (firstOctet >= 192 && firstOctet <= 223) {
        fs.appendFileSync("IP_Class_C.txt", JSON.stringify(record) + "\n");
    }
    else if (firstOctet >= 224 && firstOctet <= 239) {
        fs.appendFileSync("IP_Class_D.txt", JSON.stringify(record) + "\n");
    }
    else if (firstOctet >= 240 && firstOctet <= 255) {
        fs.appendFileSync("IP_Class_E.txt", JSON.stringify(record) + "\n");
    }
});

console.log("IP Class classification completed.");