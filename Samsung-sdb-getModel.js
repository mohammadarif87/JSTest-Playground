const execSync = require('child_process').execSync;

const output = execSync("sdb devices | awk 'FNR == 2 {print $3}'", { encoding: 'utf-8' });
console.log(output);

modelNum = output.charAt(4)
console.log(modelNum)

if (modelNum === "M")
{
    const output = execSync("sdb -s 192.168.8.135 shell 0 debug wCC7ZHRYCs.demoApp 0", { encoding: 'utf-8' });
    console.log(output);
}
else
{
    const output = execSync("sdb -s 192.168.8.135 shell 0 debug wCC7ZHRYCs.demoApp", { encoding: 'utf-8' });
    console.log(output);
}