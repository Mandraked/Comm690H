#pragma strict

static var currentScene = 2;
static var activeGun = -1;
static var guns = Array();
guns.Push(false);
guns.Push(false);

static var allowScene2 = false;
static var allowScene3 = false;
static var allowScene4 = false;

static var currPos = Vector3(0,0,0);

static var gameProgression = 3;
static var sceneProgression = 3;
static var killCount = 0;
static var requiredKills = 5;

function Start () {

}

function Awake() {
	DontDestroyOnLoad (transform.gameObject);
}

function Update () {

}

static function Victory () {
	print('You win');
}

static function GameOver () {
	print('You lose');
}

static function checkKills () {
	return killCount == requiredKills;
}