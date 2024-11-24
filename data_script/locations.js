const locations = [
	{
		type: 'point',
		longitude: 106.69246839195908,
		latitude: 10.779496542353344,
		name: 'Bảo tàng chứng tích chiến tranh',
		location: '28 đường Võ Văn Tần, Phường Võ Thị Sáu, Quận 3, Hồ Chí Minh 700000, Việt Nam',
		symbol: {
			type: 'simple-marker',
			color: [255, 204, 0],
			outline: {
				color: [255, 255, 255],
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
