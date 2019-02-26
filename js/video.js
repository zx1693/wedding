$(document).ready(function () {
    $("#delete1").toggle(
        function () {
            $(".video_select").show()
            $(".vider_all ul").on("click", "img", function (ev) {
                index = $(this).parents("ul li").index();

                $(".vider_all li").eq(index).toggle(function () {
                    console.log(1);
                    $(this).find("i").attr("id", "select");
                }, function () {
                    console.log(2);
                    $(this).find("i").attr("id", "");
                })
            })
        }, function () {
            $(".vider_all ul li>i#select").parent().remove();
        })
    $("#file").click(function () {
        $(".vider_all ul").append(`
            <li>
                <i class="video_select" ></i>
                <img src="images/media.jpg" alt="">
                <p>李国栋 2017.10.01</p>
			</li>
        `)
    })
})