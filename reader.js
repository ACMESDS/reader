// UNCLASSIFIED

/**
 * @module reader
 * @public
 * @requires base
 * @requires node-xlsx
 * @requires jsdom
 * @requires fs
 * @requires xml2js
 * @requires unoconv
 * @requires htmlparser
 * @requires office
 * @requires pdf2json
 * @requires yql
 * @requires natural
 * @requires teacher
 */
/**
	Readers are builtin [engines](/engines.view) that automatically index a variety of 
	document, graphics, presentation, and spreadsheet files when uploaded into
	**#{nick}**.  Ingested text is checked for readibility, indexed to the best
	using [NLP training rules](/admins.view), then reflected into the [file stores](/files.view).

		WEB files:
			html	- Web site
			rss	- News feed
			idop	- NTM imagery
				
		Document.Files
			bib      - BibTeX [.bib]
			doc      - Microsoft Word 97/2000/XP [.doc]
			doc6     - Microsoft Word 6.0 [.doc]
			doc95    - Microsoft Word 95 [.doc]
			docbook  - DocBook [.xml]
			docx     - Microsoft Office Open XML [.docx]
			docx7    - Microsoft Office Open XML [.docx]
			fodt     - OpenDocument Text (Flat XML) [.fodt]
			html     - HTML Document (OpenOffice.org Writer) [.html]
			latex    - LaTeX 2e [.ltx]
			mediawiki - MediaWiki [.txt]
			odt      - ODF Text Document [.odt]
			ooxml    - Microsoft Office Open XML [.xml]
			ott      - Open Document Text [.ott]
			pdb      - AportisDoc (Palm) [.pdb]
			pdf      - Portable Document Format [.pdf]
			psw      - Pocket Word [.psw]
			rtf      - Rich Text Format [.rtf]
			sdw      - StarWriter 5.0 [.sdw]
			sdw4     - StarWriter 4.0 [.sdw]
			sdw3     - StarWriter 3.0 [.sdw]
			stw      - Open Office.org 1.0 Text Document Template [.stw]
			sxw      - Open Office.org 1.0 Text Document [.sxw]
			text     - Text Encoded [.txt]
			txt      - Text [.txt]
			uot      - Unified Office Format text [.uot]
			vor      - StarWriter 5.0 Template [.vor]
			vor4     - StarWriter 4.0 Template [.vor]
			vor3     - StarWriter 3.0 Template [.vor]
			xhtml    - XHTML Document [.html]

		Graphics.Files
			bmp      - Windows Bitmap [.bmp]
			emf      - Enhanced Metafile [.emf]
			eps      - Encapsulated PostScript [.eps]
			fodg     - OpenDocument Drawing (Flat XML) [.fodg]
			gif      - Graphics Interchange Format [.gif]
			html     - HTML Document (OpenOffice.org Draw) [.html]
			jpg      - Joint Photographic Experts Group [.jpg]
			met      - OS/2 Metafile [.met]
			odd      - OpenDocument Drawing [.odd]
			otg      - OpenDocument Drawing Template [.otg]
			pbm      - Portable Bitmap [.pbm]
			pct      - Mac Pict [.pct]
			pdf      - Portable Document Format [.pdf]
			pgm      - Portable Graymap [.pgm]
			png      - Portable Network Graphic [.png]
			ppm      - Portable Pixelmap [.ppm]
			ras      - Sun Raster Image [.ras]
			std      - OpenOffice.org 1.0 Drawing Template [.std]
			svg      - Scalable Vector Graphics [.svg]
			svm      - StarView Metafile [.svm]
			swf      - Macromedia Flash (SWF) [.swf]
			sxd      - OpenOffice.org 1.0 Drawing [.sxd]
			sxd3     - StarDraw 3.0 [.sxd]
			sxd5     - StarDraw 5.0 [.sxd]
			sxw      - StarOffice XML (Draw) [.sxw]
			tiff     - Tagged Image File Format [.tiff]
			vor      - StarDraw 5.0 Template [.vor]
			vor3     - StarDraw 3.0 Template [.vor]
			wmf      - Windows Metafile [.wmf]
			xhtml    - XHTML [.xhtml]
			xpm      - X PixMap [.xpm]

		Presentation.Files
			bmp      - Windows Bitmap [.bmp]
			emf      - Enhanced Metafile [.emf]
			eps      - Encapsulated PostScript [.eps]
			fodp     - OpenDocument Presentation (Flat XML) [.fodp]
			gif      - Graphics Interchange Format [.gif]
			html     - HTML Document (OpenOffice.org Impress) [.html]
			jpg      - Joint Photographic Experts Group [.jpg]
			met      - OS/2 Metafile [.met]
			odg      - ODF Drawing (Impress) [.odg]
			odp      - ODF Presentation [.odp]
			otp      - ODF Presentation Template [.otp]
			pbm      - Portable Bitmap [.pbm]
			pct      - Mac Pict [.pct]
			pdf      - Portable Document Format [.pdf]
			pgm      - Portable Graymap [.pgm]
			png      - Portable Network Graphic [.png]
			potm     - Microsoft PowerPoint 2007/2010 XML Template [.potm]
			pot      - Microsoft PowerPoint 97/2000/XP Template [.pot]
			ppm      - Portable Pixelmap [.ppm]
			pptx     - Microsoft PowerPoint 2007/2010 XML [.pptx]
			pps      - Microsoft PowerPoint 97/2000/XP (Autoplay) [.pps]
			ppt      - Microsoft PowerPoint 97/2000/XP [.ppt]
			pwp      - PlaceWare [.pwp]
			ras      - Sun Raster Image [.ras]
			sda      - StarDraw 5.0 (OpenOffice.org Impress) [.sda]
			sdd      - StarImpress 5.0 [.sdd]
			sdd3     - StarDraw 3.0 (OpenOffice.org Impress) [.sdd]
			sdd4     - StarImpress 4.0 [.sdd]
			sxd      - OpenOffice.org 1.0 Drawing (OpenOffice.org Impress) [.sxd]
			sti      - OpenOffice.org 1.0 Presentation Template [.sti]
			svg      - Scalable Vector Graphics [.svg]
			svm      - StarView Metafile [.svm]
			swf      - Macromedia Flash (SWF) [.swf]
			sxi      - OpenOffice.org 1.0 Presentation [.sxi]
			tiff     - Tagged Image File Format [.tiff]
			uop      - Unified Office Format presentation [.uop]
			vor      - StarImpress 5.0 Template [.vor]
			vor3     - StarDraw 3.0 Template (OpenOffice.org Impress) [.vor]
			vor4     - StarImpress 4.0 Template [.vor]
			vor5     - StarDraw 5.0 Template (OpenOffice.org Impress) [.vor]
			wmf      - Windows Metafile [.wmf]
			xhtml    - XHTML [.xml]
			xpm      - X PixMap [.xpm]

		Spreadsheet.Files
			csv      - Text CSV [.csv]
			dbf      - dBASE [.dbf]
			dif      - Data Interchange Format [.dif]
			fods     - OpenDocument Spreadsheet (Flat XML) [.fods]
			html     - HTML Document (OpenOffice.org Calc) [.html]
			ods      - ODF Spreadsheet [.ods]
			ooxml    - Microsoft Excel 2003 XML [.xml]
			ots      - ODF Spreadsheet Template [.ots]
			pdf      - Portable Document Format [.pdf]
			pxl      - Pocket Excel [.pxl]
			sdc      - StarCalc 5.0 [.sdc]
			sdc4     - StarCalc 4.0 [.sdc]
			sdc3     - StarCalc 3.0 [.sdc]
			slk      - SYLK [.slk]
			stc      - OpenOffice.org 1.0 Spreadsheet Template [.stc]
			sxc      - OpenOffice.org 1.0 Spreadsheet [.sxc]
			uos      - Unified Office Format spreadsheet [.uos]
			vor3     - StarCalc 3.0 Template [.vor]
			vor4     - StarCalc 4.0 Template [.vor]
			vor      - StarCalc 5.0 Template [.vor]
			xhtml    - XHTML [.xhtml]
			xls      - Microsoft Excel 97/2000/XP [.xls]
			xls5     - Microsoft Excel 5.0 [.xls]
			xls95    - Microsoft Excel 95 [.xls]
			xlt      - Microsoft Excel 97/2000/XP Template [.xlt]
			xlt5     - Microsoft Excel 5.0 Template [.xlt]
			xlt95    - Microsoft Excel 95 Template [.xlt]
 
*/

