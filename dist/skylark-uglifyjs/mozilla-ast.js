/**
 * skylark-uglifyjs - A version of uglifyjs that ported to running on skylarkjs.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./ast"],function(O){"use strict";const{AST_Accessor:o,AST_Array:t,AST_Arrow:j,AST_Assign:B,AST_AsyncFunction:a,AST_AsyncDefun:i,AST_AsyncArrow:R,AST_AsyncGeneratorFunction:s,AST_AsyncGeneratorDefun:u,AST_Atom:N,AST_Await:U,AST_BigInt:l,AST_Binary:e,AST_Block:V,AST_BlockStatement:p,AST_Boolean:q,AST_Break:H,AST_Call:G,AST_Case:W,AST_Catch:Y,AST_ClassExpression:n,AST_ClassGetter:K,AST_ClassInit:$,AST_ClassSetter:J,AST_Conditional:Q,AST_Const:X,AST_Constant:Z,AST_Continue:ee,AST_Debugger:te,AST_Default:ne,AST_DefClass:r,AST_Definitions:re,AST_Defun:ae,AST_Directive:oe,AST_Do:ie,AST_Dot:se,AST_EmptyStatement:ue,AST_ExportDeclaration:le,AST_False:pe,AST_Finally:ce,AST_For:de,AST_ForIn:ye,AST_ForOf:fe,AST_Function:me,AST_Hole:c,AST_If:Se,AST_Import:_e,AST_Infinity:Ae,AST_Label:Te,AST_LabeledStatement:be,AST_LabelRef:we,AST_Lambda:ve,AST_Let:he,AST_New:ge,AST_NewTarget:xe,AST_Node:d,AST_Null:Ee,AST_Number:ke,AST_Object:De,AST_ObjectGetter:Ce,AST_ObjectKeyVal:Fe,AST_ObjectProperty:Pe,AST_ObjectSetter:Ie,AST_PropAccess:Me,AST_RegExp:y,AST_Return:Le,AST_Sequence:ze,AST_SimpleStatement:f,AST_String:m,AST_Sub:Oe,AST_Super:je,AST_Switch:Be,AST_SwitchBranch:Re,AST_Symbol:Ne,AST_SymbolCatch:Ue,AST_SymbolClass:Ve,AST_SymbolConst:qe,AST_SymbolDefClass:He,AST_SymbolDefun:Ge,AST_SymbolExport:We,AST_SymbolFunarg:S,AST_SymbolImport:Ye,AST_SymbolLambda:Ke,AST_SymbolLet:$e,AST_SymbolRef:Je,AST_SymbolVar:Qe,AST_This:Xe,AST_Throw:Ze,AST_Token:et,AST_Toplevel:tt,AST_True:nt,AST_Try:rt,AST_Unary:at,AST_UnaryPostfix:ot,AST_UnaryPrefix:_,AST_Var:it,AST_VarDef:st,AST_While:ut,AST_With:lt,AST_Yield:pt,is_generator:ct,is_arrow:dt,is_async:A}=O;function T(r){return function(e){var t=e.key instanceof d,n=t?F(e.key):e.private?{type:"PrivateIdentifier",name:e.key.slice(1)}:{type:"Literal",value:e.key};return{type:"MethodDefinition",kind:r,computed:t,key:n,static:e.static,value:F(e.value)}}}function yt(t){return function(e){return{type:"ForOfStatement",await:t,left:F(e.init),right:F(e.object),body:F(e.body)}}}function b(e){var t=e.value;return"number"==typeof t&&(t<0||0===t&&1/t<0)?{type:"UnaryExpression",operator:"-",prefix:!0,argument:{type:"Literal",value:-t,raw:e.start.raw}}:{type:"Literal",value:t,raw:e.start.raw}}function w(e){for(var t=0;t<e.length;t++){var n=e[t];if(!(n instanceof f))break;var r=n.body;if(!(r instanceof m))break;if(n.start.pos!==r.start.pos)break;e[t]=new oe(r)}return e}function ft(e){if("Literal"==e.type)return null!=e.raw?e.raw:e.value+""}function v(e){var t=e.loc,n=t&&t.start,r=e.range;return new et({file:t&&t.source,line:n&&n.line,col:n&&n.column,pos:r?r[0]:e.start,endline:n&&n.line,endcol:n&&n.column,endpos:r?r[0]:e.start,raw:ft(e)})}function h(e){var t=e.loc,n=t&&t.end,r=e.range;return new et({file:t&&t.source,line:n&&n.line,col:n&&n.column,pos:r?r[1]:e.end,endline:n&&n.line,endcol:n&&n.column,endpos:r?r[1]:e.end,raw:ft(e)})}function g(e){return""+e["Identifier"==e.type?"name":"value"]}function x(e,t,n){var o=["start: my_start_token(M)","end: my_end_token(M)"],i=["type: "+JSON.stringify(e)];n&&n.split(/\s*,\s*/).forEach(function(e){var t=/([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(e);if(!t)throw new Error("Can't understand property map: "+e);var n=t[1],r=t[2],a=t[3];switch(r){case"@":o.push(a+": M."+n+".map(from_moz)"),i.push(n+": M."+a+".map(to_moz)");break;case">":o.push(a+": from_moz(M."+n+")"),i.push(n+": to_moz(M."+a+")");break;case"=":o.push(a+": M."+n),i.push(n+": M."+a);break;case"%":o.push(a+": from_moz(M."+n+").body"),i.push(n+": to_moz_block(M)");break;default:throw new Error("Can't understand operator in propmap: "+e)}}),L[e]=new Function("U2","my_start_token","my_end_token","from_moz",["return function From_Moz_"+e+"(M) {","    return new U2.AST_"+t.TYPE+"({",o.join(",\n"),"    });","};"].join("\n"))(exports,v,h,E),C(t,new Function("to_moz","to_moz_block","to_moz_scope",["return function To_Moz_"+e+"(M) {","    return {",i.join(",\n"),"    };","};"].join("\n"))(F,I,M))}function E(e){z.push(e);var t=null;if(e){if(!HOP(L,e.type))throw new Error("Unsupported type: "+e.type);t=L[e.type](e)}return z.pop(),t}function k(e){return new m({start:v(e),value:g(e),end:h(e)})}function D(e,t){var n=e.start,e=e.end;return null!=n.pos&&null!=e.endpos&&(t.range=[n.pos,e.endpos]),n.line&&(t.loc={start:{line:n.line,column:n.col},end:e.endline?{line:e.endline,column:e.endcol}:null},n.file)&&(t.loc.source=n.file),t}function C(e,t){e.DEFMETHOD("to_mozilla_ast",function(){return D(this,t(this))})}function F(e){return null!=e?e.to_mozilla_ast():null}function P(e){return is_identifier_string(e.value)?D(e,{type:"Identifier",name:e.value}):F(e)}function I(e){return{type:"BlockStatement",body:e.body.map(F)}}function M(e,t){var n=t.body.map(F);return t.body[0]instanceof f&&t.body[0].body instanceof m&&n.unshift(F(new ue(t.body[0]))),{type:e,body:n}}var L,z;(L={Program:function(e){return new tt({start:v(e),end:h(e),body:w(e.body.map(E))})},ArrowFunctionExpression:function(e){var t=[],n=null,r=(e.params.forEach(function(e){"RestElement"==e.type?n=E(e.argument):t.push(E(e))}),new(e.async?R:j)({start:v(e),end:h(e),argnames:t,rest:n})),e=E(e.body);return e instanceof p?(r.body=w(e.body),r.value=null):(r.body=[],r.value=e),r},FunctionDeclaration:function(e){var t=e.async?e.generator?u:i:e.generator?AST_GeneratorDefun:ae,n=[],r=null;return e.params.forEach(function(e){"RestElement"==e.type?r=E(e.argument):n.push(E(e))}),new t({start:v(e),end:h(e),name:E(e.id),argnames:n,rest:r,body:w(E(e.body).body)})},FunctionExpression:function(e){var t=e.async?e.generator?s:a:e.generator?AST_GeneratorFunction:me,n=[],r=null;return e.params.forEach(function(e){"RestElement"==e.type?r=E(e.argument):n.push(E(e))}),new t({start:v(e),end:h(e),name:E(e.id),argnames:n,rest:r,body:w(E(e.body).body)})},ClassDeclaration:function(e){return new r({start:v(e),end:h(e),name:E(e.id),extends:E(e.superClass),properties:e.body.body.map(E)})},ClassExpression:function(e){return new n({start:v(e),end:h(e),name:E(e.id),extends:E(e.superClass),properties:e.body.body.map(E)})},MethodDefinition:function(e){var t=e.key,n=!1,t=e.computed?E(t):"PrivateIdentifier"==t.type?(n=!0,"#"+t.name):g(t),r=AST_ClassMethod,a=E(e.value);switch(e.kind){case"get":r=K,a=new o(a);break;case"set":r=J,a=new o(a)}return new r({start:v(e),end:h(e),key:t,private:n,static:e.static,value:a})},PropertyDefinition:function(e){var t=e.key,n=!1,t=e.computed?E(t):"PrivateIdentifier"==t.type?(n=!0,"#"+t.name):g(t);return new AST_ClassField({start:v(e),end:h(e),key:t,private:n,static:e.static,value:E(e.value)})},StaticBlock:function(e){var t=v(e),n=h(e);return new $({start:t,end:n,value:new AST_ClassInitBlock({start:t,end:n,body:w(e.body.map(E))})})},ForOfStatement:function(e){return new(e.await?AST_ForAwaitOf:fe)({start:v(e),end:h(e),init:E(e.left),object:E(e.right),body:E(e.body)})},TryStatement:function(e){var t=e.handlers||[e.handler];if(1<t.length||e.guardedHandlers&&e.guardedHandlers.length)throw new Error("Multiple catch clauses are not supported.");return new rt({start:v(e),end:h(e),body:E(e.block).body,bcatch:E(t[0]),bfinally:e.finalizer?new ce(E(e.finalizer)):null})},Property:function(e){var t=(e.computed?E:g)(e.key),t={start:v(e),end:h(e),key:t,value:E(e.value)};return"init"==e.kind?new(e.method?AST_ObjectMethod:Fe)(t):(t.value=new o(t.value),"get"==e.kind?new Ce(t):"set"==e.kind?new Ie(t):void 0)},ArrayExpression:function(e){return new t({start:v(e),end:h(e),elements:e.elements.map(function(e){return null===e?new c:E(e)})})},ArrayPattern:function(e){var t=[],n=null;return e.elements.forEach(function(e){null===e?t.push(new c):"RestElement"==e.type?n=E(e.argument):t.push(E(e))}),new AST_DestructuredArray({start:v(e),end:h(e),elements:t,rest:n})},ObjectPattern:function(e){var t=[],n=null;return e.properties.forEach(function(e){"RestElement"==e.type?n=E(e.argument):t.push(new AST_DestructuredKeyVal(E(e)))}),new AST_DestructuredObject({start:v(e),end:h(e),properties:t,rest:n})},MemberExpression:function(e){return new(e.computed?Oe:se)({start:v(e),end:h(e),optional:e.optional,expression:E(e.object),property:e.computed?E(e.property):e.property.name})},MetaProperty:function(e){var t=E(e.meta),n=g(e.property);return"new"==t.name&&"target"==n?new xe({start:v(e),end:h(e),name:"new.target"}):new se({start:v(e),end:h(e),expression:t,property:n})},SwitchCase:function(e){return new(e.test?W:ne)({start:v(e),end:h(e),expression:E(e.test),body:e.consequent.map(E)})},ExportAllDeclaration:function(e){var t=v(e),n=h(e);return new AST_ExportForeign({start:t,end:n,aliases:[e.exported?k(e.exported):new m({start:t,value:"*",end:n})],keys:[new m({start:t,value:"*",end:n})],path:E(e.source)})},ExportDefaultDeclaration:function(e){var t=E(e.declaration);if(!t.name)switch(t.CTOR){case i:t=new a(t);break;case u:t=new s(t);break;case r:t=new n(t);break;case ae:t=new me(t);break;case AST_GeneratorDefun:t=new AST_GeneratorFunction(t)}return new AST_ExportDefault({start:v(e),end:h(e),body:t})},ExportNamedDeclaration:function(e){var t,n;return e.declaration?new le({start:v(e),end:h(e),body:E(e.declaration)}):e.source?(t=[],n=[],e.specifiers.forEach(function(e){t.push(k(e.exported)),n.push(k(e.local))}),new AST_ExportForeign({start:v(e),end:h(e),aliases:t,keys:n,path:E(e.source)})):new AST_ExportReferences({start:v(e),end:h(e),properties:e.specifiers.map(function(e){var t=new We(E(e.local));return t.alias=k(e.exported),t})})},ImportDeclaration:function(e){var n=v(e),r=h(e),a=null,o=null,i=null;return e.specifiers.forEach(function(e){var t=new Ye(E(e.local));switch(e.type){case"ImportDefaultSpecifier":(o=t).key=new m({start:n,value:"",end:r});break;case"ImportNamespaceSpecifier":(a=t).key=new m({start:n,value:"*",end:r});break;default:t.key=k(e.imported),(i=i||[]).push(t)}}),new _e({start:n,end:r,all:a,default:o,properties:i,path:E(e.source)})},ImportExpression:function(e){var t=v(e),n=E(e.source);return new G({start:t,end:h(e),expression:new Je({start:t,end:n.start,name:"import"}),args:[n]})},VariableDeclaration:function(e){return new({const:X,let:he}[e.kind]||it)({start:v(e),end:h(e),definitions:e.declarations.map(E)})},Literal:function(e){var t={start:v(e),end:h(e)};if(e.bigint)return t.value=e.bigint.toLowerCase()+"n",new l(t);var n=e.value;if(null===n)return new Ee(t);var r,a,o=e.regex;if(o&&o.pattern)return t.value=new RegExp(o.pattern,o.flags),t.value.raw_source=o.pattern,new y(t);if(o)return t.value=e.regex&&e.raw?e.raw:n,new y(t);switch(typeof n){case"string":return t.value=n,new m(t);case"number":return isNaN(n)?new AST_NaN(t):(a=new(isFinite(n)?(t.value=(r=1/n<0)?-n:n,ke):(r=n<0,Ae))(t),r?new _({start:t.start,end:t.end,operator:"-",expression:a}):a);case"boolean":return new(n?nt:pe)(t)}},TemplateLiteral:function(e){return new AST_Template({start:v(e),end:h(e),expressions:e.expressions.map(E),strings:e.quasis.map(function(e){return e.value.raw})})},TaggedTemplateExpression:function(e){var t=E(e.quasi);return t.start=v(e),t.end=h(e),t.tag=E(e.tag),t},Identifier:function(e){for(var t,n=z.length-1;"ArrayPattern"==(t=z[--n]).type||"AssignmentPattern"==t.type&&t.left===z[n+1]||"ObjectPattern"==t.type||"Property"==t.type&&t.value===z[n+1]||"VariableDeclarator"==t.type&&t.id===z[n+1];);var r=Je;switch(t.type){case"ArrowFunctionExpression":t.body!==z[n+1]&&(r=S);break;case"BreakStatement":case"ContinueStatement":r=we;break;case"CatchClause":r=Ue;break;case"ClassDeclaration":t.id===z[n+1]&&(r=He);break;case"ClassExpression":t.id===z[n+1]&&(r=Ve);break;case"FunctionDeclaration":r=t.id===z[n+1]?Ge:S;break;case"FunctionExpression":r=t.id===z[n+1]?Ke:S;break;case"LabeledStatement":r=Te;break;case"VariableDeclaration":r={const:qe,let:$e}[t.kind]||Qe}return new r({start:v(e),end:h(e),name:e.name})},Super:function(e){return new je({start:v(e),end:h(e),name:"super"})},ThisExpression:function(e){return new Xe({start:v(e),end:h(e),name:"this"})},ParenthesizedExpression:function(e){var t=E(e.expression);return t.start.parens||(t.start.parens=[]),t.start.parens.push(v(e)),t.end.parens||(t.end.parens=[]),t.end.parens.push(h(e)),t},ChainExpression:function(e){e=E(e.expression);return e.terminal=!0,e}}).UpdateExpression=L.UnaryExpression=function(e){return new(("prefix"in e?e.prefix:"UnaryExpression"==e.type)?_:ot)({start:v(e),end:h(e),operator:e.operator,expression:E(e.argument)})},x("EmptyStatement",ue),x("ExpressionStatement",f,"expression>body"),x("BlockStatement",p,"body@body"),x("IfStatement",Se,"test>condition, consequent>body, alternate>alternative"),x("LabeledStatement",be,"label>label, body>body"),x("BreakStatement",H,"label>label"),x("ContinueStatement",ee,"label>label"),x("WithStatement",lt,"object>expression, body>body"),x("SwitchStatement",Be,"discriminant>expression, cases@body"),x("ReturnStatement",Le,"argument>value"),x("ThrowStatement",Ze,"argument>value"),x("WhileStatement",ut,"test>condition, body>body"),x("DoWhileStatement",ie,"test>condition, body>body"),x("ForStatement",de,"init>init, test>condition, update>step, body>body"),x("ForInStatement",ye,"left>init, right>object, body>body"),x("DebuggerStatement",te),x("VariableDeclarator",st,"id>name, init>value"),x("CatchClause",Y,"param>argname, body%body"),x("BinaryExpression",e,"operator=operator, left>left, right>right"),x("LogicalExpression",e,"operator=operator, left>left, right>right"),x("AssignmentExpression",B,"operator=operator, left>left, right>right"),x("AssignmentPattern",AST_DefaultValue,"left>name, right>value"),x("ConditionalExpression",Q,"test>condition, consequent>consequent, alternate>alternative"),x("NewExpression",ge,"callee>expression, arguments@args, pure=pure"),x("CallExpression",G,"callee>expression, arguments@args, optional=optional, pure=pure"),x("SequenceExpression",ze,"expressions@expressions"),x("SpreadElement",AST_Spread,"argument>expression"),x("ObjectExpression",De,"properties@properties"),x("AwaitExpression",U,"argument>expression"),x("YieldExpression",pt,"argument>expression, delegate=nested"),C(tt,function(e){return M("Program",e)}),C(AST_LambdaDefinition,function(e){var t=e.argnames.map(F);return e.rest&&t.push({type:"RestElement",argument:F(e.rest)}),{type:"FunctionDeclaration",id:F(e.name),async:A(e),generator:ct(e),params:t,body:M("BlockStatement",e)}}),C(ve,function(e){var t=e.argnames.map(F);return e.rest&&t.push({type:"RestElement",argument:F(e.rest)}),dt(e)?{type:"ArrowFunctionExpression",async:A(e),params:t,body:e.value?F(e.value):M("BlockStatement",e)}:{type:"FunctionExpression",id:F(e.name),async:A(e),generator:ct(e),params:t,body:M("BlockStatement",e)}}),C(r,function(e){return{type:"ClassDeclaration",id:F(e.name),superClass:F(e.extends),body:{type:"ClassBody",body:e.properties.map(F)}}}),C(n,function(e){return{type:"ClassExpression",id:F(e.name),superClass:F(e.extends),body:{type:"ClassBody",body:e.properties.map(F)}}}),C(K,T("get")),C(J,T("set")),C(AST_ClassMethod,T("method")),C(AST_ClassField,function(e){var t=e.key instanceof d;return{type:"PropertyDefinition",computed:t,key:t?F(e.key):e.private?{type:"PrivateIdentifier",name:e.key.slice(1)}:{type:"Literal",value:e.key},static:e.static,value:F(e.value)}}),C($,function(e){return M("StaticBlock",e.value)}),C(AST_ForAwaitOf,yt(!0)),C(fe,yt(!1)),C(oe,function(e){return{type:"ExpressionStatement",expression:D(e,{type:"Literal",value:e.value})}}),C(Re,function(e){return{type:"SwitchCase",test:F(e.expression),consequent:e.body.map(F)}}),C(rt,function(e){return{type:"TryStatement",block:I(e),handler:F(e.bcatch),guardedHandlers:[],finalizer:F(e.bfinally)}}),C(Y,function(e){return{type:"CatchClause",param:F(e.argname),guard:null,body:I(e)}}),C(le,function(e){return{type:"ExportNamedDeclaration",declaration:F(e.body)}}),C(AST_ExportDefault,function(e){return{type:"ExportDefaultDeclaration",declaration:F(e.body)}}),C(AST_ExportForeign,function(e){if("*"==e.keys[0].value)return{type:"ExportAllDeclaration",exported:"*"==e.aliases[0].value?null:P(e.aliases[0]),source:F(e.path)};for(var t=[],n=0;n<e.aliases.length;n++)t.push(D({start:e.keys[n].start,end:e.aliases[n].end},{type:"ExportSpecifier",local:P(e.keys[n]),exported:P(e.aliases[n])}));return{type:"ExportNamedDeclaration",specifiers:t,source:F(e.path)}}),C(AST_ExportReferences,function(e){return{type:"ExportNamedDeclaration",specifiers:e.properties.map(function(e){return D({start:e.start,end:e.alias.end},{type:"ExportSpecifier",local:F(e),exported:P(e.alias)})})}}),C(_e,function(e){var t=e.properties?e.properties.map(function(e){return D({start:e.key.start,end:e.end},{type:"ImportSpecifier",local:F(e),imported:P(e.key)})}):[];return e.all&&t.unshift(D(e.all,{type:"ImportNamespaceSpecifier",local:F(e.all)})),e.default&&t.unshift(D(e.default,{type:"ImportDefaultSpecifier",local:F(e.default)})),{type:"ImportDeclaration",specifiers:t,source:F(e.path)}}),C(re,function(e){return{type:"VariableDeclaration",kind:e.TYPE.toLowerCase(),declarations:e.definitions.map(F)}}),C(Me,function(e){var t=e instanceof Oe,t={type:"MemberExpression",object:F(e.expression),computed:t,optional:e.optional,property:t?F(e.property):{type:"Identifier",name:e.property}};return e.terminal?{type:"ChainExpression",expression:t}:t}),C(at,function(e){return{type:"++"==e.operator||"--"==e.operator?"UpdateExpression":"UnaryExpression",operator:e.operator,prefix:e instanceof _,argument:F(e.expression)}}),C(e,function(e){return{type:"&&"==e.operator||"||"==e.operator?"LogicalExpression":"BinaryExpression",left:F(e.left),operator:e.operator,right:F(e.right)}}),C(t,function(e){return{type:"ArrayExpression",elements:e.elements.map(F)}}),C(AST_DestructuredArray,function(e){var t=e.elements.map(F);return e.rest&&t.push({type:"RestElement",argument:F(e.rest)}),{type:"ArrayPattern",elements:t}}),C(AST_DestructuredKeyVal,function(e){var t=e.key instanceof d;return{type:"Property",kind:"init",computed:t,key:t?F(e.key):{type:"Literal",value:e.key},value:F(e.value)}}),C(AST_DestructuredObject,function(e){var t=e.properties.map(F);return e.rest&&t.push({type:"RestElement",argument:F(e.rest)}),{type:"ObjectPattern",properties:t}}),C(Pe,function(e){var t,n=e.key instanceof d,r=n?F(e.key):{type:"Literal",value:e.key};return e instanceof Fe?t="init":e instanceof Ce?t="get":e instanceof Ie&&(t="set"),{type:"Property",kind:t,computed:n,method:e instanceof AST_ObjectMethod,key:r,value:F(e.value)}}),C(Ne,function(e){var t=e.definition();return{type:"Identifier",name:t&&t.mangled_name||e.name}}),C(je,function(){return{type:"Super"}}),C(Xe,function(){return{type:"ThisExpression"}}),C(xe,function(){return{type:"MetaProperty",meta:{type:"Identifier",name:"new"},property:{type:"Identifier",name:"target"}}}),C(y,function(e){var t=e.value.toString().match(/\/([gimuy]*)$/)[1],n="/"+e.value.raw_source+"/"+t;return{type:"Literal",value:n,raw:n,regex:{pattern:e.value.raw_source,flags:t}}}),C(l,function(e){e=e.value;return{type:"Literal",bigint:e.slice(0,-1),raw:e}}),C(q,b),C(Z,b),C(Ee,b),C(N,function(e){return{type:"Identifier",name:String(e.value)}}),C(AST_Template,function(e){var n=e.strings.length-1,t={type:"TemplateLiteral",expressions:e.expressions.map(F),quasis:e.strings.map(function(e,t){return{type:"TemplateElement",tail:t==n,value:{raw:e}}})};return e.tag?{type:"TaggedTemplateExpression",tag:F(e.tag),quasi:t}:t}),V.DEFMETHOD("to_mozilla_ast",p.prototype.to_mozilla_ast),c.DEFMETHOD("to_mozilla_ast",return_null),d.DEFMETHOD("to_mozilla_ast",function(){throw new Error("Cannot convert AST_"+this.TYPE)}),z=null,d.from_mozilla_ast=function(e){var t=z,e=(z=[],E(e));return z=t,e.walk(new TreeWalker(function(e){if(e instanceof we){for(var t,n,r=0;(t=this.parent(r))&&!(t instanceof AST_Scope);r++)if(t instanceof be&&t.label.name==e.name){e.thedef=t.label;break}e.thedef||(n=e.start,js_error("Undefined label "+e.name,n.file,n.line,n.col,n.pos))}})),e}});
//# sourceMappingURL=sourcemaps/mozilla-ast.js.map
