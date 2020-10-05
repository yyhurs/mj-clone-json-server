var allData;
var page;
var li;
var filterBtn = document.querySelector('.js-filter-submit');
var filterTxt = document.querySelector('.js-filter-text');
var filterResult = document.querySelector('.js-result-list');
var allList = document.querySelector('.main__list');
var jobsAmount = document.querySelector('.sort__amount');
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});
xhr.open("GET", `http://localhost:3000/posts`);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "4c996eea-ceb2-4a48-b3e6-c326b99ca109");
xhr.send(allData);
xhr.onload = function(){
    allData = JSON.parse(xhr.responseText);
}
renderContent();
filter();

function renderContent(goPage){
    page = goPage || 1;
    var data;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("GET", `http://localhost:3000/posts?_page=${page}&_limit=6`);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "4c996eea-ceb2-4a48-b3e6-c326b99ca109");
    xhr.send(data);
    xhr.onload = function(){
        console.log(page)
        data = JSON.parse(xhr.responseText);
        filterResult.innerHTML = '';
        for(var i = 0; i < data.length; i++){
            li = document.createElement('li');
            filterResult.appendChild(li);
            li.innerHTML = `
                <li class="main__item" data-item="${data[i].id}">
                <a href="http://localhost:3000/item.html?id=${data[i].id}" class="main__link flex-row justify-content-space-between js-job-link">
                    <div class="main__tertiary-deatils flex-col justify-content-space-between">
                        <div class="details__logo">
                            <img src="${data[i].logoURL}" alt="">
                        </div> 
                        <div class="details__sub"></div>
                    </div>
                    <div class="main__primary-details flex-col justify-content-space-between">
                        <h2 class="details__title">${data[i].title}</h2>
                        <h4 class="details__company">${data[i].company}</h4>
                        <h4 class="details__location flex-row">
                            <i class="material-icons">location_on</i>
                            <span>${data[i].location}</span>
                        </h4>
                        <ul class="details__skill flex-row">
                            <li class="skill-tag skill-tag--pro">
                                <span>精選</span>
                            </li>
                            <li class="skill-tag">
                                <span>${data[i].skill}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="main__secondary-details flex-col justify-content-space-between">
                        <div class="details__payment">
                            <h3 class="salary">${data[i].payment}</h3>
                            <h4 class="unit">TWD 月薪</h4>
                        </div>
                        <h5 class="details__upd-time">${data[i].updTime}</h5>
                    </div>
                </a>
                </li>
            `;
        }
        showPagination(allData);
    }
}
function filter(goPage){
    page = goPage || 1;
    filterBtn.addEventListener('click', function(){
        filterResult.innerHTML = '';
        console.log(allData)
        let searched = allData.map(obj => {
            if (Object.keys(obj).some(property => obj[property].toString().indexOf(filterTxt.value) != -1))
                return obj;
        });
        var result = searched.filter(obj => obj != undefined);
        // console.log(result)
        filterResult.innerHTML = '';
        for(var i = 0; i < result.length; i++){
            li = document.createElement('li');
            filterResult.appendChild(li);
            li.innerHTML = `
                <li class="main__item" data-item="${result[i].id}">
                    <a href="http://localhost:3000/item.html?id=${result[i].id}" class="main__link flex-row justify-content-space-between js-job-link">
                        <div class="main__tertiary-deatils flex-col justify-content-space-between">
                            <div class="details__logo">
                                <img src="${result[i].logoURL}" alt="">
                            </div> 
                            <div class="details__sub"></div>
                        </div>
                        <div class="main__primary-details flex-col justify-content-space-between">
                            <h2 class="details__title">${result[i].title}</h2>
                            <h4 class="details__company">${result[i].company}</h4>
                            <h4 class="details__location flex-row">
                                <i class="material-icons">location_on</i>
                                <span>${result[i].location}</span>
                            </h4>
                            <ul class="details__skill flex-row">
                                <li class="skill-tag skill-tag--pro">
                                    <span>精選</span>
                                </li>
                                <li class="skill-tag">
                                    <span>${result[i].skill}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="main__secondary-details flex-col justify-content-space-between">
                            <div class="details__payment">
                                <h3 class="salary">${result[i].payment}</h3>
                                <h4 class="unit">TWD 月薪</h4>
                            </div>
                            <h5 class="details__upd-time">${result[i].updTime}</h5>
                        </div>
                    </a>
                </li>
            `;
        }
        showPagination(result);
        return searched.filter(obj => obj != undefined);
    });
}

