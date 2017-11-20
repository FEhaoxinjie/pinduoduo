let express = require('express');
let fs = require('fs');
let app = express();

function getUserList(cb) {
    fs.readFile('./mock/user.json', 'utf-8', (err, data) => {
        cb(data);
    })
}

function addUser(user, cb) {
    fs.readFile('./mock/user.json', 'utf-8', (err, data) => {
        let userList = JSON.parse(data);
        let isReg = userList.some(item => {
            return item.tel == user.tel
        });
        if (isReg) {
            cb({code: 100, error: '该手机号已经被注册!'})
        } else {
            userList.push({
                ...user,
                userName: user.tel
            });
            fs.writeFile('./mock/user.json', userList, function (err) {
                if (err) {
                    cb({
                        code: 100,
                        error: '服务器出错'
                    })
                } else {

                }
            })

        }
    })
}