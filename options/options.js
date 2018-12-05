function saveOptions(enabledOption) {
    e.preventDefault();
    storage.sync.set({
      enabled: enabledOption
    });
  }
  
function restoreOptions() {

    function setCurrentChoice(result) {
        if(result === 'true') 
            document.getElementById("switch").checked = true;
        else if(result === 'false')
            document.getElementById("switch").checked = false;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.sync.get("enabled");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);

var checkbox = document.getElementById("switch");
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