allList.addEventListener('click', function(e){
    var data;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("GET", "http://localhost:3000/posts");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "4c996eea-ceb2-4a48-b3e6-c326b99ca109");
    xhr.send(data);
    xhr.onload = function(){
        data = JSON.parse(xhr.responseText);
        for(var i = 0; i < e.path.length; i++){
            if(e.path[i].className === 'main__item'){
                for(var j = 0; j < data.length; j++){
                    if(data[j].id == e.path[i].dataset.item){
                        var ID = data[j].id
                        // console.log(ID)
                        showEachPage(ID);
                    }
                }
            }
        }
    }
})

function showEachPage(ID){
    // var data = "title=aa&type=full-time&company=bbb&logoURL=&location=ccc&payment=222&skill=ddd&updTime=10&description=qweqwe";
    console.log(location.hash.substr(ID))
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });
    xhr.open("GET", "http://localhost:3000/posts/" + ID);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.13.0");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "657dab1f-c879-4ba7-9387-56dda69fbc57,309f2a04-c324-41b7-a7aa-b38921ce5003");
    xhr.setRequestHeader("Host", "localhost:3000");
    xhr.setRequestHeader("accept-encoding", "gzip, deflate");
    xhr.setRequestHeader("content-length", "109");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
    xhr.onload = function(){
        data = JSON.parse(xhr.responseText);
    }
}

function showPagination(allData){
    var pageLen = Math.floor(allData.length % 6) === 0 ?
        (allData.length / 6) : (Math.floor(allData.length / 6) === 0 ?
            1 : (Math.floor(allData.length / 6) + 1));
    var pageList = document.querySelector('.js-page-list');
    var str = ``;
    page = parseInt(page);
    if (page == 1) {
        str += `
            <li class="page__item page__item--prev page__item--disable" id="js-page-prev"></li>
        `;
    } else {
        str += `
            <li class="page__item page__item--prev" id="js-page-prev"></li>
        `;
    }
    
    let pageStart;
    let pageEnd;
    if(pageLen > 5) {
        if(page - 2 < 1) {
            pageStart = 1;
            pageEnd = 5;
        }else if(page + 2 >= pageLen) {
            pageStart = pageLen - 4;
            pageEnd = pageLen;
        }else{
            pageStart = page - 2;
            pageEnd = page + 2;
        }
    }else{
        pageStart = 1;
        pageEnd = pageLen;
    }
    
    for(let i = pageStart; i <= pageEnd; i++) {
        if(i == page) {
            str +=`
                <li class="page__item page__item--clicked">${i}</li>
            `;
        }else{
            str += `
                <li class="page__item">${i}</li>
            `;
        }
    }

    if(page == pageLen) {
        str += `
            <li class="page__item page__item--next page__item--disable" id="js-page-next"></li>
        `;
    }else{
        str += `
            <li class="page__item page__item--next" id="js-page-next"></li>
        `
    }
    pageList.innerHTML = str;
    var last = (page * 6) > allData.length ? allData.length : (page * 6);
    jobsAmount.textContent = `${page * 6 - 5}-${last} of ${allData.length} jobs`;
}
var pageList = document.querySelector('.js-page-list');
pageList.addEventListener('click', function(e){
    if(e.target.nodeName !== 'LI') {
        return;
    }else if(e.target.className === 'page__item--disable'){
        return;
    }

    let textContent = e.target.textContent;
    let id = e.target.id;
    let goPage;
    if(id !== 'js-page-prev' && id !== 'js-page-next'){
        goPage = parseInt(textContent);
    }else{
        if(id === 'js-page-prev') {
            goPage = page - 1;
        }else{
            goPage = page + 1;
        }
    }
    document.documentElement.scrollTop = 0;

    if(filterTxt.value !== ''){
        filter(goPage);
    }else{
        renderContent(goPage);
    }
})