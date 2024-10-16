// export the currency with country code
const currencyOptions = [
    {
        currencyCode: "",
        currencyName: "",
    },
    {
        currencyCode: "1inch",
        currencyName: "1inch Network",
    },
    {
        currencyCode: "aave",
        currencyName: "Aave",
    },
    {
        currencyCode: "ada",
        currencyName: "Cardano",
    },
    {
        currencyCode: "aed",
        currencyName: "United Arab Emirates Dirham",
    },
    {
        currencyCode: "afn",
        currencyName: "Afghan afghani",
    },
    {
        currencyCode: "algo",
        currencyName: "Algorand",
    },
    {
        currencyCode: "all",
        currencyName: "Albanian lek",
    },
    {
        currencyCode: "amd",
        currencyName: "Armenian dram",
    },
    {
        currencyCode: "amp",
        currencyName: "Synereo",
    },
    {
        currencyCode: "ang",
        currencyName: "Netherlands Antillean Guilder",
    },
    {
        currencyCode: "aoa",
        currencyName: "Angolan kwanza",
    },
    {
        currencyCode: "ar",
        currencyName: "Argentine peso",
    },
    {
        currencyCode: "ars",
        currencyName: "Argentine peso",
    },
    {
        currencyCode: "ast",
        currencyName: "Asturian peseta",
    },
    {
        currencyCode: "atom",
        currencyName: "Atomic Coin",
    },
    {
        currencyCode: "aud",
        currencyName: "Australian dollar",
    },
    {
        currencyCode: "avax",
        currencyName: "Avalanche",
    },
    {
        currencyCode: "awg",
        currencyName: "Aruban florin",
    },
    {
        currencyCode: "axs",
        currencyName: "AXS",
    },
    {
        currencyCode: "azn",
        currencyName: "Azerbaijani manat",
    },
    {
        currencyCode: "bam",
        currencyName: "Bosnia - Herzegovina Convertible Mark",
    },
    {
        currencyCode: "bat",
        currencyName: "Basic Attention Token",
    },
    {
        currencyCode: "bbd",
        currencyName: "Bajan dollar",
    },
    {
        currencyCode: "bch",
        currencyName: "Bitcoin Cash",
    },
    {
        currencyCode: "bdt",
        currencyName: "Bangladeshi taka",
    },
    {
        currencyCode: "bgn",
        currencyName: "Bulgarian lev",
    },
    {
        currencyCode: "bhd",
        currencyName: "Bahraini dinar",
    },
    {
        currencyCode: "bif",
        currencyName: "Burundian Franc",
    },
    {
        currencyCode: "bmd",
        currencyName: "Bermudan dollar",
    },
    {
        currencyCode: "bnb",
        currencyName: "Binance Coin",
    },
    {
        currencyCode: "bnd",
        currencyName: "Brunei dollar",
    },
    {
        currencyCode: "bob",
        currencyName: "Bolivian boliviano",
    },
    {
        currencyCode: "brl",
        currencyName: "Brazilian real",
    },
    {
        currencyCode: "bsd",
        currencyName: "Bahamian dollar",
    },
    {
        currencyCode: "bsv",
        currencyName: "Bitcoin SV",
    },
    {
        currencyCode: "btg",
        currencyName: "Bitcoin Gold",
    },
    {
        currencyCode: "btn",
        currencyName: "Bhutan currency",
    },
    {
        currencyCode: "busd",
        currencyName: "Binance USD",
    },
    {
        currencyCode: "bwp",
        currencyName: "Botswanan Pula",
    },
    {
        currencyCode: "byn",
        currencyName: "New Belarusian Ruble",
    },
    {
        currencyCode: "byr",
        currencyName: "Belarusian Ruble",
    },
    {
        currencyCode: "bzd",
        currencyName: "Belize dollar",
    },
    {
        currencyCode: "cad",
        currencyName: "Canadian dollar",
    },
    {
        currencyCode: "cake",
        currencyName: "PancakeSwap",
    },
    {
        currencyCode: "cdf",
        currencyName: "Congolese franc",
    },
    {
        currencyCode: "chf",
        currencyName: "Swiss franc",
    },
    {
        currencyCode: "chz",
        currencyName: "Chiliz",
    },
    {
        currencyCode: "clf",
        currencyName: "Chilean Unit of Account(UF)",
    },
    {
        currencyCode: "clp",
        currencyName: "Chilean peso",
    },
    {
        currencyCode: "cny",
        currencyName: "Chinese yuan",
    },
    {
        currencyCode: "cnh",
        currencyName: "Chinese yuan",
    },
    {
        currencyCode: "cop",
        currencyName: "Colombian peso",
    },
    {
        currencyCode: "crc",
        currencyName: "Costa Rican colon",
    },
    {
        currencyCode: "cuc",
        currencyName: "Cuban Convertible Peso",
    },
    {
        currencyCode: "cup",
        currencyName: "Cuban Peso",
    },
    {
        currencyCode: "cve",
        currencyName: "Cape Verdean escudo",
    },
    {
        currencyCode: "czk",
        currencyName: "Czech koruna",
    },
    {
        currencyCode: "dai",
        currencyName: "Dai",
    },
    {
        currencyCode: "dcr",
        currencyName: "Decred",
    },
    {
        currencyCode: "dgb",
        currencyName: "DigiByte",
    },
    {
        currencyCode: "dop",
        currencyName: "Dominican peso",
    },
    {
        currencyCode: "dzd",
        currencyName: "Algerian dinar",
    },
    {
        currencyCode: "egp",
        currencyName: "Egyptian pound",
    },
    {
        currencyCode: "enj",
        currencyName: "Enjin coin",
    },
    {
        currencyCode: "eos",
        currencyName: "EOS",
    },
    {
        currencyCode: "etb",
        currencyName: "Ethiopian birr",
    },
    {
        currencyCode: "eth",
        currencyName: "Ethereum",
    },
    {
        currencyCode: "eur",
        currencyName: "Euro",
    },
    {
        currencyCode: "fjd",
        currencyName: "Fiji dollar",
    },
    {
        currencyCode: "fil",
        currencyName: "Filecoin",
    },
    {
        currencyCode: "firo",
        currencyName: "Firo",
    },
    {
        currencyCode: "gbp",
        currencyName: "Pound sterling",
    },
    {
        currencyCode: "gel",
        currencyName: "Georgian lari",
    },
    {
        currencyCode: "ghs",
        currencyName: "Ghanaian cedi",
    },
    {
        currencyCode: "gip",
        currencyName: "Gibraltar pound",
    },
    {
        currencyCode: "gmd",
        currencyName: "Gambian dalasi",
    },
    {
        currencyCode: "gnf",
        currencyName: "Guinean Franc",
    },
    {
        currencyCode: "grt",
        currencyName: "Griot coin",
    },
    {
        currencyCode: "gtq",
        currencyName: "Guatemalan quetzal",
    },
    {
        currencyCode: "gyd",
        currencyName: "Guyanaese Dollar",
    },
    {
        currencyCode: "hbar",
        currencyName: "Hedera",
    },
    {
        currencyCode: "hkd",
        currencyName: "Hong Kong dollar",
    },
    {
        currencyCode: "hnl",
        currencyName: "Honduran lempira",
    },
    {
        currencyCode: "htg",
        currencyName: "Haitian gourde",
    },
    {
        currencyCode: "huf",
        currencyName: "Hungarian forint",
    },
    {
        currencyCode: "icp",
        currencyName: "Internet Computer",
    },
    {
        currencyCode: "idr",
        currencyName: "Indonesian rupiah",
    },
    {
        currencyCode: "ils",
        currencyName: "Israeli New Shekel",
    },
    {
        currencyCode: "imp",
        currencyName: "CoinIMP",
    },
    {
        currencyCode: "inr",
        currencyName: "Indian rupee",
    },
    {
        currencyCode: "iqd",
        currencyName: "Iraqi dinar",
    },
    {
        currencyCode: "irr",
        currencyName: "Iranian rial",
    },
    {
        currencyCode: "isk",
        currencyName: "Icelandic króna",
    },
    {
        currencyCode: "jep",
        currencyName: "Jersey Pound",
    },
    {
        currencyCode: "jmd",
        currencyName: "Jamaican dollar",
    },
    {
        currencyCode: "jpy",
        currencyName: "Japanese yen",
    },
    {
        currencyCode: "kes",
        currencyName: "Kenyan shilling",
    },
    {
        currencyCode: "kgs",
        currencyName: "Kyrgystani Som",
    },
    {
        currencyCode: "khr",
        currencyName: "Cambodian riel",
    },
    {
        currencyCode: "kmf",
        currencyName: "Comorian franc",
    },
    {
        currencyCode: "kpw",
        currencyName: "North Korean won",
    },
    {
        currencyCode: "krw",
        currencyName: "South Korean won",
    },
    {
        currencyCode: "kwd",
        currencyName: "Kuwaiti dinar",
    },
    {
        currencyCode: "kyd",
        currencyName: "Cayman Islands dollar",
    },
    {
        currencyCode: "kzt",
        currencyName: "Kazakhstani tenge",
    },
    {
        currencyCode: "lbp",
        currencyName: "Lebanese pound",
    },
    {
        currencyCode: "lkr",
        currencyName: "Sri Lankan rupee",
    },
    {
        currencyCode: "lrd",
        currencyName: "Liberian dollar",
    },
    {
        currencyCode: "lsl",
        currencyName: "Lesotho loti",
    },
    {
        currencyCode: "ltl",
        currencyName: "Lithuanian litas",
    },
    {
        currencyCode: "lvl",
        currencyName: "Latvian lats",
    },
    {
        currencyCode: "lyd",
        currencyName: "Libyan dinar",
    },
    {
        currencyCode: "mad",
        currencyName: "Moroccan dirham",
    },
    {
        currencyCode: "mdl",
        currencyName: "Moldovan leu",
    },
    {
        currencyCode: "mga",
        currencyName: "Malagasy ariary",
    },
    {
        currencyCode: "mkd",
        currencyName: "Macedonian denar",
    },
    {
        currencyCode: "mmk",
        currencyName: "Myanma Kyat",
    },
    {
        currencyCode: "mnt",
        currencyName: "Mongolian tugrik",
    },
    {
        currencyCode: "mop",
        currencyName: "Macanese Pataca",
    },
    {
        currencyCode: "mro",
        currencyName: "Mauritanian ouguiya",
    },
    {
        currencyCode: "mur",
        currencyName: "Mauritian rupee",
    },
    {
        currencyCode: "mvr",
        currencyName: "Maldivian rufiyaa",
    },
    {
        currencyCode: "mwk",
        currencyName: "Malawian kwacha",
    },
    {
        currencyCode: "mxn",
        currencyName: "Mexican peso",
    },
    {
        currencyCode: "myr",
        currencyName: "Malaysian ringgit",
    },
    {
        currencyCode: "mzn",
        currencyName: "Mozambican metical",
    },
    {
        currencyCode: "nad",
        currencyName: "Namibian dollar",
    },
    {
        currencyCode: "ngn",
        currencyName: "Nigerian naira",
    },
    {
        currencyCode: "nok",
        currencyName: "Norwegian krone",
    },
    {
        currencyCode: "npr",
        currencyName: "Norwegian krone",
    },
    {
        currencyCode: "nzd",
        currencyName: "New Zealand dollar",
    },
    {
        currencyCode: "okb",
        currencyName: "Okex",
    },
    {
        currencyCode: "omr",
        currencyName: "Omani rial",
    },
    {
        currencyCode: "one",
        currencyName: "Menlo One",
    },
    {
        currencyCode: "pab",
        currencyName: "Panamanian balboa",
    },
    {
        currencyCode: "paxg",
        currencyName: "PAX Gold",
    },
    {
        currencyCode: "pen",
        currencyName: "Sol",
    },
    {
        currencyCode: "ppgken",
        currencyName: "Papua New Guinean kina",
    },
    {
        currencyCode: "php",
        currencyName: "Philippine peso",
    },
    {
        currencyCode: "pkr",
        currencyName: "Pakistani rupee",
    },
    {
        currencyCode: "pln",
        currencyName: "Poland złoty",
    },
    {
        currencyCode: "pyg",
        currencyName: "Paraguayan guarani",
    },
    {
        currencyCode: "qar",
        currencyName: "Qatari Rial",
    },
    {
        currencyCode: "qnt",
        currencyName: "Quant",
    },
    {
        currencyCode: "qtum",
        currencyName: "QTUM",
    },
    {
        currencyCode: "ron",
        currencyName: "Romanian leu",
    },
    {
        currencyCode: "rsd",
        currencyName: "Serbian dinar",
    },
    {
        currencyCode: "rub",
        currencyName: "Russian ruble",
    },
    {
        currencyCode: "rune",
        currencyName: "THORChain(ERC20)",
    },
    {
        currencyCode: "rwf",
        currencyName: "Rwandan Franc",
    },
    {
        currencyCode: "sand",
        currencyName: "BeachCoin",
    },
    {
        currencyCode: "sar",
        currencyName: "Saudi riyal",
    },
    {
        currencyCode: "sbd",
        currencyName: "Solomon Islands dollar",
    },
    {
        currencyCode: "scr",
        currencyName: "Seychellois rupee",
    },
    {
        currencyCode: "sdg",
        currencyName: "Sudanese pound",
    },
    {
        currencyCode: "sek",
        currencyName: "Swedish krona",
    },
    {
        currencyCode: "sgd",
        currencyName: "Singapore dollar",
    },
    {
        currencyCode: "shib",
        currencyName: "Shiba Inu",
    },
    {
        currencyCode: "shp",
        currencyName: "Saint Helena pound",
    },
    {
        currencyCode: "sll",
        currencyName: "Sierra Leonean leone",
    },
    {
        currencyCode: "sol",
        currencyName: "Sola"
    },
    {
        currencyCode: "sos",
        currencyName: "Somali shilling"
    },
    {
        currencyCode: "srd",
        currencyName: "Surinamese dollar"
    },
    {
        currencyCode: "std",
        currencyName: "São Tomé and Príncipe Dobra (pre - 2018)",
    },
    {
        currencyCode: "stx",
        currencyName: "Stox"
    },
    {
        currencyCode: "svc",
        currencyName: "Salvadoran Colón"
    },
    {
        currencyCode: "syp",
        currencyName: "Syrian pound"
    },
    {
        currencyCode: "szl",
        currencyName: "Swazi lilangeni"
    },
    {
        currencyCode: "thb",
        currencyName: "Thai baht"
    },
    {
        currencyCode: "theta",
        currencyName: "Theta"
    },
    {
        currencyCode: "tjs",
        currencyName: "Tajikistani somoni"
    },
    {
        currencyCode: "tmt",
        currencyName: "Turkmenistani manat"
    },
    {
        currencyCode: "tnd",
        currencyName: "Tunisian dinar"
    },
    {
        currencyCode: "top",
        currencyName: "Tongan Paʻanga"
    },
    {
        currencyCode: "trx",
        currencyName: "TRON"
    },
    {
        currencyCode: "try",
        currencyName: "Turkish lira"
    },
    {
        currencyCode: "ttd",
        currencyName: "Trinidad & Tobago Dollar"
    },
    {
        currencyCode: "ttt",
        currencyName: "Tap Project"
    },
    {
        currencyCode: "tusd",
        currencyName: "True USD"
    },
    {
        currencyCode: "twd",
        currencyName: "New Taiwan dollar"
    },
    {
        currencyCode: "tzs",
        currencyName: "Tanzanian shilling"
    },
    {
        currencyCode: "uah",
        currencyName: "Ukrainian hryvnia"
    },
    {
        currencyCode: "ugx",
        currencyName: "Ugandan shilling"
    },
    {
        currencyCode: "uni",
        currencyName: "Universe"
    },
    {
        currencyCode: "usd",
        currencyName: "United States dollar"
    },
    {
        currencyCode: "usdc",
        currencyName: "USD Coin"
    },
    {
        currencyCode: "usdp",
        currencyName: "USDP Stablecoin"
    },
    {
        currencyCode: "usdt",
        currencyName: "Tether"
    },
    {
        currencyCode: "uyu",
        currencyName: "Uruguayan peso"
    },
    {
        currencyCode: "uzs",
        currencyName: "Uzbekistani som"
    },
    {
        currencyCode: "vef",
        currencyName: "Sovereign Bolivar"
    },
    {
        currencyCode: "vet",
        currencyName: "Vechain"
    },
    {
        currencyCode: "vnd",
        currencyName: "Vietnamese dong"
    },
    {
        currencyCode: "vuv",
        currencyName: "Vanuatu vatu"
    },
    {
        currencyCode: "waves",
        currencyName: "Waves"
    },
    {
        currencyCode: "wbtc",
        currencyName: "Wrapped Bitcoin"
    },
    {
        currencyCode: "wemix",
        currencyName: "WEMIX"
    },
    {
        currencyCode: "wst",
        currencyName: "Samoan tala"
    },
    {
        currencyCode: "xaf",
        currencyName: "Central African CFA franc"
    },
    {
        currencyCode: "xag",
        currencyName: "Silver Ounce"
    },
    {
        currencyCode: "xau",
        currencyName: "XauCoin"
    },
    {
        currencyCode: "xcd",
        currencyName: "East Caribbean dollar"
    },
    {
        currencyCode: "xch",
        currencyName: "Chia"
    },
    {
        currencyCode: "xdc",
        currencyName: "XDC Network"
    },
    {
        currencyCode: "xdr",
        currencyName: "Special Drawing Rights"
    },
    {
        currencyCode: "xec",
        currencyName: "Eternal Coin"
    },
    {
        currencyCode: "xem",
        currencyName: "NEM"
    },
    {
        currencyCode: "xlm",
        currencyName: "Stellar"
    },
    {
        currencyCode: "xmr",
        currencyName: "Monero"
    },
    {
        currencyCode: "xof",
        currencyName: "West African CFA franc"
    },
    {
        currencyCode: "xpf",
        currencyName: "CFP franc"
    },
    {
        currencyCode: "xrp",
        currencyName: "XRP"
    },
    {
        currencyCode: "xtz",
        currencyName: "Tezos"
    },
    {
        currencyCode: "yer",
        currencyName: "Yemeni rial"
    },
    {
        currencyCode: "zar",
        currencyName: "South African rand"
    },
    {
        currencyCode: "zec",
        currencyName: "ZCash"
    },
    {
        currencyCode: "zil",
        currencyName: "Zilliqa"
    },
    {
        currencyCode: "zmk",
        currencyName: "Zambian kwacha"
    },
    {
        currencyCode: "zmw",
        currencyName: "Zambian Kwacha"
    },
    {
        currencyCode: "zwl",
        currencyName: "Zimbabwean Dollar"
    },
];

export default currencyOptions;