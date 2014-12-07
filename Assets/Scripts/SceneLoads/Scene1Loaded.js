#pragma strict

var scene2Pos = Vector3(230.81, 1.41, 75.52);
var scene3Pos = Vector3(78.38, 1.41, 322.38);
var scene4Pos = Vector3(437.37, 1.41, 331.22);

var scene2Rot = Vector3(0, 14.02, 0);
var scene3Rot = Vector3(0, 130.39, 0);
var scene4Rot = Vector3(0, 200.00, 0);

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
			GameObject.FindWithTag('Player').transform.position = scene3Pos;
			GameObject.FindWithTag('Player').transform.eulerAngles = scene3Rot;
			break;
		case 4:
			//print('4');
			//print(scene4Pos);
			GameObject.FindWithTag('Player').transform.position = scene4Pos;
			GameObject.FindWithTag('Player').transform.eulerAngles = scene4Rot;
			break;
	}

	MainScript.currentScene = 1;
	Camera.main.enabled = true;
}

function Update () {

}