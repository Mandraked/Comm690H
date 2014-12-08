#pragma strict

static var currentScene = 2;
static var guns = Array();
guns.Push(false);
guns.Push(false);

static var allowScene2 = false;
static var allowScene3 = false;
static var allowScene4 = false;

static var currPos = Vector3(0,0,0);

static var gameProgression = 3;
static var sceneProgression = 3;

function Start () {

}

function Awake() {
	DontDestroyOnLoad (transform.gameObject);
}

function Update () {

}