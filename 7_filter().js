let ages = [1, 56, 1, 9, 16];

// it returns true and false
// if true it grabs the value otherwise dont
let filter = ages.filter((age) => age > 15);
console.log(filter);



let post = { id: 4, title: 'New Post' };
let comments = [
    {
        postId: 4, comments = 'Okay'
    },
    {
        postId: 3, comments = 'Okay1'
    },
    {
        postId: 4, comments = 'Okay2'
    },
]

let getPost = (post, comments) => {
    comments.filter((comment => {
        return comment.postId === post.id
    }))
}

getPost(post, comments)