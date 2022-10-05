// let bookGlobalVar = {
//   // key = property, value = value
//   Title: "One Flew Over the Cuckoo's Nest",
//   Author: "Kem Kesey",
//   Genre: "Psychological Fiction",
//   Edition_Years: [1983, "1998", "2008", "2014"], //nums and strings
//   Book_Image: "banana.jpg",

//   Detail: {
//     Publisher: "Berkley; Reprint edition",
//     Publication_Year: 1963,
//     ISBN: "0451163966",
//     Language: "English",
//     Pages: 272,
//   },
// };

let books = [
  {
    Title: "One Flew Over the Cuckoo's Nest",
    Author: "Kem Kesey",
    Genre: "Psychological Fiction",
    Edition_Years: [1983, "1998", "2008", "2014"], //nums and strings
    Book_Image: "banana.jpg",
    Detail: {
      Publisher: "Berkley; Reprint edition",
      Publication_Year: 1963,
      ISBN: "0451163966",
      Language: "English",
      Pages: 272,
    },
  },
  {
    Title: "A Clockwork Orange",
    Author: "Anthony Burgess",
    Genre: "Psychological Fiction",
    Edition_Years: ["2008", "2014"], //nums and strings
    Book_Image: "pic03.jpg",
    Detail: {
      Publisher: "Penguin Modern Classics; Later Printing Edition",
      Publication_Year: 2000,
      ISBN: "0141182601",
      Language: "English",
      Pages: 176,
    },
  },
  {
    Title: "Eloquent JavaScript",
    Author: "Marijn Haverbeke",
    Genre: "Programming Languages",
    Book_Image: "banana.jpg",
  },
];

$(document).ready(function () {
  console.log("loaded");
  // access the result container
  let resultContainer = $("#result-container");
  //   displaySingle(bookGlobalVar, resultContainer);
  //   for (let i = 0; i < books.length; i++) {
  //     displaySingle(books[i], resultContainer);
  //   }
  
//   let i in books = only for objects with a position...
  for (let book of books) {
    displaySingle(book, resultContainer);
  }

  function displaySingle(book, parentContainer) {
    //     //A: access ALL top level properties
    //         //1: get all keys as an array :
    //         let keys = Object.keys(book);
    //         console.log("*** Object KEYS ***")
    //         console.log(Object.keys(book));
    //   } //displaySingle

    //jquery function::
    console.log("JQUERY");
    //make the book container and append to parent
    let singleBookContainer = $("<article>")
      .addClass("single-book")
      .appendTo(parentContainer);
    //   for each element in book (which is the object), run the elements.
    //
    //     $.each(book, function (index, value) {
    //       let bookPropertyPara = $("<p>")
    //         .addClass("single-book-para")
    //         .appendTo(singleBookContainer);
    //       // creating an element  ** NOT accessing
    //       bookPropertyPara.html(`${index} : ${value}`);
    //     });

    for (let prop in book) {
      let bookPropertyPara = $("<p>")
        .addClass("single-book-para")
        .appendTo(singleBookContainer);
      // creating an element  ** NOT accessing
      bookPropertyPara.html(`${prop}: ${book[prop]}`);

      if (prop === "Detail") {
        //console.log(value)
        let detailContainer = $("<div>")
          .addClass("detail-container")
          .appendTo(singleBookContainer);

        $.each(book[prop], function (indexDetail, valueDetail) {
          //  console.log(indexDetail);
          //console.log(valueDetail);
          let detailProperty = $("<p>").addClass("detail-prop"); // creating an element  ** NOT accessing

          detailProperty.html(`${indexDetail} : ${valueDetail}`);
          $(detailProperty).appendTo(detailContainer);
        });
      } //if Detail
      else if (prop === "Book_Image") {
        //show the image ...
        let detailImage = $("<img>")
          .addClass("single-book-image")
          .appendTo(singleBookContainer);
        $(detailImage).attr("src", `resources/${book[prop]}`);
      }
      //default
      else {
        let bookPropertyPara = $("<p>")
          .addClass("single-book-para")
          .appendTo(singleBookContainer); // creating an element  ** NOT accessing
        bookPropertyPara.html(`${prop} : ${book[prop]}`);
      }
    }
  } //displaySingle
});
