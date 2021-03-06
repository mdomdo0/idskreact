import React, { useState, useEffect } from "react";
import "./App.scss";
import { Helmet } from "react-helmet";
var html = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title></title>
	<meta name="generator" content="Altova StyleVision Enterprise Edition 2022 (x64) (http://www.altova.com)">
	<meta http-equiv="X-UA-Compatible" content="IE=9">
	<style type="text/css">
		<!--@import  url("idsk-frontend-2.8.0.min.css");
		-->
	</style>
	<!--[if IE]><STYLE type="text/css">.altova-rotate-left-textbox{filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3)} .altova-rotate-right-textbox{filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1)} </STYLE><![endif]-->
	<!--[if !IE]><!-->
	<style type="text/css">
		.altova-rotate-left-textbox {
			-webkit-transform: rotate(-90deg) translate(-100%, 0%);
			-webkit-transform-origin: 0% 0%;
			-moz-transform: rotate(-90deg) translate(-100%, 0%);
			-moz-transform-origin: 0% 0%;
			-ms-transform: rotate(-90deg) translate(-100%, 0%);
			-ms-transform-origin: 0% 0%;
		}

		.altova-rotate-right-textbox {
			-webkit-transform: rotate(90deg) translate(0%, -100%);
			-webkit-transform-origin: 0% 0%;
			-moz-transform: rotate(90deg) translate(0%, -100%);
			-moz-transform-origin: 0% 0%;
			-ms-transform: rotate(90deg) translate(0%, -100%);
			-ms-transform-origin: 0% 0%;
		}
	</style>
	<!--<![endif]-->
	<script type="text/javascript">
		(function () {
			const script = document.createElement("script");
			script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
			script.type = 'text/javascript';
			script.addEventListener('load', () => {
				$(document).ready(function () {
					showHideTypSubjektuFormCond();
				});

			});
			document.head.appendChild(script);
		})();


		function showHideTypSubjektuFormCond() {
			if ($("#ziadost-param-po").prop("checked")) {
				$("#form-params-cond-fo").hide();
				$("#form-params-cond-po").show();
			} else {
				$("#form-params-cond-po").hide();
				$("#form-params-cond-fo").show();
			}
		}

		function showHideCudzinecFormCond() {
			if ($("#ziadost-param-cudzinec").prop("checked")) {
				$("#form-params-cond-domaci").hide();
				$("#form-params-cond-cudzinec").show();
			} else {
				$("#form-params-cond-domaci").show();
				$("#form-params-cond-cudzinec").hide();
			}
		}
</script>
	<style type="text/css">
		@page {
			margin-left: 0.60in;
			margin-right: 0.60in;
			margin-top: 0.79in;
			margin-bottom: 0.79in
		}

		@media print {
			br.altova-page-break {
				page-break-before: always;
			}

			div.altova-page-break {
				page-break-before: always;
			}
		}
	</style>
</head>

