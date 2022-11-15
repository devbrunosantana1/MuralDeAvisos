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

    newPost(){
        
        this.posts.push({ id: generateID(), title, description })
    },

    deletePost(id){
        
    }
}

function generateID(){
    return Math.random().toString(36).substring(2, 9);
}