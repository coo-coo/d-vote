$(document).ready(function() {
	// do nothing...
});

function doVote(){
	errorClear();
	var legValue = $("input[name='topic_leg']:checked").val();
	if(legValue==undefined){
		errorOn('请至少选择一项！');
	}
	else{
		var topicId = $('#topic_id').val();
		// TODO to get the user ID
		alert("提交:" + topicId + "  " + legValue);
	}
}

function errorOn(msg){
	$('#message').addClass("alert alert-danger");
	$('#message').html(msg);
}

function errorClear(){
	$('#message').removeClass("alert alert-danger");
	$('#message').html("");
}
