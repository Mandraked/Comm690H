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
			if (scene == 'Scene2' && MainScript.allowScene2) 
			{
				Camera.main.enabled = false;
				Application.LoadLevel(scene);
			}
			else if (scene == 'Scene3' && MainScript.allowScene3) 
			{
				Camera.main.enabled = false;
				Application.LoadLevel(scene);
			}
			else if (scene == 'Scene4' && MainScript.allowScene4) 
			{
				Camera.main.enabled = false;
				Application.LoadLevel(scene);
			}
			break;
		case 2:
			if (spaceSuit != null)
			{
				if (spaceSuit.active) return;
				else 
				{
					Camera.main.enabled = false;
					Application.LoadLevel(scene);
				}
			}
			break;
		case 3:
			Camera.main.enabled = false;
			MainScript.allowScene3 = false;
			MainScript.allowScene4 = true;
			Application.LoadLevel(scene);
			break;
		case 4:
			Camera.main.enabled = false;
			MainScript.allowScene4 = false;
			MainScript.allowScene3 = true;
			Application.LoadLevel(scene);
			break;
	}
}

function Update () 
{
	
}

