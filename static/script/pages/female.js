$.get('/ajax/female',function(d){
	new Vue({
		el:'#app',
		data:{
			items:d.items

		},
		methods:{

		}
	})
},'json')