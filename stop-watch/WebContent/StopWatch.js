	
	var ms = 0;
	var seconds = 0;
	var minutes = 0;
	var stopWatch;
	var startStopWatch;
	
	
	startStopWatch = function(){
		ms++;
		if(ms >= 10){
			seconds++;
		}
		if(ms == 10){
			ms = 0;
		}
		if(seconds >= 60){
			minutes++;
		}
		if(seconds == 60){
			seconds = 0;
		}
		stopWatch = (minutes + ":" + seconds + ":" + ms);
		console.log("지민 : " + stopWatch);
		$("#stopWatchArea").html(stopWatch);
		requestAnimationFrame(startStopWatch);
		return stopWatch;
	};
	
	
