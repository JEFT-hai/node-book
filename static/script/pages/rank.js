$.get('/ajax/rank',function(d){
	new Vue({
		el:'#app',
		data:{
			items:d.items,
			// title:item.description.split('\n'),
			// click:item.click.split('\n')||''

		},
		methods:{

		}
	})
},'json')