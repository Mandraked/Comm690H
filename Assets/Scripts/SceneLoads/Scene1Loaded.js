#pragma strict

var scene2Pos = Vector3(230.81, 1.41, 075.52);
var scene3Pos = Vector3(078.38, 1.41, 322.38);
var scene4Pos = Vector3(437.37, 1.41, 331.22);

var scene1Rot = 0;
var scene2Rot = 0;
var scene3Rot = 0;
var scene4Rot = 0;

function Start () {

	switch(MainScript.currentScene)
	{
		case 1:
			print('1');
			break;
		case 2:
			print('2');
			print(scene2Pos);
			GameObject.FindWithTag('Player').transform.position = scene2Pos;
			break;
		case 3:
			print('3');
			print(scene3Pos);
			GameObject.FindWithTag('Player').transform.position = scene3Pos;
			break;
		case 4:
			print('4');
			print(scene4Pos);
			GameObject.FindWithTag('Player').transform.position = scene4Pos;
			break;
	}

	MainScript.currentScene = 1;
}

function Update () {

}