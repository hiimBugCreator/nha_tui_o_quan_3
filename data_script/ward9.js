const location_9 = [
	{
		type: 'point',
		longitude: 106.67698465620641,
		latitude: 10.78262620351187, 
		name: 'Ga Sài Gòn',
		location: 'Số 01 Nguyễn Thông, Phường 9, Quận 3, TP. Hồ Chí Minh.',
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

let customLocationContent_9 = function (feature) {
	const attributes = feature.graphic.attributes;

	const container = document.createElement('div');
	container.classList.add('custom-popup');

	const location = document.createElement('p');
	location.innerHTML = '<strong>' + attributes.location + '</strong>';
	container.appendChild(location);

	return container.outerHTML;
};
let point_template_location_9 = {
	title: '{name}',
	content: customLocationContent_9,
};
