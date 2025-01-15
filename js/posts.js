//alert(posts[0])

content = document.getElementById("content")

//document.getElementById("missingData").innerHTML = "<script src='" + posts[0].file + "'></script>"



for (i = 0; i < 5; i++) {
    content.innerHTML += "<div class='postBox'><div class='post postStart');'><img src='img/post_top.png'></div><div class='post postMid' id='postId" + i + "'></div><div class='post postEnd');'><img src='img/post_bottom.png'></div></div>"    
    loadPost(i)
}

function loadPost(id) {
    $(function(){
        //alert(id)
        $("#postId" + id).load("posts/post_1.html"); 
      });
}

//</tr><tr><td></td><td>" + posts[0].title + "</td></tr><br>