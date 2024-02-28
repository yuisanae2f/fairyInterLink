include('Component/box.js');
include('Component/code.js');

docs["fairy"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['_'] = () => {
        (p => {
            p.tent('title', 'h1').set('페어리의 스테이터스');
            
            (p => {
                p
                .append('페어리는 한 플레이어당 최대 3체 까지 보유할 수 있으며, <br/>')
                .append('탐색/전투 페이즈에서 적용가능한 페어리의 효과는 1 개체 뿐입니다.<br><br>')

                .append('시나리오 개시 시 페어리 1체를 지정해<br/>')
                .append('해당 시나리오에서는 그 페어리만 “인터링크”를 해서 페어리의 힘을 빌릴 수 있습니다.');
            })(p.tab('desc', 'div'));
        })(board.tent('_', 'div'));
    };

    fun['basic'] = () => {
        (p => {
            p.tent('title', 'h1').set('기본 정보');

            (p => {
                p.tent('title', 'h2').set('페어리 본연의 이름');

                (p => {
                    p
                    .append('페어리의 카드 명으로 작성.<br/>')
                    .append('페어리를 작성하기 위해 사용한 모델 카드 이름을 적으면 됩니다.<br/><br/>')
    
                    .append('해당 카드 명을 기준으로 파워 수치와 내구 수치, 스킬의 밸런스가 조정됩니다.');
                })(p.tab('desc', 'div'));
            })(p.tent('name', 'div'));

            (p => {
                p.tent('title', 'h2').set('페어리와 여행자 서로 간의 호칭');

                (p => {
                    p
                    .append('페어리와 여행자가 서로 상호작용 할 때 어떠한 이름으로 부르는 지를 나타냅니다. <br/>')
                    .append('롤 플레잉에 조금이라도 도움이 되고 각 여행자/페어리의 개성을 나타내기 위한 장치입니다.');
                })(p.tab('desc', 'div'));
            })(p.tent('nick', 'div'));

            (p => {
                p.tent('title', 'h2').set('페어리와의 유대');

                (p => {
                    p
                    .append('일종의 호감도와 같은 개념입니다. <br/>')
                    .append('처음 정령과 인터링크 시 유대는 1로 합니다. <br/><br/>')
    
                    .append('이후 새로운 시나리오를 가기 위해 다시 인터링크 할 때 마다 유대를 1 증가, <br/>')
                    .append('시나리오 종료 시에 리타이어 된 상태가 아닐 경우 추가적으로 유대를 1 증가 시킵니다.<br/><br/>')
    
                    .append('최소치는 0, 최대치는 10이며, 최애의 페어리로 지정되어 있는 경우 획독하는 유대가 2배가 됩니다.<br/>')
                })(p.tab('desc', 'div'));
            })(p.tent('bond', 'div'));

            (p => {
                p.tent('title', 'h2').set('인터링크 시 영창');
                (p => {
                    p
                    .append('<span title="또는 인터링크를 임의적으로 갱신하는 타이밍에">시나리오 개시 시</span> 사용하는 영창입니다.');

                })(p.tab('desc', 'div'));
            })(p.tent('cast', 'div'));

            (p => {
                p.tent('title', 'h2').set('페어리의 출신 지역/테마군');

                (p => {
                    p
                    .append('페어리가 어느 세계에서 나왔는지, 테마군 지정이 어떻게 되어있는지 나타냅니다.<br/>')
                    .append('정령의 테마군과 시나리오의 테마군이 일치할 경우 지식 판정에 보너스 보정을 30 얻습니다.');
                })(p.tab('desc', 'div'));
            })(p.tent('home', 'div'));

            (p => {
                p.tent('title', 'h2').set('페어리를 얻은 시나리오/시점');

                (p => {
                    p
                    .append('페어리를 얻게 된 시나리오와 날짜를 적습니다.<br/><br/>')
                    .append('만약 여행자와 페어리 모두 처음 만들었다면 –로 칸을 비워두고,<br/>')
                    .append('시나리오 도중 얻게 되었다면 시나리오 명과 해당 날짜를 적습니다.');
                })(p.tab('desc', 'div'));
            })(p.tent('view'));

            (p => {
                p.tent('title', 'h2').set('최애의 페어리 지정 여부');
                p.tab('desc', 'div').set('유대 설명란에 적혀있는 최애의 페어리 지정 여부를 나타냅니다.');
            })(p.tent('favourite'));
        })(board.tent('basic', 'div'));
    };

    fun['status'] = () => {
        (p => {
            p.tent('title', 'h1').set('인게임 스테이터스');

            (p => {
                p.tent('title', 'h2').set('파워 수치');

                p.tab('desc', 'div')
                .append('모델이 되는 카드의 공격력 + 유대 수치 입니다.<br/>')
                .append('해당 수치는 세션 내에 유대가 증가 혹은 감소할 경우 변동할 수 있습니다.');
            })(p.tent('pow', 'div'));

            (p => {
                p.tent('title', 'h2').set('내구성 수치');

                p.tab('desc', 'div')
                .set('모델이 되는 카드의 수비력 + 유대 수치 입니다.');
            })(p.tent('dur', 'div'));

            (p => {
                p.tent('title', 'h2').set('기본 공격 사거리');
                
                p.tab('desc', 'div')
                .set('사거리 표시 그림을 통해 표현합니다.');
            })(p.tent('range', 'div'));

            (p => {
                p.tent('title', 'h2').set('스킬 종류');

                (p => {
                    p
                    .append('스킬 1, 2, 3 규정에 맞춰서 표시<br/>')   // 나중에 링크 추가해야 함
                    .append('스킬 규정에 대해서는 후술할 페어리 스킬의 분류 및 샘플 페어리 시트에 기재되어있는 스킬 기준을 참조하세요.'); // 얘도 또한
                })(p.tab('desc', 'div'));
            })(p.tent('skill', 'div'));

            (p => {
                p.tent('title', 'h2').set('페어리 스킬의 분류');

                (p => {
                    p.append('패시브/액티브');
                    (p => {
                        p.code('fun', '액티브')
                        p.code(0, ': 특정 조건과 판정 성공일 경우에 발동되는 효과<br/>');
                        p.code('fun', '패시브')
                        p.code(0, ': 발동 판정 필요없이 상시 적용되는 효과');
                    })(p.box('ap'));

                    p.append('판정 기준이 되는 수치');
                    (p => {
                        p.code(0, '여행자의 근력/속도/건강/지능 중 어느 수치를 기준으로 판정을 하는 지 정함.<br/>');
                        p.code(0, '공통적으로 *5를 기준으로 하되, 해당 정령과의 유대가 10이 될 경우 모든 판정 기준 수치가 10 올라감.');
                    })(p.box('judge'));

                    p.append('사거리');
                    (p => {
                        p.code(0, '사거리 그림을 사용해 표시합니다.<br/>')
                        .code(0, '해당하는 칸에 있는 적을 타겟으로 지정할 수 있습니다.');
                    })(p.box('r'));

                    p.append('스킬의 분류');
                    (p => {
                        p.code('fun', '공격');
                        p.code(0, ': 직접적인 데미지를 주는 스킬<br/>')

                        p.code('fun', '수비');
                        p.code(0, ': 직접적으로 데미지 감소 효과가 생기는 스킬<br/>');

                        p.code('fun', '회복');
                        p.code(0, ': ');
                        p.code('#', 'LP').code(0, '나 ');
                        p.code('#', 'SP').code(0, ', 또는 ');
                        p.code('#', '행동력').code(0, '을 회복시키는 능력<br/>');

                        p.code('fun', '보조');
                        p.code(0, ': 결과값에 영향을 주거나 상태이상 관련 등 ');
                        p.code('fun', '공격').code(0, ', ');
                        p.code('fun', '수비').code(0, ', ');
                        p.code('fun', '보조 ');
                        p.code(0, '외의 모든 내용들');
                    })(p.box('ord'));
                })(p.tab('tab', 'div'));
            })(p.tent('class', 'div'));
        })(board.tent('status', 'div'));
    };

    return [fun, ['_', 'basic', 'status']];
}