const Renderer = function(){
    const renderPosts= function(posts){
        $("#posts").text("")  //empty the #posts element
        for (let post of posts) {

            console.log(post.text)

            let postBox = $("<div class='post' data-id='"+post.id+"' ><p class=text>" + post.text + "</p></div>")

            for(let comment of post.comments){
                postBox.append("<div class='comments' data-id='"+comment.id+"' ><p class=text>" + comment.text + "</p></div>")
            }

            $("#posts").append(postBox)
        }
    }
    return{
        renderPosts
    }
}

