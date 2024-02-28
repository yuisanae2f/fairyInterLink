docs["index"] = function(lng = args()[0], nil) {
    const board = document.getElementById("board");
    let fun = {};

    fun['_'] = () => {
        ((p) => {
            p.tent('title', 'h1').set(
                {
                    "ko" : '페어리 인터링크 TRPG 룰북',
                    "en" : "Fairy Interlink TRPG Rule Book"
                }
                [lng] ?? nil
            );

            p.tab('p', 'p')
            
            .set(
                ({
                    'ko' : '제작팀: ',
                    'en' : 'Team: '
                }[lng] ?? nil)

                + '김빠방 팬 디스코드 TRPG부<br/>'
            )
            
            .append(
                ({
                    'ko': '문서 및 시스템: ',
                    'en': 'Document & System by: '
                }[lng] ?? nil)

                + 'yuisanae2f'
            );
        })(board.tent('_', 'div'));
    }

    fun['idx'] = () => {
        ((p) => {
            p.tent('title', 'h1').set(
                {
                    "ko": "목차",
                    "en": 'Index'
                }[lng] ?? nil
            );

            ((p) => {
                for(const id of [
                    'trpg',
                    'fairyInterlink', 'howFairy',
                    'chara', 'fairy',
                    'judge',
                    'toolCard',

                    'map',
                    'craft',

                    'sub',
                    'credit'
                ]) {
                    p.tent(id, 'a').set({
                        'trpg': {
                            'ko': 'TRPG란?',
                            'en': 'What is TRPG?',
                        },

                        'fairyInterlink' : {
                            'ko': '페어리 인터링크?',
                            'en': 'What is Fairy Interlink?'
                        },

                        'howFairy' : {
                            'ko': '페어리 인터링크 TRPG의 진행방식',
                            'en': 'How does Fairy Interlink work'
                        },

                        'chara' : {
                            'ko': '캐릭터의 스테이터스',
                            'en': 'status - Character'
                        },

                        'fairy' : {
                            'ko': '페어리의 스테이터스',
                            'en': 'status - Fairy'
                        },

                        'judge' : {
                            'ko': '판정의 작동 방식',
                            'en': "How the judge works"
                        },

                        'toolCard' : {
                            'ko': '도구 카드의 범주',
                            'en': 'Category - Tool Card'
                        },

                        'map' : {
                            'ko': '탐색 맵 / 전투 맵',
                            'en': "maps - Discovery / Battle"
                        },

                        'craft' : {
                            'ko': '캐릭터 시트와 페어리 시트 제작',
                            'en': 'Writing a Character/Fairy sheet'
                        },

                        'sub' : {
                            'ko': '부록',
                            'en': 'Appendix'
                        },

                        'credit': {
                            'ko': '크레딧',
                            'en': "Credit"
                        }
                    }[id][lng] ?? nil).pos().setAttribute('href', getURL(id));
                    p.append('<br>');
                }
            })(p.tab('ul', 'div'));
        })(board.tent('idx', 'div'));
    }

    return [fun, ['_', 'idx']]
}