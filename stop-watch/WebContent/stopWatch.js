	
	var ms = 0;
	var seconds = 0;
	var minutes = 0;
	var stopWatch;
	var startStopWatch;
	var requestId;

	
	//스톱워치 시작
	start = function(id){
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
		$("#" + id).html(stopWatch);
		requestId = requestAnimationFrame(start);
	};
	
	//스톱워치 일시정지
	function pause(){
		cancelAnimationFrame(requestId);
	};

	//스톱워치 종료
	function stop(id){
		cancelAnimationFrame(start);
		reset();
		var time = minutes + ":" + seconds + ":" + ms;
		$("#" + id).html(time);
	}
	
	//리셋
	function reset(){
		ms = 0;
		seconds = 0;
		minutes = 0;
	}
	
	//현재 시간 가져오기
	function getTime(){
		var now = new Date();
		var nowTime = now.getFullYear();
		nowTime += '-' + (now.getMonth()+1);
		nowTime += '-' + now.getDate();
		nowTime += ' ' + now.getHours();
		nowTime += ':' + now.getMinutes();
		nowTime += ':' + now.getSeconds();
		
		return nowTime;
	}
	
	
	
	
	
