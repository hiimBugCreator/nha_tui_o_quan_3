const locations = [
	{
		type: 'point',
		longitude: 106.68127715688188,
		latitude: 10.774075083216818,
		name: 'Bệnh viện Bình Dân',
		location: '371 Điện Biên Phủ, Phường 4, Quận 3, Hồ Chí Minh 700000, Việt Nam',
		symbol: {
			type: 'simple-marker',
			color: [255, 204, 0],
			outline: {
				color: [255, 255, 255],
				width: 1,
			},
		},
	},
	{
		type: 'point',
		longitude: 106.67698465620641,
		latitude: 10.78262620351187, 
		name: 'Ga Sài Gòn',
		location: 'Số 01 Nguyễn Thông, Phường 9, Quận 3, TP. Hồ Chí Minh.',
		symbol: {
			type: 'simple-marker',
			color: [169, 50, 38],
			outline: {
				color: [169, 50, 38],
				width: 1,
			},
		},
	},
	{
		type: 'point',
		longitude: 106.69246839195908,
		latitude: 10.779496542353344,
		name: 'Bảo tàng chứng tích chiến tranh',
		location: '28 đường Võ Văn Tần, Phường 6, Quận 3, Hồ Chí Minh 700000, Việt Nam',
		symbol: {
			type: 'simple-marker',
			color: [255, 204, 0],
			outline: {
				color: [255, 165, 0],
				width: 1,
			},
		},
	},
	{
		type: 'point',
		longitude: 106.68142535262977,
		latitude: 10.786341711256426,
		name: 'Chùa Pháp Hoa',
		location: '870 Đường Trường Sa, Phường 14, Quận 3, Hồ Chí Minh 700000, Việt Nam',
		symbol: {
		 	type: 'simple-marker',
		 	color: [137, 204, 143],
		 	outline: {
		  		color: [137, 165, 160],
		  		width: 1,
		 	},
		},
	},
	{
		type: 'point',
		longitude: 106.67197891058952,
		latitude: 10.789108886725948, 
		name: 'Nhà Thờ Giáo Xứ Bùi Phát',
		location: 'Hẻm 1074 Đ. Trường Sa, Phường 12, Quận 3, Hồ Chí Minh, Việt Nam',
		symbol: {
		 	type: 'simple-marker',
		 	color: [237, 104, 143],
		 	outline: {
		  		color: [137, 165, 160],
		  		width: 1,
		 	},
		},
	},
	{
		type: 'point',
		longitude: 106.67288012795663, 
		latitude: 10.78700070305095, 
		name: 'Nhà thờ An Phú',
		location: '205/45 Đ. Đỗ Thị Lời, Phường 11, Quận 3, Hồ Chí Minh, Việt Nam',
		symbol: {
		 	type: 'simple-marker',
		 	color: [137, 164, 43],
		 	outline: {
		  		color: [137, 165, 160],
		  		width: 1,
		 	},
		},
	},
];

let customLocationContent = function (feature) {
	const attributes = feature.graphic.attributes;

	const container = document.createElement('div');
	container.classList.add('custom-popup');

	const location = document.createElement('p');
	location.innerHTML = '<strong>' + attributes.location + '</strong>';
	container.appendChild(location);

	return container.outerHTML;
};
let point_template_location = {
	title: '{name}',
	content: customLocationContent,
};
