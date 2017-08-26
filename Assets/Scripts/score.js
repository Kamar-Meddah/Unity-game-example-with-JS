#pragma strict

var player:Transform;
var text:UI.Text;
function Update () {
    text.text=(-player.position.z+246).ToString("0");
	
}
