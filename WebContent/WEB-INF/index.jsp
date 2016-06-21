<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<html ng-app="myApp">
<head>
    <title>墙外-没有墙，我们得以透视世界!</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <link type="text/css" id="cssSelector" rel="stylesheet" href="css/computer.css" />
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />

    <!-- test -->
    <!-- <link type="text/css" rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" /> -->
</head>

<!--js 加载顺序需要注意 1加载api 2app,js 3controller 4route -->
  <!-- test -->
<!-- <script src="https://cdn.bootcss.com/jquery/3.0.0-beta1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/angular.js/1.3.20/angular.min.js"></script>
<script src="https://cdn.bootcss.com/angular.js/1.3.20/angular-route.min.js"></script>
<script src="https://cdn.bootcss.com/angular-ui-bootstrap/0.11.1/ui-bootstrap.js"></script>
<script src="https://cdn.bootcss.com/angular-ui-bootstrap/0.11.1/ui-bootstrap-tpls.min.js"></script> -->

<body>

<%@include file="views/index.jsp" %>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-72374874-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>