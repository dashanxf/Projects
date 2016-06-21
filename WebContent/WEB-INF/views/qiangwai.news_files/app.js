/**
 * Created by gcc on 2015/11/19.
 */
//为服务创建模块
var lifeix = angular.module('myApp', ['ngRoute','ui.bootstrap']);
lifeix.run(function($rootScope,$location) {
	/* $rootScope.baseUrl="http://52.11.83.66";*/
    $rootScope.baseUrl="http://pintimes.pin.news";
    $rootScope.name = "lifeixApp";
    $rootScope.count=0;
    /*首页类目号*/
    $rootScope.indexid=0;
    $(document).ready(function() {
        $(window).scroll(function() {
            var visits=  $location.$$path.split('/');
            var term_id=visits[visits.length-1];
            if (!term_id||term_id<1) {return;}
            if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
                //alert("滚动条已经到达底部为" + $(document).scrollTop());
                $rootScope.count++;
               
                $rootScope.$apply(function(){
                    if(term_id){
                        $rootScope.tid=parseInt(term_id)+ $rootScope.count;
                    }else{
                        $rootScope.tid=$rootScope.indexid+ $rootScope.count;
                    }
                });
            }else{
            }
        });
        if(screen.width<1024)
        	$("#cssSelector").attr("href","css/phone.css");
        else
        	$("#cssSelector").attr("href","css/computer.css");
        
    });

});
