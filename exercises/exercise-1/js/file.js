//The file loader
class File {
  constructor(color) {
    localStorage.setItem("Color", color); //saves the color in the local storage
    this.myColor = color;

    document
      .getElementById("inputText")
      .addEventListener("change", readAndHandleTextFile);

    function readAndHandleTextFile() {
      // get the file list ...
      const selectedFileList = this.files;
      const file = selectedFileList[0];
      if (file.type.startsWith("text/")) {
        const pTag = document.createElement("p"); // create a new image element
        const reader = new FileReader();
        //once is read
        reader.addEventListener("load", function () {
          pTag.textContent = reader.result;
          this.myColor = reader.result;
          localStorage.setItem("Color", reader.result);
          // append to the document
          document.getElementById("resText").appendChild(pTag);
          var textDescription = document.getElementById("inputText");
        });
        // to read the file as text
        reader.readAsText(file);
      } //if
    } //event handler
  }

  //Gets the  color from the local storage
  fileColor() {
    return localStorage.getItem("Color");
  }
}
