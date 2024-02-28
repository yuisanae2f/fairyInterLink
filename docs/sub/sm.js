docs["sub/sm"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['chara'] = () => {
        (p => {
            p
            .set('<a href="https://docs.google.com/spreadsheets/d/1ZcleO3Zvzi33U5dNcAH3NAEfA-_A3xr8YTZiqK9LlxI/edit?usp=sharing">캐릭터 / 페어리 시트 공란 (스프레드 시트)</a><br/>')
            .append('<a href="https://docs.google.com/spreadsheets/d/1KeFYlTwGCu13sJLRSB_4XOFcCI3Q8-bzm9th0Kt4tO4/edit#gid=458244036">캐릭터 시트(코코폴리아 자동화)</a>')
        })(board.tent('chara', 'div').set('<h1>샘플 캐릭터 시트</h1>').tab('div', 'div'));
    }
    return [fun, ['chara']];
}