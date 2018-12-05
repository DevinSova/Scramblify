function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
      enabled: e
    });
  }
  
function restoreOptions() {

    function setCurrentChoice(result) {
        
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get("enabled");
    getting.then(setCurrentChoice, onError);

    if(getting === 'true') 
        document.getElementById("switch").checked = true;
    else if(getting === 'false')
        document.getElementById("switch").checked = false;
}

document.addEventListener("DOMContentLoaded", restoreOptions);
var checkbox = document.querySelector("input[id=switch]");
checkbox.addEventListener('change', function() {
    if(this.checked) {
        console.log("Enabled")
        saveOptions('true');
    }
    else {
        console.log("Disabled")
        saveOptions('false');
    }
})