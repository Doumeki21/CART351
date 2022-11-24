<?php
$imgArr = scandir("upload");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/gallery.css" />

    <!-- https://blog.logrocket.com/responsive-image-gallery-css-flexbox/ -->

    <title>Art Gallery</title>
</head>
<body>
<div class="container">
      <h2 class="heading-text">The <span>Art Gallery</span></h2>

      <div id="sketch">
         <button class ="button" onclick="sketch()">Sketch</button>
      </div>

      <ul class="image-gallery">
        
          <?php for($i=2; $i<count($imgArr);$i++){  

            echo("<li>");

            echo("<img src='upload/$imgArr[$i]'. alt='' />");

            // echo("<div class='overlay'><span>Image title</span></div>");
            echo("</li>");
           } ?>
       
      </ul>
    </div>

    <script>
      function sketch() {
        window.location.href = 'index.php';
      }
    </script>
</body>
</html>