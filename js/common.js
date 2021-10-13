// 네비게이션 호버
$("#gnb div ul li .snb").hide()
$("#gnb div ul li:not(:animated)").on("mouseenter", function() {
  $(this).not(":animated").children(".snb").show()
})
$("#gnb div ul li .snb:not(:animated)").on("mouseleave", function() {
  $("#gnb div ul li .snb:not(:animated)").hide()
})


// 네비게이션 스크롤
state = 1;
$(window).on("scroll", function() {
  if ( $(window).scrollTop() >= $("#section1").position().top - 150 && state == 1 ) {
    state = 0
    $("#header").addClass('effect').css({ top: -50}).animate({ top: 0 })
  }
  else if ( $(window).scrollTop() < $("#section1").position().top - 150 && state == 0 ) {
    $("#header").removeClass('effect')
    state = 1;
  }
})

// 섹션1 슬라이더
// 슬라이더 버튼
let className, num;
function prevSlider() {
  $("#sliderList:not(:animated)").prepend($("#sliderList li:last"))
                                 .css({ marginLeft: "-100%" })
                                 .animate({ marginLeft: 0 }, 1500)
}
function nextSlider() {
  $("#sliderList:not(:animated)").animate({ marginLeft: "-100%" },1500, function() {
    $(this).append($(">li:first", this)).css({ marginLeft: 0 })
  })
}
$(".btn_prev").on('click', function() {
  className = $("#sliderList li:last").attr('class')
  num = className.substr(6, 1) - 1;
  $("#btnNum a").removeClass('active')
  $("#btnNum a:eq("+ num +")").addClass('active')
  prevSlider()
})
$(".btn_next").on('click', function() {
  className = $("#sliderList li:first").attr("class")
  num = className.substr(6, 1)
  if (num == 9) num = 0;
  $("#btnNum a").removeClass('active')
  $("#btnNum a:eq("+ num +")").addClass('active')
  nextSlider()
})

$("#btnNum a").on('click', function() {
  $("#btnNum a").removeClass("active")
  $(this).addClass("active")
  let classNum = $(this).index() + 1;
  let pos = $("#sliderList .slider" + classNum).position().left;

  let addNum = classNum;
  $("#sliderList:not(:animated)").animate({ marginLeft: -pos },1500, function() {
    for ( i=1; i<$("#sliderList li").length; i++) {
      addNum++;
      if ( addNum == $("#sliderList li").length+1 ) addNum = 1;
      $("#sliderList").append($(".slider"+addNum))
    }
    $(this).css({ margin: 0 })
  })
})
// 섹션2 product
// product 호버
$("#product dl").hover(function(e) {
  e.stopPropagation()
  $(">div", this).css({ cursor: "pointer", transform: "scale(1.08)"})
}, function(e) {
  e.stopPropagation()
  $(">div", this).css({ cursor: 0, transform: "scale(1.0)"})
})

// product prev next 버튼
function prevSliderPd() {
  $("#product:not(:animated)").prepend($("#product >div:last"))
                                 .css({ marginLeft: "-100%" })
                                 .animate({ marginLeft: 0 }, 1500)
}
function nextSliderPd() {
  $("#product:not(:animated)").animate({ marginLeft: "-100%" }, 1500, function() {
    $(this).append($(">div:first", this)).css({ marginLeft: 0 })
  })
}
$(".product_prev").on('click', function() {
  prevSliderPd()
})
$(".product_next").on('click', function() {
  nextSliderPd()
})
let timerPd = setInterval(nextSliderPd, 8000)
$("#btn-product a").on('click', function(e) {
  clearInterval(timerPd)
  timerPd = setInterval(nextSliderPd, 8000)
  e.preventDefault();
})
// 섹션3 이벤트
// 이벤트 prev next 버튼
function prevSliderEv() {
  $("#eventList:not(:animated)").prepend($("#eventList li:last"))
                                 .css({ marginLeft: "-12.5%" })
                                 .animate({ marginLeft: 0 }, 600)
}
function nextSliderEv() {
  $("#eventList:not(:animated)").animate({ marginLeft: "-12.5%" }, 600, function() {
    $(this).append($(">li:first", this)).css({ marginLeft: 0 })
  })
}
$(".event_prev").on('click', function(e) {
  e.preventDefault()
  prevSliderEv()
})
$(".event_next").on('click', function(e) {
  e.preventDefault()
  nextSliderEv()
})
let timerEv = setInterval(nextSliderEv, 4000)
$("#btn-event a").on('click', function(e) {
  clearInterval(timerEv)
  timerEv = setInterval(nextSliderEv, 4000)
  e.preventDefault();
})




// 케이크배달, 섹션3 스크롤
motion = 1;
$(window).on("scroll", function() {
  if ( $(window).scrollTop() >= $("#section1").position().top -700 && motion == 1 ) {
    motion = 2
    $("#section1").css({ opacity: 0, marginTop: 200 }).animate({ opacity: 1, marginTop: 0 }, 1000)
  }
  if ( $(window).scrollTop() >= $("#section2").position().top -800 && motion == 2 ) {
    motion = 3
    $("#section2").css({ opacity: 0, marginTop: 200 }).animate({ opacity: 1, marginTop: 0 }, 1500)
  }
  if ( $(window).scrollTop() >= $("#banner").position().top -700 && motion == 3 ) {
    motion = 4
    $("#banner h2").css({ opacity: 0, marginTop: 200 }).animate({ opacity: 1, marginTop: 0 }, 1000)
  }
  if ( $(window).scrollTop() >= $("#section3").position().top -750 && motion == 4 ) {
    $("#section3 #listWrap").css({ opacity: 0, marginTop: 400 }).animate({ opacity: 1, marginTop: 0 }, 1000)
    motion = 5;
  }
})

// 매장검색
$(".closeBtn").hide()
$("input").hide()

$(".searchBtn").on("click", function(e) {
  $("input").show().animate({ width: 135 },300)
  $(".closeBtn").show()
  e.preventDefault();
})
$(".closeBtn").on("click", function(e) {
  e.preventDefault();
  $(this).hide()
  $("input").animate({ width: 0}, 350, function() {
    $("input").hide()
  })
})
