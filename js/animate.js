	function animate(element,target,callback) {
			//判断之前是否开启了定时器
			if (element.timerId) {
				clearInterval(element.timerId);
			};
			element.timerId = setInterval(function() {
				//当前坐标
				var current = element.offsetLeft;
				//目标位置
				// var target = 1000;
				//步进
				var step = 10;
				//当当前位置>目标位置 step应该是负数
				if (current > target) {
					step = - Math.abs(step);
				}

				if (Math.abs(current-target) <= Math.abs(step)) {
					element.style.left = target + 'px';
					clearInterval(element.timerId);
					//如果有回调函数，则这个结束后开始执行
					if (callback) {
						callback();
					}
					return;
					//停止工作
				}
				current += step;
				element.style.left = current + "px";
			},10);
		}