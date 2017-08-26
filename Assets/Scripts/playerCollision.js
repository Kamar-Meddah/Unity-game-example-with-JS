#pragma strict
var a:playerMov;
var r:gamemManager;
function OnCollisionEnter (col:Collision) {
	if(col.gameObject.tag =="obstacle" ){
	a.enabled=false;
	r.endGame();
	};
}

