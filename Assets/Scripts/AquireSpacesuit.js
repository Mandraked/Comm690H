#pragma strict

var glove : GameObject;
var spacesuit: GameObject;
//var script : GunSelection;

function Start () {
	glove.gameObject.SetActive(false);
	spacesuit.gameObject.SetActive(true);
	//script.enabled = false;
}

function OnTriggerEnter () {
	glove.gameObject.SetActive(true);
	spacesuit.gameObject.SetActive(false);
	//script.enabled = true;
}

function Update () {

}