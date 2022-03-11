const options = [
	{ option: '1' },
	{ option: '2' },
	{ option: '3' },
	{ option: '4' },
	{ option: '5' },
]

const options1 = [{ option: 'Sí' }, { option: 'No' }]

const options2 = [
	{ option: '1 a 9' },
	{ option: '10 a 19' },
	{ option: '20 a 29' },
	{ option: '30 a 49' },
	{ option: '50+' },
]

const options3 = [
	{ option: '1 a 2' },
	{ option: '3 a 4' },
	{ option: '5 a 6' },
	{ option: '7 a 8' },
	{ option: '9 a 10' },
]

const options4 = [
	{ option: '10-' },
	{ option: '11 a 15' },
	{ option: '16 a 20' },
	{ option: '21 a 25' },
	{ option: '25+' },
]

const dataPoll = [
	{
		id: 'f1',
		module: 'Factores de competitividad de la empresa',
		spanTitle: '¿En qué factores percibe la empresa más competitiva?',
		information: '(Siendo 5 la mayor competitividad 1 la menor, califique)',
		questions: [
			{
				idQuestion: '01',
				question: 'Rendimiento del equipo de producción',
				options: options,
			},
			{
				idQuestion: '02',
				question:
					'Calidad del producto (certificación, satisfacción del cliente)',
				options: options,
			},
			{
				idQuestion: '03',
				question: 'Calidad de los servicios relacionados',
				options: options,
			},
			{
				idQuestion: '04',
				question: 'Precios competitivos',
				options: options,
			},
			{
				idQuestion: '05',
				question: 'Competitividad tecnológica',
				options: options,
			},
			{
				idQuestion: '06',
				question: 'Innovación en procesos',
				options: options,
			},
			{
				idQuestion: '07',
				question: 'Innovación y originalidad',
				options: options,
			},
			{
				idQuestion: '08',
				question: 'Conocimiento de mercados',
				options: options,
			},
			{
				idQuestion: '09',
				question: 'Diferenciación o reconocimiento en el mercado domestico',
				options: options,
			},
			{
				idQuestion: '10',
				question: 'Capacidad disponible en producción',
				options: options,
			},
			{
				idQuestion: '11',
				question: 'Personal calificado en mercadeo',
				options: options,
			},
			{
				idQuestion: '12',
				question: 'Disponibilidad de la gerencia (compromiso internacional)',
				options: options,
			},
			{
				idQuestion: '13',
				question: 'Disponibilidad de recursos financieros',
				options: options,
			},
			{
				idQuestion: '14',
				question: 'Mejoras de productividad',
				options: options,
			},
			{
				idQuestion: '15',
				question:
					'Estructura administrativa acorde a la estrategia de la empresa',
				options: options,
			},
			{
				idQuestion: '16',
				question: 'Control de la logística de distribución',
				options: options,
			},
			{
				idQuestion: '17',
				question: 'Sistemas de información gerenciales',
				options: options,
			},
			{
				idQuestion: '18',
				question: 'Formación en aspectos de comercio exterior',
				options: options,
			},
			{
				idQuestion: '19',
				question: 'Adaptación del producto',
				options: options,
			},
		],
	},
	{
		id: 'f2',
		module: 'Intención exportadora y percepción de barreras a la exportación',
		spanTitle:
			'A su juicio, ¿Cuáles son los principales obstáculos que tiene que enfrentar el empresario para consolidar los esfuerzos hacia la exportación?',
		information: '(Siendo 5 la mayor competitividad 1 la menor, califique)',
		questions: [
			{
				idQuestion: '01',
				question: 'Adecuación de productos a exigencias de mercados',
				options: options,
			},
			{
				idQuestion: '02',
				question: 'Acceso a canales de distribución externos',
				options: options,
			},
			{
				idQuestion: '03',
				question: 'Capacidad de producción?',
				options: options,
			},
			{
				idQuestion: '04',
				question: 'Acceso al crédito (financiar operación internacional)',
				options: options,
			},
			{
				idQuestion: '05',
				question: 'Capacitación del personal en mercadeo',
				options: options,
			},
			{
				idQuestion: '06',
				question: 'Barreras no tarifarias del país (normas técnicas)',
				options: options,
			},
			{
				idQuestion: '07',
				question: 'Competitividad de productos o servicios',
				options: options,
			},
			{
				idQuestion: '08',
				question: 'Barreras tarifarias en el país',
				options: options,
			},
			{
				idQuestion: '09',
				question: 'Control de las logística',
				options: options,
			},
			{
				idQuestion: '10',
				question: 'Acceso a contactos en los mercados internacionales',
				options: options,
			},
			{
				idQuestion: '11',
				question: 'Fijación de precios en los mercados',
				options: options,
			},
			{
				idQuestion: '12',
				question: 'Infraestructura externa',
				options: options,
			},
			{
				idQuestion: '13',
				question: 'Desconocimiento del costo real unitario del producto',
				options: options,
			},
			{
				idQuestion: '14',
				question: 'Logística de distribución',
				options: options,
			},
			{
				idQuestion: '15',
				question: 'Capital de trabajo',
				options: options,
			},
			{
				idQuestion: '16',
				question: 'Necesidades de información de mercados',
				options: options,
			},
			{
				idQuestion: '17',
				question: 'Recursos financieros para ampliación',
				options: options,
			},
			{
				idQuestion: '18',
				question: 'Tasas de cambio',
				options: options,
			},
			{
				idQuestion: '19',
				question: 'Recursos humanos calificados',
				options: options,
			},
			{
				idQuestion: '20',
				question: 'Trámites de exportación',
				options: options,
			},
			{
				idQuestion: '21',
				question: 'Manejo de lenguas extranjeras',
				options: options,
			},
			{
				idQuestion: '22',
				question: 'Recursos gerenciales',
				options: options,
			},
			{
				idQuestion: '23',
				question: 'Necesidades de formación (proceso de exportación)',
				options: options,
			},
			{
				idQuestion: '24',
				question:
					'Falta de plan estratégico (metas, escenarios, planes de contingencia)',
				options: options,
			},
			{
				idQuestion: '25',
				question:
					'Diferenciación en el producto, precio, promoción y distribución según mercados',
				options: options,
			},
			{
				idQuestion: '26',
				question: 'Actitud favorable al cambio de gestión',
				options: options,
			},
			{
				idQuestion: '27',
				question: 'Preparación del personal',
				options: options,
			},
			{
				idQuestion: '28',
				question: 'Orientación estratégica de la empresa',
				options: options,
			},
			{
				idQuestion: '29',
				question: 'Estructura organizacional eficiente',
				options: options,
			},
			{
				idQuestion: '30',
				question:
					'Compromiso de la gerencia con el proceso (dedicación de tiempo)',
				options: options,
			},
			{
				idQuestion: '31',
				question: 'Capacitación del personal en mercado',
				options: options,
			},
			{
				idQuestion: '32',
				question: 'Conocimiento de los mercados',
				options: options,
			},
			{
				idQuestion: '33',
				question: 'Motivación del personal',
				options: options,
			},
			{
				idQuestion: '34',
				question: 'Requisito de entrada',
				options: options,
			},
			{
				idQuestion: '35',
				question: 'Competencia',
				options: options,
			},
			{
				idQuestion: '36',
				question: 'Estructura de precios',
				options: options,
			},
			{
				idQuestion: '37',
				question: 'Canales de distribución',
				options: options,
			},
			{
				idQuestion: '38',
				question: 'Consumidor o cliente final',
				options: options,
			},
			{
				idQuestion: '39',
				question: 'Necesidades del mercado',
				options: options,
			},
			{
				idQuestion: '40',
				question: 'Requerimiento de adaptación',
				options: options,
			},
			{
				idQuestion: '41',
				question: 'Contactos',
				options: options,
			},
			{
				idQuestion: '42',
				question: 'Aprovechar la capacidad ociosa',
				options: options,
			},
			{
				idQuestion: '43',
				question: 'Baja en utilidades',
				options: options,
			},
			{
				idQuestion: '44',
				question: 'Baja en la demanda local',
				options: options,
			},
			{
				idQuestion: '45',
				question: 'Contactos establecidos',
				options: options,
			},
			{
				idQuestion: '46',
				question:
					'Crecer porque el mercado interno es pequeño/descisión de expansión de la empresa',
				options: options,
			},
			{
				idQuestion: '47',
				question: 'Información sobre oportunidades en mercados externos',
				options: options,
			},
			{
				idQuestion: '48',
				question: 'Diversificar riesgos de las operaciones',
				options: options,
			},
			{
				idQuestion: '49',
				question: 'La competencia doméstica está exportando',
				options: options,
			},
			{
				idQuestion: '50',
				question: 'Excedentes de producción',
				options: options,
			},
			{
				idQuestion: '51',
				question: 'Lograr competitividad por mayor exigencia',
				options: options,
			},
			{
				idQuestion: '52',
				question: 'Obtener economías de escala',
				options: options,
			},
			{
				idQuestion: '53',
				question: 'Planeación estratégica',
				options: options,
			},
			{
				idQuestion: '54',
				question:
					'Oportunidades identificadas en los acuerdos externos y comerciales',
				options: options,
			},
			{
				idQuestion: '55',
				question: 'Pedidos solicitados por clientes externos',
				options: options,
			},
			{
				idQuestion: '56',
				question: 'Promoción de instituciones',
				options: options,
			},
			{
				idQuestion: '57',
				question: 'Situación coyuntural del mercado doméstico',
				options: options,
			},
			{
				idQuestion: '58',
				question: 'Tasa de cambio favorable',
				options: options,
			},
			{
				idQuestion: '59',
				question: 'Adquisición de maquinaria',
				options: options3,
			},
			{
				idQuestion: '60',
				question: 'Innovaciones (tecnológicas, productos)',
				options: options3,
			},
			{
				idQuestion: '61',
				question: 'Pago de deudas',
				options: options3,
			},
			{
				idQuestion: '62',
				question: 'Repartir utilidades de los accionistas',
				options: options3,
			},
			{
				idQuestion: '63',
				question: 'Expansión de la empresa',
				options: options3,
			},
			{
				idQuestion: '64',
				question: 'Sistemas de información',
				options: options3,
			},
			{
				idQuestion: '65',
				question: 'Investigación de mercados internacionales',
				options: options3,
			},
		],
	},
	{
		id: 'f3',
		module: 'Percepción sobre la actividad internacional',
		spanTitle: '¿En qué factores percibe la empresa más competitiva?',
		information: '(Siendo 5 la mayor competitividad 1 la menor, califique)',
		questions: [
			{
				idQuestion: '01',
				question: 'Son las que más contribuirán al crecimiento de la empresa',
				options: options,
			},
			{
				idQuestion: '02',
				question: 'Disminuirán los costos operacionales de la empresa',
				options: options,
			},
			{
				idQuestion: '03',
				question: 'Son de alto riesgo',
				options: options,
			},
			{
				idQuestion: '04',
				question: 'Exigen adaptación de los productos a los mercados',
				options: options,
			},
			{
				idQuestion: '05',
				question: 'Requieren mayor inversión financiera',
				options: options,
			},
			{
				idQuestion: '06',
				question:
					'Son más efectiva a través de contactos en el mercado que de análisis de mercados',
				options: options,
			},
			{
				idQuestion: '07',
				question: 'La investigación de mercados externos es innecesarias',
				options: options,
			},
			{
				idQuestion: '08',
				question: 'Sin estabilidad macroeconómica es imposible exportar',
				options: options,
			},
			{
				idQuestion: '09',
				question:
					'Los programas de asistencia gubernamentales son imprescindibles para mejorar el desempeño exportador',
				options: options,
			},
			{
				idQuestion: '10',
				question: 'Hay mayor potencial al salir en grupos',
				options: options,
			},
		],
	},
	{
		id: 'f4',
		module: 'Factores de competitividad de la empresa',
		spanTitle: '',
		information:
			"Las primeras 4 preguntas son de >> si o no << (Siendo la primer 'SI' y la segunda 'NO')",
		questions: [
			{
				idQuestion: '01',
				question: '¿Cuenta con alguna certificación de calidad?',
				options: options1,
			},
			{
				idQuestion: '02',
				question:
					'¿Aproximadamente cuántos productos/servicios desarrolla al año?',
				options: [
					{ option: '100 a 299' },
					{ option: '300 a 499' },
					{ option: '500 a 699' },
					{ option: '700 a 899' },
					{ option: '900+' },
				],
			},
			{
				idQuestion: '02',
				question:
					'¿Ha realizado estudios para determinar el nivel de satisfacción de los clientes?',
				options: options1,
			},
			{
				idQuestion: '06',
				question:
					'¿Cuál es el % de inversión que la empresa destina a investigación y desarrollo?',
				options: options2,
			},
			{
				idQuestion: '03',
				question: '¿Las decisiones son participativas?',
				options: options1,
			},
			{
				idQuestion: '07',
				question: '¿Cuál es el procentaje actual de devoluciones de productos?',
				options: options2,
			},
			{
				idQuestion: '04',
				question: '¿Existe algún departamento de diseño?',
				options: options1,
			},
		],
	},
	{
		id: 'f5',
		module: 'Cobertura de las ventas nacionales',
		spanTitle: '',
		information:
			'Distribución de las ventas por líneas de productos y servicios',
		questions: [
			{
				idQuestion: '01',
				question: 'Almacenamiento',
				options: options4,
			},
			{
				idQuestion: '02',
				question: 'Transporte y distribución',
				options: options4,
			},
			{
				idQuestion: '03',
				question: 'Acondicionamiento',
				options: options4,
			},
			{
				idQuestion: '04',
				question: 'Número de clientes regulares (año 2021)',
				options: [
					{ option: '100-' },
					{ option: '101 a 150' },
					{ option: '151 a 200' },
					{ option: '201 a 250' },
					{ option: '250+' },
				],
			},
			{
				idQuestion: '04',
				question:
					'Participación aproximada en las ventas de los tres clientes principales',
				options: [
					{ option: '2-' },
					{ option: '2 a 5' },
					{ option: '6 a 8' },
					{ option: '9 a 11' },
					{ option: '11+' },
				],
			},
		],
	},
	{
		id: 'f6',
		module: 'Experiencia internacional',
		spanTitle: '',
		information: '',
		questions: [
			{
				idQuestion: '01',
				question: 'Califique su experiencia internacional',
				options: [
					{ option: 'Ninguna' },
					{ option: 'Casi Ninguna' },
					{ option: 'Ocasional' },
					{ option: 'Regular' },
					{ option: 'Siempre' },
				],
			},
			{
				idQuestion: '02',
				question:
					'¿Qué % de (ventas externas / ventas totales) proyecta para el siguiente año',
				options: options4,
			},
			{
				idQuestion: '03',
				question: '¿A cuántos países proyecta para el siguiente año?',
				options: [
					{ option: '0' },
					{ option: '1' },
					{ option: '2' },
					{ option: '3' },
					{ option: '4+' },
				],
			},
			{
				idQuestion: '04',
				question: '¿Qué formas de entrada proyecta para los siguientes años?',
				options: [
					{ option: 'Exportación indirecta' },
					{ option: 'Exportación directa' },
					{ option: 'Agentes' },
					{ option: 'Distribuidores' },
					{ option: 'Subsidiarias' },
				],
			},
		],
	},
	{
		id: 'f7',
		module: 'Factores de crecimiento',
		spanTitle: 'En base a las características de su empresa, responda',
		information: '',
		questions: [
			{
				idQuestion: '01',
				question: 'Capacidad de producción en unidades',
				options: [
					{ option: '1000' },
					{ option: '1500' },
					{ option: '2000' },
					{ option: '3000' },
					{ option: '3000+' },
				],
			},
			{
				idQuestion: '02',
				question: 'Número de empleados',
				options: [
					{ option: '1 a 9' },
					{ option: '10 a 49' },
					{ option: '50 a 249' },
					{ option: '250 a 500' },
					{ option: '500+' },
				],
			},
			{
				idQuestion: '03',
				question: 'Turnos de producción',
				options: [{ option: '1' }, { option: '2' }],
			},
			{
				idQuestion: '04',
				question: 'Número actual de vendedores',
				options: [
					{ option: '1 a 9' },
					{ option: '10 a 29' },
					{ option: '30 a 59' },
					{ option: '60 a 89' },
					{ option: '90+' },
				],
			},
			{
				idQuestion: '05',
				question: 'Número actual de personas de mercadeo',
				options: [
					{ option: '1 a 9' },
					{ option: '10 a 29' },
					{ option: '30 a 59' },
					{ option: '60 a 89' },
					{ option: '90+' },
				],
			},
		],
	},
	{
		id: 'f8',
		module: 'Perfil del gerente',
		spanTitle: 'Indique',
		information: '',
		questions: [
			{
				idQuestion: '01',
				question: 'Rango de edad',
				options: [
					{ option: '25 a 32' },
					{ option: '33 a 40' },
					{ option: '41 a 48' },
					{ option: '49 a 55' },
					{ option: '55+' },
				],
			},
			{
				idQuestion: '02',
				question: 'Años de estudio totales',
				options: [
					{ option: '11-' },
					{ option: '11 a 16' },
					{ option: '17 a 24' },
					{ option: '25 a 30' },
					{ option: '31+' },
				],
			},
			{
				idQuestion: '03',
				question: 'Habilidades en lenguas extranjeras',
				options: [
					{ option: 'Bajo' },
					{ option: 'Medio Bajo' },
					{ option: 'Medio' },
					{ option: 'Medio Alto' },
					{ option: 'Alto' },
				],
			},
		],
	},
]

export default dataPoll;