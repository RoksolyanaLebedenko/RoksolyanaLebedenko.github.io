/*!CK:3304146331!*//*1444715103,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Pj81K"]); }

__d('ChatSidebarSheetChatReconnectMsg.react',['ChannelConstants','Link.react','ReactComponentWithPureRenderMixin','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'ChatSidebarSheetChatReconnectMsg',mixins:[j],propTypes:{msecs:m.number,onManuallyConnectClick:m.func},render:function(){var o=this.props.msecs;if(o==null||false===navigator.onLine){return (k.createElement('div',null,l._("Unable to connect to chat. Check your Internet connection.")));}else if(o>h.WARNING_COUNTDOWN_THRESHOLD_MSEC){return (k.createElement('div',null,l._("Unable to connect to chat. {try-again-link}",[l.param('try-again-link',k.createElement(i,{className:'fbChatReconnectLink',onClick:this.props.onManuallyConnectClick},l._("\u0421\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437")))])));}else if(o>1000){return (k.createElement('div',null,l._("Unable to connect to chat. Reconnecting in {seconds}",[l.param('seconds',Math.floor(o/1000))])));}else return (k.createElement('div',null,l._("\u041d\u0435 \u0432\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 \u0437\u0432'\u044f\u0437\u043e\u043a \u0456\u0437 \u0431\u0430\u043b\u0430\u0447\u043a\u043e\u044e. \u0422\u0440\u0438\u0432\u0430\u0454 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u0435 \u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f...")));}});f.exports=n;},null);