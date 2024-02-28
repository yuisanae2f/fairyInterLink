include('Component/box.js');
include('Component/code.js');

docs["howFairy"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board"); 

    fun['_'] = () => {
        ((p) => {
            p.tent('title', 'h1').set({
                'ko': '페어리 인터링크 TRPG의 진행방식',
                'en': 'How does Fairy Interlink work'
            }[lng] ?? nil);

            ((p) => {
                p
                .append('페어리 인터링크 TRPG의 시나리오에는 일반 시나리오 / 레이드 시나리오 두 종류가 있습니다. <br/>');
            })(p.tab('desc', 'div'));
        })(board.tent('_'));
    }

    fun['norm'] = () => {
        ((p) => {
            p.tent('title', 'h1').set('일반 시나리오');

            ((p) => {
                p
                .append('해당하는 세계로 워프 후 그 세계를 탐험하고 돌아온다는 흐름이 주가 됩니다. <br/>');
            })(p.tab('desc', 'div'));
        })(board.tent('norm'));
    }

    fun['raid'] = () => {
        ((p) => {
            p.tent('title', 'h1').set('레이드 시나리오');

            ((p) => {
                p
                .append('M사에서 여행자들에게 페어리의 제압을 요청하게 됩니다.<br/>')
                .append('M사에서 여러분들에게 아래 정보를 전달합니다.');
    
                ((p) => {
                    p
                    .code(0, '워프 전 워프 장소(세계관 코드로 기재),<br/>')
                    .code(0, '타겟의 이름 및 사진, <br/>')
                    .code(0, '권장 인원 및 유대, <br/>')
                    .code(0, '성공 보수,<br/>')
                    .code(0, '현재까지 관측된 정보들:');
    
                    ((p) => {
                        p
                        .code('#', '백스토리, 기믹에 대한 추상적 서술 등<br/>')
                        .code('#', '만약 아무런 정보가 없을 경우 해당 정보는 공란일 수 있음')
                    })(p.tab('a'));
                })(p.box('asdf'));
            })(p.tab('desc', 'div'));
        })(board.tent('raid'));

        ((p) => {
            p.tent('title', 'h1').set('레이드 시나리오 정보 틀 예시');

            ((p) => {
                p.append('페어리 인터링크 TRPG 진행은 시나리오의 종류에 관계없이 크게 3개의 단원으로 구성되어 있습니다.');

                ((p) => {
                    p.tent('title', 'h2').set('세션 개시 전');

                    p.tab('desc', 'div')
                    .append('플레이어의 캐릭터와 페어리를 정합니다.<br/>')
                    .append('플레이어의 캐릭터인 여행자와 그 여행자가 가지는 페어리는 기존의 시트나 이미 사용한 적 있는 시트를 사용해도 무방합니다.<br/>')
                    .append('단, 리타이어 상태의 지속으로 인해 사용 불가능하게 된 여행자는 사용할 수 없습니다.<br/>')
                    .append('또한, 기본적으로 플레이어는 한 세션 중 하나의 페어리만을 지정해 자신에게 인터링크시 시킬 수 있기 때문에 이를 선택하는 작업 또한 시나리오 시작 전 수행합니다.')
                })(p.tent('pre'));

                ((p) => {
                    p.tent('title', 'h2').set('세션 중');

                    p.tab('desc', 'div')
                    .append('플레이어의 캐릭터들이 세계 간 워프를 통해 특정 세계관으로 이동하고,<br/>')
                    .append('시나리오를 플레이 하게 되는 본 단계입니다.<br/><br/>')
                    
                    .append('워프 사용 전에는 상점에서 인벤토리 확장권이나 도구 카드 등을 구매해서 앞으로의 여행에 대비를 할 수 있도록 합니다.<br/><br/>')

                    .append('기본적으로 여행자들은 초기 소지금 500G(빠방골드, 1G는 한화 약 1000원)을 소지하게 되며,<br/>')
                    .append('구입 가능 품목과 가격에 대해서는 시나리오에서 제시를 해주는 것으로 합니다.<br><br/>')
                    
                    .append('그 외에도 보험 제도나 워프 목적지의 설명에 대해서도 간략하게 들을 수 있습니다.<br/><br>')

                    .append('워프를 사용하기 직전에 플레이어들은 각자의 페어리와 인터링크를 합니다.<br/>')
                    .append('워프를 하고 나서는 GM의 묘사에 맞춰서 시나리오를 탐험해 나가게 됩니다.');
                })(p.tent('on'));

                ((p) => {
                    p.tent('title', 'h2').set('시나리오 종료 후');

                    p.tab('desc', 'div')
                    .append('여행자들의 생존 여부를 판단하면서 스테이터스의 변동치를 적용시킵니다.<br>')
                    .append('크게 LP/SP, 유대, 보험, 칭호, 획득 페어리에 대해서 기재된 순서대로 정리를 진행해야 합니다. <br/><br/>')

                    .append('LP와 SP는 세션 종료 후 다른 세션으로 넘어갈 때 최대치로 회복하는 걸로 취급합니다.<br/><br/>')

                    .append('유대는 시나리오 종료 시 리타이어 상태가 아니였다면 이 시점에 1이 증가합니다<br/>')
                    .append('최애의 페어리일경우 추가로 1 증가하기 때문에 한 세션을 통해 룰 상 얻는 페어리와의 최대 유대는 인터링크 1 + 세션 종료 생존 1이라 도합 2이고, 최애의 정령일 경우 최대 4가 됩니다.<br/>')

                    .append('유대 판정을 종료하고 나서는 보험과 관련된 수칙을 적용시킵니다.<br/>')
                    .append('구입한 보험에 따라서 해당하는 수칙을 적용시킵니다.<br/><br/>')
                    .append('보험의 종류는 2가지, 일반 보험과 프리미엄 보험이 있습니다.<br/><br/>')

                    .append('일반 보험은 500골드를 지불해 가입할 수 있으며,<br/>')
                    .append('이 세션에서 불의의 사고로 인해 본 세계선으로 워프가 불가능할 시 보험사측에서 강제적으로 워프 시킵니다.<br/><br/>')

                    .append('프리미엄 보험은 1000골드를 지불해 가입할 수 있으며, <br/>')
                    .append('이 세션 종료 시에 리타이어 상태이더라도 본 세계선으로 워프함과 동시에 리타이어 상태를 회복시킵니다. <br/>')
                    .append('단, 이 경우 정령과의 유대가 1 감소합니다.<br><br>')

                    .append('이후 기억의 증표의 기입을 진행합니다.<br/>')
                    .append('칭호는 세션 도중에 얻을 경우 세션 종료 후 자신의 여행자/페어리 시트의 이름 앞에 기입하고, 메모란에 해당 칭호의 효과를 기입합니다.<br/><br/>')

                    .append('세션 도중에 새로운 페어리와의 인터링크에 성공했을 경우 시나리오 종료 후 자신의 페어리 칸에 기입이 가능합니다.<br/>')
                    .append('새로운 페어리의 획득 방법은 두 가지로, 적 페어리를 마지막으로 공격해 리타이어 시키거나 일부 아군 페어리와의 상호작용으로 시나리오 내 조건을 만족 시킨 경우 획득 가능합니다.<br><br>')

                    .append('단, 시나리오에서 보스로 지정하는 보스 류의 페어리는 이러한 경로로 획득 할 수 없습니다.<br/><br/>')
                    .append('또한, 세션 종료 시 얻게 되는 페어리와의 유대 증가는 적용시키지 않습니다. <br/>')
                    .append('그렇기 때문에 해당 페어리와의 유대는 최소치인 1로 기입합니다.')
                })(p.tent('off'));
            })(p.tab('desc', 'div'));
        })(board.tent('raidEX'));
    }

    return [fun, ['_', 'norm', 'raid']];
}