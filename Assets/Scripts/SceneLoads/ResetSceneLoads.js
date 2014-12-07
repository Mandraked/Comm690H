#pragma strict

function Start () {

}

function OnTriggerEnter (other : Collider) {
	if (other.tag == 'Player')
	{
		//print('Reset Trigger Fired');
		MainScript.allowScene2 = false;
		MainScript.allowScene3 = true;
		MainScript.allowScene4 = true;
	}
}

function Update () {

}