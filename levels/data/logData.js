//build array of click locations
var clickCoordinates = [];
addEventListener("click",newClickCoordinate);
function newClickCoordinate(e)
{
	clickCoordinates.push(e.pageX-10);
	clickCoordinates.push(e.pageY-10);
}

var miceStringLog = [];
function logMouse(e)
{
	miceStringLog.push("mice["+mice.indexOf(e.target)+"]");
}