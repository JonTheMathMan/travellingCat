//paths
var totalPaths = 8;
var paths = [];
var pathCoordinates = [178,120,211,153,246,182,217,94,281,149,248,60,283,95,324,117];

//mice
var totalMice = 5;
var mice = [];
var miceCoordinates = [172,183,181,62,247,124,321,178,323,61];

//cat
var catStartX = 170;
var catStartY = 182;

//paths and mice
//should look like: 
function getMicePairs()
{
	var micePairs = [mice[0],mice[1],mice[0],mice[2],mice[0],mice[3],mice[1],mice[2],mice[2],mice[3],mice[1],mice[4],mice[2],mice[4],mice[3],mice[4]];
	return micePairs;
}