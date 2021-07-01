window.onload = function() {
	new Vue({
		el: '#my',
		data: {
			adBack: true,
			n:5
		},
		methods: {
			play: function() {
				setInterval(this.autoPlay, 1000)
			},
			autoPlay: function() {
				this.n--;
				if (this.n == 0) {
					this.adBack = false;
				}
			}
		},
		mounted:function(){
			this.play();
		}
	})
}
