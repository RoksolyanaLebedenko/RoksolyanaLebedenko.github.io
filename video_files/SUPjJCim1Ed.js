/*!CK:1389529025!*//*1447788276,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cIIJV"]); }

__d('MercuryFallbackShareAttachmentTextBlock.react',['LineClamp.react','MercuryShareAttachmentRenderLocations','MercuryShareAttachmentReactShape','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'MercuryFallbackShareAttachmentTextBlock',propTypes:{attachment:j,location:m.oneOf(i.getValues())},render:function(){if(!this.props||!this.props.attachment)return k.createElement('div',{className:"__6j"});var o,p,q;if(i.MESSENGER===this.props.location){if(this.props.attachment.description)p=k.createElement('div',{className:"__6l"},k.createElement(h,{customEllipsis:" ",lines:2,lineHeight:16},this.props.attachment.description));if(this.props.attachment.title)o=k.createElement('div',{className:"__6k"},k.createElement(h,{customEllipsis:" ",lines:2,lineHeight:18},this.props.attachment.title));if(this.props.attachment.source)q=k.createElement('div',{className:"__6m"},this.props.attachment.source);return (k.createElement('div',{className:"__6j"},o,p,q));}if(this.props.attachment.title)o=k.createElement('div',{className:"__6k"},this.props.attachment.title);if(this.props.attachment.description)p=k.createElement('div',{className:"__6l"},this.props.attachment.description);if(this.props.attachment.source)q=k.createElement('div',{className:"__6m"},this.props.attachment.source);return (k.createElement('div',{className:"__6j"},o,p,q));}});f.exports=n;},null);