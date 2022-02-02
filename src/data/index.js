import { reportSVG, orders, HomeSVG, InventorySVG } from "svg";

export const navMenuItems = [
  {
    color: "white",
    hasDropdown: false,
    SVG: HomeSVG,
    text: "Home",
    url: "/shopping",
    type: ["Shopping", "Tickets"],
  },
  {
    color: "black",
    hasDropdown: true,
    SVG: InventorySVG,
    dropdownLinks: [
      { text: "Manage Inventory", url: "/shopping/inventory" },
      { text: "Add a product", url: "/shopping/inventory/add" },
    ],
    text: "Inventory",
  },
  {
    color: "white",
    hasDropdown: false,
    SVG: orders,
    text: "Orders",
    url: "/shopping/orders",
  },
  {
    color: "white",
    hasDropdown: false,
    SVG: reportSVG,
    text: "Reports",
    url: "/shopping/reports",
  },
];

export const ticketNavMenuItems = [
  {
    color: "white",
    hasDropdown: false,
    SVG: HomeSVG,
    text: "Home",
    url: "/tickets",
    type: ["Shopping", "Tickets"],
  },
  {
    color: "black",
    hasDropdown: true,
    SVG: InventorySVG,
    dropdownLinks: [
      { text: "Manage Inventory", url: "/tickets/inventory" },
      { text: "Create an event", url: "/tickets/inventory/add" },
    ],
    text: "Inventory",
  },
  {
    color: "white",
    hasDropdown: false,
    SVG: orders,
    text: "Orders",
    url: "/tickets/orders",
  },
  {
    color: "white",
    hasDropdown: false,
    SVG: reportSVG,
    text: "Reports",
    url: "/tickets/reports",
  },
];

export const mainMenuItems = [
  { url: "/users", text: "Administrator Management" },
  { url: "/customers", text: "Customer Management" },
  { url: "/contents", text: "Content Management" },
  { url: "/discounts", text: "Discount Promotion Management" },
  { url: "/sellers", text: "Sellers Management" },
  { url: "/mails", text: "Email Marketing" },
  { url: "/referrals", text: "Referral Management" },
  { url: "/payments", text: "Payment Request" },
];

