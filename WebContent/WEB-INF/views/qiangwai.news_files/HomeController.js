/**
 * Created by gcc on 2015/11/19.
 */
//新闻列表页面的Controller
lifeix.controller('HomeController', ['$rootScope','$scope','$routeParams','category','categoryContent','recommend','new',
	function($rootScope,$scope,$routeParams,category,categoryContent,recommend,top){
	var term_id=$routeParams.catId;
	$rootScope.catId=term_id;

	//定义全局的变量，存储查询出的新闻数据
	var tmp=[];
	// 设置轮播图图片间隔
	$scope.myInterval = 2000;
	/*调用公共服务category */
	var categoryPromise = category.getData();  //异步调用，获取承诺接口
	categoryPromise.then(function(data){
		$rootScope.catgories=data.data.categories;  //调用承诺接口resolove()
	},function(data){
		$rootScope.catgories={error:'catgories 数据不存在。。。'}; //调用承诺接口reject();
	});

	//首页top新闻
	var newPromise = news.getData();  //异步调用，获取承诺接口
		newPromise.then(function(data){
		$scope.news=data.data.post_contents;
		angular.forEach($scope.news, function(data,index,array){
			if(data.post_content_filtered.imgs==undefined){
				//去除top新闻中没有图片的
				$scope.news.splice(index,1);
			}
		});
	},function(data){
		$scope.news={error:'news 数据不存在。。。'}; //调用承诺接口reject();
	});


	$scope.trim=function(str,is_global)
	{
		var result;
		result = str.replace(/(^\s+)|(\s+$)/g,"");
		if(is_global.toLowerCase()=="g")
			result = result.replace(/\s/g,"");
		return result;
	}
	//首页新闻获取
	var recommendPromise = recommend.getData();  //异步调用，获取承诺接口
	recommendPromise.then(function(data){
		tmp=data.data.post_contents;
		angular.forEach(tmp, function(data,index,array){
			data.post_content_filtered.text=$scope.trim(data.post_content_filtered.text,'g');
		});
		$scope.recommends=tmp;
	},function(data){
		$scope.recommends={error:'recommends 数据不存在。。。'}; //调用承诺接口reject();
	});


}]);
