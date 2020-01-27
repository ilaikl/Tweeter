const tweeter = Tweeter()
const renderer = Renderer()

tweeter.addPost("This is my own post!")
tweeter.addPost("wwewwt!")
tweeter.addPost("fffffffffffff!")
tweeter.addPost("eeeeeeeeeeeee!")
tweeter.addPost("rrrrrrrrrrr!")
tweeter.addPost("qqqqqqqqqq!")
//tweeter.removePost("p1")
//
tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("ffffffffffff", "p3")
tweeter.addComment("Second the best!", "p2")

//tweeter.removeComment("p2", "c1")
console.log(tweeter.getPosts())

const postFunc = function () {
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())
}

$("#posts").on("click", ".post-comment", function () {

    tweeter.addComment($(this).siblings('.comment-input').val(), $(this).closest(".post").data().id)

    renderer.renderPosts(tweeter.getPosts())
});

$("#posts").on("click", ".delete", function () {

    tweeter.removePost($(this).closest(".post").data().id)

    renderer.renderPosts(tweeter.getPosts())
});

$("#posts").on("click", ".delete-comment", function () {

    tweeter.removeComment($(this).closest(".post").data().id,$(this).closest(".comments").data().id)

    renderer.renderPosts(tweeter.getPosts())
});


renderer.renderPosts(tweeter.getPosts())
