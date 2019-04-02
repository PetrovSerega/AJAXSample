function createBookTR(book)
{
	var tr = $("<tr></tr>");
	var td1 = $("<td></td>").text(book.position);
	var td2 = $("<td></td>").text(book.nameRU);
	var td3 = $("<td></td>").text(book.author);
	var td4 = $("<td></td>").text(book.genre);
	var td5 = $("<td></td>").html("<strong>" + book.publicationDate +"</strong>");
	var td6 = $("<td></td>").html("<a class='btn btn-outline-primary' href='#' role='button'>Вики</a>");
								
	tr.append(td1,td2,td3,td4,td5,td6);
	
	return tr;
}