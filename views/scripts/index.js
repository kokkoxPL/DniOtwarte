$(document).ready(function () {
	$("#content").mouseover(function () {
		$("#block").css({
			position: "absolute",
			left: "1%",
			transition: "0.5s",
		});
		$("#image").css({
			width: "600px",
			height: "600px",
			borderRadius: "0%",
			transition: "0.5s",
		});

		$("#h1").css({
			color: "white",
		});
		$("#historyP").css({
			color: "white",
			position: "absolute",
			top: "0",
			fontSize: "28px",
		});
	});

	$("#content").mouseout(function () {
		$("#block").css({
			position: "absolute",
			left: "-102%",
			transition: "0.5s",
		});
		$("#h1").css({
			color: "black",
			transition: "0.5s",
		});
		$("#historyP").css({
			color: "black",
			transition: "0.5s",
			position: "absolute",
			top: "17%",
			fontSize: "25px",
		});
		$("#image").css({
			width: "450px",
			height: "450px",
			borderRadius: "50%",
			transition: "0.5s",
		});
	});
});
