#pragma strict

var sm:SceneManagement.SceneManager;

function StartGame () {	
    sm.LoadScene(sm.GetActiveScene().buildIndex+1);
 
}

function quit () {	
    Application.Quit();
 
}

