docs["credit"] = function(lng = args()[0], nil) {
    let fun = {};
    const board = document.getElementById("board");

    fun['_'] = () => {
        (p => {
            p
            .set('<h1>크레딧</h1>')
            .tab('div', 'div')
            .set('<img src="./src/credit.png" width="60%">');
        })(board.tent('_', 'div'));
    }

    return [fun, ["_"]];
}