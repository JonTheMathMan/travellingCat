class Path {
	constructor(leftX=0,topY=0,stepAmount=0)
	{
		this.makePathGraphic(leftX,topY,stepAmount,this);
		this.makePawGraphic(leftX,topY);
		this.makeStepCountBox(leftX,topY,stepAmount);
		this.stepAmount = stepAmount;
	}
	
	makePathGraphic(leftX=0,topY=0,stepAmount=0,parentObject=null)
	{
		var pathGraphic = document.createElement("img");
		pathGraphic.src = "./graphics/Path.png";
		pathGraphic.style.position = "absolute";
		pathGraphic.style.left = leftX;
		pathGraphic.style.top = topY;
		pathGraphic.parentObject = parentObject;
		pathGraphic.parentObject.pathGraphic = pathGraphic;
		document.body.appendChild(pathGraphic);
		pathGraphic.addEventListener("click",this.clicked);
	}
	
	clicked(e)
	{
		const pathGraphic = e.target;
		if(pathGraphic.parentObject.micePair[0].occupied == true || pathGraphic.parentObject.micePair[1].occupied== true)
			{
				pathGraphic.src = "./graphics/redPath.png";

				//custom event
				var pathGraphicClicked = new CustomEvent("pathGraphicClicked");
				pathGraphicClicked.stepCount = pathGraphic.parentObject.stepAmount;
				pathGraphicClicked.pathTarget = pathGraphic.parentObject;
				dispatchEvent(pathGraphicClicked);
				pathGraphic.removeEventListener("click",this.clicked);
			}
	}
	
	
	
	makePawGraphic(leftX=0,topY=0)
	{
		var pawGraphic = document.createElement("img");
		pawGraphic.src = "./graphics/Paw.png";
		pawGraphic.style.position = "absolute";
		pawGraphic.style.left = leftX + 15;
		pawGraphic.style.top = topY;
		document.body.appendChild(pawGraphic);
	}
	
	makeStepCountBox(leftX=0,topY=0,stepAmount=0)
	{
		var stepCount = document.createElement("textarea");
		stepCount.actualCount = stepAmount;
		stepCount.value = stepCount.actualCount;
		stepCount.style.position = "absolute";
		stepCount.style.resize = "none";
		stepCount.disabled = true;
		stepCount.style.width = 30;
		stepCount.style.height = 20;
		stepCount.style.left = leftX + 30;
		stepCount.style.top = topY;
		document.body.appendChild(stepCount);
	}
	
	makeInvisible()
	{
		this.pathGraphic.style.visibility = "hidden";
		//this.pawGraphic.style.visibility = "hidden";
		//this.stepCount.style.visibility = "hidden";
	}
	makeVisible()
	{
		this.pathGraphic.style.visibility = "visible";
		//this.pawGraphic.style.visibility = "visible";
		//this.stepCount.style.visibility = "visible";
	}
	
	wasClicked()
	{
		return this.isClicked;
	}
}