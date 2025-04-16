let gameCompleted = false;
var lis = document.getElementById('bg').getElementsByTagName('li');
for (var i = 0;i < lis.length;i++){
	_div = lis[i].getElementsByTagName('div');
	for(var j = 0;j < _div.length;j++){

		_div[j].onclick = function(){
			this.judge = false;
			flip(this, this.judge);
			var click = document.getElementsByClassName('click');
			if(click.length == 2){
				let click1 = click[0];
				let click2 = click[1];
				if(click1.img_index == click2.img_index){
					var t = setTimeout(() => {
						click1.style.background = 'unset';
						click2.style.background = 'unset';
						click1.setAttribute('class', '');
						click1.onclick = null;
						click2.setAttribute('class', '');
						click2.onclick = null;
					}, 500);
				}else{
					var t = setTimeout(function() {
						flip(click1, true);
						flip(click2, true);
					}, 500);
					click1.setAttribute('class', '');
					click2.setAttribute('class', '');
				}
			}
		}
		
	}
}


    // 获取图片按钮并添加点击事件监听器  
    document.getElementById('chongwan').addEventListener('click', function() {  
        // 刷新当前页面  
        window.location.reload(true);  
    });  

function flip (element, judge){
	if(judge){
		element.style.transform = 'rotateY(0deg)';
		element.judge = false;
	}else if(!judge && document.getElementsByClassName('click').length < 2){
		element.style.transform = 'rotateY(180deg)';
		element.judge = true;
		element.className = 'click';
	}
}

var img_data = [];
for(var i = 0;i < 10;i++){
	_img = {
		src: './img/fanfanle/' + i + '.png',
		number:0
	};
	img_data.push(_img);
}
// 分配背景图片
for (var i = 0;i < lis.length;i++){
	_div = lis[i].getElementsByTagName('div');
	for(var j = 0;j < _div.length;j++){
		writeBackground(_div[j]);
	}
}

function writeBackground (element){
	let rand = parseInt(Math.random() * 4)
	if(img_data[rand].number < 4){
		element.style.background = "url( " + img_data[rand].src + " ) no-repeat";
		img_data[rand].number++;
		element.img_index = rand;
	}else{
		writeBackground(element)
	}
}

