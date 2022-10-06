/*TODO

Agregar filtros por Municipio

Agregar 2 objetos con el total de ferias por dia y por municipio para mostrar.
ver como actualizarlo segun seleccion de filtros

Performance GeoJson https://blog.exploratory.io/how-to-reduce-your-geojson-file-size-smaller-for-better-performance-8fb77759870c

Para armar el mapa de nuevo, puedo probar crear markers en lugar de layers para y   que su id sea del tipo MARTES-CH-X
tendria que tener una lista de checkbox de municipios y de dias, agregar un boton filtrar para obtener los valores de municipio
y feria, recorrer absolutamente todo y empezar a esconder layers y divs de acuerdo a la seleccion


*/

const token =
  "pk.eyJ1IjoiZ2FzdG9uY29kZXMiLCJhIjoiY2t3bWVhc2pvMGc0MjJvbXIyNTJoaTB5MiJ9.O6HwC8kOPxUXjcW8fGKlRw";
mapboxgl.accessToken = token;

const ferias = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        title: "28 DE FEBRERO",
        description: "28 DE FEBRERO Y ELIAS REGULES",
        tipo: "FERIA",
        dia: "MARTES",
        color: "#ef476f",
        municipio: "CH",
      },
      geometry: {
        type: "Point",
        coordinates: [-56.21743984, -34.83122403],
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
        color: "#ffd166",
        municipio: "CH",
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
        color: "#06d6a0",
        municipio: "CH",
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
        color: "#118ab2",
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
        color: "#073b4c",
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
        color: "#9d4edd",
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
        color: "#ef476f",
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
        color: "#073b4c",
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
        color: "#ffd166",
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
        color: "#9d4edd",
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
        color: "#9d4edd",
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
        color: "#ffd166",
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
        color: "#ffd166",
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
        color: "#073b4c",
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
        color: "#073b4c",
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
        color: "#06d6a0",
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
        color: "#9d4edd",
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
        color: "#ffd166",
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
        color: "#ffd166",
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
        color: "#ffd166",
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
        color: "#9d4edd",
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
        color: "#118ab2",
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
        color: "#9d4edd",
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
        color: "#073b4c",
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
        color: "#118ab2",
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
        color: "#06d6a0",
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
        color: "#118ab2",
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
        color: "#06d6a0",
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
        color: "#118ab2",
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
        color: "#ef476f",
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
        color: "#ef476f",
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
        color: "#118ab2",
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
        color: "#118ab2",
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
        color: "#06d6a0",
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
        color: "#ef476f",
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
        color: "#073b4c",
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
        color: "#ffd166",
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
        color: "#9d4edd",
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
        color: "#073b4c",
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
        color: "#073b4c",
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
        color: "#118ab2",
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
        color: "#ffd166",
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
        color: "#ef476f",
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
        color: "#073b4c",
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
        color: "#073b4c",
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
        color: "#ef476f",
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
        color: "#ffd166",
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
        color: "#073b4c",
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
        color: "#9d4edd",
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
        color: "#ef476f",
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
        color: "#9d4edd",
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
        color: "#9d4edd",
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
        color: "#06d6a0",
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
        color: "#9d4edd",
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
        color: "#ffd166",
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
        color: "#9d4edd",
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
        color: "#ffd166",
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
        color: "#ffd166",
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
        color: "#9d4edd",
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
        color: "#ffd166",
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
        color: "#06d6a0",
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
        color: "#9d4edd",
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
        color: "#9d4edd",
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
        color: "#9d4edd",
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
        color: "#06d6a0",
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
        color: "#ffd166",
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
        color: "#118ab2",
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
        color: "#ef476f",
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
        color: "#ef476f",
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
        color: "#118ab2",
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
        color: "#ef476f",
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
        color: "#ffd166",
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
        color: "#ffd166",
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
        color: "#ef476f",
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
        color: "#ef476f",
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
        color: "#9d4edd",
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
        color: "#9d4edd",
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
        color: "#073b4c",
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
        color: "#06d6a0",
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
        color: "#ef476f",
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
        color: "#06d6a0",
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
        color: "#06d6a0",
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
        color: "#073b4c",
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
        color: "#073b4c",
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
        color: "#06d6a0",
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
        color: "#06d6a0",
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
        color: "#06d6a0",
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
        color: "#06d6a0",
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
        color: "#06d6a0",
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
        color: "#ffd166",
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
        color: "#073b4c",
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
        color: "#06d6a0",
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
        color: "#ffd166",
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
        color: "#ef476f",
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
        color: "#ffd166",
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
        color: "#ef476f",
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
        color: "#118ab2",
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
        color: "#9d4edd",
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
        color: "#9d4edd",
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
        color: "#073b4c",
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
        color: "#118ab2",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-56.16316026, -34.87174526],
      },
      properties: {
        title: "SETEMBRINO PE#06D6A0A",
        description: "SETEMBRINO PE#06D6A0A Y LUIS A. DE HERRERA",
        tipo: "FERIA",
        dia: "VIERNES",
        color: "#118ab2",
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
        color: "#06d6a0",
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
        color: "#118ab2",
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
        color: "#118ab2",
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
        color: "#118ab2",
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
        color: "#ffd166",
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
        color: "#9d4edd",
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
        color: "#118ab2",
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
        color: "#ef476f",
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
        color: "#ef476f",
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
        color: "#ffd166",
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
        color: "#073b4c",
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
        color: "#073b4c",
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
        color: "#ef476f",
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
        color: "#073b4c",
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
        color: "#ef476f",
      },
    },
  ],
};
const municipios = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.16745856350522, -34.73506499976462],
            [-56.16903646826123, -34.73094763389929],
            [-56.171782886197136, -34.729444684981665],
            [-56.1725351677708, -34.72481310623592],
            [-56.17525006971289, -34.7194997741321],
            [-56.18027542905206, -34.72134959332762],
            [-56.188898877039364, -34.72235980790884],
            [-56.191313868921576, -34.72156426089429],
            [-56.19327116530347, -34.72498844441701],
            [-56.19877537312801, -34.72735822103926],
            [-56.20301536371773, -34.73034902725409],
            [-56.20461580964542, -34.73498692568235],
            [-56.20741838462108, -34.73818542551342],
            [-56.2081640997597, -34.74099844104979],
            [-56.21212303133095, -34.74337812056188],
            [-56.21199168673061, -34.74629325663991],
            [-56.21600119797146, -34.75166526910962],
            [-56.21755437891923, -34.755031397682146],
            [-56.219326025882225, -34.75673157634142],
            [-56.218008958146676, -34.75960822966981],
            [-56.220844498458206, -34.76216235539002],
            [-56.2212686926808, -34.76535802990498],
            [-56.22513558846459, -34.766225096972946],
            [-56.228157732116955, -34.76918714591688],
            [-56.231116334336136, -34.77017811569225],
            [-56.23373357207999, -34.76862622058722],
            [-56.23479138489067, -34.76553822908583],
            [-56.24171981872965, -34.76159649128407],
            [-56.24664404409354, -34.759419335496744],
            [-56.24983099653854, -34.75910167450667],
            [-56.25067787794605, -34.75732444000894],
            [-56.256387879708505, -34.75402119658085],
            [-56.26177352525386, -34.75379435945345],
            [-56.26244624497942, -34.75475772323281],
            [-56.267333858096436, -34.75128401052809],
            [-56.27020083526869, -34.75115945155646],
            [-56.273607775420565, -34.74689814939697],
            [-56.2745657016642, -34.74425881902815],
            [-56.272763043300955, -34.739390050592604],
            [-56.27786856127299, -34.73876049490095],
            [-56.27794749014125, -34.73463240788098],
            [-56.2800585621031, -34.7269764006617],
            [-56.28336278501974, -34.72397040795774],
            [-56.28583832981184, -34.72373190257553],
            [-56.287363855113526, -34.720505678264544],
            [-56.289946461242764, -34.71832109304201],
            [-56.291770912823495, -34.71919030660864],
            [-56.29599586943658, -34.71711568288985],
            [-56.29741315674733, -34.712331790377945],
            [-56.301589498551046, -34.71019721423097],
            [-56.304132089633924, -34.70680221180081],
            [-56.30864897879447, -34.705858120955206],
            [-56.30898608266653, -34.70326779293165],
            [-56.31256651479675, -34.704973335867514],
            [-56.31328810823395, -34.70302333286687],
            [-56.31602492740677, -34.701972947622714],
            [-56.31752841078361, -34.7028726014128],
            [-56.324208570782915, -34.70221724788747],
            [-56.3273175826703, -34.705172404376704],
            [-56.33044480076438, -34.711305008009354],
            [-56.33763302059879, -34.7156152465302],
            [-56.34035432335479, -34.71344436582762],
            [-56.34223084303061, -34.71354048490287],
            [-56.3473023696986, -34.72184065359104],
            [-56.35032407232403, -34.7231647459874],
            [-56.35258347524998, -34.72669269996899],
            [-56.349999840917384, -34.72979070195747],
            [-56.34529990506104, -34.7314180594855],
            [-56.34524885813734, -34.736596844110366],
            [-56.34135180335355, -34.73933178850157],
            [-56.34051659990815, -34.742359279353124],
            [-56.34160878022082, -34.744299555521465],
            [-56.33837820760493, -34.749762237867095],
            [-56.338138951322726, -34.751860729609426],
            [-56.34033699186845, -34.75621956190228],
            [-56.34514246844037, -34.760371995778314],
            [-56.34423007825901, -34.76502031331508],
            [-56.34185522547794, -34.77060927107814],
            [-56.342093107979245, -34.77728125931878],
            [-56.34513102699691, -34.78146422088806],
            [-56.34785644071967, -34.783568054590454],
            [-56.34614908572996, -34.78410527724903],
            [-56.33506484478289, -34.78152556127421],
            [-56.326114407319466, -34.77990035434885],
            [-56.32109626984469, -34.77850727797425],
            [-56.320643632160014, -34.78350393460168],
            [-56.31929750293829, -34.78496459280826],
            [-56.31570827753207, -34.79125333039984],
            [-56.31218981455701, -34.79480854130766],
            [-56.30840578148476, -34.79591055225506],
            [-56.31052390373336, -34.79777703020262],
            [-56.29451190578965, -34.80577434668787],
            [-56.28896169915715, -34.80966590924466],
            [-56.27133863296316, -34.818699155815914],
            [-56.264710938576215, -34.81710522696715],
            [-56.262402482661, -34.82379495719094],
            [-56.259526872485665, -34.82744133325581],
            [-56.25537138803227, -34.82399911072952],
            [-56.24866388178438, -34.82863319225332],
            [-56.249884029008705, -34.829703455288374],
            [-56.24235004266933, -34.83391579965941],
            [-56.22865295728853, -34.84230048593993],
            [-56.20848636831513, -34.85320941170127],
            [-56.202614887349384, -34.856557334077806],
            [-56.199522561403, -34.852571667609496],
            [-56.19611518939383, -34.8514697940637],
            [-56.19265621207751, -34.84658284995331],
            [-56.188731324832055, -34.84730398984023],
            [-56.18598052016942, -34.845011169101575],
            [-56.18602283122545, -34.842808402448746],
            [-56.18273008676092, -34.839762090588884],
            [-56.18129049912329, -34.8367564099227],
            [-56.18347585893805, -34.833442051945305],
            [-56.18207490815967, -34.829937648838474],
            [-56.18517079239148, -34.82580703895267],
            [-56.18528691259566, -34.82331622474696],
            [-56.18782055451888, -34.821565086664336],
            [-56.187843836771044, -34.81902588118012],
            [-56.18589648394523, -34.81610380353026],
            [-56.18586284855377, -34.812944277251646],
            [-56.183566675301265, -34.81155838276682],
            [-56.18573534183887, -34.80872092601161],
            [-56.182869898157946, -34.80531924546724],
            [-56.18619029771335, -34.80189938630712],
            [-56.18654200823542, -34.80033218367979],
            [-56.184988261902994, -34.79576644832979],
            [-56.189417792440175, -34.792321794291205],
            [-56.1915453949426, -34.78928076639608],
            [-56.19048578632122, -34.78751629660022],
            [-56.19132135063904, -34.78143252341594],
            [-56.19068282585834, -34.77626331703405],
            [-56.18830501855701, -34.7744348509266],
            [-56.18823228474415, -34.77239340788056],
            [-56.193484159657196, -34.7682850482559],
            [-56.1906051746949, -34.763372007674704],
            [-56.18743980793672, -34.764224140660815],
            [-56.18400696002685, -34.76321051262091],
            [-56.178850487567175, -34.76273283530782],
            [-56.17816986387881, -34.75992690397955],
            [-56.17926919731288, -34.75630462369173],
            [-56.176612064143505, -34.75532109198102],
            [-56.175337415309784, -34.75149125695755],
            [-56.17173888634158, -34.7495408181026],
            [-56.17169600525848, -34.74530696243366],
            [-56.16882283605629, -34.741422003149005],
            [-56.16745856350522, -34.73506499976462],
          ],
        ],
      },
      properties: {
        GID: 33,
        MUNICIPIO: "G",
        SERIE: "BZA, BZB, BZC, BRA, BRB, BRC.",
        LIMITES:
          "Arroyo Miguelete, Carlos M. de Pena, Camino Lecocq, Camino del Fortin, Camino Tomkinson, Camino de la Granja, Camino Luis E. Perez, Camino de los Camalotes, Av. De los Deportes, Arroyo Melilla (Pista de Regatas), Arroyo Las Piedras, Limite Departamen",
        AREA_HA: 14240,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.08792975533626, -34.779177659423254],
            [-56.089244102532504, -34.78026405256872],
            [-56.092730108319486, -34.77879274163099],
            [-56.09444630711681, -34.775735906073464],
            [-56.09832776426241, -34.77555367421551],
            [-56.098566420279134, -34.770360292624666],
            [-56.093218147349845, -34.76009196586689],
            [-56.095852126595496, -34.7562726279838],
            [-56.09777072189734, -34.75706765916967],
            [-56.10024829345046, -34.75508704635552],
            [-56.09987532984519, -34.75297197987903],
            [-56.10424352611177, -34.75014937483602],
            [-56.10740416378417, -34.7515700946013],
            [-56.11305493513081, -34.75001905882338],
            [-56.115624828938145, -34.74845299802447],
            [-56.11976046222752, -34.74856283897553],
            [-56.120112936762695, -34.74173613158332],
            [-56.12268093016459, -34.73817918299772],
            [-56.124073471494704, -34.738664109598176],
            [-56.126984024973254, -34.73658142298826],
            [-56.126930043350946, -34.733540420488474],
            [-56.123728200275, -34.72990672516458],
            [-56.122846887580195, -34.72718246251223],
            [-56.12453968103145, -34.72254083705444],
            [-56.12452094593796, -34.71885194668147],
            [-56.1283154376612, -34.716493713362816],
            [-56.13201201125182, -34.71600509138147],
            [-56.13707157298468, -34.716221040398416],
            [-56.139033638011405, -34.71398014046367],
            [-56.14200610480777, -34.71386181638533],
            [-56.14933170263041, -34.719914564450654],
            [-56.155671295990956, -34.72179537974514],
            [-56.161264373155326, -34.719398277095316],
            [-56.16683741134819, -34.73066391146878],
            [-56.16745856350522, -34.73506499976462],
            [-56.16882283605629, -34.741422003149005],
            [-56.17169600525848, -34.74530696243366],
            [-56.17173888634158, -34.7495408181026],
            [-56.175337415309784, -34.75149125695755],
            [-56.176612064143505, -34.75532109198102],
            [-56.17926919731288, -34.75630462369173],
            [-56.17816986387881, -34.75992690397955],
            [-56.178850487567175, -34.76273283530782],
            [-56.18400696002685, -34.76321051262091],
            [-56.18743980793672, -34.764224140660815],
            [-56.1906051746949, -34.763372007674704],
            [-56.193484159657196, -34.7682850482559],
            [-56.18823228474415, -34.77239340788056],
            [-56.18830501855701, -34.7744348509266],
            [-56.19068282585834, -34.77626331703405],
            [-56.19132135063904, -34.78143252341594],
            [-56.19048578632122, -34.78751629660022],
            [-56.1915453949426, -34.78928076639608],
            [-56.189417792440175, -34.792321794291205],
            [-56.184988261902994, -34.79576644832979],
            [-56.18654200823542, -34.80033218367979],
            [-56.18619029771335, -34.80189938630712],
            [-56.182869898157946, -34.80531924546724],
            [-56.18573534183887, -34.80872092601161],
            [-56.183566675301265, -34.81155838276682],
            [-56.18586284855377, -34.812944277251646],
            [-56.18589648394523, -34.81610380353026],
            [-56.187843836771044, -34.81902588118012],
            [-56.18782055451888, -34.821565086664336],
            [-56.18528691259566, -34.82331622474696],
            [-56.18517079239148, -34.82580703895267],
            [-56.18207490815967, -34.829937648838474],
            [-56.18347585893805, -34.833442051945305],
            [-56.18129049912329, -34.8367564099227],
            [-56.18273008676092, -34.839762090588884],
            [-56.18602283122545, -34.842808402448746],
            [-56.18598052016942, -34.845011169101575],
            [-56.188731324832055, -34.84730398984023],
            [-56.176050084797346, -34.857767193974375],
            [-56.1513068299363, -34.876701198814665],
            [-56.1552493195258, -34.879287643082144],
            [-56.15248446955066, -34.88197696416801],
            [-56.13821936495768, -34.87374210802113],
            [-56.135221649232946, -34.87143970301493],
            [-56.134108481821855, -34.86592838167292],
            [-56.13621233624501, -34.865169713728314],
            [-56.14358547176655, -34.858799949720485],
            [-56.144425368566125, -34.85339007147569],
            [-56.1555693417354, -34.84654281972602],
            [-56.140975290238785, -34.82863898757976],
            [-56.140749436558, -34.824668243364314],
            [-56.1365195801725, -34.804491566815074],
            [-56.136210254563885, -34.79968616821347],
            [-56.12718140054952, -34.7986433167593],
            [-56.10904887573356, -34.78953315830744],
            [-56.10894539640213, -34.79050980575936],
            [-56.088553561762694, -34.78019189385294],
            [-56.08792975533626, -34.779177659423254],
          ],
        ],
      },
      properties: {
        GID: 34,
        MUNICIPIO: "D",
        SERIE: "BOA, BOB, BDD, BNC, BNB, BBC, BBD, BBB, BBA",
        LIMITES:
          "Arroyo Miguelete, Limite Departamental, Camino al Paso del Andaluz, Av. Jose Belloni, Av. Gral. Flores, Camino Corrales, Av. 8 de Octubre, Av. Dr. Luis A. de Herrera, Monte Caseros, Bvr. Jose Batlle y Ordo?ez.",
        AREA_HA: 8603.33,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.06003238399837, -34.86675580023249],
            [-56.05964348912551, -34.863169835425204],
            [-56.05647217976377, -34.86023185037971],
            [-56.056292635392424, -34.85601215421599],
            [-56.054401072756676, -34.852283191745784],
            [-56.05422197991961, -34.84953854926784],
            [-56.055161176514886, -34.8265016824112],
            [-56.05215778297603, -34.82169902155193],
            [-56.05307404921478, -34.81617373152396],
            [-56.05020175043665, -34.81218333298927],
            [-56.04942249774752, -34.80992772320726],
            [-56.04516402870577, -34.80575039632353],
            [-56.04100293567903, -34.80564697870609],
            [-56.04173146426884, -34.8030302017212],
            [-56.04017231404117, -34.8013479928271],
            [-56.04202976133488, -34.79883633432876],
            [-56.03894940833714, -34.79587147091577],
            [-56.04087245261231, -34.795066977945176],
            [-56.042899334695775, -34.79189019523753],
            [-56.03726975942011, -34.78683859218174],
            [-56.03696491296494, -34.78395858491554],
            [-56.03233755080523, -34.783752170962394],
            [-56.02932073311908, -34.78115745958528],
            [-56.02933347286954, -34.77728008912457],
            [-56.03306911146162, -34.7746231083301],
            [-56.03475387376127, -34.76937025005327],
            [-56.037063397414954, -34.767652377439326],
            [-56.038901613319524, -34.76383996975332],
            [-56.044496732341614, -34.76287402927411],
            [-56.04691309226175, -34.76044804784429],
            [-56.05011140029506, -34.76169272949399],
            [-56.05445527464305, -34.76057761195934],
            [-56.05936012556234, -34.76954375675742],
            [-56.062921612566264, -34.76911979520912],
            [-56.06643179280671, -34.76602910818263],
            [-56.07068304852587, -34.77282517107918],
            [-56.07541093390676, -34.77187456261501],
            [-56.07743102751239, -34.77493740621648],
            [-56.08792975533626, -34.779177659423254],
            [-56.088553561762694, -34.78019189385294],
            [-56.10894539640213, -34.79050980575936],
            [-56.10904887573356, -34.78953315830744],
            [-56.12718140054952, -34.7986433167593],
            [-56.136210254563885, -34.79968616821347],
            [-56.1365195801725, -34.804491566815074],
            [-56.140749436558, -34.824668243364314],
            [-56.140975290238785, -34.82863898757976],
            [-56.1555693417354, -34.84654281972602],
            [-56.144425368566125, -34.85339007147569],
            [-56.14358547176655, -34.858799949720485],
            [-56.13621233624501, -34.865169713728314],
            [-56.134108481821855, -34.86592838167292],
            [-56.135221649232946, -34.87143970301493],
            [-56.13216744257113, -34.873569558871914],
            [-56.12583493412892, -34.87335064651805],
            [-56.1227189092919, -34.87268526215272],
            [-56.12149662124726, -34.87235892986041],
            [-56.114735795592786, -34.87085599486915],
            [-56.107692430673076, -34.86994509438122],
            [-56.103104662962316, -34.87158535995622],
            [-56.09902565511745, -34.87228818195031],
            [-56.09363404918568, -34.8722476343717],
            [-56.08082568972998, -34.86986760126969],
            [-56.06982837053894, -34.870187002420785],
            [-56.06003238399837, -34.86675580023249],
          ],
        ],
      },
      properties: {
        GID: 35,
        MUNICIPIO: "F",
        SERIE: "BDA, BDB, BDC, BDE, BDF",
        LIMITES:
          "Arroyo Carrasco, Camino Carrasco, Pan de Azucar, Av. 8 de Octubre, Camino Corrales, Av. Gral. Flores, Av. Jose Belloni, Camino al Paso del Andaluz, Limite Departamental.",
        AREA_HA: 8514.36,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.121362996726845, -34.900366181569076],
            [-56.11586762306003, -34.89833259183702],
            [-56.11313854112013, -34.89862198154],
            [-56.109957239949516, -34.89735257531113],
            [-56.10375945197581, -34.89760816122234],
            [-56.09975074688004, -34.89841523277708],
            [-56.097799915771276, -34.89721939830142],
            [-56.0904844742155, -34.89560767824524],
            [-56.08580273521061, -34.89582816579611],
            [-56.08335820915493, -34.89784209628249],
            [-56.0821654288655, -34.90053382320842],
            [-56.077262948393724, -34.898285490810935],
            [-56.07350213073946, -34.89842623215945],
            [-56.07220362385622, -34.899587830540945],
            [-56.06765888222966, -34.900129322447164],
            [-56.06437861714672, -34.89974981233038],
            [-56.055266204920066, -34.89270600285526],
            [-56.051874522053446, -34.89093609723171],
            [-56.027490128823274, -34.87993837059259],
            [-56.030721368391795, -34.87977630220645],
            [-56.03471534057672, -34.878270507419835],
            [-56.03695965272909, -34.87233656928652],
            [-56.03929422412553, -34.871661086178015],
            [-56.04190036955992, -34.86887735594748],
            [-56.04713677073198, -34.867650949214976],
            [-56.051882659910824, -34.86959397040884],
            [-56.05817154023461, -34.86829964373328],
            [-56.06003238399837, -34.86675580023249],
            [-56.06982837053894, -34.870187002420785],
            [-56.08082568972998, -34.86986760126969],
            [-56.09363404918568, -34.8722476343717],
            [-56.09902565511745, -34.87228818195031],
            [-56.103104662962316, -34.87158535995622],
            [-56.107692430673076, -34.86994509438122],
            [-56.114735795592786, -34.87085599486915],
            [-56.12149662124726, -34.87235892986041],
            [-56.1227189092919, -34.87268526215272],
            [-56.12583493412892, -34.87335064651805],
            [-56.13216744257113, -34.873569558871914],
            [-56.135221649232946, -34.87143970301493],
            [-56.13821936495768, -34.87374210802113],
            [-56.15248446955066, -34.88197696416801],
            [-56.14758112258786, -34.88879971790814],
            [-56.1423762674719, -34.88687910078107],
            [-56.137848353997846, -34.88662325360243],
            [-56.12717212355579, -34.895041414429336],
            [-56.121362996726845, -34.900366181569076],
          ],
        ],
      },
      properties: {
        GID: 36,
        MUNICIPIO: "E",
        SERIE: "BCE, BCB, BCG, BCF, BCA, BCC, BCD",
        LIMITES:
          "Rio de la Plata, Bvr. Jose Batlle y Ordo?ez, Av. Italia, Av. Dr. Luis A. de Herrera, Av. 8 de Octubre, Pan de Azucar, Camino Carrasco, Arroyo Carrasco.",
        AREA_HA: 2683.4,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.121362996726845, -34.900366181569076],
            [-56.12717212355579, -34.895041414429336],
            [-56.137848353997846, -34.88662325360243],
            [-56.1423762674719, -34.88687910078107],
            [-56.14758112258786, -34.88879971790814],
            [-56.15248446955066, -34.88197696416801],
            [-56.1552493195258, -34.879287643082144],
            [-56.16318453149625, -34.88540765247271],
            [-56.16472875727447, -34.887895204593526],
            [-56.165548180157884, -34.88953330775282],
            [-56.160991525171305, -34.9310836338974],
            [-56.162338272162295, -34.93324466790758],
            [-56.16051459364947, -34.93741199301052],
            [-56.15851818746128, -34.93325752813928],
            [-56.158857646222025, -34.93188200498709],
            [-56.15731802000292, -34.92771700916184],
            [-56.156063364503524, -34.927845425736336],
            [-56.15051960598486, -34.92436028979768],
            [-56.15146259345903, -34.92313898668036],
            [-56.14529054733435, -34.92010876846331],
            [-56.147611461450936, -34.91915483727453],
            [-56.14836180819777, -34.91686539725541],
            [-56.14591196637253, -34.91301501823817],
            [-56.14248812531663, -34.91075776528171],
            [-56.13947060709619, -34.911892757887095],
            [-56.135556406981564, -34.91153308196428],
            [-56.13192427107912, -34.9123108763873],
            [-56.13005875027356, -34.91120914912694],
            [-56.13305423354762, -34.90850223512189],
            [-56.13105953071674, -34.90511588977564],
            [-56.128551161137246, -34.90628632785314],
            [-56.123428655585265, -34.90513026375874],
            [-56.12269085612847, -34.9016103447615],
            [-56.121362996726845, -34.900366181569076],
          ],
        ],
      },
      properties: {
        GID: 37,
        MUNICIPIO: "CH",
        SERIE: "ATB, AUA, AUB, AZA, BAB, BAA, AZB, AXA, AXB",
        LIMITES:
          "Rio de la Plata, Bvr. Jose Batlle y Ordo?ez, Av. Italia, Av. Dr. Luis A. de Herrera, Monte Caseros, Bvr, Gral. Artigas.",
        AREA_HA: 1194.85,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.160991525171305, -34.9310836338974],
            [-56.165548180157884, -34.88953330775282],
            [-56.16472875727447, -34.887895204593526],
            [-56.18164776163783, -34.88936549088643],
            [-56.18139847387728, -34.89066443677981],
            [-56.18612471745489, -34.891609016304976],
            [-56.188315826636774, -34.891047568456976],
            [-56.19778626187882, -34.89169076978859],
            [-56.198453499722916, -34.8945111640955],
            [-56.1976258294873, -34.89873911172935],
            [-56.21155674323587, -34.90295028816013],
            [-56.21468559197659, -34.90140308635159],
            [-56.22298425787444, -34.90596993676698],
            [-56.21729038340348, -34.90774104591423],
            [-56.2172880604551, -34.91153199007664],
            [-56.213383371761424, -34.91090409727587],
            [-56.20978398779896, -34.91239611741476],
            [-56.205269154435605, -34.91087904205998],
            [-56.201310790547545, -34.91067728499406],
            [-56.19890072331574, -34.91266822859042],
            [-56.19266521531551, -34.91311075751763],
            [-56.185862182819065, -34.91650778781378],
            [-56.18118523148646, -34.91509662428681],
            [-56.17386265514409, -34.91457281122355],
            [-56.171447800456185, -34.91550134979736],
            [-56.17071095615673, -34.91837641098884],
            [-56.17297527291974, -34.91980158909676],
            [-56.17142948629838, -34.92159660554807],
            [-56.17181363812974, -34.92541566609761],
            [-56.16634303607955, -34.926810071461496],
            [-56.160991525171305, -34.9310836338974],
          ],
        ],
      },
      properties: {
        GID: 38,
        MUNICIPIO: "B",
        SERIE:
          "AAA, ACA, AKA, AIA, AMA, APA, ARA, ASA, ATA, AVA, BEA, BFA, BJB, BKB.",
        LIMITES:
          "Rio de la Plata, Bulevar General Artigas, Monte Caseros, Nueva Palmira, Arenal Grande, Hocquart,  Avenida. de las Leyes, Panama.",
        AREA_HA: 1147.59,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.188731324832055, -34.84730398984023],
            [-56.19265621207751, -34.84658284995331],
            [-56.19611518939383, -34.8514697940637],
            [-56.199522561403, -34.852571667609496],
            [-56.202614887349384, -34.856557334077806],
            [-56.21003945565168, -34.85938070605666],
            [-56.21227755152741, -34.861661412205414],
            [-56.21603955719142, -34.863880255958],
            [-56.2162392145294, -34.86565668147391],
            [-56.21875392419629, -34.86866313223063],
            [-56.22286014044446, -34.86935194744806],
            [-56.22566980840236, -34.872740179569384],
            [-56.22050322537257, -34.87382531749034],
            [-56.21508875271231, -34.874131312350805],
            [-56.21287211534163, -34.87505264739019],
            [-56.205043977807186, -34.87984249338791],
            [-56.20192941677977, -34.88243503372361],
            [-56.198746010631915, -34.88403571174753],
            [-56.19833342694288, -34.887530742926785],
            [-56.20245322493702, -34.8879038100549],
            [-56.20220305462477, -34.89126151435427],
            [-56.20094171378752, -34.892640823707055],
            [-56.19778626187882, -34.89169076978859],
            [-56.188315826636774, -34.891047568456976],
            [-56.18612471745489, -34.891609016304976],
            [-56.18139847387728, -34.89066443677981],
            [-56.18164776163783, -34.88936549088643],
            [-56.16472875727447, -34.887895204593526],
            [-56.16318453149625, -34.88540765247271],
            [-56.1552493195258, -34.879287643082144],
            [-56.1513068299363, -34.876701198814665],
            [-56.176050084797346, -34.857767193974375],
            [-56.188731324832055, -34.84730398984023],
          ],
        ],
      },
      properties: {
        GID: 39,
        MUNICIPIO: "C",
        SERIE: "BPA, BPC, BGA, BQA, BQB, BNA, BMA, BMB, BKA, BLA, BJA, BLB",
        LIMITES:
          "Bahia, Arroyo Miguelete, Bvr. Jose Batlle y Ordo?ez, Monte Caseros, Nueva Palmira, Arenal Grande, Hocquart, Av. De Las Leyes, Panama.",
        AREA_HA: 1742.32,
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-56.202614887349384, -34.856557334077806],
            [-56.20848636831513, -34.85320941170127],
            [-56.22865295728853, -34.84230048593993],
            [-56.24235004266933, -34.83391579965941],
            [-56.249884029008705, -34.829703455288374],
            [-56.24866388178438, -34.82863319225332],
            [-56.25537138803227, -34.82399911072952],
            [-56.259526872485665, -34.82744133325581],
            [-56.262402482661, -34.82379495719094],
            [-56.264710938576215, -34.81710522696715],
            [-56.27133863296316, -34.818699155815914],
            [-56.28896169915715, -34.80966590924466],
            [-56.29451190578965, -34.80577434668787],
            [-56.31052390373336, -34.79777703020262],
            [-56.30840578148476, -34.79591055225506],
            [-56.31218981455701, -34.79480854130766],
            [-56.31570827753207, -34.79125333039984],
            [-56.31929750293829, -34.78496459280826],
            [-56.320643632160014, -34.78350393460168],
            [-56.32109626984469, -34.77850727797425],
            [-56.326114407319466, -34.77990035434885],
            [-56.33506484478289, -34.78152556127421],
            [-56.34614908572996, -34.78410527724903],
            [-56.34785644071967, -34.783568054590454],
            [-56.354618138519285, -34.785506234351544],
            [-56.356153397327446, -34.78769961503458],
            [-56.35501704578022, -34.791425937530626],
            [-56.35721761998076, -34.792263271456555],
            [-56.356646820504814, -34.79434426602767],
            [-56.36225508344715, -34.79599738104503],
            [-56.363190596970156, -34.79858850365973],
            [-56.373360280370925, -34.798556074745406],
            [-56.378879228374906, -34.79764399753636],
            [-56.382393205039236, -34.798331118067274],
            [-56.38821316610576, -34.79780517640924],
            [-56.38909702524342, -34.801064901793076],
            [-56.391703713477625, -34.80185729122616],
            [-56.394083181163424, -34.80421941786688],
            [-56.40099401549512, -34.80586991882427],
            [-56.40587866796003, -34.808162302635836],
            [-56.40473247594391, -34.80968647509363],
            [-56.40694972849235, -34.81166119934105],
            [-56.40712000561964, -34.81397843877494],
            [-56.41038609293159, -34.81716090140792],
            [-56.41751740980299, -34.82005374872026],
            [-56.41855939455975, -34.8224513484931],
            [-56.4221753605278, -34.82286167725161],
            [-56.42685209923218, -34.8269430646105],
            [-56.430723534281434, -34.82756420825623],
            [-56.43117164196383, -34.829837082652105],
            [-56.428944104702985, -34.833139302085996],
            [-56.424774440332065, -34.83774228577789],
            [-56.420296646727124, -34.83827920420716],
            [-56.418776778186036, -34.83970689887696],
            [-56.41279876244602, -34.84015536795322],
            [-56.40718181835884, -34.842122872607376],
            [-56.40132049004081, -34.842117381902135],
            [-56.39971374082068, -34.84350079250559],
            [-56.39459798057441, -34.84394103534761],
            [-56.38960104915908, -34.84635619545247],
            [-56.38913517627767, -34.849387647025964],
            [-56.38497891046049, -34.85207887430407],
            [-56.381831001236435, -34.85209956878657],
            [-56.38097447386527, -34.85711350462704],
            [-56.376127444643316, -34.85881639521692],
            [-56.376172356005334, -34.86094038788646],
            [-56.373866870542486, -34.86260450962694],
            [-56.36763011024488, -34.86310639989046],
            [-56.36790893126327, -34.86568071051189],
            [-56.36511706860344, -34.86639486360229],
            [-56.36234694796392, -34.86550108798653],
            [-56.35958409012487, -34.86706175141608],
            [-56.35663043494864, -34.86644734224567],
            [-56.35594721633539, -34.86962800908582],
            [-56.35003292176748, -34.86824658214709],
            [-56.34634396949472, -34.871299517165745],
            [-56.343362873593776, -34.87026617822995],
            [-56.335701447880226, -34.87479695441865],
            [-56.33237896807825, -34.883595306240785],
            [-56.33372105535737, -34.88667502335701],
            [-56.33165026759102, -34.88792317996969],
            [-56.33140331612862, -34.89115175061484],
            [-56.32905339196418, -34.89092204431261],
            [-56.32488186728193, -34.89230698913081],
            [-56.32482969156318, -34.893527485314166],
            [-56.32102413894261, -34.89455820452464],
            [-56.319418980237145, -34.89672912540836],
            [-56.3164346473035, -34.898485727041155],
            [-56.31588555325656, -34.904838069260286],
            [-56.31095361469289, -34.90528793090889],
            [-56.3088964477873, -34.90173275232875],
            [-56.311400484463654, -34.90105441944634],
            [-56.30919377704182, -34.89696918782517],
            [-56.305888799143766, -34.896152177484936],
            [-56.30171689152918, -34.893653161034834],
            [-56.295768295868946, -34.893271295958456],
            [-56.293097022504824, -34.89498451813817],
            [-56.290051967856826, -34.894831040148574],
            [-56.28798473320572, -34.896394443339744],
            [-56.28987682028321, -34.89923108932071],
            [-56.28672578481963, -34.900046758232065],
            [-56.285003365610386, -34.89928392251322],
            [-56.28590441086258, -34.896639022595664],
            [-56.280495860933115, -34.89500745110546],
            [-56.27737020182571, -34.89705850188231],
            [-56.278336283207274, -34.899656979403694],
            [-56.27605883971239, -34.902020777596434],
            [-56.271712419581654, -34.89824268655264],
            [-56.26892958330323, -34.899284607134675],
            [-56.26818023814557, -34.90188529464383],
            [-56.26262486412316, -34.90275821288203],
            [-56.260254607008896, -34.903824490987766],
            [-56.26059637552719, -34.90608676973517],
            [-56.257383889096666, -34.905931968181115],
            [-56.258213097624285, -34.899526780824885],
            [-56.2559290373635, -34.89953702627483],
            [-56.25349095879264, -34.89681920046911],
            [-56.24468502398842, -34.895495177121546],
            [-56.24402896441981, -34.88972308373362],
            [-56.24484567256422, -34.88496847664699],
            [-56.2438447142278, -34.882818715020925],
            [-56.24685851667784, -34.88155317421234],
            [-56.247345971114804, -34.87802002951204],
            [-56.24143016644415, -34.87609318125225],
            [-56.23827193708613, -34.8770354509348],
            [-56.235913091701775, -34.87959855415957],
            [-56.2328294764278, -34.878690792615096],
            [-56.22982522991617, -34.87975828704638],
            [-56.22811011628965, -34.87775701542467],
            [-56.22566980840236, -34.872740179569384],
            [-56.22286014044446, -34.86935194744806],
            [-56.21875392419629, -34.86866313223063],
            [-56.2162392145294, -34.86565668147391],
            [-56.21603955719142, -34.863880255958],
            [-56.21227755152741, -34.861661412205414],
            [-56.21003945565168, -34.85938070605666],
            [-56.202614887349384, -34.856557334077806],
          ],
        ],
      },
      properties: {
        GID: 40,
        MUNICIPIO: "A",
        SERIE:
          "BXA, BXC, BXB, BVC, BTA, BTC, BVB, BVA, BUB, BUA, BSA, BTB, BTD",
        LIMITES:
          "Arroyo Miguelete, Carlos M. de Pena, Camino Lecocq, Camino del Fortin, Camino Tomkinson, Camino de la Granja, Camino Luis E. Perez, Camino los Camalotes, Av. De los Deportes, Arroyo Melilla (Pista de Regatas), Rio Santa Lucia, Rio de la Plata, Bahia",
        AREA_HA: 14380,
      },
    },
  ],
};

