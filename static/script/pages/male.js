$.get('/ajax/male',function(d){
	new Vue({
		el:'#app',
		data:{
			items:d.items

		},
		methods:{

		}
	})
},'json')