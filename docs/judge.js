include('Component/box.js');
include('Component/code.js');

docs["judge"] = function(lng = args()[0], nil) {
    const board = document.getElementById("board");
    let fun = {};

    fun['def'] = () => {
        (p => {
            p.tent('h1', 'h1').set('판정의 정의');

            (p => {
                p
                .append('기본적으로 판정은 1d100을 굴리게 되며, 결과값이 기준치 이하일 경우 판정에 성공하게 됩니다.<br>')
                .append('만약에 판정치나 결과값에 소수점 이하 단위가 생길 경우, 소수점 첫번째에서 반올림합니다. <br><br>')

                .append('단, 판정치와 관계없이 1~5는 대성공, 96~100은 대실패 상태가 되며, <br/>')
                .append('일반적인 성공/실패보다 극단적인 결과가 나오게 됩니다.');

                (p => {
                    p.tent('h2', 'h2').set('공격');

                    (p => {
                        p.code('fun', '대성공').code(0, ': 회피 불가 공격<br>');
                        p.code('fun', '대실패').code(0, ': 랜덤 아군 공격<br>');
                    })(p.box('c'));
                })(p.tent('atk', 'div'));

                (p => {
                    p.tent('h2', 'h2').set('회피');

                    (p => {
                        p.code('fun', '대성공').code(0, ': 무조건 반격<br>');
                        p.code('fun', '대실패').code(0, ': 데미지 2배<br>');
                    })(p.box('c'));
                })(p.tent('run', 'div'));

                (p => {
                    p.tent('h2', 'h2').set('탐색');

                    (p => {
                        p.code('fun', '대성공').code(0, ': ').code('num', '행운티켓').code(0, '을 획득(주사위를 다시 굴림)<br>');
                        p.code('fun', '대실패').code(0, ': ').code('num', '대실패표', getURL('sub/failures'))
                        .code(0, '를 바탕으로 주사위 ')
                        .code('fun', '1d10')
                        .code(0, '을 굴려 해당하는 상황을 대실패가 나온 캐릭터에게 적용한다.');
                    })(p.box('c'));
                })(p.tent('find', 'div'));
            })(p.tab('desc', 'div'));
        })(board.tent('def', 'div'));
    }

    fun['ord'] = () => {
        (p => {
            p.tent('h1', 'h1').set('판정의 종류');

            (p => {
                (p => {
                    p.tent('h2', 'h2').set('공격');

                    (p => {
                        p
                        .append('전투 상황에서 진행되는 판정입니다. <br/>')
                        .append('근력*10을 기준치로 1d100의 결과값이 이 기준치 이하면 공격에 성공하게 됩니다.');
                    })(p.tab('div', 'div'));
                })(p.tent('atk'));

                (p => {
                    p.tent('h2', 'h2').set('회피');

                    (p => {
                        p
                        .append('전투 상황에서 진행되는 판정입니다. <br/>')
                        .append('자신이 수비 상태가 아닐 때 피격 당할 경우 회피 판정을 굴릴 수 있습니다.<br/><br/>')

                        .append('기준치는 속도*5 이며, 회피 판정에 성공할 경우 공격으로 인한 데미지와 효과를 받지 않습니다.');
                    })(p.tab('div', 'div'));
                })(p.tent('run'));

                (p => {
                    p.tent('h2', 'h2').set('탐색');

                    (p => {
                        p
                        .append('탐색 상황에서 진행되는 판정입니다. <br/>')
                        .append('주어진 상황에서 요구하는 능력에 따라서 해당하는 스테이터스의 n배수를 판정치로 사용합니다.');
                    })(p.tab('div', 'div'));
                })(p.tent('find'));

                (p => {
                    p.tent('h2', 'h2').set('힘');

                    (p => {
                        p
                        .append('물리적인 힘으로 해결하는 수단의 경우 등 <br/>')
                        .append('ex: 문을 박차고 들어간다');
                    })(p.tab('div', 'div'));
                })(p.tent('str'));

                (p => {
                    p.tent('h2', 'h2').set('속도');

                    (p => {
                        p
                        .append('민첩하고 은밀한 행동을 취할 경우 등 <br/>')
                        .append('ex: 문고리를 살짝 연다, 열쇠 구멍으로 안을 들여다 본다');
                    })(p.tab('div', 'div'));
                })(p.tent('spd'));

                (p => {
                    p.tent('h2', 'h2').set('건강');

                    (p => {
                        p
                        .append('상태이상, 트랩 등 판정이 필요한 경우 등 <br/>')
                        .append('ex: 함정에서 독가스가 나왔을 때, 독 상태이상에 걸리는지 확인');
                    })(p.tab('div', 'div'));
                })(p.tent('hp'));

                (p => {
                    p.tent('h2', 'h2').set('지능');

                    (p => {
                        p
                        .append('함정을 분석하고 해체하거나, 사람들간의 대화 / 흥정을 할 경우 등 <br/>')
                        .append('ex: 함정의 원리를 분석해 터지기 전에 해제한다, 미믹인지 확인한다, 상점주인한테 포션 가격을 싸게 해달라고 흥정한다.')
                    })(p.tab('div', 'div'));
                })(p.tent('int'));
            })(p.tab('div', 'div'));
        })(board.tent('ord', 'div'));
    }

    fun['cal'] = () => {
        (p => {
            p.tent('h1', 'h1').set('최종 대미지 계산');

            (p => {
                p.set('기본적으로 패시브 -> 도구 -> 버프/디버프 순으로 계산이 진행되며 같은 %종류의 계산은 합연산으로 계산합니다.');
                
                (p => {
                    p.tent('h2', 'h2').set('공격 선언 후 성공 시 데미지');
                    ((p) => {
                        p
                        .code('struct', '공격자').code(0, '::').code('fun', '선언')
                        .code(0, ' => {');

                        (p => {
                            p
                            .code('//', '// 최초값은 공격자의 공격력으로 설정한다.<br/>')
                            .code('word', 'float ').code('var', 'rtn').code(0, ' = ').code('struct', '공격자').code(0, '::공격력;<br/><br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('function', 'fun').code('logic', '  of ')
                            .code('struct', '공격자').code('fun', '::패시브')
                            .code(0, '<')
                            .code('struct', '곱연산')
                            .code(0, ', ')
                            .code('struct', '공격')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 패시브 중 곱연산을 전부 순회하여 기존값을 매개로 적용<br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('fun', 'fun').code('logic', '  of ')
                            .code('struct', '공격자')
                            .code('fun', '::패시브')
                            .code(0, '<')
                            .code('struct', '합연산').code(0, ', ')
                            .code('struct', '공격')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 패시브 중 합연산을 전부 순회하여 기존값을 매개로 적용<br/><br/>');


                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('function', 'fun').code('logic', '  of ')
                            .code('struct', '공격자').code('fun', '::도구')
                            .code(0, '<')
                            .code('struct', '곱연산')
                            .code(0, ', ')
                            .code('struct', '공격')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 도구 중 곱연산을 전부 순회하여 기존값을 매개로 적용<br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('fun', 'fun').code('logic', '  of ')
                            .code('struct', '공격자')
                            .code('fun', '::도구')
                            .code(0, '<')
                            .code('struct', '합연산').code(0, ', ')
                            .code('struct', '공격')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 도구 중 합연산을 전부 순회하여 기존값을 매개로 적용<br/><br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('function', 'fun').code('logic', '  of ')
                            .code('struct', '공격자').code('fun', '::버프/디버프')
                            .code(0, '<')
                            .code('struct', '곱연산')
                            .code(0, ', ')
                            .code('struct', '공격')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 버프/디버프 중 곱연산을 전부 순회하여 기존값을 매개로 적용<br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('fun', 'fun').code('logic', '  of ')
                            .code('struct', '공격자')
                            .code('fun', '::버프/디버프')
                            .code(0, '<')
                            .code('struct', '합연산').code(0, ', ')
                            .code('struct', '공격')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 버프/디버프 중 합연산을 전부 순회하여 기존값을 매개로 적용<br/><br/>');

                            p.code('logic', 'return ').code('var', 'rtn').code(0, ';');
                        })(p.tab('a', 'div'));

                        p.code(0, '}')
                    })(p.box('b'));
                })(p.tent('atk', 'div'));

                (p => {
                    p.tent('h2', 'h2').set('수비 시 데미지 감량치');
                    ((p) => {
                        p
                        .code('struct', '수비자').code(0, '::').code('fun', '감량')
                        .code(0, ' => {');

                        (p => {
                            p
                            .code('//', '// 최초값은 수비자의 수비력으로 설정한다.<br/>')
                            .code('word', 'float ').code('var', 'rtn').code(0, ' = ').code('struct', '수비자').code(0, '::수비력;<br/><br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('function', 'fun').code('logic', '  of ')
                            .code('struct', '수비자').code('fun', '::패시브')
                            .code(0, '<')
                            .code('struct', '곱연산')
                            .code(0, ', ')
                            .code('struct', '수비')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 패시브 중 곱연산을 전부 순회하여 기존값을 매개로 적용<br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('fun', 'fun').code('logic', '  of ')
                            .code('struct', '수비자')
                            .code('fun', '::패시브')
                            .code(0, '<')
                            .code('struct', '합연산').code(0, ', ')
                            .code('struct', '수비')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 패시브 중 합연산을 전부 순회하여 기존값을 매개로 적용<br/><br/>');


                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('function', 'fun').code('logic', '  of ')
                            .code('struct', '수비자').code('fun', '::도구')
                            .code(0, '<')
                            .code('struct', '곱연산')
                            .code(0, ', ')
                            .code('struct', '수비')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 도구 중 곱연산을 전부 순회하여 기존값을 매개로 적용<br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('fun', 'fun').code('logic', '  of ')
                            .code('struct', '수비자')
                            .code('fun', '::도구')
                            .code(0, '<')
                            .code('struct', '합연산').code(0, ', ')
                            .code('struct', '수비')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 도구 중 합연산을 전부 순회하여 기존값을 매개로 적용<br/><br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('function', 'fun').code('logic', '  of ')
                            .code('struct', '수비자').code('fun', '::버프/디버프')
                            .code(0, '<')
                            .code('struct', '곱연산')
                            .code(0, ', ')
                            .code('struct', '수비')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 버프/디버프 중 곱연산을 전부 순회하여 기존값을 매개로 적용<br/>');

                            p
                            .code('logic', 'for ').code(9, '(')
                            .code('word', 'function ').code('fun', 'fun').code('logic', '  of ')
                            .code('struct', '수비자')
                            .code('fun', '::버프/디버프')
                            .code(0, '<')
                            .code('struct', '합연산').code(0, ', ')
                            .code('struct', '수비')
                            .code(0, '>) ');

                            p
                            .code('var', 'rtn').code(0, ' = ')
                            .code('function', 'fun')
                            .code(0, '(')
                            .code('var', 'rtn')
                            .code(0, ');')
                            .code('//', ' // 버프/디버프 중 합연산을 전부 순회하여 기존값을 매개로 적용<br/><br/>');

                            p.code('logic', 'return ').code('var', 'rtn').code(0, ';');
                        })(p.tab('a', 'div'));

                        p.code(0, ' }');
                    })(p.box('b'));
                })(p.tent('def', 'div'));

                (p => {
                    p.tent('h2', 'h2').set('최종 데미지');

                    (p => {
                        p.code('struct', '수비자').code(0, '::').code('fun', '최종피해')
                        .code(0, ' => { ').code('logic', 'return ')
                        .code('struct', '공격자').code(0, '::').code('fun', '선언')
                        .code(0, ' - ')
                        .code('struct', '수비자').code(0, '::').code('fun', '감량')
                        .code(0, '; }')
                    })(p.box('b'));
                })(p.tent('fin', 'div'));
            })(p.tab('div', 'div'))
        })(board.tent('cal', 'div'));
    }
    return [fun, ['def', 'ord', 'cal']];
}