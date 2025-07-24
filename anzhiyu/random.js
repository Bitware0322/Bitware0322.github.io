var posts=["2025/07/22/NAS盒子-IPV6动态域名解析外网访问/","2025/07/20/电信天翼网关获取超级管理员密码/","2025/07/23/外网通过ipv6地址访问内网服务器/","2025/06/24/在Github部署Hexo博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };