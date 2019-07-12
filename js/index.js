window.onload = function() {
    (function($) {
        var timer = null;
        var index = 0;
        var width = 730;
        timer = setInterval(run, 1500);

        function play(aaa) {
            $(".jd_contain_center .Num_box ol li").eq(0).removeClass("active")
            $(".jd_contain_center .Num_box ol li").eq(aaa).css("backgroundColor", "orange").siblings(".jd_contain_center .Num_box ol li").css("backgroundColor", "");
        }

        function run() {
            index++;
            if (index > $(".jd_contain_center ul li").length - 1) {
                index = 0
            }
            $(".jd_contain_center ul").css({
                marginLeft: -index * width + "px"
            });
            play(index);
        }
        $(".jd_contain_center").mouseenter(function() {
            clearInterval(timer);
            return;
        });
        $(".jd_contain_center").mouseleave(function() {
            clearInterval(timer);
            timer = setInterval(run, 1500);
        });
        //点击左键切换
        $(".trans.trans_left").click(function() {
                index--;
                if (index < 0) {
                    index = $(".jd_contain_center ul li").length - 1;
                }
                $(".jd_contain_center ul").css({
                    marginLeft: -index * width + "px"
                });
                play(index);
            })
            //点击右键切换
        $(".trans.trans_right").click(function() {
                index++;
                if (index > $(".jd_contain_center ul li").length - 1) {
                    index = 0;
                }
                $(".jd_contain_center ul").css({
                    marginLeft: -index * width + "px"
                });
                play(index);
            })
            //点击圆点切换 
        $(".jd_contain_center ol li").click(function() {
            index = $(this).index();
            $(".jd_contain_center ul").css({
                marginLeft: -index * width + "px"
            });
            play(index);
        })
    })(jQuery)
}