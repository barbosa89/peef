module.exports = {
	title: 'PEEF',
	description: "Proyecto de energia eólica y fotovoltaíca.",
	themeConfig: {
		nav: [
			  { text: "Inicio", link: "/" },
			  { text: "Documentación", link: "/guide/" },
			  {
					text: 'Languages',
					items: [
						{ text: 'Chinese', link: '/language/chinese' },
						{ text: 'Japanese', link: '/language/japanese' }
					]
			  }
		],
	    sidebar: {
	    	'/guide/': [
	    		'',
	    		'test'
	    	],
			'/settings/': [
				'',     
				'project',  
			],
	    }
	},	
};