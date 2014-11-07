$(document).ready(function() {
	nj.web.menubar(napp.menuitems, 'chart');

	// 业务编码
	//loadNgbfBpPie();
	//loadPortalAccess();
});

function loadNgbfBpPie() {
	var pie = new RGraph.Pie('ngbf_bp_pie', [10,10,130]);
	pie.Set('chart.tooltips', [ '1', '1','13' ]);
	pie.Set('chart.labels', [ '期货产品部(1)', '银行和交易所(1)', '证券产品部(13)' ]);
	pie.Draw();
}

function loadPortalAccess() {
	var url = "http://ngbf/oss/cxf/ngbf/s/app/portal/access/data";
	nj.rpc.call(url, handlerData);
}

function handlerData(data) {
	// map对象，返回生成数组
	var d = [ data.home, data.doc, data.dependency, data.team, data.chart,
			data.employee ];
	// var bar = new RGraph.Bar('ngbf_portal_accsss', [ 1200, 243, 180, 160,
	// 120, 43]);
	var bar = new RGraph.Bar('ngbf_portal_accsss', d);
	bar.Set('labels', [ '首页', '架构介绍', '最新依赖', '团队成员', '数据图表', '员工分布' ]);
	bar.Draw();
}
