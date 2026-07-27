window.addEventListener("load", function() {

	gsap.registerPlugin(Observer, ScrollTrigger);
	

			
	var ollincd = {
		firstLoad: true,
		onload: function() {
			let banner = document.querySelector(".ollincd-inner");

			if(!banner) return;

			let logo = banner.querySelector(".ollincd-logo");
			let girl = banner.querySelector(".ollincd-girl");
			let bg = banner.querySelector(".ollincd-bg");

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: banner,
					start: "bottom 100%",
					end: "+=" + banner.offsetHeight,
					scrub: 1,
					pin: true,
					pinSpacing: true,
					anticipatePin: 1,
					invalidateOnRefresh: true
					
				}
			});
			 tl.to(bg, {
				scale: 1.2,
				ease: "none"
			}, 0);
			tl.to(girl, {
				scale: 0.5,
				y: 500,
				ease: "none"
			}, 0);
			


			gsap.to(logo, {
				scrollTrigger: {
					trigger: logo,
					start: "top 75%",
					onEnter: (self) => {
						
						gsap.to(self.trigger, {
							duration: .5,
							filter:"blur(" +0 + "px)"
						})
					}
				}
			});

			
			
		},


	};

	ollincd.onload();
})

