/** @jsx React.DOM */

var alarms = {
    "allarmi": {
        "TIME": [
            "14:00",
            "14:15",
            "14:30",
            "14:45",
            "15:00",
            "15:15",
            "15:30",
            "15:45"
        ],
        "NO": [
            "2",
            "1",
            "1",
            "0",
            "1",
            "3",
            "2",
            "1"
        ],
        "NE": [
            "1",
            "1",
            "3",
            "2",
            "0",
            "1",
            "1",
            "0"
        ],
        "CE": [
            "1",
            "2",
            "2",
            "2",
            "2",
            "1",
            "3",
            "3"
        ],
        "SU": [
            "2",
            "3",
            "1",
            "3",
            "1",
            "1",
            "2",
            "1"
        ]
    }
};

var dettagli = [];

dettagli[0] = [
    {
        "Orario": "14:00",
        "Zona": "NO",
        "Tipologia": "CHIAMATA VOCE",
        "Gravita": "A1",
        "Eventi": "1",
        "Soglia": "1",
        "Descrizione": "IR sopra soglia",
        "Stato": "0"
    },
    {
        "Orario": "14:00",
        "Zona": "NO",
        "Tipologia": "CONNESSIONE DATI INTERNET DA TERMINALE",
        "Gravita": "A1",
        "Eventi": "1",
        "Soglia": "1",
        "Descrizione": "IR sopra soglia",
        "Stato": "0"
    }
];

dettagli[1] = [
    {
        "Orario": "16:00",
        "Zona": "SU",
        "Tipologia": "CONNESSIONE DATI INTERNET DA TERMINALE",
        "Gravita": "A1",
        "Eventi": "1",
        "Soglia": "1",
        "Descrizione": "IR sopra soglia",
        "Stato": "0"
    },
    {
        "Orario": "16:00",
        "Zona": "SU",
        "Tipologia": "CONNESSIONE DATI INTERNET DA TERMINALE",
        "Gravita": "A1",
        "Eventi": "1",
        "Soglia": "1",
        "Descrizione": "IR sopra soglia",
        "Stato": "0"
    }
];


var AlarmsAPI = {
	getAlarms: function (cb) {
		setTimeout(function () {
			cb(alarms);
		}, 500);
	},
	getDetails: function (zone, time, cb) {
		var response = [];
		if (zone === "NO") {
			response = dettagli[0];
		} else if (zone === "SU") {
			response = dettagli[1];
		}
		//console.log(response);
		setTimeout(function () {
			cb(response);
		}, 100);
	}
};

module.exports = AlarmsAPI;
