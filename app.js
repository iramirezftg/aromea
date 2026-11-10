/* ==========================================================================
   AROMÉA — ATELIER SENSORIAL & CASA DE FRAGANCIAS
   Interactive Storefront Logic (Canvas Mist, Pyramid, Bundle Builder, Quiz, Cart)
   ========================================================================== */

const SCENTS_DATA = {
  condesa: {
    id: 'condesa',
    name: 'Condesa',
    tagline: 'Frescura pura que despierta tus sentidos',
    heroTitle: 'Condesa: <em>Frescura pura</em> que despierta tus sentidos.',
    family: 'Familia: Floral · Fresca · Amaderada',
    moodBadge: 'Calma, Confianza & Serenidad',
    accordBadge: 'Lirio de los Valles & Sándalo',
    colorHex: '#e8a5b0',
    rgb: [232, 165, 176],
    bottleImg: 'assets/img/bottle-condesa.png',
    cardImg: 'assets/img/bottle-condesa.png',
    gallery: [
      'assets/img/bottle-condesa.png',
      'assets/img/lifestyle-bedroom.png',
      'assets/img/lifestyle-living.png',
      'assets/img/lifestyle-salon.png'
    ],
    description:
      'Llena tus espacios con la elegancia de Condesa, una fragancia premium inspirada en perfumes clásicos de alta gama. Su equilibrio entre notas frescas, florales y amaderadas crea una sensación de limpieza, confort y sofisticación que permanece durante horas.',
    pyramid: {
      salida: {
        title: 'Notas de Salida — Condesa',
        badge: 'Nivel I · Primeros 15 Minutos',
        desc: 'Chispa cítrica luminosa y acordes verdes que purifican el ambiente al primer contacto.',
        items: [
          { icon: '🍊', name: 'Mandarina', sub: 'Cítrico dulce y radiante' },
          { icon: '🍋', name: 'Bergamota', sub: 'Frescura italiana' },
          { icon: '🌿', name: 'Notas Verdes', sub: 'Vitalidad botánica' }
        ]
      },
      corazon: {
        title: 'Notas de Corazón — Condesa',
        badge: 'Nivel II · El Alma (2 a 4 Horas)',
        desc: 'Un bouquet floral blanco y delicado que viste tu hogar u oficina con serenidad y feminidad.',
        items: [
          { icon: '🌸', name: 'Lirio de los Valles', sub: 'Pureza cristalina' },
          { icon: '🌼', name: 'Jazmín Imperial', sub: 'Elegancia envolvente' },
          { icon: '🌹', name: 'Rosa Fresca', sub: 'Suavidad aterciopelada' }
        ]
      },
      fondo: {
        title: 'Notas de Fondo — Condesa',
        badge: 'Nivel III · Estela de 8+ Horas',
        desc: 'Maderas nobles y almizcles limpios que fijan el aroma en textiles, cortinas y tapicería.',
        items: [
          { icon: '🪵', name: 'Sándalo', sub: 'Calidez cremosa' },
          { icon: '🌱', name: 'Vetiver', sub: 'Tierra noble' },
          { icon: '☁️', name: 'Almizcle Blanco', sub: 'Sensación de lino limpio' },
          { icon: '✨', name: 'Ámbar Dorado', sub: 'Fijación profunda' }
        ]
      }
    },
    accords: [
      { label: 'Floral Blanco & Rosa', pct: 92 },
      { label: 'Cítrico Fresco', pct: 84 },
      { label: 'Lino Limpio & Almizcle', pct: 88 },
      { label: 'Amaderado Suave', pct: 70 }
    ]
  },

  imperial: {
    id: 'imperial',
    name: 'Imperial',
    tagline: 'Elegancia y carácter que dejan huella',
    heroTitle: 'Imperial: <em>Elegancia y carácter</em> que dejan huella.',
    family: 'Familia: Amaderada · Especiada · Sastrería',
    moodBadge: 'Poder, Confianza & Presencia',
    accordBadge: 'Cardamomo, Cedro & Ámbar',
    colorHex: '#dfb76c',
    rgb: [223, 183, 108],
    bottleImg: 'assets/img/bottle-imperial.png',
    cardImg: 'assets/img/bottle-imperial.png',
    gallery: [
      'assets/img/bottle-imperial.png',
      'assets/img/hero-lineup.png',
      'assets/img/lifestyle-living.png'
    ],
    description:
      'Un aroma sofisticado y atemporal que envuelve tu espacio con notas intensas, elegantes y equilibradas. Ideal para oficinas ejecutivas, salas de autor y quienes buscan una personalidad inolvidable.',
    pyramid: {
      salida: {
        title: 'Notas de Salida — Imperial',
        badge: 'Nivel I · Primeros 15 Minutos',
        desc: 'Apertura especiada y distinguida que impone carácter desde la primera atomización.',
        items: [
          { icon: '🌰', name: 'Cardamomo Negro', sub: 'Especia cálida de lujo' },
          { icon: '🍋', name: 'Bergamota', sub: 'Brillo satorial' },
          { icon: '🌶️', name: 'Pimienta Rosa', sub: 'Toque vibrante' }
        ]
      },
      corazon: {
        title: 'Notas de Corazón — Imperial',
        badge: 'Nivel II · El Alma (2 a 4 Horas)',
        desc: 'Cuerpo aromático con notas de lavanda real, cuero suave y maderas secas.',
        items: [
          { icon: '🪻', name: 'Lavanda Real', sub: 'Equilibrio aromático' },
          { icon: '🍂', name: 'Hoja de Tabaco Rubia', sub: 'Distinción de club privado' },
          { icon: '🪵', name: 'Cedro del Atlas', sub: 'Estructura firme' }
        ]
      },
      fondo: {
        title: 'Notas de Fondo — Imperial',
        badge: 'Nivel III · Estela de 8+ Horas',
        desc: 'Estela magnética de alta fijación con maderas preciosas, oud suave y ámbar.',
        items: [
          { icon: '🔥', name: 'Madera de Oud', sub: 'Profundidad opulenta' },
          { icon: '✨', name: 'Ámbar Imperial', sub: 'Calidez dorada' },
          { icon: '🌱', name: 'Vetiver Ahumado', sub: 'Carácter masculino/unisex' }
        ]
      }
    },
    accords: [
      { label: 'Amaderado Noble', pct: 95 },
      { label: 'Especiado Cálido', pct: 86 },
      { label: 'Ámbar & Cuero Suave', pct: 82 },
      { label: 'Aromático Fresco', pct: 74 }
    ]
  },

  majestad: {
    id: 'majestad',
    name: 'Majestad',
    tagline: 'El lujo de la frescura en tu espacio',
    heroTitle: 'Majestad: <em>El lujo envolvente</em> que empodera tu espacio.',
    family: 'Familia: Oriental · Floral Nocturno · Terciopelo',
    moodBadge: 'Armonía, Realeza & Confort',
    accordBadge: 'Orquídea Púrpura, Iris & Vainilla',
    colorHex: '#b185eb',
    rgb: [177, 133, 235],
    bottleImg: 'assets/img/bottle-majestad.png',
    cardImg: 'assets/img/bottle-majestad.png',
    gallery: [
      'assets/img/bottle-majestad.png',
      'assets/img/hero-lineup.png',
      'assets/img/lifestyle-bedroom.png'
    ],
    description:
      'Transforma tu entorno en un refugio de armonía y opulencia. Majestad fusiona flores imperiales con un fondo aterciopelado de vainilla negra, sándalo y ámbar que enamora los sentidos.',
    pyramid: {
      salida: {
        title: 'Notas de Salida — Majestad',
        badge: 'Nivel I · Primeros 15 Minutos',
        desc: 'Un velo afrutado y especiado con azafrán y flor de azahar que cautiva al instante.',
        items: [
          { icon: '🍇', name: 'Ciruela Damson', sub: 'Dulzura aterciopelada' },
          { icon: '🌺', name: 'Azafrán Real', sub: 'Oro rojo aromático' },
          { icon: '🌼', name: 'Flor de Azahar', sub: 'Luminosidad floral' }
        ]
      },
      corazon: {
        title: 'Notas de Corazón — Majestad',
        badge: 'Nivel II · El Alma (2 a 4 Horas)',
        desc: 'Un corazón hipnótico de orquídea púrpura e iris que viste el ambiente de gala.',
        items: [
          { icon: '🪻', name: 'Orquídea Púrpura', sub: 'Misterio y sofisticación' },
          { icon: '🌸', name: 'Iris Imperial', sub: 'Textura empolvada de lujo' },
          { icon: '🌹', name: 'Rosa de Damasco', sub: 'Riqueza floral' }
        ]
      },
      fondo: {
        title: 'Notas de Fondo — Majestad',
        badge: 'Nivel III · Estela de 8+ Horas',
        desc: 'Fondo cremoso y adictivo que abraza cada rincón durante todo el día.',
        items: [
          { icon: '🍦', name: 'Vainilla de Madagascar', sub: 'Calidez envolvente' },
          { icon: '🪵', name: 'Sándalo Cremoso', sub: 'Paz sensorial' },
          { icon: '🌿', name: 'Pachulí Nocturno', sub: 'Estela profunda' }
        ]
      }
    },
    accords: [
      { label: 'Floral Imperial & Orquídea', pct: 94 },
      { label: 'Ámbar & Vainilla Negra', pct: 89 },
      { label: 'Empolvado de Lujo', pct: 80 },
      { label: 'Amaderado Cremoso', pct: 76 }
    ]
  },

  oceanic: {
    id: 'oceanic',
    name: 'Oceanic',
    tagline: 'La frescura del océano en cada espacio',
    heroTitle: 'Oceanic: <em>La brisa infinita</em> del océano en tu espacio.',
    family: 'Familia: Acuática · Mineral · Cítrica Marina',
    moodBadge: 'Libertad, Energía & Pureza',
    accordBadge: 'Brisa Marina, Ciprés & Madera Flotante',
    colorHex: '#4cc3f7',
    rgb: [76, 195, 247],
    bottleImg: 'assets/img/bottle-oceanic.png',
    cardImg: 'assets/img/bottle-oceanic.png',
    gallery: [
      'assets/img/bottle-oceanic.png',
      'assets/img/hero-lineup.png',
      'assets/img/lifestyle-living.png'
    ],
    description:
      'Inspirado en la inmensidad del mar. Sus notas marinas, cítricas y minerales te envuelven en una ola de frescura continua que revitaliza hogares, terrazas, consultorios y automóviles.',
    pyramid: {
      salida: {
        title: 'Notas de Salida — Oceanic',
        badge: 'Nivel I · Primeros 15 Minutos',
        desc: 'Una ráfaga de brisa oceánica con toronja blanca y menta acuática que renueva el aire.',
        items: [
          { icon: '🌊', name: 'Brisa Marina & Ozono', sub: 'Oxígeno puro' },
          { icon: '🍊', name: 'Toronja Blanca', sub: 'Energía chispeante' },
          { icon: '🧂', name: 'Sal de Mar Mineral', sub: 'Frescura costera' }
        ]
      },
      corazon: {
        title: 'Notas de Corazón — Oceanic',
        badge: 'Nivel II · El Alma (2 a 4 Horas)',
        desc: 'Equilibrio herbal y acuático que mantiene la sensación de limpieza cristalina.',
        items: [
          { icon: '🌿', name: 'Salvia Azul', sub: 'Claridad mental' },
          { icon: '🌲', name: 'Ciprés Costero', sub: 'Verdor mediterráneo' },
          { icon: '🪷', name: 'Flor de Loto', sub: 'Serenidad acuática' }
        ]
      },
      fondo: {
        title: 'Notas de Fondo — Oceanic',
        badge: 'Nivel III · Estela de 8+ Horas',
        desc: 'Madera flotante bañada por el sol y almizcle blanco de larga duración.',
        items: [
          { icon: '🪵', name: 'Madera Flotante (Driftwood)', sub: 'Carácter oceánico' },
          { icon: '💎', name: 'Ámbar Marino', sub: 'Fijación mineral' },
          { icon: '☁️', name: 'Almizcle Blanco', sub: 'Frescura inagotable' }
        ]
      }
    },
    accords: [
      { label: 'Acuático & Ozónico', pct: 96 },
      { label: 'Cítrico Marino', pct: 88 },
      { label: 'Herbal Aromático', pct: 80 },
      { label: 'Madera Mineral', pct: 72 }
    ]
  },

  khamrah: {
    id: 'khamrah',
    name: 'Khamrah · Lattafa',
    tagline: 'Alta Perfumería Árabe · Dulce, Especiada & Magnética',
    heroTitle: 'Khamrah: <em>Opulencia árabe</em> de canela, dátiles y praliné.',
    family: 'Perfume Personal · Árabe Unisex',
    moodBadge: 'Seducción & Lujo Nocturno',
    accordBadge: 'Canela, Dátiles & Vainilla',
    colorHex: '#dfb76c',
    rgb: [223, 183, 108],
    bottleImg: 'assets/img/ig-khamrah.png',
    cardImg: 'assets/img/ig-khamrah.png',
    gallery: ['assets/img/ig-khamrah.png'],
    description:
      'Uno de los perfumes árabes más codiciados en @aromea.mx. Una joya cálida y especiada con estela extraordinaria que combina canela, dátiles dulces, praliné y maderas ambaradas.',
    pyramid: {
      salida: {
        title: 'Notas de Salida — Khamrah Lattafa',
        badge: 'Nivel I · Primeros 15 Minutos',
        desc: 'Especias reales bañadas en bergamota que hipnotizan desde el primer segundo.',
        items: [
          { icon: '🍂', name: 'Canela Ceilán', sub: 'Cálida y adictiva' },
          { icon: '🌰', name: 'Nuez Moscada', sub: 'Especia oriental' },
          { icon: '🍋', name: 'Bergamota', sub: 'Contraste luminoso' }
        ]
      },
      corazon: {
        title: 'Notas de Corazón — Khamrah Lattafa',
        badge: 'Nivel II · El Alma (2 a 4 Horas)',
        desc: 'Acorde gourmand opulento de dátiles reales, praliné tostado y nardo.',
        items: [
          { icon: '🍯', name: 'Dátiles Dulces', sub: 'Riqueza oriental' },
          { icon: '🍫', name: 'Praliné', sub: 'Gourmand seductor' },
          { icon: '🌸', name: 'Nardo & Mahonial', sub: 'Cuerpo floral' }
        ]
      },
      fondo: {
        title: 'Notas de Fondo — Khamrah Lattafa',
        badge: 'Nivel III · Estela de 12+ Horas',
        desc: 'Fijación bestial sobre piel y ropa con vainilla tostada, haba tonka, mirra y benjuí.',
        items: [
          { icon: '🍦', name: 'Vainilla & Haba Tonka', sub: 'Estela inolvidable' },
          { icon: '🔥', name: 'Mirra & Benjuí', sub: 'Resinas sagradas' },
          { icon: '🪵', name: 'Akigalawood', sub: 'Madera especiada' }
        ]
      }
    },
    accords: [
      { label: 'Dulce & Gourmand', pct: 95 },
      { label: 'Cálido Especiado (Canela)', pct: 92 },
      { label: 'Ámbar & Vainilla', pct: 90 },
      { label: 'Amaderado Resinoso', pct: 78 }
    ]
  }
};

