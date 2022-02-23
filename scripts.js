mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FzdG9uY29kZXMiLCJhIjoiY2t3bWVhc2pvMGc0MjJvbXIyNTJoaTB5MiJ9.O6HwC8kOPxUXjcW8fGKlRw";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-56.21743984, -34.83122403],
  zoom: 10,
});

const ferias = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.21743984, -34.83122403],
      },
      properties: {
        title: "28 DE FEBRERO",
        description: "28 DE FEBRERO Y ELIAS REGULES",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.10667908, -34.89356573],
      },
      properties: {
        title: "ACEGUA",
        description:
          "ACEGUA DESDE CONCEPCION DEL URUGUAY HASTA HIPOLITO IRIGOYEN Y ALGUNOS MOVILES POR CONCEPCION DEL URUGUAY",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17435063, -34.90756968],
      },
      properties: {
        title: "ACEVEDO DIAZ",
        description: "ACEVEDO DIAZ ENTRE CANELONES Y CHARRUA",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16687997, -34.89902528],
      },
      properties: {
        title: "ACEVEDO DIAZ (SABADO)",
        description: "ACEVEDO DIAZ DESDE FCO. CANARO HASTA AV. RIVERA",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.13131504, -34.89323148],
      },
      properties: {
        title: "ANDRES AGUIAR",
        description: "ANDRES AGUIAR DESDE RAMON ANADOR HASTA SANTIAGO RIVAS",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17058928, -34.8658298],
      },
      properties: {
        title: "ANDRES LAMAS",
        description: "ANDRES LAMAS DE GRAL. FLORES A GUALAEGUAY",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.21025899, -34.84813822],
      },
      properties: {
        title: "ANTONIO DIAZ",
        description: "ANTONIO DIAZ DESDE MAZANGANO A CORONEL OLAVARRIA",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.2005245, -34.82706905],
      },
      properties: {
        title: "APARICIO SARAVIA",
        description: "APARICIO SARAVIA Y CORONEL RAIZ",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15169424, -34.88269547],
      },
      properties: {
        title: "ASILO",
        description: "ASILO Y LUIS ALBERTO DE HERRERA",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.14747933, -34.89541278],
      },
      properties: {
        title: "AYACUCHO",
        description:
          "AYACUCHO DESDE GRAL. LAS HERAS HASTA EL Nº 331 HACIA LA CALLE MAIPU",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15018037, -34.90163245],
      },
      properties: {
        title: "BADO",
        description: "BADO DE LLAMBI A MC EACHEN",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15446172, -34.84575707],
      },
      properties: {
        title: "BAGE",
        description: "BAGE Y GENERAL FLORES",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16966736, -34.85755418],
      },
      properties: {
        title: "BASILIO ARAUJO",
        description: "BASILIO ARAUJO DESDE BRUNO MENDEZ A RAFAEL HORTIGUERA",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.12403587, -34.84165375],
      },
      properties: {
        title: "BRAILE",
        description: "BRAILE Y CAMINO MALDONADO",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.08033563, -34.89500318],
      },
      properties: {
        title: "BRENDA",
        description: "BRENDA DESDE AVDA. GRAL PAZ HASTA Nº 5819",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1149815, -34.88943699],
      },
      properties: {
        title: "CALDAS",
        description: "FCO. DE CALDAS ENTRE DALMIRO COSTA AL Nº 1612",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.10157223, -34.82458189],
      },
      properties: {
        title: "CAMINO GUERRA",
        description: "CAMINO GUERRA Y ARIES",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.0671578, -34.89273198],
      },
      properties: {
        title: "CANADA",
        description: "CANADA DESDE AVDA. BOLIVIA HASTA YAMANDU",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.2230077, -34.82086639],
      },
      properties: {
        title: "CAPITULARES",
        description: "CAPITULARES Y ANTONIO MARIA MARQUEZ",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.18107245, -34.86330354],
      },
      properties: {
        title: "CARABELAS",
        description: "CARABELAS DESDE L.A. DE HERRERA HACIA REGIMIENTO",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.22368292, -34.82560714],
      },
      properties: {
        title: "CARAFI",
        description: "CARAFI Y BVAR. BATLLE Y ORDOÑEZ",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1615397, -34.88598018],
      },
      properties: {
        title: "CARLOS ANAYA",
        description: "CARLOS ANAYA DESDE Nº 2765 Y 2768 HASTA COMANDANTE BRAGA",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15663906, -34.91340232],
      },
      properties: {
        title: "CARLOS BERG",
        description: "CARLOS BERG DESDE BR. ESPAÑA HASTA Nº 2511",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1468296, -34.878578],
      },
      properties: {
        title: "CARLOS CROCKER",
        description: "CARLOS CROCKER DESDE 8 DE OCTUBRE HASTA FRAY BENTOS",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.22419773, -34.85638998],
      },
      properties: {
        title: "CARLOS DE LA VEGA",
        description:
          "CARLOS DE LA VEGA DESDE CARLOS MARIA RAMIREZ HASTA Nº 4335",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.18274606, -34.90138259],
      },
      properties: {
        title: "CARLOS ROXLO",
        description: "CARLOS ROXLO ENTRE AV. URUGUAY Y PAYSANDU",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17718954, -34.90567228],
      },
      properties: {
        title: "CHANA",
        description: "CHANA Y GABOTO",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15527754, -34.90497034],
      },
      properties: {
        title: "CHARRUA",
        description: "CHARRUA ENTRE FCO. SOCA Y BRITO DEL PINO",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17090397, -34.90614115],
      },
      properties: {
        title: "CHARRUA (VIERNES)",
        description: "CHARRUA ENTRE PABLO DE MARIA Y BLANES",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19227082, -34.83610614],
      },
      properties: {
        title: "CNO. EDISON",
        description: "CNO. EDISON DESDE AV. DE LAS INSTRUCCIONES A JENNER",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.20810727, -34.91043449],
      },
      properties: {
        title: "COLON",
        description: "COLON Y RECONQUISTA",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.20813946, -34.91026732],
      },
      properties: {
        title: "COLON Y BUENOS AIRES",
        description: "COLON ENTRE BUENOS AIRES Y RECONQUISTA",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.18367362, -34.87590487],
      },
      properties: {
        title: "COLORADO",
        description: "COLORADO Y MARSELLA",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17619035, -34.88583201],
      },
      properties: {
        title: "CONSTITUCION",
        description: "CONSTITUCION Y AMEZAGA",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.05952493, -34.88446208],
      },
      properties: {
        title: "COUTURE",
        description: "COUTURE Y AROCENA",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.05952493, -34.88446208],
      },
      properties: {
        title: "COUTURE (SABADOS)",
        description: "COUTURE Y AROCENA",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.11203126, -34.86954726],
      },
      properties: {
        title: "CROVETTTO",
        description: "DR. CROVETTO Y CAMBAY",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1767971, -34.88976278],
      },
      properties: {
        title: "DEMOCRACIA",
        description: "DEMOCRACIA DE HOCQUART A GENERAL PAGOLA",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15310803, -34.90091408],
      },
      properties: {
        title: "DIEGO LAMAS",
        description:
          "DIEGO LAMAS ENTRE CAPITAN VIDELA Y FELICIANO RODRIGUEZ HASTA Nº 2867",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.2091772, -34.8470002],
      },
      properties: {
        title: "DOMINGO TORRES",
        description: "DOMINGO TORRES DESDE MAZANGANO HASTA EL Nº 4459 DE RAFFO",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1009191, -34.89289658],
      },
      properties: {
        title: "DR. DECROLY",
        description: "DR. DECROLY DESDE AMAZONAS HASTA RIMAC",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.201871, -34.86891541],
      },
      properties: {
        title: "DUFORT",
        description:
          "DR. ANACLETO DUFORT Y ALVAREZ DESDE J.C. BLANCO A AGUIRRE",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19651679, -34.91103138],
      },
      properties: {
        title: "DURAZNO",
        description: "DURAZNO ENTRE CONVENCIÓ Y WILSON FERREIRA",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16671396, -34.89059728],
      },
      properties: {
        title: "DUVIMIOSO TERRA",
        description: "DUVIMIOSO TERRA DE NICARAGUA A HOCQUART",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.22300539, -34.80455828],
      },
      properties: {
        title: "EDUARDO RAIZ",
        description: "EDUARDO RAIZ Y GARZON",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1172968, -34.87473177],
      },
      properties: {
        title: "EMILIO CASTELAR",
        description: "EMILIO CASTELAR Y BERRO",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.21740587, -34.85845338],
      },
      properties: {
        title: "EMILIO ROMERO",
        description: "EMILIO ROMERO DESDE AGRACIADA HASTA INDIA MUERTA",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19305558, -34.87356489],
      },
      properties: {
        title: "ENRIQUE MARTINEZ",
        description:
          "ENRIQUE MARTINEZ DESDE FRENTE Nº 1337 HASTA CALLE PASAJE DE LOS ANDES",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.10156883, -34.88688978],
      },
      properties: {
        title: "ESTANISLAO LOPEZ",
        description: "ESTANISLAO LOPEZ ENTRE RIO DE LA PLATA Y ANDRES GOMEZ",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15513736, -34.88986167],
      },
      properties: {
        title: "ESTERO BELLACO",
        description: "ESTERO BELLACO DESDE AV. CENTENARIO HASTA IBIRAPITA",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16141033, -34.85284728],
      },
      properties: {
        title: "FRANCISCO LEMOS",
        description: "FRANCISCO LEMOS DESDE GUENOAS A CHIBORAZO",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17314236, -34.85448179],
      },
      properties: {
        title: "GRANADEROS",
        description: "GRANADEROS Y SAN MARTIN",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17165974, -34.88010307],
      },
      properties: {
        title: "GUADALUPE",
        description: "GUADALUPE ENTRE AV. GARIBALDI Y JOAQUIN REQUENA",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19107056, -34.9086107],
      },
      properties: {
        title: "GUTIERREZ RUIZ",
        description: "GUTIERREZ RUIZ ENTRE CANELONES Y DURAZNO",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.22057949, -34.8046602],
      },
      properties: {
        title: "HANSEN",
        description: "HANSEN Y BESNES IRIGOYEN",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.20368202, -34.87519946],
      },
      properties: {
        title: "HERVIDERO",
        description: "HERVIDERO ENTRE NASAZZI Y PROGRESO",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15046316, -34.86637341],
      },
      properties: {
        title: "HIMALAYA",
        description: "HIMALAYA Y ESPARTILLO",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.21143647, -34.87060296],
      },
      properties: {
        title: "HUSARES",
        description: "HUSARES ENTRE CAPURRO Y ALBERTO FLANGINI",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1114612, -34.88070226],
      },
      properties: {
        title: "IGUA",
        description: "IGUA E HIPOLITO IRIGOYEN",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16383322, -34.87774825],
      },
      properties: {
        title: "INGAVI",
        description: "INGAVI ENTRE CANSTATT Y PASO DEL CUELLO",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17710643, -34.91029412],
      },
      properties: {
        title: "ISLA DE FLORES",
        description: "ISLA DE FLORES DESDE GABOTO HASTA Nº 1780",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.06549146, -34.87972275],
      },
      properties: {
        title: "JAMAICA",
        description: "JAMAICA DESDE AVDA. BAUTISTA HASTA MURILLO",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.13499085, -34.8694669],
      },
      properties: {
        title: "JOANICO",
        description: "JOANICO Y ENRIQUE CLAY",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15955992, -34.87606098],
      },
      properties: {
        title: "JOSE CATALA",
        description: "JOSE CATALA DESDE CADIZ A THOMPSON",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15663184, -34.88020637],
      },
      properties: {
        title: "JUAN CABAL",
        description: "JUAN CABAL DESDE MONTE CASEROS HASTA Nº 2578",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17169922, -34.90952908],
      },
      properties: {
        title: "JUAN MANUEL BLANES",
        description: "JUAN MANUEL BLANESS DESDE DURAZNO HASTA EL Nº 966",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1223489, -34.89606279],
      },
      properties: {
        title: "JUAN M. ESPINOSA",
        description: "JUAN M. ESPINOSA Y AVDA. RIVERA",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.14562129, -34.88661597],
      },
      properties: {
        title: "JUAN ORTIZ",
        description: "JUAN ORTIZ DESDE FRANCISCO SIMON HASTA EL 3157",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16797809, -34.90209059],
      },
      properties: {
        title: "JUAN PAULLIER",
        description: "JUAN PAULLIER DESDE AVDA. RIVERA HASTA Nº 1482",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19437919, -34.90982249],
      },
      properties: {
        title: "JUILIO HERRERA Y OBES",
        description: "JULIO HERRERA Y OBES DESDE MALDONADO A DURAZNO",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.13918839, -34.90739239],
      },
      properties: {
        title: "JULIO CESAR",
        description: "JULIO CESAR DE ITURRIAGA A 26 DE MARZO",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.14474024, -34.9072013],
      },
      properties: {
        title: "LA GACETA",
        description: "LA GACETA DESDE Nº 1211 (26 DE MARZO) HASTA Nº 1280",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15916886, -34.91130839],
      },
      properties: {
        title: "LAMAS",
        description: "LAMAS Y LIBERTAD",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.13440615, -34.88327577],
      },
      properties: {
        title: "LOMBARDINO",
        description: "LOMBARDINO Y COMERCIO",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16156325, -34.92038267],
      },
      properties: {
        title: "LUIS DE LA TORRE",
        description: "LUIS DE LA TORRE DESDE BR. ARTIGAS HASTA JOAQUIN NUÑEZ",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.11885337, -34.85183094],
      },
      properties: {
        title: "MANUEL ACUÑA",
        description: "MANUEL ACUÑA Y MARCOS SALCEDO",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1399172, -34.90160788],
      },
      properties: {
        title: "MARCO BRUTO",
        description:
          "MARCO BRUTO DESDE RIVERA HASTA Nº 1320 HACIA PLACIDO ELLAURI",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.12010312, -34.88872378],
      },
      properties: {
        title: "MARISCALA",
        description:
          "MARISCALA DESDE Nº1885 HASTA SAMUEL BLIXEN Y POR HASTA Nº 4376",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17521316, -34.87331298],
      },
      properties: {
        title: "MARTIN C. MARTINEZ",
        description: "MARTIN C. MARTINEZ DE GALLINAL A YAGUARI",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1829238, -34.90899],
      },
      properties: {
        title: "MARTINEZ TRUEBA",
        description: "MARTINEZ TRUEBA ENTRE MALDONADO Y DURAZNO",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.20879441, -34.82093193],
      },
      properties: {
        title: "MATERLINK",
        description: "MAURICIO MATERLINK DESDE WATT HASTA Nº 4997",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.18883257, -34.88176681],
      },
      properties: {
        title: "MELO",
        description: "MELO ENTRE AGUIAR Y GENERAL LUNA",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19589027, -34.85738647],
      },
      properties: {
        title: "MILLAN",
        description: "MILLAN Y LUIS A. DE HERRERA",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.24133898, -34.82282982],
      },
      properties: {
        title: "MILLAN (SABADO)",
        description: "MILLAN Y LECOCQ",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.14316596, -34.90346838],
      },
      properties: {
        title: "OSORIO",
        description: "OSORIO DESDE FCO. MUÑOZ HASTA PLACIDO ELLAURI",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19638073, -34.87833416],
      },
      properties: {
        title: "OUNANIAN",
        description: "OUNANIAN Y AGRACIADA",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.12957887, -34.85291529],
      },
      properties: {
        title: "OYARVIDE",
        description: "OYARVIDE Y CAMINO MALDONADO",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15438593, -34.85423235],
      },
      properties: {
        title: "PABLO PEREZ",
        description: "PABLO PEREZ Y LONDRES",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1890519, -34.85377726],
      },
      properties: {
        title: "PEDRO TRAPANI",
        description: "PEDRO TRAPANI Y BAYONA",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.14353467, -34.87764246],
      },
      properties: {
        title: "PERNAS",
        description: "PERNAS Y ASILO",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.18671038, -34.89511113],
      },
      properties: {
        title: "PIEDRA ALTA",
        description: "PIEDRA ALTA Y LIMA",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.21743206, -34.85990314],
      },
      properties: {
        title: "PILAR COSTA",
        description: "PILAR COSTA E INDIA MUERTA",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.0933121, -34.89270538],
      },
      properties: {
        title: "PILCOMAYO",
        description:
          "PILCOMAYO DESDE GALLINAL HACIA MISSISIPI HASTA EL Nº 5274",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.245876, -34.79822408],
      },
      properties: {
        title: "PLAZA LEZICA",
        description: "PINTA Y PLAZA 12 DE DICIEMBRE",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17239219, -34.86306494],
      },
      properties: {
        title: "QUESADA",
        description: "QUESADA Y HOMERO DE GREGORIO",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.17949864, -34.85303445],
      },
      properties: {
        title: "RAFAEL HORTIGUERA",
        description: "RAFAEL HORIGUERA DESDE NILO A ORTIZ DE ZARATE",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.18459994, -34.86155246],
      },
      properties: {
        title: "RAMON MARQUEZ",
        description: "RAMON MARQUEZ Y LUIS ALBERTO DE HERRERA",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.09937033, -34.87217947],
      },
      properties: {
        title: "ROMILDO RISSO",
        description: "ROMILDO RISSO Y CAMINO CARRASCO",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.20651523, -34.83938452],
      },
      properties: {
        title: "ROSALIA",
        description: "DE CASTRO A ARIEL",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1821632, -34.90705579],
      },
      properties: {
        title: "SALTO",
        description: "SALTO DESDE SORIANO A SAN SALVADOR",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15085222, -34.9085315],
      },
      properties: {
        title: "SANTIAGO VAZQUEZ",
        description: "SGO. VAZQUEZ DESDE GUAYAQUIL A MASSINI",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16316026, -34.87174526],
      },
      properties: {
        title: "SETEMBRINO PEREDA",
        description: "SETEMBRINO PEREDA Y LUIS A. DE HERRERA",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15882936, -34.9018043],
      },
      properties: {
        title: "SIMON BOLIVAR",
        description: "SIMON BOLIVAR ENTRE PALMAR Y ENRIQUE POUEY",
        tipo: "FERIA",
        dia: "JUEVES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19943486, -34.84976427],
      },
      properties: {
        title: "SIPE SIPE",
        description: "SIPE SIPE Y CASTRO",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.21687076, -34.83472725],
      },
      properties: {
        title: "TACUABE",
        description: "TACUABE Y SAYAGO",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.13810633, -34.89347848],
      },
      properties: {
        title: "TIBURCIO GOMEZ",
        description: "TIBURCIO GOMEZ ENTRE TOMAS GOMEZ Y COMODORO COE",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: {},
      },
      properties: {
        title: "TOMAS DIAGO",
        description: "TOMAS DIAGO DESDE BR. ESPAÑA A JAIME ZUDAÑEZ",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.2399382, -34.84790529],
      },
      properties: {
        title: "TRIUNFO",
        description: "TRIUNFO Y CALOS DE LA VEGA",
        tipo: "FERIA",
        dia: "DOMINGO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.21221917, -34.86547907],
      },
      properties: {
        title: "VALENTIN GOMEZ",
        description: "VALENTIN GOMEZ Y AMADO NERVO",
        tipo: "FERIA",
        dia: "VIERNES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.19496313, -34.86252556],
      },
      properties: {
        title: "VENANCIO BENAVIDEZ",
        description: "AV. VENANCIO BENAVIDEZ ENTRE MICENAS Y REGIDORES",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.1147497, -34.89368628],
      },
      properties: {
        title: "VERDI",
        description:
          "VERDI DESDE CIRCUNVALACIÓN LA PLAZA DE LOS OLIMPICOS AL 4561",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.08885757, -34.87694606],
      },
      properties: {
        title: "VERONA",
        description: "VERONA ENTRE AVDA BOLIVIA Y SIRACUSA",
        tipo: "FERIA",
        dia: "MIERCOLES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.13263778, -34.85692115],
      },
      properties: {
        title: "VICENZA",
        description: "VICENZA Y AVDA. 8 DE OCTUBRE",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.11392812, -34.83376074],
      },
      properties: {
        title: "VICTOR MANUEL",
        description: "VICTOR MANUEL DESDE FLORENCIA HASTA NAPOLES",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15574596, -34.92057112],
      },
      properties: {
        title: "VILLA BIARRITZ",
        description: "VILLA BIARRITZ",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.15574596, -34.92057112],
      },
      properties: {
        title: "VILLA BIARRITZ  (SABADO)",
        description: "VILLA BIARRITZ",
        tipo: "FERIA",
        dia: "SABADO",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.22956784, -34.84963658],
      },
      properties: {
        title: "VILLA VICENCIO",
        description: "VILLA VICENCIO Y SANTA LUCIA",
        tipo: "FERIA",
        dia: "MARTES",
      },
    },
  ],
};

// add markers to map
for (const feature of ferias.features) {
  // create a HTML element for each feature
  const point = document.createElement("div");
  point.className = "marker";
  switch (feature.properties.dia) {
    case "MARTES":
      point.classList.add("marker-blue");
      break;
    case "MIERCOLES":
      point.classList.add("marker-red");
      break;
    case "JUEVES":
      point.classList.add("marker-green");
      break;
    case "VIERNES":
      point.classList.add("marker-orange");
      break;
    case "SABADO":
      point.classList.add("marker-violet");
      break;
    case "DOMINGO":
      point.classList.add("marker-yellow");
      break;
    default:
      break;
  }
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(point)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
    )
    .addTo(map);
}
