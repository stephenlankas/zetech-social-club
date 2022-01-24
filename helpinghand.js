var k=0;
var image_files=['h2.png','h3.png','h4.png','h5.jpeg','h6.jpg'];
setInterval(start,2000);

function start()
{
		document.getElementById("help").src="images/"+ image_files[k];
	k++;
	if(k>3)
	{
		k=0;
	}
}