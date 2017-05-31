//build array of click locations
var clickCoordinates = [];
addEventListener("click",newClickCoordinate);
function newClickCoordinate(e)
{
	clickCoordinates.push(e.pageX-10);
	clickCoordinates.push(e.pageY-10);
}

//make random numbers
function getRandomInt(min, max)
		{
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		}
function buildRandomNumber(howMany=0)
{
	var randomNumberArray = [];
	for(var i = 0;i<howMany;i++)
		{
			randomNumberArray.push(getRandomInt(1,20));
		}
	localStorage.setItem("randomNumbers",randomNumberArray);
}

var updatedNumbers = [];
function updateNumbers()
{
	var savedNumbers = localStorage.getItem("randomNumbers");
	var updatedNumberArray = savedNumbers.split(",");
	updatedNumberArray.forEach(function(item){updatedNumbers.push(parseInt(item));});
}
updateNumbers();

function getNewNumbers(amount=0)
{
	buildRandomNumber(amount);
	updateNumbers();
}

//paths
for(var c=0;c<totalPaths;c++)
	{
		paths.push(new Path(pathCoordinates[2*c],pathCoordinates[2*c+1],updatedNumbers[c]));
	}

//mice
for(var u=0;u<totalMice;u++)
	{
		mice.push(makeMouse(miceCoordinates[2*u],miceCoordinates[2*u+1]));
	}
mice[0].occupied = true;

//paths and mice
var micePairs = getMicePairs();
for(var w = 0;w<totalPaths;w++)
	{
		paths[w].micePair = [micePairs[2*w],micePairs[2*w+1]]
	}

//cat step count box
var countBox = document.createElement("textarea");
countBox.style.position = "absolute";
countBox.style.left = 0;
countBox.style.top=0;
countBox.style.height = 20;
countBox.style.width = 50;
countBox.style.resize = "none";
countBox.disabled = true;
document.body.appendChild(countBox);

//cat
var cat = document.createElement("img");
cat.src = "./graphics/cat.png";
cat.style.position = "absolute";
cat.style.left = catStartX;
cat.style.top = catStartY;
cat.pawSteps = 0;
cat.addSteps = function(steps=0){cat.pawSteps += steps; countBox.value = cat.pawSteps;};
document.body.appendChild(cat);

//cat movement
addEventListener("pathGraphicClicked",animateCat);
function animateCat(e)
{
	var catX = parseInt(cat.style.left);
	var catY = parseInt(cat.style.top);
	var mouse1 = e.pathTarget.micePair[0];
	var mouse2 = e.pathTarget.micePair[1];
	//if one of a path pointpair is occupied, go to the other point in the pointpair.
	if(mouse1.occupied == true && mouse2.alreadyUsed == false)
	{
		mouse1.occupied = false;
		mouse2.occupied = true;
		mouse2.alreadyUsed = true;
		mouse2.src = "./graphics/redMouse.png";
		cat.addSteps(e.stepCount);
		var mouseX = mouse2.leftValue;
		var mouseY = mouse2.topValue;
		var newAnim = cat.animate([{left:catX,top:catY},{left:mouseX,top:mouseY}],{duration:2000,fill:'forwards'});
		cat.style.left = mouseX;
		cat.style.top = mouseY;
	}else if(mouse2.occupied == true && mouse1.alreadyUsed == false){
		mouse1.occupied = true;
		mouse1.alreadyUsed = true;
		mouse1.src = "graphics/redMouse.png";
		mouse2.occupied = false;
		cat.addSteps(e.stepCount);
		var mouseX = mouse1.leftValue;
		var mouseY = mouse1.topValue;
		var newAnim = cat.animate([{left:catX,top:catY},{left:mouseX,top:mouseY}],{duration:2000,fill:'forwards'});
		cat.style.left = mouseX;
		cat.style.top = mouseY;
	}else{
		e.pathTarget.makeInvisible();
	}
}