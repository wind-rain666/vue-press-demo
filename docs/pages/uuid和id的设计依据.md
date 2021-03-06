# uuid格式
uuid本质上是一串32位的十六进制字符并加`-`来组成字符串，提出这个理念主要是解决分布式id的问题（因此也称为guid），相关于uuid会导致重复的说法，从数学上来说几乎不可能，但网上经常有这种声音，我们没有遇到过，认为不会重复。
![v2-21a50d6b97419ceeed96450227558dea_r](uploads/6b170e3b545882a5a0ccd76415d8ce2d/v2-21a50d6b97419ceeed96450227558dea_r.jpg)

# 选取uuid or id？
我们主要是从安全性上来考虑，说一个场景，假设某电商平台的商品是使用id来作为主键的，获取商品信息通过商品id来获取。小明作为一个普通的用户，是可以浏览到平台所有已发布的商品信息的，那么小明只需要拦截一下获取商品详情的http请求，之后使用Python脚本来进行模拟（爬虫），请求参数中的商品ID从1开始递增，如平台无其他防护，即可获取平台所有的商品。<br />
如果使用uuid来作为主键呢？尽管小明知道了这件商品的uuid，但是他并不能知道其他的商品uuid，无法使用爬虫来请求数据，只能一个一个看。<br />

那什么时候使用id呢？<br />
举例：`系统日志`，`用户活动日志`，这类性质的表。<br />
或许可能有疑问：那要是用Python不是能够拿到所有的系统日志了吗？这不是给黑客机会吗？<br />
答案：不是的。这种接口肯定是有权限限制的，只能是系统管理员登录了才能看到，普通用户是无权限访问的，因此可以保证数据安全。