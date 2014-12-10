#pragma strict

public var winScene : String = "win-screen";
public var loseScene : String = "lose-screen";
public var pauseTime : float = 1.0;

private var player : PlayerStatus;
private var hasBoss : boolean;
private var timer : float;
private var levelToLoad : String;
private var gameOver : boolean;

function Awake() {
	if (MainScript.sceneProgression != 6)
	{
		var bosses = GameObject.FindGameObjectsWithTag('Boss');
		for (var boss : GameObject in bosses)
		{
			boss.SetActive(false);
		}
	}
	
	player = GameObject.FindWithTag("Player").GetComponent(PlayerStatus);
	hasBoss = !BossIsDestroyed();
	gameOver = false;
}

function Update() {
	if (!gameOver) {
		if (!player.IsAlive()) {
			levelToLoad = loseScene;
			timer = 0.0;
			gameOver = true;
			MainScript.ResetGame();
		}
		if (hasBoss && BossIsDestroyed()) {
			levelToLoad = winScene;
			timer = 0.0;
			gameOver = true;
			MainScript.ResetGame();
		}
	} else {
		timer += Time.deltaTime;

		if (timer >= pauseTime) {
			Application.LoadLevel(levelToLoad);
		}
	}
}

function BossIsDestroyed() {
	return GameObject.FindWithTag("Boss") == null;
}