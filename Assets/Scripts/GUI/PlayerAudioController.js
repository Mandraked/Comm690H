#pragma strict

public var machineGunShootClip : AudioClip;
public var handGunShootClip : AudioClip;
public var hurtClip : AudioClip;
public var deathClip : AudioClip;
public var breathingClip : AudioClip;
public var footstepOutsideClip : AudioClip;
public var footstepInsideClip : AudioClip;
public var warningClip : AudioClip;
public var rechargeClip : AudioClip;
public var emptyGunClip : AudioClip;
public var gunPickupClip : AudioClip;
public var lowHealthClip : AudioClip;

private var machineGunShootAudio : AudioSource;
private var handGunShootAudio : AudioSource;
private var hurtAudio : AudioSource;
private var deathAudio : AudioSource;
private var breathingAudio : AudioSource;
private var footstepOutsideAudio : AudioSource;
private var footstepInsideAudio : AudioSource;
private var warningAudio : AudioSource;
private var rechargeAudio : AudioSource;
private var emptyGunAudio : AudioSource;
private var gunPickupAudio : AudioSource;
private var lowHealthAudio : AudioSource;


function Awake() {
    machineGunShootAudio = gameObject.AddComponent(AudioSource);
    machineGunShootAudio.clip = machineGunShootClip;
    machineGunShootAudio.loop = false;
    machineGunShootAudio.playOnAwake = false;
    machineGunShootAudio.volume = 0.8;
    machineGunShootAudio.dopplerLevel = 0.0;

    handGunShootAudio = gameObject.AddComponent(AudioSource);
    handGunShootAudio.clip = handGunShootClip;
    handGunShootAudio.loop = false;
    handGunShootAudio.playOnAwake = false;
    handGunShootAudio.volume = 0.8;
    handGunShootAudio.dopplerLevel = 0.0;

    hurtAudio = gameObject.AddComponent(AudioSource);
    hurtAudio.clip = hurtClip;
    hurtAudio.loop = false;
    hurtAudio.playOnAwake = false;
    hurtAudio.volume = 0.8;
    hurtAudio.dopplerLevel = 0.0;

    deathAudio = gameObject.AddComponent(AudioSource);
    deathAudio.clip = deathClip;
    deathAudio.loop = false;
    deathAudio.playOnAwake = false;
    deathAudio.volume = 0.8;
    deathAudio.dopplerLevel = 0.0;
    
    breathingAudio = gameObject.AddComponent(AudioSource);
    breathingAudio.clip = breathingClip;
    breathingAudio.loop = false;
    breathingAudio.playOnAwake = false;
    breathingAudio.volume = 0.8;
    breathingAudio.dopplerLevel = 0.0;

    footstepOutsideAudio = gameObject.AddComponent(AudioSource);
    footstepOutsideAudio.clip = footstepOutsideClip;
    footstepOutsideAudio.loop = false;
    footstepOutsideAudio.playOnAwake = false;
    footstepOutsideAudio.volume = 0.1;
    footstepOutsideAudio.dopplerLevel = 0.0;
    
    footstepInsideAudio = gameObject.AddComponent(AudioSource);
    footstepInsideAudio.clip = footstepInsideClip;
    footstepInsideAudio.loop = false;
    footstepInsideAudio.playOnAwake = false;
    footstepInsideAudio.volume = 0.8;
    footstepInsideAudio.dopplerLevel = 0.0;

    warningAudio = gameObject.AddComponent(AudioSource);
    warningAudio.clip = warningClip;
    warningAudio.loop = false;
    warningAudio.playOnAwake = false;
    warningAudio.volume = 0.8;
    warningAudio.dopplerLevel = 0.0;
    
    rechargeAudio = gameObject.AddComponent(AudioSource);
    rechargeAudio.clip = rechargeClip;
    rechargeAudio.loop = false;
    rechargeAudio.playOnAwake = false;
    rechargeAudio.volume = 0.8;
    rechargeAudio.dopplerLevel = 0.0;

    emptyGunAudio = gameObject.AddComponent(AudioSource);
    emptyGunAudio.clip = emptyGunClip;
    emptyGunAudio.loop = false;
    emptyGunAudio.playOnAwake = false;
    emptyGunAudio.volume = 0.8;
    emptyGunAudio.dopplerLevel = 0.0;

    gunPickupAudio = gameObject.AddComponent(AudioSource);
    gunPickupAudio.clip = gunPickupClip;
    gunPickupAudio.loop = false;
    gunPickupAudio.playOnAwake = false;
    gunPickupAudio.volume = 0.8;
    gunPickupAudio.dopplerLevel = 0.0;
    
    lowHealthAudio = gameObject.AddComponent(AudioSource);
    lowHealthAudio.clip = lowHealthClip;
    lowHealthAudio.loop = false;
    lowHealthAudio.playOnAwake = false;
    lowHealthAudio.volume = 0.8;
    lowHealthAudio.dopplerLevel = 0.0;
}

function Update() {

}

function PlayMachineGunShoot() {
    machineGunShootAudio.Play();
}

function PlayHandGunShoot() {
    handGunShootAudio.Play();
}

function PlayHurt() {
	if(hurtAudio.isPlaying==false){
    	hurtAudio.Play();
	}
}

function PlayDeath() {
    if(deathAudio.isPlaying==false){
    	deathAudio.Play();
	}
}

function PlayBreathing() {
	if(breathingAudio.isPlaying==false){
		breathingAudio.Play();
	}
}

function PlayFootstepOutside() {
	if(footstepOutsideAudio.isPlaying==false){
    	footstepOutsideAudio.Play();
	}
}

function PlayFootstepInside() {
	if(footstepInsideAudio.isPlaying==false){
    	footstepInsideAudio.Play();
    }
}

function PlayWarning() {
	if(warningAudio.isPlaying==false){
    	warningAudio.Play();
	}
}

function PlayRecharge() {
    rechargeAudio.Play();
}

function PlayEmptyGun() {
	emptyGunAudio.Play();
}

function PlayGunPickup() {
	gunPickupAudio.Play();
}

function PlayLowHealth() {
	if(lowHealthAudio.isPlaying==false){
		lowHealthAudio.Play();
	}
}