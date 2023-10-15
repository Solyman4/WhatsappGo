

// dilog
var dil = document.getElementById("myModal");
var qui = document.getElementById("qui");
qui.onclick = function () {
    dil.style.display = "block";
}
var closesp = document.getElementById("close");
closesp.onclick = function () {
    dil.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == dil) {
        dil.style.display = "none";
    }
}
// end dilog 


var bt = document.getElementById('bt');
var nume = document.getElementById('num');

nume.addEventListener('keyup', function (e) {
    if (nume.value && e.key == "Enter") {
        go();
    }
});


bt.onclick = go;


function go() {
    var num = document.getElementById('num').value;
    if (num) {
        location.href = "https://wa.me/" + num;
    }
}


// Side work ...


const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', (e1) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});