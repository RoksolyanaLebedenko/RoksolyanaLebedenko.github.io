/*!CK:4155831927!*//*1447831476,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FD+g7"]); }

__d('MessengerAttachmentImageBlock.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'MessengerAttachmentImageBlock',propTypes:{attachment:k.object.isRequired},render:function(){return (h.createElement('div',{className:j(this.props.className,this._computeClass())},this._renderImage(),h.createElement('div',{className:"_5swm"},this.props.children)));},_renderImage:function(){if(!this.props.attachment.media||!this.props.attachment.media.image)return null;var n=this._getDimensions(),o=n.height,p=n.width,q=o>p,r=m(o,p),s=o&&p?o/p*100:100,t=q||r?.2:1,u=q||r?s:52,v={backgroundImage:'url('+this.props.attachment.media.image+')',minHeight:'0px',paddingBottom:q&&s>150?'136px':u*t+'%'};if(this.props.attachment.description&&this.props.attachment.source)v.minHeight='112px';return (h.createElement('div',{className:"_3xn1",style:v}));},_computeClass:function(){if(!this.props.attachment.media||!this.props.attachment.media.image)return "_3xn3 _5swn";var n=this._getDimensions(),o=n.height,p=n.width,q=o>p;return "_3xn3"+(m(o,p)&&!q?' '+"_3xn5":'')+(q?' '+"_3xn6":'')+(p>=o?' '+"_3xn7":'');},_getDimensions:function(){var n=this.props.attachment.properties||{},o=n.height,p=n.width;if(o&&p){o=parseInt(o,10);p=parseInt(p,10);return {height:o,width:p};}return {height:0,width:0};}});function m(n,o){return n<=300&&o<=300;}f.exports=l;},null);
__d('MercuryShareImage.react',['ChatImageArrowDirection','ChatImageWithArrow.react','React','cx'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.PropTypes,m=j.createClass({displayName:'MercuryShareImage',propTypes:{height:l.number.isRequired,round:l.bool,source:l.string.isRequired,width:l.number.isRequired},render:function(){return (j.createElement('div',{className:"_4hsl"},j.createElement(i,{arrowDirection:h.BOTH,height:this.props.height,round:!!this.props.round,source:this.props.source,width:this.props.width})));}});f.exports=m;},null);
__d('MercuryFallbackShareAttachmentContent.react',['Image.react','ImageBlock.react','MercuryFallbackShareAttachmentTextBlock.react','MercuryShareAttachmentRenderLocations','MercuryShareAttachmentReactShape','MercuryShareImage.react','MessengerAttachmentImageBlock.react','React','URI','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';if(c.__markCompiled)c.__markCompiled();var s=o.PropTypes,t=72,u=o.createClass({displayName:'MercuryFallbackShareAttachmentContent',propTypes:{attachment:l,location:s.oneOf(k.getValues())},render:function(){var v=this.props.attachment,w=this.props.location,x=(k.CHAT===w?"_49or":'')+(k.WEB_INBOX===w?' '+"__nm":'')+(k.CHAT_PREVIEW===w?' '+"_324d":'')+(k.CHAT!==w?' '+"_tih":'')+(!(v&&v.media.image)?' '+"_49ou":'');if(v.media&&v.media.image){if(k.CHAT===w||k.CHAT_PREVIEW===w){return (o.createElement(i,{className:x,spacing:'medium'},o.createElement(m,{height:t,source:v.media.image,width:t}),o.createElement('div',{style:{display:'flex',justifyContent:'center',flexDirection:'column',height:t}},o.createElement(j,this.props))));}else if(k.MESSENGER===w)return (o.createElement(n,{className:x,attachment:v},o.createElement(j,this.props),this.props.children));return (o.createElement(i,{className:r(this.props.className,x)},o.createElement(h,{className:"__6n",src:v.media.image,width:t}),o.createElement(j,this.props),this.props.children));}return (o.createElement('div',{className:r(this.props.className,x)},o.createElement(j,this.props),this.props.children));}});f.exports=u;},null);
__d('MercuryFallbackShareAttachment.react',['Link.react','MercuryFallbackShareAttachmentContent.react','MercuryShareAttachmentRenderLocations','MercuryShareAttachmentReactShape','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=l.PropTypes,o=l.createClass({displayName:'MercuryFallbackShareAttachment',propTypes:{attachment:k,location:n.oneOf(j.getValues())},renderLink:function(p){if(j.isPreview(this.props.location))return p;return (l.createElement(h,{className:"_5rw4",href:this.props.attachment.uri,target:'_blank'},p));},render:function(){return this.renderLink(l.createElement(i,this.props));}});f.exports=o;},null);
__d('MercurySharePreview.react',['AsyncRequest','LeftRight.react','MercuryFallbackShareAttachment.react','MercuryShareAttachmentRenderLocations','React','XUICloseButton.react','XUISpinner.react','cx','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=l.PropTypes,r=l.createClass({displayName:'MercurySharePreview',propTypes:{imageSize:q.shape({width:q.number.isRequired,height:q.number.isRequired}).isRequired,location:q.oneOf(k.getValues()).isRequired,share:q.shape({params:q.array,type:q.number}),uri:q.string,onClose:q.func,onUpdate:q.func},getInitialState:function(){return {attachmentData:null,loading:false};},componentWillMount:function(){this._requestID=1337;this._currentRequest=null;},componentWillUnmount:function(){this._reset();},componentWillReceiveProps:function(s){!!(s.share&&s.uri)?p(0):undefined;if(!s.share&&!s.uri)return this._reset();var t=this.state.attachmentData||this.state.loading;if(s.share&&!t){this._loadFromShare(s.share);}else if(s.uri&&!(t&&this.props.uri==s.uri))this._loadFromURI(s.uri);},componentDidUpdate:function(s,t){this.props.onUpdate&&this.props.onUpdate(this);},getShareData:function(){return this.state.attachmentData&&this.state.attachmentData.share_data;},isLoading:function(){return this.state.loading;},_loadFromShare:function(s){this._currentRequest=new h().setURI('/message_share_attachment/fromParams/').setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,share_params:s.params,share_type:s.type}).setHandler(this._onShareLoaded.bind(this,this._getNextRequestID()));this._currentRequest.send();this.setState({loading:true,attachmentData:null});},_loadFromURI:function(s){this._currentRequest=new h().setURI('/message_share_attachment/fromURI/').setData({image_height:this.props.imageSize.height,image_width:this.props.imageSize.width,uri:s}).setHandler(this._onShareLoaded.bind(this,this._getNextRequestID()));this._currentRequest.send();this.setState({loading:true,attachmentData:null});},_getNextRequestID:function(){return ++this._requestID;},_getCurrentRequestID:function(){return this._requestID;},_onShareLoaded:function(s,t){if(this._getCurrentRequestID()!==s)return;this.setState({loading:false,attachmentData:t.payload});},_close:function(){this._reset();this.props.onClose&&this.props.onClose();},_reset:function(){this._getNextRequestID();this._currentRequest&&this._currentRequest.abort();this._currentRequest=null;this.setState({loading:false,attachmentData:null});},render:function(){var s="_tig"+(' '+"_tih");if(this.state.loading)return (l.createElement(i,{direction:i.DIRECTION.right,className:s},l.createElement(n,{className:"_tii",size:'large',background:'light'}),l.createElement(m,{className:"_tij",shade:'dark',size:'small',onClick:this._close})));var t=this.state.attachmentData;if(!t)return l.createElement('div',null);return (l.createElement('div',null,l.createElement(m,{className:"_tij",shade:'dark',size:'small',onClick:this._close}),l.createElement(j,{attachment:t,location:k.CHAT_PREVIEW})));}});f.exports=r;},null);