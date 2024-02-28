docs["sub/how"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['_'] = () => {
        (p => {
            p.set('<h1>추천 툴 사용법</h1>');

            p.tab('div', 'div')
            .append('<a href="https://ccfolia.com/">CCfolia: 대충 테이블탑 시뮬레이터</a><br/>')
            .append('<a href="https://pixabay.com/ko/">아카이브 1</a><br/>')
            .append('<a href="https://stone-whale.postype.com/post/4912082">아카이브 2</a><br/>');
        })(board.tent('_', 'div'));
    }
    return [fun, ['_']];
}