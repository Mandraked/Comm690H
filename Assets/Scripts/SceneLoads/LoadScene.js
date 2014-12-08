﻿#pragma strict

static var scene = "";
var spaceSuit : GameObject;
var alphaFadeValue = 1;
var blackTexture : Texture;

function Start () 
{

}

function OnTriggerEnter(other : Collider)
{
	if (other.tag == 'Player')
	{
		switch (MainScript.currentScene)
		{
			case 1:
				if (scene == 'Scene2' && MainScript.allowScene2) 
				{
					PlayerGUI.wearingSpaceSuit = true;
					Camera.main.enabled = false;
					Application.LoadLevel(scene);
				}
				else if (scene == 'Scene3' && MainScript.allowScene3) 
				{
					MainScript.sceneProgression++;
					PlayerGUI.wearingSpaceSuit = true;
					Camera.main.enabled = false;
					Application.LoadLevel(scene);
				}
				else if (scene == 'Scene4' && MainScript.allowScene4) 
				{
					MainScript.sceneProgression++;
					PlayerGUI.wearingSpaceSuit = true;
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
						MainScript.currPos = GameObject.FindGameObjectWithTag('Player').transform.position;
						PlayerGUI.wearingSpaceSuit = true;
						Camera.main.enabled = false;
						Application.LoadLevel('Scene1');
					}
				}
				break;
			case 3:
				MainScript.currPos = GameObject.FindGameObjectWithTag('Player').transform.position;
				PlayerGUI.wearingSpaceSuit = true;
				Camera.main.enabled = false;
				MainScript.allowScene3 = false;
				MainScript.allowScene4 = true;
				Application.LoadLevel('Scene1');
				break;
			case 4:
				MainScript.currPos = GameObject.FindGameObjectWithTag('Player').transform.position;
				PlayerGUI.wearingSpaceSuit = true;
				Camera.main.enabled = false;
				MainScript.allowScene4 = false;
				MainScript.allowScene3 = true;
				Application.LoadLevel('Scene1');
				break;
		}

		for (var i=0;i<2; i++)
	  {
	    if (MainScript.guns[i] && GunSelection.gunLocks[i])
	    {
	    	GunSelection.UnlockWeapons(i);
	    }
	  }
	}
}

function Update () 
{
	
}

