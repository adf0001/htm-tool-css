
//global variable, for html page, refer tpsvr @ npm.
htm_tool_css = require("../htm-tool-css.js");

module.exports = {

	".ht.cmd": function (done) {
		return "<span class='ht cmd'>css .ht.cmd style sample</span>";
	},
	".ht.active": function (done) {
		return "<span class='ht active'>css .ht.active style sample</span>";
	},
	".ht.unselectable": function (done) {
		return "<span class='ht unselectable'>css .ht.unselectable style sample</span>";
	},
	".ht.hover": function (done) {
		return "<span class='ht hover'>css .ht.hover style sample</span>";
	},
	".ht.selected & set/setEl()": function (done) {
		return "<span class='ht selected'>css .ht.selected style sample</span>" +
			"<div>" +
			"<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;htm_tool_css([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected'); htm_tool_css([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'');\"" +
			"></input>toggle by set()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;htm_tool_css.setEl('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],this.checked?[chs[1],chs[3]]:[chs[0],chs[2]]);\"" +
			"></input>toggle by setEl()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;htm_tool_css.setEl('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);\"" +
			"></input>setEl() toggle</label><br>" +
			"</div>";
	},
	".ht.entity": function (done) {
		var a = [
			"&times;", "&minus;", "&Congruent;", "&LeftTee;", "&rthree;", "&leftthreetimes;", "",
			"&and;", "&or;", "&dashv;", "&vdash;", "&perp;", "&veebar;", "&barwed;", "&DownTee;", "&UpTee;", "",
			"&mldr;", "&vellip;", "&hellip;", "&ctdot;", "",
			"A", "a", "B", "b", "*", "-", " ", "上", "噬",
		];

		return a.map(function (v) { if (!v) return "&nbsp;"; return "<span class='ht entity' title='" + v.replace("&", "&amp;") + "'>" + v + "</span>" }).join("") +
			"<br>" +
			a.map(function (v) { if (!v) return "&nbsp;"; return "<span class='ht entity btn' title='" + v.replace("&", "&amp;") + "'>" + v + "</span>" }).join("") +
			"";
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('htm_tool_css', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
