/*!CK:972584987!*//*1444765884,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XOgYL"]); }

__d('ChatSidebarSheetChatShutdownMsg.react',['ChannelConstants','ReactComponentWithPureRenderMixin','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=j.PropTypes,m=j.createClass({displayName:'ChatSidebarSheetChatShutdownMsg',mixins:[i],propTypes:{hint:l.string},render:function(){var n=this.props.hint;switch(n){case h.HINT_AUTH:return (j.createElement('div',null,k._("\u0427\u0430\u0441 \u0441\u0435\u0441\u0456\u0457 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u0432\u0441\u044f. \u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0443\u0432\u0456\u0439\u0434\u0456\u0442\u044c \u0437\u043d\u043e\u0432\u0443.")));case h.HINT_MAINT:return (j.createElement('div',null,k._("Facebook {Chat} is currently down for maintenance.",[k.param('Chat',k._("\u0427\u0430\u0442"))])));case h.HINT_CONN:return (j.createElement('div',null,k._("Facebook {Chat} is currently unavailable.",[k.param('Chat',k._("\u0427\u0430\u0442"))])));default:return (j.createElement('div',null,k._("Facebook {Chat} is currently unavailable.",[k.param('Chat',k._("\u0427\u0430\u0442"))])));}}});f.exports=m;},null);