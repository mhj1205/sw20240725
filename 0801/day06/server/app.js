const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port',3000);

app.get("/", (req,res) => {
    // redirect() 지정 된 URL로 자동으로 페이지 이동
   // res.redirect('http://naver.com');

   // end() 문자열을 화면에 출력한다.
   res.end("Hello world");
   var obj = {no:120, name:"HONG"};
});

app.get('/data', (req,res) => {
    const user = req.query.user;
    const message = req.query.message;
    const jsonData = {user, message};

    res.send(jsonData);    
});

const todoList = [
    {no:101, title:'자연 보호 하기', done:true},
    {no:102, title:'엄마 생일 선물', done:false},
    {no:103, title:'아빠 집 사주기', done:true},
    {no:104, title:'취직하기', done:false},
    {no:105, title:'여자친구 부모님 여행 시켜주기', done:false},
];

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`노드js 서버 실행 중 >>> http://localhost:${app.get('port')}`)
});