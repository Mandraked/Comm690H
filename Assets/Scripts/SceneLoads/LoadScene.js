#pragma strict

var scene = "";
var spaceSuit : GameObject;

function Start () 
{

}

function OnTriggerEnter()
{
	switch (MainScript.currentScene)
	{
		case 1:
			if (scene == 'Scene2' && MainScript.allowScene2) Application.LoadLevel(scene);
			else if (scene == 'Scene3' && MainScript.allowScene3) Application.LoadLevel(scene);
			else if (scene == 'Scene4' && MainScript.allowScene4) Application.LoadLevel(scene);
			break;
		case 2:
			if (spaceSuit != null)
			{
				if (spaceSuit.active) return;
				else Application.LoadLevel(scene);
			}
			break;
		case 3:
			MainScript.allowScene3 = false;
			MainScript.allowScene4 = true;
			Application.LoadLevel(scene);
			break;
		case 4:
			MainScript.allowScene4 = false;
			MainScript.allowScene3 = true;
			Application.LoadLevel(scene);
			break;
	}
}

function Update () 
{
	
}

