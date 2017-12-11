(function() {

    var all = document.querySelectorAll("p,li,td,href,span");

    for (var i=0, max=all.length; i < max; i++) {
	all[i].innerHTML = all[i].innerHTML.replace(/b/g, "🅱️")
    }

})();
