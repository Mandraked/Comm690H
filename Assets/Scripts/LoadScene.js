#pragma strict

function Start () {

}
var scene = "Scene2";

function OnTriggerEnter()
{
	print("enter");
	Application.LoadLevel(scene);
}

function Update () {

}