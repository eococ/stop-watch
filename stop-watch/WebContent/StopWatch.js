	
	var ms = 0;
	var seconds = 0;
	var minutes = 0;
	var stopWatch;
	var startStopWatch;
	var requestId;
	
	//스톱워치
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
		$("#stopWatchArea").html(stopWatch);
		requestId = requestAnimationFrame(startStopWatch);
	};
	
	//스톱워치 일시정지
	function stopStopWatch(){
		cancelAnimationFrame(requestId);
	};

	//스톱워치 종료
	function resetStopWatch(){
		cancelAnimationFrame(startStopWatch);
		ms = seconds = minutes = 0;
		var time = (minutes + ":" + seconds + ":" + ms);
		$("#stopWatchArea").html(time);
	}
	
	
	
	
	
	
