function updateText(node) {
    if(node.nodeType === Node.TEXT_NODE) {

        //AvoiD Scrambling user input
        if(node.parentNode && node.parentNode.nodeName === 'TEXTAREA') {
            return
        }

        let content = node.textContent
        console.log(content)
        content = scrambleText(content)
        console.log(content)
        node.textContent = content
    }

    //Recursively Call on Child Nodes
    for(let i = 0; i < node.childNodes.length; i++) {
        updateText(node.childNodes[i])
    }
}
updateText(document.body)