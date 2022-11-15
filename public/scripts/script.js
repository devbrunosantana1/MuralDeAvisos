document.addEventListener('DOMContentLoaded', () => { 
    updatePosts();
});

function updatePosts(){
    fetch("http://localhost:5000/api/all").then(res => {
        return res.json()
    }).then(json=>{

        let postElements = '';
        
        let posts = JSON.parse(json);
        posts.forEach((post) =>{
            let postElements = `<div id=${post.id} class="card mb-4">
            <div class="card-header">
                <div class="h5 card-title">${post.title}</div>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
        </div>`
        postElements += postElements;
        })

        document.getElementById("posts").innerHTML = postElements;
        
    })
}

function newPost() 
{

}