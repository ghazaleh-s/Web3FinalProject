const search = document.getElementById('search');
const jobType = document.getElementById('type');
const city = document.getElementById('city');

/////////////////

const CityEnum = Object.freeze({
    "esf": 'اصفهان',
    "bandar": 'بندرعباس',
    "teh": 'تهران',
    "shir": 'شیراز',
    "rash": 'رشت'
})

const TimeWorkEnum = Object.freeze({
    "part": 'پاره وقت',
    "full": 'تمام وقت'
})


/////////////////
function jobFinder(input, type, city) {
    debugger;
    finds = [];
    switch (type) {
        case "full":
         finds = [];
            for (let i = 0; i < res.length; i++) {

                if (res[i].jobTitle.includes(input) && res[i].contractType == 'تمام وقت') {
                    if (city != "0") {
                        var val = CityEnum[city];
                        if (res[i].location == val) {
                            finds.push(res[i]);
                        }
                    } else {
                        finds.push(res[i]);
                    }
                }
            }
            break;
        case "part":
            for (let i = 0; i < res.length; i++) {

                if (res[i].jobTitle.includes(input) && res[i].contractType == 'پاره وقت') {

                    if (city != "0") {
                        var val = CityEnum[city];
                        if (res[i].location == val) {
                            finds.push(res[i]);
                        }
                    } else {
                        finds.push(res[i]);
                    }
                }

            }
            break;
        case "all":
            for (let i = 0; i < res.length; i++) {
                if (res[i].jobTitle.includes(input)) {
                    if (city != "0") {
                        var val = CityEnum[city];
                        if (res[i].location == val) {
                            finds.push(res[i]);
                        }
                    } else {
                        finds.push(res[i]);
                    }
                }

            }
            break;
        default:
            finds.push(res[i]);

    }
    return finds;
}


function eventHandler() {

    result = jobFinder(search.value, jobType.value, city.value);
    document.getElementById('output').innerHTML = render(result, 'job-template');
}
///////////////////////

//////Job JSON 

loadJSON('GET', 'http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobs', function(r) {

    document.getElementById('output').innerHTML = render(r, 'job-template');
});


///////board JSON

loadJSON('GET', 'http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobBoard', function(r) {
    document.getElementById('board').innerHTML  = render(r, 'board-template');
});