/* Unified Catalog Products (Home Fragrances + @aromea.mx Personal Perfumes) */
const CATALOG_PRODUCTS = [
  {
    id: 'prod-condesa',
    scentKey: 'condesa',
    category: 'hogar',
    line: 'Aromatizante de Ambientes',
    title: 'Condesa | Frescura Pura',
    subtitle: 'Floral, limpio y delicado · Inspira calma y serenidad',
    tag: 'Bestseller Hogar',
    price: 399,
    sizes: [
      { label: '500 ML', price: 399 },
      { label: '1 Litro', price: 549 }
    ],
    img: 'assets/img/bottle-condesa.png',
    isCutout: true,
    notes: ['Mandarina', 'Lirio de los Valles', 'Rosa', 'Sándalo']
  },
  {
    id: 'prod-imperial',
    scentKey: 'imperial',
    category: 'hogar',
    line: 'Aromatizante de Ambientes',
    title: 'Imperial | Elegancia y Carácter',
    subtitle: 'Amaderado y sofisticado · Presencia que deja huella',
    tag: 'Línea Ejecutiva',
    price: 399,
    sizes: [
      { label: '500 ML', price: 399 },
      { label: '1 Litro', price: 549 }
    ],
    img: 'assets/img/bottle-imperial.png',
    isCutout: true,
    notes: ['Cardamomo', 'Lavanda Real', 'Cedro', 'Oud & Ámbar']
  },
  {
    id: 'prod-majestad',
    scentKey: 'majestad',
    category: 'hogar',
    line: 'Aromatizante de Ambientes',
    title: 'Majestad | El Lujo de la Frescura',
    subtitle: 'Oriental floral nocturno · Refugio de armonía y realeza',
    tag: 'Edición Real',
    price: 399,
    sizes: [
      { label: '500 ML', price: 399 },
      { label: '1 Litro', price: 549 }
    ],
    img: 'assets/img/bottle-majestad.png',
    isCutout: true,
    notes: ['Ciruela', 'Orquídea Púrpura', 'Iris', 'Vainilla']
  },
  {
    id: 'prod-oceanic',
    scentKey: 'oceanic',
    category: 'hogar',
    line: 'Aromatizante de Ambientes',
    title: 'Oceanic | La Frescura del Océano',
    subtitle: 'Notas del mar, frescura continua y libertad mineral',
    tag: 'Máxima Frescura',
    price: 399,
    sizes: [
      { label: '500 ML', price: 399 },
      { label: '1 Litro', price: 549 }
    ],
    img: 'assets/img/bottle-oceanic.png',
    isCutout: true,
    notes: ['Brisa Marina', 'Toronja Blanca', 'Ciprés', 'Driftwood']
  },
  {
    id: 'prod-bundle-hotel',
    scentKey: 'imperial',
    category: 'hogar',
    line: 'Pack Ahorro · Envío Gratis',
    title: 'Aroméa Bundle | 2 Litros + 500ml GRATIS',
    subtitle: 'Haz que tu casa siempre huela a Hotel de Lujo (2.5L totales)',
    tag: 'Oferta $799 · 3 MSI',
    price: 799,
    sizes: [{ label: '2x 1L + 1x 500ml Gratis', price: 799 }],
    img: 'assets/img/bundle-hotel.png',
    isCutout: false,
    notes: ['Personalizable', 'Envío Gratis', 'Ahorras $698']
  },
  {
    id: 'prod-khamrah',
    scentKey: 'khamrah',
    category: 'caballero',
    line: '@aromea.mx · Perfumería Árabe',
    title: 'Khamrah — Lattafa (Original)',
    subtitle: 'Eau de Parfum 100ml & Decants · El árabe más deseado',
    tag: 'Top Ventas GDL',
    price: 890,
    sizes: [
      { label: 'Decant 10 ML', price: 240 },
      { label: 'Botella 100 ML Sellada', price: 890 }
    ],
    img: 'assets/img/ig-khamrah.png',
    isCutout: false,
    notes: ['Canela', 'Dátiles', 'Praliné', 'Vainilla & Mirra']
  },
  {
    id: 'prod-monguerlain',
    scentKey: 'condesa',
    category: 'dama',
    line: '@aromea.mx · Alta Perfumería Dama',
    title: 'Mon Guerlain — Guerlain EDP',
    subtitle: 'Lavanda Carla, Jazmín Sambac, Vainilla Tahitensis y Sándalo',
    tag: '100% Original',
    price: 2150,
    sizes: [
      { label: 'Decant 10 ML', price: 320 },
      { label: 'Eau de Parfum 100 ML', price: 2150 }
    ],
    img: 'assets/img/ig-monguerlain.png',
    isCutout: false,
    notes: ['Lavanda', 'Jazmín Sambac', 'Vainilla', 'Sándalo']
  },
  {
    id: 'prod-myway',
    scentKey: 'condesa',
    category: 'dama',
    line: '@aromea.mx · Alta Perfumería Dama',
    title: 'My Way — Giorgio Armani EDP',
    subtitle: 'Bouquet floral luminoso con flor de naranjo y nardo de la India',
    tag: 'Dama Favorito',
    price: 2290,
    sizes: [
      { label: 'Decant 10 ML', price: 330 },
      { label: 'Eau de Parfum 90 ML', price: 2290 }
    ],
    img: 'assets/img/ig-myway.png',
    isCutout: false,
    notes: ['Flor de Naranjo', 'Bergamota', 'Nardo', 'Vainilla']
  },
  {
    id: 'prod-burberryher',
    scentKey: 'condesa',
    category: 'dama',
    line: '@aromea.mx · Dama & Minis',
    title: 'Burberry Her — EDP & Mini Set',
    subtitle: 'Frutos rojos británicos con jazmín luminoso y ámbar almizclado',
    tag: 'Disponible en Mini',
    price: 2190,
    sizes: [
      { label: 'Mini Deluxe 5 ML', price: 420 },
      { label: 'Eau de Parfum 100 ML', price: 2190 }
    ],
    img: 'assets/img/ig-burberryher.png',
    isCutout: false,
    notes: ['Fresa & Frambuesa', 'Jazmín', 'Violeta', 'Ámbar']
  },
  {
    id: 'prod-badboy',
    scentKey: 'imperial',
    category: 'caballero',
    line: '@aromea.mx · Caballero & Kits',
    title: 'Bad Boy — Carolina Herrera Gift Set',
    subtitle: 'Cofre de lujo: Eau de Toilette + Shower Gel + Travel Spray',
    tag: 'Cofre de Regalo',
    price: 2350,
    sizes: [{ label: 'Cofre Completo 3 Piezas', price: 2350 }],
    img: 'assets/img/ig-badboy.png',
    isCutout: false,
    notes: ['Pimienta Negra', 'Salvia', 'Haba Tonka', 'Cacao']
  },
  {
    id: 'prod-valentino-prada',
    scentKey: 'majestad',
    category: 'kits',
    line: '@aromea.mx · Kits & Ediciones Regalo',
    title: 'Dúo Valentino Born in Roma & Prada Paradoxe',
    subtitle: 'Curaduría especial de diseñador y minis para regalo en GDL',
    tag: 'Edición Especial',
    price: 1490,
    sizes: [
      { label: 'Discovery Kit 3x 10ml', price: 890 },
      { label: 'Box Regalo Diseñador', price: 1490 }
    ],
    img: 'assets/img/ig-valentino-prada.png',
    isCutout: false,
    notes: ['Prada Paradoxe', 'Valentino', 'Envío / Entrega GDL']
  },
  {
    id: 'prod-discovery-gdl',
    scentKey: 'majestad',
    category: 'kits',
    line: '@aromea.mx · Kits & Minis',
    title: 'Discovery Box Aroméa (Hogar + Perfume)',
    subtitle: '1 Aromatizante 500ml a elección + 2 Decants 10ml de Diseñador/Árabe',
    tag: 'Exclusivo Web',
    price: 749,
    sizes: [{ label: 'Box 500ml + 2 Decants 10ml', price: 749 }],
    img: 'assets/img/ig-collection-dama.png',
    isCutout: false,
    notes: ['Hogar + Piel', 'Personalizable', 'Regalo Ideal']
  }
];

