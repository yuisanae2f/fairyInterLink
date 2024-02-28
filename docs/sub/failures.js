include('Component/box.js');
include('Component/code.js');

docs["sub/failures"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['_'] = () => {
        (p => {
            p.set('<h1>대실패 표</h1>');

            for(let i = 0; i < 10; i++) {
                (p => {
                    p.code(0, `${i + 1}. ${([
                        '데미지를 1d5 받는다.',
                        '가지고 있는 도구 카드를 1개 잃어버린다.',
                        '패시브 스킬 하나를 탐색 페이즈 동안 무효화한다.',
                        '액티브 스킬 하나를 다음 전투 동안 무효화한다.',
                        '필드 위의 랜덤 칸으로 이동한다.',
                        '다음 자신의 턴, 아무런 행동을 취할 수 없게 된다.',
                        '이번 탐색 페이즈 동안 탐색 판정 시 판정치가 랜덤(시크릿다이스)이 된다.',
                        '이제껏 확인한 모든 지도 데이터가 리셋된다!',
                        '소지금을 1d10*100 잃어버린다,',
                        '몬스터에게 기습당한다. (이때 첫 라운드는 몬스터가 무조건 우선 행동한다.)'
                    ])[i]}`);
                })(p.box(i, 'div'));
            }
        })(board.tent('_', 'div'));
    }


    return [fun, ['_']];
}