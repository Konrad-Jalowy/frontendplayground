const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_ELEMENT,
    (node) => {
    if(node.nodeName.toLowerCase() === "input" && node.getAttribute("type") == "submit")
      {
        return NodeFilter.FILTER_ACCEPT;
      }
      if(node.nodeName.toLowerCase() === "button" && node.getAttribute("type") == "submit")
      {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_REJECT;
    }
  );
let currentNode;
  while ((currentNode = nodeIterator.nextNode())) {
    currentNode.style.fontWeight = "bold";
  }