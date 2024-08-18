$(function(){

    // allmenu 슬라이드
    $('.allmenu_slide').slick({
        autoplay:true,
        dots:true,
        arrows:false
    });
    

    // pause 버튼 누르면 멈추고 play button
    // play 버튼 누르면 재생
    let sw = true
    $('.pause').click(function(){
        if(sw == true){
            $('.pause').addClass('on')
            $('.allmenu_slide').slick('slickPause')
            sw=false
        }else{
            $('.pause').removeClass('on')
            $('.allmenu_slide').slick('slickPlay')
            sw=true
        }
    })

    // 맨 위 all 메뉴 fade In/Out
    $('header .util .menuicon').click(function(){
        $('#allmenu_wrap').fadeIn()
    })

    $('.btn_close').click(function(){
        $('#allmenu_wrap').fadeOut()
    })

//  메인 슬라이드
    $('.slide').slick({
        autoplay:true,
        arrows:false,
        fade:true
    })

    // 3개를 저장하려면 배열에 저장하기
    let title = ["Acro Seoul Forest","1915 Canakkale Bridge","Petrochemical Plant"]
    let subTitle = ['시대가 흘러도 변하지 않는 가치, 아크로 서울포레스트','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년']
    let url = ["https://www.youtube.com/embed/aBn0zTfT-UE?si=ZEakacI0huFLsEJv","https://www.youtube.com/embed/uhqr0aOagJk?si=ihNc-PLJkquUSXhN","https://www.youtube.com/embed/gehtA1gfXPc?si=AiP1HoACxE8_Urua"]

    // 클릭 이벤트 발생(모달)
    $('.list li').click(function(){
        // 클릭하면 몇번짼지 알려주는 변수 num
        let num = $(this).index()
        console.log(num)
        $('.modal_wrap').fadeIn()
        $('.tit_wrap h2').text(title[num])
        $('.tit_wrap p').text(subTitle[num])
        $('.contents iframe').attr('src',url[num])

        // next 버튼을 클릭하면 다음으로 가기
        $('.btn_list .next').click(function(){
            if(num==2){
                num=0
            }else{
                num++
            }
            $('.tit_wrap h2').text(title[num])
            $('.tit_wrap p').text(subTitle[num])
            $('.contents iframe').attr('src',url[num])
        })

        // prev 버튼을 클릭하면 이전으로 가기
        $('.btn_list .prev').click(function(){
            if(num==0){
                num=2
            }else{
                num--
            }
            $('.tit_wrap h2').text(title[num])
            $('.tit_wrap p').text(subTitle[num])
            $('.contents iframe').attr('src',url[num])
        })

    })

    $('.close').click(function(){
        $('.modal_wrap').fadeOut()
    })

    // 2차메뉴
    // 기본 숨기기
    $('.item').hide()
        // gnb depth2 슬라이드 조작
    $('.gnb>li').on('mouseleave',function(){
        $('.item').hide()
    })
    
    // 주메뉴 li mouseenter시 slideDown
    $('.gnb>li').on('mouseenter',function(){
        let num = $(this).index()
        // console.log(num)
        $('.item').eq(num).stop().slideToggle().parent().siblings().find('.item').slideUp();
    })



})
