const package = require('./package.json')
function sleep(ms) {return new Promise((resolve) => {setTimeout(resolve, ms);});}
// Module functions
function version() {return package.version;}
async function deadinside() {
    console.log('Я')
    await sleep(1000);
    console.log('Гуль...')
    await sleep(1000);
    for (i = 1000; i > 6; i++) {
        i=i-7;
        console.log(i+7+" - 7 = "+i);
        await sleep(100);
    }
}
function yesorno($arg) {
    if ($arg == '1') {
        console.log('Да')
    } else if ($arg == '0') {
        console.log('Нет')
    } else {
    var list = ['Да', 'Нет'];
    console.log(list[Math.floor(Math.random()*list.length)])
    }
}
async function deathgun($arg) {
    if (!$arg) {
        var list = ['дым', 'шелли с ультой', 'стена', 'deathgun', 'говно'];
    } else {
        var list = ['дым', 'шелли с ультой', 'стена', 'deathgun', 'говно', $arg];
    }
    console.log("советы от дезгана часть "+Math.floor(Math.random()*16384)+" 😈😈😈");
    await sleep('1000');
    console.log(list[Math.floor(Math.random()*list.length)]+" для нас корм.");
    await sleep('2000');
    console.log('ловим на ошибке 😈');
    await sleep('1000');
    console.log('убиваем...');
    await sleep('5000');
    console.log('идем плакать в лобби 😭😢')
}
// Export all functions
module.exports.version = version; 
module.exports.deadinside = deadinside; 
module.exports.yesorno = yesorno;
module.exports.deathgun = deathgun;
