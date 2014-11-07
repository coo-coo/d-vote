var napp = new Object;

// 应用head
napp.head = {
	"title" : "VOTE",
	"author" : "COO",
	"version" : "1.0.0.0",
	"keywords" : "VOTE",
	"description" : "VOTE"
};

// 定义菜单栏
napp.menuitems = [ {
	"id" : "home",
	"label" : "首    页",
	"value" : "../home/index.html"
},{
	"id" : "chart",
	"label" : "图表",
	"value" : "../home/chart.html"
},{
	"id" : "about",
	"label" : "关于我们",
	"value" : "../home/about.html"
}];

// 定义友情链接
napp.friendlinks = [ ];

// 应用上下文命名空间
napp.ns = {
	"web_footer_text" : "",
	"app_apikey" : "1234",
	"app_rpc_default" : "http://coo/oss/",
	"web_login_support" : "false"
};
