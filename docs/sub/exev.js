include('Component/box.js')
include('Component/code.js')

docs["sub/exev"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['_'] = () => {
        (p => {
            p
            .append('이벤트 이름, 이벤트 분류, 지역, 발동 조건, 판정 조건, 정보, 보상, 이벤트 설명 및 기믹을 정리해야 합니다. <br/>')
            .append('특정 월드에서 이벤트 발판으로 이동했을 때 다이스를 통해 랜덤한 이벤트가 일어나도록 합니다.<br><br>');
        })(board.tent('_', 'div').set('<h1>이벤트 예시</h1>').tab('div', 'div'));
    };

    fun['t'] = () => {
        (p => {
            (p => {
                let z = 0;

                for(const c of [
                    '이름', '보물상자 발견?<br/>',

                    '분류', '히든?',
                    '지역', '아쿠아 월드<br/>',

                    '발동 조건', '특정 맵의 이벤트 칸에서',
                    '판정 조건', '관찰력 판정 성공 시<br/>',

                    '정보', '공개',
                    '보상', '골드?<br/>',

                    '이벤트 설명', '유적을 탐사한 결과 보물상자를 발견하였고 상자를 열어본다.<br/>',
                    '이벤트 기믹'
                ]) {
                    switch(z++ % 2) {
                        case 0:
                            p.code('num', c);
                            break;
                        default:
                            p.code(0, `: ${c}<br/>`);
                            break;
                    }
                }

                (p => {
                    p.codeArray([
                        ['num', '판정 성공 시'],
                        [,': 보물상자 발견<br/>'],

                        ['num', '판정 실패 시'],
                        [,': 몬스터 페어리 '],
                        ['var', '탐욕의 곰치'],
                        [, '와 전투.<br/>']
                    ])
                })(p.code(0, ':').tab('div', 'div'))
            })(p.code('struct', '이벤트').code(0, ': ').tab('div', 'div'));
        })(board.tent('p', 'div').set('<h2>템플릿</h2>').box('c'))
    }
    return [fun, ['_', 't']];
}