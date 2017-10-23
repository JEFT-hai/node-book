$.get('ajax/category',function(d){
	new Vue({
		el:'#app',
		data:{
			d:d,
			magazine:d.magazine,
			male:d.male,
			female:d.female,
			book:d.book
		},
		methods:{

		}

	})	
},'json')

