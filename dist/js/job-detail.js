

/////job-detail JSON


loadJSON('GET', 'http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobDetails', function(r) {
    document.getElementById('detail').innerHTML  = render(r, 'detail-template');
});