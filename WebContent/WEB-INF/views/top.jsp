<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<style type="text/css">@charset "UTF-8";[ng\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\:form{display:block;}</style>
    <title>墙外-没有墙，我们得以透视世界!</title>
    
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link type="text/css" id="cssSelector" rel="stylesheet" href="./qiangwai.news_files/computer.css">
    <link type="text/css" rel="stylesheet" href="./qiangwai.news_files/bootstrap.min.css">
<div class="qhead">
   
    <span class="qicon">
        <a href="/First_Spring_MVC/myhome"><img src="https://s3-us-west-2.amazonaws.com/pintimes/image/api/qiangwaiLogo.png" /></a>
    </span>
    <span class="searchBar">
        <input type="text"> <span><a>搜索</a></span> 
    </span>
</div>

<div class="qnavbg">
    <div class="qnav">
        <span><a ng-href='#/category/{{indexid}}' class="{{(catId==0||catId==undefined)?'qyes':'qno'}}">读家</a></span>
        <span ng-repeat='catgorie in catgories'>
            <a ng-href='#/category/content/{{catgorie.category_id}}' class="{{catId==catgorie.category_id?'qyes':'qno'}}">{{catgorie.category_name}}</a>
        </span>
        <div class="clearboth"></div>
    </div>
</div>
</head>