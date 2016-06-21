<div ng-include="'views/top.html'"></div>
<div class="qcontent">

    <div>
        <div class="con-top left">
            <div class="con-top-left left">
                <div ng-repeat="top in tops | limitTo : 1" active="top.active">
                    <a ng-href='#/detail/{{top.id}}'>
                        <img width="310px" height="160px" ng-src="{{top.post_content_filtered.imgs[0]}}" style="margin:auto;">
                    </a>    
                </div>
            </div>
            <div class="con-top-right left">
                <ul>
                    <li ng-repeat="top in tops | limitTo : 5" active="top.active">
                        <a ng-show="$index==0" ng-href='#/detail/{{top.id}}'>
                            <div class="con-top-title-first">{{top.post_title}}</div>
                            <div class="con-text">{{top.post_content_filtered.text}}</div>
                        </a>  
                        <a ng-show="$index>0" ng-href='#/detail/{{top.id}}'>
                            <span class="con-title">{{top.post_title}}</span>
                        </a>     
                    </li>
                </ul>
             
            </div>
        </div>
        <div class="con-thi right">
            <div class="sub-topic">
                <span class="sub-topic-text">新闻•观点</span>
                <span class="sub-topic-hr right"></span>
            </div>
             <div class="newsbox">
                <carousel interval="myInterval" class="newsview">
                    <slide ng-repeat="new in news | limitTo : 5" active="new.active">
                        <a class="newspic" ng-href='#/detail/{{new.id}}'>
                            <img width="100%" ng-src="{{new.post_content_filtered.imgs[0]}}" style="margin:auto;">
                            <div class="newstitle" >{{new.post_title}}</div>
                        </a>
                    </slide>
                </carousel>
            </div>

            <div class="sub-topic">
                <span class="sub-topic-text">编委会</span>
                <span class="sub-topic-hr right"></span>
            </div>
            <div class="con-editor-list">
                <div class="con-editor clearboth" ng-repeat="editor in editors">
                    <img class="left" style="margin:3px;" width="74px" height="74px"  ng-src="{{editor.avatar_path}}" />  
                    <div class="con-editor-name left">
                        <div style="font-size: 16px;color: #000;">
                        {{editor.user_name}}
                        </div>
                        <div ng-show="editor.aboutme">{{editor.aboutme}}</div>    
                    </div>
                </div>
            </div>

            <div class="sub-topic clearboth">
                <span class="sub-topic-text">焦点微博</span>
                <span class="sub-topic-hr right"></span>
            </div>
            <div>
                <iframe width="360" height="800" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=360&height=800&fansRow=1&ptype=1&speed=0&skin=1&isTitle=1&noborder=1&isWeibo=1&isFans=1&uid=5463347241&verifier=0e6ca2d9&dpc=1"></iframe>
            </div>
            

        </div>
    </div>
    

    <div class="con-fir left">
        <div class="sub-topic">
            <span class="sub-topic-text">墙外•推荐</span>
            <span class="sub-topic-hr right"></span>
        </div>
        <div ng-repeat='recommend in recommends'>
            <div ng-show="$index%3==0">
                <a href="#/detail/{{recommend.id}}">
                    <div class="con-title-first" style="margin:3px 0px;">{{recommend.post_title}}</div>
                    <div>
                    <img class="left" style="margin:3px;" width="74px" height="74px" ng-show="recommend.post_content_filtered.imgs.length>0" ng-src="{{recommend.post_content_filtered.imgs[0]}}" />  
                    <span style="font-size: 12px;color: #999999;">
                     {{recommend.post_content_filtered.text}}
                     </span>
                    </div>
                </a>
            </div>
            <div ng-show="$index%3>0">
            <a href="#/detail/{{recommend.id}}">
                <div class="con-title">{{recommend.post_title}}</div>
            </a>
            </div>
        </div>
        
    </div>
    <div class="con-sec left">
        <div class="sub-topic">
            <span class="sub-topic-text">国际•专栏</span>
            <span class="sub-topic-hr right"></span>
        </div>
        <div class="sub-topic-small">中国</div>
        <div ng-repeat='g in guoji'>
            <div ng-show="$index%3==0">
                <a href="#/detail/{{g.id}}">
                    <div class="con-title-first" style="margin:3px 0px;">{{g.post_title}}</div>
                    <div>
                    <img class="left" style="margin:3px;" width="74px" height="74px" ng-show="g.post_content_filtered.imgs.length>0" ng-src="{{g.post_content_filtered.imgs[0]}}" />  
                    <span style="font-size: 12px;color: #999999;">
                     {{g.post_content_filtered.text}}
                     </span>
                    </div>
                </a>
            </div>
            <div ng-show="$index%3>0">
            <a href="#/detail/{{g.id}}">
                <div class="con-title">{{g.post_title}}</div>
            </a>
            </div>
        </div>

        <div class="sub-topic-small">军事</div>
        <div ng-repeat='recommend in mil'>
            <div ng-show="$index%3==0">
                <a href="#/detail/{{recommend.id}}">
                    <div class="con-title-first" style="margin:3px 0px;">{{recommend.post_title}}</div>
                    <div>
                    <img class="left" style="margin:3px;" width="74px" height="74px" ng-show="recommend.post_content_filtered.imgs.length>0" ng-src="{{recommend.post_content_filtered.imgs[0]}}" />  
                    <span style="font-size: 12px;color: #999999;">
                     {{recommend.post_content_filtered.text}}
                     </span>
                    </div>
                </a>
            </div>
            <div ng-show="$index%3>0">
            <a href="#/detail/{{recommend.id}}">
                <div class="con-title">{{recommend.post_title}}</div>
            </a>
            </div>
        </div>

        <div class="sub-topic-small">经济</div>
        <div ng-repeat='recommend in economy'>
            <div ng-show="$index%3==0">
                <a href="#/detail/{{recommend.id}}">
                    <div class="con-title-first" style="margin:3px 0px;">{{recommend.post_title}}</div>
                    <div>
                    <img class="left" style="margin:3px;" width="74px" height="74px" ng-show="recommend.post_content_filtered.imgs.length>0" ng-src="{{recommend.post_content_filtered.imgs[0]}}" />  
                    <span style="font-size: 12px;color: #999999;">
                     {{recommend.post_content_filtered.text}}
                     </span>
                    </div>
                </a>
            </div>
            <div ng-show="$index%3>0">
            <a href="#/detail/{{recommend.id}}">
                <div class="con-title">{{recommend.post_title}}</div>
            </a>
            </div>
        </div>

        <div class="sub-topic-small">娱乐</div>
        <div ng-repeat='recommend in gossip'>
            <div ng-show="$index%3==0">
                <a href="#/detail/{{recommend.id}}">
                    <div class="con-title-first" style="margin:3px 0px;">{{recommend.post_title}}</div>
                    <div>
                    <img class="left" style="margin:3px;" width="74px" height="74px" ng-show="recommend.post_content_filtered.imgs.length>0" ng-src="{{recommend.post_content_filtered.imgs[0]}}" />  
                    <span style="font-size: 12px;color: #999999;">
                     {{recommend.post_content_filtered.text}}
                     </span>
                    </div>
                </a>
            </div>
            <div ng-show="$index%3>0">
            <a href="#/detail/{{recommend.id}}">
                <div class="con-title">{{recommend.post_title}}</div>
            </a>
            </div>
        </div>

    </div>

</div>

<div ng-include="'views/foot.html'"></div>