var 										// Interface
	ENV = process.env,
	SLASH = "/",
	DOT = ".";

var  										// external Bindings
	EXCEL = require('node-xlsx'),			// Excel parser
	JSDOM = require('jsdom'),				// Web site crawler	
	//XMLP = require("htmlparser"),			// HTML parser
	//OO = require('office'),				// Open Office parser
	PDFP = require('pdf2json/pdfparser'), 	// PDF parser
	YQL = require('yql'),					// Cooperating site scrapper
	NLP = require('natural'),				// Natural Language Parsing (Bayes or Logireg)
	LDA = require('lda'), 					// NLP (via Latent Dirichlet Allocation)
	SPELL = require('teacher'),				// Spell checker 
	UNO = require('unoconv'); 				// File converter/reader

var 										// geonode bindings
	RDR = module.exports = require("enum").config({
		idop	: idop_Reader,
		xlsx	: xlsx_Reader,	
		text	: txt_Reader,	
		html	: html_Reader,
		yql		: yql_Reader,
		odt		: ood_Reader,
		odp		: oop_Reader,
		ods		: oos_Reader,
		pdf		: pdf_Reader,
		db		: db_Reader,
		jpg		: jpg_Reader,
		xml		: xml_Reader,
		py		: py_Reader,
		js		: js_Reader,
		db		: db_Reader,
		jade	: jade_Reader,
		config	: config_Reader,
		job		: job_Reader,
		enabled : true,
		trace 	: false,
		classif	: ENV.READER		// Use Bayes classifier.  Logireg also possible.  LDA not support
					? NLP.BayesClassifier.restore(JSON.parse(FS.readFileSync(ENV.READER)))
					: new NLP.BayesClassifier(),
		minTextLen : 10,				// Min text length to trigger indexing
		minReadability : -9999,			// Min readability score to trigger NLP
		minRelevance: 0.0, 				// Min NLP relevance to tripper intake
		spellRubric: {
			"spelling": 3,
			"suggestion": 1,
			"grammar": 2
		}
	});

