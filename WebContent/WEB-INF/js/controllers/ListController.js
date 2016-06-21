/**
 * Created by gcc on 2015/11/19.
 */
//新闻列表页面的Controller
lifeix.controller('ListController', ['$rootScope','$scope','$routeParams','category','categoryContent','recommend','top','news','editors',
	function($rootScope,$scope,$routeParams,category,categoryContent,recommend,top,news,editors){
	var term_id=$routeParams.catId;
	$rootScope.catId=term_id;

	// 设置轮播图图片间隔
	$scope.myInterval = 2000;
	//定义全局的变量，存储查询出的新闻数据
	var tmp=[];

	/*调用公共服务category */
	var categoryPromise = category.getData();  //异步调用，获取承诺接口
	categoryPromise.then(function(data){
		$rootScope.catgories=data.data.categories;  //调用承诺接口resolove()
	},function(data){
		$rootScope.catgories={error:'catgories 数据不存在。。。'}; //调用承诺接口reject();
	});

		//首页top新闻
	var editorsPromise = editors.getData(8,5);  //异步调用，获取承诺接口
		editorsPromise.then(function(data){
		$scope.editors=data.data.users;
	},function(data){
		$scope.editors={error:'tops 数据不存在。。。'}; //调用承诺接口reject();
	});

	//首页top新闻
	var newPromise = news.getData(8,5);  //异步调用，获取承诺接口
		newPromise.then(function(data){
		$scope.news=data.data.post_contents;
		angular.forEach($scope.news, function(data,index,array){
			if(data.post_content_filtered.imgs==undefined){
				//去除top新闻中没有图片的
				$scope.news.splice(index,1);
			}
		});
	},function(data){
		$scope.recommends={error:'tops 数据不存在。。。'}; //调用承诺接口reject();
	});


	//国际新闻
	var guojiPromise = news.getData(41,8);  //异步调用，获取承诺接口
		guojiPromise.then(function(data){
		$scope.guoji=data.data.post_contents;
		angular.forEach($scope.guoji, function(data,index,array){
			if(data.post_content_filtered.imgs==undefined){
				//去除top新闻中没有图片的
				$scope.guoji.splice(index,1);
			}
		});
	},function(data){
		$scope.recommends={error:'tops 数据不存在。。。'}; //调用承诺接口reject();
	});

//军事新闻
	var milPromise = news.getData(43,8);  //异步调用，获取承诺接口
		milPromise.then(function(data){
		$scope.mil=data.data.post_contents;
		angular.forEach($scope.mil, function(data,index,array){
			if(data.post_content_filtered.imgs==undefined){
				//去除top新闻中没有图片的
				$scope.mil.splice(index,1);
			}
		});
	},function(data){
		$scope.mil={error:'tops 数据不存在。。。'}; //调用承诺接口reject();
	});

//经济新闻
	var economyPromise = news.getData(7,8);  //异步调用，获取承诺接口
		economyPromise.then(function(data){
		$scope.economy=data.data.post_contents;
		angular.forEach($scope.economy, function(data,index,array){
			if(data.post_content_filtered.imgs==undefined){
				//去除top新闻中没有图片的
				$scope.economy.splice(index,1);
			}
		});
	},function(data){
		$scope.economy={error:'tops 数据不存在。。。'}; //调用承诺接口reject();
	});

//娱乐新闻
	var gossipPromise = news.getData(3,8);  //异步调用，获取承诺接口
		gossipPromise.then(function(data){
		$scope.gossip=data.data.post_contents;
		angular.forEach($scope.gossip, function(data,index,array){
			if(data.post_content_filtered.imgs==undefined){
				//去除top新闻中没有图片的
				$scope.gossip.splice(index,1);
			}
		});
	},function(data){
		$scope.gossip={error:'tops 数据不存在。。。'}; //调用承诺接口reject();
	});


	//首页top新闻
	var topPromise = top.getData();  //异步调用，获取承诺接口
		topPromise.then(function(data){
		$scope.tops=data.data.post_contents;
		angular.forEach($scope.tops, function(data,index,array){
			if(data.post_content_filtered.imgs==undefined){
				//去除top新闻中没有图片的
				$scope.tops.splice(index,1);
			}
		});
	},function(data){
		$scope.recommends={error:'tops 数据不存在。。。'}; //调用承诺接口reject();
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

	//加载更多
	$scope.loadmore=function(){
		//页面加载到底部，或则美数据时，直接返回。
		if(tmp.length==0||!tmp[tmp.length-1]){ return }
		var start_id=tmp[tmp.length-1].id;
		var morePromise = recommend.getData(start_id);  //异步调用，获取承诺接口
		morePromise.then(function(data){
			var ret= data.data.post_contents;  //调用承诺接口resolove()
			angular.forEach(ret, function(data,index,array){
				data.post_content_filtered.text=$scope.trim(data.post_content_filtered.text,'g');
			});
			tmp=tmp.concat(ret);
			$scope.recommends=tmp;
		},function(data){
			$scope.recommends={error:'recommends 数据不存在。。。'}; //调用承诺接口reject();
		});
	};
	/*监听全局变量的改变，页面拉到底部时加载新数据*/
	$rootScope.$watch('tid',function(newValue,oldValue){
		var flag=newValue-$rootScope.count;
		/*处理首次监听  处理其他页面加载到底部  处理类目下无数据*/
		if(!isNaN(flag)&&(flag===$rootScope.indexid)&&tmp.length>0) {
			$scope.loadmore();
		}
	})

}]);
