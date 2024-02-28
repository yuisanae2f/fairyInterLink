docs["sub"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['_'] = () => board.tent('_', 'div').set('<h1>부록</h1>').tab('a', 'div')
    .set(`<a href='${getURL('sub/failures')}'>대실패 표</a><br>`)
    .append(`<a href='${getURL('sub/fx')}'>상태 이상 표</a><br>`)
    .append(`<a href='${getURL('sub/shop')}'>범용상점</a><br>`)
    .append(`<a href='${getURL('sub/exev')}'>이벤트 예시</a><br>`)
    .append(`<a href='${getURL('sub/world')}'>세계관 부록</a><br>`)
    .append(`<a href='${getURL('sub/sm')}'>샘플 시트</a><br>`)
    .append(`<a href='${getURL('sub/how')}'>추천 툴 사용법</a><br>`);

    return [fun, '_'];
}