<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include  file="../top.jsp" %>
<div class="qcontent">
    <div class="aticletitle"><br>${post_title}</div>
    <div class="affbox">
        <span>${post_author_name}</span>
        <span class="timespan">{{contents.format_time}}</span>
        <div class="clearboth"></div>
    </div>
    <p class="aticlecon">
		<c:out value="${post_content}" escapeXml="false"/>
    </p>
</div>
<div class="qlist">
    <ul >
        <li class="listtitle"><b class="icon_rel"> </b><span>相关阅读</span><div class="clearboth"></div></li>
        <li>
	<c:forEach var="post_title" items="${related_post_array}" varStatus="status">
		<c:if test="${related_post_id[status.index] != 0}">
            <a href="/First_Spring_MVC/detail/${related_post_id[status.index]}"> <br>${post_title}</a>
        </c:if>
 		<c:if test="${related_post_id[status.index] == 0}">
 			<a><br>${post_title}</a>
 		</c:if>
    </c:forEach>
        </li>
    </ul>
    <div class="nothing" ng-hide="relateds">
        {{relatedmsg}}
    </div>
    <ul >
        <li class="listtitle"><b class="icon_dis"> </b><span>最新评论</span><div class="clearboth"></div></li>
        <li class="disbox" ng-repeat="comment in comments | limitTo : 5">
            <div class="disinfo">
                <span class="disname">{{comment.comment_author}}:</span>
                <span class="distime">{{comment.format_time}}</span>
            </div>
            <div class="discon">{{comment.comment_content}}.</div>
        </li>
    </ul>
    <div class="nothing" ng-hide="comments">
        {{commentmsg}}
    </div>
    <ul >
        <li ><div class="clearboth"></div></li>
        <li >
            <div class="disinfo">
            </div>
        </li>
    </ul>
</div>
<%@include  file="../foot.jsp" %>
