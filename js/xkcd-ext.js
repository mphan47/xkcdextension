var xhr = new XMLHttpRequest();
var current = 0;
var recent = 0;

//ftb = first top bottom, add an event listener to call for the right comic
var ftb = document.getElementById("firstTop");
ftb.addEventListener("click", getFirst, false);
var ptb = document.getElementById("prevTop");
ptb.addEventListener("click", getPrev, false);
var rtb = document.getElementById("randomTop");
rtb.addEventListener("click", getRandom, false);
var ntb = document.getElementById("nextTop");
ntb.addEventListener("click", getNext, false);
var ltb = document.getElementById("lastTop");
ltb.addEventListener("click", getRecent, false);

var fbb = document.getElementById("firstBottom");
fbb.addEventListener("click", getFirst, false);
var pbb = document.getElementById("prevBottom");
pbb.addEventListener("click", getPrev, false);
var rbb = document.getElementById("randomBottom");
rbb.addEventListener("click", getRandom, false);
var nbb = document.getElementById("nextBottom");
nbb.addEventListener("click", getNext, false);
var lbb = document.getElementById("lastBottom");
lbb.addEventListener("click", getRecent, false);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
    	if (xhr.status === 200){
    		
    		var text = JSON.parse(this.responseText);
    		current = Number(text.num);
    		if(current > recent){
    			recent = current;
    		}
    		document.getElementById('comicTitle').innerHTML = text.title;
    		document.getElementById('comicNumber').innerHTML = "#" + text.num;
    		document.getElementById('comicImg').src = text.img;
    	}
    }
}

defaultSetup();

//onload is a property of the request - when req is filled, setuppage(html)
function defaultSetup(){
	getRecent();
}

function getComic(comicUrl){
	xhr.open('GET', comicUrl, 'true')
	xhr.send();
}

function getFirst(){
	getComic('http://xkcd.com/1/info.0.json');
}

function getPrev(){
	if(current > 1){
		current = Number(current-1);
	}
	getComic('http://xkcd.com/' + current + '/info.0.json');
}

function getRandom(){
  	document.getElementById('comicTitle').innerHTML = "getRandomCalled";
}

function getNext(){
	if(current < recent){
		current = Number(current+1);	
	}
	getComic('http://xkcd.com/' + current + '/info.0.json');
}

function getRecent(){
	getComic('https://xkcd.com/info.0.json');
}


//add buttons and listeners to each button (nav bars)