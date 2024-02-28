docs["toolCard"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board"); 

    fun['_'] = () => {
        (p => {
            p.tent('h1', 'h1').set('도구 카드의 범주');
        })(board.tent('_', 'div'));
    };

    fun['cnt'] = () => {
        (p => {
            p.tent('h1', 'h1').set('소비 / 장착');

            p.tab('div', 'div')
            .set('소비 도구 카드는 1회용으로 사용 후 카드는 인벤토리에서 사라진다. <br/><br>')

            .append('장착 도구 카드는 임의의 페어리에게 장착할 수 있으며,<br/>')
            .append('한 페어리에게 1장만 장착할 수 있습니다. <br><br>')

            .append('효과는 (기재가 없는 한) 반영구적으로 지속됩니다. <br/><br/>')

            .append('탐색 상황에서만 장착 도구 카드를 사용할 수 있으며, <br/>')
            .append('장착 도구 카드가 이미 장착되어 있는 상태에서 새로운 장착 도구 카드를 사용할 경우 <br/>')
            .append('기존의 카드는 소멸하게 됩니다.');
        })(board.tent('cnt', 'div'));
    }

    fun['bat'] = () => {
        (p => {
            p.tent('h1', 'h1').set('전투 / 비전투');

            p.tab('div', 'div')
            .set('전투 도구 카드는 전투 상황의 메인 페이즈 때만 사용할 수 있는 카드입니다. <br/>')
            .append('비전투 도구 카드는 탐색 상황 때만 사용할 수 있는 카드입니다.');
        })(board.tent('bat', 'div'));
    }

    fun['wh'] = () => {
        (p => {
            p.tent('h1', 'h1').set('일반 / 히든 피스 / 전용');

            p.tab('div', 'div')
            .set('이 항목은 도구 카드의 레어도를 의미하며, <br/>')
            .append('일반 카드는 인벤토리 1칸에 지정된 개수만큼 넣을 수 있고<br/>')
            .append('종류에 대한 제약은 없습니다.<br><br>')

            .append('히든 피스 도구 카드의 경우 전체 인벤토리에서 1개만 보존 가능하며,<br/>')
            .append('이미 히든 피스 도구 카드가 인벤토리에 있는데 새로운 카드를 획득할 경우 <br/>')
            .append('기존의 카드는 소멸하게 됩니다. <br/><br/>')

            .append('전용 카드의 경우 일부 페어리의 특정 스킬을 통해서 얻을 수 있는 카드로, <br/>')
            .append('전투가 종료되거나 인벤토리에서 벗어나면 사라지게 됩니다.');
        })(board.tent('wh', 'div'));
    }

    return [fun, ['_', 'cnt', 'bat', 'wh']];
}