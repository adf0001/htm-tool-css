# htm-tool-css
htm-tool css module

# Install
```
npm install htm-tool-css
```

# Usage
```html

<!-- css .ht.cmd -->
<span class='ht cmd'>css .ht.cmd style sample</span>

<!-- css .ht.hover -->
<span class='ht hover'>css .ht.hover style sample</span>

<!-- setClass = function (elList, addClassList, removeClassList, toggleClassList), refer css-class-tool, binding 'ht' -->
<!-- setClassByElement = function (classList, addElList, removeElList, toggleElList) -->

<span class='ht selected'>css .ht.selected style sample</span>
<div>
<span>111 </span><span>222 </span><span>333 </span><span>444 </span>
<label>
	<label><input type=checkbox 
		onchange="var chs=parentNode.parentNode.childNodes;htm_tool_css.setEl('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);"
	></input>setEl() toggle</label>
</label>
</div>

```
