
class fairy {
    constructor() {
        this.내구 = 0;
        this.유대 = 0;
        this.파워 = 0;
    }

    prse(s) {
        const j = JSON.parse(s);

        for(const c of ['내구', '유대', '파워'])
        this[c] = j[c];

        return this;
    }

    /**
     * 
     * @param {내구} a 
     * @param {유대} b 
     * @param {파워} c 
     * @returns 
     */
    static excel(a = 'f내구', b = 'f유대', c = 'f파워') {
        return `= "{ ""내구"": """ & ${a} & """, ""유대"": """ & ${b} & """, ""파워"": """ & ${c} & """}"`
    } 
}

class human {
    static excel(
        a = 'LP', b = 'LP최대', 
        c='SP', d='SP최대',
        e='행동력', f='행동력최대',

        g = '건강', h = '공격력',
        i = '근력', j = '속도',
        k = '수비력', l = '우선도', m = '지능'
        ) {
            let go = 0, rtn = '= "{ ';

        for(const idx of [
            'LP', a, 'LPMax', b,
            'SP', c, 'SPMax', d,
            '행동력', e, '행동력Max', f,

            '건강', g, '공격력', h,
            '근력', i, '속도', j,
            '수비력', k, '우선도', l, '지능', m
        ]) {
            switch(go++ % 2) {
                case 0: rtn += `""${idx}"" : `; break;
                default: rtn += `""" & ${idx} & """`; if(idx != m) rtn += ', '; break;
            }
        }

        return rtn + '}"';
    }

    prse(s) {
        const j = JSON.parse(s);

        for(const c of [
            'LP', 'LPMax',
            'SP', 'SPMax',
            '행동력', '행동력Max',

            '건강', '공격력', '근력', '속도', '수비력',

            '우선도', '지능'
        ]) this[c] = j[c];

        return this;
    }

    constructor() {
        this.LP = 0;
        this.LPMax = 0;

        this.SP = 0;
        this.SPMax = 0;

        this.건강 = 0;
        this.공격력 = 0;
        this.근력 = 0;
        this.속도 = 0;
        this.수비력 = 0;

        this.우선도 = 0;
        this.지능 = 0;

        this.행동력 = 0;
        this.행동력Max = 0;
    }
};