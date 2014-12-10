#pragma strict

var screenWidth = Screen.width;
var screenHeight = Screen.height;

var width : float = 0.2 * screenWidth;
var height : float = 0.5 * screenHeight;

var MainMenu : Rect;

function Start () {
	MainMenu = Rect(screenWidth/2 - width/2, screenHeight/2 - height/2, width, height);
	print(width + ' ' + height);
	print(screenWidth + ' ' + screenHeight);
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape) && Application.loadedLevelName != 'title-screen' && Application.loadedLevelName != 'win-screen' && Application.loadedLevelName != 'lose-screen')
	{
		MainScript.isPause = !MainScript.isPause;
		Screen.showCursor = !Screen.showCursor;
		//if (MainScript.isPause) Time.timeScale = 0;
		//else Time.timeScale = 1;
	}
}

function OnGUI () {
	if (MainScript.isPause) GUI.Window(0, MainMenu, TheMainMenu, "Pause Menu");
}

function TheMainMenu () {
	if (GUILayout.Button("Main Menu")) {
		MainScript.isPause = !MainScript.isPause;
		//Time.timeScale = 1;
		MainScript.ResetGame();
		Application.LoadLevel("title-screen");
	}
	if (GUILayout.Button("Restart")) {
		MainScript.isPause = !MainScript.isPause;
		//Time.timeScale = 1;
		MainScript.ResetGame();
		Application.LoadLevel('Scene2');
	}
	if (GUILayout.Button("Quit")) {
		MainScript.isPause = !MainScript.isPause;
		//Time.timeScale = 1;
		Application.Quit();
	}
}