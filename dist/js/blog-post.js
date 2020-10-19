


//////blog-post JSON

loadJSON('GET', 'http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/blogPosts', function(r) {
    document.getElementById('blog').innerHTML  = render(r, 'blog-template');
});
