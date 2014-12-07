#pragma strict

var texture : Texture2D;

function Start () {
	Screen.showCursor = false;
}

function Update () {

}

function OnGUI () {
	var vectorx = (Screen.width/2)-60;
	var vectory = (Screen.height/2)+40;
	//GUI.DrawTexture(Rect(vectorx-15,-vectory + Screen.height-15,30,30),texture);
	GUI.DrawTexture(Rect(vectorx-15,-vectory + Screen.height-15,30,30),texture);
}