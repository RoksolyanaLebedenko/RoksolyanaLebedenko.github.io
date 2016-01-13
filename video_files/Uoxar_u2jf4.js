/*!CK:485820322!*//*1445829455,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bJbuM"]); }

__d('htmlize',['htmlSpecialChars'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){return h(j).replace(/\r\n|[\r\n]/g,'<br/>');}f.exports=i;},null);
__d('PluginFlyoutDialog',['Arbiter','DOMEvent','DOMEventListener','PluginFlyout'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n,o){this.parent=new k(m,n,o);this.flyout=m;h.subscribe(k.SHOW,this.show.bind(this),h.SUBSCRIBE_NEW);}Object.assign(l.prototype,{show:function(){if(this.subscribed)return;this.subscribed=1;var m=window.ServerJSAsyncLoader;m&&m.ondemandjs&&m.run(m.ondemandjs);j.add(this.flyout.parentNode,'click',(function(n){n=new i(n);if(n.target===this.flyout.parentNode){n.kill();this.parent.hide();}}).bind(this));}});f.exports=l;},null);
__d('MentionsInputMatchers',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=['@','\\uff20'].join(''),i=['#','\\uFF03'].join(''),j='.,+*?$|#{}()\\^\\-\\[\\]\\\\\/!%\'"~=<>_:;\n\r',k=j.replace('#','')+'&',l='\u200B';function m(p,q){'use strict';this.$Matchers1=p;this.$Matchers2=q;this.$Matchers3();}m.prototype.$Matchers3=function(){'use strict';var p=this.$Matchers4(this.$Matchers2),q=this.$Matchers5(this.$Matchers1,this.$Matchers2),r=this.$Matchers6(this.$Matchers1,q),s=this.$Matchers7(p,r),t=this.$Matchers8(p);this.$Matchers9=new RegExp('['+this.$Matchers1+']$');this.$Matchers10=new RegExp(r+'$');this.$Matchers11=new RegExp(t+'$');this.$Matchers12=new RegExp(s+'$');this.$Matchers13=new RegExp('['+i+']');};m.prototype.$Matchers4=function(p){'use strict';return '\\b[A-Z][^ A-Z'+p+l+']';};m.prototype.$Matchers5=function(p,q){'use strict';return '(?:[^'+p+q+']|['+q+'][^ '+q+'])';};m.prototype.$Matchers6=function(p,q){'use strict';return '(?:^|\\s)(['+p+']('+q+'{0,20}))';};m.prototype.$Matchers7=function(p,q){'use strict';return '(?:(?:^|[^#])('+p+'+)|'+q+')';};m.prototype.$Matchers8=function(p){'use strict';return '(?:'+p+'{4,})';};m.prototype.getMainMatcher=function(){'use strict';return this.$Matchers10;};m.prototype.getTriggerMatcher=function(){'use strict';return this.$Matchers9;};m.prototype.getAutoMatcher=function(){'use strict';return this.$Matchers12;};m.prototype.getHashtagMatcher=function(){'use strict';return this.$Matchers13;};var n='\\b[A-Z][^ A-Z'+j+']',o={mentionsMatchers:new m(h,j),hashtagMatchers:new m(i,k),userMatcher:new RegExp('(?:'+n+'{4,})'+'$')};f.exports=o;},null);
__d('MentionsInput',['Arbiter','ArbiterMixin','Bootloader','CSS','DataStore','DOM','Event','FbtResult','FlipDirection','Input','InputSelection','Keys','MentionsInputMatchers','Parent','Style','TokenizeUtil','UserAgent_DEPRECATED','htmlize','mixin','removeFromArray','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){if(c.__markCompiled)c.__markCompiled();var ca,da,ea='\u200B',fa=new RegExp(ea,'g'),ga=function(qa){return qa+ea;},ha='\uFFFD',ia=/@+\[[0-9]+\:([^\]]|\\\])*\]+/g,ja=/[\\\]:]/g,ka={MENTIONS:'mentions',HASHTAGS:'hashtags'};function la(qa,ra){return qa.replace(ra,' '.repeat(ra.length));}function ma(qa,ra){return qa.substring(0,ra)+qa.substring(ra+1);}function na(qa){var ra=qa.lastIndexOf('>');if(ra>=0){var sa=qa.indexOf(' ',ra);return sa>=0?qa.substr(0,sa+1):qa;}else return '';}function oa(qa,ra,sa){var ta=sa.lastIndexOf('<',ra)>sa.lastIndexOf('>',ra);return ta?' ':'&nbsp;<wbr />';}ca=babelHelpers.inherits(pa,z(i));da=ca&&ca.prototype;function pa(qa,ra,sa,ta,ua,va){'use strict';da.constructor.call(this);l.set(qa,'MentionsInput',this);this._root=qa;this._typeahead=ra;this._input=sa;this._offsets=[];var wa=null,xa=this.init.bind(this,ta,ua,va);try{wa=document.activeElement===this._input;}catch(ya){}if(wa){setTimeout(xa,0);}else var za=n.listen(this._input,'focus',function(){setTimeout(xa,0);za.remove();});this._hasHashtags=ta.hashtags;this._hashtagsDataSource=ta.hashtags_data_source;this._mentionsDataSource=this._typeahead.getData();this._currentDataSource=this._mentionsDataSource;this._autoSuggestPages=ta.autosuggest_pages;this._lastHighlighterHTML='';this._hashtags=[];this._matchers=t.mentionsMatchers;this._setMatchersMode(ka.MENTIONS);}pa.prototype.init=function(qa,ra,sa){'use strict';if(this._initialized)return;this._initValue=ra?ra.value:'';this._initialized=true;this._highlighter=m.find(this._root,'.highlighter');this._highlighterInner=this._highlighter.firstChild;this._highlighterContent=m.find(this._root,'.highlighterContent');this._hiddenInput=m.find(this._root,'.mentionsHidden');this._placeholder=this._input.getAttribute('placeholder')||'';this._metrics=sa;if(!this._hiddenInput.name){var ta=this._input.name;this._input.name=ta+'_text';this._hiddenInput.name=ta;}this._initEvents();this._initTypeahead();if(ra===null){this._setup();}else this.reset(ra);this.inform('init',null,h.BEHAVIOR_STATE);};pa.prototype._setup=function(){'use strict';this._mentioned={};this._orderedUIDs=[];this._numMentioned=0;this._filterData=null;this._highlighterContent&&m.empty(this._highlighterContent);this._highlighterAuxContent&&m.remove(this._highlighterAuxContent);this._highlighterAuxContent=null;q.setPlaceholder(this._input,this._placeholder);v.set(this._typeahead.getElement(),'height','auto');};pa.prototype.reset=function(qa){'use strict';if(!this._initialized)return;this._setup();var ra=qa&&qa.value||'';this._value=ra;this._hiddenInput&&(this._hiddenInput.value=ra);if(this._input&&qa)q.setValue(this._input,qa.value);var sa=qa&&qa.mentions;if(sa&&sa.length){var ta=[];sa.forEach(function(ua){ta.push(ua.offset+ua.length);delete ua.offset;delete ua.length;this._addToken(ua);},this);ta.reverse().forEach(function(ua){ra=ra.substring(0,ua)+ea+ra.substring(ua);});}q.setValue(this._input,ra);if(this._value==='')p.setDirection(this._input);this._update();};pa.prototype.getValue=function(){'use strict';return q.getValue(this._input).replace(fa,'');};pa.prototype._getMarkedValue=function(){'use strict';return q.getValueRaw(this._input);};pa.prototype.getRawValue=function(){'use strict';this._update();return q.getValue(this._hiddenInput);};pa.prototype.checkValue=function(){'use strict';var qa=this._typeahead.getCore().getValue();if(this._matchers.getTriggerMatcher().exec(qa)||qa==='')this.inform('sessionEnd',{});};pa.prototype.getTypeahead=function(){'use strict';return this._typeahead;};pa.prototype.hasChanges=function(){'use strict';return !q.isEmpty(this._input)&&this._input.value!==this._initValue&&this._initialized;};pa.prototype.focus=function(){'use strict';this._input.focus();};pa.prototype._initEvents=function(){'use strict';var qa=this._update.bind(this);n.listen(this._input,{input:qa,keyup:qa,change:qa,blur:this._handleBlur.bind(this),focus:this._handleFocus.bind(this),keydown:this._handleKeydown.bind(this)});if(this._metrics){this._metrics.init(this._typeahead);this._metrics._reset();this._metrics.bindSessionStart(this._typeahead,'render',true);this._metrics.bindSessionEnd(this._typeahead.getView(),'select',true);this._metrics.bindSessionEnd(this,'sessionEnd',false);n.listen(this._input,'keyup',(function(event){setTimeout(this.checkValue.bind(this),0);}).bind(this));}};pa.prototype._initTypeahead=function(){'use strict';this._typeahead.subscribe('select',(function(va,wa){var xa=wa.selected;this._addToken({uid:xa.uid,text:xa.text,type:xa.type,weakreference:xa.weak_reference});this.updateValue();}).bind(this));var qa=this._input,ra=null;function sa(){if(ra===null){ra=q.getSubmitOnEnter(qa);q.setSubmitOnEnter(qa,false);}}function ta(){if(ra!==null){q.setSubmitOnEnter(qa,ra);ra=null;}}this._typeahead.subscribe('reset',ta);this._typeahead.subscribe('render',sa);this._typeahead.subscribe('highlight',function(va,wa){wa.index>=0?sa():ta();});this._typeahead.subscribe('query',(function(){this._filterData=null;}).bind(this));var ua=this._typeahead.getCore();ua.suffix=ea;this._handleFocus();};pa.prototype._handleBlur=function(){'use strict';if(this._filterToken){this._filterToken.remove();this._filterToken=null;}};pa.prototype._handleFocus=function(){'use strict';if(!this._filterToken)this._filterToken=this._typeahead.getData().addFilter(this._filterResults.bind(this));this._updateWidth();};pa.prototype._handleKeydown=function(event){'use strict';var qa=event.keyCode;if(qa==s.BACKSPACE||qa==s.DELETE)this._handleBackspaceAndDelete(event,qa);if(qa==s.LEFT||qa==s.RIGHT)setTimeout(this._handleLeftAndRight.bind(this,qa),10);};pa.prototype._handleLeftAndRight=function(qa){'use strict';var ra=this._getMarkedValue(),sa=r.get(this._input),ta=sa.start,ua=sa.end,va=qa==s.LEFT,wa=qa==s.RIGHT;if(ta==ua){var xa=va?-1:1;if(ra.charAt(ta)==ea)r.set(this._input,ta+xa);}else if(va&&ra.charAt(ta)==ea){r.set(this._input,ta-1,ua);}else if(va&&ra.charAt(ua)==ea){r.set(this._input,ta,ua-1);}else if(wa&&ra.charAt(ua)==ea){r.set(this._input,ta,ua+1);}else if(wa&&ra.charAt(ta)==ea)r.set(this._input,ta+1,ua);};pa.prototype._handleBackspaceAndDelete=function(event,qa){'use strict';var ra=r.get(this._input),sa=false;if(ra.start!==ra.end)if(this._offsetIsInsideMention(ra.start+1)&&this._offsetIsInsideMention(ra.end)){sa=qa===s.BACKSPACE;}else return;var ta=qa===s.DELETE?1:-1,ua=ta+(sa?ra.end:ra.start),va=this._getMarkedValue(),wa=va;for(var xa=0;xa<this._orderedUIDs.length;++xa){var ya=this._mentioned[this._orderedUIDs[xa]],za=ya.text,ab=ga(za),bb=wa.indexOf(ab),cb=bb+ab.length;if(ua<bb||ua>=cb){wa=la(wa,ab);continue;}var db,eb;if(ya.type!='user'){db=0;eb=[za];}else{db=ab.substring(0,ua-bb).split(' ').length-1;eb=za.split(' ');}var fb=eb.splice(db,1)[0],gb=eb.join(' '),hb=db===0?bb:cb-fb.length-1;if(gb){ya.text=gb;gb=ga(gb);}else this._removeToken(ya.uid);var ib=va.substring(0,bb)+gb+va.substring(cb);q.setValue(this._input,ib);r.set(this._input,hb);this._update();event.kill();break;}};pa.prototype._offsetIsInsideMention=function(qa){'use strict';for(var ra=0;ra<this._offsets.length;ra++)if(qa>this._offsets[ra][0]&&qa<=this._offsets[ra][1])return true;return false;};pa.prototype._filterResults=function(qa){'use strict';if(this._filterData===null){var ra=r.get(this._input).start;if(this._offsetIsInsideMention(ra)){this._filterData={caretIsInsideMention:true};return false;}var sa=this._typeahead.getCore();this._filterData={value:sa.getValue(),rawValue:sa.getRawValue()};}if(this._filterData.caretIsInsideMention)return false;if(this._matchers.getMainMatcher().test(this._filterData.rawValue))return true;if(qa.type!='user'&&!qa.connected_page)return false;if(qa.disable_autosuggest)return false;if(this._matchersMode===ka.MENTIONS&&t.userMatcher.test(this._filterData.value))return true;return w.isExactMatch(this._filterData.value,this._typeahead.getData().getTextToIndex(qa));};pa.prototype._addToken=function(qa){'use strict';var ra=qa.uid;if(!this._mentioned.hasOwnProperty(ra)){this._mentioned[ra]=qa;var sa=this._orderedUIDs,ta=this._getMarkedValue().replace(ia,ha),ua=ta.indexOf(ga(this._mentioned[ra].text)),va=false,wa=0;for(var xa=0;xa<sa.length;++xa){var ya=ga(this._mentioned[sa[xa]].text),za=ta.indexOf(ya,wa);wa=za+ya.length;if(ua<za){this._orderedUIDs.splice(xa,0,ra);va=true;break;}}if(!va)this._orderedUIDs.push(ra);this._numMentioned++;this._update();}};pa.prototype._removeToken=function(qa){'use strict';if(this._mentioned.hasOwnProperty(qa)){delete this._mentioned[qa];aa(this._orderedUIDs,qa);this._numMentioned--;this._update();}};pa.prototype._update=function(qa){'use strict';qa=qa||{};var ra=this._getMarkedValue();this._checkShouldSwapDataSource(ra);if(ra==this._value)return;this._value=ra;this._updateTypeahead();this._updateMentions();this._updateWidth();setTimeout(this._updateDirection.bind(this),0);this.updateValue();var sa=this.hasAuxContent();this.inform('valueUpdate',{value:ra,hasAuxContent:sa});};pa.prototype._updateMentions=function(){'use strict';this._offsets=[];var qa=this._getMarkedValue(),ra=qa;for(var sa=0;sa<this._orderedUIDs.length;++sa){var ta=this._orderedUIDs[sa],ua=ga(this._mentioned[ta].text),va=ra.indexOf(ua);if(va==-1)this._removeToken(ta);ra=la(ra,ua);this._offsets.push([va,va+ua.length]);}var wa=qa;while((va=ra.indexOf(ea))>-1){wa=ma(wa,va);ra=ma(ra,va);}if(qa!==wa){var xa=r.get(this._input);q.setValue(this._input,wa);r.set(this._input,xa.start);this._value=wa;}};pa.prototype._renderHashtags=function(qa){'use strict';this._initHashtagParser(qa);if(!this._hasHashtags||!this._hashtagParser)return y(qa);this._hashtags=this._hashtagParser.parse(qa);var ra=[],sa=0;for(var ta=0;ta<this._hashtags.length;ta++){var ua=this._hashtags[ta];ra.push(y(qa.substring(sa,ua.rawOffset)),'<b>',ua.marker,ua.tag,'</b>');sa=ua.rawOffset+ua.marker.length+ua.tag.length;}ra.push(y(qa.substring(sa)));return ra.join('');};pa.prototype.updateValue=function(){'use strict';var qa=this._value=this._getMarkedValue(),ra=this._orderedUIDs,sa=qa.replace(ia,ha);for(var ta=0;ta<ra.length;++ta){var ua='@['+ra[ta]+':]',va=ga(this._mentioned[ra[ta]].text);sa=sa.replace(va,ua);qa=qa.replace(va,ua);}var wa=this._renderHashtags(qa);for(var ta=0;ta<ra.length;++ta){var xa=ra[ta],ya=this._mentioned[xa],za=ya.text,ab=ya.weakreference?'<b class="weak">':'<b>';wa=wa.replace('@['+xa+':]',ab+y(ga(za))+'</b>');za=za.replace(ja,function(cb){return '\\'+cb;});sa=sa.replace('@['+xa+':]','@['+xa+':'+za+']');}var bb=na(wa);if(this._highlighterAuxContent||bb!==this._lastHighlighterHTML){if(x.ie()<9)wa=wa.replace(/ /g,oa);this._highlighterContent.innerHTML=wa;this._updateHighlighter();this._lastHighlighterHTML=bb;}this._hiddenInput.value=sa;this._updateHeight();};pa.prototype._updateDirection=function(){'use strict';var qa=v.get(this._input,'direction');if(qa==this._dir)return;this._dir=qa;v.set(this._highlighter,'direction',qa);if(qa=='rtl'){v.set(this._highlighter,'text-align','right');}else v.set(this._highlighter,'text-align','left');};pa.prototype._updateWidth=function(){'use strict';var qa=this._input.offsetWidth;if(qa===this._lastInputWidth)return;this._lastInputWidth=qa;var ra=v.getFloat.bind(null,this._input),sa=qa-ra('paddingLeft')-ra('paddingRight')-ra('borderLeftWidth')-ra('borderRightWidth');this._highlighterInner.style.width=Math.max(sa,0)+'px';};pa.prototype._updateHeight=function(){'use strict';if(this._highlighterAuxContent){var qa=this._highlighter.offsetHeight,ra=this._typeahead.getElement();if(qa>ra.offsetHeight){this._typeahead.setHeight(qa);h.inform('reflow');}}};pa.prototype._updateTypeahead=function(){'use strict';var qa=this._typeahead.getCore();qa.matcher=this._matchers.getAutoMatcher();qa.setExclusions(this._orderedUIDs);this.inform('update',{mentioned:this._mentioned});};pa.prototype.setPlaceholder=function(qa){'use strict';this._placeholder=qa instanceof o?qa.toString():qa;if(!this.hasAuxContent())q.setPlaceholder(this._input,this._placeholder);};pa.prototype._updateHighlighter=function(){'use strict';if(this._highlighterContent)k.conditionShow(this._highlighterContent,this._numMentioned>0||this.hasAuxContent()||this._hashtags.length);};pa.prototype.setAuxContent=function(qa){'use strict';if(this._highlighterContent){if(!this._highlighterAuxContent){this._highlighterAuxContent=m.create('span',{className:"highlighterAuxContent"});m.insertAfter(this._highlighterContent,this._highlighterAuxContent);}m.setContent(this._highlighterAuxContent,qa);if(qa){q.setPlaceholder(this._input,'');}else q.setPlaceholder(this._input,this._placeholder);this._value=null;this._update();this._updateHighlighter();this._updateHeight();}};pa.prototype.hasAuxContent=function(){'use strict';var qa=this.getAuxContentRoot();return qa&&k.shown(qa)&&qa.innerHTML.length>0;};pa.prototype.getAuxContentRoot=function(){'use strict';return this._highlighterAuxContent;};pa.prototype.addMention=function(qa,ra){'use strict';ra=typeof ra==='undefined'?true:ra;var sa=ra===false?'':' ',ta=this._getMarkedValue();if(ta!=='')ta+=' ';q.setValue(this._input,ta+ga(qa.text)+sa);this._addToken(qa);this._update();};pa.prototype.getMentions=function(){'use strict';return this._mentioned;};pa.prototype.bootloadHashtagParser=function(){'use strict';if(!this._hashtagParser)j.loadModules(["HashtagParser"],(function(qa){this._hashtagParser=qa;if(this._initialized){this._value=null;this._update();}}).bind(this));};pa.getInstance=function(qa){'use strict';var ra=u.byClass(qa,'uiMentionsInput');return ra?l.get(ra,'MentionsInput'):null;};pa.prototype._checkShouldSwapDataSource=function(qa){'use strict';this._initHashtagParser(qa);if(!this._hashtagsDataSource||!this._hashtagParser)return;var ra=this._isInsideHashtagToken(qa);if(this._matchersMode===ka.HASHTAGS&&!ra){this._setMatchersMode(ka.MENTIONS);this._swapData(this._mentionsDataSource);}else if(this._matchersMode===ka.MENTIONS&&ra){this._setMatchersMode(ka.HASHTAGS);this._swapData(this._hashtagsDataSource);}};pa.prototype._swapData=function(qa){'use strict';this._currentDataSource=qa;this._typeahead.swapDataNoCoreReset(this._currentDataSource);this._metrics.data=this._currentDataSource;this._metrics.initEvents();};pa.prototype._isInsideHashtagToken=function(qa){'use strict';this._hashtags=this._hashtagParser.parse(qa);var ra=r.get(this._input).start;for(var sa=0;sa<this._hashtags.length;sa++){var ta=this._hashtags[sa],ua=ta.offset;if(ra>=ua&&ra<=ua+ta.tag.length+1)return true;}return false;};pa.prototype._initHashtagParser=function(qa){'use strict';if(this._hashtagParser)return;if(this._matchers.getHashtagMatcher().exec(qa))this.bootloadHashtagParser();};pa.prototype._setMatchersMode=function(qa){'use strict';switch(qa){case ka.MENTIONS:this._matchers=t.mentionsMatchers;break;case ka.HASHTAGS:this._matchers=t.hashtagMatchers;break;default:throw new Error('MatchersMode enum is missing constant '+qa);}this._matchersMode=qa;};f.exports=pa;},null);
__d('legacy:MentionsInput',['MentionsInput'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.MentionsInput=c('MentionsInput');},3);
__d('TypeaheadAreaCore',['InputSelection','TextAreaControl','TypeaheadCore','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,j);m=l&&l.prototype;function n(o){'use strict';m.constructor.call(this,o);this.matcher=new RegExp(this.matcher+'$');this.preventFocusChangeOnTab=true;}n.prototype.select=function(o){'use strict';m.select.call(this,o);var p=this.element.value,q=this.prefix+o.text+this.suffix;this.expandBounds(p,q);var r=p.substring(0,this.start),s=p.substring(this.end);this.element.value=r+q+s;h.set(this.element,r.length+q.length);};n.prototype.expandBounds=function(o,p){'use strict';o=o.toLowerCase();p=p.toLowerCase();var q,r,s,t,u=/\s/;r=o.substring(this.start,this.end);s=p.indexOf(r);q=this.start;while(q>=0&&s>=0){t=o.charAt(q-1);if(!t||u.test(t))this.start=q;r=t+r;s=p.indexOf(r);q--;}r=o.substring(this.start,this.end);s=p.indexOf(r);q=this.end;while(q<=o.length&&s>=0){t=o.charAt(q);if(!t||u.test(t))this.end=q;r=r+t;s=p.indexOf(r);q++;}};n.prototype.getRawValue=function(){'use strict';var o=h.get(this.element).start||0;return m.getValue.call(this).substring(0,o);};n.prototype.getValue=function(){'use strict';var o=this.matcher&&this.matcher.exec(this.getRawValue());if(!o)return '';var p=o[0],q=o.index+p.length;p=p.replace(/^\s/,'');var r=p.length;p=p.replace(/\s$/,'');var s=r-p.length;this.start=q-r;this.end=q+s;if(o[2]&&(o[2].charAt(0)==='#'||o[2].charAt(0)==='\\uFF03'))return o[2];return o[3]||o[1]||o[0];};n.prototype.updateHeight=function(){'use strict';var o=i.getInstance(this.element);o.updateHeight();};Object.assign(n.prototype,{prefix:'',suffix:', ',matcher:"\\b[^,]*",click:k});f.exports=n;},null);
__d('TypeaheadHoistFriends',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';var i=this._typeahead.getView();this._subscription=i.subscribe('beforeRender',function(j,k){var l=[],m=[],n=[];for(var o=0;o<k.results.length;++o){var p=k.results[o];if(p.type=='header'){n=n.concat(m,l);n.push(p);m=[];l=[];}else if(p.type=='user'&&p.bootstrapped){m.push(p);}else l.push(p);}k.results=n.concat(m,l);});};h.prototype.disable=function(){'use strict';this._typeahead.getView().unsubscribe(this._subscription);this._subscription=null;};Object.assign(h.prototype,{_subscription:null});f.exports=h;},null);
__d('legacy:HoistFriendsTypeaheadBehavior',['TypeaheadHoistFriends'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.hoistFriends=function(i){i.enableBehavior(h);};},3);
__d("QueriesHistory",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){"use strict";this.$QueriesHistory1=i;this.reset();}h.prototype.getQueries=function(){"use strict";return this.$QueriesHistory2;};h.prototype.getCurrentLength=function(){"use strict";return this.$QueriesHistory3;};h.prototype.add=function(i){"use strict";this.$QueriesHistory2.push(i);this.$QueriesHistory3+=i.length;while(this.$QueriesHistory2.length!==0&&this.$QueriesHistory3>this.$QueriesHistory1){var j=this.$QueriesHistory2.shift();this.$QueriesHistory3-=j.length;}};h.prototype.reset=function(){"use strict";this.$QueriesHistory3=0;this.$QueriesHistory2=[];};f.exports=h;},null);
__d('TypeaheadMetrics',['AsyncRequest','Event','QueriesHistory','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=1000;function m(n){'use strict';this.extraData={};Object.assign(this,n);}m.prototype.init=function(n){'use strict';this.init=k;this._initImpl(n);};m.prototype._initImpl=function(n){'use strict';this.core=n.getCore();this.view=n.getView();this.data=n.getData();this.queriesHistory=new j(l);this.stats={};this.sessionActive=false;this._sessionStartEvents=[];this._sessionEndEvents=[];this._reset();this.initEvents();};m.prototype._reset=function(){'use strict';this.log=[];this.stats={};this.avgStats={};this.sessionActive=false;this._setSid(Math.floor(Date.now()*Math.random()));this.request_ids=[];this.lastNotBackspacedQuery='';this.queriesHistory.reset();this._logEvent('session_started',{});};m.prototype._logEvent=function(n,o){'use strict';var p={type:n,data:o,time:Date.now()};this.log.push(p);};m.prototype._setSid=function(n){'use strict';this.sid=n;if(typeof this.data.queryData==='object'&&this.data.queryData!==null){this.data.queryData.sid=this.sid;}else this.data.setQueryData({sid:this.sid});if(typeof this.data.bootstrapData==='object'&&this.data.bootstrapData!==null){this.data.bootstrapData.sid=this.sid;}else this.data.setBootstrapData({sid:this.sid});};m.prototype.resetWithData=function(n){'use strict';this.init=k;this._initImpl(n);};m.prototype.resetWithDataBeforeSessionEnd=function(n){'use strict';var o=this.sessionActive;this.init=k;this._initImpl(n);this.sessionActive=o;};m.prototype.recordSelect=function(n){'use strict';var o=n.selected;if(o.uid==null){this.recordStat('selected_id','SELECT_NULL');}else this.recordStat('selected_id',o.uid);this.recordStat('selected_type',o.type);this.recordStat('selected_score',o.score);this.recordStat('selected_original_id',o.original_id);this.recordStat('place_id',o.place_id);this.recordStat('client_time',o.client_time);this.recordStat('selected_position',n.index);this.recordStat('selected_with_mouse',n.clicked?1:0);this.recordStat('selected_query',n.query);this._sessionEnd();};m.prototype.bindSessionStart=function(n,event,o){'use strict';if(o)for(var p=0;p<this._sessionStartEvents.length;++p){var q=this._sessionStartEvents[p];q.obj.unsubscribe(q.token);}this._sessionStartEvents.push({obj:n,token:n.subscribe(event,(function(r,s){this._sessionStart();}).bind(this))});};m.prototype.bindSessionEnd=function(n,event,o){'use strict';if(o)for(var p=0;p<this._sessionEndEvents.length;++p){var q=this._sessionEndEvents[p];q.obj.unsubscribe(q.token);}this._sessionEndEvents.push({obj:n,token:n.subscribe(event,(function(r,s){this._sessionEnd();}).bind(this))});};m.prototype.dataSubscribe=function(n,o){'use strict';var p=this.data,q=this.data.subscribe(n,o);this._dataSubscriptions.push(function(){p.unsubscribe(q);});};m.prototype.initEvents=function(){'use strict';this._dataSubscriptions=this._dataSubscriptions||[];this._dataSubscriptions.forEach(function(n){n();});this._dataSubscriptions=[];this.bindSessionStart(this.core,'focus',false);this.bindSessionEnd(this.core,'blur',false);this.view.subscribe('select',(function(n,o){this.recordSelect(o);}).bind(this));this.bindSessionEnd(this.view,'select',false);this.view.subscribe('render',(function(n,o){this.results=o;}).bind(this));this.dataSubscribe('beforeQuery',(function(n,o){this._logEvent('user_typed',{query:o.value});if(!o.value)return;this.query=o.value;this.queriesHistory.add(this.query);if(this.lastNotBackspacedQuery.indexOf(this.query)!==0)this.lastNotBackspacedQuery=this.query;this.recordCountStat('num_queries');}).bind(this));this.dataSubscribe('beforeFetch',(function(n,o){if(o.fetch_context.bootstrap){this.bootstrapBegin=Date.now();}else o.fetch_context.queryBegin=Date.now();this._logEvent('async_query_started',{query:o.fetch_context.value,request_id:o.fetch_context.request_id});}).bind(this));this.dataSubscribe('fetchComplete',(function(n,o){this._logEvent('async_query_completed',{query:o.fetch_context.value,request_id:o.fetch_context.request_id});if(o.fetch_context.bootstrap){this.recordAvgStat('bootstrap_latency',Date.now()-this.bootstrapBegin);var p={};o.response.payload.entries.forEach(function(q){if(!p[q.type]){p[q.type]=1;}else p[q.type]++;});this.recordStat('bootstrap_response_types',p);this.bootstrapped=true;}else{if('filtered_count' in o.response.payload)this.recordStat('filtered_count',o.response.payload.filtered_count);this.recordAvgStat('avg_query_latency',Date.now()-o.fetch_context.queryBegin);}}).bind(this));this.dataSubscribe('respond',(function(n,o){this._logEvent('respond',{query:o.value,num_results:o.results.length});var p=this.data.tokenizeBackend(o.value||'').flatValue,q=this.data.findBestPreviousQuery(p,this.data.getQueryIDs())||'',r=this.data.getQueryIDs()[q];this.normalized_backend_query=q;this.request_id=r;this.request_ids.push(r);}).bind(this));this.dataSubscribe('dirty',(function(n,o){this.bootstrapped=false;}).bind(this));};m.prototype._sessionStart=function(){'use strict';if(this.sessionActive)return;this.sessionActive=true;};m.prototype._sessionEnd=function(){'use strict';if(!this.sessionActive)return;this.sessionActive=false;this.submit();this._reset();};m.prototype.recordStat=function(n,o){'use strict';this.stats[n]=o;};m.prototype.recordCountStat=function(n){'use strict';var o=this.stats[n];this.stats[n]=o?o+1:1;};m.prototype.recordAvgStat=function(n,o){'use strict';if(this.avgStats[n]){this.avgStats[n][0]+=o;++this.avgStats[n][1];}else this.avgStats[n]=[o,1];};m.prototype.hasStats=function(){'use strict';return !!Object.keys(this.stats).length;};m.prototype.submit=function(){'use strict';if('log_all_sessions' in this.extraData||this.hasStats()){Object.assign(this.stats,this.extraData);if(this.results){var n=this.results.map(function(q,r){return q.uid;});this.recordStat('candidate_results',JSON.stringify(n));}if(this.query)this.recordStat('query',this.query);if(this.lastNotBackspacedQuery)this.recordStat('last_not_backspaced_query',this.lastNotBackspacedQuery);this.recordStat('queries_history',JSON.stringify(this.queriesHistory.getQueries()));if(this.normalized_backend_query)this.recordStat('normalized_backend_query',this.normalized_backend_query);if(this.request_id)this.recordStat('request_id',this.request_id);if(this.request_ids.length)this.recordStat('request_ids',this.request_ids);if(this.sid)this.recordStat('sid',this.sid);if(this.bootstrapped)this.recordStat('bootstrapped',1);for(var o in this.avgStats){var p=this.avgStats[o];this.stats[o]=p[0]/p[1];}this.recordStat('log',JSON.stringify(this.log));new h().setURI(this.endPoint).setMethod('POST').setData({stats:this.stats}).setErrorHandler(k).send();this._reset();}};m.register=function(n,o,p){'use strict';if(document.activeElement===n){o.init(p);}else var q=i.listen(n,'focus',function(){o.init(p);q.remove();});};Object.assign(m.prototype,{endPoint:'/ajax/typeahead/record_basic_metrics.php'});f.exports=m;},null);