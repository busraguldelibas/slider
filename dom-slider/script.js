var models =[
    {
        name : 'Cream Co. Dudak parlatıcı',
        image: 'image/cream co. dudak parlatıcı Raspb.webp' ,
        link:  'https://creamco.com.tr/lip-oil-gloss-raspberry'
     },
     {
        name : 'kiko dudak parlatıcı 41 ',
        image: 'image/kiko 41.webp' ,
        link:  'https://www.kikomilano.com.tr/3d-hydra-lipgloss-limited-edition/'
     },
     {
        name : ' sephora 07 gloss',
        image: 'image/sephora 07 gloss.webp' ,
        link:  'https://www.sephora.com.tr/p/outrageous-plump-effect-gloss-P4023130.html'
     },
     {
        name : 'golden rose mega shine 112',
        image: 'image/golden rose mega shine 112.webp' ,
        link:  'https://shop.goldenrose.com.tr/golden-rose-3d-mega-shine-lipgloss-112-renkli-dudak-parlaticisi?utm_source=revotas&utm_medium=perssearch&utm_campaign=perssearch&rvs_source=other&rvs_medium=perssearch&rvs_campaign=perssearch'
     },
    

];

var index =0;
var slaytCount =models.length; 
var Interval;

var settings = {
    duration : '2000',
    random : false

}

init(settings);


document.querySelector('.fa-arrow-left').addEventListener('click',function(){
 index--;
 showSlide(index);
 console.log(index);
})

document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(Interval)

    })
})
document.querySelectorAll('all').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init (settings){

    var prev;//aynı sayılar tekrar olmasın aynı sayfalar random şekilde üst üste gelmesin diye
      Interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*slaytCount)
            }while(index == prev)
            prev = index;
            
        }else{
           //aşağıda yapacağmız işlem slaytları sıralı yapmak amaçlı
           if(slaytCount == index +1) {
            index = -1;
           }
           showSlide(index);
           console.log(index);
           index++;
        }
        
        showSlide(index)

    }, settings.duration)

}


function showSlide(i){

    index= i;
    if( i<0  ){
        index =slaytCount-1;
    }
    if(i>=slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent =models[index].name;

    document.querySelector('.card-img-top').setAttribute ('src', models[index].image)

    document.querySelector('.card-link').setAttribute('href',models[index].link )
}






