$(function(){
		// 預設顯示第一個 Tab
		var _showTab = 0;
		var showIndex = 0;
		var isHover = false;
		var timer_cuthere, speed  = 1000;
		var fadeInSpeed  = 0;
		var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs li').mouseover(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
			if(!isHover){
				// 啟動計時器
				clearTimeout(timer_cuthere);
				timer_cuthere = setTimeout(autoMouseover, speed + fadeInSpeed);
			}
			
			return false;
		}).find('a').focus(function(){
			this.blur();
		});
		// 用來顯示大圖片用
	//停止範圍 ul的部分一定要指定到li底下的a層級	
	var $showImage = $('.tab_content,.tabs>li>a');
	
	//判斷計時器啟動與停止
	$showImage.hover(function(){
		isHover = true;
		// 停止計時器
		clearTimeout(timer_cuthere);
	}, function(){
		isHover = false;
		// 啟動計時器
		timer_cuthere = setTimeout(autoMouseover, speed + fadeInSpeed);
	});
	
	// 自動切換至下一個
	function autoMouseover(){
		if(isHover) return;
		if ($('ul.tabs li').length < 2 )return;
		showIndex = (showIndex + 1) % $('ul.tabs li').length;
		
		$('ul.tabs li').eq(showIndex).mouseover();
	}
	
	//預設自動輪播
	timer_cuthere = setTimeout(autoMouseover, speed);
	
	//當第三個頁籤被點擊時，啟用計時器
	$('.abgne_tab > .tabs > li:nth-child(1)').click(function(){
			isHover = false;
			clearTimeout(timer_cuthere);
			timer_cuthere = setTimeout(autoMouseover, speed + fadeInSpeed);
		})	;
		
	//當頁籤離開第三個頁籤時，關閉計時器
	$('.abgne_tab > .tabs > li:not(:nth-child(1))').click(function(){
			isHover = true;
			clearTimeout(timer_cuthere);
		})	;


	// 預設顯示第一個 Tab
		var _showTab = 0;
		var showIndex2 = 0;
		var isHover2 = false;
		var timer_cuthere2, speed  = 1000;
		var fadeInSpeed  = 0;
		var $defaultLi = $('ul.taichung_tabs li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.taichung_tabs li').click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
			if(!isHover2){
				// 啟動計時器
				clearTimeout(timer_cuthere2);
				timer_cuthere2 = setTimeout(autoMouseover2, speed + fadeInSpeed);
			}
			
			return false;
		}).find('a').focus(function(){
			this.blur();
		});
		// 用來顯示大圖片用
	//停止範圍 ul的部分一定要指定到li底下的a層級	
	var $showImage = $('.tab_content,.taichung_tabs>li>a');
	
	//判斷計時器啟動與停止
	$showImage.hover(function(){
		isHover2 = true;
		// 停止計時器
		clearTimeout(timer_cuthere2);
	}, function(){
		isHover2 = false;
		// 啟動計時器
		timer_cuthere2 = setTimeout(autoMouseover2, speed + fadeInSpeed);
	});
	
	// 自動切換至下一個
	function autoMouseover2(){
		if(isHover2) return;
		if ($('ul.taichung_tabs li').length < 2 )return;
		showIndex2 = (showIndex2 + 1) % $('ul.taichung_tabs li').length;
		
		$('ul.taichung_tabs li').eq(showIndex2).click();
	}
	
	//預設自動輪播
	timer_cuthere2 = setTimeout(autoMouseover2, speed);
	
});