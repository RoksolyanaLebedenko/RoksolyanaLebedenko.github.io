/*!CK:2896530018!*//*1448268150,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["neoYF"]); }

__d('legacy:tooltips',['ToolTips'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.ToolTips=c('ToolTips');},3);
__d('LogoutMenu',['csx','DOMQuery','emptyFunction','Event','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m;l('MenuItem',function(o){m=o;});function n(o,p){var q;if(p)p.subscribe('confirm',function(){k.fire(q,'submit');q.submit();});o.subscribe('itemclick',function(r,s){switch(s.item.getValue()){case 'logout':q=i.find(o.getRoot(),"._w0d");break;case 'help':if(m)m.prototype.hasAction=j.thatReturnsFalse;break;default:break;}if(q)if(p){p.show();}else{k.fire(q,'submit');q.submit();}});}f.exports.init=n;},null);