//获取图片
    console.log(12);
	var img =  document.getElementById("img");
	var div = document.getElementById("hidden");
	var flag = true;
	//给图片添加点击事件
	img.onclick = show;
	function show() {
		if(flag){
			div.style.display = 'block';
			flag = false;
		}
		else {
			div.style.display = 'none';
			flag = true;
		}
	}

	//获取li 标签
	//获取div标签
	var links = document.querySelectorAll(".title ul li");
	var len = links.length;
	    var i = 0;
		for (; i < len; i++) {
			var link = links[i];
			//让a记录自己的索引
			link.index = i ;
			//注册事件
			link.onclick = linkClick;
		}
		//事件处理函数
		function linkClick() {
			//让红线到当前a 下,querySelector只获取一个元素
			var line = document.querySelector('.jd_line');
			// console.log(12);
			// line.style.left = this.offsetLeft +'px';
			animate(line,this.offsetLeft);
			//显示对应的详细内容
			var index = this.index;
			//让所有详细内容隐藏
			var divs = document.querySelectorAll(".lab");
			console.log(divs.length);
			for(var j=0;j<len;j++) {
				var div = divs[j];
				var link = links[j];
				link.style.color = "black";
				div.className = 'lab hide';
			}
			//让当前tab对应的详细内容显示
			divs[index].className = "lab current";
			links[index].style.color = "green";

		}