// BASE DE DADES D'ESPORTS AMB ETIQUETES
const sportsDatabase = [
    { nom: "Futbol", etiquetes: ["col·lectiu", "terrestre", "exterior", "cooperacio-oposicio", "moderat", "tot_any", "baix", "alta", "mixt", "moderat", "infantil", "adolescent", "adult jove", "adult", "normal", "alt"], descripcio: "Esport d'equip que combina resistència, velocitat i tècnica. Es juga en camps de gespa natural o artificial amb dos equips d'11 jugadors.", icona: "⚽" },
    { nom: "Bàsquet", etiquetes: ["col·lectiu", "terrestre", "interior", "cooperacio-oposicio", "moderat", "tot_any", "baix", "alta", "mixt", "moderat", "infantil", "adolescent", "adult jove", "adult", "normal", "alt"], descripcio: "Esport d'equip dinàmic que desenvolupa coordinació, velocitat i resistència. Es juga en pista coberta amb 5 jugadors per equip.", icona: "🏀" },
    { nom: "Tennis", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "mitja", "alta", "mixt", "moderat", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport individual o de parelles que combina agilitat, coordinació i estratègia. Requereix bona forma física i concentració mental.", icona: "🎾" },
    { nom: "Fitness", etiquetes: ["individual", "terrestre", "interior", "sense-oposicio", "sense-contacte", "tot_any", "mitja", "suau", "forca", "baix", "adolescent", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Activitat física variada que inclou exercicis de força, resistència i flexibilitat. Es practica en gimnasos amb màquines i pesos.", icona: "💪" },
    { nom: "Ciclisme en carretera", etiquetes: ["individual", "terrestre", "exterior", "sense-oposicio", "sense-contacte", "tot_any", "alt", "alta", "resistencia", "moderat", "adult jove", "adult", "normal"], descripcio: "Esport de resistència que es practica amb bicicleta en carreteres. Desenvolupa la capacitat cardiovascular i la força de les cames.", icona: "🚴" },
    { nom: "Voleibol", etiquetes: ["col·lectiu", "terrestre", "interior", "cooperacio-oposicio", "sense-contacte", "tot_any", "baix", "alta", "agilitat", "baix", "infantil", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport d'equip que es juga amb 6 jugadors per banda. Desenvolupa coordinació, agilitat i treball en equip sense contacte físic.", icona: "🏐" },
    { nom: "Natació", etiquetes: ["individual", "aquatic", "interior", "sense-oposicio", "sense-contacte", "tot_any", "mitja", "alta", "resistencia", "baix", "infantil", "adolescent", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Esport complet que treballa tots els grups musculars. És de baix impacte i ideal per a persones de totes les edats i condicions físiques.", icona: "🏊" },
    { nom: "Esquí alpí", etiquetes: ["individual", "muntanya", "exterior", "sense-oposicio", "sense-contacte", "hivern", "alt", "alta", "agilitat", "alt", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport d'hivern que es practica en muntanyes nevades. Requereix equilibri, força i tècnica per descendir pistes de diferents dificultats.", icona: "⛷️" },
    { nom: "Handbol", etiquetes: ["col·lectiu", "terrestre", "interior", "cooperacio-oposicio", "contacte", "tot_any", "baix", "alta", "mixt", "moderat", "infantil", "adolescent", "adult jove", "adult", "normal", "alt"], descripcio: "Esport d'equip dinàmic amb contacte físic permès. Es juga amb 7 jugadors per equip i combina velocitat, força i estratègia.", icona: "🤾" },
    { nom: "Culturisme", etiquetes: ["individual", "terrestre", "interior", "sense-oposicio", "sense-contacte", "tot_any", "mitja", "alta", "forca", "baix", "adult jove", "adult", "normal", "alt"], descripcio: "Disciplina que busca el desenvolupament muscular simètric i harmònic. Requereix entrenament amb pesos i una alimentació específica.", icona: "🏋️" },
    { nom: "Esquí de fons", etiquetes: ["individual", "muntanya", "exterior", "sense-oposicio", "sense-contacte", "hivern", "alt", "alta", "resistencia", "moderat", "adult jove", "adult", "normal"], descripcio: "Esport d'hivern de resistència que es practica sobre terreny nevat relativament pla. Treballa tot el cos i desenvolupa gran capacitat aeròbica.", icona: "⛷️" },
    { nom: "Planxa de neu", etiquetes: ["individual", "muntanya", "exterior", "sense-oposicio", "sense-contacte", "hivern", "alt", "alta", "agilitat", "alt", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport d'hivern similar a l'surf però sobre neu. Requereix equilibri, coordinació i tècnica per baixar pistes nevades amb una taula.", icona: "🏂" },
    { nom: "Patinatge artístic", etiquetes: ["individual", "terrestre", "interior", "sense-oposicio", "sense-contacte", "hivern", "mitja", "alta", "agilitat", "moderat", "infantil", "adolescent", "adult jove", "normal"], descripcio: "Disciplina que combina elements tècnics i artístics sobre gel. Requereix flexibilitat, força i expressió corporal amb gran musicalitat.", icona: "⛸️" },
    { nom: "Patinatge de velocitat", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "hivern", "mitja", "alta", "agilitat", "moderat", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport de velocitat sobre gel que desenvolupa potència de cames i capacitat anaeròbica. Les curses són de diferents distàncies.", icona: "⛸️" },
    { nom: "Futbol sala", etiquetes: ["col·lectiu", "terrestre", "interior", "cooperacio-oposicio", "moderat", "tot_any", "baix", "alta", "mixt", "moderat", "infantil", "adolescent", "adult jove", "adult", "normal", "alt"], descripcio: "Variant del futbol que es juga en pista coberta amb 5 jugadors. És més dinàmic i tècnic, amb més contacte amb la pilota.", icona: "⚽" },
    { nom: "Rugbi", etiquetes: ["col·lectiu", "terrestre", "exterior", "cooperacio-oposicio", "contacte", "tot_any", "baix", "alta", "forca", "alt", "adolescent", "adult jove", "adult", "alt"], descripcio: "Esport d'equip de contacte que requereix força, resistència i valentia. Es juga amb 15 jugadors per equip i combina estratègia física.", icona: "🏉" },
    { nom: "Senderisme", etiquetes: ["individual", "muntanya", "exterior", "sense-oposicio", "sense-contacte", "tot_any", "baix", "suau", "resistencia", "baix", "infantil", "adolescent", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Activitat de caminar per senderes de muntanya o natura. És accessible, relaxant i permet gaudir del paisatge mentre s'exercita.", icona: "🥾" },
    { nom: "Waterpolo", etiquetes: ["col·lectiu", "aquatic", "interior", "cooperacio-oposicio", "contacte", "tot_any", "mitja", "alta", "resistencia", "moderat", "adolescent", "adult jove", "adult", "normal", "alt"], descripcio: "Esport aquàtic d'equip amb contacte físic. Es juga en piscina amb 7 jugadors i requereix gran resistència i habilitat natatòria.", icona: "🤽" },
    { nom: "Marxa nòrdica", etiquetes: ["individual", "terrestre", "exterior", "sense-oposicio", "sense-contacte", "tot_any", "baix", "suau", "resistencia", "baix", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Caminar amb bastons especials que involucren tot el cos. És de baix impacte, ideal per persones grans i de totes les condicions.", icona: "🚶" },
    { nom: "Voleibol platja", etiquetes: ["col·lectiu", "terrestre", "exterior", "cooperacio-oposicio", "sense-contacte", "estiu", "baix", "alta", "agilitat", "baix", "adolescent", "adult jove", "adult", "normal"], descripcio: "Variant del voleibol que es juga a la sorra amb 2 jugadors per equip. És més físic i requereix gran agilitat i resistència.", icona: "🏖️" },
    { nom: "Escalada", etiquetes: ["individual", "muntanya", "interior", "sense-oposicio", "sense-contacte", "tot_any", "mitja", "alta", "forca", "alt", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport que consisteix a pujar parets naturals o artificials. Desenvolupa força, resistència i capacitat de resolució de problemes.", icona: "🧗" },
    { nom: "Cursa de muntanya", etiquetes: ["individual", "muntanya", "exterior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "resistencia", "moderat", "adult jove", "adult", "normal"], descripcio: "Córrer per terrenys muntanyosos amb desnivells importants. Requereix resistència cardiovascular i força de cames.", icona: "🏃" },
    { nom: "Golf", etiquetes: ["individual", "terrestre", "exterior", "sense-oposicio", "sense-contacte", "tot_any", "alt", "suau", "agilitat", "baix", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Esport de precisió i concentració que es juga en camps amplis. Requereix tècnica, paciència i control mental més que força física.", icona: "⛳" },
    { nom: "Alpinisme", etiquetes: ["individual", "muntanya", "exterior", "sense-oposicio", "sense-contacte", "estiu", "alt", "alta", "resistencia", "alt", "adult jove", "adult", "normal"], descripcio: "Escalada de muntanyes d'alta altitud que combina tècnica d'escalada i resistència extrema. Requereix experiència i preparació.", icona: "🏔️" },
    { nom: "Pàdel", etiquetes: ["col·lectiu", "terrestre", "interior", "cooperacio-oposicio", "sense-contacte", "tot_any", "mitja", "alta", "agilitat", "baix", "adolescent", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Esport de raqueta que es juga per parelles en pista tancada. És social, accessible i combina tècnica amb estratègia.", icona: "🎾" },
    { nom: "Surf", etiquetes: ["individual", "aquatic", "exterior", "sense-oposicio", "sense-contacte", "estiu", "mitja", "alta", "agilitat", "alt", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport aquàtic de lliscar sobre les onades amb una taula. Requereix equilibri, força i lectura del mar.", icona: "🏄" },
    { nom: "Tennis de taula", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "agilitat", "baix", "infantil", "adolescent", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Esport de raqueta ràpid i tècnic que desenvolupa reflexos i coordinació ull-mà. Accessible i es pot jugar a qualsevol edat.", icona: "🏓" },
    { nom: "Piragüisme", etiquetes: ["individual", "aquatic", "exterior", "sense-oposicio", "sense-contacte", "estiu", "mitja", "alta", "resistencia", "moderat", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport aquàtic de remar en canoa o caiac. Desenvolupa força del tren superior i resistència cardiovascular.", icona: "🛶" },
    { nom: "Esquaix", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "mitja", "alta", "agilitat", "baix", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport de raqueta molt intens que es juga en pista tancada. Requereix agilitat, velocitat i gran resistència cardiovascular.", icona: "🎾" },
    { nom: "Rem", etiquetes: ["col·lectiu", "aquatic", "exterior", "cooperacio", "sense-contacte", "estiu", "mitja", "alta", "resistencia", "baix", "adolescent", "adult jove", "adult", "normal"], descripcio: "Esport aquàtic d'equip que es practica en barques llargues. Desenvolupa força, coordinació i sincronització en equip.", icona: "🚣" },
    { nom: "Bàdminton", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "agilitat", "baix", "infantil", "adolescent", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Esport de raqueta amb volant que requereix agilitat i reflexos ràpids. És accessible i es pot jugar recreativament o competitiva.", icona: "🏸" },
    { nom: "Ràfting", etiquetes: ["col·lectiu", "aquatic", "exterior", "cooperacio", "sense-contacte", "estiu", "alt", "alta", "mixt", "alt", "adolescent", "adult jove", "adult", "normal"], descripcio: "Navegació per rius amb ràpids en bots inflables. És emocionant, requereix treball en equip i gestió del risc.", icona: "🚣" },
    { nom: "Boxa", etiquetes: ["individual", "terrestre", "interior", "oposicio", "contacte", "tot_any", "mitja", "alta", "mixt", "moderat", "adolescent", "adult jove", "adult", "normal", "alt"], descripcio: "Esport de combat que desenvolupa força, velocitat i estratègia. Requereix disciplina, tècnica i bona condició física.", icona: "🥊" },
    { nom: "Vela esportiva", etiquetes: ["individual", "aquatic", "exterior", "sense-oposicio", "sense-contacte", "estiu", "alt", "suau", "agilitat", "moderat", "adult jove", "adult", "normal"], descripcio: "Navegació amb veler que combina coneixement tècnic, estratègia i lectura del vent. És relaxant però requereix concentració.", icona: "⛵" },
    { nom: "Judo", etiquetes: ["individual", "terrestre", "interior", "oposicio", "contacte", "tot_any", "mitja", "alta", "mixt", "moderat", "infantil", "adolescent", "adult jove", "adult", "baix", "normal", "alt"], descripcio: "Art marcial japonesa que ensenya tècniques de projecció i immobilització. Desenvolupa disciplina, respecte i habilitats d'autodefensa.", icona: "🥋" },
    { nom: "Karate", etiquetes: ["individual", "terrestre", "interior", "oposicio", "contacte", "tot_any", "mitja", "alta", "mixt", "moderat", "infantil", "adolescent", "adult jove", "adult", "baix", "normal", "alt"], descripcio: "Art marcial que combina cops de puny i peu amb kata (formes). Desenvolupa disciplina, concentració i coordinació.", icona: "🥋" },
    { nom: "Taekwondo", etiquetes: ["individual", "terrestre", "interior", "oposicio", "contacte", "tot_any", "mitja", "alta", "agilitat", "moderat", "infantil", "adolescent", "adult jove", "adult", "baix", "normal", "alt"], descripcio: "Art marcial coreana especialitzada en cops de peu acrobàtics. Desenvolupa flexibilitat, velocitat i força explosiva.", icona: "🥋" },
    { nom: "Arts marcials generals", etiquetes: ["individual", "terrestre", "interior", "oposicio", "contacte", "tot_any", "mitja", "alta", "mixt", "moderat", "infantil", "adolescent", "adult jove", "adult", "baix", "normal", "alt"], descripcio: "Conjunt de disciplines de combat que ensenyen tècniques d'autodefensa, disciplina mental i desenvolupament físic complet.", icona: "🥋" },
    { nom: "Halterofília", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "mitja", "alta", "forca", "moderat", "adult jove", "adult", "normal", "alt"], descripcio: "Esport de força que consisteix a aixecar el màxim pes possible. Desenvolupa potència explosiva i força màxima.", icona: "🏋️" },
    { nom: "Curses de fons", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "resistencia", "baix", "adult jove", "adult", "baix", "normal"], descripcio: "Córrer distàncies llargues (més de 5km) que desenvolupa resistència aeròbica. És accessible i es pot practicar en qualsevol lloc.", icona: "🏃" },
    { nom: "Curses de mig-fons", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "resistencia", "baix", "adolescent", "adult jove", "adult", "baix", "normal"], descripcio: "Curses de distància mitjana (800m-3000m) que combinen velocitat i resistència. Requereix estratègia de cursa.", icona: "🏃" },
    { nom: "Curses d'obstacles", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "mitja", "alta", "mixt", "moderat", "adult jove", "adult", "normal"], descripcio: "Curses amb obstacles físics que requereixen força, agilitat i resistència. Són desafiants i divertides.", icona: "🏃" },
    { nom: "Cursa amb tanques", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "agilitat", "moderat", "adolescent", "adult jove", "adult", "normal"], descripcio: "Curses de velocitat amb tanques que desenvolupen coordinació, ritme i potència de cames. Requereix tècnica específica.", icona: "🏃" },
    { nom: "Curses de velocitat", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "agilitat", "baix", "adolescent", "adult jove", "adult", "baix", "normal"], descripcio: "Curses curtes (100m-400m) que desenvolupen velocitat pura i potència explosiva. Són intenses però breus.", icona: "🏃" },
    { nom: "Marató", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "resistencia", "baix", "adult jove", "adult", "baix", "normal"], descripcio: "Cursa de 42km que requereix entrenament prolongat i gran resistència mental i física. És un desafiament personal.", icona: "🏃" },
    { nom: "Marxa", etiquetes: ["individual", "terrestre", "exterior", "oposicio", "sense-contacte", "tot_any", "baix", "suau", "resistencia", "baix", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Caminar atlètic amb tècnica específica. És de baix impacte i accessible, ideal per persones de mitjana edat.", icona: "🚶" },
    { nom: "Break dance", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "baix", "alta", "agilitat", "moderat", "infantil", "adolescent", "adult jove", "baix", "normal"], descripcio: "Dansa urbana acrobàtica que requereix força, flexibilitat i creativitat. Combina moviments atlètics amb expressió artística.", icona: "🕺" },
    { nom: "Dansa competitiva", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "mitja", "alta", "agilitat", "baix", "infantil", "adolescent", "adult jove", "adult", "baix", "normal"], descripcio: "Diferents estils de dansa en format competitiu. Desenvolupa coordinació, expressió corporal i musicalitat.", icona: "💃" },
    { nom: "Gimnàstica artística", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "mitja", "alta", "agilitat", "moderat", "infantil", "adolescent", "adult jove", "baix", "normal"], descripcio: "Disciplina que combina força, flexibilitat i acrobàcies en diferents aparells. Requereix anys d'entrenament.", icona: "🤸" },
    { nom: "Aeròbic", etiquetes: ["individual", "terrestre", "interior", "sense-oposicio", "sense-contacte", "tot_any", "baix", "suau", "resistencia", "baix", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Exercici cardiovascular amb música i moviments coreografiats. És divertit, social i millora la resistència.", icona: "🏃" },
    { nom: "Parapent", etiquetes: ["individual", "aeri", "exterior", "sense-oposicio", "sense-contacte", "estiu", "alt", "suau", "agilitat", "alt", "adult jove", "adult", "normal"], descripcio: "Vol lliure amb paracaigudes especial que permet planear llargues distàncies. Requereix formació i condicions meteorològiques adequades.", icona: "🪂" },
    { nom: "Ala delta", etiquetes: ["individual", "aeri", "exterior", "sense-oposicio", "sense-contacte", "estiu", "alt", "suau", "agilitat", "alt", "adult jove", "adult", "normal"], descripcio: "Vol lliure amb estructura rígida triangular. Ofereix sensació de vol i vistes espectaculars amb cert risc.", icona: "🪂" },
    { nom: "Aviació ultralleugera", etiquetes: ["individual", "aeri", "exterior", "sense-oposicio", "sense-contacte", "tot_any", "alt", "suau", "agilitat", "alt", "adult jove", "adult", "normal"], descripcio: "Pilotar avions ultralleugers que requereix llicència específica. És emocionant però requereix formació tècnica.", icona: "✈️" },
    { nom: "Salts", etiquetes: ["individual", "terrestre", "interior", "oposicio", "sense-contacte", "tot_any", "mitja", "alta", "agilitat", "moderat", "infantil", "adolescent", "adult jove", "baix", "normal"], descripcio: "Atletisme de salts (alçada, llargada, perxa) que desenvolupa potència explosiva i tècnica. Requereix coordinació precisa.", icona: "🏃" },
    { nom: "Descens de BTT", etiquetes: ["individual", "muntanya", "exterior", "oposicio", "sense-contacte", "tot_any", "alt", "alta", "agilitat", "alt", "adolescent", "adult jove", "adult", "normal"], descripcio: "Baixar muntanyes amb bicicleta per terrenys tècnics i ràpids. És emocionant però requereix tècnica i gestió del risc.", icona: "🚵" },
    { nom: "Ciclisme tot terreny (BTT)", etiquetes: ["individual", "muntanya", "exterior", "sense-oposicio", "sense-contacte", "tot_any", "mitja", "alta", "resistencia", "moderat", "adult jove", "adult", "normal"], descripcio: "Ciclisme per camins i muntanyes que combina resistència i tècnica. Permet gaudir de la natura mentre s'exercita.", icona: "🚵" },
    { nom: "Ball de saló", etiquetes: ["col·lectiu", "terrestre", "interior", "cooperacio", "contacte", "tot_any", "mitja", "suau", "agilitat", "baix", "adult jove", "adult", "gent gran", "baix", "normal", "alt"], descripcio: "Dansa en parella de diferents estils (vals, tango, salsa). És social, elegant i desenvolupa coordinació i musicalitat.", icona: "💃" },
    { nom: "Hoquei sobre patins", etiquetes: ["col·lectiu", "terrestre", "interior", "cooperacio-oposicio", "contacte", "tot_any", "mitja", "alta", "agilitat", "alt", "infantil", "adolescent", "adult jove", "adult", "normal", "alt"], descripcio: "Esport d'equip sobre patins que combina velocitat, tècnica i contacte físic. És dinàmic i requereix bona coordinació.", icona: "🏒" }
];

// PREGUNTES DEL QÜESTIONARI
const questions = [
    {
        id: 1,
        question: "Prefereixes practicar esport de manera individual o en grup?",
        options: [
            { text: "Individual", tags: ["individual"] },
            { text: "Col·lectiu", tags: ["col·lectiu"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 2,
        question: "T'agrada la competició i el desafiament?",
        options: [
            { text: "Sí, m'encanta", tags: ["oposicio"] },
            { text: "No és la meva prioritat, però no em desagrada", tags: ["cooperacio-oposicio"] },
            { text: "No, prefereixo gaudir de l'esport sense competir", tags: ["sense-oposicio", "cooperacio"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 3,
        question: "En quin entorn busques practicar esport?",
        options: [
            { text: "Aquàtic (natació, surf, piragüisme…)", tags: ["aquatic"] },
            { text: "Terrestre (futbol, atletisme, ciclisme…)", tags: ["terrestre"] },
            { text: "Muntanya (senderisme, escalada, ciclisme de muntanya…)", tags: ["muntanya"] },
            { text: "Aeri (parapent, ala delta, aviació ultralleugera…)", tags: ["aeri"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 4,
        question: "Segons la relació amb l'adversari, quina prefereixes?",
        conditional: true,
        optionsIndividual: [
            { text: "D'oposició directa (judo, tennis…)", tags: ["oposicio"] },
            { text: "Sense oposició (atletisme, natació individual…)", tags: ["sense-oposicio"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        optionsCol·lectiu: [
            { text: "Cooperació (rem, sincronització en natació…)", tags: ["cooperacio"] },
            { text: "Cooperació-oposició (bàsquet, handbol…)", tags: ["cooperacio-oposicio"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        options: [
            { text: "D'oposició directa (judo, tennis…)", tags: ["oposicio"] },
            { text: "Cooperació (rem, sincronització en natació…)", tags: ["cooperacio"] },
            { text: "Cooperació-oposició (bàsquet, handbol…)", tags: ["cooperacio-oposicio"] },
            { text: "Sense oposició (atletisme, natació individual…)", tags: ["sense-oposicio"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 5,
        question: "Quin contacte amb altres participants prefereixes?",
        options: [
            { text: "De contacte (rugbi, boxa…)", tags: ["contacte"] },
            { text: "Sense contacte (tir amb arc, golf…)", tags: ["sense-contacte"] },
            { text: "Contacte moderat (bàsquet, handbol…)", tags: ["moderat"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 6,
        question: "Quan vols que el teu esport es pugui practicar?",
        options: [
            { text: "D'hivern (esquí, snowboard, patinatge sobre gel…)", tags: ["hivern"] },
            { text: "D'estiu (natació, vòlei platja…)", tags: ["estiu"] },
            { text: "Tot l'any (arts marcials, futbol sala…)", tags: ["tot_any"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 7,
        question: "Quin tipus de cost estàs disposat/da a assumir per practicar esport?",
        options: [
            { text: "Cost baix (poc material o activitats gratuïtes)", tags: ["baix"] },
            { text: "Cost mitjà (equipament moderat)", tags: ["mitja"] },
            { text: "Cost alt (equipament car o activitats que requereixen inversió significativa)", tags: ["alt"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 8,
        question: "Quin nivell d'esforç físic prefereixes en l'esport?",
        options: [
            { text: "Suau (golf, ioga…)", tags: ["suau"] },
            { text: "Moderat (futbol, ciclisme…)", tags: ["alta"] },
            { text: "Alt (running intens, escalada…)", tags: ["alta"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 9,
        question: "Quina capacitat física prefereixes potenciar?",
        options: [
            { text: "Força (millorar potència i musculatura)", tags: ["forca"] },
            { text: "Resistència (augmentar la capacitat de mantenir l'esforç)", tags: ["resistencia"] },
            { text: "Agilitat (millorar rapidesa, coordinació i moviment)", tags: ["agilitat"] },
            { text: "Mixt (combinació de les habilitats anteriors)", tags: ["mixt"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 10,
        question: "Quin nivell de risc prefereixes en l'esport?",
        options: [
            { text: "Baix (natació, caminar, tir amb arc…)", tags: ["baix"] },
            { text: "Moderat (futbol, bàsquet, ciclisme…)", tags: ["moderat"] },
            { text: "Alt (escalada, ràfting, esquí…)", tags: ["alt"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 11,
        question: "Quina disponibilitat tens per practicar esport?",
        options: [
            { text: "De 15 a 30 minuts, de 3 a 4 vegades per setmana", tags: [] },
            { text: "De 45 a 60 minuts, de 3 a 4 vegades per setmana", tags: [] },
            { text: "60 minuts o més, de 3 a 4 vegades per setmana", tags: [] },
            { text: "Sessions diàries però curtes i de baix impacte", tags: ["suau"] }
        ],
        multipleChoice: false
    },
    {
        id: 12,
        question: "Quin és el teu nivell d'experiència en esport?",
        options: [
            { text: "Principiant (mai o gairebé mai ha fet esport)", tags: ["baix"] },
            { text: "Intermedi (ha fet esport de manera ocasional)", tags: [] },
            { text: "Avançat (practica esport regularment)", tags: ["alt"] }
        ],
        multipleChoice: false
    },
    {
        id: 13,
        question: "Quina/Quines motivacions tens per fer esport? (pots triar més d'una opció)",
        options: [
            { text: "Salut i benestar (mantindre's actiu, millorar forma física)", tags: [] },
            { text: "Diversió i oci (passar-ho bé, relaxar-se)", tags: [] },
            { text: "Millorar rendiment o competir (superar-se, participar en competicions)", tags: ["oposicio"] },
            { text: "Socialitzar i fer amics (conèixer gent, fer activitats en grup)", tags: ["col·lectiu"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: true
    },
    {
        id: 14,
        question: "Quin tipus de suport prefereixes quan practiques esport?",
        options: [
            { text: "Entrenador professional o monitor", tags: [] },
            { text: "Aplicacions o vídeos en línia", tags: [] },
            { text: "Practicar amb companys sense guia externa", tags: ["col·lectiu"] },
            { text: "No necessito cap suport", tags: ["individual"] },
            { text: "No en tinc preferència", tags: [] }
        ],
        multipleChoice: false
    },
    {
        id: 15,
        question: "En quina franja d'edat et trobes?",
        options: [
            { text: "Infantil (0-12 anys)", tags: ["infantil"] },
            { text: "Adolescent (13-17 anys)", tags: ["adolescent"] },
            { text: "Adult jove (18-35 anys)", tags: ["adult jove"] },
            { text: "Adult (36-60 anys)", tags: ["adult"] },
            { text: "Gent gran (+60 anys)", tags: ["gent gran"] }
        ],
        multipleChoice: false,
        isAge: true
    },
    {
        id: 16,
        question: "Quin és el teu IMC aproximat?",
        type: "imc",
        multipleChoice: false
    }
];

let currentQuestion = 0;
let userAnswers = [];
let userTags = [];
let userAge = null;
let userIMC = null;

function startQuestionnaire() {
    currentQuestion = 0;
    userAnswers = [];
    userTags = [];
    userAge = null;
    userIMC = null;
    
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('questionnaire-page').classList.add('active');
    
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('question-container');
    const progress = document.getElementById('progress');
    const prevBtn = document.getElementById('prev-btn');
    
    progress.style.width = ((currentQuestion / questions.length) * 100) + '%';
    prevBtn.disabled = currentQuestion === 0;
    
    if (question.type === 'imc') {
        container.innerHTML = `
            <h2>${question.question}</h2>
            <div class="imc-container">
                <div class="imc-inputs">
                    <div class="input-group">
                        <label for="altura">Alçada (cm):</label>
                        <input type="number" id="altura" placeholder="Ex: 175" min="100" max="250">
                    </div>
                    <div class="input-group">
                        <label for="pes">Pes (kg):</label>
                        <input type="number" id="pes" placeholder="Ex: 70" min="30" max="200">
                    </div>
                </div>
                <button class="btn-primary" onclick="calculateIMC()" style="width: 100%; margin-top: 10px;">Calcular IMC</button>
                <div class="imc-result hidden" id="imc-result"></div>
            </div>
        `;
    } else {
        let displayOptions = question.options;
        
        if (question.conditional && currentQuestion === 3) {
            const question1Answer = userAnswers[0];
            if (question1Answer && question1Answer.length > 0) {
                const selectedIndex = question1Answer[0];
                const selectedOption = questions[0].options[selectedIndex];
                
                if (selectedOption.text === "Individual") {
                    displayOptions = question.optionsIndividual;
                } else if (selectedOption.text === "Col·lectiu") {
                    displayOptions = question.optionsCol·lectiu;
                }
            }
        }
        
        let optionsHTML = '<div class="options-container">';
        
        displayOptions.forEach((option, index) => {
            if (question.multipleChoice) {
                optionsHTML += `
                    <div class="option" onclick="toggleMultipleChoice(${index})">
                        <input type="checkbox" id="option-${index}" onclick="event.stopPropagation(); toggleMultipleChoice(${index})">
                        <label for="option-${index}" onclick="event.preventDefault()">${option.text}</label>
                    </div>
                `;
            } else {
                optionsHTML += `
                    <div class="option" onclick="selectOption(${index})">${option.text}</div>
                `;
            }
        });
        
        optionsHTML += '</div>';
        container.innerHTML = `<h2>${question.question}</h2>${optionsHTML}`;
    }
}

function selectOption(index) {
    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    
    userAnswers[currentQuestion] = [index];
    
    let displayOptions = question.options;
    
    if (question.conditional && currentQuestion === 3) {
        const question1Answer = userAnswers[0];
        if (question1Answer && question1Answer.length > 0) {
            const selectedIndex = question1Answer[0];
            const selectedOption = questions[0].options[selectedIndex];
            
            if (selectedOption.text === "Individual") {
                displayOptions = question.optionsIndividual;
            } else if (selectedOption.text === "Col·lectiu") {
                displayOptions = question.optionsCol·lectiu;
            }
        }
    }
    
    if (question.isAge) {
        userAge = displayOptions[index].tags;
    }
    
    displayOptions[index].tags.forEach(tag => {
        if (!userTags.includes(tag)) {
            userTags.push(tag);
        }
    });
}

function toggleMultipleChoice(index) {
    const question = questions[currentQuestion];
    const checkbox = document.getElementById(`option-${index}`);
    const option = checkbox.parentElement;
    
    const isNoPreference = question.options[index].text === "No en tinc preferència";
    
    if (currentQuestion === 12) {
        if (isNoPreference) {
            document.querySelectorAll('.option input[type="checkbox"]').forEach((cb, idx) => {
                if (idx !== index) {
                    cb.checked = false;
                    cb.parentElement.classList.remove('selected');
                }
            });
            userAnswers[currentQuestion] = [];
        } else {
            const noPreferenceIndex = question.options.findIndex(opt => opt.text === "No en tinc preferència");
            if (noPreferenceIndex !== -1) {
                const noPreferenceCheckbox = document.getElementById(`option-${noPreferenceIndex}`);
                if (noPreferenceCheckbox) {
                    noPreferenceCheckbox.checked = false;
                    noPreferenceCheckbox.parentElement.classList.remove('selected');
                }
            }
            if (!userAnswers[currentQuestion]) {
                userAnswers[currentQuestion] = [];
            }
            userAnswers[currentQuestion] = userAnswers[currentQuestion].filter(i => i !== noPreferenceIndex);
        }
    }
    
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
        option.classList.add('selected');
        if (!userAnswers[currentQuestion]) {
            userAnswers[currentQuestion] = [];
        }
        userAnswers[currentQuestion].push(index);
        
        question.options[index].tags.forEach(tag => {
            if (!userTags.includes(tag)) {
                userTags.push(tag);
            }
        });
    } else {
        option.classList.remove('selected');
        userAnswers[currentQuestion] = userAnswers[currentQuestion].filter(i => i !== index);
    }
}

function calculateIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const pes = parseFloat(document.getElementById('pes').value);
    
    if (!altura || !pes || altura < 100 || altura > 250 || pes < 30 || pes > 200) {
        alert('Si us plau, introdueix valors vàlids per alçada (100-250 cm) i pes (30-200 kg).');
        return;
    }
    
    const alturaMetres = altura / 100;
    const imc = (pes / (alturaMetres * alturaMetres)).toFixed(1);
    
    let categoria, imcTag;
    if (imc < 18.5) {
        categoria = 'Baix IMC';
        imcTag = 'baix';
    } else if (imc >= 18.5 && imc < 25) {
        categoria = 'Normal';
        imcTag = 'normal';
    } else {
        categoria = 'Alt IMC';
        imcTag = 'alt';
    }
    
    userIMC = imcTag;
    userTags.push(imcTag);
    userAnswers[currentQuestion] = { altura, pes, imc, categoria };
    
    const resultDiv = document.getElementById('imc-result');
    resultDiv.innerHTML = `El teu IMC és: <strong>${imc}</strong> (${categoria})`;
    resultDiv.classList.remove('hidden');
}

function nextQuestion() {
    const question = questions[currentQuestion];
    
    if (question.type === 'imc') {
        if (!userAnswers[currentQuestion]) {
            alert('Si us plau, calcula el teu IMC abans de continuar.');
            return;
        }
    } else if (!userAnswers[currentQuestion] || userAnswers[currentQuestion].length === 0) {
        alert('Si us plau, selecciona almenys una opció.');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showResults() {
    const matchedSports = calculateMatches();
    
    document.getElementById('questionnaire-page').classList.remove('active');
    document.getElementById('results-page').classList.add('active');
    
    displayUserSummary();
    displaySports(matchedSports);
    
    saveToLocalStorage();
}

function calculateMatches() {
    const isGentGran = userAge && userAge.includes("gent gran");
    
    const contactAnswer = userAnswers[4];
    let userContactPreference = null;
    if (contactAnswer && contactAnswer.length > 0) {
        const contacteOption = questions[4].options[contactAnswer[0]];
        const tags = contacteOption.tags;
        if (tags.length > 0) {
            userContactPreference = tags[0];
        }
    }
    
    const sportsWithMatches = sportsDatabase.map(sport => {
        let matches = 0;
        let matchedTags = [];
        
        const uniqueSportTags = new Set(sport.etiquetes);
        
        userTags.forEach(tag => {
            if (uniqueSportTags.has(tag)) {
                matches++;
                matchedTags.push(tag);
            }
        });
        
        let ageCompatible;
        if (isGentGran) {
            ageCompatible = sport.etiquetes.includes("gent gran");
        } else {
            ageCompatible = !userAge || userAge.some(ageTag => sport.etiquetes.includes(ageTag));
        }
        
        let contactCompatible = true;
        if (userContactPreference === "sense-contacte" || userContactPreference === "moderat") {
            if (sport.etiquetes.includes("contacte")) {
                contactCompatible = false;
            }
        }
        
        return {
            ...sport,
            matches,
            matchedTags,
            ageCompatible,
            contactCompatible
        };
    });
    
    const compatibleSports = sportsWithMatches.filter(sport => sport.ageCompatible && sport.contactCompatible);
    
    compatibleSports.sort((a, b) => b.matches - a.matches);
    
    if (compatibleSports.length <= 3) {
        return compatibleSports;
    }
    
    const maxMatches = compatibleSports[0]?.matches || 0;
    const topSports = compatibleSports.filter(sport => sport.matches === maxMatches);
    
    if (topSports.length >= 3) {
        const shuffled = topSports.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }
    
    return compatibleSports.slice(0, 3);
}

function displayUserSummary() {
    const summaryDiv = document.getElementById('user-summary');
    const imcData = userAnswers.find(ans => ans && ans.imc);
    
    let summaryHTML = '<h3>Resum del teu perfil</h3><p>';
    
    if (userAge && userAge.length > 0) {
        const capitalizedAges = userAge.map(age => age.charAt(0).toUpperCase() + age.slice(1));
        summaryHTML += `<strong>Edat:</strong> ${capitalizedAges.join(', ')} | `;
    }
    
    if (imcData) {
        summaryHTML += `<strong>IMC:</strong> ${imcData.imc} (${imcData.categoria})`;
    }
    
    summaryHTML += '</p>';
    summaryDiv.innerHTML = summaryHTML;
}

function displaySports(sports) {
    const container = document.getElementById('results-container');
    
    if (sports.length === 0) {
        container.innerHTML = '<p>No s\'han trobat esports que coincideixin amb les teves preferències. Prova a modificar les teves respostes.</p>';
        return;
    }
    
    container.innerHTML = sports.map(sport => `
        <div class="sport-card">
            <div class="sport-card-header">
                <div class="sport-icon">${sport.icona}</div>
                <div class="sport-title">
                    <h3>${sport.nom}</h3>
                    <div class="sport-matches">${sport.matches} coincidències</div>
                </div>
            </div>
            <button class="btn-see-more" onclick="showSportDetails('${sport.nom}')">Veure més</button>
        </div>
    `).join('');
}

function getEntorn(etiquetes) {
    if (etiquetes.includes('aquatic')) return 'Aquàtic';
    if (etiquetes.includes('muntanya')) return 'Muntanya';
    if (etiquetes.includes('aeri')) return 'Aeri';
    if (etiquetes.includes('terrestre')) return 'Terrestre';
    return 'Mixt';
}

function getTipus(etiquetes) {
    if (etiquetes.includes('individual')) return 'Individual';
    if (etiquetes.includes('col·lectiu')) return 'Col·lectiu';
    return 'Mixt';
}

function getCost(etiquetes) {
    if (etiquetes.includes('alt')) return 'Alt';
    if (etiquetes.includes('mitja')) return 'Mitjà';
    if (etiquetes.includes('baix')) return 'Baix';
    return 'Variable';
}

function showSportDetails(sportName) {
    const sport = sportsDatabase.find(s => s.nom === sportName);
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${sport.icona} ${sport.nom}</h2>
        <p>${sport.descripcio}</p>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

function downloadResults() {
    const results = generateResultsText();
    const blob = new Blob([results], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultats-sport-finder.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function copyResults() {
    const results = generateResultsText();
    navigator.clipboard.writeText(results).then(() => {
        alert('Resultats copiats al portapapers!');
    }).catch(() => {
        alert('Error en copiar els resultats.');
    });
}

function generateResultsText() {
    const matchedSports = calculateMatches();
    const imcData = userAnswers.find(ans => ans && ans.imc);
    
    let text = '=== RESULTATS SPORT FINDER ===\n\n';
    text += 'PERFIL:\n';
    if (userAge && userAge.length > 0) {
        text += `Edat: ${userAge.join(', ')}\n`;
    }
    if (imcData) {
        text += `IMC: ${imcData.imc} (${imcData.categoria})\n`;
    }
    text += '\n';
    
    text += 'ESPORTS RECOMANATS:\n\n';
    matchedSports.forEach((sport, index) => {
        text += `${index + 1}. ${sport.nom}\n`;
        text += `   Coincidències: ${sport.matches}\n`;
        text += `   ${sport.descripcio}\n\n`;
    });
    
    return text;
}

function restartQuestionnaire() {
    currentQuestion = 0;
    userAnswers = [];
    userTags = [];
    userAge = null;
    userIMC = null;
    
    document.getElementById('results-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
}

function saveToLocalStorage() {
    const data = {
        userTags,
        userAge,
        userIMC,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('sportFinderData', JSON.stringify(data));
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