/* Spaces Simulator Data */
const SPACES_DATA = {
  recamara: {
    scent: 'condesa',
    badge: 'Aroma Ideal: Condesa · Floral & Lino',
    title: 'Santuario de Calma Matutina',
    desc: 'Transforma tu habitación en una suite serena. Las notas de lirio de los valles, rosa fresca y almizcle blanco relajan la mente y dejan una sensación de ropa de cama recién lavada.',
    ritual: 'Atomiza 3 veces a 40 cm sobre cojines, pie de cama y cortinas de lino 10 minutos antes de dormir o al tender tu cama.',
    duration: 'Hasta 14 Horas en Textiles',
    vibe: 'Paz · Limpieza · Serenidad',
    img: 'assets/img/lifestyle-bedroom.png',
    caption: '✨ Fotografía real: Condesa 1L en recámara principal con luz matutina.'
  },
  sala: {
    scent: 'imperial',
    badge: 'Aroma Ideal: Imperial o Condesa',
    title: 'Sala & Hospitalidad de Autor',
    desc: 'El corazón de tu casa merece una firma olfativa memorable. Sorprende a cada visita desde que cruza la puerta con notas cálidas de sándalo, bergamota y maderas nobles.',
    ritual: 'Aplica 4 atomizaciones al aire en el centro de la estancia y 2 sobre alfombras o sillones de tela antes de recibir invitados.',
    duration: '8 a 12 Horas Continuas',
    vibe: 'Elegancia · Calidez · Confort',
    img: 'assets/img/lifestyle-living.png',
    caption: '✨ Fotografía real: Aroméa en mesa de sala con estética editorial.'
  },
  boutique: {
    scent: 'condesa',
    badge: 'Aroma Ideal: Condesa & Majestad',
    title: 'Boutique, Salón de Belleza & Recepción',
    desc: 'El 75% de las emociones que recordamos en un negocio provienen del olfato. Eleva la percepción de valor de tu salón, consultorio u oficina con una fragancia insignia.',
    ritual: 'Atomiza en la zona de recepción y vestidores cada 4 horas para mantener una experiencia de marca impecable.',
    duration: 'Alta Proyección Comercial',
    vibe: 'Prestigio · Confianza · Lujo',
    img: 'assets/img/lifestyle-salon.png',
    caption: '✨ Fotografía real: Aroméa en recepción de Condesa Beauty Salon.'
  },
  coleccion: {
    scent: 'oceanic',
    badge: 'Colección Completa: 4 Personalidades',
    title: 'Experiencia Suite Hotel 5 Estrellas',
    desc: 'Combina Oceanic en baños y terrazas, Condesa en recámaras, Imperial en tu estudio y Majestad en el salón principal para una arquitectura olfativa completa.',
    ritual: 'Usa el Bundle Hotel de Lujo (2L + 500ml gratis) para asignar un aroma diferente a cada zona de tu hogar.',
    duration: 'Cobertura Residencial 360°',
    vibe: 'Hotel 5★ · Sofisticación Total',
    img: 'assets/img/hero-lineup.png',
    caption: '✨ Fotografía real: La colección completa Condesa, Imperial, Majestad y Oceanic.'
  }
};

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */
let currentHeroScent = 'condesa';
let currentHeroSize = { label: '500ML', price: 399 };
let currentPyramidScent = 'condesa';
let currentPyramidTier = 'salida';
let currentSpaceKey = 'recamara';

// Bundle Builder State (3 slots)
let bundleSlots = [
  { slotIndex: 0, size: '1 Litro', scent: 'oceanic', label: 'Botella 1L #1' },
  { slotIndex: 1, size: '1 Litro', scent: 'imperial', label: 'Botella 1L #2' },
  { slotIndex: 2, size: '500 ML GRATIS', scent: 'majestad', label: 'Regalo 500ml 🎁', isFree: true }
];
let activeBundleSlotIndex = 0;

// Shopping Cart State
let cart = [
  {
    id: 'bundle-init',
    title: 'Condesa · Aromatizante Premium (500 ML)',
    subtitle: 'Floral & Fresco · Larga Duración',
    price: 399,
    qty: 1,
    img: 'assets/img/bottle-condesa.png'
  }
];

/* ==========================================================================
   1. INTERACTIVE PARTICLE & SCENT MIST CANVAS ENGINE
   ========================================================================== */
const canvas = document.getElementById('scent-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let floatingWords = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function initAmbientParticles() {
  particles = [];
  const count = window.innerWidth < 768 ? 22 : 42;
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.4 + 0.8,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -Math.random() * 0.45 - 0.15,
      alpha: Math.random() * 0.45 + 0.1,
      isBurst: false
    });
  }
}
initAmbientParticles();

