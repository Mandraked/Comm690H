#pragma strict

var startPos = Vector3(230.8111,1.413393,75.52743);
var secondPos = Vector3(417.1053,1.413393,322.3882);
var thirdPos = Vector3(0,0,0);

function Start () {

	switch(MainScript.currentScene)
	{
		case 1:
			print('1');
			break;
		case 2:
			print('2');
			GameObject.FindWithTag('Player').transform.position = startPos;
			break;
		case 3:
			print('3');
			GameObject.FindWithTag('Player').transform.position = secondPos;
			break;
		case 4:
			print('4');
			GameObject.FindWithTag('Player').transform.position = thirdPos;
			break;
	}

	MainScript.currentScene = 1;
}

function Update () {

}