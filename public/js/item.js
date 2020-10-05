var item = document.querySelector('.js-item');
var ID = location.search.substr(4);
var data;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "http://localhost:3000/posts/" + ID);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.15.0");
xhr.setRequestHeader("Accept", "*/*");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "4be7bf61-f071-47fe-944f-2864f911b6cc,df1268d1-a963-4d6a-9ecc-d773189cc92c");
xhr.setRequestHeader("Host", "localhost:3000");
xhr.setRequestHeader("accept-encoding", "gzip, deflate");
xhr.setRequestHeader("content-length", "109");
xhr.setRequestHeader("Connection", "keep-alive");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);
xhr.onload = function(){
    data = JSON.parse(xhr.responseText);
    document.title = data.title
    item.innerHTML = `
        <div class="l-post post__info">
            <h2 class="info__title">${data.title}</h2>
            <div class="info__site flex-row">
                <a href="">
                    ${data.company}
                </a>
                <span> ． </span>
                <a href="">
                    ${data.location}
                </a>
            </div>
            <div class="info__payment">
                <h5>薪資</h5>
                <h3>${data.payment} <span>TWD 月薪</span></h3>
            </div>
            <div class="info__other flex-row">
                <div class="info__type">
                    <h5>工作類型</h5>
                    <h4>${data.type}</h4>
                </div>
                <div class="info__updtime">
                    <h5>上次更新</h5>
                    <h4>${data.updTime}</h4>
                </div>
            </div>
            <div class="info__skill">
                <h5>技能需求</h5>
                <ul class="flex-row">
                    <li><span>${data.skill}</span></li>
                </ul>
            </div>
        </div>
        <div class="l-post post__desc">
            <p>${data.description}</p>
        </div>
    `;
}