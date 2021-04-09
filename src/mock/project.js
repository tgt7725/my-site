import Mock from 'mockjs'

Mock.mock('/api/project', {
	code: 0,
	msg: "",
	"data|10": [
		{
			id: "@id",
			name: "@ctitle(5, 10)",
			url: "@url",
			github: "@url",
			"description|3": ["@cparagraph(1, 3)"],
			"thumb|1": ["@image(300x250, @color, #fff, @natural)", null],
			"order|+1": 1
		},
	]
})