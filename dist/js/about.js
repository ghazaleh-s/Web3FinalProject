
///////board JSON
loadJSON('GET', 'http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobBoard', function(r) {
    document.getElementById('board').innerHTML  = render(r, 'board-template');
});


/////Team JSON
loadJSON('GET', 'http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/team', function(r) {
    document.getElementById('team').innerHTML  = render(r, 'team-template');
});


