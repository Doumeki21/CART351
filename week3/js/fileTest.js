window.onload = function () {
  document
    .getElementById("inputTest")
    .addEventListener("change", customFileHandler);
  document
    .getElementById("inputImage")
    .addEventListener("change", readAndHandleImageFile);
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
        console.log(reader.result);
        pTag.textContent = reader.result;
        // append to the document
        document.getElementById("resText").appendChild(pTag);
      });
      // to read the file as text
      reader.readAsText(file);
    } //if
  } //event handler

  /*handle reading and viewing of image file */
  /*handle reading and viewing of image file */
  function readAndHandleImageFile() {
    // get the file list ...
    const selectedFileList = this.files;
    const file = selectedFileList[0];

    if (file.type.startsWith("image/")) {
      const img = document.createElement("img"); // create a new image element
      const reader = new FileReader();

      /*add an event listener for once the file has been read successfully by the
      readAsDataURL function ..*/
      reader.addEventListener("load", function () {
        // get the result which has been formatted as  data:URL - (the encoded image)
        console.log(reader.result);
        img.src = reader.result;
        // append to the document
        document.getElementById("resContainer").appendChild(img);
      });
      //STARTS THE PROCESS OF READING
      reader.readAsDataURL(file);
    } //end if
  } //end event handler

  function customFileHandler(event) {
    // get the file list ...
    //THIS = THE FILE OBJECT THAT HAS CHANGED.
    const selectedFileList = this.files;
    console.log(selectedFileList);
    const numFiles = selectedFileList.length;
    console.log("the number of files selected:: " + numFiles);

    //FOR LOOP >> THERE MIGHT BE MORE THAN 1 FILE SELECTED
    for (let i = 0; i < numFiles; i++) {
      console.log("name:: " + selectedFileList[i].name);
      console.log("size:: " + selectedFileList[i].size + " bytes");
      console.log("file type:: " + selectedFileList[i].type);
    }
  }

  /* access the drop box */
  //DRAG AND DROP IN VJS
  let dropbox;
  dropbox = document.getElementById("dropTarget");
  console.log(dropbox);
  dropbox.addEventListener("dragenter", dragEnterFile, false); // when enter
  dropbox.addEventListener("dragover", dragOverFile, false); //when over
  dropbox.addEventListener("drop", handleDropFile, false); //when dropped

  // WE MUST stop the default behaviour that the event would perform ...
  function dragEnterFile(event) {
    console.log("dragging");
    /*https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation*/
    event.stopPropagation();
    /*https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault*/
    event.preventDefault();
  }

  function dragOverFile(event) {
    console.log("File(s) in drop zone");
    event.stopPropagation();
    event.preventDefault();
  }

  function handleDropFile(event) {
    event.stopPropagation();
    event.preventDefault();
    // get the data transfer object :: holds info about what was dropped  -
    const dataTransferObj = event.dataTransfer;
    console.log(dataTransferObj);
    const files = dataTransferObj.files;
    // now call the handleFiles function ...
    handleFiles(files);
  }

  /* handle what should we do with the files... */
  function handleFiles(selectedFileList) {
    console.log(selectedFileList);
    const numFiles = selectedFileList.length;
    console.log("the number of files selected:: " + numFiles);
    for (let i = 0; i < numFiles; i++) {
      console.log("name:: " + selectedFileList[i].name);
      console.log("size:: " + selectedFileList[i].size + " bytes");
      console.log("file type:: " + selectedFileList[i].type);
    }
  }
};
