#pragma strict

static var isTesting = false;

static var currentScene = 2;
static var activeGun = -1;
static var playerHealth = 100;
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

static function ResetGame () {
	currentScene = 2;
	activeGun = -1;
	playerHealth = 100;
	guns = Array();
	guns.Push(false);
	guns.Push(false);

	allowScene2 = false;
	allowScene3 = false;
	allowScene4 = false;

	currPos = Vector3(0,0,0);

	gameProgression = 3;
	sceneProgression = 3;
	killCount = 0;
	requiredKills = 5;

	PlayerGUI.wearingSpaceSuit = false;
}

static function Victory () {
	print('You win');
	ResetGame();
	yield WaitForSeconds(2);
	Application.LoadLevel('win-screen');
}

static function GameOver () {
	print('You lose');
	ResetGame();
	yield WaitForSeconds(2);
	Application.LoadLevel('lose-screen');
}

static function checkKills () {
	return killCount == requiredKills;
}