$(function(){
    $('.hero-slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

$(function(){
    $("#tabs").tabs();
});
    
let tabSwitchers = document.querySelectorAll('[target-wrapper]')
	tabSwitchers.forEach(item => {
			item.addEventListener('click', (e)=> {
					let currentWrapperId = item.getAttribute('target-wrapper')
					let currentWrapperTargetId = item.getAttribute('target-tab')
					
					let currentWrapper =  document.querySelector(`#${currentWrapperId}`)
					let currentWrappersTarget = document.querySelector(`#${currentWrapperTargetId}`)

					let allCurrentTabItem = document.querySelectorAll(`[target-wrapper='${currentWrapperId}']`)
					let allCurrentWrappersTarget = document.querySelectorAll(`#${currentWrapperId} .tab-content`)
				
					if(currentWrappersTarget) {
							if(!currentWrappersTarget.classList.contains('active')) {
									allCurrentWrappersTarget.forEach(tabItem => {
											tabItem.classList.remove('active')
									})
									allCurrentTabItem.forEach(item => {
											item.classList.remove('active')
									})
									item.classList.add('active')
									currentWrappersTarget.classList.add('active')
							}
					}
			})
});

$(function() {
  $("#my-accordion").accordionjs({
    closeAble: true,
    closeOther: true,
    slideSpeed: 150,
    activeIndex: false
    // openSection: function (section) { },
    // beforeOpenSection: function (section) { },
  });
});