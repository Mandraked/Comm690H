#pragma strict

// Public constants
public var timeBetweenText : float = 4.0;
public var guiFont : Font;
public var scriptClip : AudioClip;

// Timing
private var timer : float = 0.0;
private var index : int = 0;
private var triggered : boolean = false;
private var display : boolean = false;
private var first : boolean = true;

// Text
private var textStyle : GUIStyle;
private var text = new Array();
private var gameLocation = 0;

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
	if (gameLocation != MainScript.gameProgression && display)
	{
		var i = 0;
		switch (MainScript.gameProgression)
		{
			case 0:
				break;
			case 1:
				print('1');
				var tempText = StoryLine.text1;
				text.length = 0;

				gameLocation++;

				for (i=0; i<(tempText.length); i++)
				{
					text.Push(tempText[i]);
				}
				print(text);
				break;
			case 2:
				print('2');
				tempText = StoryLine.text2;
				text.length = 0;

				gameLocation++;

				for (i=0; i<(tempText.length); i++)
				{
					text.Push(tempText[i]);
				}
				print(text);
				break;
		}
	}

	timer += Time.deltaTime;
	if (display && triggered && (timer >= timeBetweenText || first)) {
		first = false;
		timer = 0.0;
		print('idx ' + index);
		if (index >= text.length) {
			display = false;
			first = true;
			MainScript.gameProgression += 1;
		} else {
			scriptAudio.Play();
			//showText(text[index]);
			index++;
		}
	}
}

function OnGUI() {
	if (display && triggered)
	{
		var txt = text[index-1];

	  var textContent : GUIContent = GUIContent("<color=white>" + txt + "</color>");
		GUI.Label(new Rect(0, Screen.height - 40, Screen.width, 0), textContent, textStyle);
	}
}

function OnTriggerEnter(other : Collider) {
	print(triggered);
	if (!triggered && other.gameObject == player) {
		print('here');
		display = true;
		triggered = true;
		scriptAudio.Play();
		timer = 0.0;
		index = 0;
	}
}