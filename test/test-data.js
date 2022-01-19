// global, for html page
htm_tool_css = require("../htm-tool-css.js");

module.exports = {

	"css.ht-cmd": function (done) {
		return "<span class='ht-cmd'>cmd .ht-cmd style sample</span>";
	},
	"css.ht-hover": function (done) {
		return "<span class='ht-hover'>cmd .ht-hover style sample</span>";
	},
	"css.ht-selected & setSelected()": function (done) {
		return "<span class='ht-selected'>cmd .ht-selected style sample</span>" +
			"<div>" +
			"<span>111 </span><span>222 </span><span>333 </span><span>444 </span>" +
			"<label><input type=checkbox " +
			"	onchange='var chs=parentNode.parentNode.childNodes;htm_tool_css.setSelected([chs[0],chs[2]],[chs[1],chs[3]],this.checked);'" +
			"></input>toggle</label>" +
			"</div>";
	},
	"css.ht-entity": function (done) {
		var a = [
			"&times;", "&minus;", "&Congruent;", "&LeftTee;", "&rthree;", "&leftthreetimes;",
			"&and;", "&or;", "&dashv;", "&vdash;", "&perp;", "&veebar;", "&barwed;", "&DownTee;", "&UpTee;",
		];

		return a.map(function (v) { return "<span class='ht-entity-icon' title='" + v.replace("&", "&amp;") + "'>" + v + "</span>" }).join("") +
			"<br>" +
			a.map(function (v) { return "<span class='ht-entity-button' title='" + v.replace("&", "&amp;") + "'>" + v + "</span>" }).join("") +
			"";
	},


};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
