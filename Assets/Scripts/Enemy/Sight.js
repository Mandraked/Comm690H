#pragma strict

public var restingFieldOfViewAngle : float = 360.0;
public var combatFieldOfViewAngle : float = 360.0;
public var restingSightRadius : float = 18.0;
public var combatSightRadius : float = 35.0;
public var assuredSightRadius : float = 6.0;
public var lightRadius : float = 45.0;

private var playerInSight : boolean;
private var lastSighting : Vector3;
private var combat : boolean;
private var fieldOfViewAngle : float;
private var sightRadius : float;

private var ai : AI;
private var player : GameObject;

private static var hostile : boolean = false;
public static var isBoss : boolean = false;
private static var bossAttack : boolean = false;

function Awake() {
    ai = GetComponent(AI);
    player = GameObject.FindGameObjectWithTag(Constants.PLAYER);
    combat = false;
}

function Update() {
    //print(hostile);

    if (bossAttack) hostile = true;

    if (hostile) {
        var playerVector : Vector3 = player.transform.position - transform.position;
        var playerDistance: float = Mathf.Abs(playerVector.magnitude);

        if (playerDistance <= lightRadius) {
            ai.EnableLight();
        } else {
            ai.DisableLight();
        }

        if (playerDistance <= assuredSightRadius) {
            combat = true;
        }

        if (combat) {
            sightRadius = combatSightRadius;
            fieldOfViewAngle = combatFieldOfViewAngle;
        } else {
            sightRadius = restingSightRadius;
            fieldOfViewAngle = restingFieldOfViewAngle;
        }

        if (playerDistance <= sightRadius) {
            playerInSight = false;
    
            var angle : float = Vector3.Angle(playerVector, transform.forward);

            if (angle < fieldOfViewAngle) {
                var hit : RaycastHit;
                //print('here');
                
                if (Physics.Raycast(transform.position, playerVector.normalized, hit, sightRadius)) {
                    if (hit.collider.gameObject == player || hit.collider.gameObject.tag == 'LaserBullet' || hit.collider.gameObject.tag == 'CubeBullet') {
                        RegisterSighting();
                    }
                    else
                    {
                        //print(hit.collider.gameObject);
                        //print('fail');
                        playerInSight = false;
                    }
                }
            }
            else playerInSight = false;
        } else {
            playerInSight = false;
        }
    }
}

function IsPlayerInSight() {
    return playerInSight;
}

function GetLastSighting() {
    return lastSighting;
}

function SetCombat(combat : boolean) {
    this.combat = combat;
}

function RegisterSighting() {
    playerInSight = true;
    lastSighting = player.transform.position;
}

static function SetHostile(hostile : boolean) {
    this.hostile = hostile;
}

static function GetHostile() {
    return this.hostile;
}

static function SetBossAttack (attack : boolean) {
    this.bossAttack = attack;
}

static function GetBossAttack () {
    return this.bossAttack;
}

static function GetIsBoss () {
    return this.isBoss;
}

static function SetIsBoss (boss : boolean) {
    this.isBoss = boss;
}
