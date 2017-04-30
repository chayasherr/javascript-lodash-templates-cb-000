function addComment() {
	// body...
	var comment = document.getElementById('commentText').value;
	var commenter = document.getElementById('commenterName').value;
   
	var divComments = document.getElementById('comments');
 
	// var commentTamplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
    var commentTamplate = document.getElementById('comment-tamplate').innerHTML;
	var tamplateFun = _.template(commentTamplate);
    
    var tamplateHTML = tamplateFun({'comment': comment, 'commenter': commenter});

	divComments.innerHTML += tamplateHTML;
}

