# HTTP Method 使用场景
1. 常用（也就是我们用的）
* GET（SELECT）：从服务器取出资源（一项或多项）。
* POST（CREATE）：在服务器新建一个资源。
* PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
* PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
* DELETE（DELETE）：从服务器删除资源。
2. 不常用（我们几乎不用）
* HEAD：获取资源的元数据。
* OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

# url规范
由于项目中的接口可能对应不同的终端，例如：
* 提供给后台管理端调用
* 提供给微信小程序调用
* 提供给微信公众号调用
* 提供给智能硬件调用 <br />
  ……
<br />
因此，我们在url的最开始加上调用方信息，不同的来源api不能乱调用，尽管参数和返回值都是一模一样，也不行！！！（原因一是比较乱，原因二是在bff架构中会增加困扰原因一是比较乱，原因二是在bff架构中会增加困扰）<br />
示例：<br />
http://localhost/admin/users/login<br />
http://localhost/official/users/login<br />
http://localhost/mp/users/login<br />
http://localhost/siot/users/login<br />

## url命名规范
* url中不允许出现大写字母，只能出现下划线，命名采用个snake命名风格
* 采用http method来区分类型，不要在url中加上动词！！！<br />
例如：获取用户列表接口：`GET /users`，而不是`GET /users/getList`!!!

请仔细阅读以下两篇文章：<br />
https://segmentfault.com/a/1190000015384373 <br />
https://zhuanlan.zhihu.com/p/68103094 <br />

# 传参规范
参数传递一共有三种格式，分别是：params，query和body三种。<br />
三种参数传递均按照推荐的下划线方式传参，例如：<br />
http://localhost/admin/users/{user_uuid}?first_name=hello&last_name=word<br />
其中，user_uuid，first_name和last_name为参数名。

# 状态码
所有状态码地址：https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
