let $ = require("jquery");

class PostsService{

    getPosts(userId){
        return $.get(`/api/users/${userId}/posts`);
    }

    getAll(params){
        return $.get(`/api/posts`, params);
    }

}

module.exports = new PostsService();
