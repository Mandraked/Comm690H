#pragma strict

var Player : GameObject;

var startX = -.3576514;
var startY = 0;
var startZ = -19.16467;

var currX = startX;
var finalX = -0.6571289;

var updateRate = 1;
var nextUpdate = 0;

function Start () {
	print("start");
	print(transform.position);
}

function OnTriggerEnter (other : Collider) {
	// if(other.collider.tag == Player.tag)
	// {
	// 	while (currX > finalX)
	// 	{

	// 		if (Time.time > nextUpdate)
	// 		{
	// 			print(currX);
	// 			currX -= .001;
	// 			nextUpdate = Time.time + updateRate;
	// 			transform.position.x = currX;
	// 		}
	// 	}
	// }
}

function OnTriggerExit (other : Collider) {
	// if(other.collider.tag == Player.tag)
	// {
	// 	print("exit");
	// 	while (currX < startX)
	// 	{
	// 		currX += .001;
	// 		transform.position.x = currX;
	// 		yield WaitForSeconds(5);
	// 	}
	// 	print("end2");
	// }
}

function Update () {

}