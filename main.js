const tweeter = Tweeter()
const renderer = Renderer()

tweeter.addPost("This is my own post!")
tweeter.addPost("wwewwt!")
tweeter.addPost("fffffffffffff!")
tweeter.addPost("eeeeeeeeeeeee!")
tweeter.addPost("rrrrrrrrrrr!")
tweeter.addPost("qqqqqqqqqq!")
//tweeter.removePost("p1")

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("ffffffffffff", "p3")
tweeter.addComment("Second the best!", "p2")

//tweeter.removeComment("p2", "c1")
console.log(tweeter.getPosts())

const postFunc = function () {

    renderer.renderPosts(tweeter.getPosts())
}

renderer.renderPosts(tweeter.getPosts())
