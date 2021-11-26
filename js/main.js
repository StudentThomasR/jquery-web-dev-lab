$(document).ready(function () {
    //$(".lowlight").addClass("highlight")
    //$(".lowlight").removeClass("highlight")
    $("#showMore").click(function () {
        //console.info("I was clicked!!")
        $("#moreContent").slideToggle("fast")
        if ($(this).is(':hidden')) { $("#showMore").text("Show Details")
    } else
         { $("#showMore").text("Hide Details")
        }
    })

    $(".burger").click(function(){
        $("nav").slideToggle("fast")
    })
  $("#lightSlider").lightSlider({ item: 1, slideMargin: 0, loop: true, });

})
