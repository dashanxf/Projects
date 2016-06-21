/**
 * Created by gcc on 2015/11/19.
 */

lifeix.controller('DetailController', ['$scope','$rootScope','$routeParams','$sce','contentDetail', 'comment','related',
	function($scope,$rootScope,$routeParams,$sce,contentDetail,comment,related){
	/*	/!*处理单独访问category页面时，固定列表项显示问题*!/
	if($rootScope.catgories === undefined){
		$scope.hidefirst=true;
	}*/
	var content_id=$routeParams.id;
	var contentDetailPromise = contentDetail.getData(content_id,'true');  //异步调用，获取承诺接口
	contentDetailPromise.then(function(data){
		$scope.contents=data.data;  //调用承诺接口resolove()
		/*$sce服务来过滤HTML标签*/
		$scope.contents.post_content=$sce.trustAsHtml($scope.contents.post_content);
	},function(data){
		$scope.posts={error:'contentDetail 数据不存在。。。'}; //调用承诺接口reject();
	});

	/*加载评论模块  content_id  是不是post_id ?*/
	$scope.commentmsg='暂无评论';
	var commentPromise = comment.getData(content_id);  //异步调用，获取承诺接口
	commentPromise.then(function(data){
		$scope.comments=data.data.comments;  //调用承诺接口resolove()
	},function(data){
		$scope.posts={error:'commentDetail 数据不存在。。。'}; //调用承诺接口reject();
	});

	/*加载相似文章推荐*/
	$scope.relatedmsg='暂无相似文章';
	var relatedPromise = related.getData(content_id);  //异步调用，获取承诺接口
	relatedPromise.then(function(data){
		$scope.relateds=data.data.post_contents;  //调用承诺接口resolove()
	},function(data){
		$scope.posts={error:'relatedDetail 数据不存在。。。'}; //调用承诺接口reject();
	});

}]);
