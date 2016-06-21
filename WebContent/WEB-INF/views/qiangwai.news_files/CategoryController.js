/**
 * Created by gcc on 2015/11/19.
 */
//新闻列表页面的Controller
lifeix.controller('CategoryController', ['$scope','$rootScope','$routeParams','category', 'categoryContent',
	function($scope,$rootScope,$routeParams,category,categoryContent){
	/*	/!*处理单独访问category页面时，固定列表项显示问题*!/
	 if($rootScope.catgories === undefined){
	 $scope.hidefirst=true;
	 }*/
	$scope.trim=function(str,is_global)
	{
		var result;
		result = str.replace(/(^\s+)|(\s+$)/g,"");
		if(is_global.toLowerCase()=="g")
			result = result.replace(/\s/g,"");
		return result;
	}
	var ctmp=[];
	var term_id=$routeParams.catId;
	$rootScope.catId=term_id;
	var categoryContentPromise = categoryContent.getData(term_id);  //异步调用，获取承诺接口
	categoryContentPromise.then(function(data){
		var ret=data.data.post_contents;
		angular.forEach(ret, function(data,index,array){
			//data等价于tmp[index]
			data.post_content_filtered.text=$scope.trim(data.post_content_filtered.text,'g');
		});
		ctmp=ctmp.concat(ret);
		$scope.posts=ctmp;  //调用承诺接口resolove()
	},function(data){
		$scope.posts={error:'categoryContent 数据不存在。。。'}; //调用承诺接口reject();
	});

	//加载更多
	$scope.loadmore=function(){
		if(ctmp.length==0||!ctmp[ctmp.length-1]){ return }
		var start_id=ctmp[ctmp.length-1].id;
		var morePromise = categoryContent.getData(term_id,start_id);  //异步调用，获取承诺接口
		morePromise.then(function(data){
			var ret= data.data.post_contents;  //调用承诺接口resolove()
			angular.forEach(ret, function(data,index,array){
				//data等价于tmp[index]
				data.post_content_filtered.text=$scope.trim(data.post_content_filtered.text,'g');
			});
			ctmp=ctmp.concat(ret);
			$scope.posts=ctmp;
		},function(data){
			$scope.posts={error:'categoryContent 数据不存在。。。'}; //调用承诺接口reject();
		});
	};
	/*监听全局变量的改变，页面拉到底部时加载新数据*/
	$rootScope.$watch('tid',function(newValue,oldValue){
		var flag=newValue-$rootScope.count;
		/*处理首次加载数据不是数字的问题*/
		if(!isNaN(flag))
			$scope.loadmore();
	})
}]);