
// htm-tool-css @ npm, htm-tool css module.

var add_css_text = require("add-css-text");

// css modules
add_css_text(require("./res/common.css"), "ht-common-css");
add_css_text(require("./res/entity.css"), "ht-entity-css");

// css class setting tool

var addClass = function (elList, classList) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	if (!(classList instanceof Array)) classList = [classList];

	var i, imax = elList.length, j, jmax = classList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") el = document.getElementById(el);
		el.classList.add("ht");
		//el.classList.add.apply(el.classList, classList);		//discard, ie don't support multiple parameters
		for (j = 0; j < jmax; j++) el.classList.add(classList[j]);
	}
}

var removeClass = function (elList, classList) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	if (!(classList instanceof Array)) classList = [classList];

	var i, imax = elList.length, j, jmax = classList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") el = document.getElementById(el);
		//el.classList.remove.apply(el.classList, classList);		//discard, ie don't support multiple parameters
		for (j = 0; j < jmax; j++) el.classList.remove(classList[j]);
	}
}

var toggleClass = function (elList, classList) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	if (!(classList instanceof Array)) classList = [classList];

	var i, imax = elList.length, j, jmax = classList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") el = document.getElementById(el);
		//el.classList.toggle.apply(el.classList, classList);		//discard, ie don't support multiple parameters
		for (j = 0; j < jmax; j++) el.classList.toggle(classList[j]);
	}
}

//combine
var setClass = function (elList, addClassList, removeClassList, toggleClassList) {
	//arguments
	if (!(elList instanceof Array)) elList = [elList];
	var i, imax = elList.length, el;
	for (i = 0; i < imax; i++) {
		el = elList[i];
		if (typeof el === "string") elList[i] = document.getElementById(el);
	}

	//combine call
	if (addClassList) addClass(elList, addClassList);
	if (removeClassList) removeClass(elList, removeClassList);
	if (toggleClassList) toggleClass(elList, toggleClassList);
}


//combine by element
var setClassByElement = function (classList, addElList, removeElList, toggleElList) {
	//arguments
	if (!(classList instanceof Array)) classList = [classList];

	//combine call
	if (addElList) addClass(addElList, classList);
	if (removeElList) removeClass(removeElList, classList);
	if (toggleElList) toggleClass(toggleElList, classList);
}

//module

module.exports = exports = setClass;

exports.set = setClass;
exports.setElement = setClassByElement;
exports.setEl = setClassByElement;

exports.add = addClass;
exports.remove = removeClass;
exports.toggle = toggleClass;
