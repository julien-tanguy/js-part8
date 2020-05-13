window.onscroll = function(){
    var paragraphList = document.getElementsByTagName('p');
    var index = parseInt(window.pageYOffset / 50);
        if(index < paragraphList.length){
            paragraphList[index].style.display = 'block';
        }
}