<body>
	<h3 class="govuk-heading-m"><span>Nov?? ??iados?? o v??pis nedoplatkov vo??i Finan??nej spr??ve SR</span></h3>
	<h4 class="govuk-heading-s"><span>Detaily opr??vnenej osoby</span></h4>
	<form action="test.php" id="fs_nedoplatky" method="post" name="fs_nedoplatky">
		<div class="govuk-form-group"><label class="govuk-label" for="oprav-os-meno"><span>Meno</span></label><input
				class="govuk-input" id="oprav-os-meno" name="oprav-os-meno" value="Janko"></div>
		<div class="govuk-form-group"><label class="govuk-label"
				for="oprav-os-priezvisko"><span>Priezvisko</span></label><input class="govuk-input" id="oprav-os-priezvisko"
				name="oprav-os-priezvisko" value="Hrasko"></div>
		<h4 class="govuk-heading-s"><span>??iados??</span></h4>
		<div class="govuk-form-group"><label class="govuk-label" for="ziadost-spis-zn"><span>Spisov??
					zna??ka</span></label><input class="govuk-input" id="ziadost-spis-zn" name="ziadost-spis-zn" value="aaa333">
		</div>
		<div class="govuk-form-group"><label class="govuk-label" for="ziadost-ucel"><span>????el
					??iadosti</span></label><select class="govuk-select" id="ziadost-ucel" name="ziadost-ucel">
				<option value="0012" selected>FSSR V??eobecn?? ????el</option>
				<option value="0013">In?? ????el</option>
			</select></div>
		<h4 class="govuk-heading-s"><span>??daje o osobe</span></h4>
		<div class="govuk-form-group">
			<fieldset class="govuk-fieldset">
				<legend class="govuk-fieldset__legend"><span>Typ subjektu</span></legend>
				<div class="govuk-radios">
					<div class="govuk-radios__item"><input class="govuk-radios__input" id="ziadost-param-fo" name="typSubjektu"
							onclick="showHideTypSubjektuFormCond()" value="FO" type="radio" checked><label
							class="govuk-label govuk-radios__label" for="ziadost-param-fo"><span>Fyzick?? osoba (FO
								podnikate??)</span></label></div>
					<div class="govuk-radios__item"><input class="govuk-radios__input" id="ziadost-param-po" name="typSubjektu"
							onclick="showHideTypSubjektuFormCond()" value="PO" type="radio"><label
							class="govuk-label govuk-radios__label" for="ziadost-param-po"><span>Pr??vnick?? osoba</span></label></div>
				</div>
			</fieldset>
		</div>
		<div id="form-params-cond-po">
			<div class="govuk-form-group" id="form-params-cond-po"><label class="govuk-label"
					for="ziadost-param-stat"><span>??t??t</span></label><select class="govuk-select" id="ziadost-param-stat"
					name="ziadost-param-stat">
					<option value="SK" selected>Slovensk?? republika</option>
					<option value="CZ">??esk?? republika</option>
					<option value="PL">Po??sk?? republika</option>
				</select></div>
			<div class="govuk-form-group" id="form-params-cond-po"><label class="govuk-label"
					for="ziadost-param-ico"><span>I??O</span></label><input class="govuk-input" id="ziadost-param-ico"
					name="ziadost-param-ico" value="12345678"></div>
		</div>
		<div style="display:none; " id="form-params-cond-fo">
			<div class="govuk-form-group">
				<div class="govuk-checkboxes">
					<div class="govuk-checkboxes__item"><input class="govuk-checkboxes__input" id="ziadost-param-cudzinec"
							name="ziadost-param-cudzinec" onclick="showHideCudzinecFormCond()" type="checkbox" value="" checked><label
							class="govuk-label govuk-checkboxes__label" for="ziadost-param-cudzinec"><span>Cudzinec</span></label>
					</div>
				</div>
			</div>
			<div class="govuk-form-group"><label class="govuk-label" for="ziadost-param-rc"><span>Rodn??
						????slo</span></label><input class="govuk-input" id="ziadost-param-rc" name="ziadost-param-rc" value=""></div>
			<div class="govuk-form-group" id="form-params-cond-domaci"><label class="govuk-label"
					for="ziadost-param-fo-ico"><span>I??O</span></label><input class="govuk-input" id="ziadost-param-fo-ico"
					name="ziadost-param-fo-ico" value="12345678"></div>
			<div id="form-params-cond-cudzinec">
				<h6 class="govuk-body-s" id="form-params-cond-cudzinec"><span>Vyplnte bu?? rodn?? ????slo alebo kombin??ciu meno,
						priezvisko a d??tum narodenia.</span></h6>
				<div class="govuk-form-group"><label class="govuk-label"
						for="ziadost-param-fo-meno"><span>Meno</span></label><input class="govuk-input" id="ziadost-param-fo-meno"
						name="ziadost-param-fo-meno" value=""></div>
				<div class="govuk-form-group"><label class="govuk-label"
						for="ziadost-param-fo-priezvisko"><span>Priezvisko</span></label><input class="govuk-input"
						id="ziadost-param-fo-priezvisko" name="ziadost-param-fo-priezvisko" value=""></div>
				<div class="govuk-form-group"><label class="govuk-label" for="ziadost-param-fo-datNar"><span>D??tum
							narodenia</span></label><input class="govuk-input" id="ziadost-param-fo-datNar"
						name="ziadost-param-fo-datNar" value=""></div>
			</div><br>
		</div>
	</form>
	<script src="idsk-frontend-2.8.0.min.js"></script>
</body>

</html>
`;

var serialize = require("form-serialize");

function App() {
	const [rawHTML, setRawHTML] = useState("");
	const [rawHead, setRawHead] = useState("");

	useEffect(() => {
		var parser = new DOMParser();
		var doc = parser.parseFromString(html, "text/html");
		var data = doc.querySelector("script").innerHTML;
		var docArticle = doc.querySelector("body").innerHTML;
		setRawHTML(docArticle);
		setRawHead(data);
	}, []);

	function sendForm() {
		var form = document.querySelector("form");
		var obj = serialize(form, { hash: true });
		console.log(obj);
	}

	return (
		<div style={container}>
			<Helmet>
				<script>{rawHead}</script>
			</Helmet>
			<div
				contentEditable="true"
				dangerouslySetInnerHTML={{ __html: rawHTML }}
			></div>
			<button onClick={sendForm} className="govuk-button">
				Odosla??
			</button>
		</div>
	);
}

const container = {
	width: 800,
	margin: "auto",
};

export default App;
