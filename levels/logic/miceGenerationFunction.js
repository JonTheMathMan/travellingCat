function makeMouse(leftValue=0,topValue=0)
{
	var newMouse = document.createElement("img");
	newMouse.src = "./graphics/Mouse.png";
	newMouse.style.position = "absolute";
	newMouse.style.left = leftValue;
	newMouse.style.top = topValue;
	newMouse.occupied = false;
	newMouse.alreadyUsed = false;
	newMouse.leftValue = leftValue;
	newMouse.topValue = topValue;
	newMouse.addEventListener("click",logMouse);
	document.body.appendChild(newMouse);
	return newMouse;
}

