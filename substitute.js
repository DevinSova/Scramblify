function updateText(node) {
    if(node.nodeType == Node.TEXT_NODE) {
        let content = node.textContent
        content = scrambleText(content)
        node.textContent = content
    }
}

updateText(document.body)