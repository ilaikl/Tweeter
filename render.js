const Renderer = function(){
    const renderPosts= function(posts){
        $("#posts").text("")  //empty the #posts element
        for (let post of posts) {

        //    console.log(post.text)
            let postBox = $("<div class='post' data-id='"+post.id+"' ><p class=text>" + post.text + "</p><input class='comment-input' type='text'><button class='post-comment'>Post Comment</button><br><button class='delete'>Delete Post</button></div>")

            for(let comment of post.comments){
                postBox.append("<div class='comments' data-id='"+comment.id+"' ><span class='delete-comment'>X </span>" + comment.text + "</div>")
                
            }

            $("#posts").append(postBox)
        }
    }
    return{
        renderPosts
    }
}

