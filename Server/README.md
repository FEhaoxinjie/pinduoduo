#### 后台接口
**登录**

url:'/api/login'

method:'get'

data:{

    tel:13333333333,
    password:'test'
    
}

返回的数据

成功：

{
    code:200,
    
    data:{
        userName:'test',
        tel:13333333333,
        address:'北京市昌平区回龙观东大街珠峰培训'
    }
    
}

失败：

{

    code:100,
    error:'用户名或密码错误'
    
}

**注册**

url:'/api/signin'

method:'post',

data:{

    tel:13333333333,
    password:'test'
    
}

返回的数据

成功：

{

    code:200,
    data:{
        userName:'test',
        tel:13333333333,
        address:'北京市昌平区回龙观东大街珠峰培训'
    }
    
}

失败：

{

    code:100,
    error:'该手机号已经被注册！'
    
}

**获取购物车列表**

url:'/api/cartList'

method:'get'

data:{
    
    tel:13333333333
    
}

返回的数据

成功：

{

    code:200,
    
    list:[
        
        {title:'意大利款中空男鞋',style:'洒红色 40',count:1,price:35},
        {title:'意大利款中空男鞋',style:'洒红色 40',count:1,price:35}
        
    ]

}

失败：

{

    code:100,
    
    error:'异常！请联系网站管理员处理。'

}


**添加到购物车**

url:'/api/cartList'

method:'post'

data:{
    
    tel:13333333333,
    
    data:[
    
      {title:'意大利款中空男鞋',style:'洒红色 40',count:1,price:35},
      {title:'意大利款中空男鞋',style:'洒红色 40',count:1,price:35}
    
    ]
    
}

返回的数据

成功：

{

    code:200,
    
    list:[
        
        {title:'意大利款中空男鞋',style:'洒红色 40',count:1,price:35},
        {title:'意大利款中空男鞋',style:'洒红色 40',count:1,price:35}
        
    ]

}


失败：

{

    code:100,
    
    error:'添加失败，请稍后重试。'

}

