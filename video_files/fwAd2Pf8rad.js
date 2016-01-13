/*!CK:2183568708!*//*1448177359,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pe5B9"]); }

__d("ComposerXAjaxEndpoint",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={ADS_MEDIA_UPLOAD:"\/ajax\/ads\/create\/composerx\/attachment\/media\/upload\/",ADS_ATTACHMENT_STATUS:"\/ajax\/ads\/create\/composerx\/attachment\/status\/",MEDIA_UPLOAD:"\/ajax\/composerx\/attachment\/media\/upload\/",VIDEO_UPLOAD:"\/ajax\/composerx\/attachment\/video\/upload\/"};},null,{});
__d("ComposerXContextConfig",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={propertyNames:{actorID:"ACTOR_ID",postID:"POST_ID"},propertyValues:{ACTOR_ID:"actorID",POST_ID:"postID"}};},null,{});
__d('ComposerXAttachmentBootstrap',['CSS','Form','Parent','URI','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=[],n={bootstrap:function(o){n.load(j.byTag(o,'form'),o.getAttribute('data-endpoint'));},load:function(o,p,q){var r=new k(p).addQueryData({composerurihash:n.getURIHash(p)});h.conditionClass(o,"_fu",q);var s=j.byClass(o,"_2_4");h.removeClass(s,'async_saving');i.setDisabled(o,false);o.action=r.toString();i.bootstrap(o);},getURIHash:function(o){if(o==='initial')return 'initial';var p=m.indexOf(o);if(p!==-1){return p+'';}else{p=m.length;m[p]=o;return p+'';}}};f.exports=n;},null);
__d('ComposerXContext',['ComposerXContextConfig','invariant'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=function(l){return h.propertyNames[l];};function k(l){'use strict';this.$ComposerXContext1={};for(var m in l)this.setProperty(m,l[m]);}k.prototype.getProperty=function(l){'use strict';!j(l)?i(0):undefined;return this.$ComposerXContext1[l];};k.prototype.setProperty=function(l,m){'use strict';!j(l)?i(0):undefined;this.$ComposerXContext1[l]=m;return this;};k.PROPERTIES=h.propertyValues;f.exports=k;},null);
__d('ComposerXSessionIDInserter',['ComposerXSessionIDs','DOM','DOMQuery','Event','Parent','csx','cx','onEnclosingPageletDestroy'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p={init:function(q){var r=k.listen(q,'submit',p._onSubmit);o(q,function(){r.remove();});},_onSubmit:function(q){p.insertSessionInput(q.getTarget());},insertSessionInput:function(q){var r=l.byClass(q,"_119");if(!r)return;var s=h.getSessionID(r.id);if(!s)return;var t=j.scry(q,"._5r_b")[0];if(!t){i.prependContent(q,h.createSessionIDInput(s));}else t.value=s;}};f.exports=p;},null);
__d('DynamicIconSelector',['Button','CSS','DOM','SelectorDeprecated'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l={swapIcon:function(m){var n=k.getSelectedOptions(m)[0],o=n&&j.scry(n,'.itemIcon')[0],p=k.getSelectorButton(m);if(o){h.setIcon(p,o.cloneNode(true));}else{var q=j.scry(p,'.img')[0];q&&j.remove(q);}i.conditionClass(p,'uiSelectorChevronOnly',!o);}};k.subscribe('change',function(m,n){var o=n.selector;if(i.hasClass(o,'dynamicIconSelector'))l.swapIcon(o);});f.exports=l;},null);
__d('PrivacySelectorOption',['Arbiter','AudienceSelectorTags','CSS','CurrentUser','DOM','DynamicIconSelector','Parent','PrivacyConst','SelectorDeprecated','csx','fbt','intlList'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){if(c.__markCompiled)c.__markCompiled();function t(u,v){if(!u)throw new Error("there's no DOM option. Config data: ",v);this._elem=u;this._selector=n.byClass(this._elem,'audienceSelector');if(!this._selector)return;this._priv_base_val=v.priv_base_val;this._audienceCount=v.audience_count||"";this._hasRestricted=v.has_restricted||false;this._isCustom=v.is_custom||false;this._includedAudience=v.included||"";this._excludedAudience=v.excluded||{};this._excludedTaggees={};this._tagExpansionBehavior=v.tag_expansion_behavior||o.TagExpansion.NONE;this._plusLabel=l.scry(u,'.plusLabel')[0];this._audienceCountLabel=l.scry(u,'.audienceCountLabel')[0];this._taggedIDs=[];this._tags=[];this._recalculateTooltipAndLabel();this._updateOptionCountLabel();this._updateSelector();h.subscribe('Composer/changedtags',(function(w,x){var y=j.hasClass(this._selector,'composerAudienceSelector');if(!this._getChangedData()||!y)return;this._tags=[];this._taggedIDs=[];for(var z=0;z<x.withTags.length;z++){var aa=x.withTags[z].info;if(aa.uid!=k.getID()){this._tags.push(aa.text);this._taggedIDs.push(aa.uid);}}for(z in x.mention)if(x.mention[z].type=='user'&&x.mention[z].uid!=k.getID()){this._tags.push(x.mention[z].text);this._taggedIDs.push(x.mention[z].uid);}var ba=l.scry(document.body,"._5l7q")[0];ba&&!!this._taggedIDs.length&&j.hide(ba);this._updateOptionCountLabel();var ca=this._recalculateTooltipAndLabel();if(ca&&p.isOptionSelected(this._elem)){this._updateSelector();h.inform('SelectedPrivacyOption/changed',this._getChangedData());}}).bind(this));p.listen(this._selector,'change',this._updateSelector.bind(this));}Object.assign(t.prototype,{updateOption:function(u,v,w,x,y){this._priv_base_val=u;this._includedAudience=v;this._excludedAudience=w;this._tagExpansionBehavior=x;this._audienceCount=y;this._recalculateTooltipAndLabel();this._updateOptionCountLabel();return {label:this._label,tooltip:this._tooltip};},_recalculateTooltipAndLabel:function(){var u=this._label;this._label=this._getNewSelectorLabel();var v=this._tooltip;this._tooltip=this._getNewTooltip();return v!=this._tooltip||u!=this._label;},_getNewTooltip:function(){if(this._isCustom)return this._recalcCustomTooltip();switch(this._priv_base_val){case o.FriendsValue.ALL_FRIENDS:return this._recalcFriendsTooltip();case o.FriendsValue.FRIENDS_MINUS_ACQUAINTANCES:return this._recalcFriendsMinusTooltip();case o.FriendsValue.SELF:var u=this._getTagExpansionText();return u?u:this._getIncludedAudience();default:return this._recalcCustomTooltip();}},_getNewSelectorLabel:function(){var u=this._elem.getAttribute('data-label').replace(/\(.*\)/,"");if(this._showAudienceCount()){var v=' ('+this._audienceCount+')';u+=v;}if(this._isTagExpanded())u+=' (+)';return u;},_updateOptionCountLabel:function(){if(this._audienceCountLabel){if(this._showAudienceCount()){var u=' ('+this._audienceCount+')';l.setContent(this._audienceCountLabel,u);}j.conditionShow(this._audienceCountLabel,this._showAudienceCount());}this._plusLabel&&j.conditionShow(this._plusLabel,this._isTagExpanded());},_getChangedData:function(){return {tags:this._taggedIDs,privacy:this._priv_base_val};},_showAudienceCount:function(){return this._audienceCountLabel&&this._audienceCount&&this._audienceCount.length>0;},_isTagExpanded:function(){var u=this._getTagExpansionBehavior(),v=!!this._taggedIDs.length||this._alreadyHasTags();return v&&u!=o.TagExpansion.NONE;},_alreadyHasTags:function(){var u=l.scry(this._selector,'*[data-oid]')[0];u=u&&u.getAttribute('data-oid');return u&&i.hasTags(u);},_updateSelector:function(){if(!this._isSharedAlbum()&&p.isOptionSelected(this._elem)){var u=j.hasClass(this._selector,'composerAudienceSelector');u&&p.setButtonLabel(this._selector,this._label);p.setButtonTooltip(this._selector,this._tooltip);m.swapIcon(this._selector);return false;}return true;},_isSharedAlbum:function(){var u=l.scry(this._selector,'*[data-shared-album]')[0];return u&&u.getAttribute('data-shared-album');},_getTagExpansionBehavior:function(){if(this._tagExpansionBehavior)return this._tagExpansionBehavior;var u=this._priv_base_val===o.FriendsValue.SELF,v=this._priv_base_val===o.FriendsValue.EVERYONE;if(u&&this._isSharedAlbum()||v){return o.TagExpansion.NONE;}else if(this._priv_base_val<o.FriendsValue.ALL_FRIENDS)return o.TagExpansion.TAGGEES;return o.TagExpansion.FRIENDS_OF_TAGGEES;},_getTagExpansionText:function(){var u=this._getTagExpansionBehavior();if(!!this._taggedIDs.length||this._alreadyHasTags()){if(u==o.TagExpansion.FRIENDS_OF_TAGGEES){return r._("friends of anyone tagged");}else if(u==o.TagExpansion.TAGGEES)return r._("\u041d\u0456\u043a\u043e\u0433\u043e \u043d\u0435 \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043e");return '';}return '';},_getIncludedAudience:function(){if(this._includedAudience)return this._includedAudience;var u=this._priv_base_val===o.FriendsValue.SELF;if(u&&!this._isSharedAlbum())return r._("\u041b\u0438\u0448\u0435 \u044f");return this._elem.getAttribute('data-label');},_getCombinedSentence:function(u,v){if(!v)return u;return r._("{list of people who can see this}; Except: {list of people who cannot see this}",[r.param('list of people who can see this',u),r.param('list of people who cannot see this',v)]);},_recalcFriendsTooltip:function(){var u=this._tags.length;if(u>2){return this._hasRestricted?r._("\u0412\u0430\u0448\u0456 \u0434\u0440\u0443\u0437\u0456 \u0442\u0430 \u0434\u0440\u0443\u0437\u0456 \u0431\u0443\u0434\u044c-\u043a\u043e\u0433\u043e \u0456\u0437 \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043e\u0433\u043e; \u0417\u0430 \u0432\u0438\u043d\u044f\u0442\u043a\u043e\u043c: \u041e\u0431\u043c\u0435\u0436\u0435\u043d\u0438\u0445"):r._("Your friends and friends of anyone tagged");}else if(u==2){if(this._hasRestricted){return r._("Your friends, {user}'s friends and {user2}'s friends; Except: Restricted",[r.param('user',this._tags[0]),r.param('user2',this._tags[1])]);}else return r._("\u0412\u0430\u0448\u0438 \u0434\u0440\u0443\u0437\u0456, \u0434\u0440\u0443\u0437\u0456 {user} \u0442\u0430 {user2}",[r.param('user',this._tags[0]),r.param('user2',this._tags[1])]);}else if(u==1){if(this._hasRestricted){return r._("\u0412\u0430\u0448\u0456 \u0434\u0440\u0443\u0437\u0456 \u0442\u0430 \u0434\u0440\u0443\u0437\u0456 {user}, \u043e\u043a\u0440\u0456\u043c: \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0445 \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f",[r.param('user',this._tags[0])]);}else return r._("\u0412\u0430\u0448\u0456 \u0434\u0440\u0443\u0437\u0456 \u0442\u0430 \u0434\u0440\u0443\u0437\u0456 {user}",[r.param('user',this._tags[0])]);}else return this._hasRestricted?r._("\u0412\u0430\u0448\u0456 \u0434\u0440\u0443\u0437\u0456, \u043e\u043a\u0440\u0456\u043c \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u0438\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c"):r._("\u0412\u0430\u0448\u0456 \u0434\u0440\u0443\u0437\u0456");},_recalcFriendsMinusTooltip:function(){var u=this._tags.length;if(u>0||this._alreadyHasTags()){var v=r._("friends of anyone tagged"),w=r._("{people who can see this}, {list of more people who can see this}",[r.param('people who can see this',r._("\u0412\u0430\u0448\u0456 \u0434\u0440\u0443\u0437\u0456")),r.param('list of more people who can see this',v)]),x=r._("Acquaintances");if(this._hasRestricted)x=r._("{Name of Acquaintances friend list}, {restricted}",[r.param('Name of Acquaintances friend list',x),r.param('restricted',r._("\u041e\u0431\u043c\u0435\u0436\u0435\u043d\u0438\u0439"))]);return this._getCombinedSentence(w,x);}else{if(this._hasRestricted)return r._("\u0414\u0440\u0443\u0437\u0456, \u043e\u043a\u0440\u0456\u043c \u0437\u043d\u0430\u0439\u043e\u043c\u0438\u0445 \u0442\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432 \u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u0438\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043e\u043c");return r._("\u0414\u0440\u0443\u0437\u0456, \u0437\u0430 \u0432\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f\u043c \u0437\u043d\u0430\u0439\u043e\u043c\u0438\u0445");}},_recalcCustomTooltip:function(){var u=this._getIncludedAudience(),v=this._getTagExpansionText();if(v)u=r._("{list of people who can see this}, {list of additional people who can see this}",[r.param('list of people who can see this',u),r.param('list of additional people who can see this',v)]);for(var w=0;w<this._taggedIDs.length;w++){x=this._taggedIDs[w];if(x in this._excludedAudience){delete this._excludedAudience[x];this._excludedTaggees[x]=this._tags[w];break;}}for(var x in this._excludedTaggees)if(this._excludedTaggees.hasOwnProperty(x))if(this._taggedIDs.indexOf(x)===-1){this._excludedAudience[x]=this._excludedTaggees[x];delete this._excludedTaggees[x];break;}var y=[];for(w in this._excludedAudience)if(this._excludedAudience.hasOwnProperty(w))y.push(this._excludedAudience[w]);return this._getCombinedSentence(u,s(y));}});f.exports=t;},null);
__d('CustomPrivacyOptionController',['Arbiter','AsyncDialog','AsyncRequest','DOM','Event','Form','Parent','PrivacyConst','PrivacySelectorOption','SelectorDeprecated','XPrivacyCustomDialogController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();function s(t,u){if(!t)return;setTimeout((function(){this._selector=n.byClass(t,'audienceSelector');if(!this._selector)return;this.initCustomState(t,u.option_id,u.id);var v={priv_base_val:u.base_audience_value,audience_count:u.audience_count,is_custom:true,included:u.included_audience,excluded:u.excluded_audience,tag_expansion_behavior:u.tag_expansion_behavior};this._optionJSInstance=new p(t,v);l.listen(t,'click',(function(event){this.openCustomDialog(event,u.option_id,u.explain_tags,u.autosave,u.limit_community,u.limit_facebook,u.limit_fof,u.limit_tagexpand,u.source);}).bind(this));q.listen(this._selector,'select',(function(w){if(w.option._id!=this._id)this.clearCustomState();}).bind(this));}).bind(this),0);}Object.assign(s,{_instances:{},update:function(t,u,v,w,x,y,z,aa,ba){var ca=s._instances[t];ca._update(u,v)._updateOption(v,x,y,z,aa,ba);h.inform('Form/change',{node:ca._container});},getData:function(t){var u=s._instances[t];return u&&u._privacyData;},setPrivacyData:function(t,u,v){s._instances[t]._update(u,v);}});Object.assign(s.prototype,{_updateOption:function(t,u,v,w,x,y){var z=q.getOption(this._selector,t)||q.getOption(this._selector,o.BaseValue.CUSTOM+''),aa=this._optionJSInstance.updateOption(u,v,w,x,y);h.inform('CustomPrivacyOptionController/update',{selector:this._selector,option:z,tooltip:aa.tooltip,label:aa.label});return this;},_update:function(t,u){var v=u==o.BaseValue.CUSTOM||!q.getOption(this._selector,u),w=this._selector.getAttribute('data-name');this.updateCustomState(t,v,w);return this;},initCustomState:function(t,u,v){s._instances[u]=this;this._container=k.find(t,'.customPrivacyInputs');this._id=v;this._privacyData={};var w=m.serialize(this._container);if(w.audience)this._privacyData=w.audience[v];return t;},openCustomDialog:function(event,t,u,v,w,x,y,z,aa){var ba=r.getURIBuilder().setString('option_id',t).setString('id',this._id).setString('privacy_data',JSON.stringify(this._privacyData)).setBool('explain_tags',u).setBool('autosave',v).setBool('limit_community',w).setBool('limit_facebook',x).setBool('limit_fof',y).setBool('limit_tagexpand',z).setBool('is_new_privacy_selector',false).setString('source',aa).getURI(),ca=new j(ba);ca.setRelativeTo(event.getTarget());i.send(ca,(function(da){da.subscribe('cancel',(function(){h.inform('CustomPrivacyOptionController/cancel',{selector:this._selector});}).bind(this));}).bind(this));},updateCustomState:function(t,u,v){this.clearCustomState();this._privacyData=babelHelpers._extends({},t);if(u)if(v){v=v.slice(0,-'[value]'.length);var w={};w[v]=t;m.createHiddenInputs(w,this._container,{},true);}},clearCustomState:function(){this._privacyData={};k.empty(this._container);}});f.exports=s;},null);
__d('AudienceSelector',['Arbiter','AsyncRequest','AudienceSelectorTags','CSS','CustomPrivacyOptionController','DOM','DynamicIconSelector','PrivacyConst','SelectorDeprecated'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q={};p.subscribe('select',function(s,t){if(!k.hasClass(t.selector,'audienceSelector'))return;var u=p.getOptionValue(t.option);t.value=u;h.inform('AudienceSelector/changed',t);if(u==o.BaseValue.CUSTOM&&!k.hasClass(t.option,'noDialog')){p.toggle(t.selector);return false;}h.inform('AudienceSelector/changedNonCustomDialogButton',t);if(k.hasClass(t.selector,'dataTooltip')){var v=m.find(t.option,'.itemAnchor').getAttribute('data-tooltip');p.setButtonTooltip(t.selector,v||null);}if(!k.hasClass(t.option,'specialOption'))return;var w=m.find(t.option,'a').getAttribute('data-type');if(k.hasClass(t.option,'moreOption')){k.addClass(t.selector,w);k.addClass(t.selector,'showSecondaryOptions');return false;}else if(k.hasClass(t.option,'returnOption')){k.removeClass(t.selector,'showSecondaryOptions');k.removeClass(t.selector,'friendList');return false;}});var r={keepSynchronized:function(s,t){q[s]||(q[s]={});q[s][t.id]=t;},setHasTags:function(s){j.setHasTags(s);},getComposerInstance:function(){var s=q['PrivacyLiteNav/audience'];if(s){var t;for(var u in s){t=s[u];return t;}}return null;},forceAndKeepSynchronized:function(s,t){r.keepSynchronized(s,t);h.inform('AudienceSelector/update',{option:p.getSelectedOptions(t)[0],selector:t});},get:function(s){if(k.hasClass(s,'audienceSelector'))return s;var t=m.scry(s,'div.audienceSelector');if(t.length!=1)return;return t[0];},setAudience:function(s,t){var u=r.get(s);p.loadMenu(u,function(v){p.setSelected(u,t.toString());n.swapIcon(u);var w=p.getSelectedOptions(u),x=w[0]&&m.find(w[0],'a');if(x&&x.getAttribute('ajaxify'))i.bootstrap(x.getAttribute('ajaxify'),x,true);h.inform('AudienceSelector/changed',{option:w[0],selector:u});});}};h.subscribe('CustomPrivacyOptionController/update',function(s,t){if(!k.hasClass(t.selector,'audienceSelector'))return;p.setSelected(t.selector,p.getOptionValue(t.option));n.swapIcon(t.selector);var u=k.hasClass(t.selector,'composerAudienceSelector'),v=k.hasClass(t.selector,'inlineAudienceWidget');if(u||v)p.setButtonLabel(t.selector,t.label);p.setButtonTooltip(t.selector,t.tooltip);h.inform('AudienceSelector/update',t);});h.subscribe(['AudienceSelector/changed','AudienceSelector/update'],function(event,s){var t=p.getOptionValue(s.option),u={};if(t==o.BaseValue.CUSTOM){if(event=='AudienceSelector/changed')return;u=l.getData(s.option.id);if(!u)return;}else if(k.hasClass(s.selector,'inlineAudienceWidget'))p.setButtonLabel(s.selector,s.option.innerText);for(var v in q){var w=q[v];if(w[s.selector.id]){h.inform('AudienceSelector/syncNonSelectorIcon',{category:v});for(var x in w){var y=w[x];if(!y||s.selector===y)continue;if(p.getValue(y)!==t){p.setSelected(y,t);n.swapIcon(y);}if(t==o.BaseValue.CUSTOM){var z=p.getOption(y,o.BaseValue.CUSTOM+'');if(z){l.setPrivacyData(z.id,u,t);p.setButtonTooltip(y,s.tooltip);}}}}}});f.exports=r;},null);
__d("XStickyComposerChangeController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/sticky_composer\/change\/",{privacyx:{type:"String"},logging_source:{type:"String"}});},null,{});
__d('PrivacySelector',['Arbiter','ArbiterMixin','AsyncRequest','AudienceSelector','CSS','DOM','PrivacyConst','DataStore','PrivacySelectorNewDispatcher','Run','SelectorDeprecated','SubscriptionsHandler','XStickyComposerChangeController','csx','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w,x;w=babelHelpers.inherits(y,v(i));x=w&&w.prototype;function y(z,aa){'use strict';x.constructor.call(this);this.$PrivacySelector1=aa;if(aa){this.$PrivacySelector2=z;}else this.$PrivacySelector3=z;this.$PrivacySelector4=null;this.$PrivacySelector5=new s();this.$PrivacySelector6=new s();if(this.$PrivacySelector1){this.$PrivacySelector7();}else this.$PrivacySelector8();q.onLeave(this.cleanup.bind(this));}y.prototype.select=function(z,aa,ba){'use strict';if(!z||!aa)throw new Error('PrivacySelector.select: you must pass in privacyParam '+'and privacyBase');if(this.$PrivacySelector1){if(ba)this.$PrivacySelector5.addSubscriptions(this.$PrivacySelector2.subscribeOnce('changed',function(ca,da){ba('changed',{post_param:da.post_param});}));this.$PrivacySelector2.selectOption(z);}else{if(ba)this.$PrivacySelector6.addSubscriptions(h.subscribe('AudienceSelector/changed',(function(ca,da){if(this.$PrivacySelector9(da.selector)){var ea=r.getOptionValue(da.option);ba('changed',{privacy_base:ea});}}).bind(this)));k.setAudience(this.$PrivacySelector3,aa);}};y.prototype.expandFull=function(z){'use strict';if(this.$PrivacySelector1){this.$PrivacySelector2.openSelectorExpanded(z);}else this.expand(z);};y.prototype.expandFullAndShowFlyout=function(z){'use strict';this.expandFull(this.showFlyoutOnMenu.bind(this,z));};y.prototype.expand=function(z){'use strict';if(this.$PrivacySelector1){this.$PrivacySelector2.openSelector(z);}else{var aa=r.getSelectorMenu(this.$PrivacySelector3);if(!aa){r.loadMenu(this.$PrivacySelector3,function(){z&&z();});}else this.$PrivacySelector6.addSubscriptions(r.listen(this.$PrivacySelector3,'open',(function(){z&&z();this.$PrivacySelector9(this.$PrivacySelector3);}).bind(this)));r.toggle(this.$PrivacySelector3,z);}};y.prototype.showFlyoutOnMenu=function(z){'use strict';this.$PrivacySelector10&&this.$PrivacySelector10.hide();this.$PrivacySelector10=z;var aa;if(this.$PrivacySelector1){aa=this.$PrivacySelector2.getMenuElement();z.setOffsetY(85);}else{aa=m.scry(this.$PrivacySelector3,'div.uiSelectorMenuWrapper')[0];z.setOffsetY(13);}z.setContext(aa);z.show();};y.prototype.setOnClose=function(z){'use strict';this.$PrivacySelector4=z;};y.prototype.cleanup=function(){'use strict';this.$PrivacySelector5.release();this.$PrivacySelector5=new s();this.$PrivacySelector6.release();this.$PrivacySelector6=new s();this.$PrivacySelector10&&this.$PrivacySelector10.hide();this.$PrivacySelector10=null;this.$PrivacySelector4=null;};y.get=function(z){'use strict';if(!z)return;var aa=o.get(z,'selector');if(!aa){z=y.getDOMFromStory(z);if(!z)return;aa=o.get(z,'selector');}if(aa)return new y(aa,true);return new y(z,false);};y.getAdamaSelectorInstance=function(z){'use strict';if(!z)return;var aa=o.get(z,'selector');if(!aa){z=y.getDOMFromStory(z);if(!z)return;aa=o.get(z,'selector');}return aa;};y.getDOMFromStory=function(z){'use strict';if(!z)return;var aa=m.scry(z,"._43_1")[0];if(aa)return aa;return k.get(z);};y.getIconFromSelectorDOM=function(z){'use strict';return m.scry(z,'i.img')[0];};y.setComposerPrivacy=function(z,aa,ba){'use strict';var ca=t.getURIBuilder().setString('privacyx',z);ba&&ca.setString('logging_source',ba);new j(ca.getURI()).send();p.handleUpdateFromSelector({selector_type:n.PrivacyField.CURRENT_COMPOSER,post_param:z,unique_value:'_updateStickyComposerPrivacy'});var da=k.getComposerInstance(aa);if(da)k.setAudience(da,aa);};y.prototype.$PrivacySelector7=function(){'use strict';this.$PrivacySelector5.addSubscriptions(this.$PrivacySelector2.subscribe('changed',(function(z,aa){this.inform('changed',{post_param:aa.post_param});}).bind(this)),this.$PrivacySelector2.subscribe('selectorFinished',(function(){this.$PrivacySelector4&&this.$PrivacySelector4();}).bind(this)));};y.prototype.$PrivacySelector8=function(){'use strict';this.$PrivacySelector5.addSubscriptions(h.subscribe('AudienceSelector/update',(function(z,aa){if(this.$PrivacySelector3!==aa.selector)return;var ba=r.getOptionValue(aa.option);this.inform('changed',{privacy_base:ba});}).bind(this)),h.subscribe('AudienceSelector/changed',(function(z,aa){if(this.$PrivacySelector3!==aa.selector)return;if(l.hasClass(aa.option,'moreOption')||l.hasClass(aa.option,'returnOption'))return;if(aa.value!=n.BaseValue.CUSTOM){this.inform('changed',{privacy_base:aa.value});}else if(aa.value==n.BaseValue.CUSTOM)this.$PrivacySelector11=true;}).bind(this)),r.listen(this.$PrivacySelector3,'close',(function(){if(this.$PrivacySelector11){this.$PrivacySelector11=false;return;}this.$PrivacySelector4&&this.$PrivacySelector4();}).bind(this)),h.subscribe('CustomPrivacyOptionController/cancel',(function(z,aa){if(this.$PrivacySelector3!==aa.selector)return;this.$PrivacySelector4&&this.$PrivacySelector4();}).bind(this)));};y.prototype.$PrivacySelector9=function(z){'use strict';if(z!=this.$PrivacySelector3)return false;this.$PrivacySelector6.release();this.$PrivacySelector6=new s();return true;};f.exports=y;},null);
__d('ComposerX',['ActorURI','Arbiter','ComposerXAttachmentBootstrap','ComposerXContext','ComposerXMarauderLogger','ComposerXSessionIDs','ComposerXSessionIDInserter','ComposerXStore','CSS','DOM','DOMQuery','PrivacyConst','PrivacySelector','PrivacySelectorNewDispatcher','URI','SubscriptionsHandler','arrayContains','csx','cx','getObjectValues','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){if(c.__markCompiled)c.__markCompiled();var ca='any';function da(ea){'use strict';this._root=ea;this._composerID=ea.id;this._attachments={};this._context=new k({});m.resetSessionID(this._composerID);n.init(this._root);this._subscriptionsHandler=new w();this._subscriptionsHandler.addSubscriptions(i.subscribe(['composer/publish','composer/close'],(function(fa,ga){if(ga.composer_id===this._composerID){this.reset();var ha=r.scry(ea,'.hidden_target_specs');if(ha&&ha.length)ha.forEach(q.remove);i.inform('composer/publishDone',ga);}}).bind(this)));this._subscriptionsHandler.addSubscriptions.apply(this._subscriptionsHandler,l.listenForPostEvents(this._composerID,this._getContent()));this._attachmentFetchForm=r.find(ea,"._2_4");}da.prototype.getAttachment=function(ea,fa,ga,ha){'use strict';ea=this._augmentURI(ea);var ia=j.getURIHash(ea);this._endpointHashToShow=ia;var ja=this._attachments[ia];if(ja&&!ha){this._showAttachmentAfterComponentsLoaded(ia,ga);}else this.fetchAttachmentData(ea,fa,ha);};da.prototype.fetchAttachmentData=function(ea,fa,ga){'use strict';ea=this._augmentURI(ea);var ha=j.getURIHash(ea);if(this._attachments[ha]&&!ga)return;if(!x(this._currentFetchEndpoints,ha)){j.load(this._attachmentFetchForm,ea,fa);this._currentFetchEndpoints.push(ha);}};da.prototype.setAttachment=function(ea,fa,ga,ha){'use strict';ba(this._currentFetchEndpoints,ea);this._setupAttachment(ea,fa,ga,ha);this._showAttachmentAfterComponentsLoaded(ea,false);};da.prototype.setInitialAttachment=function(ea,fa,ga,ha,ia){'use strict';if(ia)this._context=ia;ea=this._augmentURI(ea);var ja=j.getURIHash(ea);this._setupAttachment(ja,fa,ga,ha);this._initialAttachmentEndpoint=ea;if(!this._currentInstance)this._showAttachmentAfterComponentsLoaded(ja,true);};da.prototype.setComponent=function(ea,fa){'use strict';if(!o.get(this._composerID,ea)){o.set(this._composerID,ea,fa);q.appendContent(this._attachmentFetchForm,q.create('input',{type:'hidden',name:'loaded_components[]',value:ea}));}};da.prototype.reset=function(){'use strict';if(this._currentInstance){this._currentInstance.cleanup();this._currentInstance=null;}m.resetSessionID(this._composerID);for(var ea in this._attachments)this._attachments[ea].instance.reset();var fa=o.getAllForComposer(this._composerID);aa(fa).forEach(function(ja){if(ja.reset)ja.reset(ja);});var ga=t.getAdamaSelectorInstance(q.scry(this._root,"div._1lo2")[0]),ha=o.get(this._composerID,'mainprivacywidget'),ia=ha&&ha.instance&&ha.instance.getInstance();if(ga){ia.setInstance(ga);}else ga=ia&&ia.getInstance();if(ga&&ga.shouldReplaceOnPost())if(ga.isComposerWithDefault()){ga.selectDefaultOption();u.handleUpdateFromSelector({selector_type:s.PrivacyField.DEFAULT_COMPOSER.toString(),post_param:'',unique_id:'_reloadDefaultSelectors',reload:true});}else u.handleUpdateFromSelector({selector_type:s.PrivacyField.CURRENT_COMPOSER.toString(),post_param:'',unique_id:'_reloadStickySelectors',reload:true});this.getAttachment(this._initialAttachmentEndpoint,false,true);i.inform('composer/reset');};da.prototype.destroy=function(){'use strict';this._subscriptionsHandler.release();};da.prototype.addPlaceholders=function(ea,fa){'use strict';var ga;for(var ha in this._attachments){ga=this._attachments[ha];if(ga.instance===ea){fa.forEach(function(ia){ga.placeholders.push(ia);ga.required_components.push(ia.component_name);});break;}}if(this._currentInstance===ea)this._fillPlaceholders(fa);};da.prototype.hasAttachmentWithClassName=function(ea){'use strict';return r.scry(this._root,'.'+ea).length>0;};da.prototype.showAttachmentThrobber=function(){'use strict';p.addClass(this._attachmentFetchForm,'async_saving');};da.prototype.hideAttachmentThrobber=function(){'use strict';p.removeClass(this._attachmentFetchForm,'async_saving');};da.prototype.getContext=function(){'use strict';return this._context;};da.prototype.getID=function(){'use strict';return this._composerID;};da.prototype._setupAttachment=function(ea,fa,ga,ha){'use strict';fa.setComposerID(this._composerID);this._attachments[ea]={instance:fa,placeholders:ga,required_components:ha};var ia=this._getContent(),ja=fa.getRoot();if(ja.parentNode!==ia){p.hide(ja);q.appendContent(ia,ja);}};da.prototype._getContent=function(){'use strict';return r.find(this._root,"div._55d0");};da.prototype._showAttachment=function(ea,fa,ga,ha){'use strict';if(this._currentInstance===ea)return;if(this._endpointHashToShow===ca){this._endpointHashToShow=null;}else if(this._endpointHashToShow!==fa)return;if(this._currentInstance){if(!this._currentInstance.canSwitchAway())return;this._currentInstance.cleanup();}this._currentInstance=ea;var ia=this._getContent().childNodes,ja=ea.getRoot();for(var ka=0;ka<ia.length;ka++)if(ia[ka]!==ja)p.hide(ia[ka]);p.show(ja);this._fillPlaceholders(ga);ea.initWithComponents(ha);this._setAttachmentSelectedClass(ea.attachmentClassName);i.inform('composer/initializedAttachment',{composerRoot:this._root,isInitial:ha});};da.prototype._showAttachmentAfterComponentsLoaded=function(ea,fa){'use strict';var ga=this._attachments[ea];o.waitForComponents(this._composerID,ga.required_components,this._showAttachment.bind(this,ga.instance,ea,ga.placeholders,fa));};da.prototype._fillPlaceholders=function(ea){'use strict';ea.forEach((function(fa){var ga=o.get(this._composerID,fa.component_name);if(ga.element&&fa.element!==ga.element.parentNode)q.setContent(fa.element,ga.element);}).bind(this));};da.prototype._setAttachmentSelectedClass=function(ea){'use strict';var fa=r.scry(this._root,"._519b")[0],ga;if(fa){p.removeClass(fa,"_519b");ga=r.scry(fa,'*[aria-pressed="true"]')[0];if(ga)ga.setAttribute('aria-pressed','false');}if(ea){var ha=r.scry(this._root,'.'+ea)[0];if(ha){p.addClass(ha,"_519b");ga=r.scry(ha,'*[aria-pressed="false"]')[0];if(ga)ga.setAttribute('aria-pressed','true');}}};da.prototype._augmentURI=function(ea){'use strict';var fa=this._context.getProperty(k.PROPERTIES.ACTOR_ID),ga=fa?h.create(ea,fa):new v(ea),ha=this._context.getProperty(k.PROPERTIES.POST_ID);if(ha)ga.addQueryData('post_id',ha);return ga.toString();};Object.assign(da.prototype,{_endpointHashToShow:ca,_currentFetchEndpoints:[],_initialAttachmentEndpoint:''});f.exports=da;},null);
__d('ComposerXAttachment',['ComposerXStore'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){'use strict';}i.prototype.getRoot=function(){'use strict';};i.prototype.initWithComponents=function(j){'use strict';};i.prototype.cleanup=function(){'use strict';};i.prototype.reset=function(){'use strict';};i.prototype.getComponent=function(j){'use strict';return h.get(this._composerID,j);};i.prototype.getComponentInstance=function(j){'use strict';var k=h.get(this._composerID,j);return k&&k.instance;};i.prototype.canSwitchAway=function(){'use strict';return true;};i.prototype.setComposerID=function(j){'use strict';this._composerID=j;};i.prototype.getComposerID=function(){'use strict';return this._composerID;};i.prototype.allowOGTagPreview=function(){'use strict';return false;};Object.assign(i.prototype,{attachmentClassName:''});f.exports=i;},null);
__d('registerForLeaveWarning',['Run','URI','createCancelableFunction','fbt'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(n){var o=i.getNextURI(),p=j(n);h.onBeforeUnload(function(){return m(p,o);});return p;}function m(n,o){var p=i.getMostRecentURI(),q=i.getNextURI(),r=p.getQueryData().hasOwnProperty('theater')&&o.path===q.path,s=q.getQueryData().hasOwnProperty('theater'),t=b.DialogNavigationStack&&b.DialogNavigationStack.isActiveURI(q);if(r||s||t){h.onAfterLoad(function(){h.onBeforeUnload(function(){return m(n,o);});});return;}if(b.Dialog&&b.Dialog.getCurrent())return;if(n())return k._("\u0412\u0438 \u0449\u0435 \u043d\u0435 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u043b\u0438 \u0441\u0432\u0456\u0439 \u0434\u043e\u043f\u0438\u0441. \u0412\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0442\u0438 \u0431\u0435\u0437 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f?");}f.exports=l;},null);
__d('ComposerXController',['ActorURI','Arbiter','ComposerX','ComposerXMarauderLogger','ComposerXAttachmentBootstrap','ComposerXContext','Event','Parent','$','cx','emptyFunction','ge','invariant','registerForLeaveWarning'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v={},w={},x={};function y(ca){var da=s(ca);if(!da)return null;var ea=o.byClass(p(ca),"_119"),fa=ea.id;if(!x[fa])x[fa]=new j(ea);return x[fa];}function z(ca){var da=y(ca);!(da!==null)?t(0):undefined;return da;}function aa(ca){if(!w[ca])return;w[ca].forEach(function(da){return da.cancel();});delete w[ca];}var ba={registerConditionForComposerCancel:function(ca,da){var ea=z(ca).getID();if(!(ea in v))v[ea]=[];v[ea].push(da);if(!(ea in w))w[ea]=[];w[ea].push(u(da));},hasChanges:function(ca){var da=v[ca];if(!da)return false;return da.some(function(ea){return ea();});},getAttachment:function(ca,da,ea,fa){var ga=z(ca);ga.getAttachment(da,ea,null,fa);},fetchAttachmentData:function(ca,da,ea){z(ca).fetchAttachmentData(da,ea);},setAttachment:function(ca,da,ea,fa,ga){var ha=y(ca);if(ha)ha.setAttachment(da,ea,fa,ga);},setInitialAttachment:function(ca,da,ea,fa,ga,ha){var ia=z(ca);ia.setInitialAttachment(da,ea,fa,ga,ha);},setComponent:function(ca,da,ea){var fa=y(ca);if(fa)fa.setComponent(da,ea);},reset:function(ca){var da=z(ca);da.reset();},holdTheMarkup:r,getEndpoint:function(ca,da,ea){var fa=z(ca),ga=fa.getContext();da=h.create(da,ga.getProperty(m.PROPERTIES.ACTOR_ID)).toString();l.load(fa._attachmentFetchForm,da,ea);},addPlaceholders:function(ca,da,ea){var fa=z(ca);fa.addPlaceholders(da,ea);},hasAttachmentWithClassName:function(ca,da){var ea=z(ca);return ea.hasAttachmentWithClassName(da);},showAttachmentThrobber:function(ca){var da=z(ca);da.showAttachmentThrobber();},hideAttachmentThrobber:function(ca){var da=z(ca);da.hideAttachmentThrobber();},logEventForElement:function(ca,da){n.listen(ca,'click',function(){var ea=ba.getComposerID(ca);k.logEvent(da,ea);});},getComposerID:function(ca){return z(ca).getID();},destroyComposer:function(ca){if(!(ca in x))return;x[ca].destroy();delete x[ca];delete v[ca];aa(ca);}};l.bootstrap=function(ca){ba.getAttachment(ca,ca.getAttribute('data-endpoint'));};i.subscribe('page_transition',function(){for(var ca in x)if(!s(ca))ba.destroyComposer(ca);});f.exports=ba;},null);
__d('QE',['Banzai','Cache'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j='qe_log_exposure',k=60,l=new i(),m={logExposure:function(n,o){var p=o?n+'|'+o:n;if(l.has(p))return;var q={signal:true},r={name:n,id:null};if(o)r.id=o;h.post(j,r,q);l.set(p,true,1,k);}};f.exports=m;},null);
__d('isAnimatedGif',['Promise'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=1e+06;function j(n){return n[0]===71&&n[1]===73&&n[2]===70;}function k(n,o){return n[o]===0&&n[o+1]===33&&n[o+2]===249&&n[o+3]===4&&n[o+8]===0&&(n[o+9]===44||n[o+9]===33);}function l(n){if(!j(n))return false;var o=0;for(var p=0;p+9<n.length;++p){if(k(n,p))o++;if(o>1)return true;}return false;}function m(n){return new h(function(o){var p=new FileReader();p.onloadend=function(s){if(s.target.readyState==FileReader.DONE){var t=new Uint8Array(s.target.result);if(l(t)){o(true);}else o(false);}};p.onerror=function(s){o(false);};var q=Math.min(i,n.size),r=n.slice(0,q);p.readAsArrayBuffer(r);});}f.exports=m;},null);
__d('ComposerXMediaUploadHandler',['Arbiter','AsyncRequest','ComposerXAjaxEndpoint','ComposerXController','CSS','Dialog','ImageExtensions','QE','ReloadPage','SubscriptionsHandler','URI','VideoUploadConfig','VideoUploadFile','fbt','isAnimatedGif'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=j.MEDIA_UPLOAD,x='/ajax/composerx/attachment/video/upload/',y=0;function z(aa,ba){'use strict';this.$ComposerXMediaUploadHandler1=aa;this.$ComposerXMediaUploadHandler2=ba;}z.prototype.fetchAttachments=function(){'use strict';[this.getPhotoUploadAttachmentEndpoint(),x].forEach((function(aa){k.fetchAttachmentData(this.$ComposerXMediaUploadHandler1,aa);}).bind(this));};z.prototype.handleFileSelected=function(aa){'use strict';var ba=this;z.isVideoOrAnimatedGifAsync(aa,function(ca){if(ca){ba.handleVideoSelected(aa);}else ba.handlePhotoSelected(aa);});};z.canUploadAnimatedGIF=function(){'use strict';return n.GIF in s.videoExtensions;};z.isVideoOrAnimatedGifAsync=function(aa,ba){'use strict';var ca=t.getExtensionFromFileInput(aa.getInput());if(z.canUploadAnimatedGIF()&&ca===n.GIF){v(aa.getInput().files[0]).then(ba);}else if(s.videoExtensions[ca]){ba(true);}else ba(false);};z.prototype.$ComposerXMediaUploadHandler3=function(){'use strict';o.logExposure('www_videos_user_upload_flow');};z.prototype.handleVideoSelected=function(aa){'use strict';this.$ComposerXMediaUploadHandler3();if(this.$ComposerXMediaUploadHandler2&&this.$ComposerXMediaUploadHandler2.imagesOnly){var ba=new m().setModal(true).setButtons([m.OK]);if(this.$ComposerXMediaUploadHandler2.isEditComposer){ba.setTitle(u._("Can't add video")).setBody(u._("Sorry, you can't add a video to a post you're editing."));}else ba.setTitle(u._("Invalid Image File")).setBody(u._("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0438\u0439 \u0444\u0430\u0439\u043b \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0432\u0438\u043a\u043b\u0430\u0434\u0435\u043d\u043d\u044f."));ba.show();return;}k.getAttachment(this.$ComposerXMediaUploadHandler1,x);h.inform('ComposerXFilesStore/filesAdded/'+this.$ComposerXMediaUploadHandler1+'/videoupload',{fileInput:aa},h.BEHAVIOR_PERSISTENT);};z.prototype.handlePhotoSelected=function(aa){'use strict';k.getAttachment(this.$ComposerXMediaUploadHandler1,this.getPhotoUploadAttachmentEndpoint());z.$ComposerXMediaUploadHandler4(this.$ComposerXMediaUploadHandler1,aa);};z.isVideoFile=function(aa){'use strict';var ba=t.getExtensionFromFileInput(aa.getInput());return !!s.videoExtensions[ba];};z.prototype.$ComposerXMediaUploadHandler5=function(){'use strict';return this.$ComposerXMediaUploadHandler2?this.$ComposerXMediaUploadHandler2.photoUploadOverrideEndpoint:null;};z.prototype.getPhotoUploadAttachmentEndpoint=function(){'use strict';var aa=this.$ComposerXMediaUploadHandler5();return aa?aa:w;};z.$ComposerXMediaUploadHandler4=function(aa,ba){'use strict';h.inform('ComposerXFilesStore/filesAdded/'+aa+'/mediaupload',{fileInput:ba,receivedBySubscriber:false},h.BEHAVIOR_PERSISTENT);};z.setupFileUploadToComposerDialog=function(aa,ba,ca){'use strict';var da='composerxmediauploadhandler'+y++,ea=function(ha){l.conditionClass(aa.getControl(),ca,ha);aa.getInput().disabled=ha;},fa=new r(ba),ga=fa.getQueryData();ga.client_ref=da;fa.setQueryData(ga);ba=fa.toString();aa.subscribe('change',function(){new i().setURI(ba).setErrorHandler(function(){aa.clear();ea(false);}).send();ea(true);});h.subscribe('composer/dialog/'+da+'/new',(function(ha,ia){this.$ComposerXMediaUploadHandler4(ia.composerID,aa);var ja=new q();ja.addSubscriptions(h.subscribe('composer/publish',function(event,ka){if(ia.composerID===ka.composer_id)p.now();}),ia.dialog.subscribe('hide',function(){ja.release();aa.clear();ea(false);}));}).bind(this));};f.exports=z;},null);
__d('legacy:AudienceSelector',['AudienceSelector'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();c('AudienceSelector');},3);