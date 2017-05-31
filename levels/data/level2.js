//paths
var totalPaths = 16;
var paths = [];
var pathCoordinates = [136,223,160,309,253,338,183,227,220,256,253,287,165,144,225,199,288,252,348,307,257,166,288,199,330,215,254,116,350,138,373,227];

//mice
var totalMice = 9;
var mice = [];
var miceCoordinates = [132,345,181,286,140,122,189,167,255,229,327,283,371,336,329,165,375,112];

//cat
var catStartX = 130;
var catStartY = 345;

//paths and mice
function getMicePairs()
{
	var micePairs = [mice[0],mice[2],mice[0],mice[1],mice[0],mice[6],mice[1],mice[3],mice[1],mice[4],mice[1],mice[5],mice[2],mice[3],mice[3],mice[4],mice[4],mice[5],mice[5],mice[6],mice[3],mice[7],mice[4],mice[7],mice[5],mice[7],mice[2],mice[8],mice[7],mice[8],mice[6],mice[8]];
	return micePairs;
}