a=window.open("http://localhost:5000");myfunc=()=>{if(a.location.href.includes("code=")){window.location.href="http://localhost:5000/test?hello="+a.location.href}};setInterval(myfunc,1000)
