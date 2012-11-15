#aSync

aSync is a simple asyncronous javascript loadeer.

##Compatability
 * IE 6+
 * Firefox
 * Chrome
 * Safari

(Firefox, Chrome and Safari versions are untested.  Some functionality was based off of jQuery's AJAX calls, so
assume it has the same compatability as jQuery 1.3).

##How to use

Include the following script at the bottom of your web page


    <script type="text/javascript" src="async.js"></script>
    <script type="text/javascript">

      // This is where you initialize what you want to load
      aSync.load(function(){
        //Load a file
        aSync.file('facebook-javascript.js');
        aSync.file('google-analytics-javascript.js');
        aSync.file('jquery.min.js', function(){
          // You can load files after one file is completely loaded, useful for files dependent on jQuery
          aSync.file('file-that-depends-on-jquery.js');
        });
      });
    </script>

That's it!