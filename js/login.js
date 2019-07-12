window.onload = function() {
    $(function() {
        var res = localStorage.getItem("useName");
        var resJson = JSON.parse(res);
        console.log(resJson)
        $(".input_submit").click(function() {
            var userName = $(".name_input").val();
            var psw = $(".pass_input").val();
            if (resJson == null) {
                alert("没有该用户，请重新输入正确的用户名或注册新用户名")
            } else if (userName == resJson.name && psw == resJson.psw) {
                $(".blank").attr("href", "index.html")
            } else if (userName != resJson.name) {
                $(".user_error").css("display", "block");
                $(".user_error").html("输入的账号名错误");
            } else {
                $(".pwd_error").css("display", "block");
                $(".pwd_error").html("输入的密码名错误");
            }
        })
    })
}