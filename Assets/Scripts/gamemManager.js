#pragma strict

var SM:SceneManagement.SceneManager;
var Cl:GameObject;
var gamerun;
gamerun=false;
var a:playerMov;

function endGame () {
	
   if(gamerun!=true){
    gamerun=true;
    Invoke("Restart",2);
   }
}

function Restart(){
    SM.LoadScene(SM.GetActiveScene().name);
    gamerun=false;
}

function completeLevel(){
    a.enabled=false;
    Cl.SetActive(true);
}