function triggerScentMistBurst(scentKey) {
  const scent = SCENTS_DATA[scentKey] || SCENTS_DATA.condesa;
  const bottleEl = document.getElementById('hero-bottle-wrap');
  const rect = bottleEl ? bottleEl.getBoundingClientRect() : { left: window.innerWidth * 0.5, top: window.innerHeight * 0.35, width: 120 };
  const originX = rect.left + rect.width * 0.52;
  const originY = rect.top + 38;

  if (bottleEl) {
    bottleEl.classList.remove('spraying');
    void bottleEl.offsetWidth;
    bottleEl.classList.add('spraying');
  }

  // Spawn fine mist droplets (scaled for mobile/desktop)
  const dropletCount = window.innerWidth < 768 ? 34 : 55;
  for (let i = 0; i < dropletCount; i++) {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.6;
    const speed = Math.random() * 5.5 + 1.5;
    particles.push({
      x: originX,
      y: originY,
      r: Math.random() * 4.5 + 1.5,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 0.85,
      rgb: scent.rgb,
      isBurst: true,
      decay: Math.random() * 0.012 + 0.008
    });
  }

  // Spawn floating olfactory note words clamped inside viewport bounds
  const allNotes = [
    ...scent.pyramid.salida.items.map(i => i.name),
    ...scent.pyramid.corazon.items.map(i => i.name),
    ...scent.pyramid.fondo.items.map(i => i.name)
  ];
  const spreadX = window.innerWidth < 600 ? 90 : 160;
  for (let i = 0; i < 4; i++) {
    const word = allNotes[i % allNotes.length];
    const rawX = originX + (Math.random() - 0.5) * spreadX;
    const safeX = Math.max(16, Math.min(canvas.width - 135, rawX));
    floatingWords.push({
      text: `✦ ${word}`,
      x: safeX,
      y: originY + (Math.random() - 0.5) * 44,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -Math.random() * 1.3 - 0.6,
      alpha: 1,
      rgb: scent.rgb
    });
  }
}

function animateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const activeScent = SCENTS_DATA[currentHeroScent] || SCENTS_DATA.condesa;
  const baseRgb = activeScent.rgb;

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    const rgb = p.rgb || baseRgb;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${p.alpha})`;
    ctx.fill();

    if (p.isBurst) {
      p.vx *= 0.97;
      p.vy *= 0.97;
      p.alpha -= p.decay;
      if (p.alpha <= 0.02) particles.splice(i, 1);
    } else {
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
    }
  }

  for (let i = floatingWords.length - 1; i >= 0; i--) {
    const fw = floatingWords[i];
    fw.x += fw.vx;
    fw.y += fw.vy;
    fw.alpha -= 0.012;
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = `rgba(${fw.rgb[0]}, ${fw.rgb[1]}, ${fw.rgb[2]}, ${fw.alpha})`;
    ctx.fillText(fw.text, fw.x, fw.y);
    if (fw.alpha <= 0.02) floatingWords.splice(i, 1);
  }

  requestAnimationFrame(animateCanvas);
}
animateCanvas();

/* ==========================================================================
   2. HERO DYNAMIC ATMOSPHERE SWITCHER
   ========================================================================== */
function setHeroScent(scentKey, withMist = true) {
  const scent = SCENTS_DATA[scentKey];
  if (!scent) return;
  currentHeroScent = scentKey;
  document.body.setAttribute('data-scent', scentKey);

  // Update active pill
  document.querySelectorAll('[data-scent-select]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-scent-select') === scentKey);
  });

  // Update text & bottle
  document.getElementById('hero-title').innerHTML = scent.heroTitle;
  document.getElementById('hero-desc').textContent = scent.description;
  document.getElementById('hero-family-tag').textContent = scent.family;
  document.getElementById('stage-badge-mood').textContent = scent.moodBadge;
  document.getElementById('stage-badge-accord').textContent = scent.accordBadge;

  const bottleImg = document.getElementById('hero-bottle-img');
  bottleImg.style.opacity = '0.2';
  bottleImg.style.transform = 'scale(0.92)';
  setTimeout(() => {
    bottleImg.src = scent.bottleImg;
    bottleImg.alt = `Botella Aroméa ${scent.name}`;
    bottleImg.style.opacity = '1';
    bottleImg.style.transform = 'scale(1)';
  }, 150);

  // Render live notes chips
  const chipsContainer = document.getElementById('hero-notes-chips');
  const notesPreview = [
    { tier: 'Salida', name: scent.pyramid.salida.items[0].name },
    { tier: 'Salida', name: scent.pyramid.salida.items[1].name },
    { tier: 'Corazón', name: scent.pyramid.corazon.items[0].name },
    { tier: 'Corazón', name: scent.pyramid.corazon.items[1].name },
    { tier: 'Fondo', name: scent.pyramid.fondo.items[0].name },
    { tier: 'Fondo', name: scent.pyramid.fondo.items[1].name }
  ];
  chipsContainer.innerHTML = notesPreview
    .map(n => `<span class="note-chip"><small>${n.tier}</small> ${n.name}</span>`)
    .join('');

  // Also sync Pyramid Lab to this scent
  renderPyramidLab(scentKey, currentPyramidTier);

  if (withMist) {
    triggerScentMistBurst(scentKey);
  }
}

document.querySelectorAll('[data-scent-select]').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.getAttribute('data-scent-select');
    setHeroScent(key, true);
  });
});

// Size selector in Hero
document.querySelectorAll('#hero-size-group .size-option').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#hero-size-group .size-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentHeroSize = {
      label: btn.getAttribute('data-size'),
      price: Number(btn.getAttribute('data-price'))
    };
    document.getElementById('hero-btn-price').textContent = `$${currentHeroSize.price}.00 MXN`;
  });
});

// Hero Add to Cart
document.getElementById('hero-add-btn').addEventListener('click', () => {
  const scent = SCENTS_DATA[currentHeroScent];
  addToCart({
    id: `hero-${scent.id}-${currentHeroSize.label}`,
    title: `${scent.name} · Aromatizante (${currentHeroSize.label})`,
    subtitle: scent.tagline,
    price: currentHeroSize.price,
    img: scent.bottleImg
  });
});

// Spray Button & Clicking Bottle
document.getElementById('spray-trigger-btn').addEventListener('click', () => {
  triggerScentMistBurst(currentHeroScent);
  showToast(`💨 Atomizando ${SCENTS_DATA[currentHeroScent].name}: percibe sus notas en el aire...`);
});
document.getElementById('hero-bottle-wrap').addEventListener('click', () => {
  triggerScentMistBurst(currentHeroScent);
});

/* ==========================================================================
   3. OLFACTORY PYRAMID INTERACTIVE LAB
   ========================================================================== */
function initPyramidSelector() {
  const container = document.getElementById('lab-scent-selector');
  const keys = ['condesa', 'imperial', 'majestad', 'oceanic', 'khamrah'];
  container.innerHTML = keys
    .map(k => {
      const s = SCENTS_DATA[k];
      return `<button class="lab-scent-btn ${k === currentPyramidScent ? 'active' : ''}" data-lab-scent="${k}">
        <span class="mood-dot" style="background:${s.colorHex}"></span>
        ${s.name}
      </button>`;
    })
    .join('');

  container.querySelectorAll('[data-lab-scent]').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.getAttribute('data-lab-scent');
      if (['condesa', 'imperial', 'majestad', 'oceanic'].includes(k)) {
        document.body.setAttribute('data-scent', k);
      }
      renderPyramidLab(k, currentPyramidTier);
    });
  });
}

function renderPyramidLab(scentKey, tierKey) {
  currentPyramidScent = scentKey;
  currentPyramidTier = tierKey;
  const scent = SCENTS_DATA[scentKey];
  if (!scent) return;

  document.querySelectorAll('[data-lab-scent]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lab-scent') === scentKey);
  });

  // Update 3 pyramid tier previews
  document.getElementById('pyr-preview-salida').textContent = scent.pyramid.salida.items.map(i => i.name).join(' · ');
  document.getElementById('pyr-preview-corazon').textContent = scent.pyramid.corazon.items.map(i => i.name).join(' · ');
  document.getElementById('pyr-preview-fondo').textContent = scent.pyramid.fondo.items.map(i => i.name).join(' · ');

  document.querySelectorAll('.pyramid-tier').forEach(t => {
    t.classList.toggle('active', t.getAttribute('data-tier') === tierKey);
  });

  const layer = scent.pyramid[tierKey];
  document.getElementById('pyr-detail-badge').textContent = layer.badge;
  document.getElementById('pyr-detail-title').textContent = layer.title;
  document.getElementById('pyr-detail-desc').textContent = layer.desc;

  document.getElementById('pyr-ingredients-grid').innerHTML = layer.items
    .map(
      item => `
      <div class="ingredient-card">
        <span class="ingredient-icon">${item.icon}</span>
        <div class="ingredient-info">
          <strong>${item.name}</strong>
          <span>${item.sub}</span>
        </div>
      </div>`
    )
    .join('');

  document.getElementById('pyr-accords-list').innerHTML = scent.accords
    .map(
      acc => `
      <div class="accord-row">
        <div class="accord-label">
          <span>${acc.label}</span>
          <strong>${acc.pct}%</strong>
        </div>
        <div class="accord-track">
          <div class="accord-fill" style="width:${acc.pct}%"></div>
        </div>
      </div>`
    )
    .join('');
}

document.querySelectorAll('.pyramid-tier').forEach(tierEl => {
  tierEl.addEventListener('click', () => {
    renderPyramidLab(currentPyramidScent, tierEl.getAttribute('data-tier'));
  });
  tierEl.addEventListener('mouseenter', () => {
    renderPyramidLab(currentPyramidScent, tierEl.getAttribute('data-tier'));
  });
});

/* ==========================================================================
   4. SPACES & MOODS SIMULATOR
   ========================================================================== */
function renderSpaceSimulator(spaceKey) {
  currentSpaceKey = spaceKey;
  const data = SPACES_DATA[spaceKey];
  if (!data) return;

  document.querySelectorAll('.space-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-space') === spaceKey);
  });

  document.body.setAttribute('data-scent', data.scent);
  document.getElementById('space-img').src = data.img;
  document.getElementById('space-caption').textContent = data.caption;
  document.getElementById('space-recommended-badge').textContent = data.badge;
  document.getElementById('space-title').textContent = data.title;
  document.getElementById('space-desc').textContent = data.desc;
  document.getElementById('space-ritual').innerHTML = `<strong>Ritual de Aplicación:</strong> ${data.ritual}`;
  document.getElementById('space-metric-duration').textContent = data.duration;
  document.getElementById('space-metric-vibe').textContent = data.vibe;
}

document.querySelectorAll('.space-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    renderSpaceSimulator(btn.getAttribute('data-space'));
  });
});

document.getElementById('space-buy-btn').addEventListener('click', () => {
  const space = SPACES_DATA[currentSpaceKey];
  const scent = SCENTS_DATA[space.scent];
  addToCart({
    id: `space-${scent.id}`,
    title: `${scent.name} · Aromatizante (500 ML)`,
    subtitle: `Recomendado para ${space.title}`,
    price: 399,
    img: scent.bottleImg
  });
});

/* ==========================================================================
   5. INTERACTIVE BUNDLE BUILDER ("HOTEL DE LUJO $799")
   ========================================================================== */
function renderBundleBuilder() {
  const grid = document.getElementById('bundle-slots-grid');
  grid.innerHTML = bundleSlots
    .map((slot, idx) => {
      const scent = SCENTS_DATA[slot.scent];
      const isSelected = idx === activeBundleSlotIndex;
      return `
        <div class="bundle-slot filled ${slot.isFree ? 'slot-free' : ''}" data-slot-idx="${idx}" style="${
        isSelected ? 'outline: 2px solid var(--gold-light); transform: translateY(-4px);' : 'cursor:pointer;'
      }">
          <span class="slot-ribbon">${slot.label}</span>
          <img src="${scent.bottleImg}" alt="${scent.name}" class="slot-bottle-img" />
          <div>
            <strong style="display:block; font-family:var(--font-display); font-size:1.25rem;">${scent.name}</strong>
            <small style="color:var(--text-secondary); font-size:0.75rem;">${slot.size}</small>
          </div>
          <span style="font-size:0.7rem; color:var(--aura-primary); margin-top:4px;">${
            isSelected ? '● Editando este espacio' : 'Cambiar aroma'
          }</span>
        </div>
      `;
    })
    .join('');

  grid.querySelectorAll('.bundle-slot').forEach(el => {
    el.addEventListener('click', () => {
      activeBundleSlotIndex = Number(el.getAttribute('data-slot-idx'));
      renderBundleBuilder();
    });
  });

  const s1 = SCENTS_DATA[bundleSlots[0].scent].name;
  const s2 = SCENTS_DATA[bundleSlots[1].scent].name;
  const s3 = SCENTS_DATA[bundleSlots[2].scent].name;
  document.getElementById('bundle-selection-summary').innerHTML = `
    <div style="margin-bottom:4px;"><strong>1 Litro #1:</strong> ${s1}</div>
    <div style="margin-bottom:4px;"><strong>1 Litro #2:</strong> ${s2}</div>
    <div style="color:var(--gold-light);"><strong>500ml GRATIS:</strong> ${s3} ($0 MXN)</div>
  `;
}

document.querySelectorAll('[data-pick-scent]').forEach(card => {
  card.addEventListener('click', () => {
    const chosen = card.getAttribute('data-pick-scent');
    bundleSlots[activeBundleSlotIndex].scent = chosen;
    document.body.setAttribute('data-scent', chosen);
    // Advance to next slot automatically for smooth UX
    activeBundleSlotIndex = (activeBundleSlotIndex + 1) % 3;
    renderBundleBuilder();
    showToast(`✨ ${SCENTS_DATA[chosen].name} asignado a tu Bundle Hotel de Lujo`);
  });
});

document.getElementById('add-custom-bundle-btn').addEventListener('click', () => {
  const s1 = SCENTS_DATA[bundleSlots[0].scent].name;
  const s2 = SCENTS_DATA[bundleSlots[1].scent].name;
  const s3 = SCENTS_DATA[bundleSlots[2].scent].name;
  addToCart({
    id: `bundle-${s1}-${s2}-${s3}`,
    title: 'Aroméa Bundle Hotel de Lujo (2L + 500ml Gratis)',
    subtitle: `1L ${s1} + 1L ${s2} + 500ml ${s3} GRATIS`,
    price: 799,
    img: 'assets/img/bundle-hotel.png'
  });
});

/* ==========================================================================
   6. UNIFIED CATALOG & QUICK VIEW MODAL (HOME + @AROMEA.MX PERFUMES)
   ========================================================================== */
function renderCatalog(filter = 'all') {
  const grid = document.getElementById('catalog-grid');
  const filtered = filter === 'all' ? CATALOG_PRODUCTS : CATALOG_PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = filtered
    .map(
      p => `
      <article class="product-card" data-prod-id="${p.id}">
        <div>
          <div class="product-media ${p.isCutout ? 'cutout-bottle' : 'photo-cover'}" data-open-pdp="${p.id}">
            <span class="product-tag">${p.tag}</span>
            <img src="${p.img}" alt="${p.title}" loading="lazy" />
            <button class="quick-view-pill" data-open-pdp="${p.id}">Vista Sensorial ✦</button>
          </div>
          <div class="product-body">
            <div>
              <div class="product-line-label">${p.line}</div>
              <h3 class="product-title" data-open-pdp="${p.id}">${p.title}</h3>
              <p class="product-subtitle">${p.subtitle}</p>
              <div class="product-notes-mini">
                ${p.notes.map(n => `<span>${n}</span>`).join('')}
              </div>
            </div>
            <div class="product-footer">
              <div class="price-block">
                <small>A partir de</small>
                <strong>$${p.price.toLocaleString('es-MX')}.00 MXN</strong>
              </div>
              <button class="add-cart-btn" data-quick-add="${p.id}">+ Agregar</button>
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  grid.querySelectorAll('[data-open-pdp]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      openProductModal(el.getAttribute('data-open-pdp'));
    });
  });

  grid.querySelectorAll('[data-quick-add]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const prod = CATALOG_PRODUCTS.find(item => item.id === btn.getAttribute('data-quick-add'));
      if (prod) {
        addToCart({
          id: prod.id,
          title: prod.title,
          subtitle: prod.sizes[0].label,
          price: prod.sizes[0].price,
          img: prod.img
        });
      }
    });
  });
}

