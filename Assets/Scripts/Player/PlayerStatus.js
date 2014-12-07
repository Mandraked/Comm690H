#pragma strict

public var maxHealth : int = 100;
public var maxOxygen : int = 100;

public var chokingDamage : int = 10;
public var passiveOxygenDelta : int = 1;

public var updateTime : float = 2.0;

private var timer : float = 0.0;
private var health : int;
private var oxygen : int;
private var alive : boolean;
private var choking : boolean;

function Awake() {
	timer = 0.0;
	health = maxHealth;
	oxygen = maxOxygen;
	alive = true;
	choking = false;
}

function Update() {
	timer += Time.deltaTime;
	if (timer >= updateTime) {
		timer = 0.0;
		if (GameObject.FindGameObjectWithTag("PlanetSurface") != null) {
			TakeOxygen(passiveOxygenDelta);
		} else {
			TakeOxygen(-passiveOxygenDelta);
		}

		if (choking) {
			TakeDamage(chokingDamage);
		}
	}
}

function TakeDamage(damage : int) {
	health -= damage;

	if (health < 0) {
		health = 0;
	}

	if (health > maxHealth) {
		health = maxHealth;
	}

	if (health == 0) {
		alive = false;
	}
}

function TakeOxygen(damage : int) {
	choking = false;

	oxygen -= damage;

	if (oxygen < 0) {
		oxygen = 0;
	}

	if (oxygen > maxOxygen) {
		oxygen = maxOxygen;
	}

	if (oxygen == 0) {
		choking = true;
	}
}

function GetHealth() {
	return health;
}

function GetOxygen() {
	return oxygen;
}

function IsAlive() {
	return alive;
}

function IsChoking() {
	return choking;
}
