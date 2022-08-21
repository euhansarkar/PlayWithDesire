const selectedPlayarArray = [];

function displayArray(arr){
    const showPlayers = document.getElementById('show-players');
    showPlayers.innerHTML = '';
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].playerName)
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${arr[i].playerName}</td>
        `
        showPlayers.appendChild(tr);
    }
}

function addToLeaderBoared(getValue){
    const getPlayerName = getValue.parentNode.children[0].innerText;
    const playerObj = {
        playerName: getPlayerName,
    }
    selectedPlayarArray.push(playerObj);
    displayArray(selectedPlayarArray);

    document.getElementById('player-number').innerText = selectedPlayarArray.length;
}

function calculatePlayerExpences(){
    let getPlayerNumber = parseInt((document.getElementById('player-number').innerText));
    let get
    let perPlayerExpence = parseInt(document.getElementById('per-player-expence').value);
    let showPlayerExpence = document.getElementById('player-expence');
    let calculate = getPlayerNumber * perPlayerExpence;
    showPlayerExpence.innerText = calculate;
    return calculate;
}



document.getElementById('btn-calculate').addEventListener('click', function(){
    calculatePlayerExpences();
})

function calculateTotalExpences(){
    let getPlayerExpence = parseInt(document.getElementById('player-expence').innerText);
    let getManagerExpence = parseInt(document.getElementById('manager-expence').value);
    let getCoachExpence = parseInt(document.getElementById('coach-expence').value);
    let calculateValue = getPlayerExpence + getManagerExpence + getCoachExpence;
    let getLocation = document.getElementById('total-expence');

    getLocation.innerText = calculateValue;
}

document.getElementById('btn-total-calculate').addEventListener('click', function(){
    calculateTotalExpences();
})



