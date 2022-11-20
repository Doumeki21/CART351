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
      <h2 class="heading-text">Responsive <span>image gallery</span></h2>

      <div id="sketch">
         <button class ="button" onclick="sketch()">Sketch</button>
      </div>

      <ul class="image-gallery">
        <li>
          <img src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/e6FMMambeO4/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/klCiPmzUw0Y/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/IdNOTjPeHrE/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/O0N9MF--hK4/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/FV3GConVSss/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/0ESjL-Nw22Y/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/KTVn62x6fFw/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>

        <li>
          <img src="https://source.unsplash.com/VSeVhmW4_JQ/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/07aFaTf24Kg/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
        <li>
          <img src="https://source.unsplash.com/DqyYTM7pR2o/640x416" alt="" />
          <div class="overlay"><span>Image title</span></div>
        </li>
      </ul>
    </div>

    <script>
      function sketch() {
        window.location.href = 'index.php';

      }
    </script>
</body>
</html>