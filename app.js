var val=document.querySelector('#val');
var searchbtn=document.querySelector('#searchbtn');
var outdis=document.querySelector('#moviedis');
var count=0;
searchbtn.addEventListener('click',()=>
{
    reset();
    fetchShows(val.value);
    val.value="";
})
async function fetchShows(text)
{
    var config= {params:{q:text} };
    var res= await axios.get("https://api.tvmaze.com/search/shows",config);
    try{
    var result=res.data;
    for(show of result)
    {
        if(show.show.image)
        {
        var newDiv=document.createElement('div');
        var newimg=document.createElement('img');
        var anchor=document.createElement('a');
        newimg.src=show.show.image.original;
        anchor.href=show.show.url;
        anchor.innerText=show.show.name;
        newDiv.append(newimg);
        newDiv.append(anchor);
        outdis.append(newDiv);

        }
    }
    }
    catch(err)
    {
        console.log('Error Found',err);
    }
}
function reset()
{
    var divs=document.querySelectorAll('div');
    for(current of divs)
    {
        outdis.removeChild(current);
    }
}