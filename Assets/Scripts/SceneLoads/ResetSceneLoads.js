#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) {
	if (other.tag == 'Player')
	{
		//MainScript.allowScene2 = false;
		MainScript.allowScene3 = true;
		MainScript.allowScene4 = true;

		switch (MainScript.sceneProgression)
		{
			case 3:
				LoadScene.scene = 'Scene4';
				AI.isAlly = true;
				break;
			case 4:
				LoadScene.scene = 'Scene3';
				AI.isAlly = false;
				break;
			case 5:
				LoadScene.scene = 'Scene4';
				AI.isAlly = true;
				break;
		}
		//print('trigger');
		//print(MainScript.sceneProgression);
	}
}

function Update () {

}