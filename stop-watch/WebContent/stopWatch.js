	
	var ms = 0;
	var seconds = 0;
	var minutes = 0;
	var stopWatch;
	var startStopWatch;
	var requestId;
	
	//수정사항
	//id값 파라미터로 받거나 셀렉터로 받기
	//전역변수값 this로 바꾸고
	//description  
	
	
	//스톱워치 시작
	start = function(param){
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
		$("#" + param).html(stopWatch);
		requestId = requestAnimationFrame(start);
	};
	
	//스톱워치 일시정지
	function pause(){
		cancelAnimationFrame(requestId);
	};

	//스톱워치 종료
	function stop(param){
		cancelAnimationFrame(start);
		ms = seconds = minutes = 0;
		var time = (minutes + ":" + seconds + ":" + ms);
		$("#" + param).html(time);
	}
	
	
	
	
	
	
