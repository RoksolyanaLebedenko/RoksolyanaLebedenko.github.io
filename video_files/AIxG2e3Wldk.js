/*!CK:562895309!*//*1448174558,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["wW3rR"]); }

__d('TabBarItem.react',['React','ReactDOM','Focus','Event','Keys','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p=h.createClass({displayName:'TabBarItem',propTypes:{wrapper:o.func.isRequired,shouldWrapTab:o.bool,tabIndex:o.oneOf([-1,0]),selected:o.bool,focused:o.bool,hideFocusRing:o.bool,mockSpacebarClick:o.bool},getDefaultProps:function(){return {wrapper:h.createClass({displayName:'wrapper',render:function(){return h.createElement('li',this.props,this.props.children);}}),shouldWrapTab:true,tabIndex:-1,selected:false,focused:false,hideFocusRing:false,mockSpacebarClick:true};},render:function(){var q=this.props,r=q.selected,s=q.focused,t=q.hideFocusRing,u=q.shouldWrapTab,v="_45hc"+(r?' '+"_1hqh":''),w=s&&t?"_468f":'';if(u)return this._renderWrappedTabBarItem(v,w);return this._renderTabBarItem(n(v,w));},_renderWrappedTabBarItem:function(q,r){var s=this.props,t=s.className,u=s.href,v=s.ajaxify,w=s.tabIndex,x=s.rel,y=s.target,z=s.selected,aa=s.wrapper,ba=s.mockSpacebarClick;u=u||'#';var ca={};if(ba)ca.onKeyDown=this.onKeyDown;var da=h.createElement('a',{ref:'tab',ajaxify:v,href:u,role:'tab',rel:x,target:y,tabIndex:w,className:r,'aria-selected':z},this.props.children);return (h.createElement(aa,babelHelpers._extends({},this.props,{tabIndex:null,className:n(t,q),role:'presentation'}),h.cloneElement(da,ca)));},_renderTabBarItem:function(q){var r=this.props,s=r.className,t=r.href,u=r.selected,v=r.mockSpacebarClick;t=t||'#';var w={};if(v)w.onKeyDown=this.onKeyDown;var x=h.createElement('a',babelHelpers._extends({},this.props,{href:t,ref:'tab',role:'tab',className:n(s,q),'aria-selected':u}),this.props.children);return h.cloneElement(x,w);},componentDidMount:function(){this.focus();},componentDidUpdate:function(){this.focus();},focus:function(){if(this.props.focused)j.set(this.refs.tab);},onKeyDown:function(event){var q=k.getKeyCode(event);if(q===l.SPACE&&this.refs.tab){i.findDOMNode(this.refs.tab).click();k.prevent(event);}}});f.exports=p;},null);
__d('TabBarDropdownItem.react',['ContextualDialogArrow','ContextualLayerAutoFlip','InlineBlock.react','PopoverMenu.react','React','ReactXUIMenu','TabBarItem.react','cx','fbt','onlyChild','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=l.PropTypes,t=l.createClass({displayName:'TabBarDropdownItem',propTypes:{menuClassName:s.string,tabComponent:s.func.isRequired,focused:s.bool,hideFocusRing:s.bool},getDefaultProps:function(){return {tabComponent:n,focused:false,hideFocusRing:false};},_renderTab:function(){var u=this.props.tabComponent,v="_45hd _45hc",w=l.createElement('span',{className:"accessible_elem"},p._("additional tabs menu"));return (l.createElement(u,babelHelpers._extends({},this.props,{shouldWrapTab:false,className:r(this.props.className,v),tabIndex:-1,mockSpacebarClick:false}),l.createElement('span',{className:"_1b0"},this.props.label,w)));},render:function(){if(this.props.children){var u=this.props.selected?m.SelectableMenu:m,v=l.createElement(u,{className:this.props.menuClassName},this.props.children.map(this.convertTabItemWrapperToMenuItem)),w=[i,h];return (l.createElement('li',{className:(this.props.focused&&this.props.hideFocusRing?"_468f":'')+(' '+"_45hd"),role:'tab'},l.createElement(k,{menu:v,layerBehaviors:w},this._renderTab())));}else return (l.createElement('li',{className:"_45hd"},l.createElement(j,null,this._renderTab())));},convertTabItemWrapperToMenuItem:function(u,v){var w=this.props.selected?m.SelectableItem:m.Item,x=q(u.type.getComponent(u.props));return (l.createElement(w,babelHelpers._extends({},x.props,{key:v,onclick:x.props.onClick}),x.props.children));}});f.exports=t;},null);
__d('RTLKeys',['Keys','Locale'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=babelHelpers._extends({},h);if(i.isRTL()){j.LEFT=h.RIGHT;j.RIGHT=h.LEFT;}f.exports=j;},null);
__d('TabBar.react',['React','ReactDOM','ReactChildren','TabBarDropdownItem.react','TabBarItem.react','Event','RTLKeys','cx','fbt','joinClasses','invariant','setTimeout','clearTimeout','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v=h.PropTypes,w=p._("\u0411\u0456\u043b\u044c\u0448\u0435"),x=h.createClass({displayName:'TabBarItemWrapper',statics:{getComponent:function(z){return z.component;}},render:function(){return this.props.component;}}),y=h.createClass({displayName:'TabBar',_blurTimeout:null,propTypes:{activeTabKey:v.string,alwaysShowActive:v.bool,defaultActiveTabKey:v.string,dropdownMenuClassName:v.string,maxTabsVisible:v.number.isRequired,moreLabel:v.string,onTabClick:v.func.isRequired,dropdownTabComponent:v.func.isRequired,onWidthCalculated:v.func.isRequired,shouldCalculateVisibleTabs:v.bool},getDefaultProps:function(){return {alwaysShowActive:true,dropdownTabComponent:l,maxTabsVisible:Infinity,moreLabel:w,onTabClick:u.thatReturnsTrue,onWidthCalculated:u,shouldCalculateVisibleTabs:true};},getInitialState:function(){return {activeTabKey:this.props.activeTabKey||this.props.defaultActiveTabKey,focusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:true,hideFocusRing:true};},setWidth:function(z){i.findDOMNode(this).style.width=z;this.setState({shouldCalculateVisibleTabs:true});},render:function(){var z=this.getTabs(),aa=z.length,ba=this.getActiveTabIndex(),ca=z[ba],da=this.getActiveTabIndex(true),ea,fa,ga;if(ca)ea=ca.key;if(this.state.shouldCalculateVisibleTabs){fa=z.map((function(pa,qa){return this._wrapTab(pa,qa,ea,null,da,false,false);}).bind(this));if(aa>2)fa.push(h.createElement(k,{menuClassName:this.props.dropdownMenuClassName,key:'_dropdown',ref:'more',label:this.props.moreLabel,tabComponent:this.props.dropdownTabComponent}));}else{var ha=this._groupTabsByVisibility();fa=ha.visibleTabs;ga=ha.extraTabs;var ia=this._isDropdownSelected(),ja=this.state.visibleTabsCount,ka=this.state.focusedTabKey;ka=ka&&this.getFocusedTabIndex()===-1?y.MORE_TAB_KEY:ka;fa=fa.map((function(pa,qa){return this._wrapTab(pa,qa,ea,ka,da,true,true);}).bind(this));ga=ga.map((function(pa,qa){return this._wrapTab(pa,qa,ea,null,da,true,false);}).bind(this));if(ga.length){var la;if(ja===0&&ca)la=ca;var ma=la&&la.props.children||this.props.moreLabel,na='_dropdown',oa=h.createElement(k,{menuClassName:this.props.dropdownMenuClassName,selected:ia,focused:ka===y.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,na),onBlur:this.onBlur,key:na,ref:'more',label:ma,tabComponent:this.props.dropdownTabComponent},ga);if(ja===0){fa=oa;}else fa.push(oa);}}return (h.createElement('ul',babelHelpers._extends({},this.props,{className:q(this.props.className,"_43o4"),role:'tablist',onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp}),fa));},componentDidMount:function(){this.calculateVisibleTabs();this.calculateWidth();},componentWillUnmount:function(){t(this._blurTimeout);},componentWillReceiveProps:function(z){this.setState({shouldCalculateVisibleTabs:true,activeTabKey:z.activeTabKey||this.state.activeTabKey});},shouldComponentUpdate:function(z,aa){return !(this.state.focusedTabKey&&!aa.focusedTabKey);},componentDidUpdate:function(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function(){this.props.onWidthCalculated(i.findDOMNode(this).clientWidth);},calculateVisibleTabs:function(){var z=this.getTabs(),aa=z.length,ba=Math.min(aa,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:ba,shouldCalculateVisibleTabs:false});return;}var ca=[];for(var da=0;da<aa;da++)ca.push(i.findDOMNode(this.refs[da]).offsetWidth);var ea=this.getActiveTabIndex();if(this.props.alwaysShowActive&&ea!==-1){z.unshift(z.splice(ea,1)[0]);ca.unshift(ca.splice(ea,1)[0]);}var fa=i.findDOMNode(this).offsetWidth;ba=0;var ga=0;for(da=0;da<aa;da++){var ha=ca[da];if(ga+ha>fa){if(ba>0&&aa>2){var ia=i.findDOMNode(this.refs.more).offsetWidth;while(ba>0&&(ga+ia>fa||aa-ba<2)){ba--;ga-=ca[ba];}}else ba=0;break;}ba++;ga+=ha;}this.setState({visibleTabsCount:Math.min(ba,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function(){var z=arguments.length<=0||arguments[0]===undefined?false:arguments[0],aa=this.state.activeTabKey,ba=[];if(z){var ca=this._groupTabsByVisibility(),da=ca.visibleTabs;ba=da;}else ba=this.getTabs();return ba.findIndex(function(ea){return ea&&ea.key===aa;});},getFocusedTabIndex:function(){var z=this.state.focusedTabKey,aa=this._groupTabsByVisibility(),ba=aa.visibleTabs;return ba.findIndex(function(ca){return ca&&ca.key===z;});},getFocusedTab:function(){var z=this.state.focusedTabKey,aa=this._groupTabsByVisibility(),ba=aa.visibleTabs,ca=ba.findIndex(function(da){return da&&da.key===z;});return ba[ca];},clearFocusedTabKey:function(){this.setState({focusedTabKey:null});},onClick:function(z,event){var aa=this.props.onTabClick(z,event);if(aa!==false&&this.isMounted())this.activateTab(z);},onMouseDown:function(){this.setState({hideFocusRing:true});},onKeyDown:function(event){var z=m.getKeyCode(event);switch(z){case n.UP:case n.RIGHT:case n.DOWN:case n.LEFT:var aa,ba,ca,da=this._groupTabsByVisibility(),ea=da.visibleTabs,fa=z===n.UP||z===n.LEFT,ga=fa?-1:1,ha=fa?0:ea.length-1,ia=this.getFocusedTabIndex();if(ia===-1&&ga===-1)ia=ea.length;if(ia===-1){ca=null;}else if(ia===ha&&ga===1){ca=y.MORE_TAB_KEY;}else{aa=fa?Math.max:Math.min;ba=aa(ia+ga,ha);ca=ea[ba].key;}if(ca)this.setState({focusedTabKey:ca,hideFocusRing:false});break;case n.RETURN:var ja=this.getFocusedTab();if(ja){var ka=ja.key,la=this.props.onTabClick(ka,event);if(la!==false&&this.isMounted())this.activateTab(ka);}break;}},onKeyUp:function(event){if(m.getKeyCode(event)===n.TAB&&this.state.hideFocusRing)this.setState({hideFocusRing:false});},onFocus:function(z,event){t(this._blurTimeout);if(z!==this.state.focusedTabKey){this.setState({focusedTabKey:z});event.preventDefault();event.stopPropagation();}},onBlur:function(){this._blurTimeout=s(this.clearFocusedTabKey,y.BLUR_TIMEOUT);},_wrapTab:function(z,aa,ba,ca,da,ea,fa){!(z.key!==y.MORE_TAB_KEY)?r(0):undefined;var ga=ba===z.key,ha=ca===z.key,ia={selected:ga,focused:ha,tabIndex:ga||da===-1&&aa===0?0:-1,hideFocusRing:this.state.hideFocusRing};if(ea){ia.onClick=this.onClick.bind(this,z.key);ia.onMouseDown=this.onMouseDown;}else ia.mockSpacebarClick=false;if(fa){ia.onFocus=this.onFocus.bind(this,z.key);ia.onBlur=this.onBlur;}z=h.cloneElement(z,ia);return (h.createElement(x,{key:z.key,component:z,ref:aa}));},activateTab:function(z){if(z)this.setState({activeTabKey:z,focusedTabKey:z,shouldCalculateVisibleTabs:true});},getTabs:function(){var z=[];j.forEach(this.props.children,function(aa){if(aa)z.push(aa);});return z;},_groupTabsByVisibility:function(){var z=this.state.visibleTabsCount,aa=this.getTabs(),ba=this.getActiveTabIndex(),ca,da,ea;if(!this.props.alwaysShowActive||ba<z||z===0){ea=aa.slice(z);da=aa.slice(0,z);}else{ca=aa.splice(ba,1)[0];var fa=z>0?z-1:0;ea=aa.slice(fa);da=aa.slice(0,fa);da.push(ca);}return {visibleTabs:da,extraTabs:ea};},_isDropdownSelected:function(){var z=this.state.visibleTabsCount,aa=this.getActiveTabIndex(),ba=!this.props.alwaysShowActive&&aa>=z||z===0&&aa>-1;return ba;}});y.MORE_TAB_KEY='_moreTab';y.BLUR_TIMEOUT=120;y.Tab=l;y.DropdownItem=k;f.exports=y;},null);
__d('XUIAmbientNUXBody.react',['React','XUICloseButton.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'XUIAmbientNUXBody',propTypes:{onCloseButtonClick:l.func},render:function(){var n=k("_21es",this.props.className);return (h.createElement('div',{className:n},h.createElement(i,{shade:'light',className:"_36gl",onClick:this.props.onCloseButtonClick}),h.createElement('div',{className:"_36gn"},this.props.children)));}});f.exports=m;},null);
__d('XUIAmbientNUX.react',['HasLayerContextMixin','React','ReactLayer','ReactAbstractContextualDialog','XUIAmbientNUXTheme','XUIAmbientNUXBody.react'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=i.PropTypes,o=300,p=380,q=j.createClass(k.createSpec({displayName:'XUIAmbientNUX',theme:l})),r=i.createClass({displayName:'XUIAmbientNUX',mixins:[h],propTypes:{alignment:n.oneOf(['left','center','right']),behaviors:n.object,context:n.object,contextRef:n.func,customwidth:n.number,hasActionableContext:n.bool,offsetX:n.number,offsetY:n.number,onCloseButtonClick:n.func,position:n.oneOf(['above','below','left','right']),shown:n.bool,width:n.oneOf(['wide','normal','auto','custom'])},_getWidth:function(){switch(this.props.width){case 'wide':return p;case 'custom':return this.props.customwidth;case 'auto':return null;default:return o;}},render:function(){return (i.createElement(q,{alignment:this.props.alignment,autoFocus:false,behaviors:this.props.behaviors,context:this.getContextNode(),focusContextOnHide:false,hasActionableContext:this.props.hasActionableContext,offsetX:this.props.offsetX,offsetY:this.props.offsetY,position:this.props.position,shown:this.props.shown,width:this._getWidth(this.props)},i.createElement(m,{onCloseButtonClick:this.props.onCloseButtonClick},this.props.children)));}});f.exports=r;},null);
__d('ReactionIconsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(){this.clear();}k.prototype.log=function(){i.log('logger:ReactionIconsLoggerConfig',this.$ReactionIconsTypedLogger1,h.BASIC);};k.prototype.logVital=function(){i.log('logger:ReactionIconsLoggerConfig',this.$ReactionIconsTypedLogger1,h.VITAL);};k.prototype.clear=function(){this.$ReactionIconsTypedLogger1={};return this;};k.prototype.updateData=function(l){this.$ReactionIconsTypedLogger1=babelHelpers._extends({},this.$ReactionIconsTypedLogger1,l);return this;};k.prototype.setClassName=function(l){this.$ReactionIconsTypedLogger1.class_name=l;return this;};k.prototype.setNaturalHeight=function(l){this.$ReactionIconsTypedLogger1.natural_height=l;return this;};k.prototype.setNaturalWidth=function(l){this.$ReactionIconsTypedLogger1.natural_width=l;return this;};k.prototype.setNonIxImageData=function(l){this.$ReactionIconsTypedLogger1.non_ix_image_data=l;return this;};k.prototype.setReaction=function(l){this.$ReactionIconsTypedLogger1.reaction=l;return this;};k.prototype.setSize=function(l){this.$ReactionIconsTypedLogger1.size=l;return this;};k.prototype.setSpriteCssClass=function(l){this.$ReactionIconsTypedLogger1.sprite_css_class=l;return this;};k.prototype.setSpriteMapCssClass=function(l){this.$ReactionIconsTypedLogger1.sprite_map_css_class=l;return this;};k.prototype.setSprited=function(l){this.$ReactionIconsTypedLogger1.sprited=l;return this;};k.prototype.setSrc=function(l){this.$ReactionIconsTypedLogger1.src=l;return this;};k.prototype.setVC=function(l){this.$ReactionIconsTypedLogger1.vc=l;return this;};f.exports=k;},null);
__d('UFIReactionIconImpl.react',['React','ReactDOM','Image.react','ReactionIconsTypedLogger','UFIConfig','UFIReactionIcons','UFIReactionTypes','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q,r,s=h.PropTypes;q=babelHelpers.inherits(t,h.Component);r=q&&q.prototype;function t(u,v){'use strict';r.constructor.call(this);}t.prototype.componentDidMount=function(){'use strict';var u=i.findDOMNode(this.refs.img),v=u.offsetHeight,w=u.offsetWidth;if(v===0||w===0){var x=u.src,y=this.props,z=y.className,aa=y.reaction,ba=y.size,ca=m[aa][ba],da=ca.spriteCssClass,ea=ca.spriteMapCssClass,fa=ca.sprited;if(fa)x=window.getComputedStyle(u,null).backgroundImage.slice(4,-1);new k().setClassName(z).setNaturalHeight(v).setNaturalWidth(w).setReaction(aa).setSize(ba).setSpriteCssClass(da).setSpriteMapCssClass(ea).setSprited(fa).setSrc(x).setNonIxImageData(l.nonIXImageData).log();}};t.prototype.render=function(){'use strict';if(l.nonIXImageData)return (h.createElement('i',{ref:'img',className:p(n.reactions[this.props.reaction].name,"_2p78"+(this.props.size==='13'?' '+"_2p79":'')+(this.props.size==='16'?' '+"_2p7a":'')+(this.props.size==='48'?' '+"_2p7b":''),this.props.className)}));return (h.createElement(j,{ref:'img',className:this.props.className,src:m[this.props.reaction][this.props.size]}));};t.propTypes={className:s.string,reaction:s.number.isRequired,size:s.oneOf(['13','16','48'])};t.defaultProps={className:null,size:'16'};f.exports=t;},null);