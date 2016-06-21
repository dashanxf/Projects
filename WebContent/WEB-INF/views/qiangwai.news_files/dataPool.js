/**
 * Created by Administrator on 2015/11/23.
 */
/*提供类目信息的服务*/
lifeix.factory('category',function($http,$q,$rootScope){

    return{
        getData:function(){
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:$rootScope.baseUrl+'/api/category/list'}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });
            return defer.promise; //返回承诺，返回获取数据的API
        }
    }
})
/*提供新闻头条功能*/
.service('top',function($http,$q,$rootScope){
    return{
        getData:function(term_id,start_id,limit){
            var requestUrl=$rootScope.baseUrl+'/api/content/top';
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:requestUrl}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });

            return defer.promise; //返回承诺，返回获取数据的API
        }
    }
})

/*提供单条类目中具体内容的服务*/
.service('categoryContent',function($http,$q,$rootScope){
    return{
        getData:function(term_id,start_id,limit){
            var requestUrl=$rootScope.baseUrl+'/api/content/term?term_id='+term_id;
            if (start_id)
                requestUrl += '&start_id=' + start_id.toString();
            if (limit)
                requestUrl += '&limit=' + limit.toString();
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:requestUrl}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });

            return defer.promise; //返回承诺，返回获取数据的API
        }
    }

})

/*提供单条类目中具体内容的服务*/
.service('news',function($http,$q,$rootScope){
    return{
        getData:function(term_id,limit){
            var requestUrl=$rootScope.baseUrl+'/api/content/term?term_id='+term_id;
            if (limit)
                requestUrl += '&limit=' + limit.toString();
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:requestUrl}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });
            return defer.promise; //返回承诺，返回获取数据的API
        }
    }

})

/*新闻详情页*/
.service('contentDetail',function($http,$q,$rootScope){

    return{
        getData:function(content_id,filter_content){
            var requestUrl=$rootScope.baseUrl+'/api/content/view?content_id='+content_id;
            if (filter_content)
                requestUrl += '&filter_content=\"'+filter_content.toString()+'\"';
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:requestUrl}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });

            return defer.promise; //返回承诺，返回获取数据的API
        }
    }
})
/*首页读家显示新闻*/
.service('recommend',function($http,$q,$rootScope){

    return{
        getData:function(start_id,limit){
            var requestUrl=$rootScope.baseUrl+'/api/content/recommend?limit=20';
            if (start_id)
                requestUrl += '&start_id=' + start_id.toString();
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:requestUrl}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });
            return defer.promise; //返回承诺，返回获取数据的API
        }
    }
})

/*首页读家显示新闻*/
.service('editors',function($http,$q,$rootScope){

    return{
        getData:function(){
            var requestUrl=$rootScope.baseUrl+'/api/user/editors';
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:requestUrl}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });
            return defer.promise; //返回承诺，返回获取数据的API
        }
    }
})

/*文章评论
* post_id 文章id
 start_id 向下加载ID
 end_id 向上加载ID
 limit 数
* */
.service('comment',function($http,$q,$rootScope){
    return{
        getData:function(post_id,start_id,end_id,limit){
            var requestUrl=$rootScope.baseUrl+'/api/comment/list?limit=10';
            if (post_id)
                requestUrl += '&post_id=' + post_id.toString();
            if (start_id)
                requestUrl += '&start_id=' + start_id.toString();
            if (end_id)
                requestUrl += '&end_id=' + end_id.toString();
            var defer=$q.defer();  //声明延后执行
            $http({method:'GET',url:requestUrl}).
            success(function(data,status,headers,config){
                defer.resolve(data);  //声明执行成功
            }).
            error(function(data,status,headers,config){
                defer.reject();      //声明执行失败
            });
            return defer.promise; //返回承诺，返回获取数据的API
        }
    }
})
/*相似内容
 content_id	文章ID，必填
 now_page	当前页码，默认第一页
 limit	每页显示的数量，默认9
 * */
    .service('related',function($http,$q,$rootScope){
        return{
            getData:function(content_id,now_page,limit){
                var requestUrl=$rootScope.baseUrl+'/api/content/related?limit=9';
                if (content_id)
                    requestUrl += '&content_id=' + content_id.toString();
                if (now_page)
                    requestUrl += '&now_page=' + now_page.toString();
                var defer=$q.defer();  //声明延后执行
                $http({method:'GET',url:requestUrl}).
                success(function(data,status,headers,config){
                    defer.resolve(data);  //声明执行成功
                }).
                error(function(data,status,headers,config){
                    defer.reject();      //声明执行失败
                });
                return defer.promise; //返回承诺，返回获取数据的API
            }
        }
    });

