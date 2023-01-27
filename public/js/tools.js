// scoreboard table

const scoreboard = document.querySelector(".input-data__scoreboard__table");
const scoreboardAdd = document.querySelector(".scoreboard-button__add");
const scoreboardSub = document.querySelector(".scoreboard-button__sub");

let inning = 10;

function addColumn() {
    const firstCell = scoreboard.rows[0].insertCell(inning);
    firstCell.outerHTML = `<th>${inning}</th>`;
    const secondCell = scoreboard.rows[1].insertCell(inning);
    secondCell.innerHTML = '<input class="input-text" min="0" type="number">';
    const thirdCell = scoreboard.rows[2].insertCell(inning);
    thirdCell.innerHTML = '<input class="input-text" min="0" type="number">';
    inning ++;
}
function subColumn() {
    if (inning <= 10) {
        return 0;
    }
    inning --;
    for(let i = 0; i < scoreboard.rows.length; i++)  {
        scoreboard.rows[i].deleteCell(inning);
    }
}

scoreboardAdd.addEventListener('click', addColumn);
scoreboardSub.addEventListener('click', subColumn);

//------------------------------------------------------------------------------------

