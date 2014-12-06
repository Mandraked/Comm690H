#pragma strict

function Start () {
	hingeJoint.useLimits = true;
	hingeJoint.useMotor = true;
	var limits = hingeJoint.limits;
	limits.min = -20;
	limits.max = 90;
	limits.minBounce = 0;
	limits.maxBounce = 0;
	hingeJoint.limits = limits;
}

var Player : GameObject;

function OnTriggerEnter (other : Collider) {
	if(other.collider.tag == Player.tag)
	{
		hingeJoint.motor.force = 100;
		hingeJoint.motor.targetVelocity = 80;
		hingeJoint.motor.freeSpin = false;
	}
}

function OnTriggerExit (other : Collider) {
	if(other.collider.tag == Player.tag)
	{
		hingeJoint.motor.force = 0;
		hingeJoint.motor.targetVelocity = 0;
		hingeJoint.motor.freeSpin = false;
	}
}

function Update () {

}