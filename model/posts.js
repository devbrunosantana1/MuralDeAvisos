module.exports = {

    posts: [
        {
            id: "teste",
            title: "test",
            description: "test description"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        
        this.posts.push({ id: generateID(), title, description })
    },

    deletePost(id){
        
    }
}


