(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// app.js
window.bongiovi = require("./libs/bongiovi.js");
var dat = require("dat-gui");
var tracks = [[{"lat":51.445333,"lng":-0.045044,"elevation":40.8},{"lat":51.445277,"lng":-0.045045,"elevation":40.7},{"lat":51.445244,"lng":-0.044979,"elevation":40.4},{"lat":51.445234,"lng":-0.044825,"elevation":40.1},{"lat":51.44509,"lng":-0.044868,"elevation":39.8},{"lat":51.445062,"lng":-0.044863,"elevation":39.7},{"lat":51.445004,"lng":-0.044825,"elevation":39.4},{"lat":51.445095,"lng":-0.044779,"elevation":39.6},{"lat":51.44513,"lng":-0.044744,"elevation":39.6},{"lat":51.445144,"lng":-0.044774,"elevation":39.7},{"lat":51.445158,"lng":-0.044736,"elevation":39.7},{"lat":51.445193,"lng":-0.044666,"elevation":39.6},{"lat":51.44522,"lng":-0.044648,"elevation":39.7},{"lat":51.445247,"lng":-0.044665,"elevation":39.8},{"lat":51.445276,"lng":-0.044653,"elevation":39.8},{"lat":51.445307,"lng":-0.044642,"elevation":39.9},{"lat":51.445341,"lng":-0.04463,"elevation":39.9},{"lat":51.445351,"lng":-0.044586,"elevation":39.8},{"lat":51.445366,"lng":-0.044543,"elevation":39.8},{"lat":51.445378,"lng":-0.044485,"elevation":39.7},{"lat":51.445382,"lng":-0.044438,"elevation":39.6},{"lat":51.445383,"lng":-0.044388,"elevation":39.5},{"lat":51.445384,"lng":-0.04434,"elevation":39.3},{"lat":51.445383,"lng":-0.044292,"elevation":39.2},{"lat":51.445381,"lng":-0.044243,"elevation":39.1},{"lat":51.445379,"lng":-0.044189,"elevation":39},{"lat":51.445378,"lng":-0.044138,"elevation":38.9},{"lat":51.445377,"lng":-0.044086,"elevation":38.7},{"lat":51.445376,"lng":-0.044028,"elevation":38.6},{"lat":51.44537,"lng":-0.043975,"elevation":38.5},{"lat":51.445379,"lng":-0.043923,"elevation":38.4},{"lat":51.445388,"lng":-0.043879,"elevation":38.3},{"lat":51.445387,"lng":-0.043817,"elevation":38.1},{"lat":51.445385,"lng":-0.043768,"elevation":38},{"lat":51.445383,"lng":-0.043712,"elevation":37.9},{"lat":51.445375,"lng":-0.043656,"elevation":37.7},{"lat":51.44537,"lng":-0.043606,"elevation":37.6},{"lat":51.445368,"lng":-0.043538,"elevation":37.4},{"lat":51.445365,"lng":-0.043491,"elevation":37.3},{"lat":51.445367,"lng":-0.043438,"elevation":37.2},{"lat":51.445383,"lng":-0.04339,"elevation":37.1},{"lat":51.445388,"lng":-0.043326,"elevation":37},{"lat":51.445393,"lng":-0.04328,"elevation":36.9},{"lat":51.445393,"lng":-0.043228,"elevation":36.7},{"lat":51.445392,"lng":-0.043184,"elevation":36.6},{"lat":51.445393,"lng":-0.043139,"elevation":36.5},{"lat":51.445393,"lng":-0.043079,"elevation":36.4},{"lat":51.44539,"lng":-0.043029,"elevation":36.3},{"lat":51.445385,"lng":-0.042974,"elevation":36.1},{"lat":51.445378,"lng":-0.042903,"elevation":36},{"lat":51.44538,"lng":-0.042843,"elevation":36.1},{"lat":51.445375,"lng":-0.042774,"elevation":36.2},{"lat":51.445358,"lng":-0.042725,"elevation":36.2},{"lat":51.445325,"lng":-0.0427,"elevation":36.2},{"lat":51.445293,"lng":-0.042687,"elevation":36.2},{"lat":51.445275,"lng":-0.042644,"elevation":36.3},{"lat":51.445267,"lng":-0.0426,"elevation":36.3},{"lat":51.445278,"lng":-0.042547,"elevation":36.4},{"lat":51.445292,"lng":-0.042495,"elevation":36.4},{"lat":51.445323,"lng":-0.042465,"elevation":36.5},{"lat":51.445355,"lng":-0.042463,"elevation":36.5},{"lat":51.445391,"lng":-0.042454,"elevation":36.5},{"lat":51.445416,"lng":-0.042433,"elevation":36.6},{"lat":51.445434,"lng":-0.042398,"elevation":36.7},{"lat":51.445445,"lng":-0.042358,"elevation":36.8},{"lat":51.445458,"lng":-0.042299,"elevation":36.9},{"lat":51.445467,"lng":-0.042256,"elevation":37},{"lat":51.445479,"lng":-0.042213,"elevation":37.1},{"lat":51.445487,"lng":-0.04217,"elevation":37.1},{"lat":51.445492,"lng":-0.042104,"elevation":37.2},{"lat":51.445501,"lng":-0.042054,"elevation":37.3},{"lat":51.445508,"lng":-0.042001,"elevation":37.4},{"lat":51.445515,"lng":-0.04195,"elevation":37.5},{"lat":51.445525,"lng":-0.041906,"elevation":37.6},{"lat":51.445533,"lng":-0.041853,"elevation":37.7},{"lat":51.445539,"lng":-0.041804,"elevation":37.8},{"lat":51.445544,"lng":-0.041755,"elevation":37.9},{"lat":51.445548,"lng":-0.04169,"elevation":38},{"lat":51.445551,"lng":-0.041628,"elevation":38.1},{"lat":51.445544,"lng":-0.041568,"elevation":38.2},{"lat":51.445538,"lng":-0.041512,"elevation":38.2},{"lat":51.445537,"lng":-0.041461,"elevation":38.3},{"lat":51.445539,"lng":-0.041412,"elevation":38.4},{"lat":51.44555,"lng":-0.041367,"elevation":38.5},{"lat":51.445557,"lng":-0.041325,"elevation":38.6},{"lat":51.445567,"lng":-0.041261,"elevation":38.7},{"lat":51.44556,"lng":-0.041204,"elevation":39},{"lat":51.445567,"lng":-0.041162,"elevation":39.3},{"lat":51.445578,"lng":-0.04111,"elevation":39.6},{"lat":51.44558,"lng":-0.041063,"elevation":39.9},{"lat":51.445585,"lng":-0.041018,"elevation":40.3},{"lat":51.445596,"lng":-0.040963,"elevation":40.7},{"lat":51.445614,"lng":-0.040919,"elevation":41},{"lat":51.445635,"lng":-0.040872,"elevation":41.4},{"lat":51.44564,"lng":-0.040826,"elevation":41.8},{"lat":51.445637,"lng":-0.040764,"elevation":42.1},{"lat":51.445632,"lng":-0.040702,"elevation":42.5},{"lat":51.445641,"lng":-0.040648,"elevation":42.9},{"lat":51.445641,"lng":-0.040602,"elevation":43.2},{"lat":51.445661,"lng":-0.040552,"elevation":43.6},{"lat":51.445663,"lng":-0.040498,"elevation":44},{"lat":51.445653,"lng":-0.040438,"elevation":44.3},{"lat":51.445668,"lng":-0.040392,"elevation":44.7},{"lat":51.44567,"lng":-0.040339,"elevation":45.1},{"lat":51.445661,"lng":-0.040293,"elevation":45.4},{"lat":51.44566,"lng":-0.040245,"elevation":45.8},{"lat":51.445665,"lng":-0.040184,"elevation":46.2},{"lat":51.445675,"lng":-0.040139,"elevation":46.7},{"lat":51.445684,"lng":-0.040098,"elevation":47},{"lat":51.445695,"lng":-0.040048,"elevation":47.5},{"lat":51.4457,"lng":-0.03999,"elevation":47.9},{"lat":51.4457,"lng":-0.039931,"elevation":48.4},{"lat":51.445698,"lng":-0.039875,"elevation":48.8},{"lat":51.445704,"lng":-0.039819,"elevation":49.3},{"lat":51.44573,"lng":-0.039784,"elevation":49.7},{"lat":51.445743,"lng":-0.039741,"elevation":50.1},{"lat":51.445746,"lng":-0.039693,"elevation":50.5},{"lat":51.445748,"lng":-0.039637,"elevation":51},{"lat":51.445752,"lng":-0.039574,"elevation":51.4},{"lat":51.445759,"lng":-0.039531,"elevation":51.5},{"lat":51.445772,"lng":-0.039466,"elevation":51.7},{"lat":51.445779,"lng":-0.039416,"elevation":51.8},{"lat":51.445783,"lng":-0.039362,"elevation":51.9},{"lat":51.445773,"lng":-0.039316,"elevation":51.8},{"lat":51.445759,"lng":-0.039267,"elevation":51.8},{"lat":51.445744,"lng":-0.039209,"elevation":51.7},{"lat":51.445741,"lng":-0.039154,"elevation":51.7},{"lat":51.445746,"lng":-0.039109,"elevation":51.8},{"lat":51.445749,"lng":-0.039056,"elevation":51.9},{"lat":51.445755,"lng":-0.038999,"elevation":52},{"lat":51.44576,"lng":-0.038944,"elevation":52.1},{"lat":51.445766,"lng":-0.038893,"elevation":52.2},{"lat":51.445775,"lng":-0.038844,"elevation":52.3},{"lat":51.445783,"lng":-0.0388,"elevation":52.5},{"lat":51.44579,"lng":-0.038737,"elevation":52.6},{"lat":51.44579,"lng":-0.038684,"elevation":52.7},{"lat":51.4458,"lng":-0.038628,"elevation":52.9},{"lat":51.445808,"lng":-0.038572,"elevation":53.1},{"lat":51.445814,"lng":-0.038523,"elevation":53.2},{"lat":51.445818,"lng":-0.038464,"elevation":53.4},{"lat":51.445817,"lng":-0.038417,"elevation":53.4},{"lat":51.445813,"lng":-0.038357,"elevation":53.5},{"lat":51.445817,"lng":-0.038311,"elevation":53.6},{"lat":51.445821,"lng":-0.03825,"elevation":53.8},{"lat":51.445828,"lng":-0.038191,"elevation":54},{"lat":51.445837,"lng":-0.038137,"elevation":54.1},{"lat":51.445859,"lng":-0.038086,"elevation":54.5},{"lat":51.445883,"lng":-0.038033,"elevation":54.8},{"lat":51.445904,"lng":-0.038001,"elevation":55.1},{"lat":51.445924,"lng":-0.037957,"elevation":55.4},{"lat":51.445939,"lng":-0.037915,"elevation":55.6},{"lat":51.445954,"lng":-0.03787,"elevation":55.7},{"lat":51.445981,"lng":-0.037839,"elevation":55.9},{"lat":51.44601,"lng":-0.037797,"elevation":56.2},{"lat":51.446036,"lng":-0.037734,"elevation":56.3},{"lat":51.446056,"lng":-0.037705,"elevation":56.5},{"lat":51.446081,"lng":-0.037675,"elevation":56.7},{"lat":51.446119,"lng":-0.037648,"elevation":57},{"lat":51.446156,"lng":-0.037631,"elevation":57.3},{"lat":51.446194,"lng":-0.037619,"elevation":57.7},{"lat":51.446224,"lng":-0.037609,"elevation":58},{"lat":51.446254,"lng":-0.037601,"elevation":58.3},{"lat":51.446308,"lng":-0.037589,"elevation":58.5},{"lat":51.446359,"lng":-0.037584,"elevation":58.7},{"lat":51.446404,"lng":-0.037588,"elevation":58.9},{"lat":51.446446,"lng":-0.037599,"elevation":59.1},{"lat":51.44649,"lng":-0.037612,"elevation":59.3},{"lat":51.446524,"lng":-0.03762,"elevation":59.5},{"lat":51.446569,"lng":-0.037628,"elevation":59.7},{"lat":51.446617,"lng":-0.037641,"elevation":60},{"lat":51.446656,"lng":-0.037657,"elevation":60.2},{"lat":51.446688,"lng":-0.037667,"elevation":60.3},{"lat":51.446727,"lng":-0.037672,"elevation":60.5},{"lat":51.446785,"lng":-0.03767,"elevation":60.8},{"lat":51.446816,"lng":-0.037674,"elevation":60.9},{"lat":51.446845,"lng":-0.037678,"elevation":61.1},{"lat":51.446898,"lng":-0.037689,"elevation":61.4},{"lat":51.446945,"lng":-0.037697,"elevation":61.6},{"lat":51.446983,"lng":-0.037708,"elevation":61.8},{"lat":51.447015,"lng":-0.037719,"elevation":62},{"lat":51.447056,"lng":-0.037722,"elevation":62.2},{"lat":51.4471,"lng":-0.037719,"elevation":62.1},{"lat":51.447142,"lng":-0.037703,"elevation":61.6},{"lat":51.44715,"lng":-0.037647,"elevation":61.3},{"lat":51.447136,"lng":-0.037597,"elevation":61.3},{"lat":51.447125,"lng":-0.037548,"elevation":61.2},{"lat":51.447116,"lng":-0.037505,"elevation":61.2},{"lat":51.447108,"lng":-0.037461,"elevation":61.1},{"lat":51.447099,"lng":-0.037384,"elevation":60.9},{"lat":51.447087,"lng":-0.037307,"elevation":60.8},{"lat":51.447073,"lng":-0.037228,"elevation":60.5},{"lat":51.447059,"lng":-0.037155,"elevation":60.2},{"lat":51.447053,"lng":-0.037085,"elevation":59.9},{"lat":51.447058,"lng":-0.037039,"elevation":59.7},{"lat":51.447066,"lng":-0.036967,"elevation":59.4},{"lat":51.447074,"lng":-0.036925,"elevation":59.2},{"lat":51.447078,"lng":-0.036847,"elevation":58.9},{"lat":51.447059,"lng":-0.036788,"elevation":58.5},{"lat":51.447037,"lng":-0.036745,"elevation":58.3},{"lat":51.447032,"lng":-0.036699,"elevation":58},{"lat":51.447016,"lng":-0.03662,"elevation":57.6},{"lat":51.447007,"lng":-0.036578,"elevation":57.4},{"lat":51.446997,"lng":-0.036532,"elevation":57.2},{"lat":51.446988,"lng":-0.036484,"elevation":56.9},{"lat":51.446982,"lng":-0.036435,"elevation":56.7},{"lat":51.446976,"lng":-0.036392,"elevation":56.5},{"lat":51.446968,"lng":-0.03632,"elevation":56.2},{"lat":51.446954,"lng":-0.036254,"elevation":55.9},{"lat":51.446945,"lng":-0.036209,"elevation":55.7},{"lat":51.446941,"lng":-0.036159,"elevation":55.6},{"lat":51.446931,"lng":-0.036049,"elevation":55.4},{"lat":51.446925,"lng":-0.035996,"elevation":55.3},{"lat":51.446922,"lng":-0.035949,"elevation":55.2},{"lat":51.446926,"lng":-0.035863,"elevation":55},{"lat":51.446937,"lng":-0.035789,"elevation":54.8},{"lat":51.446944,"lng":-0.035744,"elevation":54.7},{"lat":51.446948,"lng":-0.035696,"elevation":54.6},{"lat":51.446949,"lng":-0.035641,"elevation":54.5},{"lat":51.446952,"lng":-0.035586,"elevation":54.4},{"lat":51.446952,"lng":-0.035539,"elevation":54.3},{"lat":51.446951,"lng":-0.035483,"elevation":54.1},{"lat":51.446948,"lng":-0.035414,"elevation":54},{"lat":51.446947,"lng":-0.035365,"elevation":53.9},{"lat":51.446944,"lng":-0.035316,"elevation":53.8},{"lat":51.446939,"lng":-0.035268,"elevation":53.6},{"lat":51.446931,"lng":-0.03522,"elevation":53.5},{"lat":51.446922,"lng":-0.035174,"elevation":53.4},{"lat":51.44691,"lng":-0.035131,"elevation":53.3},{"lat":51.446897,"lng":-0.035084,"elevation":53.2},{"lat":51.446884,"lng":-0.035035,"elevation":53.1},{"lat":51.446869,"lng":-0.034993,"elevation":53},{"lat":51.446836,"lng":-0.034924,"elevation":52.8},{"lat":51.446821,"lng":-0.034887,"elevation":52.7},{"lat":51.446816,"lng":-0.034844,"elevation":52.6},{"lat":51.446808,"lng":-0.0348,"elevation":52.5},{"lat":51.446794,"lng":-0.034757,"elevation":52.4},{"lat":51.446775,"lng":-0.034718,"elevation":52.3},{"lat":51.446735,"lng":-0.034638,"elevation":52.1},{"lat":51.446723,"lng":-0.034594,"elevation":52},{"lat":51.446713,"lng":-0.034549,"elevation":51.9},{"lat":51.446703,"lng":-0.034501,"elevation":51.8},{"lat":51.446691,"lng":-0.034455,"elevation":51.7},{"lat":51.446677,"lng":-0.034411,"elevation":51.6},{"lat":51.446664,"lng":-0.034371,"elevation":51.5},{"lat":51.446651,"lng":-0.034332,"elevation":51.4},{"lat":51.446642,"lng":-0.034281,"elevation":51.3},{"lat":51.446643,"lng":-0.034214,"elevation":51.1},{"lat":51.446638,"lng":-0.03417,"elevation":51},{"lat":51.446633,"lng":-0.034115,"elevation":50.9},{"lat":51.446629,"lng":-0.034061,"elevation":50.7},{"lat":51.446623,"lng":-0.034003,"elevation":50.6},{"lat":51.446611,"lng":-0.033936,"elevation":50.4},{"lat":51.446592,"lng":-0.033857,"elevation":50.3},{"lat":51.446571,"lng":-0.033769,"elevation":50},{"lat":51.446555,"lng":-0.0337,"elevation":49.8},{"lat":51.446547,"lng":-0.033651,"elevation":49.7},{"lat":51.446535,"lng":-0.033605,"elevation":49.5},{"lat":51.446524,"lng":-0.033555,"elevation":49.4},{"lat":51.446502,"lng":-0.033495,"elevation":49.2},{"lat":51.446478,"lng":-0.03345,"elevation":49},{"lat":51.446479,"lng":-0.033402,"elevation":48.9},{"lat":51.446505,"lng":-0.033369,"elevation":48.8},{"lat":51.446546,"lng":-0.033356,"elevation":48.7},{"lat":51.446588,"lng":-0.033326,"elevation":48.7},{"lat":51.446625,"lng":-0.033281,"elevation":48.6},{"lat":51.446659,"lng":-0.033231,"elevation":48.4},{"lat":51.446697,"lng":-0.033194,"elevation":48.4},{"lat":51.446732,"lng":-0.033149,"elevation":48.3},{"lat":51.446769,"lng":-0.033098,"elevation":48.1},{"lat":51.446813,"lng":-0.033036,"elevation":48},{"lat":51.446835,"lng":-0.033,"elevation":47.9},{"lat":51.446858,"lng":-0.032962,"elevation":47.9},{"lat":51.446883,"lng":-0.032934,"elevation":47.8},{"lat":51.446911,"lng":-0.032912,"elevation":47.8},{"lat":51.446941,"lng":-0.032896,"elevation":47.8},{"lat":51.446973,"lng":-0.032884,"elevation":47.8},{"lat":51.447001,"lng":-0.03287,"elevation":47.8},{"lat":51.447028,"lng":-0.032855,"elevation":47.8},{"lat":51.447054,"lng":-0.032836,"elevation":47.8},{"lat":51.447092,"lng":-0.032786,"elevation":47.7},{"lat":51.447122,"lng":-0.032724,"elevation":47.5},{"lat":51.447166,"lng":-0.03267,"elevation":47.4},{"lat":51.447195,"lng":-0.032649,"elevation":47.4},{"lat":51.447222,"lng":-0.032629,"elevation":47.4},{"lat":51.447249,"lng":-0.032608,"elevation":47.3},{"lat":51.447272,"lng":-0.032583,"elevation":47.3},{"lat":51.447295,"lng":-0.032558,"elevation":47.2},{"lat":51.447344,"lng":-0.032515,"elevation":47.2},{"lat":51.447368,"lng":-0.03249,"elevation":47.2},{"lat":51.447399,"lng":-0.032441,"elevation":47.1},{"lat":51.447429,"lng":-0.032415,"elevation":47},{"lat":51.447465,"lng":-0.032407,"elevation":47.1},{"lat":51.447491,"lng":-0.032387,"elevation":47},{"lat":51.447523,"lng":-0.032372,"elevation":47},{"lat":51.447566,"lng":-0.032349,"elevation":47},{"lat":51.447593,"lng":-0.032332,"elevation":47},{"lat":51.447619,"lng":-0.032314,"elevation":47},{"lat":51.447645,"lng":-0.032296,"elevation":47},{"lat":51.447691,"lng":-0.032246,"elevation":47},{"lat":51.447716,"lng":-0.032221,"elevation":47},{"lat":51.447742,"lng":-0.032202,"elevation":47},{"lat":51.44777,"lng":-0.032188,"elevation":47},{"lat":51.447801,"lng":-0.032175,"elevation":47},{"lat":51.447831,"lng":-0.032162,"elevation":47},{"lat":51.447859,"lng":-0.032146,"elevation":47},{"lat":51.447886,"lng":-0.032126,"elevation":47},{"lat":51.447911,"lng":-0.032102,"elevation":47},{"lat":51.447933,"lng":-0.032069,"elevation":47},{"lat":51.447951,"lng":-0.032032,"elevation":46.9},{"lat":51.447971,"lng":-0.031988,"elevation":46.8},{"lat":51.447993,"lng":-0.031946,"elevation":46.7},{"lat":51.448018,"lng":-0.031907,"elevation":46.6},{"lat":51.44804,"lng":-0.031866,"elevation":46.5},{"lat":51.448062,"lng":-0.031822,"elevation":46.4},{"lat":51.448082,"lng":-0.031778,"elevation":46.3},{"lat":51.448099,"lng":-0.031734,"elevation":46.2},{"lat":51.448115,"lng":-0.03169,"elevation":46.1},{"lat":51.44813,"lng":-0.031644,"elevation":45.9},{"lat":51.448148,"lng":-0.031601,"elevation":45.8},{"lat":51.448167,"lng":-0.03156,"elevation":45.7},{"lat":51.448189,"lng":-0.031526,"elevation":45.7},{"lat":51.448207,"lng":-0.03149,"elevation":45.6},{"lat":51.448225,"lng":-0.031451,"elevation":45.5},{"lat":51.448239,"lng":-0.031408,"elevation":45.4},{"lat":51.44825,"lng":-0.031361,"elevation":45.3},{"lat":51.448262,"lng":-0.031316,"elevation":45.2},{"lat":51.448276,"lng":-0.031272,"elevation":45.1},{"lat":51.44829,"lng":-0.031231,"elevation":44.9},{"lat":51.448306,"lng":-0.031188,"elevation":44.7},{"lat":51.448319,"lng":-0.031139,"elevation":44.4},{"lat":51.44833,"lng":-0.031085,"elevation":44.1},{"lat":51.448338,"lng":-0.031035,"elevation":43.8},{"lat":51.448344,"lng":-0.030993,"elevation":43.6},{"lat":51.448356,"lng":-0.030928,"elevation":43.3},{"lat":51.448363,"lng":-0.030863,"elevation":42.9},{"lat":51.448376,"lng":-0.030797,"elevation":42.6},{"lat":51.448385,"lng":-0.030718,"elevation":42.2},{"lat":51.448392,"lng":-0.030632,"elevation":41.7},{"lat":51.448397,"lng":-0.030588,"elevation":41.5},{"lat":51.448404,"lng":-0.030514,"elevation":41.1},{"lat":51.448407,"lng":-0.030441,"elevation":40.7},{"lat":51.448404,"lng":-0.030372,"elevation":40.3},{"lat":51.448395,"lng":-0.03031,"elevation":39.9},{"lat":51.448392,"lng":-0.030246,"elevation":39.5},{"lat":51.448389,"lng":-0.030165,"elevation":39.1},{"lat":51.448388,"lng":-0.030121,"elevation":38.8},{"lat":51.44839,"lng":-0.030077,"elevation":38.5},{"lat":51.448403,"lng":-0.029995,"elevation":38.1},{"lat":51.448415,"lng":-0.029917,"elevation":37.6},{"lat":51.448426,"lng":-0.029836,"elevation":37.1},{"lat":51.448457,"lng":-0.029801,"elevation":37},{"lat":51.448492,"lng":-0.029828,"elevation":37.2},{"lat":51.448532,"lng":-0.02985,"elevation":37.3},{"lat":51.448579,"lng":-0.029868,"elevation":37.5},{"lat":51.448626,"lng":-0.029891,"elevation":37.7},{"lat":51.448653,"lng":-0.029898,"elevation":37.8},{"lat":51.448693,"lng":-0.029902,"elevation":37.8},{"lat":51.448736,"lng":-0.029905,"elevation":37.9},{"lat":51.44877,"lng":-0.029906,"elevation":37.9},{"lat":51.448801,"lng":-0.029908,"elevation":37.9},{"lat":51.448828,"lng":-0.029914,"elevation":37.9},{"lat":51.448855,"lng":-0.029925,"elevation":37.9},{"lat":51.448885,"lng":-0.029935,"elevation":37.9},{"lat":51.448913,"lng":-0.029943,"elevation":37.9},{"lat":51.448943,"lng":-0.029948,"elevation":37.9},{"lat":51.448971,"lng":-0.029952,"elevation":37.8},{"lat":51.449022,"lng":-0.029962,"elevation":37.8},{"lat":51.44907,"lng":-0.02997,"elevation":37.8},{"lat":51.449106,"lng":-0.02997,"elevation":37.7},{"lat":51.449137,"lng":-0.029964,"elevation":37.6},{"lat":51.449176,"lng":-0.029956,"elevation":37.5},{"lat":51.449214,"lng":-0.029953,"elevation":37.4},{"lat":51.449249,"lng":-0.02998,"elevation":37.5},{"lat":51.449262,"lng":-0.030038,"elevation":37.8},{"lat":51.449265,"lng":-0.030113,"elevation":38.2},{"lat":51.449266,"lng":-0.030159,"elevation":38.4},{"lat":51.44927,"lng":-0.030206,"elevation":38.6},{"lat":51.449272,"lng":-0.030255,"elevation":38.9},{"lat":51.449273,"lng":-0.030299,"elevation":39.1},{"lat":51.449277,"lng":-0.030345,"elevation":39.4},{"lat":51.449287,"lng":-0.030393,"elevation":39.6},{"lat":51.449301,"lng":-0.030438,"elevation":39.8},{"lat":51.449319,"lng":-0.030502,"elevation":40},{"lat":51.449338,"lng":-0.030572,"elevation":40.2},{"lat":51.449351,"lng":-0.030613,"elevation":40.3},{"lat":51.449365,"lng":-0.030651,"elevation":40.4},{"lat":51.449393,"lng":-0.030721,"elevation":40.6},{"lat":51.449411,"lng":-0.030755,"elevation":40.7},{"lat":51.449434,"lng":-0.030786,"elevation":40.8},{"lat":51.449457,"lng":-0.030812,"elevation":40.8},{"lat":51.449479,"lng":-0.030846,"elevation":40.9},{"lat":51.449495,"lng":-0.030883,"elevation":41},{"lat":51.449504,"lng":-0.030926,"elevation":41.1},{"lat":51.449521,"lng":-0.030987,"elevation":41.3},{"lat":51.449541,"lng":-0.031045,"elevation":41.4},{"lat":51.449559,"lng":-0.031112,"elevation":41.6},{"lat":51.449577,"lng":-0.031188,"elevation":41.8},{"lat":51.449595,"lng":-0.031249,"elevation":41.9},{"lat":51.449607,"lng":-0.031308,"elevation":41.7},{"lat":51.449622,"lng":-0.031354,"elevation":41.5},{"lat":51.449644,"lng":-0.031405,"elevation":41.2},{"lat":51.449668,"lng":-0.031463,"elevation":40.8},{"lat":51.449687,"lng":-0.031527,"elevation":40.5},{"lat":51.449703,"lng":-0.031584,"elevation":40.3},{"lat":51.449729,"lng":-0.031643,"elevation":40},{"lat":51.449754,"lng":-0.031699,"elevation":39.6},{"lat":51.449778,"lng":-0.031761,"elevation":39.3},{"lat":51.449796,"lng":-0.031827,"elevation":39},{"lat":51.44982,"lng":-0.031887,"elevation":38.7},{"lat":51.449845,"lng":-0.031945,"elevation":38.3},{"lat":51.449876,"lng":-0.03202,"elevation":37.9},{"lat":51.449893,"lng":-0.032056,"elevation":37.7},{"lat":51.449911,"lng":-0.032099,"elevation":37.5},{"lat":51.449929,"lng":-0.032136,"elevation":37.3},{"lat":51.449943,"lng":-0.032174,"elevation":37.1},{"lat":51.44996,"lng":-0.032211,"elevation":36.9},{"lat":51.449977,"lng":-0.032248,"elevation":36.7},{"lat":51.449996,"lng":-0.03232,"elevation":36.5},{"lat":51.449998,"lng":-0.0324,"elevation":36.5},{"lat":51.449988,"lng":-0.032487,"elevation":36.6},{"lat":51.449973,"lng":-0.032536,"elevation":36.8},{"lat":51.449961,"lng":-0.032585,"elevation":36.9},{"lat":51.449949,"lng":-0.032634,"elevation":37.1},{"lat":51.449939,"lng":-0.032686,"elevation":37.2},{"lat":51.449927,"lng":-0.032729,"elevation":37.3},{"lat":51.449914,"lng":-0.03277,"elevation":37.4},{"lat":51.449898,"lng":-0.032808,"elevation":37.6},{"lat":51.449881,"lng":-0.032844,"elevation":37.8},{"lat":51.449865,"lng":-0.032882,"elevation":38},{"lat":51.449835,"lng":-0.032946,"elevation":38.2},{"lat":51.449809,"lng":-0.033018,"elevation":38.3},{"lat":51.449783,"lng":-0.033079,"elevation":38.4},{"lat":51.449754,"lng":-0.033124,"elevation":38.5},{"lat":51.449724,"lng":-0.033167,"elevation":38.7},{"lat":51.449686,"lng":-0.033208,"elevation":38.9},{"lat":51.449646,"lng":-0.033236,"elevation":39.2},{"lat":51.449606,"lng":-0.033257,"elevation":39.6},{"lat":51.449579,"lng":-0.033271,"elevation":39.8},{"lat":51.44954,"lng":-0.033297,"elevation":40},{"lat":51.449497,"lng":-0.033314,"elevation":40.3},{"lat":51.449447,"lng":-0.033317,"elevation":40.7},{"lat":51.449398,"lng":-0.033328,"elevation":41.1},{"lat":51.44937,"lng":-0.033325,"elevation":41.3},{"lat":51.449319,"lng":-0.033322,"elevation":41.8},{"lat":51.449272,"lng":-0.033305,"elevation":42.2},{"lat":51.449244,"lng":-0.033292,"elevation":42.5},{"lat":51.449192,"lng":-0.033288,"elevation":43},{"lat":51.449141,"lng":-0.033306,"elevation":43.3},{"lat":51.449095,"lng":-0.033327,"elevation":43.6},{"lat":51.449054,"lng":-0.033346,"elevation":43.9},{"lat":51.449016,"lng":-0.033375,"elevation":44.1},{"lat":51.448976,"lng":-0.033404,"elevation":44.3},{"lat":51.448935,"lng":-0.03342,"elevation":44.6},{"lat":51.448898,"lng":-0.033441,"elevation":44.9},{"lat":51.448862,"lng":-0.033447,"elevation":45.1},{"lat":51.448819,"lng":-0.033464,"elevation":45.4},{"lat":51.44879,"lng":-0.033472,"elevation":45.7},{"lat":51.448741,"lng":-0.033466,"elevation":46.1},{"lat":51.448692,"lng":-0.03346,"elevation":46.2},{"lat":51.448645,"lng":-0.033472,"elevation":46.3},{"lat":51.448606,"lng":-0.033522,"elevation":46.3},{"lat":51.448581,"lng":-0.033592,"elevation":46.2},{"lat":51.448566,"lng":-0.03367,"elevation":46.1},{"lat":51.448565,"lng":-0.033742,"elevation":45.9},{"lat":51.448569,"lng":-0.033806,"elevation":45.7},{"lat":51.448576,"lng":-0.033875,"elevation":45.5},{"lat":51.44859,"lng":-0.033935,"elevation":45.2},{"lat":51.44861,"lng":-0.033986,"elevation":45},{"lat":51.448621,"lng":-0.034032,"elevation":44.8},{"lat":51.448628,"lng":-0.034107,"elevation":44.5},{"lat":51.44864,"lng":-0.03419,"elevation":44.2},{"lat":51.44865,"lng":-0.034244,"elevation":43.9},{"lat":51.448661,"lng":-0.034302,"elevation":43.7},{"lat":51.448679,"lng":-0.034373,"elevation":43.3},{"lat":51.448694,"lng":-0.034446,"elevation":42.9},{"lat":51.448707,"lng":-0.034506,"elevation":42.6},{"lat":51.448718,"lng":-0.034568,"elevation":42.3},{"lat":51.448734,"lng":-0.034625,"elevation":42.2},{"lat":51.448755,"lng":-0.034686,"elevation":42.1},{"lat":51.44877,"lng":-0.034757,"elevation":42.1},{"lat":51.448783,"lng":-0.034827,"elevation":42},{"lat":51.448795,"lng":-0.034899,"elevation":42},{"lat":51.448806,"lng":-0.034974,"elevation":42},{"lat":51.44881,"lng":-0.035048,"elevation":42.1},{"lat":51.448813,"lng":-0.035096,"elevation":42.1},{"lat":51.448821,"lng":-0.035171,"elevation":42.1},{"lat":51.448834,"lng":-0.035228,"elevation":42.1},{"lat":51.448843,"lng":-0.035276,"elevation":42.1},{"lat":51.448838,"lng":-0.03533,"elevation":42.2},{"lat":51.448815,"lng":-0.035409,"elevation":42.4},{"lat":51.448803,"lng":-0.035455,"elevation":42.6},{"lat":51.44879,"lng":-0.035505,"elevation":42.8},{"lat":51.44878,"lng":-0.035554,"elevation":42.9},{"lat":51.448768,"lng":-0.0356,"elevation":43.1},{"lat":51.448753,"lng":-0.035645,"elevation":43.2},{"lat":51.448734,"lng":-0.035685,"elevation":43.5},{"lat":51.448707,"lng":-0.035726,"elevation":43.7},{"lat":51.44868,"lng":-0.035758,"elevation":44},{"lat":51.448655,"lng":-0.035784,"elevation":44.2},{"lat":51.44863,"lng":-0.035806,"elevation":44.5},{"lat":51.448581,"lng":-0.035837,"elevation":44.9},{"lat":51.448536,"lng":-0.035872,"elevation":45.3},{"lat":51.448498,"lng":-0.035918,"elevation":45.7},{"lat":51.448463,"lng":-0.035956,"elevation":46.1},{"lat":51.448436,"lng":-0.035994,"elevation":46.3},{"lat":51.448412,"lng":-0.036048,"elevation":46.6},{"lat":51.448391,"lng":-0.036121,"elevation":46.9},{"lat":51.44838,"lng":-0.036163,"elevation":47},{"lat":51.448363,"lng":-0.036246,"elevation":47.2},{"lat":51.448352,"lng":-0.036331,"elevation":47.3},{"lat":51.448349,"lng":-0.036375,"elevation":47.4},{"lat":51.448356,"lng":-0.036456,"elevation":47.3},{"lat":51.448364,"lng":-0.036531,"elevation":47.2},{"lat":51.448368,"lng":-0.036602,"elevation":47.2},{"lat":51.448378,"lng":-0.036654,"elevation":47.1},{"lat":51.448392,"lng":-0.036714,"elevation":46.9},{"lat":51.448402,"lng":-0.036777,"elevation":46.8},{"lat":51.448408,"lng":-0.036823,"elevation":46.7},{"lat":51.448409,"lng":-0.036882,"elevation":46.7},{"lat":51.448395,"lng":-0.036959,"elevation":46.9},{"lat":51.448383,"lng":-0.036998,"elevation":47},{"lat":51.448371,"lng":-0.037038,"elevation":47.1},{"lat":51.448359,"lng":-0.037083,"elevation":47.2},{"lat":51.448349,"lng":-0.037129,"elevation":47.3},{"lat":51.44834,"lng":-0.037175,"elevation":47.4},{"lat":51.448328,"lng":-0.037217,"elevation":47.6},{"lat":51.448304,"lng":-0.037295,"elevation":47.8},{"lat":51.448295,"lng":-0.037338,"elevation":47.9},{"lat":51.448289,"lng":-0.037384,"elevation":48},{"lat":51.448283,"lng":-0.037433,"elevation":48.1},{"lat":51.448279,"lng":-0.037477,"elevation":48.1},{"lat":51.448273,"lng":-0.037521,"elevation":48.2},{"lat":51.44826,"lng":-0.037597,"elevation":48.4},{"lat":51.44824,"lng":-0.037672,"elevation":48.7},{"lat":51.448223,"lng":-0.037739,"elevation":48.9},{"lat":51.448204,"lng":-0.037807,"elevation":49.2},{"lat":51.448188,"lng":-0.037877,"elevation":49.4},{"lat":51.448171,"lng":-0.037952,"elevation":49.5},{"lat":51.448165,"lng":-0.037995,"elevation":49.4},{"lat":51.448164,"lng":-0.038068,"elevation":49.1},{"lat":51.448156,"lng":-0.038137,"elevation":48.9},{"lat":51.448133,"lng":-0.038215,"elevation":48.9},{"lat":51.448121,"lng":-0.038256,"elevation":48.9},{"lat":51.44811,"lng":-0.038302,"elevation":48.8},{"lat":51.448098,"lng":-0.038345,"elevation":48.8},{"lat":51.448088,"lng":-0.038388,"elevation":48.7},{"lat":51.448077,"lng":-0.038433,"elevation":48.6},{"lat":51.448068,"lng":-0.038479,"elevation":48.5},{"lat":51.44806,"lng":-0.038524,"elevation":48.4},{"lat":51.448053,"lng":-0.038566,"elevation":48.3},{"lat":51.448037,"lng":-0.038644,"elevation":48.2},{"lat":51.44801,"lng":-0.038718,"elevation":48.1},{"lat":51.447996,"lng":-0.038762,"elevation":48.1},{"lat":51.447985,"lng":-0.038804,"elevation":48},{"lat":51.447976,"lng":-0.038848,"elevation":47.9},{"lat":51.447958,"lng":-0.038927,"elevation":47.7},{"lat":51.447939,"lng":-0.038994,"elevation":47.6},{"lat":51.447929,"lng":-0.039045,"elevation":47.5},{"lat":51.447923,"lng":-0.039096,"elevation":47.3},{"lat":51.447917,"lng":-0.039142,"elevation":47.1},{"lat":51.447897,"lng":-0.039194,"elevation":47.1},{"lat":51.447878,"lng":-0.03924,"elevation":47.1},{"lat":51.447861,"lng":-0.039307,"elevation":47},{"lat":51.44785,"lng":-0.03939,"elevation":46.7},{"lat":51.447843,"lng":-0.039436,"elevation":46.6},{"lat":51.447833,"lng":-0.039487,"elevation":46.5},{"lat":51.447825,"lng":-0.039537,"elevation":46.3},{"lat":51.44782,"lng":-0.039585,"elevation":46.2},{"lat":51.447814,"lng":-0.03963,"elevation":46},{"lat":51.447808,"lng":-0.039676,"elevation":45.9},{"lat":51.447802,"lng":-0.039721,"elevation":45.8},{"lat":51.447796,"lng":-0.039767,"elevation":45.7},{"lat":51.447787,"lng":-0.039815,"elevation":45.5},{"lat":51.447776,"lng":-0.03986,"elevation":45.5},{"lat":51.447764,"lng":-0.039906,"elevation":45.4},{"lat":51.447754,"lng":-0.039948,"elevation":45.3},{"lat":51.447743,"lng":-0.039991,"elevation":45.2},{"lat":51.447734,"lng":-0.040034,"elevation":45.1},{"lat":51.447719,"lng":-0.040111,"elevation":44.9},{"lat":51.447701,"lng":-0.04019,"elevation":44.7},{"lat":51.447693,"lng":-0.040231,"elevation":44.5},{"lat":51.447683,"lng":-0.040273,"elevation":44.4},{"lat":51.447672,"lng":-0.040315,"elevation":44.3},{"lat":51.447652,"lng":-0.040396,"elevation":44},{"lat":51.447642,"lng":-0.040438,"elevation":43.9},{"lat":51.447626,"lng":-0.040514,"elevation":43.7},{"lat":51.447612,"lng":-0.040585,"elevation":43.5},{"lat":51.447601,"lng":-0.040671,"elevation":43.2},{"lat":51.447592,"lng":-0.040712,"elevation":43.1},{"lat":51.44757,"lng":-0.040778,"elevation":42.9},{"lat":51.447552,"lng":-0.040814,"elevation":42.8},{"lat":51.447537,"lng":-0.040853,"elevation":42.7},{"lat":51.447532,"lng":-0.040904,"elevation":42.5},{"lat":51.447519,"lng":-0.040958,"elevation":42.3},{"lat":51.447506,"lng":-0.041014,"elevation":42.1},{"lat":51.447489,"lng":-0.041086,"elevation":41.8},{"lat":51.447465,"lng":-0.041153,"elevation":41.6},{"lat":51.447445,"lng":-0.041203,"elevation":41.4},{"lat":51.447425,"lng":-0.041254,"elevation":41.2},{"lat":51.447406,"lng":-0.041304,"elevation":41.2},{"lat":51.447385,"lng":-0.041355,"elevation":41.2},{"lat":51.447364,"lng":-0.041402,"elevation":41.2},{"lat":51.447343,"lng":-0.041448,"elevation":41.2},{"lat":51.447323,"lng":-0.041495,"elevation":41.2},{"lat":51.447301,"lng":-0.041542,"elevation":41.2},{"lat":51.447278,"lng":-0.041589,"elevation":41.2},{"lat":51.447253,"lng":-0.041633,"elevation":41.2},{"lat":51.447228,"lng":-0.041679,"elevation":41.2},{"lat":51.447205,"lng":-0.04172,"elevation":41.2},{"lat":51.447188,"lng":-0.041754,"elevation":41.2},{"lat":51.447157,"lng":-0.041799,"elevation":41.2},{"lat":51.44712,"lng":-0.041838,"elevation":41.2},{"lat":51.447097,"lng":-0.041863,"elevation":41.2},{"lat":51.447051,"lng":-0.041911,"elevation":41.2},{"lat":51.447028,"lng":-0.041937,"elevation":41.1},{"lat":51.447003,"lng":-0.041963,"elevation":41.1},{"lat":51.446979,"lng":-0.04199,"elevation":41},{"lat":51.446951,"lng":-0.04202,"elevation":40.9},{"lat":51.446923,"lng":-0.042044,"elevation":40.9},{"lat":51.446891,"lng":-0.042061,"elevation":40.8},{"lat":51.446858,"lng":-0.042074,"elevation":40.7},{"lat":51.446829,"lng":-0.042095,"elevation":40.7},{"lat":51.4468,"lng":-0.042125,"elevation":40.6},{"lat":51.446773,"lng":-0.042163,"elevation":40.5},{"lat":51.44675,"lng":-0.0422,"elevation":40.4},{"lat":51.446727,"lng":-0.042239,"elevation":40.3},{"lat":51.446708,"lng":-0.042275,"elevation":40.2},{"lat":51.446687,"lng":-0.042306,"elevation":40.1},{"lat":51.446667,"lng":-0.042339,"elevation":40},{"lat":51.446646,"lng":-0.042367,"elevation":40},{"lat":51.446602,"lng":-0.04241,"elevation":39.8},{"lat":51.446555,"lng":-0.04245,"elevation":39.6},{"lat":51.446528,"lng":-0.042461,"elevation":39.6},{"lat":51.4465,"lng":-0.04247,"elevation":39.5},{"lat":51.44647,"lng":-0.042477,"elevation":39.4},{"lat":51.446442,"lng":-0.042484,"elevation":39.4},{"lat":51.446412,"lng":-0.042489,"elevation":39.3},{"lat":51.446382,"lng":-0.042488,"elevation":39.3},{"lat":51.446347,"lng":-0.042483,"elevation":39.2},{"lat":51.446315,"lng":-0.04248,"elevation":39.2},{"lat":51.446283,"lng":-0.042487,"elevation":39.1},{"lat":51.446254,"lng":-0.042494,"elevation":39},{"lat":51.446225,"lng":-0.042497,"elevation":38.9},{"lat":51.446197,"lng":-0.0425,"elevation":38.8},{"lat":51.446145,"lng":-0.042522,"elevation":38.6},{"lat":51.446094,"lng":-0.042537,"elevation":38.5},{"lat":51.446042,"lng":-0.04256,"elevation":38.2},{"lat":51.446016,"lng":-0.042573,"elevation":38.1},{"lat":51.445987,"lng":-0.042579,"elevation":38.1},{"lat":51.445958,"lng":-0.042584,"elevation":38},{"lat":51.445928,"lng":-0.042583,"elevation":37.9},{"lat":51.445899,"lng":-0.04258,"elevation":37.8},{"lat":51.445869,"lng":-0.042584,"elevation":37.7},{"lat":51.445837,"lng":-0.042589,"elevation":37.6},{"lat":51.445805,"lng":-0.042593,"elevation":37.5},{"lat":51.445776,"lng":-0.042603,"elevation":37.4},{"lat":51.445739,"lng":-0.042627,"elevation":37.3},{"lat":51.44571,"lng":-0.042646,"elevation":37.1},{"lat":51.445669,"lng":-0.04267,"elevation":37},{"lat":51.445624,"lng":-0.04269,"elevation":36.8},{"lat":51.445573,"lng":-0.042672,"elevation":36.7},{"lat":51.445548,"lng":-0.042654,"elevation":36.7},{"lat":51.445501,"lng":-0.042629,"elevation":36.6},{"lat":51.445452,"lng":-0.042623,"elevation":36.5},{"lat":51.445402,"lng":-0.042622,"elevation":36.3},{"lat":51.445358,"lng":-0.042621,"elevation":36.3},{"lat":51.445318,"lng":-0.042619,"elevation":36.3},{"lat":51.445291,"lng":-0.042615,"elevation":36.3},{"lat":51.445264,"lng":-0.042633,"elevation":36.3},{"lat":51.445268,"lng":-0.042681,"elevation":36.2},{"lat":51.445281,"lng":-0.042727,"elevation":36.2},{"lat":51.445293,"lng":-0.042782,"elevation":36.1},{"lat":51.445304,"lng":-0.042823,"elevation":36.1},{"lat":51.445319,"lng":-0.042875,"elevation":36},{"lat":51.445325,"lng":-0.042923,"elevation":36},{"lat":51.445326,"lng":-0.042978,"elevation":36.1},{"lat":51.445331,"lng":-0.043025,"elevation":36.2},{"lat":51.445335,"lng":-0.043077,"elevation":36.4},{"lat":51.44534,"lng":-0.043135,"elevation":36.5},{"lat":51.445362,"lng":-0.043179,"elevation":36.6},{"lat":51.445381,"lng":-0.04323,"elevation":36.7},{"lat":51.445391,"lng":-0.043275,"elevation":36.8},{"lat":51.445399,"lng":-0.04332,"elevation":37},{"lat":51.445398,"lng":-0.043375,"elevation":37.1},{"lat":51.445394,"lng":-0.043434,"elevation":37.2},{"lat":51.445388,"lng":-0.043487,"elevation":37.3},{"lat":51.445388,"lng":-0.043536,"elevation":37.5},{"lat":51.445387,"lng":-0.043592,"elevation":37.6},{"lat":51.445386,"lng":-0.04365,"elevation":37.7},{"lat":51.445387,"lng":-0.043714,"elevation":37.9},{"lat":51.445397,"lng":-0.043736,"elevation":37.9},{"lat":51.4454,"lng":-0.043783,"elevation":38.1},{"lat":51.445393,"lng":-0.043843,"elevation":38.2},{"lat":51.445384,"lng":-0.043888,"elevation":38.3},{"lat":51.445371,"lng":-0.043937,"elevation":38.4},{"lat":51.445371,"lng":-0.04399,"elevation":38.5},{"lat":51.445374,"lng":-0.044051,"elevation":38.7},{"lat":51.44538,"lng":-0.044113,"elevation":38.8},{"lat":51.445383,"lng":-0.044167,"elevation":38.9},{"lat":51.445388,"lng":-0.044216,"elevation":39.1},{"lat":51.445386,"lng":-0.044273,"elevation":39.2},{"lat":51.445384,"lng":-0.044317,"elevation":39.3},{"lat":51.445382,"lng":-0.044372,"elevation":39.4},{"lat":51.445377,"lng":-0.044424,"elevation":39.5},{"lat":51.445378,"lng":-0.044469,"elevation":39.6},{"lat":51.445384,"lng":-0.044523,"elevation":39.8},{"lat":51.445377,"lng":-0.044565,"elevation":39.9},{"lat":51.445359,"lng":-0.044603,"elevation":39.9},{"lat":51.445329,"lng":-0.04463,"elevation":39.9},{"lat":51.445296,"lng":-0.04465,"elevation":39.9},{"lat":51.445262,"lng":-0.044667,"elevation":39.8},{"lat":51.445228,"lng":-0.044688,"elevation":39.8},{"lat":51.44519,"lng":-0.044715,"elevation":39.7},{"lat":51.445154,"lng":-0.044726,"elevation":39.7},{"lat":51.445128,"lng":-0.04475,"elevation":39.6},{"lat":51.445096,"lng":-0.044768,"elevation":39.6},{"lat":51.445128,"lng":-0.044762,"elevation":39.7},{"lat":51.445137,"lng":-0.044816,"elevation":39.8},{"lat":51.445136,"lng":-0.044863,"elevation":39.9},{"lat":51.445138,"lng":-0.044914,"elevation":40},{"lat":51.445136,"lng":-0.044961,"elevation":40.1}],[{"lat":51.44522,"lng":-0.044862,"elevation":40.1},{"lat":51.445069,"lng":-0.044903,"elevation":39.8},{"lat":51.44522,"lng":-0.044825,"elevation":40},{"lat":51.445268,"lng":-0.044801,"elevation":40.1},{"lat":51.445327,"lng":-0.044671,"elevation":40},{"lat":51.445343,"lng":-0.044616,"elevation":39.9},{"lat":51.445334,"lng":-0.044573,"elevation":39.8},{"lat":51.445315,"lng":-0.044527,"elevation":39.6},{"lat":51.445296,"lng":-0.044483,"elevation":39.5},{"lat":51.445283,"lng":-0.044438,"elevation":39.4},{"lat":51.445279,"lng":-0.044383,"elevation":39.2},{"lat":51.445274,"lng":-0.044325,"elevation":39.1},{"lat":51.445263,"lng":-0.044272,"elevation":39},{"lat":51.445251,"lng":-0.044225,"elevation":38.8},{"lat":51.445238,"lng":-0.044178,"elevation":38.7},{"lat":51.445233,"lng":-0.044131,"elevation":38.6},{"lat":51.445231,"lng":-0.044082,"elevation":38.5},{"lat":51.445238,"lng":-0.044034,"elevation":38.4},{"lat":51.445247,"lng":-0.043987,"elevation":38.3},{"lat":51.445247,"lng":-0.043941,"elevation":38.2},{"lat":51.445245,"lng":-0.043894,"elevation":38.1},{"lat":51.445256,"lng":-0.043842,"elevation":38},{"lat":51.445269,"lng":-0.043788,"elevation":37.9},{"lat":51.445276,"lng":-0.043734,"elevation":37.8},{"lat":51.445283,"lng":-0.043684,"elevation":37.7},{"lat":51.445295,"lng":-0.043639,"elevation":37.6},{"lat":51.445305,"lng":-0.043596,"elevation":37.5},{"lat":51.44531,"lng":-0.043553,"elevation":37.4},{"lat":51.445315,"lng":-0.043489,"elevation":37.3},{"lat":51.445314,"lng":-0.043431,"elevation":37.2},{"lat":51.445321,"lng":-0.043378,"elevation":37},{"lat":51.445326,"lng":-0.043323,"elevation":36.9},{"lat":51.445326,"lng":-0.04326,"elevation":36.8},{"lat":51.445328,"lng":-0.043214,"elevation":36.7},{"lat":51.445325,"lng":-0.043163,"elevation":36.6},{"lat":51.445313,"lng":-0.043116,"elevation":36.4},{"lat":51.445299,"lng":-0.043069,"elevation":36.3},{"lat":51.445293,"lng":-0.043024,"elevation":36.2},{"lat":51.445288,"lng":-0.042981,"elevation":36.1},{"lat":51.445285,"lng":-0.042937,"elevation":36},{"lat":51.445285,"lng":-0.04289,"elevation":36},{"lat":51.445288,"lng":-0.042838,"elevation":36.1},{"lat":51.445294,"lng":-0.042786,"elevation":36.1},{"lat":51.445282,"lng":-0.042747,"elevation":36.2},{"lat":51.445251,"lng":-0.04274,"elevation":36.2},{"lat":51.445223,"lng":-0.042733,"elevation":36.2},{"lat":51.445214,"lng":-0.042688,"elevation":36.2},{"lat":51.445228,"lng":-0.042638,"elevation":36.3},{"lat":51.445247,"lng":-0.04259,"elevation":36.3},{"lat":51.445274,"lng":-0.042582,"elevation":36.3},{"lat":51.445303,"lng":-0.042579,"elevation":36.3},{"lat":51.445338,"lng":-0.042574,"elevation":36.4},{"lat":51.445372,"lng":-0.042569,"elevation":36.4},{"lat":51.445401,"lng":-0.042552,"elevation":36.4},{"lat":51.445426,"lng":-0.042526,"elevation":36.5},{"lat":51.445442,"lng":-0.042491,"elevation":36.6},{"lat":51.445443,"lng":-0.042445,"elevation":36.6},{"lat":51.445438,"lng":-0.042395,"elevation":36.7},{"lat":51.445438,"lng":-0.042347,"elevation":36.8},{"lat":51.445446,"lng":-0.042297,"elevation":36.8},{"lat":51.44545,"lng":-0.042242,"elevation":36.9},{"lat":51.445453,"lng":-0.04219,"elevation":37},{"lat":51.445455,"lng":-0.042141,"elevation":37.1},{"lat":51.445458,"lng":-0.042094,"elevation":37.1},{"lat":51.445457,"lng":-0.042031,"elevation":37.2},{"lat":51.445456,"lng":-0.041985,"elevation":37.3},{"lat":51.445455,"lng":-0.041942,"elevation":37.3},{"lat":51.445456,"lng":-0.041896,"elevation":37.4},{"lat":51.445456,"lng":-0.041851,"elevation":37.4},{"lat":51.445457,"lng":-0.041804,"elevation":37.5},{"lat":51.445461,"lng":-0.04176,"elevation":37.6},{"lat":51.445467,"lng":-0.041716,"elevation":37.6},{"lat":51.445475,"lng":-0.041673,"elevation":37.7},{"lat":51.445481,"lng":-0.041627,"elevation":37.8},{"lat":51.445491,"lng":-0.041582,"elevation":37.9},{"lat":51.4455,"lng":-0.041537,"elevation":38},{"lat":51.445507,"lng":-0.04149,"elevation":38.1},{"lat":51.445517,"lng":-0.041447,"elevation":38.2},{"lat":51.445527,"lng":-0.041401,"elevation":38.3},{"lat":51.445536,"lng":-0.041354,"elevation":38.4},{"lat":51.445546,"lng":-0.041308,"elevation":38.5},{"lat":51.445552,"lng":-0.041259,"elevation":38.6},{"lat":51.445558,"lng":-0.04121,"elevation":38.9},{"lat":51.445565,"lng":-0.041155,"elevation":39.3},{"lat":51.445576,"lng":-0.041097,"elevation":39.7},{"lat":51.445582,"lng":-0.041034,"elevation":40.1},{"lat":51.445586,"lng":-0.04099,"elevation":40.4},{"lat":51.445589,"lng":-0.040939,"elevation":40.8},{"lat":51.445595,"lng":-0.040892,"elevation":41.1},{"lat":51.4456,"lng":-0.040847,"elevation":41.4},{"lat":51.445606,"lng":-0.040799,"elevation":41.7},{"lat":51.445613,"lng":-0.040752,"elevation":42.1},{"lat":51.445619,"lng":-0.040709,"elevation":42.4},{"lat":51.445625,"lng":-0.040652,"elevation":42.8},{"lat":51.445629,"lng":-0.040604,"elevation":43.1},{"lat":51.445632,"lng":-0.040555,"elevation":43.4},{"lat":51.44564,"lng":-0.040504,"elevation":43.8},{"lat":51.445653,"lng":-0.040459,"elevation":44.1},{"lat":51.445665,"lng":-0.040408,"elevation":44.6},{"lat":51.445668,"lng":-0.040349,"elevation":45},{"lat":51.445673,"lng":-0.040293,"elevation":45.5},{"lat":51.44567,"lng":-0.040238,"elevation":45.9},{"lat":51.445668,"lng":-0.040184,"elevation":46.3},{"lat":51.445666,"lng":-0.040128,"elevation":46.7},{"lat":51.445676,"lng":-0.040075,"elevation":47.1},{"lat":51.445686,"lng":-0.040019,"elevation":47.6},{"lat":51.445692,"lng":-0.039962,"elevation":48.1},{"lat":51.445691,"lng":-0.039903,"elevation":48.5},{"lat":51.44569,"lng":-0.039848,"elevation":49},{"lat":51.445694,"lng":-0.039795,"elevation":49.4},{"lat":51.445702,"lng":-0.039741,"elevation":49.9},{"lat":51.445711,"lng":-0.039687,"elevation":50.3},{"lat":51.445714,"lng":-0.03963,"elevation":50.8},{"lat":51.445717,"lng":-0.039571,"elevation":51.2},{"lat":51.445721,"lng":-0.039511,"elevation":51.3},{"lat":51.445726,"lng":-0.039455,"elevation":51.3},{"lat":51.44575,"lng":-0.039406,"elevation":51.6},{"lat":51.445771,"lng":-0.039346,"elevation":51.8},{"lat":51.445776,"lng":-0.03929,"elevation":51.9},{"lat":51.445785,"lng":-0.03921,"elevation":52},{"lat":51.445792,"lng":-0.039166,"elevation":52.2},{"lat":51.445803,"lng":-0.039082,"elevation":52.3},{"lat":51.445811,"lng":-0.039033,"elevation":52.5},{"lat":51.445822,"lng":-0.038952,"elevation":52.7},{"lat":51.445838,"lng":-0.038901,"elevation":52.9},{"lat":51.44585,"lng":-0.038858,"elevation":53},{"lat":51.445865,"lng":-0.038814,"elevation":53.2},{"lat":51.445876,"lng":-0.038738,"elevation":53.4},{"lat":51.445873,"lng":-0.038663,"elevation":53.5},{"lat":51.445874,"lng":-0.038581,"elevation":53.7},{"lat":51.445882,"lng":-0.038539,"elevation":53.9},{"lat":51.44589,"lng":-0.038467,"elevation":54.1},{"lat":51.445881,"lng":-0.038396,"elevation":54.1},{"lat":51.445865,"lng":-0.038318,"elevation":54.1},{"lat":51.445852,"lng":-0.038247,"elevation":54.1},{"lat":51.445851,"lng":-0.038172,"elevation":54.2},{"lat":51.445865,"lng":-0.038096,"elevation":54.5},{"lat":51.445895,"lng":-0.038026,"elevation":55},{"lat":51.445907,"lng":-0.037941,"elevation":55.2},{"lat":51.445907,"lng":-0.037894,"elevation":55.3},{"lat":51.445913,"lng":-0.037813,"elevation":55.2},{"lat":51.445929,"lng":-0.037732,"elevation":55.2},{"lat":51.445946,"lng":-0.037663,"elevation":55.2},{"lat":51.445957,"lng":-0.037592,"elevation":55.2},{"lat":51.445982,"lng":-0.037531,"elevation":55.3},{"lat":51.446022,"lng":-0.037495,"elevation":55.7},{"lat":51.446067,"lng":-0.037484,"elevation":56.1},{"lat":51.446118,"lng":-0.037497,"elevation":56.6},{"lat":51.446161,"lng":-0.037501,"elevation":57.1},{"lat":51.446193,"lng":-0.037529,"elevation":57.5},{"lat":51.446232,"lng":-0.037542,"elevation":57.9},{"lat":51.446277,"lng":-0.037557,"elevation":58.3},{"lat":51.446329,"lng":-0.037569,"elevation":58.5},{"lat":51.446357,"lng":-0.037569,"elevation":58.6},{"lat":51.446409,"lng":-0.037578,"elevation":58.9},{"lat":51.446436,"lng":-0.037584,"elevation":59},{"lat":51.446463,"lng":-0.037589,"elevation":59.1},{"lat":51.446492,"lng":-0.03759,"elevation":59.3},{"lat":51.446521,"lng":-0.03759,"elevation":59.4},{"lat":51.446548,"lng":-0.037588,"elevation":59.5},{"lat":51.446575,"lng":-0.03759,"elevation":59.6},{"lat":51.446628,"lng":-0.037605,"elevation":59.9},{"lat":51.446655,"lng":-0.037604,"elevation":60},{"lat":51.446682,"lng":-0.037599,"elevation":60.1},{"lat":51.44671,"lng":-0.037598,"elevation":60.2},{"lat":51.446739,"lng":-0.037597,"elevation":60.4},{"lat":51.446768,"lng":-0.037599,"elevation":60.5},{"lat":51.446796,"lng":-0.037604,"elevation":60.6},{"lat":51.446823,"lng":-0.037611,"elevation":60.8},{"lat":51.446855,"lng":-0.037622,"elevation":60.9},{"lat":51.446886,"lng":-0.037624,"elevation":61.1},{"lat":51.446917,"lng":-0.037624,"elevation":61.2},{"lat":51.446946,"lng":-0.03763,"elevation":61.4},{"lat":51.446974,"lng":-0.037636,"elevation":61.5},{"lat":51.447003,"lng":-0.037646,"elevation":61.7},{"lat":51.447031,"lng":-0.037653,"elevation":61.8},{"lat":51.447059,"lng":-0.037661,"elevation":62},{"lat":51.447089,"lng":-0.037666,"elevation":62},{"lat":51.447119,"lng":-0.037675,"elevation":61.7},{"lat":51.447154,"lng":-0.037688,"elevation":61.4},{"lat":51.447183,"lng":-0.037696,"elevation":61.1},{"lat":51.447211,"lng":-0.037702,"elevation":60.8},{"lat":51.447242,"lng":-0.037703,"elevation":60.4},{"lat":51.447264,"lng":-0.037655,"elevation":60},{"lat":51.447245,"lng":-0.037613,"elevation":60.1},{"lat":51.447221,"lng":-0.037575,"elevation":60.3},{"lat":51.4472,"lng":-0.037536,"elevation":60.4},{"lat":51.447182,"lng":-0.037498,"elevation":60.4},{"lat":51.447165,"lng":-0.03746,"elevation":60.5},{"lat":51.447148,"lng":-0.037426,"elevation":60.5},{"lat":51.447113,"lng":-0.037365,"elevation":60.7},{"lat":51.447098,"lng":-0.037328,"elevation":60.7},{"lat":51.447086,"lng":-0.037287,"elevation":60.7},{"lat":51.447073,"lng":-0.037245,"elevation":60.5},{"lat":51.447062,"lng":-0.037202,"elevation":60.3},{"lat":51.447052,"lng":-0.03716,"elevation":60.2},{"lat":51.447043,"lng":-0.037117,"elevation":60},{"lat":51.447034,"lng":-0.037074,"elevation":59.8},{"lat":51.447027,"lng":-0.037032,"elevation":59.6},{"lat":51.447019,"lng":-0.036988,"elevation":59.3},{"lat":51.447012,"lng":-0.036942,"elevation":59.1},{"lat":51.447005,"lng":-0.036895,"elevation":58.9},{"lat":51.446998,"lng":-0.036844,"elevation":58.6},{"lat":51.44699,"lng":-0.036793,"elevation":58.3},{"lat":51.446983,"lng":-0.036749,"elevation":58.1},{"lat":51.446978,"lng":-0.036697,"elevation":57.9},{"lat":51.446972,"lng":-0.036654,"elevation":57.7},{"lat":51.446969,"lng":-0.03661,"elevation":57.5},{"lat":51.446961,"lng":-0.036526,"elevation":57.1},{"lat":51.446957,"lng":-0.036482,"elevation":56.9},{"lat":51.446953,"lng":-0.036439,"elevation":56.7},{"lat":51.446946,"lng":-0.036357,"elevation":56.3},{"lat":51.446942,"lng":-0.036271,"elevation":55.9},{"lat":51.446939,"lng":-0.036228,"elevation":55.8},{"lat":51.446936,"lng":-0.036184,"elevation":55.7},{"lat":51.446935,"lng":-0.036139,"elevation":55.6},{"lat":51.446935,"lng":-0.036096,"elevation":55.5},{"lat":51.446925,"lng":-0.036012,"elevation":55.3},{"lat":51.446919,"lng":-0.035927,"elevation":55.1},{"lat":51.446919,"lng":-0.035884,"elevation":55},{"lat":51.446919,"lng":-0.035798,"elevation":54.8},{"lat":51.44692,"lng":-0.035712,"elevation":54.6},{"lat":51.446922,"lng":-0.035666,"elevation":54.5},{"lat":51.446924,"lng":-0.03562,"elevation":54.4},{"lat":51.446926,"lng":-0.035574,"elevation":54.3},{"lat":51.446928,"lng":-0.035527,"elevation":54.2},{"lat":51.446929,"lng":-0.03548,"elevation":54.1},{"lat":51.446931,"lng":-0.035435,"elevation":54},{"lat":51.446931,"lng":-0.035389,"elevation":53.9},{"lat":51.446929,"lng":-0.035343,"elevation":53.8},{"lat":51.446924,"lng":-0.035297,"elevation":53.7},{"lat":51.446926,"lng":-0.035248,"elevation":53.6},{"lat":51.446931,"lng":-0.035197,"elevation":53.5},{"lat":51.446938,"lng":-0.035146,"elevation":53.4},{"lat":51.446934,"lng":-0.035097,"elevation":53.2},{"lat":51.446921,"lng":-0.035049,"elevation":53.1},{"lat":51.446901,"lng":-0.035004,"elevation":53},{"lat":51.44688,"lng":-0.034958,"elevation":52.9},{"lat":51.44686,"lng":-0.034915,"elevation":52.8},{"lat":51.446842,"lng":-0.034876,"elevation":52.7},{"lat":51.446822,"lng":-0.034836,"elevation":52.6},{"lat":51.446803,"lng":-0.034796,"elevation":52.5},{"lat":51.446786,"lng":-0.034756,"elevation":52.4},{"lat":51.446772,"lng":-0.034716,"elevation":52.3},{"lat":51.44676,"lng":-0.034673,"elevation":52.2},{"lat":51.446748,"lng":-0.034628,"elevation":52.1},{"lat":51.446736,"lng":-0.034581,"elevation":52},{"lat":51.446725,"lng":-0.034534,"elevation":51.9},{"lat":51.446713,"lng":-0.034489,"elevation":51.8},{"lat":51.446701,"lng":-0.034444,"elevation":51.7},{"lat":51.446689,"lng":-0.034399,"elevation":51.6},{"lat":51.446679,"lng":-0.034354,"elevation":51.4},{"lat":51.44667,"lng":-0.034311,"elevation":51.3},{"lat":51.446661,"lng":-0.034266,"elevation":51.2},{"lat":51.446653,"lng":-0.034222,"elevation":51.1},{"lat":51.446643,"lng":-0.034179,"elevation":51},{"lat":51.44663,"lng":-0.034136,"elevation":50.9},{"lat":51.446619,"lng":-0.034093,"elevation":50.8},{"lat":51.446611,"lng":-0.034047,"elevation":50.7},{"lat":51.446601,"lng":-0.034001,"elevation":50.6},{"lat":51.446591,"lng":-0.033957,"elevation":50.5},{"lat":51.446579,"lng":-0.033915,"elevation":50.4},{"lat":51.446565,"lng":-0.033876,"elevation":50.3},{"lat":51.446554,"lng":-0.033837,"elevation":50.2},{"lat":51.446537,"lng":-0.033758,"elevation":50},{"lat":51.446519,"lng":-0.033678,"elevation":49.8},{"lat":51.446502,"lng":-0.033641,"elevation":49.6},{"lat":51.446483,"lng":-0.033603,"elevation":49.5},{"lat":51.446462,"lng":-0.033569,"elevation":49.4},{"lat":51.446438,"lng":-0.033491,"elevation":49.1},{"lat":51.446429,"lng":-0.03345,"elevation":49},{"lat":51.44644,"lng":-0.03337,"elevation":48.7},{"lat":51.446465,"lng":-0.033351,"elevation":48.7},{"lat":51.446494,"lng":-0.033343,"elevation":48.7},{"lat":51.446523,"lng":-0.033332,"elevation":48.7},{"lat":51.446552,"lng":-0.033316,"elevation":48.6},{"lat":51.446579,"lng":-0.033298,"elevation":48.6},{"lat":51.446604,"lng":-0.033276,"elevation":48.5},{"lat":51.446649,"lng":-0.033225,"elevation":48.4},{"lat":51.446676,"lng":-0.033205,"elevation":48.4},{"lat":51.446704,"lng":-0.033186,"elevation":48.3},{"lat":51.446728,"lng":-0.033166,"elevation":48.3},{"lat":51.446766,"lng":-0.033111,"elevation":48.2},{"lat":51.446806,"lng":-0.033063,"elevation":48.1},{"lat":51.446832,"lng":-0.033047,"elevation":48.1},{"lat":51.44686,"lng":-0.03303,"elevation":48},{"lat":51.446889,"lng":-0.033016,"elevation":48},{"lat":51.44692,"lng":-0.033003,"elevation":48},{"lat":51.446948,"lng":-0.032985,"elevation":48},{"lat":51.446975,"lng":-0.032961,"elevation":48},{"lat":51.446998,"lng":-0.032931,"elevation":47.9},{"lat":51.447019,"lng":-0.0329,"elevation":47.9},{"lat":51.447038,"lng":-0.032867,"elevation":47.8},{"lat":51.447057,"lng":-0.032838,"elevation":47.8},{"lat":51.447107,"lng":-0.032794,"elevation":47.7},{"lat":51.447157,"lng":-0.032755,"elevation":47.6},{"lat":51.447183,"lng":-0.032731,"elevation":47.6},{"lat":51.447234,"lng":-0.032699,"elevation":47.5},{"lat":51.447262,"lng":-0.032684,"elevation":47.5},{"lat":51.447299,"lng":-0.032644,"elevation":47.4},{"lat":51.447343,"lng":-0.032609,"elevation":47.4},{"lat":51.447389,"lng":-0.032576,"elevation":47.3},{"lat":51.447434,"lng":-0.032535,"elevation":47.3},{"lat":51.447478,"lng":-0.032495,"elevation":47.2},{"lat":51.447525,"lng":-0.032466,"elevation":47.2},{"lat":51.447548,"lng":-0.032443,"elevation":47.2},{"lat":51.447574,"lng":-0.032424,"elevation":47.2},{"lat":51.447603,"lng":-0.03241,"elevation":47.2},{"lat":51.447636,"lng":-0.032394,"elevation":47.2},{"lat":51.447666,"lng":-0.032373,"elevation":47.2},{"lat":51.447696,"lng":-0.032353,"elevation":47.1},{"lat":51.447725,"lng":-0.032337,"elevation":47.1},{"lat":51.447754,"lng":-0.032325,"elevation":47.2},{"lat":51.447781,"lng":-0.032309,"elevation":47.2},{"lat":51.447809,"lng":-0.03229,"elevation":47.2},{"lat":51.447835,"lng":-0.032265,"elevation":47.1},{"lat":51.447859,"lng":-0.032237,"elevation":47.1},{"lat":51.447882,"lng":-0.032212,"elevation":47.1},{"lat":51.447927,"lng":-0.032156,"elevation":47.1},{"lat":51.447951,"lng":-0.032133,"elevation":47.1},{"lat":51.447971,"lng":-0.032102,"elevation":47},{"lat":51.447991,"lng":-0.03207,"elevation":47},{"lat":51.448024,"lng":-0.032008,"elevation":46.8},{"lat":51.44806,"lng":-0.031947,"elevation":46.7},{"lat":51.448097,"lng":-0.031883,"elevation":46.5},{"lat":51.448116,"lng":-0.031851,"elevation":46.4},{"lat":51.448135,"lng":-0.031818,"elevation":46.4},{"lat":51.448164,"lng":-0.031745,"elevation":46.2},{"lat":51.448177,"lng":-0.031705,"elevation":46.1},{"lat":51.448189,"lng":-0.031666,"elevation":46},{"lat":51.448203,"lng":-0.031625,"elevation":45.9},{"lat":51.448218,"lng":-0.031586,"elevation":45.8},{"lat":51.448233,"lng":-0.031548,"elevation":45.7},{"lat":51.44825,"lng":-0.031511,"elevation":45.6},{"lat":51.448269,"lng":-0.031476,"elevation":45.5},{"lat":51.448306,"lng":-0.031412,"elevation":45.4},{"lat":51.448319,"lng":-0.031373,"elevation":45.3},{"lat":51.448332,"lng":-0.031334,"elevation":45.2},{"lat":51.448345,"lng":-0.031293,"elevation":45.1},{"lat":51.448358,"lng":-0.031249,"elevation":45},{"lat":51.448372,"lng":-0.031205,"elevation":44.8},{"lat":51.448385,"lng":-0.03116,"elevation":44.5},{"lat":51.448399,"lng":-0.031111,"elevation":44.3},{"lat":51.448407,"lng":-0.031065,"elevation":44},{"lat":51.448414,"lng":-0.031023,"elevation":43.8},{"lat":51.448422,"lng":-0.03098,"elevation":43.6},{"lat":51.448426,"lng":-0.030936,"elevation":43.3},{"lat":51.448431,"lng":-0.030894,"elevation":43.1},{"lat":51.448435,"lng":-0.030808,"elevation":42.7},{"lat":51.448438,"lng":-0.030763,"elevation":42.4},{"lat":51.44844,"lng":-0.03072,"elevation":42.2},{"lat":51.448444,"lng":-0.030635,"elevation":41.8},{"lat":51.448445,"lng":-0.030591,"elevation":41.5},{"lat":51.448447,"lng":-0.030547,"elevation":41.3},{"lat":51.44845,"lng":-0.030503,"elevation":41.1},{"lat":51.448449,"lng":-0.030458,"elevation":40.9},{"lat":51.448448,"lng":-0.03037,"elevation":40.4},{"lat":51.448453,"lng":-0.030324,"elevation":40.1},{"lat":51.448459,"lng":-0.030278,"elevation":39.8},{"lat":51.448467,"lng":-0.030232,"elevation":39.6},{"lat":51.448471,"lng":-0.030186,"elevation":39.3},{"lat":51.448475,"lng":-0.030141,"elevation":39},{"lat":51.448477,"lng":-0.030096,"elevation":38.7},{"lat":51.448481,"lng":-0.030052,"elevation":38.5},{"lat":51.448484,"lng":-0.030009,"elevation":38.2},{"lat":51.448487,"lng":-0.029965,"elevation":38},{"lat":51.448489,"lng":-0.02992,"elevation":37.7},{"lat":51.44849,"lng":-0.029875,"elevation":37.4},{"lat":51.448486,"lng":-0.029831,"elevation":37.2},{"lat":51.448489,"lng":-0.029753,"elevation":36.7},{"lat":51.448533,"lng":-0.029738,"elevation":36.7},{"lat":51.448578,"lng":-0.02975,"elevation":36.8},{"lat":51.448624,"lng":-0.029789,"elevation":37.1},{"lat":51.44865,"lng":-0.029808,"elevation":37.2},{"lat":51.448675,"lng":-0.029825,"elevation":37.4},{"lat":51.448724,"lng":-0.029852,"elevation":37.6},{"lat":51.448772,"lng":-0.029869,"elevation":37.7},{"lat":51.448821,"lng":-0.029876,"elevation":37.6},{"lat":51.448867,"lng":-0.029872,"elevation":37.5},{"lat":51.448909,"lng":-0.02987,"elevation":37.5},{"lat":51.44895,"lng":-0.029881,"elevation":37.5},{"lat":51.448992,"lng":-0.029902,"elevation":37.5},{"lat":51.44904,"lng":-0.029913,"elevation":37.5},{"lat":51.449094,"lng":-0.02992,"elevation":37.4},{"lat":51.449121,"lng":-0.029923,"elevation":37.4},{"lat":51.449149,"lng":-0.029927,"elevation":37.4},{"lat":51.449177,"lng":-0.029928,"elevation":37.3},{"lat":51.449206,"lng":-0.02993,"elevation":37.3},{"lat":51.449234,"lng":-0.029935,"elevation":37.3},{"lat":51.449262,"lng":-0.029938,"elevation":37.3},{"lat":51.449311,"lng":-0.029946,"elevation":37.2},{"lat":51.449339,"lng":-0.03,"elevation":37.4},{"lat":51.449345,"lng":-0.030072,"elevation":37.8},{"lat":51.44934,"lng":-0.030143,"elevation":38.2},{"lat":51.44934,"lng":-0.030208,"elevation":38.5},{"lat":51.449343,"lng":-0.030276,"elevation":38.9},{"lat":51.449348,"lng":-0.030351,"elevation":39.2},{"lat":51.44937,"lng":-0.03042,"elevation":39.5},{"lat":51.449393,"lng":-0.030489,"elevation":39.7},{"lat":51.449416,"lng":-0.030555,"elevation":39.9},{"lat":51.449433,"lng":-0.030631,"elevation":40.2},{"lat":51.449448,"lng":-0.030668,"elevation":40.3},{"lat":51.449464,"lng":-0.030708,"elevation":40.4},{"lat":51.44948,"lng":-0.030748,"elevation":40.5},{"lat":51.449494,"lng":-0.030786,"elevation":40.6},{"lat":51.449516,"lng":-0.030856,"elevation":40.8},{"lat":51.449526,"lng":-0.030902,"elevation":40.9},{"lat":51.449549,"lng":-0.030978,"elevation":41.1},{"lat":51.449569,"lng":-0.031053,"elevation":41.3},{"lat":51.44959,"lng":-0.031124,"elevation":41.5},{"lat":51.449615,"lng":-0.03119,"elevation":41.5},{"lat":51.44965,"lng":-0.031224,"elevation":41.2},{"lat":51.449675,"lng":-0.031282,"elevation":41},{"lat":51.449691,"lng":-0.031323,"elevation":40.7},{"lat":51.449707,"lng":-0.031362,"elevation":40.5},{"lat":51.449723,"lng":-0.031399,"elevation":40.3},{"lat":51.449735,"lng":-0.031438,"elevation":40.1},{"lat":51.449749,"lng":-0.03148,"elevation":39.9},{"lat":51.449761,"lng":-0.031522,"elevation":39.8},{"lat":51.449775,"lng":-0.031562,"elevation":39.6},{"lat":51.449787,"lng":-0.031603,"elevation":39.4},{"lat":51.449799,"lng":-0.031644,"elevation":39.2},{"lat":51.449812,"lng":-0.031685,"elevation":39},{"lat":51.449826,"lng":-0.031734,"elevation":38.8},{"lat":51.449844,"lng":-0.031788,"elevation":38.5},{"lat":51.449863,"lng":-0.031838,"elevation":38.3},{"lat":51.449886,"lng":-0.031863,"elevation":38},{"lat":51.449908,"lng":-0.031896,"elevation":37.7},{"lat":51.449928,"lng":-0.031933,"elevation":37.5},{"lat":51.44994,"lng":-0.031979,"elevation":37.3},{"lat":51.44995,"lng":-0.032027,"elevation":37.1},{"lat":51.449958,"lng":-0.032073,"elevation":37},{"lat":51.449965,"lng":-0.032153,"elevation":36.9},{"lat":51.44998,"lng":-0.032227,"elevation":36.7},{"lat":51.449999,"lng":-0.032305,"elevation":36.5},{"lat":51.45002,"lng":-0.032373,"elevation":36.3},{"lat":51.450035,"lng":-0.032436,"elevation":36.1},{"lat":51.450035,"lng":-0.032511,"elevation":36.1},{"lat":51.45002,"lng":-0.032553,"elevation":36.3},{"lat":51.45,"lng":-0.032589,"elevation":36.5},{"lat":51.449978,"lng":-0.032618,"elevation":36.7},{"lat":51.449955,"lng":-0.032643,"elevation":37},{"lat":51.449912,"lng":-0.032689,"elevation":37.5},{"lat":51.449875,"lng":-0.032733,"elevation":37.8},{"lat":51.449868,"lng":-0.032782,"elevation":37.9},{"lat":51.449843,"lng":-0.032851,"elevation":38.2},{"lat":51.449804,"lng":-0.032898,"elevation":38.6},{"lat":51.44976,"lng":-0.032941,"elevation":39},{"lat":51.44972,"lng":-0.032976,"elevation":39.3},{"lat":51.449682,"lng":-0.033011,"elevation":39.6},{"lat":51.449646,"lng":-0.033041,"elevation":39.9},{"lat":51.449607,"lng":-0.033063,"elevation":40.2},{"lat":51.449571,"lng":-0.033084,"elevation":40.5},{"lat":51.449526,"lng":-0.033104,"elevation":40.8},{"lat":51.449479,"lng":-0.033133,"elevation":41.1},{"lat":51.449433,"lng":-0.033146,"elevation":41.4},{"lat":51.449385,"lng":-0.033152,"elevation":41.8},{"lat":51.449357,"lng":-0.033156,"elevation":42},{"lat":51.44933,"lng":-0.033157,"elevation":42.3},{"lat":51.4493,"lng":-0.033156,"elevation":42.5},{"lat":51.44925,"lng":-0.033147,"elevation":43},{"lat":51.449205,"lng":-0.033151,"elevation":43.3},{"lat":51.449181,"lng":-0.033173,"elevation":43.5},{"lat":51.449158,"lng":-0.033198,"elevation":43.6},{"lat":51.449117,"lng":-0.033225,"elevation":43.8},{"lat":51.449089,"lng":-0.033228,"elevation":44},{"lat":51.449048,"lng":-0.033247,"elevation":44.3},{"lat":51.449012,"lng":-0.033275,"elevation":44.5},{"lat":51.448974,"lng":-0.033303,"elevation":44.7},{"lat":51.448926,"lng":-0.033332,"elevation":45},{"lat":51.448897,"lng":-0.033339,"elevation":45.2},{"lat":51.448869,"lng":-0.033346,"elevation":45.5},{"lat":51.448817,"lng":-0.033355,"elevation":45.9},{"lat":51.448766,"lng":-0.033362,"elevation":46.3},{"lat":51.448738,"lng":-0.033367,"elevation":46.4},{"lat":51.448686,"lng":-0.033375,"elevation":46.5},{"lat":51.448637,"lng":-0.033392,"elevation":46.6},{"lat":51.448604,"lng":-0.033454,"elevation":46.5},{"lat":51.448584,"lng":-0.033528,"elevation":46.4},{"lat":51.448573,"lng":-0.033606,"elevation":46.2},{"lat":51.448565,"lng":-0.033686,"elevation":46.1},{"lat":51.448576,"lng":-0.033762,"elevation":45.8},{"lat":51.448597,"lng":-0.033832,"elevation":45.5},{"lat":51.44862,"lng":-0.033902,"elevation":45.2},{"lat":51.448635,"lng":-0.033972,"elevation":44.9},{"lat":51.448652,"lng":-0.034052,"elevation":44.5},{"lat":51.448662,"lng":-0.034093,"elevation":44.3},{"lat":51.448678,"lng":-0.034174,"elevation":44},{"lat":51.448685,"lng":-0.034216,"elevation":43.8},{"lat":51.448688,"lng":-0.034261,"elevation":43.6},{"lat":51.448694,"lng":-0.034314,"elevation":43.4},{"lat":51.448699,"lng":-0.034361,"elevation":43.2},{"lat":51.448702,"lng":-0.034405,"elevation":43},{"lat":51.448706,"lng":-0.034484,"elevation":42.7},{"lat":51.448723,"lng":-0.034531,"elevation":42.4},{"lat":51.448753,"lng":-0.034606,"elevation":42},{"lat":51.448763,"lng":-0.034641,"elevation":42},{"lat":51.448782,"lng":-0.034719,"elevation":41.9},{"lat":51.448797,"lng":-0.034799,"elevation":41.9},{"lat":51.448804,"lng":-0.034847,"elevation":41.9},{"lat":51.448808,"lng":-0.034893,"elevation":41.9},{"lat":51.448815,"lng":-0.034938,"elevation":41.9},{"lat":51.448821,"lng":-0.034981,"elevation":41.9},{"lat":51.448827,"lng":-0.035026,"elevation":41.9},{"lat":51.448831,"lng":-0.035068,"elevation":41.9},{"lat":51.448834,"lng":-0.035157,"elevation":42},{"lat":51.448835,"lng":-0.035209,"elevation":42.1},{"lat":51.448834,"lng":-0.03526,"elevation":42.1},{"lat":51.448834,"lng":-0.035306,"elevation":42.2},{"lat":51.448835,"lng":-0.035354,"elevation":42.2},{"lat":51.448834,"lng":-0.0354,"elevation":42.3},{"lat":51.448833,"lng":-0.035446,"elevation":42.3},{"lat":51.448837,"lng":-0.035491,"elevation":42.3},{"lat":51.448843,"lng":-0.035534,"elevation":42.3},{"lat":51.448847,"lng":-0.035579,"elevation":42.4},{"lat":51.448834,"lng":-0.035659,"elevation":42.6},{"lat":51.448792,"lng":-0.035687,"elevation":43},{"lat":51.448745,"lng":-0.035693,"elevation":43.4},{"lat":51.448706,"lng":-0.035732,"elevation":43.7},{"lat":51.44868,"lng":-0.0358,"elevation":44},{"lat":51.448662,"lng":-0.035834,"elevation":44.2},{"lat":51.448641,"lng":-0.035863,"elevation":44.5},{"lat":51.448618,"lng":-0.035887,"elevation":44.7},{"lat":51.448594,"lng":-0.035912,"elevation":44.9},{"lat":51.448571,"lng":-0.035935,"elevation":45.1},{"lat":51.448523,"lng":-0.035968,"elevation":45.6},{"lat":51.448475,"lng":-0.035994,"elevation":46},{"lat":51.448448,"lng":-0.036012,"elevation":46.3},{"lat":51.448407,"lng":-0.036066,"elevation":46.7},{"lat":51.448385,"lng":-0.036146,"elevation":46.9},{"lat":51.448369,"lng":-0.036219,"elevation":47.2},{"lat":51.448371,"lng":-0.036289,"elevation":47.2},{"lat":51.448389,"lng":-0.036355,"elevation":47},{"lat":51.448411,"lng":-0.036422,"elevation":46.8},{"lat":51.448427,"lng":-0.036496,"elevation":46.6},{"lat":51.448448,"lng":-0.036572,"elevation":46.4},{"lat":51.448473,"lng":-0.036633,"elevation":46.2},{"lat":51.448495,"lng":-0.036689,"elevation":45.9},{"lat":51.448502,"lng":-0.036753,"elevation":45.8},{"lat":51.448508,"lng":-0.036828,"elevation":45.7},{"lat":51.448499,"lng":-0.036873,"elevation":45.8},{"lat":51.448491,"lng":-0.036947,"elevation":45.9},{"lat":51.448474,"lng":-0.037003,"elevation":46},{"lat":51.448465,"lng":-0.037052,"elevation":46.1},{"lat":51.448451,"lng":-0.037149,"elevation":46.2},{"lat":51.448438,"lng":-0.037193,"elevation":46.3},{"lat":51.44842,"lng":-0.037232,"elevation":46.5},{"lat":51.448403,"lng":-0.037268,"elevation":46.7},{"lat":51.448376,"lng":-0.037338,"elevation":47},{"lat":51.448357,"lng":-0.03741,"elevation":47.2},{"lat":51.448343,"lng":-0.037483,"elevation":47.4},{"lat":51.44833,"lng":-0.037532,"elevation":47.5},{"lat":51.448309,"lng":-0.037604,"elevation":47.8},{"lat":51.448292,"lng":-0.037652,"elevation":48},{"lat":51.448277,"lng":-0.037696,"elevation":48.2},{"lat":51.448246,"lng":-0.0378,"elevation":48.6},{"lat":51.448226,"lng":-0.037856,"elevation":48.9},{"lat":51.448212,"lng":-0.037901,"elevation":49.1},{"lat":51.448189,"lng":-0.037957,"elevation":49.2},{"lat":51.448169,"lng":-0.038005,"elevation":49.3},{"lat":51.448152,"lng":-0.038052,"elevation":49.3},{"lat":51.448132,"lng":-0.038105,"elevation":49.4},{"lat":51.448117,"lng":-0.038152,"elevation":49.4},{"lat":51.448105,"lng":-0.038194,"elevation":49.3},{"lat":51.448092,"lng":-0.03824,"elevation":49.3},{"lat":51.448079,"lng":-0.038294,"elevation":49.2},{"lat":51.448063,"lng":-0.038336,"elevation":49.2},{"lat":51.44807,"lng":-0.038404,"elevation":48.9},{"lat":51.448064,"lng":-0.038484,"elevation":48.6},{"lat":51.448056,"lng":-0.038571,"elevation":48.3},{"lat":51.448039,"lng":-0.03865,"elevation":48.1},{"lat":51.448028,"lng":-0.038694,"elevation":48},{"lat":51.448036,"lng":-0.038742,"elevation":47.7},{"lat":51.448046,"lng":-0.038788,"elevation":47.4},{"lat":51.448053,"lng":-0.038832,"elevation":47.2},{"lat":51.448057,"lng":-0.03888,"elevation":46.9},{"lat":51.448031,"lng":-0.038952,"elevation":46.9},{"lat":51.448021,"lng":-0.038997,"elevation":46.8},{"lat":51.447986,"lng":-0.03905,"elevation":46.9},{"lat":51.447973,"lng":-0.039094,"elevation":46.8},{"lat":51.447968,"lng":-0.039143,"elevation":46.6},{"lat":51.447964,"lng":-0.03919,"elevation":46.5},{"lat":51.447946,"lng":-0.039263,"elevation":46.3},{"lat":51.447929,"lng":-0.039301,"elevation":46.3},{"lat":51.447914,"lng":-0.039339,"elevation":46.2},{"lat":51.447887,"lng":-0.039416,"elevation":46.2},{"lat":51.447883,"lng":-0.039473,"elevation":45.9},{"lat":51.447875,"lng":-0.039524,"elevation":45.8},{"lat":51.447867,"lng":-0.039572,"elevation":45.7},{"lat":51.447861,"lng":-0.039621,"elevation":45.5},{"lat":51.447855,"lng":-0.039666,"elevation":45.4},{"lat":51.447837,"lng":-0.039742,"elevation":45.3},{"lat":51.447812,"lng":-0.039807,"elevation":45.3},{"lat":51.447802,"lng":-0.039849,"elevation":45.2},{"lat":51.447795,"lng":-0.039926,"elevation":45},{"lat":51.447782,"lng":-0.039965,"elevation":44.9},{"lat":51.447772,"lng":-0.040007,"elevation":44.9},{"lat":51.447754,"lng":-0.040089,"elevation":44.7},{"lat":51.44773,"lng":-0.040159,"elevation":44.5},{"lat":51.447717,"lng":-0.040199,"elevation":44.5},{"lat":51.447706,"lng":-0.040242,"elevation":44.4},{"lat":51.447697,"lng":-0.040285,"elevation":44.2},{"lat":51.447689,"lng":-0.040328,"elevation":44.1},{"lat":51.447672,"lng":-0.040373,"elevation":44},{"lat":51.447658,"lng":-0.040416,"elevation":43.9},{"lat":51.447635,"lng":-0.040487,"elevation":43.7},{"lat":51.447633,"lng":-0.040545,"elevation":43.5},{"lat":51.447614,"lng":-0.040582,"elevation":43.5},{"lat":51.447591,"lng":-0.040618,"elevation":43.5},{"lat":51.447571,"lng":-0.040651,"elevation":43.5},{"lat":51.447539,"lng":-0.040709,"elevation":43.4},{"lat":51.447512,"lng":-0.040764,"elevation":43.3},{"lat":51.447491,"lng":-0.040828,"elevation":43.1},{"lat":51.447483,"lng":-0.040893,"elevation":42.8},{"lat":51.44747,"lng":-0.040943,"elevation":42.6},{"lat":51.447462,"lng":-0.040995,"elevation":42.4},{"lat":51.447455,"lng":-0.041045,"elevation":42.1},{"lat":51.447448,"lng":-0.041091,"elevation":41.9},{"lat":51.447443,"lng":-0.041135,"elevation":41.7},{"lat":51.44744,"lng":-0.041187,"elevation":41.5},{"lat":51.447423,"lng":-0.041243,"elevation":41.2},{"lat":51.447394,"lng":-0.041327,"elevation":41.2},{"lat":51.44738,"lng":-0.041374,"elevation":41.2},{"lat":51.447361,"lng":-0.041418,"elevation":41.2},{"lat":51.447341,"lng":-0.041452,"elevation":41.2},{"lat":51.447322,"lng":-0.041484,"elevation":41.2},{"lat":51.447304,"lng":-0.041517,"elevation":41.2},{"lat":51.447288,"lng":-0.041554,"elevation":41.2},{"lat":51.447263,"lng":-0.041616,"elevation":41.2},{"lat":51.447215,"lng":-0.041644,"elevation":41.3},{"lat":51.447174,"lng":-0.04164,"elevation":41.4},{"lat":51.447146,"lng":-0.041673,"elevation":41.4},{"lat":51.447109,"lng":-0.041746,"elevation":41.4},{"lat":51.447092,"lng":-0.041787,"elevation":41.3},{"lat":51.447056,"lng":-0.041871,"elevation":41.2},{"lat":51.447039,"lng":-0.041909,"elevation":41.2},{"lat":51.447002,"lng":-0.041974,"elevation":41},{"lat":51.446982,"lng":-0.042012,"elevation":41},{"lat":51.446957,"lng":-0.042042,"elevation":40.9},{"lat":51.446908,"lng":-0.042094,"elevation":40.8},{"lat":51.446886,"lng":-0.04212,"elevation":40.7},{"lat":51.446862,"lng":-0.042147,"elevation":40.6},{"lat":51.446837,"lng":-0.042175,"elevation":40.6},{"lat":51.446811,"lng":-0.042204,"elevation":40.5},{"lat":51.446759,"lng":-0.042263,"elevation":40.3},{"lat":51.446734,"lng":-0.042295,"elevation":40.2},{"lat":51.446681,"lng":-0.042353,"elevation":40},{"lat":51.446656,"lng":-0.042385,"elevation":39.9},{"lat":51.446635,"lng":-0.042416,"elevation":39.8},{"lat":51.446589,"lng":-0.042469,"elevation":39.7},{"lat":51.44656,"lng":-0.042489,"elevation":39.6},{"lat":51.446533,"lng":-0.042513,"elevation":39.5},{"lat":51.446506,"lng":-0.042537,"elevation":39.4},{"lat":51.446479,"lng":-0.042561,"elevation":39.3},{"lat":51.446452,"lng":-0.042585,"elevation":39.2},{"lat":51.446401,"lng":-0.042601,"elevation":39.1},{"lat":51.446364,"lng":-0.042623,"elevation":38.9},{"lat":51.446338,"lng":-0.042639,"elevation":38.8},{"lat":51.446304,"lng":-0.042602,"elevation":38.9},{"lat":51.446281,"lng":-0.042564,"elevation":38.9},{"lat":51.446251,"lng":-0.042558,"elevation":38.9},{"lat":51.446222,"lng":-0.042565,"elevation":38.8},{"lat":51.446161,"lng":-0.04258,"elevation":38.6},{"lat":51.446131,"lng":-0.042577,"elevation":38.5},{"lat":51.446067,"lng":-0.04258,"elevation":38.3},{"lat":51.446035,"lng":-0.042582,"elevation":38.2},{"lat":51.445966,"lng":-0.042587,"elevation":38},{"lat":51.445932,"lng":-0.042587,"elevation":37.9},{"lat":51.445901,"lng":-0.042583,"elevation":37.8},{"lat":51.445845,"lng":-0.042578,"elevation":37.6},{"lat":51.445792,"lng":-0.042557,"elevation":37.5},{"lat":51.445764,"lng":-0.042547,"elevation":37.5},{"lat":51.445736,"lng":-0.042542,"elevation":37.4},{"lat":51.445709,"lng":-0.042532,"elevation":37.3},{"lat":51.44568,"lng":-0.042511,"elevation":37.3},{"lat":51.445652,"lng":-0.042506,"elevation":37.2},{"lat":51.4456,"lng":-0.042509,"elevation":37},{"lat":51.44555,"lng":-0.042501,"elevation":36.9},{"lat":51.445513,"lng":-0.042508,"elevation":36.8},{"lat":51.445481,"lng":-0.042505,"elevation":36.7},{"lat":51.445422,"lng":-0.042495,"elevation":36.5},{"lat":51.445395,"lng":-0.042501,"elevation":36.5},{"lat":51.445367,"lng":-0.042506,"elevation":36.5},{"lat":51.445312,"lng":-0.042513,"elevation":36.4},{"lat":51.445262,"lng":-0.042522,"elevation":36.4},{"lat":51.445223,"lng":-0.042551,"elevation":36.3},{"lat":51.445203,"lng":-0.042623,"elevation":36.3},{"lat":51.445194,"lng":-0.042693,"elevation":36.2},{"lat":51.445194,"lng":-0.042762,"elevation":36.1},{"lat":51.445201,"lng":-0.042814,"elevation":36.1},{"lat":51.445232,"lng":-0.04283,"elevation":36.1},{"lat":51.445262,"lng":-0.042841,"elevation":36.1},{"lat":51.445288,"lng":-0.042864,"elevation":36.1},{"lat":51.445286,"lng":-0.042917,"elevation":36},{"lat":51.445287,"lng":-0.042979,"elevation":36.1},{"lat":51.445299,"lng":-0.043021,"elevation":36.2},{"lat":51.445311,"lng":-0.043065,"elevation":36.3},{"lat":51.445318,"lng":-0.043109,"elevation":36.4},{"lat":51.445323,"lng":-0.043171,"elevation":36.6},{"lat":51.445329,"lng":-0.043227,"elevation":36.7},{"lat":51.445325,"lng":-0.043288,"elevation":36.8},{"lat":51.445317,"lng":-0.043352,"elevation":37},{"lat":51.44531,"lng":-0.043414,"elevation":37.1},{"lat":51.445313,"lng":-0.043471,"elevation":37.2},{"lat":51.445316,"lng":-0.043517,"elevation":37.4},{"lat":51.445321,"lng":-0.043563,"elevation":37.5},{"lat":51.445324,"lng":-0.043609,"elevation":37.6},{"lat":51.445328,"lng":-0.043654,"elevation":37.7},{"lat":51.445334,"lng":-0.043719,"elevation":37.8},{"lat":51.445339,"lng":-0.043763,"elevation":37.9},{"lat":51.445342,"lng":-0.043809,"elevation":38},{"lat":51.445346,"lng":-0.043867,"elevation":38.2},{"lat":51.445351,"lng":-0.043912,"elevation":38.3},{"lat":51.445354,"lng":-0.043975,"elevation":38.4},{"lat":51.445349,"lng":-0.044023,"elevation":38.5},{"lat":51.445326,"lng":-0.044077,"elevation":38.6},{"lat":51.445307,"lng":-0.044137,"elevation":38.7},{"lat":51.445309,"lng":-0.04419,"elevation":38.9},{"lat":51.445319,"lng":-0.044245,"elevation":39},{"lat":51.445327,"lng":-0.044294,"elevation":39.1},{"lat":51.445337,"lng":-0.044338,"elevation":39.2},{"lat":51.445345,"lng":-0.044381,"elevation":39.4},{"lat":51.445355,"lng":-0.044425,"elevation":39.5},{"lat":51.445369,"lng":-0.044474,"elevation":39.6},{"lat":51.445375,"lng":-0.044535,"elevation":39.8},{"lat":51.44539,"lng":-0.044588,"elevation":39.9},{"lat":51.445379,"lng":-0.044654,"elevation":40.1},{"lat":51.44536,"lng":-0.044692,"elevation":40.1},{"lat":51.445327,"lng":-0.044723,"elevation":40.1},{"lat":51.445293,"lng":-0.044741,"elevation":40.1},{"lat":51.445254,"lng":-0.044742,"elevation":40}],[{"lat":51.445427,"lng":-0.044542,"elevation":39.9},{"lat":51.445433,"lng":-0.04467,"elevation":40.2},{"lat":51.445415,"lng":-0.044621,"elevation":40.1},{"lat":51.445365,"lng":-0.044595,"elevation":39.9},{"lat":51.445499,"lng":-0.044597,"elevation":40.1},{"lat":51.445391,"lng":-0.044495,"elevation":39.7},{"lat":51.445386,"lng":-0.044445,"elevation":39.6},{"lat":51.445376,"lng":-0.044389,"elevation":39.4},{"lat":51.445388,"lng":-0.044339,"elevation":39.4},{"lat":51.445388,"lng":-0.044278,"elevation":39.2},{"lat":51.445385,"lng":-0.044222,"elevation":39.1},{"lat":51.445382,"lng":-0.044176,"elevation":39},{"lat":51.445387,"lng":-0.044118,"elevation":38.8},{"lat":51.445397,"lng":-0.044073,"elevation":38.7},{"lat":51.445412,"lng":-0.044032,"elevation":38.7},{"lat":51.445421,"lng":-0.043972,"elevation":38.5},{"lat":51.445406,"lng":-0.043926,"elevation":38.4},{"lat":51.445396,"lng":-0.04388,"elevation":38.3},{"lat":51.445388,"lng":-0.04383,"elevation":38.2},{"lat":51.44538,"lng":-0.043778,"elevation":38},{"lat":51.445371,"lng":-0.04373,"elevation":37.9},{"lat":51.445368,"lng":-0.043683,"elevation":37.8},{"lat":51.44536,"lng":-0.043633,"elevation":37.7},{"lat":51.445347,"lng":-0.043568,"elevation":37.5},{"lat":51.44534,"lng":-0.043508,"elevation":37.4},{"lat":51.445345,"lng":-0.043458,"elevation":37.2},{"lat":51.44534,"lng":-0.04341,"elevation":37.1},{"lat":51.445334,"lng":-0.043356,"elevation":37},{"lat":51.445334,"lng":-0.043305,"elevation":36.9},{"lat":51.445341,"lng":-0.043253,"elevation":36.8},{"lat":51.44535,"lng":-0.043202,"elevation":36.7},{"lat":51.445347,"lng":-0.043149,"elevation":36.5},{"lat":51.445345,"lng":-0.043106,"elevation":36.4},{"lat":51.445346,"lng":-0.043062,"elevation":36.3},{"lat":51.445344,"lng":-0.043017,"elevation":36.2},{"lat":51.445336,"lng":-0.042975,"elevation":36.1},{"lat":51.445337,"lng":-0.042929,"elevation":36},{"lat":51.445338,"lng":-0.04288,"elevation":36},{"lat":51.445337,"lng":-0.042835,"elevation":36.1},{"lat":51.445335,"lng":-0.042791,"elevation":36.1},{"lat":51.44533,"lng":-0.042726,"elevation":36.2},{"lat":51.445316,"lng":-0.042685,"elevation":36.2},{"lat":51.44529,"lng":-0.042675,"elevation":36.2},{"lat":51.445267,"lng":-0.042645,"elevation":36.3},{"lat":51.44527,"lng":-0.042591,"elevation":36.3},{"lat":51.445271,"lng":-0.042543,"elevation":36.4},{"lat":51.445294,"lng":-0.042509,"elevation":36.4},{"lat":51.445325,"lng":-0.04251,"elevation":36.4},{"lat":51.445357,"lng":-0.042512,"elevation":36.5},{"lat":51.445393,"lng":-0.042514,"elevation":36.5},{"lat":51.445422,"lng":-0.042502,"elevation":36.5},{"lat":51.445445,"lng":-0.04247,"elevation":36.6},{"lat":51.445473,"lng":-0.042425,"elevation":36.8},{"lat":51.445481,"lng":-0.042375,"elevation":36.9},{"lat":51.445479,"lng":-0.042324,"elevation":36.9},{"lat":51.44548,"lng":-0.042274,"elevation":37},{"lat":51.445482,"lng":-0.042224,"elevation":37.1},{"lat":51.445474,"lng":-0.042159,"elevation":37.1},{"lat":51.445468,"lng":-0.042116,"elevation":37.1},{"lat":51.445461,"lng":-0.042069,"elevation":37.2},{"lat":51.445453,"lng":-0.042017,"elevation":37.2},{"lat":51.445452,"lng":-0.04197,"elevation":37.3},{"lat":51.44545,"lng":-0.041905,"elevation":37.3},{"lat":51.445445,"lng":-0.041857,"elevation":37.4},{"lat":51.44545,"lng":-0.041798,"elevation":37.5},{"lat":51.445463,"lng":-0.041755,"elevation":37.6},{"lat":51.445467,"lng":-0.041707,"elevation":37.7},{"lat":51.445471,"lng":-0.041655,"elevation":37.7},{"lat":51.445477,"lng":-0.041607,"elevation":37.8},{"lat":51.445516,"lng":-0.041583,"elevation":38},{"lat":51.445536,"lng":-0.041551,"elevation":38.2},{"lat":51.445528,"lng":-0.041492,"elevation":38.2},{"lat":51.445526,"lng":-0.041437,"elevation":38.3},{"lat":51.445545,"lng":-0.041391,"elevation":38.4},{"lat":51.445566,"lng":-0.041358,"elevation":38.6},{"lat":51.445584,"lng":-0.04132,"elevation":38.7},{"lat":51.44557,"lng":-0.041261,"elevation":38.7},{"lat":51.445552,"lng":-0.041212,"elevation":38.9},{"lat":51.44552,"lng":-0.041183,"elevation":38.9},{"lat":51.445503,"lng":-0.041138,"elevation":39.1},{"lat":51.445484,"lng":-0.041091,"elevation":39.3},{"lat":51.445476,"lng":-0.041045,"elevation":39.5},{"lat":51.44548,"lng":-0.040994,"elevation":39.9},{"lat":51.445491,"lng":-0.040954,"elevation":40.2},{"lat":51.445521,"lng":-0.040906,"elevation":40.6},{"lat":51.445562,"lng":-0.040894,"elevation":40.9},{"lat":51.445589,"lng":-0.04087,"elevation":41.2},{"lat":51.445606,"lng":-0.04083,"elevation":41.5},{"lat":51.44562,"lng":-0.040784,"elevation":41.9},{"lat":51.445628,"lng":-0.040742,"elevation":42.2},{"lat":51.445626,"lng":-0.040676,"elevation":42.6},{"lat":51.445606,"lng":-0.040609,"elevation":42.9},{"lat":51.445585,"lng":-0.040566,"elevation":43.1},{"lat":51.445566,"lng":-0.040515,"elevation":43.3},{"lat":51.445562,"lng":-0.040463,"elevation":43.6},{"lat":51.44558,"lng":-0.040424,"elevation":43.9},{"lat":51.445612,"lng":-0.040381,"elevation":44.4},{"lat":51.445625,"lng":-0.040332,"elevation":44.9},{"lat":51.445613,"lng":-0.040292,"elevation":45.1},{"lat":51.445615,"lng":-0.040245,"elevation":45.5},{"lat":51.445609,"lng":-0.040199,"elevation":45.8},{"lat":51.445614,"lng":-0.040155,"elevation":46.1},{"lat":51.445642,"lng":-0.04011,"elevation":46.7},{"lat":51.445661,"lng":-0.040078,"elevation":47},{"lat":51.445681,"lng":-0.040033,"elevation":47.5},{"lat":51.445686,"lng":-0.039984,"elevation":47.9},{"lat":51.445675,"lng":-0.039938,"elevation":48.2},{"lat":51.445671,"lng":-0.039895,"elevation":48.5},{"lat":51.445685,"lng":-0.039855,"elevation":48.9},{"lat":51.445698,"lng":-0.039813,"elevation":49.3},{"lat":51.445695,"lng":-0.039756,"elevation":49.7},{"lat":51.445706,"lng":-0.03969,"elevation":50.3},{"lat":51.445727,"lng":-0.039651,"elevation":50.7},{"lat":51.44575,"lng":-0.039622,"elevation":51.1},{"lat":51.445761,"lng":-0.039564,"elevation":51.5},{"lat":51.445766,"lng":-0.039509,"elevation":51.6},{"lat":51.445769,"lng":-0.039464,"elevation":51.7},{"lat":51.44575,"lng":-0.039408,"elevation":51.6},{"lat":51.445738,"lng":-0.039353,"elevation":51.5},{"lat":51.445746,"lng":-0.039301,"elevation":51.6},{"lat":51.44574,"lng":-0.039233,"elevation":51.7},{"lat":51.445728,"lng":-0.039151,"elevation":51.6},{"lat":51.445724,"lng":-0.039106,"elevation":51.6},{"lat":51.44572,"lng":-0.039063,"elevation":51.6},{"lat":51.44573,"lng":-0.038985,"elevation":51.8},{"lat":51.445759,"lng":-0.038931,"elevation":52.1},{"lat":51.445783,"lng":-0.038897,"elevation":52.4},{"lat":51.445799,"lng":-0.038826,"elevation":52.6},{"lat":51.445801,"lng":-0.038738,"elevation":52.7},{"lat":51.445807,"lng":-0.038694,"elevation":52.8},{"lat":51.445813,"lng":-0.03865,"elevation":53},{"lat":51.445837,"lng":-0.038555,"elevation":53.4},{"lat":51.445848,"lng":-0.038504,"elevation":53.6},{"lat":51.445871,"lng":-0.038419,"elevation":54},{"lat":51.445877,"lng":-0.038377,"elevation":54.1},{"lat":51.445873,"lng":-0.038293,"elevation":54.2},{"lat":51.44587,"lng":-0.038218,"elevation":54.3},{"lat":51.445872,"lng":-0.038146,"elevation":54.5},{"lat":51.445869,"lng":-0.038067,"elevation":54.6},{"lat":51.44586,"lng":-0.038024,"elevation":54.6},{"lat":51.445873,"lng":-0.037951,"elevation":54.9},{"lat":51.445895,"lng":-0.037886,"elevation":55.1},{"lat":51.445917,"lng":-0.037813,"elevation":55.2},{"lat":51.445938,"lng":-0.037751,"elevation":55.3},{"lat":51.445964,"lng":-0.037701,"elevation":55.5},{"lat":51.446002,"lng":-0.037665,"elevation":55.8},{"lat":51.446041,"lng":-0.037621,"elevation":56.1},{"lat":51.446069,"lng":-0.037577,"elevation":56.3},{"lat":51.446095,"lng":-0.037541,"elevation":56.5},{"lat":51.446133,"lng":-0.037539,"elevation":56.9},{"lat":51.446175,"lng":-0.037556,"elevation":57.4},{"lat":51.446222,"lng":-0.037572,"elevation":57.9},{"lat":51.446271,"lng":-0.03759,"elevation":58.3},{"lat":51.446321,"lng":-0.037602,"elevation":58.6},{"lat":51.446369,"lng":-0.03762,"elevation":58.8},{"lat":51.446414,"lng":-0.037635,"elevation":59},{"lat":51.446443,"lng":-0.037646,"elevation":59.2},{"lat":51.446492,"lng":-0.037668,"elevation":59.5},{"lat":51.446527,"lng":-0.037681,"elevation":59.7},{"lat":51.446559,"lng":-0.03769,"elevation":59.8},{"lat":51.446596,"lng":-0.037678,"elevation":60},{"lat":51.446629,"lng":-0.037665,"elevation":60.1},{"lat":51.446658,"lng":-0.037652,"elevation":60.2},{"lat":51.446688,"lng":-0.037654,"elevation":60.3},{"lat":51.446721,"lng":-0.037655,"elevation":60.5},{"lat":51.446777,"lng":-0.037664,"elevation":60.7},{"lat":51.446806,"lng":-0.037673,"elevation":60.9},{"lat":51.446859,"lng":-0.037705,"elevation":61.2},{"lat":51.44686,"lng":-0.037755,"elevation":61.4},{"lat":51.446875,"lng":-0.037791,"elevation":61.6},{"lat":51.446884,"lng":-0.037858,"elevation":61.8},{"lat":51.446924,"lng":-0.037887,"elevation":62.1},{"lat":51.446971,"lng":-0.037894,"elevation":62.4},{"lat":51.447018,"lng":-0.037866,"elevation":62.5},{"lat":51.447067,"lng":-0.037869,"elevation":62.8},{"lat":51.447094,"lng":-0.037875,"elevation":62.7},{"lat":51.447122,"lng":-0.037879,"elevation":62.4},{"lat":51.447171,"lng":-0.03789,"elevation":61.9},{"lat":51.447216,"lng":-0.037861,"elevation":61.2},{"lat":51.447236,"lng":-0.037786,"elevation":60.8},{"lat":51.447223,"lng":-0.037703,"elevation":60.6},{"lat":51.447192,"lng":-0.037609,"elevation":60.7},{"lat":51.447174,"lng":-0.037557,"elevation":60.7},{"lat":51.447135,"lng":-0.037423,"elevation":60.7},{"lat":51.447117,"lng":-0.037353,"elevation":60.6},{"lat":51.447102,"lng":-0.037279,"elevation":60.5},{"lat":51.447085,"lng":-0.037215,"elevation":60.5},{"lat":51.44707,"lng":-0.037154,"elevation":60.2},{"lat":51.447058,"lng":-0.037109,"elevation":60},{"lat":51.447044,"lng":-0.037068,"elevation":59.8},{"lat":51.447028,"lng":-0.037017,"elevation":59.5},{"lat":51.447014,"lng":-0.03697,"elevation":59.2},{"lat":51.446998,"lng":-0.036919,"elevation":58.9},{"lat":51.446988,"lng":-0.036869,"elevation":58.7},{"lat":51.446977,"lng":-0.036817,"elevation":58.4},{"lat":51.446966,"lng":-0.036766,"elevation":58.2},{"lat":51.446958,"lng":-0.036719,"elevation":57.9},{"lat":51.446951,"lng":-0.03664,"elevation":57.6},{"lat":51.446951,"lng":-0.036559,"elevation":57.2},{"lat":51.446944,"lng":-0.036508,"elevation":57},{"lat":51.446941,"lng":-0.036463,"elevation":56.8},{"lat":51.44694,"lng":-0.036413,"elevation":56.5},{"lat":51.446933,"lng":-0.036361,"elevation":56.3},{"lat":51.446937,"lng":-0.036313,"elevation":56.1},{"lat":51.446938,"lng":-0.036267,"elevation":55.9},{"lat":51.446931,"lng":-0.036215,"elevation":55.7},{"lat":51.446923,"lng":-0.036139,"elevation":55.6},{"lat":51.446909,"lng":-0.036099,"elevation":55.5},{"lat":51.446894,"lng":-0.036056,"elevation":55.4},{"lat":51.446882,"lng":-0.036011,"elevation":55.3},{"lat":51.446869,"lng":-0.035963,"elevation":55.1},{"lat":51.446851,"lng":-0.035915,"elevation":55},{"lat":51.446839,"lng":-0.035863,"elevation":54.9},{"lat":51.446824,"lng":-0.035815,"elevation":54.8},{"lat":51.446817,"lng":-0.035766,"elevation":54.7},{"lat":51.446809,"lng":-0.035713,"elevation":54.6},{"lat":51.446807,"lng":-0.035664,"elevation":54.5},{"lat":51.446799,"lng":-0.035611,"elevation":54.4},{"lat":51.446817,"lng":-0.035538,"elevation":54.2},{"lat":51.446833,"lng":-0.035452,"elevation":54.1},{"lat":51.446833,"lng":-0.0354,"elevation":54},{"lat":51.446863,"lng":-0.035334,"elevation":53.8},{"lat":51.446883,"lng":-0.035286,"elevation":53.7},{"lat":51.446868,"lng":-0.03525,"elevation":53.6},{"lat":51.446857,"lng":-0.035209,"elevation":53.5},{"lat":51.446846,"lng":-0.035162,"elevation":53.4},{"lat":51.446826,"lng":-0.035125,"elevation":53.3},{"lat":51.446818,"lng":-0.035047,"elevation":53.1},{"lat":51.446816,"lng":-0.035002,"elevation":53},{"lat":51.446813,"lng":-0.034958,"elevation":52.9},{"lat":51.446827,"lng":-0.034905,"elevation":52.8},{"lat":51.446825,"lng":-0.034861,"elevation":52.7},{"lat":51.446803,"lng":-0.03478,"elevation":52.5},{"lat":51.446781,"lng":-0.034703,"elevation":52.3},{"lat":51.44677,"lng":-0.034635,"elevation":52.1},{"lat":51.446757,"lng":-0.034594,"elevation":52},{"lat":51.44674,"lng":-0.034519,"elevation":51.8},{"lat":51.446722,"lng":-0.034441,"elevation":51.7},{"lat":51.446712,"lng":-0.034362,"elevation":51.5},{"lat":51.446708,"lng":-0.034318,"elevation":51.4},{"lat":51.446698,"lng":-0.034276,"elevation":51.3},{"lat":51.446686,"lng":-0.034233,"elevation":51.2},{"lat":51.446671,"lng":-0.034195,"elevation":51.1},{"lat":51.446636,"lng":-0.03416,"elevation":51},{"lat":51.446615,"lng":-0.03413,"elevation":50.9},{"lat":51.446598,"lng":-0.034059,"elevation":50.7},{"lat":51.446585,"lng":-0.033988,"elevation":50.6},{"lat":51.446576,"lng":-0.03391,"elevation":50.4},{"lat":51.44657,"lng":-0.033837,"elevation":50.2},{"lat":51.44655,"lng":-0.033761,"elevation":50},{"lat":51.446518,"lng":-0.033642,"elevation":49.7},{"lat":51.446503,"lng":-0.033591,"elevation":49.5},{"lat":51.446489,"lng":-0.033542,"elevation":49.3},{"lat":51.446491,"lng":-0.033498,"elevation":49.2},{"lat":51.446496,"lng":-0.033443,"elevation":49},{"lat":51.44654,"lng":-0.033412,"elevation":48.9},{"lat":51.446575,"lng":-0.033389,"elevation":48.9},{"lat":51.446622,"lng":-0.033354,"elevation":48.8},{"lat":51.44666,"lng":-0.033313,"elevation":48.7},{"lat":51.446684,"lng":-0.03329,"elevation":48.6},{"lat":51.446709,"lng":-0.033261,"elevation":48.6},{"lat":51.446737,"lng":-0.033221,"elevation":48.5},{"lat":51.446766,"lng":-0.033171,"elevation":48.3},{"lat":51.44681,"lng":-0.033129,"elevation":48.3},{"lat":51.446837,"lng":-0.033107,"elevation":48.2},{"lat":51.446863,"lng":-0.033084,"elevation":48.2},{"lat":51.446889,"lng":-0.033063,"elevation":48.2},{"lat":51.446912,"lng":-0.033038,"elevation":48.1},{"lat":51.446935,"lng":-0.033013,"elevation":48.1},{"lat":51.446979,"lng":-0.032954,"elevation":48},{"lat":51.44702,"lng":-0.0329,"elevation":47.9},{"lat":51.447043,"lng":-0.032876,"elevation":47.9},{"lat":51.447067,"lng":-0.032855,"elevation":47.8},{"lat":51.447111,"lng":-0.032818,"elevation":47.8},{"lat":51.447156,"lng":-0.032776,"elevation":47.7},{"lat":51.447204,"lng":-0.032743,"elevation":47.6},{"lat":51.447253,"lng":-0.032717,"elevation":47.6},{"lat":51.4473,"lng":-0.032699,"elevation":47.5},{"lat":51.447331,"lng":-0.032679,"elevation":47.5},{"lat":51.447354,"lng":-0.032648,"elevation":47.5},{"lat":51.447371,"lng":-0.032609,"elevation":47.4},{"lat":51.447382,"lng":-0.032567,"elevation":47.3},{"lat":51.447398,"lng":-0.032498,"elevation":47.2},{"lat":51.44741,"lng":-0.032433,"elevation":47.1},{"lat":51.447425,"lng":-0.032377,"elevation":47},{"lat":51.447452,"lng":-0.032338,"elevation":46.9},{"lat":51.447494,"lng":-0.032312,"elevation":46.9},{"lat":51.447542,"lng":-0.032287,"elevation":46.9},{"lat":51.447596,"lng":-0.032262,"elevation":46.9},{"lat":51.447627,"lng":-0.032251,"elevation":46.9},{"lat":51.447658,"lng":-0.032236,"elevation":46.9},{"lat":51.447691,"lng":-0.03222,"elevation":46.9},{"lat":51.447747,"lng":-0.032185,"elevation":46.9},{"lat":51.447788,"lng":-0.032162,"elevation":47},{"lat":51.447817,"lng":-0.032139,"elevation":47},{"lat":51.447849,"lng":-0.032116,"elevation":47},{"lat":51.447876,"lng":-0.032093,"elevation":47},{"lat":51.447908,"lng":-0.032083,"elevation":47},{"lat":51.447962,"lng":-0.03205,"elevation":46.9},{"lat":51.447982,"lng":-0.032015,"elevation":46.8},{"lat":51.448001,"lng":-0.031978,"elevation":46.7},{"lat":51.448022,"lng":-0.031944,"elevation":46.7},{"lat":51.448041,"lng":-0.031911,"elevation":46.6},{"lat":51.448071,"lng":-0.031842,"elevation":46.4},{"lat":51.448087,"lng":-0.031806,"elevation":46.3},{"lat":51.448108,"lng":-0.031733,"elevation":46.2},{"lat":51.448124,"lng":-0.031657,"elevation":46},{"lat":51.448151,"lng":-0.031586,"elevation":45.8},{"lat":51.448168,"lng":-0.031552,"elevation":45.7},{"lat":51.448187,"lng":-0.03152,"elevation":45.6},{"lat":51.448204,"lng":-0.031482,"elevation":45.6},{"lat":51.448221,"lng":-0.031442,"elevation":45.5},{"lat":51.448239,"lng":-0.031395,"elevation":45.3},{"lat":51.448266,"lng":-0.031347,"elevation":45.2},{"lat":51.448291,"lng":-0.031304,"elevation":45.1},{"lat":51.448313,"lng":-0.031267,"elevation":45},{"lat":51.448335,"lng":-0.031227,"elevation":44.9},{"lat":51.448356,"lng":-0.031183,"elevation":44.6},{"lat":51.448375,"lng":-0.03114,"elevation":44.4},{"lat":51.448392,"lng":-0.031095,"elevation":44.2},{"lat":51.448407,"lng":-0.031051,"elevation":43.9},{"lat":51.448419,"lng":-0.031005,"elevation":43.7},{"lat":51.448431,"lng":-0.030957,"elevation":43.5},{"lat":51.448439,"lng":-0.03091,"elevation":43.2},{"lat":51.448451,"lng":-0.030819,"elevation":42.7},{"lat":51.44845,"lng":-0.030769,"elevation":42.5},{"lat":51.448446,"lng":-0.03067,"elevation":42},{"lat":51.448433,"lng":-0.030601,"elevation":41.6},{"lat":51.448426,"lng":-0.030536,"elevation":41.2},{"lat":51.448427,"lng":-0.030491,"elevation":41},{"lat":51.448421,"lng":-0.030427,"elevation":40.7},{"lat":51.448425,"lng":-0.030383,"elevation":40.4},{"lat":51.44843,"lng":-0.030339,"elevation":40.1},{"lat":51.448433,"lng":-0.030288,"elevation":39.8},{"lat":51.448433,"lng":-0.030236,"elevation":39.5},{"lat":51.448433,"lng":-0.030181,"elevation":39.2},{"lat":51.448434,"lng":-0.030131,"elevation":38.9},{"lat":51.448443,"lng":-0.030048,"elevation":38.4},{"lat":51.448454,"lng":-0.030007,"elevation":38.2},{"lat":51.448459,"lng":-0.029963,"elevation":37.9},{"lat":51.448493,"lng":-0.029894,"elevation":37.6},{"lat":51.448518,"lng":-0.029828,"elevation":37.2},{"lat":51.44853,"lng":-0.029754,"elevation":36.8},{"lat":51.44849,"lng":-0.029666,"elevation":36.2},{"lat":51.448498,"lng":-0.029604,"elevation":35.8},{"lat":51.448545,"lng":-0.029597,"elevation":35.8},{"lat":51.448599,"lng":-0.02963,"elevation":36.1},{"lat":51.448633,"lng":-0.029683,"elevation":36.5},{"lat":51.448661,"lng":-0.029715,"elevation":36.7},{"lat":51.448719,"lng":-0.029766,"elevation":37.1},{"lat":51.448757,"lng":-0.029766,"elevation":37.1},{"lat":51.448803,"lng":-0.029816,"elevation":37.3},{"lat":51.448833,"lng":-0.02984,"elevation":37.4},{"lat":51.448864,"lng":-0.029851,"elevation":37.4},{"lat":51.448894,"lng":-0.029852,"elevation":37.4},{"lat":51.448927,"lng":-0.029854,"elevation":37.3},{"lat":51.44896,"lng":-0.029862,"elevation":37.3},{"lat":51.448992,"lng":-0.029879,"elevation":37.4},{"lat":51.449045,"lng":-0.0299,"elevation":37.4},{"lat":51.449092,"lng":-0.029905,"elevation":37.4},{"lat":51.449132,"lng":-0.029915,"elevation":37.3},{"lat":51.449178,"lng":-0.02992,"elevation":37.3},{"lat":51.449224,"lng":-0.029922,"elevation":37.2},{"lat":51.449273,"lng":-0.029937,"elevation":37.2},{"lat":51.449316,"lng":-0.029977,"elevation":37.4},{"lat":51.449326,"lng":-0.030023,"elevation":37.6},{"lat":51.449336,"lng":-0.030096,"elevation":37.9},{"lat":51.449328,"lng":-0.03016,"elevation":38.3},{"lat":51.449332,"lng":-0.030232,"elevation":38.6},{"lat":51.449324,"lng":-0.030303,"elevation":39},{"lat":51.449317,"lng":-0.03037,"elevation":39.4},{"lat":51.449321,"lng":-0.030443,"elevation":39.7},{"lat":51.449327,"lng":-0.030493,"elevation":39.9},{"lat":51.449342,"lng":-0.030565,"elevation":40.2},{"lat":51.449368,"lng":-0.030591,"elevation":40.2},{"lat":51.449395,"lng":-0.030655,"elevation":40.4},{"lat":51.449415,"lng":-0.030729,"elevation":40.6},{"lat":51.449436,"lng":-0.030808,"elevation":40.8},{"lat":51.44945,"lng":-0.030888,"elevation":41.1},{"lat":51.449469,"lng":-0.030968,"elevation":41.3},{"lat":51.449487,"lng":-0.031008,"elevation":41.4},{"lat":51.449505,"lng":-0.031042,"elevation":41.5},{"lat":51.449532,"lng":-0.031116,"elevation":41.7},{"lat":51.449557,"lng":-0.031192,"elevation":41.9},{"lat":51.449581,"lng":-0.031263,"elevation":42},{"lat":51.449596,"lng":-0.031312,"elevation":41.8},{"lat":51.449611,"lng":-0.031349,"elevation":41.6},{"lat":51.449641,"lng":-0.031431,"elevation":41.2},{"lat":51.449655,"lng":-0.031474,"elevation":41},{"lat":51.449687,"lng":-0.031557,"elevation":40.5},{"lat":51.449709,"lng":-0.031649,"elevation":40.2},{"lat":51.449726,"lng":-0.031735,"elevation":39.9},{"lat":51.44975,"lng":-0.031807,"elevation":39.5},{"lat":51.449768,"lng":-0.031846,"elevation":39.3},{"lat":51.449781,"lng":-0.031885,"elevation":39.1},{"lat":51.449807,"lng":-0.031952,"elevation":38.7},{"lat":51.449825,"lng":-0.03202,"elevation":38.5},{"lat":51.449833,"lng":-0.032067,"elevation":38.3},{"lat":51.449843,"lng":-0.032113,"elevation":38.2},{"lat":51.449852,"lng":-0.032156,"elevation":38.1},{"lat":51.449872,"lng":-0.032228,"elevation":37.9},{"lat":51.449891,"lng":-0.032303,"elevation":37.7},{"lat":51.44991,"lng":-0.032381,"elevation":37.5},{"lat":51.449921,"lng":-0.032427,"elevation":37.4},{"lat":51.449931,"lng":-0.032472,"elevation":37.2},{"lat":51.449947,"lng":-0.032553,"elevation":37.1},{"lat":51.449959,"lng":-0.0326,"elevation":36.9},{"lat":51.449958,"lng":-0.032653,"elevation":37},{"lat":51.449941,"lng":-0.032707,"elevation":37.1},{"lat":51.449925,"lng":-0.032759,"elevation":37.3},{"lat":51.449894,"lng":-0.032798,"elevation":37.6},{"lat":51.449854,"lng":-0.032807,"elevation":38.1},{"lat":51.449816,"lng":-0.03283,"elevation":38.5},{"lat":51.449773,"lng":-0.032861,"elevation":39},{"lat":51.449732,"lng":-0.032887,"elevation":39.4},{"lat":51.449696,"lng":-0.032923,"elevation":39.8},{"lat":51.449658,"lng":-0.032954,"elevation":40.1},{"lat":51.449622,"lng":-0.032987,"elevation":40.3},{"lat":51.449579,"lng":-0.033018,"elevation":40.7},{"lat":51.449539,"lng":-0.033041,"elevation":40.9},{"lat":51.449511,"lng":-0.033059,"elevation":41.1},{"lat":51.449484,"lng":-0.033065,"elevation":41.3},{"lat":51.449435,"lng":-0.033063,"elevation":41.7},{"lat":51.449385,"lng":-0.033071,"elevation":42.1},{"lat":51.449321,"lng":-0.033099,"elevation":42.5},{"lat":51.449294,"lng":-0.033109,"elevation":42.7},{"lat":51.449232,"lng":-0.03315,"elevation":43.1},{"lat":51.449201,"lng":-0.033172,"elevation":43.3},{"lat":51.449175,"lng":-0.033193,"elevation":43.4},{"lat":51.449143,"lng":-0.033216,"elevation":43.6},{"lat":51.449117,"lng":-0.033248,"elevation":43.7},{"lat":51.449085,"lng":-0.033295,"elevation":43.8},{"lat":51.449039,"lng":-0.033304,"elevation":44.2},{"lat":51.449002,"lng":-0.033325,"elevation":44.4},{"lat":51.448959,"lng":-0.033332,"elevation":44.7},{"lat":51.448914,"lng":-0.033339,"elevation":45.1},{"lat":51.448881,"lng":-0.033325,"elevation":45.4},{"lat":51.448842,"lng":-0.033336,"elevation":45.7},{"lat":51.4488,"lng":-0.033331,"elevation":46.1},{"lat":51.44875,"lng":-0.033331,"elevation":46.5},{"lat":51.44872,"lng":-0.033331,"elevation":46.6},{"lat":51.448688,"lng":-0.033335,"elevation":46.6},{"lat":51.448618,"lng":-0.033344,"elevation":46.8},{"lat":51.448599,"lng":-0.033375,"elevation":46.7},{"lat":51.448579,"lng":-0.033404,"elevation":46.7},{"lat":51.448584,"lng":-0.033459,"elevation":46.6},{"lat":51.448579,"lng":-0.033506,"elevation":46.5},{"lat":51.448573,"lng":-0.033548,"elevation":46.4},{"lat":51.448564,"lng":-0.033596,"elevation":46.3},{"lat":51.448555,"lng":-0.033676,"elevation":46.1},{"lat":51.448544,"lng":-0.033743,"elevation":46},{"lat":51.44855,"lng":-0.033812,"elevation":45.8},{"lat":51.448567,"lng":-0.033877,"elevation":45.5},{"lat":51.448598,"lng":-0.033941,"elevation":45.2},{"lat":51.448613,"lng":-0.034026,"elevation":44.8},{"lat":51.448622,"lng":-0.034076,"elevation":44.6},{"lat":51.448642,"lng":-0.034153,"elevation":44.3},{"lat":51.448652,"lng":-0.034226,"elevation":44},{"lat":51.448649,"lng":-0.034315,"elevation":43.7},{"lat":51.448647,"lng":-0.034366,"elevation":43.6},{"lat":51.448649,"lng":-0.034415,"elevation":43.4},{"lat":51.448658,"lng":-0.034514,"elevation":43},{"lat":51.448661,"lng":-0.034563,"elevation":42.8},{"lat":51.448661,"lng":-0.034672,"elevation":42.9},{"lat":51.448661,"lng":-0.03472,"elevation":42.9},{"lat":51.448666,"lng":-0.034766,"elevation":42.9},{"lat":51.448687,"lng":-0.034843,"elevation":42.8},{"lat":51.448718,"lng":-0.034913,"elevation":42.7},{"lat":51.448747,"lng":-0.03498,"elevation":42.5},{"lat":51.448764,"lng":-0.035053,"elevation":42.5},{"lat":51.44876,"lng":-0.035107,"elevation":42.5},{"lat":51.448753,"lng":-0.035178,"elevation":42.7},{"lat":51.448752,"lng":-0.035254,"elevation":42.8},{"lat":51.448758,"lng":-0.035329,"elevation":42.8},{"lat":51.448762,"lng":-0.035409,"elevation":42.9},{"lat":51.448779,"lng":-0.035488,"elevation":42.8},{"lat":51.448788,"lng":-0.035574,"elevation":42.9},{"lat":51.448794,"lng":-0.035617,"elevation":42.9},{"lat":51.448791,"lng":-0.035681,"elevation":43},{"lat":51.44878,"lng":-0.035753,"elevation":43.1},{"lat":51.448758,"lng":-0.035808,"elevation":43.4},{"lat":51.448729,"lng":-0.035856,"elevation":43.7},{"lat":51.448695,"lng":-0.035875,"elevation":44},{"lat":51.448649,"lng":-0.035888,"elevation":44.4},{"lat":51.448604,"lng":-0.035904,"elevation":44.8},{"lat":51.448563,"lng":-0.035937,"elevation":45.2},{"lat":51.44852,"lng":-0.035965,"elevation":45.6},{"lat":51.448472,"lng":-0.035991,"elevation":46},{"lat":51.448444,"lng":-0.036013,"elevation":46.3},{"lat":51.448393,"lng":-0.036064,"elevation":46.8},{"lat":51.448356,"lng":-0.036132,"elevation":47.2},{"lat":51.44834,"lng":-0.036182,"elevation":47.4},{"lat":51.448332,"lng":-0.03623,"elevation":47.5},{"lat":51.448334,"lng":-0.036292,"elevation":47.5},{"lat":51.448349,"lng":-0.036352,"elevation":47.4},{"lat":51.448362,"lng":-0.036417,"elevation":47.2},{"lat":51.448376,"lng":-0.036475,"elevation":47.1},{"lat":51.448384,"lng":-0.036555,"elevation":47},{"lat":51.448389,"lng":-0.036597,"elevation":47},{"lat":51.448394,"lng":-0.03664,"elevation":46.9},{"lat":51.448402,"lng":-0.036726,"elevation":46.8},{"lat":51.448408,"lng":-0.0368,"elevation":46.8},{"lat":51.448413,"lng":-0.036874,"elevation":46.7},{"lat":51.448416,"lng":-0.036953,"elevation":46.6},{"lat":51.448413,"lng":-0.037035,"elevation":46.7},{"lat":51.4484,"lng":-0.0371,"elevation":46.8},{"lat":51.448377,"lng":-0.037162,"elevation":47},{"lat":51.448359,"lng":-0.037235,"elevation":47.2},{"lat":51.448352,"lng":-0.037277,"elevation":47.3},{"lat":51.448344,"lng":-0.037321,"elevation":47.4},{"lat":51.448337,"lng":-0.037365,"elevation":47.5},{"lat":51.448328,"lng":-0.037409,"elevation":47.6},{"lat":51.448319,"lng":-0.037454,"elevation":47.7},{"lat":51.448312,"lng":-0.037499,"elevation":47.8},{"lat":51.448308,"lng":-0.037544,"elevation":47.8},{"lat":51.448297,"lng":-0.037624,"elevation":47.9},{"lat":51.448289,"lng":-0.037666,"elevation":48.1},{"lat":51.448279,"lng":-0.037709,"elevation":48.2},{"lat":51.448271,"lng":-0.037752,"elevation":48.3},{"lat":51.448257,"lng":-0.03783,"elevation":48.5},{"lat":51.44824,"lng":-0.037907,"elevation":48.7},{"lat":51.448219,"lng":-0.037986,"elevation":48.7},{"lat":51.448196,"lng":-0.038063,"elevation":48.7},{"lat":51.448176,"lng":-0.038132,"elevation":48.7},{"lat":51.448161,"lng":-0.038209,"elevation":48.6},{"lat":51.448148,"lng":-0.038284,"elevation":48.4},{"lat":51.448128,"lng":-0.038357,"elevation":48.4},{"lat":51.448108,"lng":-0.038436,"elevation":48.3},{"lat":51.448092,"lng":-0.038514,"elevation":48.1},{"lat":51.448078,"lng":-0.038588,"elevation":48},{"lat":51.448066,"lng":-0.038672,"elevation":47.7},{"lat":51.448055,"lng":-0.038716,"elevation":47.7},{"lat":51.448018,"lng":-0.038778,"elevation":47.8},{"lat":51.447997,"lng":-0.03881,"elevation":47.9},{"lat":51.447961,"lng":-0.038883,"elevation":47.9},{"lat":51.447946,"lng":-0.038966,"elevation":47.7},{"lat":51.447953,"lng":-0.039014,"elevation":47.4},{"lat":51.447965,"lng":-0.039103,"elevation":46.9},{"lat":51.447962,"lng":-0.039182,"elevation":46.5},{"lat":51.447953,"lng":-0.039245,"elevation":46.3},{"lat":51.447943,"lng":-0.039306,"elevation":46.1},{"lat":51.447923,"lng":-0.039379,"elevation":45.9},{"lat":51.447891,"lng":-0.039449,"elevation":46},{"lat":51.447856,"lng":-0.039507,"elevation":46.1},{"lat":51.447821,"lng":-0.039562,"elevation":46.3},{"lat":51.447796,"lng":-0.039599,"elevation":46.4},{"lat":51.447763,"lng":-0.039656,"elevation":46.5},{"lat":51.447775,"lng":-0.03972,"elevation":46.1},{"lat":51.447776,"lng":-0.039769,"elevation":45.9},{"lat":51.447768,"lng":-0.039852,"elevation":45.6},{"lat":51.447744,"lng":-0.039924,"elevation":45.5},{"lat":51.447723,"lng":-0.04,"elevation":45.4},{"lat":51.447709,"lng":-0.040091,"elevation":45.1},{"lat":51.447703,"lng":-0.040141,"elevation":44.9},{"lat":51.447693,"lng":-0.040191,"elevation":44.7},{"lat":51.44767,"lng":-0.040278,"elevation":44.5},{"lat":51.447659,"lng":-0.040322,"elevation":44.3},{"lat":51.447633,"lng":-0.040403,"elevation":44.1},{"lat":51.447626,"lng":-0.040483,"elevation":43.8},{"lat":51.447628,"lng":-0.040579,"elevation":43.4},{"lat":51.447617,"lng":-0.040661,"elevation":43.1},{"lat":51.447609,"lng":-0.040706,"elevation":43},{"lat":51.447587,"lng":-0.040776,"elevation":42.8},{"lat":51.447558,"lng":-0.040843,"elevation":42.7},{"lat":51.447548,"lng":-0.040883,"elevation":42.5},{"lat":51.447541,"lng":-0.040929,"elevation":42.4},{"lat":51.44754,"lng":-0.040973,"elevation":42.2},{"lat":51.447538,"lng":-0.04102,"elevation":42},{"lat":51.44754,"lng":-0.041063,"elevation":41.8},{"lat":51.447549,"lng":-0.041147,"elevation":41.3},{"lat":51.447553,"lng":-0.041233,"elevation":40.9},{"lat":51.447551,"lng":-0.041307,"elevation":40.8},{"lat":51.447548,"lng":-0.04137,"elevation":40.8},{"lat":51.447533,"lng":-0.041437,"elevation":40.8},{"lat":51.447507,"lng":-0.041482,"elevation":40.8},{"lat":51.447482,"lng":-0.04155,"elevation":40.9},{"lat":51.447467,"lng":-0.041602,"elevation":40.9},{"lat":51.447464,"lng":-0.041669,"elevation":40.8},{"lat":51.447467,"lng":-0.041729,"elevation":40.8},{"lat":51.447441,"lng":-0.041747,"elevation":40.8},{"lat":51.447471,"lng":-0.041737,"elevation":40.8},{"lat":51.447482,"lng":-0.041688,"elevation":40.8},{"lat":51.447521,"lng":-0.041743,"elevation":40.7},{"lat":51.447549,"lng":-0.041767,"elevation":40.6},{"lat":51.447577,"lng":-0.04179,"elevation":40.6},{"lat":51.447605,"lng":-0.041814,"elevation":40.5},{"lat":51.447632,"lng":-0.041838,"elevation":40.4},{"lat":51.447648,"lng":-0.041895,"elevation":40.4},{"lat":51.447629,"lng":-0.041937,"elevation":40.4},{"lat":51.447645,"lng":-0.041983,"elevation":40.4},{"lat":51.447656,"lng":-0.042029,"elevation":40.3},{"lat":51.447667,"lng":-0.042083,"elevation":40.3},{"lat":51.447684,"lng":-0.04221,"elevation":40.2},{"lat":51.44769,"lng":-0.042267,"elevation":40.2},{"lat":51.447686,"lng":-0.042312,"elevation":40.2},{"lat":51.447705,"lng":-0.042391,"elevation":40.2},{"lat":51.447719,"lng":-0.042458,"elevation":40.1},{"lat":51.447721,"lng":-0.042512,"elevation":40.1},{"lat":51.447755,"lng":-0.042571,"elevation":40.1},{"lat":51.447769,"lng":-0.042619,"elevation":40.1},{"lat":51.447779,"lng":-0.042699,"elevation":40},{"lat":51.447788,"lng":-0.042754,"elevation":40},{"lat":51.447793,"lng":-0.042821,"elevation":40},{"lat":51.447809,"lng":-0.042864,"elevation":40},{"lat":51.447822,"lng":-0.042937,"elevation":40},{"lat":51.447826,"lng":-0.042983,"elevation":40.1},{"lat":51.447828,"lng":-0.043026,"elevation":40.1},{"lat":51.44782,"lng":-0.043081,"elevation":40.2},{"lat":51.447814,"lng":-0.043138,"elevation":40.3},{"lat":51.447807,"lng":-0.043181,"elevation":40.4},{"lat":51.447821,"lng":-0.043243,"elevation":40.4},{"lat":51.447828,"lng":-0.043291,"elevation":40.5},{"lat":51.447828,"lng":-0.043335,"elevation":40.6},{"lat":51.447829,"lng":-0.043418,"elevation":40.7},{"lat":51.447835,"lng":-0.043478,"elevation":40.7},{"lat":51.44784,"lng":-0.043554,"elevation":40.8},{"lat":51.44785,"lng":-0.043608,"elevation":40.9},{"lat":51.447856,"lng":-0.043654,"elevation":40.9},{"lat":51.447867,"lng":-0.043698,"elevation":41},{"lat":51.447878,"lng":-0.04374,"elevation":41},{"lat":51.447891,"lng":-0.043781,"elevation":41.1},{"lat":51.447909,"lng":-0.043859,"elevation":41.1},{"lat":51.447917,"lng":-0.043941,"elevation":41.2},{"lat":51.44793,"lng":-0.044026,"elevation":41.3},{"lat":51.44794,"lng":-0.044116,"elevation":41.4},{"lat":51.447944,"lng":-0.044163,"elevation":41.5},{"lat":51.447951,"lng":-0.044256,"elevation":41.6},{"lat":51.447962,"lng":-0.044332,"elevation":41.7},{"lat":51.447956,"lng":-0.044421,"elevation":41.8},{"lat":51.447948,"lng":-0.044463,"elevation":41.9},{"lat":51.447942,"lng":-0.044523,"elevation":41.9},{"lat":51.447939,"lng":-0.044571,"elevation":42},{"lat":51.447941,"lng":-0.044619,"elevation":42.1},{"lat":51.447953,"lng":-0.044665,"elevation":42.2},{"lat":51.447973,"lng":-0.044707,"elevation":42.3},{"lat":51.447985,"lng":-0.044749,"elevation":42.4},{"lat":51.448026,"lng":-0.044756,"elevation":42.4},{"lat":51.448057,"lng":-0.044746,"elevation":42.4},{"lat":51.448081,"lng":-0.044719,"elevation":42.3},{"lat":51.448127,"lng":-0.044677,"elevation":42.2},{"lat":51.448186,"lng":-0.044662,"elevation":42.2},{"lat":51.448216,"lng":-0.044659,"elevation":42.1},{"lat":51.448244,"lng":-0.044658,"elevation":42.1},{"lat":51.448293,"lng":-0.044652,"elevation":42.1},{"lat":51.448332,"lng":-0.044606,"elevation":42},{"lat":51.448356,"lng":-0.044585,"elevation":42},{"lat":51.448379,"lng":-0.044556,"elevation":42},{"lat":51.448408,"lng":-0.044529,"elevation":41.9},{"lat":51.44844,"lng":-0.044516,"elevation":41.9},{"lat":51.448472,"lng":-0.044515,"elevation":41.9},{"lat":51.448502,"lng":-0.044518,"elevation":41.9},{"lat":51.448532,"lng":-0.044519,"elevation":41.9},{"lat":51.448563,"lng":-0.044517,"elevation":41.9},{"lat":51.448592,"lng":-0.04451,"elevation":41.9},{"lat":51.448619,"lng":-0.044504,"elevation":41.9},{"lat":51.448647,"lng":-0.044495,"elevation":41.9},{"lat":51.448675,"lng":-0.044484,"elevation":41.9},{"lat":51.448704,"lng":-0.044471,"elevation":41.9},{"lat":51.448732,"lng":-0.04446,"elevation":41.9},{"lat":51.448781,"lng":-0.044431,"elevation":41.9},{"lat":51.448827,"lng":-0.044395,"elevation":41.9},{"lat":51.448867,"lng":-0.044341,"elevation":41.8},{"lat":51.44891,"lng":-0.0443,"elevation":41.9},{"lat":51.44896,"lng":-0.044273,"elevation":41.9},{"lat":51.449005,"lng":-0.044235,"elevation":41.9},{"lat":51.449055,"lng":-0.044203,"elevation":41.9},{"lat":51.449082,"lng":-0.0442,"elevation":41.9},{"lat":51.449132,"lng":-0.044185,"elevation":42},{"lat":51.449174,"lng":-0.044164,"elevation":42},{"lat":51.449227,"lng":-0.044149,"elevation":42.1},{"lat":51.449274,"lng":-0.044125,"elevation":42.1},{"lat":51.449311,"lng":-0.044118,"elevation":42.1},{"lat":51.449336,"lng":-0.044144,"elevation":42.2},{"lat":51.449335,"lng":-0.044189,"elevation":42.2},{"lat":51.44934,"lng":-0.044247,"elevation":42.3},{"lat":51.449356,"lng":-0.044296,"elevation":42.4},{"lat":51.449153,"lng":-0.044094,"elevation":41.9},{"lat":51.449124,"lng":-0.044108,"elevation":41.9},{"lat":51.449083,"lng":-0.044128,"elevation":41.9},{"lat":51.449047,"lng":-0.04415,"elevation":41.8},{"lat":51.44901,"lng":-0.044166,"elevation":41.8},{"lat":51.448972,"lng":-0.044175,"elevation":41.8},{"lat":51.448936,"lng":-0.044182,"elevation":41.7},{"lat":51.448902,"lng":-0.044193,"elevation":41.7},{"lat":51.448871,"lng":-0.044203,"elevation":41.7},{"lat":51.448841,"lng":-0.04421,"elevation":41.7},{"lat":51.448802,"lng":-0.044242,"elevation":41.7},{"lat":51.448761,"lng":-0.044271,"elevation":41.6},{"lat":51.448707,"lng":-0.044289,"elevation":41.6},{"lat":51.448675,"lng":-0.0443,"elevation":41.7},{"lat":51.448643,"lng":-0.044309,"elevation":41.7},{"lat":51.448612,"lng":-0.044323,"elevation":41.7},{"lat":51.448583,"lng":-0.044344,"elevation":41.7},{"lat":51.448557,"lng":-0.044366,"elevation":41.7},{"lat":51.44853,"lng":-0.044386,"elevation":41.8},{"lat":51.448503,"lng":-0.044401,"elevation":41.8},{"lat":51.448475,"lng":-0.044413,"elevation":41.8},{"lat":51.448447,"lng":-0.044429,"elevation":41.8},{"lat":51.448419,"lng":-0.044443,"elevation":41.8},{"lat":51.448369,"lng":-0.044472,"elevation":41.9},{"lat":51.448342,"lng":-0.044483,"elevation":41.9},{"lat":51.448315,"lng":-0.044497,"elevation":41.9},{"lat":51.448287,"lng":-0.044507,"elevation":41.9},{"lat":51.44826,"lng":-0.044523,"elevation":41.9},{"lat":51.448232,"lng":-0.044544,"elevation":42},{"lat":51.448206,"lng":-0.044564,"elevation":42},{"lat":51.448178,"lng":-0.044577,"elevation":42},{"lat":51.448148,"lng":-0.044593,"elevation":42},{"lat":51.448119,"lng":-0.044605,"elevation":42},{"lat":51.448089,"lng":-0.044612,"elevation":42.1},{"lat":51.448059,"lng":-0.044603,"elevation":42},{"lat":51.448031,"lng":-0.044586,"elevation":42},{"lat":51.448005,"lng":-0.044567,"elevation":42},{"lat":51.447958,"lng":-0.044527,"elevation":41.9},{"lat":51.44794,"lng":-0.044487,"elevation":41.9},{"lat":51.447925,"lng":-0.044446,"elevation":41.8},{"lat":51.447909,"lng":-0.044407,"elevation":41.8},{"lat":51.447862,"lng":-0.044393,"elevation":41.8},{"lat":51.447815,"lng":-0.044414,"elevation":41.9},{"lat":51.447762,"lng":-0.044421,"elevation":42},{"lat":51.447734,"lng":-0.044424,"elevation":42},{"lat":51.447706,"lng":-0.044429,"elevation":42.1},{"lat":51.447674,"lng":-0.044433,"elevation":42.1},{"lat":51.447642,"lng":-0.044438,"elevation":42.2},{"lat":51.447612,"lng":-0.044443,"elevation":42.2},{"lat":51.447581,"lng":-0.044443,"elevation":42.2},{"lat":51.447551,"lng":-0.044444,"elevation":42.3},{"lat":51.447521,"lng":-0.044443,"elevation":42.3},{"lat":51.447492,"lng":-0.044449,"elevation":42.3},{"lat":51.447463,"lng":-0.044458,"elevation":42.4},{"lat":51.447433,"lng":-0.044468,"elevation":42.4},{"lat":51.447404,"lng":-0.044474,"elevation":42.5},{"lat":51.447374,"lng":-0.04448,"elevation":42.5},{"lat":51.44731,"lng":-0.044507,"elevation":42.6},{"lat":51.44728,"lng":-0.044519,"elevation":42.7},{"lat":51.447249,"lng":-0.044528,"elevation":42.7},{"lat":51.447221,"lng":-0.044538,"elevation":42.8},{"lat":51.447176,"lng":-0.044548,"elevation":42.8},{"lat":51.447126,"lng":-0.044558,"elevation":42.9},{"lat":51.447082,"lng":-0.044576,"elevation":43},{"lat":51.447032,"lng":-0.044591,"elevation":42.9},{"lat":51.446984,"lng":-0.044596,"elevation":42.8},{"lat":51.446931,"lng":-0.044593,"elevation":42.6},{"lat":51.446901,"lng":-0.044591,"elevation":42.6},{"lat":51.446872,"lng":-0.044588,"elevation":42.5},{"lat":51.446842,"lng":-0.04458,"elevation":42.4},{"lat":51.446813,"lng":-0.044575,"elevation":42.3},{"lat":51.446783,"lng":-0.044571,"elevation":42.3},{"lat":51.446752,"lng":-0.044567,"elevation":42.2},{"lat":51.446721,"lng":-0.044561,"elevation":42.1},{"lat":51.446689,"lng":-0.044567,"elevation":42},{"lat":51.446659,"lng":-0.044575,"elevation":42},{"lat":51.446629,"lng":-0.04459,"elevation":41.9},{"lat":51.446603,"lng":-0.044611,"elevation":41.9},{"lat":51.446574,"lng":-0.044626,"elevation":41.9},{"lat":51.446547,"lng":-0.044638,"elevation":41.8},{"lat":51.446519,"lng":-0.044643,"elevation":41.8},{"lat":51.446491,"lng":-0.044655,"elevation":41.7},{"lat":51.446435,"lng":-0.044681,"elevation":41.7},{"lat":51.446406,"lng":-0.044691,"elevation":41.6},{"lat":51.446376,"lng":-0.044696,"elevation":41.6},{"lat":51.446346,"lng":-0.044695,"elevation":41.5},{"lat":51.446315,"lng":-0.0447,"elevation":41.4},{"lat":51.446284,"lng":-0.044709,"elevation":41.4},{"lat":51.446251,"lng":-0.04472,"elevation":41.3},{"lat":51.446217,"lng":-0.04473,"elevation":41.3},{"lat":51.446184,"lng":-0.044737,"elevation":41.3},{"lat":51.446146,"lng":-0.044735,"elevation":41.2},{"lat":51.446115,"lng":-0.044731,"elevation":41.2},{"lat":51.446087,"lng":-0.044718,"elevation":41.1},{"lat":51.446061,"lng":-0.0447,"elevation":41.1},{"lat":51.446033,"lng":-0.044689,"elevation":41},{"lat":51.446003,"lng":-0.04468,"elevation":40.9},{"lat":51.445973,"lng":-0.044674,"elevation":40.9},{"lat":51.445943,"lng":-0.044667,"elevation":40.8},{"lat":51.44591,"lng":-0.044662,"elevation":40.8},{"lat":51.445883,"lng":-0.044671,"elevation":40.8},{"lat":51.445854,"lng":-0.044682,"elevation":40.8},{"lat":51.445808,"lng":-0.044704,"elevation":40.8},{"lat":51.44578,"lng":-0.044713,"elevation":40.7},{"lat":51.445748,"lng":-0.044721,"elevation":40.7},{"lat":51.44572,"lng":-0.044723,"elevation":40.7},{"lat":51.445669,"lng":-0.044721,"elevation":40.6},{"lat":51.445615,"lng":-0.044707,"elevation":40.5},{"lat":51.445586,"lng":-0.044698,"elevation":40.5},{"lat":51.445557,"lng":-0.044689,"elevation":40.4},{"lat":51.445501,"lng":-0.044685,"elevation":40.3},{"lat":51.445453,"lng":-0.044685,"elevation":40.3},{"lat":51.445415,"lng":-0.044706,"elevation":40.3},{"lat":51.445377,"lng":-0.044726,"elevation":40.2},{"lat":51.44534,"lng":-0.04473,"elevation":40.2},{"lat":51.445299,"lng":-0.044747,"elevation":40.1},{"lat":51.445267,"lng":-0.044769,"elevation":40},{"lat":51.44524,"lng":-0.044793,"elevation":40},{"lat":51.445227,"lng":-0.044752,"elevation":39.9}],[{"lat":51.445302,"lng":-0.044962,"elevation":40.6},{"lat":51.445279,"lng":-0.044798,"elevation":40.1},{"lat":51.445314,"lng":-0.044823,"elevation":40.3},{"lat":51.445286,"lng":-0.044641,"elevation":39.8},{"lat":51.445318,"lng":-0.044624,"elevation":39.9},{"lat":51.445356,"lng":-0.044576,"elevation":39.8},{"lat":51.445384,"lng":-0.044554,"elevation":39.9},{"lat":51.44538,"lng":-0.044488,"elevation":39.7},{"lat":51.445371,"lng":-0.044429,"elevation":39.5},{"lat":51.445376,"lng":-0.044373,"elevation":39.4},{"lat":51.44539,"lng":-0.044331,"elevation":39.3},{"lat":51.445417,"lng":-0.044293,"elevation":39.3},{"lat":51.445454,"lng":-0.04425,"elevation":39.3},{"lat":51.445483,"lng":-0.044207,"elevation":39.2},{"lat":51.445488,"lng":-0.044157,"elevation":39.1},{"lat":51.445492,"lng":-0.044102,"elevation":39},{"lat":51.445466,"lng":-0.044038,"elevation":38.8},{"lat":51.445453,"lng":-0.043992,"elevation":38.7},{"lat":51.445451,"lng":-0.043946,"elevation":38.5},{"lat":51.445471,"lng":-0.043917,"elevation":38.5},{"lat":51.445449,"lng":-0.043889,"elevation":38.4},{"lat":51.445425,"lng":-0.04386,"elevation":38.3},{"lat":51.445405,"lng":-0.043807,"elevation":38.1},{"lat":51.445399,"lng":-0.043764,"elevation":38},{"lat":51.445406,"lng":-0.043722,"elevation":37.9},{"lat":51.445405,"lng":-0.043674,"elevation":37.8},{"lat":51.445422,"lng":-0.043631,"elevation":37.7},{"lat":51.445422,"lng":-0.043582,"elevation":37.6},{"lat":51.445432,"lng":-0.043513,"elevation":37.5},{"lat":51.445427,"lng":-0.043464,"elevation":37.3},{"lat":51.445428,"lng":-0.043413,"elevation":37.2},{"lat":51.445428,"lng":-0.04336,"elevation":37.1},{"lat":51.445427,"lng":-0.0433,"elevation":36.9},{"lat":51.445428,"lng":-0.043238,"elevation":36.8},{"lat":51.44542,"lng":-0.043184,"elevation":36.6},{"lat":51.445419,"lng":-0.043133,"elevation":36.5},{"lat":51.445417,"lng":-0.043084,"elevation":36.4},{"lat":51.445411,"lng":-0.043042,"elevation":36.3},{"lat":51.445393,"lng":-0.04301,"elevation":36.2},{"lat":51.445378,"lng":-0.042964,"elevation":36.1},{"lat":51.445373,"lng":-0.042919,"elevation":36},{"lat":51.445379,"lng":-0.042858,"elevation":36.1},{"lat":51.445381,"lng":-0.042791,"elevation":36.1},{"lat":51.445375,"lng":-0.04274,"elevation":36.2},{"lat":51.445352,"lng":-0.042698,"elevation":36.2},{"lat":51.445319,"lng":-0.042674,"elevation":36.3},{"lat":51.445301,"lng":-0.042626,"elevation":36.3},{"lat":51.445299,"lng":-0.04257,"elevation":36.4},{"lat":51.445298,"lng":-0.042519,"elevation":36.4},{"lat":51.44531,"lng":-0.042476,"elevation":36.5},{"lat":51.44534,"lng":-0.042454,"elevation":36.5},{"lat":51.445373,"lng":-0.042449,"elevation":36.5},{"lat":51.445405,"lng":-0.042448,"elevation":36.6},{"lat":51.445434,"lng":-0.042462,"elevation":36.6},{"lat":51.445467,"lng":-0.042467,"elevation":36.7},{"lat":51.4455,"lng":-0.042451,"elevation":36.8},{"lat":51.445524,"lng":-0.042415,"elevation":36.9},{"lat":51.445546,"lng":-0.042372,"elevation":37.1},{"lat":51.445573,"lng":-0.042332,"elevation":37.2},{"lat":51.445595,"lng":-0.042299,"elevation":37.3},{"lat":51.4456,"lng":-0.042245,"elevation":37.4},{"lat":51.445602,"lng":-0.042194,"elevation":37.5},{"lat":51.445593,"lng":-0.042128,"elevation":37.6},{"lat":51.4456,"lng":-0.042086,"elevation":37.7},{"lat":51.445612,"lng":-0.042044,"elevation":37.8},{"lat":51.445639,"lng":-0.042019,"elevation":37.9},{"lat":51.445647,"lng":-0.041966,"elevation":38},{"lat":51.445638,"lng":-0.041925,"elevation":38},{"lat":51.445633,"lng":-0.041869,"elevation":38.1},{"lat":51.445632,"lng":-0.041817,"elevation":38.2},{"lat":51.445633,"lng":-0.041755,"elevation":38.3},{"lat":51.445634,"lng":-0.041698,"elevation":38.4},{"lat":51.445629,"lng":-0.041651,"elevation":38.4},{"lat":51.445622,"lng":-0.041587,"elevation":38.5},{"lat":51.445609,"lng":-0.041544,"elevation":38.5},{"lat":51.445588,"lng":-0.041498,"elevation":38.5},{"lat":51.445564,"lng":-0.041465,"elevation":38.4},{"lat":51.445543,"lng":-0.041415,"elevation":38.4},{"lat":51.445536,"lng":-0.041351,"elevation":38.4},{"lat":51.44553,"lng":-0.041309,"elevation":38.5},{"lat":51.445526,"lng":-0.041254,"elevation":38.5},{"lat":51.445548,"lng":-0.041222,"elevation":38.8},{"lat":51.445562,"lng":-0.041179,"elevation":39.1},{"lat":51.445575,"lng":-0.041125,"elevation":39.5},{"lat":51.445586,"lng":-0.041078,"elevation":39.9},{"lat":51.445599,"lng":-0.041022,"elevation":40.3},{"lat":51.445611,"lng":-0.040971,"elevation":40.7},{"lat":51.445614,"lng":-0.040926,"elevation":41},{"lat":51.445631,"lng":-0.040869,"elevation":41.4},{"lat":51.445641,"lng":-0.040805,"elevation":41.9},{"lat":51.445656,"lng":-0.040762,"elevation":42.2},{"lat":51.445676,"lng":-0.040718,"elevation":42.6},{"lat":51.445694,"lng":-0.040683,"elevation":43},{"lat":51.445691,"lng":-0.040623,"elevation":43.3},{"lat":51.445675,"lng":-0.040584,"elevation":43.5},{"lat":51.445672,"lng":-0.040539,"elevation":43.8},{"lat":51.445662,"lng":-0.040497,"elevation":44},{"lat":51.445676,"lng":-0.040449,"elevation":44.3},{"lat":51.445691,"lng":-0.040392,"elevation":44.8},{"lat":51.4457,"lng":-0.040335,"elevation":45.3},{"lat":51.445704,"lng":-0.04029,"elevation":45.7},{"lat":51.445705,"lng":-0.04024,"elevation":46.1},{"lat":51.44571,"lng":-0.040194,"elevation":46.5},{"lat":51.44569,"lng":-0.040157,"elevation":46.6},{"lat":51.445689,"lng":-0.040114,"elevation":46.9},{"lat":51.445677,"lng":-0.040071,"elevation":47.2},{"lat":51.445675,"lng":-0.040018,"elevation":47.6},{"lat":51.445699,"lng":-0.039949,"elevation":48.3},{"lat":51.445713,"lng":-0.039901,"elevation":48.7},{"lat":51.445718,"lng":-0.039842,"elevation":49.2},{"lat":51.445733,"lng":-0.039789,"elevation":49.7},{"lat":51.445745,"lng":-0.039734,"elevation":50.2},{"lat":51.445749,"lng":-0.039678,"elevation":50.7},{"lat":51.445748,"lng":-0.039619,"elevation":51.1},{"lat":51.445759,"lng":-0.039575,"elevation":51.5},{"lat":51.445779,"lng":-0.039533,"elevation":51.7},{"lat":51.445791,"lng":-0.039484,"elevation":51.8},{"lat":51.445798,"lng":-0.039425,"elevation":51.9},{"lat":51.445807,"lng":-0.039383,"elevation":52},{"lat":51.445825,"lng":-0.03934,"elevation":52.2},{"lat":51.445853,"lng":-0.039292,"elevation":52.5},{"lat":51.445879,"lng":-0.039244,"elevation":52.8},{"lat":51.445893,"lng":-0.039201,"elevation":53},{"lat":51.445912,"lng":-0.039134,"elevation":53.2},{"lat":51.445912,"lng":-0.03906,"elevation":53.3},{"lat":51.445909,"lng":-0.039006,"elevation":53.4},{"lat":51.445898,"lng":-0.038927,"elevation":53.4},{"lat":51.445881,"lng":-0.038848,"elevation":53.3},{"lat":51.445869,"lng":-0.038764,"elevation":53.3},{"lat":51.445865,"lng":-0.03872,"elevation":53.4},{"lat":51.445852,"lng":-0.038627,"elevation":53.4},{"lat":51.445848,"lng":-0.03858,"elevation":53.5},{"lat":51.445851,"lng":-0.038489,"elevation":53.6},{"lat":51.44585,"lng":-0.03841,"elevation":53.8},{"lat":51.445853,"lng":-0.038326,"elevation":54},{"lat":51.445857,"lng":-0.038276,"elevation":54.1},{"lat":51.445863,"lng":-0.038168,"elevation":54.4},{"lat":51.445864,"lng":-0.038114,"elevation":54.5},{"lat":51.445866,"lng":-0.038063,"elevation":54.6},{"lat":51.445866,"lng":-0.038018,"elevation":54.7},{"lat":51.445872,"lng":-0.037972,"elevation":54.8},{"lat":51.445878,"lng":-0.037886,"elevation":54.9},{"lat":51.445895,"lng":-0.037814,"elevation":55},{"lat":51.445915,"lng":-0.03774,"elevation":55},{"lat":51.445939,"lng":-0.037723,"elevation":55.3},{"lat":51.445961,"lng":-0.037692,"elevation":55.4},{"lat":51.445981,"lng":-0.037659,"elevation":55.6},{"lat":51.445996,"lng":-0.037623,"elevation":55.7},{"lat":51.446023,"lng":-0.037583,"elevation":55.9},{"lat":51.446042,"lng":-0.037549,"elevation":56},{"lat":51.446075,"lng":-0.037499,"elevation":56.2},{"lat":51.446106,"lng":-0.037438,"elevation":56.4},{"lat":51.446144,"lng":-0.037405,"elevation":56.7},{"lat":51.446184,"lng":-0.037439,"elevation":57.2},{"lat":51.446217,"lng":-0.037492,"elevation":57.6},{"lat":51.446249,"lng":-0.037542,"elevation":58.1},{"lat":51.446287,"lng":-0.037579,"elevation":58.3},{"lat":51.446327,"lng":-0.037615,"elevation":58.6},{"lat":51.446373,"lng":-0.037626,"elevation":58.8},{"lat":51.44642,"lng":-0.037616,"elevation":59},{"lat":51.44647,"lng":-0.037627,"elevation":59.3},{"lat":51.446524,"lng":-0.037632,"elevation":59.5},{"lat":51.446554,"lng":-0.037632,"elevation":59.7},{"lat":51.446607,"lng":-0.037648,"elevation":59.9},{"lat":51.446633,"lng":-0.037672,"elevation":60.1},{"lat":51.446657,"lng":-0.037702,"elevation":60.3},{"lat":51.446679,"lng":-0.037731,"elevation":60.5},{"lat":51.44672,"lng":-0.037775,"elevation":60.8},{"lat":51.446768,"lng":-0.037795,"elevation":61.1},{"lat":51.446794,"lng":-0.037802,"elevation":61.2},{"lat":51.446849,"lng":-0.037803,"elevation":61.5},{"lat":51.44688,"lng":-0.037795,"elevation":61.6},{"lat":51.446931,"lng":-0.037792,"elevation":61.8},{"lat":51.44696,"lng":-0.03778,"elevation":61.9},{"lat":51.44699,"lng":-0.037768,"elevation":62},{"lat":51.447017,"lng":-0.037758,"elevation":62.1},{"lat":51.447079,"lng":-0.037753,"elevation":62.4},{"lat":51.447113,"lng":-0.037753,"elevation":62.1},{"lat":51.447178,"lng":-0.037762,"elevation":61.3},{"lat":51.447213,"lng":-0.037753,"elevation":60.9},{"lat":51.447243,"lng":-0.037719,"elevation":60.5},{"lat":51.447264,"lng":-0.037681,"elevation":60.1},{"lat":51.44727,"lng":-0.037631,"elevation":59.9},{"lat":51.447267,"lng":-0.037586,"elevation":59.8},{"lat":51.447252,"lng":-0.037548,"elevation":59.8},{"lat":51.447233,"lng":-0.037513,"elevation":59.9},{"lat":51.447213,"lng":-0.037481,"elevation":60},{"lat":51.447181,"lng":-0.037418,"elevation":60.2},{"lat":51.447157,"lng":-0.037347,"elevation":60.2},{"lat":51.447146,"lng":-0.037307,"elevation":60.2},{"lat":51.447136,"lng":-0.037266,"elevation":60.1},{"lat":51.447127,"lng":-0.037219,"elevation":60.1},{"lat":51.447121,"lng":-0.037167,"elevation":59.9},{"lat":51.447107,"lng":-0.037049,"elevation":59.6},{"lat":51.447099,"lng":-0.036987,"elevation":59.4},{"lat":51.447091,"lng":-0.036933,"elevation":59.2},{"lat":51.447082,"lng":-0.036883,"elevation":59},{"lat":51.447073,"lng":-0.036835,"elevation":58.8},{"lat":51.447068,"lng":-0.036787,"elevation":58.5},{"lat":51.447064,"lng":-0.036738,"elevation":58.3},{"lat":51.447059,"lng":-0.036689,"elevation":58},{"lat":51.447033,"lng":-0.036614,"elevation":57.6},{"lat":51.447012,"lng":-0.036576,"elevation":57.4},{"lat":51.446992,"lng":-0.036539,"elevation":57.2},{"lat":51.446973,"lng":-0.0365,"elevation":57},{"lat":51.446962,"lng":-0.036458,"elevation":56.8},{"lat":51.446959,"lng":-0.03638,"elevation":56.4},{"lat":51.446949,"lng":-0.036304,"elevation":56.1},{"lat":51.446947,"lng":-0.036231,"elevation":55.8},{"lat":51.446956,"lng":-0.036153,"elevation":55.6},{"lat":51.446959,"lng":-0.036092,"elevation":55.5},{"lat":51.446958,"lng":-0.036047,"elevation":55.4},{"lat":51.44695,"lng":-0.036005,"elevation":55.3},{"lat":51.446943,"lng":-0.03592,"elevation":55.1},{"lat":51.446922,"lng":-0.035837,"elevation":54.9},{"lat":51.446917,"lng":-0.035791,"elevation":54.8},{"lat":51.446918,"lng":-0.035736,"elevation":54.7},{"lat":51.446919,"lng":-0.035687,"elevation":54.6},{"lat":51.446925,"lng":-0.035638,"elevation":54.5},{"lat":51.446939,"lng":-0.035588,"elevation":54.4},{"lat":51.446955,"lng":-0.035541,"elevation":54.3},{"lat":51.446973,"lng":-0.035494,"elevation":54.2},{"lat":51.446983,"lng":-0.035444,"elevation":54.1},{"lat":51.446988,"lng":-0.035392,"elevation":53.9},{"lat":51.446988,"lng":-0.035345,"elevation":53.8},{"lat":51.446992,"lng":-0.035299,"elevation":53.7},{"lat":51.446998,"lng":-0.035254,"elevation":53.6},{"lat":51.447002,"lng":-0.035207,"elevation":53.5},{"lat":51.447007,"lng":-0.035163,"elevation":53.4},{"lat":51.447005,"lng":-0.035117,"elevation":53.3},{"lat":51.446995,"lng":-0.035074,"elevation":53.2},{"lat":51.446982,"lng":-0.035029,"elevation":53.1},{"lat":51.446966,"lng":-0.034983,"elevation":53},{"lat":51.446948,"lng":-0.03494,"elevation":52.9},{"lat":51.446931,"lng":-0.0349,"elevation":52.8},{"lat":51.446912,"lng":-0.034861,"elevation":52.7},{"lat":51.446894,"lng":-0.034823,"elevation":52.6},{"lat":51.446876,"lng":-0.034786,"elevation":52.5},{"lat":51.446856,"lng":-0.034748,"elevation":52.4},{"lat":51.446837,"lng":-0.034708,"elevation":52.3},{"lat":51.446822,"lng":-0.034667,"elevation":52.2},{"lat":51.446808,"lng":-0.034623,"elevation":52.1},{"lat":51.446795,"lng":-0.034577,"elevation":52},{"lat":51.446781,"lng":-0.034534,"elevation":51.9},{"lat":51.446769,"lng":-0.034491,"elevation":51.8},{"lat":51.446757,"lng":-0.03445,"elevation":51.7},{"lat":51.446745,"lng":-0.034408,"elevation":51.6},{"lat":51.446733,"lng":-0.034364,"elevation":51.5},{"lat":51.446719,"lng":-0.034323,"elevation":51.4},{"lat":51.446701,"lng":-0.034283,"elevation":51.3},{"lat":51.446681,"lng":-0.034248,"elevation":51.2},{"lat":51.446663,"lng":-0.034204,"elevation":51.1},{"lat":51.446648,"lng":-0.034162,"elevation":51},{"lat":51.446636,"lng":-0.034112,"elevation":50.9},{"lat":51.446616,"lng":-0.034068,"elevation":50.8},{"lat":51.446598,"lng":-0.034023,"elevation":50.7},{"lat":51.446579,"lng":-0.033978,"elevation":50.5},{"lat":51.446562,"lng":-0.033928,"elevation":50.4},{"lat":51.446547,"lng":-0.033886,"elevation":50.3},{"lat":51.44654,"lng":-0.033826,"elevation":50.2},{"lat":51.446534,"lng":-0.033775,"elevation":50.1},{"lat":51.446531,"lng":-0.033727,"elevation":49.9},{"lat":51.446529,"lng":-0.033683,"elevation":49.8},{"lat":51.446521,"lng":-0.033636,"elevation":49.6},{"lat":51.446524,"lng":-0.033562,"elevation":49.4},{"lat":51.446519,"lng":-0.033514,"elevation":49.2},{"lat":51.446521,"lng":-0.033456,"elevation":49.1},{"lat":51.446518,"lng":-0.033411,"elevation":48.9},{"lat":51.446527,"lng":-0.033355,"elevation":48.7},{"lat":51.44653,"lng":-0.033311,"elevation":48.6},{"lat":51.446558,"lng":-0.0333,"elevation":48.6},{"lat":51.446574,"lng":-0.033265,"elevation":48.5},{"lat":51.4466,"lng":-0.033283,"elevation":48.6},{"lat":51.446642,"lng":-0.033289,"elevation":48.6},{"lat":51.446677,"lng":-0.033272,"elevation":48.6},{"lat":51.446702,"lng":-0.033252,"elevation":48.5},{"lat":51.446725,"lng":-0.033228,"elevation":48.5},{"lat":51.446763,"lng":-0.033182,"elevation":48.4},{"lat":51.446815,"lng":-0.033156,"elevation":48.3},{"lat":51.446865,"lng":-0.033126,"elevation":48.3},{"lat":51.446888,"lng":-0.033109,"elevation":48.3},{"lat":51.446912,"lng":-0.033087,"elevation":48.2},{"lat":51.446937,"lng":-0.033063,"elevation":48.2},{"lat":51.446985,"lng":-0.033027,"elevation":48.2},{"lat":51.447007,"lng":-0.032989,"elevation":48.1},{"lat":51.447028,"lng":-0.032955,"elevation":48},{"lat":51.447038,"lng":-0.032909,"elevation":47.9},{"lat":51.447045,"lng":-0.032859,"elevation":47.8},{"lat":51.447055,"lng":-0.032813,"elevation":47.7},{"lat":51.44708,"lng":-0.032746,"elevation":47.6},{"lat":51.447108,"lng":-0.032745,"elevation":47.6},{"lat":51.447135,"lng":-0.032737,"elevation":47.6},{"lat":51.44718,"lng":-0.032719,"elevation":47.6},{"lat":51.447234,"lng":-0.032705,"elevation":47.5},{"lat":51.447262,"lng":-0.032695,"elevation":47.5},{"lat":51.447328,"lng":-0.032675,"elevation":47.5},{"lat":51.447355,"lng":-0.032661,"elevation":47.5},{"lat":51.447382,"lng":-0.032646,"elevation":47.5},{"lat":51.447424,"lng":-0.032605,"elevation":47.4},{"lat":51.447454,"lng":-0.032539,"elevation":47.3},{"lat":51.447486,"lng":-0.032471,"elevation":47.2},{"lat":51.447518,"lng":-0.032407,"elevation":47.1},{"lat":51.44756,"lng":-0.032363,"elevation":47.1},{"lat":51.447601,"lng":-0.032322,"elevation":47},{"lat":51.447647,"lng":-0.032288,"elevation":47},{"lat":51.44768,"lng":-0.032271,"elevation":47},{"lat":51.447709,"lng":-0.032257,"elevation":47},{"lat":51.447758,"lng":-0.03221,"elevation":47},{"lat":51.447796,"lng":-0.032151,"elevation":46.9},{"lat":51.447818,"lng":-0.032123,"elevation":46.9},{"lat":51.447876,"lng":-0.032076,"elevation":46.9},{"lat":51.447909,"lng":-0.032052,"elevation":46.9},{"lat":51.447971,"lng":-0.032017,"elevation":46.8},{"lat":51.447998,"lng":-0.031992,"elevation":46.8},{"lat":51.448024,"lng":-0.031964,"elevation":46.7},{"lat":51.448047,"lng":-0.031938,"elevation":46.7},{"lat":51.448095,"lng":-0.031879,"elevation":46.5},{"lat":51.448115,"lng":-0.031847,"elevation":46.4},{"lat":51.44814,"lng":-0.031774,"elevation":46.3},{"lat":51.448133,"lng":-0.031718,"elevation":46.1},{"lat":51.448169,"lng":-0.031652,"elevation":46},{"lat":51.448207,"lng":-0.03158,"elevation":45.8},{"lat":51.448228,"lng":-0.031549,"elevation":45.7},{"lat":51.448253,"lng":-0.03152,"elevation":45.6},{"lat":51.448279,"lng":-0.031432,"elevation":45.4},{"lat":51.448283,"lng":-0.031381,"elevation":45.3},{"lat":51.448275,"lng":-0.031285,"elevation":45.1},{"lat":51.448277,"lng":-0.031204,"elevation":44.7},{"lat":51.448306,"lng":-0.03115,"elevation":44.5},{"lat":51.448338,"lng":-0.031079,"elevation":44.1},{"lat":51.448351,"lng":-0.031038,"elevation":43.9},{"lat":51.448357,"lng":-0.030992,"elevation":43.6},{"lat":51.448358,"lng":-0.030944,"elevation":43.4},{"lat":51.448357,"lng":-0.030898,"elevation":43.1},{"lat":51.44837,"lng":-0.030807,"elevation":42.6},{"lat":51.448382,"lng":-0.030764,"elevation":42.4},{"lat":51.448394,"lng":-0.030721,"elevation":42.2},{"lat":51.448404,"lng":-0.030675,"elevation":42},{"lat":51.448407,"lng":-0.030625,"elevation":41.7},{"lat":51.448412,"lng":-0.030578,"elevation":41.4},{"lat":51.448409,"lng":-0.030525,"elevation":41.2},{"lat":51.448409,"lng":-0.030471,"elevation":40.9},{"lat":51.448415,"lng":-0.030368,"elevation":40.3},{"lat":51.448421,"lng":-0.030313,"elevation":40},{"lat":51.448431,"lng":-0.030256,"elevation":39.7},{"lat":51.448442,"lng":-0.030203,"elevation":39.3},{"lat":51.448457,"lng":-0.030153,"elevation":39.1},{"lat":51.448469,"lng":-0.030114,"elevation":38.8},{"lat":51.448483,"lng":-0.03007,"elevation":38.6},{"lat":51.448496,"lng":-0.030015,"elevation":38.3},{"lat":51.448502,"lng":-0.029965,"elevation":38},{"lat":51.448511,"lng":-0.029912,"elevation":37.7},{"lat":51.448509,"lng":-0.029858,"elevation":37.4},{"lat":51.448503,"lng":-0.029813,"elevation":37.1},{"lat":51.448506,"lng":-0.02977,"elevation":36.8},{"lat":51.448472,"lng":-0.029717,"elevation":36.5},{"lat":51.448459,"lng":-0.029672,"elevation":36.2},{"lat":51.448474,"lng":-0.029624,"elevation":35.9},{"lat":51.448507,"lng":-0.029618,"elevation":35.9},{"lat":51.448541,"lng":-0.029623,"elevation":36},{"lat":51.448605,"lng":-0.02963,"elevation":36.1},{"lat":51.448636,"lng":-0.029619,"elevation":36.1},{"lat":51.448667,"lng":-0.029607,"elevation":36},{"lat":51.448699,"lng":-0.029603,"elevation":36.1},{"lat":51.448774,"lng":-0.029611,"elevation":36.1},{"lat":51.448805,"lng":-0.029629,"elevation":36.2},{"lat":51.448834,"lng":-0.029658,"elevation":36.3},{"lat":51.448862,"lng":-0.029689,"elevation":36.5},{"lat":51.448914,"lng":-0.029724,"elevation":36.6},{"lat":51.448944,"lng":-0.029727,"elevation":36.6},{"lat":51.448973,"lng":-0.029732,"elevation":36.6},{"lat":51.449031,"lng":-0.029751,"elevation":36.6},{"lat":51.449086,"lng":-0.029775,"elevation":36.7},{"lat":51.449135,"lng":-0.02979,"elevation":36.7},{"lat":51.449184,"lng":-0.029797,"elevation":36.6},{"lat":51.449237,"lng":-0.029795,"elevation":36.5},{"lat":51.44929,"lng":-0.029785,"elevation":36.4},{"lat":51.449313,"lng":-0.029816,"elevation":36.5},{"lat":51.449348,"lng":-0.029877,"elevation":36.8},{"lat":51.449348,"lng":-0.029984,"elevation":37.3},{"lat":51.449344,"lng":-0.030079,"elevation":37.8},{"lat":51.449338,"lng":-0.030127,"elevation":38.1},{"lat":51.449339,"lng":-0.030212,"elevation":38.5},{"lat":51.449342,"lng":-0.030256,"elevation":38.8},{"lat":51.449356,"lng":-0.030336,"elevation":39.1},{"lat":51.449364,"lng":-0.030378,"elevation":39.3},{"lat":51.449364,"lng":-0.030429,"elevation":39.6},{"lat":51.449363,"lng":-0.030474,"elevation":39.8},{"lat":51.449366,"lng":-0.030532,"elevation":40},{"lat":51.449376,"lng":-0.030575,"elevation":40.1},{"lat":51.449384,"lng":-0.030617,"elevation":40.3},{"lat":51.44941,"lng":-0.030638,"elevation":40.3},{"lat":51.44944,"lng":-0.030679,"elevation":40.3},{"lat":51.449469,"lng":-0.030744,"elevation":40.5},{"lat":51.449493,"lng":-0.030808,"elevation":40.7},{"lat":51.449516,"lng":-0.030868,"elevation":40.8},{"lat":51.449528,"lng":-0.030943,"elevation":41.1},{"lat":51.449549,"lng":-0.031017,"elevation":41.3},{"lat":51.449577,"lng":-0.03108,"elevation":41.4},{"lat":51.449604,"lng":-0.031149,"elevation":41.4},{"lat":51.449621,"lng":-0.031192,"elevation":41.4},{"lat":51.449635,"lng":-0.031236,"elevation":41.4},{"lat":51.449652,"lng":-0.031281,"elevation":41.2},{"lat":51.449667,"lng":-0.031318,"elevation":41},{"lat":51.449682,"lng":-0.031368,"elevation":40.8},{"lat":51.449694,"lng":-0.031414,"elevation":40.6},{"lat":51.449706,"lng":-0.031454,"elevation":40.4},{"lat":51.44972,"lng":-0.031496,"elevation":40.2},{"lat":51.449733,"lng":-0.031538,"elevation":40},{"lat":51.449747,"lng":-0.031577,"elevation":39.8},{"lat":51.449756,"lng":-0.031621,"elevation":39.7},{"lat":51.449767,"lng":-0.031661,"elevation":39.5},{"lat":51.449777,"lng":-0.031701,"elevation":39.4},{"lat":51.449789,"lng":-0.031741,"elevation":39.2},{"lat":51.449792,"lng":-0.031793,"elevation":39.1},{"lat":51.449805,"lng":-0.031841,"elevation":38.9},{"lat":51.449816,"lng":-0.031883,"elevation":38.7},{"lat":51.449839,"lng":-0.031918,"elevation":38.4},{"lat":51.449856,"lng":-0.031955,"elevation":38.2},{"lat":51.44987,"lng":-0.031995,"elevation":38},{"lat":51.449885,"lng":-0.032032,"elevation":37.8},{"lat":51.44992,"lng":-0.032088,"elevation":37.4},{"lat":51.449937,"lng":-0.032123,"elevation":37.2},{"lat":51.449959,"lng":-0.032203,"elevation":36.9},{"lat":51.449964,"lng":-0.032248,"elevation":36.9},{"lat":51.449971,"lng":-0.032293,"elevation":36.8},{"lat":51.449983,"lng":-0.032332,"elevation":36.7},{"lat":51.45001,"lng":-0.032362,"elevation":36.4},{"lat":51.450025,"lng":-0.032442,"elevation":36.2},{"lat":51.450034,"lng":-0.032517,"elevation":36.1},{"lat":51.450011,"lng":-0.032565,"elevation":36.4},{"lat":51.449969,"lng":-0.032593,"elevation":36.8},{"lat":51.449937,"lng":-0.032604,"elevation":37.2},{"lat":51.449902,"lng":-0.032658,"elevation":37.6},{"lat":51.449867,"lng":-0.032728,"elevation":37.9},{"lat":51.44983,"lng":-0.032807,"elevation":38.3},{"lat":51.449808,"lng":-0.032839,"elevation":38.6},{"lat":51.449765,"lng":-0.032883,"elevation":39},{"lat":51.449734,"lng":-0.032887,"elevation":39.4},{"lat":51.449684,"lng":-0.032911,"elevation":39.9},{"lat":51.44964,"lng":-0.03295,"elevation":40.3},{"lat":51.449596,"lng":-0.032986,"elevation":40.6},{"lat":51.449546,"lng":-0.03301,"elevation":41},{"lat":51.449505,"lng":-0.03303,"elevation":41.2},{"lat":51.449478,"lng":-0.033057,"elevation":41.4},{"lat":51.449475,"lng":-0.033118,"elevation":41.2},{"lat":51.449447,"lng":-0.033114,"elevation":41.4},{"lat":51.449408,"lng":-0.033122,"elevation":41.7},{"lat":51.449359,"lng":-0.0331,"elevation":42.2},{"lat":51.449303,"lng":-0.033073,"elevation":42.8},{"lat":51.449275,"lng":-0.033058,"elevation":43.1},{"lat":51.449228,"lng":-0.033023,"elevation":43.6},{"lat":51.449169,"lng":-0.033025,"elevation":44.1},{"lat":51.449141,"lng":-0.033045,"elevation":44.3},{"lat":51.44911,"lng":-0.033058,"elevation":44.5},{"lat":51.449054,"lng":-0.033069,"elevation":44.9},{"lat":51.449025,"lng":-0.033065,"elevation":45.2},{"lat":51.448997,"lng":-0.033064,"elevation":45.4},{"lat":51.448973,"lng":-0.033088,"elevation":45.5},{"lat":51.448952,"lng":-0.033117,"elevation":45.6},{"lat":51.44891,"lng":-0.033148,"elevation":45.8},{"lat":51.44889,"lng":-0.033182,"elevation":45.9},{"lat":51.448848,"lng":-0.033211,"elevation":46.1},{"lat":51.448805,"lng":-0.033233,"elevation":46.4},{"lat":51.448761,"lng":-0.033253,"elevation":46.7},{"lat":51.448736,"lng":-0.033282,"elevation":46.7},{"lat":51.448692,"lng":-0.033307,"elevation":46.7},{"lat":51.448648,"lng":-0.033348,"elevation":46.7},{"lat":51.448627,"lng":-0.033378,"elevation":46.7},{"lat":51.448611,"lng":-0.033413,"elevation":46.6},{"lat":51.448597,"lng":-0.033452,"elevation":46.5},{"lat":51.448592,"lng":-0.033548,"elevation":46.3},{"lat":51.448591,"lng":-0.033591,"elevation":46.2},{"lat":51.448587,"lng":-0.033669,"elevation":46},{"lat":51.448597,"lng":-0.03371,"elevation":45.8},{"lat":51.448617,"lng":-0.033775,"elevation":45.6},{"lat":51.448631,"lng":-0.033838,"elevation":45.3},{"lat":51.448656,"lng":-0.033902,"elevation":45},{"lat":51.448692,"lng":-0.033957,"elevation":44.6},{"lat":51.448719,"lng":-0.034018,"elevation":44.2},{"lat":51.448738,"lng":-0.034088,"elevation":43.9},{"lat":51.448753,"lng":-0.034166,"elevation":43.5},{"lat":51.44876,"lng":-0.034255,"elevation":43.1},{"lat":51.44877,"lng":-0.034299,"elevation":42.9},{"lat":51.448787,"lng":-0.034383,"elevation":42.4},{"lat":51.448786,"lng":-0.03443,"elevation":42.3},{"lat":51.448776,"lng":-0.034545,"elevation":41.9},{"lat":51.448767,"lng":-0.034612,"elevation":41.9},{"lat":51.448766,"lng":-0.034667,"elevation":42},{"lat":51.448766,"lng":-0.034736,"elevation":42.1},{"lat":51.448769,"lng":-0.034782,"elevation":42.1},{"lat":51.448782,"lng":-0.034822,"elevation":42},{"lat":51.448804,"lng":-0.034855,"elevation":41.9},{"lat":51.448821,"lng":-0.034897,"elevation":41.8},{"lat":51.448863,"lng":-0.03494,"elevation":41.6},{"lat":51.448863,"lng":-0.035009,"elevation":41.6},{"lat":51.448866,"lng":-0.035053,"elevation":41.6},{"lat":51.448855,"lng":-0.035129,"elevation":41.8},{"lat":51.448854,"lng":-0.035173,"elevation":41.9},{"lat":51.448872,"lng":-0.035214,"elevation":41.8},{"lat":51.448887,"lng":-0.035254,"elevation":41.7},{"lat":51.448892,"lng":-0.035337,"elevation":41.7},{"lat":51.448873,"lng":-0.035389,"elevation":41.9},{"lat":51.448853,"lng":-0.035475,"elevation":42.2},{"lat":51.448855,"lng":-0.035546,"elevation":42.3},{"lat":51.44886,"lng":-0.035618,"elevation":42.3},{"lat":51.448843,"lng":-0.035654,"elevation":42.5},{"lat":51.448814,"lng":-0.035658,"elevation":42.7},{"lat":51.448774,"lng":-0.035655,"elevation":43.1},{"lat":51.448744,"lng":-0.035676,"elevation":43.4},{"lat":51.44872,"lng":-0.035695,"elevation":43.6},{"lat":51.448659,"lng":-0.035739,"elevation":44.2},{"lat":51.448633,"lng":-0.035761,"elevation":44.4},{"lat":51.448612,"lng":-0.035791,"elevation":44.6},{"lat":51.448582,"lng":-0.035852,"elevation":44.9},{"lat":51.448548,"lng":-0.035897,"elevation":45.3},{"lat":51.44851,"lng":-0.035929,"elevation":45.6},{"lat":51.448477,"lng":-0.035943,"elevation":45.9},{"lat":51.448446,"lng":-0.035978,"elevation":46.2},{"lat":51.448431,"lng":-0.036046,"elevation":46.4},{"lat":51.448423,"lng":-0.036092,"elevation":46.6},{"lat":51.448414,"lng":-0.03614,"elevation":46.7},{"lat":51.448405,"lng":-0.036183,"elevation":46.8},{"lat":51.448405,"lng":-0.036226,"elevation":46.9},{"lat":51.448405,"lng":-0.036274,"elevation":46.9},{"lat":51.448406,"lng":-0.036317,"elevation":46.9},{"lat":51.448404,"lng":-0.0364,"elevation":46.9},{"lat":51.448412,"lng":-0.036479,"elevation":46.8},{"lat":51.448423,"lng":-0.036553,"elevation":46.7},{"lat":51.448445,"lng":-0.036615,"elevation":46.4},{"lat":51.448449,"lng":-0.036688,"elevation":46.4},{"lat":51.448444,"lng":-0.03673,"elevation":46.4},{"lat":51.448438,"lng":-0.036802,"elevation":46.5},{"lat":51.448431,"lng":-0.036877,"elevation":46.5},{"lat":51.448418,"lng":-0.036945,"elevation":46.6},{"lat":51.44841,"lng":-0.037009,"elevation":46.7},{"lat":51.448395,"lng":-0.037067,"elevation":46.8},{"lat":51.448386,"lng":-0.037125,"elevation":46.9},{"lat":51.44836,"lng":-0.037187,"elevation":47.2},{"lat":51.448339,"lng":-0.037251,"elevation":47.4},{"lat":51.44832,"lng":-0.037314,"elevation":47.7},{"lat":51.448305,"lng":-0.037392,"elevation":47.8},{"lat":51.448296,"lng":-0.037433,"elevation":47.9},{"lat":51.44829,"lng":-0.037475,"elevation":48},{"lat":51.448285,"lng":-0.037518,"elevation":48.1},{"lat":51.448277,"lng":-0.037564,"elevation":48.2},{"lat":51.44827,"lng":-0.037607,"elevation":48.3},{"lat":51.448252,"lng":-0.037686,"elevation":48.5},{"lat":51.448234,"lng":-0.037759,"elevation":48.8},{"lat":51.448212,"lng":-0.03783,"elevation":49.1},{"lat":51.44821,"lng":-0.037878,"elevation":49.1},{"lat":51.448211,"lng":-0.037963,"elevation":48.9},{"lat":51.448206,"lng":-0.038041,"elevation":48.7},{"lat":51.448189,"lng":-0.038122,"elevation":48.6},{"lat":51.448172,"lng":-0.038172,"elevation":48.6},{"lat":51.448152,"lng":-0.038219,"elevation":48.6},{"lat":51.44813,"lng":-0.038272,"elevation":48.7},{"lat":51.448107,"lng":-0.038323,"elevation":48.8},{"lat":51.448086,"lng":-0.038361,"elevation":48.8},{"lat":51.448065,"lng":-0.038425,"elevation":48.8},{"lat":51.448052,"lng":-0.038481,"elevation":48.7},{"lat":51.448046,"lng":-0.038541,"elevation":48.5},{"lat":51.448033,"lng":-0.038592,"elevation":48.4},{"lat":51.448042,"lng":-0.038643,"elevation":48.1},{"lat":51.448031,"lng":-0.038734,"elevation":47.8},{"lat":51.448045,"lng":-0.038804,"elevation":47.4},{"lat":51.448039,"lng":-0.038853,"elevation":47.2},{"lat":51.448036,"lng":-0.038906,"elevation":47},{"lat":51.44802,"lng":-0.038968,"elevation":46.9},{"lat":51.448,"lng":-0.03904,"elevation":46.8},{"lat":51.447987,"lng":-0.039082,"elevation":46.7},{"lat":51.447958,"lng":-0.039158,"elevation":46.7},{"lat":51.447944,"lng":-0.039205,"elevation":46.6},{"lat":51.44793,"lng":-0.039251,"elevation":46.5},{"lat":51.447906,"lng":-0.039316,"elevation":46.4},{"lat":51.44789,"lng":-0.039357,"elevation":46.4},{"lat":51.447869,"lng":-0.039403,"elevation":46.4},{"lat":51.447866,"lng":-0.039472,"elevation":46.1},{"lat":51.447858,"lng":-0.039515,"elevation":46},{"lat":51.447857,"lng":-0.039594,"elevation":45.7},{"lat":51.447848,"lng":-0.039636,"elevation":45.6},{"lat":51.447841,"lng":-0.039679,"elevation":45.5},{"lat":51.447819,"lng":-0.039759,"elevation":45.4},{"lat":51.447807,"lng":-0.039804,"elevation":45.4},{"lat":51.447795,"lng":-0.039849,"elevation":45.3},{"lat":51.447782,"lng":-0.039889,"elevation":45.3},{"lat":51.447753,"lng":-0.039933,"elevation":45.4},{"lat":51.447728,"lng":-0.039976,"elevation":45.4},{"lat":51.447706,"lng":-0.040022,"elevation":45.4},{"lat":51.44769,"lng":-0.040071,"elevation":45.3},{"lat":51.44768,"lng":-0.040118,"elevation":45.2},{"lat":51.447667,"lng":-0.040161,"elevation":45.1},{"lat":51.447662,"lng":-0.040215,"elevation":44.9},{"lat":51.447652,"lng":-0.040259,"elevation":44.7},{"lat":51.447645,"lng":-0.040302,"elevation":44.5},{"lat":51.447632,"lng":-0.040345,"elevation":44.4},{"lat":51.447625,"lng":-0.040431,"elevation":44},{"lat":51.447626,"lng":-0.040479,"elevation":43.8},{"lat":51.447617,"lng":-0.040528,"elevation":43.7},{"lat":51.447608,"lng":-0.040572,"elevation":43.6},{"lat":51.447594,"lng":-0.040613,"elevation":43.5},{"lat":51.447576,"lng":-0.040649,"elevation":43.4},{"lat":51.447554,"lng":-0.040682,"elevation":43.4},{"lat":51.447532,"lng":-0.040713,"elevation":43.4},{"lat":51.447515,"lng":-0.040752,"elevation":43.3},{"lat":51.44749,"lng":-0.040772,"elevation":43.3},{"lat":51.447471,"lng":-0.040809,"elevation":43.3},{"lat":51.447464,"lng":-0.040853,"elevation":43.1},{"lat":51.447451,"lng":-0.040897,"elevation":42.9},{"lat":51.447453,"lng":-0.040941,"elevation":42.7},{"lat":51.447451,"lng":-0.041027,"elevation":42.3},{"lat":51.44745,"lng":-0.041075,"elevation":42},{"lat":51.447444,"lng":-0.041118,"elevation":41.8},{"lat":51.447438,"lng":-0.041167,"elevation":41.6},{"lat":51.447432,"lng":-0.04123,"elevation":41.3},{"lat":51.447416,"lng":-0.041272,"elevation":41.2},{"lat":51.447399,"lng":-0.04131,"elevation":41.2},{"lat":51.447381,"lng":-0.041348,"elevation":41.2},{"lat":51.447363,"lng":-0.041382,"elevation":41.2},{"lat":51.447341,"lng":-0.041415,"elevation":41.2},{"lat":51.44732,"lng":-0.041453,"elevation":41.3},{"lat":51.447298,"lng":-0.041483,"elevation":41.3},{"lat":51.447275,"lng":-0.041519,"elevation":41.3},{"lat":51.447254,"lng":-0.041553,"elevation":41.3},{"lat":51.447234,"lng":-0.041588,"elevation":41.3},{"lat":51.447211,"lng":-0.041619,"elevation":41.3},{"lat":51.447186,"lng":-0.041647,"elevation":41.3},{"lat":51.447164,"lng":-0.041678,"elevation":41.3},{"lat":51.447141,"lng":-0.041713,"elevation":41.3},{"lat":51.447121,"lng":-0.041752,"elevation":41.3},{"lat":51.447101,"lng":-0.041792,"elevation":41.3},{"lat":51.447084,"lng":-0.041833,"elevation":41.3},{"lat":51.447069,"lng":-0.041877,"elevation":41.2},{"lat":51.447057,"lng":-0.041925,"elevation":41.2},{"lat":51.447045,"lng":-0.041973,"elevation":41.1},{"lat":51.447027,"lng":-0.042016,"elevation":41},{"lat":51.446984,"lng":-0.042068,"elevation":40.9},{"lat":51.446937,"lng":-0.042098,"elevation":40.8},{"lat":51.446911,"lng":-0.042115,"elevation":40.7},{"lat":51.446876,"lng":-0.042154,"elevation":40.6},{"lat":51.446836,"lng":-0.042195,"elevation":40.5},{"lat":51.446785,"lng":-0.042234,"elevation":40.4},{"lat":51.446758,"lng":-0.042254,"elevation":40.3},{"lat":51.446731,"lng":-0.042278,"elevation":40.2},{"lat":51.446693,"lng":-0.04234,"elevation":40.1},{"lat":51.446663,"lng":-0.042396,"elevation":39.9},{"lat":51.446648,"lng":-0.042462,"elevation":39.8},{"lat":51.446611,"lng":-0.042503,"elevation":39.6},{"lat":51.446559,"lng":-0.042505,"elevation":39.5},{"lat":51.446491,"lng":-0.042495,"elevation":39.4},{"lat":51.446459,"lng":-0.042496,"elevation":39.4},{"lat":51.446432,"lng":-0.042508,"elevation":39.3},{"lat":51.446401,"lng":-0.042527,"elevation":39.2},{"lat":51.446341,"lng":-0.042533,"elevation":39.1},{"lat":51.446312,"lng":-0.042522,"elevation":39.1},{"lat":51.44628,"lng":-0.0425,"elevation":39.1},{"lat":51.446234,"lng":-0.04248,"elevation":39},{"lat":51.446177,"lng":-0.042468,"elevation":38.9},{"lat":51.446145,"lng":-0.042472,"elevation":38.7},{"lat":51.446109,"lng":-0.042478,"elevation":38.6},{"lat":51.446074,"lng":-0.042481,"elevation":38.5},{"lat":51.446041,"lng":-0.042478,"elevation":38.4},{"lat":51.446012,"lng":-0.042472,"elevation":38.3},{"lat":51.445958,"lng":-0.042469,"elevation":38.2},{"lat":51.44593,"lng":-0.042468,"elevation":38.1},{"lat":51.445901,"lng":-0.042467,"elevation":38},{"lat":51.445837,"lng":-0.042453,"elevation":37.8},{"lat":51.445804,"lng":-0.04245,"elevation":37.7},{"lat":51.445744,"lng":-0.042445,"elevation":37.6},{"lat":51.445697,"lng":-0.042447,"elevation":37.4},{"lat":51.445648,"lng":-0.042469,"elevation":37.2},{"lat":51.445603,"lng":-0.042478,"elevation":37.1},{"lat":51.445554,"lng":-0.042473,"elevation":36.9},{"lat":51.445504,"lng":-0.042462,"elevation":36.8},{"lat":51.445459,"lng":-0.042471,"elevation":36.7},{"lat":51.445411,"lng":-0.042488,"elevation":36.5},{"lat":51.445364,"lng":-0.042502,"elevation":36.5},{"lat":51.445322,"lng":-0.04251,"elevation":36.4},{"lat":51.445282,"lng":-0.042547,"elevation":36.4},{"lat":51.445247,"lng":-0.04259,"elevation":36.3},{"lat":51.445223,"lng":-0.04264,"elevation":36.3},{"lat":51.445227,"lng":-0.042688,"elevation":36.2},{"lat":51.445264,"lng":-0.042683,"elevation":36.2},{"lat":51.44529,"lng":-0.042703,"elevation":36.2},{"lat":51.445306,"lng":-0.042746,"elevation":36.2},{"lat":51.445315,"lng":-0.042791,"elevation":36.1},{"lat":51.445323,"lng":-0.042836,"elevation":36.1},{"lat":51.445346,"lng":-0.042891,"elevation":36},{"lat":51.445358,"lng":-0.042939,"elevation":36.1},{"lat":51.445365,"lng":-0.042993,"elevation":36.2},{"lat":51.445367,"lng":-0.043051,"elevation":36.3},{"lat":51.445378,"lng":-0.0431,"elevation":36.4},{"lat":51.445397,"lng":-0.043136,"elevation":36.5},{"lat":51.445407,"lng":-0.043193,"elevation":36.7},{"lat":51.445401,"lng":-0.043242,"elevation":36.8},{"lat":51.445392,"lng":-0.043297,"elevation":36.9},{"lat":51.445381,"lng":-0.043345,"elevation":37},{"lat":51.445377,"lng":-0.043406,"elevation":37.1},{"lat":51.445378,"lng":-0.04345,"elevation":37.3},{"lat":51.44538,"lng":-0.043506,"elevation":37.4},{"lat":51.445373,"lng":-0.043557,"elevation":37.5},{"lat":51.445366,"lng":-0.043599,"elevation":37.6},{"lat":51.445376,"lng":-0.043656,"elevation":37.7},{"lat":51.445396,"lng":-0.043702,"elevation":37.9},{"lat":51.445413,"lng":-0.043763,"elevation":38},{"lat":51.445429,"lng":-0.043802,"elevation":38.2},{"lat":51.445443,"lng":-0.043851,"elevation":38.3},{"lat":51.445451,"lng":-0.043905,"elevation":38.4},{"lat":51.445448,"lng":-0.04395,"elevation":38.5},{"lat":51.445451,"lng":-0.044007,"elevation":38.7},{"lat":51.44545,"lng":-0.04406,"elevation":38.8},{"lat":51.445449,"lng":-0.044111,"elevation":38.9},{"lat":51.445448,"lng":-0.044163,"elevation":39},{"lat":51.445448,"lng":-0.044218,"elevation":39.2},{"lat":51.445444,"lng":-0.044274,"elevation":39.3},{"lat":51.445441,"lng":-0.044321,"elevation":39.4},{"lat":51.445437,"lng":-0.044382,"elevation":39.5},{"lat":51.44543,"lng":-0.044436,"elevation":39.7},{"lat":51.445428,"lng":-0.044485,"elevation":39.8},{"lat":51.44544,"lng":-0.044538,"elevation":39.9},{"lat":51.445417,"lng":-0.044577,"elevation":40},{"lat":51.44538,"lng":-0.044596,"elevation":39.9},{"lat":51.445346,"lng":-0.044605,"elevation":39.9},{"lat":51.445317,"lng":-0.044618,"elevation":39.8},{"lat":51.445289,"lng":-0.044638,"elevation":39.8},{"lat":51.445261,"lng":-0.044656,"elevation":39.8},{"lat":51.445235,"lng":-0.044672,"elevation":39.8},{"lat":51.445207,"lng":-0.044687,"elevation":39.7},{"lat":51.445176,"lng":-0.044692,"elevation":39.6},{"lat":51.445149,"lng":-0.044684,"elevation":39.6},{"lat":51.445122,"lng":-0.044682,"elevation":39.5}],[{"lat":51.445431,"lng":-0.04483,"elevation":40.6},{"lat":51.445447,"lng":-0.044703,"elevation":40.3},{"lat":51.445479,"lng":-0.044711,"elevation":40.4},{"lat":51.445432,"lng":-0.044673,"elevation":40.2},{"lat":51.445378,"lng":-0.044608,"elevation":40},{"lat":51.445327,"lng":-0.04451,"elevation":39.6},{"lat":51.445379,"lng":-0.044597,"elevation":39.9},{"lat":51.445389,"lng":-0.04452,"elevation":39.8},{"lat":51.445391,"lng":-0.044462,"elevation":39.7},{"lat":51.445386,"lng":-0.044402,"elevation":39.5},{"lat":51.445379,"lng":-0.044339,"elevation":39.3},{"lat":51.445382,"lng":-0.04429,"elevation":39.2},{"lat":51.445377,"lng":-0.044231,"elevation":39.1},{"lat":51.445381,"lng":-0.044169,"elevation":38.9},{"lat":51.445385,"lng":-0.04411,"elevation":38.8},{"lat":51.445385,"lng":-0.044051,"elevation":38.7},{"lat":51.445372,"lng":-0.043982,"elevation":38.5},{"lat":51.445371,"lng":-0.043918,"elevation":38.3},{"lat":51.445366,"lng":-0.043864,"elevation":38.2},{"lat":51.445365,"lng":-0.043803,"elevation":38.1},{"lat":51.445364,"lng":-0.043741,"elevation":37.9},{"lat":51.445369,"lng":-0.043694,"elevation":37.8},{"lat":51.44537,"lng":-0.043639,"elevation":37.7},{"lat":51.445367,"lng":-0.043582,"elevation":37.5},{"lat":51.445371,"lng":-0.043534,"elevation":37.4},{"lat":51.445373,"lng":-0.043481,"elevation":37.3},{"lat":51.44539,"lng":-0.043426,"elevation":37.2},{"lat":51.445382,"lng":-0.043371,"elevation":37.1},{"lat":51.445378,"lng":-0.043311,"elevation":36.9},{"lat":51.445377,"lng":-0.043249,"elevation":36.8},{"lat":51.445371,"lng":-0.043188,"elevation":36.6},{"lat":51.445366,"lng":-0.043138,"elevation":36.5},{"lat":51.445365,"lng":-0.043091,"elevation":36.4},{"lat":51.445367,"lng":-0.043045,"elevation":36.3},{"lat":51.445362,"lng":-0.042994,"elevation":36.2},{"lat":51.44536,"lng":-0.042945,"elevation":36.1},{"lat":51.445361,"lng":-0.042896,"elevation":36},{"lat":51.445365,"lng":-0.04285,"elevation":36.1},{"lat":51.445358,"lng":-0.042797,"elevation":36.1},{"lat":51.445343,"lng":-0.042744,"elevation":36.2},{"lat":51.445321,"lng":-0.042704,"elevation":36.2},{"lat":51.445292,"lng":-0.042682,"elevation":36.2},{"lat":51.445274,"lng":-0.042641,"elevation":36.3},{"lat":51.445268,"lng":-0.042569,"elevation":36.3},{"lat":51.445268,"lng":-0.042496,"elevation":36.4},{"lat":51.445278,"lng":-0.042456,"elevation":36.5},{"lat":51.445312,"lng":-0.042412,"elevation":36.5},{"lat":51.445343,"lng":-0.042403,"elevation":36.6},{"lat":51.445376,"lng":-0.042414,"elevation":36.6},{"lat":51.445407,"lng":-0.042421,"elevation":36.6},{"lat":51.445445,"lng":-0.042407,"elevation":36.7},{"lat":51.445474,"lng":-0.042361,"elevation":36.9},{"lat":51.445492,"lng":-0.042307,"elevation":37},{"lat":51.445497,"lng":-0.042264,"elevation":37.1},{"lat":51.445504,"lng":-0.042205,"elevation":37.2},{"lat":51.445512,"lng":-0.042152,"elevation":37.3},{"lat":51.445519,"lng":-0.042093,"elevation":37.4},{"lat":51.445526,"lng":-0.042045,"elevation":37.4},{"lat":51.445531,"lng":-0.041995,"elevation":37.5},{"lat":51.445524,"lng":-0.041949,"elevation":37.6},{"lat":51.445497,"lng":-0.041903,"elevation":37.5},{"lat":51.445473,"lng":-0.041848,"elevation":37.5},{"lat":51.445467,"lng":-0.041778,"elevation":37.6},{"lat":51.445457,"lng":-0.041708,"elevation":37.6},{"lat":51.445453,"lng":-0.041651,"elevation":37.7},{"lat":51.445455,"lng":-0.041606,"elevation":37.7},{"lat":51.445474,"lng":-0.041572,"elevation":37.9},{"lat":51.445494,"lng":-0.041538,"elevation":38},{"lat":51.445506,"lng":-0.041494,"elevation":38.1},{"lat":51.44552,"lng":-0.041457,"elevation":38.2},{"lat":51.445542,"lng":-0.041411,"elevation":38.4},{"lat":51.445543,"lng":-0.041363,"elevation":38.5},{"lat":51.445547,"lng":-0.041312,"elevation":38.5},{"lat":51.445553,"lng":-0.041264,"elevation":38.6},{"lat":51.445557,"lng":-0.041212,"elevation":38.9},{"lat":51.445564,"lng":-0.041168,"elevation":39.2},{"lat":51.445568,"lng":-0.041123,"elevation":39.5},{"lat":51.445565,"lng":-0.041078,"elevation":39.8},{"lat":51.44556,"lng":-0.04102,"elevation":40.1},{"lat":51.445567,"lng":-0.040966,"elevation":40.5},{"lat":51.445584,"lng":-0.040909,"elevation":40.9},{"lat":51.445602,"lng":-0.040855,"elevation":41.4},{"lat":51.445606,"lng":-0.040801,"elevation":41.7},{"lat":51.445606,"lng":-0.040742,"elevation":42.1},{"lat":51.445613,"lng":-0.040699,"elevation":42.4},{"lat":51.445623,"lng":-0.040652,"elevation":42.8},{"lat":51.445632,"lng":-0.040593,"elevation":43.2},{"lat":51.445631,"lng":-0.040542,"elevation":43.5},{"lat":51.445629,"lng":-0.040493,"elevation":43.8},{"lat":51.445636,"lng":-0.040438,"elevation":44.2},{"lat":51.445638,"lng":-0.040392,"elevation":44.5},{"lat":51.445645,"lng":-0.040336,"elevation":45},{"lat":51.445642,"lng":-0.040281,"elevation":45.4},{"lat":51.445637,"lng":-0.040224,"elevation":45.8},{"lat":51.445643,"lng":-0.040172,"elevation":46.2},{"lat":51.445653,"lng":-0.040115,"elevation":46.7},{"lat":51.44566,"lng":-0.040067,"elevation":47.1},{"lat":51.445667,"lng":-0.040007,"elevation":47.6},{"lat":51.445679,"lng":-0.03995,"elevation":48.1},{"lat":51.445695,"lng":-0.0399,"elevation":48.6},{"lat":51.445697,"lng":-0.039844,"elevation":49},{"lat":51.445691,"lng":-0.039793,"elevation":49.4},{"lat":51.445694,"lng":-0.03973,"elevation":49.9},{"lat":51.445707,"lng":-0.039684,"elevation":50.3},{"lat":51.445717,"lng":-0.039636,"elevation":50.8},{"lat":51.445722,"lng":-0.03957,"elevation":51.2},{"lat":51.445727,"lng":-0.039515,"elevation":51.3},{"lat":51.445726,"lng":-0.039466,"elevation":51.3},{"lat":51.445729,"lng":-0.039413,"elevation":51.4},{"lat":51.445736,"lng":-0.039368,"elevation":51.5},{"lat":51.445747,"lng":-0.039312,"elevation":51.6},{"lat":51.445758,"lng":-0.039253,"elevation":51.8},{"lat":51.445765,"lng":-0.039188,"elevation":51.9},{"lat":51.44577,"lng":-0.039107,"elevation":52},{"lat":51.445775,"lng":-0.039034,"elevation":52.1},{"lat":51.445785,"lng":-0.038959,"elevation":52.3},{"lat":51.445786,"lng":-0.038875,"elevation":52.4},{"lat":51.445787,"lng":-0.0388,"elevation":52.5},{"lat":51.445795,"lng":-0.038727,"elevation":52.7},{"lat":51.445797,"lng":-0.038655,"elevation":52.8},{"lat":51.445824,"lng":-0.038585,"elevation":53.2},{"lat":51.445849,"lng":-0.038511,"elevation":53.6},{"lat":51.445869,"lng":-0.038448,"elevation":53.9},{"lat":51.445883,"lng":-0.038377,"elevation":54.2},{"lat":51.445886,"lng":-0.038302,"elevation":54.3},{"lat":51.445897,"lng":-0.038223,"elevation":54.6},{"lat":51.445909,"lng":-0.038153,"elevation":54.9},{"lat":51.44592,"lng":-0.038076,"elevation":55.1},{"lat":51.445927,"lng":-0.03803,"elevation":55.3},{"lat":51.445931,"lng":-0.037982,"elevation":55.4},{"lat":51.445941,"lng":-0.037919,"elevation":55.7},{"lat":51.44595,"lng":-0.037866,"elevation":55.7},{"lat":51.445959,"lng":-0.037805,"elevation":55.6},{"lat":51.445966,"lng":-0.037762,"elevation":55.6},{"lat":51.445977,"lng":-0.037707,"elevation":55.6},{"lat":51.44599,"lng":-0.037668,"elevation":55.7},{"lat":51.446005,"lng":-0.037632,"elevation":55.8},{"lat":51.446027,"lng":-0.037604,"elevation":55.9},{"lat":51.446051,"lng":-0.037541,"elevation":56.1},{"lat":51.446096,"lng":-0.037512,"elevation":56.5},{"lat":51.446124,"lng":-0.037515,"elevation":56.7},{"lat":51.44615,"lng":-0.037521,"elevation":57},{"lat":51.446177,"lng":-0.037532,"elevation":57.3},{"lat":51.446202,"lng":-0.037549,"elevation":57.6},{"lat":51.446249,"lng":-0.037585,"elevation":58.2},{"lat":51.446293,"lng":-0.037604,"elevation":58.4},{"lat":51.446338,"lng":-0.037607,"elevation":58.6},{"lat":51.446383,"lng":-0.037625,"elevation":58.9},{"lat":51.446432,"lng":-0.037645,"elevation":59.2},{"lat":51.446484,"lng":-0.037662,"elevation":59.4},{"lat":51.446511,"lng":-0.037674,"elevation":59.6},{"lat":51.446563,"lng":-0.037689,"elevation":59.9},{"lat":51.446591,"lng":-0.037696,"elevation":60},{"lat":51.446642,"lng":-0.037703,"elevation":60.2},{"lat":51.446693,"lng":-0.037711,"elevation":60.5},{"lat":51.446745,"lng":-0.037707,"elevation":60.7},{"lat":51.446797,"lng":-0.037711,"elevation":61},{"lat":51.446847,"lng":-0.037715,"elevation":61.2},{"lat":51.446899,"lng":-0.03772,"elevation":61.5},{"lat":51.446929,"lng":-0.037719,"elevation":61.6},{"lat":51.446958,"lng":-0.037716,"elevation":61.7},{"lat":51.446986,"lng":-0.037719,"elevation":61.8},{"lat":51.447045,"lng":-0.037732,"elevation":62.2},{"lat":51.447076,"lng":-0.037742,"elevation":62.3},{"lat":51.447107,"lng":-0.03775,"elevation":62.1},{"lat":51.447137,"lng":-0.037759,"elevation":61.8},{"lat":51.447166,"lng":-0.037765,"elevation":61.5},{"lat":51.447193,"lng":-0.037765,"elevation":61.2},{"lat":51.447244,"lng":-0.037766,"elevation":60.6},{"lat":51.447288,"lng":-0.037727,"elevation":60},{"lat":51.447265,"lng":-0.037663,"elevation":60},{"lat":51.447249,"lng":-0.037624,"elevation":60.1},{"lat":51.44723,"lng":-0.037585,"elevation":60.2},{"lat":51.447212,"lng":-0.037543,"elevation":60.2},{"lat":51.447193,"lng":-0.037494,"elevation":60.3},{"lat":51.447175,"lng":-0.037443,"elevation":60.3},{"lat":51.447156,"lng":-0.037393,"elevation":60.4},{"lat":51.447139,"lng":-0.037349,"elevation":60.4},{"lat":51.447126,"lng":-0.037311,"elevation":60.4},{"lat":51.447113,"lng":-0.037272,"elevation":60.4},{"lat":51.447103,"lng":-0.037231,"elevation":60.3},{"lat":51.447079,"lng":-0.037154,"elevation":60.2},{"lat":51.447069,"lng":-0.037113,"elevation":60.1},{"lat":51.447054,"lng":-0.037027,"elevation":59.6},{"lat":51.447046,"lng":-0.036981,"elevation":59.4},{"lat":51.44704,"lng":-0.036934,"elevation":59.1},{"lat":51.447033,"lng":-0.036887,"elevation":58.9},{"lat":51.447026,"lng":-0.03684,"elevation":58.7},{"lat":51.447019,"lng":-0.036794,"elevation":58.4},{"lat":51.447012,"lng":-0.036746,"elevation":58.2},{"lat":51.447006,"lng":-0.036704,"elevation":58},{"lat":51.446999,"lng":-0.036651,"elevation":57.7},{"lat":51.446992,"lng":-0.036603,"elevation":57.5},{"lat":51.446985,"lng":-0.036555,"elevation":57.3},{"lat":51.446977,"lng":-0.036506,"elevation":57},{"lat":51.446972,"lng":-0.036453,"elevation":56.8},{"lat":51.446968,"lng":-0.036401,"elevation":56.5},{"lat":51.446962,"lng":-0.036348,"elevation":56.3},{"lat":51.446958,"lng":-0.036305,"elevation":56.1},{"lat":51.44695,"lng":-0.03625,"elevation":55.8},{"lat":51.446947,"lng":-0.036205,"elevation":55.7},{"lat":51.446944,"lng":-0.036159,"elevation":55.6},{"lat":51.446938,"lng":-0.036115,"elevation":55.5},{"lat":51.446933,"lng":-0.03607,"elevation":55.4},{"lat":51.446929,"lng":-0.036026,"elevation":55.3},{"lat":51.446927,"lng":-0.03594,"elevation":55.1},{"lat":51.446916,"lng":-0.035896,"elevation":55},{"lat":51.446903,"lng":-0.03585,"elevation":54.9},{"lat":51.446895,"lng":-0.035808,"elevation":54.8},{"lat":51.44688,"lng":-0.035762,"elevation":54.7},{"lat":51.446874,"lng":-0.035708,"elevation":54.6},{"lat":51.446879,"lng":-0.035664,"elevation":54.5},{"lat":51.446885,"lng":-0.035577,"elevation":54.3},{"lat":51.446887,"lng":-0.035533,"elevation":54.2},{"lat":51.446889,"lng":-0.035489,"elevation":54.2},{"lat":51.446893,"lng":-0.035446,"elevation":54.1},{"lat":51.446901,"lng":-0.03536,"elevation":53.9},{"lat":51.446904,"lng":-0.035315,"elevation":53.8},{"lat":51.446908,"lng":-0.035234,"elevation":53.6},{"lat":51.446908,"lng":-0.03519,"elevation":53.5},{"lat":51.446906,"lng":-0.035107,"elevation":53.3},{"lat":51.446907,"lng":-0.035062,"elevation":53.1},{"lat":51.446907,"lng":-0.035017,"elevation":53},{"lat":51.446903,"lng":-0.034971,"elevation":52.9},{"lat":51.446892,"lng":-0.034927,"elevation":52.8},{"lat":51.446879,"lng":-0.034884,"elevation":52.7},{"lat":51.446862,"lng":-0.034843,"elevation":52.6},{"lat":51.446845,"lng":-0.034801,"elevation":52.5},{"lat":51.446827,"lng":-0.034762,"elevation":52.4},{"lat":51.446813,"lng":-0.034723,"elevation":52.3},{"lat":51.446794,"lng":-0.034683,"elevation":52.2},{"lat":51.446764,"lng":-0.034614,"elevation":52.1},{"lat":51.44674,"lng":-0.034546,"elevation":51.9},{"lat":51.446721,"lng":-0.034476,"elevation":51.7},{"lat":51.446702,"lng":-0.034403,"elevation":51.6},{"lat":51.446692,"lng":-0.034361,"elevation":51.5},{"lat":51.446683,"lng":-0.034318,"elevation":51.4},{"lat":51.446677,"lng":-0.034275,"elevation":51.3},{"lat":51.446665,"lng":-0.034192,"elevation":51.1},{"lat":51.446653,"lng":-0.034116,"elevation":50.9},{"lat":51.446638,"lng":-0.034047,"elevation":50.7},{"lat":51.446621,"lng":-0.033983,"elevation":50.6},{"lat":51.446601,"lng":-0.033907,"elevation":50.4},{"lat":51.446585,"lng":-0.033856,"elevation":50.3},{"lat":51.44657,"lng":-0.033811,"elevation":50.1},{"lat":51.446553,"lng":-0.033764,"elevation":50},{"lat":51.446537,"lng":-0.033715,"elevation":49.9},{"lat":51.446524,"lng":-0.033668,"elevation":49.7},{"lat":51.44651,"lng":-0.033626,"elevation":49.6},{"lat":51.446493,"lng":-0.033589,"elevation":49.5},{"lat":51.446464,"lng":-0.033523,"elevation":49.3},{"lat":51.446454,"lng":-0.033474,"elevation":49.1},{"lat":51.446449,"lng":-0.033414,"elevation":48.9},{"lat":51.446472,"lng":-0.033362,"elevation":48.7},{"lat":51.4465,"lng":-0.03336,"elevation":48.7},{"lat":51.446527,"lng":-0.033369,"elevation":48.8},{"lat":51.446572,"lng":-0.033373,"elevation":48.8},{"lat":51.446615,"lng":-0.033362,"elevation":48.8},{"lat":51.446656,"lng":-0.033352,"elevation":48.8},{"lat":51.446698,"lng":-0.03332,"elevation":48.7},{"lat":51.446724,"lng":-0.033295,"elevation":48.7},{"lat":51.446758,"lng":-0.033268,"elevation":48.6},{"lat":51.446789,"lng":-0.033249,"elevation":48.6},{"lat":51.446817,"lng":-0.033229,"elevation":48.5},{"lat":51.446848,"lng":-0.033219,"elevation":48.5},{"lat":51.446882,"lng":-0.033214,"elevation":48.6},{"lat":51.446907,"lng":-0.033197,"elevation":48.5},{"lat":51.446933,"lng":-0.033177,"elevation":48.5},{"lat":51.446957,"lng":-0.033151,"elevation":48.5},{"lat":51.44698,"lng":-0.033125,"elevation":48.4},{"lat":51.447005,"lng":-0.033104,"elevation":48.4},{"lat":51.447023,"lng":-0.033069,"elevation":48.3},{"lat":51.447034,"lng":-0.033023,"elevation":48.2},{"lat":51.44704,"lng":-0.032975,"elevation":48.1},{"lat":51.447049,"lng":-0.032932,"elevation":48},{"lat":51.447068,"lng":-0.032899,"elevation":47.9},{"lat":51.447094,"lng":-0.032874,"elevation":47.9},{"lat":51.44712,"lng":-0.032852,"elevation":47.8},{"lat":51.447191,"lng":-0.032828,"elevation":47.8},{"lat":51.447229,"lng":-0.032818,"elevation":47.8},{"lat":51.447262,"lng":-0.032809,"elevation":47.8},{"lat":51.44729,"lng":-0.032798,"elevation":47.8},{"lat":51.447335,"lng":-0.032752,"elevation":47.7},{"lat":51.447354,"lng":-0.03272,"elevation":47.6},{"lat":51.447393,"lng":-0.032671,"elevation":47.5},{"lat":51.447444,"lng":-0.032652,"elevation":47.5},{"lat":51.447487,"lng":-0.032622,"elevation":47.5},{"lat":51.447508,"lng":-0.032556,"elevation":47.4},{"lat":51.447545,"lng":-0.032507,"elevation":47.3},{"lat":51.447583,"lng":-0.032468,"elevation":47.2},{"lat":51.447624,"lng":-0.032415,"elevation":47.2},{"lat":51.447666,"lng":-0.032364,"elevation":47.1},{"lat":51.447714,"lng":-0.032324,"elevation":47.1},{"lat":51.447759,"lng":-0.032296,"elevation":47.1},{"lat":51.447807,"lng":-0.032259,"elevation":47.1},{"lat":51.447856,"lng":-0.032221,"elevation":47.1},{"lat":51.4479,"lng":-0.032175,"elevation":47.1},{"lat":51.44794,"lng":-0.032129,"elevation":47.1},{"lat":51.447983,"lng":-0.032087,"elevation":47},{"lat":51.448021,"lng":-0.032029,"elevation":46.9},{"lat":51.448043,"lng":-0.031999,"elevation":46.8},{"lat":51.448071,"lng":-0.031977,"elevation":46.7},{"lat":51.448097,"lng":-0.03195,"elevation":46.7},{"lat":51.448122,"lng":-0.031919,"elevation":46.6},{"lat":51.448148,"lng":-0.03189,"elevation":46.5},{"lat":51.448172,"lng":-0.031863,"elevation":46.5},{"lat":51.448193,"lng":-0.031836,"elevation":46.4},{"lat":51.448224,"lng":-0.031772,"elevation":46.3},{"lat":51.448253,"lng":-0.031714,"elevation":46.1},{"lat":51.448264,"lng":-0.031634,"elevation":45.9},{"lat":51.448267,"lng":-0.031551,"elevation":45.7},{"lat":51.448286,"lng":-0.031487,"elevation":45.6},{"lat":51.448291,"lng":-0.031444,"elevation":45.5},{"lat":51.448294,"lng":-0.031395,"elevation":45.3},{"lat":51.448299,"lng":-0.03134,"elevation":45.2},{"lat":51.448309,"lng":-0.031283,"elevation":45.1},{"lat":51.448318,"lng":-0.031224,"elevation":44.9},{"lat":51.448329,"lng":-0.03117,"elevation":44.6},{"lat":51.448342,"lng":-0.031115,"elevation":44.3},{"lat":51.44835,"lng":-0.03106,"elevation":44},{"lat":51.448353,"lng":-0.031004,"elevation":43.7},{"lat":51.448354,"lng":-0.030939,"elevation":43.3},{"lat":51.448357,"lng":-0.030868,"elevation":43},{"lat":51.448365,"lng":-0.030732,"elevation":42.2},{"lat":51.448387,"lng":-0.030621,"elevation":41.7},{"lat":51.448401,"lng":-0.030571,"elevation":41.4},{"lat":51.44841,"lng":-0.030467,"elevation":40.9},{"lat":51.448405,"lng":-0.030409,"elevation":40.5},{"lat":51.448397,"lng":-0.030348,"elevation":40.2},{"lat":51.448388,"lng":-0.030284,"elevation":39.8},{"lat":51.448374,"lng":-0.030158,"elevation":39},{"lat":51.448365,"lng":-0.030065,"elevation":38.4},{"lat":51.448362,"lng":-0.030001,"elevation":38},{"lat":51.448362,"lng":-0.029946,"elevation":37.7},{"lat":51.44836,"lng":-0.029881,"elevation":37.3},{"lat":51.448378,"lng":-0.029809,"elevation":36.9},{"lat":51.448384,"lng":-0.029767,"elevation":36.7},{"lat":51.448392,"lng":-0.029685,"elevation":36.2},{"lat":51.448431,"lng":-0.029656,"elevation":36.1},{"lat":51.448461,"lng":-0.029658,"elevation":36.1},{"lat":51.448497,"lng":-0.029675,"elevation":36.2},{"lat":51.448534,"lng":-0.029704,"elevation":36.5},{"lat":51.448567,"lng":-0.029738,"elevation":36.7},{"lat":51.448597,"lng":-0.029777,"elevation":37},{"lat":51.448628,"lng":-0.029812,"elevation":37.2},{"lat":51.448657,"lng":-0.029845,"elevation":37.5},{"lat":51.448687,"lng":-0.029866,"elevation":37.6},{"lat":51.448717,"lng":-0.029885,"elevation":37.8},{"lat":51.448747,"lng":-0.0299,"elevation":37.9},{"lat":51.448772,"lng":-0.029914,"elevation":37.9},{"lat":51.448826,"lng":-0.029927,"elevation":37.9},{"lat":51.448879,"lng":-0.029941,"elevation":37.9},{"lat":51.448928,"lng":-0.02996,"elevation":37.9},{"lat":51.448974,"lng":-0.029961,"elevation":37.9},{"lat":51.449,"lng":-0.029934,"elevation":37.7},{"lat":51.44903,"lng":-0.029909,"elevation":37.5},{"lat":51.449082,"lng":-0.029905,"elevation":37.4},{"lat":51.449114,"lng":-0.029912,"elevation":37.4},{"lat":51.449144,"lng":-0.029917,"elevation":37.3},{"lat":51.44921,"lng":-0.029938,"elevation":37.3},{"lat":51.449237,"lng":-0.029929,"elevation":37.2},{"lat":51.449289,"lng":-0.029947,"elevation":37.3},{"lat":51.449333,"lng":-0.029993,"elevation":37.4},{"lat":51.449371,"lng":-0.030051,"elevation":37.6},{"lat":51.449384,"lng":-0.03009,"elevation":37.8},{"lat":51.449397,"lng":-0.030171,"elevation":38.2},{"lat":51.449404,"lng":-0.030242,"elevation":38.5},{"lat":51.449409,"lng":-0.030316,"elevation":38.9},{"lat":51.449431,"lng":-0.030376,"elevation":39.2},{"lat":51.449462,"lng":-0.030434,"elevation":39.4},{"lat":51.449481,"lng":-0.030467,"elevation":39.4},{"lat":51.449501,"lng":-0.030503,"elevation":39.5},{"lat":51.44952,"lng":-0.030538,"elevation":39.6},{"lat":51.44954,"lng":-0.030575,"elevation":39.7},{"lat":51.449556,"lng":-0.030615,"elevation":39.8},{"lat":51.44957,"lng":-0.030652,"elevation":39.9},{"lat":51.449591,"lng":-0.030727,"elevation":40.1},{"lat":51.449616,"lng":-0.030793,"elevation":40.1},{"lat":51.449648,"lng":-0.030856,"elevation":40},{"lat":51.449681,"lng":-0.030916,"elevation":39.9},{"lat":51.449715,"lng":-0.030979,"elevation":39.8},{"lat":51.449744,"lng":-0.031052,"elevation":39.7},{"lat":51.449757,"lng":-0.031089,"elevation":39.7},{"lat":51.449772,"lng":-0.031127,"elevation":39.6},{"lat":51.449785,"lng":-0.031166,"elevation":39.6},{"lat":51.449796,"lng":-0.031208,"elevation":39.6},{"lat":51.449809,"lng":-0.031262,"elevation":39.5},{"lat":51.449818,"lng":-0.031315,"elevation":39.4},{"lat":51.449826,"lng":-0.031365,"elevation":39.2},{"lat":51.449835,"lng":-0.03141,"elevation":39.1},{"lat":51.449846,"lng":-0.031449,"elevation":38.9},{"lat":51.449878,"lng":-0.031518,"elevation":38.5},{"lat":51.449896,"lng":-0.031552,"elevation":38.3},{"lat":51.449927,"lng":-0.031624,"elevation":37.8},{"lat":51.44994,"lng":-0.031664,"elevation":37.7},{"lat":51.449952,"lng":-0.031707,"elevation":37.5},{"lat":51.449964,"lng":-0.031779,"elevation":37.3},{"lat":51.449967,"lng":-0.03185,"elevation":37.1},{"lat":51.449969,"lng":-0.031927,"elevation":37},{"lat":51.449976,"lng":-0.032008,"elevation":36.8},{"lat":51.449984,"lng":-0.032063,"elevation":36.7},{"lat":51.449993,"lng":-0.032111,"elevation":36.6},{"lat":51.450009,"lng":-0.032154,"elevation":36.4},{"lat":51.450028,"lng":-0.032189,"elevation":36.2},{"lat":51.450058,"lng":-0.032239,"elevation":35.9},{"lat":51.450071,"lng":-0.032277,"elevation":35.7},{"lat":51.450085,"lng":-0.03232,"elevation":35.6},{"lat":51.450094,"lng":-0.032362,"elevation":35.5},{"lat":51.450096,"lng":-0.032407,"elevation":35.5},{"lat":51.450093,"lng":-0.03245,"elevation":35.5},{"lat":51.450065,"lng":-0.032496,"elevation":35.8},{"lat":51.450036,"lng":-0.032507,"elevation":36.1},{"lat":51.45,"lng":-0.032508,"elevation":36.5},{"lat":51.449964,"lng":-0.032508,"elevation":36.9},{"lat":51.449924,"lng":-0.032513,"elevation":37.3},{"lat":51.449888,"lng":-0.032522,"elevation":37.7},{"lat":51.449855,"lng":-0.032534,"elevation":38.1},{"lat":51.449831,"lng":-0.032557,"elevation":38.3},{"lat":51.449807,"lng":-0.032577,"elevation":38.6},{"lat":51.449754,"lng":-0.032619,"elevation":39.2},{"lat":51.449727,"lng":-0.032645,"elevation":39.4},{"lat":51.449703,"lng":-0.032673,"elevation":39.7},{"lat":51.449673,"lng":-0.032696,"elevation":40},{"lat":51.449614,"lng":-0.032734,"elevation":40.7},{"lat":51.449568,"lng":-0.032778,"elevation":41.1},{"lat":51.44952,"lng":-0.03282,"elevation":41.5},{"lat":51.44947,"lng":-0.032853,"elevation":41.9},{"lat":51.449423,"lng":-0.032889,"elevation":42.3},{"lat":51.449383,"lng":-0.032937,"elevation":42.6},{"lat":51.449368,"lng":-0.032976,"elevation":42.6},{"lat":51.449328,"lng":-0.033027,"elevation":42.7},{"lat":51.449292,"lng":-0.033049,"elevation":43},{"lat":51.449264,"lng":-0.033021,"elevation":43.3},{"lat":51.449223,"lng":-0.033035,"elevation":43.6},{"lat":51.449191,"lng":-0.033058,"elevation":43.8},{"lat":51.449158,"lng":-0.033085,"elevation":44},{"lat":51.449123,"lng":-0.03311,"elevation":44.2},{"lat":51.449086,"lng":-0.033125,"elevation":44.4},{"lat":51.449043,"lng":-0.033154,"elevation":44.7},{"lat":51.448999,"lng":-0.033174,"elevation":45},{"lat":51.448957,"lng":-0.033195,"elevation":45.3},{"lat":51.448914,"lng":-0.033213,"elevation":45.6},{"lat":51.448888,"lng":-0.03323,"elevation":45.7},{"lat":51.448854,"lng":-0.033243,"elevation":46},{"lat":51.448808,"lng":-0.033247,"elevation":46.3},{"lat":51.448776,"lng":-0.033268,"elevation":46.5},{"lat":51.448732,"lng":-0.033288,"elevation":46.7},{"lat":51.448702,"lng":-0.033298,"elevation":46.7},{"lat":51.448661,"lng":-0.033325,"elevation":46.7},{"lat":51.448624,"lng":-0.033335,"elevation":46.8},{"lat":51.448612,"lng":-0.033398,"elevation":46.6},{"lat":51.448628,"lng":-0.033457,"elevation":46.4},{"lat":51.448646,"lng":-0.033514,"elevation":46.2},{"lat":51.448657,"lng":-0.033561,"elevation":46},{"lat":51.448669,"lng":-0.033619,"elevation":45.8},{"lat":51.448681,"lng":-0.033701,"elevation":45.5},{"lat":51.448697,"lng":-0.033782,"elevation":45.1},{"lat":51.448704,"lng":-0.033824,"elevation":45},{"lat":51.448701,"lng":-0.033912,"elevation":44.7},{"lat":51.448694,"lng":-0.033962,"elevation":44.6},{"lat":51.448688,"lng":-0.034014,"elevation":44.4},{"lat":51.448672,"lng":-0.034148,"elevation":44.1},{"lat":51.448664,"lng":-0.034215,"elevation":43.9},{"lat":51.44866,"lng":-0.034266,"elevation":43.8},{"lat":51.448654,"lng":-0.034319,"elevation":43.6},{"lat":51.44867,"lng":-0.034361,"elevation":43.4},{"lat":51.448681,"lng":-0.034404,"elevation":43.2},{"lat":51.448697,"lng":-0.034485,"elevation":42.8},{"lat":51.448708,"lng":-0.034528,"elevation":42.5},{"lat":51.448726,"lng":-0.0346,"elevation":42.2},{"lat":51.448745,"lng":-0.034685,"elevation":42.2},{"lat":51.448756,"lng":-0.034728,"elevation":42.1},{"lat":51.448769,"lng":-0.034766,"elevation":42.1},{"lat":51.448777,"lng":-0.034809,"elevation":42.1},{"lat":51.448784,"lng":-0.03485,"elevation":42.1},{"lat":51.44879,"lng":-0.034898,"elevation":42.1},{"lat":51.448802,"lng":-0.03494,"elevation":42},{"lat":51.448815,"lng":-0.034979,"elevation":42},{"lat":51.448832,"lng":-0.035019,"elevation":41.9},{"lat":51.448842,"lng":-0.035112,"elevation":41.9},{"lat":51.44884,"lng":-0.03516,"elevation":42},{"lat":51.44884,"lng":-0.035206,"elevation":42},{"lat":51.448839,"lng":-0.035295,"elevation":42.1},{"lat":51.448838,"lng":-0.035342,"elevation":42.2},{"lat":51.448847,"lng":-0.035424,"elevation":42.2},{"lat":51.448853,"lng":-0.035467,"elevation":42.2},{"lat":51.44886,"lng":-0.035528,"elevation":42.2},{"lat":51.448848,"lng":-0.035595,"elevation":42.4},{"lat":51.448826,"lng":-0.035645,"elevation":42.6},{"lat":51.448794,"lng":-0.035658,"elevation":42.9},{"lat":51.448764,"lng":-0.035673,"elevation":43.2},{"lat":51.448716,"lng":-0.035718,"elevation":43.6},{"lat":51.448673,"lng":-0.03576,"elevation":44.1},{"lat":51.448637,"lng":-0.035794,"elevation":44.4},{"lat":51.448602,"lng":-0.035831,"elevation":44.7},{"lat":51.448573,"lng":-0.035885,"elevation":45},{"lat":51.448541,"lng":-0.035921,"elevation":45.4},{"lat":51.448506,"lng":-0.035967,"elevation":45.7},{"lat":51.448464,"lng":-0.036014,"elevation":46.1},{"lat":51.448436,"lng":-0.036077,"elevation":46.4},{"lat":51.448414,"lng":-0.03615,"elevation":46.7},{"lat":51.448406,"lng":-0.036192,"elevation":46.8},{"lat":51.448385,"lng":-0.036274,"elevation":47.1},{"lat":51.448374,"lng":-0.036346,"elevation":47.1},{"lat":51.448367,"lng":-0.036395,"elevation":47.2},{"lat":51.448364,"lng":-0.03644,"elevation":47.2},{"lat":51.448358,"lng":-0.036547,"elevation":47.3},{"lat":51.448359,"lng":-0.0366,"elevation":47.3},{"lat":51.448357,"lng":-0.036647,"elevation":47.3},{"lat":51.448374,"lng":-0.036695,"elevation":47.1},{"lat":51.448385,"lng":-0.036739,"elevation":47},{"lat":51.448397,"lng":-0.036781,"elevation":46.9},{"lat":51.448404,"lng":-0.036824,"elevation":46.8},{"lat":51.448405,"lng":-0.036868,"elevation":46.8},{"lat":51.448395,"lng":-0.036949,"elevation":46.9},{"lat":51.448363,"lng":-0.036998,"elevation":47.2},{"lat":51.448349,"lng":-0.037035,"elevation":47.3},{"lat":51.448335,"lng":-0.037101,"elevation":47.5},{"lat":51.448314,"lng":-0.037159,"elevation":47.7},{"lat":51.448295,"lng":-0.037209,"elevation":47.9},{"lat":51.448283,"lng":-0.037276,"elevation":48.1},{"lat":51.448278,"lng":-0.037352,"elevation":48.1},{"lat":51.448267,"lng":-0.037428,"elevation":48.3},{"lat":51.448248,"lng":-0.037494,"elevation":48.5},{"lat":51.448227,"lng":-0.03757,"elevation":48.8},{"lat":51.448219,"lng":-0.037615,"elevation":48.9},{"lat":51.448214,"lng":-0.037695,"elevation":49},{"lat":51.44821,"lng":-0.037761,"elevation":49.1},{"lat":51.448186,"lng":-0.037832,"elevation":49.4},{"lat":51.448162,"lng":-0.037887,"elevation":49.7},{"lat":51.448164,"lng":-0.037952,"elevation":49.6},{"lat":51.448157,"lng":-0.038019,"elevation":49.4},{"lat":51.448145,"lng":-0.038091,"elevation":49.3},{"lat":51.448133,"lng":-0.038163,"elevation":49.1},{"lat":51.448112,"lng":-0.038231,"elevation":49.1},{"lat":51.448092,"lng":-0.038296,"elevation":49.1},{"lat":51.448079,"lng":-0.03836,"elevation":48.9},{"lat":51.448059,"lng":-0.038418,"elevation":48.9},{"lat":51.448045,"lng":-0.038485,"elevation":48.8},{"lat":51.448034,"lng":-0.038558,"elevation":48.6},{"lat":51.448027,"lng":-0.038635,"elevation":48.3},{"lat":51.448014,"lng":-0.038713,"elevation":48.1},{"lat":51.448013,"lng":-0.038789,"elevation":47.8},{"lat":51.448,"lng":-0.038863,"elevation":47.6},{"lat":51.447984,"lng":-0.038934,"elevation":47.4},{"lat":51.44797,"lng":-0.039007,"elevation":47.2},{"lat":51.447959,"lng":-0.039048,"elevation":47.2},{"lat":51.447945,"lng":-0.039139,"elevation":46.9},{"lat":51.447936,"lng":-0.039233,"elevation":46.5},{"lat":51.447925,"lng":-0.039277,"elevation":46.4},{"lat":51.447893,"lng":-0.039362,"elevation":46.3},{"lat":51.44788,"lng":-0.0394,"elevation":46.3},{"lat":51.447856,"lng":-0.039476,"elevation":46.2},{"lat":51.447839,"lng":-0.039551,"elevation":46.1},{"lat":51.447818,"lng":-0.039621,"elevation":46},{"lat":51.447815,"lng":-0.039667,"elevation":45.9},{"lat":51.447789,"lng":-0.039737,"elevation":45.9},{"lat":51.447775,"lng":-0.039774,"elevation":45.9},{"lat":51.447746,"lng":-0.039844,"elevation":45.9},{"lat":51.447724,"lng":-0.039917,"elevation":45.7},{"lat":51.447703,"lng":-0.039989,"elevation":45.6},{"lat":51.447691,"lng":-0.040063,"elevation":45.4},{"lat":51.447684,"lng":-0.04014,"elevation":45},{"lat":51.447676,"lng":-0.040216,"elevation":44.7},{"lat":51.447666,"lng":-0.040295,"elevation":44.4},{"lat":51.447663,"lng":-0.040373,"elevation":44},{"lat":51.447653,"lng":-0.040451,"elevation":43.8},{"lat":51.44763,"lng":-0.040525,"elevation":43.6},{"lat":51.447616,"lng":-0.040608,"elevation":43.4},{"lat":51.447611,"lng":-0.040651,"elevation":43.2},{"lat":51.447599,"lng":-0.040728,"elevation":43},{"lat":51.447571,"lng":-0.040782,"elevation":42.9},{"lat":51.447533,"lng":-0.04083,"elevation":42.9},{"lat":51.447511,"lng":-0.040858,"elevation":42.8},{"lat":51.447482,"lng":-0.040914,"elevation":42.7},{"lat":51.44747,"lng":-0.040983,"elevation":42.4},{"lat":51.447466,"lng":-0.04106,"elevation":42},{"lat":51.447457,"lng":-0.04113,"elevation":41.7},{"lat":51.447441,"lng":-0.041192,"elevation":41.4},{"lat":51.447435,"lng":-0.041262,"elevation":41.1},{"lat":51.447425,"lng":-0.041337,"elevation":41.1},{"lat":51.447401,"lng":-0.041407,"elevation":41.1},{"lat":51.447382,"lng":-0.041437,"elevation":41.1},{"lat":51.447359,"lng":-0.041469,"elevation":41.2},{"lat":51.447337,"lng":-0.0415,"elevation":41.2},{"lat":51.447315,"lng":-0.041529,"elevation":41.2},{"lat":51.447295,"lng":-0.041567,"elevation":41.2},{"lat":51.447273,"lng":-0.041605,"elevation":41.2},{"lat":51.44725,"lng":-0.041643,"elevation":41.2},{"lat":51.447223,"lng":-0.041675,"elevation":41.2},{"lat":51.447198,"lng":-0.041708,"elevation":41.3},{"lat":51.447146,"lng":-0.041758,"elevation":41.3},{"lat":51.447102,"lng":-0.041813,"elevation":41.3},{"lat":51.447082,"lng":-0.041843,"elevation":41.3},{"lat":51.447035,"lng":-0.041891,"elevation":41.2},{"lat":51.446992,"lng":-0.041942,"elevation":41.1},{"lat":51.446959,"lng":-0.041992,"elevation":41},{"lat":51.446922,"lng":-0.042035,"elevation":40.9},{"lat":51.446876,"lng":-0.042064,"elevation":40.8},{"lat":51.446824,"lng":-0.042103,"elevation":40.7},{"lat":51.446791,"lng":-0.042157,"elevation":40.5},{"lat":51.446747,"lng":-0.042202,"elevation":40.4},{"lat":51.446707,"lng":-0.042224,"elevation":40.3},{"lat":51.446677,"lng":-0.042247,"elevation":40.2},{"lat":51.446635,"lng":-0.042288,"elevation":40.1},{"lat":51.446625,"lng":-0.042344,"elevation":40},{"lat":51.446603,"lng":-0.042395,"elevation":39.8},{"lat":51.446561,"lng":-0.042377,"elevation":39.8},{"lat":51.446528,"lng":-0.042381,"elevation":39.7},{"lat":51.446462,"lng":-0.042389,"elevation":39.6},{"lat":51.446431,"lng":-0.042395,"elevation":39.6},{"lat":51.446403,"lng":-0.042399,"elevation":39.5},{"lat":51.446359,"lng":-0.042403,"elevation":39.4},{"lat":51.446318,"lng":-0.042387,"elevation":39.4},{"lat":51.446272,"lng":-0.04236,"elevation":39.4},{"lat":51.446242,"lng":-0.042358,"elevation":39.3},{"lat":51.446194,"lng":-0.042365,"elevation":39.1},{"lat":51.44617,"lng":-0.042387,"elevation":39},{"lat":51.44611,"lng":-0.042405,"elevation":38.8},{"lat":51.446077,"lng":-0.042418,"elevation":38.7},{"lat":51.446011,"lng":-0.042434,"elevation":38.4},{"lat":51.445979,"lng":-0.042418,"elevation":38.4},{"lat":51.445926,"lng":-0.042376,"elevation":38.3},{"lat":51.4459,"lng":-0.042357,"elevation":38.2},{"lat":51.445869,"lng":-0.042354,"elevation":38.1},{"lat":51.445797,"lng":-0.042363,"elevation":37.9},{"lat":51.445759,"lng":-0.042367,"elevation":37.8},{"lat":51.445729,"lng":-0.042364,"elevation":37.7},{"lat":51.445691,"lng":-0.042382,"elevation":37.5},{"lat":51.445659,"lng":-0.042387,"elevation":37.4},{"lat":51.44563,"lng":-0.04239,"elevation":37.3},{"lat":51.445602,"lng":-0.042389,"elevation":37.2},{"lat":51.445562,"lng":-0.042398,"elevation":37.1},{"lat":51.44551,"lng":-0.042398,"elevation":36.9},{"lat":51.445482,"lng":-0.042396,"elevation":36.8},{"lat":51.445419,"lng":-0.042392,"elevation":36.6},{"lat":51.445387,"lng":-0.042391,"elevation":36.6},{"lat":51.445327,"lng":-0.042405,"elevation":36.5},{"lat":51.445296,"lng":-0.04242,"elevation":36.5},{"lat":51.445267,"lng":-0.04243,"elevation":36.5},{"lat":51.445217,"lng":-0.042452,"elevation":36.4},{"lat":51.445186,"lng":-0.042473,"elevation":36.4},{"lat":51.445158,"lng":-0.042496,"elevation":36.3},{"lat":51.44514,"lng":-0.042538,"elevation":36.3},{"lat":51.445141,"lng":-0.042593,"elevation":36.3},{"lat":51.445162,"lng":-0.042647,"elevation":36.2},{"lat":51.445179,"lng":-0.042685,"elevation":36.2},{"lat":51.445211,"lng":-0.042698,"elevation":36.2},{"lat":51.445241,"lng":-0.042715,"elevation":36.2},{"lat":51.44527,"lng":-0.042748,"elevation":36.2},{"lat":51.445281,"lng":-0.042794,"elevation":36.1},{"lat":51.44529,"lng":-0.042844,"elevation":36.1},{"lat":51.445297,"lng":-0.04289,"elevation":36},{"lat":51.445307,"lng":-0.042936,"elevation":36},{"lat":51.445316,"lng":-0.042981,"elevation":36.1},{"lat":51.445324,"lng":-0.043036,"elevation":36.3},{"lat":51.445324,"lng":-0.043081,"elevation":36.4},{"lat":51.445318,"lng":-0.043137,"elevation":36.5},{"lat":51.445318,"lng":-0.043193,"elevation":36.6},{"lat":51.445316,"lng":-0.043254,"elevation":36.8},{"lat":51.445323,"lng":-0.043317,"elevation":36.9},{"lat":51.445328,"lng":-0.04336,"elevation":37},{"lat":51.445334,"lng":-0.043404,"elevation":37.1},{"lat":51.445334,"lng":-0.043453,"elevation":37.2},{"lat":51.445336,"lng":-0.043517,"elevation":37.4},{"lat":51.445335,"lng":-0.043574,"elevation":37.5},{"lat":51.445335,"lng":-0.043631,"elevation":37.6},{"lat":51.445336,"lng":-0.043675,"elevation":37.7},{"lat":51.445337,"lng":-0.043724,"elevation":37.8},{"lat":51.445332,"lng":-0.043772,"elevation":37.9},{"lat":51.445329,"lng":-0.043818,"elevation":38},{"lat":51.445333,"lng":-0.043865,"elevation":38.2},{"lat":51.44533,"lng":-0.043909,"elevation":38.3},{"lat":51.445327,"lng":-0.043966,"elevation":38.4},{"lat":51.445329,"lng":-0.044028,"elevation":38.5},{"lat":51.445332,"lng":-0.04408,"elevation":38.7},{"lat":51.445334,"lng":-0.044131,"elevation":38.8},{"lat":51.445339,"lng":-0.044184,"elevation":38.9},{"lat":51.445341,"lng":-0.04424,"elevation":39},{"lat":51.445353,"lng":-0.044282,"elevation":39.2},{"lat":51.445333,"lng":-0.044338,"elevation":39.2},{"lat":51.44531,"lng":-0.044378,"elevation":39.3},{"lat":51.445317,"lng":-0.044436,"elevation":39.4},{"lat":51.445327,"lng":-0.044499,"elevation":39.6},{"lat":51.445331,"lng":-0.044554,"elevation":39.7},{"lat":51.445307,"lng":-0.044604,"elevation":39.8},{"lat":51.445285,"lng":-0.044638,"elevation":39.8},{"lat":51.445248,"lng":-0.044661,"elevation":39.8},{"lat":51.445212,"lng":-0.044679,"elevation":39.7},{"lat":51.445183,"lng":-0.044679,"elevation":39.6},{"lat":51.445154,"lng":-0.044668,"elevation":39.5}],[{"lat":51.445431,"lng":-0.04437,"elevation":39.5},{"lat":51.445299,"lng":-0.044384,"elevation":39.3},{"lat":51.445373,"lng":-0.044414,"elevation":39.5},{"lat":51.445406,"lng":-0.044436,"elevation":39.6},{"lat":51.445291,"lng":-0.044448,"elevation":39.4},{"lat":51.44531,"lng":-0.044318,"elevation":39.1},{"lat":51.445321,"lng":-0.044267,"elevation":39.1},{"lat":51.445309,"lng":-0.044223,"elevation":38.9},{"lat":51.445332,"lng":-0.044183,"elevation":38.9},{"lat":51.44534,"lng":-0.044124,"elevation":38.8},{"lat":51.445348,"lng":-0.044064,"elevation":38.6},{"lat":51.445351,"lng":-0.044004,"elevation":38.5},{"lat":51.44535,"lng":-0.043961,"elevation":38.4},{"lat":51.445348,"lng":-0.043915,"elevation":38.3},{"lat":51.445344,"lng":-0.043865,"elevation":38.2},{"lat":51.445341,"lng":-0.043804,"elevation":38},{"lat":51.445342,"lng":-0.04374,"elevation":37.9},{"lat":51.44534,"lng":-0.043681,"elevation":37.8},{"lat":51.445341,"lng":-0.043624,"elevation":37.6},{"lat":51.445349,"lng":-0.043571,"elevation":37.5},{"lat":51.445353,"lng":-0.043521,"elevation":37.4},{"lat":51.445353,"lng":-0.043469,"elevation":37.3},{"lat":51.445365,"lng":-0.043412,"elevation":37.2},{"lat":51.445367,"lng":-0.043353,"elevation":37},{"lat":51.445365,"lng":-0.043301,"elevation":36.9},{"lat":51.445363,"lng":-0.04325,"elevation":36.8},{"lat":51.44536,"lng":-0.043203,"elevation":36.7},{"lat":51.445358,"lng":-0.043155,"elevation":36.6},{"lat":51.445354,"lng":-0.04311,"elevation":36.4},{"lat":51.445349,"lng":-0.04306,"elevation":36.3},{"lat":51.445346,"lng":-0.04301,"elevation":36.2},{"lat":51.445328,"lng":-0.042955,"elevation":36.1},{"lat":51.445293,"lng":-0.042897,"elevation":36},{"lat":51.44528,"lng":-0.04285,"elevation":36.1},{"lat":51.445281,"lng":-0.042795,"elevation":36.1},{"lat":51.445271,"lng":-0.04275,"elevation":36.2},{"lat":51.445243,"lng":-0.042739,"elevation":36.2},{"lat":51.445215,"lng":-0.042701,"elevation":36.2},{"lat":51.445216,"lng":-0.042648,"elevation":36.2},{"lat":51.445232,"lng":-0.042588,"elevation":36.3},{"lat":51.445263,"lng":-0.042551,"elevation":36.4},{"lat":51.445302,"lng":-0.042562,"elevation":36.4},{"lat":51.445335,"lng":-0.042578,"elevation":36.4},{"lat":51.445369,"lng":-0.042572,"elevation":36.4},{"lat":51.4454,"lng":-0.042554,"elevation":36.4},{"lat":51.445425,"lng":-0.042528,"elevation":36.5},{"lat":51.445453,"lng":-0.042489,"elevation":36.6},{"lat":51.445446,"lng":-0.042444,"elevation":36.7},{"lat":51.445443,"lng":-0.042389,"elevation":36.7},{"lat":51.445443,"lng":-0.042333,"elevation":36.8},{"lat":51.445442,"lng":-0.04228,"elevation":36.8},{"lat":51.445442,"lng":-0.042228,"elevation":36.9},{"lat":51.445445,"lng":-0.042177,"elevation":37},{"lat":51.445449,"lng":-0.042123,"elevation":37.1},{"lat":51.445445,"lng":-0.042068,"elevation":37.1},{"lat":51.445457,"lng":-0.042013,"elevation":37.2},{"lat":51.445466,"lng":-0.04196,"elevation":37.3},{"lat":51.445471,"lng":-0.04191,"elevation":37.4},{"lat":51.445468,"lng":-0.041859,"elevation":37.5},{"lat":51.445472,"lng":-0.041815,"elevation":37.5},{"lat":51.445474,"lng":-0.04177,"elevation":37.6},{"lat":51.445479,"lng":-0.041725,"elevation":37.7},{"lat":51.445484,"lng":-0.041677,"elevation":37.8},{"lat":51.445495,"lng":-0.041633,"elevation":37.9},{"lat":51.445498,"lng":-0.041574,"elevation":38},{"lat":51.445496,"lng":-0.041513,"elevation":38},{"lat":51.445494,"lng":-0.041458,"elevation":38.1},{"lat":51.445493,"lng":-0.041392,"elevation":38.2},{"lat":51.445489,"lng":-0.041328,"elevation":38.2},{"lat":51.445484,"lng":-0.041272,"elevation":38.3},{"lat":51.445473,"lng":-0.041221,"elevation":38.4},{"lat":51.445476,"lng":-0.041169,"elevation":38.8},{"lat":51.445492,"lng":-0.041115,"elevation":39.2},{"lat":51.445526,"lng":-0.041086,"elevation":39.5},{"lat":51.445547,"lng":-0.04104,"elevation":39.9},{"lat":51.445553,"lng":-0.040995,"elevation":40.2},{"lat":51.445558,"lng":-0.040952,"elevation":40.5},{"lat":51.445558,"lng":-0.040889,"elevation":40.9},{"lat":51.445562,"lng":-0.040824,"elevation":41.3},{"lat":51.445545,"lng":-0.040776,"elevation":41.5},{"lat":51.445516,"lng":-0.040741,"elevation":41.6},{"lat":51.445495,"lng":-0.040693,"elevation":41.8},{"lat":51.445486,"lng":-0.040646,"elevation":42},{"lat":51.445501,"lng":-0.040591,"elevation":42.4},{"lat":51.445496,"lng":-0.040547,"elevation":42.7},{"lat":51.445491,"lng":-0.040488,"elevation":43},{"lat":51.445502,"lng":-0.040445,"elevation":43.3},{"lat":51.445527,"lng":-0.040406,"elevation":43.7},{"lat":51.445548,"lng":-0.040373,"elevation":44.1},{"lat":51.445557,"lng":-0.040325,"elevation":44.5},{"lat":51.445557,"lng":-0.040282,"elevation":44.8},{"lat":51.445551,"lng":-0.040237,"elevation":45.1},{"lat":51.445556,"lng":-0.040195,"elevation":45.5},{"lat":51.445564,"lng":-0.040148,"elevation":45.9},{"lat":51.445568,"lng":-0.040095,"elevation":46.3},{"lat":51.445569,"lng":-0.04004,"elevation":46.7},{"lat":51.445579,"lng":-0.039996,"elevation":47.1},{"lat":51.445594,"lng":-0.039959,"elevation":47.5},{"lat":51.445591,"lng":-0.039913,"elevation":47.8},{"lat":51.44559,"lng":-0.039856,"elevation":48.2},{"lat":51.445621,"lng":-0.039814,"elevation":48.7},{"lat":51.445628,"lng":-0.039766,"elevation":49.2},{"lat":51.445632,"lng":-0.039718,"elevation":49.5},{"lat":51.445641,"lng":-0.039655,"elevation":50.1},{"lat":51.445641,"lng":-0.039611,"elevation":50.4},{"lat":51.445637,"lng":-0.039561,"elevation":50.6},{"lat":51.445639,"lng":-0.039496,"elevation":50.7},{"lat":51.445639,"lng":-0.039448,"elevation":50.7},{"lat":51.445606,"lng":-0.039399,"elevation":50.5},{"lat":51.445572,"lng":-0.03935,"elevation":50.2},{"lat":51.445552,"lng":-0.039309,"elevation":50.1},{"lat":51.445539,"lng":-0.039266,"elevation":50},{"lat":51.445547,"lng":-0.039215,"elevation":50.1},{"lat":51.445556,"lng":-0.039164,"elevation":50.2},{"lat":51.44558,"lng":-0.039133,"elevation":50.4},{"lat":51.445605,"lng":-0.039086,"elevation":50.6},{"lat":51.445635,"lng":-0.039054,"elevation":50.9},{"lat":51.445655,"lng":-0.038995,"elevation":51.1},{"lat":51.445668,"lng":-0.038944,"elevation":51.3},{"lat":51.445681,"lng":-0.038891,"elevation":51.4},{"lat":51.445685,"lng":-0.038848,"elevation":51.5},{"lat":51.445678,"lng":-0.038805,"elevation":51.5},{"lat":51.445674,"lng":-0.038743,"elevation":51.5},{"lat":51.445684,"lng":-0.038699,"elevation":51.6},{"lat":51.445716,"lng":-0.038663,"elevation":52},{"lat":51.445746,"lng":-0.038622,"elevation":52.4},{"lat":51.445763,"lng":-0.038575,"elevation":52.6},{"lat":51.445785,"lng":-0.038515,"elevation":52.9},{"lat":51.445793,"lng":-0.03847,"elevation":53.1},{"lat":51.445803,"lng":-0.038406,"elevation":53.3},{"lat":51.445803,"lng":-0.038358,"elevation":53.4},{"lat":51.4458,"lng":-0.038296,"elevation":53.5},{"lat":51.445804,"lng":-0.03824,"elevation":53.6},{"lat":51.445811,"lng":-0.038187,"elevation":53.8},{"lat":51.445842,"lng":-0.038089,"elevation":54.3},{"lat":51.445858,"lng":-0.038042,"elevation":54.5},{"lat":51.44587,"lng":-0.038,"elevation":54.7},{"lat":51.445893,"lng":-0.037921,"elevation":55.1},{"lat":51.445905,"lng":-0.037882,"elevation":55.2},{"lat":51.445906,"lng":-0.037801,"elevation":55.1},{"lat":51.4459,"lng":-0.037753,"elevation":54.9},{"lat":51.445914,"lng":-0.037664,"elevation":54.9},{"lat":51.445933,"lng":-0.037585,"elevation":54.9},{"lat":51.445954,"lng":-0.037515,"elevation":55},{"lat":51.446,"lng":-0.03754,"elevation":55.5},{"lat":51.446033,"lng":-0.037552,"elevation":55.9},{"lat":51.446095,"lng":-0.037579,"elevation":56.6},{"lat":51.446125,"lng":-0.037591,"elevation":56.9},{"lat":51.446153,"lng":-0.037597,"elevation":57.2},{"lat":51.446206,"lng":-0.037592,"elevation":57.8},{"lat":51.446235,"lng":-0.037592,"elevation":58.1},{"lat":51.446263,"lng":-0.037595,"elevation":58.3},{"lat":51.446292,"lng":-0.037599,"elevation":58.4},{"lat":51.446323,"lng":-0.037601,"elevation":58.6},{"lat":51.44635,"lng":-0.037604,"elevation":58.7},{"lat":51.446401,"lng":-0.037602,"elevation":58.9},{"lat":51.446428,"lng":-0.037595,"elevation":59},{"lat":51.446456,"lng":-0.037588,"elevation":59.1},{"lat":51.446505,"lng":-0.037602,"elevation":59.4},{"lat":51.446547,"lng":-0.037633,"elevation":59.6},{"lat":51.446592,"lng":-0.037668,"elevation":59.9},{"lat":51.446622,"lng":-0.037669,"elevation":60.1},{"lat":51.446651,"lng":-0.037671,"elevation":60.2},{"lat":51.446717,"lng":-0.037676,"elevation":60.5},{"lat":51.446748,"lng":-0.037676,"elevation":60.6},{"lat":51.446781,"lng":-0.037678,"elevation":60.8},{"lat":51.446826,"lng":-0.037644,"elevation":60.9},{"lat":51.44687,"lng":-0.037624,"elevation":61},{"lat":51.446911,"lng":-0.037608,"elevation":61.1},{"lat":51.446957,"lng":-0.037574,"elevation":61.2},{"lat":51.446997,"lng":-0.037556,"elevation":61.3},{"lat":51.447043,"lng":-0.037594,"elevation":61.7},{"lat":51.44707,"lng":-0.037625,"elevation":61.9},{"lat":51.447112,"lng":-0.037659,"elevation":61.7},{"lat":51.447147,"lng":-0.037685,"elevation":61.4},{"lat":51.447176,"lng":-0.037704,"elevation":61.2},{"lat":51.44721,"lng":-0.037708,"elevation":60.8},{"lat":51.447251,"lng":-0.037712,"elevation":60.4},{"lat":51.447281,"lng":-0.037711,"elevation":60},{"lat":51.447254,"lng":-0.037678,"elevation":60.2},{"lat":51.44721,"lng":-0.037629,"elevation":60.5},{"lat":51.447187,"lng":-0.037595,"elevation":60.7},{"lat":51.447168,"lng":-0.037561,"elevation":60.8},{"lat":51.447141,"lng":-0.037503,"elevation":60.9},{"lat":51.447122,"lng":-0.037427,"elevation":60.8},{"lat":51.447101,"lng":-0.037353,"elevation":60.8},{"lat":51.447081,"lng":-0.037284,"elevation":60.7},{"lat":51.447074,"lng":-0.037233,"elevation":60.5},{"lat":51.447066,"lng":-0.037184,"elevation":60.3},{"lat":51.447057,"lng":-0.037134,"elevation":60.1},{"lat":51.447049,"lng":-0.037092,"elevation":59.9},{"lat":51.447035,"lng":-0.037045,"elevation":59.6},{"lat":51.447023,"lng":-0.037,"elevation":59.4},{"lat":51.447009,"lng":-0.036957,"elevation":59.2},{"lat":51.447014,"lng":-0.036911,"elevation":59},{"lat":51.447019,"lng":-0.036828,"elevation":58.6},{"lat":51.447021,"lng":-0.036783,"elevation":58.4},{"lat":51.447004,"lng":-0.036739,"elevation":58.1},{"lat":51.446989,"lng":-0.036694,"elevation":57.9},{"lat":51.446983,"lng":-0.036647,"elevation":57.7},{"lat":51.446958,"lng":-0.03661,"elevation":57.4},{"lat":51.446946,"lng":-0.036567,"elevation":57.2},{"lat":51.446936,"lng":-0.036524,"elevation":57},{"lat":51.446928,"lng":-0.036477,"elevation":56.8},{"lat":51.446918,"lng":-0.036393,"elevation":56.4},{"lat":51.446921,"lng":-0.036308,"elevation":56.1},{"lat":51.446921,"lng":-0.036263,"elevation":55.9},{"lat":51.446918,"lng":-0.036216,"elevation":55.7},{"lat":51.446906,"lng":-0.036132,"elevation":55.5},{"lat":51.446912,"lng":-0.036075,"elevation":55.4},{"lat":51.446911,"lng":-0.036029,"elevation":55.3},{"lat":51.446917,"lng":-0.035969,"elevation":55.2},{"lat":51.446912,"lng":-0.035922,"elevation":55.1},{"lat":51.446906,"lng":-0.03584,"elevation":54.9},{"lat":51.446903,"lng":-0.035789,"elevation":54.8},{"lat":51.446905,"lng":-0.035743,"elevation":54.7},{"lat":51.446908,"lng":-0.035699,"elevation":54.6},{"lat":51.446908,"lng":-0.035608,"elevation":54.4},{"lat":51.44688,"lng":-0.035533,"elevation":54.2},{"lat":51.44687,"lng":-0.035487,"elevation":54.1},{"lat":51.446845,"lng":-0.035413,"elevation":54},{"lat":51.446836,"lng":-0.035365,"elevation":53.9},{"lat":51.446824,"lng":-0.035314,"elevation":53.8},{"lat":51.44683,"lng":-0.035229,"elevation":53.5},{"lat":51.446849,"lng":-0.035162,"elevation":53.4},{"lat":51.446853,"lng":-0.035113,"elevation":53.3},{"lat":51.446845,"lng":-0.035028,"elevation":53.1},{"lat":51.446832,"lng":-0.034981,"elevation":53},{"lat":51.446804,"lng":-0.034901,"elevation":52.8},{"lat":51.446774,"lng":-0.03484,"elevation":52.6},{"lat":51.446756,"lng":-0.03477,"elevation":52.4},{"lat":51.446745,"lng":-0.034693,"elevation":52.3},{"lat":51.446737,"lng":-0.034646,"elevation":52.2},{"lat":51.446732,"lng":-0.034591,"elevation":52},{"lat":51.446698,"lng":-0.034526,"elevation":51.9},{"lat":51.446682,"lng":-0.034488,"elevation":51.8},{"lat":51.446662,"lng":-0.034439,"elevation":51.7},{"lat":51.44665,"lng":-0.034399,"elevation":51.6},{"lat":51.446632,"lng":-0.034318,"elevation":51.4},{"lat":51.446623,"lng":-0.034277,"elevation":51.3},{"lat":51.446603,"lng":-0.034197,"elevation":51.1},{"lat":51.446584,"lng":-0.034124,"elevation":50.9},{"lat":51.446579,"lng":-0.034053,"elevation":50.7},{"lat":51.44657,"lng":-0.033973,"elevation":50.5},{"lat":51.446557,"lng":-0.033898,"elevation":50.4},{"lat":51.446548,"lng":-0.03382,"elevation":50.2},{"lat":51.446529,"lng":-0.033746,"elevation":50},{"lat":51.446499,"lng":-0.03367,"elevation":49.7},{"lat":51.446472,"lng":-0.033592,"elevation":49.5},{"lat":51.44645,"lng":-0.033532,"elevation":49.3},{"lat":51.446426,"lng":-0.033479,"elevation":49.1},{"lat":51.446414,"lng":-0.03343,"elevation":48.9},{"lat":51.446442,"lng":-0.033369,"elevation":48.7},{"lat":51.446485,"lng":-0.033375,"elevation":48.8},{"lat":51.446513,"lng":-0.033364,"elevation":48.8},{"lat":51.446541,"lng":-0.033344,"elevation":48.7},{"lat":51.446563,"lng":-0.033317,"elevation":48.6},{"lat":51.446608,"lng":-0.03327,"elevation":48.5},{"lat":51.44665,"lng":-0.033221,"elevation":48.4},{"lat":51.446676,"lng":-0.0332,"elevation":48.4},{"lat":51.446702,"lng":-0.033182,"elevation":48.3},{"lat":51.446743,"lng":-0.033132,"elevation":48.2},{"lat":51.446774,"lng":-0.033077,"elevation":48.1},{"lat":51.446801,"lng":-0.033059,"elevation":48.1},{"lat":51.44685,"lng":-0.033034,"elevation":48},{"lat":51.446901,"lng":-0.033014,"elevation":48},{"lat":51.446949,"lng":-0.032991,"elevation":48},{"lat":51.446976,"lng":-0.032975,"elevation":48},{"lat":51.447005,"lng":-0.03295,"elevation":48},{"lat":51.44703,"lng":-0.032927,"elevation":48},{"lat":51.447052,"lng":-0.032899,"elevation":47.9},{"lat":51.447073,"lng":-0.032868,"elevation":47.9},{"lat":51.447097,"lng":-0.032842,"elevation":47.8},{"lat":51.447121,"lng":-0.032818,"elevation":47.8},{"lat":51.447145,"lng":-0.032797,"elevation":47.7},{"lat":51.44717,"lng":-0.032751,"elevation":47.6},{"lat":51.447208,"lng":-0.032721,"elevation":47.6},{"lat":51.447255,"lng":-0.032705,"elevation":47.5},{"lat":51.447299,"lng":-0.032671,"elevation":47.5},{"lat":51.447347,"lng":-0.03264,"elevation":47.4},{"lat":51.44737,"lng":-0.032615,"elevation":47.4},{"lat":51.447425,"lng":-0.032563,"elevation":47.3},{"lat":51.447457,"lng":-0.032542,"elevation":47.3},{"lat":51.447509,"lng":-0.032518,"elevation":47.3},{"lat":51.447564,"lng":-0.032491,"elevation":47.3},{"lat":51.447592,"lng":-0.032462,"elevation":47.2},{"lat":51.447613,"lng":-0.032435,"elevation":47.2},{"lat":51.447642,"lng":-0.032389,"elevation":47.2},{"lat":51.447656,"lng":-0.032336,"elevation":47.1},{"lat":51.447661,"lng":-0.032272,"elevation":47},{"lat":51.447659,"lng":-0.032201,"elevation":46.9},{"lat":51.447645,"lng":-0.032151,"elevation":46.8},{"lat":51.447665,"lng":-0.032097,"elevation":46.7},{"lat":51.447692,"lng":-0.032071,"elevation":46.7},{"lat":51.447728,"lng":-0.032045,"elevation":46.7},{"lat":51.447766,"lng":-0.032032,"elevation":46.7},{"lat":51.447809,"lng":-0.032015,"elevation":46.7},{"lat":51.447844,"lng":-0.031993,"elevation":46.7},{"lat":51.447869,"lng":-0.03197,"elevation":46.7},{"lat":51.447918,"lng":-0.031904,"elevation":46.6},{"lat":51.447943,"lng":-0.031873,"elevation":46.5},{"lat":51.448,"lng":-0.031814,"elevation":46.4},{"lat":51.448024,"lng":-0.031775,"elevation":46.3},{"lat":51.448043,"lng":-0.031731,"elevation":46.2},{"lat":51.44806,"lng":-0.031695,"elevation":46.1},{"lat":51.448078,"lng":-0.031643,"elevation":45.9},{"lat":51.448095,"lng":-0.031606,"elevation":45.9},{"lat":51.448115,"lng":-0.031575,"elevation":45.8},{"lat":51.448136,"lng":-0.031539,"elevation":45.7},{"lat":51.448157,"lng":-0.031503,"elevation":45.6},{"lat":51.448171,"lng":-0.031464,"elevation":45.5},{"lat":51.44818,"lng":-0.031422,"elevation":45.4},{"lat":51.448189,"lng":-0.031377,"elevation":45.3},{"lat":51.448203,"lng":-0.031331,"elevation":45.2},{"lat":51.448216,"lng":-0.031292,"elevation":45.1},{"lat":51.448237,"lng":-0.031258,"elevation":45},{"lat":51.448262,"lng":-0.031184,"elevation":44.6},{"lat":51.448295,"lng":-0.031126,"elevation":44.3},{"lat":51.448327,"lng":-0.031067,"elevation":44},{"lat":51.448343,"lng":-0.030999,"elevation":43.6},{"lat":51.44836,"lng":-0.030925,"elevation":43.3},{"lat":51.448383,"lng":-0.030897,"elevation":43.1},{"lat":51.448401,"lng":-0.030863,"elevation":42.9},{"lat":51.448404,"lng":-0.030819,"elevation":42.7},{"lat":51.448394,"lng":-0.030713,"elevation":42.1},{"lat":51.448392,"lng":-0.030659,"elevation":41.9},{"lat":51.448391,"lng":-0.030603,"elevation":41.6},{"lat":51.448394,"lng":-0.030486,"elevation":40.9},{"lat":51.448398,"lng":-0.030421,"elevation":40.6},{"lat":51.448401,"lng":-0.030371,"elevation":40.3},{"lat":51.448403,"lng":-0.03032,"elevation":40},{"lat":51.448404,"lng":-0.030273,"elevation":39.7},{"lat":51.448404,"lng":-0.030226,"elevation":39.4},{"lat":51.448404,"lng":-0.03018,"elevation":39.2},{"lat":51.448383,"lng":-0.030128,"elevation":38.8},{"lat":51.448382,"lng":-0.030083,"elevation":38.6},{"lat":51.44838,"lng":-0.030034,"elevation":38.3},{"lat":51.448406,"lng":-0.030009,"elevation":38.1},{"lat":51.448423,"lng":-0.02997,"elevation":37.9},{"lat":51.448421,"lng":-0.029916,"elevation":37.6},{"lat":51.448427,"lng":-0.029834,"elevation":37.1},{"lat":51.448426,"lng":-0.02978,"elevation":36.8},{"lat":51.448432,"lng":-0.029694,"elevation":36.3},{"lat":51.448474,"lng":-0.029634,"elevation":36},{"lat":51.44851,"lng":-0.029628,"elevation":36},{"lat":51.448547,"lng":-0.029632,"elevation":36},{"lat":51.448585,"lng":-0.029639,"elevation":36.1},{"lat":51.448618,"lng":-0.029651,"elevation":36.2},{"lat":51.448651,"lng":-0.029662,"elevation":36.4},{"lat":51.44868,"lng":-0.02967,"elevation":36.4},{"lat":51.448724,"lng":-0.029716,"elevation":36.8},{"lat":51.448738,"lng":-0.029755,"elevation":37},{"lat":51.448781,"lng":-0.029831,"elevation":37.4},{"lat":51.448817,"lng":-0.029839,"elevation":37.4},{"lat":51.448849,"lng":-0.02985,"elevation":37.4},{"lat":51.448882,"lng":-0.029852,"elevation":37.4},{"lat":51.44894,"lng":-0.029861,"elevation":37.4},{"lat":51.449001,"lng":-0.029877,"elevation":37.4},{"lat":51.449029,"lng":-0.029882,"elevation":37.3},{"lat":51.449057,"lng":-0.029877,"elevation":37.3},{"lat":51.449109,"lng":-0.029881,"elevation":37.2},{"lat":51.44914,"lng":-0.029917,"elevation":37.3},{"lat":51.449173,"lng":-0.029941,"elevation":37.4},{"lat":51.449208,"lng":-0.029958,"elevation":37.5},{"lat":51.449254,"lng":-0.029974,"elevation":37.5},{"lat":51.449296,"lng":-0.029975,"elevation":37.4},{"lat":51.449345,"lng":-0.029978,"elevation":37.3},{"lat":51.449373,"lng":-0.029978,"elevation":37.3},{"lat":51.449401,"lng":-0.029975,"elevation":37.2},{"lat":51.449453,"lng":-0.02997,"elevation":37.1},{"lat":51.449482,"lng":-0.029968,"elevation":37},{"lat":51.449538,"lng":-0.029972,"elevation":36.9},{"lat":51.449587,"lng":-0.029985,"elevation":36.9},{"lat":51.449635,"lng":-0.029982,"elevation":36.7},{"lat":51.449681,"lng":-0.029978,"elevation":36.4},{"lat":51.449726,"lng":-0.030003,"elevation":36.3},{"lat":51.449777,"lng":-0.030018,"elevation":36.1},{"lat":51.449822,"lng":-0.030025,"elevation":35.9},{"lat":51.449871,"lng":-0.030026,"elevation":35.7},{"lat":51.449925,"lng":-0.030023,"elevation":35.4},{"lat":51.449952,"lng":-0.030015,"elevation":35.3},{"lat":51.450005,"lng":-0.029986,"elevation":34.9},{"lat":51.450031,"lng":-0.029971,"elevation":34.8},{"lat":51.450077,"lng":-0.029961,"elevation":34.6},{"lat":51.450124,"lng":-0.02996,"elevation":34.3},{"lat":51.450176,"lng":-0.029948,"elevation":34.1},{"lat":51.450224,"lng":-0.029938,"elevation":33.9},{"lat":51.450267,"lng":-0.029935,"elevation":33.7},{"lat":51.450307,"lng":-0.029922,"elevation":33.5},{"lat":51.450345,"lng":-0.02994,"elevation":33.3},{"lat":51.450383,"lng":-0.029957,"elevation":33.2},{"lat":51.450413,"lng":-0.029969,"elevation":33},{"lat":51.450452,"lng":-0.029972,"elevation":32.8},{"lat":51.45048,"lng":-0.029969,"elevation":32.7},{"lat":51.450509,"lng":-0.029965,"elevation":32.5},{"lat":51.450537,"lng":-0.02996,"elevation":32.4},{"lat":51.450566,"lng":-0.029968,"elevation":32.2},{"lat":51.450595,"lng":-0.029981,"elevation":32},{"lat":51.450655,"lng":-0.030008,"elevation":31.7},{"lat":51.450687,"lng":-0.030024,"elevation":31.5},{"lat":51.45072,"lng":-0.03004,"elevation":31.3},{"lat":51.450749,"lng":-0.030055,"elevation":31.2},{"lat":51.450778,"lng":-0.030062,"elevation":31},{"lat":51.450829,"lng":-0.030056,"elevation":30.7},{"lat":51.450869,"lng":-0.030027,"elevation":30.5},{"lat":51.450897,"lng":-0.030015,"elevation":30.4},{"lat":51.450933,"lng":-0.030025,"elevation":30.2},{"lat":51.450981,"lng":-0.030018,"elevation":29.9},{"lat":51.451029,"lng":-0.030018,"elevation":29.7},{"lat":51.451111,"lng":-0.030061,"elevation":29.2},{"lat":51.451152,"lng":-0.030065,"elevation":29},{"lat":51.45119,"lng":-0.030067,"elevation":28.7},{"lat":51.451224,"lng":-0.030064,"elevation":28.6},{"lat":51.451254,"lng":-0.030057,"elevation":28.4},{"lat":51.451283,"lng":-0.030044,"elevation":28.4},{"lat":51.451308,"lng":-0.030027,"elevation":28.3},{"lat":51.451335,"lng":-0.030014,"elevation":28.3},{"lat":51.451361,"lng":-0.030001,"elevation":28.2},{"lat":51.451402,"lng":-0.030032,"elevation":28.1},{"lat":51.451438,"lng":-0.030073,"elevation":28},{"lat":51.451469,"lng":-0.030081,"elevation":27.9},{"lat":51.451498,"lng":-0.030072,"elevation":27.9},{"lat":51.45154,"lng":-0.030054,"elevation":27.8},{"lat":51.451597,"lng":-0.030037,"elevation":27.7},{"lat":51.451628,"lng":-0.03004,"elevation":27.6},{"lat":51.451661,"lng":-0.030052,"elevation":27.5},{"lat":51.451729,"lng":-0.030095,"elevation":27.4},{"lat":51.451757,"lng":-0.030119,"elevation":27.3},{"lat":51.451818,"lng":-0.030144,"elevation":27.2},{"lat":51.451874,"lng":-0.030126,"elevation":27.1},{"lat":51.451901,"lng":-0.030099,"elevation":27},{"lat":51.451955,"lng":-0.030106,"elevation":26.9},{"lat":51.451983,"lng":-0.030121,"elevation":26.9},{"lat":51.452015,"lng":-0.03013,"elevation":26.8},{"lat":51.452091,"lng":-0.030131,"elevation":26.6},{"lat":51.452133,"lng":-0.030135,"elevation":26.5},{"lat":51.452166,"lng":-0.030144,"elevation":26.3},{"lat":51.452204,"lng":-0.030153,"elevation":26.2},{"lat":51.45224,"lng":-0.030172,"elevation":26.1},{"lat":51.452279,"lng":-0.030193,"elevation":26},{"lat":51.452317,"lng":-0.030212,"elevation":25.8},{"lat":51.452349,"lng":-0.030239,"elevation":25.8},{"lat":51.452381,"lng":-0.030261,"elevation":25.7},{"lat":51.452395,"lng":-0.030322,"elevation":25.7},{"lat":51.452404,"lng":-0.03038,"elevation":25.8},{"lat":51.452404,"lng":-0.030425,"elevation":25.8},{"lat":51.452382,"lng":-0.030471,"elevation":25.9},{"lat":51.452351,"lng":-0.030508,"elevation":26.1},{"lat":51.452323,"lng":-0.030531,"elevation":26.2},{"lat":51.452237,"lng":-0.030557,"elevation":26.5},{"lat":51.452204,"lng":-0.030562,"elevation":26.6},{"lat":51.452172,"lng":-0.030575,"elevation":26.7},{"lat":51.452146,"lng":-0.030589,"elevation":26.8},{"lat":51.452112,"lng":-0.030639,"elevation":26.9},{"lat":51.452073,"lng":-0.030685,"elevation":27},{"lat":51.452039,"lng":-0.030724,"elevation":27.1},{"lat":51.452004,"lng":-0.030754,"elevation":27.1},{"lat":51.451957,"lng":-0.030792,"elevation":27.2},{"lat":51.451907,"lng":-0.030804,"elevation":27.2},{"lat":51.451852,"lng":-0.030809,"elevation":27.3},{"lat":51.45181,"lng":-0.03087,"elevation":27.3},{"lat":51.451793,"lng":-0.030915,"elevation":27.3},{"lat":51.451776,"lng":-0.030952,"elevation":27.4},{"lat":51.451758,"lng":-0.030987,"elevation":27.4},{"lat":51.451739,"lng":-0.031019,"elevation":27.4},{"lat":51.451717,"lng":-0.031044,"elevation":27.4},{"lat":51.451693,"lng":-0.031066,"elevation":27.5},{"lat":51.451648,"lng":-0.031095,"elevation":27.5},{"lat":51.4516,"lng":-0.031118,"elevation":27.6},{"lat":51.451546,"lng":-0.031126,"elevation":27.6},{"lat":51.451513,"lng":-0.031129,"elevation":27.7},{"lat":51.451487,"lng":-0.031139,"elevation":27.7},{"lat":51.45144,"lng":-0.03117,"elevation":27.8},{"lat":51.451395,"lng":-0.031214,"elevation":27.8},{"lat":51.451372,"lng":-0.031254,"elevation":27.8},{"lat":51.451349,"lng":-0.031293,"elevation":27.8},{"lat":51.451328,"lng":-0.031321,"elevation":27.8},{"lat":51.451291,"lng":-0.031366,"elevation":27.8},{"lat":51.451261,"lng":-0.031407,"elevation":27.8},{"lat":51.451227,"lng":-0.031447,"elevation":27.9},{"lat":51.451197,"lng":-0.031466,"elevation":28.1},{"lat":51.451165,"lng":-0.031501,"elevation":28.2},{"lat":51.45112,"lng":-0.031537,"elevation":28.4},{"lat":51.451069,"lng":-0.031586,"elevation":28.7},{"lat":51.451044,"lng":-0.03161,"elevation":28.8},{"lat":51.451014,"lng":-0.03163,"elevation":29},{"lat":51.450987,"lng":-0.031647,"elevation":29.1},{"lat":51.450961,"lng":-0.031661,"elevation":29.2},{"lat":51.450934,"lng":-0.031678,"elevation":29.4},{"lat":51.450905,"lng":-0.031697,"elevation":29.5},{"lat":51.450879,"lng":-0.03172,"elevation":29.7},{"lat":51.45085,"lng":-0.031745,"elevation":29.8},{"lat":51.450824,"lng":-0.031771,"elevation":29.9},{"lat":51.450799,"lng":-0.031796,"elevation":30.1},{"lat":51.450776,"lng":-0.031818,"elevation":30.2},{"lat":51.45075,"lng":-0.031833,"elevation":30.3},{"lat":51.450724,"lng":-0.031844,"elevation":30.4},{"lat":51.450697,"lng":-0.031853,"elevation":30.6},{"lat":51.45067,"lng":-0.031864,"elevation":30.7},{"lat":51.450645,"lng":-0.031881,"elevation":30.9},{"lat":51.4506,"lng":-0.031919,"elevation":31.1},{"lat":51.450575,"lng":-0.031939,"elevation":31.2},{"lat":51.45055,"lng":-0.031963,"elevation":31.3},{"lat":51.450527,"lng":-0.031988,"elevation":31.5},{"lat":51.450488,"lng":-0.03204,"elevation":31.6},{"lat":51.450455,"lng":-0.032091,"elevation":31.8},{"lat":51.450422,"lng":-0.032118,"elevation":32},{"lat":51.450392,"lng":-0.032138,"elevation":32.3},{"lat":51.450359,"lng":-0.032163,"elevation":32.6},{"lat":51.450314,"lng":-0.0322,"elevation":33.1},{"lat":51.450268,"lng":-0.03224,"elevation":33.6},{"lat":51.45024,"lng":-0.032257,"elevation":33.9},{"lat":51.450214,"lng":-0.032272,"elevation":34.2},{"lat":51.450188,"lng":-0.032292,"elevation":34.5},{"lat":51.45014,"lng":-0.032324,"elevation":35},{"lat":51.450115,"lng":-0.032339,"elevation":35.3},{"lat":51.450091,"lng":-0.032363,"elevation":35.5},{"lat":51.450072,"lng":-0.032393,"elevation":35.7},{"lat":51.450039,"lng":-0.032454,"elevation":36.1},{"lat":51.449999,"lng":-0.032498,"elevation":36.5},{"lat":51.449946,"lng":-0.032515,"elevation":37.1},{"lat":51.4499,"lng":-0.032532,"elevation":37.6},{"lat":51.449857,"lng":-0.032562,"elevation":38},{"lat":51.449824,"lng":-0.032612,"elevation":38.4},{"lat":51.449806,"lng":-0.032679,"elevation":38.6},{"lat":51.449778,"lng":-0.032738,"elevation":38.9},{"lat":51.449756,"lng":-0.032763,"elevation":39.1},{"lat":51.449708,"lng":-0.0328,"elevation":39.7},{"lat":51.449681,"lng":-0.032807,"elevation":39.9},{"lat":51.449654,"lng":-0.032811,"elevation":40.2},{"lat":51.449599,"lng":-0.032833,"elevation":40.8},{"lat":51.44957,"lng":-0.03285,"elevation":41.1},{"lat":51.449543,"lng":-0.032863,"elevation":41.3},{"lat":51.449516,"lng":-0.032874,"elevation":41.6},{"lat":51.449471,"lng":-0.032885,"elevation":41.9},{"lat":51.449432,"lng":-0.032888,"elevation":42.3},{"lat":51.449401,"lng":-0.032894,"elevation":42.5},{"lat":51.449376,"lng":-0.032913,"elevation":42.7},{"lat":51.449356,"lng":-0.032942,"elevation":42.8},{"lat":51.449336,"lng":-0.032973,"elevation":42.9},{"lat":51.44932,"lng":-0.033016,"elevation":42.9},{"lat":51.449282,"lng":-0.033043,"elevation":43.1},{"lat":51.44925,"lng":-0.033045,"elevation":43.3},{"lat":51.449217,"lng":-0.033033,"elevation":43.7},{"lat":51.449189,"lng":-0.033041,"elevation":43.9},{"lat":51.44916,"lng":-0.033049,"elevation":44.1},{"lat":51.449129,"lng":-0.033032,"elevation":44.4},{"lat":51.44909,"lng":-0.033011,"elevation":44.8},{"lat":51.449056,"lng":-0.033024,"elevation":45},{"lat":51.449042,"lng":-0.03308,"elevation":45},{"lat":51.449065,"lng":-0.033113,"elevation":44.6},{"lat":51.449025,"lng":-0.033138,"elevation":44.9},{"lat":51.448984,"lng":-0.03314,"elevation":45.2},{"lat":51.448947,"lng":-0.033132,"elevation":45.6},{"lat":51.448919,"lng":-0.033132,"elevation":45.8},{"lat":51.448886,"lng":-0.033157,"elevation":46},{"lat":51.448857,"lng":-0.03319,"elevation":46.1},{"lat":51.448832,"lng":-0.033215,"elevation":46.2},{"lat":51.448801,"lng":-0.033233,"elevation":46.4},{"lat":51.448768,"lng":-0.033246,"elevation":46.7},{"lat":51.448729,"lng":-0.033264,"elevation":46.8},{"lat":51.448702,"lng":-0.033291,"elevation":46.8},{"lat":51.448677,"lng":-0.033308,"elevation":46.8},{"lat":51.448642,"lng":-0.033315,"elevation":46.8},{"lat":51.448613,"lng":-0.033302,"elevation":46.9},{"lat":51.448594,"lng":-0.033334,"elevation":46.9},{"lat":51.448586,"lng":-0.033391,"elevation":46.7},{"lat":51.448583,"lng":-0.033447,"elevation":46.6},{"lat":51.44858,"lng":-0.033499,"elevation":46.5},{"lat":51.448579,"lng":-0.03355,"elevation":46.3},{"lat":51.448579,"lng":-0.033602,"elevation":46.2},{"lat":51.448585,"lng":-0.033662,"elevation":46},{"lat":51.448598,"lng":-0.033717,"elevation":45.8},{"lat":51.448623,"lng":-0.033769,"elevation":45.6},{"lat":51.448648,"lng":-0.033816,"elevation":45.3},{"lat":51.448673,"lng":-0.03386,"elevation":45},{"lat":51.4487,"lng":-0.033905,"elevation":44.7},{"lat":51.448732,"lng":-0.033931,"elevation":44.4},{"lat":51.448762,"lng":-0.033962,"elevation":44.1},{"lat":51.448782,"lng":-0.034015,"elevation":43.8},{"lat":51.448793,"lng":-0.034055,"elevation":43.6},{"lat":51.448788,"lng":-0.034114,"elevation":43.4},{"lat":51.448796,"lng":-0.034157,"elevation":43.2},{"lat":51.448794,"lng":-0.034202,"elevation":43},{"lat":51.448798,"lng":-0.034254,"elevation":42.8},{"lat":51.448808,"lng":-0.034299,"elevation":42.6},{"lat":51.448823,"lng":-0.034351,"elevation":42.3},{"lat":51.44884,"lng":-0.034403,"elevation":42},{"lat":51.44885,"lng":-0.034461,"elevation":41.7},{"lat":51.448865,"lng":-0.03452,"elevation":41.4},{"lat":51.448887,"lng":-0.034564,"elevation":41.1},{"lat":51.448913,"lng":-0.034589,"elevation":40.8},{"lat":51.44893,"lng":-0.034646,"elevation":40.8},{"lat":51.448925,"lng":-0.034706,"elevation":40.9},{"lat":51.448928,"lng":-0.034752,"elevation":40.9},{"lat":51.448922,"lng":-0.034809,"elevation":41},{"lat":51.448927,"lng":-0.034854,"elevation":41},{"lat":51.448936,"lng":-0.03491,"elevation":41},{"lat":51.448947,"lng":-0.034961,"elevation":40.9},{"lat":51.448957,"lng":-0.035013,"elevation":40.9},{"lat":51.448976,"lng":-0.035052,"elevation":40.8},{"lat":51.448995,"lng":-0.035089,"elevation":40.7},{"lat":51.448994,"lng":-0.035158,"elevation":40.7},{"lat":51.448998,"lng":-0.035211,"elevation":40.7},{"lat":51.448981,"lng":-0.035268,"elevation":40.9},{"lat":51.448974,"lng":-0.035329,"elevation":41},{"lat":51.448969,"lng":-0.035397,"elevation":41.1},{"lat":51.448972,"lng":-0.03546,"elevation":41.2},{"lat":51.448976,"lng":-0.035509,"elevation":41.2},{"lat":51.448975,"lng":-0.035555,"elevation":41.2},{"lat":51.44896,"lng":-0.035613,"elevation":41.4},{"lat":51.448955,"lng":-0.035663,"elevation":41.5},{"lat":51.448944,"lng":-0.035704,"elevation":41.6},{"lat":51.448936,"lng":-0.035751,"elevation":41.7},{"lat":51.448932,"lng":-0.035801,"elevation":41.8},{"lat":51.448938,"lng":-0.035851,"elevation":41.8},{"lat":51.448942,"lng":-0.035902,"elevation":41.8},{"lat":51.448948,"lng":-0.035964,"elevation":41.8},{"lat":51.448922,"lng":-0.035919,"elevation":42},{"lat":51.4489,"lng":-0.035942,"elevation":42.3},{"lat":51.448875,"lng":-0.035986,"elevation":42.5},{"lat":51.448866,"lng":-0.036037,"elevation":42.7},{"lat":51.448878,"lng":-0.036094,"elevation":42.6},{"lat":51.448914,"lng":-0.036124,"elevation":42.3},{"lat":51.448951,"lng":-0.036145,"elevation":42},{"lat":51.448964,"lng":-0.036196,"elevation":41.9},{"lat":51.448959,"lng":-0.036255,"elevation":42},{"lat":51.448955,"lng":-0.036309,"elevation":42},{"lat":51.448947,"lng":-0.036367,"elevation":42},{"lat":51.44894,"lng":-0.036425,"elevation":42},{"lat":51.448938,"lng":-0.03648,"elevation":42},{"lat":51.448934,"lng":-0.03654,"elevation":42},{"lat":51.448931,"lng":-0.036599,"elevation":41.9},{"lat":51.448927,"lng":-0.036658,"elevation":41.9},{"lat":51.448921,"lng":-0.036717,"elevation":41.9},{"lat":51.448924,"lng":-0.036786,"elevation":41.8},{"lat":51.448936,"lng":-0.036829,"elevation":41.7},{"lat":51.448955,"lng":-0.036916,"elevation":41.4},{"lat":51.448952,"lng":-0.036975,"elevation":41.4},{"lat":51.448944,"lng":-0.037033,"elevation":41.4},{"lat":51.448935,"lng":-0.037091,"elevation":41.4},{"lat":51.448934,"lng":-0.037135,"elevation":41.4},{"lat":51.448919,"lng":-0.037196,"elevation":41.5},{"lat":51.448915,"lng":-0.037244,"elevation":41.5},{"lat":51.448914,"lng":-0.037288,"elevation":41.4},{"lat":51.448905,"lng":-0.037333,"elevation":41.5},{"lat":51.448886,"lng":-0.037374,"elevation":41.6},{"lat":51.448875,"lng":-0.037419,"elevation":41.6},{"lat":51.448867,"lng":-0.037461,"elevation":41.6},{"lat":51.448856,"lng":-0.03754,"elevation":41.6},{"lat":51.448861,"lng":-0.037618,"elevation":41.5},{"lat":51.448884,"lng":-0.037685,"elevation":41.3},{"lat":51.448894,"lng":-0.037769,"elevation":41.1},{"lat":51.448883,"lng":-0.037875,"elevation":41.1},{"lat":51.448881,"lng":-0.037928,"elevation":41},{"lat":51.44888,"lng":-0.03798,"elevation":40.9},{"lat":51.448883,"lng":-0.038028,"elevation":40.8},{"lat":51.448887,"lng":-0.038079,"elevation":40.7},{"lat":51.448893,"lng":-0.038127,"elevation":40.6},{"lat":51.448887,"lng":-0.038239,"elevation":40.4},{"lat":51.44888,"lng":-0.038307,"elevation":40.3},{"lat":51.44887,"lng":-0.03836,"elevation":40.2},{"lat":51.448863,"lng":-0.038409,"elevation":40.2},{"lat":51.448857,"lng":-0.038452,"elevation":40.1},{"lat":51.44888,"lng":-0.038494,"elevation":39.9},{"lat":51.448896,"lng":-0.038547,"elevation":39.7},{"lat":51.4489,"lng":-0.038634,"elevation":39.5},{"lat":51.448898,"lng":-0.038682,"elevation":39.4},{"lat":51.448894,"lng":-0.03873,"elevation":39.3},{"lat":51.448891,"lng":-0.038785,"elevation":39.3},{"lat":51.448891,"lng":-0.038842,"elevation":39.2},{"lat":51.44889,"lng":-0.038901,"elevation":39.2},{"lat":51.44889,"lng":-0.038961,"elevation":39.1},{"lat":51.448894,"lng":-0.03902,"elevation":39},{"lat":51.448908,"lng":-0.03913,"elevation":38.9},{"lat":51.448917,"lng":-0.039187,"elevation":38.8},{"lat":51.448922,"lng":-0.039298,"elevation":38.7},{"lat":51.448916,"lng":-0.039347,"elevation":38.6},{"lat":51.448907,"lng":-0.039389,"elevation":38.6},{"lat":51.448901,"lng":-0.039441,"elevation":38.6},{"lat":51.448901,"lng":-0.039485,"elevation":38.6},{"lat":51.448918,"lng":-0.03956,"elevation":38.4},{"lat":51.448925,"lng":-0.039638,"elevation":38.3},{"lat":51.448898,"lng":-0.039715,"elevation":38.4},{"lat":51.44888,"lng":-0.039749,"elevation":38.4},{"lat":51.448839,"lng":-0.039818,"elevation":38.5},{"lat":51.448817,"lng":-0.039847,"elevation":38.5},{"lat":51.448769,"lng":-0.039871,"elevation":38.6},{"lat":51.448744,"lng":-0.039814,"elevation":38.8},{"lat":51.448704,"lng":-0.039815,"elevation":39},{"lat":51.448667,"lng":-0.039828,"elevation":39.2},{"lat":51.44864,"lng":-0.039834,"elevation":39.4},{"lat":51.448595,"lng":-0.039821,"elevation":39.7},{"lat":51.448553,"lng":-0.039805,"elevation":40},{"lat":51.448522,"lng":-0.039801,"elevation":40.2},{"lat":51.448491,"lng":-0.039802,"elevation":40.4},{"lat":51.448461,"lng":-0.039793,"elevation":40.7},{"lat":51.448431,"lng":-0.039775,"elevation":40.9},{"lat":51.448406,"lng":-0.039755,"elevation":41.1},{"lat":51.448381,"lng":-0.039732,"elevation":41.3},{"lat":51.448345,"lng":-0.039722,"elevation":41.6},{"lat":51.448313,"lng":-0.039703,"elevation":41.9},{"lat":51.448286,"lng":-0.039688,"elevation":42.1},{"lat":51.448251,"lng":-0.03965,"elevation":42.4},{"lat":51.448223,"lng":-0.039634,"elevation":42.7},{"lat":51.448196,"lng":-0.039619,"elevation":42.9},{"lat":51.44817,"lng":-0.039603,"elevation":43.1},{"lat":51.448121,"lng":-0.039572,"elevation":43.6},{"lat":51.448074,"lng":-0.039543,"elevation":44},{"lat":51.448039,"lng":-0.039579,"elevation":44.1},{"lat":51.447991,"lng":-0.039576,"elevation":44.5},{"lat":51.447959,"lng":-0.039568,"elevation":44.8},{"lat":51.447939,"lng":-0.039617,"elevation":44.7},{"lat":51.447949,"lng":-0.039692,"elevation":44.4},{"lat":51.447945,"lng":-0.039745,"elevation":44.2},{"lat":51.447915,"lng":-0.039774,"elevation":44.3},{"lat":51.447887,"lng":-0.039805,"elevation":44.5},{"lat":51.447854,"lng":-0.039821,"elevation":44.8},{"lat":51.447821,"lng":-0.039842,"elevation":45.1},{"lat":51.447783,"lng":-0.039866,"elevation":45.4},{"lat":51.447751,"lng":-0.039886,"elevation":45.6},{"lat":51.447732,"lng":-0.039919,"elevation":45.7},{"lat":51.447725,"lng":-0.039982,"elevation":45.4},{"lat":51.447729,"lng":-0.040045,"elevation":45.1},{"lat":51.447724,"lng":-0.040108,"elevation":44.8},{"lat":51.447717,"lng":-0.040154,"elevation":44.7},{"lat":51.447703,"lng":-0.040218,"elevation":44.5},{"lat":51.447691,"lng":-0.040269,"elevation":44.3},{"lat":51.447683,"lng":-0.040312,"elevation":44.2},{"lat":51.447671,"lng":-0.040373,"elevation":44},{"lat":51.447656,"lng":-0.040413,"elevation":43.9},{"lat":51.447628,"lng":-0.040443,"elevation":44},{"lat":51.447608,"lng":-0.040477,"elevation":44},{"lat":51.447599,"lng":-0.040524,"elevation":43.8},{"lat":51.447586,"lng":-0.040574,"elevation":43.7},{"lat":51.447566,"lng":-0.04063,"elevation":43.6},{"lat":51.447539,"lng":-0.040699,"elevation":43.4},{"lat":51.447514,"lng":-0.040765,"elevation":43.3},{"lat":51.447491,"lng":-0.040825,"elevation":43.1},{"lat":51.447472,"lng":-0.040867,"elevation":43},{"lat":51.447464,"lng":-0.040925,"elevation":42.7},{"lat":51.447468,"lng":-0.040984,"elevation":42.4},{"lat":51.44747,"lng":-0.041033,"elevation":42.2},{"lat":51.447469,"lng":-0.041097,"elevation":41.8},{"lat":51.447463,"lng":-0.041152,"elevation":41.6},{"lat":51.447472,"lng":-0.041195,"elevation":41.3},{"lat":51.447497,"lng":-0.041231,"elevation":41.1},{"lat":51.447483,"lng":-0.041293,"elevation":41},{"lat":51.447461,"lng":-0.041332,"elevation":41},{"lat":51.447431,"lng":-0.04137,"elevation":41.1},{"lat":51.447398,"lng":-0.041408,"elevation":41.1},{"lat":51.44737,"lng":-0.04145,"elevation":41.2},{"lat":51.447347,"lng":-0.041497,"elevation":41.2},{"lat":51.447326,"lng":-0.041539,"elevation":41.2},{"lat":51.447305,"lng":-0.04157,"elevation":41.2},{"lat":51.447271,"lng":-0.041621,"elevation":41.2},{"lat":51.447244,"lng":-0.041664,"elevation":41.2},{"lat":51.447221,"lng":-0.041716,"elevation":41.2},{"lat":51.447189,"lng":-0.041777,"elevation":41.2},{"lat":51.447167,"lng":-0.041824,"elevation":41.2},{"lat":51.447142,"lng":-0.041861,"elevation":41.2},{"lat":51.447116,"lng":-0.041889,"elevation":41.2},{"lat":51.44709,"lng":-0.041929,"elevation":41.2},{"lat":51.447066,"lng":-0.041971,"elevation":41.1},{"lat":51.447039,"lng":-0.042004,"elevation":41},{"lat":51.447009,"lng":-0.042034,"elevation":41},{"lat":51.446979,"lng":-0.042062,"elevation":40.9},{"lat":51.446942,"lng":-0.042088,"elevation":40.8},{"lat":51.446908,"lng":-0.042109,"elevation":40.8},{"lat":51.446882,"lng":-0.042127,"elevation":40.7},{"lat":51.446856,"lng":-0.042157,"elevation":40.6},{"lat":51.446853,"lng":-0.04222,"elevation":40.5},{"lat":51.446864,"lng":-0.042261,"elevation":40.5},{"lat":51.446839,"lng":-0.042288,"elevation":40.4},{"lat":51.446809,"lng":-0.04229,"elevation":40.3},{"lat":51.446772,"lng":-0.04229,"elevation":40.3},{"lat":51.446737,"lng":-0.042288,"elevation":40.2},{"lat":51.446704,"lng":-0.042283,"elevation":40.2},{"lat":51.446672,"lng":-0.042289,"elevation":40.1},{"lat":51.446644,"lng":-0.042292,"elevation":40.1},{"lat":51.446606,"lng":-0.042306,"elevation":40},{"lat":51.446579,"lng":-0.042319,"elevation":39.9},{"lat":51.44655,"lng":-0.042331,"elevation":39.9},{"lat":51.446524,"lng":-0.042346,"elevation":39.8},{"lat":51.446501,"lng":-0.04237,"elevation":39.7},{"lat":51.446477,"lng":-0.042406,"elevation":39.6},{"lat":51.44647,"lng":-0.042465,"elevation":39.5},{"lat":51.446422,"lng":-0.042486,"elevation":39.3},{"lat":51.44637,"lng":-0.042465,"elevation":39.3},{"lat":51.446326,"lng":-0.042466,"elevation":39.2},{"lat":51.446291,"lng":-0.042475,"elevation":39.1},{"lat":51.446263,"lng":-0.042488,"elevation":39.1},{"lat":51.446231,"lng":-0.04249,"elevation":39},{"lat":51.446195,"lng":-0.042503,"elevation":38.8},{"lat":51.446161,"lng":-0.04251,"elevation":38.7},{"lat":51.446117,"lng":-0.042503,"elevation":38.6},{"lat":51.446079,"lng":-0.042493,"elevation":38.5},{"lat":51.446046,"lng":-0.042519,"elevation":38.3},{"lat":51.446019,"lng":-0.042536,"elevation":38.2},{"lat":51.445984,"lng":-0.042533,"elevation":38.1},{"lat":51.445948,"lng":-0.04253,"elevation":38},{"lat":51.445914,"lng":-0.042529,"elevation":37.9},{"lat":51.445881,"lng":-0.042508,"elevation":37.9},{"lat":51.445851,"lng":-0.042503,"elevation":37.8},{"lat":51.445824,"lng":-0.042498,"elevation":37.7},{"lat":51.445795,"lng":-0.042496,"elevation":37.6},{"lat":51.445767,"lng":-0.0425,"elevation":37.6},{"lat":51.445739,"lng":-0.042494,"elevation":37.5},{"lat":51.445713,"lng":-0.042507,"elevation":37.4},{"lat":51.445684,"lng":-0.042517,"elevation":37.3},{"lat":51.445655,"lng":-0.042506,"elevation":37.2},{"lat":51.445628,"lng":-0.042487,"elevation":37.2},{"lat":51.445595,"lng":-0.042486,"elevation":37.1},{"lat":51.445561,"lng":-0.042481,"elevation":37},{"lat":51.445523,"lng":-0.04248,"elevation":36.8},{"lat":51.44547,"lng":-0.042483,"elevation":36.7},{"lat":51.445455,"lng":-0.042484,"elevation":36.6},{"lat":51.445426,"lng":-0.042488,"elevation":36.5},{"lat":51.445396,"lng":-0.042501,"elevation":36.5},{"lat":51.445368,"lng":-0.042512,"elevation":36.5},{"lat":51.445338,"lng":-0.042517,"elevation":36.4},{"lat":51.445324,"lng":-0.042558,"elevation":36.4},{"lat":51.445289,"lng":-0.042583,"elevation":36.3},{"lat":51.445259,"lng":-0.042589,"elevation":36.3},{"lat":51.445279,"lng":-0.042637,"elevation":36.3},{"lat":51.445301,"lng":-0.042701,"elevation":36.2},{"lat":51.445319,"lng":-0.042749,"elevation":36.2},{"lat":51.445343,"lng":-0.042773,"elevation":36.2},{"lat":51.445343,"lng":-0.042821,"elevation":36.1},{"lat":51.445339,"lng":-0.042874,"elevation":36},{"lat":51.445337,"lng":-0.042918,"elevation":36},{"lat":51.445336,"lng":-0.042968,"elevation":36.1},{"lat":51.445329,"lng":-0.043027,"elevation":36.3},{"lat":51.445323,"lng":-0.043086,"elevation":36.4},{"lat":51.445331,"lng":-0.043133,"elevation":36.5},{"lat":51.445345,"lng":-0.04317,"elevation":36.6},{"lat":51.445351,"lng":-0.043223,"elevation":36.7},{"lat":51.44534,"lng":-0.043279,"elevation":36.8},{"lat":51.445327,"lng":-0.043333,"elevation":36.9},{"lat":51.445327,"lng":-0.043386,"elevation":37.1},{"lat":51.445334,"lng":-0.043437,"elevation":37.2},{"lat":51.445342,"lng":-0.043484,"elevation":37.3},{"lat":51.445347,"lng":-0.043528,"elevation":37.4},{"lat":51.445348,"lng":-0.043573,"elevation":37.5},{"lat":51.445349,"lng":-0.043619,"elevation":37.6},{"lat":51.445349,"lng":-0.043666,"elevation":37.7},{"lat":51.445348,"lng":-0.043726,"elevation":37.9},{"lat":51.44535,"lng":-0.043793,"elevation":38},{"lat":51.445353,"lng":-0.043844,"elevation":38.1},{"lat":51.445362,"lng":-0.043901,"elevation":38.3},{"lat":51.44537,"lng":-0.043956,"elevation":38.4},{"lat":51.445375,"lng":-0.044019,"elevation":38.6},{"lat":51.445384,"lng":-0.044078,"elevation":38.7},{"lat":51.445397,"lng":-0.044134,"elevation":38.9},{"lat":51.445405,"lng":-0.044184,"elevation":39},{"lat":51.445398,"lng":-0.044254,"elevation":39.2},{"lat":51.445396,"lng":-0.044317,"elevation":39.3},{"lat":51.445394,"lng":-0.044377,"elevation":39.5},{"lat":51.445395,"lng":-0.044432,"elevation":39.6},{"lat":51.445401,"lng":-0.044485,"elevation":39.7},{"lat":51.445398,"lng":-0.044539,"elevation":39.8},{"lat":51.445397,"lng":-0.044593,"elevation":40},{"lat":51.445398,"lng":-0.044641,"elevation":40.1},{"lat":51.44537,"lng":-0.044674,"elevation":40.1},{"lat":51.445341,"lng":-0.044694,"elevation":40.1},{"lat":51.445308,"lng":-0.044696,"elevation":40},{"lat":51.445275,"lng":-0.044694,"elevation":39.9},{"lat":51.445245,"lng":-0.044684,"elevation":39.8},{"lat":51.445211,"lng":-0.044668,"elevation":39.7},{"lat":51.445183,"lng":-0.044667,"elevation":39.6},{"lat":51.44515,"lng":-0.044678,"elevation":39.6},{"lat":51.445122,"lng":-0.044686,"elevation":39.5},{"lat":51.445088,"lng":-0.044671,"elevation":39.4},{"lat":51.445055,"lng":-0.044674,"elevation":39.3},{"lat":51.44507,"lng":-0.044719,"elevation":39.4},{"lat":51.445078,"lng":-0.044766,"elevation":39.5},{"lat":51.445087,"lng":-0.044809,"elevation":39.6}],[{"lat":51.445205,"lng":-0.044874,"elevation":40.1},{"lat":51.445233,"lng":-0.044816,"elevation":40.1},{"lat":51.445254,"lng":-0.044769,"elevation":40},{"lat":51.44528,"lng":-0.044739,"elevation":40},{"lat":51.445311,"lng":-0.044737,"elevation":40.1},{"lat":51.445343,"lng":-0.044721,"elevation":40.1},{"lat":51.445373,"lng":-0.044712,"elevation":40.2},{"lat":51.4454,"lng":-0.044688,"elevation":40.2},{"lat":51.445404,"lng":-0.044641,"elevation":40.1},{"lat":51.445396,"lng":-0.044578,"elevation":39.9},{"lat":51.445388,"lng":-0.044521,"elevation":39.8},{"lat":51.445383,"lng":-0.044466,"elevation":39.6},{"lat":51.445379,"lng":-0.044412,"elevation":39.5},{"lat":51.445375,"lng":-0.044358,"elevation":39.4},{"lat":51.445376,"lng":-0.044306,"elevation":39.3},{"lat":51.445382,"lng":-0.044256,"elevation":39.1},{"lat":51.445382,"lng":-0.044207,"elevation":39},{"lat":51.445375,"lng":-0.044146,"elevation":38.9},{"lat":51.445368,"lng":-0.044092,"elevation":38.7},{"lat":51.445359,"lng":-0.044037,"elevation":38.6},{"lat":51.445359,"lng":-0.043988,"elevation":38.5},{"lat":51.445356,"lng":-0.043941,"elevation":38.4},{"lat":51.445355,"lng":-0.043896,"elevation":38.3},{"lat":51.445348,"lng":-0.043849,"elevation":38.1},{"lat":51.445345,"lng":-0.043799,"elevation":38},{"lat":51.445345,"lng":-0.043744,"elevation":37.9},{"lat":51.445341,"lng":-0.043688,"elevation":37.8},{"lat":51.445341,"lng":-0.043634,"elevation":37.6},{"lat":51.44534,"lng":-0.043591,"elevation":37.5},{"lat":51.445339,"lng":-0.043545,"elevation":37.4},{"lat":51.445328,"lng":-0.043499,"elevation":37.3},{"lat":51.445307,"lng":-0.043447,"elevation":37.2},{"lat":51.445313,"lng":-0.043404,"elevation":37.1},{"lat":51.445324,"lng":-0.043349,"elevation":37},{"lat":51.445326,"lng":-0.043305,"elevation":36.9},{"lat":51.445326,"lng":-0.043258,"elevation":36.8},{"lat":51.445326,"lng":-0.043215,"elevation":36.7},{"lat":51.445334,"lng":-0.043172,"elevation":36.6},{"lat":51.445338,"lng":-0.043116,"elevation":36.5},{"lat":51.445334,"lng":-0.043051,"elevation":36.3},{"lat":51.445328,"lng":-0.042988,"elevation":36.2},{"lat":51.445318,"lng":-0.042929,"elevation":36},{"lat":51.445309,"lng":-0.042884,"elevation":36},{"lat":51.445276,"lng":-0.042852,"elevation":36.1},{"lat":51.445252,"lng":-0.042824,"elevation":36.1},{"lat":51.445237,"lng":-0.042772,"elevation":36.1},{"lat":51.445233,"lng":-0.042719,"elevation":36.2},{"lat":51.445237,"lng":-0.042665,"elevation":36.2},{"lat":51.445251,"lng":-0.042621,"elevation":36.3},{"lat":51.445278,"lng":-0.042605,"elevation":36.3},{"lat":51.445306,"lng":-0.042593,"elevation":36.3},{"lat":51.445341,"lng":-0.042579,"elevation":36.4},{"lat":51.44538,"lng":-0.04256,"elevation":36.4},{"lat":51.44541,"lng":-0.042533,"elevation":36.5},{"lat":51.445432,"lng":-0.042494,"elevation":36.6},{"lat":51.445446,"lng":-0.042447,"elevation":36.7},{"lat":51.44545,"lng":-0.042393,"elevation":36.7},{"lat":51.445458,"lng":-0.04234,"elevation":36.8},{"lat":51.445464,"lng":-0.042291,"elevation":36.9},{"lat":51.445468,"lng":-0.042239,"elevation":37},{"lat":51.445469,"lng":-0.042187,"elevation":37.1},{"lat":51.445467,"lng":-0.042138,"elevation":37.1},{"lat":51.445467,"lng":-0.04209,"elevation":37.2},{"lat":51.445464,"lng":-0.042046,"elevation":37.2},{"lat":51.445463,"lng":-0.041994,"elevation":37.3},{"lat":51.445466,"lng":-0.04193,"elevation":37.4},{"lat":51.445468,"lng":-0.041869,"elevation":37.5},{"lat":51.44546,"lng":-0.04182,"elevation":37.5},{"lat":51.44545,"lng":-0.041763,"elevation":37.5},{"lat":51.445456,"lng":-0.041702,"elevation":37.6},{"lat":51.445462,"lng":-0.041649,"elevation":37.7},{"lat":51.445471,"lng":-0.041607,"elevation":37.8},{"lat":51.445483,"lng":-0.04156,"elevation":37.9},{"lat":51.445492,"lng":-0.041507,"elevation":38},{"lat":51.445499,"lng":-0.04145,"elevation":38.1},{"lat":51.445507,"lng":-0.041397,"elevation":38.2},{"lat":51.445514,"lng":-0.041337,"elevation":38.4},{"lat":51.445519,"lng":-0.041281,"elevation":38.4},{"lat":51.445522,"lng":-0.041227,"elevation":38.6},{"lat":51.445525,"lng":-0.041177,"elevation":39},{"lat":51.445531,"lng":-0.041128,"elevation":39.3},{"lat":51.445531,"lng":-0.04108,"elevation":39.6},{"lat":51.445544,"lng":-0.041026,"elevation":40},{"lat":51.445546,"lng":-0.04098,"elevation":40.3},{"lat":51.445558,"lng":-0.040919,"elevation":40.7},{"lat":51.44557,"lng":-0.040869,"elevation":41.1},{"lat":51.445577,"lng":-0.040803,"elevation":41.6},{"lat":51.445582,"lng":-0.040752,"elevation":41.9},{"lat":51.445588,"lng":-0.040698,"elevation":42.3},{"lat":51.445592,"lng":-0.040646,"elevation":42.6},{"lat":51.445597,"lng":-0.040597,"elevation":43},{"lat":51.445603,"lng":-0.04055,"elevation":43.3},{"lat":51.445612,"lng":-0.040506,"elevation":43.6},{"lat":51.445625,"lng":-0.040466,"elevation":43.9},{"lat":51.445659,"lng":-0.040435,"elevation":44.3},{"lat":51.445686,"lng":-0.040415,"elevation":44.6},{"lat":51.445702,"lng":-0.04036,"elevation":45.1},{"lat":51.445704,"lng":-0.040316,"elevation":45.5},{"lat":51.445715,"lng":-0.040255,"elevation":46},{"lat":51.445721,"lng":-0.040208,"elevation":46.4},{"lat":51.445726,"lng":-0.040164,"elevation":46.8},{"lat":51.44573,"lng":-0.040101,"elevation":47.3},{"lat":51.445736,"lng":-0.040042,"elevation":47.8},{"lat":51.445745,"lng":-0.039996,"elevation":48.2},{"lat":51.445748,"lng":-0.039933,"elevation":48.7},{"lat":51.44575,"lng":-0.039879,"elevation":49.1},{"lat":51.445749,"lng":-0.039826,"elevation":49.5},{"lat":51.445752,"lng":-0.039768,"elevation":50},{"lat":51.445754,"lng":-0.03971,"elevation":50.5},{"lat":51.445752,"lng":-0.039649,"elevation":50.9},{"lat":51.445751,"lng":-0.039602,"elevation":51.3},{"lat":51.445752,"lng":-0.039552,"elevation":51.4},{"lat":51.445772,"lng":-0.039523,"elevation":51.6},{"lat":51.445801,"lng":-0.039501,"elevation":51.9},{"lat":51.445823,"lng":-0.039468,"elevation":52.1},{"lat":51.445818,"lng":-0.03942,"elevation":52.1},{"lat":51.445817,"lng":-0.039359,"elevation":52.1},{"lat":51.44582,"lng":-0.039289,"elevation":52.2},{"lat":51.445821,"lng":-0.039206,"elevation":52.4},{"lat":51.445821,"lng":-0.039149,"elevation":52.4},{"lat":51.445824,"lng":-0.039099,"elevation":52.5},{"lat":51.445827,"lng":-0.039046,"elevation":52.6},{"lat":51.445827,"lng":-0.038991,"elevation":52.7},{"lat":51.445825,"lng":-0.038935,"elevation":52.7},{"lat":51.445823,"lng":-0.038882,"elevation":52.7},{"lat":51.445822,"lng":-0.038834,"elevation":52.8},{"lat":51.445827,"lng":-0.038788,"elevation":52.9},{"lat":51.445831,"lng":-0.038714,"elevation":53},{"lat":51.445835,"lng":-0.038644,"elevation":53.2},{"lat":51.445837,"lng":-0.038578,"elevation":53.3},{"lat":51.445851,"lng":-0.038528,"elevation":53.6},{"lat":51.445866,"lng":-0.038479,"elevation":53.8},{"lat":51.445867,"lng":-0.038418,"elevation":53.9},{"lat":51.445854,"lng":-0.038353,"elevation":53.9},{"lat":51.445854,"lng":-0.038294,"elevation":54},{"lat":51.445869,"lng":-0.038244,"elevation":54.3},{"lat":51.445881,"lng":-0.038184,"elevation":54.5},{"lat":51.445896,"lng":-0.038096,"elevation":54.8},{"lat":51.445904,"lng":-0.03805,"elevation":55},{"lat":51.44591,"lng":-0.038003,"elevation":55.2},{"lat":51.445914,"lng":-0.037955,"elevation":55.3},{"lat":51.445915,"lng":-0.037908,"elevation":55.4},{"lat":51.44592,"lng":-0.037859,"elevation":55.3},{"lat":51.445931,"lng":-0.037815,"elevation":55.4},{"lat":51.445948,"lng":-0.037779,"elevation":55.5},{"lat":51.445977,"lng":-0.037714,"elevation":55.6},{"lat":51.445997,"lng":-0.037633,"elevation":55.7},{"lat":51.44601,"lng":-0.037594,"elevation":55.7},{"lat":51.446047,"lng":-0.037546,"elevation":56},{"lat":51.446076,"lng":-0.03753,"elevation":56.3},{"lat":51.446104,"lng":-0.037528,"elevation":56.6},{"lat":51.44614,"lng":-0.037534,"elevation":57},{"lat":51.446168,"lng":-0.037545,"elevation":57.3},{"lat":51.446209,"lng":-0.037555,"elevation":57.7},{"lat":51.446251,"lng":-0.037567,"elevation":58.2},{"lat":51.44629,"lng":-0.037581,"elevation":58.4},{"lat":51.446336,"lng":-0.037607,"elevation":58.6},{"lat":51.446376,"lng":-0.037628,"elevation":58.9},{"lat":51.446419,"lng":-0.037641,"elevation":59.1},{"lat":51.44647,"lng":-0.037646,"elevation":59.3},{"lat":51.446521,"lng":-0.037653,"elevation":59.6},{"lat":51.44657,"lng":-0.037658,"elevation":59.8},{"lat":51.446617,"lng":-0.037669,"elevation":60},{"lat":51.446669,"lng":-0.037672,"elevation":60.3},{"lat":51.446721,"lng":-0.037682,"elevation":60.5},{"lat":51.446772,"lng":-0.03769,"elevation":60.8},{"lat":51.446824,"lng":-0.0377,"elevation":61.1},{"lat":51.446852,"lng":-0.037706,"elevation":61.2},{"lat":51.446903,"lng":-0.037698,"elevation":61.4},{"lat":51.446951,"lng":-0.037693,"elevation":61.6},{"lat":51.446998,"lng":-0.037708,"elevation":61.9},{"lat":51.447036,"lng":-0.037726,"elevation":62.1},{"lat":51.447077,"lng":-0.037734,"elevation":62.3},{"lat":51.447107,"lng":-0.037727,"elevation":62},{"lat":51.447119,"lng":-0.037687,"elevation":61.8},{"lat":51.447111,"lng":-0.037639,"elevation":61.7},{"lat":51.447091,"lng":-0.037594,"elevation":61.8},{"lat":51.447073,"lng":-0.037532,"elevation":61.6},{"lat":51.447061,"lng":-0.037488,"elevation":61.4},{"lat":51.44705,"lng":-0.037446,"elevation":61.2},{"lat":51.44704,"lng":-0.037375,"elevation":60.9},{"lat":51.447028,"lng":-0.037297,"elevation":60.6},{"lat":51.44702,"lng":-0.037255,"elevation":60.4},{"lat":51.447009,"lng":-0.037205,"elevation":60.2},{"lat":51.446998,"lng":-0.037158,"elevation":60},{"lat":51.446984,"lng":-0.037075,"elevation":59.6},{"lat":51.446977,"lng":-0.037027,"elevation":59.4},{"lat":51.446971,"lng":-0.036981,"elevation":59.1},{"lat":51.446966,"lng":-0.036934,"elevation":58.9},{"lat":51.446959,"lng":-0.036854,"elevation":58.5},{"lat":51.446946,"lng":-0.036769,"elevation":58.1},{"lat":51.446939,"lng":-0.036725,"elevation":57.9},{"lat":51.446931,"lng":-0.036641,"elevation":57.5},{"lat":51.446927,"lng":-0.036569,"elevation":57.2},{"lat":51.446929,"lng":-0.036493,"elevation":56.9},{"lat":51.446928,"lng":-0.036408,"elevation":56.5},{"lat":51.446927,"lng":-0.03636,"elevation":56.3},{"lat":51.446926,"lng":-0.036317,"elevation":56.1},{"lat":51.446926,"lng":-0.036272,"elevation":55.9},{"lat":51.446923,"lng":-0.036228,"elevation":55.8},{"lat":51.446921,"lng":-0.036184,"elevation":55.7},{"lat":51.446919,"lng":-0.03614,"elevation":55.6},{"lat":51.446916,"lng":-0.036096,"elevation":55.5},{"lat":51.446913,"lng":-0.036052,"elevation":55.4},{"lat":51.446913,"lng":-0.036008,"elevation":55.3},{"lat":51.446916,"lng":-0.035924,"elevation":55.1},{"lat":51.446915,"lng":-0.035843,"elevation":54.9},{"lat":51.446913,"lng":-0.035763,"elevation":54.7},{"lat":51.446914,"lng":-0.035684,"elevation":54.6},{"lat":51.446915,"lng":-0.035613,"elevation":54.4},{"lat":51.446918,"lng":-0.035553,"elevation":54.3},{"lat":51.446926,"lng":-0.035497,"elevation":54.2},{"lat":51.44694,"lng":-0.035437,"elevation":54},{"lat":51.446977,"lng":-0.035384,"elevation":53.9},{"lat":51.447031,"lng":-0.03539,"elevation":53.9},{"lat":51.44706,"lng":-0.035399,"elevation":54},{"lat":51.44709,"lng":-0.035411,"elevation":54},{"lat":51.447119,"lng":-0.035427,"elevation":53.9},{"lat":51.447148,"lng":-0.035444,"elevation":53.8},{"lat":51.447175,"lng":-0.035461,"elevation":53.7},{"lat":51.447201,"lng":-0.035478,"elevation":53.6},{"lat":51.447227,"lng":-0.035493,"elevation":53.5},{"lat":51.447254,"lng":-0.035506,"elevation":53.4},{"lat":51.447303,"lng":-0.035535,"elevation":53.2},{"lat":51.447352,"lng":-0.035563,"elevation":53},{"lat":51.447377,"lng":-0.035579,"elevation":52.9},{"lat":51.447422,"lng":-0.035611,"elevation":52.7},{"lat":51.447453,"lng":-0.035641,"elevation":52.6},{"lat":51.447488,"lng":-0.035678,"elevation":52.5},{"lat":51.447529,"lng":-0.035722,"elevation":52.4},{"lat":51.447554,"lng":-0.035747,"elevation":52.3},{"lat":51.447596,"lng":-0.035788,"elevation":52.2},{"lat":51.447638,"lng":-0.03582,"elevation":52},{"lat":51.447677,"lng":-0.035854,"elevation":51.8},{"lat":51.447717,"lng":-0.035892,"elevation":51.7},{"lat":51.447759,"lng":-0.035936,"elevation":51.5},{"lat":51.447807,"lng":-0.035976,"elevation":51.3},{"lat":51.447834,"lng":-0.035996,"elevation":51.2},{"lat":51.44786,"lng":-0.036021,"elevation":51},{"lat":51.447885,"lng":-0.036049,"elevation":50.9},{"lat":51.447909,"lng":-0.036081,"elevation":50.8},{"lat":51.447955,"lng":-0.03612,"elevation":50.5},{"lat":51.447981,"lng":-0.036142,"elevation":50.3},{"lat":51.448009,"lng":-0.036166,"elevation":50.1},{"lat":51.448041,"lng":-0.036191,"elevation":49.9},{"lat":51.448075,"lng":-0.036208,"elevation":49.6},{"lat":51.448104,"lng":-0.036217,"elevation":49.4},{"lat":51.448131,"lng":-0.036227,"elevation":49.2},{"lat":51.448168,"lng":-0.036255,"elevation":48.9},{"lat":51.448207,"lng":-0.036296,"elevation":48.6},{"lat":51.448248,"lng":-0.036329,"elevation":48.2},{"lat":51.448295,"lng":-0.036345,"elevation":47.8},{"lat":51.448339,"lng":-0.036352,"elevation":47.5},{"lat":51.448379,"lng":-0.03637,"elevation":47.1},{"lat":51.448413,"lng":-0.036428,"elevation":46.8},{"lat":51.448427,"lng":-0.036506,"elevation":46.6},{"lat":51.448438,"lng":-0.036576,"elevation":46.5},{"lat":51.448455,"lng":-0.036642,"elevation":46.3},{"lat":51.448466,"lng":-0.03671,"elevation":46.2},{"lat":51.448477,"lng":-0.036773,"elevation":46.1},{"lat":51.448464,"lng":-0.036818,"elevation":46.2},{"lat":51.448445,"lng":-0.036876,"elevation":46.4},{"lat":51.448425,"lng":-0.036938,"elevation":46.5},{"lat":51.448403,"lng":-0.036991,"elevation":46.8},{"lat":51.448384,"lng":-0.037048,"elevation":47},{"lat":51.448374,"lng":-0.037097,"elevation":47.1},{"lat":51.448362,"lng":-0.037189,"elevation":47.2},{"lat":51.448357,"lng":-0.037233,"elevation":47.2},{"lat":51.448351,"lng":-0.03728,"elevation":47.3},{"lat":51.448345,"lng":-0.037326,"elevation":47.4},{"lat":51.448335,"lng":-0.037367,"elevation":47.5},{"lat":51.448323,"lng":-0.037445,"elevation":47.6},{"lat":51.448318,"lng":-0.037488,"elevation":47.7},{"lat":51.448309,"lng":-0.037573,"elevation":47.8},{"lat":51.448302,"lng":-0.037626,"elevation":47.9},{"lat":51.448294,"lng":-0.037678,"elevation":48},{"lat":51.448286,"lng":-0.037725,"elevation":48.1},{"lat":51.448277,"lng":-0.037768,"elevation":48.2},{"lat":51.448246,"lng":-0.037827,"elevation":48.6},{"lat":51.448201,"lng":-0.037851,"elevation":49.2},{"lat":51.448153,"lng":-0.03786,"elevation":49.9},{"lat":51.448105,"lng":-0.037846,"elevation":50.5},{"lat":51.448063,"lng":-0.03783,"elevation":51},{"lat":51.448016,"lng":-0.037807,"elevation":51.6},{"lat":51.447971,"lng":-0.037795,"elevation":52.2},{"lat":51.447929,"lng":-0.037799,"elevation":52.7},{"lat":51.447892,"lng":-0.037797,"elevation":53.1},{"lat":51.44785,"lng":-0.037792,"elevation":53.6},{"lat":51.447808,"lng":-0.037787,"elevation":54.1},{"lat":51.447763,"lng":-0.037777,"elevation":54.6},{"lat":51.447717,"lng":-0.037773,"elevation":55.1},{"lat":51.447676,"lng":-0.037771,"elevation":55.6},{"lat":51.447634,"lng":-0.037763,"elevation":56.1},{"lat":51.44759,"lng":-0.037757,"elevation":56.6},{"lat":51.447547,"lng":-0.037752,"elevation":57.1},{"lat":51.447504,"lng":-0.037745,"elevation":57.5},{"lat":51.447465,"lng":-0.037738,"elevation":58},{"lat":51.447427,"lng":-0.037716,"elevation":58.4},{"lat":51.447392,"lng":-0.037703,"elevation":58.7},{"lat":51.447355,"lng":-0.037697,"elevation":59.1},{"lat":51.447312,"lng":-0.03769,"elevation":59.6},{"lat":51.447267,"lng":-0.037679,"elevation":60.1},{"lat":51.447234,"lng":-0.037644,"elevation":60.3},{"lat":51.447206,"lng":-0.037616,"elevation":60.6},{"lat":51.447182,"lng":-0.037577,"elevation":60.7},{"lat":51.447166,"lng":-0.037529,"elevation":60.7},{"lat":51.447139,"lng":-0.037482,"elevation":60.8},{"lat":51.447108,"lng":-0.037409,"elevation":60.9},{"lat":51.447101,"lng":-0.037362,"elevation":60.8},{"lat":51.447098,"lng":-0.037318,"elevation":60.7},{"lat":51.447087,"lng":-0.037238,"elevation":60.5},{"lat":51.447075,"lng":-0.037167,"elevation":60.3},{"lat":51.447061,"lng":-0.037096,"elevation":60},{"lat":51.447039,"lng":-0.037021,"elevation":59.5},{"lat":51.447028,"lng":-0.036979,"elevation":59.3},{"lat":51.447018,"lng":-0.036935,"elevation":59.1},{"lat":51.447007,"lng":-0.036892,"elevation":58.8},{"lat":51.446998,"lng":-0.036852,"elevation":58.6},{"lat":51.446984,"lng":-0.036776,"elevation":58.3},{"lat":51.446979,"lng":-0.03666,"elevation":57.7},{"lat":51.446977,"lng":-0.036628,"elevation":57.6},{"lat":51.44697,"lng":-0.036553,"elevation":57.2},{"lat":51.446962,"lng":-0.036478,"elevation":56.9},{"lat":51.446952,"lng":-0.036399,"elevation":56.5},{"lat":51.446945,"lng":-0.036349,"elevation":56.3},{"lat":51.446939,"lng":-0.0363,"elevation":56},{"lat":51.446933,"lng":-0.036254,"elevation":55.8},{"lat":51.446926,"lng":-0.036172,"elevation":55.6},{"lat":51.446915,"lng":-0.036097,"elevation":55.5},{"lat":51.446907,"lng":-0.036016,"elevation":55.3},{"lat":51.446906,"lng":-0.035942,"elevation":55.1},{"lat":51.446909,"lng":-0.035884,"elevation":55},{"lat":51.446912,"lng":-0.035824,"elevation":54.9},{"lat":51.446914,"lng":-0.035754,"elevation":54.7},{"lat":51.446916,"lng":-0.035673,"elevation":54.6},{"lat":51.446916,"lng":-0.035628,"elevation":54.5},{"lat":51.446917,"lng":-0.035584,"elevation":54.4},{"lat":51.446918,"lng":-0.035538,"elevation":54.3},{"lat":51.44692,"lng":-0.035492,"elevation":54.2},{"lat":51.446925,"lng":-0.035447,"elevation":54.1},{"lat":51.446938,"lng":-0.035408,"elevation":54},{"lat":51.446959,"lng":-0.035375,"elevation":53.9},{"lat":51.446986,"lng":-0.035361,"elevation":53.9},{"lat":51.447015,"lng":-0.035364,"elevation":53.9},{"lat":51.447043,"lng":-0.035376,"elevation":53.9},{"lat":51.447069,"lng":-0.035388,"elevation":53.9},{"lat":51.44712,"lng":-0.035409,"elevation":53.8},{"lat":51.447166,"lng":-0.035434,"elevation":53.6},{"lat":51.447213,"lng":-0.035462,"elevation":53.5},{"lat":51.447263,"lng":-0.035487,"elevation":53.3},{"lat":51.447311,"lng":-0.035517,"elevation":53.1},{"lat":51.447352,"lng":-0.035552,"elevation":53},{"lat":51.447386,"lng":-0.035583,"elevation":52.9},{"lat":51.447414,"lng":-0.035603,"elevation":52.8},{"lat":51.447443,"lng":-0.03562,"elevation":52.7},{"lat":51.447477,"lng":-0.035652,"elevation":52.5},{"lat":51.447514,"lng":-0.035692,"elevation":52.4},{"lat":51.44754,"lng":-0.035713,"elevation":52.3},{"lat":51.447588,"lng":-0.035747,"elevation":52.1},{"lat":51.447615,"lng":-0.035768,"elevation":52},{"lat":51.447642,"lng":-0.035787,"elevation":51.9},{"lat":51.44767,"lng":-0.03581,"elevation":51.8},{"lat":51.447699,"lng":-0.035829,"elevation":51.7},{"lat":51.447727,"lng":-0.035847,"elevation":51.5},{"lat":51.447754,"lng":-0.035871,"elevation":51.4},{"lat":51.447781,"lng":-0.035895,"elevation":51.3},{"lat":51.447807,"lng":-0.035923,"elevation":51.2},{"lat":51.447839,"lng":-0.035955,"elevation":51.1},{"lat":51.44787,"lng":-0.035989,"elevation":50.9},{"lat":51.447896,"lng":-0.036017,"elevation":50.8},{"lat":51.447922,"lng":-0.03604,"elevation":50.7},{"lat":51.447946,"lng":-0.036064,"elevation":50.5},{"lat":51.447971,"lng":-0.036088,"elevation":50.3},{"lat":51.448018,"lng":-0.036125,"elevation":50},{"lat":51.448047,"lng":-0.036153,"elevation":49.8},{"lat":51.448095,"lng":-0.03618,"elevation":49.4},{"lat":51.448121,"lng":-0.036202,"elevation":49.2},{"lat":51.448148,"lng":-0.036226,"elevation":49},{"lat":51.448172,"lng":-0.03625,"elevation":48.9},{"lat":51.448212,"lng":-0.036296,"elevation":48.5},{"lat":51.448245,"lng":-0.036335,"elevation":48.3},{"lat":51.448288,"lng":-0.036353,"elevation":47.9},{"lat":51.448334,"lng":-0.036362,"elevation":47.5},{"lat":51.44838,"lng":-0.036368,"elevation":47.1},{"lat":51.448414,"lng":-0.036415,"elevation":46.8},{"lat":51.448437,"lng":-0.036471,"elevation":46.6},{"lat":51.448456,"lng":-0.036528,"elevation":46.4},{"lat":51.448472,"lng":-0.036596,"elevation":46.2},{"lat":51.448478,"lng":-0.036677,"elevation":46.1},{"lat":51.448492,"lng":-0.03675,"elevation":45.9},{"lat":51.448494,"lng":-0.036832,"elevation":45.9},{"lat":51.448483,"lng":-0.036914,"elevation":46},{"lat":51.448465,"lng":-0.036979,"elevation":46.1},{"lat":51.448436,"lng":-0.037048,"elevation":46.4},{"lat":51.448419,"lng":-0.037116,"elevation":46.6},{"lat":51.448406,"lng":-0.037173,"elevation":46.7},{"lat":51.448391,"lng":-0.037233,"elevation":46.9},{"lat":51.448377,"lng":-0.037285,"elevation":47},{"lat":51.448367,"lng":-0.037326,"elevation":47.1},{"lat":51.448348,"lng":-0.037399,"elevation":47.3},{"lat":51.44833,"lng":-0.037472,"elevation":47.5},{"lat":51.448314,"lng":-0.037548,"elevation":47.7},{"lat":51.448298,"lng":-0.037623,"elevation":47.9},{"lat":51.448284,"lng":-0.037691,"elevation":48.1},{"lat":51.448257,"lng":-0.037753,"elevation":48.5},{"lat":51.448225,"lng":-0.037817,"elevation":48.9},{"lat":51.448207,"lng":-0.037849,"elevation":49.1},{"lat":51.44816,"lng":-0.03788,"elevation":49.8},{"lat":51.448131,"lng":-0.037879,"elevation":50.1},{"lat":51.448104,"lng":-0.037874,"elevation":50.5},{"lat":51.448076,"lng":-0.037874,"elevation":50.9},{"lat":51.448048,"lng":-0.037869,"elevation":51.2},{"lat":51.447998,"lng":-0.037857,"elevation":51.9},{"lat":51.447955,"lng":-0.037845,"elevation":52.4},{"lat":51.447917,"lng":-0.03784,"elevation":52.9},{"lat":51.447879,"lng":-0.037833,"elevation":53.3},{"lat":51.447842,"lng":-0.037823,"elevation":53.8},{"lat":51.447802,"lng":-0.037804,"elevation":54.2},{"lat":51.447762,"lng":-0.03779,"elevation":54.6},{"lat":51.447722,"lng":-0.037782,"elevation":55.1},{"lat":51.447677,"lng":-0.037764,"elevation":55.6},{"lat":51.447631,"lng":-0.037744,"elevation":56.1},{"lat":51.447586,"lng":-0.037734,"elevation":56.6},{"lat":51.447541,"lng":-0.037715,"elevation":57},{"lat":51.447494,"lng":-0.037704,"elevation":57.6},{"lat":51.447448,"lng":-0.037705,"elevation":58.1},{"lat":51.447406,"lng":-0.037704,"elevation":58.6},{"lat":51.447368,"lng":-0.037687,"elevation":58.9},{"lat":51.447326,"lng":-0.037693,"elevation":59.4},{"lat":51.447295,"lng":-0.037714,"elevation":59.9},{"lat":51.447264,"lng":-0.037713,"elevation":60.2},{"lat":51.447226,"lng":-0.037707,"elevation":60.6},{"lat":51.447203,"lng":-0.03767,"elevation":60.8},{"lat":51.447176,"lng":-0.037605,"elevation":60.8},{"lat":51.447167,"lng":-0.03753,"elevation":60.7},{"lat":51.447153,"lng":-0.037456,"elevation":60.6},{"lat":51.447138,"lng":-0.037418,"elevation":60.6},{"lat":51.447113,"lng":-0.037345,"elevation":60.6},{"lat":51.447101,"lng":-0.037272,"elevation":60.5},{"lat":51.44708,"lng":-0.037201,"elevation":60.4},{"lat":51.447065,"lng":-0.037135,"elevation":60.1},{"lat":51.447046,"lng":-0.037062,"elevation":59.8},{"lat":51.447032,"lng":-0.036987,"elevation":59.4},{"lat":51.447024,"lng":-0.036944,"elevation":59.1},{"lat":51.447004,"lng":-0.036861,"elevation":58.7},{"lat":51.446995,"lng":-0.036816,"elevation":58.5},{"lat":51.446983,"lng":-0.036738,"elevation":58.1},{"lat":51.44697,"lng":-0.036662,"elevation":57.7},{"lat":51.446962,"lng":-0.036585,"elevation":57.3},{"lat":51.446955,"lng":-0.036541,"elevation":57.1},{"lat":51.446949,"lng":-0.036498,"elevation":56.9},{"lat":51.446942,"lng":-0.036449,"elevation":56.7},{"lat":51.44693,"lng":-0.036375,"elevation":56.4},{"lat":51.446925,"lng":-0.036302,"elevation":56},{"lat":51.446921,"lng":-0.03623,"elevation":55.8},{"lat":51.446915,"lng":-0.036174,"elevation":55.6},{"lat":51.446913,"lng":-0.036121,"elevation":55.5},{"lat":51.446912,"lng":-0.036058,"elevation":55.4},{"lat":51.4469,"lng":-0.035986,"elevation":55.2},{"lat":51.446894,"lng":-0.035932,"elevation":55.1},{"lat":51.446895,"lng":-0.035869,"elevation":55},{"lat":51.446899,"lng":-0.035794,"elevation":54.8},{"lat":51.446896,"lng":-0.035716,"elevation":54.6},{"lat":51.446902,"lng":-0.035633,"elevation":54.5},{"lat":51.446908,"lng":-0.035548,"elevation":54.3},{"lat":51.446914,"lng":-0.035504,"elevation":54.2},{"lat":51.446945,"lng":-0.03544,"elevation":54.1},{"lat":51.446998,"lng":-0.03544,"elevation":54.1},{"lat":51.447052,"lng":-0.03545,"elevation":54.1},{"lat":51.447103,"lng":-0.035465,"elevation":54},{"lat":51.447154,"lng":-0.035481,"elevation":53.8},{"lat":51.447204,"lng":-0.035502,"elevation":53.6},{"lat":51.447252,"lng":-0.035522,"elevation":53.4},{"lat":51.4473,"lng":-0.03554,"elevation":53.2},{"lat":51.447344,"lng":-0.035554,"elevation":53},{"lat":51.447376,"lng":-0.035563,"elevation":52.9},{"lat":51.447404,"lng":-0.035595,"elevation":52.8},{"lat":51.447441,"lng":-0.03564,"elevation":52.7},{"lat":51.447486,"lng":-0.035685,"elevation":52.6},{"lat":51.447513,"lng":-0.035706,"elevation":52.5},{"lat":51.447554,"lng":-0.035742,"elevation":52.3},{"lat":51.447578,"lng":-0.035763,"elevation":52.2},{"lat":51.447605,"lng":-0.035784,"elevation":52.1},{"lat":51.447633,"lng":-0.035805,"elevation":52},{"lat":51.447681,"lng":-0.035837,"elevation":51.8},{"lat":51.44773,"lng":-0.035883,"elevation":51.6},{"lat":51.447757,"lng":-0.035912,"elevation":51.5},{"lat":51.447786,"lng":-0.035942,"elevation":51.4},{"lat":51.447812,"lng":-0.035965,"elevation":51.2},{"lat":51.447837,"lng":-0.035986,"elevation":51.1},{"lat":51.447865,"lng":-0.036008,"elevation":51},{"lat":51.447893,"lng":-0.036031,"elevation":50.9},{"lat":51.447921,"lng":-0.036051,"elevation":50.7},{"lat":51.447948,"lng":-0.036069,"elevation":50.5},{"lat":51.447973,"lng":-0.036087,"elevation":50.3},{"lat":51.448007,"lng":-0.036141,"elevation":50.1},{"lat":51.448039,"lng":-0.036175,"elevation":49.9},{"lat":51.44808,"lng":-0.03621,"elevation":49.6},{"lat":51.448127,"lng":-0.03625,"elevation":49.2},{"lat":51.448165,"lng":-0.036297,"elevation":48.9},{"lat":51.448197,"lng":-0.036335,"elevation":48.7},{"lat":51.448242,"lng":-0.036342,"elevation":48.3},{"lat":51.448287,"lng":-0.036334,"elevation":47.9},{"lat":51.448334,"lng":-0.036338,"elevation":47.5},{"lat":51.448367,"lng":-0.036385,"elevation":47.2},{"lat":51.448385,"lng":-0.036454,"elevation":47},{"lat":51.448405,"lng":-0.036526,"elevation":46.8},{"lat":51.448417,"lng":-0.036572,"elevation":46.7},{"lat":51.448427,"lng":-0.03662,"elevation":46.6},{"lat":51.448435,"lng":-0.03667,"elevation":46.5},{"lat":51.448444,"lng":-0.036718,"elevation":46.4},{"lat":51.448448,"lng":-0.036767,"elevation":46.4},{"lat":51.448455,"lng":-0.036811,"elevation":46.3},{"lat":51.448464,"lng":-0.036882,"elevation":46.2},{"lat":51.448456,"lng":-0.036932,"elevation":46.2},{"lat":51.448439,"lng":-0.036977,"elevation":46.4},{"lat":51.448413,"lng":-0.037021,"elevation":46.7},{"lat":51.448397,"lng":-0.037073,"elevation":46.8},{"lat":51.448384,"lng":-0.037123,"elevation":46.9},{"lat":51.448372,"lng":-0.037186,"elevation":47.1},{"lat":51.448358,"lng":-0.03726,"elevation":47.2},{"lat":51.44834,"lng":-0.037332,"elevation":47.4},{"lat":51.448322,"lng":-0.037393,"elevation":47.6},{"lat":51.448304,"lng":-0.037458,"elevation":47.8},{"lat":51.448292,"lng":-0.037526,"elevation":48},{"lat":51.448283,"lng":-0.037574,"elevation":48.1},{"lat":51.448275,"lng":-0.037623,"elevation":48.2},{"lat":51.448264,"lng":-0.037701,"elevation":48.4},{"lat":51.448252,"lng":-0.037781,"elevation":48.5},{"lat":51.448242,"lng":-0.037822,"elevation":48.7},{"lat":51.448231,"lng":-0.037863,"elevation":48.8},{"lat":51.448219,"lng":-0.037944,"elevation":48.9},{"lat":51.4482,"lng":-0.038027,"elevation":48.8},{"lat":51.448187,"lng":-0.038108,"elevation":48.7},{"lat":51.448173,"lng":-0.038192,"elevation":48.5},{"lat":51.448158,"lng":-0.038267,"elevation":48.4},{"lat":51.448142,"lng":-0.038337,"elevation":48.3},{"lat":51.44812,"lng":-0.038399,"elevation":48.3},{"lat":51.448099,"lng":-0.038456,"elevation":48.3},{"lat":51.448086,"lng":-0.038506,"elevation":48.2},{"lat":51.448074,"lng":-0.038557,"elevation":48.1},{"lat":51.448063,"lng":-0.03861,"elevation":48},{"lat":51.448049,"lng":-0.038678,"elevation":47.9},{"lat":51.448028,"lng":-0.038759,"elevation":47.8},{"lat":51.448016,"lng":-0.038801,"elevation":47.7},{"lat":51.448006,"lng":-0.038845,"elevation":47.6},{"lat":51.447998,"lng":-0.038887,"elevation":47.5},{"lat":51.447991,"lng":-0.038954,"elevation":47.3},{"lat":51.447975,"lng":-0.039019,"elevation":47.1},{"lat":51.447958,"lng":-0.039079,"elevation":47},{"lat":51.447946,"lng":-0.039148,"elevation":46.8},{"lat":51.447938,"lng":-0.039195,"elevation":46.7},{"lat":51.447929,"lng":-0.039242,"elevation":46.5},{"lat":51.447917,"lng":-0.039288,"elevation":46.4},{"lat":51.447905,"lng":-0.039328,"elevation":46.4},{"lat":51.447892,"lng":-0.039371,"elevation":46.3},{"lat":51.447882,"lng":-0.039414,"elevation":46.2},{"lat":51.447864,"lng":-0.039489,"elevation":46.1},{"lat":51.447852,"lng":-0.039568,"elevation":45.8},{"lat":51.447839,"lng":-0.039644,"elevation":45.7},{"lat":51.447817,"lng":-0.039713,"elevation":45.7},{"lat":51.447803,"lng":-0.039753,"elevation":45.6},{"lat":51.447792,"lng":-0.039796,"elevation":45.6},{"lat":51.447785,"lng":-0.039841,"elevation":45.5},{"lat":51.447772,"lng":-0.039924,"elevation":45.2},{"lat":51.447764,"lng":-0.039965,"elevation":45.1},{"lat":51.447746,"lng":-0.040049,"elevation":44.9},{"lat":51.447736,"lng":-0.040092,"elevation":44.8},{"lat":51.447718,"lng":-0.040172,"elevation":44.6},{"lat":51.447708,"lng":-0.040215,"elevation":44.5},{"lat":51.447691,"lng":-0.040296,"elevation":44.2},{"lat":51.447675,"lng":-0.040355,"elevation":44},{"lat":51.447654,"lng":-0.040425,"elevation":43.9},{"lat":51.447634,"lng":-0.040478,"elevation":43.8},{"lat":51.447612,"lng":-0.040538,"elevation":43.7},{"lat":51.447595,"lng":-0.040589,"elevation":43.6},{"lat":51.447585,"lng":-0.04063,"elevation":43.5},{"lat":51.447558,"lng":-0.040642,"elevation":43.6},{"lat":51.447551,"lng":-0.040693,"elevation":43.4},{"lat":51.447532,"lng":-0.040762,"elevation":43.2},{"lat":51.447507,"lng":-0.04084,"elevation":42.9},{"lat":51.447493,"lng":-0.040879,"elevation":42.8},{"lat":51.447477,"lng":-0.040919,"elevation":42.7},{"lat":51.447459,"lng":-0.040958,"elevation":42.6},{"lat":51.447442,"lng":-0.040996,"elevation":42.4},{"lat":51.447428,"lng":-0.041035,"elevation":42.3},{"lat":51.447415,"lng":-0.041077,"elevation":42.1},{"lat":51.447404,"lng":-0.04112,"elevation":41.9},{"lat":51.447392,"lng":-0.041162,"elevation":41.7},{"lat":51.44738,"lng":-0.041204,"elevation":41.5},{"lat":51.447365,"lng":-0.041246,"elevation":41.3},{"lat":51.447347,"lng":-0.041287,"elevation":41.3},{"lat":51.447327,"lng":-0.041331,"elevation":41.3},{"lat":51.447309,"lng":-0.041373,"elevation":41.4},{"lat":51.447293,"lng":-0.04142,"elevation":41.3},{"lat":51.447278,"lng":-0.041462,"elevation":41.3},{"lat":51.447261,"lng":-0.041496,"elevation":41.3},{"lat":51.447226,"lng":-0.041544,"elevation":41.4},{"lat":51.447192,"lng":-0.041593,"elevation":41.4},{"lat":51.447175,"lng":-0.041632,"elevation":41.4},{"lat":51.447155,"lng":-0.041677,"elevation":41.4},{"lat":51.447127,"lng":-0.041738,"elevation":41.3},{"lat":51.447098,"lng":-0.041794,"elevation":41.3},{"lat":51.447071,"lng":-0.041839,"elevation":41.3},{"lat":51.447045,"lng":-0.041876,"elevation":41.2},{"lat":51.447021,"lng":-0.041906,"elevation":41.2},{"lat":51.446996,"lng":-0.041937,"elevation":41.1},{"lat":51.446972,"lng":-0.041962,"elevation":41},{"lat":51.446944,"lng":-0.041989,"elevation":41},{"lat":51.446917,"lng":-0.042014,"elevation":40.9},{"lat":51.446894,"lng":-0.04204,"elevation":40.8},{"lat":51.44687,"lng":-0.042069,"elevation":40.8},{"lat":51.446846,"lng":-0.042092,"elevation":40.7},{"lat":51.446822,"lng":-0.042112,"elevation":40.6},{"lat":51.446776,"lng":-0.042156,"elevation":40.5},{"lat":51.446756,"lng":-0.042186,"elevation":40.4},{"lat":51.446734,"lng":-0.042215,"elevation":40.4},{"lat":51.446712,"lng":-0.042244,"elevation":40.3},{"lat":51.446668,"lng":-0.042294,"elevation":40.1},{"lat":51.446641,"lng":-0.04232,"elevation":40},{"lat":51.446613,"lng":-0.042345,"elevation":39.9},{"lat":51.446584,"lng":-0.042364,"elevation":39.9},{"lat":51.446558,"lng":-0.042379,"elevation":39.8},{"lat":51.446531,"lng":-0.04239,"elevation":39.7},{"lat":51.446504,"lng":-0.042406,"elevation":39.6},{"lat":51.44646,"lng":-0.042427,"elevation":39.5},{"lat":51.446421,"lng":-0.042429,"elevation":39.5},{"lat":51.446377,"lng":-0.042435,"elevation":39.4},{"lat":51.446323,"lng":-0.042449,"elevation":39.2},{"lat":51.446295,"lng":-0.042456,"elevation":39.2},{"lat":51.446248,"lng":-0.042475,"elevation":39.1},{"lat":51.446201,"lng":-0.042495,"elevation":38.9},{"lat":51.446151,"lng":-0.042512,"elevation":38.7},{"lat":51.446098,"lng":-0.042531,"elevation":38.5},{"lat":51.446069,"lng":-0.042535,"elevation":38.4},{"lat":51.44604,"lng":-0.042534,"elevation":38.3},{"lat":51.446013,"lng":-0.042536,"elevation":38.2},{"lat":51.445967,"lng":-0.042549,"elevation":38.1},{"lat":51.445913,"lng":-0.042554,"elevation":37.9},{"lat":51.445866,"lng":-0.04256,"elevation":37.7},{"lat":51.445823,"lng":-0.042572,"elevation":37.6},{"lat":51.44578,"lng":-0.042571,"elevation":37.5},{"lat":51.445739,"lng":-0.04256,"elevation":37.4},{"lat":51.445693,"lng":-0.042548,"elevation":37.3},{"lat":51.445644,"lng":-0.042541,"elevation":37.1},{"lat":51.445617,"lng":-0.042531,"elevation":37.1},{"lat":51.445591,"lng":-0.042518,"elevation":37},{"lat":51.445562,"lng":-0.042508,"elevation":36.9},{"lat":51.445535,"lng":-0.0425,"elevation":36.9},{"lat":51.445507,"lng":-0.042493,"elevation":36.8},{"lat":51.445457,"lng":-0.042491,"elevation":36.6},{"lat":51.445418,"lng":-0.042501,"elevation":36.5},{"lat":51.445383,"lng":-0.04251,"elevation":36.5},{"lat":51.44535,"lng":-0.042506,"elevation":36.5},{"lat":51.445322,"lng":-0.042497,"elevation":36.4},{"lat":51.445294,"lng":-0.042487,"elevation":36.4},{"lat":51.445264,"lng":-0.042528,"elevation":36.4},{"lat":51.445259,"lng":-0.042579,"elevation":36.3},{"lat":51.445272,"lng":-0.042629,"elevation":36.3},{"lat":51.445282,"lng":-0.042673,"elevation":36.2},{"lat":51.445315,"lng":-0.042705,"elevation":36.2},{"lat":51.445332,"lng":-0.042748,"elevation":36.2},{"lat":51.445333,"lng":-0.042792,"elevation":36.1},{"lat":51.445331,"lng":-0.042837,"elevation":36.1},{"lat":51.445333,"lng":-0.042901,"elevation":36},{"lat":51.445337,"lng":-0.042948,"elevation":36.1},{"lat":51.445342,"lng":-0.042998,"elevation":36.2},{"lat":51.445346,"lng":-0.043049,"elevation":36.3},{"lat":51.445346,"lng":-0.043112,"elevation":36.4},{"lat":51.445348,"lng":-0.043172,"elevation":36.6},{"lat":51.44535,"lng":-0.043228,"elevation":36.7},{"lat":51.445349,"lng":-0.043274,"elevation":36.8},{"lat":51.445361,"lng":-0.043335,"elevation":37},{"lat":51.445371,"lng":-0.043379,"elevation":37.1},{"lat":51.445381,"lng":-0.043434,"elevation":37.2},{"lat":51.445377,"lng":-0.043496,"elevation":37.4},{"lat":51.445378,"lng":-0.043549,"elevation":37.5},{"lat":51.445381,"lng":-0.043608,"elevation":37.6},{"lat":51.445384,"lng":-0.043667,"elevation":37.8},{"lat":51.445389,"lng":-0.043725,"elevation":37.9},{"lat":51.445391,"lng":-0.043777,"elevation":38},{"lat":51.445384,"lng":-0.043834,"elevation":38.2},{"lat":51.445377,"lng":-0.043894,"elevation":38.3},{"lat":51.445375,"lng":-0.04394,"elevation":38.4},{"lat":51.445377,"lng":-0.043989,"elevation":38.5},{"lat":51.445377,"lng":-0.044036,"elevation":38.6},{"lat":51.445377,"lng":-0.044082,"elevation":38.7},{"lat":51.445376,"lng":-0.044127,"elevation":38.8},{"lat":51.445377,"lng":-0.044195,"elevation":39},{"lat":51.445379,"lng":-0.044256,"elevation":39.1},{"lat":51.445384,"lng":-0.044302,"elevation":39.3},{"lat":51.445387,"lng":-0.044362,"elevation":39.4},{"lat":51.445392,"lng":-0.04442,"elevation":39.6},{"lat":51.445396,"lng":-0.044485,"elevation":39.7},{"lat":51.445404,"lng":-0.044546,"elevation":39.9},{"lat":51.445406,"lng":-0.0446,"elevation":40},{"lat":51.445405,"lng":-0.044649,"elevation":40.1},{"lat":51.445395,"lng":-0.044693,"elevation":40.2},{"lat":51.445376,"lng":-0.044727,"elevation":40.2},{"lat":51.445348,"lng":-0.044744,"elevation":40.2},{"lat":51.445318,"lng":-0.044745,"elevation":40.1},{"lat":51.445286,"lng":-0.044744,"elevation":40},{"lat":51.445259,"lng":-0.044745,"elevation":40},{"lat":51.445233,"lng":-0.044738,"elevation":39.9},{"lat":51.445196,"lng":-0.044729,"elevation":39.8}],[{"lat":51.445366,"lng":-0.045096,"elevation":41.1},{"lat":51.445328,"lng":-0.045359,"elevation":41.5},{"lat":51.445321,"lng":-0.045262,"elevation":41.3},{"lat":51.445334,"lng":-0.045214,"elevation":41.2},{"lat":51.445361,"lng":-0.04514,"elevation":41.2},{"lat":51.445397,"lng":-0.045109,"elevation":41.2},{"lat":51.445409,"lng":-0.045046,"elevation":41.1},{"lat":51.445417,"lng":-0.04498,"elevation":41},{"lat":51.445423,"lng":-0.044916,"elevation":40.8},{"lat":51.445427,"lng":-0.044856,"elevation":40.7},{"lat":51.445424,"lng":-0.044801,"elevation":40.5},{"lat":51.445416,"lng":-0.044748,"elevation":40.4},{"lat":51.445406,"lng":-0.044701,"elevation":40.3},{"lat":51.445397,"lng":-0.044659,"elevation":40.1},{"lat":51.44539,"lng":-0.044582,"elevation":39.9},{"lat":51.445386,"lng":-0.044513,"elevation":39.8},{"lat":51.445377,"lng":-0.044451,"elevation":39.6},{"lat":51.44536,"lng":-0.044398,"elevation":39.4},{"lat":51.445347,"lng":-0.044348,"elevation":39.3},{"lat":51.445337,"lng":-0.044294,"elevation":39.1},{"lat":51.445324,"lng":-0.044241,"elevation":39},{"lat":51.445314,"lng":-0.044191,"elevation":38.9},{"lat":51.445301,"lng":-0.044144,"elevation":38.7},{"lat":51.445285,"lng":-0.044099,"elevation":38.6},{"lat":51.445254,"lng":-0.044052,"elevation":38.5},{"lat":51.445254,"lng":-0.043994,"elevation":38.3},{"lat":51.445256,"lng":-0.043939,"elevation":38.2},{"lat":51.445253,"lng":-0.043888,"elevation":38.1},{"lat":51.445272,"lng":-0.043831,"elevation":38},{"lat":51.445283,"lng":-0.04378,"elevation":37.9},{"lat":51.445288,"lng":-0.043733,"elevation":37.8},{"lat":51.445291,"lng":-0.043687,"elevation":37.7},{"lat":51.445287,"lng":-0.043633,"elevation":37.6},{"lat":51.445273,"lng":-0.043579,"elevation":37.5},{"lat":51.445269,"lng":-0.043527,"elevation":37.3},{"lat":51.445257,"lng":-0.043477,"elevation":37.2},{"lat":51.445247,"lng":-0.043432,"elevation":37.1},{"lat":51.445244,"lng":-0.043366,"elevation":37},{"lat":51.445243,"lng":-0.043321,"elevation":36.9},{"lat":51.445251,"lng":-0.043276,"elevation":36.8},{"lat":51.445258,"lng":-0.043224,"elevation":36.7},{"lat":51.445263,"lng":-0.043175,"elevation":36.6},{"lat":51.445282,"lng":-0.043128,"elevation":36.5},{"lat":51.445292,"lng":-0.043079,"elevation":36.4},{"lat":51.445285,"lng":-0.043032,"elevation":36.3},{"lat":51.44528,"lng":-0.042988,"elevation":36.2},{"lat":51.44529,"lng":-0.042935,"elevation":36},{"lat":51.445308,"lng":-0.042876,"elevation":36},{"lat":51.445304,"lng":-0.042824,"elevation":36.1},{"lat":51.445271,"lng":-0.042794,"elevation":36.1},{"lat":51.445238,"lng":-0.042779,"elevation":36.1},{"lat":51.445252,"lng":-0.042737,"elevation":36.2},{"lat":51.445264,"lng":-0.042679,"elevation":36.2},{"lat":51.445279,"lng":-0.04263,"elevation":36.3},{"lat":51.445313,"lng":-0.042625,"elevation":36.3},{"lat":51.445341,"lng":-0.042622,"elevation":36.3},{"lat":51.445379,"lng":-0.042612,"elevation":36.3},{"lat":51.44542,"lng":-0.042593,"elevation":36.4},{"lat":51.445451,"lng":-0.042562,"elevation":36.5},{"lat":51.445473,"lng":-0.042521,"elevation":36.6},{"lat":51.445485,"lng":-0.042474,"elevation":36.7},{"lat":51.445501,"lng":-0.042424,"elevation":36.9},{"lat":51.4455,"lng":-0.042378,"elevation":36.9},{"lat":51.445499,"lng":-0.042324,"elevation":37},{"lat":51.445498,"lng":-0.042262,"elevation":37.1},{"lat":51.445496,"lng":-0.042201,"elevation":37.1},{"lat":51.445504,"lng":-0.042144,"elevation":37.2},{"lat":51.445508,"lng":-0.04209,"elevation":37.3},{"lat":51.4455,"lng":-0.042042,"elevation":37.4},{"lat":51.445493,"lng":-0.041995,"elevation":37.4},{"lat":51.445488,"lng":-0.04194,"elevation":37.4},{"lat":51.445486,"lng":-0.041883,"elevation":37.5},{"lat":51.445487,"lng":-0.041831,"elevation":37.6},{"lat":51.445483,"lng":-0.041781,"elevation":37.6},{"lat":51.445486,"lng":-0.041733,"elevation":37.7},{"lat":51.445499,"lng":-0.041688,"elevation":37.8},{"lat":51.445514,"lng":-0.041639,"elevation":37.9},{"lat":51.445522,"lng":-0.041589,"elevation":38},{"lat":51.445532,"lng":-0.041536,"elevation":38.2},{"lat":51.445542,"lng":-0.041484,"elevation":38.3},{"lat":51.445553,"lng":-0.041432,"elevation":38.4},{"lat":51.44556,"lng":-0.04138,"elevation":38.5},{"lat":51.445564,"lng":-0.041331,"elevation":38.6},{"lat":51.445565,"lng":-0.04128,"elevation":38.7},{"lat":51.445558,"lng":-0.041225,"elevation":38.8},{"lat":51.445563,"lng":-0.041171,"elevation":39.2},{"lat":51.445578,"lng":-0.041121,"elevation":39.6},{"lat":51.445584,"lng":-0.041071,"elevation":39.9},{"lat":51.445585,"lng":-0.041026,"elevation":40.2},{"lat":51.445583,"lng":-0.040982,"elevation":40.5},{"lat":51.445583,"lng":-0.040937,"elevation":40.8},{"lat":51.44559,"lng":-0.040891,"elevation":41.1},{"lat":51.445599,"lng":-0.040846,"elevation":41.4},{"lat":51.445603,"lng":-0.040785,"elevation":41.8},{"lat":51.445607,"lng":-0.040723,"elevation":42.2},{"lat":51.445615,"lng":-0.040681,"elevation":42.5},{"lat":51.445619,"lng":-0.040617,"elevation":43},{"lat":51.445626,"lng":-0.040573,"elevation":43.3},{"lat":51.445638,"lng":-0.040514,"elevation":43.7},{"lat":51.44564,"lng":-0.040453,"elevation":44.1},{"lat":51.44565,"lng":-0.040393,"elevation":44.6},{"lat":51.44564,"lng":-0.040334,"elevation":45},{"lat":51.44563,"lng":-0.040293,"elevation":45.2},{"lat":51.44563,"lng":-0.040238,"elevation":45.6},{"lat":51.44563,"lng":-0.040175,"elevation":46.1},{"lat":51.445632,"lng":-0.04013,"elevation":46.4},{"lat":51.445638,"lng":-0.040085,"elevation":46.8},{"lat":51.445648,"lng":-0.040038,"elevation":47.2},{"lat":51.445647,"lng":-0.039994,"elevation":47.6},{"lat":51.445644,"lng":-0.039951,"elevation":47.9},{"lat":51.445646,"lng":-0.039887,"elevation":48.4},{"lat":51.445653,"lng":-0.039843,"elevation":48.7},{"lat":51.445662,"lng":-0.039798,"elevation":49.1},{"lat":51.445677,"lng":-0.039753,"elevation":49.6},{"lat":51.445695,"lng":-0.039706,"elevation":50.1},{"lat":51.445704,"lng":-0.039657,"elevation":50.5},{"lat":51.445714,"lng":-0.039608,"elevation":51},{"lat":51.445718,"lng":-0.039557,"elevation":51.2},{"lat":51.445716,"lng":-0.039506,"elevation":51.2},{"lat":51.445711,"lng":-0.039456,"elevation":51.2},{"lat":51.445709,"lng":-0.039408,"elevation":51.3},{"lat":51.445703,"lng":-0.03936,"elevation":51.2},{"lat":51.445689,"lng":-0.039312,"elevation":51.2},{"lat":51.445684,"lng":-0.03926,"elevation":51.2},{"lat":51.445694,"lng":-0.039205,"elevation":51.3},{"lat":51.445697,"lng":-0.039159,"elevation":51.4},{"lat":51.445703,"lng":-0.039116,"elevation":51.4},{"lat":51.445714,"lng":-0.039074,"elevation":51.6},{"lat":51.445735,"lng":-0.039036,"elevation":51.8},{"lat":51.44576,"lng":-0.038999,"elevation":52},{"lat":51.445778,"lng":-0.038964,"elevation":52.2},{"lat":51.44579,"lng":-0.038925,"elevation":52.4},{"lat":51.445804,"lng":-0.038848,"elevation":52.6},{"lat":51.445804,"lng":-0.038774,"elevation":52.7},{"lat":51.445805,"lng":-0.038699,"elevation":52.8},{"lat":51.445808,"lng":-0.038625,"elevation":53},{"lat":51.445817,"lng":-0.038549,"elevation":53.2},{"lat":51.445822,"lng":-0.038472,"elevation":53.4},{"lat":51.445828,"lng":-0.038397,"elevation":53.6},{"lat":51.445838,"lng":-0.038325,"elevation":53.8},{"lat":51.445849,"lng":-0.038249,"elevation":54.1},{"lat":51.445868,"lng":-0.038174,"elevation":54.4},{"lat":51.445885,"lng":-0.038138,"elevation":54.6},{"lat":51.445908,"lng":-0.038071,"elevation":55},{"lat":51.445917,"lng":-0.038024,"elevation":55.2},{"lat":51.445926,"lng":-0.037957,"elevation":55.4},{"lat":51.445934,"lng":-0.037882,"elevation":55.5},{"lat":51.44595,"lng":-0.03781,"elevation":55.6},{"lat":51.445972,"lng":-0.037749,"elevation":55.7},{"lat":51.446014,"lng":-0.037708,"elevation":56},{"lat":51.446065,"lng":-0.037683,"elevation":56.5},{"lat":51.446117,"lng":-0.037669,"elevation":57},{"lat":51.446159,"lng":-0.037638,"elevation":57.4},{"lat":51.446205,"lng":-0.037631,"elevation":57.8},{"lat":51.446249,"lng":-0.037648,"elevation":58.3},{"lat":51.44629,"lng":-0.037663,"elevation":58.6},{"lat":51.446336,"lng":-0.037668,"elevation":58.8},{"lat":51.446382,"lng":-0.037672,"elevation":59},{"lat":51.446432,"lng":-0.037677,"elevation":59.2},{"lat":51.446459,"lng":-0.037681,"elevation":59.4},{"lat":51.446512,"lng":-0.037692,"elevation":59.6},{"lat":51.446564,"lng":-0.037703,"elevation":59.9},{"lat":51.446595,"lng":-0.037705,"elevation":60},{"lat":51.446626,"lng":-0.03771,"elevation":60.2},{"lat":51.446658,"lng":-0.037714,"elevation":60.4},{"lat":51.446689,"lng":-0.037718,"elevation":60.5},{"lat":51.446718,"lng":-0.037722,"elevation":60.6},{"lat":51.446747,"lng":-0.03773,"elevation":60.8},{"lat":51.446773,"lng":-0.037742,"elevation":61},{"lat":51.446825,"lng":-0.037764,"elevation":61.3},{"lat":51.446851,"lng":-0.037776,"elevation":61.4},{"lat":51.446877,"lng":-0.037788,"elevation":61.6},{"lat":51.446929,"lng":-0.037805,"elevation":61.9},{"lat":51.446979,"lng":-0.037823,"elevation":62.2},{"lat":51.447032,"lng":-0.037825,"elevation":62.4},{"lat":51.447059,"lng":-0.037823,"elevation":62.5},{"lat":51.447085,"lng":-0.037817,"elevation":62.6},{"lat":51.447112,"lng":-0.03781,"elevation":62.3},{"lat":51.447162,"lng":-0.037797,"elevation":61.7},{"lat":51.447202,"lng":-0.037803,"elevation":61.2},{"lat":51.447239,"lng":-0.037821,"elevation":60.8},{"lat":51.447265,"lng":-0.037791,"elevation":60.4},{"lat":51.447248,"lng":-0.037723,"elevation":60.4},{"lat":51.447228,"lng":-0.03769,"elevation":60.5},{"lat":51.447204,"lng":-0.037654,"elevation":60.7},{"lat":51.447182,"lng":-0.037622,"elevation":60.8},{"lat":51.44716,"lng":-0.037589,"elevation":61},{"lat":51.447141,"lng":-0.037555,"elevation":61.1},{"lat":51.447123,"lng":-0.037519,"elevation":61.1},{"lat":51.447105,"lng":-0.037482,"elevation":61.2},{"lat":51.447089,"lng":-0.037442,"elevation":61.2},{"lat":51.447074,"lng":-0.037402,"elevation":61.1},{"lat":51.447052,"lng":-0.037328,"elevation":60.8},{"lat":51.447033,"lng":-0.037257,"elevation":60.4},{"lat":51.447021,"lng":-0.037184,"elevation":60.1},{"lat":51.447009,"lng":-0.037096,"elevation":59.8},{"lat":51.446999,"lng":-0.037,"elevation":59.3},{"lat":51.446987,"lng":-0.036907,"elevation":58.9},{"lat":51.446982,"lng":-0.036824,"elevation":58.5},{"lat":51.446979,"lng":-0.03677,"elevation":58.2},{"lat":51.446974,"lng":-0.036717,"elevation":58},{"lat":51.446972,"lng":-0.036673,"elevation":57.8},{"lat":51.446951,"lng":-0.036595,"elevation":57.4},{"lat":51.446939,"lng":-0.036548,"elevation":57.1},{"lat":51.446933,"lng":-0.03648,"elevation":56.8},{"lat":51.446927,"lng":-0.036412,"elevation":56.5},{"lat":51.446923,"lng":-0.036342,"elevation":56.2},{"lat":51.446921,"lng":-0.036263,"elevation":55.9},{"lat":51.446917,"lng":-0.036185,"elevation":55.7},{"lat":51.446921,"lng":-0.036099,"elevation":55.5},{"lat":51.446922,"lng":-0.036055,"elevation":55.4},{"lat":51.446921,"lng":-0.036011,"elevation":55.3},{"lat":51.446917,"lng":-0.035927,"elevation":55.1},{"lat":51.446915,"lng":-0.035845,"elevation":54.9},{"lat":51.446914,"lng":-0.035764,"elevation":54.7},{"lat":51.446915,"lng":-0.035683,"elevation":54.6},{"lat":51.446915,"lng":-0.035604,"elevation":54.4},{"lat":51.446916,"lng":-0.035523,"elevation":54.2},{"lat":51.446926,"lng":-0.035445,"elevation":54.1},{"lat":51.44696,"lng":-0.035389,"elevation":53.9},{"lat":51.447005,"lng":-0.035379,"elevation":53.9},{"lat":51.447033,"lng":-0.035384,"elevation":53.9},{"lat":51.447061,"lng":-0.035393,"elevation":53.9},{"lat":51.447089,"lng":-0.035406,"elevation":53.9},{"lat":51.447117,"lng":-0.035423,"elevation":53.9},{"lat":51.447143,"lng":-0.035439,"elevation":53.8},{"lat":51.447168,"lng":-0.035461,"elevation":53.7},{"lat":51.447192,"lng":-0.035486,"elevation":53.6},{"lat":51.447216,"lng":-0.035511,"elevation":53.6},{"lat":51.447242,"lng":-0.035533,"elevation":53.5},{"lat":51.447269,"lng":-0.035554,"elevation":53.4},{"lat":51.447323,"lng":-0.035587,"elevation":53.2},{"lat":51.44735,"lng":-0.035603,"elevation":53.1},{"lat":51.447375,"lng":-0.035618,"elevation":53},{"lat":51.447425,"lng":-0.035636,"elevation":52.8},{"lat":51.447473,"lng":-0.035664,"elevation":52.6},{"lat":51.447496,"lng":-0.035689,"elevation":52.5},{"lat":51.447544,"lng":-0.035727,"elevation":52.3},{"lat":51.44757,"lng":-0.035749,"elevation":52.2},{"lat":51.447594,"lng":-0.035774,"elevation":52.1},{"lat":51.447619,"lng":-0.035797,"elevation":52},{"lat":51.447647,"lng":-0.035817,"elevation":51.9},{"lat":51.447676,"lng":-0.035833,"elevation":51.8},{"lat":51.447703,"lng":-0.035851,"elevation":51.7},{"lat":51.447728,"lng":-0.03587,"elevation":51.6},{"lat":51.44775,"lng":-0.035896,"elevation":51.5},{"lat":51.447792,"lng":-0.035946,"elevation":51.3},{"lat":51.447815,"lng":-0.035971,"elevation":51.2},{"lat":51.447841,"lng":-0.035991,"elevation":51.1},{"lat":51.447871,"lng":-0.036007,"elevation":51},{"lat":51.4479,"lng":-0.036022,"elevation":50.8},{"lat":51.447929,"lng":-0.036038,"elevation":50.6},{"lat":51.447955,"lng":-0.036058,"elevation":50.4},{"lat":51.447981,"lng":-0.036077,"elevation":50.3},{"lat":51.448025,"lng":-0.036119,"elevation":49.9},{"lat":51.448062,"lng":-0.036176,"elevation":49.7},{"lat":51.448093,"lng":-0.036244,"elevation":49.5},{"lat":51.448134,"lng":-0.036295,"elevation":49.2},{"lat":51.448174,"lng":-0.036353,"elevation":48.9},{"lat":51.448194,"lng":-0.036381,"elevation":48.7},{"lat":51.448219,"lng":-0.036403,"elevation":48.5},{"lat":51.44827,"lng":-0.036422,"elevation":48.1},{"lat":51.448325,"lng":-0.036415,"elevation":47.6},{"lat":51.448353,"lng":-0.036412,"elevation":47.3},{"lat":51.448399,"lng":-0.036439,"elevation":46.9},{"lat":51.448412,"lng":-0.036504,"elevation":46.8},{"lat":51.448412,"lng":-0.03658,"elevation":46.8},{"lat":51.448414,"lng":-0.036658,"elevation":46.7},{"lat":51.448424,"lng":-0.036735,"elevation":46.6},{"lat":51.448436,"lng":-0.036814,"elevation":46.5},{"lat":51.448441,"lng":-0.036897,"elevation":46.4},{"lat":51.448451,"lng":-0.036975,"elevation":46.3},{"lat":51.448458,"lng":-0.037057,"elevation":46.2},{"lat":51.448446,"lng":-0.03713,"elevation":46.3},{"lat":51.448418,"lng":-0.037196,"elevation":46.6},{"lat":51.44838,"lng":-0.03725,"elevation":47},{"lat":51.448357,"lng":-0.037282,"elevation":47.2},{"lat":51.448329,"lng":-0.037349,"elevation":47.6},{"lat":51.448308,"lng":-0.037413,"elevation":47.8},{"lat":51.448276,"lng":-0.037475,"elevation":48.2},{"lat":51.448252,"lng":-0.037542,"elevation":48.5},{"lat":51.448239,"lng":-0.037612,"elevation":48.7},{"lat":51.44823,"lng":-0.037688,"elevation":48.8},{"lat":51.448212,"lng":-0.037761,"elevation":49},{"lat":51.448193,"lng":-0.037837,"elevation":49.3},{"lat":51.448174,"lng":-0.037914,"elevation":49.6},{"lat":51.44816,"lng":-0.037974,"elevation":49.6},{"lat":51.448131,"lng":-0.037963,"elevation":50},{"lat":51.448103,"lng":-0.03792,"elevation":50.5},{"lat":51.448071,"lng":-0.037891,"elevation":50.9},{"lat":51.44804,"lng":-0.03788,"elevation":51.3},{"lat":51.448003,"lng":-0.037882,"elevation":51.8},{"lat":51.447966,"lng":-0.037881,"elevation":52.3},{"lat":51.44793,"lng":-0.037883,"elevation":52.8},{"lat":51.447892,"lng":-0.037882,"elevation":53.3},{"lat":51.447851,"lng":-0.037867,"elevation":53.7},{"lat":51.447812,"lng":-0.037851,"elevation":54.2},{"lat":51.447772,"lng":-0.03785,"elevation":54.6},{"lat":51.447728,"lng":-0.037833,"elevation":55.1},{"lat":51.447689,"lng":-0.037803,"elevation":55.5},{"lat":51.447648,"lng":-0.037783,"elevation":56},{"lat":51.447605,"lng":-0.03778,"elevation":56.5},{"lat":51.44756,"lng":-0.037773,"elevation":57},{"lat":51.447518,"lng":-0.037762,"elevation":57.4},{"lat":51.44748,"lng":-0.037766,"elevation":57.9},{"lat":51.447451,"lng":-0.037765,"elevation":58.2},{"lat":51.44741,"lng":-0.037766,"elevation":58.7},{"lat":51.447369,"lng":-0.037762,"elevation":59.1},{"lat":51.447326,"lng":-0.037744,"elevation":59.6},{"lat":51.447283,"lng":-0.037723,"elevation":60},{"lat":51.447249,"lng":-0.037687,"elevation":60.3},{"lat":51.447223,"lng":-0.037628,"elevation":60.4},{"lat":51.447206,"lng":-0.037594,"elevation":60.5},{"lat":51.447178,"lng":-0.037524,"elevation":60.6},{"lat":51.447151,"lng":-0.037461,"elevation":60.6},{"lat":51.447124,"lng":-0.037398,"elevation":60.7},{"lat":51.447095,"lng":-0.037332,"elevation":60.8},{"lat":51.447071,"lng":-0.037267,"elevation":60.6},{"lat":51.447052,"lng":-0.037206,"elevation":60.3},{"lat":51.447034,"lng":-0.037135,"elevation":60},{"lat":51.447017,"lng":-0.037056,"elevation":59.6},{"lat":51.447003,"lng":-0.036971,"elevation":59.2},{"lat":51.446995,"lng":-0.036923,"elevation":59},{"lat":51.446987,"lng":-0.036878,"elevation":58.7},{"lat":51.446977,"lng":-0.036831,"elevation":58.5},{"lat":51.446968,"lng":-0.036791,"elevation":58.3},{"lat":51.446954,"lng":-0.03671,"elevation":57.9},{"lat":51.446942,"lng":-0.03663,"elevation":57.5},{"lat":51.44693,"lng":-0.036553,"elevation":57.1},{"lat":51.446925,"lng":-0.036469,"elevation":56.8},{"lat":51.446923,"lng":-0.036389,"elevation":56.4},{"lat":51.446917,"lng":-0.036312,"elevation":56.1},{"lat":51.446911,"lng":-0.036235,"elevation":55.8},{"lat":51.446911,"lng":-0.036191,"elevation":55.7},{"lat":51.446912,"lng":-0.036148,"elevation":55.6},{"lat":51.446914,"lng":-0.036066,"elevation":55.4},{"lat":51.446912,"lng":-0.035987,"elevation":55.2},{"lat":51.446912,"lng":-0.035908,"elevation":55.1},{"lat":51.446912,"lng":-0.035827,"elevation":54.9},{"lat":51.446915,"lng":-0.035742,"elevation":54.7},{"lat":51.44692,"lng":-0.035646,"elevation":54.5},{"lat":51.446922,"lng":-0.035596,"elevation":54.4},{"lat":51.446923,"lng":-0.035553,"elevation":54.3},{"lat":51.446923,"lng":-0.035471,"elevation":54.1},{"lat":51.446931,"lng":-0.035395,"elevation":53.9},{"lat":51.446948,"lng":-0.035356,"elevation":53.9},{"lat":51.446968,"lng":-0.035324,"elevation":53.8},{"lat":51.446993,"lng":-0.035299,"elevation":53.7},{"lat":51.447046,"lng":-0.035302,"elevation":53.7},{"lat":51.447072,"lng":-0.035321,"elevation":53.8},{"lat":51.447099,"lng":-0.035345,"elevation":53.8},{"lat":51.447123,"lng":-0.035372,"elevation":53.7},{"lat":51.447149,"lng":-0.035397,"elevation":53.6},{"lat":51.447173,"lng":-0.035422,"elevation":53.6},{"lat":51.447197,"lng":-0.035448,"elevation":53.5},{"lat":51.447223,"lng":-0.03547,"elevation":53.4},{"lat":51.447249,"lng":-0.03549,"elevation":53.4},{"lat":51.447274,"lng":-0.035504,"elevation":53.3},{"lat":51.447301,"lng":-0.035517,"elevation":53.2},{"lat":51.447328,"lng":-0.035528,"elevation":53.1},{"lat":51.447356,"lng":-0.035548,"elevation":53},{"lat":51.447382,"lng":-0.035566,"elevation":52.9},{"lat":51.447408,"lng":-0.035584,"elevation":52.8},{"lat":51.447458,"lng":-0.03561,"elevation":52.6},{"lat":51.447503,"lng":-0.035643,"elevation":52.4},{"lat":51.447546,"lng":-0.035682,"elevation":52.2},{"lat":51.447589,"lng":-0.035719,"elevation":52.1},{"lat":51.447632,"lng":-0.035764,"elevation":51.9},{"lat":51.447671,"lng":-0.035811,"elevation":51.8},{"lat":51.447738,"lng":-0.035883,"elevation":51.5},{"lat":51.44776,"lng":-0.035909,"elevation":51.5},{"lat":51.447802,"lng":-0.035961,"elevation":51.3},{"lat":51.447842,"lng":-0.036011,"elevation":51.1},{"lat":51.447884,"lng":-0.036052,"elevation":50.9},{"lat":51.447932,"lng":-0.036084,"elevation":50.7},{"lat":51.447976,"lng":-0.036127,"elevation":50.4},{"lat":51.448019,"lng":-0.036172,"elevation":50},{"lat":51.448067,"lng":-0.036206,"elevation":49.7},{"lat":51.448113,"lng":-0.036243,"elevation":49.3},{"lat":51.44816,"lng":-0.036274,"elevation":49},{"lat":51.448206,"lng":-0.036308,"elevation":48.6},{"lat":51.448257,"lng":-0.036333,"elevation":48.2},{"lat":51.448284,"lng":-0.036346,"elevation":47.9},{"lat":51.448312,"lng":-0.036357,"elevation":47.7},{"lat":51.44834,"lng":-0.036362,"elevation":47.4},{"lat":51.448368,"lng":-0.036368,"elevation":47.2},{"lat":51.448397,"lng":-0.03639,"elevation":46.9},{"lat":51.44842,"lng":-0.03642,"elevation":46.7},{"lat":51.448433,"lng":-0.036462,"elevation":46.6},{"lat":51.448438,"lng":-0.036506,"elevation":46.5},{"lat":51.448437,"lng":-0.036549,"elevation":46.5},{"lat":51.448438,"lng":-0.036597,"elevation":46.5},{"lat":51.448441,"lng":-0.03664,"elevation":46.5},{"lat":51.448444,"lng":-0.036722,"elevation":46.4},{"lat":51.448444,"lng":-0.036797,"elevation":46.4},{"lat":51.448449,"lng":-0.036874,"elevation":46.3},{"lat":51.448455,"lng":-0.036946,"elevation":46.2},{"lat":51.448455,"lng":-0.037019,"elevation":46.2},{"lat":51.44845,"lng":-0.037092,"elevation":46.2},{"lat":51.44845,"lng":-0.03715,"elevation":46.2},{"lat":51.448441,"lng":-0.03721,"elevation":46.3},{"lat":51.44842,"lng":-0.037273,"elevation":46.5},{"lat":51.448401,"lng":-0.037343,"elevation":46.7},{"lat":51.448377,"lng":-0.03741,"elevation":47},{"lat":51.448351,"lng":-0.037468,"elevation":47.3},{"lat":51.448326,"lng":-0.037526,"elevation":47.6},{"lat":51.448303,"lng":-0.037587,"elevation":47.9},{"lat":51.448282,"lng":-0.037654,"elevation":48.1},{"lat":51.448265,"lng":-0.037722,"elevation":48.4},{"lat":51.448253,"lng":-0.037792,"elevation":48.5},{"lat":51.448237,"lng":-0.037861,"elevation":48.8},{"lat":51.448218,"lng":-0.037929,"elevation":49},{"lat":51.448191,"lng":-0.037984,"elevation":49.1},{"lat":51.448161,"lng":-0.037997,"elevation":49.4},{"lat":51.448127,"lng":-0.037978,"elevation":50},{"lat":51.448099,"lng":-0.037958,"elevation":50.4},{"lat":51.448063,"lng":-0.037957,"elevation":50.9},{"lat":51.448027,"lng":-0.037949,"elevation":51.4},{"lat":51.447988,"lng":-0.037943,"elevation":51.9},{"lat":51.44794,"lng":-0.037921,"elevation":52.7},{"lat":51.447909,"lng":-0.037906,"elevation":53.1},{"lat":51.447881,"lng":-0.037893,"elevation":53.4},{"lat":51.447831,"lng":-0.037877,"elevation":54},{"lat":51.447789,"lng":-0.037854,"elevation":54.4},{"lat":51.447755,"lng":-0.037832,"elevation":54.8},{"lat":51.447719,"lng":-0.037818,"elevation":55.2},{"lat":51.447674,"lng":-0.037804,"elevation":55.7},{"lat":51.447633,"lng":-0.03779,"elevation":56.1},{"lat":51.447593,"lng":-0.037777,"elevation":56.6},{"lat":51.447554,"lng":-0.037771,"elevation":57},{"lat":51.447516,"lng":-0.037769,"elevation":57.5},{"lat":51.44748,"lng":-0.037781,"elevation":57.9},{"lat":51.447447,"lng":-0.03778,"elevation":58.3},{"lat":51.447412,"lng":-0.037768,"elevation":58.7},{"lat":51.447371,"lng":-0.037766,"elevation":59.1},{"lat":51.447335,"lng":-0.03777,"elevation":59.6},{"lat":51.4473,"lng":-0.037763,"elevation":59.9},{"lat":51.447275,"lng":-0.037729,"elevation":60.1},{"lat":51.447252,"lng":-0.037692,"elevation":60.3},{"lat":51.447223,"lng":-0.037647,"elevation":60.5},{"lat":51.44719,"lng":-0.037589,"elevation":60.6},{"lat":51.447173,"lng":-0.037554,"elevation":60.7},{"lat":51.447156,"lng":-0.03752,"elevation":60.8},{"lat":51.447124,"lng":-0.037451,"elevation":60.9},{"lat":51.447108,"lng":-0.037415,"elevation":60.9},{"lat":51.447085,"lng":-0.037345,"elevation":60.9},{"lat":51.447066,"lng":-0.037274,"elevation":60.6},{"lat":51.447047,"lng":-0.037196,"elevation":60.3},{"lat":51.447037,"lng":-0.037153,"elevation":60.1},{"lat":51.447028,"lng":-0.037098,"elevation":59.9},{"lat":51.447018,"lng":-0.037038,"elevation":59.6},{"lat":51.447007,"lng":-0.036993,"elevation":59.3},{"lat":51.447,"lng":-0.036951,"elevation":59.1},{"lat":51.446983,"lng":-0.036874,"elevation":58.7},{"lat":51.446968,"lng":-0.036803,"elevation":58.3},{"lat":51.446951,"lng":-0.036733,"elevation":58},{"lat":51.446938,"lng":-0.036663,"elevation":57.6},{"lat":51.446927,"lng":-0.036588,"elevation":57.3},{"lat":51.446917,"lng":-0.036515,"elevation":56.9},{"lat":51.446906,"lng":-0.036443,"elevation":56.6},{"lat":51.446898,"lng":-0.036369,"elevation":56.3},{"lat":51.446888,"lng":-0.036295,"elevation":56},{"lat":51.446878,"lng":-0.03622,"elevation":55.7},{"lat":51.446871,"lng":-0.03614,"elevation":55.5},{"lat":51.446868,"lng":-0.036058,"elevation":55.3},{"lat":51.446864,"lng":-0.035977,"elevation":55.2},{"lat":51.446862,"lng":-0.035896,"elevation":55},{"lat":51.44686,"lng":-0.035816,"elevation":54.8},{"lat":51.446859,"lng":-0.035738,"elevation":54.7},{"lat":51.446858,"lng":-0.03566,"elevation":54.5},{"lat":51.446857,"lng":-0.035583,"elevation":54.3},{"lat":51.446856,"lng":-0.03551,"elevation":54.2},{"lat":51.446864,"lng":-0.035442,"elevation":54.1},{"lat":51.446902,"lng":-0.035385,"elevation":53.9},{"lat":51.446955,"lng":-0.035381,"elevation":53.9},{"lat":51.446983,"lng":-0.035389,"elevation":53.9},{"lat":51.447009,"lng":-0.035401,"elevation":54},{"lat":51.447061,"lng":-0.03542,"elevation":54},{"lat":51.447087,"lng":-0.03543,"elevation":54},{"lat":51.447113,"lng":-0.035444,"elevation":53.9},{"lat":51.44714,"lng":-0.03546,"elevation":53.8},{"lat":51.447166,"lng":-0.035479,"elevation":53.7},{"lat":51.447192,"lng":-0.035501,"elevation":53.7},{"lat":51.447217,"lng":-0.035521,"elevation":53.6},{"lat":51.447264,"lng":-0.035547,"elevation":53.4},{"lat":51.44729,"lng":-0.035567,"elevation":53.3},{"lat":51.447315,"lng":-0.03559,"elevation":53.2},{"lat":51.447341,"lng":-0.035613,"elevation":53.2},{"lat":51.447368,"lng":-0.035628,"elevation":53.1},{"lat":51.447394,"lng":-0.035644,"elevation":53},{"lat":51.44742,"lng":-0.035659,"elevation":52.8},{"lat":51.447445,"lng":-0.035677,"elevation":52.8},{"lat":51.44747,"lng":-0.035701,"elevation":52.7},{"lat":51.447495,"lng":-0.035726,"elevation":52.6},{"lat":51.447538,"lng":-0.035766,"elevation":52.4},{"lat":51.44758,"lng":-0.035797,"elevation":52.3},{"lat":51.447623,"lng":-0.035828,"elevation":52.1},{"lat":51.447666,"lng":-0.035859,"elevation":51.9},{"lat":51.447708,"lng":-0.035895,"elevation":51.7},{"lat":51.447752,"lng":-0.035933,"elevation":51.5},{"lat":51.447797,"lng":-0.035973,"elevation":51.3},{"lat":51.447842,"lng":-0.036017,"elevation":51.1},{"lat":51.447884,"lng":-0.036064,"elevation":51},{"lat":51.447924,"lng":-0.036113,"elevation":50.8},{"lat":51.447966,"lng":-0.036161,"elevation":50.5},{"lat":51.448008,"lng":-0.036199,"elevation":50.2},{"lat":51.448049,"lng":-0.036226,"elevation":49.9},{"lat":51.448088,"lng":-0.036261,"elevation":49.6},{"lat":51.448121,"lng":-0.036286,"elevation":49.3},{"lat":51.448154,"lng":-0.036307,"elevation":49},{"lat":51.448195,"lng":-0.036327,"elevation":48.7},{"lat":51.448245,"lng":-0.03635,"elevation":48.3},{"lat":51.448299,"lng":-0.036366,"elevation":47.8},{"lat":51.448343,"lng":-0.036391,"elevation":47.4},{"lat":51.448364,"lng":-0.036455,"elevation":47.2},{"lat":51.448361,"lng":-0.036532,"elevation":47.2},{"lat":51.448367,"lng":-0.036607,"elevation":47.2},{"lat":51.448389,"lng":-0.03668,"elevation":47},{"lat":51.448404,"lng":-0.036752,"elevation":46.8},{"lat":51.448409,"lng":-0.036824,"elevation":46.7},{"lat":51.448416,"lng":-0.036891,"elevation":46.7},{"lat":51.448402,"lng":-0.03696,"elevation":46.8},{"lat":51.448376,"lng":-0.037025,"elevation":47},{"lat":51.448351,"lng":-0.037094,"elevation":47.3},{"lat":51.448333,"lng":-0.037165,"elevation":47.5},{"lat":51.448317,"lng":-0.037235,"elevation":47.7},{"lat":51.4483,"lng":-0.037306,"elevation":47.9},{"lat":51.448294,"lng":-0.037381,"elevation":48},{"lat":51.448282,"lng":-0.03745,"elevation":48.1},{"lat":51.448271,"lng":-0.037516,"elevation":48.3},{"lat":51.448256,"lng":-0.037579,"elevation":48.4},{"lat":51.448238,"lng":-0.03764,"elevation":48.7},{"lat":51.44821,"lng":-0.037699,"elevation":49.1},{"lat":51.448176,"lng":-0.037756,"elevation":49.5},{"lat":51.448158,"lng":-0.037821,"elevation":49.8},{"lat":51.448159,"lng":-0.03789,"elevation":49.8},{"lat":51.448135,"lng":-0.037933,"elevation":50},{"lat":51.448101,"lng":-0.037928,"elevation":50.5},{"lat":51.44807,"lng":-0.037902,"elevation":51},{"lat":51.448031,"lng":-0.037878,"elevation":51.5},{"lat":51.447991,"lng":-0.037867,"elevation":52},{"lat":51.447959,"lng":-0.037865,"elevation":52.4},{"lat":51.447921,"lng":-0.037858,"elevation":52.9},{"lat":51.447882,"lng":-0.037849,"elevation":53.3},{"lat":51.447847,"lng":-0.037842,"elevation":53.7},{"lat":51.447808,"lng":-0.037844,"elevation":54.2},{"lat":51.447769,"lng":-0.037833,"elevation":54.6},{"lat":51.447725,"lng":-0.037818,"elevation":55.1},{"lat":51.447676,"lng":-0.037803,"elevation":55.7},{"lat":51.447629,"lng":-0.037796,"elevation":56.2},{"lat":51.447594,"lng":-0.037783,"elevation":56.6},{"lat":51.447553,"lng":-0.037775,"elevation":57},{"lat":51.447512,"lng":-0.037769,"elevation":57.5},{"lat":51.447473,"lng":-0.037758,"elevation":57.9},{"lat":51.447435,"lng":-0.037741,"elevation":58.3},{"lat":51.447401,"lng":-0.037725,"elevation":58.7},{"lat":51.447366,"lng":-0.037717,"elevation":59.1},{"lat":51.447334,"lng":-0.037718,"elevation":59.4},{"lat":51.447299,"lng":-0.037715,"elevation":59.8},{"lat":51.44727,"lng":-0.037695,"elevation":60.1},{"lat":51.447248,"lng":-0.037644,"elevation":60.2},{"lat":51.447222,"lng":-0.037587,"elevation":60.3},{"lat":51.447193,"lng":-0.03753,"elevation":60.4},{"lat":51.44716,"lng":-0.037458,"elevation":60.5},{"lat":51.447143,"lng":-0.03742,"elevation":60.6},{"lat":51.447128,"lng":-0.037375,"elevation":60.6},{"lat":51.447115,"lng":-0.037335,"elevation":60.6},{"lat":51.447102,"lng":-0.037295,"elevation":60.6},{"lat":51.44709,"lng":-0.037254,"elevation":60.5},{"lat":51.447067,"lng":-0.037181,"elevation":60.3},{"lat":51.447047,"lng":-0.037111,"elevation":60},{"lat":51.447028,"lng":-0.03704,"elevation":59.6},{"lat":51.447002,"lng":-0.036974,"elevation":59.2},{"lat":51.446978,"lng":-0.036909,"elevation":58.8},{"lat":51.446955,"lng":-0.036848,"elevation":58.5},{"lat":51.446938,"lng":-0.036777,"elevation":58.1},{"lat":51.446943,"lng":-0.03671,"elevation":57.9},{"lat":51.44695,"lng":-0.036632,"elevation":57.5},{"lat":51.446944,"lng":-0.036589,"elevation":57.3},{"lat":51.446936,"lng":-0.036503,"elevation":56.9},{"lat":51.446931,"lng":-0.03646,"elevation":56.7},{"lat":51.446926,"lng":-0.036377,"elevation":56.4},{"lat":51.446921,"lng":-0.0363,"elevation":56},{"lat":51.446912,"lng":-0.036235,"elevation":55.8},{"lat":51.446904,"lng":-0.03617,"elevation":55.6},{"lat":51.4469,"lng":-0.036101,"elevation":55.5},{"lat":51.446891,"lng":-0.036034,"elevation":55.3},{"lat":51.446889,"lng":-0.035955,"elevation":55.1},{"lat":51.446886,"lng":-0.035877,"elevation":55},{"lat":51.446889,"lng":-0.035831,"elevation":54.9},{"lat":51.446889,"lng":-0.035786,"elevation":54.8},{"lat":51.446887,"lng":-0.035697,"elevation":54.6},{"lat":51.446891,"lng":-0.035651,"elevation":54.5},{"lat":51.446905,"lng":-0.035554,"elevation":54.3},{"lat":51.446914,"lng":-0.035503,"elevation":54.2},{"lat":51.446921,"lng":-0.035459,"elevation":54.1},{"lat":51.446933,"lng":-0.035384,"elevation":53.9},{"lat":51.44695,"lng":-0.035317,"elevation":53.8},{"lat":51.446975,"lng":-0.035339,"elevation":53.8},{"lat":51.447021,"lng":-0.03536,"elevation":53.9},{"lat":51.447072,"lng":-0.035394,"elevation":53.9},{"lat":51.447097,"lng":-0.035412,"elevation":53.9},{"lat":51.447123,"lng":-0.035429,"elevation":53.8},{"lat":51.447148,"lng":-0.035446,"elevation":53.8},{"lat":51.447197,"lng":-0.035477,"elevation":53.6},{"lat":51.447222,"lng":-0.035495,"elevation":53.5},{"lat":51.447271,"lng":-0.035522,"elevation":53.3},{"lat":51.447321,"lng":-0.035552,"elevation":53.1},{"lat":51.447368,"lng":-0.035585,"elevation":53},{"lat":51.447416,"lng":-0.035608,"elevation":52.8},{"lat":51.447459,"lng":-0.035635,"elevation":52.6},{"lat":51.447499,"lng":-0.035664,"elevation":52.5},{"lat":51.44754,"lng":-0.0357,"elevation":52.3},{"lat":51.447585,"lng":-0.035736,"elevation":52.1},{"lat":51.447633,"lng":-0.035773,"elevation":51.9},{"lat":51.447681,"lng":-0.035809,"elevation":51.7},{"lat":51.447728,"lng":-0.035852,"elevation":51.5},{"lat":51.447752,"lng":-0.035875,"elevation":51.4},{"lat":51.447777,"lng":-0.035899,"elevation":51.3},{"lat":51.447826,"lng":-0.035948,"elevation":51.1},{"lat":51.447874,"lng":-0.035992,"elevation":50.9},{"lat":51.447921,"lng":-0.036034,"elevation":50.7},{"lat":51.447945,"lng":-0.036057,"elevation":50.5},{"lat":51.447969,"lng":-0.036081,"elevation":50.4},{"lat":51.447992,"lng":-0.036106,"elevation":50.2},{"lat":51.448014,"lng":-0.036131,"elevation":50},{"lat":51.448037,"lng":-0.036158,"elevation":49.9},{"lat":51.448061,"lng":-0.036186,"elevation":49.7},{"lat":51.448107,"lng":-0.036243,"elevation":49.4},{"lat":51.448144,"lng":-0.036284,"elevation":49.1},{"lat":51.448181,"lng":-0.036326,"elevation":48.8},{"lat":51.448226,"lng":-0.036361,"elevation":48.4},{"lat":51.448276,"lng":-0.036376,"elevation":48},{"lat":51.448329,"lng":-0.036368,"elevation":47.5},{"lat":51.448378,"lng":-0.036369,"elevation":47.1},{"lat":51.448417,"lng":-0.036421,"elevation":46.8},{"lat":51.448432,"lng":-0.036504,"elevation":46.6},{"lat":51.448441,"lng":-0.036583,"elevation":46.5},{"lat":51.448454,"lng":-0.03666,"elevation":46.3},{"lat":51.448469,"lng":-0.036736,"elevation":46.2},{"lat":51.448466,"lng":-0.036821,"elevation":46.2},{"lat":51.448466,"lng":-0.036865,"elevation":46.2},{"lat":51.448448,"lng":-0.036946,"elevation":46.3},{"lat":51.44843,"lng":-0.036983,"elevation":46.5},{"lat":51.44841,"lng":-0.037016,"elevation":46.7},{"lat":51.448383,"lng":-0.037082,"elevation":47},{"lat":51.448361,"lng":-0.037151,"elevation":47.2},{"lat":51.448356,"lng":-0.037223,"elevation":47.2},{"lat":51.448345,"lng":-0.037286,"elevation":47.4},{"lat":51.44832,"lng":-0.037346,"elevation":47.7},{"lat":51.448302,"lng":-0.037415,"elevation":47.9},{"lat":51.448286,"lng":-0.037492,"elevation":48.1},{"lat":51.448271,"lng":-0.037565,"elevation":48.3},{"lat":51.448261,"lng":-0.037642,"elevation":48.4},{"lat":51.448255,"lng":-0.037716,"elevation":48.5},{"lat":51.448243,"lng":-0.03779,"elevation":48.7},{"lat":51.448222,"lng":-0.037861,"elevation":49},{"lat":51.448198,"lng":-0.037925,"elevation":49.3},{"lat":51.448176,"lng":-0.03799,"elevation":49.3},{"lat":51.44816,"lng":-0.038058,"elevation":49.2},{"lat":51.44815,"lng":-0.03813,"elevation":49},{"lat":51.448132,"lng":-0.038202,"elevation":49},{"lat":51.448112,"lng":-0.03827,"elevation":48.9},{"lat":51.448093,"lng":-0.038345,"elevation":48.8},{"lat":51.448076,"lng":-0.038421,"elevation":48.7},{"lat":51.448057,"lng":-0.038494,"elevation":48.6},{"lat":51.448049,"lng":-0.03857,"elevation":48.4},{"lat":51.448025,"lng":-0.038638,"elevation":48.3},{"lat":51.447989,"lng":-0.038698,"elevation":48.5},{"lat":51.447965,"lng":-0.038767,"elevation":48.4},{"lat":51.447953,"lng":-0.038841,"elevation":48.2},{"lat":51.44794,"lng":-0.038915,"elevation":48},{"lat":51.447929,"lng":-0.038988,"elevation":47.7},{"lat":51.447904,"lng":-0.039056,"elevation":47.7},{"lat":51.447877,"lng":-0.039122,"elevation":47.7},{"lat":51.447852,"lng":-0.039183,"elevation":47.7},{"lat":51.447827,"lng":-0.039239,"elevation":47.7},{"lat":51.447808,"lng":-0.039303,"elevation":47.6},{"lat":51.447794,"lng":-0.039372,"elevation":47.5},{"lat":51.44779,"lng":-0.039448,"elevation":47.2},{"lat":51.447782,"lng":-0.039523,"elevation":46.9},{"lat":51.447756,"lng":-0.039588,"elevation":46.9},{"lat":51.44773,"lng":-0.039651,"elevation":46.9},{"lat":51.447716,"lng":-0.039723,"elevation":46.7},{"lat":51.447706,"lng":-0.039798,"elevation":46.5},{"lat":51.4477,"lng":-0.039876,"elevation":46.2},{"lat":51.447691,"lng":-0.039953,"elevation":45.9},{"lat":51.447674,"lng":-0.040027,"elevation":45.7},{"lat":51.447645,"lng":-0.040095,"elevation":45.6},{"lat":51.447619,"lng":-0.040162,"elevation":45.5},{"lat":51.447601,"lng":-0.040232,"elevation":45.3},{"lat":51.447594,"lng":-0.040312,"elevation":44.9},{"lat":51.447586,"lng":-0.040394,"elevation":44.5},{"lat":51.447567,"lng":-0.040471,"elevation":44.3},{"lat":51.447551,"lng":-0.040549,"elevation":44},{"lat":51.447536,"lng":-0.040625,"elevation":43.8},{"lat":51.447518,"lng":-0.040703,"elevation":43.5},{"lat":51.447506,"lng":-0.040779,"elevation":43.2},{"lat":51.447508,"lng":-0.040856,"elevation":42.9},{"lat":51.447485,"lng":-0.040922,"elevation":42.6},{"lat":51.447468,"lng":-0.040987,"elevation":42.4},{"lat":51.447456,"lng":-0.041057,"elevation":42.1},{"lat":51.447448,"lng":-0.041125,"elevation":41.8},{"lat":51.447438,"lng":-0.041187,"elevation":41.5},{"lat":51.447428,"lng":-0.041243,"elevation":41.2},{"lat":51.447417,"lng":-0.041308,"elevation":41.2},{"lat":51.447397,"lng":-0.04138,"elevation":41.1},{"lat":51.447381,"lng":-0.041457,"elevation":41.1},{"lat":51.447355,"lng":-0.04152,"elevation":41.1},{"lat":51.447315,"lng":-0.041574,"elevation":41.2},{"lat":51.44729,"lng":-0.041602,"elevation":41.2},{"lat":51.447238,"lng":-0.041658,"elevation":41.2},{"lat":51.447214,"lng":-0.041686,"elevation":41.2},{"lat":51.44719,"lng":-0.041714,"elevation":41.3},{"lat":51.447166,"lng":-0.041739,"elevation":41.3},{"lat":51.447142,"lng":-0.041766,"elevation":41.3},{"lat":51.44712,"lng":-0.041792,"elevation":41.3},{"lat":51.447084,"lng":-0.041848,"elevation":41.3},{"lat":51.447047,"lng":-0.041904,"elevation":41.2},{"lat":51.447001,"lng":-0.04194,"elevation":41.1},{"lat":51.446957,"lng":-0.041971,"elevation":41},{"lat":51.446931,"lng":-0.041989,"elevation":41},{"lat":51.446884,"lng":-0.042015,"elevation":40.9},{"lat":51.446832,"lng":-0.042041,"elevation":40.8},{"lat":51.446786,"lng":-0.042083,"elevation":40.6},{"lat":51.446763,"lng":-0.042108,"elevation":40.6},{"lat":51.446721,"lng":-0.042162,"elevation":40.4},{"lat":51.4467,"lng":-0.04219,"elevation":40.4},{"lat":51.446678,"lng":-0.042217,"elevation":40.3},{"lat":51.446656,"lng":-0.042241,"elevation":40.2},{"lat":51.446616,"lng":-0.042296,"elevation":40},{"lat":51.446575,"lng":-0.042347,"elevation":39.9},{"lat":51.446533,"lng":-0.042391,"elevation":39.7},{"lat":51.446489,"lng":-0.042424,"elevation":39.6},{"lat":51.446446,"lng":-0.042441,"elevation":39.5},{"lat":51.446397,"lng":-0.042448,"elevation":39.4},{"lat":51.44637,"lng":-0.042453,"elevation":39.3},{"lat":51.44632,"lng":-0.042464,"elevation":39.2},{"lat":51.446273,"lng":-0.042462,"elevation":39.1},{"lat":51.446226,"lng":-0.042451,"elevation":39},{"lat":51.446179,"lng":-0.042445,"elevation":38.9},{"lat":51.446132,"lng":-0.04243,"elevation":38.8},{"lat":51.446079,"lng":-0.042428,"elevation":38.6},{"lat":51.446023,"lng":-0.042434,"elevation":38.5},{"lat":51.445993,"lng":-0.042436,"elevation":38.4},{"lat":51.445965,"lng":-0.042436,"elevation":38.3},{"lat":51.445913,"lng":-0.042445,"elevation":38.1},{"lat":51.445885,"lng":-0.042449,"elevation":38},{"lat":51.445832,"lng":-0.042447,"elevation":37.8},{"lat":51.445776,"lng":-0.042452,"elevation":37.7},{"lat":51.445726,"lng":-0.04246,"elevation":37.5},{"lat":51.445685,"lng":-0.042472,"elevation":37.3},{"lat":51.44565,"lng":-0.042463,"elevation":37.3},{"lat":51.445606,"lng":-0.042463,"elevation":37.1},{"lat":51.445564,"lng":-0.042461,"elevation":37},{"lat":51.44551,"lng":-0.042466,"elevation":36.8},{"lat":51.445481,"lng":-0.042473,"elevation":36.7},{"lat":51.445447,"lng":-0.042472,"elevation":36.6},{"lat":51.445387,"lng":-0.042475,"elevation":36.5},{"lat":51.445336,"lng":-0.042501,"elevation":36.5},{"lat":51.445292,"lng":-0.042509,"elevation":36.4},{"lat":51.445263,"lng":-0.042508,"elevation":36.4},{"lat":51.445255,"lng":-0.042553,"elevation":36.4},{"lat":51.445272,"lng":-0.042607,"elevation":36.3},{"lat":51.445289,"lng":-0.042644,"elevation":36.3},{"lat":51.445317,"lng":-0.042673,"elevation":36.3},{"lat":51.445318,"lng":-0.042724,"elevation":36.2},{"lat":51.445322,"lng":-0.042786,"elevation":36.1},{"lat":51.445327,"lng":-0.042836,"elevation":36.1},{"lat":51.445328,"lng":-0.042894,"elevation":36},{"lat":51.445325,"lng":-0.042955,"elevation":36.1},{"lat":51.445325,"lng":-0.043013,"elevation":36.2},{"lat":51.445324,"lng":-0.043069,"elevation":36.3},{"lat":51.445329,"lng":-0.043122,"elevation":36.5},{"lat":51.445333,"lng":-0.043176,"elevation":36.6},{"lat":51.445333,"lng":-0.043224,"elevation":36.7},{"lat":51.445341,"lng":-0.043268,"elevation":36.8},{"lat":51.445347,"lng":-0.043323,"elevation":36.9},{"lat":51.445348,"lng":-0.04337,"elevation":37},{"lat":51.445349,"lng":-0.043419,"elevation":37.2},{"lat":51.445356,"lng":-0.043474,"elevation":37.3},{"lat":51.445363,"lng":-0.043529,"elevation":37.4},{"lat":51.445363,"lng":-0.043579,"elevation":37.5},{"lat":51.445357,"lng":-0.043626,"elevation":37.6},{"lat":51.445355,"lng":-0.04367,"elevation":37.7},{"lat":51.445357,"lng":-0.043714,"elevation":37.8},{"lat":51.445357,"lng":-0.043776,"elevation":38},{"lat":51.445344,"lng":-0.043828,"elevation":38.1},{"lat":51.44534,"lng":-0.043875,"elevation":38.2},{"lat":51.445333,"lng":-0.043921,"elevation":38.3},{"lat":51.44533,"lng":-0.043984,"elevation":38.4},{"lat":51.445333,"lng":-0.044029,"elevation":38.5},{"lat":51.445331,"lng":-0.044086,"elevation":38.7},{"lat":51.445328,"lng":-0.044137,"elevation":38.8},{"lat":51.445329,"lng":-0.044184,"elevation":38.9},{"lat":51.445331,"lng":-0.044233,"elevation":39},{"lat":51.445333,"lng":-0.044282,"elevation":39.1},{"lat":51.445331,"lng":-0.044328,"elevation":39.2},{"lat":51.445329,"lng":-0.044377,"elevation":39.3},{"lat":51.445334,"lng":-0.044426,"elevation":39.4},{"lat":51.445338,"lng":-0.044475,"elevation":39.6},{"lat":51.445338,"lng":-0.044521,"elevation":39.7},{"lat":51.445351,"lng":-0.044566,"elevation":39.8},{"lat":51.445349,"lng":-0.044618,"elevation":39.9},{"lat":51.445354,"lng":-0.044663,"elevation":40},{"lat":51.445323,"lng":-0.044703,"elevation":40},{"lat":51.445291,"lng":-0.044706,"elevation":40},{"lat":51.445264,"lng":-0.044706,"elevation":39.9}],[{"lat":51.445773,"lng":-0.044227,"elevation":39.8},{"lat":51.445413,"lng":-0.0443,"elevation":39.3},{"lat":51.445331,"lng":-0.044587,"elevation":39.8},{"lat":51.445348,"lng":-0.044747,"elevation":40.2},{"lat":51.445361,"lng":-0.044704,"elevation":40.1},{"lat":51.445395,"lng":-0.044737,"elevation":40.3},{"lat":51.445399,"lng":-0.044691,"elevation":40.2},{"lat":51.445398,"lng":-0.044643,"elevation":40.1},{"lat":51.445404,"lng":-0.044589,"elevation":40},{"lat":51.445402,"lng":-0.044537,"elevation":39.9},{"lat":51.445402,"lng":-0.044483,"elevation":39.7},{"lat":51.445406,"lng":-0.044434,"elevation":39.6},{"lat":51.445403,"lng":-0.044388,"elevation":39.5},{"lat":51.445401,"lng":-0.044342,"elevation":39.4},{"lat":51.445397,"lng":-0.044293,"elevation":39.3},{"lat":51.445395,"lng":-0.044245,"elevation":39.1},{"lat":51.445396,"lng":-0.044199,"elevation":39},{"lat":51.44539,"lng":-0.044156,"elevation":38.9},{"lat":51.445389,"lng":-0.044091,"elevation":38.8},{"lat":51.445387,"lng":-0.044044,"elevation":38.7},{"lat":51.445375,"lng":-0.043998,"elevation":38.5},{"lat":51.445369,"lng":-0.043951,"elevation":38.4},{"lat":51.445366,"lng":-0.043905,"elevation":38.3},{"lat":51.445366,"lng":-0.043862,"elevation":38.2},{"lat":51.445368,"lng":-0.043817,"elevation":38.1},{"lat":51.445366,"lng":-0.04377,"elevation":38},{"lat":51.445361,"lng":-0.043721,"elevation":37.9},{"lat":51.445357,"lng":-0.04367,"elevation":37.7},{"lat":51.445351,"lng":-0.043619,"elevation":37.6},{"lat":51.445349,"lng":-0.043568,"elevation":37.5},{"lat":51.445352,"lng":-0.043511,"elevation":37.4},{"lat":51.44535,"lng":-0.04345,"elevation":37.2},{"lat":51.445347,"lng":-0.043399,"elevation":37.1},{"lat":51.44535,"lng":-0.043349,"elevation":37},{"lat":51.445353,"lng":-0.04329,"elevation":36.9},{"lat":51.445352,"lng":-0.043244,"elevation":36.8},{"lat":51.445348,"lng":-0.043198,"elevation":36.6},{"lat":51.445341,"lng":-0.043149,"elevation":36.5},{"lat":51.445337,"lng":-0.043101,"elevation":36.4},{"lat":51.44534,"lng":-0.043053,"elevation":36.3},{"lat":51.445341,"lng":-0.043008,"elevation":36.2},{"lat":51.445342,"lng":-0.042964,"elevation":36.1},{"lat":51.445343,"lng":-0.042918,"elevation":36},{"lat":51.445345,"lng":-0.042874,"elevation":36},{"lat":51.445355,"lng":-0.042831,"elevation":36.1},{"lat":51.445367,"lng":-0.042784,"elevation":36.1},{"lat":51.445359,"lng":-0.042737,"elevation":36.2},{"lat":51.44533,"lng":-0.042736,"elevation":36.2},{"lat":51.445299,"lng":-0.04275,"elevation":36.2},{"lat":51.445273,"lng":-0.042712,"elevation":36.2},{"lat":51.445269,"lng":-0.042661,"elevation":36.3},{"lat":51.445271,"lng":-0.04261,"elevation":36.3},{"lat":51.445279,"lng":-0.042562,"elevation":36.4},{"lat":51.445301,"lng":-0.042533,"elevation":36.4},{"lat":51.445328,"lng":-0.042519,"elevation":36.4},{"lat":51.445365,"lng":-0.042513,"elevation":36.5},{"lat":51.445403,"lng":-0.042505,"elevation":36.5},{"lat":51.445438,"lng":-0.042475,"elevation":36.6},{"lat":51.445456,"lng":-0.042442,"elevation":36.7},{"lat":51.445463,"lng":-0.042399,"elevation":36.8},{"lat":51.445463,"lng":-0.042356,"elevation":36.8},{"lat":51.445462,"lng":-0.042312,"elevation":36.9},{"lat":51.445462,"lng":-0.042269,"elevation":36.9},{"lat":51.445466,"lng":-0.042206,"elevation":37},{"lat":51.445467,"lng":-0.042163,"elevation":37.1},{"lat":51.445477,"lng":-0.042117,"elevation":37.2},{"lat":51.445484,"lng":-0.042069,"elevation":37.3},{"lat":51.445488,"lng":-0.042022,"elevation":37.3},{"lat":51.445493,"lng":-0.041972,"elevation":37.4},{"lat":51.445498,"lng":-0.041922,"elevation":37.5},{"lat":51.445504,"lng":-0.041877,"elevation":37.6},{"lat":51.445511,"lng":-0.041832,"elevation":37.7},{"lat":51.445516,"lng":-0.041784,"elevation":37.8},{"lat":51.445516,"lng":-0.041739,"elevation":37.8},{"lat":51.445523,"lng":-0.041676,"elevation":37.9},{"lat":51.445527,"lng":-0.041614,"elevation":38},{"lat":51.445527,"lng":-0.041571,"elevation":38.1},{"lat":51.44553,"lng":-0.041508,"elevation":38.2},{"lat":51.445538,"lng":-0.041447,"elevation":38.3},{"lat":51.445542,"lng":-0.041403,"elevation":38.4},{"lat":51.445544,"lng":-0.041359,"elevation":38.5},{"lat":51.445547,"lng":-0.041316,"elevation":38.5},{"lat":51.44555,"lng":-0.041272,"elevation":38.6},{"lat":51.445553,"lng":-0.041227,"elevation":38.8},{"lat":51.445557,"lng":-0.041165,"elevation":39.2},{"lat":51.445559,"lng":-0.041102,"elevation":39.6},{"lat":51.445564,"lng":-0.041056,"elevation":39.9},{"lat":51.445569,"lng":-0.041008,"elevation":40.2},{"lat":51.445572,"lng":-0.040964,"elevation":40.5},{"lat":51.445578,"lng":-0.04092,"elevation":40.8},{"lat":51.445582,"lng":-0.040874,"elevation":41.1},{"lat":51.445587,"lng":-0.040828,"elevation":41.5},{"lat":51.445589,"lng":-0.040765,"elevation":41.9},{"lat":51.445589,"lng":-0.040702,"elevation":42.3},{"lat":51.44559,"lng":-0.040659,"elevation":42.5},{"lat":51.445596,"lng":-0.0406,"elevation":42.9},{"lat":51.445597,"lng":-0.040545,"elevation":43.3},{"lat":51.4456,"lng":-0.040491,"elevation":43.6},{"lat":51.445607,"lng":-0.040432,"elevation":44},{"lat":51.445614,"lng":-0.040377,"elevation":44.5},{"lat":51.445616,"lng":-0.040321,"elevation":44.9},{"lat":51.445619,"lng":-0.040269,"elevation":45.3},{"lat":51.445624,"lng":-0.040216,"elevation":45.7},{"lat":51.445625,"lng":-0.040161,"elevation":46.2},{"lat":51.44563,"lng":-0.040105,"elevation":46.6},{"lat":51.445633,"lng":-0.040047,"elevation":47.1},{"lat":51.445633,"lng":-0.039988,"elevation":47.5},{"lat":51.445633,"lng":-0.039932,"elevation":47.9},{"lat":51.445636,"lng":-0.039877,"elevation":48.4},{"lat":51.445642,"lng":-0.039823,"elevation":48.8},{"lat":51.445648,"lng":-0.039763,"elevation":49.3},{"lat":51.445654,"lng":-0.039703,"elevation":49.8},{"lat":51.445653,"lng":-0.039641,"elevation":50.3},{"lat":51.445657,"lng":-0.039576,"elevation":50.7},{"lat":51.445664,"lng":-0.039532,"elevation":50.8},{"lat":51.445674,"lng":-0.039492,"elevation":50.9},{"lat":51.445687,"lng":-0.039453,"elevation":51},{"lat":51.445705,"lng":-0.03942,"elevation":51.2},{"lat":51.445727,"lng":-0.039393,"elevation":51.4},{"lat":51.44575,"lng":-0.039343,"elevation":51.6},{"lat":51.445775,"lng":-0.039289,"elevation":51.9},{"lat":51.445788,"lng":-0.039231,"elevation":52.1},{"lat":51.445803,"lng":-0.03918,"elevation":52.2},{"lat":51.44582,"lng":-0.039115,"elevation":52.4},{"lat":51.445833,"lng":-0.039044,"elevation":52.6},{"lat":51.44584,"lng":-0.039001,"elevation":52.8},{"lat":51.445852,"lng":-0.038916,"elevation":53},{"lat":51.445867,"lng":-0.038838,"elevation":53.2},{"lat":51.445877,"lng":-0.038771,"elevation":53.4},{"lat":51.445883,"lng":-0.038696,"elevation":53.6},{"lat":51.445884,"lng":-0.038614,"elevation":53.7},{"lat":51.445888,"lng":-0.038536,"elevation":53.9},{"lat":51.445897,"lng":-0.038468,"elevation":54.1},{"lat":51.4459,"lng":-0.038407,"elevation":54.3},{"lat":51.445908,"lng":-0.038343,"elevation":54.5},{"lat":51.445912,"lng":-0.038276,"elevation":54.7},{"lat":51.445918,"lng":-0.038213,"elevation":54.8},{"lat":51.445929,"lng":-0.038146,"elevation":55.1},{"lat":51.445939,"lng":-0.038079,"elevation":55.3},{"lat":51.445952,"lng":-0.038013,"elevation":55.6},{"lat":51.445963,"lng":-0.037948,"elevation":55.8},{"lat":51.445969,"lng":-0.037881,"elevation":55.9},{"lat":51.445985,"lng":-0.037819,"elevation":55.9},{"lat":51.446004,"lng":-0.037765,"elevation":56},{"lat":51.446015,"lng":-0.037713,"elevation":56},{"lat":51.446035,"lng":-0.03767,"elevation":56.2},{"lat":51.44607,"lng":-0.037642,"elevation":56.5},{"lat":51.446102,"lng":-0.03762,"elevation":56.8},{"lat":51.446136,"lng":-0.037603,"elevation":57.1},{"lat":51.446175,"lng":-0.037596,"elevation":57.5},{"lat":51.446214,"lng":-0.03758,"elevation":57.8},{"lat":51.446255,"lng":-0.037571,"elevation":58.2},{"lat":51.446297,"lng":-0.037576,"elevation":58.4},{"lat":51.446342,"lng":-0.037588,"elevation":58.6},{"lat":51.446393,"lng":-0.0376,"elevation":58.9},{"lat":51.446448,"lng":-0.037604,"elevation":59.1},{"lat":51.446499,"lng":-0.037611,"elevation":59.4},{"lat":51.446547,"lng":-0.037615,"elevation":59.6},{"lat":51.446594,"lng":-0.037642,"elevation":59.9},{"lat":51.446641,"lng":-0.037662,"elevation":60.1},{"lat":51.446688,"lng":-0.037684,"elevation":60.4},{"lat":51.446736,"lng":-0.037703,"elevation":60.7},{"lat":51.446782,"lng":-0.037715,"elevation":60.9},{"lat":51.446829,"lng":-0.037723,"elevation":61.2},{"lat":51.446878,"lng":-0.037729,"elevation":61.4},{"lat":51.446928,"lng":-0.037745,"elevation":61.7},{"lat":51.446956,"lng":-0.03775,"elevation":61.8},{"lat":51.446999,"lng":-0.037742,"elevation":62},{"lat":51.447047,"lng":-0.037738,"elevation":62.2},{"lat":51.447096,"lng":-0.037728,"elevation":62.2},{"lat":51.447145,"lng":-0.037725,"elevation":61.6},{"lat":51.447192,"lng":-0.03773,"elevation":61.1},{"lat":51.447236,"lng":-0.03774,"elevation":60.6},{"lat":51.447246,"lng":-0.037691,"elevation":60.3},{"lat":51.447209,"lng":-0.037625,"elevation":60.5},{"lat":51.447184,"lng":-0.037562,"elevation":60.6},{"lat":51.447167,"lng":-0.037496,"elevation":60.6},{"lat":51.447145,"lng":-0.037428,"elevation":60.6},{"lat":51.447121,"lng":-0.037353,"elevation":60.6},{"lat":51.447099,"lng":-0.037274,"elevation":60.5},{"lat":51.447089,"lng":-0.037226,"elevation":60.5},{"lat":51.447081,"lng":-0.037183,"elevation":60.4},{"lat":51.447065,"lng":-0.037096,"elevation":60},{"lat":51.44705,"lng":-0.037009,"elevation":59.5},{"lat":51.447036,"lng":-0.036925,"elevation":59.1},{"lat":51.447024,"lng":-0.03684,"elevation":58.7},{"lat":51.44701,"lng":-0.036761,"elevation":58.3},{"lat":51.446997,"lng":-0.036682,"elevation":57.9},{"lat":51.446985,"lng":-0.036604,"elevation":57.5},{"lat":51.446971,"lng":-0.036531,"elevation":57.1},{"lat":51.446962,"lng":-0.036457,"elevation":56.8},{"lat":51.446958,"lng":-0.036385,"elevation":56.4},{"lat":51.446948,"lng":-0.03631,"elevation":56.1},{"lat":51.446941,"lng":-0.036236,"elevation":55.8},{"lat":51.446934,"lng":-0.036161,"elevation":55.6},{"lat":51.446934,"lng":-0.036082,"elevation":55.5},{"lat":51.446937,"lng":-0.035998,"elevation":55.3},{"lat":51.446933,"lng":-0.035916,"elevation":55.1},{"lat":51.44693,"lng":-0.035835,"elevation":54.9},{"lat":51.446929,"lng":-0.035755,"elevation":54.7},{"lat":51.446932,"lng":-0.035675,"elevation":54.6},{"lat":51.446933,"lng":-0.035594,"elevation":54.4},{"lat":51.446932,"lng":-0.035513,"elevation":54.2},{"lat":51.446937,"lng":-0.035436,"elevation":54},{"lat":51.446963,"lng":-0.035371,"elevation":53.9},{"lat":51.447016,"lng":-0.035348,"elevation":53.8},{"lat":51.447069,"lng":-0.035362,"elevation":53.9},{"lat":51.447119,"lng":-0.035387,"elevation":53.8},{"lat":51.447168,"lng":-0.035414,"elevation":53.6},{"lat":51.447218,"lng":-0.035443,"elevation":53.4},{"lat":51.447266,"lng":-0.03547,"elevation":53.2},{"lat":51.447315,"lng":-0.035499,"elevation":53.1},{"lat":51.44736,"lng":-0.035525,"elevation":52.9},{"lat":51.447409,"lng":-0.035562,"elevation":52.7},{"lat":51.447458,"lng":-0.035608,"elevation":52.6},{"lat":51.447507,"lng":-0.035653,"elevation":52.4},{"lat":51.447553,"lng":-0.035696,"elevation":52.2},{"lat":51.447598,"lng":-0.035735,"elevation":52.1},{"lat":51.447642,"lng":-0.035772,"elevation":51.9},{"lat":51.447685,"lng":-0.035809,"elevation":51.7},{"lat":51.447727,"lng":-0.035844,"elevation":51.5},{"lat":51.44777,"lng":-0.03588,"elevation":51.4},{"lat":51.447812,"lng":-0.035913,"elevation":51.2},{"lat":51.447853,"lng":-0.035952,"elevation":51},{"lat":51.447892,"lng":-0.035993,"elevation":50.8},{"lat":51.447933,"lng":-0.036038,"elevation":50.6},{"lat":51.447955,"lng":-0.036062,"elevation":50.5},{"lat":51.447997,"lng":-0.036107,"elevation":50.2},{"lat":51.448039,"lng":-0.036139,"elevation":49.8},{"lat":51.448082,"lng":-0.03617,"elevation":49.5},{"lat":51.448125,"lng":-0.03621,"elevation":49.2},{"lat":51.44817,"lng":-0.036251,"elevation":48.9},{"lat":51.448212,"lng":-0.036295,"elevation":48.5},{"lat":51.448261,"lng":-0.036319,"elevation":48.1},{"lat":51.448313,"lng":-0.036319,"elevation":47.7},{"lat":51.448361,"lng":-0.036326,"elevation":47.3},{"lat":51.448383,"lng":-0.036378,"elevation":47.1},{"lat":51.448387,"lng":-0.036449,"elevation":47},{"lat":51.448393,"lng":-0.036516,"elevation":47},{"lat":51.448407,"lng":-0.036579,"elevation":46.8},{"lat":51.448417,"lng":-0.036649,"elevation":46.7},{"lat":51.448413,"lng":-0.036719,"elevation":46.7},{"lat":51.448416,"lng":-0.036784,"elevation":46.7},{"lat":51.448409,"lng":-0.036828,"elevation":46.7},{"lat":51.448401,"lng":-0.036871,"elevation":46.8},{"lat":51.448389,"lng":-0.03691,"elevation":46.9},{"lat":51.448367,"lng":-0.036979,"elevation":47.1},{"lat":51.448342,"lng":-0.037034,"elevation":47.4},{"lat":51.448332,"lng":-0.037104,"elevation":47.5},{"lat":51.448318,"lng":-0.03717,"elevation":47.7},{"lat":51.448303,"lng":-0.037232,"elevation":47.8},{"lat":51.448289,"lng":-0.037296,"elevation":48},{"lat":51.448275,"lng":-0.037355,"elevation":48.2},{"lat":51.448271,"lng":-0.037424,"elevation":48.2},{"lat":51.448259,"lng":-0.037495,"elevation":48.4},{"lat":51.44824,"lng":-0.037568,"elevation":48.6},{"lat":51.448221,"lng":-0.037643,"elevation":48.9},{"lat":51.4482,"lng":-0.037717,"elevation":49.2},{"lat":51.44819,"lng":-0.037758,"elevation":49.3},{"lat":51.448169,"lng":-0.037831,"elevation":49.6},{"lat":51.448143,"lng":-0.037893,"elevation":50},{"lat":51.448112,"lng":-0.037918,"elevation":50.4},{"lat":51.448083,"lng":-0.037916,"elevation":50.8},{"lat":51.448053,"lng":-0.037913,"elevation":51.2},{"lat":51.44802,"lng":-0.037909,"elevation":51.6},{"lat":51.447986,"lng":-0.037898,"elevation":52.1},{"lat":51.447952,"lng":-0.037889,"elevation":52.5},{"lat":51.447917,"lng":-0.037881,"elevation":53},{"lat":51.447881,"lng":-0.037877,"elevation":53.4},{"lat":51.447848,"lng":-0.037873,"elevation":53.8},{"lat":51.447816,"lng":-0.03787,"elevation":54.1},{"lat":51.447786,"lng":-0.037877,"elevation":54.5},{"lat":51.447756,"lng":-0.037884,"elevation":54.9},{"lat":51.447726,"lng":-0.037883,"elevation":55.2},{"lat":51.447694,"lng":-0.037874,"elevation":55.6},{"lat":51.447659,"lng":-0.037865,"elevation":56},{"lat":51.447623,"lng":-0.03786,"elevation":56.4},{"lat":51.447589,"lng":-0.037856,"elevation":56.8},{"lat":51.447559,"lng":-0.037856,"elevation":57.2},{"lat":51.447528,"lng":-0.037858,"elevation":57.5},{"lat":51.447494,"lng":-0.037853,"elevation":57.9},{"lat":51.447454,"lng":-0.037834,"elevation":58.3},{"lat":51.447418,"lng":-0.037827,"elevation":58.7},{"lat":51.447383,"lng":-0.037815,"elevation":59.1},{"lat":51.447347,"lng":-0.037803,"elevation":59.5},{"lat":51.447312,"lng":-0.037795,"elevation":59.9},{"lat":51.447279,"lng":-0.037775,"elevation":60.2},{"lat":51.447256,"lng":-0.037732,"elevation":60.4},{"lat":51.447246,"lng":-0.037671,"elevation":60.3},{"lat":51.447232,"lng":-0.037612,"elevation":60.2},{"lat":51.447209,"lng":-0.037541,"elevation":60.3},{"lat":51.447187,"lng":-0.037474,"elevation":60.3},{"lat":51.447162,"lng":-0.037406,"elevation":60.3},{"lat":51.447135,"lng":-0.037338,"elevation":60.4},{"lat":51.447115,"lng":-0.037278,"elevation":60.4},{"lat":51.447097,"lng":-0.03721,"elevation":60.3},{"lat":51.447081,"lng":-0.037142,"elevation":60.2},{"lat":51.447064,"lng":-0.037071,"elevation":59.9},{"lat":51.447052,"lng":-0.037004,"elevation":59.5},{"lat":51.447039,"lng":-0.036932,"elevation":59.1},{"lat":51.447028,"lng":-0.036862,"elevation":58.8},{"lat":51.447017,"lng":-0.036789,"elevation":58.4},{"lat":51.447007,"lng":-0.036715,"elevation":58},{"lat":51.446997,"lng":-0.036644,"elevation":57.7},{"lat":51.446986,"lng":-0.036574,"elevation":57.3},{"lat":51.446977,"lng":-0.0365,"elevation":57},{"lat":51.446967,"lng":-0.036426,"elevation":56.6},{"lat":51.446961,"lng":-0.036351,"elevation":56.3},{"lat":51.446955,"lng":-0.036279,"elevation":56},{"lat":51.44695,"lng":-0.036206,"elevation":55.7},{"lat":51.446946,"lng":-0.036133,"elevation":55.6},{"lat":51.446945,"lng":-0.036058,"elevation":55.4},{"lat":51.446942,"lng":-0.035983,"elevation":55.2},{"lat":51.44694,"lng":-0.035906,"elevation":55.1},{"lat":51.446937,"lng":-0.035829,"elevation":54.9},{"lat":51.446936,"lng":-0.035753,"elevation":54.7},{"lat":51.446937,"lng":-0.035676,"elevation":54.6},{"lat":51.44694,"lng":-0.0356,"elevation":54.4},{"lat":51.446941,"lng":-0.035525,"elevation":54.2},{"lat":51.446947,"lng":-0.035455,"elevation":54.1},{"lat":51.446967,"lng":-0.035393,"elevation":53.9},{"lat":51.447007,"lng":-0.035357,"elevation":53.9},{"lat":51.447053,"lng":-0.035356,"elevation":53.9},{"lat":51.447098,"lng":-0.035384,"elevation":53.9},{"lat":51.447144,"lng":-0.03541,"elevation":53.7},{"lat":51.44719,"lng":-0.035435,"elevation":53.5},{"lat":51.447235,"lng":-0.035458,"elevation":53.4},{"lat":51.447279,"lng":-0.035482,"elevation":53.2},{"lat":51.447324,"lng":-0.035503,"elevation":53},{"lat":51.447366,"lng":-0.035523,"elevation":52.9},{"lat":51.447413,"lng":-0.035561,"elevation":52.7},{"lat":51.447457,"lng":-0.035601,"elevation":52.5},{"lat":51.4475,"lng":-0.035636,"elevation":52.4},{"lat":51.447543,"lng":-0.035673,"elevation":52.2},{"lat":51.447586,"lng":-0.035709,"elevation":52.1},{"lat":51.447629,"lng":-0.035744,"elevation":51.9},{"lat":51.447669,"lng":-0.035787,"elevation":51.8},{"lat":51.447709,"lng":-0.035823,"elevation":51.6},{"lat":51.447751,"lng":-0.03586,"elevation":51.4},{"lat":51.447793,"lng":-0.035899,"elevation":51.3},{"lat":51.447837,"lng":-0.03593,"elevation":51.1},{"lat":51.447878,"lng":-0.03597,"elevation":50.9},{"lat":51.447921,"lng":-0.036019,"elevation":50.7},{"lat":51.447964,"lng":-0.036067,"elevation":50.4},{"lat":51.447987,"lng":-0.036094,"elevation":50.2},{"lat":51.448029,"lng":-0.036145,"elevation":49.9},{"lat":51.448051,"lng":-0.036176,"elevation":49.8},{"lat":51.448071,"lng":-0.036208,"elevation":49.7},{"lat":51.448111,"lng":-0.036263,"elevation":49.4},{"lat":51.448149,"lng":-0.036311,"elevation":49.1},{"lat":51.44819,"lng":-0.036356,"elevation":48.7},{"lat":51.448236,"lng":-0.036393,"elevation":48.4},{"lat":51.448311,"lng":-0.036404,"elevation":47.7},{"lat":51.448338,"lng":-0.036397,"elevation":47.5},{"lat":51.448383,"lng":-0.036399,"elevation":47.1},{"lat":51.448394,"lng":-0.036448,"elevation":47},{"lat":51.448396,"lng":-0.036508,"elevation":46.9},{"lat":51.448402,"lng":-0.036567,"elevation":46.9},{"lat":51.448409,"lng":-0.03663,"elevation":46.8},{"lat":51.448406,"lng":-0.036673,"elevation":46.8},{"lat":51.448412,"lng":-0.036747,"elevation":46.7},{"lat":51.448417,"lng":-0.036817,"elevation":46.7},{"lat":51.44841,"lng":-0.03689,"elevation":46.7},{"lat":51.448397,"lng":-0.036935,"elevation":46.8},{"lat":51.448381,"lng":-0.037004,"elevation":47},{"lat":51.448371,"lng":-0.037067,"elevation":47.1},{"lat":51.448361,"lng":-0.037125,"elevation":47.2},{"lat":51.448349,"lng":-0.037191,"elevation":47.3},{"lat":51.448337,"lng":-0.037255,"elevation":47.5},{"lat":51.448327,"lng":-0.037314,"elevation":47.6},{"lat":51.448322,"lng":-0.037376,"elevation":47.6},{"lat":51.448304,"lng":-0.037435,"elevation":47.8},{"lat":51.448285,"lng":-0.037498,"elevation":48.1},{"lat":51.448268,"lng":-0.037566,"elevation":48.3},{"lat":51.448251,"lng":-0.037631,"elevation":48.5},{"lat":51.448234,"lng":-0.037694,"elevation":48.7},{"lat":51.448213,"lng":-0.03776,"elevation":49},{"lat":51.448184,"lng":-0.037801,"elevation":49.4},{"lat":51.448155,"lng":-0.037839,"elevation":49.8},{"lat":51.448131,"lng":-0.037864,"elevation":50.1},{"lat":51.448096,"lng":-0.037881,"elevation":50.6},{"lat":51.448066,"lng":-0.037896,"elevation":51},{"lat":51.448031,"lng":-0.037908,"elevation":51.5},{"lat":51.447995,"lng":-0.037912,"elevation":52},{"lat":51.447956,"lng":-0.037916,"elevation":52.5},{"lat":51.447917,"lng":-0.037924,"elevation":53},{"lat":51.447878,"lng":-0.037926,"elevation":53.4},{"lat":51.447841,"lng":-0.037933,"elevation":53.8},{"lat":51.447805,"lng":-0.037931,"elevation":54.3},{"lat":51.447769,"lng":-0.03792,"elevation":54.8},{"lat":51.44773,"lng":-0.037916,"elevation":55.2},{"lat":51.44769,"lng":-0.037911,"elevation":55.7},{"lat":51.447652,"lng":-0.037908,"elevation":56.2},{"lat":51.447611,"lng":-0.037905,"elevation":56.6},{"lat":51.447568,"lng":-0.037899,"elevation":57.1},{"lat":51.447519,"lng":-0.037888,"elevation":57.7},{"lat":51.44747,"lng":-0.037869,"elevation":58.2},{"lat":51.447427,"lng":-0.037852,"elevation":58.7},{"lat":51.44739,"lng":-0.037833,"elevation":59.1},{"lat":51.447349,"lng":-0.037812,"elevation":59.5},{"lat":51.447307,"lng":-0.037795,"elevation":60},{"lat":51.44727,"lng":-0.037773,"elevation":60.3},{"lat":51.447244,"lng":-0.037743,"elevation":60.5},{"lat":51.447224,"lng":-0.03769,"elevation":60.6},{"lat":51.447202,"lng":-0.037622,"elevation":60.6},{"lat":51.447177,"lng":-0.037551,"elevation":60.7},{"lat":51.447155,"lng":-0.037482,"elevation":60.7},{"lat":51.447128,"lng":-0.037422,"elevation":60.7},{"lat":51.447102,"lng":-0.037359,"elevation":60.8},{"lat":51.447084,"lng":-0.037292,"elevation":60.7},{"lat":51.447068,"lng":-0.037225,"elevation":60.5},{"lat":51.447054,"lng":-0.037158,"elevation":60.2},{"lat":51.447041,"lng":-0.037086,"elevation":59.9},{"lat":51.447028,"lng":-0.037018,"elevation":59.5},{"lat":51.447016,"lng":-0.03694,"elevation":59.1},{"lat":51.447001,"lng":-0.036865,"elevation":58.7},{"lat":51.446988,"lng":-0.036788,"elevation":58.3},{"lat":51.446979,"lng":-0.036711,"elevation":57.9},{"lat":51.446967,"lng":-0.036639,"elevation":57.6},{"lat":51.446955,"lng":-0.036566,"elevation":57.2},{"lat":51.446946,"lng":-0.036496,"elevation":56.9},{"lat":51.44694,"lng":-0.036423,"elevation":56.6},{"lat":51.446936,"lng":-0.036349,"elevation":56.3},{"lat":51.446929,"lng":-0.036275,"elevation":55.9},{"lat":51.446921,"lng":-0.036204,"elevation":55.7},{"lat":51.446917,"lng":-0.036134,"elevation":55.5},{"lat":51.446915,"lng":-0.036062,"elevation":55.4},{"lat":51.446912,"lng":-0.035989,"elevation":55.2},{"lat":51.446906,"lng":-0.035917,"elevation":55.1},{"lat":51.446903,"lng":-0.035844,"elevation":54.9},{"lat":51.446901,"lng":-0.035766,"elevation":54.7},{"lat":51.446901,"lng":-0.035688,"elevation":54.6},{"lat":51.4469,"lng":-0.035612,"elevation":54.4},{"lat":51.446898,"lng":-0.035537,"elevation":54.3},{"lat":51.446898,"lng":-0.035464,"elevation":54.1},{"lat":51.446913,"lng":-0.035396,"elevation":54},{"lat":51.446952,"lng":-0.035355,"elevation":53.9},{"lat":51.447001,"lng":-0.035347,"elevation":53.8},{"lat":51.447053,"lng":-0.035361,"elevation":53.9},{"lat":51.447104,"lng":-0.035379,"elevation":53.8},{"lat":51.447153,"lng":-0.035403,"elevation":53.6},{"lat":51.447198,"lng":-0.035437,"elevation":53.5},{"lat":51.447243,"lng":-0.035483,"elevation":53.4},{"lat":51.447268,"lng":-0.035505,"elevation":53.3},{"lat":51.447314,"lng":-0.03554,"elevation":53.1},{"lat":51.447357,"lng":-0.03557,"elevation":53},{"lat":51.447404,"lng":-0.035606,"elevation":52.8},{"lat":51.447449,"lng":-0.035642,"elevation":52.7},{"lat":51.447493,"lng":-0.035683,"elevation":52.5},{"lat":51.447539,"lng":-0.035713,"elevation":52.3},{"lat":51.447585,"lng":-0.035742,"elevation":52.1},{"lat":51.44763,"lng":-0.035771,"elevation":51.9},{"lat":51.447672,"lng":-0.035802,"elevation":51.8},{"lat":51.447714,"lng":-0.035836,"elevation":51.6},{"lat":51.447757,"lng":-0.035873,"elevation":51.4},{"lat":51.447801,"lng":-0.035915,"elevation":51.2},{"lat":51.447844,"lng":-0.03595,"elevation":51},{"lat":51.447886,"lng":-0.035979,"elevation":50.8},{"lat":51.447928,"lng":-0.036006,"elevation":50.6},{"lat":51.447964,"lng":-0.036042,"elevation":50.4},{"lat":51.447986,"lng":-0.036099,"elevation":50.2},{"lat":51.448021,"lng":-0.03614,"elevation":50},{"lat":51.448055,"lng":-0.036183,"elevation":49.8},{"lat":51.448079,"lng":-0.036223,"elevation":49.6},{"lat":51.448118,"lng":-0.03626,"elevation":49.3},{"lat":51.448167,"lng":-0.036284,"elevation":48.9},{"lat":51.448219,"lng":-0.036308,"elevation":48.5},{"lat":51.448247,"lng":-0.03632,"elevation":48.2},{"lat":51.448275,"lng":-0.036326,"elevation":48},{"lat":51.448302,"lng":-0.036327,"elevation":47.8},{"lat":51.448352,"lng":-0.036334,"elevation":47.3},{"lat":51.44837,"lng":-0.036401,"elevation":47.2},{"lat":51.448368,"lng":-0.036467,"elevation":47.2},{"lat":51.448378,"lng":-0.036536,"elevation":47.1},{"lat":51.448389,"lng":-0.036601,"elevation":47},{"lat":51.4484,"lng":-0.036664,"elevation":46.9},{"lat":51.448409,"lng":-0.036727,"elevation":46.8},{"lat":51.448415,"lng":-0.036795,"elevation":46.7},{"lat":51.448415,"lng":-0.036865,"elevation":46.7},{"lat":51.448402,"lng":-0.036908,"elevation":46.8},{"lat":51.44838,"lng":-0.036985,"elevation":47},{"lat":51.448355,"lng":-0.03705,"elevation":47.3},{"lat":51.448334,"lng":-0.037117,"elevation":47.5},{"lat":51.448312,"lng":-0.03718,"elevation":47.7},{"lat":51.448294,"lng":-0.03724,"elevation":47.9},{"lat":51.448283,"lng":-0.037305,"elevation":48.1},{"lat":51.448271,"lng":-0.037374,"elevation":48.2},{"lat":51.448256,"lng":-0.037448,"elevation":48.4},{"lat":51.448239,"lng":-0.037523,"elevation":48.6},{"lat":51.448223,"lng":-0.037593,"elevation":48.9},{"lat":51.448208,"lng":-0.037661,"elevation":49.1},{"lat":51.448192,"lng":-0.037729,"elevation":49.3},{"lat":51.448178,"lng":-0.037799,"elevation":49.5},{"lat":51.448161,"lng":-0.037861,"elevation":49.7},{"lat":51.44814,"lng":-0.037919,"elevation":50},{"lat":51.448111,"lng":-0.03794,"elevation":50.3},{"lat":51.44807,"lng":-0.037939,"elevation":50.9},{"lat":51.448041,"lng":-0.037936,"elevation":51.3},{"lat":51.44801,"lng":-0.037936,"elevation":51.7},{"lat":51.447976,"lng":-0.037934,"elevation":52.1},{"lat":51.447942,"lng":-0.037925,"elevation":52.6},{"lat":51.447908,"lng":-0.03792,"elevation":53.1},{"lat":51.447874,"lng":-0.037918,"elevation":53.5},{"lat":51.447839,"lng":-0.037911,"elevation":53.9},{"lat":51.447797,"lng":-0.037899,"elevation":54.4},{"lat":51.447761,"lng":-0.037893,"elevation":54.8},{"lat":51.447723,"lng":-0.037878,"elevation":55.3},{"lat":51.447691,"lng":-0.037875,"elevation":55.6},{"lat":51.447658,"lng":-0.037867,"elevation":56},{"lat":51.447623,"lng":-0.037859,"elevation":56.4},{"lat":51.447587,"lng":-0.037856,"elevation":56.8},{"lat":51.447548,"lng":-0.037849,"elevation":57.3},{"lat":51.447512,"lng":-0.037844,"elevation":57.7},{"lat":51.44748,"lng":-0.037844,"elevation":58.1},{"lat":51.447447,"lng":-0.037835,"elevation":58.4},{"lat":51.447412,"lng":-0.037815,"elevation":58.8},{"lat":51.447376,"lng":-0.037804,"elevation":59.2},{"lat":51.447336,"lng":-0.037783,"elevation":59.6},{"lat":51.447296,"lng":-0.037767,"elevation":60},{"lat":51.447264,"lng":-0.037753,"elevation":60.3},{"lat":51.447257,"lng":-0.037709,"elevation":60.3},{"lat":51.447234,"lng":-0.037644,"elevation":60.3},{"lat":51.447208,"lng":-0.037573,"elevation":60.4},{"lat":51.44718,"lng":-0.037506,"elevation":60.5},{"lat":51.447152,"lng":-0.037441,"elevation":60.6},{"lat":51.447125,"lng":-0.037374,"elevation":60.6},{"lat":51.447098,"lng":-0.037308,"elevation":60.7},{"lat":51.447076,"lng":-0.037238,"elevation":60.5},{"lat":51.44706,"lng":-0.037165,"elevation":60.2},{"lat":51.447047,"lng":-0.037094,"elevation":59.9},{"lat":51.447034,"lng":-0.037017,"elevation":59.5},{"lat":51.447018,"lng":-0.036946,"elevation":59.1},{"lat":51.447002,"lng":-0.036875,"elevation":58.8},{"lat":51.446985,"lng":-0.036805,"elevation":58.4},{"lat":51.446973,"lng":-0.036734,"elevation":58},{"lat":51.446958,"lng":-0.036669,"elevation":57.7},{"lat":51.446944,"lng":-0.036604,"elevation":57.4},{"lat":51.446935,"lng":-0.036535,"elevation":57.1},{"lat":51.446926,"lng":-0.036464,"elevation":56.7},{"lat":51.446919,"lng":-0.036394,"elevation":56.4},{"lat":51.446914,"lng":-0.036326,"elevation":56.1},{"lat":51.446907,"lng":-0.036258,"elevation":55.8},{"lat":51.446905,"lng":-0.036185,"elevation":55.6},{"lat":51.446905,"lng":-0.036109,"elevation":55.5},{"lat":51.446904,"lng":-0.036037,"elevation":55.3},{"lat":51.446901,"lng":-0.035966,"elevation":55.2},{"lat":51.446902,"lng":-0.035892,"elevation":55},{"lat":51.446903,"lng":-0.035819,"elevation":54.9},{"lat":51.446902,"lng":-0.035737,"elevation":54.7},{"lat":51.446902,"lng":-0.035659,"elevation":54.5},{"lat":51.446901,"lng":-0.035584,"elevation":54.4},{"lat":51.4469,"lng":-0.035509,"elevation":54.2},{"lat":51.446901,"lng":-0.03543,"elevation":54},{"lat":51.446927,"lng":-0.035373,"elevation":53.9},{"lat":51.446974,"lng":-0.035357,"elevation":53.9},{"lat":51.447021,"lng":-0.035359,"elevation":53.9},{"lat":51.447047,"lng":-0.03538,"elevation":53.9},{"lat":51.447094,"lng":-0.035402,"elevation":53.9},{"lat":51.447141,"lng":-0.035427,"elevation":53.7},{"lat":51.447189,"lng":-0.035453,"elevation":53.6},{"lat":51.447235,"lng":-0.035481,"elevation":53.4},{"lat":51.447281,"lng":-0.035515,"elevation":53.3},{"lat":51.447328,"lng":-0.035549,"elevation":53.1},{"lat":51.447375,"lng":-0.035585,"elevation":52.9},{"lat":51.4474,"lng":-0.035604,"elevation":52.8},{"lat":51.447426,"lng":-0.035625,"elevation":52.8},{"lat":51.447474,"lng":-0.035658,"elevation":52.6},{"lat":51.447519,"lng":-0.035698,"elevation":52.4},{"lat":51.447562,"lng":-0.035733,"elevation":52.2},{"lat":51.447607,"lng":-0.035759,"elevation":52},{"lat":51.447653,"lng":-0.035769,"elevation":51.8},{"lat":51.4477,"lng":-0.035788,"elevation":51.6},{"lat":51.447742,"lng":-0.035829,"elevation":51.4},{"lat":51.447785,"lng":-0.035878,"elevation":51.3},{"lat":51.447827,"lng":-0.035926,"elevation":51.1},{"lat":51.447849,"lng":-0.035955,"elevation":51},{"lat":51.447891,"lng":-0.035994,"elevation":50.8},{"lat":51.447931,"lng":-0.036036,"elevation":50.6},{"lat":51.44797,"lng":-0.03608,"elevation":50.3},{"lat":51.448005,"lng":-0.036115,"elevation":50.1},{"lat":51.448037,"lng":-0.036157,"elevation":49.9},{"lat":51.448073,"lng":-0.036204,"elevation":49.6},{"lat":51.448114,"lng":-0.036247,"elevation":49.3},{"lat":51.448156,"lng":-0.036295,"elevation":49},{"lat":51.448201,"lng":-0.036333,"elevation":48.6},{"lat":51.448247,"lng":-0.036361,"elevation":48.3},{"lat":51.448296,"lng":-0.036374,"elevation":47.8},{"lat":51.448343,"lng":-0.036366,"elevation":47.4},{"lat":51.448376,"lng":-0.03638,"elevation":47.1},{"lat":51.448383,"lng":-0.036444,"elevation":47.1},{"lat":51.448386,"lng":-0.036515,"elevation":47},{"lat":51.448394,"lng":-0.036586,"elevation":46.9},{"lat":51.448404,"lng":-0.036657,"elevation":46.8},{"lat":51.448419,"lng":-0.03672,"elevation":46.7},{"lat":51.448422,"lng":-0.036798,"elevation":46.6},{"lat":51.448421,"lng":-0.036841,"elevation":46.6},{"lat":51.448406,"lng":-0.036919,"elevation":46.7},{"lat":51.448379,"lng":-0.036972,"elevation":47},{"lat":51.448359,"lng":-0.037024,"elevation":47.2},{"lat":51.448339,"lng":-0.037085,"elevation":47.4},{"lat":51.448322,"lng":-0.037122,"elevation":47.6},{"lat":51.448314,"lng":-0.037203,"elevation":47.7},{"lat":51.448303,"lng":-0.037282,"elevation":47.8},{"lat":51.448284,"lng":-0.037354,"elevation":48.1},{"lat":51.448261,"lng":-0.037424,"elevation":48.4},{"lat":51.448241,"lng":-0.037501,"elevation":48.6},{"lat":51.448234,"lng":-0.037544,"elevation":48.7},{"lat":51.448216,"lng":-0.037615,"elevation":48.9},{"lat":51.448202,"lng":-0.037684,"elevation":49.1},{"lat":51.448187,"lng":-0.037751,"elevation":49.4},{"lat":51.448174,"lng":-0.037815,"elevation":49.6},{"lat":51.448163,"lng":-0.037879,"elevation":49.7},{"lat":51.44815,"lng":-0.037942,"elevation":49.8},{"lat":51.44814,"lng":-0.038008,"elevation":49.7},{"lat":51.448129,"lng":-0.03808,"elevation":49.5},{"lat":51.448124,"lng":-0.038151,"elevation":49.3},{"lat":51.448128,"lng":-0.038237,"elevation":48.9},{"lat":51.448116,"lng":-0.038315,"elevation":48.7},{"lat":51.448098,"lng":-0.038387,"elevation":48.6},{"lat":51.448084,"lng":-0.038455,"elevation":48.5},{"lat":51.448068,"lng":-0.038504,"elevation":48.4},{"lat":51.448046,"lng":-0.038571,"elevation":48.4},{"lat":51.448034,"lng":-0.038613,"elevation":48.3},{"lat":51.448018,"lng":-0.038686,"elevation":48.2},{"lat":51.448015,"lng":-0.03873,"elevation":48},{"lat":51.447999,"lng":-0.038799,"elevation":47.9},{"lat":51.44798,"lng":-0.038863,"elevation":47.8},{"lat":51.447961,"lng":-0.038927,"elevation":47.7},{"lat":51.447941,"lng":-0.038989,"elevation":47.6},{"lat":51.44792,"lng":-0.039054,"elevation":47.5},{"lat":51.447901,"lng":-0.039122,"elevation":47.4},{"lat":51.447881,"lng":-0.039187,"elevation":47.3},{"lat":51.447862,"lng":-0.039249,"elevation":47.3},{"lat":51.44785,"lng":-0.039314,"elevation":47.1},{"lat":51.447835,"lng":-0.039379,"elevation":47},{"lat":51.447818,"lng":-0.039444,"elevation":46.9},{"lat":51.447801,"lng":-0.039509,"elevation":46.7},{"lat":51.447782,"lng":-0.039583,"elevation":46.6},{"lat":51.447768,"lng":-0.039656,"elevation":46.5},{"lat":51.447753,"lng":-0.039726,"elevation":46.3},{"lat":51.447735,"lng":-0.039801,"elevation":46.2},{"lat":51.447717,"lng":-0.03987,"elevation":46},{"lat":51.447702,"lng":-0.039943,"elevation":45.8},{"lat":51.447685,"lng":-0.040012,"elevation":45.7},{"lat":51.447662,"lng":-0.040073,"elevation":45.6},{"lat":51.447644,"lng":-0.040137,"elevation":45.4},{"lat":51.447628,"lng":-0.040199,"elevation":45.2},{"lat":51.447614,"lng":-0.040262,"elevation":45},{"lat":51.447599,"lng":-0.040334,"elevation":44.7},{"lat":51.447585,"lng":-0.040405,"elevation":44.5},{"lat":51.44757,"lng":-0.040471,"elevation":44.3},{"lat":51.447557,"lng":-0.040536,"elevation":44.1},{"lat":51.447544,"lng":-0.040603,"elevation":43.8},{"lat":51.447535,"lng":-0.040677,"elevation":43.6},{"lat":51.447526,"lng":-0.040749,"elevation":43.3},{"lat":51.447506,"lng":-0.040814,"elevation":43.1},{"lat":51.447487,"lng":-0.040879,"elevation":42.8},{"lat":51.447483,"lng":-0.04095,"elevation":42.5},{"lat":51.447483,"lng":-0.041014,"elevation":42.2},{"lat":51.447478,"lng":-0.04108,"elevation":41.9},{"lat":51.447458,"lng":-0.041149,"elevation":41.6},{"lat":51.44743,"lng":-0.041198,"elevation":41.4},{"lat":51.447402,"lng":-0.041244,"elevation":41.3},{"lat":51.447385,"lng":-0.041295,"elevation":41.2},{"lat":51.447355,"lng":-0.041363,"elevation":41.3},{"lat":51.447336,"lng":-0.041402,"elevation":41.3},{"lat":51.447319,"lng":-0.041438,"elevation":41.3},{"lat":51.447302,"lng":-0.041476,"elevation":41.3},{"lat":51.447285,"lng":-0.041514,"elevation":41.3},{"lat":51.447269,"lng":-0.041552,"elevation":41.3},{"lat":51.44725,"lng":-0.041585,"elevation":41.3},{"lat":51.447231,"lng":-0.041618,"elevation":41.3},{"lat":51.447198,"lng":-0.041679,"elevation":41.3},{"lat":51.447165,"lng":-0.041727,"elevation":41.3},{"lat":51.44714,"lng":-0.041781,"elevation":41.3},{"lat":51.447114,"lng":-0.041838,"elevation":41.2},{"lat":51.447082,"lng":-0.04189,"elevation":41.2},{"lat":51.447048,"lng":-0.04194,"elevation":41.1},{"lat":51.447011,"lng":-0.041991,"elevation":41},{"lat":51.446973,"lng":-0.042038,"elevation":40.9},{"lat":51.446933,"lng":-0.042077,"elevation":40.8},{"lat":51.44689,"lng":-0.042105,"elevation":40.7},{"lat":51.446844,"lng":-0.042133,"elevation":40.6},{"lat":51.446797,"lng":-0.042164,"elevation":40.5},{"lat":51.446754,"lng":-0.042204,"elevation":40.4},{"lat":51.446712,"lng":-0.042245,"elevation":40.3},{"lat":51.446665,"lng":-0.042297,"elevation":40.1},{"lat":51.446641,"lng":-0.042328,"elevation":40},{"lat":51.446617,"lng":-0.042356,"elevation":39.9},{"lat":51.446595,"lng":-0.042381,"elevation":39.8},{"lat":51.446569,"lng":-0.042404,"elevation":39.8},{"lat":51.446543,"lng":-0.042421,"elevation":39.7},{"lat":51.446517,"lng":-0.042436,"elevation":39.6},{"lat":51.44649,"lng":-0.04245,"elevation":39.5},{"lat":51.446441,"lng":-0.04248,"elevation":39.4},{"lat":51.446396,"lng":-0.042494,"elevation":39.3},{"lat":51.446348,"lng":-0.042497,"elevation":39.2},{"lat":51.446303,"lng":-0.042505,"elevation":39.1},{"lat":51.446261,"lng":-0.042512,"elevation":39},{"lat":51.446225,"lng":-0.042506,"elevation":38.9},{"lat":51.446183,"lng":-0.042504,"elevation":38.8},{"lat":51.446138,"lng":-0.042506,"elevation":38.7},{"lat":51.446086,"lng":-0.04251,"elevation":38.5},{"lat":51.446058,"lng":-0.042513,"elevation":38.4},{"lat":51.446029,"lng":-0.042516,"elevation":38.3},{"lat":51.445999,"lng":-0.042518,"elevation":38.2},{"lat":51.445968,"lng":-0.042519,"elevation":38.1},{"lat":51.445938,"lng":-0.042517,"elevation":38},{"lat":51.445908,"lng":-0.042514,"elevation":37.9},{"lat":51.44588,"lng":-0.042514,"elevation":37.9},{"lat":51.445853,"lng":-0.042515,"elevation":37.8},{"lat":51.445803,"lng":-0.042515,"elevation":37.6},{"lat":51.445751,"lng":-0.042518,"elevation":37.5},{"lat":51.445703,"lng":-0.04253,"elevation":37.3},{"lat":51.445676,"lng":-0.042541,"elevation":37.2},{"lat":51.445647,"lng":-0.042547,"elevation":37.1},{"lat":51.44562,"lng":-0.042546,"elevation":37},{"lat":51.445567,"lng":-0.042536,"elevation":36.9},{"lat":51.445512,"lng":-0.042526,"elevation":36.8},{"lat":51.445484,"lng":-0.042524,"elevation":36.7},{"lat":51.445457,"lng":-0.042525,"elevation":36.6},{"lat":51.445429,"lng":-0.042527,"elevation":36.5},{"lat":51.445377,"lng":-0.042543,"elevation":36.4},{"lat":51.445324,"lng":-0.042556,"elevation":36.4},{"lat":51.445275,"lng":-0.042567,"elevation":36.3},{"lat":51.445243,"lng":-0.042572,"elevation":36.3},{"lat":51.445226,"lng":-0.04262,"elevation":36.3},{"lat":51.445233,"lng":-0.042677,"elevation":36.2},{"lat":51.445249,"lng":-0.042728,"elevation":36.2},{"lat":51.445274,"lng":-0.042763,"elevation":36.2},{"lat":51.445303,"lng":-0.04278,"elevation":36.1},{"lat":51.44533,"lng":-0.042813,"elevation":36.1},{"lat":51.445327,"lng":-0.042868,"elevation":36.1},{"lat":51.445314,"lng":-0.04293,"elevation":36},{"lat":51.445314,"lng":-0.042974,"elevation":36.1},{"lat":51.445322,"lng":-0.043017,"elevation":36.2},{"lat":51.445321,"lng":-0.043063,"elevation":36.3},{"lat":51.445322,"lng":-0.043109,"elevation":36.4},{"lat":51.445329,"lng":-0.043172,"elevation":36.6},{"lat":51.445334,"lng":-0.04323,"elevation":36.7},{"lat":51.44534,"lng":-0.043292,"elevation":36.9},{"lat":51.445351,"lng":-0.04334,"elevation":37},{"lat":51.445356,"lng":-0.043387,"elevation":37.1},{"lat":51.445354,"lng":-0.043438,"elevation":37.2},{"lat":51.445351,"lng":-0.043488,"elevation":37.3},{"lat":51.445351,"lng":-0.043536,"elevation":37.4},{"lat":51.445352,"lng":-0.043584,"elevation":37.5},{"lat":51.445349,"lng":-0.043632,"elevation":37.6},{"lat":51.445348,"lng":-0.043677,"elevation":37.7},{"lat":51.445345,"lng":-0.043723,"elevation":37.9},{"lat":51.445353,"lng":-0.043773,"elevation":38},{"lat":51.445358,"lng":-0.043831,"elevation":38.1},{"lat":51.445353,"lng":-0.043896,"elevation":38.3},{"lat":51.44535,"lng":-0.043943,"elevation":38.4},{"lat":51.445342,"lng":-0.044,"elevation":38.5},{"lat":51.445344,"lng":-0.044052,"elevation":38.6},{"lat":51.445357,"lng":-0.044099,"elevation":38.7},{"lat":51.445364,"lng":-0.044147,"elevation":38.9},{"lat":51.445367,"lng":-0.044192,"elevation":39},{"lat":51.445374,"lng":-0.044252,"elevation":39.1},{"lat":51.445378,"lng":-0.044301,"elevation":39.2},{"lat":51.445381,"lng":-0.044349,"elevation":39.4},{"lat":51.445383,"lng":-0.044404,"elevation":39.5},{"lat":51.445381,"lng":-0.044466,"elevation":39.6},{"lat":51.445372,"lng":-0.044522,"elevation":39.7},{"lat":51.445369,"lng":-0.044575,"elevation":39.9},{"lat":51.445371,"lng":-0.044618,"elevation":40},{"lat":51.445389,"lng":-0.044673,"elevation":40.1},{"lat":51.445397,"lng":-0.044731,"elevation":40.3},{"lat":51.44537,"lng":-0.044774,"elevation":40.3},{"lat":51.445337,"lng":-0.044785,"elevation":40.3},{"lat":51.445307,"lng":-0.044789,"elevation":40.2},{"lat":51.445279,"lng":-0.044777,"elevation":40.1},{"lat":51.44525,"lng":-0.044771,"elevation":40},{"lat":51.44522,"lng":-0.044771,"elevation":39.9},{"lat":51.44518,"lng":-0.044771,"elevation":39.8},{"lat":51.445145,"lng":-0.044764,"elevation":39.7},{"lat":51.445114,"lng":-0.044744,"elevation":39.6},{"lat":51.445085,"lng":-0.044757,"elevation":39.5},{"lat":51.445073,"lng":-0.044812,"elevation":39.6},{"lat":51.445098,"lng":-0.044832,"elevation":39.7},{"lat":51.445137,"lng":-0.044851,"elevation":39.9},{"lat":51.445165,"lng":-0.044847,"elevation":39.9}],[{"lat":51.445219,"lng":-0.044939,"elevation":40.3},{"lat":51.445072,"lng":-0.044945,"elevation":39.9},{"lat":51.444926,"lng":-0.045093,"elevation":39.7},{"lat":51.445106,"lng":-0.044958,"elevation":40},{"lat":51.44513,"lng":-0.044938,"elevation":40},{"lat":51.445095,"lng":-0.044831,"elevation":39.7},{"lat":51.445094,"lng":-0.044706,"elevation":39.5},{"lat":51.445015,"lng":-0.044811,"elevation":39.5},{"lat":51.444956,"lng":-0.044848,"elevation":39.4},{"lat":51.445047,"lng":-0.044696,"elevation":39.3},{"lat":51.444999,"lng":-0.044728,"elevation":39.3},{"lat":51.445195,"lng":-0.044684,"elevation":39.7},{"lat":51.445274,"lng":-0.044898,"elevation":40.3},{"lat":51.445223,"lng":-0.044858,"elevation":40.1},{"lat":51.445258,"lng":-0.04476,"elevation":40},{"lat":51.445283,"lng":-0.04478,"elevation":40.1},{"lat":51.445316,"lng":-0.044754,"elevation":40.1},{"lat":51.445348,"lng":-0.044741,"elevation":40.2},{"lat":51.44534,"lng":-0.044675,"elevation":40},{"lat":51.445366,"lng":-0.044634,"elevation":40},{"lat":51.445369,"lng":-0.044587,"elevation":39.9},{"lat":51.445374,"lng":-0.04453,"elevation":39.8},{"lat":51.445373,"lng":-0.044482,"elevation":39.7},{"lat":51.445363,"lng":-0.04441,"elevation":39.5},{"lat":51.445368,"lng":-0.044358,"elevation":39.4},{"lat":51.445373,"lng":-0.044308,"elevation":39.3},{"lat":51.445368,"lng":-0.04425,"elevation":39.1},{"lat":51.445362,"lng":-0.044188,"elevation":39},{"lat":51.44537,"lng":-0.044133,"elevation":38.8},{"lat":51.445379,"lng":-0.044081,"elevation":38.7},{"lat":51.44537,"lng":-0.044034,"elevation":38.6},{"lat":51.445357,"lng":-0.043989,"elevation":38.5},{"lat":51.445351,"lng":-0.043931,"elevation":38.3},{"lat":51.445344,"lng":-0.043885,"elevation":38.2},{"lat":51.445343,"lng":-0.043842,"elevation":38.1},{"lat":51.445348,"lng":-0.043793,"elevation":38},{"lat":51.445352,"lng":-0.043749,"elevation":37.9},{"lat":51.445361,"lng":-0.043696,"elevation":37.8},{"lat":51.445364,"lng":-0.043646,"elevation":37.7},{"lat":51.445366,"lng":-0.043593,"elevation":37.6},{"lat":51.445375,"lng":-0.043531,"elevation":37.4},{"lat":51.44538,"lng":-0.04348,"elevation":37.3},{"lat":51.445382,"lng":-0.043418,"elevation":37.2},{"lat":51.44538,"lng":-0.043368,"elevation":37.1},{"lat":51.445373,"lng":-0.043317,"elevation":36.9},{"lat":51.445366,"lng":-0.04327,"elevation":36.8},{"lat":51.445355,"lng":-0.043184,"elevation":36.6},{"lat":51.445343,"lng":-0.043117,"elevation":36.5},{"lat":51.445334,"lng":-0.043075,"elevation":36.4},{"lat":51.445329,"lng":-0.043013,"elevation":36.2},{"lat":51.445336,"lng":-0.042959,"elevation":36.1},{"lat":51.445337,"lng":-0.042895,"elevation":36},{"lat":51.445321,"lng":-0.042848,"elevation":36.1},{"lat":51.445297,"lng":-0.042815,"elevation":36.1},{"lat":51.445269,"lng":-0.042782,"elevation":36.1},{"lat":51.445253,"lng":-0.042733,"elevation":36.2},{"lat":51.44525,"lng":-0.042674,"elevation":36.2},{"lat":51.445257,"lng":-0.042625,"elevation":36.3},{"lat":51.445281,"lng":-0.042596,"elevation":36.3},{"lat":51.44531,"lng":-0.042594,"elevation":36.3},{"lat":51.445348,"lng":-0.04258,"elevation":36.4},{"lat":51.445377,"lng":-0.042563,"elevation":36.4},{"lat":51.445408,"lng":-0.042543,"elevation":36.4},{"lat":51.445447,"lng":-0.042521,"elevation":36.6},{"lat":51.445478,"lng":-0.04249,"elevation":36.7},{"lat":51.445484,"lng":-0.042431,"elevation":36.8},{"lat":51.44548,"lng":-0.042362,"elevation":36.9},{"lat":51.445476,"lng":-0.042297,"elevation":36.9},{"lat":51.44548,"lng":-0.042245,"elevation":37},{"lat":51.445489,"lng":-0.0422,"elevation":37.1},{"lat":51.445486,"lng":-0.042155,"elevation":37.2},{"lat":51.445482,"lng":-0.042108,"elevation":37.2},{"lat":51.445482,"lng":-0.042062,"elevation":37.3},{"lat":51.445492,"lng":-0.042009,"elevation":37.4},{"lat":51.445487,"lng":-0.041953,"elevation":37.4},{"lat":51.445478,"lng":-0.041889,"elevation":37.5},{"lat":51.445471,"lng":-0.041839,"elevation":37.5},{"lat":51.445461,"lng":-0.041793,"elevation":37.5},{"lat":51.445451,"lng":-0.041745,"elevation":37.5},{"lat":51.445461,"lng":-0.041689,"elevation":37.7},{"lat":51.445467,"lng":-0.041628,"elevation":37.8},{"lat":51.445472,"lng":-0.041579,"elevation":37.8},{"lat":51.445477,"lng":-0.041535,"elevation":37.9},{"lat":51.445478,"lng":-0.041477,"elevation":38},{"lat":51.445497,"lng":-0.041423,"elevation":38.2},{"lat":51.445512,"lng":-0.041361,"elevation":38.3},{"lat":51.445524,"lng":-0.0413,"elevation":38.4},{"lat":51.445534,"lng":-0.041257,"elevation":38.6},{"lat":51.445548,"lng":-0.041216,"elevation":38.8},{"lat":51.445554,"lng":-0.041172,"elevation":39.1},{"lat":51.445571,"lng":-0.041117,"elevation":39.6},{"lat":51.445578,"lng":-0.04106,"elevation":40},{"lat":51.445579,"lng":-0.041007,"elevation":40.3},{"lat":51.445578,"lng":-0.040944,"elevation":40.7},{"lat":51.445578,"lng":-0.0409,"elevation":41},{"lat":51.445578,"lng":-0.040836,"elevation":41.4},{"lat":51.445582,"lng":-0.040787,"elevation":41.7},{"lat":51.445587,"lng":-0.040744,"elevation":42},{"lat":51.445595,"lng":-0.0407,"elevation":42.3},{"lat":51.445601,"lng":-0.040657,"elevation":42.6},{"lat":51.445611,"lng":-0.040608,"elevation":43},{"lat":51.445622,"lng":-0.040558,"elevation":43.3},{"lat":51.445625,"lng":-0.040511,"elevation":43.7},{"lat":51.445653,"lng":-0.040476,"elevation":44},{"lat":51.445681,"lng":-0.04046,"elevation":44.3},{"lat":51.445706,"lng":-0.040424,"elevation":44.7},{"lat":51.445721,"lng":-0.040383,"elevation":45.1},{"lat":51.445735,"lng":-0.040338,"elevation":45.5},{"lat":51.445746,"lng":-0.040277,"elevation":46},{"lat":51.445748,"lng":-0.040214,"elevation":46.5},{"lat":51.445754,"lng":-0.040154,"elevation":47},{"lat":51.445757,"lng":-0.04011,"elevation":47.4},{"lat":51.445759,"lng":-0.040063,"elevation":47.8},{"lat":51.445765,"lng":-0.040017,"elevation":48.2},{"lat":51.445769,"lng":-0.039974,"elevation":48.5},{"lat":51.445773,"lng":-0.039919,"elevation":49},{"lat":51.445796,"lng":-0.039877,"elevation":49.5},{"lat":51.445805,"lng":-0.039814,"elevation":50},{"lat":51.445811,"lng":-0.039743,"elevation":50.6},{"lat":51.445809,"lng":-0.039688,"elevation":51},{"lat":51.445802,"lng":-0.039617,"elevation":51.5},{"lat":51.4458,"lng":-0.039546,"elevation":51.8},{"lat":51.445808,"lng":-0.039505,"elevation":51.9},{"lat":51.445814,"lng":-0.039441,"elevation":52},{"lat":51.445818,"lng":-0.039397,"elevation":52.1},{"lat":51.445818,"lng":-0.039339,"elevation":52.2},{"lat":51.445824,"lng":-0.039257,"elevation":52.3},{"lat":51.445824,"lng":-0.039197,"elevation":52.4},{"lat":51.445822,"lng":-0.039124,"elevation":52.5},{"lat":51.445823,"lng":-0.039079,"elevation":52.5},{"lat":51.445824,"lng":-0.039033,"elevation":52.6},{"lat":51.445825,"lng":-0.038981,"elevation":52.6},{"lat":51.445826,"lng":-0.03893,"elevation":52.7},{"lat":51.445826,"lng":-0.038875,"elevation":52.8},{"lat":51.445829,"lng":-0.038824,"elevation":52.9},{"lat":51.445845,"lng":-0.038776,"elevation":53.1},{"lat":51.445861,"lng":-0.038718,"elevation":53.3},{"lat":51.445866,"lng":-0.038656,"elevation":53.5},{"lat":51.445871,"lng":-0.038574,"elevation":53.7},{"lat":51.445872,"lng":-0.038525,"elevation":53.8},{"lat":51.445869,"lng":-0.038476,"elevation":53.8},{"lat":51.445867,"lng":-0.038433,"elevation":53.9},{"lat":51.445862,"lng":-0.038356,"elevation":54},{"lat":51.445858,"lng":-0.03829,"elevation":54.1},{"lat":51.445857,"lng":-0.038212,"elevation":54.2},{"lat":51.445861,"lng":-0.03812,"elevation":54.4},{"lat":51.445881,"lng":-0.038032,"elevation":54.8},{"lat":51.445899,"lng":-0.037985,"elevation":55.1},{"lat":51.445905,"lng":-0.037927,"elevation":55.3},{"lat":51.445911,"lng":-0.037873,"elevation":55.3},{"lat":51.445921,"lng":-0.037821,"elevation":55.3},{"lat":51.445939,"lng":-0.037773,"elevation":55.4},{"lat":51.445962,"lng":-0.037738,"elevation":55.5},{"lat":51.446006,"lng":-0.037699,"elevation":55.9},{"lat":51.44605,"lng":-0.037675,"elevation":56.3},{"lat":51.446091,"lng":-0.037645,"elevation":56.7},{"lat":51.446131,"lng":-0.037621,"elevation":57.1},{"lat":51.44617,"lng":-0.037611,"elevation":57.4},{"lat":51.446208,"lng":-0.037605,"elevation":57.8},{"lat":51.446237,"lng":-0.037608,"elevation":58.1},{"lat":51.446269,"lng":-0.037612,"elevation":58.4},{"lat":51.446303,"lng":-0.037612,"elevation":58.5},{"lat":51.446344,"lng":-0.037616,"elevation":58.7},{"lat":51.446394,"lng":-0.03763,"elevation":58.9},{"lat":51.446424,"lng":-0.037635,"elevation":59.1},{"lat":51.446456,"lng":-0.037641,"elevation":59.2},{"lat":51.446486,"lng":-0.037643,"elevation":59.4},{"lat":51.446515,"lng":-0.037645,"elevation":59.5},{"lat":51.446543,"lng":-0.037647,"elevation":59.6},{"lat":51.446596,"lng":-0.037647,"elevation":59.9},{"lat":51.446649,"lng":-0.037656,"elevation":60.1},{"lat":51.446704,"lng":-0.037664,"elevation":60.4},{"lat":51.446731,"lng":-0.037668,"elevation":60.5},{"lat":51.446759,"lng":-0.037672,"elevation":60.7},{"lat":51.446807,"lng":-0.037672,"elevation":60.9},{"lat":51.44685,"lng":-0.037668,"elevation":61.1},{"lat":51.446895,"lng":-0.037668,"elevation":61.3},{"lat":51.446938,"lng":-0.03767,"elevation":61.5},{"lat":51.446986,"lng":-0.037682,"elevation":61.7},{"lat":51.447032,"lng":-0.037707,"elevation":62},{"lat":51.447083,"lng":-0.037733,"elevation":62.3},{"lat":51.447128,"lng":-0.03775,"elevation":61.9},{"lat":51.44717,"lng":-0.037762,"elevation":61.4},{"lat":51.447196,"lng":-0.037745,"elevation":61.1},{"lat":51.447186,"lng":-0.037684,"elevation":61},{"lat":51.447166,"lng":-0.037635,"elevation":61.1},{"lat":51.447142,"lng":-0.037576,"elevation":61.1},{"lat":51.447116,"lng":-0.037512,"elevation":61.2},{"lat":51.4471,"lng":-0.037471,"elevation":61.2},{"lat":51.447082,"lng":-0.03742,"elevation":61.2},{"lat":51.447067,"lng":-0.037332,"elevation":60.8},{"lat":51.447062,"lng":-0.037284,"elevation":60.6},{"lat":51.447054,"lng":-0.037236,"elevation":60.4},{"lat":51.447046,"lng":-0.037188,"elevation":60.2},{"lat":51.447039,"lng":-0.037139,"elevation":60},{"lat":51.447031,"lng":-0.037089,"elevation":59.8},{"lat":51.447022,"lng":-0.03704,"elevation":59.6},{"lat":51.447011,"lng":-0.03699,"elevation":59.3},{"lat":51.447,"lng":-0.036936,"elevation":59},{"lat":51.446988,"lng":-0.036881,"elevation":58.7},{"lat":51.446978,"lng":-0.036835,"elevation":58.5},{"lat":51.44697,"lng":-0.036789,"elevation":58.3},{"lat":51.446961,"lng":-0.036732,"elevation":58},{"lat":51.446955,"lng":-0.036684,"elevation":57.8},{"lat":51.446949,"lng":-0.036638,"elevation":57.6},{"lat":51.446937,"lng":-0.036562,"elevation":57.2},{"lat":51.446925,"lng":-0.036478,"elevation":56.8},{"lat":51.446914,"lng":-0.0364,"elevation":56.4},{"lat":51.44691,"lng":-0.03632,"elevation":56.1},{"lat":51.446908,"lng":-0.036256,"elevation":55.8},{"lat":51.446906,"lng":-0.036193,"elevation":55.7},{"lat":51.446907,"lng":-0.036126,"elevation":55.5},{"lat":51.446901,"lng":-0.036042,"elevation":55.3},{"lat":51.446901,"lng":-0.036015,"elevation":55.3},{"lat":51.4469,"lng":-0.035954,"elevation":55.1},{"lat":51.446902,"lng":-0.035873,"elevation":55},{"lat":51.446901,"lng":-0.035829,"elevation":54.9},{"lat":51.446897,"lng":-0.035747,"elevation":54.7},{"lat":51.44689,"lng":-0.035678,"elevation":54.6},{"lat":51.446888,"lng":-0.035609,"elevation":54.4},{"lat":51.446894,"lng":-0.035535,"elevation":54.3},{"lat":51.4469,"lng":-0.035469,"elevation":54.1},{"lat":51.446906,"lng":-0.035407,"elevation":54},{"lat":51.446937,"lng":-0.035369,"elevation":53.9},{"lat":51.446985,"lng":-0.035383,"elevation":53.9},{"lat":51.447031,"lng":-0.0354,"elevation":54},{"lat":51.447079,"lng":-0.03542,"elevation":54},{"lat":51.447129,"lng":-0.03544,"elevation":53.8},{"lat":51.447173,"lng":-0.035461,"elevation":53.7},{"lat":51.447212,"lng":-0.035489,"elevation":53.5},{"lat":51.447254,"lng":-0.035517,"elevation":53.4},{"lat":51.447296,"lng":-0.035546,"elevation":53.2},{"lat":51.447341,"lng":-0.035576,"elevation":53.1},{"lat":51.44738,"lng":-0.035606,"elevation":52.9},{"lat":51.447408,"lng":-0.035631,"elevation":52.9},{"lat":51.447438,"lng":-0.035653,"elevation":52.7},{"lat":51.447473,"lng":-0.035678,"elevation":52.6},{"lat":51.447516,"lng":-0.035707,"elevation":52.4},{"lat":51.447544,"lng":-0.035727,"elevation":52.3},{"lat":51.447572,"lng":-0.035747,"elevation":52.2},{"lat":51.447599,"lng":-0.035766,"elevation":52.1},{"lat":51.447625,"lng":-0.035786,"elevation":52},{"lat":51.447649,"lng":-0.035806,"elevation":51.9},{"lat":51.447693,"lng":-0.035846,"elevation":51.7},{"lat":51.447737,"lng":-0.035886,"elevation":51.5},{"lat":51.447783,"lng":-0.035926,"elevation":51.4},{"lat":51.447828,"lng":-0.035968,"elevation":51.2},{"lat":51.447872,"lng":-0.036009,"elevation":51},{"lat":51.447914,"lng":-0.036049,"elevation":50.8},{"lat":51.447957,"lng":-0.036087,"elevation":50.5},{"lat":51.448,"lng":-0.036117,"elevation":50.1},{"lat":51.448041,"lng":-0.036151,"elevation":49.8},{"lat":51.448085,"lng":-0.036195,"elevation":49.5},{"lat":51.448125,"lng":-0.036223,"elevation":49.2},{"lat":51.448152,"lng":-0.036239,"elevation":49},{"lat":51.448181,"lng":-0.036274,"elevation":48.8},{"lat":51.448216,"lng":-0.036299,"elevation":48.5},{"lat":51.448266,"lng":-0.036315,"elevation":48.1},{"lat":51.44831,"lng":-0.036323,"elevation":47.7},{"lat":51.448343,"lng":-0.036363,"elevation":47.4},{"lat":51.448355,"lng":-0.036439,"elevation":47.3},{"lat":51.448369,"lng":-0.036508,"elevation":47.2},{"lat":51.448383,"lng":-0.036605,"elevation":47},{"lat":51.448386,"lng":-0.036634,"elevation":47},{"lat":51.448392,"lng":-0.036697,"elevation":46.9},{"lat":51.448396,"lng":-0.036766,"elevation":46.9},{"lat":51.448395,"lng":-0.036842,"elevation":46.9},{"lat":51.448376,"lng":-0.0369,"elevation":47.1},{"lat":51.448355,"lng":-0.036941,"elevation":47.3},{"lat":51.448331,"lng":-0.036997,"elevation":47.5},{"lat":51.448312,"lng":-0.037059,"elevation":47.7},{"lat":51.448298,"lng":-0.037111,"elevation":47.9},{"lat":51.44829,"lng":-0.037155,"elevation":48},{"lat":51.448284,"lng":-0.03721,"elevation":48.1},{"lat":51.448273,"lng":-0.037262,"elevation":48.2},{"lat":51.448262,"lng":-0.037326,"elevation":48.3},{"lat":51.448254,"lng":-0.037401,"elevation":48.4},{"lat":51.448243,"lng":-0.03749,"elevation":48.6},{"lat":51.448237,"lng":-0.03754,"elevation":48.7},{"lat":51.44823,"lng":-0.037582,"elevation":48.8},{"lat":51.448216,"lng":-0.037648,"elevation":49},{"lat":51.448203,"lng":-0.037712,"elevation":49.1},{"lat":51.448183,"lng":-0.037772,"elevation":49.4},{"lat":51.448151,"lng":-0.037814,"elevation":49.9},{"lat":51.448116,"lng":-0.037833,"elevation":50.3},{"lat":51.448081,"lng":-0.037842,"elevation":50.8},{"lat":51.448043,"lng":-0.037856,"elevation":51.3},{"lat":51.448005,"lng":-0.037872,"elevation":51.8},{"lat":51.44797,"lng":-0.03788,"elevation":52.3},{"lat":51.44794,"lng":-0.037865,"elevation":52.6},{"lat":51.447905,"lng":-0.037854,"elevation":53.1},{"lat":51.447871,"lng":-0.037844,"elevation":53.5},{"lat":51.447847,"lng":-0.037824,"elevation":53.7},{"lat":51.447813,"lng":-0.037804,"elevation":54.1},{"lat":51.447784,"lng":-0.037799,"elevation":54.4},{"lat":51.447754,"lng":-0.037795,"elevation":54.7},{"lat":51.447721,"lng":-0.037787,"elevation":55.1},{"lat":51.447689,"lng":-0.037776,"elevation":55.5},{"lat":51.44766,"lng":-0.037763,"elevation":55.8},{"lat":51.447631,"lng":-0.037748,"elevation":56.1},{"lat":51.447581,"lng":-0.037745,"elevation":56.7},{"lat":51.447536,"lng":-0.037747,"elevation":57.2},{"lat":51.447491,"lng":-0.037757,"elevation":57.7},{"lat":51.447455,"lng":-0.037757,"elevation":58.1},{"lat":51.447424,"lng":-0.037751,"elevation":58.5},{"lat":51.447397,"lng":-0.037746,"elevation":58.8},{"lat":51.44736,"lng":-0.037749,"elevation":59.2},{"lat":51.447326,"lng":-0.037747,"elevation":59.6},{"lat":51.447289,"lng":-0.037732,"elevation":60},{"lat":51.447257,"lng":-0.037703,"elevation":60.3},{"lat":51.447235,"lng":-0.03765,"elevation":60.3},{"lat":51.447205,"lng":-0.037575,"elevation":60.4},{"lat":51.447189,"lng":-0.037531,"elevation":60.5},{"lat":51.44717,"lng":-0.037485,"elevation":60.5},{"lat":51.44715,"lng":-0.03743,"elevation":60.5},{"lat":51.447133,"lng":-0.037375,"elevation":60.5},{"lat":51.447117,"lng":-0.037329,"elevation":60.5},{"lat":51.447093,"lng":-0.037253,"elevation":60.5},{"lat":51.44708,"lng":-0.03721,"elevation":60.4},{"lat":51.44707,"lng":-0.037164,"elevation":60.2},{"lat":51.447062,"lng":-0.037117,"elevation":60},{"lat":51.447047,"lng":-0.037038,"elevation":59.7},{"lat":51.447036,"lng":-0.036966,"elevation":59.3},{"lat":51.447029,"lng":-0.036888,"elevation":58.9},{"lat":51.447021,"lng":-0.036844,"elevation":58.7},{"lat":51.447011,"lng":-0.036804,"elevation":58.5},{"lat":51.446996,"lng":-0.036748,"elevation":58.2},{"lat":51.446983,"lng":-0.036693,"elevation":57.9},{"lat":51.44697,"lng":-0.036625,"elevation":57.5},{"lat":51.446961,"lng":-0.036548,"elevation":57.2},{"lat":51.446954,"lng":-0.036471,"elevation":56.8},{"lat":51.44695,"lng":-0.036422,"elevation":56.6},{"lat":51.446943,"lng":-0.036372,"elevation":56.4},{"lat":51.446937,"lng":-0.036317,"elevation":56.1},{"lat":51.446931,"lng":-0.036272,"elevation":55.9},{"lat":51.446926,"lng":-0.036224,"elevation":55.8},{"lat":51.446915,"lng":-0.036138,"elevation":55.6},{"lat":51.446907,"lng":-0.03609,"elevation":55.4},{"lat":51.446903,"lng":-0.036038,"elevation":55.3},{"lat":51.4469,"lng":-0.03599,"elevation":55.2},{"lat":51.446905,"lng":-0.035945,"elevation":55.1},{"lat":51.446909,"lng":-0.035877,"elevation":55},{"lat":51.446907,"lng":-0.03582,"elevation":54.9},{"lat":51.446902,"lng":-0.035749,"elevation":54.7},{"lat":51.446899,"lng":-0.03567,"elevation":54.5},{"lat":51.446898,"lng":-0.035594,"elevation":54.4},{"lat":51.446901,"lng":-0.03552,"elevation":54.2},{"lat":51.446908,"lng":-0.035462,"elevation":54.1},{"lat":51.44692,"lng":-0.035408,"elevation":54},{"lat":51.446948,"lng":-0.035374,"elevation":53.9},{"lat":51.446996,"lng":-0.035388,"elevation":53.9},{"lat":51.447022,"lng":-0.035404,"elevation":54},{"lat":51.447069,"lng":-0.035433,"elevation":54},{"lat":51.447115,"lng":-0.035455,"elevation":53.9},{"lat":51.447162,"lng":-0.035481,"elevation":53.8},{"lat":51.447207,"lng":-0.035505,"elevation":53.6},{"lat":51.447249,"lng":-0.035529,"elevation":53.4},{"lat":51.447291,"lng":-0.035553,"elevation":53.3},{"lat":51.447335,"lng":-0.035577,"elevation":53.1},{"lat":51.447379,"lng":-0.035604,"elevation":53},{"lat":51.447419,"lng":-0.035622,"elevation":52.8},{"lat":51.447458,"lng":-0.035646,"elevation":52.6},{"lat":51.447491,"lng":-0.035671,"elevation":52.5},{"lat":51.447523,"lng":-0.0357,"elevation":52.4},{"lat":51.447556,"lng":-0.035733,"elevation":52.3},{"lat":51.447594,"lng":-0.03576,"elevation":52.1},{"lat":51.447634,"lng":-0.035789,"elevation":52},{"lat":51.447675,"lng":-0.035823,"elevation":51.8},{"lat":51.447719,"lng":-0.035859,"elevation":51.6},{"lat":51.447764,"lng":-0.035894,"elevation":51.4},{"lat":51.447806,"lng":-0.035929,"elevation":51.2},{"lat":51.447845,"lng":-0.03596,"elevation":51.1},{"lat":51.447881,"lng":-0.035991,"elevation":50.9},{"lat":51.447918,"lng":-0.036023,"elevation":50.7},{"lat":51.44796,"lng":-0.036062,"elevation":50.4},{"lat":51.447998,"lng":-0.0361,"elevation":50.1},{"lat":51.448035,"lng":-0.03614,"elevation":49.9},{"lat":51.448072,"lng":-0.036171,"elevation":49.6},{"lat":51.448108,"lng":-0.036199,"elevation":49.3},{"lat":51.448134,"lng":-0.036227,"elevation":49.1},{"lat":51.448169,"lng":-0.036259,"elevation":48.9},{"lat":51.448211,"lng":-0.036286,"elevation":48.5},{"lat":51.448251,"lng":-0.036305,"elevation":48.2},{"lat":51.448285,"lng":-0.036306,"elevation":47.9},{"lat":51.448321,"lng":-0.036326,"elevation":47.6},{"lat":51.448338,"lng":-0.036385,"elevation":47.5},{"lat":51.448346,"lng":-0.036448,"elevation":47.4},{"lat":51.448354,"lng":-0.036517,"elevation":47.3},{"lat":51.448361,"lng":-0.036589,"elevation":47.2},{"lat":51.448368,"lng":-0.03666,"elevation":47.2},{"lat":51.448383,"lng":-0.036717,"elevation":47},{"lat":51.448394,"lng":-0.036773,"elevation":46.9},{"lat":51.448397,"lng":-0.036838,"elevation":46.9},{"lat":51.448393,"lng":-0.036892,"elevation":46.9},{"lat":51.448375,"lng":-0.036944,"elevation":47.1},{"lat":51.448362,"lng":-0.036997,"elevation":47.2},{"lat":51.44835,"lng":-0.037061,"elevation":47.3},{"lat":51.448328,"lng":-0.037122,"elevation":47.6},{"lat":51.448316,"lng":-0.037181,"elevation":47.7},{"lat":51.448303,"lng":-0.037249,"elevation":47.8},{"lat":51.44829,"lng":-0.03732,"elevation":48},{"lat":51.448281,"lng":-0.037364,"elevation":48.1},{"lat":51.448267,"lng":-0.037443,"elevation":48.3},{"lat":51.448253,"lng":-0.03752,"elevation":48.5},{"lat":51.448245,"lng":-0.037601,"elevation":48.6},{"lat":51.448232,"lng":-0.037682,"elevation":48.8},{"lat":51.448217,"lng":-0.037751,"elevation":49},{"lat":51.448201,"lng":-0.0378,"elevation":49.2},{"lat":51.448181,"lng":-0.037847,"elevation":49.5},{"lat":51.448154,"lng":-0.037886,"elevation":49.9},{"lat":51.448124,"lng":-0.0379,"elevation":50.3},{"lat":51.448089,"lng":-0.037902,"elevation":50.7},{"lat":51.448057,"lng":-0.0379,"elevation":51.1},{"lat":51.448023,"lng":-0.037908,"elevation":51.6},{"lat":51.447991,"lng":-0.037913,"elevation":52},{"lat":51.447955,"lng":-0.037918,"elevation":52.5},{"lat":51.447922,"lng":-0.037906,"elevation":52.9},{"lat":51.447886,"lng":-0.037892,"elevation":53.3},{"lat":51.447855,"lng":-0.037876,"elevation":53.7},{"lat":51.447827,"lng":-0.03787,"elevation":54},{"lat":51.447795,"lng":-0.037875,"elevation":54.4},{"lat":51.447762,"lng":-0.037874,"elevation":54.8},{"lat":51.44773,"lng":-0.037868,"elevation":55.2},{"lat":51.447696,"lng":-0.037846,"elevation":55.5},{"lat":51.447672,"lng":-0.037826,"elevation":55.8},{"lat":51.447641,"lng":-0.037795,"elevation":56.1},{"lat":51.447605,"lng":-0.03777,"elevation":56.4},{"lat":51.447577,"lng":-0.037767,"elevation":56.7},{"lat":51.447544,"lng":-0.037758,"elevation":57.1},{"lat":51.447503,"lng":-0.037757,"elevation":57.6},{"lat":51.447456,"lng":-0.037763,"elevation":58.1},{"lat":51.447417,"lng":-0.03776,"elevation":58.6},{"lat":51.447372,"lng":-0.037756,"elevation":59.1},{"lat":51.447332,"lng":-0.037763,"elevation":59.6},{"lat":51.447297,"lng":-0.03777,"elevation":60},{"lat":51.447266,"lng":-0.037762,"elevation":60.3},{"lat":51.447244,"lng":-0.037716,"elevation":60.4},{"lat":51.447236,"lng":-0.037673,"elevation":60.4},{"lat":51.447212,"lng":-0.037605,"elevation":60.4},{"lat":51.447186,"lng":-0.037536,"elevation":60.5},{"lat":51.44716,"lng":-0.03747,"elevation":60.6},{"lat":51.447138,"lng":-0.037401,"elevation":60.6},{"lat":51.447129,"lng":-0.037344,"elevation":60.5},{"lat":51.447122,"lng":-0.03729,"elevation":60.3},{"lat":51.447106,"lng":-0.03723,"elevation":60.3},{"lat":51.447094,"lng":-0.037155,"elevation":60.2},{"lat":51.447082,"lng":-0.037106,"elevation":60.1},{"lat":51.447073,"lng":-0.037061,"elevation":59.9},{"lat":51.447065,"lng":-0.037015,"elevation":59.6},{"lat":51.447058,"lng":-0.036969,"elevation":59.4},{"lat":51.447049,"lng":-0.036921,"elevation":59.1},{"lat":51.447041,"lng":-0.036879,"elevation":58.9},{"lat":51.447026,"lng":-0.036796,"elevation":58.5},{"lat":51.447012,"lng":-0.03671,"elevation":58},{"lat":51.446994,"lng":-0.036634,"elevation":57.6},{"lat":51.44698,"lng":-0.036565,"elevation":57.3},{"lat":51.446976,"lng":-0.036508,"elevation":57},{"lat":51.446971,"lng":-0.036442,"elevation":56.7},{"lat":51.446966,"lng":-0.036369,"elevation":56.4},{"lat":51.446959,"lng":-0.036296,"elevation":56.1},{"lat":51.446948,"lng":-0.036227,"elevation":55.8},{"lat":51.446935,"lng":-0.03615,"elevation":55.6},{"lat":51.446929,"lng":-0.036098,"elevation":55.5},{"lat":51.446915,"lng":-0.036025,"elevation":55.3},{"lat":51.446899,"lng":-0.035948,"elevation":55.1},{"lat":51.446892,"lng":-0.035906,"elevation":55},{"lat":51.446887,"lng":-0.035825,"elevation":54.9},{"lat":51.446887,"lng":-0.03578,"elevation":54.8},{"lat":51.446885,"lng":-0.035735,"elevation":54.7},{"lat":51.446882,"lng":-0.03566,"elevation":54.5},{"lat":51.44688,"lng":-0.035601,"elevation":54.4},{"lat":51.446886,"lng":-0.035556,"elevation":54.3},{"lat":51.44689,"lng":-0.035513,"elevation":54.2},{"lat":51.446889,"lng":-0.035456,"elevation":54.1},{"lat":51.446905,"lng":-0.03539,"elevation":53.9},{"lat":51.446948,"lng":-0.035362,"elevation":53.9},{"lat":51.446998,"lng":-0.035373,"elevation":53.9},{"lat":51.447048,"lng":-0.035388,"elevation":53.9},{"lat":51.4471,"lng":-0.035408,"elevation":53.9},{"lat":51.447144,"lng":-0.035432,"elevation":53.7},{"lat":51.447183,"lng":-0.035459,"elevation":53.6},{"lat":51.44722,"lng":-0.03548,"elevation":53.5},{"lat":51.447261,"lng":-0.035502,"elevation":53.3},{"lat":51.447299,"lng":-0.035523,"elevation":53.2},{"lat":51.447341,"lng":-0.035547,"elevation":53},{"lat":51.447382,"lng":-0.035572,"elevation":52.9},{"lat":51.447421,"lng":-0.035604,"elevation":52.7},{"lat":51.447466,"lng":-0.035641,"elevation":52.6},{"lat":51.447507,"lng":-0.03568,"elevation":52.4},{"lat":51.447546,"lng":-0.035713,"elevation":52.3},{"lat":51.447588,"lng":-0.035742,"elevation":52.1},{"lat":51.447626,"lng":-0.035771,"elevation":52},{"lat":51.447664,"lng":-0.035802,"elevation":51.8},{"lat":51.447701,"lng":-0.035838,"elevation":51.7},{"lat":51.44774,"lng":-0.035872,"elevation":51.5},{"lat":51.447778,"lng":-0.035904,"elevation":51.3},{"lat":51.447811,"lng":-0.035935,"elevation":51.2},{"lat":51.447845,"lng":-0.035967,"elevation":51.1},{"lat":51.447882,"lng":-0.035996,"elevation":50.9},{"lat":51.447916,"lng":-0.036029,"elevation":50.7},{"lat":51.447952,"lng":-0.036068,"elevation":50.5},{"lat":51.447989,"lng":-0.03611,"elevation":50.2},{"lat":51.448029,"lng":-0.036147,"elevation":49.9},{"lat":51.448072,"lng":-0.036173,"elevation":49.6},{"lat":51.448111,"lng":-0.036213,"elevation":49.3},{"lat":51.448143,"lng":-0.036248,"elevation":49.1},{"lat":51.448168,"lng":-0.036267,"elevation":48.9},{"lat":51.4482,"lng":-0.036287,"elevation":48.6},{"lat":51.448236,"lng":-0.036304,"elevation":48.3},{"lat":51.44827,"lng":-0.036316,"elevation":48},{"lat":51.448305,"lng":-0.036322,"elevation":47.7},{"lat":51.448332,"lng":-0.036357,"elevation":47.5},{"lat":51.448344,"lng":-0.036428,"elevation":47.4},{"lat":51.448355,"lng":-0.036494,"elevation":47.3},{"lat":51.448366,"lng":-0.036548,"elevation":47.2},{"lat":51.448379,"lng":-0.036617,"elevation":47.1},{"lat":51.448392,"lng":-0.03667,"elevation":46.9},{"lat":51.448403,"lng":-0.036726,"elevation":46.8},{"lat":51.448409,"lng":-0.036788,"elevation":46.7},{"lat":51.448409,"lng":-0.036855,"elevation":46.7},{"lat":51.448396,"lng":-0.036911,"elevation":46.9},{"lat":51.448377,"lng":-0.036947,"elevation":47},{"lat":51.448359,"lng":-0.036991,"elevation":47.2},{"lat":51.448339,"lng":-0.037024,"elevation":47.4},{"lat":51.448327,"lng":-0.037071,"elevation":47.6},{"lat":51.448326,"lng":-0.037136,"elevation":47.6},{"lat":51.448323,"lng":-0.037219,"elevation":47.6},{"lat":51.448318,"lng":-0.037262,"elevation":47.7},{"lat":51.448313,"lng":-0.037309,"elevation":47.7},{"lat":51.448305,"lng":-0.037352,"elevation":47.8},{"lat":51.448288,"lng":-0.037426,"elevation":48},{"lat":51.44827,"lng":-0.037484,"elevation":48.3},{"lat":51.448256,"lng":-0.037534,"elevation":48.4},{"lat":51.448243,"lng":-0.0376,"elevation":48.6},{"lat":51.448232,"lng":-0.037677,"elevation":48.8},{"lat":51.448225,"lng":-0.037719,"elevation":48.9},{"lat":51.448218,"lng":-0.037764,"elevation":49},{"lat":51.448195,"lng":-0.037842,"elevation":49.3},{"lat":51.448163,"lng":-0.037903,"elevation":49.7},{"lat":51.448129,"lng":-0.03791,"elevation":50.2},{"lat":51.448101,"lng":-0.037886,"elevation":50.5},{"lat":51.448065,"lng":-0.037884,"elevation":51},{"lat":51.448038,"lng":-0.037897,"elevation":51.4},{"lat":51.448005,"lng":-0.037915,"elevation":51.8},{"lat":51.447971,"lng":-0.037913,"elevation":52.3},{"lat":51.447939,"lng":-0.037908,"elevation":52.7},{"lat":51.447907,"lng":-0.037885,"elevation":53.1},{"lat":51.447881,"lng":-0.037871,"elevation":53.4},{"lat":51.447847,"lng":-0.037858,"elevation":53.8},{"lat":51.447818,"lng":-0.037861,"elevation":54.1},{"lat":51.447778,"lng":-0.037853,"elevation":54.6},{"lat":51.447749,"lng":-0.037843,"elevation":54.9},{"lat":51.447719,"lng":-0.037824,"elevation":55.2},{"lat":51.447679,"lng":-0.037805,"elevation":55.6},{"lat":51.44764,"lng":-0.037779,"elevation":56},{"lat":51.447602,"lng":-0.037758,"elevation":56.4},{"lat":51.447566,"lng":-0.037734,"elevation":56.8},{"lat":51.447544,"lng":-0.037706,"elevation":57},{"lat":51.447513,"lng":-0.037686,"elevation":57.3},{"lat":51.447478,"lng":-0.037684,"elevation":57.7},{"lat":51.44745,"lng":-0.037709,"elevation":58.1},{"lat":51.447421,"lng":-0.037727,"elevation":58.4},{"lat":51.447393,"lng":-0.037734,"elevation":58.8},{"lat":51.447365,"lng":-0.037736,"elevation":59.1},{"lat":51.447332,"lng":-0.037731,"elevation":59.5},{"lat":51.447283,"lng":-0.037713,"elevation":60},{"lat":51.447248,"lng":-0.03766,"elevation":60.2},{"lat":51.447225,"lng":-0.03759,"elevation":60.3},{"lat":51.447199,"lng":-0.037517,"elevation":60.3},{"lat":51.447182,"lng":-0.037477,"elevation":60.4},{"lat":51.447161,"lng":-0.037424,"elevation":60.4},{"lat":51.447144,"lng":-0.037388,"elevation":60.5},{"lat":51.447121,"lng":-0.037319,"elevation":60.5},{"lat":51.447103,"lng":-0.037258,"elevation":60.4},{"lat":51.44708,"lng":-0.037177,"elevation":60.3},{"lat":51.447071,"lng":-0.037134,"elevation":60.1},{"lat":51.447062,"lng":-0.037093,"elevation":60},{"lat":51.447045,"lng":-0.03703,"elevation":59.6},{"lat":51.44703,"lng":-0.036966,"elevation":59.3},{"lat":51.447019,"lng":-0.036897,"elevation":58.9},{"lat":51.447008,"lng":-0.036825,"elevation":58.5},{"lat":51.446991,"lng":-0.036757,"elevation":58.2},{"lat":51.446965,"lng":-0.036709,"elevation":57.9},{"lat":51.44695,"lng":-0.036644,"elevation":57.6},{"lat":51.446945,"lng":-0.036566,"elevation":57.2},{"lat":51.44694,"lng":-0.036521,"elevation":57},{"lat":51.446935,"lng":-0.036477,"elevation":56.8},{"lat":51.446933,"lng":-0.0364,"elevation":56.5},{"lat":51.446927,"lng":-0.036315,"elevation":56.1},{"lat":51.446925,"lng":-0.036266,"elevation":55.9},{"lat":51.446921,"lng":-0.036208,"elevation":55.7},{"lat":51.446914,"lng":-0.036141,"elevation":55.6},{"lat":51.446912,"lng":-0.036087,"elevation":55.4},{"lat":51.446908,"lng":-0.036027,"elevation":55.3},{"lat":51.446909,"lng":-0.03595,"elevation":55.1},{"lat":51.446907,"lng":-0.035868,"elevation":55},{"lat":51.446906,"lng":-0.035824,"elevation":54.9},{"lat":51.446904,"lng":-0.035735,"elevation":54.7},{"lat":51.446902,"lng":-0.035682,"elevation":54.6},{"lat":51.446901,"lng":-0.035631,"elevation":54.5},{"lat":51.446904,"lng":-0.035552,"elevation":54.3},{"lat":51.446905,"lng":-0.035477,"elevation":54.1},{"lat":51.446902,"lng":-0.035423,"elevation":54},{"lat":51.446907,"lng":-0.035367,"elevation":53.9},{"lat":51.446946,"lng":-0.035351,"elevation":53.8},{"lat":51.446991,"lng":-0.035385,"elevation":53.9},{"lat":51.447041,"lng":-0.035421,"elevation":54},{"lat":51.447067,"lng":-0.035438,"elevation":54.1},{"lat":51.447092,"lng":-0.035456,"elevation":54.1},{"lat":51.447136,"lng":-0.035487,"elevation":53.9},{"lat":51.447179,"lng":-0.035513,"elevation":53.8},{"lat":51.447225,"lng":-0.035537,"elevation":53.6},{"lat":51.44727,"lng":-0.035563,"elevation":53.4},{"lat":51.447309,"lng":-0.035585,"elevation":53.3},{"lat":51.44735,"lng":-0.035603,"elevation":53.1},{"lat":51.447393,"lng":-0.035621,"elevation":52.9},{"lat":51.447432,"lng":-0.035653,"elevation":52.8},{"lat":51.447474,"lng":-0.035683,"elevation":52.6},{"lat":51.447514,"lng":-0.03571,"elevation":52.5},{"lat":51.447552,"lng":-0.035738,"elevation":52.3},{"lat":51.447591,"lng":-0.035769,"elevation":52.2},{"lat":51.447632,"lng":-0.035798,"elevation":52},{"lat":51.447678,"lng":-0.035826,"elevation":51.8},{"lat":51.447723,"lng":-0.035851,"elevation":51.6},{"lat":51.447762,"lng":-0.035882,"elevation":51.4},{"lat":51.447799,"lng":-0.035915,"elevation":51.2},{"lat":51.447837,"lng":-0.035943,"elevation":51.1},{"lat":51.447876,"lng":-0.035973,"elevation":50.9},{"lat":51.447915,"lng":-0.036004,"elevation":50.7},{"lat":51.447956,"lng":-0.036035,"elevation":50.4},{"lat":51.447997,"lng":-0.036069,"elevation":50.1},{"lat":51.448034,"lng":-0.036118,"elevation":49.9},{"lat":51.448071,"lng":-0.036154,"elevation":49.6},{"lat":51.448108,"lng":-0.036192,"elevation":49.3},{"lat":51.44814,"lng":-0.036213,"elevation":49.1},{"lat":51.448164,"lng":-0.036239,"elevation":48.9},{"lat":51.448196,"lng":-0.036266,"elevation":48.7},{"lat":51.448235,"lng":-0.03629,"elevation":48.3},{"lat":51.448274,"lng":-0.036308,"elevation":48},{"lat":51.448314,"lng":-0.036319,"elevation":47.7},{"lat":51.448344,"lng":-0.036353,"elevation":47.4},{"lat":51.448352,"lng":-0.036412,"elevation":47.3},{"lat":51.448357,"lng":-0.036469,"elevation":47.3},{"lat":51.448357,"lng":-0.036527,"elevation":47.3},{"lat":51.448361,"lng":-0.036579,"elevation":47.2},{"lat":51.44837,"lng":-0.036636,"elevation":47.2},{"lat":51.448384,"lng":-0.036692,"elevation":47},{"lat":51.448395,"lng":-0.036754,"elevation":46.9},{"lat":51.448391,"lng":-0.036812,"elevation":46.9},{"lat":51.448378,"lng":-0.036864,"elevation":47},{"lat":51.448366,"lng":-0.036913,"elevation":47.2},{"lat":51.448356,"lng":-0.03697,"elevation":47.3},{"lat":51.448356,"lng":-0.037029,"elevation":47.3},{"lat":51.448347,"lng":-0.037071,"elevation":47.4},{"lat":51.448335,"lng":-0.037115,"elevation":47.5},{"lat":51.448327,"lng":-0.03717,"elevation":47.6},{"lat":51.448309,"lng":-0.037241,"elevation":47.8},{"lat":51.448295,"lng":-0.037326,"elevation":47.9},{"lat":51.448284,"lng":-0.037403,"elevation":48.1},{"lat":51.44827,"lng":-0.037477,"elevation":48.3},{"lat":51.448263,"lng":-0.037523,"elevation":48.3},{"lat":51.448256,"lng":-0.037569,"elevation":48.4},{"lat":51.448248,"lng":-0.037613,"elevation":48.6},{"lat":51.44823,"lng":-0.037684,"elevation":48.8},{"lat":51.44821,"lng":-0.037755,"elevation":49.1},{"lat":51.448192,"lng":-0.037829,"elevation":49.3},{"lat":51.448174,"lng":-0.037904,"elevation":49.6},{"lat":51.448165,"lng":-0.03797,"elevation":49.5},{"lat":51.448161,"lng":-0.038013,"elevation":49.4},{"lat":51.448145,"lng":-0.03808,"elevation":49.3},{"lat":51.448125,"lng":-0.038134,"elevation":49.3},{"lat":51.448112,"lng":-0.038193,"elevation":49.3},{"lat":51.448104,"lng":-0.038254,"elevation":49.1},{"lat":51.448087,"lng":-0.038307,"elevation":49.1},{"lat":51.448074,"lng":-0.038374,"elevation":48.9},{"lat":51.448059,"lng":-0.038436,"elevation":48.8},{"lat":51.448039,"lng":-0.038498,"elevation":48.8},{"lat":51.448018,"lng":-0.038544,"elevation":48.8},{"lat":51.448001,"lng":-0.038578,"elevation":48.9},{"lat":51.447991,"lng":-0.038619,"elevation":48.8},{"lat":51.447982,"lng":-0.038669,"elevation":48.7},{"lat":51.447969,"lng":-0.03872,"elevation":48.6},{"lat":51.447952,"lng":-0.038775,"elevation":48.5},{"lat":51.447934,"lng":-0.038827,"elevation":48.4},{"lat":51.447917,"lng":-0.038872,"elevation":48.4},{"lat":51.447903,"lng":-0.038931,"elevation":48.3},{"lat":51.447898,"lng":-0.039006,"elevation":48},{"lat":51.447888,"lng":-0.039072,"elevation":47.8},{"lat":51.447873,"lng":-0.039136,"elevation":47.7},{"lat":51.447862,"lng":-0.039199,"elevation":47.5},{"lat":51.447851,"lng":-0.03927,"elevation":47.3},{"lat":51.447844,"lng":-0.039312,"elevation":47.2},{"lat":51.447837,"lng":-0.039362,"elevation":47},{"lat":51.447829,"lng":-0.039406,"elevation":46.9},{"lat":51.447807,"lng":-0.039479,"elevation":46.8},{"lat":51.447794,"lng":-0.039519,"elevation":46.8},{"lat":51.447775,"lng":-0.039598,"elevation":46.6},{"lat":51.447761,"lng":-0.039679,"elevation":46.4},{"lat":51.447755,"lng":-0.039727,"elevation":46.3},{"lat":51.447746,"lng":-0.039774,"elevation":46.2},{"lat":51.447737,"lng":-0.039824,"elevation":46},{"lat":51.447728,"lng":-0.039883,"elevation":45.9},{"lat":51.447719,"lng":-0.039939,"elevation":45.7},{"lat":51.44771,"lng":-0.039988,"elevation":45.5},{"lat":51.4477,"lng":-0.040032,"elevation":45.4},{"lat":51.447691,"lng":-0.040078,"elevation":45.3},{"lat":51.447686,"lng":-0.040131,"elevation":45.1},{"lat":51.447681,"lng":-0.04018,"elevation":44.9},{"lat":51.447675,"lng":-0.040229,"elevation":44.7},{"lat":51.447668,"lng":-0.040273,"elevation":44.5},{"lat":51.447658,"lng":-0.040315,"elevation":44.4},{"lat":51.447646,"lng":-0.040358,"elevation":44.3},{"lat":51.447635,"lng":-0.040399,"elevation":44.1},{"lat":51.447626,"lng":-0.04044,"elevation":44},{"lat":51.447607,"lng":-0.040485,"elevation":43.9},{"lat":51.447595,"lng":-0.040535,"elevation":43.8},{"lat":51.447583,"lng":-0.04059,"elevation":43.7},{"lat":51.447567,"lng":-0.040627,"elevation":43.6},{"lat":51.447554,"lng":-0.04068,"elevation":43.4},{"lat":51.447535,"lng":-0.040746,"elevation":43.2},{"lat":51.447527,"lng":-0.040816,"elevation":43},{"lat":51.447529,"lng":-0.040865,"elevation":42.7},{"lat":51.447514,"lng":-0.040902,"elevation":42.6},{"lat":51.447501,"lng":-0.040949,"elevation":42.4},{"lat":51.447486,"lng":-0.041016,"elevation":42.2},{"lat":51.447465,"lng":-0.041089,"elevation":41.9},{"lat":51.447449,"lng":-0.041163,"elevation":41.6},{"lat":51.447442,"lng":-0.041206,"elevation":41.4},{"lat":51.447437,"lng":-0.041251,"elevation":41.2},{"lat":51.447431,"lng":-0.041338,"elevation":41.1},{"lat":51.447409,"lng":-0.041409,"elevation":41.1},{"lat":51.447391,"lng":-0.041445,"elevation":41.1},{"lat":51.447371,"lng":-0.041486,"elevation":41.1},{"lat":51.447349,"lng":-0.041532,"elevation":41.1},{"lat":51.447325,"lng":-0.041578,"elevation":41.1},{"lat":51.447302,"lng":-0.041619,"elevation":41.1},{"lat":51.447278,"lng":-0.041655,"elevation":41.2},{"lat":51.447237,"lng":-0.041706,"elevation":41.2},{"lat":51.447209,"lng":-0.041749,"elevation":41.2},{"lat":51.44719,"lng":-0.041796,"elevation":41.2},{"lat":51.447157,"lng":-0.041853,"elevation":41.2},{"lat":51.447128,"lng":-0.041919,"elevation":41.1},{"lat":51.447113,"lng":-0.041955,"elevation":41.1},{"lat":51.447093,"lng":-0.04199,"elevation":41.1},{"lat":51.447066,"lng":-0.042031,"elevation":41},{"lat":51.447041,"lng":-0.042065,"elevation":41},{"lat":51.447019,"lng":-0.042099,"elevation":40.9},{"lat":51.446998,"lng":-0.042132,"elevation":40.8},{"lat":51.446974,"lng":-0.042163,"elevation":40.8},{"lat":51.446948,"lng":-0.042175,"elevation":40.7},{"lat":51.446904,"lng":-0.042178,"elevation":40.6},{"lat":51.446881,"lng":-0.042215,"elevation":40.6},{"lat":51.446848,"lng":-0.042271,"elevation":40.4},{"lat":51.446804,"lng":-0.042319,"elevation":40.3},{"lat":51.446782,"lng":-0.042344,"elevation":40.2},{"lat":51.446737,"lng":-0.042387,"elevation":40.1},{"lat":51.446691,"lng":-0.042427,"elevation":39.9},{"lat":51.446665,"lng":-0.042444,"elevation":39.8},{"lat":51.446626,"lng":-0.042482,"elevation":39.7},{"lat":51.446592,"lng":-0.042513,"elevation":39.6},{"lat":51.446553,"lng":-0.042526,"elevation":39.5},{"lat":51.446505,"lng":-0.042535,"elevation":39.4},{"lat":51.446456,"lng":-0.042546,"elevation":39.3},{"lat":51.446407,"lng":-0.042554,"elevation":39.2},{"lat":51.446369,"lng":-0.042537,"elevation":39.1},{"lat":51.446334,"lng":-0.042518,"elevation":39.1},{"lat":51.4463,"lng":-0.042511,"elevation":39.1},{"lat":51.446271,"lng":-0.042496,"elevation":39},{"lat":51.446231,"lng":-0.0425,"elevation":38.9},{"lat":51.446204,"lng":-0.0425,"elevation":38.9},{"lat":51.446152,"lng":-0.0425,"elevation":38.7},{"lat":51.446104,"lng":-0.042505,"elevation":38.6},{"lat":51.446063,"lng":-0.042503,"elevation":38.4},{"lat":51.446014,"lng":-0.042511,"elevation":38.3},{"lat":51.445987,"lng":-0.042513,"elevation":38.2},{"lat":51.445958,"lng":-0.042512,"elevation":38.1},{"lat":51.445929,"lng":-0.042511,"elevation":38},{"lat":51.445899,"lng":-0.042515,"elevation":37.9},{"lat":51.44587,"lng":-0.042518,"elevation":37.8},{"lat":51.445842,"lng":-0.042518,"elevation":37.7},{"lat":51.445804,"lng":-0.042519,"elevation":37.6},{"lat":51.445754,"lng":-0.042517,"elevation":37.5},{"lat":51.445725,"lng":-0.04252,"elevation":37.4},{"lat":51.44569,"lng":-0.042515,"elevation":37.3},{"lat":51.445662,"lng":-0.04251,"elevation":37.2},{"lat":51.445635,"lng":-0.042498,"elevation":37.2},{"lat":51.445608,"lng":-0.042484,"elevation":37.1},{"lat":51.445557,"lng":-0.042475,"elevation":37},{"lat":51.445529,"lng":-0.042478,"elevation":36.9},{"lat":51.445479,"lng":-0.042476,"elevation":36.7},{"lat":51.44544,"lng":-0.042482,"elevation":36.6},{"lat":51.445398,"lng":-0.042483,"elevation":36.5},{"lat":51.445367,"lng":-0.0425,"elevation":36.5},{"lat":51.445339,"lng":-0.042514,"elevation":36.4},{"lat":51.445318,"lng":-0.042558,"elevation":36.4},{"lat":51.445311,"lng":-0.042628,"elevation":36.3},{"lat":51.44531,"lng":-0.042674,"elevation":36.3},{"lat":51.445318,"lng":-0.04272,"elevation":36.2},{"lat":51.445344,"lng":-0.042759,"elevation":36.2},{"lat":51.445355,"lng":-0.042813,"elevation":36.1},{"lat":51.44535,"lng":-0.042856,"elevation":36.1},{"lat":51.445344,"lng":-0.042912,"elevation":36},{"lat":51.445341,"lng":-0.042971,"elevation":36.1},{"lat":51.445339,"lng":-0.043026,"elevation":36.3},{"lat":51.445341,"lng":-0.043071,"elevation":36.4},{"lat":51.445344,"lng":-0.043118,"elevation":36.5},{"lat":51.445371,"lng":-0.043075,"elevation":36.4},{"lat":51.445382,"lng":-0.043124,"elevation":36.5},{"lat":51.44538,"lng":-0.043169,"elevation":36.6},{"lat":51.445376,"lng":-0.04322,"elevation":36.7},{"lat":51.445372,"lng":-0.043277,"elevation":36.8},{"lat":51.44537,"lng":-0.04333,"elevation":37},{"lat":51.445378,"lng":-0.04338,"elevation":37.1},{"lat":51.445382,"lng":-0.043432,"elevation":37.2},{"lat":51.445375,"lng":-0.043496,"elevation":37.4},{"lat":51.44537,"lng":-0.043545,"elevation":37.5},{"lat":51.445363,"lng":-0.043599,"elevation":37.6},{"lat":51.445365,"lng":-0.043663,"elevation":37.7},{"lat":51.445365,"lng":-0.04371,"elevation":37.8},{"lat":51.445362,"lng":-0.043759,"elevation":38},{"lat":51.445362,"lng":-0.043831,"elevation":38.1},{"lat":51.445364,"lng":-0.043899,"elevation":38.3},{"lat":51.445368,"lng":-0.043947,"elevation":38.4},{"lat":51.445372,"lng":-0.044004,"elevation":38.5},{"lat":51.445374,"lng":-0.044057,"elevation":38.7},{"lat":51.44538,"lng":-0.044106,"elevation":38.8},{"lat":51.445381,"lng":-0.044159,"elevation":38.9},{"lat":51.445383,"lng":-0.044207,"elevation":39},{"lat":51.445408,"lng":-0.044234,"elevation":39.1},{"lat":51.445406,"lng":-0.044288,"elevation":39.3},{"lat":51.445398,"lng":-0.044343,"elevation":39.4},{"lat":51.445387,"lng":-0.044405,"elevation":39.5},{"lat":51.445378,"lng":-0.044458,"elevation":39.6},{"lat":51.445372,"lng":-0.044509,"elevation":39.7},{"lat":51.445372,"lng":-0.044576,"elevation":39.9},{"lat":51.445367,"lng":-0.044629,"elevation":40},{"lat":51.445351,"lng":-0.044667,"elevation":40},{"lat":51.44533,"lng":-0.044696,"elevation":40},{"lat":51.445303,"lng":-0.044706,"elevation":40},{"lat":51.44527,"lng":-0.044728,"elevation":40},{"lat":51.445233,"lng":-0.044749,"elevation":39.9},{"lat":51.4452,"lng":-0.04477,"elevation":39.9},{"lat":51.445163,"lng":-0.044771,"elevation":39.8},{"lat":51.445182,"lng":-0.04482,"elevation":39.9},{"lat":51.445181,"lng":-0.044866,"elevation":40},{"lat":51.445152,"lng":-0.044886,"elevation":40},{"lat":51.445143,"lng":-0.044938,"elevation":40.1},{"lat":51.445175,"lng":-0.044952,"elevation":40.2},{"lat":51.44514,"lng":-0.044939,"elevation":40},{"lat":51.44515,"lng":-0.044895,"elevation":40}],[{"lat":51.445286,"lng":-0.044769,"elevation":40.1},{"lat":51.445225,"lng":-0.044724,"elevation":39.8},{"lat":51.445246,"lng":-0.044693,"elevation":39.8},{"lat":51.445272,"lng":-0.044669,"elevation":39.8},{"lat":51.445288,"lng":-0.044626,"elevation":39.8},{"lat":51.445323,"lng":-0.044643,"elevation":39.9},{"lat":51.445351,"lng":-0.044638,"elevation":40},{"lat":51.445353,"lng":-0.044582,"elevation":39.8},{"lat":51.445348,"lng":-0.04453,"elevation":39.7},{"lat":51.445342,"lng":-0.044473,"elevation":39.6},{"lat":51.445342,"lng":-0.044427,"elevation":39.5},{"lat":51.445338,"lng":-0.044372,"elevation":39.3},{"lat":51.445333,"lng":-0.044318,"elevation":39.2},{"lat":51.44533,"lng":-0.044263,"elevation":39.1},{"lat":51.445333,"lng":-0.044206,"elevation":38.9},{"lat":51.445338,"lng":-0.04414,"elevation":38.8},{"lat":51.445332,"lng":-0.044081,"elevation":38.7},{"lat":51.445344,"lng":-0.04403,"elevation":38.6},{"lat":51.445353,"lng":-0.043982,"elevation":38.5},{"lat":51.445362,"lng":-0.04393,"elevation":38.4},{"lat":51.445365,"lng":-0.043873,"elevation":38.2},{"lat":51.445369,"lng":-0.043815,"elevation":38.1},{"lat":51.445359,"lng":-0.043764,"elevation":38},{"lat":51.445359,"lng":-0.043719,"elevation":37.9},{"lat":51.445362,"lng":-0.043676,"elevation":37.8},{"lat":51.44536,"lng":-0.043614,"elevation":37.6},{"lat":51.445357,"lng":-0.043551,"elevation":37.5},{"lat":51.44535,"lng":-0.043492,"elevation":37.3},{"lat":51.44534,"lng":-0.043437,"elevation":37.2},{"lat":51.445341,"lng":-0.043389,"elevation":37.1},{"lat":51.445353,"lng":-0.043333,"elevation":37},{"lat":51.445357,"lng":-0.04328,"elevation":36.8},{"lat":51.445358,"lng":-0.043225,"elevation":36.7},{"lat":51.445354,"lng":-0.043169,"elevation":36.6},{"lat":51.445354,"lng":-0.043113,"elevation":36.5},{"lat":51.445354,"lng":-0.043065,"elevation":36.3},{"lat":51.445359,"lng":-0.043013,"elevation":36.2},{"lat":51.44536,"lng":-0.042969,"elevation":36.1},{"lat":51.445353,"lng":-0.042924,"elevation":36},{"lat":51.445343,"lng":-0.042864,"elevation":36.1},{"lat":51.445314,"lng":-0.042833,"elevation":36.1},{"lat":51.445285,"lng":-0.042817,"elevation":36.1},{"lat":51.445279,"lng":-0.042745,"elevation":36.2},{"lat":51.445286,"lng":-0.042693,"elevation":36.2},{"lat":51.445298,"lng":-0.04264,"elevation":36.3},{"lat":51.445327,"lng":-0.04262,"elevation":36.3},{"lat":51.445356,"lng":-0.042606,"elevation":36.3},{"lat":51.445384,"lng":-0.042594,"elevation":36.4},{"lat":51.44541,"lng":-0.042584,"elevation":36.4},{"lat":51.445435,"lng":-0.042556,"elevation":36.5},{"lat":51.445451,"lng":-0.042508,"elevation":36.6},{"lat":51.445459,"lng":-0.042452,"elevation":36.7},{"lat":51.445461,"lng":-0.042396,"elevation":36.8},{"lat":51.445468,"lng":-0.042345,"elevation":36.9},{"lat":51.445474,"lng":-0.0423,"elevation":36.9},{"lat":51.445491,"lng":-0.04226,"elevation":37},{"lat":51.445504,"lng":-0.04221,"elevation":37.1},{"lat":51.44551,"lng":-0.042161,"elevation":37.2},{"lat":51.445508,"lng":-0.042098,"elevation":37.3},{"lat":51.445509,"lng":-0.042053,"elevation":37.4},{"lat":51.445513,"lng":-0.042006,"elevation":37.5},{"lat":51.445518,"lng":-0.041958,"elevation":37.5},{"lat":51.44552,"lng":-0.041902,"elevation":37.6},{"lat":51.445523,"lng":-0.041851,"elevation":37.7},{"lat":51.445524,"lng":-0.041802,"elevation":37.8},{"lat":51.445534,"lng":-0.041751,"elevation":37.9},{"lat":51.445545,"lng":-0.041702,"elevation":38},{"lat":51.44555,"lng":-0.041653,"elevation":38.1},{"lat":51.445553,"lng":-0.041602,"elevation":38.2},{"lat":51.44556,"lng":-0.041552,"elevation":38.3},{"lat":51.445562,"lng":-0.041505,"elevation":38.3},{"lat":51.445564,"lng":-0.041454,"elevation":38.4},{"lat":51.445568,"lng":-0.041403,"elevation":38.5},{"lat":51.445573,"lng":-0.041356,"elevation":38.6},{"lat":51.445573,"lng":-0.04131,"elevation":38.7},{"lat":51.445574,"lng":-0.041265,"elevation":38.7},{"lat":51.445579,"lng":-0.04122,"elevation":39},{"lat":51.445585,"lng":-0.041174,"elevation":39.3},{"lat":51.445587,"lng":-0.041126,"elevation":39.6},{"lat":51.445588,"lng":-0.04108,"elevation":39.9},{"lat":51.445596,"lng":-0.041036,"elevation":40.2},{"lat":51.445599,"lng":-0.040993,"elevation":40.5},{"lat":51.445601,"lng":-0.040946,"elevation":40.8},{"lat":51.445604,"lng":-0.040898,"elevation":41.1},{"lat":51.445598,"lng":-0.040851,"elevation":41.4},{"lat":51.445594,"lng":-0.040807,"elevation":41.6},{"lat":51.445598,"lng":-0.040744,"elevation":42},{"lat":51.445604,"lng":-0.040679,"elevation":42.5},{"lat":51.445617,"lng":-0.040637,"elevation":42.8},{"lat":51.445637,"lng":-0.040605,"elevation":43.1},{"lat":51.445661,"lng":-0.040556,"elevation":43.6},{"lat":51.445679,"lng":-0.040499,"elevation":44},{"lat":51.445691,"lng":-0.040437,"elevation":44.5},{"lat":51.445705,"lng":-0.040398,"elevation":44.9},{"lat":51.445725,"lng":-0.040363,"elevation":45.3},{"lat":51.445738,"lng":-0.04032,"elevation":45.7},{"lat":51.445749,"lng":-0.040272,"elevation":46.1},{"lat":51.445756,"lng":-0.040229,"elevation":46.5},{"lat":51.445759,"lng":-0.040166,"elevation":47},{"lat":51.445762,"lng":-0.040121,"elevation":47.3},{"lat":51.445766,"lng":-0.040075,"elevation":47.7},{"lat":51.445771,"lng":-0.040032,"elevation":48.1},{"lat":51.445777,"lng":-0.039971,"elevation":48.6},{"lat":51.445777,"lng":-0.039908,"elevation":49.1},{"lat":51.445783,"lng":-0.039853,"elevation":49.6},{"lat":51.44579,"lng":-0.039798,"elevation":50},{"lat":51.445795,"lng":-0.039737,"elevation":50.5},{"lat":51.445801,"lng":-0.039679,"elevation":51},{"lat":51.445817,"lng":-0.039625,"elevation":51.6},{"lat":51.445817,"lng":-0.039558,"elevation":51.9},{"lat":51.445815,"lng":-0.039502,"elevation":52},{"lat":51.445817,"lng":-0.039431,"elevation":52.1},{"lat":51.445816,"lng":-0.039363,"elevation":52.1},{"lat":51.445819,"lng":-0.039292,"elevation":52.2},{"lat":51.445829,"lng":-0.039218,"elevation":52.4},{"lat":51.445844,"lng":-0.039139,"elevation":52.6},{"lat":51.445851,"lng":-0.039058,"elevation":52.8},{"lat":51.445854,"lng":-0.038976,"elevation":52.9},{"lat":51.445861,"lng":-0.038934,"elevation":53},{"lat":51.445867,"lng":-0.038891,"elevation":53.1},{"lat":51.445872,"lng":-0.038849,"elevation":53.2},{"lat":51.445872,"lng":-0.038766,"elevation":53.4},{"lat":51.445872,"lng":-0.038684,"elevation":53.5},{"lat":51.445874,"lng":-0.038603,"elevation":53.7},{"lat":51.44587,"lng":-0.038522,"elevation":53.8},{"lat":51.445868,"lng":-0.038445,"elevation":53.9},{"lat":51.445869,"lng":-0.038367,"elevation":54.1},{"lat":51.445878,"lng":-0.038289,"elevation":54.3},{"lat":51.445887,"lng":-0.038212,"elevation":54.5},{"lat":51.445896,"lng":-0.038142,"elevation":54.8},{"lat":51.445909,"lng":-0.038072,"elevation":55},{"lat":51.445929,"lng":-0.037997,"elevation":55.4},{"lat":51.445946,"lng":-0.037923,"elevation":55.7},{"lat":51.445949,"lng":-0.037853,"elevation":55.6},{"lat":51.445951,"lng":-0.037797,"elevation":55.5},{"lat":51.445973,"lng":-0.037755,"elevation":55.7},{"lat":51.446002,"lng":-0.037735,"elevation":56},{"lat":51.446046,"lng":-0.037699,"elevation":56.3},{"lat":51.446091,"lng":-0.037662,"elevation":56.7},{"lat":51.44614,"lng":-0.037653,"elevation":57.2},{"lat":51.44619,"lng":-0.037659,"elevation":57.8},{"lat":51.44624,"lng":-0.037665,"elevation":58.3},{"lat":51.446291,"lng":-0.037665,"elevation":58.6},{"lat":51.446343,"lng":-0.037668,"elevation":58.8},{"lat":51.446395,"lng":-0.037678,"elevation":59.1},{"lat":51.446446,"lng":-0.037698,"elevation":59.4},{"lat":51.446472,"lng":-0.037709,"elevation":59.5},{"lat":51.446499,"lng":-0.03772,"elevation":59.7},{"lat":51.446526,"lng":-0.03773,"elevation":59.8},{"lat":51.446553,"lng":-0.037739,"elevation":60},{"lat":51.446581,"lng":-0.037748,"elevation":60.1},{"lat":51.446608,"lng":-0.037752,"elevation":60.2},{"lat":51.446661,"lng":-0.037749,"elevation":60.5},{"lat":51.446714,"lng":-0.037746,"elevation":60.7},{"lat":51.446767,"lng":-0.037751,"elevation":61},{"lat":51.446819,"lng":-0.037754,"elevation":61.2},{"lat":51.446872,"lng":-0.03776,"elevation":61.5},{"lat":51.446926,"lng":-0.037768,"elevation":61.7},{"lat":51.446954,"lng":-0.037771,"elevation":61.9},{"lat":51.446982,"lng":-0.037775,"elevation":62},{"lat":51.44701,"lng":-0.037781,"elevation":62.2},{"lat":51.447038,"lng":-0.037784,"elevation":62.3},{"lat":51.447067,"lng":-0.037787,"elevation":62.5},{"lat":51.447096,"lng":-0.037792,"elevation":62.4},{"lat":51.447124,"lng":-0.037801,"elevation":62.1},{"lat":51.447152,"lng":-0.037811,"elevation":61.8},{"lat":51.447181,"lng":-0.03782,"elevation":61.5},{"lat":51.44721,"lng":-0.037824,"elevation":61.2},{"lat":51.447238,"lng":-0.037825,"elevation":60.9},{"lat":51.447271,"lng":-0.037772,"elevation":60.3},{"lat":51.447258,"lng":-0.037719,"elevation":60.3},{"lat":51.447238,"lng":-0.037675,"elevation":60.4},{"lat":51.447198,"lng":-0.037597,"elevation":60.6},{"lat":51.447179,"lng":-0.037562,"elevation":60.7},{"lat":51.447145,"lng":-0.037485,"elevation":60.8},{"lat":51.447129,"lng":-0.037445,"elevation":60.8},{"lat":51.447112,"lng":-0.037404,"elevation":60.9},{"lat":51.447096,"lng":-0.03736,"elevation":60.9},{"lat":51.447083,"lng":-0.037321,"elevation":60.9},{"lat":51.447072,"lng":-0.037281,"elevation":60.7},{"lat":51.447054,"lng":-0.0372,"elevation":60.3},{"lat":51.447039,"lng":-0.037114,"elevation":59.9},{"lat":51.447023,"lng":-0.037021,"elevation":59.5},{"lat":51.447011,"lng":-0.036929,"elevation":59},{"lat":51.447,"lng":-0.036839,"elevation":58.6},{"lat":51.446993,"lng":-0.036794,"elevation":58.4},{"lat":51.446985,"lng":-0.036747,"elevation":58.1},{"lat":51.446977,"lng":-0.0367,"elevation":57.9},{"lat":51.446969,"lng":-0.036657,"elevation":57.7},{"lat":51.446955,"lng":-0.036595,"elevation":57.4},{"lat":51.446939,"lng":-0.036532,"elevation":57.1},{"lat":51.44693,"lng":-0.036466,"elevation":56.8},{"lat":51.446922,"lng":-0.036395,"elevation":56.4},{"lat":51.446913,"lng":-0.036318,"elevation":56.1},{"lat":51.446907,"lng":-0.036233,"elevation":55.8},{"lat":51.446907,"lng":-0.03615,"elevation":55.6},{"lat":51.446909,"lng":-0.036068,"elevation":55.4},{"lat":51.44691,"lng":-0.035985,"elevation":55.2},{"lat":51.446905,"lng":-0.035903,"elevation":55},{"lat":51.446897,"lng":-0.035822,"elevation":54.9},{"lat":51.446892,"lng":-0.03574,"elevation":54.7},{"lat":51.446891,"lng":-0.035661,"elevation":54.5},{"lat":51.446896,"lng":-0.035592,"elevation":54.4},{"lat":51.446902,"lng":-0.035517,"elevation":54.2},{"lat":51.44691,"lng":-0.035441,"elevation":54.1},{"lat":51.446933,"lng":-0.035379,"elevation":53.9},{"lat":51.446987,"lng":-0.035376,"elevation":53.9},{"lat":51.447042,"lng":-0.035399,"elevation":54},{"lat":51.447093,"lng":-0.035422,"elevation":54},{"lat":51.447144,"lng":-0.035443,"elevation":53.8},{"lat":51.447193,"lng":-0.035468,"elevation":53.6},{"lat":51.447243,"lng":-0.035491,"elevation":53.4},{"lat":51.447292,"lng":-0.035515,"elevation":53.2},{"lat":51.44734,"lng":-0.035543,"elevation":53},{"lat":51.447384,"lng":-0.03557,"elevation":52.9},{"lat":51.447427,"lng":-0.035595,"elevation":52.7},{"lat":51.447469,"lng":-0.035626,"elevation":52.5},{"lat":51.447514,"lng":-0.035655,"elevation":52.4},{"lat":51.447559,"lng":-0.035683,"elevation":52.2},{"lat":51.447605,"lng":-0.035719,"elevation":52},{"lat":51.447652,"lng":-0.035756,"elevation":51.8},{"lat":51.447697,"lng":-0.03579,"elevation":51.6},{"lat":51.447742,"lng":-0.035823,"elevation":51.4},{"lat":51.447788,"lng":-0.035857,"elevation":51.2},{"lat":51.447833,"lng":-0.03589,"elevation":51},{"lat":51.447877,"lng":-0.035928,"elevation":50.8},{"lat":51.44792,"lng":-0.035972,"elevation":50.6},{"lat":51.447964,"lng":-0.03602,"elevation":50.3},{"lat":51.447988,"lng":-0.036045,"elevation":50.2},{"lat":51.448011,"lng":-0.036068,"elevation":50},{"lat":51.448035,"lng":-0.03609,"elevation":49.8},{"lat":51.448059,"lng":-0.036114,"elevation":49.6},{"lat":51.448108,"lng":-0.036165,"elevation":49.3},{"lat":51.448154,"lng":-0.036214,"elevation":49},{"lat":51.448197,"lng":-0.036263,"elevation":48.7},{"lat":51.448243,"lng":-0.036297,"elevation":48.3},{"lat":51.448289,"lng":-0.036319,"elevation":47.9},{"lat":51.448338,"lng":-0.036329,"elevation":47.5},{"lat":51.448387,"lng":-0.036337,"elevation":47},{"lat":51.448425,"lng":-0.036375,"elevation":46.7},{"lat":51.448434,"lng":-0.036438,"elevation":46.6},{"lat":51.448437,"lng":-0.036517,"elevation":46.5},{"lat":51.44844,"lng":-0.036592,"elevation":46.5},{"lat":51.448449,"lng":-0.036664,"elevation":46.4},{"lat":51.448466,"lng":-0.036736,"elevation":46.2},{"lat":51.448476,"lng":-0.0368,"elevation":46.1},{"lat":51.44848,"lng":-0.036868,"elevation":46},{"lat":51.448459,"lng":-0.03694,"elevation":46.2},{"lat":51.448424,"lng":-0.036991,"elevation":46.5},{"lat":51.448401,"lng":-0.037036,"elevation":46.8},{"lat":51.448382,"lng":-0.037093,"elevation":47},{"lat":51.448367,"lng":-0.037157,"elevation":47.1},{"lat":51.448342,"lng":-0.037217,"elevation":47.4},{"lat":51.448317,"lng":-0.037282,"elevation":47.7},{"lat":51.448292,"lng":-0.037364,"elevation":48},{"lat":51.448284,"lng":-0.037406,"elevation":48.1},{"lat":51.448273,"lng":-0.037447,"elevation":48.2},{"lat":51.448263,"lng":-0.037491,"elevation":48.3},{"lat":51.448255,"lng":-0.037537,"elevation":48.4},{"lat":51.448243,"lng":-0.037619,"elevation":48.6},{"lat":51.448236,"lng":-0.037661,"elevation":48.7},{"lat":51.448228,"lng":-0.037703,"elevation":48.8},{"lat":51.448214,"lng":-0.037783,"elevation":49},{"lat":51.448199,"lng":-0.03785,"elevation":49.2},{"lat":51.44818,"lng":-0.0379,"elevation":49.5},{"lat":51.448142,"lng":-0.037916,"elevation":50},{"lat":51.448108,"lng":-0.037902,"elevation":50.5},{"lat":51.448069,"lng":-0.037896,"elevation":51},{"lat":51.448029,"lng":-0.037896,"elevation":51.5},{"lat":51.447986,"lng":-0.037888,"elevation":52.1},{"lat":51.447947,"lng":-0.037876,"elevation":52.6},{"lat":51.447908,"lng":-0.037865,"elevation":53},{"lat":51.44787,"lng":-0.037858,"elevation":53.5},{"lat":51.44783,"lng":-0.037846,"elevation":53.9},{"lat":51.447792,"lng":-0.037836,"elevation":54.4},{"lat":51.447756,"lng":-0.037833,"elevation":54.8},{"lat":51.447717,"lng":-0.037832,"elevation":55.2},{"lat":51.447676,"lng":-0.037829,"elevation":55.7},{"lat":51.447641,"lng":-0.037814,"elevation":56.1},{"lat":51.447612,"lng":-0.037808,"elevation":56.4},{"lat":51.447577,"lng":-0.037804,"elevation":56.8},{"lat":51.447549,"lng":-0.037786,"elevation":57.1},{"lat":51.447518,"lng":-0.037779,"elevation":57.5},{"lat":51.447484,"lng":-0.037777,"elevation":57.9},{"lat":51.447455,"lng":-0.037761,"elevation":58.1},{"lat":51.447423,"lng":-0.03775,"elevation":58.5},{"lat":51.447384,"lng":-0.037745,"elevation":58.9},{"lat":51.447344,"lng":-0.037745,"elevation":59.4},{"lat":51.447316,"lng":-0.037737,"elevation":59.7},{"lat":51.447285,"lng":-0.037705,"elevation":59.9},{"lat":51.447253,"lng":-0.037644,"elevation":60.1},{"lat":51.447226,"lng":-0.037582,"elevation":60.2},{"lat":51.447212,"lng":-0.037545,"elevation":60.3},{"lat":51.447188,"lng":-0.037477,"elevation":60.3},{"lat":51.447175,"lng":-0.037438,"elevation":60.3},{"lat":51.447163,"lng":-0.037397,"elevation":60.3},{"lat":51.447151,"lng":-0.037358,"elevation":60.3},{"lat":51.447139,"lng":-0.037315,"elevation":60.3},{"lat":51.447128,"lng":-0.037272,"elevation":60.2},{"lat":51.447108,"lng":-0.037201,"elevation":60.2},{"lat":51.44709,"lng":-0.037133,"elevation":60.1},{"lat":51.447073,"lng":-0.037056,"elevation":59.8},{"lat":51.447059,"lng":-0.036977,"elevation":59.4},{"lat":51.447049,"lng":-0.036935,"elevation":59.2},{"lat":51.447033,"lng":-0.036859,"elevation":58.8},{"lat":51.447011,"lng":-0.036786,"elevation":58.4},{"lat":51.446993,"lng":-0.036714,"elevation":58},{"lat":51.446979,"lng":-0.036643,"elevation":57.6},{"lat":51.446963,"lng":-0.036582,"elevation":57.3},{"lat":51.446949,"lng":-0.036517,"elevation":57},{"lat":51.446942,"lng":-0.036451,"elevation":56.7},{"lat":51.446934,"lng":-0.036371,"elevation":56.3},{"lat":51.446928,"lng":-0.036295,"elevation":56},{"lat":51.446921,"lng":-0.036219,"elevation":55.7},{"lat":51.446915,"lng":-0.036144,"elevation":55.6},{"lat":51.446912,"lng":-0.03607,"elevation":55.4},{"lat":51.446909,"lng":-0.036,"elevation":55.3},{"lat":51.446908,"lng":-0.035934,"elevation":55.1},{"lat":51.446908,"lng":-0.035866,"elevation":55},{"lat":51.446907,"lng":-0.035801,"elevation":54.8},{"lat":51.446906,"lng":-0.035734,"elevation":54.7},{"lat":51.446908,"lng":-0.035664,"elevation":54.5},{"lat":51.446917,"lng":-0.035591,"elevation":54.4},{"lat":51.446925,"lng":-0.035511,"elevation":54.2},{"lat":51.446927,"lng":-0.035468,"elevation":54.1},{"lat":51.446931,"lng":-0.035413,"elevation":54},{"lat":51.446937,"lng":-0.035366,"elevation":53.9},{"lat":51.446957,"lng":-0.035297,"elevation":53.7},{"lat":51.446999,"lng":-0.035314,"elevation":53.8},{"lat":51.447051,"lng":-0.035332,"elevation":53.8},{"lat":51.447103,"lng":-0.035354,"elevation":53.8},{"lat":51.447152,"lng":-0.035377,"elevation":53.6},{"lat":51.4472,"lng":-0.035399,"elevation":53.4},{"lat":51.447247,"lng":-0.035425,"elevation":53.2},{"lat":51.44729,"lng":-0.035452,"elevation":53.1},{"lat":51.447334,"lng":-0.03548,"elevation":52.9},{"lat":51.447377,"lng":-0.035508,"elevation":52.8},{"lat":51.447422,"lng":-0.035532,"elevation":52.6},{"lat":51.447467,"lng":-0.035561,"elevation":52.4},{"lat":51.447505,"lng":-0.035605,"elevation":52.3},{"lat":51.447543,"lng":-0.035643,"elevation":52.2},{"lat":51.447584,"lng":-0.035677,"elevation":52},{"lat":51.447626,"lng":-0.035711,"elevation":51.9},{"lat":51.447668,"lng":-0.035745,"elevation":51.7},{"lat":51.447712,"lng":-0.03578,"elevation":51.5},{"lat":51.447754,"lng":-0.035818,"elevation":51.4},{"lat":51.447797,"lng":-0.035854,"elevation":51.2},{"lat":51.447843,"lng":-0.035882,"elevation":51},{"lat":51.447886,"lng":-0.035909,"elevation":50.8},{"lat":51.447929,"lng":-0.03594,"elevation":50.5},{"lat":51.447972,"lng":-0.03597,"elevation":50.2},{"lat":51.448015,"lng":-0.035999,"elevation":49.9},{"lat":51.448057,"lng":-0.036031,"elevation":49.6},{"lat":51.448098,"lng":-0.036063,"elevation":49.3},{"lat":51.44814,"lng":-0.03611,"elevation":49},{"lat":51.448161,"lng":-0.036144,"elevation":48.8},{"lat":51.448183,"lng":-0.036175,"elevation":48.7},{"lat":51.448206,"lng":-0.036204,"elevation":48.5},{"lat":51.448229,"lng":-0.03623,"elevation":48.4},{"lat":51.448274,"lng":-0.036273,"elevation":48},{"lat":51.448319,"lng":-0.036312,"elevation":47.6},{"lat":51.448368,"lng":-0.036331,"elevation":47.2},{"lat":51.448417,"lng":-0.036343,"elevation":46.8},{"lat":51.448455,"lng":-0.036386,"elevation":46.4},{"lat":51.448476,"lng":-0.036446,"elevation":46.2},{"lat":51.448473,"lng":-0.03652,"elevation":46.2},{"lat":51.448471,"lng":-0.036586,"elevation":46.2},{"lat":51.448477,"lng":-0.036643,"elevation":46.1},{"lat":51.448479,"lng":-0.036711,"elevation":46.1},{"lat":51.448479,"lng":-0.036786,"elevation":46.1},{"lat":51.44847,"lng":-0.036851,"elevation":46.1},{"lat":51.448455,"lng":-0.036894,"elevation":46.3},{"lat":51.448452,"lng":-0.03694,"elevation":46.3},{"lat":51.448433,"lng":-0.037013,"elevation":46.4},{"lat":51.448417,"lng":-0.037094,"elevation":46.6},{"lat":51.448409,"lng":-0.037138,"elevation":46.7},{"lat":51.44839,"lng":-0.037215,"elevation":46.9},{"lat":51.448375,"lng":-0.037286,"elevation":47},{"lat":51.448366,"lng":-0.037349,"elevation":47.1},{"lat":51.448358,"lng":-0.037397,"elevation":47.2},{"lat":51.44834,"lng":-0.037475,"elevation":47.4},{"lat":51.448324,"lng":-0.037552,"elevation":47.6},{"lat":51.448308,"lng":-0.037629,"elevation":47.8},{"lat":51.448288,"lng":-0.037699,"elevation":48.1},{"lat":51.448267,"lng":-0.037768,"elevation":48.3},{"lat":51.44824,"lng":-0.037838,"elevation":48.7},{"lat":51.44821,"lng":-0.037899,"elevation":49.1},{"lat":51.448172,"lng":-0.037921,"elevation":49.6},{"lat":51.448136,"lng":-0.037915,"elevation":50.1},{"lat":51.448101,"lng":-0.037913,"elevation":50.6},{"lat":51.448065,"lng":-0.037919,"elevation":51},{"lat":51.448027,"lng":-0.037911,"elevation":51.5},{"lat":51.447993,"lng":-0.037907,"elevation":52},{"lat":51.447961,"lng":-0.037911,"elevation":52.4},{"lat":51.44793,"lng":-0.037917,"elevation":52.8},{"lat":51.447901,"lng":-0.037922,"elevation":53.2},{"lat":51.447872,"lng":-0.037921,"elevation":53.5},{"lat":51.447841,"lng":-0.037926,"elevation":53.9},{"lat":51.447812,"lng":-0.037936,"elevation":54.2},{"lat":51.447783,"lng":-0.037943,"elevation":54.5},{"lat":51.447751,"lng":-0.037946,"elevation":54.8},{"lat":51.447717,"lng":-0.037941,"elevation":55.3},{"lat":51.447688,"lng":-0.037945,"elevation":55.6},{"lat":51.447662,"lng":-0.037955,"elevation":55.9},{"lat":51.447629,"lng":-0.037953,"elevation":56.3},{"lat":51.447595,"lng":-0.037945,"elevation":56.7},{"lat":51.447562,"lng":-0.03794,"elevation":57.1},{"lat":51.447519,"lng":-0.037923,"elevation":57.7},{"lat":51.447474,"lng":-0.037903,"elevation":58.3},{"lat":51.447433,"lng":-0.037881,"elevation":58.7},{"lat":51.447389,"lng":-0.037852,"elevation":59.2},{"lat":51.447342,"lng":-0.037823,"elevation":59.6},{"lat":51.447297,"lng":-0.0378,"elevation":60.1},{"lat":51.447257,"lng":-0.037755,"elevation":60.4},{"lat":51.447228,"lng":-0.037693,"elevation":60.6},{"lat":51.447203,"lng":-0.037629,"elevation":60.6},{"lat":51.44718,"lng":-0.037556,"elevation":60.6},{"lat":51.44716,"lng":-0.037497,"elevation":60.7},{"lat":51.447141,"lng":-0.037445,"elevation":60.7},{"lat":51.447122,"lng":-0.037388,"elevation":60.7},{"lat":51.447103,"lng":-0.037337,"elevation":60.7},{"lat":51.447086,"lng":-0.037293,"elevation":60.7},{"lat":51.447072,"lng":-0.037242,"elevation":60.5},{"lat":51.447058,"lng":-0.037186,"elevation":60.3},{"lat":51.447043,"lng":-0.037126,"elevation":60},{"lat":51.447031,"lng":-0.037063,"elevation":59.7},{"lat":51.44702,"lng":-0.036999,"elevation":59.4},{"lat":51.447008,"lng":-0.036933,"elevation":59},{"lat":51.446996,"lng":-0.036866,"elevation":58.7},{"lat":51.446983,"lng":-0.036801,"elevation":58.4},{"lat":51.446974,"lng":-0.036731,"elevation":58},{"lat":51.446964,"lng":-0.036657,"elevation":57.7},{"lat":51.446955,"lng":-0.036577,"elevation":57.3},{"lat":51.446947,"lng":-0.036507,"elevation":57},{"lat":51.446938,"lng":-0.036438,"elevation":56.6},{"lat":51.446933,"lng":-0.03637,"elevation":56.3},{"lat":51.446928,"lng":-0.036303,"elevation":56},{"lat":51.446924,"lng":-0.036234,"elevation":55.8},{"lat":51.446919,"lng":-0.036162,"elevation":55.6},{"lat":51.446913,"lng":-0.03609,"elevation":55.5},{"lat":51.446909,"lng":-0.03602,"elevation":55.3},{"lat":51.446905,"lng":-0.035955,"elevation":55.2},{"lat":51.446901,"lng":-0.03589,"elevation":55},{"lat":51.446899,"lng":-0.035821,"elevation":54.9},{"lat":51.446898,"lng":-0.035753,"elevation":54.7},{"lat":51.446901,"lng":-0.035685,"elevation":54.6},{"lat":51.446909,"lng":-0.035616,"elevation":54.4},{"lat":51.446914,"lng":-0.035544,"elevation":54.3},{"lat":51.446918,"lng":-0.035471,"elevation":54.1},{"lat":51.446924,"lng":-0.035401,"elevation":54},{"lat":51.446948,"lng":-0.035348,"elevation":53.8},{"lat":51.446992,"lng":-0.035333,"elevation":53.8},{"lat":51.447043,"lng":-0.035349,"elevation":53.8},{"lat":51.447095,"lng":-0.035367,"elevation":53.8},{"lat":51.447136,"lng":-0.03538,"elevation":53.7},{"lat":51.447174,"lng":-0.035408,"elevation":53.5},{"lat":51.447215,"lng":-0.035432,"elevation":53.4},{"lat":51.447256,"lng":-0.035458,"elevation":53.3},{"lat":51.447299,"lng":-0.035483,"elevation":53.1},{"lat":51.44734,"lng":-0.035506,"elevation":52.9},{"lat":51.447383,"lng":-0.035527,"elevation":52.8},{"lat":51.447423,"lng":-0.035555,"elevation":52.6},{"lat":51.447463,"lng":-0.035581,"elevation":52.5},{"lat":51.447504,"lng":-0.035607,"elevation":52.3},{"lat":51.447548,"lng":-0.035636,"elevation":52.1},{"lat":51.447591,"lng":-0.035668,"elevation":52},{"lat":51.447634,"lng":-0.035699,"elevation":51.8},{"lat":51.447673,"lng":-0.035729,"elevation":51.7},{"lat":51.447713,"lng":-0.035762,"elevation":51.5},{"lat":51.447751,"lng":-0.035793,"elevation":51.3},{"lat":51.447789,"lng":-0.035827,"elevation":51.2},{"lat":51.447829,"lng":-0.035854,"elevation":51},{"lat":51.44787,"lng":-0.035885,"elevation":50.8},{"lat":51.447909,"lng":-0.035923,"elevation":50.6},{"lat":51.447949,"lng":-0.035961,"elevation":50.4},{"lat":51.447989,"lng":-0.035997,"elevation":50.1},{"lat":51.448029,"lng":-0.03603,"elevation":49.8},{"lat":51.448069,"lng":-0.036067,"elevation":49.5},{"lat":51.448111,"lng":-0.036106,"elevation":49.2},{"lat":51.448155,"lng":-0.036145,"elevation":48.9},{"lat":51.448196,"lng":-0.036195,"elevation":48.6},{"lat":51.448235,"lng":-0.036248,"elevation":48.3},{"lat":51.448275,"lng":-0.03629,"elevation":48},{"lat":51.448319,"lng":-0.036316,"elevation":47.6},{"lat":51.448364,"lng":-0.036327,"elevation":47.2},{"lat":51.44841,"lng":-0.036334,"elevation":46.8},{"lat":51.448439,"lng":-0.036381,"elevation":46.6},{"lat":51.448438,"lng":-0.036456,"elevation":46.6},{"lat":51.448436,"lng":-0.036531,"elevation":46.6},{"lat":51.448438,"lng":-0.036601,"elevation":46.5},{"lat":51.448452,"lng":-0.036661,"elevation":46.4},{"lat":51.448464,"lng":-0.036726,"elevation":46.2},{"lat":51.448467,"lng":-0.036798,"elevation":46.2},{"lat":51.448464,"lng":-0.036869,"elevation":46.2},{"lat":51.448453,"lng":-0.036939,"elevation":46.3},{"lat":51.448434,"lng":-0.037009,"elevation":46.4},{"lat":51.448414,"lng":-0.037076,"elevation":46.6},{"lat":51.448391,"lng":-0.037137,"elevation":46.9},{"lat":51.448367,"lng":-0.037198,"elevation":47.1},{"lat":51.448348,"lng":-0.037258,"elevation":47.3},{"lat":51.448329,"lng":-0.037307,"elevation":47.5},{"lat":51.448321,"lng":-0.03737,"elevation":47.6},{"lat":51.448321,"lng":-0.03744,"elevation":47.6},{"lat":51.448308,"lng":-0.037508,"elevation":47.8},{"lat":51.44829,"lng":-0.03758,"elevation":48},{"lat":51.448271,"lng":-0.037658,"elevation":48.3},{"lat":51.448253,"lng":-0.037727,"elevation":48.5},{"lat":51.448231,"lng":-0.037794,"elevation":48.8},{"lat":51.44821,"lng":-0.03786,"elevation":49.1},{"lat":51.448189,"lng":-0.037922,"elevation":49.4},{"lat":51.448173,"lng":-0.037995,"elevation":49.3},{"lat":51.44816,"lng":-0.038069,"elevation":49.2},{"lat":51.448149,"lng":-0.038139,"elevation":49},{"lat":51.448135,"lng":-0.038208,"elevation":48.9},{"lat":51.448113,"lng":-0.038285,"elevation":48.8},{"lat":51.448099,"lng":-0.038361,"elevation":48.7},{"lat":51.44809,"lng":-0.038439,"elevation":48.5},{"lat":51.448081,"lng":-0.038512,"elevation":48.3},{"lat":51.448068,"lng":-0.038578,"elevation":48.1},{"lat":51.448056,"lng":-0.038648,"elevation":47.9},{"lat":51.448047,"lng":-0.038721,"elevation":47.7},{"lat":51.448036,"lng":-0.038787,"elevation":47.6},{"lat":51.448017,"lng":-0.038852,"elevation":47.5},{"lat":51.447997,"lng":-0.038916,"elevation":47.4},{"lat":51.447975,"lng":-0.038979,"elevation":47.3},{"lat":51.44796,"lng":-0.039043,"elevation":47.2},{"lat":51.447946,"lng":-0.039108,"elevation":47},{"lat":51.447931,"lng":-0.039177,"elevation":46.8},{"lat":51.447912,"lng":-0.03924,"elevation":46.7},{"lat":51.447891,"lng":-0.039305,"elevation":46.6},{"lat":51.447869,"lng":-0.039374,"elevation":46.6},{"lat":51.447849,"lng":-0.039442,"elevation":46.5},{"lat":51.447841,"lng":-0.039503,"elevation":46.3},{"lat":51.447834,"lng":-0.039565,"elevation":46.1},{"lat":51.447824,"lng":-0.039617,"elevation":46},{"lat":51.447809,"lng":-0.039678,"elevation":45.9},{"lat":51.44779,"lng":-0.039749,"elevation":45.8},{"lat":51.447775,"lng":-0.039823,"elevation":45.6},{"lat":51.447758,"lng":-0.039895,"elevation":45.5},{"lat":51.447746,"lng":-0.039961,"elevation":45.3},{"lat":51.447729,"lng":-0.040022,"elevation":45.2},{"lat":51.447709,"lng":-0.040079,"elevation":45.1},{"lat":51.447696,"lng":-0.040136,"elevation":45},{"lat":51.447685,"lng":-0.040197,"elevation":44.8},{"lat":51.447672,"lng":-0.040263,"elevation":44.5},{"lat":51.447658,"lng":-0.040332,"elevation":44.3},{"lat":51.447646,"lng":-0.040401,"elevation":44},{"lat":51.447631,"lng":-0.040467,"elevation":43.9},{"lat":51.447617,"lng":-0.040536,"elevation":43.7},{"lat":51.447598,"lng":-0.040605,"elevation":43.5},{"lat":51.447577,"lng":-0.040675,"elevation":43.3},{"lat":51.447561,"lng":-0.040751,"elevation":43.1},{"lat":51.447547,"lng":-0.040831,"elevation":42.8},{"lat":51.447526,"lng":-0.040906,"elevation":42.5},{"lat":51.447508,"lng":-0.040971,"elevation":42.3},{"lat":51.4475,"lng":-0.041035,"elevation":42},{"lat":51.447493,"lng":-0.041101,"elevation":41.7},{"lat":51.447477,"lng":-0.041166,"elevation":41.5},{"lat":51.447455,"lng":-0.041232,"elevation":41.2},{"lat":51.44743,"lng":-0.041274,"elevation":41.2},{"lat":51.447397,"lng":-0.041313,"elevation":41.2},{"lat":51.447367,"lng":-0.041363,"elevation":41.2},{"lat":51.447352,"lng":-0.041399,"elevation":41.2},{"lat":51.447318,"lng":-0.041472,"elevation":41.2},{"lat":51.447298,"lng":-0.041506,"elevation":41.3},{"lat":51.447279,"lng":-0.04154,"elevation":41.3},{"lat":51.447249,"lng":-0.041595,"elevation":41.3},{"lat":51.447221,"lng":-0.04165,"elevation":41.3},{"lat":51.447195,"lng":-0.041704,"elevation":41.3},{"lat":51.447163,"lng":-0.041751,"elevation":41.3},{"lat":51.447126,"lng":-0.041787,"elevation":41.3},{"lat":51.447091,"lng":-0.041833,"elevation":41.3},{"lat":51.447053,"lng":-0.041882,"elevation":41.2},{"lat":51.447014,"lng":-0.041931,"elevation":41.1},{"lat":51.446976,"lng":-0.041975,"elevation":41},{"lat":51.446931,"lng":-0.04201,"elevation":40.9},{"lat":51.446889,"lng":-0.042041,"elevation":40.8},{"lat":51.446846,"lng":-0.042064,"elevation":40.7},{"lat":51.446804,"lng":-0.042095,"elevation":40.6},{"lat":51.446764,"lng":-0.042135,"elevation":40.5},{"lat":51.446726,"lng":-0.042183,"elevation":40.4},{"lat":51.446695,"lng":-0.042235,"elevation":40.3},{"lat":51.446659,"lng":-0.042287,"elevation":40.1},{"lat":51.446622,"lng":-0.042341,"elevation":40},{"lat":51.446585,"lng":-0.042391,"elevation":39.8},{"lat":51.446539,"lng":-0.042436,"elevation":39.6},{"lat":51.446492,"lng":-0.042474,"elevation":39.5},{"lat":51.446447,"lng":-0.042508,"elevation":39.3},{"lat":51.446401,"lng":-0.042537,"elevation":39.2},{"lat":51.44635,"lng":-0.042548,"elevation":39.1},{"lat":51.446303,"lng":-0.042555,"elevation":39},{"lat":51.446258,"lng":-0.042562,"elevation":38.9},{"lat":51.44622,"lng":-0.042572,"elevation":38.7},{"lat":51.446185,"lng":-0.042588,"elevation":38.6},{"lat":51.446144,"lng":-0.042583,"elevation":38.5},{"lat":51.446097,"lng":-0.042576,"elevation":38.4},{"lat":51.446055,"lng":-0.042578,"elevation":38.2},{"lat":51.446012,"lng":-0.042577,"elevation":38.1},{"lat":51.445968,"lng":-0.042567,"elevation":38},{"lat":51.445922,"lng":-0.042559,"elevation":37.9},{"lat":51.445875,"lng":-0.04256,"elevation":37.8},{"lat":51.445827,"lng":-0.042562,"elevation":37.6},{"lat":51.445777,"lng":-0.042559,"elevation":37.5},{"lat":51.445725,"lng":-0.042554,"elevation":37.3},{"lat":51.445676,"lng":-0.042538,"elevation":37.2},{"lat":51.445641,"lng":-0.042522,"elevation":37.1},{"lat":51.445599,"lng":-0.042504,"elevation":37},{"lat":51.445549,"lng":-0.042502,"elevation":36.9},{"lat":51.445496,"lng":-0.042503,"elevation":36.7},{"lat":51.445469,"lng":-0.042508,"elevation":36.6},{"lat":51.445418,"lng":-0.042526,"elevation":36.5},{"lat":51.445367,"lng":-0.04255,"elevation":36.4},{"lat":51.44532,"lng":-0.042564,"elevation":36.4},{"lat":51.445279,"lng":-0.042561,"elevation":36.4},{"lat":51.445252,"lng":-0.042592,"elevation":36.3},{"lat":51.445267,"lng":-0.042652,"elevation":36.3},{"lat":51.445293,"lng":-0.042684,"elevation":36.2},{"lat":51.445319,"lng":-0.042706,"elevation":36.2},{"lat":51.445344,"lng":-0.04274,"elevation":36.2},{"lat":51.445355,"lng":-0.042793,"elevation":36.1},{"lat":51.445363,"lng":-0.042843,"elevation":36.1},{"lat":51.445383,"lng":-0.042889,"elevation":36},{"lat":51.445374,"lng":-0.042952,"elevation":36.1},{"lat":51.445364,"lng":-0.043,"elevation":36.2},{"lat":51.445363,"lng":-0.043056,"elevation":36.3},{"lat":51.445366,"lng":-0.043104,"elevation":36.4},{"lat":51.445374,"lng":-0.043148,"elevation":36.5},{"lat":51.445381,"lng":-0.043192,"elevation":36.6},{"lat":51.445385,"lng":-0.043245,"elevation":36.8},{"lat":51.445376,"lng":-0.043317,"elevation":36.9},{"lat":51.445369,"lng":-0.043393,"elevation":37.1},{"lat":51.445362,"lng":-0.043453,"elevation":37.2},{"lat":51.445356,"lng":-0.043507,"elevation":37.4},{"lat":51.445356,"lng":-0.043559,"elevation":37.5},{"lat":51.44536,"lng":-0.04361,"elevation":37.6},{"lat":51.445355,"lng":-0.043657,"elevation":37.7},{"lat":51.44535,"lng":-0.043706,"elevation":37.8},{"lat":51.44535,"lng":-0.043756,"elevation":37.9},{"lat":51.445347,"lng":-0.043808,"elevation":38},{"lat":51.445347,"lng":-0.043856,"elevation":38.2},{"lat":51.445351,"lng":-0.043902,"elevation":38.3},{"lat":51.445359,"lng":-0.043962,"elevation":38.4},{"lat":51.445368,"lng":-0.044022,"elevation":38.6},{"lat":51.445367,"lng":-0.044084,"elevation":38.7},{"lat":51.445372,"lng":-0.044142,"elevation":38.9},{"lat":51.445378,"lng":-0.044186,"elevation":39},{"lat":51.445385,"lng":-0.04423,"elevation":39.1},{"lat":51.445384,"lng":-0.044278,"elevation":39.2},{"lat":51.445379,"lng":-0.044329,"elevation":39.3},{"lat":51.44538,"lng":-0.044382,"elevation":39.4},{"lat":51.445388,"lng":-0.044444,"elevation":39.6},{"lat":51.445394,"lng":-0.044486,"elevation":39.7},{"lat":51.445406,"lng":-0.044527,"elevation":39.8},{"lat":51.44542,"lng":-0.044567,"elevation":40},{"lat":51.445425,"lng":-0.044612,"elevation":40.1},{"lat":51.44542,"lng":-0.044662,"elevation":40.2},{"lat":51.445392,"lng":-0.044705,"elevation":40.2},{"lat":51.445356,"lng":-0.04473,"elevation":40.2},{"lat":51.445322,"lng":-0.044738,"elevation":40.1},{"lat":51.445295,"lng":-0.044744,"elevation":40.1},{"lat":51.445266,"lng":-0.044787,"elevation":40.1},{"lat":51.445235,"lng":-0.044802,"elevation":40},{"lat":51.445209,"lng":-0.044788,"elevation":39.9}],[{"lat":51.445281,"lng":-0.044929,"elevation":40.4},{"lat":51.445077,"lng":-0.044899,"elevation":39.8},{"lat":51.445107,"lng":-0.044871,"elevation":39.8},{"lat":51.445138,"lng":-0.044789,"elevation":39.7},{"lat":51.445184,"lng":-0.044832,"elevation":40},{"lat":51.445223,"lng":-0.044815,"elevation":40},{"lat":51.445248,"lng":-0.044772,"elevation":40},{"lat":51.445285,"lng":-0.044753,"elevation":40.1},{"lat":51.445311,"lng":-0.044722,"elevation":40.1},{"lat":51.445306,"lng":-0.044676,"elevation":39.9},{"lat":51.445312,"lng":-0.044632,"elevation":39.9},{"lat":51.445329,"lng":-0.044591,"elevation":39.8},{"lat":51.445351,"lng":-0.044564,"elevation":39.8},{"lat":51.44538,"lng":-0.044528,"elevation":39.8},{"lat":51.445398,"lng":-0.044492,"elevation":39.7},{"lat":51.445407,"lng":-0.044433,"elevation":39.6},{"lat":51.445411,"lng":-0.044357,"elevation":39.4},{"lat":51.445408,"lng":-0.044333,"elevation":39.4},{"lat":51.445395,"lng":-0.044275,"elevation":39.2},{"lat":51.445386,"lng":-0.044219,"elevation":39.1},{"lat":51.445381,"lng":-0.04416,"elevation":38.9},{"lat":51.445384,"lng":-0.044094,"elevation":38.8},{"lat":51.445388,"lng":-0.04403,"elevation":38.6},{"lat":51.445398,"lng":-0.043982,"elevation":38.5},{"lat":51.445399,"lng":-0.043926,"elevation":38.4},{"lat":51.445395,"lng":-0.043875,"elevation":38.3},{"lat":51.445387,"lng":-0.043826,"elevation":38.1},{"lat":51.445372,"lng":-0.043782,"elevation":38},{"lat":51.44536,"lng":-0.043721,"elevation":37.9},{"lat":51.445354,"lng":-0.043659,"elevation":37.7},{"lat":51.445355,"lng":-0.043612,"elevation":37.6},{"lat":51.445364,"lng":-0.043553,"elevation":37.5},{"lat":51.445359,"lng":-0.043495,"elevation":37.3},{"lat":51.445353,"lng":-0.04345,"elevation":37.2},{"lat":51.445354,"lng":-0.0434,"elevation":37.1},{"lat":51.445352,"lng":-0.043347,"elevation":37},{"lat":51.445351,"lng":-0.043297,"elevation":36.9},{"lat":51.44536,"lng":-0.04325,"elevation":36.8},{"lat":51.445368,"lng":-0.0432,"elevation":36.7},{"lat":51.445374,"lng":-0.043149,"elevation":36.5},{"lat":51.445379,"lng":-0.043096,"elevation":36.4},{"lat":51.445389,"lng":-0.043047,"elevation":36.3},{"lat":51.445398,"lng":-0.043001,"elevation":36.2},{"lat":51.445401,"lng":-0.042951,"elevation":36.1},{"lat":51.445399,"lng":-0.042903,"elevation":36},{"lat":51.445409,"lng":-0.042842,"elevation":36.1},{"lat":51.445398,"lng":-0.042801,"elevation":36.1},{"lat":51.445353,"lng":-0.042771,"elevation":36.2},{"lat":51.445308,"lng":-0.042777,"elevation":36.1},{"lat":51.445275,"lng":-0.042776,"elevation":36.1},{"lat":51.445276,"lng":-0.04271,"elevation":36.2},{"lat":51.445296,"lng":-0.042645,"elevation":36.3},{"lat":51.445331,"lng":-0.042607,"elevation":36.3},{"lat":51.44536,"lng":-0.042589,"elevation":36.4},{"lat":51.445391,"lng":-0.042567,"elevation":36.4},{"lat":51.445423,"lng":-0.04254,"elevation":36.5},{"lat":51.445451,"lng":-0.042508,"elevation":36.6},{"lat":51.445473,"lng":-0.042462,"elevation":36.7},{"lat":51.445483,"lng":-0.042401,"elevation":36.8},{"lat":51.445487,"lng":-0.042345,"elevation":36.9},{"lat":51.44549,"lng":-0.042295,"elevation":37},{"lat":51.445502,"lng":-0.042247,"elevation":37.1},{"lat":51.445513,"lng":-0.042194,"elevation":37.2},{"lat":51.44552,"lng":-0.042141,"elevation":37.3},{"lat":51.445527,"lng":-0.04209,"elevation":37.4},{"lat":51.445536,"lng":-0.042045,"elevation":37.5},{"lat":51.445541,"lng":-0.041998,"elevation":37.6},{"lat":51.445542,"lng":-0.041954,"elevation":37.6},{"lat":51.445539,"lng":-0.04189,"elevation":37.7},{"lat":51.445548,"lng":-0.041841,"elevation":37.8},{"lat":51.445564,"lng":-0.041791,"elevation":37.9},{"lat":51.445572,"lng":-0.041743,"elevation":38},{"lat":51.445579,"lng":-0.041695,"elevation":38.1},{"lat":51.445584,"lng":-0.041649,"elevation":38.2},{"lat":51.445589,"lng":-0.041604,"elevation":38.3},{"lat":51.445593,"lng":-0.041558,"elevation":38.4},{"lat":51.445596,"lng":-0.041514,"elevation":38.5},{"lat":51.445608,"lng":-0.041472,"elevation":38.6},{"lat":51.445612,"lng":-0.041427,"elevation":38.7},{"lat":51.445608,"lng":-0.04138,"elevation":38.7},{"lat":51.445605,"lng":-0.041333,"elevation":38.8},{"lat":51.445605,"lng":-0.041289,"elevation":38.8},{"lat":51.445603,"lng":-0.041244,"elevation":38.9},{"lat":51.445592,"lng":-0.041196,"elevation":39.2},{"lat":51.445597,"lng":-0.041147,"elevation":39.5},{"lat":51.445604,"lng":-0.041097,"elevation":39.9},{"lat":51.445615,"lng":-0.04105,"elevation":40.2},{"lat":51.445626,"lng":-0.041002,"elevation":40.6},{"lat":51.445629,"lng":-0.040957,"elevation":40.9},{"lat":51.445631,"lng":-0.040912,"elevation":41.2},{"lat":51.44563,"lng":-0.040868,"elevation":41.4},{"lat":51.445631,"lng":-0.040823,"elevation":41.7},{"lat":51.445634,"lng":-0.04078,"elevation":42},{"lat":51.445636,"lng":-0.04072,"elevation":42.4},{"lat":51.445638,"lng":-0.040658,"elevation":42.8},{"lat":51.445637,"lng":-0.040597,"elevation":43.2},{"lat":51.445638,"lng":-0.040553,"elevation":43.5},{"lat":51.445649,"lng":-0.040509,"elevation":43.8},{"lat":51.44566,"lng":-0.040464,"elevation":44.2},{"lat":51.445663,"lng":-0.040402,"elevation":44.6},{"lat":51.445666,"lng":-0.040359,"elevation":44.9},{"lat":51.445666,"lng":-0.040294,"elevation":45.4},{"lat":51.445661,"lng":-0.040231,"elevation":45.9},{"lat":51.445657,"lng":-0.04017,"elevation":46.3},{"lat":51.445661,"lng":-0.040126,"elevation":46.7},{"lat":51.445656,"lng":-0.040082,"elevation":47},{"lat":51.445653,"lng":-0.04002,"elevation":47.4},{"lat":51.445651,"lng":-0.03996,"elevation":47.8},{"lat":51.445648,"lng":-0.039901,"elevation":48.3},{"lat":51.445651,"lng":-0.039839,"elevation":48.8},{"lat":51.445664,"lng":-0.039787,"elevation":49.2},{"lat":51.4457,"lng":-0.039785,"elevation":49.5},{"lat":51.445735,"lng":-0.039774,"elevation":49.8},{"lat":51.445749,"lng":-0.039719,"elevation":50.4},{"lat":51.445753,"lng":-0.039675,"elevation":50.7},{"lat":51.445754,"lng":-0.039631,"elevation":51.1},{"lat":51.445761,"lng":-0.039569,"elevation":51.5},{"lat":51.445763,"lng":-0.039508,"elevation":51.6},{"lat":51.445773,"lng":-0.039464,"elevation":51.7},{"lat":51.445782,"lng":-0.039419,"elevation":51.8},{"lat":51.445794,"lng":-0.039371,"elevation":51.9},{"lat":51.4458,"lng":-0.039319,"elevation":52.1},{"lat":51.44581,"lng":-0.039251,"elevation":52.2},{"lat":51.445827,"lng":-0.039172,"elevation":52.4},{"lat":51.445835,"lng":-0.039096,"elevation":52.6},{"lat":51.445844,"lng":-0.03902,"elevation":52.8},{"lat":51.445848,"lng":-0.038943,"elevation":52.9},{"lat":51.445866,"lng":-0.038869,"elevation":53.2},{"lat":51.445887,"lng":-0.038803,"elevation":53.4},{"lat":51.445899,"lng":-0.038724,"elevation":53.7},{"lat":51.445908,"lng":-0.038681,"elevation":53.8},{"lat":51.445915,"lng":-0.038635,"elevation":54},{"lat":51.445916,"lng":-0.038562,"elevation":54.2},{"lat":51.445912,"lng":-0.038489,"elevation":54.3},{"lat":51.445907,"lng":-0.038417,"elevation":54.3},{"lat":51.445911,"lng":-0.038344,"elevation":54.5},{"lat":51.445912,"lng":-0.038267,"elevation":54.7},{"lat":51.445923,"lng":-0.038202,"elevation":54.9},{"lat":51.445939,"lng":-0.038138,"elevation":55.2},{"lat":51.445947,"lng":-0.038063,"elevation":55.4},{"lat":51.445955,"lng":-0.037999,"elevation":55.7},{"lat":51.445951,"lng":-0.037931,"elevation":55.7},{"lat":51.445945,"lng":-0.037864,"elevation":55.6},{"lat":51.445947,"lng":-0.037805,"elevation":55.5},{"lat":51.44596,"lng":-0.037741,"elevation":55.5},{"lat":51.445971,"lng":-0.03768,"elevation":55.5},{"lat":51.445985,"lng":-0.037626,"elevation":55.6},{"lat":51.44601,"lng":-0.037597,"elevation":55.8},{"lat":51.446051,"lng":-0.037578,"elevation":56.1},{"lat":51.446097,"lng":-0.03758,"elevation":56.6},{"lat":51.446136,"lng":-0.037588,"elevation":57},{"lat":51.446177,"lng":-0.037592,"elevation":57.5},{"lat":51.446217,"lng":-0.037613,"elevation":57.9},{"lat":51.446257,"lng":-0.037606,"elevation":58.3},{"lat":51.446299,"lng":-0.037597,"elevation":58.4},{"lat":51.446353,"lng":-0.037602,"elevation":58.7},{"lat":51.446374,"lng":-0.037605,"elevation":58.8},{"lat":51.446421,"lng":-0.037615,"elevation":59},{"lat":51.44647,"lng":-0.037626,"elevation":59.3},{"lat":51.446526,"lng":-0.037637,"elevation":59.5},{"lat":51.446586,"lng":-0.037641,"elevation":59.8},{"lat":51.446615,"lng":-0.037642,"elevation":59.9},{"lat":51.446645,"lng":-0.037649,"elevation":60.1},{"lat":51.446675,"lng":-0.03766,"elevation":60.3},{"lat":51.446721,"lng":-0.03767,"elevation":60.5},{"lat":51.446754,"lng":-0.037671,"elevation":60.7},{"lat":51.4468,"lng":-0.03769,"elevation":60.9},{"lat":51.446825,"lng":-0.037706,"elevation":61.1},{"lat":51.446852,"lng":-0.037715,"elevation":61.2},{"lat":51.446879,"lng":-0.037718,"elevation":61.4},{"lat":51.446932,"lng":-0.037717,"elevation":61.6},{"lat":51.44696,"lng":-0.037725,"elevation":61.8},{"lat":51.447013,"lng":-0.037741,"elevation":62},{"lat":51.447066,"lng":-0.037749,"elevation":62.3},{"lat":51.447113,"lng":-0.037764,"elevation":62.1},{"lat":51.447155,"lng":-0.037773,"elevation":61.7},{"lat":51.447185,"lng":-0.037725,"elevation":61.1},{"lat":51.447173,"lng":-0.037644,"elevation":61},{"lat":51.447148,"lng":-0.037575,"elevation":61.1},{"lat":51.447119,"lng":-0.037517,"elevation":61.2},{"lat":51.447093,"lng":-0.037461,"elevation":61.3},{"lat":51.447072,"lng":-0.037397,"elevation":61.1},{"lat":51.447056,"lng":-0.037325,"elevation":60.8},{"lat":51.447042,"lng":-0.037248,"elevation":60.4},{"lat":51.447027,"lng":-0.037173,"elevation":60.1},{"lat":51.447014,"lng":-0.037097,"elevation":59.8},{"lat":51.447001,"lng":-0.037019,"elevation":59.4},{"lat":51.446981,"lng":-0.036903,"elevation":58.8},{"lat":51.446975,"lng":-0.036864,"elevation":58.6},{"lat":51.446961,"lng":-0.036787,"elevation":58.2},{"lat":51.446951,"lng":-0.036707,"elevation":57.9},{"lat":51.446941,"lng":-0.036627,"elevation":57.5},{"lat":51.446931,"lng":-0.036551,"elevation":57.1},{"lat":51.446922,"lng":-0.036472,"elevation":56.8},{"lat":51.446917,"lng":-0.036389,"elevation":56.4},{"lat":51.446916,"lng":-0.036345,"elevation":56.2},{"lat":51.446915,"lng":-0.036302,"elevation":56},{"lat":51.446913,"lng":-0.036259,"elevation":55.8},{"lat":51.446907,"lng":-0.036174,"elevation":55.6},{"lat":51.446903,"lng":-0.036089,"elevation":55.4},{"lat":51.446896,"lng":-0.036006,"elevation":55.3},{"lat":51.446895,"lng":-0.035962,"elevation":55.2},{"lat":51.446891,"lng":-0.035918,"elevation":55.1},{"lat":51.446888,"lng":-0.035856,"elevation":54.9},{"lat":51.446888,"lng":-0.035811,"elevation":54.8},{"lat":51.446888,"lng":-0.035727,"elevation":54.7},{"lat":51.446887,"lng":-0.035647,"elevation":54.5},{"lat":51.446889,"lng":-0.035569,"elevation":54.3},{"lat":51.446893,"lng":-0.035488,"elevation":54.2},{"lat":51.446904,"lng":-0.03541,"elevation":54},{"lat":51.446934,"lng":-0.035366,"elevation":53.9},{"lat":51.446989,"lng":-0.035367,"elevation":53.9},{"lat":51.447017,"lng":-0.035376,"elevation":53.9},{"lat":51.447045,"lng":-0.035387,"elevation":53.9},{"lat":51.447073,"lng":-0.035398,"elevation":54},{"lat":51.4471,"lng":-0.035409,"elevation":53.9},{"lat":51.447126,"lng":-0.035421,"elevation":53.8},{"lat":51.447173,"lng":-0.035446,"elevation":53.6},{"lat":51.447221,"lng":-0.03547,"elevation":53.5},{"lat":51.447267,"lng":-0.035493,"elevation":53.3},{"lat":51.447312,"lng":-0.035514,"elevation":53.1},{"lat":51.447357,"lng":-0.035545,"elevation":52.9},{"lat":51.447405,"lng":-0.035573,"elevation":52.8},{"lat":51.447456,"lng":-0.035599,"elevation":52.6},{"lat":51.447502,"lng":-0.035636,"elevation":52.4},{"lat":51.447551,"lng":-0.035676,"elevation":52.2},{"lat":51.447578,"lng":-0.035695,"elevation":52.1},{"lat":51.447603,"lng":-0.035715,"elevation":52},{"lat":51.447648,"lng":-0.035759,"elevation":51.8},{"lat":51.447687,"lng":-0.035795,"elevation":51.7},{"lat":51.447726,"lng":-0.035838,"elevation":51.5},{"lat":51.447766,"lng":-0.035878,"elevation":51.4},{"lat":51.447806,"lng":-0.035916,"elevation":51.2},{"lat":51.447848,"lng":-0.035957,"elevation":51},{"lat":51.44789,"lng":-0.035999,"elevation":50.8},{"lat":51.447927,"lng":-0.036042,"elevation":50.7},{"lat":51.447965,"lng":-0.036088,"elevation":50.4},{"lat":51.448011,"lng":-0.036136,"elevation":50.1},{"lat":51.448033,"lng":-0.036161,"elevation":49.9},{"lat":51.448057,"lng":-0.036185,"elevation":49.7},{"lat":51.44808,"lng":-0.036208,"elevation":49.6},{"lat":51.448105,"lng":-0.036231,"elevation":49.4},{"lat":51.448131,"lng":-0.036251,"elevation":49.2},{"lat":51.448158,"lng":-0.036268,"elevation":49},{"lat":51.448188,"lng":-0.036282,"elevation":48.7},{"lat":51.448216,"lng":-0.036293,"elevation":48.5},{"lat":51.448266,"lng":-0.036301,"elevation":48.1},{"lat":51.448314,"lng":-0.036299,"elevation":47.7},{"lat":51.448338,"lng":-0.036323,"elevation":47.5},{"lat":51.448354,"lng":-0.036363,"elevation":47.3},{"lat":51.44836,"lng":-0.03641,"elevation":47.3},{"lat":51.448361,"lng":-0.036456,"elevation":47.3},{"lat":51.448362,"lng":-0.036503,"elevation":47.2},{"lat":51.448366,"lng":-0.036547,"elevation":47.2},{"lat":51.448371,"lng":-0.036592,"elevation":47.1},{"lat":51.44838,"lng":-0.036675,"elevation":47.1},{"lat":51.44839,"lng":-0.036758,"elevation":46.9},{"lat":51.448404,"lng":-0.036835,"elevation":46.8},{"lat":51.448414,"lng":-0.036896,"elevation":46.7},{"lat":51.448412,"lng":-0.036957,"elevation":46.7},{"lat":51.448381,"lng":-0.037024,"elevation":47},{"lat":51.448365,"lng":-0.037062,"elevation":47.2},{"lat":51.44835,"lng":-0.037109,"elevation":47.3},{"lat":51.448341,"lng":-0.037152,"elevation":47.4},{"lat":51.448316,"lng":-0.037223,"elevation":47.7},{"lat":51.448303,"lng":-0.037269,"elevation":47.8},{"lat":51.448288,"lng":-0.037318,"elevation":48},{"lat":51.448269,"lng":-0.037382,"elevation":48.3},{"lat":51.448248,"lng":-0.037447,"elevation":48.5},{"lat":51.448229,"lng":-0.037515,"elevation":48.8},{"lat":51.44821,"lng":-0.037592,"elevation":49},{"lat":51.448183,"lng":-0.037663,"elevation":49.4},{"lat":51.448156,"lng":-0.037733,"elevation":49.7},{"lat":51.448145,"lng":-0.037773,"elevation":49.9},{"lat":51.44812,"lng":-0.037844,"elevation":50.3},{"lat":51.448098,"lng":-0.037904,"elevation":50.6},{"lat":51.448059,"lng":-0.037896,"elevation":51.1},{"lat":51.448034,"lng":-0.037874,"elevation":51.4},{"lat":51.447993,"lng":-0.037871,"elevation":51.9},{"lat":51.447965,"lng":-0.037867,"elevation":52.3},{"lat":51.447938,"lng":-0.037853,"elevation":52.6},{"lat":51.4479,"lng":-0.037837,"elevation":53.1},{"lat":51.447859,"lng":-0.037827,"elevation":53.6},{"lat":51.447819,"lng":-0.037827,"elevation":54},{"lat":51.447779,"lng":-0.037831,"elevation":54.5},{"lat":51.447739,"lng":-0.037821,"elevation":55},{"lat":51.447692,"lng":-0.037799,"elevation":55.5},{"lat":51.447642,"lng":-0.037784,"elevation":56},{"lat":51.447594,"lng":-0.037768,"elevation":56.6},{"lat":51.447553,"lng":-0.037758,"elevation":57},{"lat":51.44752,"lng":-0.037753,"elevation":57.4},{"lat":51.447486,"lng":-0.037753,"elevation":57.8},{"lat":51.447456,"lng":-0.037754,"elevation":58.1},{"lat":51.447419,"lng":-0.037745,"elevation":58.5},{"lat":51.447388,"lng":-0.03773,"elevation":58.8},{"lat":51.447356,"lng":-0.03772,"elevation":59.2},{"lat":51.447317,"lng":-0.037712,"elevation":59.6},{"lat":51.447277,"lng":-0.037696,"elevation":60},{"lat":51.447239,"lng":-0.037672,"elevation":60.4},{"lat":51.447212,"lng":-0.037623,"elevation":60.5},{"lat":51.447186,"lng":-0.037562,"elevation":60.6},{"lat":51.447162,"lng":-0.037503,"elevation":60.7},{"lat":51.447139,"lng":-0.037444,"elevation":60.7},{"lat":51.447114,"lng":-0.037388,"elevation":60.8},{"lat":51.447094,"lng":-0.037325,"elevation":60.8},{"lat":51.447078,"lng":-0.037261,"elevation":60.6},{"lat":51.447057,"lng":-0.037198,"elevation":60.3},{"lat":51.447037,"lng":-0.037128,"elevation":60},{"lat":51.447018,"lng":-0.037055,"elevation":59.6},{"lat":51.447007,"lng":-0.036975,"elevation":59.2},{"lat":51.447004,"lng":-0.036902,"elevation":58.9},{"lat":51.447003,"lng":-0.03683,"elevation":58.6},{"lat":51.446982,"lng":-0.03676,"elevation":58.2},{"lat":51.446964,"lng":-0.036686,"elevation":57.8},{"lat":51.446951,"lng":-0.036614,"elevation":57.4},{"lat":51.44694,"lng":-0.036539,"elevation":57.1},{"lat":51.446919,"lng":-0.036464,"elevation":56.7},{"lat":51.446906,"lng":-0.036426,"elevation":56.5},{"lat":51.446889,"lng":-0.036351,"elevation":56.2},{"lat":51.446879,"lng":-0.036273,"elevation":55.9},{"lat":51.44687,"lng":-0.036196,"elevation":55.6},{"lat":51.446862,"lng":-0.036123,"elevation":55.5},{"lat":51.446847,"lng":-0.036059,"elevation":55.3},{"lat":51.446838,"lng":-0.035988,"elevation":55.2},{"lat":51.446832,"lng":-0.035921,"elevation":55},{"lat":51.446836,"lng":-0.035845,"elevation":54.9},{"lat":51.446844,"lng":-0.035765,"elevation":54.7},{"lat":51.446862,"lng":-0.035691,"elevation":54.6},{"lat":51.446879,"lng":-0.035615,"elevation":54.4},{"lat":51.446883,"lng":-0.035534,"elevation":54.2},{"lat":51.446891,"lng":-0.035457,"elevation":54.1},{"lat":51.446908,"lng":-0.035387,"elevation":53.9},{"lat":51.446942,"lng":-0.035383,"elevation":53.9},{"lat":51.446984,"lng":-0.035385,"elevation":53.9},{"lat":51.447009,"lng":-0.035401,"elevation":54},{"lat":51.447071,"lng":-0.035431,"elevation":54},{"lat":51.447101,"lng":-0.035434,"elevation":54},{"lat":51.447129,"lng":-0.035434,"elevation":53.8},{"lat":51.447177,"lng":-0.035418,"elevation":53.6},{"lat":51.447222,"lng":-0.035432,"elevation":53.4},{"lat":51.447245,"lng":-0.035457,"elevation":53.3},{"lat":51.44728,"lng":-0.035505,"elevation":53.2},{"lat":51.447331,"lng":-0.035523,"elevation":53},{"lat":51.447382,"lng":-0.035551,"elevation":52.8},{"lat":51.447407,"lng":-0.035567,"elevation":52.7},{"lat":51.447457,"lng":-0.035595,"elevation":52.5},{"lat":51.447505,"lng":-0.035623,"elevation":52.3},{"lat":51.44755,"lng":-0.035652,"elevation":52.2},{"lat":51.447589,"lng":-0.035685,"elevation":52},{"lat":51.447627,"lng":-0.035716,"elevation":51.9},{"lat":51.447667,"lng":-0.035749,"elevation":51.7},{"lat":51.447704,"lng":-0.035783,"elevation":51.6},{"lat":51.447739,"lng":-0.035816,"elevation":51.4},{"lat":51.44777,"lng":-0.035857,"elevation":51.3},{"lat":51.447802,"lng":-0.035902,"elevation":51.2},{"lat":51.447833,"lng":-0.035944,"elevation":51.1},{"lat":51.44787,"lng":-0.03597,"elevation":50.9},{"lat":51.447906,"lng":-0.036,"elevation":50.8},{"lat":51.447945,"lng":-0.036039,"elevation":50.5},{"lat":51.447992,"lng":-0.036086,"elevation":50.2},{"lat":51.44804,"lng":-0.036128,"elevation":49.8},{"lat":51.448082,"lng":-0.036178,"elevation":49.5},{"lat":51.448105,"lng":-0.036202,"elevation":49.4},{"lat":51.448129,"lng":-0.036224,"elevation":49.2},{"lat":51.448151,"lng":-0.03625,"elevation":49},{"lat":51.448173,"lng":-0.036279,"elevation":48.9},{"lat":51.448211,"lng":-0.036321,"elevation":48.6},{"lat":51.448268,"lng":-0.036313,"elevation":48.1},{"lat":51.448296,"lng":-0.03631,"elevation":47.8},{"lat":51.448325,"lng":-0.036304,"elevation":47.6},{"lat":51.448375,"lng":-0.036303,"elevation":47.1},{"lat":51.448421,"lng":-0.036334,"elevation":46.7},{"lat":51.448442,"lng":-0.036364,"elevation":46.6},{"lat":51.448464,"lng":-0.036442,"elevation":46.3},{"lat":51.448467,"lng":-0.036487,"elevation":46.3},{"lat":51.448475,"lng":-0.036557,"elevation":46.2},{"lat":51.448468,"lng":-0.036613,"elevation":46.2},{"lat":51.448463,"lng":-0.036697,"elevation":46.2},{"lat":51.448473,"lng":-0.036764,"elevation":46.1},{"lat":51.448488,"lng":-0.036827,"elevation":45.9},{"lat":51.448494,"lng":-0.036896,"elevation":45.9},{"lat":51.448475,"lng":-0.036946,"elevation":46},{"lat":51.448437,"lng":-0.037034,"elevation":46.4},{"lat":51.448418,"lng":-0.037076,"elevation":46.6},{"lat":51.448402,"lng":-0.037116,"elevation":46.8},{"lat":51.44838,"lng":-0.037191,"elevation":47},{"lat":51.448373,"lng":-0.037254,"elevation":47.1},{"lat":51.448346,"lng":-0.037293,"elevation":47.4},{"lat":51.448329,"lng":-0.037355,"elevation":47.6},{"lat":51.448327,"lng":-0.037413,"elevation":47.6},{"lat":51.44832,"lng":-0.037473,"elevation":47.7},{"lat":51.448302,"lng":-0.037545,"elevation":47.9},{"lat":51.448289,"lng":-0.037584,"elevation":48},{"lat":51.448273,"lng":-0.037622,"elevation":48.2},{"lat":51.448256,"lng":-0.037692,"elevation":48.5},{"lat":51.448239,"lng":-0.037765,"elevation":48.7},{"lat":51.448224,"lng":-0.0378,"elevation":48.9},{"lat":51.4482,"lng":-0.037844,"elevation":49.2},{"lat":51.448177,"lng":-0.037888,"elevation":49.6},{"lat":51.448159,"lng":-0.037921,"elevation":49.8},{"lat":51.448126,"lng":-0.037931,"elevation":50.2},{"lat":51.4481,"lng":-0.037904,"elevation":50.6},{"lat":51.448073,"lng":-0.037882,"elevation":50.9},{"lat":51.448046,"lng":-0.037883,"elevation":51.3},{"lat":51.448013,"lng":-0.03789,"elevation":51.7},{"lat":51.44798,"lng":-0.037886,"elevation":52.1},{"lat":51.447945,"lng":-0.037882,"elevation":52.6},{"lat":51.447912,"lng":-0.037882,"elevation":53},{"lat":51.447873,"lng":-0.037883,"elevation":53.5},{"lat":51.44783,"lng":-0.037877,"elevation":54},{"lat":51.447782,"lng":-0.037864,"elevation":54.5},{"lat":51.447745,"lng":-0.037856,"elevation":55},{"lat":51.447708,"lng":-0.03783,"elevation":55.3},{"lat":51.447669,"lng":-0.03781,"elevation":55.8},{"lat":51.447625,"lng":-0.037801,"elevation":56.3},{"lat":51.447578,"lng":-0.037792,"elevation":56.8},{"lat":51.447535,"lng":-0.037786,"elevation":57.3},{"lat":51.447492,"lng":-0.037788,"elevation":57.8},{"lat":51.447452,"lng":-0.037786,"elevation":58.2},{"lat":51.447412,"lng":-0.037788,"elevation":58.7},{"lat":51.447372,"lng":-0.037791,"elevation":59.2},{"lat":51.447334,"lng":-0.037761,"elevation":59.5},{"lat":51.447296,"lng":-0.037739,"elevation":59.9},{"lat":51.447252,"lng":-0.037714,"elevation":60.3},{"lat":51.447211,"lng":-0.037704,"elevation":60.8},{"lat":51.447186,"lng":-0.037667,"elevation":60.9},{"lat":51.447166,"lng":-0.037624,"elevation":61},{"lat":51.447153,"lng":-0.037568,"elevation":61},{"lat":51.447141,"lng":-0.037505,"elevation":60.9},{"lat":51.447124,"lng":-0.037439,"elevation":60.8},{"lat":51.447116,"lng":-0.037396,"elevation":60.8},{"lat":51.447105,"lng":-0.037321,"elevation":60.6},{"lat":51.447112,"lng":-0.037269,"elevation":60.4},{"lat":51.447099,"lng":-0.037188,"elevation":60.2},{"lat":51.447075,"lng":-0.037117,"elevation":60.1},{"lat":51.447056,"lng":-0.037051,"elevation":59.7},{"lat":51.447037,"lng":-0.036989,"elevation":59.4},{"lat":51.447022,"lng":-0.03693,"elevation":59.1},{"lat":51.44701,"lng":-0.03688,"elevation":58.8},{"lat":51.447,"lng":-0.036827,"elevation":58.5},{"lat":51.446986,"lng":-0.036765,"elevation":58.2},{"lat":51.446968,"lng":-0.0367,"elevation":57.9},{"lat":51.446949,"lng":-0.036637,"elevation":57.5},{"lat":51.44692,"lng":-0.036578,"elevation":57.2},{"lat":51.446893,"lng":-0.036516,"elevation":56.9},{"lat":51.446874,"lng":-0.036453,"elevation":56.6},{"lat":51.446865,"lng":-0.036374,"elevation":56.3},{"lat":51.446858,"lng":-0.036292,"elevation":55.9},{"lat":51.446856,"lng":-0.036247,"elevation":55.7},{"lat":51.446854,"lng":-0.036203,"elevation":55.6},{"lat":51.446852,"lng":-0.036121,"elevation":55.5},{"lat":51.446847,"lng":-0.036042,"elevation":55.3},{"lat":51.446845,"lng":-0.035962,"elevation":55.1},{"lat":51.446846,"lng":-0.035887,"elevation":55},{"lat":51.446848,"lng":-0.035812,"elevation":54.8},{"lat":51.446851,"lng":-0.035741,"elevation":54.7},{"lat":51.446858,"lng":-0.035662,"elevation":54.5},{"lat":51.446858,"lng":-0.035585,"elevation":54.3},{"lat":51.446856,"lng":-0.035511,"elevation":54.2},{"lat":51.446875,"lng":-0.035468,"elevation":54.1},{"lat":51.446898,"lng":-0.035439,"elevation":54},{"lat":51.446925,"lng":-0.03542,"elevation":54},{"lat":51.446955,"lng":-0.035407,"elevation":54},{"lat":51.446982,"lng":-0.035399,"elevation":54},{"lat":51.447037,"lng":-0.035378,"elevation":53.9},{"lat":51.447075,"lng":-0.035356,"elevation":53.9},{"lat":51.447116,"lng":-0.035367,"elevation":53.7},{"lat":51.447157,"lng":-0.035407,"elevation":53.6},{"lat":51.447196,"lng":-0.035449,"elevation":53.5},{"lat":51.447227,"lng":-0.035482,"elevation":53.5},{"lat":51.447264,"lng":-0.035503,"elevation":53.3},{"lat":51.447288,"lng":-0.035531,"elevation":53.3},{"lat":51.447331,"lng":-0.035543,"elevation":53.1},{"lat":51.447373,"lng":-0.035567,"elevation":52.9},{"lat":51.447417,"lng":-0.035601,"elevation":52.8},{"lat":51.447462,"lng":-0.035636,"elevation":52.6},{"lat":51.447505,"lng":-0.035659,"elevation":52.4},{"lat":51.447545,"lng":-0.035683,"elevation":52.2},{"lat":51.447581,"lng":-0.03572,"elevation":52.1},{"lat":51.447633,"lng":-0.035787,"elevation":52},{"lat":51.447651,"lng":-0.035804,"elevation":51.9},{"lat":51.447689,"lng":-0.035836,"elevation":51.7},{"lat":51.447729,"lng":-0.035869,"elevation":51.6},{"lat":51.447764,"lng":-0.035904,"elevation":51.4},{"lat":51.4478,"lng":-0.035955,"elevation":51.3},{"lat":51.447822,"lng":-0.03599,"elevation":51.2},{"lat":51.447845,"lng":-0.036027,"elevation":51.1},{"lat":51.447871,"lng":-0.036058,"elevation":51},{"lat":51.447918,"lng":-0.036108,"elevation":50.8},{"lat":51.447957,"lng":-0.03617,"elevation":50.6},{"lat":51.447998,"lng":-0.036219,"elevation":50.3},{"lat":51.44804,"lng":-0.036261,"elevation":50},{"lat":51.448076,"lng":-0.03631,"elevation":49.7},{"lat":51.4481,"lng":-0.036329,"elevation":49.5},{"lat":51.448138,"lng":-0.036366,"elevation":49.2},{"lat":51.448174,"lng":-0.036366,"elevation":48.9},{"lat":51.448206,"lng":-0.036348,"elevation":48.6},{"lat":51.448243,"lng":-0.036329,"elevation":48.3},{"lat":51.448273,"lng":-0.036352,"elevation":48},{"lat":51.448285,"lng":-0.036397,"elevation":47.9},{"lat":51.44829,"lng":-0.036449,"elevation":47.9},{"lat":51.448296,"lng":-0.036544,"elevation":47.8},{"lat":51.448302,"lng":-0.036591,"elevation":47.8},{"lat":51.448311,"lng":-0.036635,"elevation":47.7},{"lat":51.448322,"lng":-0.036675,"elevation":47.6},{"lat":51.448351,"lng":-0.036747,"elevation":47.3},{"lat":51.448368,"lng":-0.036814,"elevation":47.2},{"lat":51.44839,"lng":-0.036873,"elevation":46.9},{"lat":51.448394,"lng":-0.036931,"elevation":46.9},{"lat":51.448388,"lng":-0.036985,"elevation":46.9},{"lat":51.448384,"lng":-0.037043,"elevation":47},{"lat":51.448374,"lng":-0.037093,"elevation":47.1},{"lat":51.448355,"lng":-0.037154,"elevation":47.3},{"lat":51.448339,"lng":-0.037221,"elevation":47.4},{"lat":51.448303,"lng":-0.037281,"elevation":47.8},{"lat":51.448279,"lng":-0.037316,"elevation":48.1},{"lat":51.448266,"lng":-0.037362,"elevation":48.3},{"lat":51.448253,"lng":-0.037428,"elevation":48.4},{"lat":51.448243,"lng":-0.037496,"elevation":48.6},{"lat":51.448229,"lng":-0.037557,"elevation":48.8},{"lat":51.448214,"lng":-0.037624,"elevation":49},{"lat":51.448199,"lng":-0.037696,"elevation":49.2},{"lat":51.448187,"lng":-0.037761,"elevation":49.4},{"lat":51.448198,"lng":-0.037816,"elevation":49.2},{"lat":51.448216,"lng":-0.037865,"elevation":49},{"lat":51.448189,"lng":-0.0379,"elevation":49.4},{"lat":51.44815,"lng":-0.037893,"elevation":49.9},{"lat":51.448113,"lng":-0.037894,"elevation":50.4},{"lat":51.448077,"lng":-0.037888,"elevation":50.9},{"lat":51.448043,"lng":-0.037892,"elevation":51.3},{"lat":51.448009,"lng":-0.037885,"elevation":51.8},{"lat":51.447967,"lng":-0.037874,"elevation":52.3},{"lat":51.447932,"lng":-0.03786,"elevation":52.7},{"lat":51.447894,"lng":-0.037858,"elevation":53.2},{"lat":51.447859,"lng":-0.037865,"elevation":53.6},{"lat":51.447822,"lng":-0.037858,"elevation":54},{"lat":51.447784,"lng":-0.037839,"elevation":54.5},{"lat":51.447747,"lng":-0.037833,"elevation":54.9},{"lat":51.447708,"lng":-0.037831,"elevation":55.3},{"lat":51.447665,"lng":-0.037819,"elevation":55.8},{"lat":51.447623,"lng":-0.037809,"elevation":56.3},{"lat":51.447579,"lng":-0.037802,"elevation":56.8},{"lat":51.44754,"lng":-0.037791,"elevation":57.2},{"lat":51.447503,"lng":-0.037772,"elevation":57.6},{"lat":51.447465,"lng":-0.03776,"elevation":58},{"lat":51.447427,"lng":-0.037754,"elevation":58.5},{"lat":51.447386,"lng":-0.03774,"elevation":58.9},{"lat":51.447346,"lng":-0.037731,"elevation":59.3},{"lat":51.447309,"lng":-0.037713,"elevation":59.7},{"lat":51.447276,"lng":-0.037684,"elevation":60},{"lat":51.44726,"lng":-0.03762,"elevation":60},{"lat":51.447254,"lng":-0.037552,"elevation":59.8},{"lat":51.447248,"lng":-0.03749,"elevation":59.7},{"lat":51.447227,"lng":-0.037423,"elevation":59.7},{"lat":51.4472,"lng":-0.037376,"elevation":59.8},{"lat":51.447174,"lng":-0.037338,"elevation":60},{"lat":51.447153,"lng":-0.0373,"elevation":60.1},{"lat":51.447135,"lng":-0.037243,"elevation":60.1},{"lat":51.447116,"lng":-0.037177,"elevation":60},{"lat":51.447096,"lng":-0.037112,"elevation":60},{"lat":51.447082,"lng":-0.037032,"elevation":59.7},{"lat":51.447065,"lng":-0.036959,"elevation":59.3},{"lat":51.44705,"lng":-0.036902,"elevation":59},{"lat":51.447037,"lng":-0.036844,"elevation":58.7},{"lat":51.447015,"lng":-0.036793,"elevation":58.4},{"lat":51.447002,"lng":-0.036715,"elevation":58},{"lat":51.446997,"lng":-0.036644,"elevation":57.7},{"lat":51.446994,"lng":-0.036577,"elevation":57.4},{"lat":51.446979,"lng":-0.036513,"elevation":57.1},{"lat":51.446972,"lng":-0.036448,"elevation":56.8},{"lat":51.446965,"lng":-0.036366,"elevation":56.4},{"lat":51.446961,"lng":-0.036288,"elevation":56},{"lat":51.446957,"lng":-0.036209,"elevation":55.8},{"lat":51.446953,"lng":-0.036132,"elevation":55.6},{"lat":51.446948,"lng":-0.036057,"elevation":55.4},{"lat":51.446941,"lng":-0.035982,"elevation":55.2},{"lat":51.446937,"lng":-0.035908,"elevation":55.1},{"lat":51.446932,"lng":-0.035842,"elevation":54.9},{"lat":51.446928,"lng":-0.035775,"elevation":54.8},{"lat":51.446924,"lng":-0.035705,"elevation":54.6},{"lat":51.446923,"lng":-0.035637,"elevation":54.5},{"lat":51.446927,"lng":-0.035567,"elevation":54.3},{"lat":51.446928,"lng":-0.035497,"elevation":54.2},{"lat":51.446932,"lng":-0.035424,"elevation":54},{"lat":51.446947,"lng":-0.035354,"elevation":53.8},{"lat":51.446978,"lng":-0.035349,"elevation":53.8},{"lat":51.447027,"lng":-0.035348,"elevation":53.8},{"lat":51.447069,"lng":-0.035369,"elevation":53.9},{"lat":51.447109,"lng":-0.035398,"elevation":53.8},{"lat":51.44716,"lng":-0.035408,"elevation":53.6},{"lat":51.447192,"lng":-0.035415,"elevation":53.5},{"lat":51.44722,"lng":-0.035425,"elevation":53.4},{"lat":51.447247,"lng":-0.035437,"elevation":53.3},{"lat":51.447292,"lng":-0.035461,"elevation":53.1},{"lat":51.447332,"lng":-0.035481,"elevation":52.9},{"lat":51.447375,"lng":-0.035511,"elevation":52.8},{"lat":51.447419,"lng":-0.035548,"elevation":52.6},{"lat":51.447461,"lng":-0.035578,"elevation":52.5},{"lat":51.447503,"lng":-0.035614,"elevation":52.3},{"lat":51.447533,"lng":-0.035654,"elevation":52.3},{"lat":51.447567,"lng":-0.035685,"elevation":52.1},{"lat":51.447609,"lng":-0.035713,"elevation":52},{"lat":51.447641,"lng":-0.035744,"elevation":51.8},{"lat":51.447673,"lng":-0.035779,"elevation":51.7},{"lat":51.447709,"lng":-0.035815,"elevation":51.6},{"lat":51.447748,"lng":-0.035849,"elevation":51.4},{"lat":51.447786,"lng":-0.035889,"elevation":51.3},{"lat":51.447809,"lng":-0.035913,"elevation":51.2},{"lat":51.447832,"lng":-0.035937,"elevation":51.1},{"lat":51.447869,"lng":-0.035979,"elevation":50.9},{"lat":51.447904,"lng":-0.036016,"elevation":50.8},{"lat":51.447941,"lng":-0.03606,"elevation":50.6},{"lat":51.447978,"lng":-0.036103,"elevation":50.3},{"lat":51.44802,"lng":-0.036148,"elevation":50},{"lat":51.448055,"lng":-0.0362,"elevation":49.8},{"lat":51.448089,"lng":-0.036251,"elevation":49.6},{"lat":51.448117,"lng":-0.036307,"elevation":49.4},{"lat":51.448139,"lng":-0.036332,"elevation":49.2},{"lat":51.448177,"lng":-0.036345,"elevation":48.9},{"lat":51.448218,"lng":-0.036344,"elevation":48.5},{"lat":51.448257,"lng":-0.036338,"elevation":48.2},{"lat":51.448299,"lng":-0.036328,"elevation":47.8},{"lat":51.44834,"lng":-0.036364,"elevation":47.4},{"lat":51.448368,"lng":-0.036423,"elevation":47.2},{"lat":51.448372,"lng":-0.036472,"elevation":47.2},{"lat":51.448364,"lng":-0.036514,"elevation":47.2},{"lat":51.448353,"lng":-0.036586,"elevation":47.3},{"lat":51.448356,"lng":-0.03663,"elevation":47.3},{"lat":51.448361,"lng":-0.036705,"elevation":47.2},{"lat":51.448368,"lng":-0.036783,"elevation":47.2},{"lat":51.448379,"lng":-0.036826,"elevation":47},{"lat":51.448386,"lng":-0.036869,"elevation":47},{"lat":51.448384,"lng":-0.036942,"elevation":47},{"lat":51.448382,"lng":-0.037007,"elevation":47},{"lat":51.448366,"lng":-0.037074,"elevation":47.1},{"lat":51.448349,"lng":-0.037139,"elevation":47.3},{"lat":51.448331,"lng":-0.037197,"elevation":47.5},{"lat":51.448315,"lng":-0.037241,"elevation":47.7},{"lat":51.448294,"lng":-0.037301,"elevation":47.9},{"lat":51.448274,"lng":-0.03738,"elevation":48.2},{"lat":51.448262,"lng":-0.037419,"elevation":48.3},{"lat":51.448242,"lng":-0.037497,"elevation":48.6},{"lat":51.448227,"lng":-0.037572,"elevation":48.8},{"lat":51.448213,"lng":-0.037647,"elevation":49},{"lat":51.448198,"lng":-0.037723,"elevation":49.2},{"lat":51.448186,"lng":-0.037793,"elevation":49.4},{"lat":51.44817,"lng":-0.037859,"elevation":49.6},{"lat":51.448147,"lng":-0.037918,"elevation":50},{"lat":51.448127,"lng":-0.037977,"elevation":50},{"lat":51.448117,"lng":-0.038049,"elevation":49.8},{"lat":51.44811,"lng":-0.038119,"elevation":49.6},{"lat":51.448097,"lng":-0.038186,"elevation":49.5},{"lat":51.448083,"lng":-0.038254,"elevation":49.3},{"lat":51.448064,"lng":-0.038322,"elevation":49.3},{"lat":51.448047,"lng":-0.038389,"elevation":49.2},{"lat":51.448037,"lng":-0.038455,"elevation":49},{"lat":51.448022,"lng":-0.03852,"elevation":48.9},{"lat":51.448011,"lng":-0.038591,"elevation":48.7},{"lat":51.447992,"lng":-0.038658,"elevation":48.6},{"lat":51.447973,"lng":-0.038724,"elevation":48.5},{"lat":51.447961,"lng":-0.03879,"elevation":48.3},{"lat":51.447953,"lng":-0.038858,"elevation":48.1},{"lat":51.447939,"lng":-0.038929,"elevation":47.9},{"lat":51.447923,"lng":-0.039004,"elevation":47.7},{"lat":51.447908,"lng":-0.039078,"elevation":47.5},{"lat":51.447889,"lng":-0.039149,"elevation":47.4},{"lat":51.447874,"lng":-0.039219,"elevation":47.3},{"lat":51.447857,"lng":-0.039282,"elevation":47.2},{"lat":51.447844,"lng":-0.03934,"elevation":47},{"lat":51.447831,"lng":-0.039407,"elevation":46.9},{"lat":51.447817,"lng":-0.039479,"elevation":46.7},{"lat":51.447802,"lng":-0.039553,"elevation":46.5},{"lat":51.447788,"lng":-0.039619,"elevation":46.4},{"lat":51.447767,"lng":-0.039679,"elevation":46.4},{"lat":51.447748,"lng":-0.039742,"elevation":46.3},{"lat":51.447733,"lng":-0.039808,"elevation":46.2},{"lat":51.447717,"lng":-0.039876,"elevation":46},{"lat":51.447705,"lng":-0.039949,"elevation":45.8},{"lat":51.447696,"lng":-0.040019,"elevation":45.5},{"lat":51.44769,"lng":-0.040086,"elevation":45.3},{"lat":51.447659,"lng":-0.040139,"elevation":45.3},{"lat":51.44764,"lng":-0.040194,"elevation":45.1},{"lat":51.447626,"lng":-0.040258,"elevation":44.9},{"lat":51.447613,"lng":-0.040326,"elevation":44.7},{"lat":51.4476,"lng":-0.0404,"elevation":44.4},{"lat":51.447592,"lng":-0.04047,"elevation":44.1},{"lat":51.447578,"lng":-0.04053,"elevation":43.9},{"lat":51.44756,"lng":-0.04059,"elevation":43.8},{"lat":51.447549,"lng":-0.040656,"elevation":43.6},{"lat":51.447541,"lng":-0.040721,"elevation":43.3},{"lat":51.447525,"lng":-0.040789,"elevation":43.1},{"lat":51.447503,"lng":-0.040855,"elevation":42.9},{"lat":51.447474,"lng":-0.040927,"elevation":42.7},{"lat":51.44746,"lng":-0.040966,"elevation":42.5},{"lat":51.44745,"lng":-0.041041,"elevation":42.2},{"lat":51.447454,"lng":-0.041104,"elevation":41.8},{"lat":51.447445,"lng":-0.04117,"elevation":41.5},{"lat":51.447435,"lng":-0.041241,"elevation":41.2},{"lat":51.447422,"lng":-0.041299,"elevation":41.2},{"lat":51.447432,"lng":-0.041366,"elevation":41.1},{"lat":51.447404,"lng":-0.041446,"elevation":41.1},{"lat":51.447385,"lng":-0.041484,"elevation":41.1},{"lat":51.447364,"lng":-0.041514,"elevation":41.1},{"lat":51.447342,"lng":-0.041538,"elevation":41.1},{"lat":51.447303,"lng":-0.041588,"elevation":41.2},{"lat":51.447269,"lng":-0.04164,"elevation":41.2},{"lat":51.447235,"lng":-0.041688,"elevation":41.2},{"lat":51.447207,"lng":-0.04174,"elevation":41.2},{"lat":51.447176,"lng":-0.041788,"elevation":41.2},{"lat":51.447146,"lng":-0.04184,"elevation":41.2},{"lat":51.447113,"lng":-0.041891,"elevation":41.2},{"lat":51.447079,"lng":-0.041931,"elevation":41.2},{"lat":51.447041,"lng":-0.041974,"elevation":41.1},{"lat":51.447003,"lng":-0.042019,"elevation":41},{"lat":51.44696,"lng":-0.042054,"elevation":40.9},{"lat":51.446918,"lng":-0.042086,"elevation":40.8},{"lat":51.446877,"lng":-0.042108,"elevation":40.7},{"lat":51.446835,"lng":-0.042134,"elevation":40.6},{"lat":51.446793,"lng":-0.042167,"elevation":40.5},{"lat":51.446755,"lng":-0.042209,"elevation":40.4},{"lat":51.446722,"lng":-0.042261,"elevation":40.3},{"lat":51.446686,"lng":-0.042314,"elevation":40.1},{"lat":51.446646,"lng":-0.042363,"elevation":40},{"lat":51.446607,"lng":-0.042405,"elevation":39.8},{"lat":51.446565,"lng":-0.04244,"elevation":39.7},{"lat":51.446524,"lng":-0.042477,"elevation":39.5},{"lat":51.446482,"lng":-0.042499,"elevation":39.4},{"lat":51.446441,"lng":-0.042513,"elevation":39.3},{"lat":51.446396,"lng":-0.042521,"elevation":39.2},{"lat":51.446347,"lng":-0.042524,"elevation":39.1},{"lat":51.446302,"lng":-0.042523,"elevation":39},{"lat":51.446259,"lng":-0.042519,"elevation":39},{"lat":51.446222,"lng":-0.042505,"elevation":38.9},{"lat":51.446173,"lng":-0.042499,"elevation":38.8},{"lat":51.446142,"lng":-0.042499,"elevation":38.7},{"lat":51.44611,"lng":-0.042499,"elevation":38.6},{"lat":51.446082,"lng":-0.042499,"elevation":38.5},{"lat":51.446027,"lng":-0.0425,"elevation":38.3},{"lat":51.446,"lng":-0.042502,"elevation":38.2},{"lat":51.445955,"lng":-0.042485,"elevation":38.1},{"lat":51.445909,"lng":-0.042474,"elevation":38},{"lat":51.445864,"lng":-0.042483,"elevation":37.9},{"lat":51.445823,"lng":-0.042492,"elevation":37.7},{"lat":51.445781,"lng":-0.042503,"elevation":37.6},{"lat":51.445738,"lng":-0.042507,"elevation":37.5},{"lat":51.445698,"lng":-0.042507,"elevation":37.3},{"lat":51.445657,"lng":-0.042509,"elevation":37.2},{"lat":51.445609,"lng":-0.04251,"elevation":37.1},{"lat":51.445556,"lng":-0.042505,"elevation":36.9},{"lat":51.445528,"lng":-0.042504,"elevation":36.8},{"lat":51.445499,"lng":-0.042503,"elevation":36.7},{"lat":51.445467,"lng":-0.042502,"elevation":36.6},{"lat":51.445438,"lng":-0.042506,"elevation":36.6},{"lat":51.445388,"lng":-0.042531,"elevation":36.4},{"lat":51.445338,"lng":-0.042552,"elevation":36.4},{"lat":51.445294,"lng":-0.042564,"elevation":36.4},{"lat":51.445265,"lng":-0.042587,"elevation":36.3},{"lat":51.445261,"lng":-0.042633,"elevation":36.3},{"lat":51.445264,"lng":-0.042697,"elevation":36.2},{"lat":51.445274,"lng":-0.042737,"elevation":36.2},{"lat":51.445309,"lng":-0.042746,"elevation":36.2},{"lat":51.445314,"lng":-0.042801,"elevation":36.1},{"lat":51.445305,"lng":-0.042855,"elevation":36.1},{"lat":51.4453,"lng":-0.042905,"elevation":36},{"lat":51.4453,"lng":-0.042961,"elevation":36.1},{"lat":51.445305,"lng":-0.043012,"elevation":36.2},{"lat":51.445301,"lng":-0.043057,"elevation":36.3},{"lat":51.445291,"lng":-0.04311,"elevation":36.4},{"lat":51.445283,"lng":-0.043171,"elevation":36.6},{"lat":51.445279,"lng":-0.043229,"elevation":36.7},{"lat":51.445281,"lng":-0.043288,"elevation":36.8},{"lat":51.445292,"lng":-0.043333,"elevation":36.9},{"lat":51.445296,"lng":-0.04338,"elevation":37},{"lat":51.445292,"lng":-0.043435,"elevation":37.2},{"lat":51.445296,"lng":-0.043488,"elevation":37.3},{"lat":51.445312,"lng":-0.043527,"elevation":37.4},{"lat":51.445315,"lng":-0.043578,"elevation":37.5},{"lat":51.445311,"lng":-0.04363,"elevation":37.6},{"lat":51.445306,"lng":-0.043673,"elevation":37.7},{"lat":51.445306,"lng":-0.043736,"elevation":37.8},{"lat":51.445305,"lng":-0.043792,"elevation":38},{"lat":51.445303,"lng":-0.043866,"elevation":38.1},{"lat":51.445301,"lng":-0.043935,"elevation":38.3},{"lat":51.445304,"lng":-0.043992,"elevation":38.4},{"lat":51.445311,"lng":-0.044035,"elevation":38.5},{"lat":51.445318,"lng":-0.044087,"elevation":38.6},{"lat":51.445323,"lng":-0.044144,"elevation":38.8},{"lat":51.445321,"lng":-0.044199,"elevation":38.9},{"lat":51.445323,"lng":-0.044251,"elevation":39},{"lat":51.445326,"lng":-0.044296,"elevation":39.1},{"lat":51.445326,"lng":-0.044358,"elevation":39.3},{"lat":51.445327,"lng":-0.044424,"elevation":39.4},{"lat":51.445328,"lng":-0.044474,"elevation":39.5},{"lat":51.445335,"lng":-0.044519,"elevation":39.7},{"lat":51.445347,"lng":-0.04456,"elevation":39.8},{"lat":51.445352,"lng":-0.044605,"elevation":39.9},{"lat":51.445357,"lng":-0.04465,"elevation":40},{"lat":51.445364,"lng":-0.044692,"elevation":40.1},{"lat":51.445342,"lng":-0.044728,"elevation":40.2},{"lat":51.445307,"lng":-0.044745,"elevation":40.1},{"lat":51.445277,"lng":-0.04475,"elevation":40},{"lat":51.445247,"lng":-0.044751,"elevation":40},{"lat":51.445219,"lng":-0.04477,"elevation":39.9},{"lat":51.445194,"lng":-0.044792,"elevation":39.9},{"lat":51.445158,"lng":-0.044804,"elevation":39.8},{"lat":51.445139,"lng":-0.044848,"elevation":39.9},{"lat":51.445125,"lng":-0.044802,"elevation":39.7},{"lat":51.445128,"lng":-0.044755,"elevation":39.6}],[{"lat":51.445225,"lng":-0.044963,"elevation":40.3},{"lat":51.445154,"lng":-0.044875,"elevation":40},{"lat":51.445102,"lng":-0.044829,"elevation":39.7},{"lat":51.445154,"lng":-0.044901,"elevation":40},{"lat":51.445203,"lng":-0.044788,"elevation":39.9},{"lat":51.445149,"lng":-0.044767,"elevation":39.7},{"lat":51.445177,"lng":-0.044771,"elevation":39.8},{"lat":51.445219,"lng":-0.044753,"elevation":39.9},{"lat":51.445258,"lng":-0.044763,"elevation":40},{"lat":51.445301,"lng":-0.044772,"elevation":40.1},{"lat":51.445336,"lng":-0.044769,"elevation":40.2},{"lat":51.445356,"lng":-0.044735,"elevation":40.2},{"lat":51.445357,"lng":-0.044675,"elevation":40.1},{"lat":51.445358,"lng":-0.044613,"elevation":39.9},{"lat":51.44535,"lng":-0.044551,"elevation":39.8},{"lat":51.445345,"lng":-0.044489,"elevation":39.6},{"lat":51.445345,"lng":-0.044432,"elevation":39.5},{"lat":51.445345,"lng":-0.044374,"elevation":39.3},{"lat":51.445343,"lng":-0.044326,"elevation":39.2},{"lat":51.445341,"lng":-0.044278,"elevation":39.1},{"lat":51.445342,"lng":-0.044231,"elevation":39},{"lat":51.445343,"lng":-0.04418,"elevation":38.9},{"lat":51.445345,"lng":-0.044125,"elevation":38.8},{"lat":51.445345,"lng":-0.044073,"elevation":38.7},{"lat":51.445347,"lng":-0.044025,"elevation":38.5},{"lat":51.445344,"lng":-0.04398,"elevation":38.4},{"lat":51.44534,"lng":-0.043936,"elevation":38.3},{"lat":51.445339,"lng":-0.043888,"elevation":38.2},{"lat":51.44534,"lng":-0.043842,"elevation":38.1},{"lat":51.445342,"lng":-0.043794,"elevation":38},{"lat":51.445343,"lng":-0.043732,"elevation":37.9},{"lat":51.445351,"lng":-0.043679,"elevation":37.8},{"lat":51.445364,"lng":-0.043627,"elevation":37.7},{"lat":51.445372,"lng":-0.043578,"elevation":37.5},{"lat":51.44537,"lng":-0.043535,"elevation":37.4},{"lat":51.445357,"lng":-0.043473,"elevation":37.3},{"lat":51.445359,"lng":-0.043415,"elevation":37.2},{"lat":51.445362,"lng":-0.043357,"elevation":37},{"lat":51.445367,"lng":-0.04331,"elevation":36.9},{"lat":51.445361,"lng":-0.043255,"elevation":36.8},{"lat":51.445356,"lng":-0.043198,"elevation":36.7},{"lat":51.445353,"lng":-0.043145,"elevation":36.5},{"lat":51.445359,"lng":-0.043093,"elevation":36.4},{"lat":51.445363,"lng":-0.04304,"elevation":36.3},{"lat":51.445358,"lng":-0.042992,"elevation":36.2},{"lat":51.445358,"lng":-0.042939,"elevation":36.1},{"lat":51.44535,"lng":-0.042884,"elevation":36},{"lat":51.445349,"lng":-0.042826,"elevation":36.1},{"lat":51.445331,"lng":-0.042774,"elevation":36.2},{"lat":51.445298,"lng":-0.042745,"elevation":36.2},{"lat":51.445272,"lng":-0.042718,"elevation":36.2},{"lat":51.445261,"lng":-0.042667,"elevation":36.2},{"lat":51.445254,"lng":-0.042616,"elevation":36.3},{"lat":51.445254,"lng":-0.042558,"elevation":36.3},{"lat":51.445279,"lng":-0.042539,"elevation":36.4},{"lat":51.445314,"lng":-0.042535,"elevation":36.4},{"lat":51.445351,"lng":-0.042532,"elevation":36.4},{"lat":51.445386,"lng":-0.042499,"elevation":36.5},{"lat":51.445406,"lng":-0.042458,"elevation":36.5},{"lat":51.445421,"lng":-0.042407,"elevation":36.6},{"lat":51.445425,"lng":-0.042357,"elevation":36.7},{"lat":51.445427,"lng":-0.042306,"elevation":36.8},{"lat":51.445434,"lng":-0.042255,"elevation":36.9},{"lat":51.445442,"lng":-0.042207,"elevation":36.9},{"lat":51.445447,"lng":-0.042158,"elevation":37},{"lat":51.445452,"lng":-0.042112,"elevation":37.1},{"lat":51.445458,"lng":-0.042068,"elevation":37.2},{"lat":51.445467,"lng":-0.042024,"elevation":37.3},{"lat":51.445475,"lng":-0.041977,"elevation":37.3},{"lat":51.445487,"lng":-0.041932,"elevation":37.5},{"lat":51.445493,"lng":-0.041885,"elevation":37.5},{"lat":51.445502,"lng":-0.041838,"elevation":37.6},{"lat":51.445512,"lng":-0.041793,"elevation":37.7},{"lat":51.445524,"lng":-0.041747,"elevation":37.8},{"lat":51.44553,"lng":-0.041698,"elevation":37.9},{"lat":51.445536,"lng":-0.041651,"elevation":38},{"lat":51.445537,"lng":-0.041606,"elevation":38.1},{"lat":51.445535,"lng":-0.041561,"elevation":38.1},{"lat":51.445537,"lng":-0.041516,"elevation":38.2},{"lat":51.44554,"lng":-0.041452,"elevation":38.3},{"lat":51.445545,"lng":-0.041389,"elevation":38.4},{"lat":51.445547,"lng":-0.041343,"elevation":38.5},{"lat":51.445544,"lng":-0.041297,"elevation":38.5},{"lat":51.445546,"lng":-0.041252,"elevation":38.6},{"lat":51.445547,"lng":-0.041207,"elevation":38.9},{"lat":51.44555,"lng":-0.041162,"elevation":39.2},{"lat":51.445556,"lng":-0.041118,"elevation":39.5},{"lat":51.445564,"lng":-0.041072,"elevation":39.8},{"lat":51.445573,"lng":-0.041025,"elevation":40.2},{"lat":51.445578,"lng":-0.040974,"elevation":40.5},{"lat":51.445586,"lng":-0.040927,"elevation":40.8},{"lat":51.445595,"lng":-0.040864,"elevation":41.3},{"lat":51.445601,"lng":-0.040821,"elevation":41.6},{"lat":51.445601,"lng":-0.040773,"elevation":41.9},{"lat":51.445601,"lng":-0.040724,"elevation":42.2},{"lat":51.445602,"lng":-0.040676,"elevation":42.5},{"lat":51.445601,"lng":-0.040631,"elevation":42.8},{"lat":51.445607,"lng":-0.040568,"elevation":43.2},{"lat":51.445609,"lng":-0.040525,"elevation":43.5},{"lat":51.445614,"lng":-0.040464,"elevation":43.9},{"lat":51.445619,"lng":-0.040402,"elevation":44.3},{"lat":51.445622,"lng":-0.040358,"elevation":44.7},{"lat":51.445624,"lng":-0.040312,"elevation":45},{"lat":51.445622,"lng":-0.040268,"elevation":45.3},{"lat":51.445621,"lng":-0.040206,"elevation":45.8},{"lat":51.445623,"lng":-0.040143,"elevation":46.3},{"lat":51.44562,"lng":-0.040098,"elevation":46.6},{"lat":51.445626,"lng":-0.040036,"elevation":47.1},{"lat":51.445632,"lng":-0.039975,"elevation":47.6},{"lat":51.445634,"lng":-0.039932,"elevation":47.9},{"lat":51.445638,"lng":-0.039867,"elevation":48.5},{"lat":51.445643,"lng":-0.039821,"elevation":48.8},{"lat":51.445649,"lng":-0.039776,"elevation":49.2},{"lat":51.445659,"lng":-0.039733,"elevation":49.6},{"lat":51.445664,"lng":-0.039688,"elevation":50},{"lat":51.445671,"lng":-0.039643,"elevation":50.4},{"lat":51.44568,"lng":-0.039595,"elevation":50.8},{"lat":51.445684,"lng":-0.039545,"elevation":51},{"lat":51.445685,"lng":-0.039499,"elevation":51},{"lat":51.445683,"lng":-0.039454,"elevation":51},{"lat":51.445682,"lng":-0.039408,"elevation":51},{"lat":51.445687,"lng":-0.03934,"elevation":51.1},{"lat":51.445693,"lng":-0.03926,"elevation":51.2},{"lat":51.445706,"lng":-0.039186,"elevation":51.4},{"lat":51.445721,"lng":-0.039114,"elevation":51.6},{"lat":51.445725,"lng":-0.039034,"elevation":51.7},{"lat":51.445734,"lng":-0.038953,"elevation":51.9},{"lat":51.445744,"lng":-0.038873,"elevation":52},{"lat":51.445752,"lng":-0.038798,"elevation":52.2},{"lat":51.445765,"lng":-0.038724,"elevation":52.4},{"lat":51.445773,"lng":-0.038645,"elevation":52.6},{"lat":51.445778,"lng":-0.038563,"elevation":52.8},{"lat":51.445774,"lng":-0.038484,"elevation":52.9},{"lat":51.445767,"lng":-0.038409,"elevation":52.9},{"lat":51.445776,"lng":-0.038334,"elevation":53.2},{"lat":51.445795,"lng":-0.038258,"elevation":53.5},{"lat":51.445819,"lng":-0.038189,"elevation":53.9},{"lat":51.445847,"lng":-0.038122,"elevation":54.3},{"lat":51.445869,"lng":-0.038055,"elevation":54.6},{"lat":51.445873,"lng":-0.037984,"elevation":54.8},{"lat":51.445874,"lng":-0.03793,"elevation":54.9},{"lat":51.445897,"lng":-0.037873,"elevation":55.1},{"lat":51.445918,"lng":-0.03781,"elevation":55.2},{"lat":51.445938,"lng":-0.037742,"elevation":55.3},{"lat":51.445961,"lng":-0.037675,"elevation":55.4},{"lat":51.445986,"lng":-0.037619,"elevation":55.5},{"lat":51.446029,"lng":-0.037598,"elevation":55.9},{"lat":51.446072,"lng":-0.037584,"elevation":56.4},{"lat":51.446113,"lng":-0.037569,"elevation":56.8},{"lat":51.446155,"lng":-0.037571,"elevation":57.2},{"lat":51.446198,"lng":-0.037581,"elevation":57.7},{"lat":51.446241,"lng":-0.037595,"elevation":58.1},{"lat":51.446282,"lng":-0.037616,"elevation":58.4},{"lat":51.446325,"lng":-0.037634,"elevation":58.7},{"lat":51.446373,"lng":-0.037645,"elevation":58.9},{"lat":51.44642,"lng":-0.037651,"elevation":59.1},{"lat":51.446468,"lng":-0.037665,"elevation":59.4},{"lat":51.446517,"lng":-0.037684,"elevation":59.6},{"lat":51.446568,"lng":-0.037707,"elevation":59.9},{"lat":51.446595,"lng":-0.037719,"elevation":60.1},{"lat":51.446645,"lng":-0.037731,"elevation":60.3},{"lat":51.446697,"lng":-0.037723,"elevation":60.6},{"lat":51.446743,"lng":-0.03771,"elevation":60.7},{"lat":51.44679,"lng":-0.03771,"elevation":60.9},{"lat":51.446832,"lng":-0.03772,"elevation":61.2},{"lat":51.446878,"lng":-0.037742,"elevation":61.4},{"lat":51.446924,"lng":-0.037773,"elevation":61.8},{"lat":51.44697,"lng":-0.037784,"elevation":62},{"lat":51.447051,"lng":-0.037796,"elevation":62.4},{"lat":51.447081,"lng":-0.037803,"elevation":62.6},{"lat":51.447132,"lng":-0.037818,"elevation":62.1},{"lat":51.44716,"lng":-0.03782,"elevation":61.8},{"lat":51.447212,"lng":-0.037822,"elevation":61.2},{"lat":51.447238,"lng":-0.037744,"elevation":60.6},{"lat":51.44723,"lng":-0.037697,"elevation":60.5},{"lat":51.447214,"lng":-0.037657,"elevation":60.6},{"lat":51.447197,"lng":-0.03762,"elevation":60.7},{"lat":51.447178,"lng":-0.037586,"elevation":60.8},{"lat":51.44716,"lng":-0.037553,"elevation":60.9},{"lat":51.447106,"lng":-0.037446,"elevation":61.1},{"lat":51.447097,"lng":-0.037426,"elevation":61.1},{"lat":51.447083,"lng":-0.037386,"elevation":61.1},{"lat":51.447068,"lng":-0.037347,"elevation":60.9},{"lat":51.447045,"lng":-0.037273,"elevation":60.5},{"lat":51.447024,"lng":-0.037196,"elevation":60.2},{"lat":51.447004,"lng":-0.037117,"elevation":59.8},{"lat":51.446997,"lng":-0.037074,"elevation":59.6},{"lat":51.446991,"lng":-0.037031,"elevation":59.4},{"lat":51.446985,"lng":-0.036986,"elevation":59.2},{"lat":51.446979,"lng":-0.036943,"elevation":59},{"lat":51.446964,"lng":-0.036858,"elevation":58.6},{"lat":51.446956,"lng":-0.036816,"elevation":58.4},{"lat":51.446948,"lng":-0.036775,"elevation":58.2},{"lat":51.446932,"lng":-0.036699,"elevation":57.8},{"lat":51.446927,"lng":-0.036656,"elevation":57.6},{"lat":51.44692,"lng":-0.036573,"elevation":57.2},{"lat":51.446917,"lng":-0.036533,"elevation":57},{"lat":51.446912,"lng":-0.036487,"elevation":56.8},{"lat":51.4469,"lng":-0.036406,"elevation":56.4},{"lat":51.446889,"lng":-0.036335,"elevation":56.1},{"lat":51.446882,"lng":-0.036261,"elevation":55.8},{"lat":51.44687,"lng":-0.036195,"elevation":55.6},{"lat":51.446863,"lng":-0.036133,"elevation":55.5},{"lat":51.44686,"lng":-0.036059,"elevation":55.3},{"lat":51.446858,"lng":-0.035979,"elevation":55.2},{"lat":51.446858,"lng":-0.035936,"elevation":55.1},{"lat":51.446858,"lng":-0.035892,"elevation":55},{"lat":51.446856,"lng":-0.035847,"elevation":54.9},{"lat":51.44685,"lng":-0.035762,"elevation":54.7},{"lat":51.446843,"lng":-0.03568,"elevation":54.5},{"lat":51.44684,"lng":-0.0356,"elevation":54.4},{"lat":51.446841,"lng":-0.035518,"elevation":54.2},{"lat":51.44685,"lng":-0.035442,"elevation":54.1},{"lat":51.446891,"lng":-0.035391,"elevation":53.9},{"lat":51.446941,"lng":-0.035374,"elevation":53.9},{"lat":51.446993,"lng":-0.035382,"elevation":53.9},{"lat":51.447045,"lng":-0.0354,"elevation":54},{"lat":51.447098,"lng":-0.035428,"elevation":54},{"lat":51.447126,"lng":-0.03545,"elevation":53.9},{"lat":51.447155,"lng":-0.035473,"elevation":53.8},{"lat":51.447208,"lng":-0.035519,"elevation":53.6},{"lat":51.447255,"lng":-0.035554,"elevation":53.5},{"lat":51.44728,"lng":-0.035575,"elevation":53.4},{"lat":51.447328,"lng":-0.035599,"elevation":53.2},{"lat":51.447359,"lng":-0.035601,"elevation":53},{"lat":51.447409,"lng":-0.035605,"elevation":52.8},{"lat":51.447459,"lng":-0.035621,"elevation":52.6},{"lat":51.44751,"lng":-0.035654,"elevation":52.4},{"lat":51.447559,"lng":-0.035696,"elevation":52.2},{"lat":51.447609,"lng":-0.035737,"elevation":52},{"lat":51.447634,"lng":-0.035759,"elevation":51.9},{"lat":51.447657,"lng":-0.035784,"elevation":51.8},{"lat":51.447682,"lng":-0.035809,"elevation":51.7},{"lat":51.447709,"lng":-0.035837,"elevation":51.6},{"lat":51.447735,"lng":-0.035865,"elevation":51.5},{"lat":51.447763,"lng":-0.035898,"elevation":51.4},{"lat":51.447791,"lng":-0.035929,"elevation":51.3},{"lat":51.447817,"lng":-0.03596,"elevation":51.2},{"lat":51.447844,"lng":-0.035988,"elevation":51.1},{"lat":51.447869,"lng":-0.036021,"elevation":51},{"lat":51.447893,"lng":-0.036056,"elevation":50.9},{"lat":51.447918,"lng":-0.03609,"elevation":50.8},{"lat":51.44794,"lng":-0.036118,"elevation":50.6},{"lat":51.447965,"lng":-0.036142,"elevation":50.5},{"lat":51.448008,"lng":-0.0362,"elevation":50.2},{"lat":51.448057,"lng":-0.036232,"elevation":49.8},{"lat":51.448082,"lng":-0.036252,"elevation":49.6},{"lat":51.448128,"lng":-0.036301,"elevation":49.3},{"lat":51.448168,"lng":-0.036345,"elevation":48.9},{"lat":51.448238,"lng":-0.036396,"elevation":48.3},{"lat":51.448284,"lng":-0.036422,"elevation":47.9},{"lat":51.448331,"lng":-0.036443,"elevation":47.5},{"lat":51.448378,"lng":-0.036461,"elevation":47.1},{"lat":51.448417,"lng":-0.036469,"elevation":46.7},{"lat":51.448408,"lng":-0.036527,"elevation":46.8},{"lat":51.448399,"lng":-0.036572,"elevation":46.9},{"lat":51.448399,"lng":-0.036633,"elevation":46.9},{"lat":51.448401,"lng":-0.036699,"elevation":46.8},{"lat":51.448401,"lng":-0.036764,"elevation":46.8},{"lat":51.448402,"lng":-0.036838,"elevation":46.8},{"lat":51.4484,"lng":-0.036911,"elevation":46.8},{"lat":51.448385,"lng":-0.036984,"elevation":47},{"lat":51.448359,"lng":-0.037051,"elevation":47.2},{"lat":51.448329,"lng":-0.037115,"elevation":47.5},{"lat":51.44831,"lng":-0.037186,"elevation":47.8},{"lat":51.448284,"lng":-0.037255,"elevation":48.1},{"lat":51.448254,"lng":-0.037314,"elevation":48.4},{"lat":51.448236,"lng":-0.037381,"elevation":48.6},{"lat":51.448229,"lng":-0.037457,"elevation":48.7},{"lat":51.448216,"lng":-0.037532,"elevation":48.9},{"lat":51.448198,"lng":-0.037608,"elevation":49.2},{"lat":51.448181,"lng":-0.037688,"elevation":49.4},{"lat":51.448166,"lng":-0.037761,"elevation":49.6},{"lat":51.448152,"lng":-0.037831,"elevation":49.8},{"lat":51.448136,"lng":-0.037899,"elevation":50.1},{"lat":51.448107,"lng":-0.037918,"elevation":50.5},{"lat":51.448076,"lng":-0.037907,"elevation":50.9},{"lat":51.448043,"lng":-0.037903,"elevation":51.3},{"lat":51.448009,"lng":-0.03791,"elevation":51.8},{"lat":51.447972,"lng":-0.037913,"elevation":52.3},{"lat":51.447938,"lng":-0.037913,"elevation":52.7},{"lat":51.447901,"lng":-0.037904,"elevation":53.2},{"lat":51.447864,"lng":-0.037897,"elevation":53.6},{"lat":51.447827,"lng":-0.037889,"elevation":54},{"lat":51.44779,"lng":-0.037878,"elevation":54.5},{"lat":51.447751,"lng":-0.037868,"elevation":54.9},{"lat":51.44771,"lng":-0.037864,"elevation":55.4},{"lat":51.447667,"lng":-0.037864,"elevation":55.9},{"lat":51.447625,"lng":-0.037852,"elevation":56.4},{"lat":51.447583,"lng":-0.037849,"elevation":56.9},{"lat":51.447542,"lng":-0.037846,"elevation":57.3},{"lat":51.447503,"lng":-0.037838,"elevation":57.8},{"lat":51.44746,"lng":-0.037825,"elevation":58.2},{"lat":51.447422,"lng":-0.037814,"elevation":58.7},{"lat":51.447388,"lng":-0.037808,"elevation":59},{"lat":51.447349,"lng":-0.037799,"elevation":59.5},{"lat":51.447315,"lng":-0.037785,"elevation":59.8},{"lat":51.447285,"lng":-0.03778,"elevation":60.2},{"lat":51.447254,"lng":-0.037763,"elevation":60.5},{"lat":51.447228,"lng":-0.037726,"elevation":60.7},{"lat":51.447202,"lng":-0.037665,"elevation":60.8},{"lat":51.447187,"lng":-0.037618,"elevation":60.8},{"lat":51.447173,"lng":-0.037575,"elevation":60.8},{"lat":51.447161,"lng":-0.037528,"elevation":60.8},{"lat":51.447147,"lng":-0.037478,"elevation":60.7},{"lat":51.447132,"lng":-0.037434,"elevation":60.7},{"lat":51.447118,"lng":-0.037388,"elevation":60.7},{"lat":51.447094,"lng":-0.037298,"elevation":60.7},{"lat":51.447083,"lng":-0.037256,"elevation":60.6},{"lat":51.447073,"lng":-0.037214,"elevation":60.4},{"lat":51.447058,"lng":-0.037122,"elevation":60},{"lat":51.44705,"lng":-0.037073,"elevation":59.8},{"lat":51.447041,"lng":-0.037027,"elevation":59.6},{"lat":51.447032,"lng":-0.036981,"elevation":59.3},{"lat":51.447023,"lng":-0.036938,"elevation":59.1},{"lat":51.447006,"lng":-0.036861,"elevation":58.7},{"lat":51.446991,"lng":-0.036786,"elevation":58.3},{"lat":51.446979,"lng":-0.03671,"elevation":57.9},{"lat":51.446967,"lng":-0.036636,"elevation":57.6},{"lat":51.446957,"lng":-0.036572,"elevation":57.3},{"lat":51.446948,"lng":-0.036507,"elevation":57},{"lat":51.446942,"lng":-0.03644,"elevation":56.7},{"lat":51.446937,"lng":-0.036372,"elevation":56.4},{"lat":51.446933,"lng":-0.036301,"elevation":56},{"lat":51.446927,"lng":-0.036228,"elevation":55.8},{"lat":51.446919,"lng":-0.036161,"elevation":55.6},{"lat":51.446911,"lng":-0.036097,"elevation":55.5},{"lat":51.446902,"lng":-0.036029,"elevation":55.3},{"lat":51.446911,"lng":-0.035957,"elevation":55.2},{"lat":51.446919,"lng":-0.035884,"elevation":55},{"lat":51.446919,"lng":-0.035812,"elevation":54.9},{"lat":51.446912,"lng":-0.03574,"elevation":54.7},{"lat":51.446908,"lng":-0.035662,"elevation":54.5},{"lat":51.446911,"lng":-0.035588,"elevation":54.4},{"lat":51.446915,"lng":-0.035506,"elevation":54.2},{"lat":51.446933,"lng":-0.035428,"elevation":54},{"lat":51.446971,"lng":-0.03539,"elevation":53.9},{"lat":51.447021,"lng":-0.035369,"elevation":53.9},{"lat":51.44707,"lng":-0.035355,"elevation":53.9},{"lat":51.447117,"lng":-0.035369,"elevation":53.7},{"lat":51.447141,"lng":-0.035395,"elevation":53.7},{"lat":51.447164,"lng":-0.035426,"elevation":53.6},{"lat":51.447185,"lng":-0.035455,"elevation":53.6},{"lat":51.447207,"lng":-0.035482,"elevation":53.6},{"lat":51.447255,"lng":-0.03553,"elevation":53.4},{"lat":51.447281,"lng":-0.035552,"elevation":53.3},{"lat":51.447306,"lng":-0.035572,"elevation":53.3},{"lat":51.44733,"lng":-0.035593,"elevation":53.2},{"lat":51.447372,"lng":-0.035628,"elevation":53},{"lat":51.447419,"lng":-0.035657,"elevation":52.8},{"lat":51.447474,"lng":-0.035675,"elevation":52.6},{"lat":51.447502,"lng":-0.035685,"elevation":52.5},{"lat":51.447532,"lng":-0.035696,"elevation":52.3},{"lat":51.44756,"lng":-0.035708,"elevation":52.2},{"lat":51.447587,"lng":-0.035717,"elevation":52.1},{"lat":51.447637,"lng":-0.03574,"elevation":51.9},{"lat":51.447681,"lng":-0.035775,"elevation":51.7},{"lat":51.447721,"lng":-0.035828,"elevation":51.5},{"lat":51.44774,"lng":-0.035861,"elevation":51.5},{"lat":51.447776,"lng":-0.035922,"elevation":51.4},{"lat":51.447814,"lng":-0.035974,"elevation":51.2},{"lat":51.447854,"lng":-0.036019,"elevation":51.1},{"lat":51.447893,"lng":-0.036068,"elevation":50.9},{"lat":51.447931,"lng":-0.036122,"elevation":50.7},{"lat":51.447967,"lng":-0.036173,"elevation":50.5},{"lat":51.447998,"lng":-0.036216,"elevation":50.3},{"lat":51.448028,"lng":-0.036261,"elevation":50.1},{"lat":51.448057,"lng":-0.036313,"elevation":49.9},{"lat":51.448097,"lng":-0.036355,"elevation":49.6},{"lat":51.448125,"lng":-0.03637,"elevation":49.3},{"lat":51.448152,"lng":-0.036383,"elevation":49.1},{"lat":51.44818,"lng":-0.03639,"elevation":48.8},{"lat":51.448209,"lng":-0.036395,"elevation":48.6},{"lat":51.448237,"lng":-0.0364,"elevation":48.4},{"lat":51.448265,"lng":-0.036404,"elevation":48.1},{"lat":51.448292,"lng":-0.036409,"elevation":47.9},{"lat":51.448321,"lng":-0.036412,"elevation":47.6},{"lat":51.44835,"lng":-0.03641,"elevation":47.4},{"lat":51.448377,"lng":-0.036408,"elevation":47.1},{"lat":51.448421,"lng":-0.036403,"elevation":46.7},{"lat":51.448429,"lng":-0.036464,"elevation":46.6},{"lat":51.448413,"lng":-0.03653,"elevation":46.8},{"lat":51.4484,"lng":-0.036595,"elevation":46.9},{"lat":51.44839,"lng":-0.036668,"elevation":47},{"lat":51.448384,"lng":-0.036751,"elevation":47},{"lat":51.448394,"lng":-0.036823,"elevation":46.9},{"lat":51.448408,"lng":-0.036891,"elevation":46.7},{"lat":51.448403,"lng":-0.036964,"elevation":46.8},{"lat":51.448389,"lng":-0.037027,"elevation":46.9},{"lat":51.448373,"lng":-0.037078,"elevation":47.1},{"lat":51.448353,"lng":-0.037147,"elevation":47.3},{"lat":51.448328,"lng":-0.037215,"elevation":47.6},{"lat":51.448307,"lng":-0.037274,"elevation":47.8},{"lat":51.448291,"lng":-0.037336,"elevation":48},{"lat":51.448273,"lng":-0.037399,"elevation":48.2},{"lat":51.448244,"lng":-0.037459,"elevation":48.6},{"lat":51.448221,"lng":-0.037533,"elevation":48.9},{"lat":51.448206,"lng":-0.03757,"elevation":49.1},{"lat":51.448185,"lng":-0.037645,"elevation":49.3},{"lat":51.448169,"lng":-0.037724,"elevation":49.6},{"lat":51.448155,"lng":-0.037801,"elevation":49.8},{"lat":51.448148,"lng":-0.037875,"elevation":49.9},{"lat":51.448127,"lng":-0.037936,"elevation":50.1},{"lat":51.448093,"lng":-0.037964,"elevation":50.5},{"lat":51.448063,"lng":-0.03796,"elevation":50.9},{"lat":51.448029,"lng":-0.037955,"elevation":51.3},{"lat":51.447997,"lng":-0.037951,"elevation":51.8},{"lat":51.447966,"lng":-0.037944,"elevation":52.2},{"lat":51.447929,"lng":-0.037935,"elevation":52.7},{"lat":51.447893,"lng":-0.037926,"elevation":53.2},{"lat":51.447859,"lng":-0.03792,"elevation":53.7},{"lat":51.447823,"lng":-0.037915,"elevation":54.1},{"lat":51.447786,"lng":-0.037901,"elevation":54.5},{"lat":51.447746,"lng":-0.037889,"elevation":55},{"lat":51.447712,"lng":-0.037885,"elevation":55.4},{"lat":51.447674,"lng":-0.037884,"elevation":55.8},{"lat":51.447634,"lng":-0.037876,"elevation":56.3},{"lat":51.447594,"lng":-0.037864,"elevation":56.8},{"lat":51.447557,"lng":-0.037856,"elevation":57.2},{"lat":51.447521,"lng":-0.037859,"elevation":57.6},{"lat":51.447484,"lng":-0.037857,"elevation":58},{"lat":51.447449,"lng":-0.037848,"elevation":58.4},{"lat":51.447412,"lng":-0.037841,"elevation":58.9},{"lat":51.447381,"lng":-0.037823,"elevation":59.2},{"lat":51.447343,"lng":-0.03781,"elevation":59.6},{"lat":51.447304,"lng":-0.037795,"elevation":60},{"lat":51.447266,"lng":-0.037761,"elevation":60.3},{"lat":51.44723,"lng":-0.037721,"elevation":60.6},{"lat":51.447203,"lng":-0.037673,"elevation":60.8},{"lat":51.447181,"lng":-0.037614,"elevation":60.8},{"lat":51.447155,"lng":-0.037546,"elevation":60.9},{"lat":51.447142,"lng":-0.037505,"elevation":60.9},{"lat":51.447129,"lng":-0.037464,"elevation":60.9},{"lat":51.447116,"lng":-0.037421,"elevation":60.9},{"lat":51.447104,"lng":-0.037378,"elevation":60.8},{"lat":51.447093,"lng":-0.037336,"elevation":60.8},{"lat":51.447082,"lng":-0.037294,"elevation":60.8},{"lat":51.447074,"lng":-0.037252,"elevation":60.6},{"lat":51.447059,"lng":-0.037175,"elevation":60.2},{"lat":51.447043,"lng":-0.037106,"elevation":59.9},{"lat":51.447026,"lng":-0.037035,"elevation":59.6},{"lat":51.447012,"lng":-0.036961,"elevation":59.2},{"lat":51.446997,"lng":-0.036884,"elevation":58.8},{"lat":51.44698,"lng":-0.036805,"elevation":58.4},{"lat":51.446965,"lng":-0.036726,"elevation":58},{"lat":51.446959,"lng":-0.036652,"elevation":57.6},{"lat":51.446957,"lng":-0.036588,"elevation":57.3},{"lat":51.446953,"lng":-0.036528,"elevation":57.1},{"lat":51.446942,"lng":-0.036463,"elevation":56.8},{"lat":51.446937,"lng":-0.036398,"elevation":56.5},{"lat":51.446932,"lng":-0.036331,"elevation":56.2},{"lat":51.446925,"lng":-0.036264,"elevation":55.9},{"lat":51.44692,"lng":-0.036196,"elevation":55.7},{"lat":51.446916,"lng":-0.036126,"elevation":55.5},{"lat":51.446915,"lng":-0.036049,"elevation":55.4},{"lat":51.446915,"lng":-0.036005,"elevation":55.3},{"lat":51.446912,"lng":-0.035924,"elevation":55.1},{"lat":51.44691,"lng":-0.035842,"elevation":54.9},{"lat":51.44691,"lng":-0.035798,"elevation":54.8},{"lat":51.446909,"lng":-0.035755,"elevation":54.7},{"lat":51.446909,"lng":-0.035711,"elevation":54.6},{"lat":51.446909,"lng":-0.035668,"elevation":54.5},{"lat":51.446911,"lng":-0.035583,"elevation":54.4},{"lat":51.446913,"lng":-0.035506,"elevation":54.2},{"lat":51.44692,"lng":-0.035429,"elevation":54},{"lat":51.446956,"lng":-0.035388,"elevation":53.9},{"lat":51.446998,"lng":-0.035368,"elevation":53.9},{"lat":51.447044,"lng":-0.035363,"elevation":53.9},{"lat":51.447091,"lng":-0.035377,"elevation":53.9},{"lat":51.447137,"lng":-0.035386,"elevation":53.7},{"lat":51.447189,"lng":-0.035386,"elevation":53.4},{"lat":51.447236,"lng":-0.035408,"elevation":53.2},{"lat":51.447289,"lng":-0.035444,"elevation":53.1},{"lat":51.447318,"lng":-0.035466,"elevation":53},{"lat":51.447381,"lng":-0.035515,"elevation":52.8},{"lat":51.447412,"lng":-0.035544,"elevation":52.7},{"lat":51.44744,"lng":-0.035574,"elevation":52.6},{"lat":51.447467,"lng":-0.035603,"elevation":52.5},{"lat":51.447494,"lng":-0.035625,"elevation":52.4},{"lat":51.447521,"lng":-0.035645,"elevation":52.3},{"lat":51.447546,"lng":-0.035664,"elevation":52.2},{"lat":51.447574,"lng":-0.035679,"elevation":52.1},{"lat":51.44763,"lng":-0.035726,"elevation":51.9},{"lat":51.447657,"lng":-0.035754,"elevation":51.8},{"lat":51.447682,"lng":-0.035781,"elevation":51.7},{"lat":51.447706,"lng":-0.035809,"elevation":51.6},{"lat":51.447729,"lng":-0.035837,"elevation":51.5},{"lat":51.447751,"lng":-0.035862,"elevation":51.4},{"lat":51.447775,"lng":-0.035885,"elevation":51.3},{"lat":51.447816,"lng":-0.035938,"elevation":51.2},{"lat":51.447857,"lng":-0.035984,"elevation":51},{"lat":51.447895,"lng":-0.03603,"elevation":50.9},{"lat":51.447937,"lng":-0.036061,"elevation":50.6},{"lat":51.447978,"lng":-0.036095,"elevation":50.3},{"lat":51.448018,"lng":-0.036137,"elevation":50},{"lat":51.448056,"lng":-0.036186,"elevation":49.8},{"lat":51.448096,"lng":-0.036232,"elevation":49.5},{"lat":51.448118,"lng":-0.036284,"elevation":49.3},{"lat":51.44816,"lng":-0.036326,"elevation":49},{"lat":51.448202,"lng":-0.036358,"elevation":48.6},{"lat":51.448247,"lng":-0.036381,"elevation":48.3},{"lat":51.448298,"lng":-0.036393,"elevation":47.8},{"lat":51.448326,"lng":-0.036388,"elevation":47.6},{"lat":51.448375,"lng":-0.036382,"elevation":47.1},{"lat":51.4484,"lng":-0.036425,"elevation":46.9},{"lat":51.448403,"lng":-0.036492,"elevation":46.9},{"lat":51.448401,"lng":-0.036566,"elevation":46.9},{"lat":51.448399,"lng":-0.036644,"elevation":46.9},{"lat":51.448405,"lng":-0.03672,"elevation":46.8},{"lat":51.448412,"lng":-0.036794,"elevation":46.7},{"lat":51.448405,"lng":-0.03687,"elevation":46.8},{"lat":51.448393,"lng":-0.036933,"elevation":46.9},{"lat":51.448386,"lng":-0.036976,"elevation":46.9},{"lat":51.448372,"lng":-0.037035,"elevation":47.1},{"lat":51.448349,"lng":-0.037109,"elevation":47.3},{"lat":51.448324,"lng":-0.037181,"elevation":47.6},{"lat":51.4483,"lng":-0.037243,"elevation":47.9},{"lat":51.448274,"lng":-0.0373,"elevation":48.2},{"lat":51.448256,"lng":-0.037366,"elevation":48.4},{"lat":51.448233,"lng":-0.037436,"elevation":48.7},{"lat":51.448216,"lng":-0.037502,"elevation":48.9},{"lat":51.448201,"lng":-0.037567,"elevation":49.1},{"lat":51.448194,"lng":-0.037644,"elevation":49.2},{"lat":51.448173,"lng":-0.037712,"elevation":49.5},{"lat":51.448153,"lng":-0.037783,"elevation":49.8},{"lat":51.448136,"lng":-0.037845,"elevation":50.1},{"lat":51.448124,"lng":-0.037916,"elevation":50.3},{"lat":51.448109,"lng":-0.037997,"elevation":50.1},{"lat":51.448093,"lng":-0.038068,"elevation":50},{"lat":51.448087,"lng":-0.038118,"elevation":49.9},{"lat":51.448072,"lng":-0.038194,"elevation":49.7},{"lat":51.448047,"lng":-0.038264,"elevation":49.7},{"lat":51.448032,"lng":-0.038338,"elevation":49.6},{"lat":51.448012,"lng":-0.038414,"elevation":49.5},{"lat":51.447996,"lng":-0.038494,"elevation":49.3},{"lat":51.447982,"lng":-0.038573,"elevation":49.1},{"lat":51.447964,"lng":-0.038651,"elevation":49},{"lat":51.44795,"lng":-0.038734,"elevation":48.7},{"lat":51.447944,"lng":-0.038779,"elevation":48.6},{"lat":51.447936,"lng":-0.038822,"elevation":48.5},{"lat":51.447923,"lng":-0.038863,"elevation":48.4},{"lat":51.447898,"lng":-0.038937,"elevation":48.3},{"lat":51.447875,"lng":-0.038999,"elevation":48.3},{"lat":51.447861,"lng":-0.039056,"elevation":48.2},{"lat":51.447856,"lng":-0.039125,"elevation":47.9},{"lat":51.447838,"lng":-0.039193,"elevation":47.8},{"lat":51.447825,"lng":-0.039256,"elevation":47.7},{"lat":51.447808,"lng":-0.039325,"elevation":47.5},{"lat":51.447787,"lng":-0.039401,"elevation":47.4},{"lat":51.447779,"lng":-0.039443,"elevation":47.3},{"lat":51.447769,"lng":-0.039522,"elevation":47.1},{"lat":51.447755,"lng":-0.039597,"elevation":46.9},{"lat":51.447732,"lng":-0.039663,"elevation":46.8},{"lat":51.447706,"lng":-0.039734,"elevation":46.8},{"lat":51.447687,"lng":-0.039799,"elevation":46.7},{"lat":51.447667,"lng":-0.03986,"elevation":46.6},{"lat":51.447648,"lng":-0.039924,"elevation":46.5},{"lat":51.447624,"lng":-0.039996,"elevation":46.3},{"lat":51.4476,"lng":-0.040065,"elevation":46.2},{"lat":51.447582,"lng":-0.040142,"elevation":45.9},{"lat":51.44757,"lng":-0.040183,"elevation":45.8},{"lat":51.44756,"lng":-0.040224,"elevation":45.7},{"lat":51.447544,"lng":-0.040301,"elevation":45.3},{"lat":51.447532,"lng":-0.040375,"elevation":45},{"lat":51.447523,"lng":-0.04045,"elevation":44.7},{"lat":51.447515,"lng":-0.040519,"elevation":44.4},{"lat":51.447503,"lng":-0.040574,"elevation":44.2},{"lat":51.447505,"lng":-0.040622,"elevation":44},{"lat":51.44749,"lng":-0.040665,"elevation":43.9},{"lat":51.447473,"lng":-0.040721,"elevation":43.7},{"lat":51.447459,"lng":-0.040789,"elevation":43.4},{"lat":51.447443,"lng":-0.040847,"elevation":43.2},{"lat":51.447436,"lng":-0.040916,"elevation":42.9},{"lat":51.44743,"lng":-0.040986,"elevation":42.5},{"lat":51.447413,"lng":-0.041054,"elevation":42.2},{"lat":51.447388,"lng":-0.041126,"elevation":41.9},{"lat":51.447361,"lng":-0.041188,"elevation":41.7},{"lat":51.44733,"lng":-0.041248,"elevation":41.4},{"lat":51.447296,"lng":-0.041306,"elevation":41.4},{"lat":51.447271,"lng":-0.04137,"elevation":41.4},{"lat":51.447241,"lng":-0.041433,"elevation":41.4},{"lat":51.447209,"lng":-0.041493,"elevation":41.5},{"lat":51.447173,"lng":-0.041558,"elevation":41.5},{"lat":51.447151,"lng":-0.041631,"elevation":41.4},{"lat":51.447124,"lng":-0.041692,"elevation":41.4},{"lat":51.447097,"lng":-0.041746,"elevation":41.4},{"lat":51.447073,"lng":-0.041794,"elevation":41.3},{"lat":51.447046,"lng":-0.041834,"elevation":41.3},{"lat":51.447017,"lng":-0.041881,"elevation":41.2},{"lat":51.446983,"lng":-0.041932,"elevation":41.1},{"lat":51.446962,"lng":-0.04196,"elevation":41},{"lat":51.446941,"lng":-0.041988,"elevation":41},{"lat":51.446896,"lng":-0.04203,"elevation":40.9},{"lat":51.446849,"lng":-0.042068,"elevation":40.7},{"lat":51.446803,"lng":-0.042115,"elevation":40.6},{"lat":51.446762,"lng":-0.042166,"elevation":40.5},{"lat":51.446715,"lng":-0.042228,"elevation":40.3},{"lat":51.446688,"lng":-0.04226,"elevation":40.2},{"lat":51.446663,"lng":-0.042288,"elevation":40.1},{"lat":51.446641,"lng":-0.042316,"elevation":40},{"lat":51.446599,"lng":-0.04237,"elevation":39.9},{"lat":51.446577,"lng":-0.042398,"elevation":39.8},{"lat":51.446535,"lng":-0.042442,"elevation":39.6},{"lat":51.446499,"lng":-0.042466,"elevation":39.5},{"lat":51.446462,"lng":-0.042487,"elevation":39.4},{"lat":51.446426,"lng":-0.04251,"elevation":39.3},{"lat":51.446386,"lng":-0.042528,"elevation":39.2},{"lat":51.446343,"lng":-0.042531,"elevation":39.1},{"lat":51.446297,"lng":-0.042533,"elevation":39},{"lat":51.446247,"lng":-0.042532,"elevation":38.9},{"lat":51.446218,"lng":-0.042537,"elevation":38.8},{"lat":51.446191,"lng":-0.042541,"elevation":38.7},{"lat":51.446164,"lng":-0.042544,"elevation":38.6},{"lat":51.446137,"lng":-0.042541,"elevation":38.6},{"lat":51.446108,"lng":-0.042538,"elevation":38.5},{"lat":51.44608,"lng":-0.042536,"elevation":38.4},{"lat":51.446052,"lng":-0.042536,"elevation":38.3},{"lat":51.446001,"lng":-0.042542,"elevation":38.2},{"lat":51.445953,"lng":-0.042543,"elevation":38},{"lat":51.445907,"lng":-0.042536,"elevation":37.9},{"lat":51.445857,"lng":-0.042535,"elevation":37.8},{"lat":51.445807,"lng":-0.042538,"elevation":37.6},{"lat":51.445761,"lng":-0.042541,"elevation":37.5},{"lat":51.445718,"lng":-0.04255,"elevation":37.3},{"lat":51.445673,"lng":-0.042557,"elevation":37.2},{"lat":51.445622,"lng":-0.04255,"elevation":37},{"lat":51.445572,"lng":-0.042543,"elevation":36.9},{"lat":51.445522,"lng":-0.042538,"elevation":36.8},{"lat":51.445471,"lng":-0.042524,"elevation":36.6},{"lat":51.445422,"lng":-0.042526,"elevation":36.5},{"lat":51.44537,"lng":-0.042544,"elevation":36.4},{"lat":51.445325,"lng":-0.042569,"elevation":36.4},{"lat":51.445287,"lng":-0.042571,"elevation":36.4},{"lat":51.445253,"lng":-0.042572,"elevation":36.3},{"lat":51.445231,"lng":-0.0426,"elevation":36.3},{"lat":51.445234,"lng":-0.042664,"elevation":36.2},{"lat":51.445233,"lng":-0.042725,"elevation":36.2},{"lat":51.445246,"lng":-0.042765,"elevation":36.1},{"lat":51.445276,"lng":-0.042796,"elevation":36.1},{"lat":51.445278,"lng":-0.042845,"elevation":36.1},{"lat":51.445283,"lng":-0.042911,"elevation":36},{"lat":51.445277,"lng":-0.042958,"elevation":36.1},{"lat":51.44528,"lng":-0.04301,"elevation":36.2},{"lat":51.445291,"lng":-0.043055,"elevation":36.3},{"lat":51.445305,"lng":-0.043103,"elevation":36.4},{"lat":51.44531,"lng":-0.043155,"elevation":36.5},{"lat":51.445295,"lng":-0.043219,"elevation":36.7},{"lat":51.445287,"lng":-0.043279,"elevation":36.8},{"lat":51.445294,"lng":-0.04334,"elevation":36.9},{"lat":51.445295,"lng":-0.043401,"elevation":37.1},{"lat":51.445286,"lng":-0.043452,"elevation":37.2},{"lat":51.445283,"lng":-0.043499,"elevation":37.3},{"lat":51.44529,"lng":-0.043556,"elevation":37.4},{"lat":51.445294,"lng":-0.043616,"elevation":37.6},{"lat":51.445298,"lng":-0.043659,"elevation":37.7},{"lat":51.4453,"lng":-0.043703,"elevation":37.8},{"lat":51.445303,"lng":-0.04375,"elevation":37.9},{"lat":51.445311,"lng":-0.043808,"elevation":38},{"lat":51.445321,"lng":-0.043859,"elevation":38.1},{"lat":51.445311,"lng":-0.043903,"elevation":38.2},{"lat":51.445305,"lng":-0.043952,"elevation":38.3},{"lat":51.445305,"lng":-0.044,"elevation":38.4},{"lat":51.445304,"lng":-0.044047,"elevation":38.5},{"lat":51.445302,"lng":-0.044096,"elevation":38.6},{"lat":51.445307,"lng":-0.044139,"elevation":38.7},{"lat":51.445309,"lng":-0.044185,"elevation":38.8},{"lat":51.445315,"lng":-0.044244,"elevation":39},{"lat":51.445313,"lng":-0.044301,"elevation":39.1},{"lat":51.445311,"lng":-0.044363,"elevation":39.3},{"lat":51.445329,"lng":-0.044416,"elevation":39.4},{"lat":51.445332,"lng":-0.04446,"elevation":39.5},{"lat":51.445335,"lng":-0.044521,"elevation":39.7},{"lat":51.445328,"lng":-0.044563,"elevation":39.7},{"lat":51.44532,"lng":-0.044606,"elevation":39.8},{"lat":51.445317,"lng":-0.044652,"elevation":39.9},{"lat":51.445297,"lng":-0.044688,"elevation":39.9},{"lat":51.445266,"lng":-0.044689,"elevation":39.9},{"lat":51.445236,"lng":-0.044669,"elevation":39.7},{"lat":51.445201,"lng":-0.044691,"elevation":39.7},{"lat":51.445167,"lng":-0.0447,"elevation":39.6},{"lat":51.445137,"lng":-0.044708,"elevation":39.6}],[{"lat":51.445152,"lng":-0.045,"elevation":40.2},{"lat":51.445299,"lng":-0.044791,"elevation":40.2},{"lat":51.445187,"lng":-0.044951,"elevation":40.2},{"lat":51.445155,"lng":-0.044843,"elevation":39.9},{"lat":51.445213,"lng":-0.044753,"elevation":39.9},{"lat":51.445194,"lng":-0.044786,"elevation":39.9},{"lat":51.44524,"lng":-0.044744,"elevation":39.9},{"lat":51.445275,"lng":-0.04476,"elevation":40},{"lat":51.445325,"lng":-0.044678,"elevation":40},{"lat":51.445352,"lng":-0.044712,"elevation":40.1},{"lat":51.445378,"lng":-0.044682,"elevation":40.1},{"lat":51.445381,"lng":-0.044624,"elevation":40},{"lat":51.445375,"lng":-0.044562,"elevation":39.9},{"lat":51.445377,"lng":-0.044501,"elevation":39.7},{"lat":51.445376,"lng":-0.044437,"elevation":39.6},{"lat":51.445381,"lng":-0.044377,"elevation":39.4},{"lat":51.445399,"lng":-0.044325,"elevation":39.3},{"lat":51.445391,"lng":-0.04428,"elevation":39.2},{"lat":51.445387,"lng":-0.044224,"elevation":39.1},{"lat":51.445393,"lng":-0.044166,"elevation":39},{"lat":51.445395,"lng":-0.044114,"elevation":38.8},{"lat":51.4454,"lng":-0.044066,"elevation":38.7},{"lat":51.445413,"lng":-0.044023,"elevation":38.6},{"lat":51.445417,"lng":-0.043977,"elevation":38.5},{"lat":51.445428,"lng":-0.043916,"elevation":38.4},{"lat":51.445427,"lng":-0.043864,"elevation":38.3},{"lat":51.445429,"lng":-0.043812,"elevation":38.2},{"lat":51.445429,"lng":-0.043757,"elevation":38},{"lat":51.445426,"lng":-0.043708,"elevation":37.9},{"lat":51.445426,"lng":-0.043656,"elevation":37.8},{"lat":51.445421,"lng":-0.043611,"elevation":37.7},{"lat":51.445415,"lng":-0.043569,"elevation":37.6},{"lat":51.445425,"lng":-0.043515,"elevation":37.5},{"lat":51.445426,"lng":-0.04346,"elevation":37.3},{"lat":51.445408,"lng":-0.043409,"elevation":37.2},{"lat":51.445398,"lng":-0.043366,"elevation":37.1},{"lat":51.445392,"lng":-0.043321,"elevation":37},{"lat":51.445382,"lng":-0.043263,"elevation":36.8},{"lat":51.445376,"lng":-0.043208,"elevation":36.7},{"lat":51.445376,"lng":-0.04316,"elevation":36.6},{"lat":51.445376,"lng":-0.043116,"elevation":36.5},{"lat":51.445384,"lng":-0.043053,"elevation":36.3},{"lat":51.445378,"lng":-0.043001,"elevation":36.2},{"lat":51.445376,"lng":-0.042948,"elevation":36.1},{"lat":51.445374,"lng":-0.0429,"elevation":36},{"lat":51.445362,"lng":-0.042859,"elevation":36.1},{"lat":51.445338,"lng":-0.042825,"elevation":36.1},{"lat":51.44531,"lng":-0.042803,"elevation":36.1},{"lat":51.445286,"lng":-0.042778,"elevation":36.1},{"lat":51.445296,"lng":-0.042708,"elevation":36.2},{"lat":51.445296,"lng":-0.042649,"elevation":36.3},{"lat":51.445302,"lng":-0.042602,"elevation":36.3},{"lat":51.44532,"lng":-0.042565,"elevation":36.4},{"lat":51.445351,"lng":-0.042547,"elevation":36.4},{"lat":51.445384,"lng":-0.04254,"elevation":36.4},{"lat":51.445415,"lng":-0.042528,"elevation":36.5},{"lat":51.445439,"lng":-0.042497,"elevation":36.6},{"lat":51.445459,"lng":-0.042452,"elevation":36.7},{"lat":51.44547,"lng":-0.042394,"elevation":36.8},{"lat":51.445477,"lng":-0.042352,"elevation":36.9},{"lat":51.445491,"lng":-0.042269,"elevation":37},{"lat":51.445501,"lng":-0.042227,"elevation":37.1},{"lat":51.445511,"lng":-0.042184,"elevation":37.2},{"lat":51.445519,"lng":-0.042141,"elevation":37.3},{"lat":51.445529,"lng":-0.042068,"elevation":37.4},{"lat":51.445538,"lng":-0.041993,"elevation":37.6},{"lat":51.445542,"lng":-0.041916,"elevation":37.7},{"lat":51.445552,"lng":-0.041833,"elevation":37.8},{"lat":51.445559,"lng":-0.041753,"elevation":38},{"lat":51.44557,"lng":-0.041676,"elevation":38.1},{"lat":51.445579,"lng":-0.041601,"elevation":38.3},{"lat":51.445582,"lng":-0.041526,"elevation":38.4},{"lat":51.445587,"lng":-0.041448,"elevation":38.5},{"lat":51.445595,"lng":-0.041367,"elevation":38.7},{"lat":51.44561,"lng":-0.041289,"elevation":38.9},{"lat":51.445621,"lng":-0.041215,"elevation":39.2},{"lat":51.445619,"lng":-0.041141,"elevation":39.7},{"lat":51.445626,"lng":-0.041067,"elevation":40.2},{"lat":51.445644,"lng":-0.040993,"elevation":40.7},{"lat":51.445661,"lng":-0.04092,"elevation":41.3},{"lat":51.445675,"lng":-0.040848,"elevation":41.8},{"lat":51.445677,"lng":-0.040782,"elevation":42.2},{"lat":51.445675,"lng":-0.040719,"elevation":42.6},{"lat":51.445673,"lng":-0.040656,"elevation":43},{"lat":51.445669,"lng":-0.040596,"elevation":43.4},{"lat":51.445667,"lng":-0.040534,"elevation":43.8},{"lat":51.445668,"lng":-0.040469,"elevation":44.2},{"lat":51.445673,"lng":-0.040408,"elevation":44.6},{"lat":51.445681,"lng":-0.040344,"elevation":45.1},{"lat":51.445694,"lng":-0.040278,"elevation":45.7},{"lat":51.445702,"lng":-0.040212,"elevation":46.3},{"lat":51.445708,"lng":-0.040145,"elevation":46.8},{"lat":51.44572,"lng":-0.040076,"elevation":47.4},{"lat":51.445722,"lng":-0.04001,"elevation":47.9},{"lat":51.445732,"lng":-0.039941,"elevation":48.5},{"lat":51.44574,"lng":-0.039872,"elevation":49.1},{"lat":51.445748,"lng":-0.039807,"elevation":49.7},{"lat":51.445753,"lng":-0.039748,"elevation":50.2},{"lat":51.445759,"lng":-0.039688,"elevation":50.7},{"lat":51.445763,"lng":-0.039626,"elevation":51.2},{"lat":51.445759,"lng":-0.039561,"elevation":51.5},{"lat":51.44576,"lng":-0.039496,"elevation":51.6},{"lat":51.445767,"lng":-0.039426,"elevation":51.7},{"lat":51.445773,"lng":-0.039354,"elevation":51.8},{"lat":51.445776,"lng":-0.039284,"elevation":51.9},{"lat":51.445785,"lng":-0.039212,"elevation":52},{"lat":51.445791,"lng":-0.039139,"elevation":52.2},{"lat":51.445798,"lng":-0.039067,"elevation":52.3},{"lat":51.445804,"lng":-0.038994,"elevation":52.4},{"lat":51.44581,"lng":-0.038917,"elevation":52.6},{"lat":51.445809,"lng":-0.038874,"elevation":52.6},{"lat":51.445814,"lng":-0.038802,"elevation":52.8},{"lat":51.445827,"lng":-0.038731,"elevation":53},{"lat":51.445838,"lng":-0.03866,"elevation":53.2},{"lat":51.445847,"lng":-0.038578,"elevation":53.4},{"lat":51.445858,"lng":-0.038499,"elevation":53.7},{"lat":51.445868,"lng":-0.038418,"elevation":53.9},{"lat":51.445872,"lng":-0.038375,"elevation":54.1},{"lat":51.445875,"lng":-0.038332,"elevation":54.2},{"lat":51.445877,"lng":-0.038287,"elevation":54.3},{"lat":51.44588,"lng":-0.038242,"elevation":54.4},{"lat":51.445882,"lng":-0.038192,"elevation":54.5},{"lat":51.445888,"lng":-0.038146,"elevation":54.7},{"lat":51.445894,"lng":-0.038101,"elevation":54.8},{"lat":51.445899,"lng":-0.03805,"elevation":55},{"lat":51.445902,"lng":-0.038003,"elevation":55.1},{"lat":51.44591,"lng":-0.037907,"elevation":55.3},{"lat":51.445926,"lng":-0.037846,"elevation":55.4},{"lat":51.445955,"lng":-0.037799,"elevation":55.6},{"lat":51.445976,"lng":-0.037741,"elevation":55.7},{"lat":51.44599,"lng":-0.037681,"elevation":55.7},{"lat":51.44601,"lng":-0.037643,"elevation":55.8},{"lat":51.44604,"lng":-0.037605,"elevation":56.1},{"lat":51.446078,"lng":-0.037579,"elevation":56.4},{"lat":51.446114,"lng":-0.037549,"elevation":56.7},{"lat":51.44615,"lng":-0.037526,"elevation":57},{"lat":51.446188,"lng":-0.037523,"elevation":57.4},{"lat":51.446227,"lng":-0.037524,"elevation":57.8},{"lat":51.446269,"lng":-0.037531,"elevation":58.2},{"lat":51.446308,"lng":-0.037543,"elevation":58.4},{"lat":51.446349,"lng":-0.037553,"elevation":58.6},{"lat":51.446398,"lng":-0.037573,"elevation":58.8},{"lat":51.446445,"lng":-0.03759,"elevation":59.1},{"lat":51.44649,"lng":-0.037611,"elevation":59.3},{"lat":51.446543,"lng":-0.037638,"elevation":59.6},{"lat":51.446572,"lng":-0.037649,"elevation":59.8},{"lat":51.446601,"lng":-0.037658,"elevation":59.9},{"lat":51.446629,"lng":-0.037653,"elevation":60},{"lat":51.446658,"lng":-0.037656,"elevation":60.2},{"lat":51.446687,"lng":-0.037664,"elevation":60.3},{"lat":51.446716,"lng":-0.037684,"elevation":60.5},{"lat":51.446746,"lng":-0.037704,"elevation":60.7},{"lat":51.446777,"lng":-0.037725,"elevation":60.9},{"lat":51.446809,"lng":-0.037742,"elevation":61.1},{"lat":51.446845,"lng":-0.037758,"elevation":61.3},{"lat":51.446879,"lng":-0.037768,"elevation":61.5},{"lat":51.446912,"lng":-0.03778,"elevation":61.7},{"lat":51.446971,"lng":-0.037788,"elevation":62},{"lat":51.44701,"lng":-0.037792,"elevation":62.2},{"lat":51.447048,"lng":-0.037788,"elevation":62.4},{"lat":51.447085,"lng":-0.037784,"elevation":62.5},{"lat":51.447127,"lng":-0.037782,"elevation":62},{"lat":51.447172,"lng":-0.037784,"elevation":61.5},{"lat":51.447215,"lng":-0.037794,"elevation":61},{"lat":51.447241,"lng":-0.03775,"elevation":60.6},{"lat":51.447234,"lng":-0.037707,"elevation":60.5},{"lat":51.44722,"lng":-0.037668,"elevation":60.6},{"lat":51.447188,"lng":-0.037598,"elevation":60.7},{"lat":51.447161,"lng":-0.037525,"elevation":60.7},{"lat":51.447148,"lng":-0.037486,"elevation":60.8},{"lat":51.447133,"lng":-0.037443,"elevation":60.8},{"lat":51.44712,"lng":-0.037404,"elevation":60.8},{"lat":51.447097,"lng":-0.037332,"elevation":60.8},{"lat":51.447083,"lng":-0.037265,"elevation":60.7},{"lat":51.447072,"lng":-0.037195,"elevation":60.4},{"lat":51.447062,"lng":-0.037124,"elevation":60.1},{"lat":51.447049,"lng":-0.03705,"elevation":59.7},{"lat":51.447036,"lng":-0.036971,"elevation":59.3},{"lat":51.447023,"lng":-0.036896,"elevation":58.9},{"lat":51.447012,"lng":-0.036825,"elevation":58.6},{"lat":51.447001,"lng":-0.036754,"elevation":58.2},{"lat":51.446991,"lng":-0.036672,"elevation":57.8},{"lat":51.446985,"lng":-0.036629,"elevation":57.6},{"lat":51.446976,"lng":-0.036548,"elevation":57.2},{"lat":51.446969,"lng":-0.036475,"elevation":56.9},{"lat":51.446967,"lng":-0.036407,"elevation":56.6},{"lat":51.446962,"lng":-0.03634,"elevation":56.3},{"lat":51.446954,"lng":-0.036268,"elevation":55.9},{"lat":51.446948,"lng":-0.036224,"elevation":55.8},{"lat":51.446939,"lng":-0.036153,"elevation":55.6},{"lat":51.446931,"lng":-0.03608,"elevation":55.4},{"lat":51.446929,"lng":-0.035998,"elevation":55.3},{"lat":51.446929,"lng":-0.035953,"elevation":55.2},{"lat":51.44693,"lng":-0.035874,"elevation":55},{"lat":51.446929,"lng":-0.035799,"elevation":54.8},{"lat":51.446939,"lng":-0.035737,"elevation":54.7},{"lat":51.446943,"lng":-0.035671,"elevation":54.6},{"lat":51.44694,"lng":-0.035604,"elevation":54.4},{"lat":51.446932,"lng":-0.035528,"elevation":54.2},{"lat":51.446927,"lng":-0.035483,"elevation":54.1},{"lat":51.446934,"lng":-0.035404,"elevation":54},{"lat":51.446969,"lng":-0.035357,"elevation":53.9},{"lat":51.447016,"lng":-0.035342,"elevation":53.8},{"lat":51.447067,"lng":-0.035359,"elevation":53.9},{"lat":51.447093,"lng":-0.035373,"elevation":53.8},{"lat":51.447119,"lng":-0.035387,"elevation":53.8},{"lat":51.447145,"lng":-0.0354,"elevation":53.7},{"lat":51.447193,"lng":-0.035423,"elevation":53.5},{"lat":51.44724,"lng":-0.035444,"elevation":53.3},{"lat":51.447267,"lng":-0.035455,"elevation":53.2},{"lat":51.447314,"lng":-0.035493,"elevation":53.1},{"lat":51.44736,"lng":-0.035528,"elevation":52.9},{"lat":51.447409,"lng":-0.035541,"elevation":52.7},{"lat":51.447457,"lng":-0.035562,"elevation":52.5},{"lat":51.447506,"lng":-0.035578,"elevation":52.3},{"lat":51.447551,"lng":-0.035605,"elevation":52.1},{"lat":51.447593,"lng":-0.035636,"elevation":51.9},{"lat":51.447636,"lng":-0.035673,"elevation":51.8},{"lat":51.447677,"lng":-0.035715,"elevation":51.6},{"lat":51.447719,"lng":-0.035765,"elevation":51.5},{"lat":51.447761,"lng":-0.03581,"elevation":51.3},{"lat":51.447805,"lng":-0.035855,"elevation":51.1},{"lat":51.447828,"lng":-0.035882,"elevation":51},{"lat":51.447857,"lng":-0.035915,"elevation":50.9},{"lat":51.447891,"lng":-0.035966,"elevation":50.8},{"lat":51.447923,"lng":-0.036014,"elevation":50.7},{"lat":51.447952,"lng":-0.036058,"elevation":50.5},{"lat":51.447978,"lng":-0.036095,"elevation":50.3},{"lat":51.448006,"lng":-0.036137,"elevation":50.1},{"lat":51.44803,"lng":-0.036173,"elevation":50},{"lat":51.448055,"lng":-0.036204,"elevation":49.8},{"lat":51.448079,"lng":-0.036235,"elevation":49.6},{"lat":51.448104,"lng":-0.036259,"elevation":49.4},{"lat":51.448127,"lng":-0.036286,"elevation":49.3},{"lat":51.448159,"lng":-0.036317,"elevation":49},{"lat":51.44819,"lng":-0.036352,"elevation":48.7},{"lat":51.448214,"lng":-0.036377,"elevation":48.5},{"lat":51.448242,"lng":-0.036395,"elevation":48.3},{"lat":51.448272,"lng":-0.036391,"elevation":48},{"lat":51.44831,"lng":-0.036383,"elevation":47.7},{"lat":51.44835,"lng":-0.036379,"elevation":47.4},{"lat":51.448386,"lng":-0.03641,"elevation":47},{"lat":51.448403,"lng":-0.036477,"elevation":46.9},{"lat":51.448417,"lng":-0.036599,"elevation":46.7},{"lat":51.448428,"lng":-0.036671,"elevation":46.6},{"lat":51.448445,"lng":-0.036734,"elevation":46.4},{"lat":51.44846,"lng":-0.036795,"elevation":46.2},{"lat":51.448452,"lng":-0.03686,"elevation":46.3},{"lat":51.448441,"lng":-0.036933,"elevation":46.4},{"lat":51.44842,"lng":-0.037002,"elevation":46.6},{"lat":51.448398,"lng":-0.037067,"elevation":46.8},{"lat":51.44838,"lng":-0.03713,"elevation":47},{"lat":51.448361,"lng":-0.037183,"elevation":47.2},{"lat":51.44835,"lng":-0.037242,"elevation":47.3},{"lat":51.448334,"lng":-0.037302,"elevation":47.5},{"lat":51.448322,"lng":-0.037354,"elevation":47.6},{"lat":51.448315,"lng":-0.037401,"elevation":47.7},{"lat":51.448302,"lng":-0.037458,"elevation":47.9},{"lat":51.448285,"lng":-0.037526,"elevation":48.1},{"lat":51.448272,"lng":-0.037592,"elevation":48.3},{"lat":51.448262,"lng":-0.037662,"elevation":48.4},{"lat":51.44824,"lng":-0.037724,"elevation":48.7},{"lat":51.448223,"lng":-0.03779,"elevation":48.9},{"lat":51.448209,"lng":-0.037852,"elevation":49.1},{"lat":51.448198,"lng":-0.037927,"elevation":49.2},{"lat":51.448188,"lng":-0.038003,"elevation":49.1},{"lat":51.448178,"lng":-0.038081,"elevation":48.9},{"lat":51.448151,"lng":-0.038123,"elevation":49.1},{"lat":51.44811,"lng":-0.038124,"elevation":49.6},{"lat":51.448069,"lng":-0.038132,"elevation":50.1},{"lat":51.448025,"lng":-0.038123,"elevation":50.6},{"lat":51.447982,"lng":-0.038129,"elevation":51.2},{"lat":51.447944,"lng":-0.038136,"elevation":51.6},{"lat":51.447908,"lng":-0.038145,"elevation":52},{"lat":51.447871,"lng":-0.038141,"elevation":52.5},{"lat":51.447832,"lng":-0.038134,"elevation":53},{"lat":51.447792,"lng":-0.038131,"elevation":53.5},{"lat":51.447753,"lng":-0.03812,"elevation":54},{"lat":51.447714,"lng":-0.038102,"elevation":54.5},{"lat":51.447673,"lng":-0.038084,"elevation":55.1},{"lat":51.447629,"lng":-0.038061,"elevation":55.8},{"lat":51.447578,"lng":-0.038036,"elevation":56.5},{"lat":51.44755,"lng":-0.038032,"elevation":56.8},{"lat":51.447523,"lng":-0.03803,"elevation":57.2},{"lat":51.447473,"lng":-0.03802,"elevation":57.8},{"lat":51.44743,"lng":-0.038005,"elevation":58.4},{"lat":51.4474,"lng":-0.037989,"elevation":58.9},{"lat":51.447377,"lng":-0.037946,"elevation":59.3},{"lat":51.447353,"lng":-0.037895,"elevation":59.7},{"lat":51.447327,"lng":-0.037856,"elevation":59.9},{"lat":51.447304,"lng":-0.037813,"elevation":60},{"lat":51.44728,"lng":-0.037765,"elevation":60.2},{"lat":51.447252,"lng":-0.037717,"elevation":60.4},{"lat":51.447227,"lng":-0.037658,"elevation":60.5},{"lat":51.447201,"lng":-0.037599,"elevation":60.6},{"lat":51.447185,"lng":-0.037547,"elevation":60.6},{"lat":51.447171,"lng":-0.037503,"elevation":60.6},{"lat":51.447152,"lng":-0.037423,"elevation":60.5},{"lat":51.447135,"lng":-0.037351,"elevation":60.4},{"lat":51.447118,"lng":-0.037278,"elevation":60.3},{"lat":51.447102,"lng":-0.037207,"elevation":60.3},{"lat":51.447087,"lng":-0.037133,"elevation":60.1},{"lat":51.44707,"lng":-0.037048,"elevation":59.8},{"lat":51.447062,"lng":-0.037003,"elevation":59.5},{"lat":51.447054,"lng":-0.036959,"elevation":59.3},{"lat":51.44704,"lng":-0.036878,"elevation":58.9},{"lat":51.447019,"lng":-0.036796,"elevation":58.4},{"lat":51.447008,"lng":-0.036755,"elevation":58.2},{"lat":51.446999,"lng":-0.036709,"elevation":58},{"lat":51.446992,"lng":-0.036664,"elevation":57.8},{"lat":51.446984,"lng":-0.036619,"elevation":57.5},{"lat":51.446972,"lng":-0.036534,"elevation":57.1},{"lat":51.446962,"lng":-0.036447,"elevation":56.7},{"lat":51.446958,"lng":-0.036403,"elevation":56.5},{"lat":51.446953,"lng":-0.036325,"elevation":56.2},{"lat":51.446944,"lng":-0.036252,"elevation":55.8},{"lat":51.446937,"lng":-0.036189,"elevation":55.7},{"lat":51.446933,"lng":-0.036124,"elevation":55.5},{"lat":51.446935,"lng":-0.036041,"elevation":55.4},{"lat":51.446939,"lng":-0.035962,"elevation":55.2},{"lat":51.446941,"lng":-0.035898,"elevation":55.1},{"lat":51.446945,"lng":-0.035821,"elevation":54.9},{"lat":51.446946,"lng":-0.03574,"elevation":54.7},{"lat":51.446945,"lng":-0.035665,"elevation":54.5},{"lat":51.446933,"lng":-0.035585,"elevation":54.4},{"lat":51.446915,"lng":-0.035506,"elevation":54.2},{"lat":51.446912,"lng":-0.035456,"elevation":54.1},{"lat":51.446941,"lng":-0.035397,"elevation":54},{"lat":51.44699,"lng":-0.035387,"elevation":53.9},{"lat":51.447019,"lng":-0.035415,"elevation":54},{"lat":51.44705,"lng":-0.035424,"elevation":54},{"lat":51.44708,"lng":-0.035433,"elevation":54},{"lat":51.44711,"lng":-0.035447,"elevation":53.9},{"lat":51.44714,"lng":-0.035463,"elevation":53.8},{"lat":51.44717,"lng":-0.035477,"elevation":53.7},{"lat":51.447199,"lng":-0.035488,"elevation":53.6},{"lat":51.447227,"lng":-0.035501,"elevation":53.5},{"lat":51.447253,"lng":-0.035521,"elevation":53.4},{"lat":51.447274,"lng":-0.035548,"elevation":53.4},{"lat":51.447322,"lng":-0.035588,"elevation":53.2},{"lat":51.447366,"lng":-0.035598,"elevation":53},{"lat":51.447411,"lng":-0.035605,"elevation":52.8},{"lat":51.447456,"lng":-0.035624,"elevation":52.6},{"lat":51.447499,"lng":-0.035659,"elevation":52.4},{"lat":51.447542,"lng":-0.035691,"elevation":52.3},{"lat":51.447587,"lng":-0.035732,"elevation":52.1},{"lat":51.447609,"lng":-0.035757,"elevation":52},{"lat":51.447634,"lng":-0.035785,"elevation":51.9},{"lat":51.447658,"lng":-0.035808,"elevation":51.9},{"lat":51.447682,"lng":-0.035832,"elevation":51.8},{"lat":51.447705,"lng":-0.035862,"elevation":51.7},{"lat":51.447729,"lng":-0.035894,"elevation":51.6},{"lat":51.447753,"lng":-0.035927,"elevation":51.5},{"lat":51.447777,"lng":-0.035957,"elevation":51.4},{"lat":51.447824,"lng":-0.035989,"elevation":51.2},{"lat":51.447849,"lng":-0.036007,"elevation":51.1},{"lat":51.447876,"lng":-0.035992,"elevation":50.9},{"lat":51.447923,"lng":-0.036015,"elevation":50.7},{"lat":51.447944,"lng":-0.036046,"elevation":50.5},{"lat":51.447964,"lng":-0.036077,"elevation":50.4},{"lat":51.447985,"lng":-0.036108,"elevation":50.3},{"lat":51.448009,"lng":-0.036133,"elevation":50.1},{"lat":51.448034,"lng":-0.036151,"elevation":49.9},{"lat":51.448075,"lng":-0.036192,"elevation":49.6},{"lat":51.4481,"lng":-0.036245,"elevation":49.5},{"lat":51.448114,"lng":-0.036312,"elevation":49.4},{"lat":51.448129,"lng":-0.036388,"elevation":49.3},{"lat":51.448168,"lng":-0.036402,"elevation":49},{"lat":51.448221,"lng":-0.036407,"elevation":48.5},{"lat":51.448249,"lng":-0.036405,"elevation":48.2},{"lat":51.448278,"lng":-0.036395,"elevation":48},{"lat":51.448306,"lng":-0.036384,"elevation":47.7},{"lat":51.448356,"lng":-0.036388,"elevation":47.3},{"lat":51.448384,"lng":-0.036434,"elevation":47},{"lat":51.448393,"lng":-0.036496,"elevation":47},{"lat":51.448403,"lng":-0.036561,"elevation":46.9},{"lat":51.448413,"lng":-0.036628,"elevation":46.7},{"lat":51.448424,"lng":-0.036694,"elevation":46.6},{"lat":51.448443,"lng":-0.036749,"elevation":46.4},{"lat":51.448448,"lng":-0.036824,"elevation":46.3},{"lat":51.448437,"lng":-0.036904,"elevation":46.4},{"lat":51.448417,"lng":-0.036977,"elevation":46.6},{"lat":51.448397,"lng":-0.037052,"elevation":46.8},{"lat":51.448376,"lng":-0.037124,"elevation":47},{"lat":51.44836,"lng":-0.037191,"elevation":47.2},{"lat":51.448344,"lng":-0.03726,"elevation":47.4},{"lat":51.448333,"lng":-0.037326,"elevation":47.5},{"lat":51.448329,"lng":-0.037372,"elevation":47.6},{"lat":51.448319,"lng":-0.037447,"elevation":47.7},{"lat":51.448294,"lng":-0.037517,"elevation":48},{"lat":51.448272,"lng":-0.037586,"elevation":48.3},{"lat":51.448257,"lng":-0.037646,"elevation":48.4},{"lat":51.448246,"lng":-0.037724,"elevation":48.6},{"lat":51.448231,"lng":-0.037795,"elevation":48.8},{"lat":51.448222,"lng":-0.037869,"elevation":49},{"lat":51.448211,"lng":-0.037947,"elevation":49},{"lat":51.448197,"lng":-0.038024,"elevation":48.9},{"lat":51.448182,"lng":-0.038101,"elevation":48.8},{"lat":51.448169,"lng":-0.038176,"elevation":48.6},{"lat":51.448155,"lng":-0.038242,"elevation":48.5},{"lat":51.448135,"lng":-0.038312,"elevation":48.5},{"lat":51.448113,"lng":-0.038382,"elevation":48.4},{"lat":51.448089,"lng":-0.038453,"elevation":48.4},{"lat":51.448056,"lng":-0.038518,"elevation":48.5},{"lat":51.448035,"lng":-0.038588,"elevation":48.4},{"lat":51.448021,"lng":-0.038655,"elevation":48.3},{"lat":51.448008,"lng":-0.038721,"elevation":48.1},{"lat":51.447996,"lng":-0.03879,"elevation":48},{"lat":51.447992,"lng":-0.038869,"elevation":47.7},{"lat":51.447975,"lng":-0.038945,"elevation":47.5},{"lat":51.447966,"lng":-0.039008,"elevation":47.3},{"lat":51.447954,"lng":-0.039083,"elevation":47.1},{"lat":51.447944,"lng":-0.039156,"elevation":46.8},{"lat":51.447939,"lng":-0.039213,"elevation":46.6},{"lat":51.447932,"lng":-0.039282,"elevation":46.3},{"lat":51.447917,"lng":-0.039361,"elevation":46.1},{"lat":51.447905,"lng":-0.039401,"elevation":46},{"lat":51.447892,"lng":-0.03944,"elevation":46},{"lat":51.44788,"lng":-0.039479,"elevation":45.9},{"lat":51.447869,"lng":-0.039523,"elevation":45.9},{"lat":51.447859,"lng":-0.039564,"elevation":45.8},{"lat":51.447838,"lng":-0.039661,"elevation":45.6},{"lat":51.447817,"lng":-0.03975,"elevation":45.5},{"lat":51.447799,"lng":-0.039829,"elevation":45.4},{"lat":51.447787,"lng":-0.039905,"elevation":45.2},{"lat":51.447777,"lng":-0.03997,"elevation":45},{"lat":51.447765,"lng":-0.040037,"elevation":44.8},{"lat":51.447746,"lng":-0.040105,"elevation":44.7},{"lat":51.447723,"lng":-0.04018,"elevation":44.5},{"lat":51.447697,"lng":-0.040242,"elevation":44.4},{"lat":51.447681,"lng":-0.040312,"elevation":44.2},{"lat":51.447664,"lng":-0.040392,"elevation":43.9},{"lat":51.447639,"lng":-0.04047,"elevation":43.8},{"lat":51.447606,"lng":-0.040541,"elevation":43.7},{"lat":51.447594,"lng":-0.040602,"elevation":43.5},{"lat":51.447587,"lng":-0.040669,"elevation":43.3},{"lat":51.44758,"lng":-0.040743,"elevation":43},{"lat":51.447571,"lng":-0.040821,"elevation":42.7},{"lat":51.447552,"lng":-0.040897,"elevation":42.5},{"lat":51.447541,"lng":-0.040937,"elevation":42.3},{"lat":51.447532,"lng":-0.040979,"elevation":42.2},{"lat":51.447523,"lng":-0.041021,"elevation":42},{"lat":51.447514,"lng":-0.041063,"elevation":41.8},{"lat":51.44751,"lng":-0.041107,"elevation":41.7},{"lat":51.447508,"lng":-0.041151,"elevation":41.5},{"lat":51.447507,"lng":-0.041196,"elevation":41.2},{"lat":51.4475,"lng":-0.041245,"elevation":41},{"lat":51.447471,"lng":-0.041308,"elevation":41},{"lat":51.447431,"lng":-0.041367,"elevation":41.1},{"lat":51.447415,"lng":-0.041404,"elevation":41.1},{"lat":51.447398,"lng":-0.041438,"elevation":41.1},{"lat":51.447379,"lng":-0.04147,"elevation":41.1},{"lat":51.447339,"lng":-0.04153,"elevation":41.2},{"lat":51.447318,"lng":-0.041562,"elevation":41.2},{"lat":51.447297,"lng":-0.041592,"elevation":41.2},{"lat":51.447278,"lng":-0.041623,"elevation":41.2},{"lat":51.447241,"lng":-0.041682,"elevation":41.2},{"lat":51.44721,"lng":-0.041734,"elevation":41.2},{"lat":51.447179,"lng":-0.041789,"elevation":41.2},{"lat":51.447142,"lng":-0.041843,"elevation":41.2},{"lat":51.447103,"lng":-0.041906,"elevation":41.2},{"lat":51.44708,"lng":-0.041934,"elevation":41.2},{"lat":51.447057,"lng":-0.04196,"elevation":41.1},{"lat":51.447031,"lng":-0.041985,"elevation":41.1},{"lat":51.447006,"lng":-0.042012,"elevation":41},{"lat":51.446963,"lng":-0.04206,"elevation":40.9},{"lat":51.446939,"lng":-0.042082,"elevation":40.8},{"lat":51.446913,"lng":-0.0421,"elevation":40.8},{"lat":51.446886,"lng":-0.042117,"elevation":40.7},{"lat":51.446859,"lng":-0.042132,"elevation":40.7},{"lat":51.446833,"lng":-0.042153,"elevation":40.6},{"lat":51.44681,"lng":-0.042178,"elevation":40.5},{"lat":51.446783,"lng":-0.042201,"elevation":40.4},{"lat":51.446744,"lng":-0.042252,"elevation":40.3},{"lat":51.446708,"lng":-0.042296,"elevation":40.2},{"lat":51.446663,"lng":-0.04233,"elevation":40.1},{"lat":51.446615,"lng":-0.042366,"elevation":39.9},{"lat":51.44657,"lng":-0.042415,"elevation":39.7},{"lat":51.446528,"lng":-0.042463,"elevation":39.6},{"lat":51.446482,"lng":-0.042495,"elevation":39.4},{"lat":51.44643,"lng":-0.042513,"elevation":39.3},{"lat":51.44638,"lng":-0.042524,"elevation":39.2},{"lat":51.446327,"lng":-0.042534,"elevation":39.1},{"lat":51.446298,"lng":-0.042536,"elevation":39},{"lat":51.446247,"lng":-0.042539,"elevation":38.9},{"lat":51.446197,"lng":-0.042539,"elevation":38.8},{"lat":51.446154,"lng":-0.042522,"elevation":38.7},{"lat":51.44611,"lng":-0.042515,"elevation":38.5},{"lat":51.446063,"lng":-0.042519,"elevation":38.4},{"lat":51.446009,"lng":-0.042522,"elevation":38.2},{"lat":51.445955,"lng":-0.042527,"elevation":38.1},{"lat":51.445926,"lng":-0.042525,"elevation":38},{"lat":51.445894,"lng":-0.04252,"elevation":37.9},{"lat":51.445864,"lng":-0.042518,"elevation":37.8},{"lat":51.445831,"lng":-0.04252,"elevation":37.7},{"lat":51.445803,"lng":-0.042522,"elevation":37.6},{"lat":51.445775,"lng":-0.042527,"elevation":37.5},{"lat":51.445747,"lng":-0.042535,"elevation":37.4},{"lat":51.445707,"lng":-0.042557,"elevation":37.3},{"lat":51.445666,"lng":-0.042559,"elevation":37.2},{"lat":51.445623,"lng":-0.042563,"elevation":37},{"lat":51.445582,"lng":-0.042566,"elevation":36.9},{"lat":51.445533,"lng":-0.042565,"elevation":36.8},{"lat":51.445498,"lng":-0.042559,"elevation":36.7},{"lat":51.44547,"lng":-0.042552,"elevation":36.6},{"lat":51.445423,"lng":-0.04255,"elevation":36.5},{"lat":51.445392,"lng":-0.042559,"elevation":36.4},{"lat":51.445362,"lng":-0.042563,"elevation":36.4},{"lat":51.445326,"lng":-0.042559,"elevation":36.4},{"lat":51.445297,"lng":-0.042556,"elevation":36.4},{"lat":51.445281,"lng":-0.042519,"elevation":36.4},{"lat":51.445287,"lng":-0.042581,"elevation":36.3},{"lat":51.445285,"lng":-0.042626,"elevation":36.3},{"lat":51.44529,"lng":-0.042672,"elevation":36.2},{"lat":51.445304,"lng":-0.042717,"elevation":36.2},{"lat":51.445334,"lng":-0.042751,"elevation":36.2},{"lat":51.445358,"lng":-0.042792,"elevation":36.1},{"lat":51.44536,"lng":-0.042837,"elevation":36.1},{"lat":51.445362,"lng":-0.042889,"elevation":36},{"lat":51.445367,"lng":-0.042951,"elevation":36.1},{"lat":51.445368,"lng":-0.043008,"elevation":36.2},{"lat":51.445369,"lng":-0.043061,"elevation":36.3},{"lat":51.445372,"lng":-0.043116,"elevation":36.5},{"lat":51.445376,"lng":-0.043171,"elevation":36.6},{"lat":51.445385,"lng":-0.043223,"elevation":36.7},{"lat":51.44539,"lng":-0.04327,"elevation":36.8},{"lat":51.445394,"lng":-0.043319,"elevation":37},{"lat":51.44539,"lng":-0.043369,"elevation":37.1},{"lat":51.445389,"lng":-0.043424,"elevation":37.2},{"lat":51.445385,"lng":-0.043488,"elevation":37.3},{"lat":51.445376,"lng":-0.043553,"elevation":37.5},{"lat":51.445371,"lng":-0.043612,"elevation":37.6},{"lat":51.445366,"lng":-0.043677,"elevation":37.8},{"lat":51.445366,"lng":-0.043721,"elevation":37.9},{"lat":51.445369,"lng":-0.043784,"elevation":38},{"lat":51.445379,"lng":-0.043829,"elevation":38.1},{"lat":51.445397,"lng":-0.04387,"elevation":38.3},{"lat":51.445394,"lng":-0.043918,"elevation":38.4},{"lat":51.445387,"lng":-0.043966,"elevation":38.5},{"lat":51.445377,"lng":-0.044011,"elevation":38.6},{"lat":51.445369,"lng":-0.044056,"elevation":38.7},{"lat":51.445362,"lng":-0.044105,"elevation":38.8},{"lat":51.445358,"lng":-0.044169,"elevation":38.9},{"lat":51.445354,"lng":-0.04422,"elevation":39},{"lat":51.445347,"lng":-0.044264,"elevation":39.1},{"lat":51.445343,"lng":-0.044309,"elevation":39.2},{"lat":51.445348,"lng":-0.044357,"elevation":39.3},{"lat":51.445348,"lng":-0.04441,"elevation":39.4},{"lat":51.445352,"lng":-0.044458,"elevation":39.6},{"lat":51.44535,"lng":-0.044511,"elevation":39.7},{"lat":51.445351,"lng":-0.044566,"elevation":39.8},{"lat":51.445354,"lng":-0.044619,"elevation":39.9},{"lat":51.445356,"lng":-0.044671,"elevation":40.1},{"lat":51.445349,"lng":-0.044728,"elevation":40.2},{"lat":51.445322,"lng":-0.044769,"elevation":40.2},{"lat":51.445289,"lng":-0.044766,"elevation":40.1},{"lat":51.445262,"lng":-0.044764,"elevation":40},{"lat":51.445233,"lng":-0.044764,"elevation":39.9},{"lat":51.445203,"lng":-0.044763,"elevation":39.9},{"lat":51.445174,"lng":-0.044748,"elevation":39.8},{"lat":51.445141,"lng":-0.044754,"elevation":39.7},{"lat":51.445103,"lng":-0.044784,"elevation":39.6},{"lat":51.445085,"lng":-0.044794,"elevation":39.6}]];

(function() {
	var SceneApp = require("./SceneApp");

	App = function() {
		if(document.body) this._init();
		else {
			window.addEventListener("load", this._init.bind(this));
		}
	}

	var p = App.prototype;

	p._init = function() {
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.canvas.className = "Main-Canvas";
		document.body.appendChild(this.canvas);
		bongiovi.GL.init(this.canvas);

		this._scene = new SceneApp();
		bongiovi.Scheduler.addEF(this, this._loop);

		// this.gui = new dat.GUI({width:300});

		this.findRegion();
	};

	p._loop = function() {
		this._scene.loop();
	};



	p.findRegion = function() {
		var minLat, maxLat, minLng, maxLng;
		for(var i=0; i<tracks.length; i++) {
			var track = tracks[i];
			for(var j=0; j<track.length; j++) {
				var point = track[j];

				if(minLat === undefined) {
					minLat = point.lat;
					maxLat = point.lat;
					minLng = point.lng;
					maxLng = point.lng;
				} else {
					minLat = Math.min(minLat, point.lat);
					maxLat = Math.max(maxLat, point.lat);
					minLng = Math.min(minLng, point.lng);
					maxLng = Math.max(maxLng, point.lng);
				}

			}
		}


		console.log("Lat : ", minLat, maxLat, ", Lng:", minLng, maxLng);
		console.log("Lat : ", (minLat + maxLat)/2, ", Lng:", (minLng + maxLng)/2);
	};

})();


new App();
},{"./SceneApp":5,"./libs/bongiovi.js":6,"dat-gui":2}],2:[function(require,module,exports){
module.exports = require('./vendor/dat.gui')
module.exports.color = require('./vendor/dat.color')
},{"./vendor/dat.color":3,"./vendor/dat.gui":4}],3:[function(require,module,exports){
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.color = dat.color || {};

/** @namespace */
dat.utils = dat.utils || {};

dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.Color = dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common),
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common);
},{}],4:[function(require,module,exports){
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/** @namespace */
var dat = module.exports = dat || {};

/** @namespace */
dat.gui = dat.gui || {};

/** @namespace */
dat.utils = dat.utils || {};

/** @namespace */
dat.controllers = dat.controllers || {};

/** @namespace */
dat.dom = dat.dom || {};

/** @namespace */
dat.color = dat.color || {};

dat.utils.css = (function () {
  return {
    load: function (url, doc) {
      doc = doc || document;
      var link = doc.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      doc.getElementsByTagName('head')[0].appendChild(link);
    },
    inject: function(css, doc) {
      doc = doc || document;
      var injected = document.createElement('style');
      injected.type = 'text/css';
      injected.innerHTML = css;
      doc.getElementsByTagName('head')[0].appendChild(injected);
    }
  }
})();


dat.utils.common = (function () {
  
  var ARR_EACH = Array.prototype.forEach;
  var ARR_SLICE = Array.prototype.slice;

  /**
   * Band-aid methods for things that should be a lot easier in JavaScript.
   * Implementation and structure inspired by underscore.js
   * http://documentcloud.github.com/underscore/
   */

  return { 
    
    BREAK: {},
  
    extend: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (!this.isUndefined(obj[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
      
    },
    
    defaults: function(target) {
      
      this.each(ARR_SLICE.call(arguments, 1), function(obj) {
        
        for (var key in obj)
          if (this.isUndefined(target[key])) 
            target[key] = obj[key];
        
      }, this);
      
      return target;
    
    },
    
    compose: function() {
      var toCall = ARR_SLICE.call(arguments);
            return function() {
              var args = ARR_SLICE.call(arguments);
              for (var i = toCall.length -1; i >= 0; i--) {
                args = [toCall[i].apply(this, args)];
              }
              return args[0];
            }
    },
    
    each: function(obj, itr, scope) {

      
      if (ARR_EACH && obj.forEach === ARR_EACH) { 
        
        obj.forEach(itr, scope);
        
      } else if (obj.length === obj.length + 0) { // Is number but not NaN
        
        for (var key = 0, l = obj.length; key < l; key++)
          if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) 
            return;
            
      } else {

        for (var key in obj) 
          if (itr.call(scope, obj[key], key) === this.BREAK)
            return;
            
      }
            
    },
    
    defer: function(fnc) {
      setTimeout(fnc, 0);
    },
    
    toArray: function(obj) {
      if (obj.toArray) return obj.toArray();
      return ARR_SLICE.call(obj);
    },

    isUndefined: function(obj) {
      return obj === undefined;
    },
    
    isNull: function(obj) {
      return obj === null;
    },
    
    isNaN: function(obj) {
      return obj !== obj;
    },
    
    isArray: Array.isArray || function(obj) {
      return obj.constructor === Array;
    },
    
    isObject: function(obj) {
      return obj === Object(obj);
    },
    
    isNumber: function(obj) {
      return obj === obj+0;
    },
    
    isString: function(obj) {
      return obj === obj+'';
    },
    
    isBoolean: function(obj) {
      return obj === false || obj === true;
    },
    
    isFunction: function(obj) {
      return Object.prototype.toString.call(obj) === '[object Function]';
    }
  
  };
    
})();


dat.controllers.Controller = (function (common) {

  /**
   * @class An "abstract" class that represents a given property of an object.
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var Controller = function(object, property) {

    this.initialValue = object[property];

    /**
     * Those who extend this class will put their DOM elements in here.
     * @type {DOMElement}
     */
    this.domElement = document.createElement('div');

    /**
     * The object to manipulate
     * @type {Object}
     */
    this.object = object;

    /**
     * The name of the property to manipulate
     * @type {String}
     */
    this.property = property;

    /**
     * The function to be called on change.
     * @type {Function}
     * @ignore
     */
    this.__onChange = undefined;

    /**
     * The function to be called on finishing change.
     * @type {Function}
     * @ignore
     */
    this.__onFinishChange = undefined;

  };

  common.extend(

      Controller.prototype,

      /** @lends dat.controllers.Controller.prototype */
      {

        /**
         * Specify that a function fire every time someone changes the value with
         * this Controller.
         *
         * @param {Function} fnc This function will be called whenever the value
         * is modified via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onChange: function(fnc) {
          this.__onChange = fnc;
          return this;
        },

        /**
         * Specify that a function fire every time someone "finishes" changing
         * the value wih this Controller. Useful for values that change
         * incrementally like numbers or strings.
         *
         * @param {Function} fnc This function will be called whenever
         * someone "finishes" changing the value via this Controller.
         * @returns {dat.controllers.Controller} this
         */
        onFinishChange: function(fnc) {
          this.__onFinishChange = fnc;
          return this;
        },

        /**
         * Change the value of <code>object[property]</code>
         *
         * @param {Object} newValue The new value of <code>object[property]</code>
         */
        setValue: function(newValue) {
          this.object[this.property] = newValue;
          if (this.__onChange) {
            this.__onChange.call(this, newValue);
          }
          this.updateDisplay();
          return this;
        },

        /**
         * Gets the value of <code>object[property]</code>
         *
         * @returns {Object} The current value of <code>object[property]</code>
         */
        getValue: function() {
          return this.object[this.property];
        },

        /**
         * Refreshes the visual display of a Controller in order to keep sync
         * with the object's current value.
         * @returns {dat.controllers.Controller} this
         */
        updateDisplay: function() {
          return this;
        },

        /**
         * @returns {Boolean} true if the value has deviated from initialValue
         */
        isModified: function() {
          return this.initialValue !== this.getValue()
        }

      }

  );

  return Controller;


})(dat.utils.common);


dat.dom.dom = (function (common) {

  var EVENT_MAP = {
    'HTMLEvents': ['change'],
    'MouseEvents': ['click','mousemove','mousedown','mouseup', 'mouseover'],
    'KeyboardEvents': ['keydown']
  };

  var EVENT_MAP_INV = {};
  common.each(EVENT_MAP, function(v, k) {
    common.each(v, function(e) {
      EVENT_MAP_INV[e] = k;
    });
  });

  var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;

  function cssValueToPixels(val) {

    if (val === '0' || common.isUndefined(val)) return 0;

    var match = val.match(CSS_VALUE_PIXELS);

    if (!common.isNull(match)) {
      return parseFloat(match[1]);
    }

    // TODO ...ems? %?

    return 0;

  }

  /**
   * @namespace
   * @member dat.dom
   */
  var dom = {

    /**
     * 
     * @param elem
     * @param selectable
     */
    makeSelectable: function(elem, selectable) {

      if (elem === undefined || elem.style === undefined) return;

      elem.onselectstart = selectable ? function() {
        return false;
      } : function() {
      };

      elem.style.MozUserSelect = selectable ? 'auto' : 'none';
      elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
      elem.unselectable = selectable ? 'on' : 'off';

    },

    /**
     *
     * @param elem
     * @param horizontal
     * @param vertical
     */
    makeFullscreen: function(elem, horizontal, vertical) {

      if (common.isUndefined(horizontal)) horizontal = true;
      if (common.isUndefined(vertical)) vertical = true;

      elem.style.position = 'absolute';

      if (horizontal) {
        elem.style.left = 0;
        elem.style.right = 0;
      }
      if (vertical) {
        elem.style.top = 0;
        elem.style.bottom = 0;
      }

    },

    /**
     *
     * @param elem
     * @param eventType
     * @param params
     */
    fakeEvent: function(elem, eventType, params, aux) {
      params = params || {};
      var className = EVENT_MAP_INV[eventType];
      if (!className) {
        throw new Error('Event type ' + eventType + ' not supported.');
      }
      var evt = document.createEvent(className);
      switch (className) {
        case 'MouseEvents':
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false,
              params.cancelable || true, window, params.clickCount || 1,
              0, //screen X
              0, //screen Y
              clientX, //client X
              clientY, //client Y
              false, false, false, false, 0, null);
          break;
        case 'KeyboardEvents':
          var init = evt.initKeyboardEvent || evt.initKeyEvent; // webkit || moz
          common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false,
              params.cancelable, window,
              params.ctrlKey, params.altKey,
              params.shiftKey, params.metaKey,
              params.keyCode, params.charCode);
          break;
        default:
          evt.initEvent(eventType, params.bubbles || false,
              params.cancelable || true);
          break;
      }
      common.defaults(evt, aux);
      elem.dispatchEvent(evt);
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    bind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.addEventListener)
        elem.addEventListener(event, func, bool);
      else if (elem.attachEvent)
        elem.attachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param event
     * @param func
     * @param bool
     */
    unbind: function(elem, event, func, bool) {
      bool = bool || false;
      if (elem.removeEventListener)
        elem.removeEventListener(event, func, bool);
      else if (elem.detachEvent)
        elem.detachEvent('on' + event, func);
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    addClass: function(elem, className) {
      if (elem.className === undefined) {
        elem.className = className;
      } else if (elem.className !== className) {
        var classes = elem.className.split(/ +/);
        if (classes.indexOf(className) == -1) {
          classes.push(className);
          elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
        }
      }
      return dom;
    },

    /**
     *
     * @param elem
     * @param className
     */
    removeClass: function(elem, className) {
      if (className) {
        if (elem.className === undefined) {
          // elem.className = className;
        } else if (elem.className === className) {
          elem.removeAttribute('class');
        } else {
          var classes = elem.className.split(/ +/);
          var index = classes.indexOf(className);
          if (index != -1) {
            classes.splice(index, 1);
            elem.className = classes.join(' ');
          }
        }
      } else {
        elem.className = undefined;
      }
      return dom;
    },

    hasClass: function(elem, className) {
      return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
    },

    /**
     *
     * @param elem
     */
    getWidth: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-left-width']) +
          cssValueToPixels(style['border-right-width']) +
          cssValueToPixels(style['padding-left']) +
          cssValueToPixels(style['padding-right']) +
          cssValueToPixels(style['width']);
    },

    /**
     *
     * @param elem
     */
    getHeight: function(elem) {

      var style = getComputedStyle(elem);

      return cssValueToPixels(style['border-top-width']) +
          cssValueToPixels(style['border-bottom-width']) +
          cssValueToPixels(style['padding-top']) +
          cssValueToPixels(style['padding-bottom']) +
          cssValueToPixels(style['height']);
    },

    /**
     *
     * @param elem
     */
    getOffset: function(elem) {
      var offset = {left: 0, top:0};
      if (elem.offsetParent) {
        do {
          offset.left += elem.offsetLeft;
          offset.top += elem.offsetTop;
        } while (elem = elem.offsetParent);
      }
      return offset;
    },

    // http://stackoverflow.com/posts/2684561/revisions
    /**
     * 
     * @param elem
     */
    isActive: function(elem) {
      return elem === document.activeElement && ( elem.type || elem.href );
    }

  };

  return dom;

})(dat.utils.common);


dat.controllers.OptionController = (function (Controller, dom, common) {

  /**
   * @class Provides a select input to alter the property of an object, using a
   * list of accepted values.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object|string[]} options A map of labels to acceptable values, or
   * a list of acceptable string values.
   *
   * @member dat.controllers
   */
  var OptionController = function(object, property, options) {

    OptionController.superclass.call(this, object, property);

    var _this = this;

    /**
     * The drop down menu
     * @ignore
     */
    this.__select = document.createElement('select');

    if (common.isArray(options)) {
      var map = {};
      common.each(options, function(element) {
        map[element] = element;
      });
      options = map;
    }

    common.each(options, function(value, key) {

      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);

    });

    // Acknowledge original value
    this.updateDisplay();

    dom.bind(this.__select, 'change', function() {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });

    this.domElement.appendChild(this.__select);

  };

  OptionController.superclass = Controller;

  common.extend(

      OptionController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = OptionController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          return toReturn;
        },

        updateDisplay: function() {
          this.__select.value = this.getValue();
          return OptionController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return OptionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberController = (function (Controller, common) {

  /**
   * @class Represents a given property of an object that is a number.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberController = function(object, property, params) {

    NumberController.superclass.call(this, object, property);

    params = params || {};

    this.__min = params.min;
    this.__max = params.max;
    this.__step = params.step;

    if (common.isUndefined(this.__step)) {

      if (this.initialValue == 0) {
        this.__impliedStep = 1; // What are we, psychics?
      } else {
        // Hey Doug, check this out.
        this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue)/Math.LN10))/10;
      }

    } else {

      this.__impliedStep = this.__step;

    }

    this.__precision = numDecimals(this.__impliedStep);


  };

  NumberController.superclass = Controller;

  common.extend(

      NumberController.prototype,
      Controller.prototype,

      /** @lends dat.controllers.NumberController.prototype */
      {

        setValue: function(v) {

          if (this.__min !== undefined && v < this.__min) {
            v = this.__min;
          } else if (this.__max !== undefined && v > this.__max) {
            v = this.__max;
          }

          if (this.__step !== undefined && v % this.__step != 0) {
            v = Math.round(v / this.__step) * this.__step;
          }

          return NumberController.superclass.prototype.setValue.call(this, v);

        },

        /**
         * Specify a minimum value for <code>object[property]</code>.
         *
         * @param {Number} minValue The minimum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        min: function(v) {
          this.__min = v;
          return this;
        },

        /**
         * Specify a maximum value for <code>object[property]</code>.
         *
         * @param {Number} maxValue The maximum value for
         * <code>object[property]</code>
         * @returns {dat.controllers.NumberController} this
         */
        max: function(v) {
          this.__max = v;
          return this;
        },

        /**
         * Specify a step value that dat.controllers.NumberController
         * increments by.
         *
         * @param {Number} stepValue The step value for
         * dat.controllers.NumberController
         * @default if minimum and maximum specified increment is 1% of the
         * difference otherwise stepValue is 1
         * @returns {dat.controllers.NumberController} this
         */
        step: function(v) {
          this.__step = v;
          return this;
        }

      }

  );

  function numDecimals(x) {
    x = x.toString();
    if (x.indexOf('.') > -1) {
      return x.length - x.indexOf('.') - 1;
    } else {
      return 0;
    }
  }

  return NumberController;

})(dat.controllers.Controller,
dat.utils.common);


dat.controllers.NumberControllerBox = (function (NumberController, dom, common) {

  /**
   * @class Represents a given property of an object that is a number and
   * provides an input element with which to manipulate it.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Object} [params] Optional parameters
   * @param {Number} [params.min] Minimum allowed value
   * @param {Number} [params.max] Maximum allowed value
   * @param {Number} [params.step] Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerBox = function(object, property, params) {

    this.__truncationSuspended = false;

    NumberControllerBox.superclass.call(this, object, property, params);

    var _this = this;

    /**
     * {Number} Previous mouse y position
     * @ignore
     */
    var prev_y;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    // Makes it so manually specified values are not truncated.

    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'mousedown', onMouseDown);
    dom.bind(this.__input, 'keydown', function(e) {

      // When pressing entire, you can be as precise as you want.
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
      }

    });

    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!common.isNaN(attempted)) _this.setValue(attempted);
    }

    function onBlur() {
      onChange();
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prev_y = e.clientY;
    }

    function onMouseDrag(e) {

      var diff = prev_y - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);

      prev_y = e.clientY;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  NumberControllerBox.superclass = NumberController;

  common.extend(

      NumberControllerBox.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {

          this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
          return NumberControllerBox.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  function roundToDecimal(value, decimals) {
    var tenTo = Math.pow(10, decimals);
    return Math.round(value * tenTo) / tenTo;
  }

  return NumberControllerBox;

})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.common);


dat.controllers.NumberControllerSlider = (function (NumberController, dom, css, common, styleSheet) {

  /**
   * @class Represents a given property of an object that is a number, contains
   * a minimum and maximum, and provides a slider element with which to
   * manipulate it. It should be noted that the slider element is made up of
   * <code>&lt;div&gt;</code> tags, <strong>not</strong> the html5
   * <code>&lt;slider&gt;</code> element.
   *
   * @extends dat.controllers.Controller
   * @extends dat.controllers.NumberController
   * 
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   * @param {Number} minValue Minimum allowed value
   * @param {Number} maxValue Maximum allowed value
   * @param {Number} stepValue Increment by which to change value
   *
   * @member dat.controllers
   */
  var NumberControllerSlider = function(object, property, min, max, step) {

    NumberControllerSlider.superclass.call(this, object, property, { min: min, max: max, step: step });

    var _this = this;

    this.__background = document.createElement('div');
    this.__foreground = document.createElement('div');
    


    dom.bind(this.__background, 'mousedown', onMouseDown);
    
    dom.addClass(this.__background, 'slider');
    dom.addClass(this.__foreground, 'slider-fg');

    function onMouseDown(e) {

      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);

      onMouseDrag(e);
    }

    function onMouseDrag(e) {

      e.preventDefault();

      var offset = dom.getOffset(_this.__background);
      var width = dom.getWidth(_this.__background);
      
      _this.setValue(
        map(e.clientX, offset.left, offset.left + width, _this.__min, _this.__max)
      );

      return false;

    }

    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.__background.appendChild(this.__foreground);
    this.domElement.appendChild(this.__background);

  };

  NumberControllerSlider.superclass = NumberController;

  /**
   * Injects default stylesheet for slider elements.
   */
  NumberControllerSlider.useDefaultStyles = function() {
    css.inject(styleSheet);
  };

  common.extend(

      NumberControllerSlider.prototype,
      NumberController.prototype,

      {

        updateDisplay: function() {
          var pct = (this.getValue() - this.__min)/(this.__max - this.__min);
          this.__foreground.style.width = pct*100+'%';
          return NumberControllerSlider.superclass.prototype.updateDisplay.call(this);
        }

      }



  );

  function map(v, i1, i2, o1, o2) {
    return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
  }

  return NumberControllerSlider;
  
})(dat.controllers.NumberController,
dat.dom.dom,
dat.utils.css,
dat.utils.common,
".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}");


dat.controllers.FunctionController = (function (Controller, dom, common) {

  /**
   * @class Provides a GUI interface to fire a specified method, a property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var FunctionController = function(object, property, text) {

    FunctionController.superclass.call(this, object, property);

    var _this = this;

    this.__button = document.createElement('div');
    this.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(this.__button, 'click', function(e) {
      e.preventDefault();
      _this.fire();
      return false;
    });

    dom.addClass(this.__button, 'button');

    this.domElement.appendChild(this.__button);


  };

  FunctionController.superclass = Controller;

  common.extend(

      FunctionController.prototype,
      Controller.prototype,
      {
        
        fire: function() {
          if (this.__onChange) {
            this.__onChange.call(this);
          }
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.getValue().call(this.object);
        }
      }

  );

  return FunctionController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.controllers.BooleanController = (function (Controller, dom, common) {

  /**
   * @class Provides a checkbox input to alter the boolean property of an object.
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var BooleanController = function(object, property) {

    BooleanController.superclass.call(this, object, property);

    var _this = this;
    this.__prev = this.getValue();

    this.__checkbox = document.createElement('input');
    this.__checkbox.setAttribute('type', 'checkbox');


    dom.bind(this.__checkbox, 'change', onChange, false);

    this.domElement.appendChild(this.__checkbox);

    // Match original value
    this.updateDisplay();

    function onChange() {
      _this.setValue(!_this.__prev);
    }

  };

  BooleanController.superclass = Controller;

  common.extend(

      BooleanController.prototype,
      Controller.prototype,

      {

        setValue: function(v) {
          var toReturn = BooleanController.superclass.prototype.setValue.call(this, v);
          if (this.__onFinishChange) {
            this.__onFinishChange.call(this, this.getValue());
          }
          this.__prev = this.getValue();
          return toReturn;
        },

        updateDisplay: function() {
          
          if (this.getValue() === true) {
            this.__checkbox.setAttribute('checked', 'checked');
            this.__checkbox.checked = true;    
          } else {
              this.__checkbox.checked = false;
          }

          return BooleanController.superclass.prototype.updateDisplay.call(this);

        }


      }

  );

  return BooleanController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common);


dat.color.toString = (function (common) {

  return function(color) {

    if (color.a == 1 || common.isUndefined(color.a)) {

      var s = color.hex.toString(16);
      while (s.length < 6) {
        s = '0' + s;
      }

      return '#' + s;

    } else {

      return 'rgba(' + Math.round(color.r) + ',' + Math.round(color.g) + ',' + Math.round(color.b) + ',' + color.a + ')';

    }

  }

})(dat.utils.common);


dat.color.interpret = (function (toString, common) {

  var result, toReturn;

  var interpret = function() {

    toReturn = false;

    var original = arguments.length > 1 ? common.toArray(arguments) : arguments[0];

    common.each(INTERPRETATIONS, function(family) {

      if (family.litmus(original)) {

        common.each(family.conversions, function(conversion, conversionName) {

          result = conversion.read(original);

          if (toReturn === false && result !== false) {
            toReturn = result;
            result.conversionName = conversionName;
            result.conversion = conversion;
            return common.BREAK;

          }

        });

        return common.BREAK;

      }

    });

    return toReturn;

  };

  var INTERPRETATIONS = [

    // Strings
    {

      litmus: common.isString,

      conversions: {

        THREE_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt(
                  '0x' +
                      test[1].toString() + test[1].toString() +
                      test[2].toString() + test[2].toString() +
                      test[3].toString() + test[3].toString())
            };

          },

          write: toString

        },

        SIX_CHAR_HEX: {

          read: function(original) {

            var test = original.match(/^#([A-F0-9]{6})$/i);
            if (test === null) return false;

            return {
              space: 'HEX',
              hex: parseInt('0x' + test[1].toString())
            };

          },

          write: toString

        },

        CSS_RGB: {

          read: function(original) {

            var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3])
            };

          },

          write: toString

        },

        CSS_RGBA: {

          read: function(original) {

            var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            if (test === null) return false;

            return {
              space: 'RGB',
              r: parseFloat(test[1]),
              g: parseFloat(test[2]),
              b: parseFloat(test[3]),
              a: parseFloat(test[4])
            };

          },

          write: toString

        }

      }

    },

    // Numbers
    {

      litmus: common.isNumber,

      conversions: {

        HEX: {
          read: function(original) {
            return {
              space: 'HEX',
              hex: original,
              conversionName: 'HEX'
            }
          },

          write: function(color) {
            return color.hex;
          }
        }

      }

    },

    // Arrays
    {

      litmus: common.isArray,

      conversions: {

        RGB_ARRAY: {
          read: function(original) {
            if (original.length != 3) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b];
          }

        },

        RGBA_ARRAY: {
          read: function(original) {
            if (original.length != 4) return false;
            return {
              space: 'RGB',
              r: original[0],
              g: original[1],
              b: original[2],
              a: original[3]
            };
          },

          write: function(color) {
            return [color.r, color.g, color.b, color.a];
          }

        }

      }

    },

    // Objects
    {

      litmus: common.isObject,

      conversions: {

        RGBA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b) &&
                common.isNumber(original.a)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b,
              a: color.a
            }
          }
        },

        RGB_OBJ: {
          read: function(original) {
            if (common.isNumber(original.r) &&
                common.isNumber(original.g) &&
                common.isNumber(original.b)) {
              return {
                space: 'RGB',
                r: original.r,
                g: original.g,
                b: original.b
              }
            }
            return false;
          },

          write: function(color) {
            return {
              r: color.r,
              g: color.g,
              b: color.b
            }
          }
        },

        HSVA_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v) &&
                common.isNumber(original.a)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v,
                a: original.a
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v,
              a: color.a
            }
          }
        },

        HSV_OBJ: {
          read: function(original) {
            if (common.isNumber(original.h) &&
                common.isNumber(original.s) &&
                common.isNumber(original.v)) {
              return {
                space: 'HSV',
                h: original.h,
                s: original.s,
                v: original.v
              }
            }
            return false;
          },

          write: function(color) {
            return {
              h: color.h,
              s: color.s,
              v: color.v
            }
          }

        }

      }

    }


  ];

  return interpret;


})(dat.color.toString,
dat.utils.common);


dat.GUI = dat.gui.GUI = (function (css, saveDialogueContents, styleSheet, controllerFactory, Controller, BooleanController, FunctionController, NumberControllerBox, NumberControllerSlider, OptionController, ColorController, requestAnimationFrame, CenteredDiv, dom, common) {

  css.inject(styleSheet);

  /** Outer-most className for GUI's */
  var CSS_NAMESPACE = 'dg';

  var HIDE_KEY_CODE = 72;

  /** The only value shared between the JS and SCSS. Use caution. */
  var CLOSE_BUTTON_HEIGHT = 20;

  var DEFAULT_DEFAULT_PRESET_NAME = 'Default';

  var SUPPORTS_LOCAL_STORAGE = (function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      return false;
    }
  })();

  var SAVE_DIALOGUE;

  /** Have we yet to create an autoPlace GUI? */
  var auto_place_virgin = true;

  /** Fixed position div that auto place GUI's go inside */
  var auto_place_container;

  /** Are we hiding the GUI's ? */
  var hide = false;

  /** GUI's which should be hidden */
  var hideable_guis = [];

  /**
   * A lightweight controller library for JavaScript. It allows you to easily
   * manipulate variables and fire functions on the fly.
   * @class
   *
   * @member dat.gui
   *
   * @param {Object} [params]
   * @param {String} [params.name] The name of this GUI.
   * @param {Object} [params.load] JSON object representing the saved state of
   * this GUI.
   * @param {Boolean} [params.auto=true]
   * @param {dat.gui.GUI} [params.parent] The GUI I'm nested in.
   * @param {Boolean} [params.closed] If true, starts closed
   */
  var GUI = function(params) {

    var _this = this;

    /**
     * Outermost DOM Element
     * @type DOMElement
     */
    this.domElement = document.createElement('div');
    this.__ul = document.createElement('ul');
    this.domElement.appendChild(this.__ul);

    dom.addClass(this.domElement, CSS_NAMESPACE);

    /**
     * Nested GUI's by name
     * @ignore
     */
    this.__folders = {};

    this.__controllers = [];

    /**
     * List of objects I'm remembering for save, only used in top level GUI
     * @ignore
     */
    this.__rememberedObjects = [];

    /**
     * Maps the index of remembered objects to a map of controllers, only used
     * in top level GUI.
     *
     * @private
     * @ignore
     *
     * @example
     * [
     *  {
     *    propertyName: Controller,
     *    anotherPropertyName: Controller
     *  },
     *  {
     *    propertyName: Controller
     *  }
     * ]
     */
    this.__rememberedObjectIndecesToControllers = [];

    this.__listening = [];

    params = params || {};

    // Default parameters
    params = common.defaults(params, {
      autoPlace: true,
      width: GUI.DEFAULT_WIDTH
    });

    params = common.defaults(params, {
      resizable: params.autoPlace,
      hideable: params.autoPlace
    });


    if (!common.isUndefined(params.load)) {

      // Explicit preset
      if (params.preset) params.load.preset = params.preset;

    } else {

      params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };

    }

    if (common.isUndefined(params.parent) && params.hideable) {
      hideable_guis.push(this);
    }

    // Only root level GUI's are resizable.
    params.resizable = common.isUndefined(params.parent) && params.resizable;


    if (params.autoPlace && common.isUndefined(params.scrollable)) {
      params.scrollable = true;
    }
//    params.scrollable = common.isUndefined(params.parent) && params.scrollable === true;

    // Not part of params because I don't want people passing this in via
    // constructor. Should be a 'remembered' value.
    var use_local_storage =
        SUPPORTS_LOCAL_STORAGE &&
            localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';

    Object.defineProperties(this,

        /** @lends dat.gui.GUI.prototype */
        {

          /**
           * The parent <code>GUI</code>
           * @type dat.gui.GUI
           */
          parent: {
            get: function() {
              return params.parent;
            }
          },

          scrollable: {
            get: function() {
              return params.scrollable;
            }
          },

          /**
           * Handles <code>GUI</code>'s element placement for you
           * @type Boolean
           */
          autoPlace: {
            get: function() {
              return params.autoPlace;
            }
          },

          /**
           * The identifier for a set of saved values
           * @type String
           */
          preset: {

            get: function() {
              if (_this.parent) {
                return _this.getRoot().preset;
              } else {
                return params.load.preset;
              }
            },

            set: function(v) {
              if (_this.parent) {
                _this.getRoot().preset = v;
              } else {
                params.load.preset = v;
              }
              setPresetSelectIndex(this);
              _this.revert();
            }

          },

          /**
           * The width of <code>GUI</code> element
           * @type Number
           */
          width: {
            get: function() {
              return params.width;
            },
            set: function(v) {
              params.width = v;
              setWidth(_this, v);
            }
          },

          /**
           * The name of <code>GUI</code>. Used for folders. i.e
           * a folder's name
           * @type String
           */
          name: {
            get: function() {
              return params.name;
            },
            set: function(v) {
              // TODO Check for collisions among sibling folders
              params.name = v;
              if (title_row_name) {
                title_row_name.innerHTML = params.name;
              }
            }
          },

          /**
           * Whether the <code>GUI</code> is collapsed or not
           * @type Boolean
           */
          closed: {
            get: function() {
              return params.closed;
            },
            set: function(v) {
              params.closed = v;
              if (params.closed) {
                dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
              } else {
                dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
              }
              // For browsers that aren't going to respect the CSS transition,
              // Lets just check our height against the window height right off
              // the bat.
              this.onResize();

              if (_this.__closeButton) {
                _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
              }
            }
          },

          /**
           * Contains all presets
           * @type Object
           */
          load: {
            get: function() {
              return params.load;
            }
          },

          /**
           * Determines whether or not to use <a href="https://developer.mozilla.org/en/DOM/Storage#localStorage">localStorage</a> as the means for
           * <code>remember</code>ing
           * @type Boolean
           */
          useLocalStorage: {

            get: function() {
              return use_local_storage;
            },
            set: function(bool) {
              if (SUPPORTS_LOCAL_STORAGE) {
                use_local_storage = bool;
                if (bool) {
                  dom.bind(window, 'unload', saveToLocalStorage);
                } else {
                  dom.unbind(window, 'unload', saveToLocalStorage);
                }
                localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
              }
            }

          }

        });

    // Are we a root level GUI?
    if (common.isUndefined(params.parent)) {

      params.closed = false;

      dom.addClass(this.domElement, GUI.CLASS_MAIN);
      dom.makeSelectable(this.domElement, false);

      // Are we supposed to be loading locally?
      if (SUPPORTS_LOCAL_STORAGE) {

        if (use_local_storage) {

          _this.useLocalStorage = true;

          var saved_gui = localStorage.getItem(getLocalStorageHash(this, 'gui'));

          if (saved_gui) {
            params.load = JSON.parse(saved_gui);
          }

        }

      }

      this.__closeButton = document.createElement('div');
      this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
      this.domElement.appendChild(this.__closeButton);

      dom.bind(this.__closeButton, 'click', function() {

        _this.closed = !_this.closed;


      });


      // Oh, you're a nested GUI!
    } else {

      if (params.closed === undefined) {
        params.closed = true;
      }

      var title_row_name = document.createTextNode(params.name);
      dom.addClass(title_row_name, 'controller-name');

      var title_row = addRow(_this, title_row_name);

      var on_click_title = function(e) {
        e.preventDefault();
        _this.closed = !_this.closed;
        return false;
      };

      dom.addClass(this.__ul, GUI.CLASS_CLOSED);

      dom.addClass(title_row, 'title');
      dom.bind(title_row, 'click', on_click_title);

      if (!params.closed) {
        this.closed = false;
      }

    }

    if (params.autoPlace) {

      if (common.isUndefined(params.parent)) {

        if (auto_place_virgin) {
          auto_place_container = document.createElement('div');
          dom.addClass(auto_place_container, CSS_NAMESPACE);
          dom.addClass(auto_place_container, GUI.CLASS_AUTO_PLACE_CONTAINER);
          document.body.appendChild(auto_place_container);
          auto_place_virgin = false;
        }

        // Put it in the dom for you.
        auto_place_container.appendChild(this.domElement);

        // Apply the auto styles
        dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);

      }


      // Make it not elastic.
      if (!this.parent) setWidth(_this, params.width);

    }

    dom.bind(window, 'resize', function() { _this.onResize() });
    dom.bind(this.__ul, 'webkitTransitionEnd', function() { _this.onResize(); });
    dom.bind(this.__ul, 'transitionend', function() { _this.onResize() });
    dom.bind(this.__ul, 'oTransitionEnd', function() { _this.onResize() });
    this.onResize();


    if (params.resizable) {
      addResizeHandle(this);
    }

    function saveToLocalStorage() {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }

    var root = _this.getRoot();
    function resetWidth() {
        var root = _this.getRoot();
        root.width += 1;
        common.defer(function() {
          root.width -= 1;
        });
      }

      if (!params.parent) {
        resetWidth();
      }

  };

  GUI.toggleHide = function() {

    hide = !hide;
    common.each(hideable_guis, function(gui) {
      gui.domElement.style.zIndex = hide ? -999 : 999;
      gui.domElement.style.opacity = hide ? 0 : 1;
    });
  };

  GUI.CLASS_AUTO_PLACE = 'a';
  GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
  GUI.CLASS_MAIN = 'main';
  GUI.CLASS_CONTROLLER_ROW = 'cr';
  GUI.CLASS_TOO_TALL = 'taller-than-window';
  GUI.CLASS_CLOSED = 'closed';
  GUI.CLASS_CLOSE_BUTTON = 'close-button';
  GUI.CLASS_DRAG = 'drag';

  GUI.DEFAULT_WIDTH = 245;
  GUI.TEXT_CLOSED = 'Close Controls';
  GUI.TEXT_OPEN = 'Open Controls';

  dom.bind(window, 'keydown', function(e) {

    if (document.activeElement.type !== 'text' &&
        (e.which === HIDE_KEY_CODE || e.keyCode == HIDE_KEY_CODE)) {
      GUI.toggleHide();
    }

  }, false);

  common.extend(

      GUI.prototype,

      /** @lends dat.gui.GUI */
      {

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.Controller} The new controller that was added.
         * @instance
         */
        add: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                factoryArgs: Array.prototype.slice.call(arguments, 2)
              }
          );

        },

        /**
         * @param object
         * @param property
         * @returns {dat.controllers.ColorController} The new controller that was added.
         * @instance
         */
        addColor: function(object, property) {

          return add(
              this,
              object,
              property,
              {
                color: true
              }
          );

        },

        /**
         * @param controller
         * @instance
         */
        remove: function(controller) {

          // TODO listening?
          this.__ul.removeChild(controller.__li);
          this.__controllers.slice(this.__controllers.indexOf(controller), 1);
          var _this = this;
          common.defer(function() {
            _this.onResize();
          });

        },

        destroy: function() {

          if (this.autoPlace) {
            auto_place_container.removeChild(this.domElement);
          }

        },

        /**
         * @param name
         * @returns {dat.gui.GUI} The new folder.
         * @throws {Error} if this GUI already has a folder by the specified
         * name
         * @instance
         */
        addFolder: function(name) {

          // We have to prevent collisions on names in order to have a key
          // by which to remember saved values
          if (this.__folders[name] !== undefined) {
            throw new Error('You already have a folder in this GUI by the' +
                ' name "' + name + '"');
          }

          var new_gui_params = { name: name, parent: this };

          // We need to pass down the autoPlace trait so that we can
          // attach event listeners to open/close folder actions to
          // ensure that a scrollbar appears if the window is too short.
          new_gui_params.autoPlace = this.autoPlace;

          // Do we have saved appearance data for this folder?

          if (this.load && // Anything loaded?
              this.load.folders && // Was my parent a dead-end?
              this.load.folders[name]) { // Did daddy remember me?

            // Start me closed if I was closed
            new_gui_params.closed = this.load.folders[name].closed;

            // Pass down the loaded data
            new_gui_params.load = this.load.folders[name];

          }

          var gui = new GUI(new_gui_params);
          this.__folders[name] = gui;

          var li = addRow(this, gui.domElement);
          dom.addClass(li, 'folder');
          return gui;

        },

        open: function() {
          this.closed = false;
        },

        close: function() {
          this.closed = true;
        },

        onResize: function() {

          var root = this.getRoot();

          if (root.scrollable) {

            var top = dom.getOffset(root.__ul).top;
            var h = 0;

            common.each(root.__ul.childNodes, function(node) {
              if (! (root.autoPlace && node === root.__save_row))
                h += dom.getHeight(node);
            });

            if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
              dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
            } else {
              dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
              root.__ul.style.height = 'auto';
            }

          }

          if (root.__resize_handle) {
            common.defer(function() {
              root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
            });
          }

          if (root.__closeButton) {
            root.__closeButton.style.width = root.width + 'px';
          }

        },

        /**
         * Mark objects for saving. The order of these objects cannot change as
         * the GUI grows. When remembering new objects, append them to the end
         * of the list.
         *
         * @param {Object...} objects
         * @throws {Error} if not called on a top level GUI.
         * @instance
         */
        remember: function() {

          if (common.isUndefined(SAVE_DIALOGUE)) {
            SAVE_DIALOGUE = new CenteredDiv();
            SAVE_DIALOGUE.domElement.innerHTML = saveDialogueContents;
          }

          if (this.parent) {
            throw new Error("You can only call remember on a top level GUI.");
          }

          var _this = this;

          common.each(Array.prototype.slice.call(arguments), function(object) {
            if (_this.__rememberedObjects.length == 0) {
              addSaveMenu(_this);
            }
            if (_this.__rememberedObjects.indexOf(object) == -1) {
              _this.__rememberedObjects.push(object);
            }
          });

          if (this.autoPlace) {
            // Set save row width
            setWidth(this, this.width);
          }

        },

        /**
         * @returns {dat.gui.GUI} the topmost parent GUI of a nested GUI.
         * @instance
         */
        getRoot: function() {
          var gui = this;
          while (gui.parent) {
            gui = gui.parent;
          }
          return gui;
        },

        /**
         * @returns {Object} a JSON object representing the current state of
         * this GUI as well as its remembered properties.
         * @instance
         */
        getSaveObject: function() {

          var toReturn = this.load;

          toReturn.closed = this.closed;

          // Am I remembering any values?
          if (this.__rememberedObjects.length > 0) {

            toReturn.preset = this.preset;

            if (!toReturn.remembered) {
              toReturn.remembered = {};
            }

            toReturn.remembered[this.preset] = getCurrentPreset(this);

          }

          toReturn.folders = {};
          common.each(this.__folders, function(element, key) {
            toReturn.folders[key] = element.getSaveObject();
          });

          return toReturn;

        },

        save: function() {

          if (!this.load.remembered) {
            this.load.remembered = {};
          }

          this.load.remembered[this.preset] = getCurrentPreset(this);
          markPresetModified(this, false);

        },

        saveAs: function(presetName) {

          if (!this.load.remembered) {

            // Retain default values upon first save
            this.load.remembered = {};
            this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);

          }

          this.load.remembered[presetName] = getCurrentPreset(this);
          this.preset = presetName;
          addPresetOption(this, presetName, true);

        },

        revert: function(gui) {

          common.each(this.__controllers, function(controller) {
            // Make revert work on Default.
            if (!this.getRoot().load.remembered) {
              controller.setValue(controller.initialValue);
            } else {
              recallSavedValue(gui || this.getRoot(), controller);
            }
          }, this);

          common.each(this.__folders, function(folder) {
            folder.revert(folder);
          });

          if (!gui) {
            markPresetModified(this.getRoot(), false);
          }


        },

        listen: function(controller) {

          var init = this.__listening.length == 0;
          this.__listening.push(controller);
          if (init) updateDisplays(this.__listening);

        }

      }

  );

  function add(gui, object, property, params) {

    if (object[property] === undefined) {
      throw new Error("Object " + object + " has no property \"" + property + "\"");
    }

    var controller;

    if (params.color) {

      controller = new ColorController(object, property);

    } else {

      var factoryArgs = [object,property].concat(params.factoryArgs);
      controller = controllerFactory.apply(gui, factoryArgs);

    }

    if (params.before instanceof Controller) {
      params.before = params.before.__li;
    }

    recallSavedValue(gui, controller);

    dom.addClass(controller.domElement, 'c');

    var name = document.createElement('span');
    dom.addClass(name, 'property-name');
    name.innerHTML = controller.property;

    var container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(controller.domElement);

    var li = addRow(gui, container, params.before);

    dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
    dom.addClass(li, typeof controller.getValue());

    augmentController(gui, li, controller);

    gui.__controllers.push(controller);

    return controller;

  }

  /**
   * Add a row to the end of the GUI or before another row.
   *
   * @param gui
   * @param [dom] If specified, inserts the dom content in the new row
   * @param [liBefore] If specified, places the new row before another row
   */
  function addRow(gui, dom, liBefore) {
    var li = document.createElement('li');
    if (dom) li.appendChild(dom);
    if (liBefore) {
      gui.__ul.insertBefore(li, params.before);
    } else {
      gui.__ul.appendChild(li);
    }
    gui.onResize();
    return li;
  }

  function augmentController(gui, li, controller) {

    controller.__li = li;
    controller.__gui = gui;

    common.extend(controller, {

      options: function(options) {

        if (arguments.length > 1) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [common.toArray(arguments)]
              }
          );

        }

        if (common.isArray(options) || common.isObject(options)) {
          controller.remove();

          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [options]
              }
          );

        }

      },

      name: function(v) {
        controller.__li.firstElementChild.firstElementChild.innerHTML = v;
        return controller;
      },

      listen: function() {
        controller.__gui.listen(controller);
        return controller;
      },

      remove: function() {
        controller.__gui.remove(controller);
        return controller;
      }

    });

    // All sliders should be accompanied by a box.
    if (controller instanceof NumberControllerSlider) {

      var box = new NumberControllerBox(controller.object, controller.property,
          { min: controller.__min, max: controller.__max, step: controller.__step });

      common.each(['updateDisplay', 'onChange', 'onFinishChange'], function(method) {
        var pc = controller[method];
        var pb = box[method];
        controller[method] = box[method] = function() {
          var args = Array.prototype.slice.call(arguments);
          pc.apply(controller, args);
          return pb.apply(box, args);
        }
      });

      dom.addClass(li, 'has-slider');
      controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);

    }
    else if (controller instanceof NumberControllerBox) {

      var r = function(returned) {

        // Have we defined both boundaries?
        if (common.isNumber(controller.__min) && common.isNumber(controller.__max)) {

          // Well, then lets just replace this with a slider.
          controller.remove();
          return add(
              gui,
              controller.object,
              controller.property,
              {
                before: controller.__li.nextElementSibling,
                factoryArgs: [controller.__min, controller.__max, controller.__step]
              });

        }

        return returned;

      };

      controller.min = common.compose(r, controller.min);
      controller.max = common.compose(r, controller.max);

    }
    else if (controller instanceof BooleanController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__checkbox, 'click');
      });

      dom.bind(controller.__checkbox, 'click', function(e) {
        e.stopPropagation(); // Prevents double-toggle
      })

    }
    else if (controller instanceof FunctionController) {

      dom.bind(li, 'click', function() {
        dom.fakeEvent(controller.__button, 'click');
      });

      dom.bind(li, 'mouseover', function() {
        dom.addClass(controller.__button, 'hover');
      });

      dom.bind(li, 'mouseout', function() {
        dom.removeClass(controller.__button, 'hover');
      });

    }
    else if (controller instanceof ColorController) {

      dom.addClass(li, 'color');
      controller.updateDisplay = common.compose(function(r) {
        li.style.borderLeftColor = controller.__color.toString();
        return r;
      }, controller.updateDisplay);

      controller.updateDisplay();

    }

    controller.setValue = common.compose(function(r) {
      if (gui.getRoot().__preset_select && controller.isModified()) {
        markPresetModified(gui.getRoot(), true);
      }
      return r;
    }, controller.setValue);

  }

  function recallSavedValue(gui, controller) {

    // Find the topmost GUI, that's where remembered objects live.
    var root = gui.getRoot();

    // Does the object we're controlling match anything we've been told to
    // remember?
    var matched_index = root.__rememberedObjects.indexOf(controller.object);

    // Why yes, it does!
    if (matched_index != -1) {

      // Let me fetch a map of controllers for thcommon.isObject.
      var controller_map =
          root.__rememberedObjectIndecesToControllers[matched_index];

      // Ohp, I believe this is the first controller we've created for this
      // object. Lets make the map fresh.
      if (controller_map === undefined) {
        controller_map = {};
        root.__rememberedObjectIndecesToControllers[matched_index] =
            controller_map;
      }

      // Keep track of this controller
      controller_map[controller.property] = controller;

      // Okay, now have we saved any values for this controller?
      if (root.load && root.load.remembered) {

        var preset_map = root.load.remembered;

        // Which preset are we trying to load?
        var preset;

        if (preset_map[gui.preset]) {

          preset = preset_map[gui.preset];

        } else if (preset_map[DEFAULT_DEFAULT_PRESET_NAME]) {

          // Uhh, you can have the default instead?
          preset = preset_map[DEFAULT_DEFAULT_PRESET_NAME];

        } else {

          // Nada.

          return;

        }


        // Did the loaded object remember thcommon.isObject?
        if (preset[matched_index] &&

          // Did we remember this particular property?
            preset[matched_index][controller.property] !== undefined) {

          // We did remember something for this guy ...
          var value = preset[matched_index][controller.property];

          // And that's what it is.
          controller.initialValue = value;
          controller.setValue(value);

        }

      }

    }

  }

  function getLocalStorageHash(gui, key) {
    // TODO how does this deal with multiple GUI's?
    return document.location.href + '.' + key;

  }

  function addSaveMenu(gui) {

    var div = gui.__save_row = document.createElement('li');

    dom.addClass(gui.domElement, 'has-save');

    gui.__ul.insertBefore(div, gui.__ul.firstChild);

    dom.addClass(div, 'save-row');

    var gears = document.createElement('span');
    gears.innerHTML = '&nbsp;';
    dom.addClass(gears, 'button gears');

    // TODO replace with FunctionController
    var button = document.createElement('span');
    button.innerHTML = 'Save';
    dom.addClass(button, 'button');
    dom.addClass(button, 'save');

    var button2 = document.createElement('span');
    button2.innerHTML = 'New';
    dom.addClass(button2, 'button');
    dom.addClass(button2, 'save-as');

    var button3 = document.createElement('span');
    button3.innerHTML = 'Revert';
    dom.addClass(button3, 'button');
    dom.addClass(button3, 'revert');

    var select = gui.__preset_select = document.createElement('select');

    if (gui.load && gui.load.remembered) {

      common.each(gui.load.remembered, function(value, key) {
        addPresetOption(gui, key, key == gui.preset);
      });

    } else {
      addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
    }

    dom.bind(select, 'change', function() {


      for (var index = 0; index < gui.__preset_select.length; index++) {
        gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
      }

      gui.preset = this.value;

    });

    div.appendChild(select);
    div.appendChild(gears);
    div.appendChild(button);
    div.appendChild(button2);
    div.appendChild(button3);

    if (SUPPORTS_LOCAL_STORAGE) {

      var saveLocally = document.getElementById('dg-save-locally');
      var explain = document.getElementById('dg-local-explain');

      saveLocally.style.display = 'block';

      var localStorageCheckBox = document.getElementById('dg-local-storage');

      if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
        localStorageCheckBox.setAttribute('checked', 'checked');
      }

      function showHideExplain() {
        explain.style.display = gui.useLocalStorage ? 'block' : 'none';
      }

      showHideExplain();

      // TODO: Use a boolean controller, fool!
      dom.bind(localStorageCheckBox, 'change', function() {
        gui.useLocalStorage = !gui.useLocalStorage;
        showHideExplain();
      });

    }

    var newConstructorTextArea = document.getElementById('dg-new-constructor');

    dom.bind(newConstructorTextArea, 'keydown', function(e) {
      if (e.metaKey && (e.which === 67 || e.keyCode == 67)) {
        SAVE_DIALOGUE.hide();
      }
    });

    dom.bind(gears, 'click', function() {
      newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
      SAVE_DIALOGUE.show();
      newConstructorTextArea.focus();
      newConstructorTextArea.select();
    });

    dom.bind(button, 'click', function() {
      gui.save();
    });

    dom.bind(button2, 'click', function() {
      var presetName = prompt('Enter a new preset name.');
      if (presetName) gui.saveAs(presetName);
    });

    dom.bind(button3, 'click', function() {
      gui.revert();
    });

//    div.appendChild(button2);

  }

  function addResizeHandle(gui) {

    gui.__resize_handle = document.createElement('div');

    common.extend(gui.__resize_handle.style, {

      width: '6px',
      marginLeft: '-3px',
      height: '200px',
      cursor: 'ew-resize',
      position: 'absolute'
//      border: '1px solid blue'

    });

    var pmouseX;

    dom.bind(gui.__resize_handle, 'mousedown', dragStart);
    dom.bind(gui.__closeButton, 'mousedown', dragStart);

    gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);

    function dragStart(e) {

      e.preventDefault();

      pmouseX = e.clientX;

      dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.bind(window, 'mousemove', drag);
      dom.bind(window, 'mouseup', dragStop);

      return false;

    }

    function drag(e) {

      e.preventDefault();

      gui.width += pmouseX - e.clientX;
      gui.onResize();
      pmouseX = e.clientX;

      return false;

    }

    function dragStop() {

      dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
      dom.unbind(window, 'mousemove', drag);
      dom.unbind(window, 'mouseup', dragStop);

    }

  }

  function setWidth(gui, w) {
    gui.domElement.style.width = w + 'px';
    // Auto placed save-rows are position fixed, so we have to
    // set the width manually if we want it to bleed to the edge
    if (gui.__save_row && gui.autoPlace) {
      gui.__save_row.style.width = w + 'px';
    }if (gui.__closeButton) {
      gui.__closeButton.style.width = w + 'px';
    }
  }

  function getCurrentPreset(gui, useInitialValues) {

    var toReturn = {};

    // For each object I'm remembering
    common.each(gui.__rememberedObjects, function(val, index) {

      var saved_values = {};

      // The controllers I've made for thcommon.isObject by property
      var controller_map =
          gui.__rememberedObjectIndecesToControllers[index];

      // Remember each value for each property
      common.each(controller_map, function(controller, property) {
        saved_values[property] = useInitialValues ? controller.initialValue : controller.getValue();
      });

      // Save the values for thcommon.isObject
      toReturn[index] = saved_values;

    });

    return toReturn;

  }

  function addPresetOption(gui, name, setSelected) {
    var opt = document.createElement('option');
    opt.innerHTML = name;
    opt.value = name;
    gui.__preset_select.appendChild(opt);
    if (setSelected) {
      gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
    }
  }

  function setPresetSelectIndex(gui) {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      if (gui.__preset_select[index].value == gui.preset) {
        gui.__preset_select.selectedIndex = index;
      }
    }
  }

  function markPresetModified(gui, modified) {
    var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
//    console.log('mark', modified, opt);
    if (modified) {
      opt.innerHTML = opt.value + "*";
    } else {
      opt.innerHTML = opt.value;
    }
  }

  function updateDisplays(controllerArray) {


    if (controllerArray.length != 0) {

      requestAnimationFrame(function() {
        updateDisplays(controllerArray);
      });

    }

    common.each(controllerArray, function(c) {
      c.updateDisplay();
    });

  }

  return GUI;

})(dat.utils.css,
"<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>",
".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n",
dat.controllers.factory = (function (OptionController, NumberControllerBox, NumberControllerSlider, StringController, FunctionController, BooleanController, common) {

      return function(object, property) {

        var initialValue = object[property];

        // Providing options?
        if (common.isArray(arguments[2]) || common.isObject(arguments[2])) {
          return new OptionController(object, property, arguments[2]);
        }

        // Providing a map?

        if (common.isNumber(initialValue)) {

          if (common.isNumber(arguments[2]) && common.isNumber(arguments[3])) {

            // Has min and max.
            return new NumberControllerSlider(object, property, arguments[2], arguments[3]);

          } else {

            return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });

          }

        }

        if (common.isString(initialValue)) {
          return new StringController(object, property);
        }

        if (common.isFunction(initialValue)) {
          return new FunctionController(object, property, '');
        }

        if (common.isBoolean(initialValue)) {
          return new BooleanController(object, property);
        }

      }

    })(dat.controllers.OptionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.StringController = (function (Controller, dom, common) {

  /**
   * @class Provides a text input to alter the string property of an object.
   *
   * @extends dat.controllers.Controller
   *
   * @param {Object} object The object to be manipulated
   * @param {string} property The name of the property to be manipulated
   *
   * @member dat.controllers
   */
  var StringController = function(object, property) {

    StringController.superclass.call(this, object, property);

    var _this = this;

    this.__input = document.createElement('input');
    this.__input.setAttribute('type', 'text');

    dom.bind(this.__input, 'keyup', onChange);
    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);
    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    

    function onChange() {
      _this.setValue(_this.__input.value);
    }

    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.updateDisplay();

    this.domElement.appendChild(this.__input);

  };

  StringController.superclass = Controller;

  common.extend(

      StringController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {
          // Stops the caret from moving on account of:
          // keyup -> setValue -> updateDisplay
          if (!dom.isActive(this.__input)) {
            this.__input.value = this.getValue();
          }
          return StringController.superclass.prototype.updateDisplay.call(this);
        }

      }

  );

  return StringController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.utils.common),
dat.controllers.FunctionController,
dat.controllers.BooleanController,
dat.utils.common),
dat.controllers.Controller,
dat.controllers.BooleanController,
dat.controllers.FunctionController,
dat.controllers.NumberControllerBox,
dat.controllers.NumberControllerSlider,
dat.controllers.OptionController,
dat.controllers.ColorController = (function (Controller, dom, Color, interpret, common) {

  var ColorController = function(object, property) {

    ColorController.superclass.call(this, object, property);

    this.__color = new Color(this.getValue());
    this.__temp = new Color(0);

    var _this = this;

    this.domElement = document.createElement('div');

    dom.makeSelectable(this.domElement, false);

    this.__selector = document.createElement('div');
    this.__selector.className = 'selector';

    this.__saturation_field = document.createElement('div');
    this.__saturation_field.className = 'saturation-field';

    this.__field_knob = document.createElement('div');
    this.__field_knob.className = 'field-knob';
    this.__field_knob_border = '2px solid ';

    this.__hue_knob = document.createElement('div');
    this.__hue_knob.className = 'hue-knob';

    this.__hue_field = document.createElement('div');
    this.__hue_field.className = 'hue-field';

    this.__input = document.createElement('input');
    this.__input.type = 'text';
    this.__input_textShadow = '0 1px 1px ';

    dom.bind(this.__input, 'keydown', function(e) {
      if (e.keyCode === 13) { // on enter
        onBlur.call(this);
      }
    });

    dom.bind(this.__input, 'blur', onBlur);

    dom.bind(this.__selector, 'mousedown', function(e) {

      dom
        .addClass(this, 'drag')
        .bind(window, 'mouseup', function(e) {
          dom.removeClass(_this.__selector, 'drag');
        });

    });

    var value_field = document.createElement('div');

    common.extend(this.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });

    common.extend(this.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: this.__field_knob_border + (this.__color.v < .5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    
    common.extend(this.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });

    common.extend(this.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });

    common.extend(value_field.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    
    linearGradient(value_field, 'top', 'rgba(0,0,0,0)', '#000');

    common.extend(this.__hue_field.style, {
      width: '15px',
      height: '100px',
      display: 'inline-block',
      border: '1px solid #555',
      cursor: 'ns-resize'
    });

    hueGradient(this.__hue_field);

    common.extend(this.__input.style, {
      outline: 'none',
//      width: '120px',
      textAlign: 'center',
//      padding: '4px',
//      marginBottom: '6px',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: this.__input_textShadow + 'rgba(0,0,0,0.7)'
    });

    dom.bind(this.__saturation_field, 'mousedown', fieldDown);
    dom.bind(this.__field_knob, 'mousedown', fieldDown);

    dom.bind(this.__hue_field, 'mousedown', function(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'mouseup', unbindH);
    });

    function fieldDown(e) {
      setSV(e);
      // document.body.style.cursor = 'none';
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'mouseup', unbindSV);
    }

    function unbindSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'mouseup', unbindSV);
      // document.body.style.cursor = 'default';
    }

    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }

    function unbindH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'mouseup', unbindH);
    }

    this.__saturation_field.appendChild(value_field);
    this.__selector.appendChild(this.__field_knob);
    this.__selector.appendChild(this.__saturation_field);
    this.__selector.appendChild(this.__hue_field);
    this.__hue_field.appendChild(this.__hue_knob);

    this.domElement.appendChild(this.__input);
    this.domElement.appendChild(this.__selector);

    this.updateDisplay();

    function setSV(e) {

      e.preventDefault();

      var w = dom.getWidth(_this.__saturation_field);
      var o = dom.getOffset(_this.__saturation_field);
      var s = (e.clientX - o.left + document.body.scrollLeft) / w;
      var v = 1 - (e.clientY - o.top + document.body.scrollTop) / w;

      if (v > 1) v = 1;
      else if (v < 0) v = 0;

      if (s > 1) s = 1;
      else if (s < 0) s = 0;

      _this.__color.v = v;
      _this.__color.s = s;

      _this.setValue(_this.__color.toOriginal());


      return false;

    }

    function setH(e) {

      e.preventDefault();

      var s = dom.getHeight(_this.__hue_field);
      var o = dom.getOffset(_this.__hue_field);
      var h = 1 - (e.clientY - o.top + document.body.scrollTop) / s;

      if (h > 1) h = 1;
      else if (h < 0) h = 0;

      _this.__color.h = h * 360;

      _this.setValue(_this.__color.toOriginal());

      return false;

    }

  };

  ColorController.superclass = Controller;

  common.extend(

      ColorController.prototype,
      Controller.prototype,

      {

        updateDisplay: function() {

          var i = interpret(this.getValue());

          if (i !== false) {

            var mismatch = false;

            // Check for mismatch on the interpreted value.

            common.each(Color.COMPONENTS, function(component) {
              if (!common.isUndefined(i[component]) &&
                  !common.isUndefined(this.__color.__state[component]) &&
                  i[component] !== this.__color.__state[component]) {
                mismatch = true;
                return {}; // break
              }
            }, this);

            // If nothing diverges, we keep our previous values
            // for statefulness, otherwise we recalculate fresh
            if (mismatch) {
              common.extend(this.__color.__state, i);
            }

          }

          common.extend(this.__temp.__state, this.__color.__state);

          this.__temp.a = 1;

          var flip = (this.__color.v < .5 || this.__color.s > .5) ? 255 : 0;
          var _flip = 255 - flip;

          common.extend(this.__field_knob.style, {
            marginLeft: 100 * this.__color.s - 7 + 'px',
            marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
            backgroundColor: this.__temp.toString(),
            border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip +')'
          });

          this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px'

          this.__temp.s = 1;
          this.__temp.v = 1;

          linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toString());

          common.extend(this.__input.style, {
            backgroundColor: this.__input.value = this.__color.toString(),
            color: 'rgb(' + flip + ',' + flip + ',' + flip +')',
            textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip +',.7)'
          });

        }

      }

  );
  
  var vendors = ['-moz-','-o-','-webkit-','-ms-',''];
  
  function linearGradient(elem, x, a, b) {
    elem.style.background = '';
    common.each(vendors, function(vendor) {
      elem.style.cssText += 'background: ' + vendor + 'linear-gradient('+x+', '+a+' 0%, ' + b + ' 100%); ';
    });
  }
  
  function hueGradient(elem) {
    elem.style.background = '';
    elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);'
    elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
    elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);'
  }


  return ColorController;

})(dat.controllers.Controller,
dat.dom.dom,
dat.color.Color = (function (interpret, math, toString, common) {

  var Color = function() {

    this.__state = interpret.apply(this, arguments);

    if (this.__state === false) {
      throw 'Failed to interpret color arguments';
    }

    this.__state.a = this.__state.a || 1;


  };

  Color.COMPONENTS = ['r','g','b','h','s','v','hex','a'];

  common.extend(Color.prototype, {

    toString: function() {
      return toString(this);
    },

    toOriginal: function() {
      return this.__state.conversion.write(this);
    }

  });

  defineRGBComponent(Color.prototype, 'r', 2);
  defineRGBComponent(Color.prototype, 'g', 1);
  defineRGBComponent(Color.prototype, 'b', 0);

  defineHSVComponent(Color.prototype, 'h');
  defineHSVComponent(Color.prototype, 's');
  defineHSVComponent(Color.prototype, 'v');

  Object.defineProperty(Color.prototype, 'a', {

    get: function() {
      return this.__state.a;
    },

    set: function(v) {
      this.__state.a = v;
    }

  });

  Object.defineProperty(Color.prototype, 'hex', {

    get: function() {

      if (!this.__state.space !== 'HEX') {
        this.__state.hex = math.rgb_to_hex(this.r, this.g, this.b);
      }

      return this.__state.hex;

    },

    set: function(v) {

      this.__state.space = 'HEX';
      this.__state.hex = v;

    }

  });

  function defineRGBComponent(target, component, componentHexIndex) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'RGB') {
          return this.__state[component];
        }

        recalculateRGB(this, component, componentHexIndex);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'RGB') {
          recalculateRGB(this, component, componentHexIndex);
          this.__state.space = 'RGB';
        }

        this.__state[component] = v;

      }

    });

  }

  function defineHSVComponent(target, component) {

    Object.defineProperty(target, component, {

      get: function() {

        if (this.__state.space === 'HSV')
          return this.__state[component];

        recalculateHSV(this);

        return this.__state[component];

      },

      set: function(v) {

        if (this.__state.space !== 'HSV') {
          recalculateHSV(this);
          this.__state.space = 'HSV';
        }

        this.__state[component] = v;

      }

    });

  }

  function recalculateRGB(color, component, componentHexIndex) {

    if (color.__state.space === 'HEX') {

      color.__state[component] = math.component_from_hex(color.__state.hex, componentHexIndex);

    } else if (color.__state.space === 'HSV') {

      common.extend(color.__state, math.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));

    } else {

      throw 'Corrupted color state';

    }

  }

  function recalculateHSV(color) {

    var result = math.rgb_to_hsv(color.r, color.g, color.b);

    common.extend(color.__state,
        {
          s: result.s,
          v: result.v
        }
    );

    if (!common.isNaN(result.h)) {
      color.__state.h = result.h;
    } else if (common.isUndefined(color.__state.h)) {
      color.__state.h = 0;
    }

  }

  return Color;

})(dat.color.interpret,
dat.color.math = (function () {

  var tmpComponent;

  return {

    hsv_to_rgb: function(h, s, v) {

      var hi = Math.floor(h / 60) % 6;

      var f = h / 60 - Math.floor(h / 60);
      var p = v * (1.0 - s);
      var q = v * (1.0 - (f * s));
      var t = v * (1.0 - ((1.0 - f) * s));
      var c = [
        [v, t, p],
        [q, v, p],
        [p, v, t],
        [p, q, v],
        [t, p, v],
        [v, p, q]
      ][hi];

      return {
        r: c[0] * 255,
        g: c[1] * 255,
        b: c[2] * 255
      };

    },

    rgb_to_hsv: function(r, g, b) {

      var min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          delta = max - min,
          h, s;

      if (max != 0) {
        s = delta / max;
      } else {
        return {
          h: NaN,
          s: 0,
          v: 0
        };
      }

      if (r == max) {
        h = (g - b) / delta;
      } else if (g == max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h /= 6;
      if (h < 0) {
        h += 1;
      }

      return {
        h: h * 360,
        s: s,
        v: max / 255
      };
    },

    rgb_to_hex: function(r, g, b) {
      var hex = this.hex_with_component(0, 2, r);
      hex = this.hex_with_component(hex, 1, g);
      hex = this.hex_with_component(hex, 0, b);
      return hex;
    },

    component_from_hex: function(hex, componentIndex) {
      return (hex >> (componentIndex * 8)) & 0xFF;
    },

    hex_with_component: function(hex, componentIndex, value) {
      return value << (tmpComponent = componentIndex * 8) | (hex & ~ (0xFF << tmpComponent));
    }

  }

})(),
dat.color.toString,
dat.utils.common),
dat.color.interpret,
dat.utils.common),
dat.utils.requestAnimationFrame = (function () {

  /**
   * requirejs version of Paul Irish's RequestAnimationFrame
   * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
   */

  return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback, element) {

        window.setTimeout(callback, 1000 / 60);

      };
})(),
dat.dom.CenteredDiv = (function (dom, common) {


  var CenteredDiv = function() {

    this.backgroundElement = document.createElement('div');
    common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear'
    });

    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';

    this.domElement = document.createElement('div');
    common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear'
    });


    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);

    var _this = this;
    dom.bind(this.backgroundElement, 'click', function() {
      _this.hide();
    });


  };

  CenteredDiv.prototype.show = function() {

    var _this = this;
    


    this.backgroundElement.style.display = 'block';

    this.domElement.style.display = 'block';
    this.domElement.style.opacity = 0;
//    this.domElement.style.top = '52%';
    this.domElement.style.webkitTransform = 'scale(1.1)';

    this.layout();

    common.defer(function() {
      _this.backgroundElement.style.opacity = 1;
      _this.domElement.style.opacity = 1;
      _this.domElement.style.webkitTransform = 'scale(1)';
    });

  };

  CenteredDiv.prototype.hide = function() {

    var _this = this;

    var hide = function() {

      _this.domElement.style.display = 'none';
      _this.backgroundElement.style.display = 'none';

      dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
      dom.unbind(_this.domElement, 'transitionend', hide);
      dom.unbind(_this.domElement, 'oTransitionEnd', hide);

    };

    dom.bind(this.domElement, 'webkitTransitionEnd', hide);
    dom.bind(this.domElement, 'transitionend', hide);
    dom.bind(this.domElement, 'oTransitionEnd', hide);

    this.backgroundElement.style.opacity = 0;
//    this.domElement.style.top = '48%';
    this.domElement.style.opacity = 0;
    this.domElement.style.webkitTransform = 'scale(1.1)';

  };

  CenteredDiv.prototype.layout = function() {
    this.domElement.style.left = window.innerWidth/2 - dom.getWidth(this.domElement) / 2 + 'px';
    this.domElement.style.top = window.innerHeight/2 - dom.getHeight(this.domElement) / 2 + 'px';
  };
  
  function lockScroll(e) {
    console.log(e);
  }

  return CenteredDiv;

})(dat.dom.dom,
dat.utils.common),
dat.dom.dom,
dat.utils.common);
},{}],5:[function(require,module,exports){
// SceneApp.js

var GL = bongiovi.GL, gl;

function SceneApp() {
	gl = GL.gl;
	bongiovi.Scene.call(this);

	window.addEventListener("resize", this.resize.bind(this));
}


var p = SceneApp.prototype = new bongiovi.Scene();

p._initTextures = function() {
	console.log('Init Textures');
};

p._initViews = function() {
	console.log('Init Views');
	this._vAxis = new bongiovi.ViewAxis();
	this._vDotPlane = new bongiovi.ViewDotPlane();
};

p.render = function() {
	this._vAxis.render();
	this._vDotPlane.render();
};

p.resize = function() {
	GL.setSize(window.innerWidth, window.innerHeight);
	this.camera.resize(GL.aspectRatio);
};

module.exports = SceneApp;
},{}],6:[function(require,module,exports){
(function (global){
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bongiovi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var GLTools = _dereq_("./bongiovi/GLTools");

var bongiovi = {
	GL:GLTools,
	GLTools:GLTools,
	Scheduler:_dereq_("./bongiovi/Scheduler"),
	SimpleImageLoader:_dereq_("./bongiovi/SimpleImageLoader"),
	EaseNumber:_dereq_("./bongiovi/EaseNumber"),
	QuatRotation:_dereq_("./bongiovi/QuatRotation"),
	Scene:_dereq_("./bongiovi/Scene"),
	Camera:_dereq_("./bongiovi/Camera"),
	SimpleCamera:_dereq_("./bongiovi/SimpleCamera"),
	CameraPerspective:_dereq_("./bongiovi/CameraPerspective"),
	Mesh:_dereq_("./bongiovi/Mesh"),
	Face:_dereq_("./bongiovi/Face"),
	GLShader:_dereq_("./bongiovi/GLShader"),
	GLTexture:_dereq_("./bongiovi/GLTexture"),
	ShaderLibs:_dereq_("./bongiovi/ShaderLibs"),
	View:_dereq_("./bongiovi/View"),
	ViewCopy:_dereq_("./bongiovi/ViewCopy"),
	ViewAxis:_dereq_("./bongiovi/ViewAxis"),
	ViewDotPlane:_dereq_("./bongiovi/ViewDotPlanes"),
	MeshUtils:_dereq_("./bongiovi/MeshUtils"),
	FrameBuffer:_dereq_("./bongiovi/FrameBuffer"),
	glm:_dereq_("gl-matrix")
};

module.exports = bongiovi;
},{"./bongiovi/Camera":3,"./bongiovi/CameraPerspective":4,"./bongiovi/EaseNumber":5,"./bongiovi/Face":6,"./bongiovi/FrameBuffer":7,"./bongiovi/GLShader":8,"./bongiovi/GLTexture":9,"./bongiovi/GLTools":10,"./bongiovi/Mesh":11,"./bongiovi/MeshUtils":12,"./bongiovi/QuatRotation":13,"./bongiovi/Scene":14,"./bongiovi/Scheduler":15,"./bongiovi/ShaderLibs":16,"./bongiovi/SimpleCamera":17,"./bongiovi/SimpleImageLoader":18,"./bongiovi/View":19,"./bongiovi/ViewAxis":20,"./bongiovi/ViewCopy":21,"./bongiovi/ViewDotPlanes":22,"gl-matrix":2}],2:[function(_dereq_,module,exports){
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.1
 */

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


(function(_global) {
  "use strict";

  var shim = {};
  if (typeof(exports) === 'undefined') {
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      shim.exports = {};
      define(function() {
        return shim.exports;
      });
    } else {
      // gl-matrix lives in a browser, define its namespaces in global
      shim.exports = typeof(window) !== 'undefined' ? window : _global;
    }
  }
  else {
    // gl-matrix lives in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function(exports) {
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


if(!GLMAT_EPSILON) {
    var GLMAT_EPSILON = 0.000001;
}

if(!GLMAT_ARRAY_TYPE) {
    var GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
}

if(!GLMAT_RANDOM) {
    var GLMAT_RANDOM = Math.random;
}

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

/**
 * Sets the type of array used when creating new vectors and matricies
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    GLMAT_ARRAY_TYPE = type;
}

if(typeof(exports) !== 'undefined') {
    exports.glMatrix = glMatrix;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */

var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec2 = vec2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */

var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    var z = (GLMAT_RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/*
* Rotate a 3D vector around the x-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

  	return out;
};

/*
* Rotate a 3D vector around the y-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateY = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  	r[1] = p[1];
  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/*
* Rotate a 3D vector around the z-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateZ = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  	r[2] = p[2];
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec3 = vec3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */

var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = GLMAT_RANDOM();
    out[1] = GLMAT_RANDOM();
    out[2] = GLMAT_RANDOM();
    out[3] = GLMAT_RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec4 = vec4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x2 Matrix
 * @name mat2
 */

var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bongiovi = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";

var GLTools = _dereq_("./bongiovi/GLTools");

var bongiovi = {
	GL:GLTools,
	GLTools:GLTools,
	Scheduler:_dereq_("./bongiovi/Scheduler"),
	SimpleImageLoader:_dereq_("./bongiovi/SimpleImageLoader"),
	EaseNumber:_dereq_("./bongiovi/EaseNumber"),
	QuatRotation:_dereq_("./bongiovi/QuatRotation"),
	Scene:_dereq_("./bongiovi/Scene"),
	Camera:_dereq_("./bongiovi/Camera"),
	SimpleCamera:_dereq_("./bongiovi/SimpleCamera"),
	CameraPerspective:_dereq_("./bongiovi/CameraPerspective"),
	Mesh:_dereq_("./bongiovi/Mesh"),
	Face:_dereq_("./bongiovi/Face"),
	GLShader:_dereq_("./bongiovi/GLShader"),
	GLTexture:_dereq_("./bongiovi/GLTexture"),
	ShaderLibs:_dereq_("./bongiovi/ShaderLibs"),
	View:_dereq_("./bongiovi/View"),
	ViewCopy:_dereq_("./bongiovi/ViewCopy"),
	ViewAxis:_dereq_("./bongiovi/ViewAxis"),
	ViewDotPlane:_dereq_("./bongiovi/ViewDotPlanes"),
	MeshUtils:_dereq_("./bongiovi/MeshUtils"),
	FrameBuffer:_dereq_("./bongiovi/FrameBuffer"),
	glm:_dereq_("gl-matrix")
};

module.exports = bongiovi;
},{"./bongiovi/Camera":3,"./bongiovi/CameraPerspective":4,"./bongiovi/EaseNumber":5,"./bongiovi/Face":6,"./bongiovi/FrameBuffer":7,"./bongiovi/GLShader":8,"./bongiovi/GLTexture":9,"./bongiovi/GLTools":10,"./bongiovi/Mesh":11,"./bongiovi/MeshUtils":12,"./bongiovi/QuatRotation":13,"./bongiovi/Scene":14,"./bongiovi/Scheduler":15,"./bongiovi/ShaderLibs":16,"./bongiovi/SimpleCamera":17,"./bongiovi/SimpleImageLoader":18,"./bongiovi/View":19,"./bongiovi/ViewAxis":20,"./bongiovi/ViewCopy":21,"./bongiovi/ViewDotPlanes":22,"gl-matrix":2}],2:[function(_dereq_,module,exports){
/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.1
 */

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


(function(_global) {
  "use strict";

  var shim = {};
  if (typeof(exports) === 'undefined') {
    if(typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      shim.exports = {};
      define(function() {
        return shim.exports;
      });
    } else {
      // gl-matrix lives in a browser, define its namespaces in global
      shim.exports = typeof(window) !== 'undefined' ? window : _global;
    }
  }
  else {
    // gl-matrix lives in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function(exports) {
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */


if(!GLMAT_EPSILON) {
    var GLMAT_EPSILON = 0.000001;
}

if(!GLMAT_ARRAY_TYPE) {
    var GLMAT_ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
}

if(!GLMAT_RANDOM) {
    var GLMAT_RANDOM = Math.random;
}

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

/**
 * Sets the type of array used when creating new vectors and matricies
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    GLMAT_ARRAY_TYPE = type;
}

if(typeof(exports) !== 'undefined') {
    exports.glMatrix = glMatrix;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2 Dimensional Vector
 * @name vec2
 */

var vec2 = {};

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
vec2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = 0;
    out[1] = 0;
    return out;
};

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
vec2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
vec2.fromValues = function(x, y) {
    var out = new GLMAT_ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
vec2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
};

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
vec2.set = function(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
};

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
};

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
vec2.sub = vec2.subtract;

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
};

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
vec2.mul = vec2.multiply;

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
};

/**
 * Alias for {@link vec2.divide}
 * @function
 */
vec2.div = vec2.divide;

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
vec2.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
vec2.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
vec2.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
vec2.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.distance}
 * @function
 */
vec2.dist = vec2.distance;

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec2.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
vec2.sqrDist = vec2.squaredDistance;

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
vec2.length = function (a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x*x + y*y);
};

/**
 * Alias for {@link vec2.length}
 * @function
 */
vec2.len = vec2.length;

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec2.squaredLength = function (a) {
    var x = a[0],
        y = a[1];
    return x*x + y*y;
};

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
vec2.sqrLen = vec2.squaredLength;

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
vec2.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
vec2.normalize = function(out, a) {
    var x = a[0],
        y = a[1];
    var len = x*x + y*y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
vec2.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
vec2.cross = function(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
vec2.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
vec2.random = function (out, scale) {
    scale = scale || 1.0;
    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat2d = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat3 = function(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
vec2.transformMat4 = function(out, a, m) {
    var x = a[0], 
        y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
};

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec2.forEach = (function() {
    var vec = vec2.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 2;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec2.str = function (a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec2 = vec2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3 Dimensional Vector
 * @name vec3
 */

var vec3 = {};

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
vec3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
};

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
vec3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
vec3.fromValues = function(x, y, z) {
    var out = new GLMAT_ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
vec3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
};

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
vec3.set = function(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
};

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
};

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
vec3.sub = vec3.subtract;

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
};

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
vec3.mul = vec3.multiply;

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
};

/**
 * Alias for {@link vec3.divide}
 * @function
 */
vec3.div = vec3.divide;

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
};

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
};

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
vec3.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
};

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
vec3.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
vec3.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.distance}
 * @function
 */
vec3.dist = vec3.distance;

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec3.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
vec3.sqrDist = vec3.squaredDistance;

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
vec3.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Alias for {@link vec3.length}
 * @function
 */
vec3.len = vec3.length;

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec3.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    return x*x + y*y + z*z;
};

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
vec3.sqrLen = vec3.squaredLength;

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
vec3.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
};

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
vec3.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2];
    var len = x*x + y*y + z*z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
vec3.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
vec3.cross = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2],
        bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
};

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
vec3.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
vec3.random = function (out, scale) {
    scale = scale || 1.0;

    var r = GLMAT_RANDOM() * 2.0 * Math.PI;
    var z = (GLMAT_RANDOM() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0-z*z) * scale;

    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
};

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    return out;
};

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
vec3.transformMat3 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
};

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
vec3.transformQuat = function(out, a, q) {
    // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/*
* Rotate a 3D vector around the x-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateX = function(out, a, b, c){
   var p = [], r=[];
	  //Translate point to the origin
	  p[0] = a[0] - b[0];
	  p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];

	  //perform rotation
	  r[0] = p[0];
	  r[1] = p[1]*Math.cos(c) - p[2]*Math.sin(c);
	  r[2] = p[1]*Math.sin(c) + p[2]*Math.cos(c);

	  //translate to correct position
	  out[0] = r[0] + b[0];
	  out[1] = r[1] + b[1];
	  out[2] = r[2] + b[2];

  	return out;
};

/*
* Rotate a 3D vector around the y-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateY = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[2]*Math.sin(c) + p[0]*Math.cos(c);
  	r[1] = p[1];
  	r[2] = p[2]*Math.cos(c) - p[0]*Math.sin(c);
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/*
* Rotate a 3D vector around the z-axis
* @param {vec3} out The receiving vec3
* @param {vec3} a The vec3 point to rotate
* @param {vec3} b The origin of the rotation
* @param {Number} c The angle of rotation
* @returns {vec3} out
*/
vec3.rotateZ = function(out, a, b, c){
  	var p = [], r=[];
  	//Translate point to the origin
  	p[0] = a[0] - b[0];
  	p[1] = a[1] - b[1];
  	p[2] = a[2] - b[2];
  
  	//perform rotation
  	r[0] = p[0]*Math.cos(c) - p[1]*Math.sin(c);
  	r[1] = p[0]*Math.sin(c) + p[1]*Math.cos(c);
  	r[2] = p[2];
  
  	//translate to correct position
  	out[0] = r[0] + b[0];
  	out[1] = r[1] + b[1];
  	out[2] = r[2] + b[2];
  
  	return out;
};

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec3.forEach = (function() {
    var vec = vec3.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 3;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec3.str = function (a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec3 = vec3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4 Dimensional Vector
 * @name vec4
 */

var vec4 = {};

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
vec4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
};

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
vec4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
vec4.fromValues = function(x, y, z, w) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
vec4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
vec4.set = function(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
};

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.add = function(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
};

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.subtract = function(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
};

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
vec4.sub = vec4.subtract;

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.multiply = function(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
};

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
vec4.mul = vec4.multiply;

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.divide = function(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
};

/**
 * Alias for {@link vec4.divide}
 * @function
 */
vec4.div = vec4.divide;

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.min = function(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
};

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
vec4.max = function(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
};

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
vec4.scale = function(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
};

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
vec4.scaleAndAdd = function(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
};

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
vec4.distance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.distance}
 * @function
 */
vec4.dist = vec4.distance;

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
vec4.squaredDistance = function(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1],
        z = b[2] - a[2],
        w = b[3] - a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
vec4.sqrDist = vec4.squaredDistance;

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
vec4.length = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return Math.sqrt(x*x + y*y + z*z + w*w);
};

/**
 * Alias for {@link vec4.length}
 * @function
 */
vec4.len = vec4.length;

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
vec4.squaredLength = function (a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    return x*x + y*y + z*z + w*w;
};

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
vec4.sqrLen = vec4.squaredLength;

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
vec4.negate = function(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
};

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
vec4.normalize = function(out, a) {
    var x = a[0],
        y = a[1],
        z = a[2],
        w = a[3];
    var len = x*x + y*y + z*z + w*w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
    }
    return out;
};

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
vec4.dot = function (a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
vec4.lerp = function (out, a, b, t) {
    var ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
vec4.random = function (out, scale) {
    scale = scale || 1.0;

    //TODO: This is a pretty awful way of doing this. Find something better.
    out[0] = GLMAT_RANDOM();
    out[1] = GLMAT_RANDOM();
    out[2] = GLMAT_RANDOM();
    out[3] = GLMAT_RANDOM();
    vec4.normalize(out, out);
    vec4.scale(out, out, scale);
    return out;
};

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
vec4.transformMat4 = function(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
};

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
vec4.transformQuat = function(out, a, q) {
    var x = a[0], y = a[1], z = a[2],
        qx = q[0], qy = q[1], qz = q[2], qw = q[3],

        // calculate quat * vec
        ix = qw * x + qy * z - qz * y,
        iy = qw * y + qz * x - qx * z,
        iz = qw * z + qx * y - qy * x,
        iw = -qx * x - qy * y - qz * z;

    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    return out;
};

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
vec4.forEach = (function() {
    var vec = vec4.create();

    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if(!stride) {
            stride = 4;
        }

        if(!offset) {
            offset = 0;
        }
        
        if(count) {
            l = Math.min((count * stride) + offset, a.length);
        } else {
            l = a.length;
        }

        for(i = offset; i < l; i += stride) {
            vec[0] = a[i]; vec[1] = a[i+1]; vec[2] = a[i+2]; vec[3] = a[i+3];
            fn(vec, vec, arg);
            a[i] = vec[0]; a[i+1] = vec[1]; a[i+2] = vec[2]; a[i+3] = vec[3];
        }
        
        return a;
    };
})();

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
vec4.str = function (a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.vec4 = vec4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x2 Matrix
 * @name mat2
 */

var mat2 = {};

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
mat2.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
mat2.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
};

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
mat2.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    
    return out;
};

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],

        // Calculate the determinant
        det = a0 * a3 - a2 * a1;

    if (!det) {
        return null;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2 = mat2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2d = mat2d;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3x3 Matrix
 * @name mat3
 */

var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};


if(typeof(exports) !== 'undefined') {
    exports.mat3 = mat3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4x4 Matrix
 * @name mat4
 */

var mat4 = {};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < GLMAT_EPSILON) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < GLMAT_EPSILON &&
        Math.abs(eyey - centery) < GLMAT_EPSILON &&
        Math.abs(eyez - centerz) < GLMAT_EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};


if(typeof(exports) !== 'undefined') {
    exports.mat4 = mat4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class Quaternion
 * @name quat
 */

var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[7]-m[5])*fRoot;
        out[1] = (m[2]-m[6])*fRoot;
        out[2] = (m[3]-m[1])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[k*3+j] - m[j*3+k]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }
    
    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.quat = quat;
}
;













  })(shim.exports);
})(this);

},{}],3:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Camera = function() {
	this.matrix = glm.mat4.create();
	glm.mat4.identity(this.matrix);

	this.position = glm.vec3.create();
};

var p = Camera.prototype;

p.lookAt = function(aEye, aCenter, aUp) {
	glm.vec3.copy(this.position, aEye);
	glm.mat4.identity(this.matrix);
	glm.mat4.lookAt(this.matrix, aEye, aCenter, aUp);
};

p.getMatrix = function() {
	return this.matrix;
};

module.exports = Camera;
},{"gl-matrix":2}],4:[function(_dereq_,module,exports){
// CameraPerspective.js
"use strict";

var Camera = _dereq_("./Camera");
var glm = _dereq_("gl-matrix");

var CameraPerspective = function() {
	Camera.call(this);

	this.projection = glm.mat4.create();
	this.mtxFinal = glm.mat4.create();
};

var p = CameraPerspective.prototype = new Camera();

p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
	this._fov = aFov;
	this._near = aNear;
	this._far = aFar;
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
};

p.getMatrix = function() {
	// mat4.multiply(this.mtxFinal, this.projection, this.matrix);
	return this.matrix;
};

p.resize = function(aAspectRatio) {
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, this._fov, aAspectRatio, this._near, this._far);
};

p.__defineGetter__("near", function() {
	return this._near;
});

p.__defineGetter__("far", function() {
	return this._far;
});

module.exports = CameraPerspective;
},{"./Camera":3,"gl-matrix":2}],5:[function(_dereq_,module,exports){
// EaseNumber.js

"use strict";

var Scheduler = _dereq_("./Scheduler");

function EaseNumber(mValue, mEasing) {
	this._easing = mEasing || 0.1;
	this._value = mValue;
	this._targetValue = mValue;

	Scheduler.addEF(this, this._update);
}

var p = EaseNumber.prototype;


p._update = function() {
	this._checkLimit();
	this._value += (this._targetValue - this._value) * this._easing;	
};


p.setTo = function(mValue) {
	this._targetValue = this._value = mValue;
};


p.add = function(mAdd) {
	this._targetValue += mAdd;
};

p.limit = function(mMin, mMax) {
	this._min = mMin;
	this._max = mMax;

	this._checkLimit();
};

p._checkLimit = function() {
	if(this._min !== undefined && this._targetValue < this._min) {
		this._targetValue = this._min;
	} 

	if(this._max !== undefined && this._targetValue > this._max) {
		this._targetValue = this._max;
	} 
};


p.__defineGetter__("value", function() {
	return this._value;
});


p.__defineGetter__("targetValue", function() {
	return this._targetValue;
});


p.__defineSetter__("value", function(mValue) {
	this._targetValue = mValue;
});


module.exports = EaseNumber;
},{"./Scheduler":15}],6:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Face = function(mA, mB, mC) {
	this._vertexA = mA;
	this._vertexB = mB;
	this._vertexC = mC;

	this._init();
};

var p = Face.prototype;


p._init = function() {
	var BA = glm.vec3.create();
	var CA = glm.vec3.create();
	glm.vec3.sub(BA, this._vertexB, this._vertexA);
	glm.vec3.sub(CA, this._vertexC, this._vertexA);

	this._faceNormal = glm.vec3.create();
	glm.vec3.cross(this._faceNormal, BA, CA);
	glm.vec3.normalize(this._faceNormal, this._faceNormal);
};


p.contains = function(mVertex) {
	return ( equal(mVertex, this._vertexA) || equal(mVertex, this._vertexB) || equal(mVertex, this._vertexC) );
};


p.__defineGetter__("faceNormal", function() {
	return this._faceNormal;
});

var equal = function(mV0, mV1) {
	return ( (mV0[0] === mV1[0]) && (mV0[1] === mV1[1]) && (mV0[2] === mV1[2]) );
};

module.exports = Face;
},{"gl-matrix":2}],7:[function(_dereq_,module,exports){
"use strict";

var gl, GL = _dereq_("./GLTools");
var GLTexture = _dereq_("./GLTexture");
var isPowerOfTwo = function(x) {	return !(x === 0) && !(x & (x - 1));	};

var FrameBuffer = function(width, height, options) {
	gl = GL.gl;
	options        = options || {};
	this.width     = width;
	this.height    = height;
	this.magFilter = options.magFilter || gl.LINEAR;
	this.minFilter = options.minFilter || gl.LINEAR;
	this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
	this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;

	if(!isPowerOfTwo(width) || !isPowerOfTwo(height)) {
		this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;

		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
			this.minFilter = gl.LINEAR;
		}
	} 

	this._init();
};

var p = FrameBuffer.prototype;

p._init = function() {
	this.texture            = gl.createTexture();
	
	this.glTexture			= new GLTexture(this.texture, true);
	
	this.frameBuffer        = gl.createFramebuffer();		
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
	this.frameBuffer.width  = this.width;
	this.frameBuffer.height = this.height;

	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);


	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	if(GL.depthTextureExt) {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	} else {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	}
	
	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

	// if(this.magFilter == gl.NEAREST && this.minFilter == gl.NEAREST) {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	// 	console.debug("Both Nearest", this.floatTextureExt);
	// } else {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	// }

	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
	if(GL.depthTextureExt === null) {
		var renderbuffer = gl.createRenderbuffer();
		gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
		// gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.frameBuffer.width, this.frameBuffer.height);
		// gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);	
		// if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
	 //      throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
	 //    }

	 	gl.renderbufferStorage( gl.RENDERBUFFER, gl.RGBA4, this.frameBuffer.width, this.frameBuffer.height );
	} else {
		this.depthTexture       = gl.createTexture();
		this.glDepthTexture		= new GLTexture(this.depthTexture, true);

		gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};


p.bind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
};


p.unbind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
};


p.getTexture = function() {
	return this.glTexture;
};


p.getDepthTexture = function() {
	return this.glDepthTexture;
};


p.destroy = function() {
	gl.deleteFramebuffer(this.frameBuffer);

	this.glTexture.destroy();
	if(this.glDepthTexture) {
		this.glDepthTexture.destroy();
	}
};

module.exports = FrameBuffer;
},{"./GLTexture":9,"./GLTools":10}],8:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var gl;
var ShaderLibs = _dereq_("./ShaderLibs");

var GLShader = function(aVertexShaderId, aFragmentShaderId) {
	gl              	 = GL.gl;
	this.idVertex        = aVertexShaderId;
	this.idFragment      = aFragmentShaderId;
	this.parameters      = [];
	this.uniformValues   = {};
	
	this.uniformTextures = [];
	
	this.vertexShader    = undefined;
	this.fragmentShader  = undefined;
	this._isReady        = false;
	this._loadedCount    = 0;

	if(aVertexShaderId === undefined || aVertexShaderId === null ) {
		this.createVertexShaderProgram(ShaderLibs.getShader("copyVert"));
	}

	if(aFragmentShaderId === undefined || aVertexShaderId === null ) {
		this.createFragmentShaderProgram(ShaderLibs.getShader("copyFrag"));
	}

	this.init();
};


var p = GLShader.prototype;

p.init = function() {
	if(this.idVertex && this.idVertex.indexOf("main(void)") > -1) {
		this.createVertexShaderProgram(this.idVertex);
	} else {
		this.getShader(this.idVertex, true);	
	}
	
	if(this.idFragment && this.idFragment.indexOf("main(void)") > -1) {
		this.createFragmentShaderProgram(this.idFragment);
	} else {
		this.getShader(this.idFragment, false);	
	}
};

p.getShader = function(aId, aIsVertexShader) {
	if(!aId) {return;}
	var req = new XMLHttpRequest();
	req.hasCompleted = false;
	var that = this;
	req.onreadystatechange = function(e) {
		if(e.target.readyState === 4) {
			if(aIsVertexShader) {
				that.createVertexShaderProgram(e.target.responseText);
			} else {
				that.createFragmentShaderProgram(e.target.responseText);
			}
		}
	};
	req.open("GET", aId, true);
	req.send(null);
};

p.createVertexShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.VERTEX_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Vertex Shader : ", this.idVertex, ":", gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.vertexShader = shader;
	
	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};


p.createFragmentShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Fragment Shader: ", this.idFragment, ":" , gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.fragmentShader = shader;

	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};

p.attachShaderProgram = function() {
	this._isReady = true;
	this.shaderProgram = gl.createProgram();
	gl.attachShader(this.shaderProgram, this.vertexShader);
	gl.attachShader(this.shaderProgram, this.fragmentShader);
	gl.linkProgram(this.shaderProgram);
};

p.bind = function() {
	if(!this._isReady) {return;}
	gl.useProgram(this.shaderProgram);

	if(this.shaderProgram.pMatrixUniform === undefined) {	this.shaderProgram.pMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uPMatrix");}
	if(this.shaderProgram.mvMatrixUniform === undefined) {	this.shaderProgram.mvMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uMVMatrix");}

	GL.setShader(this);
	GL.setShaderProgram(this.shaderProgram);

	this.uniformTextures = [];
};

p.isReady = function() {	return this._isReady;	};


p.clearUniforms = function() {
	this.parameters    = [];
	this.uniformValues = {};
};

p.uniform = function(aName, aType, aValue) {
	if(!this._isReady) {return;}

	if(aType === "texture") {aType = "uniform1i";}

	var hasUniform = false;
	var oUniform;
	for(var i=0; i<this.parameters.length; i++) {
		oUniform = this.parameters[i];
		if(oUniform.name === aName) {
			oUniform.value = aValue;
			hasUniform = true;
			break;
		}
	}

	if(!hasUniform) {
		this.shaderProgram[aName] = gl.getUniformLocation(this.shaderProgram, aName);
		this.parameters.push({name : aName, type: aType, value: aValue, uniformLoc: this.shaderProgram[aName]});
	} else {
		this.shaderProgram[aName] = oUniform.uniformLoc;
	}

	// console.log('Uniform : ', aName);

	if(aType.indexOf("Matrix") === -1) {
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		} else {
			if(this.checkUniform(aName, aType, aValue)) {
				gl[aType](this.shaderProgram[aName], aValue);
				// console.debug('Set uniform', aName, aType, aValue);
			}
		}
	} else {
		gl[aType](this.shaderProgram[aName], false, aValue);
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		}
	}

	if(aType === "uniform1i") {
		// Texture
		this.uniformTextures[aValue] = this.shaderProgram[aName];
	}
};

p.checkUniform = function(aName, aType, aValue) {

	if(!this.uniformValues[aName]) {
		this.uniformValues[aName] = aValue;
		return true;
	}

	if(aType === "uniform1i") {
		this.uniformValues[aName] = aValue;
		return true;
	}

	var uniformValue = this.uniformValues[aName];
	var hasChanged = !(uniformValue === aValue);
	
	if(hasChanged) {
		this.uniformValues[aName] = aValue;
	}
	return hasChanged;

};


p.unbind = function() {

};


p.destroy = function() {
	gl.detachShader(this.shaderProgram, this.vertexShader);
	gl.detachShader(this.shaderProgram, this.fragmentShader);
	gl.deleteShader(this.vertexShader);
	gl.deleteShader(this.fragmentShader);
	gl.deleteProgram(this.shaderProgram);
};

module.exports = GLShader;
},{"./GLTools":10,"./ShaderLibs":16}],9:[function(_dereq_,module,exports){
// GLTexture.js
"use strict";

var gl;
var GL = _dereq_("./GLTools");
var _isPowerOfTwo = function(x) {	
	var check = !(x === 0) && (!(x & (x - 1)));
	return check;
};
var isPowerOfTwo = function(obj) {	
	var w = obj.width || obj.videoWidth;
	var h = obj.height || obj.videoHeight;

	if(!w || !h) {return false;}

	return _isPowerOfTwo(w) && _isPowerOfTwo(h);
};

var GLTexture = function(source, isTexture, options) {
	isTexture = isTexture || false;
	options = options || {};
	gl = GL.gl;
	if(isTexture) {
		this.texture = source;
	} else {
		this._source   = source;
		this.texture   = gl.createTexture();
		this._isVideo  = (source.tagName === "VIDEO");
		this.magFilter = options.magFilter || gl.LINEAR;
		this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;
		
		this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
		this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;
		var width      = source.width || source.videoWidth;

		if(width) {
			if(!isPowerOfTwo(source)) {
				this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
				if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
					this.minFilter = gl.LINEAR;
				}
			} 	
		} else {
			this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
			if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
				this.minFilter = gl.LINEAR;
			}
		}

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapS);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapT);
		
		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
			gl.generateMipmap(gl.TEXTURE_2D);
		}

		gl.bindTexture(gl.TEXTURE_2D, null);
	}
};

var p = GLTexture.prototype;


p.updateTexture = function(source) {
	if(source){ this._source = source; }
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._source);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
};


p.bind = function(index) {
	if(index === undefined) {index = 0;}
	if(!GL.shader) {return;}

	gl.activeTexture(gl.TEXTURE0 + index);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.uniform1i(GL.shader.uniformTextures[index], index);
	this._bindIndex = index;
};


p.unbind = function() {
	gl.bindTexture(gl.TEXTURE_2D, null);
};

p.destroy = function() {
	gl.deleteTexture(this.texture);
};

module.exports = GLTexture;
},{"./GLTools":10}],10:[function(_dereq_,module,exports){
// GLTools.js
"use strict";

var glm = _dereq_("gl-matrix");

function GLTools() {
	this.aspectRatio   = 1;
	this.fieldOfView   = 45;
	this.zNear         = 5;
	this.zFar          = 3000;

	this.canvas        = null;
	this.gl            = null;

	this.shader        = null;
	this.shaderProgram = null;
}

var p = GLTools.prototype;

p.init = function(mCanvas, mWidth, mHeight, parameters) {
	this.canvas      = mCanvas || document.createElement("canvas");
	var params       = parameters || {};
	params.antialias = true;
	this.gl          = this.canvas.getContext("experimental-webgl", params);

	console.log('GL TOOLS : ', this.gl);
	
	if(mWidth !== undefined && mHeight !== undefined) {
		this.setSize(mWidth, mHeight);
	} else {
		this.setSize(window.innerWidth, window.innerHeight);	
	}

	this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.enable(this.gl.BLEND);
	this.gl.clearColor( 0, 0, 0, 1 );
	this.gl.clearDepth( 1 );

	this.matrix                = glm.mat4.create();
	glm.mat4.identity(this.matrix);
	this.normalMatrix          = glm.mat3.create();
	this.depthTextureExt       = this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
	this.floatTextureExt       = this.gl.getExtension("OES_texture_float"); // Or browser-appropriate prefix
	this.floatTextureLinearExt = this.gl.getExtension("OES_texture_float_linear"); // Or browser-appropriate prefix

	this.enabledVertexAttribute = [];
	this.enableAlphaBlending();
	this._viewport = [0, 0, this.width, this.height];
};


p.getGL = function() {	return this.gl;	};

p.setShader = function(aShader) {
	this.shader = aShader;
};

p.setShaderProgram = function(aShaderProgram) {
	this.shaderProgram = aShaderProgram;
};

p.setViewport = function(aX, aY, aW, aH) {
	var hasChanged = false;
	if(aX!==this._viewport[0]) {hasChanged = true;}
	if(aY!==this._viewport[1]) {hasChanged = true;}
	if(aW!==this._viewport[2]) {hasChanged = true;}
	if(aH!==this._viewport[3]) {hasChanged = true;}

	if(hasChanged) {
		this.gl.viewport(aX, aY, aW, aH);
		this._viewport = [aX, aY, aW, aH];
	}
};

p.setMatrices = function(aCamera) {
	this.camera = aCamera;	
};

p.rotate = function(aRotation) {
	glm.mat4.copy(this.matrix, aRotation);

	glm.mat4.multiply(this.matrix, this.camera.getMatrix(), this.matrix);
	glm.mat3.fromMat4(this.normalMatrix, this.matrix);
	glm.mat3.invert(this.normalMatrix, this.normalMatrix);
	glm.mat3.transpose(this.normalMatrix, this.normalMatrix);
};


//	BLEND MODES
p.enableAlphaBlending = function() {
	this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);	
};

p.enableAdditiveBlending = function() {
	this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
};

//	CLEAR CANVAS
p.clear = function(r, g, b, a) {
	this.gl.clearColor( r, g, b, a );
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
};

//	DRAWING ELEMENTS
p.draw = function(aMesh) {
	if(!this.shaderProgram) {
		console.warn("Shader program not ready yet");
		return;
	}

	if(!this.shaderProgram.pMatrixValue) {
		this.shaderProgram.pMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
		glm.mat4.copy(this.shaderProgram.pMatrixValue, this.camera.projection || this.camera.getMatrix());
	} else {
		var pMatrix = this.camera.projection || this.camera.getMatrix();
		if(glm.mat4.str(this.shaderProgram.pMatrixValue) !== glm.mat4.str(pMatrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
			glm.mat4.copy(this.shaderProgram.pMatrixValue, pMatrix);
		}
	}

	if(!this.shaderProgram.mvMatrixValue) {
		this.shaderProgram.mvMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
		glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
	} else {
		if(glm.mat4.str(this.shaderProgram.mvMatrixValue) !== glm.mat4.str(this.matrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
			glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
		}
	}


	// 	VERTEX POSITIONS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferPos);
	var vertexPositionAttribute = getAttribLoc(this.gl, this.shaderProgram, "aVertexPosition");
	this.gl.vertexAttribPointer(vertexPositionAttribute, aMesh.vBufferPos.itemSize, this.gl.FLOAT, false, 0, 0);
	if(this.enabledVertexAttribute.indexOf(vertexPositionAttribute) === -1) {
		this.gl.enableVertexAttribArray(vertexPositionAttribute);	
		this.enabledVertexAttribute.push(vertexPositionAttribute);
	}
	

	//	TEXTURE COORDS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferUV);
	var textureCoordAttribute = getAttribLoc(this.gl, this.shaderProgram, "aTextureCoord");
	this.gl.vertexAttribPointer(textureCoordAttribute, aMesh.vBufferUV.itemSize, this.gl.FLOAT, false, 0, 0);
	
	if(this.enabledVertexAttribute.indexOf(textureCoordAttribute) === -1) {
		this.gl.enableVertexAttribArray(textureCoordAttribute);
		this.enabledVertexAttribute.push(textureCoordAttribute);
	}

	//	INDICES
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, aMesh.iBuffer);

	//	EXTRA ATTRIBUTES
	for(var i=0; i<aMesh.extraAttributes.length; i++) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.extraAttributes[i].buffer);
		var attrPosition = getAttribLoc(this.gl, this.shaderProgram, aMesh.extraAttributes[i].name);
		this.gl.vertexAttribPointer(attrPosition, aMesh.extraAttributes[i].itemSize, this.gl.FLOAT, false, 0, 0);
		// this.gl.enableVertexAttribArray(attrPosition);	
		if(this.enabledVertexAttribute.indexOf(attrPosition) === -1) {
			this.gl.enableVertexAttribArray(attrPosition);
			this.enabledVertexAttribute.push(attrPosition);
		}	
	}

	//	DRAWING
	if(aMesh.drawType === this.gl.POINTS ) {
		this.gl.drawArrays(aMesh.drawType, 0, aMesh.vertexSize);	
	} else {
		this.gl.drawElements(aMesh.drawType, aMesh.iBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);	
	}


	function getAttribLoc(gl, shaderProgram, name) {
		if(shaderProgram.cacheAttribLoc === undefined) {	shaderProgram.cacheAttribLoc = {};	}
		if(shaderProgram.cacheAttribLoc[name] === undefined) {
			shaderProgram.cacheAttribLoc[name] = gl.getAttribLocation(shaderProgram, name);
		}

		return shaderProgram.cacheAttribLoc[name];
	}

};

//	CANVAS RESIZING
p.setSize = function(mWidth, mHeight) {
	this._width = mWidth;
	this._height = mHeight;

	this.canvas.width      = this._width;
	this.canvas.height     = this._height;
	this.gl.viewportWidth  = this._width;
	this.gl.viewportHeight = this._height;

	this.gl.viewport(0, 0, this._width, this._height);
	this.aspectRatio       = this._width / this._height;
};


p.__defineGetter__("width", function() {
	return this._width;
});

p.__defineGetter__("height", function() {
	return this._height;
});

p.__defineGetter__("viewport", function() {
	return this._viewport;
});

var instance = null;

GLTools.getInstance = function() {
	if(instance === null) {
		instance = new GLTools();
	}
	return instance;
};


module.exports = GLTools.getInstance();
},{"gl-matrix":2}],11:[function(_dereq_,module,exports){
"use strict";

var Face = _dereq_("./Face");
var GL = _dereq_("./GLTools");
var glm = _dereq_("gl-matrix");

var Mesh = function(aVertexSize, aIndexSize, aDrawType) {

	this.gl = GL.gl;
	this.vertexSize = aVertexSize;
	this.indexSize = aIndexSize;
	this.drawType = aDrawType;
	this.extraAttributes = [];
	
	this.vBufferPos = undefined;
	this._floatArrayVertex = undefined;

	this._init();
};

var p = Mesh.prototype;

p._init = function() {

};

p.bufferVertex = function(aArrayVertices, isDynamic) {
	var vertices = [];
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	this._vertices = [];

	for(var i=0; i<aArrayVertices.length; i++) {
		for(var j=0; j<aArrayVertices[i].length; j++) {
			vertices.push(aArrayVertices[i][j]);
		}
		this._vertices.push(glm.vec3.clone(aArrayVertices[i]));
	}

	if(this.vBufferPos === undefined) {
		this.vBufferPos = this.gl.createBuffer();
	}
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferPos);

	if(this._floatArrayVertex === undefined) {
		this._floatArrayVertex = new Float32Array(vertices);
	} else {
		if(aArrayVertices.length !== this._floatArrayVertex.length) {
			this._floatArrayVertex = new Float32Array(vertices);
		} else {
			for(var k=0; k<aArrayVertices.length; k++) {
				this._floatArrayVertex[k] = aArrayVertices[k];
			}
		}
	}

	this.gl.bufferData(this.gl.ARRAY_BUFFER, this._floatArrayVertex, drawType);
	this.vBufferPos.itemSize = 3;
};

p.bufferTexCoords = function(aArrayTexCoords) {
	var coords = [];

	for(var i=0; i<aArrayTexCoords.length; i++) {
		for(var j=0; j<aArrayTexCoords[i].length; j++) {
			coords.push(aArrayTexCoords[i][j]);
		}
	}

	this.vBufferUV = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferUV);
	this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(coords), this.gl.STATIC_DRAW);
	this.vBufferUV.itemSize = 2;
};

p.bufferData = function(aData, aName, aItemSize, isDynamic) {
	var index = -1;
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	var i=0;

	for(i=0; i<this.extraAttributes.length; i++) {
		if(this.extraAttributes[i].name === aName) {
			this.extraAttributes[i].data = aData;
			index = i;
			break;
		}
	}

	var bufferData = [];
	for(i=0; i<aData.length; i++) {
		for(var j=0; j<aData[i].length; j++) {
			bufferData.push(aData[i][j]);
		}
	}

	var buffer, floatArray;
	if(index === -1) {
		buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = new Float32Array(bufferData);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
		this.extraAttributes.push({name:aName, data:aData, itemSize: aItemSize, buffer:buffer, floatArray:floatArray});
	} else {
		buffer = this.extraAttributes[index].buffer;
		// console.debug("Buffer exist", buffer);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = this.extraAttributes[index].floatArray;
		for(i=0; i<bufferData.length; i++) {
			floatArray[i] = bufferData[i];
		}
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
	}

};

p.bufferIndices = function(aArrayIndices) {
	this._indices = aArrayIndices;
	this.iBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.iBuffer);
	this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(aArrayIndices), this.gl.STATIC_DRAW);
	this.iBuffer.itemSize = 1;
	this.iBuffer.numItems = aArrayIndices.length;
};


p.computeNormals = function() {
	if(this.drawType !== this.gl.TRIANGLES) {return;}

	if(this._faces === undefined) {	this._generateFaces();	}
	console.log("Start computing");

	var time = new Date().getTime();
	var j=0;

	this._normals = [];
	for(var i=0; i<this._vertices.length; i++) {
		var normal = glm.vec3.create();
		var faceCount = 0;
		for(j=0; j<this._faces.length; j++) {
			if(this._faces[j].contains(this._vertices[i])) {
				glm.vec3.add(normal, normal, this._faces[j].faceNormal);
				faceCount ++;
			}
		}

		glm.vec3.normalize(normal, normal);
		this._normals.push(normal);
	}

	this.bufferData(this._normals, "aNormal", 3);

	var totalTime = new Date().getTime() - time;
	console.log("Total Time : ", totalTime);
};


p.computeTangent = function() {
	
};


p._generateFaces = function() {
	this._faces = [];

	for(var i=0; i<this._indices.length; i+=3) {
		var p0 = this._vertices[this._indices[i+0]];
		var p1 = this._vertices[this._indices[i+1]];
		var p2 = this._vertices[this._indices[i+2]];

		this._faces.push(new Face(p0, p1, p2));
	}
};

module.exports = Mesh;
},{"./Face":6,"./GLTools":10,"gl-matrix":2}],12:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var Mesh = _dereq_("./Mesh");
var MeshUtils = {};

MeshUtils.createPlane = function(width, height, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];

	var gapX = width/numSegments;
	var gapY = height/numSegments;
	var gapUV = 1/numSegments;
	var index = 0;
	var sx = -width * 0.5;
	var sy = -height * 0.5;

	for(var i=0; i<numSegments; i++) {
		for (var j=0; j<numSegments; j++) {
			var tx = gapX * i + sx;
			var ty = gapY * j + sy;
			positions.push([tx, 		ty, 	0]);
			positions.push([tx+gapX, 	ty, 	0]);
			positions.push([tx+gapX, 	ty+gapY, 	0]);
			positions.push([tx, 		ty+gapY, 	0]);

			var u = i/numSegments;
			var v = j/numSegments;
			coords.push([u, v]);
			coords.push([u+gapUV, v]);
			coords.push([u+gapUV, v+gapUV]);
			coords.push([u, v+gapUV]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}

	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};

MeshUtils.createSphere = function(size, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;
	var gapUV = 1/numSegments;

	var getPosition = function(i, j) {	//	rx : -90 ~ 90 , ry : 0 ~ 360
		var rx = i/numSegments * Math.PI - Math.PI * 0.5;
		var ry = j/numSegments * Math.PI * 2;
		var r = size;
		var pos = [];
		pos[1] = Math.sin(rx) * r;
		var t = Math.cos(rx) * r;
		pos[0] = Math.cos(ry) * t;
		pos[2] = Math.sin(ry) * t;

		var precision = 10000;
		pos[0] = Math.floor(pos[0] * precision) / precision;
		pos[1] = Math.floor(pos[1] * precision) / precision;
		pos[2] = Math.floor(pos[2] * precision) / precision;

		return pos;
	};

	
	for(var i=0; i<numSegments; i++) {
		for(var j=0; j<numSegments; j++) {
			positions.push(getPosition(i, j));
			positions.push(getPosition(i+1, j));
			positions.push(getPosition(i+1, j+1));
			positions.push(getPosition(i, j+1));

			var u = j/numSegments;
			var v = i/numSegments;
			
			
			coords.push([1.0 - u, v]);
			coords.push([1.0 - u, v+gapUV]);
			coords.push([1.0 - u - gapUV, v+gapUV]);
			coords.push([1.0 - u - gapUV, v]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}


	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};


module.exports = MeshUtils;
},{"./GLTools":10,"./Mesh":11}],13:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

function QuatRotation(mListenerTarget) {
	if(mListenerTarget === undefined) {	mListenerTarget = document;	}
	this._isRotateZ     = 0;
	this.matrix         = glm.mat4.create();
	this.m              = glm.mat4.create();
	this._vZaxis        = glm.vec3.clone([0, 0, 0]);
	this._zAxis         = glm.vec3.clone([0, 0, -1]);
	this.preMouse       = {x:0, y:0};
	this.mouse          = {x:0, y:0};
	this._isMouseDown   = false;
	this._rotation      = glm.quat.clone([0, 0, 1, 0]);
	this.tempRotation   = glm.quat.clone([0, 0, 0, 0]);
	this._rotateZMargin = 0;
	this.diffX          = 0;
	this.diffY          = 0;
	this._currDiffX     = 0;
	this._currDiffY     = 0;
	this._offset        = 0.004;
	this._easing        = 0.1;
	this._slerp			= -1;
	this._isLocked 		= false;

	var that = this;
	mListenerTarget.addEventListener("mousedown", function(aEvent) { that._onMouseDown(aEvent); });
	mListenerTarget.addEventListener("touchstart", function(aEvent) {	that._onMouseDown(aEvent); });
	mListenerTarget.addEventListener("mouseup", function(aEvent) { that._onMouseUp(aEvent); });
	mListenerTarget.addEventListener("touchend", function(aEvent) { that._onMouseUp(aEvent); });
	mListenerTarget.addEventListener("mousemove", function(aEvent) { that._onMouseMove(aEvent); });
	mListenerTarget.addEventListener("touchmove", function(aEvent) { that._onMouseMove(aEvent); });
}


var p = QuatRotation.prototype;

p.inverseControl = function(value) {
	if(value === undefined) {	
		this._isInvert = true;	
	} else {
		this._isInvert = value;
	}
};

p.lock = function(value) {
	if(value === undefined) {	
		this._isLocked = true;	
	} else {	
		this._isLocked = value;	
	}
};

p.getMousePos = function(aEvent) {
	var mouseX, mouseY;

	if(aEvent.changedTouches !== undefined) {
		mouseX = aEvent.changedTouches[0].pageX;
		mouseY = aEvent.changedTouches[0].pageY;
	} else {
		mouseX = aEvent.clientX;
		mouseY = aEvent.clientY;
	}
	
	return {x:mouseX, y:mouseY};
};

p._onMouseDown = function(aEvent) {
	if(this._isLocked) {return;}
	if(this._isMouseDown) {return;}

	var mouse = this.getMousePos(aEvent);
	var tempRotation = glm.quat.clone(this._rotation);
	this._updateRotation(tempRotation);
	this._rotation = tempRotation;

	this._isMouseDown = true;
	this._isRotateZ = 0;
	this.preMouse = {x:mouse.x, y:mouse.y};

	if(mouse.y < this._rotateZMargin || mouse.y > (window.innerHeight - this._rotateZMargin) ) {	this._isRotateZ = 1;	}
	else if(mouse.x < this._rotateZMargin || mouse.x > (window.innerWidth - this._rotateZMargin) ) {	this._isRotateZ = 2;	}

	this._currDiffX = this.diffX = 0;
	this._currDiffY = this.diffY = 0;
};

p._onMouseMove = function(aEvent) {
	if(this._isLocked) {return;}
	if(aEvent.touches) {aEvent.preventDefault();}
	this.mouse = this.getMousePos(aEvent);
};

p._onMouseUp = function() {
	if(this._isLocked) {return;}
	if(!this._isMouseDown) {return;}
	this._isMouseDown = false;
};

p.setCameraPos = function(mQuat, speed) {
	speed             = speed || this._easing;
	this._easing      = speed;
	if(this._slerp > 0) {return;}
	
	var tempRotation  = glm.quat.clone(this._rotation);
	this._updateRotation(tempRotation);
	this._rotation    = glm.quat.clone(tempRotation);
	this._currDiffX   = this.diffX = 0;
	this._currDiffY   = this.diffY = 0;
	
	this._isMouseDown = false;
	this._isRotateZ   = 0;
	
	this._targetQuat  = glm.quat.clone(mQuat);
	this._slerp       = 1;
};

p.resetQuat = function() {
	this._rotation    = glm.quat.clone([0, 0, 1, 0]);
	this.tempRotation = glm.quat.clone([0, 0, 0, 0]);
	this._targetQuat  = undefined;
	this._slerp       = -1;
};

p.update = function() {
	glm.mat4.identity(this.m);

	if(this._targetQuat === undefined) { 
		glm.quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]);
		this._updateRotation(this.tempRotation);
	} else {
		this._slerp += (0 - this._slerp) * 0.1;

		if(this._slerp < 0.001) {
			// quat.set(this._targetQuat, this._rotation);
			glm.quat.set(this._rotation, this._targetQuat[0], this._targetQuat[1], this._targetQuat[2], this._targetQuat[3]);
			this._targetQuat = undefined;
			this._slerp = -1;
		} else {
			glm.quat.set(this.tempRotation, 0, 0, 0, 0);
			glm.quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp);
		}
	}

	glm.vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation);

	glm.mat4.fromQuat(this.matrix, this.tempRotation);
};

p._updateRotation = function(aTempRotation) {
	if(this._isMouseDown && !this._isLocked) {
		this.diffX = -(this.mouse.x - this.preMouse.x);
		this.diffY = (this.mouse.y - this.preMouse.y);

		if(this._isInvert) {
			this.diffX = -this.diffX;
			this.diffY = -this.diffY;
		}
	}
	
	this._currDiffX += (this.diffX - this._currDiffX) * this._easing;
	this._currDiffY += (this.diffY - this._currDiffY) * this._easing;

	var angle, _quat;

	if(this._isRotateZ > 0) {
		if(this._isRotateZ === 1) {
			angle = -this._currDiffX * this._offset; 
			angle *= (this.preMouse.y < this._rotateZMargin) ? -1 : 1;
			_quat = glm.quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
			glm.quat.multiply(_quat, aTempRotation, _quat);
		} else {
			angle = -this._currDiffY * this._offset; 
			angle *= (this.preMouse.x < this._rotateZMargin) ? 1 : -1;
			_quat = glm.quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
			glm.quat.multiply(_quat, aTempRotation, _quat);
		}
	} else {
		var v = glm.vec3.clone([this._currDiffX, this._currDiffY, 0]);
		var axis = glm.vec3.create();
		glm.vec3.cross(axis, v, this._zAxis);
		glm.vec3.normalize(axis, axis);
		angle = glm.vec3.length(v) * this._offset;
		_quat = glm.quat.clone( [Math.sin(angle) * axis[0], Math.sin(angle) * axis[1], Math.sin(angle) * axis[2], Math.cos(angle) ] );
		glm.quat.multiply(aTempRotation, _quat, aTempRotation);
	}

};


module.exports = QuatRotation;
},{"gl-matrix":2}],14:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var QuatRotation = _dereq_("./QuatRotation");
var Camera = _dereq_("./Camera");
var SimpleCamera = _dereq_("./SimpleCamera");
var glm = _dereq_("gl-matrix");

var Scene = function() {
	if(GL.canvas === null) {return;}
	this.gl = GL.gl;
	this._children = [];
	this._init();
};

var p = Scene.prototype;

p._init = function() {
	this.camera = new SimpleCamera(GL.canvas);
	this.camera.setPerspective(45*Math.PI/180, GL.aspectRatio, 5, 3000);
	this.camera.lockRotation();

	var eye            = glm.vec3.clone([0, 0, 500]  );
	var center         = glm.vec3.create( );
	var up             = glm.vec3.clone( [0,-1,0] );
	this.camera.lookAt(eye, center, up);
	
	this.sceneRotation = new QuatRotation(GL.canvas);
	this.rotationFront = glm.mat4.create();
	glm.mat4.identity(this.rotationFront);
	
	this.cameraOtho    = new Camera();

	// In SuperClass should call following functions.
	this._initTextures();
	this._initViews();

	window.addEventListener("resize", this._onResize.bind(this));
};

p._initTextures = function() {
	// console.log("Should be overwritten by SuperClass");
};

p._initViews = function() {
	// console.log("Should be overwritten by SuperClass");
};

p.loop = function() {
	this.update();
	this.render();
};

p.update = function() {
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	this.sceneRotation.update();
	GL.setViewport(0, 0, GL.width, GL.height);
	GL.setMatrices(this.camera );
	GL.rotate(this.sceneRotation.matrix);

};

p.resize = function() {
	if(this.camera.resize) {
		this.camera.resize(GL.aspectRatio);
	}
};

p.render = function() {

};

p._onResize = function() {
};

module.exports = Scene;
},{"./Camera":3,"./GLTools":10,"./QuatRotation":13,"./SimpleCamera":17,"gl-matrix":2}],15:[function(_dereq_,module,exports){
// Scheduler.js

"use strict";

if(window.requestAnimFrame === undefined) {
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function( callback ){
		window.setTimeout(callback, 1000 / 60);
		};
	})();
}

function Scheduler() {
	this.FRAMERATE = 60;
	this._delayTasks = [];
	this._nextTasks = [];
	this._deferTasks = [];
	this._highTasks = [];
	this._usurpTask = [];
	this._enterframeTasks = [];
	this._idTable = 0;

	window.requestAnimFrame( this._loop.bind(this) );
}

var p = Scheduler.prototype;

p._loop = function() {
	window.requestAnimFrame( this._loop.bind(this) );
	this._process();
};


p._process = function() {
	var i = 0,
		task, interval, current;
	for ( i=0; i<this._enterframeTasks.length; i++) {
		task = this._enterframeTasks[i];
		if(task !== null && task !== undefined) {
			task.func.apply(task.scope, task.params);
		}
	}
	
	while ( this._highTasks.length > 0) {
		task = this._highTasks.pop();
		task.func.apply(task.scope, task.params);
	}
	

	var startTime = new Date().getTime();

	for ( i=0; i<this._delayTasks.length; i++) {
		task = this._delayTasks[i];
		if(startTime-task.time > task.delay) {
			task.func.apply(task.scope, task.params);
			this._delayTasks.splice(i, 1);
		}
	}

	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._deferTasks.length > 0) {
		task = this._deferTasks.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			this._deferTasks.unshift(task);
			break;
		}
	}


	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._usurpTask.length > 0) {
		task = this._usurpTask.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			// this._usurpTask.unshift(task);
			break;
		}
	}



	this._highTasks = this._highTasks.concat(this._nextTasks);
	this._nextTasks = [];
	this._usurpTask = [];
};


p.addEF = function(scope, func, params) {
	params = params || [];
	var id = this._idTable;
	this._enterframeTasks[id] = {scope:scope, func:func, params:params};
	this._idTable ++;
	return id;
};


p.removeEF = function(id) {
	if(this._enterframeTasks[id] !== undefined) {
		this._enterframeTasks[id] = null;
	}
	return -1;
};


p.delay = function(scope, func, params, delay) {
	var time = new Date().getTime();
	var t = {scope:scope, func:func, params:params, delay:delay, time:time};
	this._delayTasks.push(t);
};


p.defer = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._deferTasks.push(t);
};


p.next = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._nextTasks.push(t);
};


p.usurp = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._usurpTask.push(t);
};


var instance = null;

Scheduler.getInstance = function() {
	if(instance === null) {
		instance = new Scheduler();
	}
	return instance;
};

module.exports = Scheduler.getInstance();
},{}],16:[function(_dereq_,module,exports){
"use strict";


var ShaderLibs = function() { };

ShaderLibs.shaders = {};

ShaderLibs.shaders.copyVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.generalVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    vec3 pos = aVertexPosition;\n    pos *= scale;\n    pos += position;\n    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.copyFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}";

ShaderLibs.shaders.alphaFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor.a *= opacity;\n}";

ShaderLibs.shaders.simpleColorFrag = "#define GLSLIFY 1\n\nprecision highp float;\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}";

ShaderLibs.shaders.depthFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float n;\nuniform float f;\n\nfloat getDepth(float z) {\n\treturn (6.0 * n) / (f + n - z*(f-n));\n}\n\nvoid main(void) {\n    float r = texture2D(texture, vTextureCoord).r;\n    float grey = getDepth(r);\n    gl_FragColor = vec4(grey, grey, grey, 1.0);\n}";


ShaderLibs.getShader = function(mId) {
	return this.shaders[mId];
};

ShaderLibs.get = ShaderLibs.getShader;
module.exports = ShaderLibs;
},{}],17:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");
var CameraPerspective = _dereq_("./CameraPerspective");
var EaseNumber = _dereq_("./EaseNumber");

var SimpleCamera = function(mListenerTarget) {
	this._listenerTarget = mListenerTarget || window;
	CameraPerspective.call(this);
	this._isLocked = false;
	this._init();
};

var p = SimpleCamera.prototype = new CameraPerspective();
var s = CameraPerspective.prototype;

p._init = function() {
	this.radius          = new EaseNumber(500);
	this.position[2]     = this.radius.value;
	this.center          = glm.vec3.create( );
	this.up              = glm.vec3.clone( [0,-1,0] );
	this.lookAt(this.position, this.center, this.up);
	this._mouse          = {};
	this._preMouse       = {};
	this._isMouseDown    = false;
	
	this._rx             = new EaseNumber(0);
	this._rx.limit(-Math.PI/2, Math.PI/2);
	this._ry             = new EaseNumber(0);
	this._preRX          = 0;
	this._preRY          = 0;
	this._isLocked       = false;
	this._isLockRotation = false;
	this._isInvert       = false;

	this._listenerTarget.addEventListener("mousewheel", this._onWheel.bind(this));
	this._listenerTarget.addEventListener("DOMMouseScroll", this._onWheel.bind(this));

	this._listenerTarget.addEventListener("mousedown", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("touchstart", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("mousemove", this._onMouseMove.bind(this));
	this._listenerTarget.addEventListener("touchmove", this._onMouseMove.bind(this));
	window.addEventListener("mouseup", this._onMouseUp.bind(this));
	window.addEventListener("touchend", this._onMouseUp.bind(this));
};

p.inverseControl = function(value) {
	if(value === undefined) {
		this._isInvert = true;
	} else {
		this._isInvert = value;
	}
};

p.lock = function(value) {
	if(value === undefined) {
		this._isLocked = true;
	} else {
		this._isLocked = value;
	}
};

p.lockRotation = function(value) {
	if(value === undefined) {
		this._isLockRotation = true;
	} else {
		this._isLockRotation = value;
	}
};

p._onMouseDown = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = true;
	getMouse(mEvent, this._mouse);
	getMouse(mEvent, this._preMouse);
	this._preRX = this._rx.targetValue;
	this._preRY = this._ry.targetValue;
};


p._onMouseMove = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	getMouse(mEvent, this._mouse);
	if(mEvent.touches) {mEvent.preventDefault();}
	if(this._isMouseDown) {
		var diffX = this._mouse.x - this._preMouse.x;
		if(this._isInvert) {diffX *= -1;}
		this._ry.value = this._preRY - diffX * 0.01;

		var diffY = this._mouse.y - this._preMouse.y;
		if(this._isInvert) {diffY *= -1;}
		this._rx.value = this._preRX - diffY * 0.01;

		if(this._rx.targetValue > Math.PI * 0.5) {this._rx.targetValue = Math;	}
	}
};


p._onMouseUp = function() {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = false;
	// getMouse(mEvent, this._mouse);
};


p._onWheel = function(aEvent) {
	if(this._isLocked) {	return;	}
	var w = aEvent.wheelDelta;
	var d = aEvent.detail;
	var value = 0;
	if (d){
		if (w) {
			value = w/d/40*d>0?1:-1; // Opera
		} else {
			value = -d/3;              // Firefox;         TODO: do not /3 for OS X
		}
	} else {
		value = w/120; 
	}

	// this._targetRadius -= value * 5;
	this.radius.add( -value * 5);
	
};


p.getMatrix = function() {
	this._updateCameraPosition();
	this.lookAt(this.position, this.center, this.up);
	return s.getMatrix.call(this);
};


p._updateCameraPosition = function() {
	this.position[2] 	= this.radius.value;

	this.position[1] = Math.sin(this._rx.value) * this.radius.value;
	var tr = Math.cos(this._rx.value) * this.radius.value;
	this.position[0] = Math.cos(this._ry.value + Math.PI*0.5) * tr;
	this.position[2] = Math.sin(this._ry.value + Math.PI*0.5) * tr;
};


var getMouse = function(mEvent, mTarget) {
	var o = mTarget || {};
	if(mEvent.touches) {
		o.x = mEvent.touches[0].pageX;
		o.y = mEvent.touches[0].pageY;
	} else {
		o.x = mEvent.clientX;
		o.y = mEvent.clientY;
	}

	return o;
};


p.__defineGetter__("rx", function() {
	return this._rx.targetValue;
});
 
p.__defineSetter__("rx", function(mValue) {
	this._rx.value = mValue;
});

p.__defineGetter__("ry", function() {
	return this._ry.targetValue;
});
 
p.__defineSetter__("ry", function(mValue) {
	this._ry.value = mValue;
});

module.exports = SimpleCamera;
},{"./CameraPerspective":4,"./EaseNumber":5,"gl-matrix":2}],18:[function(_dereq_,module,exports){
"use strict";

var SimpleImageLoader = function() {
	this._imgs             = {};
	this._loadedCount      = 0;
	this._toLoadCount      = 0;
	this._scope            = undefined;
	this._callback         = undefined;
	this._callbackProgress = undefined;
};

var p = SimpleImageLoader.prototype;


p.load = function(imgs, scope, callback, progressCallback) {
	this._imgs = {};
	this._loadedCount = 0;
	this._toLoadCount = imgs.length;
	this._scope = scope;
	this._callback = callback;
	this._callbackProgress = progressCallback;

	this._imgLoadedBind = this._onImageLoaded.bind(this);

	for ( var i=0; i<imgs.length ; i++) {
		var img         = new Image();
		img.onload      = this._imgLoadedBind;
		var path        = imgs[i];
		var tmp         = path.split("/");
		var ref         = tmp[tmp.length-1].split(".")[0];
		this._imgs[ref] = img;
		img.src         = path;
	}
};


p._onImageLoaded = function() {
	this._loadedCount++;

	if(this._loadedCount === this._toLoadCount) {
		this._callback.call(this._scope, this._imgs);
	} else {
		var p = this._loadedCount / this._toLoadCount;
		if(this._callbackProgress) {
			this._callbackProgress.call(this._scope, p);
		}
	}
};

module.exports = SimpleImageLoader;
},{}],19:[function(_dereq_,module,exports){
// View.js
"use strict";

var GLShader = _dereq_("./GLShader");

var View = function(aPathVert, aPathFrag) {
	this.shader = new GLShader(aPathVert, aPathFrag);
	this._init();
};

var p = View.prototype;

p._init = function() {
	// console.log("Should be overwritten by SuperClass");
};

p.render = function() {
	// console.log("Should be overwritten by SuperClass");
};

module.exports = View;


},{"./GLShader":8}],20:[function(_dereq_,module,exports){
// ViewAxis.js

"use strict";
var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var Mesh = _dereq_("./Mesh");

var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewAxis = function(lineWidth, mFragShader) {
	this.lineWidth = lineWidth === undefined ? 2.0 : lineWidth;
	var fs = mFragShader === undefined ? fragShader : mFragShader;
	View.call(this, vertShader, fs);
};

var p = ViewAxis.prototype = new View();

p._init = function() {
	// this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);

	var positions = [];
	var colors = [];
	var coords = [];
	var indices = [0, 1, 2, 3, 4, 5];
	var r = 9999;

	positions.push([-r,  0,  0]);
	positions.push([ r,  0,  0]);
	positions.push([ 0, -r,  0]);
	positions.push([ 0,  r,  0]);
	positions.push([ 0,  0, -r]);
	positions.push([ 0,  0,  r]);


	colors.push([1, 0, 0]);
	colors.push([1, 0, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 0, 1]);
	colors.push([0, 0, 1]);


	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);


	this.mesh = new Mesh(positions.length, indices.length, GL.gl.LINES);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(colors, "aColor", 3, false);
};

p.render = function() {
	if(!this.shader.isReady()) {return;}

	this.shader.bind();
	GL.gl.lineWidth(this.lineWidth);
	GL.draw(this.mesh);
	GL.gl.lineWidth(1.0);
};

module.exports = ViewAxis;

},{"./GLTools":10,"./Mesh":11,"./View":19}],21:[function(_dereq_,module,exports){
"use strict";

var View = _dereq_("./View");
var GL = _dereq_("./GLTools");
var MeshUtils = _dereq_("./MeshUtils");

var ViewCopy = function(aPathVert, aPathFrag) {
	View.call(this, aPathVert, aPathFrag);
};

var p = ViewCopy.prototype = new View();

p._init = function() {
	this.mesh = MeshUtils.createPlane(2, 2, 1);
};

p.render = function(aTexture) {
	if(!this.shader.isReady()) {return;}
	this.shader.bind();
	this.shader.uniform("texture", "uniform1i", 0);
	aTexture.bind(0);
	GL.draw(this.mesh);
};

module.exports = ViewCopy;

},{"./GLTools":10,"./MeshUtils":12,"./View":19}],22:[function(_dereq_,module,exports){
// ViewDotPlanes.js

"use strict";

var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var ShaderLibs = _dereq_("./ShaderLibs");
var Mesh = _dereq_("./Mesh");

// var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
// var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewDotPlanes = function(color, fragShader) {
	var grey = 0.75;
	this.color = color === undefined ? [grey, grey, grey] : color;
	var fs = fragShader === undefined ? ShaderLibs.get("simpleColorFrag") : fragShader;
	View.call(this, null, fs);
};

var p = ViewDotPlanes.prototype = new View();

p._init = function() {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;


	var numDots = 100;
	var size = 3000;
	var gap = size / numDots;
	var i, j;


	for(i=-size/2; i<size; i+=gap) {
		for(j=-size/2; j<size; j+=gap) {
			positions.push([i, j, 0]);
			coords.push([0, 0]);
			indices.push(index);
			index++;

			positions.push([i, 0, j]);
			coords.push([0, 0]);
			indices.push(index);
			index++;
		}
	}

	this.mesh = new Mesh(positions.length, indices.length, GL.gl.DOTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
};

p.render = function() {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", this.color);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewDotPlanes;

},{"./GLTools":10,"./Mesh":11,"./ShaderLibs":16,"./View":19}]},{},[1])(1)
});

;
    }
    det = 1.0 / det;
    
    out[0] =  a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] =  a0 * det;

    return out;
};

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
mat2.adjoint = function(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] =  a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] =  a0;

    return out;
};

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
mat2.determinant = function (a) {
    return a[0] * a[3] - a[2] * a[1];
};

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
mat2.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
};

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
mat2.mul = mat2.multiply;

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
mat2.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
};

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
mat2.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
};

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2.str = function (a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)))
};

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */

mat2.LDU = function (L, D, U, a) { 
    L[2] = a[2]/a[0]; 
    U[0] = a[0]; 
    U[1] = a[1]; 
    U[3] = a[3] - L[2] * U[1]; 
    return [L, D, U];       
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2 = mat2;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.invert = function(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3],
        atx = a[4], aty = a[5];

    var det = aa * ad - ab * ac;
    if(!det){
        return null;
    }
    det = 1.0 / det;

    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
};

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
mat2d.determinant = function (a) {
    return a[0] * a[3] - a[1] * a[2];
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mul = mat2d.multiply;


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
mat2d.rotate = function (out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        s = Math.sin(rad),
        c = Math.cos(rad);
    out[0] = a0 *  c + a2 * s;
    out[1] = a1 *  c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
mat2d.scale = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
mat2d.translate = function(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
};

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat2d.str = function (a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ')';
};

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat2d.frob = function (a) { 
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1))
}; 

if(typeof(exports) !== 'undefined') {
    exports.mat2d = mat2d;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 3x3 Matrix
 * @name mat3
 */

var mat3 = {};

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
mat3.create = function() {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
mat3.fromMat4 = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
};

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
mat3.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
mat3.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
};

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    
    return out;
};

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b01 = a22 * a11 - a12 * a21,
        b11 = -a22 * a10 + a12 * a20,
        b21 = a21 * a10 - a11 * a20,

        // Calculate the determinant
        det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
};

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
mat3.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
};

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
mat3.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
};

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
mat3.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        b00 = b[0], b01 = b[1], b02 = b[2],
        b10 = b[3], b11 = b[4], b12 = b[5],
        b20 = b[6], b21 = b[7], b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
};

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
mat3.mul = mat3.multiply;

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
mat3.translate = function(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],
        x = v[0], y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
};

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
mat3.rotate = function (out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2],
        a10 = a[3], a11 = a[4], a12 = a[5],
        a20 = a[6], a21 = a[7], a22 = a[8],

        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
mat3.scale = function(out, a, v) {
    var x = v[0], y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
};

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
mat3.fromMat2d = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;

    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;

    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
};

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
mat3.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
};

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
mat3.normalFromMat4 = function (out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
};

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat3.str = function (a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + 
                    a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + 
                    a[6] + ', ' + a[7] + ', ' + a[8] + ')';
};

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat3.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)))
};


if(typeof(exports) !== 'undefined') {
    exports.mat3 = mat3;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class 4x4 Matrix
 * @name mat4
 */

var mat4 = {};

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
mat4.create = function() {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
mat4.clone = function(a) {
    var out = new GLMAT_ARRAY_TYPE(16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
mat4.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.transpose = function(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3],
            a12 = a[6], a13 = a[7],
            a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    
    return out;
};

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.invert = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32,

        // Calculate the determinant
        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) { 
        return null; 
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
};

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
mat4.adjoint = function(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    out[0]  =  (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1]  = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2]  =  (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3]  = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4]  = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5]  =  (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6]  = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7]  =  (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8]  =  (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9]  = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] =  (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] =  (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] =  (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
};

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
mat4.determinant = function (a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15],

        b00 = a00 * a11 - a01 * a10,
        b01 = a00 * a12 - a02 * a10,
        b02 = a00 * a13 - a03 * a10,
        b03 = a01 * a12 - a02 * a11,
        b04 = a01 * a13 - a03 * a11,
        b05 = a02 * a13 - a03 * a12,
        b06 = a20 * a31 - a21 * a30,
        b07 = a20 * a32 - a22 * a30,
        b08 = a20 * a33 - a23 * a30,
        b09 = a21 * a32 - a22 * a31,
        b10 = a21 * a33 - a23 * a31,
        b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
};

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
mat4.multiply = function (out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
mat4.mul = mat4.multiply;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
mat4.translate = function (out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
mat4.scale = function(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};

/**
 * Rotates a mat4 by the given angle
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
mat4.rotate = function (out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2],
        len = Math.sqrt(x * x + y * y + z * z),
        s, c, t,
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23,
        b00, b01, b02,
        b10, b11, b12,
        b20, b21, b22;

    if (Math.abs(len) < GLMAT_EPSILON) { return null; }
    
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
    a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
    a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c; b01 = y * x * t + z * s; b02 = z * x * t - y * s;
    b10 = x * y * t - z * s; b11 = y * y * t + c; b12 = z * y * t + x * s;
    b20 = x * z * t + y * s; b21 = y * z * t - x * s; b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
};

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateX = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0]  = a[0];
        out[1]  = a[1];
        out[2]  = a[2];
        out[3]  = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateY = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];

    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4]  = a[4];
        out[5]  = a[5];
        out[6]  = a[6];
        out[7]  = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
};

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
mat4.rotateZ = function (out, a, rad) {
    var s = Math.sin(rad),
        c = Math.cos(rad),
        a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3],
        a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];

    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8]  = a[8];
        out[9]  = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }

    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
};

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
mat4.fromRotationTranslation = function (out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        xy = x * y2,
        xz = x * z2,
        yy = y * y2,
        yz = y * z2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    
    return out;
};

mat4.fromQuat = function (out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3],
        x2 = x + x,
        y2 = y + y,
        z2 = z + z,

        xx = x * x2,
        yx = y * x2,
        yy = y * y2,
        zx = z * x2,
        zy = z * y2,
        zz = z * z2,
        wx = w * x2,
        wy = w * y2,
        wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
};

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.frustum = function (out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left),
        tb = 1 / (top - bottom),
        nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.perspective = function (out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
mat4.ortho = function (out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right),
        bt = 1 / (bottom - top),
        nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
};

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
mat4.lookAt = function (out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < GLMAT_EPSILON &&
        Math.abs(eyey - centery) < GLMAT_EPSILON &&
        Math.abs(eyez - centerz) < GLMAT_EPSILON) {
        return mat4.identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
mat4.str = function (a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
                    a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
                    a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + 
                    a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
};

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
mat4.frob = function (a) {
    return(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2) ))
};


if(typeof(exports) !== 'undefined') {
    exports.mat4 = mat4;
}
;
/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

/**
 * @class Quaternion
 * @name quat
 */

var quat = {};

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
quat.create = function() {
    var out = new GLMAT_ARRAY_TYPE(4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
quat.rotationTo = (function() {
    var tmpvec3 = vec3.create();
    var xUnitVec3 = vec3.fromValues(1,0,0);
    var yUnitVec3 = vec3.fromValues(0,1,0);

    return function(out, a, b) {
        var dot = vec3.dot(a, b);
        if (dot < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.length(tmpvec3) < 0.000001)
                vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            quat.setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat.normalize(out, out);
        }
    };
})();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
quat.setAxes = (function() {
    var matr = mat3.create();

    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return quat.normalize(out, quat.fromMat3(out, matr));
    };
})();

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
quat.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
quat.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
quat.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
quat.set = vec4.set;

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
quat.identity = function(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
};

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
quat.setAxisAngle = function(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
};

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
quat.add = vec4.add;

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
quat.multiply = function(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
};

/**
 * Alias for {@link quat.multiply}
 * @function
 */
quat.mul = quat.multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
quat.scale = vec4.scale;

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateX = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateY = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        by = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
};

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
quat.rotateZ = function (out, a, rad) {
    rad *= 0.5; 

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bz = Math.sin(rad), bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
};

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
quat.calculateW = function (out, a) {
    var x = a[0], y = a[1], z = a[2];

    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = -Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
};

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
quat.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
quat.lerp = vec4.lerp;

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
quat.slerp = function (out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations

    var ax = a[0], ay = a[1], az = a[2], aw = a[3],
        bx = b[0], by = b[1], bz = b[2], bw = b[3];

    var        omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }
    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {        
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    
    return out;
};

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
quat.invert = function(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        dot = a0*a0 + a1*a1 + a2*a2 + a3*a3,
        invDot = dot ? 1.0/dot : 0;
    
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0*invDot;
    out[1] = -a1*invDot;
    out[2] = -a2*invDot;
    out[3] = a3*invDot;
    return out;
};

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
quat.conjugate = function (out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
};

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */
quat.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
quat.len = quat.length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
quat.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
quat.sqrLen = quat.squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
quat.normalize = vec4.normalize;

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
quat.fromMat3 = function(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;

    if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        out[0] = (m[7]-m[5])*fRoot;
        out[1] = (m[2]-m[6])*fRoot;
        out[2] = (m[3]-m[1])*fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if ( m[4] > m[0] )
          i = 1;
        if ( m[8] > m[i*3+i] )
          i = 2;
        var j = (i+1)%3;
        var k = (i+2)%3;
        
        fRoot = Math.sqrt(m[i*3+i]-m[j*3+j]-m[k*3+k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[k*3+j] - m[j*3+k]) * fRoot;
        out[j] = (m[j*3+i] + m[i*3+j]) * fRoot;
        out[k] = (m[k*3+i] + m[i*3+k]) * fRoot;
    }
    
    return out;
};

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */
quat.str = function (a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
};

if(typeof(exports) !== 'undefined') {
    exports.quat = quat;
}
;













  })(shim.exports);
})(this);

},{}],3:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Camera = function() {
	this.matrix = glm.mat4.create();
	glm.mat4.identity(this.matrix);

	this.position = glm.vec3.create();
};

var p = Camera.prototype;

p.lookAt = function(aEye, aCenter, aUp) {
	glm.vec3.copy(this.position, aEye);
	glm.mat4.identity(this.matrix);
	glm.mat4.lookAt(this.matrix, aEye, aCenter, aUp);
};

p.getMatrix = function() {
	return this.matrix;
};

module.exports = Camera;
},{"gl-matrix":2}],4:[function(_dereq_,module,exports){
// CameraPerspective.js
"use strict";

var Camera = _dereq_("./Camera");
var glm = _dereq_("gl-matrix");

var CameraPerspective = function() {
	Camera.call(this);

	this.projection = glm.mat4.create();
	this.mtxFinal = glm.mat4.create();
};

var p = CameraPerspective.prototype = new Camera();

p.setPerspective = function(aFov, aAspectRatio, aNear, aFar) {
	this._fov = aFov;
	this._near = aNear;
	this._far = aFar;
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, aFov, aAspectRatio, aNear, aFar);
};

p.getMatrix = function() {
	// mat4.multiply(this.mtxFinal, this.projection, this.matrix);
	return this.matrix;
};

p.resize = function(aAspectRatio) {
	this._aspect = aAspectRatio;
	glm.mat4.perspective(this.projection, this._fov, aAspectRatio, this._near, this._far);
};

p.__defineGetter__("near", function() {
	return this._near;
});

p.__defineGetter__("far", function() {
	return this._far;
});

module.exports = CameraPerspective;
},{"./Camera":3,"gl-matrix":2}],5:[function(_dereq_,module,exports){
// EaseNumber.js

"use strict";

var Scheduler = _dereq_("./Scheduler");

function EaseNumber(mValue, mEasing) {
	this._easing = mEasing || 0.1;
	this._value = mValue;
	this._targetValue = mValue;

	Scheduler.addEF(this, this._update);
}

var p = EaseNumber.prototype;


p._update = function() {
	this._checkLimit();
	this._value += (this._targetValue - this._value) * this._easing;	
};


p.setTo = function(mValue) {
	this._targetValue = this._value = mValue;
};


p.add = function(mAdd) {
	this._targetValue += mAdd;
};

p.limit = function(mMin, mMax) {
	this._min = mMin;
	this._max = mMax;

	this._checkLimit();
};

p._checkLimit = function() {
	if(this._min !== undefined && this._targetValue < this._min) {
		this._targetValue = this._min;
	} 

	if(this._max !== undefined && this._targetValue > this._max) {
		this._targetValue = this._max;
	} 
};


p.__defineGetter__("value", function() {
	return this._value;
});


p.__defineGetter__("targetValue", function() {
	return this._targetValue;
});


p.__defineSetter__("value", function(mValue) {
	this._targetValue = mValue;
});


module.exports = EaseNumber;
},{"./Scheduler":15}],6:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

var Face = function(mA, mB, mC) {
	this._vertexA = mA;
	this._vertexB = mB;
	this._vertexC = mC;

	this._init();
};

var p = Face.prototype;


p._init = function() {
	var BA = glm.vec3.create();
	var CA = glm.vec3.create();
	glm.vec3.sub(BA, this._vertexB, this._vertexA);
	glm.vec3.sub(CA, this._vertexC, this._vertexA);

	this._faceNormal = glm.vec3.create();
	glm.vec3.cross(this._faceNormal, BA, CA);
	glm.vec3.normalize(this._faceNormal, this._faceNormal);
};


p.contains = function(mVertex) {
	return ( equal(mVertex, this._vertexA) || equal(mVertex, this._vertexB) || equal(mVertex, this._vertexC) );
};


p.__defineGetter__("faceNormal", function() {
	return this._faceNormal;
});

var equal = function(mV0, mV1) {
	return ( (mV0[0] === mV1[0]) && (mV0[1] === mV1[1]) && (mV0[2] === mV1[2]) );
};

module.exports = Face;
},{"gl-matrix":2}],7:[function(_dereq_,module,exports){
"use strict";

var gl, GL = _dereq_("./GLTools");
var GLTexture = _dereq_("./GLTexture");
var isPowerOfTwo = function(x) {	return !(x === 0) && !(x & (x - 1));	};

var FrameBuffer = function(width, height, options) {
	gl = GL.gl;
	options        = options || {};
	this.width     = width;
	this.height    = height;
	this.magFilter = options.magFilter || gl.LINEAR;
	this.minFilter = options.minFilter || gl.LINEAR;
	this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
	this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;

	if(!isPowerOfTwo(width) || !isPowerOfTwo(height)) {
		this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;

		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
			this.minFilter = gl.LINEAR;
		}
	} 

	this._init();
};

var p = FrameBuffer.prototype;

p._init = function() {
	this.texture            = gl.createTexture();
	
	this.glTexture			= new GLTexture(this.texture, true);
	
	this.frameBuffer        = gl.createFramebuffer();		
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
	this.frameBuffer.width  = this.width;
	this.frameBuffer.height = this.height;

	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);


	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	if(GL.depthTextureExt) {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	} else {
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	}
	
	// gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

	// if(this.magFilter == gl.NEAREST && this.minFilter == gl.NEAREST) {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.FLOAT, null);
	// 	console.debug("Both Nearest", this.floatTextureExt);
	// } else {
	// 	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.frameBuffer.width, this.frameBuffer.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
	// }

	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
	if(GL.depthTextureExt === null) {
		var renderbuffer = gl.createRenderbuffer();
		gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
		// gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this.frameBuffer.width, this.frameBuffer.height);
		// gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);	
		// if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) != gl.FRAMEBUFFER_COMPLETE) {
	 //      throw new Error('Rendering to this texture is not supported (incomplete framebuffer)');
	 //    }

	 	gl.renderbufferStorage( gl.RENDERBUFFER, gl.RGBA4, this.frameBuffer.width, this.frameBuffer.height );
	} else {
		this.depthTexture       = gl.createTexture();
		this.glDepthTexture		= new GLTexture(this.depthTexture, true);

		gl.bindTexture(gl.TEXTURE_2D, this.depthTexture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.DEPTH_COMPONENT, this.width, this.height, 0, gl.DEPTH_COMPONENT, gl.UNSIGNED_SHORT, null);

		gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture, 0);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
	gl.bindRenderbuffer(gl.RENDERBUFFER, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};


p.bind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
};


p.unbind = function() {
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	
};


p.getTexture = function() {
	return this.glTexture;
};


p.getDepthTexture = function() {
	return this.glDepthTexture;
};


p.destroy = function() {
	gl.deleteFramebuffer(this.frameBuffer);

	this.glTexture.destroy();
	if(this.glDepthTexture) {
		this.glDepthTexture.destroy();
	}
};

module.exports = FrameBuffer;
},{"./GLTexture":9,"./GLTools":10}],8:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var gl;
var ShaderLibs = _dereq_("./ShaderLibs");

var GLShader = function(aVertexShaderId, aFragmentShaderId) {
	gl              	 = GL.gl;
	this.idVertex        = aVertexShaderId;
	this.idFragment      = aFragmentShaderId;
	this.parameters      = [];
	this.uniformValues   = {};
	
	this.uniformTextures = [];
	
	this.vertexShader    = undefined;
	this.fragmentShader  = undefined;
	this._isReady        = false;
	this._loadedCount    = 0;

	if(aVertexShaderId === undefined || aVertexShaderId === null ) {
		this.createVertexShaderProgram(ShaderLibs.getShader("copyVert"));
	}

	if(aFragmentShaderId === undefined || aVertexShaderId === null ) {
		this.createFragmentShaderProgram(ShaderLibs.getShader("copyFrag"));
	}

	this.init();
};


var p = GLShader.prototype;

p.init = function() {
	if(this.idVertex && this.idVertex.indexOf("main(void)") > -1) {
		this.createVertexShaderProgram(this.idVertex);
	} else {
		this.getShader(this.idVertex, true);	
	}
	
	if(this.idFragment && this.idFragment.indexOf("main(void)") > -1) {
		this.createFragmentShaderProgram(this.idFragment);
	} else {
		this.getShader(this.idFragment, false);	
	}
};

p.getShader = function(aId, aIsVertexShader) {
	if(!aId) {return;}
	var req = new XMLHttpRequest();
	req.hasCompleted = false;
	var that = this;
	req.onreadystatechange = function(e) {
		if(e.target.readyState === 4) {
			if(aIsVertexShader) {
				that.createVertexShaderProgram(e.target.responseText);
			} else {
				that.createFragmentShaderProgram(e.target.responseText);
			}
		}
	};
	req.open("GET", aId, true);
	req.send(null);
};

p.createVertexShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.VERTEX_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Vertex Shader : ", this.idVertex, ":", gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.vertexShader = shader;
	
	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};


p.createFragmentShaderProgram = function(aStr) {
	if(!gl) {	return;	}
	var shader = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(shader, aStr);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		console.warn("Error in Fragment Shader: ", this.idFragment, ":" , gl.getShaderInfoLog(shader));
		console.log(aStr);
		return null;
	}

	this.fragmentShader = shader;

	if(this.vertexShader !== undefined && this.fragmentShader !== undefined) {
		this.attachShaderProgram();
	}

	this._loadedCount++;
};

p.attachShaderProgram = function() {
	this._isReady = true;
	this.shaderProgram = gl.createProgram();
	gl.attachShader(this.shaderProgram, this.vertexShader);
	gl.attachShader(this.shaderProgram, this.fragmentShader);
	gl.linkProgram(this.shaderProgram);
};

p.bind = function() {
	if(!this._isReady) {return;}
	gl.useProgram(this.shaderProgram);

	if(this.shaderProgram.pMatrixUniform === undefined) {	this.shaderProgram.pMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uPMatrix");}
	if(this.shaderProgram.mvMatrixUniform === undefined) {	this.shaderProgram.mvMatrixUniform = gl.getUniformLocation(this.shaderProgram, "uMVMatrix");}

	GL.setShader(this);
	GL.setShaderProgram(this.shaderProgram);

	this.uniformTextures = [];
};

p.isReady = function() {	return this._isReady;	};


p.clearUniforms = function() {
	this.parameters    = [];
	this.uniformValues = {};
};

p.uniform = function(aName, aType, aValue) {
	if(!this._isReady) {return;}

	if(aType === "texture") {aType = "uniform1i";}

	var hasUniform = false;
	var oUniform;
	for(var i=0; i<this.parameters.length; i++) {
		oUniform = this.parameters[i];
		if(oUniform.name === aName) {
			oUniform.value = aValue;
			hasUniform = true;
			break;
		}
	}

	if(!hasUniform) {
		this.shaderProgram[aName] = gl.getUniformLocation(this.shaderProgram, aName);
		this.parameters.push({name : aName, type: aType, value: aValue, uniformLoc: this.shaderProgram[aName]});
	} else {
		this.shaderProgram[aName] = oUniform.uniformLoc;
	}

	// console.log('Uniform : ', aName);

	if(aType.indexOf("Matrix") === -1) {
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		} else {
			if(this.checkUniform(aName, aType, aValue)) {
				gl[aType](this.shaderProgram[aName], aValue);
				// console.debug('Set uniform', aName, aType, aValue);
			}
		}
	} else {
		gl[aType](this.shaderProgram[aName], false, aValue);
		if(!hasUniform) {
			gl[aType](this.shaderProgram[aName], aValue);
			this.uniformValues[aName] = aValue;
			// console.debug('Set uniform', aName, aType, aValue);
		}
	}

	if(aType === "uniform1i") {
		// Texture
		this.uniformTextures[aValue] = this.shaderProgram[aName];
	}
};

p.checkUniform = function(aName, aType, aValue) {

	if(!this.uniformValues[aName]) {
		this.uniformValues[aName] = aValue;
		return true;
	}

	if(aType === "uniform1i") {
		this.uniformValues[aName] = aValue;
		return true;
	}

	var uniformValue = this.uniformValues[aName];
	var hasChanged = !(uniformValue === aValue);
	
	if(hasChanged) {
		this.uniformValues[aName] = aValue;
	}
	return hasChanged;

};


p.unbind = function() {

};


p.destroy = function() {
	gl.detachShader(this.shaderProgram, this.vertexShader);
	gl.detachShader(this.shaderProgram, this.fragmentShader);
	gl.deleteShader(this.vertexShader);
	gl.deleteShader(this.fragmentShader);
	gl.deleteProgram(this.shaderProgram);
};

module.exports = GLShader;
},{"./GLTools":10,"./ShaderLibs":16}],9:[function(_dereq_,module,exports){
// GLTexture.js
"use strict";

var gl;
var GL = _dereq_("./GLTools");
var _isPowerOfTwo = function(x) {	
	var check = !(x === 0) && (!(x & (x - 1)));
	return check;
};
var isPowerOfTwo = function(obj) {	
	var w = obj.width || obj.videoWidth;
	var h = obj.height || obj.videoHeight;

	if(!w || !h) {return false;}

	return _isPowerOfTwo(w) && _isPowerOfTwo(h);
};

var GLTexture = function(source, isTexture, options) {
	isTexture = isTexture || false;
	options = options || {};
	gl = GL.gl;
	if(isTexture) {
		this.texture = source;
	} else {
		this._source   = source;
		this.texture   = gl.createTexture();
		this._isVideo  = (source.tagName === "VIDEO");
		this.magFilter = options.magFilter || gl.LINEAR;
		this.minFilter = options.minFilter || gl.LINEAR_MIPMAP_NEAREST;
		
		this.wrapS     = options.wrapS || gl.MIRRORED_REPEAT;
		this.wrapT     = options.wrapT || gl.MIRRORED_REPEAT;
		var width      = source.width || source.videoWidth;

		if(width) {
			if(!isPowerOfTwo(source)) {
				this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
				if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
					this.minFilter = gl.LINEAR;
				}
			} 	
		} else {
			this.wrapS = this.wrapT = gl.CLAMP_TO_EDGE;
			if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST) {
				this.minFilter = gl.LINEAR;
			}
		}

		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapS);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapT);
		
		if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
			gl.generateMipmap(gl.TEXTURE_2D);
		}

		gl.bindTexture(gl.TEXTURE_2D, null);
	}
};

var p = GLTexture.prototype;


p.updateTexture = function(source) {
	if(source){ this._source = source; }
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._source);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.magFilter);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.minFilter);
	if(this.minFilter === gl.LINEAR_MIPMAP_NEAREST)	{
		gl.generateMipmap(gl.TEXTURE_2D);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);
};


p.bind = function(index) {
	if(index === undefined) {index = 0;}
	if(!GL.shader) {return;}

	gl.activeTexture(gl.TEXTURE0 + index);
	gl.bindTexture(gl.TEXTURE_2D, this.texture);
	gl.uniform1i(GL.shader.uniformTextures[index], index);
	this._bindIndex = index;
};


p.unbind = function() {
	gl.bindTexture(gl.TEXTURE_2D, null);
};

p.destroy = function() {
	gl.deleteTexture(this.texture);
};

module.exports = GLTexture;
},{"./GLTools":10}],10:[function(_dereq_,module,exports){
// GLTools.js
"use strict";

var glm = _dereq_("gl-matrix");

function GLTools() {
	this.aspectRatio   = 1;
	this.fieldOfView   = 45;
	this.zNear         = 5;
	this.zFar          = 3000;

	this.canvas        = null;
	this.gl            = null;

	this.shader        = null;
	this.shaderProgram = null;
}

var p = GLTools.prototype;

p.init = function(mCanvas, mWidth, mHeight, parameters) {
	this.canvas      = mCanvas || document.createElement("canvas");
	var params       = parameters || {};
	params.antialias = true;
	this.gl          = this.canvas.getContext("experimental-webgl", params);

	console.log('GL TOOLS : ', this.gl);
	
	if(mWidth !== undefined && mHeight !== undefined) {
		this.setSize(mWidth, mHeight);
	} else {
		this.setSize(window.innerWidth, window.innerHeight);	
	}

	this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.enable(this.gl.BLEND);
	this.gl.clearColor( 0, 0, 0, 1 );
	this.gl.clearDepth( 1 );

	this.matrix                = glm.mat4.create();
	glm.mat4.identity(this.matrix);
	this.normalMatrix          = glm.mat3.create();
	this.depthTextureExt       = this.gl.getExtension("WEBKIT_WEBGL_depth_texture"); // Or browser-appropriate prefix
	this.floatTextureExt       = this.gl.getExtension("OES_texture_float"); // Or browser-appropriate prefix
	this.floatTextureLinearExt = this.gl.getExtension("OES_texture_float_linear"); // Or browser-appropriate prefix

	this.enabledVertexAttribute = [];
	this.enableAlphaBlending();
	this._viewport = [0, 0, this.width, this.height];
};


p.getGL = function() {	return this.gl;	};

p.setShader = function(aShader) {
	this.shader = aShader;
};

p.setShaderProgram = function(aShaderProgram) {
	this.shaderProgram = aShaderProgram;
};

p.setViewport = function(aX, aY, aW, aH) {
	var hasChanged = false;
	if(aX!==this._viewport[0]) {hasChanged = true;}
	if(aY!==this._viewport[1]) {hasChanged = true;}
	if(aW!==this._viewport[2]) {hasChanged = true;}
	if(aH!==this._viewport[3]) {hasChanged = true;}

	if(hasChanged) {
		this.gl.viewport(aX, aY, aW, aH);
		this._viewport = [aX, aY, aW, aH];
	}
};

p.setMatrices = function(aCamera) {
	this.camera = aCamera;	
};

p.rotate = function(aRotation) {
	glm.mat4.copy(this.matrix, aRotation);

	glm.mat4.multiply(this.matrix, this.camera.getMatrix(), this.matrix);
	glm.mat3.fromMat4(this.normalMatrix, this.matrix);
	glm.mat3.invert(this.normalMatrix, this.normalMatrix);
	glm.mat3.transpose(this.normalMatrix, this.normalMatrix);
};


//	BLEND MODES
p.enableAlphaBlending = function() {
	this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);	
};

p.enableAdditiveBlending = function() {
	this.gl.blendFunc(this.gl.ONE, this.gl.ONE);
};

//	CLEAR CANVAS
p.clear = function(r, g, b, a) {
	this.gl.clearColor( r, g, b, a );
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
};

//	DRAWING ELEMENTS
p.draw = function(aMesh) {
	if(!this.shaderProgram) {
		console.warn("Shader program not ready yet");
		return;
	}

	if(!this.shaderProgram.pMatrixValue) {
		this.shaderProgram.pMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
		glm.mat4.copy(this.shaderProgram.pMatrixValue, this.camera.projection || this.camera.getMatrix());
	} else {
		var pMatrix = this.camera.projection || this.camera.getMatrix();
		if(glm.mat4.str(this.shaderProgram.pMatrixValue) !== glm.mat4.str(pMatrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.pMatrixUniform, false, this.camera.projection || this.camera.getMatrix() );
			glm.mat4.copy(this.shaderProgram.pMatrixValue, pMatrix);
		}
	}

	if(!this.shaderProgram.mvMatrixValue) {
		this.shaderProgram.mvMatrixValue = glm.mat4.create();
		this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
		glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
	} else {
		if(glm.mat4.str(this.shaderProgram.mvMatrixValue) !== glm.mat4.str(this.matrix)) {
			this.gl.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, false, this.matrix );
			glm.mat4.copy(this.shaderProgram.mvMatrixValue, this.matrix);
		}
	}


	// 	VERTEX POSITIONS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferPos);
	var vertexPositionAttribute = getAttribLoc(this.gl, this.shaderProgram, "aVertexPosition");
	this.gl.vertexAttribPointer(vertexPositionAttribute, aMesh.vBufferPos.itemSize, this.gl.FLOAT, false, 0, 0);
	if(this.enabledVertexAttribute.indexOf(vertexPositionAttribute) === -1) {
		this.gl.enableVertexAttribArray(vertexPositionAttribute);	
		this.enabledVertexAttribute.push(vertexPositionAttribute);
	}
	

	//	TEXTURE COORDS
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.vBufferUV);
	var textureCoordAttribute = getAttribLoc(this.gl, this.shaderProgram, "aTextureCoord");
	this.gl.vertexAttribPointer(textureCoordAttribute, aMesh.vBufferUV.itemSize, this.gl.FLOAT, false, 0, 0);
	
	if(this.enabledVertexAttribute.indexOf(textureCoordAttribute) === -1) {
		this.gl.enableVertexAttribArray(textureCoordAttribute);
		this.enabledVertexAttribute.push(textureCoordAttribute);
	}

	//	INDICES
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, aMesh.iBuffer);

	//	EXTRA ATTRIBUTES
	for(var i=0; i<aMesh.extraAttributes.length; i++) {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, aMesh.extraAttributes[i].buffer);
		var attrPosition = getAttribLoc(this.gl, this.shaderProgram, aMesh.extraAttributes[i].name);
		this.gl.vertexAttribPointer(attrPosition, aMesh.extraAttributes[i].itemSize, this.gl.FLOAT, false, 0, 0);
		// this.gl.enableVertexAttribArray(attrPosition);	
		if(this.enabledVertexAttribute.indexOf(attrPosition) === -1) {
			this.gl.enableVertexAttribArray(attrPosition);
			this.enabledVertexAttribute.push(attrPosition);
		}	
	}

	//	DRAWING
	if(aMesh.drawType === this.gl.POINTS ) {
		this.gl.drawArrays(aMesh.drawType, 0, aMesh.vertexSize);	
	} else {
		this.gl.drawElements(aMesh.drawType, aMesh.iBuffer.numItems, this.gl.UNSIGNED_SHORT, 0);	
	}


	function getAttribLoc(gl, shaderProgram, name) {
		if(shaderProgram.cacheAttribLoc === undefined) {	shaderProgram.cacheAttribLoc = {};	}
		if(shaderProgram.cacheAttribLoc[name] === undefined) {
			shaderProgram.cacheAttribLoc[name] = gl.getAttribLocation(shaderProgram, name);
		}

		return shaderProgram.cacheAttribLoc[name];
	}

};

//	CANVAS RESIZING
p.setSize = function(mWidth, mHeight) {
	this._width = mWidth;
	this._height = mHeight;

	this.canvas.width      = this._width;
	this.canvas.height     = this._height;
	this.gl.viewportWidth  = this._width;
	this.gl.viewportHeight = this._height;

	this.gl.viewport(0, 0, this._width, this._height);
	this.aspectRatio       = this._width / this._height;
};


p.__defineGetter__("width", function() {
	return this._width;
});

p.__defineGetter__("height", function() {
	return this._height;
});

p.__defineGetter__("viewport", function() {
	return this._viewport;
});

var instance = null;

GLTools.getInstance = function() {
	if(instance === null) {
		instance = new GLTools();
	}
	return instance;
};


module.exports = GLTools.getInstance();
},{"gl-matrix":2}],11:[function(_dereq_,module,exports){
"use strict";

var Face = _dereq_("./Face");
var GL = _dereq_("./GLTools");
var glm = _dereq_("gl-matrix");

var Mesh = function(aVertexSize, aIndexSize, aDrawType) {

	this.gl = GL.gl;
	this.vertexSize = aVertexSize;
	this.indexSize = aIndexSize;
	this.drawType = aDrawType;
	this.extraAttributes = [];
	
	this.vBufferPos = undefined;
	this._floatArrayVertex = undefined;

	this._init();
};

var p = Mesh.prototype;

p._init = function() {

};

p.bufferVertex = function(aArrayVertices, isDynamic) {
	var vertices = [];
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	this._vertices = [];

	for(var i=0; i<aArrayVertices.length; i++) {
		for(var j=0; j<aArrayVertices[i].length; j++) {
			vertices.push(aArrayVertices[i][j]);
		}
		this._vertices.push(glm.vec3.clone(aArrayVertices[i]));
	}

	if(this.vBufferPos === undefined) {
		this.vBufferPos = this.gl.createBuffer();
	}
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferPos);

	if(this._floatArrayVertex === undefined) {
		this._floatArrayVertex = new Float32Array(vertices);
	} else {
		if(aArrayVertices.length !== this._floatArrayVertex.length) {
			this._floatArrayVertex = new Float32Array(vertices);
		} else {
			for(var k=0; k<aArrayVertices.length; k++) {
				this._floatArrayVertex[k] = aArrayVertices[k];
			}
		}
	}

	this.gl.bufferData(this.gl.ARRAY_BUFFER, this._floatArrayVertex, drawType);
	this.vBufferPos.itemSize = 3;
};

p.bufferTexCoords = function(aArrayTexCoords) {
	var coords = [];

	for(var i=0; i<aArrayTexCoords.length; i++) {
		for(var j=0; j<aArrayTexCoords[i].length; j++) {
			coords.push(aArrayTexCoords[i][j]);
		}
	}

	this.vBufferUV = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vBufferUV);
	this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(coords), this.gl.STATIC_DRAW);
	this.vBufferUV.itemSize = 2;
};

p.bufferData = function(aData, aName, aItemSize, isDynamic) {
	var index = -1;
	var drawType = isDynamic ? this.gl.DYNAMIC_DRAW : this.gl.STATIC_DRAW;
	var i=0;

	for(i=0; i<this.extraAttributes.length; i++) {
		if(this.extraAttributes[i].name === aName) {
			this.extraAttributes[i].data = aData;
			index = i;
			break;
		}
	}

	var bufferData = [];
	for(i=0; i<aData.length; i++) {
		for(var j=0; j<aData[i].length; j++) {
			bufferData.push(aData[i][j]);
		}
	}

	var buffer, floatArray;
	if(index === -1) {
		buffer = this.gl.createBuffer();
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = new Float32Array(bufferData);
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
		this.extraAttributes.push({name:aName, data:aData, itemSize: aItemSize, buffer:buffer, floatArray:floatArray});
	} else {
		buffer = this.extraAttributes[index].buffer;
		// console.debug("Buffer exist", buffer);
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
		floatArray = this.extraAttributes[index].floatArray;
		for(i=0; i<bufferData.length; i++) {
			floatArray[i] = bufferData[i];
		}
		this.gl.bufferData(this.gl.ARRAY_BUFFER, floatArray, drawType);
	}

};

p.bufferIndices = function(aArrayIndices) {
	this._indices = aArrayIndices;
	this.iBuffer = this.gl.createBuffer();
	this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.iBuffer);
	this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(aArrayIndices), this.gl.STATIC_DRAW);
	this.iBuffer.itemSize = 1;
	this.iBuffer.numItems = aArrayIndices.length;
};


p.computeNormals = function() {
	if(this.drawType !== this.gl.TRIANGLES) {return;}

	if(this._faces === undefined) {	this._generateFaces();	}
	console.log("Start computing");

	var time = new Date().getTime();
	var j=0;

	this._normals = [];
	for(var i=0; i<this._vertices.length; i++) {
		var normal = glm.vec3.create();
		var faceCount = 0;
		for(j=0; j<this._faces.length; j++) {
			if(this._faces[j].contains(this._vertices[i])) {
				glm.vec3.add(normal, normal, this._faces[j].faceNormal);
				faceCount ++;
			}
		}

		glm.vec3.normalize(normal, normal);
		this._normals.push(normal);
	}

	this.bufferData(this._normals, "aNormal", 3);

	var totalTime = new Date().getTime() - time;
	console.log("Total Time : ", totalTime);
};


p.computeTangent = function() {
	
};


p._generateFaces = function() {
	this._faces = [];

	for(var i=0; i<this._indices.length; i+=3) {
		var p0 = this._vertices[this._indices[i+0]];
		var p1 = this._vertices[this._indices[i+1]];
		var p2 = this._vertices[this._indices[i+2]];

		this._faces.push(new Face(p0, p1, p2));
	}
};

module.exports = Mesh;
},{"./Face":6,"./GLTools":10,"gl-matrix":2}],12:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var Mesh = _dereq_("./Mesh");
var MeshUtils = {};

MeshUtils.createPlane = function(width, height, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];

	var gapX = width/numSegments;
	var gapY = height/numSegments;
	var gapUV = 1/numSegments;
	var index = 0;
	var sx = -width * 0.5;
	var sy = -height * 0.5;

	for(var i=0; i<numSegments; i++) {
		for (var j=0; j<numSegments; j++) {
			var tx = gapX * i + sx;
			var ty = gapY * j + sy;
			positions.push([tx, 		ty, 	0]);
			positions.push([tx+gapX, 	ty, 	0]);
			positions.push([tx+gapX, 	ty+gapY, 	0]);
			positions.push([tx, 		ty+gapY, 	0]);

			var u = i/numSegments;
			var v = j/numSegments;
			coords.push([u, v]);
			coords.push([u+gapUV, v]);
			coords.push([u+gapUV, v+gapUV]);
			coords.push([u, v+gapUV]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}

	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};

MeshUtils.createSphere = function(size, numSegments) {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;
	var gapUV = 1/numSegments;

	var getPosition = function(i, j) {	//	rx : -90 ~ 90 , ry : 0 ~ 360
		var rx = i/numSegments * Math.PI - Math.PI * 0.5;
		var ry = j/numSegments * Math.PI * 2;
		var r = size;
		var pos = [];
		pos[1] = Math.sin(rx) * r;
		var t = Math.cos(rx) * r;
		pos[0] = Math.cos(ry) * t;
		pos[2] = Math.sin(ry) * t;

		var precision = 10000;
		pos[0] = Math.floor(pos[0] * precision) / precision;
		pos[1] = Math.floor(pos[1] * precision) / precision;
		pos[2] = Math.floor(pos[2] * precision) / precision;

		return pos;
	};

	
	for(var i=0; i<numSegments; i++) {
		for(var j=0; j<numSegments; j++) {
			positions.push(getPosition(i, j));
			positions.push(getPosition(i+1, j));
			positions.push(getPosition(i+1, j+1));
			positions.push(getPosition(i, j+1));

			var u = j/numSegments;
			var v = i/numSegments;
			
			
			coords.push([1.0 - u, v]);
			coords.push([1.0 - u, v+gapUV]);
			coords.push([1.0 - u - gapUV, v+gapUV]);
			coords.push([1.0 - u - gapUV, v]);

			indices.push(index*4 + 0);
			indices.push(index*4 + 1);
			indices.push(index*4 + 2);
			indices.push(index*4 + 0);
			indices.push(index*4 + 2);
			indices.push(index*4 + 3);

			index++;
		}
	}


	var mesh = new Mesh(positions.length, indices.length, GL.gl.TRIANGLES);
	mesh.bufferVertex(positions);
	mesh.bufferTexCoords(coords);
	mesh.bufferIndices(indices);

	return mesh;
};


module.exports = MeshUtils;
},{"./GLTools":10,"./Mesh":11}],13:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");

function QuatRotation(mListenerTarget) {
	if(mListenerTarget === undefined) {	mListenerTarget = document;	}
	this._isRotateZ     = 0;
	this.matrix         = glm.mat4.create();
	this.m              = glm.mat4.create();
	this._vZaxis        = glm.vec3.clone([0, 0, 0]);
	this._zAxis         = glm.vec3.clone([0, 0, -1]);
	this.preMouse       = {x:0, y:0};
	this.mouse          = {x:0, y:0};
	this._isMouseDown   = false;
	this._rotation      = glm.quat.clone([0, 0, 1, 0]);
	this.tempRotation   = glm.quat.clone([0, 0, 0, 0]);
	this._rotateZMargin = 0;
	this.diffX          = 0;
	this.diffY          = 0;
	this._currDiffX     = 0;
	this._currDiffY     = 0;
	this._offset        = 0.004;
	this._easing        = 0.1;
	this._slerp			= -1;
	this._isLocked 		= false;

	var that = this;
	mListenerTarget.addEventListener("mousedown", function(aEvent) { that._onMouseDown(aEvent); });
	mListenerTarget.addEventListener("touchstart", function(aEvent) {	that._onMouseDown(aEvent); });
	mListenerTarget.addEventListener("mouseup", function(aEvent) { that._onMouseUp(aEvent); });
	mListenerTarget.addEventListener("touchend", function(aEvent) { that._onMouseUp(aEvent); });
	mListenerTarget.addEventListener("mousemove", function(aEvent) { that._onMouseMove(aEvent); });
	mListenerTarget.addEventListener("touchmove", function(aEvent) { that._onMouseMove(aEvent); });
}


var p = QuatRotation.prototype;

p.inverseControl = function(value) {
	if(value === undefined) {	
		this._isInvert = true;	
	} else {
		this._isInvert = value;
	}
};

p.lock = function(value) {
	if(value === undefined) {	
		this._isLocked = true;	
	} else {	
		this._isLocked = value;	
	}
};

p.getMousePos = function(aEvent) {
	var mouseX, mouseY;

	if(aEvent.changedTouches !== undefined) {
		mouseX = aEvent.changedTouches[0].pageX;
		mouseY = aEvent.changedTouches[0].pageY;
	} else {
		mouseX = aEvent.clientX;
		mouseY = aEvent.clientY;
	}
	
	return {x:mouseX, y:mouseY};
};

p._onMouseDown = function(aEvent) {
	if(this._isLocked) {return;}
	if(this._isMouseDown) {return;}

	var mouse = this.getMousePos(aEvent);
	var tempRotation = glm.quat.clone(this._rotation);
	this._updateRotation(tempRotation);
	this._rotation = tempRotation;

	this._isMouseDown = true;
	this._isRotateZ = 0;
	this.preMouse = {x:mouse.x, y:mouse.y};

	if(mouse.y < this._rotateZMargin || mouse.y > (window.innerHeight - this._rotateZMargin) ) {	this._isRotateZ = 1;	}
	else if(mouse.x < this._rotateZMargin || mouse.x > (window.innerWidth - this._rotateZMargin) ) {	this._isRotateZ = 2;	}

	this._currDiffX = this.diffX = 0;
	this._currDiffY = this.diffY = 0;
};

p._onMouseMove = function(aEvent) {
	if(this._isLocked) {return;}
	if(aEvent.touches) {aEvent.preventDefault();}
	this.mouse = this.getMousePos(aEvent);
};

p._onMouseUp = function() {
	if(this._isLocked) {return;}
	if(!this._isMouseDown) {return;}
	this._isMouseDown = false;
};

p.setCameraPos = function(mQuat, speed) {
	speed             = speed || this._easing;
	this._easing      = speed;
	if(this._slerp > 0) {return;}
	
	var tempRotation  = glm.quat.clone(this._rotation);
	this._updateRotation(tempRotation);
	this._rotation    = glm.quat.clone(tempRotation);
	this._currDiffX   = this.diffX = 0;
	this._currDiffY   = this.diffY = 0;
	
	this._isMouseDown = false;
	this._isRotateZ   = 0;
	
	this._targetQuat  = glm.quat.clone(mQuat);
	this._slerp       = 1;
};

p.resetQuat = function() {
	this._rotation    = glm.quat.clone([0, 0, 1, 0]);
	this.tempRotation = glm.quat.clone([0, 0, 0, 0]);
	this._targetQuat  = undefined;
	this._slerp       = -1;
};

p.update = function() {
	glm.mat4.identity(this.m);

	if(this._targetQuat === undefined) { 
		glm.quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]);
		this._updateRotation(this.tempRotation);
	} else {
		this._slerp += (0 - this._slerp) * 0.1;

		if(this._slerp < 0.001) {
			// quat.set(this._targetQuat, this._rotation);
			glm.quat.set(this._rotation, this._targetQuat[0], this._targetQuat[1], this._targetQuat[2], this._targetQuat[3]);
			this._targetQuat = undefined;
			this._slerp = -1;
		} else {
			glm.quat.set(this.tempRotation, 0, 0, 0, 0);
			glm.quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp);
		}
	}

	glm.vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation);

	glm.mat4.fromQuat(this.matrix, this.tempRotation);
};

p._updateRotation = function(aTempRotation) {
	if(this._isMouseDown && !this._isLocked) {
		this.diffX = -(this.mouse.x - this.preMouse.x);
		this.diffY = (this.mouse.y - this.preMouse.y);

		if(this._isInvert) {
			this.diffX = -this.diffX;
			this.diffY = -this.diffY;
		}
	}
	
	this._currDiffX += (this.diffX - this._currDiffX) * this._easing;
	this._currDiffY += (this.diffY - this._currDiffY) * this._easing;

	var angle, _quat;

	if(this._isRotateZ > 0) {
		if(this._isRotateZ === 1) {
			angle = -this._currDiffX * this._offset; 
			angle *= (this.preMouse.y < this._rotateZMargin) ? -1 : 1;
			_quat = glm.quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
			glm.quat.multiply(_quat, aTempRotation, _quat);
		} else {
			angle = -this._currDiffY * this._offset; 
			angle *= (this.preMouse.x < this._rotateZMargin) ? 1 : -1;
			_quat = glm.quat.clone( [0, 0, Math.sin(angle), Math.cos(angle) ] );
			glm.quat.multiply(_quat, aTempRotation, _quat);
		}
	} else {
		var v = glm.vec3.clone([this._currDiffX, this._currDiffY, 0]);
		var axis = glm.vec3.create();
		glm.vec3.cross(axis, v, this._zAxis);
		glm.vec3.normalize(axis, axis);
		angle = glm.vec3.length(v) * this._offset;
		_quat = glm.quat.clone( [Math.sin(angle) * axis[0], Math.sin(angle) * axis[1], Math.sin(angle) * axis[2], Math.cos(angle) ] );
		glm.quat.multiply(aTempRotation, _quat, aTempRotation);
	}

};


module.exports = QuatRotation;
},{"gl-matrix":2}],14:[function(_dereq_,module,exports){
"use strict";

var GL = _dereq_("./GLTools");
var QuatRotation = _dereq_("./QuatRotation");
var Camera = _dereq_("./Camera");
var SimpleCamera = _dereq_("./SimpleCamera");
var glm = _dereq_("gl-matrix");

var Scene = function() {
	if(GL.canvas === null) {return;}
	this.gl = GL.gl;
	this._children = [];
	this._init();
};

var p = Scene.prototype;

p._init = function() {
	this.camera = new SimpleCamera(GL.canvas);
	this.camera.setPerspective(45*Math.PI/180, GL.aspectRatio, 5, 3000);
	this.camera.lockRotation();

	var eye            = glm.vec3.clone([0, 0, 500]  );
	var center         = glm.vec3.create( );
	var up             = glm.vec3.clone( [0,-1,0] );
	this.camera.lookAt(eye, center, up);
	
	this.sceneRotation = new QuatRotation(GL.canvas);
	this.rotationFront = glm.mat4.create();
	glm.mat4.identity(this.rotationFront);
	
	this.cameraOtho    = new Camera();

	// In SuperClass should call following functions.
	this._initTextures();
	this._initViews();

	window.addEventListener("resize", this._onResize.bind(this));
};

p._initTextures = function() {
	// console.log("Should be overwritten by SuperClass");
};

p._initViews = function() {
	// console.log("Should be overwritten by SuperClass");
};

p.loop = function() {
	this.update();
	this.render();
};

p.update = function() {
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	this.sceneRotation.update();
	GL.setViewport(0, 0, GL.width, GL.height);
	GL.setMatrices(this.camera );
	GL.rotate(this.sceneRotation.matrix);

};

p.resize = function() {
	if(this.camera.resize) {
		this.camera.resize(GL.aspectRatio);
	}
};

p.render = function() {

};

p._onResize = function() {
};

module.exports = Scene;
},{"./Camera":3,"./GLTools":10,"./QuatRotation":13,"./SimpleCamera":17,"gl-matrix":2}],15:[function(_dereq_,module,exports){
// Scheduler.js

"use strict";

if(window.requestAnimFrame === undefined) {
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function( callback ){
		window.setTimeout(callback, 1000 / 60);
		};
	})();
}

function Scheduler() {
	this.FRAMERATE = 60;
	this._delayTasks = [];
	this._nextTasks = [];
	this._deferTasks = [];
	this._highTasks = [];
	this._usurpTask = [];
	this._enterframeTasks = [];
	this._idTable = 0;

	window.requestAnimFrame( this._loop.bind(this) );
}

var p = Scheduler.prototype;

p._loop = function() {
	window.requestAnimFrame( this._loop.bind(this) );
	this._process();
};


p._process = function() {
	var i = 0,
		task, interval, current;
	for ( i=0; i<this._enterframeTasks.length; i++) {
		task = this._enterframeTasks[i];
		if(task !== null && task !== undefined) {
			task.func.apply(task.scope, task.params);
		}
	}
	
	while ( this._highTasks.length > 0) {
		task = this._highTasks.pop();
		task.func.apply(task.scope, task.params);
	}
	

	var startTime = new Date().getTime();

	for ( i=0; i<this._delayTasks.length; i++) {
		task = this._delayTasks[i];
		if(startTime-task.time > task.delay) {
			task.func.apply(task.scope, task.params);
			this._delayTasks.splice(i, 1);
		}
	}

	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._deferTasks.length > 0) {
		task = this._deferTasks.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			this._deferTasks.unshift(task);
			break;
		}
	}


	startTime = new Date().getTime();
	interval = 1000 / this.FRAMERATE;
	while(this._usurpTask.length > 0) {
		task = this._usurpTask.shift();
		current = new Date().getTime();
		if(current - startTime < interval ) {
			task.func.apply(task.scope, task.params);
		} else {
			// this._usurpTask.unshift(task);
			break;
		}
	}



	this._highTasks = this._highTasks.concat(this._nextTasks);
	this._nextTasks = [];
	this._usurpTask = [];
};


p.addEF = function(scope, func, params) {
	params = params || [];
	var id = this._idTable;
	this._enterframeTasks[id] = {scope:scope, func:func, params:params};
	this._idTable ++;
	return id;
};


p.removeEF = function(id) {
	if(this._enterframeTasks[id] !== undefined) {
		this._enterframeTasks[id] = null;
	}
	return -1;
};


p.delay = function(scope, func, params, delay) {
	var time = new Date().getTime();
	var t = {scope:scope, func:func, params:params, delay:delay, time:time};
	this._delayTasks.push(t);
};


p.defer = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._deferTasks.push(t);
};


p.next = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._nextTasks.push(t);
};


p.usurp = function(scope, func, params) {
	var t = {scope:scope, func:func, params:params};
	this._usurpTask.push(t);
};


var instance = null;

Scheduler.getInstance = function() {
	if(instance === null) {
		instance = new Scheduler();
	}
	return instance;
};

module.exports = Scheduler.getInstance();
},{}],16:[function(_dereq_,module,exports){
"use strict";


var ShaderLibs = function() { };

ShaderLibs.shaders = {};

ShaderLibs.shaders.copyVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.generalVert = "#define GLSLIFY 1\n\nprecision highp float;\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat4 uMVMatrix;\nuniform mat4 uPMatrix;\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    vec3 pos = aVertexPosition;\n    pos *= scale;\n    pos += position;\n    gl_Position = uPMatrix * uMVMatrix * vec4(pos, 1.0);\n    vTextureCoord = aTextureCoord;\n}";

ShaderLibs.shaders.copyFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}";

ShaderLibs.shaders.alphaFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n    gl_FragColor.a *= opacity;\n}";

ShaderLibs.shaders.simpleColorFrag = "#define GLSLIFY 1\n\nprecision highp float;\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}";

ShaderLibs.shaders.depthFrag = "#define GLSLIFY 1\n\nprecision highp float;\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\nuniform float n;\nuniform float f;\n\nfloat getDepth(float z) {\n\treturn (6.0 * n) / (f + n - z*(f-n));\n}\n\nvoid main(void) {\n    float r = texture2D(texture, vTextureCoord).r;\n    float grey = getDepth(r);\n    gl_FragColor = vec4(grey, grey, grey, 1.0);\n}";


ShaderLibs.getShader = function(mId) {
	return this.shaders[mId];
};

ShaderLibs.get = ShaderLibs.getShader;
module.exports = ShaderLibs;
},{}],17:[function(_dereq_,module,exports){
"use strict";

var glm = _dereq_("gl-matrix");
var CameraPerspective = _dereq_("./CameraPerspective");
var EaseNumber = _dereq_("./EaseNumber");

var SimpleCamera = function(mListenerTarget) {
	this._listenerTarget = mListenerTarget || window;
	CameraPerspective.call(this);
	this._isLocked = false;
	this._init();
};

var p = SimpleCamera.prototype = new CameraPerspective();
var s = CameraPerspective.prototype;

p._init = function() {
	this.radius          = new EaseNumber(500);
	this.position[2]     = this.radius.value;
	this.center          = glm.vec3.create( );
	this.up              = glm.vec3.clone( [0,-1,0] );
	this.lookAt(this.position, this.center, this.up);
	this._mouse          = {};
	this._preMouse       = {};
	this._isMouseDown    = false;
	
	this._rx             = new EaseNumber(0);
	this._rx.limit(-Math.PI/2, Math.PI/2);
	this._ry             = new EaseNumber(0);
	this._preRX          = 0;
	this._preRY          = 0;
	this._isLocked       = false;
	this._isLockRotation = false;
	this._isInvert       = false;

	this._listenerTarget.addEventListener("mousewheel", this._onWheel.bind(this));
	this._listenerTarget.addEventListener("DOMMouseScroll", this._onWheel.bind(this));

	this._listenerTarget.addEventListener("mousedown", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("touchstart", this._onMouseDown.bind(this));
	this._listenerTarget.addEventListener("mousemove", this._onMouseMove.bind(this));
	this._listenerTarget.addEventListener("touchmove", this._onMouseMove.bind(this));
	window.addEventListener("mouseup", this._onMouseUp.bind(this));
	window.addEventListener("touchend", this._onMouseUp.bind(this));
};

p.inverseControl = function(value) {
	if(value === undefined) {
		this._isInvert = true;
	} else {
		this._isInvert = value;
	}
};

p.lock = function(value) {
	if(value === undefined) {
		this._isLocked = true;
	} else {
		this._isLocked = value;
	}
};

p.lockRotation = function(value) {
	if(value === undefined) {
		this._isLockRotation = true;
	} else {
		this._isLockRotation = value;
	}
};

p._onMouseDown = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = true;
	getMouse(mEvent, this._mouse);
	getMouse(mEvent, this._preMouse);
	this._preRX = this._rx.targetValue;
	this._preRY = this._ry.targetValue;
};


p._onMouseMove = function(mEvent) {
	if(this._isLockRotation || this._isLocked) {return;}
	getMouse(mEvent, this._mouse);
	if(mEvent.touches) {mEvent.preventDefault();}
	if(this._isMouseDown) {
		var diffX = this._mouse.x - this._preMouse.x;
		if(this._isInvert) {diffX *= -1;}
		this._ry.value = this._preRY - diffX * 0.01;

		var diffY = this._mouse.y - this._preMouse.y;
		if(this._isInvert) {diffY *= -1;}
		this._rx.value = this._preRX - diffY * 0.01;

		if(this._rx.targetValue > Math.PI * 0.5) {this._rx.targetValue = Math;	}
	}
};


p._onMouseUp = function() {
	if(this._isLockRotation || this._isLocked) {return;}
	this._isMouseDown = false;
	// getMouse(mEvent, this._mouse);
};


p._onWheel = function(aEvent) {
	if(this._isLocked) {	return;	}
	var w = aEvent.wheelDelta;
	var d = aEvent.detail;
	var value = 0;
	if (d){
		if (w) {
			value = w/d/40*d>0?1:-1; // Opera
		} else {
			value = -d/3;              // Firefox;         TODO: do not /3 for OS X
		}
	} else {
		value = w/120; 
	}

	// this._targetRadius -= value * 5;
	this.radius.add( -value * 5);
	
};


p.getMatrix = function() {
	this._updateCameraPosition();
	this.lookAt(this.position, this.center, this.up);
	return s.getMatrix.call(this);
};


p._updateCameraPosition = function() {
	this.position[2] 	= this.radius.value;

	this.position[1] = Math.sin(this._rx.value) * this.radius.value;
	var tr = Math.cos(this._rx.value) * this.radius.value;
	this.position[0] = Math.cos(this._ry.value + Math.PI*0.5) * tr;
	this.position[2] = Math.sin(this._ry.value + Math.PI*0.5) * tr;
};


var getMouse = function(mEvent, mTarget) {
	var o = mTarget || {};
	if(mEvent.touches) {
		o.x = mEvent.touches[0].pageX;
		o.y = mEvent.touches[0].pageY;
	} else {
		o.x = mEvent.clientX;
		o.y = mEvent.clientY;
	}

	return o;
};


p.__defineGetter__("rx", function() {
	return this._rx.targetValue;
});
 
p.__defineSetter__("rx", function(mValue) {
	this._rx.value = mValue;
});

p.__defineGetter__("ry", function() {
	return this._ry.targetValue;
});
 
p.__defineSetter__("ry", function(mValue) {
	this._ry.value = mValue;
});

module.exports = SimpleCamera;
},{"./CameraPerspective":4,"./EaseNumber":5,"gl-matrix":2}],18:[function(_dereq_,module,exports){
"use strict";

var SimpleImageLoader = function() {
	this._imgs             = {};
	this._loadedCount      = 0;
	this._toLoadCount      = 0;
	this._scope            = undefined;
	this._callback         = undefined;
	this._callbackProgress = undefined;
};

var p = SimpleImageLoader.prototype;


p.load = function(imgs, scope, callback, progressCallback) {
	this._imgs = {};
	this._loadedCount = 0;
	this._toLoadCount = imgs.length;
	this._scope = scope;
	this._callback = callback;
	this._callbackProgress = progressCallback;

	this._imgLoadedBind = this._onImageLoaded.bind(this);

	for ( var i=0; i<imgs.length ; i++) {
		var img         = new Image();
		img.onload      = this._imgLoadedBind;
		var path        = imgs[i];
		var tmp         = path.split("/");
		var ref         = tmp[tmp.length-1].split(".")[0];
		this._imgs[ref] = img;
		img.src         = path;
	}
};


p._onImageLoaded = function() {
	this._loadedCount++;

	if(this._loadedCount === this._toLoadCount) {
		this._callback.call(this._scope, this._imgs);
	} else {
		var p = this._loadedCount / this._toLoadCount;
		if(this._callbackProgress) {
			this._callbackProgress.call(this._scope, p);
		}
	}
};

module.exports = SimpleImageLoader;
},{}],19:[function(_dereq_,module,exports){
// View.js
"use strict";

var GLShader = _dereq_("./GLShader");

var View = function(aPathVert, aPathFrag) {
	this.shader = new GLShader(aPathVert, aPathFrag);
	this._init();
};

var p = View.prototype;

p._init = function() {
	// console.log("Should be overwritten by SuperClass");
};

p.render = function() {
	// console.log("Should be overwritten by SuperClass");
};

module.exports = View;


},{"./GLShader":8}],20:[function(_dereq_,module,exports){
// ViewAxis.js

"use strict";
var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var Mesh = _dereq_("./Mesh");

var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewAxis = function(lineWidth, mFragShader) {
	this.lineWidth = lineWidth === undefined ? 2.0 : lineWidth;
	var fs = mFragShader === undefined ? fragShader : mFragShader;
	View.call(this, vertShader, fs);
};

var p = ViewAxis.prototype = new View();

p._init = function() {
	// this.mesh = bongiovi.MeshUtils.createPlane(2, 2, 1);

	var positions = [];
	var colors = [];
	var coords = [];
	var indices = [0, 1, 2, 3, 4, 5];
	var r = 9999;

	positions.push([-r,  0,  0]);
	positions.push([ r,  0,  0]);
	positions.push([ 0, -r,  0]);
	positions.push([ 0,  r,  0]);
	positions.push([ 0,  0, -r]);
	positions.push([ 0,  0,  r]);


	colors.push([1, 0, 0]);
	colors.push([1, 0, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 1, 0]);
	colors.push([0, 0, 1]);
	colors.push([0, 0, 1]);


	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);
	coords.push([0, 0]);


	this.mesh = new Mesh(positions.length, indices.length, GL.gl.LINES);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(colors, "aColor", 3, false);
};

p.render = function() {
	if(!this.shader.isReady()) {return;}

	this.shader.bind();
	GL.gl.lineWidth(this.lineWidth);
	GL.draw(this.mesh);
	GL.gl.lineWidth(1.0);
};

module.exports = ViewAxis;

},{"./GLTools":10,"./Mesh":11,"./View":19}],21:[function(_dereq_,module,exports){
"use strict";

var View = _dereq_("./View");
var GL = _dereq_("./GLTools");
var MeshUtils = _dereq_("./MeshUtils");

var ViewCopy = function(aPathVert, aPathFrag) {
	View.call(this, aPathVert, aPathFrag);
};

var p = ViewCopy.prototype = new View();

p._init = function() {
	this.mesh = MeshUtils.createPlane(2, 2, 1);
};

p.render = function(aTexture) {
	if(!this.shader.isReady()) {return;}
	this.shader.bind();
	this.shader.uniform("texture", "uniform1i", 0);
	aTexture.bind(0);
	GL.draw(this.mesh);
};

module.exports = ViewCopy;

},{"./GLTools":10,"./MeshUtils":12,"./View":19}],22:[function(_dereq_,module,exports){
// ViewDotPlanes.js

"use strict";

var GL = _dereq_("./GLTools");
var View = _dereq_("./View");
var ShaderLibs = _dereq_("./ShaderLibs");
var Mesh = _dereq_("./Mesh");

// var vertShader = "precision highp float;attribute vec3 aVertexPosition;attribute vec2 aTextureCoord;attribute vec3 aColor;uniform mat4 uMVMatrix;uniform mat4 uPMatrix;varying vec2 vTextureCoord;varying vec3 vColor;void main(void) {    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);    vTextureCoord = aTextureCoord;    vColor = aColor;}";
// var fragShader = "precision mediump float;varying vec3 vColor;void main(void) {    gl_FragColor = vec4(vColor, 1.0);}";

var ViewDotPlanes = function(color, fragShader) {
	var grey = 0.75;
	this.color = color === undefined ? [grey, grey, grey] : color;
	var fs = fragShader === undefined ? ShaderLibs.get("simpleColorFrag") : fragShader;
	View.call(this, null, fs);
};

var p = ViewDotPlanes.prototype = new View();

p._init = function() {
	var positions = [];
	var coords = [];
	var indices = [];
	var index = 0;


	var numDots = 100;
	var size = 3000;
	var gap = size / numDots;
	var i, j;


	for(i=-size/2; i<size; i+=gap) {
		for(j=-size/2; j<size; j+=gap) {
			positions.push([i, j, 0]);
			coords.push([0, 0]);
			indices.push(index);
			index++;

			positions.push([i, 0, j]);
			coords.push([0, 0]);
			indices.push(index);
			index++;
		}
	}

	this.mesh = new Mesh(positions.length, indices.length, GL.gl.DOTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
};

p.render = function() {
	this.shader.bind();
	this.shader.uniform("color", "uniform3fv", this.color);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewDotPlanes;

},{"./GLTools":10,"./Mesh":11,"./ShaderLibs":16,"./View":19}]},{},[1])(1)
});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
