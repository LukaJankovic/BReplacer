function textNodesUnder(node){
  var all = [];
  for (node=node.firstChild;node;node=node.nextSibling){
    if (node.nodeType==3) all.push(node);
    else all = all.concat(textNodesUnder(node));
  }
  return all;
}


(function() {

    //var all = document.querySelectorAll("p,li,td,href,span");
    var all = textNodesUnder(document.body)

      console.log(all)

    for (var i=0, max=all.length; i < max; i++) {
	     all[i].textContent = all[i].textContent.replace(/b/g, "🅱️")
       all[i].textContent = all[i].textContent.replace(/B/g, "🅱️")
    }

})();
