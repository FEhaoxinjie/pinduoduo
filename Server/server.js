let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');
let session = require('express-session');
let url = require('url');

//获取用户列表
function getUserList(cb) {
    fs.readFile('./mock/user.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('err');
            return;
        }
        cb(data);
    })
}

//添加用户
function addUser(user, cb) {
    fs.readFile('./mock/user.json', 'utf-8', (err, data) => {
        let userList = JSON.parse(data);
        console.log('hi')
        let isReg = userList.some(item => {
            return item.tel == user.tel
        });
        if (isReg) {
            cb && cb({code: 100, error: '该手机号已经被注册!'})
        } else {
            userList.push({
                tel: user.tel,
                password: user.password,
                userName: user.tel,
                address: ''
            });
            fs.writeFile('./mock/user.json', JSON.stringify(userList), function (err) {
                console.log(err);
                if (err) {
                    cb({
                        code: 100,
                        error: '服务器出错'
                    })
                } else {
                    cb && cb({
                        code: 200,
                        data: {
                            userName: user.tel,
                            tel: user.tel,
                            address: ''
                        }
                    })
                }
            })

        }
    })
}

let app = express();
app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'jumei'
}));

app.post('/api/login', (req, res) => {
    let {tel, password} = url.parse(req.url, true).query;
    getUserList(userList => {
        userList = JSON.parse(userList);
        let user = userList.find(item => {
            return item.tel == tel && item.password == password;
        });
        if (user) {
            res.send({
                code: 200, data: {
                    tel,
                    userName: user.userName,
                    address: user.address
                }
            })
        } else {
            res.send({
                code: 100,
                error: '用户名或密码错误！'
            })
        }
    });
});
app.post('/api/signin', (req, res) => {
    let {tel, password} = url.parse(req.url, true).query;
    getUserList(userList => {
        userList = JSON.parse(userList);
        let user = userList.some(item => {
            return item.tel == tel && item.password == password;
        });
        if (user) {
            res.send({
                code: 100,
                error: '该手机号已经被注册！'
            })
        } else {
            addUser({tel,password},data=>{
                res.send(data);
            })
        }
    });
});
app.listen(3000, () => {
    console.log('ok')
});