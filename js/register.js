window.onload = function() {
    $(function() {

        var error_name = false;
        var error_password = false;
        var error_check_password = false;
        var error_email = false;
        var error_check = false;
        //失去光标的时候调用函数
        $('#user_name').blur(function() {
            check_user_name();
        });

        $('#pwd').blur(function() {
            check_pwd();
        });

        $('#cpwd').blur(function() {
            check_cpwd();
        });

        $('#email').blur(function() {
            check_email();
        });

        $('#allow').click(function() {
            if ($(this).is(':checked')) {
                error_check = false;
                $(this).siblings('span').hide();
            } else {
                error_check = true;
                $(this).siblings('span').html('请勾选同意');
                $(this).siblings('span').show();
            }
        });

        function check_user_name() {
            var reg = /^1[34578]\d{9}$/;
            if (!reg.test($('#user_name').val())) {
                $('#user_name').next().html('请输入正确的手机号码')
                $('#user_name').next().show();
                error_name = true;
            } else {
                $('#user_name').next().hide();
                error_name = false;
            }
        }

        function check_pwd() {
            var len = $('#pwd').val().length;
            if (len < 8 || len > 20) {
                $('#pwd').next().html('密码最少8位，最长20位')
                $('#pwd').next().show();
                error_password = true;
            } else {
                $('#pwd').next().hide();
                error_password = false;
            }
        }

        function check_cpwd() {
            var pass = $('#pwd').val();
            var cpass = $('#cpwd').val();

            if (pass != cpass) {
                $('#cpwd').next().html('两次输入的密码不一致')
                $('#cpwd').next().show();
                error_check_password = true;
            } else {
                $('#cpwd').next().hide();
                error_check_password = false;
            }
        }

        function check_email() {
            var re = /[1-9]\d{7,10}@qq\.com/;
            if (re.test($('#email').val())) {
                $('#email').next().hide();
                error_email = false;
            } else {
                $('#email').next().html('你输入的邮箱格式不正确')
                $('#email').next().show();
                error_check_password = true;
            }
        }

        $('#reg_form').click(function() {
            if (error_name == false && error_password == false && error_check_password == false && error_email == false && error_check == false) {
                var useNameVal = $('#user_name').val();
                var pswVal = $('#pwd').val();
                var useNameStr = String(useNameVal);
                var pswStr = String(pswVal);
                var localData = {
                    name: useNameStr,
                    psw: pswStr
                }
                var localStr = JSON.stringify(localData);
                window.localStorage.setItem("useName", localStr);
                alert("注册成功！");
                $("#login").attr("href", "login.html")
            } else {
                return;
            }
        });
    })
}