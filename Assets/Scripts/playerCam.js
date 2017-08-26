#pragma strict

var player:Transform;
var offset=new Vector3();
function Update () {
	transform.position=player.position+offset;
}
