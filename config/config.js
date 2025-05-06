/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: -33.750,
				lon: 150.700
			}
		},
		{
			module: "calendar",
			header: "Google Calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 60000,
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/dnortham1%40parra.catholic.edu.au/private-f87fc9682d0cc9f2ca0f28b252d62788/basic.ics"
					}
				]
			}
		},
		{
			module: "MMM-EasyBack",
			position: 'fullscreen_below',
			config: {
				bgName: "",
				videoName: "",
				youTubeID: "",
				height: "1080px",
				width: "1920px"
			}
		},
		{
			module: "MMM-PiStatus",
			position: "top_center",
			header: "RasPi Status",
			config: {
				updateInterval: 5000,
				url: "http://100.99.11.113:5000"
			}
		},
		{
			/* Don't share your credentials! */
			module: "MMM-OnSpotify",
			position: "bottom_left", /* bottom_left, bottom_center */
				config: {
				clientID: "131663cc57f9427cae4843fd48972e79",
				clientSecret: "8373c3aa989d42c6afeb246356accf2c",
				accessToken: "BQBBghO2NH3GkDGeg6FPlWn2mkP3OqmASOCiW9obdAPpYExp2vGTahKw_MaaY3xqCpDiYvjQ--DzFzay75sXt9HFRZqPsUaZGSlKCjacYdK-_gksuMGxn74a9D_pq611cRuhocn4dORnkP3sKfgNpSKgeEaeaAlSVXNlEpmZ2wJ8IcofZesPHFWQfAY5l5je_Ci9Y_N1CwwhGklriUKe9DRgYtsfybGgjcV7p8-dhj-RxpKnbOSurKX9pYTJRr6NfToYhDQhig",
				refreshToken: "AQCuQNxBuxLlimv4OOemZsE3607xEmXWlQWusWpomeCUDOAxlQDHJ3KLNk7G0iFyNvkVhwdACv__te5jU_tmX3X_9HTPQ08PET1CAXQQ5LdidHjcUBDhKvrFgm-_Qc7_ndU",
				/* Add here your configurations */
			}
		},
		{
			module: "MMM-TomTomCalculateRouteTraffic",
			position: "bottom_right",
			header: "TomTom Calculated Routes",
			config: {
			  routes: [{
				name: "To St Michaels Primary",
				symbol: "city",
				from: {latitude: -33.7267297, longitude: 150.6995692},
				to: {latitude: -33.788269, longitude: 150.899094}
			  }, {
				name: "To Home",
				symbol: "city",
				from: {latitude: -33.788269, longitude: 150.899094},
				to: {latitude: -33.7267297, longitude: 150.6995692}
			  }]
			}
		},
		{
			module: "MMM-Formula1",
			position: "bottom_right",
			header: "Formula 1",
			config: {
			  // Optional configuration options - see https://github.com/73cirdan/MMM-Formula1#configuration-options
			}
		},
		// {
		// 	module: "MMM-pages",
		// 	config: {
		// 		timings: {
		// 			default: 5000,               // rotate every 5 seconds   
		// 			0: 5000                     // page 0 rotates every 20 seconds
		// 		},
		// 		modules: [
		// 			["MMM-TomTomCalculateRouteTraffic", "MMM-OnSpotify"], // page 0
		// 			["MMM-Formula1", "MMM-PiStatus"], // page 1
		// 		],
		// 		fixed: [   
		// 			"calendar",                   // modules that are always shown
		// 			"clock",
		// 			"weather",
		// 			"MMM-page-indicator"
		// 		],
		// 		// hiddenPages: {                   // modules that are only shown on specific pages
		// 		// 	"screenSaver": [
		// 		// 		"clock",
		// 		// 		"MMM-BackgroundSlideshow"
		// 		// 	],
		// 		// 	"admin": [
		// 		// 		"MMM-SystemMonitor",
		// 		// 		"MMM-OnScreenMenu"
		// 		// 	]
		// 		// }
		// 	}
		// },
		{
			module: 'MMM-page-indicator',
			position: 'bottom_bar',
			config: {
				pages: 2,
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
