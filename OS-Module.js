import os from "os";

console.log("Operating System Information:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus());
console.log("Total Memory:", os.totalmem()/1024/1024/1024, "GB" );
console.log("Free Memory:", os.freemem()/1024/1024/1024, "GB");
console.log("Home Directory:", os.homedir());
console.log("Uptime:", os.uptime(), "seconds");
console.log("Network Interfaces:", os.networkInterfaces());
console.log("Hostname:", os.hostname());
console.log("OS Release:", os.release());
console.log("OS Type:", os.type());
console.log("OS Version:", os.version());
console.log("Temporary Directory:", os.tmpdir());
console.log("Endianness:", os.endianness());
console.log("User Info:", os.userInfo());
console.log("EOL:", JSON.stringify(os.EOL));
console.log("CPU Usage:", os.loadavg());
console.log("OS Constants:", os.constants);


