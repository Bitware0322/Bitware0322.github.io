var posts=["2025/06/24/在Github部署Hexo博客/","2025/07/20/电信天翼网关获取超级管理员密码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };