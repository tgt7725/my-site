import Mock from 'mockjs'
Mock.mock('/api/about', {
	code: 0,
	msg: "",
	data: './about.html'
})