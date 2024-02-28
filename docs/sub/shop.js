include('Component/box.js')
include('Component/code.js')

docs["sub/shop"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['_'] = () => {
        (p => {
            p.set('<h1>범용상점</h1>');
            p.tab('div', 'div')
            .set('처음 소지금은 지능d100 입니다. <br/>')
            .append('그리고 상점 판매 품목은 다음과 같은 예시를 가집니다.');
        })(board.tent('_', 'div'));
    }

    fun['inv'] = () => {
        (p => {
            (p => {
                for(let i = 1, c = 1; i < 100; i *= 3, c++) {
                    p
                    .code('num', c)
                    .code(0, `칸 째: `)
                    .code('num', `${i}00G<br/>`)
                }
            })(
                p.tent('ex', 'div')
                .set('<h2>인벤토리 확장</h2>')
                .tab('div', 'div')
                .set('세션 종료 후에도 계속').box('c', 'div')
            );

            (p => {
                for(let i = 5, c = 1; i < 610; i *= ++c) {
                    p
                    .code('num', c)
                    .code(0, '칸: ')
                    .code('num', `${i}0G<br/>`);
                }
            })(
                p
                .tent('re', 'div')
                .set('<h2>인벤토리 수리</h2>')
                .tab('div', 'div')
                .set('사용 불가능해진 인벤토리를 원상 복구 시키는 기능')
                .box('c', 'div')
            );
        })(board.tab('inv', 'div'));
    };

    fun['drug'] = () => {
        (p => {
            for(let i = 1; i < 3; i++) {
                (p => {
                    p.tab('lp', 'div').set('<h3>LP</h3>');
                    p.tab('sp', 'div').set('<h3>SP</h3>');

                    for(let ii = 0; ii < 2; ii++) {
                        (p => {
                            for(let iii = 0; iii < 3; iii++) {
                                p
                                .code(0, `${['하급', '중급', '상급'][iii]} `);

                                (p => {
                                    p
                                    .code(0, '가격: ')
                                    .code('num', `${[5, 25, 100][iii] * (ii + 1) * i}G`)
                                    .code(0, '<br/>회복량: ')
                                    .code('num', `${1 + (iii << 1)}0`)
                                    .code(0, '<br/>칸당 ')
                                    .code('num', `${4 - iii}`)
                                    .code(0, '개 소지 가능');
                                })(p.tab(iii, 'div'));
                                p.code(0, '<br>');
                            }
                        })(p.tab(['lp', 'sp'][ii], 'div').set(`<h3>${['LP', 'SP'][ii]}</h3>`).box('c'));
                    }

                })(
                    p.tent(i, 'div')
                    .set(`<h2>포션[소비/${i - 1 ? '' : '비'}전투/일반]</h2>`)
                );
            }
        })(board.tab('drug', 'div'));
    }

    fun['gear'] = () => {
        (p => {
            for(let i = 0; i < 4; i++) {
                (p => {
                    p
                    .code(0, '가격: ')
                    .code('num', '100G<br/>')

                    .code(0, '거리가 ')
                    .code('num', i)
                    .code(0, ' 내인 적에게 공격 시 ')
                    .code('fun', '1d2')
                    .code('', '의 추가 대미지.');
                })(p.tab(i).set(`<h3>평범한 ${['검', '창', '지팡이', '활'][i]}</h3>`).box('c'));
            }

            (p => {
                p
                .code(0, '가격: ')
                .code('num', '100G<br/>')

                .code(0, '피격 시 데미지를')
                .code('num', ' 1 ')
                .code(0, '감소시킨다.<br/>')

                .code(0, '한번의 공격에')
                .code('num', ' 10 ')
                .code(0, '이상의 데미지를 입을 경우 파괴된다.<br/><br/>')

                .code('//', '// 내구 수치를 적용한 최종 데미지를 기준으로 파괴 여부를 결정한다.')
            })(p.tab(4).set('<h3>평범한 방패</h3>').box('c'));
        })(board.tab('gear', 'div').set('<h2>무기 [장착/전투/일반]</h2>'));
    }

    fun['food'] = () => {
        (p => {
            (p => {
                p
                .code(0, '가격: ').code('num', '15G<br/>')
                .code(0, '내용물이 다양한 빵<br/><br>')
                .code('fun', '1d100')
                .code(0, '을 굴려 다음과 같은 효과를 지정한다<br>');

                (p => {
                    p
                    .code('num', '1')
                    .code(0, ': 황금 드로우빵 획득<br/>')
                    
                    .code('logic', 'default')
                    .code(0, ': 회복량 ').code('num', 15);
                    ;
                })(p.tab('a', 'div'));
            })(p.append('<h3>드로우빵[일반]</h3>').box('a'));

            (p => {
                p
                .code(0, '황금알을 사용한 귀중한 빵<br/>')
                .code(0, '회복량 ').code('num', 55);
            })(p.append('<h3>황금 드로우빵[히든 피스]</h3>').box('b'));

            (p => {
                p
                .code(0, '가격: ').code('num', '45G<br/>')
                .code(0, '<strong>킹</strong>의 최애 라면<br/>')
                .code(0, '회복량 ').code('num', 25);
            })(p.append('<h3>레드 데몬즈 누들[일반]</h3>').box('c'));

            (p => {
                p
                .code(0, '가격: ').code('num', '90G<br/>')
                .code(0, '<strong>아 따블르</strong>의 간판 음식<br/>')
                .code(0, '회복량 ').code('num', 35);
            })(p.append('<h3>헝그리 버거[일반]</h3>').box('d'));

            (p => {
                p
                .code(0, '가격: ').code('num', '150G<br/>')
                .code(0, '전함 모양의 군관 모음<br/>')
                .code(0, '회복량 ').code('num', 45);
            })(p.append('<h3>군관 오마카세 도시락[일반]</h3>').box('e'));
        })(board.tab('food', 'div').set('<h2>식사 [소비/비전투/?]</h2>').tab('div', 'div').set('1칸 소지 수 1개'));
    }

    fun['etc'] = () => {
        (p => {
            (p => {
                p
                .code(0, '가격: ').code('num', '100G<br/>')
                .code(0, '1칸 소지수 1개<br/><br/>')
                .code(0, '휴식 선언 시 사용가능, <br/>')
                .code(0, '이 휴식에서의 LP와 SP의 회복량을 2배로 적용한다.<br/>')
            })(p.append('<h3>모닥불[소비/비전투/일반] </h3>').box('a'));

            (p => {
                p
                .code(0, '가격: ').code('num', '300G<br/>')
                .code(0, '1칸 소지수 3개<br/><br/>')
                .code(0, '탐색 도중 사용 가능,  <br/>')
                .code(0, '와드 주위의 3x3 범위를 밝힌다.<br/>')
                .code(0, '5라운드동안 유지된다.<br/>')
            })(p.append('<h3>와드[소비/비전투/일반] </h3>').box('b'));

            (p => {
                p
                .code(0, '가격: ').code('num', '2000G<br/>')
                .code(0, '1칸 소지수 1세트<br/><br/>')
                .code(0, '잠긴 문을 {지능} 판정에 성공하면 열 수 있다.  <br/>')
                .code(0, '판정을 하기 위해 행동력이 1 필요하다.<br/>')
            })(p.append('<h3>피킹 툴 [장착/비전투/일반]').box('c'));
        })(board.tab('etc', 'div').set('<h2>기타 탐색용품 [?/?/?]</h2>').tab('div', 'div'));
    }

    fun['_0'] = () => board.tab('_etc', 'div').set('그 외 시나리오에서 필요한 상품이나 추가할 상품이 있을 경우 상점에 등록하는 것도 가능.');
    return [fun, ['_', 'inv', 'drug', 'gear', 'food', 'etc', '_0']];
}