var
	geoCHIP = require('geochip'), 			// IDOP workflow chipper+detector
	FS = geoCHIP.FS, //require('fs'),			// File system
	XML2JS = geoCHIP.XML2JS; //require('xml2js'), 	// XML2JS reader	
	//EVENT = require('geonode/evlog'), 	// Event logger
	//BASE = require('geonode/base'); 		// Base methods and prototypes

function config_Reader (sql) {
	sql.query('SELECT * FROM nlprules WHERE Enabled')
	.on('error', function (err) {
		console.info('Cant get NLP rule - '+err);
	})
	.on('result', function (rule) {
		RDR.classif.addDocument(rule.Usecase.toUpperCase(), rule.Index);
	})
	.on('end', function () {
		RDR.classif.train();
		
		if (RDR.trace) {
			var Trials = [
				'Windows 64 bit is a fine Operating System',
				'i would like a circular polarized beam please',
				'this algorithm is still highly experimental',
				'i need more hyperspectral data'];
			
			RDR.each(Trials, function (n,trial) {
				console.info(trial+" -> ");
				console.log(RDR.classif.getClassifications(trial));
			});
		}
		
		RDR.idxs = RDR.classif.getClassifications("test");
		
		if(ENV.READER)
			RDR.classif.save(ENV.READER, function(err, classifier) {
				if (err) 
				console.info('Cant save NLP trainging state - '+err);
			});			
	});
}

