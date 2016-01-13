/*!CK:1781153722!*//*1447788290,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["YCawo"]); }

__d('MessengerContactListRowContainer.react',['AvailableListConstants','immutable','MercuryIDs','MercuryParticipantTypes','MessengerContactActions','MessengerContactListRow.react','PresenceStatus','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=p.PropTypes,r=p.createClass({displayName:'MessengerContactListRowContainer',mixins:[o],propTypes:{actionsClass:q.func,contactAdapter:q.func.isRequired,disableRole:q.bool,extraActionsEnabled:q.bool.isRequired,hasHoverState:q.bool,isHighlighted:q.bool,onAction:q.func,onHighlight:q.func,onScrollIntoView:q.func,onSelect:q.func.isRequired,rawContact:q.object.isRequired,originalEntryIDs:q.instanceOf(i.Set),selectedEntryIDs:q.instanceOf(i.Set),showPresence:q.bool,viewer:q.string.isRequired},getInitialState:function(){return {contact:this.props.contactAdapter(this.props.rawContact)};},componentWillReceiveProps:function(s){if(s.rawContact!==this.props.rawContact)this.setState({contact:s.contactAdapter(s.rawContact)});},render:function(){return (p.createElement(m,{actionsClass:this.props.actionsClass,contact:this.state.contact,disableRole:this.props.disableRole,extraActionsEnabled:this.props.extraActionsEnabled,isHighlighted:this.props.isHighlighted,isOriginal:this.props.originalEntryIDs&&this.props.originalEntryIDs.contains(this.state.contact.uid),isSelected:this.props.selectedEntryIDs&&this.props.selectedEntryIDs.contains(this.state.contact.uid),onAction:this._handleAction,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onMouseEnter:this._handleMouseEnter,onSelect:this._handleSelect,presenceStatus:this._getPresenceStatus(),viewer:this.props.viewer}));},_handleMouseEnter:function(){if(!this.props.hasHoverState)return;this.props.onHighlight&&this.props.onHighlight(this.props.rawContact);},_handleAction:function(s,event){switch(s){case l.SELECT:this.props.onSelect(this.props.rawContact,event);break;default:this.props.onAction&&this.props.onAction(s,this.props.rawContact);break;}},_getPresenceStatus:function(){var s=this.state.contact;if(!this.props.showPresence||s.type!==k.FRIEND&&s.type!==k.USER)return false;var t=j.getUserIDFromParticipantID(s.uid);return n.get(t)==h.ACTIVE;}});f.exports=r;},null);