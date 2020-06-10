function cpRight(){
    let cpDiv = document.createElement('div');
    cpDiv.classList.add('cpright');
    $('.container').append(cpDiv);

    let cpText = document.createElement('span');
    cpText.classList.add('pcpright');
    $('.cpright').append(cpText);

    $('.pcpright').html("Copyright © 2020 | Dygames.dev");
}
cpRight()