function scroll_to(get_id) {
    // Thanks Bowser65 <3
    let id = get_id.replace("#", "")
    const el = document.getElementById(id)
    el.scrollIntoView({behavior: "smooth", inline: "nearest"})
    history.pushState(null, null, `#${id}`)
}
  
window.addEventListener('scroll', function() {
  // Hide arrow button when scrolling down the page
  var scrollPosition = window.scrollY
  var logoContainer = document.getElementsByClassName('arrow')[0]
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled')
  else logoContainer.classList.remove('arrow--scrolled')
})
  
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                test1 = allText
            }
        }
    }
    rawFile.send(null);
}

document.addEventListener('DOMContentLoaded', function() {
    test = readTextFile("https://nicksaltfoxu.ml/versions/bunkerBot.inc/version")
    document.getElementById("bversion").innerText = test1
})