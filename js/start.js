function start_game(){
    let score = document.createElement('h1');
    score.classList.add('instruction');
    score.id = 'score';
    $('.container').html(score);

    let board = document.createElement('canvas');
    board.id = 'ruang';
    board.width = 600;
    board.height = 400;
    $('.container').append(board);

    let game = document.createElement('h1');
    game.classList.add('instruction');
    game.id = 'game';
    $('.container').append(game);

    $('#game').html("Dysnake");

    cpRight()

    game_play()
}