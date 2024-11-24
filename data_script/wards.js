// define your ward like ward 6 and add it into wards at the end of this file
const ward6 = {
	type: 'polygon',
	name: 'Phường 6',
	location: 'Là một phường thuộc quận 3, TPHCM',
	area: '0.62 km2',
	population: '16.609 người',
	population_density: '26.787người/km2',
	symbol: {
		type: 'simple-fill',
		color: [227, 139, 79, 0.4],
		outline: {
			color: [255, 255, 255],
			width: 1,
		},
	},
	rings: [
		//Giap ranh phuong 5
		[106.68525432105561, 10.775934365437534],
		//Giap ranh phuong 7
		[106.69182091013747, 10.782510868722397], 
		[106.68902748876724, 10.78494081325298],
		//Giap ranh phuong 8
		[106.69193912711617, 10.787877353338867],
		//Giap ranh phuong Da Kao
		[106.69808945966112, 10.782881484075126],
		//Giap ranh Q1
		[106.68944660850039, 10.773655198069441],
		
		[106.68525432105561, 10.775934365437534],
	],
};

let customWardContent = function (feature) {
	const attributes = feature.graphic.attributes;

	const container = document.createElement('div');
	container.classList.add('custom-popup');

	const location = document.createElement('p');
	location.innerHTML = '<strong>' + attributes.location + '</strong>';
	container.appendChild(location);

	const area = document.createElement('p');
	area.innerHTML = '<strong>Diện tích:</strong> ' + (attributes.area ?? 'không có số liệu');
	container.appendChild(area);

	const population = document.createElement('p');
	population.innerHTML = '<strong>Dân số:</strong> ' + (attributes.population ?? 'không có số liệu');
	container.appendChild(population);

	const population_density = document.createElement('p');
	population_density.innerHTML =
		'<strong>Mật độ dân số:</strong> ' + (attributes.population_density ?? 'không có số liệu');
	container.appendChild(population_density);

	return container.outerHTML;
};
let point_template_ward = {
	title: '{name}',
	content: customWardContent,
};

//define your ward like ward 6 and add it here
const wards = [ward6];
