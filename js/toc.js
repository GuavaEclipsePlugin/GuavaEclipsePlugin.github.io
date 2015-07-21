function createToc() {
	
var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<ul>";

var newLine, el, title, link;

$("h3, h4, h5").each(function(i) {
    var current = $(this);
    current.attr("id", "title" + i);
    newLine =
        "<li title='" + current.prop('tagName') + "'>" +
        "<a id='link" + i + "' href='#title" +
        i + "' title='" + current.prop('tagName') + "'>" + 
        current.html() + "</a>"
        +"</li>";
    ToC += newLine;
    
	
});

ToC +=
   "</ul>" +
  "</nav>";

$(".toc").prepend(ToC);

} 
