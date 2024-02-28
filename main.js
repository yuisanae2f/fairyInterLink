function include(path, wh = document.head) {
    let scr;
    const pv = path.split('.');
    switch(pv[pv.length - 1]) {
        case 'js':
            scr = document.createElement("script");
            scr.src = document.currentScript.dir + path;
            break;
        case 'css':
            scr = document.createElement('link');
            scr.rel = 'stylesheet';
            scr.type = 'text/css';
            scr.href= document.currentScript.dir + path;
            break;
    }

    wh.appendChild(scr);
}

include('global.js');
include('tent.js');
include('style.js');
include('locale.js');

function main() {
    let c = document.getElementById('args');
    c.value = argt();
    locale('TRANSLATED_NOT');
    style('TRANSLATED_NOT');
    const board = new tent("board", "div", document.body);

    const funn = (docs[args()[2]] ?? docs['index'])(args()[0], 'TRANSLATED_NOT');
    if(funn[1].includes(args()[3])) funn[0][args()[3]]();
    else for(const w of funn[1]) funn[0][w]();

    return 0;
}