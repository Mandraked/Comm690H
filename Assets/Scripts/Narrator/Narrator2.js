#pragma strict

// Public constants
public var text : String[];
public var timeBetweenText : float = 4.0;
public var guiFont : Font;
public var scriptClip : AudioClip;

// Timing
private var timer : float = 0.0;
private var index : int = 0;
private var display : boolean = false;
private var triggered : boolean = false;

// Text
private var textStyle : GUIStyle;

// Sound
private var scriptAudio : AudioSource;
private var player : GameObject;

function Awake() {
	player = GameObject.FindGameObjectWithTag(Constants.PLAYER);

	textStyle = GUIStyle();
	textStyle.alignment = TextAnchor.LowerCenter;
	textStyle.richText = true;
	textStyle.font = guiFont;
	textStyle.fontSize = 24;

	scriptAudio = player.AddComponent(AudioSource);
    scriptAudio.clip = scriptClip;
    scriptAudio.loop = false;
    scriptAudio.playOnAwake = false;
    scriptAudio.volume = 0.8;
    scriptAudio.dopplerLevel = 0.0;
}

function Update() {
	timer += Time.deltaTime;
	if (display && timer >= timeBetweenText) {
		index++;
		timer = 0.0;
		if (index >= text.length) {
			display = false;
		} else {
			scriptAudio.Play();
		}
	}
}

function OnGUI() {
	if (display) {
        var textContent : GUIContent = GUIContent("<color=white>" + text[index] + "</color>");
    	GUI.Label(new Rect(0, Screen.height - 40, Screen.width, 0), textContent, textStyle);
	}
}

function OnTriggerEnter(other : Collider) {
	print(MainScript.sceneProgression);
	if (!triggered && other.gameObject == player && MainScript.sceneProgression == 5) {
		triggered = true;
		scriptAudio.Play();
		display = true;
		timer = 0.0;
	}
}