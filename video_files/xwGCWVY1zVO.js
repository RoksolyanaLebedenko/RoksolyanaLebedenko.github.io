/*!CK:2908325280!*//*1447790580,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Zy78p"]); }

__d('MessengerThreadImage.react',['immutable','ImmutableObject','MercuryIDs','MercuryThreadImage.react','MessengerProfileImageWrapper.react','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=n.PropTypes,p=n.createClass({displayName:'MessengerThreadImage',mixins:[m],propTypes:{participants:o.instanceOf(h.Map).isRequired,showBadge:o.bool,size:o.number,thread:o.instanceOf(i).isRequired,viewer:o.string.isRequired},getDefaultProps:function(){return {showBadge:true};},render:function(){return (n.createElement(l,{className:this.props.className,isMessengerUser:this._getIsMessengerUser(),size:this.props.size,showBadge:this.props.showBadge&&j.isCanonical(this.props.thread.thread_id)},n.createElement(k,{size:this.props.size,thread:this.props.thread,viewer:this.props.viewer,useBackground:true})));},_getIsMessengerUser:function(){if(!j.isCanonical(this.props.thread.thread_id)||this.props.participants.size===0)return null;var q=this.props.thread.other_user_fbid,r=j.getParticipantIDFromUserID(q),s=this.props.participants.get(r);return s&&s.is_messenger_user;}});f.exports=p;},null);