export const cities = {
  Lagos: [
    "Alimosho",
    "Agidingbi",
    "Akiode",
    "Alausa",
    "Agege",
    "Ayobo",
    "Amuwo",
    "Apapa",
    "Ajeromi",
    "Alaba",
    "Ajah",
    "Badagry",
    "Egbeda",
    "Epe",
    "Festac",
    "Gbagada",
    "Ipaja",
    "Igando",
    "Ikeja",
    "Ikeja GRA",
    "Ijegun",
    "Isolo",
    "Ilupeju",
    "Ikorodu",
    "Ketu",
    "Lekki",
    "Lekki Phase 1",
    "Maryland",
    "Magodo",
    "Mushin",
    "Ogba",
    "Ojodu",
    "Opebi",
    "Ojota",
    "Oshodi",
    "Ogudu",
    "Surulere",
    "Somolu",
    "Sangotedo",
    "Victoria Island",
    "VGC",
    "Yaba",
  ],
  Anambra: [
    "Onitsha",
    "Awka",
    "Neni",
    "Ozubulu",
    "Nnewi",
    "Ojoto",
    "Ukpo",
    "Abagana",
    "Ukpor",
    "Ihiala",
    "Ogidi",
    "Nteje",
    "Umunze",
    "Atani",
    "Aguata",
    "Ajalli",
    "Otuocha",
    "Achalla",
    "Anaku",
    "Nzam",
  ],
  Kano: [
    "Kano",
    "Ungogo",
    "Kumbotso",
    "Gezawa",
    "Dawakin Kudu",
    "Kura",
    "Wudil",
    "Koguna",
    "Dawakin Tofa",
    "Minjibir",
    "Madobi",
    "Garun Malam",
    "Gwarzo",
    "Kabo",
    "Rimin Gado",
    "Tofa",
    "Bichi",
    "Bagwai",
    "Albasu",
    "Tsanyawa",
    "Warawa",
    "Karaye",
    "Rano",
    "Bunkure",
    "Kibiya",
    "Garko",
    "Takai",
    "Kiru",
    "Zakirai",
    "Sumaila",
    "Shanono",
    "Rogo",
    "Dambatta",
    "Bebeji",
    "Ajingi",
    "Gaya",
    "Tudun Wada",
    "Kunchi",
    "Ririwai",
  ],
  Oyo: [
    "Ibadan",
    "Ogbomoso",
    "Oyo",
    "Iseyin",
    "Egbeda",
    "Akanran",
    "Iyana-Ofa",
    "Moniya",
    "Okeho",
    "Idi-Ayunre",
    "Igbo-Ora",
    "Jobele",
    "Iresa-Adu",
    "Eruwa",
    "Ajaawa",
    "Kisi",
    "Igboho",
    "Ido",
    "Otu",
    "Ayete",
    "Igbeti",
    "Ikoyi-Ile",
    "Ago-Amodu",
    "Saki",
    "Iwere-Ile",
    "Tede",
  ],
  Imo: [
    "Owerri",
    "Orlu",
    "Umundugba",
    "Amaigbo",
    "Dikenafai",
    "Nnenasa",
    "Itu",
    "Afor-Oru",
    "Isinweke",
    "Mgbidi",
    "Umumma",
    "Nwaorieubi",
    "Iho",
    "Aboh",
    "Okwe",
    "Nkwerre",
    "Umuelemai",
    "Awo-Idemili",
    "Urualla",
    "Okigwe",
    "Umuguma",
    "Oguta",
    "Umuneke-Ngor",
    "Egbema",
  ],
  "Federal Capital Territory": [
    "Abuja",
    "Kuje",
    "Bwari",
    "Gwagwalada",
    "Kwali",
    "Abaji",
  ],
  Borno: [
    "Maiduguri",
    "Bama",
    "Biu",
    "Khaddamari",
    "Gamboru",
    "Briyel",
    "Gwoza",
    "Shani",
    "Kwaya Kusar",
    "Askira",
    "Gubio",
    "Azare",
    "Dikwa",
    "Rann",
    "Chibok",
    "Kukawa",
    "Marte",
    "Gudumbali",
    "Monguno",
    "Gajiram",
    "Damboa",
    "Damasak",
    "Mafa",
    "Benisheikh",
    "Magumeri",
    "Konduga",
    "Mallam Fatori",
  ],
  Edo: [
    "Benin City",
    "Uselu",
    "Idogbo",
    "Irrua",
    "Uromi",
    "Ekpoma",
    "Auchi",
    "Igarra",
    "Agenebode",
    "Igueben",
    "Sabongida-Ora",
    "Fugar",
    "Ubiaja",
    "Afuze",
    "Abudu",
    "Okada",
    "Ehor",
    "Iguobazuwa",
  ],
  Ondo: [
    "Ikare",
    "Akure",
    "Owo",
    "Ondo",
    "Igbara-Oke",
    "Oka",
    "Ile-Oluji",
    "Oke-Agbe",
    "Isua",
    "Okitipupa",
    "Bolorunduro",
    "Igbekebo",
    "Igbokoda",
    "Iju",
    "Ita-Ogbolu",
    "Ode-Irele",
    "Owena",
    "Ore",
    "Ifon",
  ],
  Rivers: [
    "Port Harcourt",
    "Okrika",
    "Kpor",
    "Buguma",
    "Rumuodomaya",
    "Ogu",
    "Nchia",
    "Saakpenwa",
    "Ngo",
    "Opobo",
    "Akinima",
    "Bori",
    "Ahoada",
    "Abua",
    "Bonny",
    "Omoku",
    "Afam",
    "Okehi",
    "Eberi",
    "Abonnema",
    "Degema",
    "Isiokpo",
    "Emuoha",
  ],
  Kaduna: [
    "Zaria",
    "Kaduna",
    "Makera",
    "Sabon Gari",
    "Kwoi",
    "Hunkuyi",
    "Makarfi",
    "Kaura",
    "Ikara",
    "Giwa",
    "Saminaka",
    "Maigana",
    "Turunku",
    "Zonkwa",
    "Kafanchan",
    "Anchau",
    "Gwantu",
    "Kagarko",
    "Kauru",
    "Kujama",
    "Kachia",
    "Kajuru",
    "Birnin Gwari",
  ],
  Ogun: [
    "Abeokuta",
    "Ijebu-Ode",
    "Ifo",
    "Ikenne",
    "Ota",
    "Atan",
    "Shagamu",
    "Isara",
    "Ijebu-Igbo",
    "Ipokia",
    "Ilaro",
    "Odogbolu",
    "Owode",
    "Ayetoro",
    "Itori",
    "Abigi",
    "Odeda",
    "Imeko",
    "Ogbere",
  ],
  Plateau: [
    "Jos",
    "Bukuru",
    "Riyom",
    "Barkin Ladi",
    "Langtang",
    "Mangu",
    "Tunkus",
    "Bassa",
    "Bokkos",
    "Angware",
    "Pankshin",
    "Kwal",
    "Baap",
    "Shendam",
    "Mabudi",
    "Dengi",
    "Wase",
  ],
  Kwara: [
    "Ilorin",
    "Fufu",
    "Offa",
    "Ilemona",
    "Iloffa",
    "Omu-Aran",
    "Araromi-Opin",
    "Owu-Isin",
    "Lafiagi",
    "Afon",
    "Share",
    "Patigi",
    "Oke-Oyi",
    "Bode Saadu",
    "Kosubosu",
    "Kaiama",
  ],
  Delta: [
    "Warri",
    "Sapele",
    "Effurun",
    "Asaba",
    "Otor-Udu",
    "Otu-Jeremi",
    "Bomadi",
    "Isiokolo",
    "Ughelli",
    "Oghara",
    "Owa-Oyibu",
    "Oleh",
    "Patani",
    "Agbor",
    "Ozoro",
    "Orerokpe",
    "Obiaruku",
    "Akwukwu-Igbo",
    "Issele-Uku",
    "Kwale",
    "Ogwashi-Uku",
    "Burutu",
    "Koko",
    "Ogbe-Ijoh",
    "Aboh",
  ],
  Sokoto: [
    "Sokoto",
    "Bodinga",
    "Wamako",
    "Wurno",
    "Gwadabawa",
    "Illela",
    "Binji",
    "Kware",
    "Tambuwal",
    "Silame",
    "Dange",
    "Yabo",
    "Shagari",
    "Gada",
    "Goronyo",
    "Kebbe",
    "Sabon Birni",
    "Isa",
    "Rabah",
    "Tureta",
    "Gidan Madi",
    "Balle",
  ],
  Enugu: [
    "Enugu",
    "Nsukka",
    "Nkwo Nike",
    "Ibagwa-Aka",
    "Enugu-Ezike",
    "Obollo-Afor",
    "Ogbede",
    "Agbani",
    "Ndeaboh",
    "Awgu",
    "Udi",
    "Aguobu-Owa",
    "Oji River",
    "Umulona",
    "Amagunze",
    "Ikem",
  ],
  Bauchi: [
    "Bauchi",
    "Azare",
    "Yana",
    "Giade",
    "Jama’are",
    "Misau",
    "Warji",
    "Dass",
    "Dambam",
    "Itas",
    "Bogoro",
    "Katagum",
    "Tafawa Balewa",
    "Darazo",
    "Gamawa",
    "Ningi",
    "Kirfi",
    "Alkaleri",
    "Kafin Madaki",
    "Toro",
  ],
  "Akwa Ibom": [
    "Uyo",
    "Ikot Abasi",
    "Oron",
    "Ikot Ekpene",
    "Eyofin",
    "Etinan",
    "Eket",
    "Afaha Offiong",
    "Abat",
    "Abak",
    "Nung Udoe",
    "Afaha Ikot Ebak",
    "Nto Edino",
    "Ikot Edibon",
    "Okoroete",
    "Oko Ita",
    "Odot",
    "Urua Inyang",
    "Urue Offong",
    "Utu Etim Ekpo",
    "Itu",
    "Mkpat Enin",
    "Uquo",
    "Ikot Akpa Nkuk",
    "Enwang",
    "Idu",
    "Okopedi",
    "Ikot Ibritam",
    "Upenekang",
    "Odoro Ikpe",
    "Ibiaku Ntok Okpo",
  ],
  Osun: [
    "Ile-Ife",
    "Osogbo",
    "Iwo",
    "Ilobu",
    "Ilesa",
    "Ifon",
    "Iragbiji",
    "Ikirun",
    "Ile-Ogbo",
    "Okuku",
    "Otan Ayegbaju",
    "Apomu",
    "Ikire",
    "Ejigbo",
    "Oke-Ila",
    "Ijebu-Jesa",
    "Ede",
    "Awo",
    "Ibokun",
    "Bode Osi",
    "Ifetedo",
    "Ila Orangun",
    "Ipetumodu",
    "Gbongan",
    "Iperindo",
    "Osu",
  ],
  Abia: [
    "Aba",
    "Umuahia",
    "Osisioma",
    "Mgboko",
    "Okpuala-Ngwa",
    "Isiala Oboro",
    "Omoba",
    "Arochukwu",
    "Bende",
    "Ebem Ohafia",
    "Nkwoagu Isuochi",
    "Mbalano",
    "Oke-Ikpe",
    "Akwete",
  ],
  "Cross River": [
    "Calabar",
    "Itigidi",
    "Obudu",
    "Ikot Nakanda",
    "Abuochiche",
    "Ugep",
    "Ogoja",
    "Obubra",
    "Akpet Central",
    "Okpoma",
    "Sankwala",
    "Effraya",
    "Ikom",
    "Boje",
    "Odukpani",
    "Akamkpa",
  ],
  Ekiti: [
    "Ado-Ekiti",
    "Otun-Ekiti",
    "Ikere-Ekiti",
    "Aramoko-Ekiti",
    "Ijero-Ekiti",
    "Omuo-Ekiti",
    "Ido-Ekiti",
    "Ilawe-Ekiti",
    "Efon-Alaaye",
    "Iye-Ekiti",
    "Ode-Ekiti",
    "Igede-Ekiti",
    "Ise-Ekiti",
    "Emure-Ekiti",
    "Oye-Ekiti",
    "Ikole-Ekiti",
  ],
  Katsina: [
    "Katsina",
    "Funtua",
    "Zango",
    "Daura",
    "Sandamu",
    "Batagarawa",
    "Dutsi",
    "Bindawa",
    "Mai’Adua",
    "Dandume",
    "Rimi",
    "Dutsin-Ma",
    "Charanchi",
    "Malumfashi",
    "Baure",
    "Danja",
    "Kusada",
    "Mani",
    "Bakori",
    "Ingawa",
    "Matazu",
    "Sabuwa",
    "Kurfi",
    "Kafur",
    "Musawa",
    "Batsari",
    "Mashi",
    "Kaita",
    "Kankia",
    "Kankara",
    "Jibia",
    "Dan Musa",
    "Safana",
    "Faskari",
  ],
  Adamawa: [
    "Yola",
    "Mubi",
    "Numan",
    "Shelleng",
    "Gulak",
    "Michika",
    "Gella",
    "Maiha",
    "Fufore",
    "Girei",
    "Guyuk",
    "Lamurde",
    "Ganye",
    "Demsa",
    "Jimeta",
    "Jada",
    "Mayo-Belwa",
    "Gombi",
    "Hong",
    "Song",
    "Toungo",
  ],
  Niger: [
    "Minna",
    "Bida",
    "Kontagora",
    "Suleja",
    "Sabon Wuse",
    "Enagi",
    "Maikunkele",
    "Gawu Babangida",
    "Sarkin Pawa",
    "Paiko",
    "Lemu",
    "Agaie",
    "Katcha",
    "Mokwa",
    "Rijau",
    "Kutigi",
    "Kagara",
    "Nasko",
    "Kuta",
    "Wushishi",
    "Lapai",
    "Agwara",
    "Bangi",
    "Mashegu",
    "New Bussa",
  ],
  Benue: [
    "Makurdi",
    "Otukpo",
    "Vandeikya",
    "Okpoga",
    "Obarike-Ito",
    "Wannune",
    "Otukpa",
    "Gboko",
    "Igumale",
    "Oju",
    "Lessel",
    "Adikpo",
    "Tse-Agberagba",
    "Sankera",
    "Buruku",
    "Ugba",
    "Ugbokpo",
    "Naka",
    "Obagaji",
    "Katsina-Ala",
    "Gbajimba",
    "Aliade",
  ],
  Gombe: [
    "Gombe",
    "Kumo",
    "Billiri",
    "Kaltungo",
    "Boh",
    "Bajoga",
    "Deba",
    "Mallam Sidi",
    "Talasse",
    "Nafada",
    "Dukku",
  ],
  Yobe: [
    "Damaturu",
    "Gashua",
    "Nguru",
    "Potiskum",
    "Jajimaji",
    "Sabon Garin Nangere",
    "Fika",
    "Damagum",
    "Jakusko",
    "Machina",
    "Bara",
    "Buni Yadi",
    "Geidam",
    "Dapchi",
    "Yusufari",
    "Kanamma",
    "Babban Gida",
  ],
  Zamfara: [
    "Gusau",
    "Kaura Namoda",
    "Birnin Magaji",
    "Shinkafi",
    "Bungudu",
    "Tsafe",
    "Zurmi",
    "Maradun",
    "Talata Mafara",
    "Bakura",
    "Bukkuyum",
    "Gummi",
    "Anka",
    "Maru",
  ],
  Nasarawa: [
    "Lafia",
    "Keffi",
    "Obi",
    "Akwanga",
    "Nasarawa Egon",
    "Karu",
    "Keana",
    "Wamba",
    "Garaku",
    "Doma",
    "Toto",
    "Awe",
    "Nasarawa",
  ],
  Taraba: [
    "Jalingo",
    "Wukari",
    "Zing",
    "Pantisawa",
    "Takum",
    "Gembu",
    "Mutum Biyu",
    "Donga",
    "Lissam",
    "Sunkani",
    "Ibi",
    "Lau",
    "Karim Lamido",
    "Bali",
    "Baissa",
    "Serti",
  ],
  Kebbi: [
    "Birnin Kebbi",
    "Zuru",
    "Kalgo",
    "Jega",
    "Aliero",
    "Gwandu",
    "Argungu",
    "Bunza",
    "Besse",
    "Maiyama",
    "Dakingari",
    "Shanga",
    "Ribah",
    "Augie",
    "Sakaba",
    "Kamba",
    "Wara",
    "Mahuta",
    "Bagudo",
    "Kangiwa",
    "Yelwa",
  ],
  Kogi: [
    "Idah",
    "Lokoja",
    "Akpafa",
    "Obangede",
    "Ogaminana",
    "Okene",
    "Ankpa",
    "Okpo",
    "Iyara",
    "Odo-Ere",
    "Ugwolawo",
    "Onyedega",
    "Isanlu",
    "Adogo",
    "Koton-Karfe",
    "Ajaka",
    "Dekina",
    "Oguma",
    "Abejukolo",
    "Kabba",
    "Mopa",
  ],
  Jigawa: [
    "Dutse",
    "Hadejia",
    "Gumel",
    "Kazaure",
    "Auyo",
    "Kafin Hausa",
    "Kiri Kasamma",
    "Roni",
    "Gwiwa",
    "Ringim",
    "Birnin Kudu",
    "Karkarna",
    "Malam Madori",
    "Miga",
    "Taura",
    "Jahun",
    "Gantsa",
    "Maigatari",
    "Kiyawa",
    "Kaugama",
    "Gwaram",
    "Gagarawa",
    "Guri",
    "Garki",
    "Babura",
    "Sule Tankarkar",
    "Birniwa",
  ],
  Bayelsa: [
    "Yenagoa",
    "Ogbia",
    "Sagbama",
    "Kaiama",
    "Nembe",
    "Ekeremor",
    "Oporoma",
    "Twon-Brass",
  ],
  Ebonyi: [
    "Abakaliki",
    "Afikpo",
    "Isu",
    "Obiozara",
    "Nguzu Edda",
    "Onuebonyi Echara",
    "Isiaka",
    "Onueke",
    "Ezzamgbo",
    "Ugbodo",
    "Iboko",
    "Ezillo",
  ],
};
