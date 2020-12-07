window.onscroll = function() 
	{
		if (document.documentElement.scrollTop > 150) 
		{
    		document.getElementById("myBtn").style.display = "block";
  		} 
  		else 
  		{
    		document.getElementById("myBtn").style.display = "none";
  		}
};

function topFunction() {
  document.documentElement.scrollTop = 0;
}
