let team1p=document.getElementById('teamOne');
let team2p=document.getElementById('teamTwo');
let count1=parseInt(team1p.innerText);
let count2=parseInt(team2p.innerText);

function addOne1(){
	count1+=1;
	team1p.innerText=count1;
}

function addTwo1(){
	count1+=2;
	team1p.innerText=count1;
}

function addThree1(){
	count1+=3;
	team1p.innerText=count1;
}


function addOne2(){
	count2+=1;
	team2p.innerText=count2;
}

function addTwo2(){
	count2+=2;
	team2p.innerText=count2;
}

function addThree2(){
	count2+=3;
	team2p.innerText=count2;
}

function newGame(){
	team1p.innerText=0;
	count1=0;
	team2p.innerText=0;
	count2=0;
}