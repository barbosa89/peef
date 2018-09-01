module.exports = {
	title: 'PEEF',
	base: '/peef/',
	description: "Proyecto de energia eólica y fotovoltaica.",
	dest: './docs',
	themeConfig: {
		nav: [
			  { text: "Inicio", link: "/" },
			  { text: "Documentación", link: "/guide/" },
			  {
					text: 'Más Información',
					items: [
						{ text: '¿Que es PEEF?', link: '/language/chinese' },
						{ text: '¿Que esperar de PEEF?', link: '/language/japanese' },
						{ text: '¿Cómo funciona PEEF?', link: '/language/japanese' }
					]
			  }
		],
	    sidebar: {
	    	'/guide/': [
	    		'',
				'test',
				'informes'
	    	],
	    }
	},	
};