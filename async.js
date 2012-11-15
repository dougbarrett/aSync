(function(aSync) {

	aSync.load = function(runScript){
		if(typeof runScript === 'function') {
			runScript();
		}
	};
	aSync.file = function(jsFile, onLoadFunction){
		var s = document.createElement('script');
	  	var done = false;

		s.type = "text/javascript";
		s.async = true;
		s.src = jsFile;
		var x = document.getElementsByTagName('script')[0];
		x.parentNode.insertBefore(s, x);
	  if(typeof onLoadFunction === 'function') {
	      s.onload = s.onreadystatechange = function() {
	        if ( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
	          done = true;
	          s.onload = s.onreadystatechange = null;
	          onLoadFunction();
	        }
	      }
	  }
	}

	if (window.attachEvent)
		window.attachEvent('onload', aSync.load);
	else
		window.addEventListener('load', aSync.load, false);
})(window.aSync = window.aSync || {});