
	var step = 10;
	function Graj()
	{
		if(!document.getElementById('player').paused)
		{
			document.getElementById('play').innerHTML = "<span class='icon-play-button'></span>";
			document.getElementById('player').pause();
		}
		else
		{
			document.getElementById('play').innerHTML = "<span class='icon-pause'></span>";
			document.getElementById('player').play();
		}
	}
	
	function Stop()
	{
		document.getElementById('player').currentTime=0;
		document.getElementById('player').pause();
		document.getElementById('play').innerHTML = "<span class='icon-play-button'></span>";
	}
	function do_przodu()
	{
		document.getElementById('player').currentTime+=step;
		document.getElementById('play').innerHTML = "<span class='icon-play-button'></span>";
	}
		function do_tylu()
	{
		document.getElementById('player').currentTime-=step;
	}
