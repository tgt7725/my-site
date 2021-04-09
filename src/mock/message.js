import Mock from 'mockjs'
import qs from 'querystring'

Mock.mock('/api/message', "post", {
	code: 0,
	msg: "",
	data: {
		id: "@guid",
		nickname: "@cname",
		content: "@cparagraph(1, 10)",
		createDate: Date.now(),
		"avatar|1": [
			"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
			"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
			"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
			"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
		],
	},
}
);

Mock.mock(/^\/api\/message\/?(\?[^?]+)?$/, "get", function (option) {
	const query = option.url.split('?')[1];
	const limit = qs.parse(query).limit;
	return Mock.mock({
		code: 0,
		msg: "",
		"data": {
			"total": 52,
			[`rows|${limit}`]: [{
				"id": "@guid",
				nickname: "@cname",
				content: "@cparagraph(1, 10)",
				createDate: Date.now(),
				"avatar|1": [
					"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
					"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
					"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
					"https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
				],
			}]
		}
	})
});