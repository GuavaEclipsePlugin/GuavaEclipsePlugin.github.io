function createToc() {
	
var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<ul>";

var newLine, el, title, link;

$("section h2").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ul>" +
  "</nav>";

$(".toc").prepend(ToC);

} 
