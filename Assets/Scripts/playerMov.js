#pragma strict

var rb: Rigidbody;
var force=2000;
var side=100;
var r:gamemManager;
function Start () {
	
}

function FixedUpdate () {
    rb.AddForce(0,0,-force * Time.deltaTime);
    if(Input.GetKey("d"))
        {
            rb.AddForce(-side*Time.deltaTime,0,0,ForceMode.VelocityChange);
        }
        
    if(Input.GetKey("q")){
        rb.AddForce(side*Time.deltaTime,0,0,ForceMode.VelocityChange);
    }
    if(rb.position.y <= -1){
        r.endGame();
    }
}
 