document.querySelectorAll('#catalog-filter-tabs .filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#catalog-filter-tabs .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCatalog(btn.getAttribute('data-filter'));
  });
});

/* Product Quick-View Modal */
function openProductModal(prodId) {
  const prod = CATALOG_PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;
  const scent = SCENTS_DATA[prod.scentKey] || SCENTS_DATA.condesa;
  const gallery = prod.isCutout ? scent.gallery : [prod.img];
  let selectedSize = prod.sizes[0];

  const modalContent = document.getElementById('pdp-modal-content');
  modalContent.innerHTML = `
    <div>
      <div class="pdp-gallery-main">
        <img src="${gallery[0]}" alt="${prod.title}" id="pdp-main-img" />
      </div>
      <div class="pdp-thumbs">
        ${gallery
          .map(
            (g, i) => `
          <div class="pdp-thumb ${i === 0 ? 'active' : ''}" data-thumb-src="${g}">
            <img src="${g}" alt="Vista ${i + 1}" />
          </div>`
          )
          .join('')}
      </div>
    </div>

    <div>
      <span class="detail-layer-badge">${prod.line}</span>
      <h2 style="font-family:var(--font-display); font-size:2.2rem; line-height:1.1; margin-bottom:8px;">${prod.title}</h2>
      <div style="font-size:1.35rem; font-weight:700; color:var(--aura-primary); margin-bottom:4px;" id="pdp-modal-price">
        $${selectedSize.price.toLocaleString('es-MX')}.00 MXN
      </div>
      <small style="color:var(--text-muted); display:block; margin-bottom:16px;">Impuestos incluidos · Envío gratis en compras +$699 MXN</small>

      <p style="color:var(--text-secondary); font-size:0.92rem; margin-bottom:18px;">
        ${scent.description}
      </p>

      <div style="margin-bottom:18px;">
        <label style="font-size:0.76rem; text-transform:uppercase; letter-spacing:0.12em; color:var(--text-secondary); display:block; margin-bottom:8px;">
          Presentación
        </label>
        <div class="size-toggle-group" id="pdp-size-selector">
          ${prod.sizes
            .map(
              (s, idx) => `
            <button class="size-option ${idx === 0 ? 'active' : ''}" data-pdp-size="${s.label}" data-pdp-price="${s.price}">
              ${s.label} · $${s.price}
            </button>`
            )
            .join('')}
        </div>
      </div>

      <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border-subtle); border-radius:16px; padding:14px 16px; margin-bottom:18px; font-size:0.83rem;">
        <strong style="color:var(--aura-primary); display:block; margin-bottom:6px;">Pirámide Olfativa Destacada:</strong>
        <div>• <strong>Salida:</strong> ${scent.pyramid.salida.items.map(i => i.name).join(', ')}</div>
        <div>• <strong>Corazón:</strong> ${scent.pyramid.corazon.items.map(i => i.name).join(', ')}</div>
        <div>• <strong>Fondo:</strong> ${scent.pyramid.fondo.items.map(i => i.name).join(', ')}</div>
      </div>

      <button class="btn-primary" id="pdp-add-to-cart" style="width:100%; justify-content:center;">
        Agregar a la Bolsa — $${selectedSize.price.toLocaleString('es-MX')}.00 MXN
      </button>
      <button class="paypal-btn" id="pdp-paypal-btn">
        Pagar rápido con <strong>PayPal</strong>
      </button>
    </div>
  `;

  modalContent.querySelectorAll('.pdp-thumb').forEach(t => {
    t.addEventListener('click', () => {
      modalContent.querySelectorAll('.pdp-thumb').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      document.getElementById('pdp-main-img').src = t.getAttribute('data-thumb-src');
    });
  });

  modalContent.querySelectorAll('[data-pdp-size]').forEach(b => {
    b.addEventListener('click', () => {
      modalContent.querySelectorAll('[data-pdp-size]').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      selectedSize = {
        label: b.getAttribute('data-pdp-size'),
        price: Number(b.getAttribute('data-pdp-price'))
      };
      document.getElementById('pdp-modal-price').textContent = `$${selectedSize.price.toLocaleString('es-MX')}.00 MXN`;
      document.getElementById('pdp-add-to-cart').textContent = `Agregar a la Bolsa — $${selectedSize.price.toLocaleString('es-MX')}.00 MXN`;
    });
  });

  document.getElementById('pdp-add-to-cart').addEventListener('click', () => {
    addToCart({
      id: `${prod.id}-${selectedSize.label}`,
      title: prod.title,
      subtitle: selectedSize.label,
      price: selectedSize.price,
      img: prod.img
    });
    document.getElementById('pdp-modal').classList.remove('open');
  });

  document.getElementById('pdp-paypal-btn').addEventListener('click', () => {
    addToCart({
      id: `${prod.id}-${selectedSize.label}`,
      title: prod.title,
      subtitle: selectedSize.label,
      price: selectedSize.price,
      img: prod.img
    });
    document.getElementById('pdp-modal').classList.remove('open');
    showToast('⚡ Redirigiendo a PayPal Express Checkout...');
  });

  document.getElementById('pdp-modal').classList.add('open');
}

