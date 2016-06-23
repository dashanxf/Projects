<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="../top.jsp" %>

<div class="qcontent">

	<c:forEach var="post_title" items="${post_title_array}" varStatus="status">
			<!-- 类型01 1张图片 -->
			<c:if test="${post_num_img_array[status.index] <3}">
			<c:if test="${post_num_img_array[status.index] >0}">
			<div class="listbox">
				<div class="listleft">
					<a class="titlea_one_pic" href="/First_Spring_MVC/detail/${post_id_array[status.index]}"><br>${post_title}</a>
					<span class="textspan_one_pic">${post_content_filtered_text_array[status.index]}</span>
					<div class="affbox">
						<span><br>来源:${post_author_array[status.index]}</span>
						<span class="timespan"><br>${post_time_array[status.index]}</span>
					</div>
				</div>

				<div class="listright">
					<span class="imgspan">
					<c:forEach items="${post_img_array[status.index]}" var="img">
						<a href="/First_Spring_MVC/detail/${post_id_array[status.index]}">
							<img src="${img}" />
						</a>
					</c:forEach>
					</span>
				</div>
			</div>
			</c:if>
			</c:if>

		<!-- 类型02 多于2张图片 -->
			<c:if test="${post_num_img_array[status.index] >2}">
			<div class="listbox">
				<a class="titlea" href="../../detail/${post_id_array[status.index]}"><br>${post_title}</a>
				<div class="listimg">
					<c:forEach var="img" items="${post_img_array[status.index]}" end="2">
						<span class="imgspan">
						<a href="/First_Spring_MVC/detail/${post_id_array[status.index]}" >
							<img src="${img}"  />
						</a>
						</span>
					</c:forEach>
					<div class="clearboth"></div>
				</div>
				<div class="affbox">
					<span><br>来源:${post_author_array[status.index]}</span>
					<span class="timespan"><br>${post_time_array[status.index]}</span>
				</div>
			</div>
			</c:if>

		<!-- 类型03 无图片 -->
		<c:if test="${post_num_img_array[status.index] ==0}">
			<div class="listbox">
				<a class="titlea" href="/First_Spring_MVC/detail/${post_id_array[status.index]}"><br>${post_title}</a>
				<span class="textspan"><br>${post_content_filtered_text_array[status.index]}</span>
				<div class="affbox">
					<span><br>来源:${post_author_array[status.index]}</span>
					<span class="timespan"><br>${post_time_array[status.index]}</span>
				</div>
			</div>
		</c:if>
	</c:forEach>

	<div class="loadmore" ng-click="loadmore()" ng-show="hide">
		<div class="loading">加载更多</div>
	</div>
</div>

<%@include file="../foot.jsp" %>
</html>