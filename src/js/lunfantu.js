/**
 * Created by ttc on 17-12-19.
 */
function luanfantu()
{
  window.setInterval(luanfantu1,300);


}
var i = 0;
var j = 0;
function luanfantu1()
{
    var o = document.getElementsByTagName("li");
    if(i<o.length)
    {
        o[i++].style.backgroundColor = "red";
        console.log("red");
        if(i!=1)
        {
            o[j++].style.backgroundColor = "white";
            console.log("white");
        }

    }
    else
    {
        i=0;
        o[0].style.backgroundColor = "red";
        i++;
        o[o.length-1].style.backgroundColor = "white";
        j=0;
    }
}