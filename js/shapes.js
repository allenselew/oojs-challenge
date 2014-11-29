/*
    shapes.js
    This is where your code goes

    Write the code to create rectangle and circle classes that extend the
    Shape class defined in shape.js. Then create a couple of other subclasses that
    render different sorts of shapes using the HTML <canvas> functions.
    http://www.w3schools.com/tags/ref_canvas.asp

    You can use either the classical or the prototypal style to create your subclasses

    After you've written the code for the sublcasses, call either registerPrototypalShape()
    or registerClassicalShape() to register your new shapes with the application. See the
    app.js file for info on these functions.
 */

 function renderRectangle(canvasCtx) {
     canvasCtx.fillRect(this.left, this.top, this.width, this.height);
 }
 
 function createRectangle(x, y, height, width, stylesMap) {
     var rectangle = createShape(x, y, height, width, stylesMap);
     rectangle.renderShape = renderRectangle;
     return rectangle;
 }
 
 registerPrototypalShape('Rectangle', createRectangle);

 function renderCircle(canvasCtx) {
    canvasCtx.beginPath();
    //w3schools way to draw a circle
    canvasCtx.arc(this.left, this.top, this.width, 0, 2 * Math.PI, true);
    //stylistic choice to stroke instead of fill
    canvasCtx.stroke();
 }

 function createCircle(x, y, radius, unused, stylesMap) {
    var circle = createShape(x, y, radius, null, stylesMap);
    circle.renderShape = renderCircle;
    return circle;
 }
 
 registerPrototypalShape('Circle', createCircle);

//image to use for special, personal subclass
 var kappaImage = new Image();
 kappaImage.src = './img/kappa.png';
 var firstTime = true;
 function renderKappa(canvasCtx) {
    if (firstTime) {
        y = Math.random()*400+132;
        x = Math.random()*400+132;
        firstTime = false;
    }
    //moves when shape.render(ctx) is called in app.js
    //between the processing time of the first and second interval
    //(rarely)
    setInterval(function() {
        firstTime = true;
    }, 2000);
    setInterval(function() {
        firstTime = false;
    }, 2001);
    canvasCtx.drawImage(kappaImage, y, x);
 }

 function createKappa(x, y, unused, unused2, stylesMap) {
    var kappa = createShape(x, y, unused, unused2, stylesMap);
    kappa.renderShape = renderKappa;
    return kappa;
 }

 registerPrototypalShape('Kappa', createKappa);