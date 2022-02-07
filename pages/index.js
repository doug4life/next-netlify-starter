
    <!DOCTYPE html>
    <html>
    <head>
    <meta content="text/html;charset=ISO-8859-1" http-equiv="Content-Type">
    <title>True Fullscreen in Processing.js demo</title>
    <script src="processing-1.4.1.min.js"></script>
    <script type="text/processing" data-processing-target="canv">
      // Sketch code is included here since it's so short.
      // Normally the Processing code would be in a separate file,
      // referred to in <canvas> down in the <body>, like so:
      // <canvas id="myCanvasID" data-processing-sources="mySketch.pde">
      void setup() {
        size(640, 480);
      }
      
      void draw() {
        for (int i=0; i<50; i++) {
          line(random(width),random(height),random(width),random(height));
        }
        int coinflip = int(random(2)); 
        if (coinflip==0) {stroke(0);} else {stroke(255);} 
      }
      
      // There's probably a better way to do this, but...
      // putting this javascript function in the processing sketch lets
      // the sketch's values for width and height get updated on resize. 
      window.onresize = function() {
        // "canv" is the canvas displaying the Processing program.
        // Make it fill the screen, or the browser window with no sliders:
        var canvElem = document.getElementById("canv");
        var newWidth = document.documentElement.clientWidth;
        var newHeight = document.documentElement.clientHeight;
        canvElem.style.position = "fixed";
        canvElem.setAttribute("width", newWidth);
        canvElem.setAttribute("height", newHeight);
        canvElem.style.top = 0 +"px";
        canvElem.style.left = 0 +"px";
        // size() is Processing, everything else 
        // in this function is javascript
        size(newWidth, newHeight);
      }
    </script>
    </head>

    <body>
      <p>Demonstrates a simple Processing.js sketch running in true full screen! 
      </p>
      <p>As of January 1, 2013...
      </p>
      <ul>
        <li>It works in the current versions of Firefox and Safari.</li>
        <li>Opera lets you INTO full screen, but won't let you out.</li>
        <li>Chrome goes in and out of full screen, but may not display the sketch.</li>
        <li>Don't start with the browser window already maximized.</li>
      </ul> 
      <p>Click on the sketch to toggle between True Full Screen and Full Browser Window.
      </p>
      <canvas id="canv">
        (A Processing sketch should be running right here, but, sadly, your browser
        does not support the HTML5 canvas tag. 
        Try Firefox or Safari.)
      </canvas>

      <script type="text/javascript">
        document.getElementById("canv").onclick=function(){toggleFullScreen()};
        
        function toggleFullScreen() {
          if ((document.fullscreenElement && document.fullscreenElement !== null) || 
              (!document.mozFullScreenElement && !document.webkitFullscreenElement)) { 
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
              document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
            }
          }
        }
        
      </script>
    </body></html>


