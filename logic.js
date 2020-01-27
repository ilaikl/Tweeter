

const Tweeter = function () {
    const _posts = []
    let postIdCounter = 0
    let commentIdCounter = 0


    const getPosts = function () {
        console.log(_posts)
        return _posts
    }
    const addPost = function (text) {
        _posts.push({ id: "p" + postIdCounter, text: text, comments: [] })
        postIdCounter += 1
    }
    const removePost = function (postId) {
        for (post in _posts) {
            if (_posts[post].id == postId)
                _posts.splice(post, 1)
        }
    }
    const addComment = function (text, postId) {
        for (post in _posts) {
            // console.log(_posts[post].id + " =? "+postId)
            if (_posts[post].id == postId) {
                _posts[post].comments.push({ id: "c"+commentIdCounter, text: text })
                commentIdCounter += 1
            }
        }
    }
    const removeComment = function (postId, commentID) {
        for (post in _posts) 
            if (_posts[post].id == postId) 
                for(comment in _posts[post].comments)
                    if(_posts[post].comments[comment].id==commentID)
                        _posts[post].comments.splice(comment,1)
    }
    return {
        getPosts, addPost, removePost, addComment, removeComment
    }
}
