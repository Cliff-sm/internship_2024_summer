# Week 9 review

I have read the https://pub.dev/packages/s2geometry_dart.
as S2 Geometry is a quite complex library and this port ony targeted to do part of the porting, so you better mention it as the beginning of that (limited port) in the start of the README.md (and hence the pub.dev index).

I think some function should have been ported. 
```js
'use strict';
 
var quadkey = '4/032212303102210'
var parts = quadkey.split('/');
var face = parts[0];                  // 4
var position = parts[1];              // '032212303102210';
var level = '032212303102210'.length; // 15
 
var cellId = S2.facePosLevelToId(face, position, level);
 
console.log(cellId);
```
like this one, you could mention it if you did port to dart.


## Questions
What Projects should the intern focus on next week?
please summarize next week's markdown file yourself.

What is one thing the intern can do next week to improve?
complete the flutter demo project.
```
