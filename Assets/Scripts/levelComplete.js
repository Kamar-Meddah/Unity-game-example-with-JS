#pragma strict

var sm:SceneManagement.SceneManager;
function LoadNextLevel () {	
    sm.LoadScene(sm.GetActiveScene().buildIndex+1);
 
}