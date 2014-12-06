#pragma strict

// Public constants
public var maxHealth : int = 100;
public var damageDuration : float = 0.5;
public var healthForegroundTexture : Texture2D;
public var healthBackgroundTexture : Texture2D;
public var guiFont : Font;
public var cheat : boolean = false;

// General references
private var ai : AI;
private var particles : ParticleManager;
private var audioC : AudioController;
private var player : GameObject;

// Health management
private var health : int;
private var alive : boolean;

// GUI
private var maxHealthBarLength : float;
private var healthBarLength : float;
private var healthBarHeight : float;
private var healthBackgroundStyle : GUIStyle;
private var healthForegroundStyle : GUIStyle;
private var textStyle : GUIStyle;
private var deltaY : float;
private var displacementVector : Vector2;

function Awake() {
	ai = GetComponent(AI);
	particles = GetComponent(ParticleManager);
	audioC = GetComponent(AudioController);
	player = GameObject.FindGameObjectWithTag(Constants.PLAYER);

	health = maxHealth;
	alive = true;

	maxHealthBarLength = Screen.width / 6;
	healthBarLength = maxHealthBarLength;
	healthBarHeight = Screen.height / 100;

	healthBackgroundStyle = GUIStyle();
	healthBackgroundStyle.stretchWidth = true;
	healthBackgroundStyle.stretchHeight = true;
	healthBackgroundStyle.normal.background = healthBackgroundTexture;

	healthForegroundStyle = GUIStyle();
	healthForegroundStyle.stretchWidth = true;
	healthForegroundStyle.stretchHeight = true;
	healthForegroundStyle.normal.background = healthForegroundTexture;

	textStyle = GUIStyle();
	textStyle.alignment = TextAnchor.UpperRight;
	textStyle.richText = true;
	textStyle.font = guiFont;

	deltaY = Screen.height / 6;
	displacementVector = Vector2(0, deltaY);
}

function Update() {
	if (!ai.InCombat()) {
		health = maxHealth;
	}

	// Manually damage enemy for testing
	if (cheat && Input.GetKeyDown(KeyCode.M)) {
		TakeDamage(10);
	}
}

function OnGUI() {
	if (ai.InCombat() && alive) {
		var enemyVector : Vector3 = transform.position - player.transform.position;
		var angle : float = Vector3.Angle(player.transform.forward, enemyVector);

        if (angle <= 90) {
        	var textContent : GUIContent = GUIContent("<color=white>" + health + "/" + maxHealth + "</color>");
    		var targetPos : Vector2 = Camera.main.WorldToScreenPoint(transform.position) + displacementVector;
    		targetPos.y = Screen.height - targetPos.y;
    		GUI.Label(new Rect(targetPos.x - maxHealthBarLength / 2, targetPos.y, maxHealthBarLength, healthBarHeight), GUIContent.none, healthBackgroundStyle);
    		GUI.Label(new Rect(targetPos.x - maxHealthBarLength / 2, targetPos.y, healthBarLength, healthBarHeight), GUIContent.none, healthForegroundStyle);
    		GUI.Label(new Rect(targetPos.x - maxHealthBarLength / 2, targetPos.y + healthBarHeight, maxHealthBarLength, healthBarHeight), textContent, textStyle);
    	}
	}
}

function TakeDamage(damage : int) {
	health -= damage;

	if (health < 0) {
		health = 0;
	}

	if (health == 0) {
		alive = false;
	} else {
		audioC.PlayHurt();
	}

	var healthF : float = health;
	var maxHealthF : float = maxHealth;

	healthBarLength = maxHealthBarLength * (healthF / maxHealthF);

	particles.OverrideEmission();

	if (!ai.InCombat()) {
		ai.EnterCombat();
	}
}

function GetHealth() {
	return health;
}

function IsAlive() {
	return alive;
}
