/**
 * @param {node}    node    Node from page
 */
function updateText(node) {
    if(node.nodeType === Node.TEXT_NODE) {

        //Avoid scrambling user input
        if(node.parentNode && node.parentNode.nodeName === 'TEXTAREA') {
            return;
        }

        let content = node.textContent;
        content = scrambleText(content);
        node.textContent = content;
    }

    //Recursively Call on Child Nodes
    for(let i = 0; i < node.childNodes.length; i++) {
        updateText(node.childNodes[i]);
    }
}

function createObserver() {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if(mutation.addedNodes && mutation.addedNodes.length > 0) {
                for(let i = 0; i < mutation.addedNodes.length; i++) {
                    const newNode = mutation.addedNodes[i];
                    updateText(newNode);
                }
            }
        });
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

function main() {
    //Update the current page text
    //Create an Observer for new page text
    updateText(document.body)
    createObserver()
}

main()