const filterGroup = document.getElementById("filter-group");
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-56.22407383481464, -34.852208273399015],
  zoom: 11.5,
});

map.on("load", () => {
  map.addSource("ferias", {
    type: "geojson",
    data: ferias,
  });

  // Aca se agrega un municipio por source
  for (const municipio of municipios.features) {
    map.addSource(municipio.properties.MUNICIPIO, {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [municipio],
      },
    });
  }

  // map.addSource("municipios", {
  //   type: "geojson",
  //   data: municipios,
  // });

  map.loadImage(
    "https://img.icons8.com/material-rounded/24/ef476f/marker.png",
    (error, image) => {
      if (error) throw error;
      map.addImage("MARTES", image);
    }
  );
  map.loadImage(
    "https://img.icons8.com/material-rounded/24/ffd166/marker.png",
    (error, image) => {
      if (error) throw error;
      map.addImage("MIERCOLES", image);
    }
  );
  map.loadImage(
    "https://img.icons8.com/material-rounded/24/06d6a0/marker.png",
    (error, image) => {
      if (error) throw error;
      map.addImage("JUEVES", image);
    }
  );
  map.loadImage(
    "https://img.icons8.com/material-rounded/24/118ab2/marker.png",
    (error, image) => {
      if (error) throw error;
      map.addImage("VIERNES", image);
    }
  );
  map.loadImage(
    "https://img.icons8.com/material-rounded/24/073b4c/marker.png",
    (error, image) => {
      if (error) throw error;
      map.addImage("SABADO", image);
    }
  );
  map.loadImage(
    "https://img.icons8.com/material-rounded/24/9d4edd/marker.png",
    (error, image) => {
      if (error) throw error;
      map.addImage("DOMINGO", image);
    }
  );

  const popUpGenerator = feria => {
    return `<div class="popUp">
    <h3 class="popUpTitle">${feria.title}</h3> 
    <p class="popUpDay"><i class="fa-solid fa-calendar-day"></i> ${feria.dia}</p>
    <p class="popUpDescription"><i class="fa-solid fa-location-dot"></i> ${feria.description}</p>  
    <p class="popUpLink"><a href="https://afu.uy/feriantes/"><i class="fa-solid fa-store"></i> Ver feriantes</a></p>
  </div>`;
  };
  const colorPicker = municipio => {
    //console.log("COLORCITO", municipio);
    switch (municipio) {
      case "A":
        return "#b9fbc0";

        break;
      case "B":
        return "#98f5e1";
        break;
      case "C":
        return "#8eecf5";
        break;
      case "CH":
        return "#90dbf4";
        break;
      case "D":
        return "#a3c4f3";
        break;
      case "E":
        return "#cfbaf0";
        break;
      case "F":
        return "#f1c0e8";
        break;
      case "G":
        return "#ffcfd2";
        break;
    }
  };
  //poligonos municipios

  for (const municipio of municipios.features) {
    // Descomentar aca si se quiere pintar
    //console.log(colorete);
    map.addLayer({
      id: municipio.properties.MUNICIPIO,
      type: "fill",
      source: municipio.properties.MUNICIPIO, // reference the data source
      layout: {},
      paint: {
        "fill-color": colorPicker(municipio.properties.MUNICIPIO), // blue color fill
        "fill-opacity": 0.3,
      },
    });
    map.addLayer({
      id: `BORDE${municipio.properties.MUNICIPIO}`,
      type: "line",
      source: municipio.properties.MUNICIPIO,
      layout: {},
      paint: {
        "line-color": "#000",
        "line-width": 3,
      },
    });
  }

  //marcadores ferias

  for (const feria of ferias.features) {
    const day = feria.properties.dia;
    const layerID = day;
    // Add a layer for this symbol type if it hasn't been added already.
    if (!map.getLayer(layerID)) {
      map.addLayer({
        id: layerID,
        type: "symbol",
        source: "ferias",
        layout: {
          "icon-image": day,
          "icon-allow-overlap": true,
        },
        filter: ["==", "dia", day],
      });
      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = layerID;
      input.checked = true;
      input.classList.add(day.toLocaleLowerCase());
      filterGroup.appendChild(input);
      const label = document.createElement("label");
      label.setAttribute("for", layerID);
      label.textContent = day;
      label.classList.add(day.toLocaleLowerCase());
      filterGroup.appendChild(label);
      input.addEventListener("change", e => {
        map.setLayoutProperty(
          layerID,
          "visibility",
          e.target.checked ? "visible" : "none"
        );
      });
    }

    map.on("click", feria.properties.dia, e => {
      const coordinates = e.features[0].geometry.coordinates.slice();

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(popUpGenerator(e.features[0].properties))
        .addTo(map);

      const btnComercios = document.getElementById("btnComercios");
      btnComercios.addEventListener("click", e => {
        console.log("Button clicked");
      });
    });
  }
});

//menu

const hideMenu = () => {
  const days = document.getElementById("filter-group");
  if (days.style.display === "none") {
    days.style.display = "block";
  } else {
    days.style.display = "none";
  }
};
