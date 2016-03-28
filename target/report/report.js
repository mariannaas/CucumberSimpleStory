$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/book_search.feature");
formatter.feature({
  "line": 1,
  "name": "Book Search",
  "description": "To allows customer to find his favourite books quickly, the library must offer multiple ways to search for a book",
  "id": "book-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Search books by publication year",
  "description": "",
  "id": "book-search;search-books-by-publication-year",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a book with the title \u0027One good book\u0027, written by \u0027Anonymous\u0027, published in 2013",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "another book with the title \u0027Some other book\u0027, written by \u0027Some Author\u0027, published in 2014",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "another book another book with the title \u0027How to cook a dino\u0027, written by \u0027Fred Flintstone\u0027, published in 2007",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the customer searches the books published between 2010 and 2014 years",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "2 books should have been found",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Book 1 should have the title \u0027One good book\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Book 2 should have the title \u0027Some other book\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "One good book",
      "offset": 23
    },
    {
      "val": "Anonymous",
      "offset": 51
    },
    {
      "val": "2013",
      "offset": 76
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 184821850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some other book",
      "offset": 29
    },
    {
      "val": "Some Author",
      "offset": 59
    },
    {
      "val": "2014",
      "offset": 86
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 442455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "How to cook a dino",
      "offset": 42
    },
    {
      "val": "Fred Flintstone",
      "offset": 75
    },
    {
      "val": "2007",
      "offset": 106
    }
  ],
  "location": "BookSearchSteps.addNewBook(String,String,Date)"
});
formatter.result({
  "duration": 404850,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 0
    }
  ],
  "location": "BookSearchSteps.verifyAmountOfBooksFound(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 5
    },
    {
      "val": "One good book",
      "offset": 30
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 5
    },
    {
      "val": "Some other book",
      "offset": 30
    }
  ],
  "location": "BookSearchSteps.verifyBookAtPosition(int,String)"
});
formatter.result({
  "status": "skipped"
});
});