document.getElementById('close-pdp-modal').addEventListener('click', () => {
  document.getElementById('pdp-modal').classList.remove('open');
});
document.getElementById('pdp-modal').addEventListener('click', e => {
  if (e.target.id === 'pdp-modal') e.target.classList.remove('open');
});

/* ==========================================================================
   7. OLFACTORY SOMMELIER QUIZ (3 STEPS -> DUAL MATCH)
   ========================================================================== */
const QUIZ_QUESTIONS = [
  {
    q: '1. ¿Qué sensación quieres despertar primero al entrar a tu espacio?',
    options: [
      { emoji: '🌸', title: 'Paz, Luz & Lino Limpio', desc: 'Un santuario suave, floral y acogedor.', vote: 'condesa' },
      { emoji: '🥃', title: 'Carácter, Sastrería & Poder', desc: 'Elegancia ejecutiva con maderas y especias.', vote: 'imperial' },
      { emoji: '👑', title: 'Opulencia, Misterio & Gala', desc: 'Terciopelo nocturno, vainilla y flores reales.', vote: 'majestad' },
      { emoji: '🌊', title: 'Brisa Marina & Libertad', desc: 'Aire puro de océano y energía mineral.', vote: 'oceanic' }
    ]
  },
  {
    q: '2. ¿Qué familia de notas te enamora más en la alta perfumería?',
    options: [
      { emoji: '🍊', title: 'Cítricos & Flores Blancas', desc: 'Mandarina, lirio de los valles, jazmín y rosa.', vote: 'condesa' },
      { emoji: '🪵', title: 'Maderas Preciosas & Oud', desc: 'Cedro, cardamomo, cuero suave y vetiver.', vote: 'imperial' },
      { emoji: '🍦', title: 'Oriental Dulce & Especiado', desc: 'Vainilla de Madagascar, canela, ciruela y ámbar.', vote: 'majestad' },
      { emoji: '🌿', title: 'Acuático, Salvia & Cítricos', desc: 'Toronja blanca, ciprés costero y almizcle.', vote: 'oceanic' }
    ]
  },
  {
    q: '3. ¿Dónde disfrutarás principalmente tu experiencia Aroméa?',
    options: [
      { emoji: '🛏️', title: 'Recámara & Estudio Personal', desc: 'Mi refugio íntimo de descanso y lectura.', vote: 'condesa' },
      { emoji: '🏛️', title: 'Sala Principal, Oficina o Auto', desc: 'Quiero que cada visita recuerde mi sello.', vote: 'imperial' },
      { emoji: '✨', title: 'Noches Especiales & Boutique', desc: 'Ambientes envolventes de lujo.', vote: 'majestad' },
      { emoji: '☀️', title: 'Todo el Hogar & Días Soleados', desc: 'Frescura continua de mañana a noche.', vote: 'oceanic' }
    ]
  }
];

let quizStep = 0;
let quizVotes = [];

function renderQuiz() {
  const dots = document.querySelectorAll('#quiz-dots .quiz-step-dot');
  dots.forEach((d, i) => d.classList.toggle('active', i <= quizStep));
  const body = document.getElementById('quiz-body');

  if (quizStep < QUIZ_QUESTIONS.length) {
    const curr = QUIZ_QUESTIONS[quizStep];
    body.innerHTML = `
      <h3 class="quiz-question-title">${curr.q}</h3>
      <div class="quiz-options-grid">
        ${curr.options
          .map(
            opt => `
          <button class="quiz-option-btn" data-vote="${opt.vote}">
            <span class="q-emoji">${opt.emoji}</span>
            <strong>${opt.title}</strong>
            <span>${opt.desc}</span>
          </button>`
          )
          .join('')}
      </div>
    `;

    body.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        quizVotes.push(btn.getAttribute('data-vote'));
        quizStep++;
        renderQuiz();
      });
    });
  } else {
    // Tally winner
    const counts = {};
    quizVotes.forEach(v => (counts[v] = (counts[v] || 0) + 1));
    const winnerKey = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] || 'condesa';
    const homeScent = SCENTS_DATA[winnerKey];
    document.body.setAttribute('data-scent', winnerKey);

    const twinPerfumeMap = {
      condesa: CATALOG_PRODUCTS.find(p => p.id === 'prod-monguerlain'),
      imperial: CATALOG_PRODUCTS.find(p => p.id === 'prod-badboy'),
      majestad: CATALOG_PRODUCTS.find(p => p.id === 'prod-khamrah'),
      oceanic: CATALOG_PRODUCTS.find(p => p.id === 'prod-myway')
    };
    const twinPerfume = twinPerfumeMap[winnerKey];

    body.innerHTML = `
      <div style="text-align:center; margin-bottom:20px;">
        <span class="detail-layer-badge">Match Olfativo 98% Compatible</span>
        <h3 class="quiz-question-title" style="margin-bottom:6px;">Tu Firma es <em>${homeScent.name}</em></h3>
        <p style="color:var(--text-secondary);">${homeScent.description}</p>
      </div>

      <div class="quiz-result-grid">
        <div class="quiz-match-box">
          <img src="${homeScent.bottleImg}" alt="${homeScent.name}" />
          <div>
            <small style="color:var(--aura-primary); font-weight:700; text-transform:uppercase;">Para Tu Espacio</small>
            <h4 style="font-family:var(--font-display); font-size:1.5rem;">Aroméa ${homeScent.name}</h4>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">${homeScent.tagline}</p>
            <button class="btn-primary" id="quiz-add-home" style="padding:9px 18px; font-size:0.8rem;">
              Agregar 500ml ($399)
            </button>
          </div>
        </div>

        <div class="quiz-match-box">
          <img src="${twinPerfume.img}" alt="${twinPerfume.title}" />
          <div>
            <small style="color:var(--gold-main); font-weight:700; text-transform:uppercase;">Perfume Gemelo @aromea.mx</small>
            <h4 style="font-family:var(--font-display); font-size:1.4rem;">${twinPerfume.title}</h4>
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">${twinPerfume.subtitle}</p>
            <button class="btn-secondary" id="quiz-add-perfume" style="padding:8px 16px; font-size:0.8rem;">
              Agregar ${twinPerfume.sizes[0].label} ($${twinPerfume.sizes[0].price})
            </button>
          </div>
        </div>
      </div>

      <div style="text-align:center; margin-top:22px;">
        <button class="icon-btn" id="quiz-restart-btn">↻ Repetir Diagnóstico Olfativo</button>
      </div>
    `;

    document.getElementById('quiz-add-home').addEventListener('click', () => {
      addToCart({
        id: `quiz-${homeScent.id}`,
        title: `${homeScent.name} · Aromatizante (500 ML)`,
        subtitle: 'Match de Sommelier Olfativo',
        price: 399,
        img: homeScent.bottleImg
      });
    });

    document.getElementById('quiz-add-perfume').addEventListener('click', () => {
      addToCart({
        id: `quiz-${twinPerfume.id}`,
        title: twinPerfume.title,
        subtitle: twinPerfume.sizes[0].label,
        price: twinPerfume.sizes[0].price,
        img: twinPerfume.img
      });
    });

    document.getElementById('quiz-restart-btn').addEventListener('click', () => {
      quizStep = 0;
      quizVotes = [];
      renderQuiz();
    });
  }
}