String.prototype.cleaner = function () {	
	return this
			.toUpperCase()
			.replace(/\t/gm,"")
			.replace(/^#*/gm,"")
			.replace(/\n/gm," ")
			.replace(/<BR>/g," ")
			.replace(/\&NBSP;/g," ")
			.replace(/,/g,".")
			.replace(/:/g,".")
			.replace(/;/g,".")
			.replace(/ AND /g,".")
			.replace(/ OR /g,".")
			.replace(/ THEN /g,".")
			.replace(/ IF /g,".")
			.replace(/ BECAUSE /g,".")
			.replace(/ WHEN /g,".")
			.replace(/  /g," ");
}

String.prototype.splitter = function () {
	return this.match( /[^\.!\?]+[\.!\?]+/g );
}

String.prototype.indexor = function (score,cb) {
	var rubric = RDR.spellRubric,
		classify = RDR.classif,
		text = this+"";
	
	if (text.length > RDR.minTextLen)
		SPELL.check( text, function (err,checks) {
		
			if (!checks || err) checks = [];

			RDR.each(checks, function (n,check) {
				score.Readability -= rubric[check.type];
			});

			//console.log([text, score.Readability, RDR.minReadability]);
			
			if (score.Readability > RDR.minReadability)
				text.splitter().each( function (n,frag) {
					//console.log([n,frag]);
					
					if (frag) 								// discard empties
						if (frag.indexOf("<") < 0) 			// discard html (yes - a stupid filter)
							classify.getClassifications(frag).each( function (m,idx) {
								//console.log([frag,idx.value,idx.label,RDR.minRelevance]);
								if (idx.value > RDR.minRelevance) 		// discard irrelevant
									score[idx.label] += idx.value;
							});
				});
			
			cb();
		});
}

function db_Reader(sql,path,cb) {
	sql.query("SELECT * FROM ??", path, function (recs) {
		cb(JSON.stringify(recs));
	});
}

function jpg_Reader(sql,path,cb) {		
}

function xlsx_Reader(sql,path,cb) {
	var sheets = EXCEL.parse(path).worksheets;
	
	// For some reason EXCEL returns arrays that cant be enumerated with EACH().
	
	for (var n=0,N=sheets.length; n<N; n++) {  // sheet - no formulas allowed
		var sheet = sheets[n];
		var vars = new Array(sheet.maxCol);
		var data = sheet.data;
		
//console.log("sheet="+sheet.name+" rows="+data.length);

		for (var k=0,K=data.length; k<K; k++) {
			var cell = data[k];
			var rec = {ID:k};
		
			if (k==0) // 1st record is the header containing field names
				for (var i=0,I=cell.length; i<I; i++) 
					vars[i] = cell[i].value;
					
			else {	// following records contain data
				for (var i=0,I=cell.length; i<I; i++) 
					rec[vars[i]] = cell[i].value;
			
				cb(rec);
			}
		}
	}
}

function txt_Reader(sql,path,cb) {
	try {
		cb( FS.readFileSync(path,'utf8') );
	} catch (err) {};
}

function py_Reader(sql,path,cb) {
	try {
		sql.query("UPDATE engines SET ? WHERE least(?)",[
				{Code:FS.readFileSync(path,'utf8')},
				{Name:job, Engine:"python"}]);
	} catch (err) {};
}

function js_Reader(sql,path,cb) {
	try {
		sql.query("UPDATE engines SET ? WHERE least(?)",[
				{Code:FS.readFileSync(path,'utf8')},
				{Name:job, Engine:"js"}]);
	} catch (err) {};
			
}

function jade_Reader(sql,path,cb) {
	try {
		sql.query("UPDATE engines SET ? WHERE least(?)",[
				{Code:FS.readFileSync(path,'utf8')},
				{Name:job, Engine:"jade"}]);
	} catch (err) {};
			
}

function oop_Reader(sql,path,cb) {	
}

function oos_Reader(sql,path,cb) {	
	UNO.convert(path, "ooxml", {output:ENV.PUBLIC+"tmp/"+path}, function (err,data) {
		FS.readFile(ENV.PUBLIC+"tmp/"+path, 'utf-8', function (err,data) {
			XML2JS.parseString(data, function (err,json) {
//console.log(json);
				RDR.each(json["Workbook"]["ss:Worksheet"], function (n,sheet) {
console.log(sheet);
				RDR.each(sheet["Table"], function (n,table) {
					if (n==0) {
console.log(table);
						var col = table.Column, row = table.Row;
//console.log(row);
//console.log(col);
					}
				}); });
			});		
		});
	}); 
}

function ood_Reader(sql,path,cb) {	

	if (false) { 	// retains 1st image in folder=~/tmp
		var handler = new XMLP.DefaultHandler(function (error, dom) {
			var ELS = XMLP.DomUtils.getElements();
			var IMG = XMLP.DomUtils.getElementsByTagName("IMG", dom);
			var HTML = XMLP.DomUtils.getElementsByTagName("HTML", dom);
			var P = XMLP.DomUtils.getElementsByTagName("P", dom); //[0].children[0].raw;
		});
		OO.parse(path, {img:true}, function(err, filepath) {  // output=~/
			FS.readFile(filepath, 'utf-8', function(err, data) {
				var parser = new XMLP.Parser(handler);
				parser.parseComplete(data);
			});
		});
	}
	else
	if (false) {  	// drop images (output to stdout)
		var handler = new XMLP.DefaultHandler(function (error, dom) {
			var ELS = XMLP.DomUtils.getElements();
			console.log("xmlp err="+error+" els="+ELS.length);

			var IMG = XMLP.DomUtils.getElementsByTagName("IMG", dom);
			console.log("IMG="+IMG);
			
			var HTML = XMLP.DomUtils.getElementsByTagName("HTML", dom);
			console.log("HTML=");
			console.log(HTML);
			
			var P = XMLP.DomUtils.getElementsByTagName("P", dom); //[0].children[0].raw;
			console.log("P=");
			//console.log(P);
		});
			
		OO.parse(path, function(err, data) {
			var parser = new XMLP.Parser(handler);
			parser.parseComplete(data);			
		});	
	}		
	else 			// use ooxml (UNO has problems with xml)  retains 1st image in public/tmp
		UNO.convert(path, "ooxml", {output:ENV.PUBLIC+"tmp/"+path}, function (err,data) {
			FS.readFile(ENV.PUBLIC+"tmp/"+path, 'utf-8', function (err,data) {
				XML2JS.parseString(data, function (err,json) {
					RDR.each(json["w:wordDocument"]["w:body"], function (n,body) {
					RDR.each(body["w:p"], function (n,para) {
					RDR.each(para["w:r"], function (n,recd) {
					RDR.each(recd["w:t"], function (n,text) {
						cb({Text: text});
					}); }); }); });
				});					
			});
		}); 
}

function xml_Reader(sql,path,cb) { 
	FS.readFile(path,'utf-8', function (err,data) {
		XML2JS.parseString(data, function (err,json) {
			for (var n in json) console.log(json);
		});
	});
}

function pdf_Reader(sql,path,cb) {
	var PDF = new PDFP();
						
	PDF
	.on("pdfParser_dataReady", function(evtData) {
		if ((!!evtData) && (!!evtData.data))  {
			var npages=evtData.data.Pages.length;
			var text = "";

			RDR.each(evtData.data.Pages, function (pn,page) {
				RDR.each(page.Texts, function (tn,txt) {
					RDR.each(txt.R, function (rn,report) {
						text += unescape(report.T)+" ";
					});
				});
			});

			console.log("PDF INGESTED "+npages+" pages "+text.length+" chars");
				
			cb(text);
		}
	})
	.on("pdfParser_dataError", function(evtData) {
		console.log("PDF ERROR "+evtData.data);
	});
	
	PDF.loadPDF(path);
}

function html_Reader(sql,path,cb) {
	
	function reportify(File,Post) {
		var Xlate = {
			AR: "State0", 	// advisory
			PR: "State1",	// test plan
			RR: "State2",	// test readiness
			TR: "State3",	// test report
			UR: "State4",	// user review
			ER: "State5", 	// independent eval
			MR: "State6",	// memo of understanding
			DR:	"State7",	// developers report
			OR:	"State8",	// operational test & eval
			SR: "State9"	// security report
		};
		
		if (!File) return Xlate[Post];
		
		var Script = "JAVASCRIPT:";
		var Query = File.toUpperCase().split("?");
		var Parms = (Query.length>1) ? Query[Query.length-1] : "";
		var Names = Query[0].split("/");
		var Parts = Names[Names.length-1].split(".");
		var Name = unescape(Parts[0]);
		var Type = (Parts.length>1) ? Parts[Parts.length-1] : "";
		var Report = Post;
		
		if (Query[0].substr(0,Script.length) == Script) return null;
		
		switch (Type) {
			case "PHP":		// ignore things that dont look like relevant files
			case "HTM":
			case "HTML":
			case "INTEL":
			case "ASP":
			case "ASPX":
				Report = Parms.has("DOCUMENTID=") ? "DR" : null;
				break;
				
			case "PDF":		// relevant files
			case "DOC":	
			case "DOCX":
			case "TXT":
			case "XLS":
			case "XLSX":
			case "":
			
				if (Parms) return null;
				if (!Name) return null;
				
				var isTest = Name.has("TEST");
				var isPlan = Name.has("PLAN") && isTest;
				var isBogus = File.has("/PEOPLE") || Name.has(":");
				var isReport = isTest && !isPlan;
				var isReady = Name.has("ASSESS") || Name.has("READY") || Name.has("READI") || Name.has("EVAL");
				var isEval = Name.has("VERIF") || Name.has("V&V");
				var isOper = Name.has("OPER") || File.has("/WIKI");
				
				if (isBogus) 	Report = null;
				else
				if (isPlan)		Report = "PR";	
				else
				if (isReady)	Report = "RR";
				else
				if (isEval)		Report = "ER";
				else
				if (isReport)	Report = "TR";
				else
				if (isOper)		Report = "OR";
				
				break;
			
			default:
			
				break;
		}
		
		return Report ? Xlate[Report] : null;
	}
	
	sql.query("SELECT * from engines WHERE least(?)",{Name:path, Engine:"html"})
	.on("result", function (eng) {
		var Site = eng.Path, Table = job;
		var rec = {ID:0};
		var filter = eng.Code ? JSON.parse(eng.Code) : null;

		console.info("Queueing "+rec.Path);

		JSDOM.env({
			file	: Site,					// Site that supplies the DOM
			scripts	: [ENV.SCAN],			// Add jQuery & Scanner to the DOM
			done	: function (err, window) {
				var $ = window ? window.$ : null;
				var site = window ? window.location.href : "";
				
				//console.info("SCAN site "+site+" $="+($?true:false)+" err="+err);
				
				if (site && $ && !err) {	// scan valid and matched site
					sql.query("SELECT * FROM proxies WHERE LEAST(?) LIMIT 0,1",{Path:site.replace("file://",""),Enabled:true})
					.on("result", function (proxy) {
						console.info("SCANNING "+Site+":"+Table);
						
						var ids = {0: false},
							path = proxy.Name;
						
						$("body").find("table."+Table).each( function () {
							$("table",this).each( function () {	// remove nested tables
								//console.log("SCAN removed nested table");
							}).remove();
							
							if ($("caption",this).length) 
								rec.Caption = $("caption",this).first().text();
								
							$("tr",this).each( function (tr) {	// derive column ids and data
								var cols = $("td",this).length;

								if (ids["0"]) {	// columns defined so go get data
									$("td",this).each( function (td) {	
										id = (cols==1) ? "info" : ids[td];
											
										if (filter ? filter[id] : true) 
											rec[id] = $(this).text();

										$("a",this).first().each( function () {	// todo reportify path
											if (filter ? filter[id] : true) 
												rec[id] += "<a href='" + $(this).attr("href") + "'>" + path + "</a>";
										});
									});
									
									cb(rec);	// retain record
								}
								else {
									$("th",this).each( function (th) {  // use header row for ids if provided
										ids[th] = $(this).text().has(args);
									});
									
									if (!tr && !ids["0"]) // 1st row gives ids if no header row provided
										$("td",this).each( function (td) {
											ids[td] = $(this).text().has(args);
										});
								}
							});	
						});
					});
				}
				else 
					console.log("http reader error: "+err);
			}
		});
	});
}

function yql_Reader(sql,path,cb) { 
	var 
		select = req.param('select'),
		from = req.param('from'),
		where = req.param('where'),
		query = "select "+select+" from "+from+" where "+where.replace(/\\/g,"/");

	console.info(UTIL.format("%s %s",req.method,query));

	new YQL.exec(query, function (recs) {
		console.info(recs);
		RDR.each( recs, function (n,rec) {
			cb(rec);
		});
	});
}

function idop_Reader(sql,path,cb) {	
	// area contains parms and is used to start the swag workflow
	var env = process.env,
		parms = {
			size: parseFloat(env.SIZE),
			pixels: parseInt(env.PIXELS),
			scale: parseFloat(env.SCALE),
			step: parseFloat(env.STEP),
			range: parseFloat(env.RANGE),
			detects: parseInt(env.DETECTS),
			infile: path,
			outfile: ""
		};
		
	geoCHIP.workflow(sql, parms, function (chip,dets) {
		cb(dets);
	});
}

function job_Reader(sql,job,area,cb) {
	
	var parts = job.split(DOT),
		type = parts[1] || "",
		reader = RDR[type],
		parts = job.split(SLASH),
		name = parts[parts.length-1] || "",
		path = ENV[area.toUpperCase()]+name,
		file = {
			Area: area,
			Tag: "upload",
			Name: name,
			Added: new Date(),
			Classif: "(U)",
			Enabled: 0,
			Readability: 100
		};

	RDR.idxs.each(function (n,idx) {
		file[idx.label] = 0;
	});
	
	pdf_Reader(sql,path, function (text) {
		text.indexor(file, function () {
			sql.query("INSERT INTO files SET ? ON DUPLICATE KEY UPDATE ?",[file,file], function (err) {
				file.err = err;
				if (cb) cb(file);
			});
		});
	});
	
}
	
// UNCLASSIFIED
