#pragma strict

var scene2Pos = Vector3(230.25, 1.41, 78.79);
var scene3Pos = Vector3(85.61, 1.41, 335.96);
var scene4Pos = Vector3(435.24, 1.41, 331.30);

var currPos = Vector3(0,0,0);

var scene2Rot = Vector3(0, 14.02, 0);
var scene3Rot = Vector3(0, 130.39, 0);
var scene4Rot = Vector3(0, 200.00, 0);

function distance3D(vec1, vec2)
{
	var dist = Vector3.Distance(vec1, vec2);
	return dist;
}

function Start () {
	switch(MainScript.currentScene)
	{
		case 1:
			//print('1');
			break;
		case 2:
			//print('2');
			//print(scene2Pos);
			GameObject.FindWithTag('Player').transform.position = scene2Pos;
			GameObject.FindWithTag('Player').transform.eulerAngles = scene2Rot;
			break;
		case 3:
			//print('3');
			//print(scene3Pos);
			if (distance3D(currPos, scene3Pos) < distance3D(MainScript.currPos, scene4Pos)) currPos = scene3Pos;
			else currPos = scene4Pos;

			GameObject.FindWithTag('Player').transform.position = currPos;
			GameObject.FindWithTag('Player').transform.eulerAngles = currPos;
			break;
		case 4:
			//print('4');
			//print(scene4Pos);
			if (distance3D(currPos, scene3Pos) < distance3D(MainScript.currPos, scene4Pos)) currPos = scene3Pos;
			else currPos = scene4Pos;
			
			GameObject.FindWithTag('Player').transform.position = currPos;
			GameObject.FindWithTag('Player').transform.eulerAngles = currPos;
			break;
	}
	//print(currPos);

	MainScript.currentScene = 1;
	Camera.main.enabled = true;
}

function Update () {

}