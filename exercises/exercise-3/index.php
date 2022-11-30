<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!-- https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/ -->
    <script src = "libraries/jquery-3.6.1.min.js"></script>

    <title>Exercise 3</title>

</head>
<body>
    <section>
            <button id="goback" class ="button" onclick="goBack()">Art Gallery</button>
            <button id="submit" class ="button">Submit Masterpiece</button>
            <h2 id="instruction">Draw Something to Share ≖‿≖</h2>
    </section>
    
        <!-- <li class="right-section"> -->
            <canvas id="canvas"></canvas>
        <!-- </li> -->

    <!-- My script(s) -->
    <script src="js/canvasImage.js"></script>
</body>
</html>