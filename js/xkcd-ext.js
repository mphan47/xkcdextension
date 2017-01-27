var xhr = new XMLHttpRequest();
//defaultSetup();

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


xhr.responseType = "json";
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        //console.log(readBody(req));
        alert(xhr.responseText);
    }
}
xhr.open('GET', 'http://xkcd.com/info.0.json', true);
xhr.send(null);


//onload is a property of the request - when req is filled, setuppage(html)
function defaultSetup(){
	req.onload = fillPage();
	req.open("GET", "http://xkcd.com/info.0.json", true);
	req.send();
}

function fillPage() {
  	//breaks the function(why?)
	//var response = JSON.parse(req); 
  	
  	var data = req.responseText;

  	//also breaks function
  	//var jsonResponse = JSON.parse(data);
  	document.getElementById('comicTitle').innerHTML = "called from fillPage";

}


function getComic(comicUrl){
	current = this.response.comicUrl;
	req.open('GET', comicUrl, 'true')
}

function getFirst(){
	current = 1;
	getComic('http://xkcd.com/1/info.0.json');
}

function getPrev(){
	if(current > 1){
		current = current-1;
		getComic('http://xkcd.com/' + current + '/info.0.json');
	}
}

function getRandom(){
  	document.getElementById('comicTitle').innerHTML = "getRandomCalled";
}

function getNext(){
	getComic
}

function getRecent(){
	getComic();
}


//add buttons and listeners to each button (nav bars)