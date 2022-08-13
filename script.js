
/*Menu mobile*/
var estado = true;
window.addEventListener('load',()=>{
	document.getElementById('menutoggle').addEventListener('click',mobile);
});	
	function mobile(){
	document.body.style.overflow = estado ? 'hidden' : 'initial'; 
	window.document.getElementById('nav').classList.toggle('on');
     estado = !estado;
}


/*Slider de foto*/
var ims = [];
var slider,imgactual,maximg,temp,tempotroca,vtemp,vbarra;

function precarregamento(){
 var s = 1;
 for(var i = 0; i<7; i++){
     ims[i] = new Image();
     ims[i].scr = "img/img/s"+s+".jpg";
     s++;
 }

}

function carregarimg(img){
	slider.style.background = "url('"+ims[img].scr+"') 100%/100% no-repeat";
}

function trocar(dir){
   tempotroca = 0;
  imgactual += dir
  if(imgactual > maximg){
  	imgactual = 0;
  }else if(imgactual < 0){
  	imgactual = maximg;
  }
  carregarimg(imgactual);
}

function anima(){
   tempotroca++;
  if(tempotroca >= 500){
  	tempotroca = 0;
  	trocar(1);
  }
  vtemp = tempotroca/5;
  vbarra.style.width = vtemp+"%";
  window.requestAnimationFrame(anima);
}

function iniciar(){
	precarregamento();
	imgactual = 0;
	maximg = ims.length - 1;
    slider = document.getElementById('slider');
    vbarra = document.getElementById('dvbarra');
    carregarimg(imgactual);
    tempotroca = 0;
     anima();
    document.getElementsByTagName('button')[0].addEventListener('click',()=>{trocar(-1)});
    document.getElementsByTagName('button')[1].addEventListener('click',()=>{trocar(1)});
   
}
window.addEventListener('load',iniciar);
