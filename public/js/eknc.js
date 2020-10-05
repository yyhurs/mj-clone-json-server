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
}

var li;
var PSubmit = document.querySelector('.r-submit');
PSubmit.addEventListener('click', function(){
    postJob();
});
// var form = document.querySelector('.box');
function postJob(){
    var PTitle = document.querySelector('.r-title');
    var PType = document.querySelector('.r-type');
    var PCompany = document.querySelector('.r-company');
    var PLogo = document.querySelector('.r-logo');
    var PLocation = document.querySelector('.r-location');
    var PPayment = document.querySelector('.r-payment');
    var PSkill = document.querySelector('.r-skill');
    var PUpdtime = document.querySelector('.r-updtime');
    var PDesc = document.querySelector('.r-description');
    // var PTitleS = String(Ptitle.value);

    // e.preventDefault();
    // var data = {};
    // for (var i = 0, ii = form.length; i < ii; ++i) {
    //     var input = form[i];
    //     console.log(input)
    //     if (input.name) {
    //     data[input.name] = input.value;
    //     }
    // }
    var data = `title=${PTitle.value}&type=${PType.value}&company=${PCompany.value}&logoURL=${PLogo.value}&location=${PLocation.value}&payment=${PPayment.value}&skill=${PSkill.value}&updTime=${PUpdtime.value}&description=${PDesc.value}`;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("POST", "http://localhost:3000/posts");
    // xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.13.0");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "46240dc0-bd81-495f-b5db-6ff3836d8297,fbb6987e-f4e5-4b52-9fe2-5862936b5a1d");
    xhr.setRequestHeader("Host", "localhost:3000");
    xhr.setRequestHeader("accept-encoding", "gzip, deflate");
    xhr.setRequestHeader("content-length", "114");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
    // xhr.send(JSON.stringify(data));
    window.location.replace("eknc.html");
    rShowResult();
};

var rResultBtn = document.querySelector('.r-result-btn');
rResultBtn.addEventListener('click', function(){
    rShowResult();
});

function rShowResult(){
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
        var li;
        var filterResult = document.querySelector('.js-result-list');
        filterResult.innerHTML = '';
        rResultBtn.value = `重整列表 (${data.length})`;
        for(var i = 0; i < data.length; i++){
            // console.log(data[i])
            li = document.createElement('li');
            filterResult.appendChild(li);
            li.innerHTML = `
                <li class="main__item" data-item="${data[i].id}">
                    <a href="" class="main__link flex-row justify-content-space-between js-job-link">
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
                        <div class="r-btn-block flex-col justify-content-space-between">
                            <span class="r-del" data-delitem="${data[i].id}">刪除</span>
                            <span class="r-edit" data-edititem="${data[i].id}">編輯</span>
                        </div>
                    </a>
                </li>
            `;
        }
        var anchors = document.getElementsByTagName('a');
        for(i=0, len=anchors.length; i<len; i++){
            anchors[i].addEventListener('click', function(e){e.preventDefault();});
        }

        var allList = document.querySelector('.main__list');
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
                    if(e.path[i].className === 'r-del'){
                        for(var j = 0; j < data.length; j++){
                            if(data[j].id == e.path[i].dataset.delitem){
                                var ID = data[j].id
                                delPost(ID);
                                window.location.replace("eknc.html");
                            }
                        }
                    }else if(e.path[i].className === 'r-edit'){
                        var modal = document.querySelector('.modal-box');
                        modal.style.display = 'block';
                        var closeModal = document.querySelector('.js-close-modal');
                        closeModal.addEventListener('click', function(){
                            modal.style.display = 'none';
                        });
                        for(var j = 0; j < data.length; j++){
                            if(data[j].id == e.path[i].dataset.edititem){
                                var ID = data[j].id
                                var ESubmit = document.querySelector('.e-submit');
                                ESubmit.addEventListener('click', function(){
                                    editPost(ID);
                                    modal.style.display = 'none';
                                    // document.documentElement.scrollTop = 0;
                                    window.location.replace("eknc.html");
                                })
                            }
                        }
                        
                        
                    }
                }
            }
        })
        
        // var editLink = document.querySelector('.r-edit');
        // editLink.addEventListener('click', function(){
        //     var modal = document.querySelector('.modal-box');
        //     modal.style.display = 'block';
        //     var closeModal = document.querySelector('.js-close-modal');
        //     closeModal.addEventListener('click', function(){
        //         modal.style.display = 'none';
        //     });
        //     var data;
        //     var xhr = new XMLHttpRequest();
        //     xhr.withCredentials = true;
        //     xhr.addEventListener("readystatechange", function () {
        //         if (this.readyState === 4) {
        //             console.log(this.responseText);
        //         }
        //     });
        //     xhr.open("GET", "http://localhost:3000/posts");
        //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //     xhr.setRequestHeader("cache-control", "no-cache");
        //     xhr.setRequestHeader("Postman-Token", "4c996eea-ceb2-4a48-b3e6-c326b99ca109");
        //     xhr.send(data);
        //     xhr.onload = function(){
        //         data = JSON.parse(xhr.responseText);
        //         for(var i = 0; i < e.path.length; i++){
        //             if(e.path[i].className === 'r-edit'){
        //                 for(var j = 0; j < data.length; j++){
        //                     if(data[j].id == e.path[i].dataset.delitem){
        //                         var ID = data[j].id
        //                         editPost(ID);
        //                     }
        //                 }
        //             }
        //         }
        //     }
            
        // });
    }
};
function delPost(ID){
    // var data = "id=6&title=aa&type=full-time&company=bbb&logoURL=&location=ccc&payment=222&skill=ddd&updTime=10&description=qweqwe";
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });
    xhr.open("DELETE", "http://localhost:3000/posts/" + ID);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.13.0");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "520f81ed-418b-40aa-b0dd-ec05e95d9f29,b4c4b8ec-8b2a-4d97-b1f6-c053bddb84a3");
    xhr.setRequestHeader("Host", "localhost:3000");
    xhr.setRequestHeader("accept-encoding", "gzip, deflate");
    xhr.setRequestHeader("content-length", "114");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data);
}

function editPost(ID){
    
    var ETitle = document.querySelector('.e-title');
    var EType = document.querySelector('.e-type');
    var ECompany = document.querySelector('.e-company');
    var ELogo = document.querySelector('.e-logo');
    var ELocation = document.querySelector('.e-location');
    var EPayment = document.querySelector('.e-payment');
    var ESkill = document.querySelector('.e-skill');
    var EUpdtime = document.querySelector('.e-updtime');
    var EDesc = document.querySelector('.e-description');
    
    var data = `title=${ETitle.value}&type=${EType.value}&company=${ECompany.value}&logoURL=${ELogo.value}&location=${ELocation.value}&payment=${EPayment.value}&skill=${ESkill.value}&updTime=${EUpdtime.value}&description=${EDesc.value}`;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PATCH", "http://localhost:3000/posts/" + ID);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.13.0");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "c2927237-c3d9-4dac-8c35-00b0d98c9ba2,c76dc47a-0814-4d8f-820f-5dc19a847f19");
    xhr.setRequestHeader("Host", "localhost:3000");
    xhr.setRequestHeader("accept-encoding", "gzip, deflate");
    xhr.setRequestHeader("content-length", "109");
    xhr.setRequestHeader("Connection", "keep-alive");
    xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}
rShowResult();