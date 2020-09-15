function Post(title, message, author) {
        this.title = title,
        this.message = message,
        this.author = author,
        this.views = 0,
        this.comments = [],
        this.isOnline = false
};

const newPost = new Post('a', 'b', 'c');
console.log(newPost);