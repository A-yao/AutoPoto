$(function(){
		// �w�]��ܲĤ@�� Tab
		var _showTab = 0;
		var showIndex = 0;
		var isHover = false;
		var timer_cuthere, speed  = 1000;
		var fadeInSpeed  = 0;
		var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// �� li ���ҳQ�I����...
		// �Y�n�令�ƹ����� li ���ҴN������, �� click �令 mouseover
		$('ul.tabs li').mouseover(function() {
			// ��X li �����W�s�� href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// ��ثe�I���쪺 li ���ҥ[�W .active
			// �ç�S�̤������� .active �������� class
			$this.addClass('active').siblings('.active').removeClass('active');
			// �H�J�۹��������e�����åS�̤���
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
			if(!isHover){
				// �Ұʭp�ɾ�
				clearTimeout(timer_cuthere);
				timer_cuthere = setTimeout(autoMouseover, speed + fadeInSpeed);
			}
			
			return false;
		}).find('a').focus(function(){
			this.blur();
		});
		// �Ψ���ܤj�Ϥ���
	//����d�� ul�������@�w�n���w��li���U��a�h��	
	var $showImage = $('.tab_content,.tabs>li>a');
	
	//�P�_�p�ɾ��ҰʻP����
	$showImage.hover(function(){
		isHover = true;
		// ����p�ɾ�
		clearTimeout(timer_cuthere);
	}, function(){
		isHover = false;
		// �Ұʭp�ɾ�
		timer_cuthere = setTimeout(autoMouseover, speed + fadeInSpeed);
	});
	
	// �۰ʤ����ܤU�@��
	function autoMouseover(){
		if(isHover) return;
		if ($('ul.tabs li').length < 2 )return;
		showIndex = (showIndex + 1) % $('ul.tabs li').length;
		
		$('ul.tabs li').eq(showIndex).mouseover();
	}
	
	//�w�]�۰ʽ���
	timer_cuthere = setTimeout(autoMouseover, speed);
	
	//��ĤT�ӭ��ҳQ�I���ɡA�ҥέp�ɾ�
	$('.abgne_tab > .tabs > li:nth-child(1)').click(function(){
			isHover = false;
			clearTimeout(timer_cuthere);
			timer_cuthere = setTimeout(autoMouseover, speed + fadeInSpeed);
		})	;
		
	//�������}�ĤT�ӭ��ҮɡA�����p�ɾ�
	$('.abgne_tab > .tabs > li:not(:nth-child(1))').click(function(){
			isHover = true;
			clearTimeout(timer_cuthere);
		})	;


	// �w�]��ܲĤ@�� Tab
		var _showTab = 0;
		var showIndex2 = 0;
		var isHover2 = false;
		var timer_cuthere2, speed  = 1000;
		var fadeInSpeed  = 0;
		var $defaultLi = $('ul.taichung_tabs li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// �� li ���ҳQ�I����...
		// �Y�n�令�ƹ����� li ���ҴN������, �� click �令 mouseover
		$('ul.taichung_tabs li').click(function() {
			// ��X li �����W�s�� href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// ��ثe�I���쪺 li ���ҥ[�W .active
			// �ç�S�̤������� .active �������� class
			$this.addClass('active').siblings('.active').removeClass('active');
			// �H�J�۹��������e�����åS�̤���
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
			if(!isHover2){
				// �Ұʭp�ɾ�
				clearTimeout(timer_cuthere2);
				timer_cuthere2 = setTimeout(autoMouseover2, speed + fadeInSpeed);
			}
			
			return false;
		}).find('a').focus(function(){
			this.blur();
		});
		// �Ψ���ܤj�Ϥ���
	//����d�� ul�������@�w�n���w��li���U��a�h��	
	var $showImage = $('.tab_content,.taichung_tabs>li>a');
	
	//�P�_�p�ɾ��ҰʻP����
	$showImage.hover(function(){
		isHover2 = true;
		// ����p�ɾ�
		clearTimeout(timer_cuthere2);
	}, function(){
		isHover2 = false;
		// �Ұʭp�ɾ�
		timer_cuthere2 = setTimeout(autoMouseover2, speed + fadeInSpeed);
	});
	
	// �۰ʤ����ܤU�@��
	function autoMouseover2(){
		if(isHover2) return;
		if ($('ul.taichung_tabs li').length < 2 )return;
		showIndex2 = (showIndex2 + 1) % $('ul.taichung_tabs li').length;
		
		$('ul.taichung_tabs li').eq(showIndex2).click();
	}
	
	//�w�]�۰ʽ���
	timer_cuthere2 = setTimeout(autoMouseover2, speed);
	
});