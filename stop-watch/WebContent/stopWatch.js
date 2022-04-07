	
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
	
	
	
	var callbacks = {
			update : []
		  , alarm : []
	}
	
	//이벤트 등록
	function on(eventName, callback){
		
		if(this.callbacks[eventName] === undefined){
			return false;
		}
		
		this.callbacks[eventName] = callback;
		
		return true;
	}
	
	
	
	//이벤트 해제
	function off(eventName){
		
		this.callbacks[eventName] = [];
		
		return true;
	}
	


	//알람 이벤트
	function alarm(setAlarm){
		
		//현재시간
		var now = getTime();

		if(now === setAlarm){
			//알람 울림...... 어떻게 해야할지... 모르곘어요...
			//..........ㅠ
		}
		
	}
	
	
	
	
	
	
	
	