/* ==========================================================================
   8. CART DRAWER, THEME TOGGLE & SHOPIFY MODAL
   ========================================================================== */
function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
  openCart();
  showToast(`✨ ${item.title} agregado a tu bolsa`);
}

function renderCart() {
  const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  document.getElementById('cart-count').textContent = totalCount;
  const bottomCartCount = document.getElementById('bottom-cart-count');
  if (bottomCartCount) bottomCartCount.textContent = totalCount;
  document.getElementById('cart-subtotal').textContent = `$${subtotal.toLocaleString('es-MX')}.00 MXN`;

  const freeShippingThreshold = 699;
  const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  document.getElementById('cart-shipping-bar').style.width = `${pct}%`;
  document.getElementById('cart-shipping-msg').textContent =
    subtotal >= freeShippingThreshold
      ? '🎉 ¡Felicidades! Tienes ENVÍO GRATIS a todo México'
      : `Te faltan $${freeShippingThreshold - subtotal} MXN para Envío Gratis`;

  const list = document.getElementById('cart-items-list');
  if (cart.length === 0) {
    list.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:40px;">Tu bolsa está vacía. Explora nuestras fragancias.</p>`;
    return;
  }

  list.innerHTML = cart
    .map(
      (item, idx) => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.title}" />
        <div class="cart-item-info">
          <strong>${item.title}</strong>
          <small>${item.subtitle}</small>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px;">
            <div class="qty-controls">
              <button data-cart-dec="${idx}">−</button>
              <span style="font-size:0.8rem; font-weight:700;">${item.qty}</span>
              <button data-cart-inc="${idx}">+</button>
            </div>
            <strong style="color:var(--aura-primary);">$${(item.price * item.qty).toLocaleString('es-MX')}</strong>
          </div>
        </div>
      </div>`
    )
    .join('');

  list.querySelectorAll('[data-cart-dec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.getAttribute('data-cart-dec'));
      cart[i].qty -= 1;
      if (cart[i].qty <= 0) cart.splice(i, 1);
      renderCart();
    });
  });

  list.querySelectorAll('[data-cart-inc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.getAttribute('data-cart-inc'));
      cart[i].qty += 1;
      renderCart();
    });
  });
}

function openCart() {
  document.getElementById('cart-backdrop').classList.add('open');
  document.getElementById('cart-drawer').classList.add('open');
}

function closeCart() {
  document.getElementById('cart-backdrop').classList.remove('open');
  document.getElementById('cart-drawer').classList.remove('open');
}

document.getElementById('open-cart-btn').addEventListener('click', openCart);
const bottomCartBtn = document.getElementById('bottom-cart-btn');
if (bottomCartBtn) bottomCartBtn.addEventListener('click', openCart);
document.getElementById('close-cart-btn').addEventListener('click', closeCart);
document.getElementById('cart-backdrop').addEventListener('click', closeCart);

document.getElementById('checkout-btn').addEventListener('click', () => {
  showToast('🔒 Iniciando Checkout Seguro de Aroméa México...');
});
document.getElementById('paypal-checkout-btn').addEventListener('click', () => {
  showToast('⚡ Conectando con PayPal Express...');
});

/* Theme Switcher (Obsidian Dark vs Editorial Boutique Light) */
function toggleThemeMode() {
  const isLight = document.body.classList.toggle('theme-light');
  document.getElementById('theme-icon').textContent = isLight ? '🌙' : '☀️';
  document.getElementById('theme-label').textContent = isLight ? 'Modo Noche' : 'Modo Boutique';
  showToast(isLight ? '☀️ Modo Boutique Claro activado' : '🌙 Modo Noche de Lujo activado');
}

document.getElementById('theme-toggle-btn').addEventListener('click', toggleThemeMode);
const mobileThemeBtn = document.getElementById('mobile-theme-btn');
if (mobileThemeBtn) {
  mobileThemeBtn.addEventListener('click', () => {
    toggleThemeMode();
    closeMobileNav();
  });
}

/* Shopify Modal */
const shopifyModal = document.getElementById('shopify-modal');
document.getElementById('shopify-modal-btn').addEventListener('click', () => shopifyModal.classList.add('open'));
const mobileShopifyBtn = document.getElementById('mobile-shopify-btn');
if (mobileShopifyBtn) {
  mobileShopifyBtn.addEventListener('click', () => {
    closeMobileNav();
    shopifyModal.classList.add('open');
  });
}
document.getElementById('close-shopify-modal').addEventListener('click', () => shopifyModal.classList.remove('open'));
document.getElementById('close-shopify-btn-bottom').addEventListener('click', () => shopifyModal.classList.remove('open'));

/* Mobile Navigation Drawer & Scroll Spy */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
const closeMobileNavBtn = document.getElementById('close-mobile-nav');

function openMobileNav() {
  if (!mobileNavDrawer) return;
  mobileNavDrawer.classList.add('open');
  mobileNavBackdrop.classList.add('open');
  mobileMenuBtn.classList.add('is-active');
  mobileMenuBtn.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
  if (!mobileNavDrawer) return;
  mobileNavDrawer.classList.remove('open');
  mobileNavBackdrop.classList.remove('open');
  mobileMenuBtn.classList.remove('is-active');
  mobileMenuBtn.setAttribute('aria-expanded', 'false');
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileNavDrawer.classList.contains('open');
    if (isOpen) closeMobileNav();
    else openMobileNav();
  });
}
if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);
if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);

document.querySelectorAll('[data-mobile-link]').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileNav();
  });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobileNav();
    closeCart();
    shopifyModal.classList.remove('open');
    document.getElementById('pdp-modal').classList.remove('open');
  }
});

/* ==========================================================================
   9. INTERACTIVE MAGAZINE FLIPBOOK & SHOP-THE-PAGE VIEWER
   ========================================================================== */
const MAGAZINE_PAGES = [
  {
    page: 1,
    img: 'assets/img/mag-p1.png',
    tag: 'Portada · Edición 2026',
    title: 'The Olfactory Journal · Casa Aroméa',
    desc: 'Bienvenida al universo sensorial de Aroméa: arquitectura olfativa para residencias de lujo y curaduría de alta perfumería en Guadalajara.',
    scentTheme: 'condesa',
    productIds: ['prod-condesa', 'prod-bundle-hotel']
  },
  {
    page: 2,
    img: 'assets/img/mag-p2.png',
    tag: 'Página 02 · Línea Residencial',
    title: 'Condesa & Imperial: Calma y Carácter',
    desc: 'Dos firmas icónicas: la frescura floral blanca de Condesa y la presencia amaderada con cardamomo y oud de Imperial.',
    scentTheme: 'imperial',
    productIds: ['prod-condesa', 'prod-imperial']
  },
  {
    page: 3,
    img: 'assets/img/mag-p3.png',
    tag: 'Página 03 · Línea Residencial',
    title: 'Majestad & Oceanic: Realeza y Brisa Marina',
    desc: 'Orquídea púrpura y vainilla nocturna en Majestad frente a la libertad mineral y cítrica de Oceanic.',
    scentTheme: 'majestad',
    productIds: ['prod-majestad', 'prod-oceanic']
  },
  {
    page: 4,
    img: 'assets/img/mag-p4.png',
    tag: 'Página 04 · Oferta Estrella',
    title: 'Bundle Hotel de Lujo ($799 MXN)',
    desc: '2 Botellas de 1 Litro a tu elección + 1 Botella de 500 ml GRATIS (2.5 Litros totales) con envío gratis nacional.',
    scentTheme: 'imperial',
    productIds: ['prod-bundle-hotel', 'prod-discovery-gdl']
  },
  {
    page: 5,
    img: 'assets/img/mag-p5.png',
    tag: 'Página 05 · @aromea.mx Guadalajara',
    title: 'Alta Perfumería Dama & Árabe (Khamrah)',
    desc: 'Originales 100% garantizados y decants: Khamrah de Lattafa, Mon Guerlain, My Way de Giorgio Armani y Burberry Her.',
    scentTheme: 'condesa',
    productIds: ['prod-khamrah', 'prod-monguerlain', 'prod-myway', 'prod-burberryher']
  },
  {
    page: 6,
    img: 'assets/img/mag-p6.png',
    tag: 'Página 06 · Contraportada & Regalos',
    title: 'Caballero, Cofres de Regalo & Directorio',
    desc: 'Sets ejecutivos como Bad Boy de Carolina Herrera, Dúo Valentino & Prada Paradoxe y atención personalizada en GDL.',
    scentTheme: 'oceanic',
    productIds: ['prod-badboy', 'prod-valentino-prada', 'prod-discovery-gdl']
  }
];

const MAGAZINE_SPREADS = [
  {
    label: 'Portada',
    indicator: 'Portada · Página 1 de 6',
    pages: [1],
    tag: 'Portada · Edición 2026',
    title: 'The Olfactory Journal · Casa Aroméa',
    desc: 'Descubre nuestra edición editorial 2026. Haz clic en siguiente para abrir las páginas dobles de la revista.',
    scentTheme: 'condesa',
    productIds: ['prod-condesa', 'prod-bundle-hotel']
  },
  {
    label: 'Págs 2–3',
    indicator: 'Doble Página · Páginas 2 y 3 de 6',
    pages: [2, 3],
    tag: 'Colección de Espacios · Págs. 02–03',
    title: 'Las 4 Personalidades para tu Hogar',
    desc: 'Explora Condesa, Imperial, Majestad y Oceanic en presentaciones de 500 ml ($399) y 1 Litro ($549).',
    scentTheme: 'majestad',
    productIds: ['prod-condesa', 'prod-imperial', 'prod-majestad', 'prod-oceanic']
  },
  {
    label: 'Págs 4–5',
    indicator: 'Doble Página · Páginas 4 y 5 de 6',
    pages: [4, 5],
    tag: 'Bundle $799 + Perfumería · Págs. 04–05',
    title: 'Pack Hotel de Lujo & Joyas @aromea.mx',
    desc: 'Lleva el Bundle de 2.5 Litros por $799 o descubre Khamrah Lattafa, Mon Guerlain y My Way.',
    scentTheme: 'imperial',
    productIds: ['prod-bundle-hotel', 'prod-khamrah', 'prod-monguerlain', 'prod-myway']
  },
  {
    label: 'Pág 6',
    indicator: 'Contraportada · Página 6 de 6',
    pages: [6],
    tag: 'Contraportada · Página 06',
    title: 'Caballero, Kits de Regalo & Contacto GDL',
    desc: 'Cofres originales para regalo, minis y entregas en Guadalajara y todo México.',
    scentTheme: 'oceanic',
    productIds: ['prod-badboy', 'prod-valentino-prada', 'prod-discovery-gdl']
  }
];

let magSingleMode = window.innerWidth <= 680;
let magIndex = 0; // Index in MAGAZINE_SPREADS (if spread mode) or MAGAZINE_PAGES (if single mode)

function renderMagazineFlipbook() {
  const spreadContainer = document.getElementById('mag-spread-container');
  const indicatorEl = document.getElementById('mag-spread-indicator');
  const dotsRow = document.getElementById('mag-dots-row');
  const modeLabel = document.getElementById('mag-mode-label');
  if (!spreadContainer) return;

  const itemsList = magSingleMode ? MAGAZINE_PAGES : MAGAZINE_SPREADS;
  if (magIndex >= itemsList.length) magIndex = 0;
  if (magIndex < 0) magIndex = itemsList.length - 1;

  const current = itemsList[magIndex];
  const isSingleSheet = magSingleMode || current.pages.length === 1;

  spreadContainer.classList.toggle('single-mode', isSingleSheet);
  spreadContainer.classList.remove('mag-flip-anim');
  void spreadContainer.offsetWidth;
  spreadContainer.classList.add('mag-flip-anim');

  if (magSingleMode) {
    indicatorEl.textContent = `Página ${current.page} de 6`;
    modeLabel.textContent = '📖 Ver Doble Página';
    spreadContainer.innerHTML = `
      <div class="mag-page-frame">
        <img src="${current.img}" alt="Catálogo Aroméa Página ${current.page}" />
      </div>
    `;
  } else {
    indicatorEl.textContent = current.indicator;
    modeLabel.textContent = '📄 Ver 1 Página';
    if (current.pages.length === 1) {
      const pObj = MAGAZINE_PAGES[current.pages[0] - 1];
      spreadContainer.innerHTML = `
        <div class="mag-page-frame">
          <img src="${pObj.img}" alt="Catálogo Aroméa Página ${pObj.page}" />
        </div>
      `;
    } else {
      const leftPage = MAGAZINE_PAGES[current.pages[0] - 1];
      const rightPage = MAGAZINE_PAGES[current.pages[1] - 1];
      spreadContainer.innerHTML = `
        <div class="mag-page-frame page-left">
          <img src="${leftPage.img}" alt="Catálogo Aroméa Página ${leftPage.page}" />
        </div>
        <div class="mag-page-frame page-right">
          <img src="${rightPage.img}" alt="Catálogo Aroméa Página ${rightPage.page}" />
        </div>
      `;
    }
  }

  // Render pagination dots
  dotsRow.innerHTML = itemsList
    .map((item, idx) => {
      const label = magSingleMode ? `Pág ${item.page}` : item.label;
      return `<button type="button" class="mag-page-dot ${idx === magIndex ? 'active' : ''}" data-mag-idx="${idx}">${label}</button>`;
    })
    .join('');

  dotsRow.querySelectorAll('[data-mag-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      magIndex = Number(btn.getAttribute('data-mag-idx'));
      renderMagazineFlipbook();
    });
  });

  // Update contextual Shop-the-Page sidebar
  document.getElementById('mag-sidebar-tag').textContent = current.tag;
  document.getElementById('mag-sidebar-title').textContent = current.title;
  document.getElementById('mag-sidebar-desc').textContent = current.desc;

  const featuredContainer = document.getElementById('mag-featured-products');
  const prods = current.productIds
    .map(pid => CATALOG_PRODUCTS.find(p => p.id === pid))
    .filter(Boolean);

  featuredContainer.innerHTML = prods
    .map(
      p => `
      <div class="mag-featured-item">
        <img src="${p.img}" alt="${p.title}" style="cursor:pointer;" data-mag-pdp="${p.id}" />
        <div style="flex:1; min-width:0;">
          <strong style="display:block; font-size:0.84rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; cursor:pointer;" data-mag-pdp="${p.id}">${p.title}</strong>
          <small style="color:var(--aura-primary); font-weight:700; font-size:0.76rem;">$${p.price.toLocaleString('es-MX')} MXN</small>
        </div>
        <button type="button" class="add-cart-btn" data-mag-add="${p.id}" style="padding:7px 12px; font-size:0.74rem; flex-shrink:0;">+ Agregar</button>
      </div>
    `
    )
    .join('');

  featuredContainer.querySelectorAll('[data-mag-pdp]').forEach(el => {
    el.addEventListener('click', () => openProductModal(el.getAttribute('data-mag-pdp')));
  });

  featuredContainer.querySelectorAll('[data-mag-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      const prod = CATALOG_PRODUCTS.find(item => item.id === btn.getAttribute('data-mag-add'));
      if (prod) {
        addToCart({
          id: prod.id,
          title: prod.title,
          subtitle: prod.sizes[0].label,
          price: prod.sizes[0].price,
          img: prod.img
        });
      }
    });
  });
}

const magPrevBtn = document.getElementById('mag-prev-btn');
const magNextBtn = document.getElementById('mag-next-btn');
const magModeToggle = document.getElementById('mag-mode-toggle');
const magSpreadEl = document.getElementById('mag-spread-container');

if (magPrevBtn) {
  magPrevBtn.addEventListener('click', () => {
    magIndex--;
    renderMagazineFlipbook();
  });
}
if (magNextBtn) {
  magNextBtn.addEventListener('click', () => {
    magIndex++;
    renderMagazineFlipbook();
  });
}
if (magModeToggle) {
  magModeToggle.addEventListener('click', () => {
    magSingleMode = !magSingleMode;
    magIndex = 0;
    renderMagazineFlipbook();
  });
}

// Touch Swipe Support on Magazine Stage for Mobile & Tablet
if (magSpreadEl) {
  let touchStartX = 0;
  magSpreadEl.addEventListener(
    'touchstart',
    e => {
      if (e.changedTouches && e.changedTouches[0]) {
        touchStartX = e.changedTouches[0].screenX;
      }
    },
    { passive: true }
  );
  magSpreadEl.addEventListener(
    'touchend',
    e => {
      if (e.changedTouches && e.changedTouches[0]) {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 42) {
          if (diff < 0) magIndex++;
          else magIndex--;
          renderMagazineFlipbook();
        }
      }
    },
    { passive: true }
  );
}

/* Active Section Scroll Spy for Desktop Nav, Mobile Drawer & Bottom Bar */
const sectionIds = ['hero', 'piramide', 'espacios', 'bundle-builder', 'catalogo', 'revista', 'quiz'];
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetHref = `#${entry.target.id}`;
        document.querySelectorAll('.main-nav .nav-link').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === targetHref);
        });
        document.querySelectorAll('.mobile-nav-links .mobile-nav-item[data-mobile-link]').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === targetHref);
        });
        document.querySelectorAll('.mobile-bottom-bar .bottom-nav-item[data-bottom-nav]').forEach(a => {
          a.classList.toggle('active', a.getAttribute('data-bottom-nav') === targetHref);
        });
      }
    });
  },
  { rootMargin: '-32% 0px -55% 0px', threshold: 0 }
);

sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

/* Toast Helper */
let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast-msg');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ==========================================================================
   INITIALIZE ALL INTERACTIVE MODULES ON LOAD
   ========================================================================== */
initPyramidSelector();
setHeroScent('condesa', false);
renderSpaceSimulator('recamara');
renderBundleBuilder();
renderCatalog('all');
renderMagazineFlipbook();
renderQuiz();
renderCart();

