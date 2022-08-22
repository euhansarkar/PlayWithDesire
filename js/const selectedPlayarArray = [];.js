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
    

    // you can't push new element if selected player arr is equal or greater then 5
    if(selectedPlayarArray.length < 5){
        let pushingIntoArr = selectedPlayarArray.push(playerObj);
        //add disable attribute if the element is added into the array 
        if(pushingIntoArr){
            let getTheButton = getValue;
            getTheButton.setAttribute("disabled", "");
        }
    }else{
        alert(`you can't add new player`)
    }
    //call display arr 
    displayArray(selectedPlayarArray);

    document.getElementById('player-number').innerText = selectedPlayarArray.length;
}


function calculatePlayerExpences(){
    let getPlayerNumber = parseInt((document.getElementById('player-number').innerText));
    let perPlayerExpence = document.getElementById('per-player-expence');
    let playerExpenceString = perPlayerExpence.value;
    let palyerExpence = parseInt(playerExpenceString);
    let showPlayerExpence = document.getElementById('player-total-expence');
    let calculate = getPlayerNumber * palyerExpence;
    perPlayerExpence.value = '';
    showPlayerExpence.innerText = calculate;
    return calculate;
}


function calculateTotalExpences(){
    let getPlayerExpence = parseInt(document.getElementById('player-expence').innerText);
    let getManagerExpence = document.getElementById('manager-expence');
    let getManagerExpenceString = getManagerExpence.value;
    let managerExpence = parseInt(getManagerExpenceString);
    let getCoachExpence = document.getElementById('coach-expence');
    let getCoachExpenceString = getCoachExpence.value;
    let coachExpence = parseInt(getCoachExpenceString);
    let calculateValue = getPlayerExpence + managerExpence + coachExpence;
    let getLocation = document.getElementById('total-expence');

    getLocation.innerText = calculateValue;
}


document.getElementById('btn-calculate').addEventListener('click', function(){
    calculatePlayerExpences();
})



document.getElementById('btn-total-calculate').addEventListener('click', function(){
    calculateTotalExpences();
})



