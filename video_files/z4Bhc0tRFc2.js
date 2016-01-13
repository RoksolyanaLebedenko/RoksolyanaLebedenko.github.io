/*!CK:189343709!*//*1448042293,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Ghgn1"]); }

__d("CampfireLoggerEvents",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CONSUME_READER_DRAFT:"consume_reader_draft",CONSUME_READER_PUBLISHED_NOTE:"consume_reader_published_note",CONSUME_READER_EXIT_DRAFT:"consume_reader_exit_draft",CONSUME_READER_EXIT_PUBLISHED:"consume_reader_exit_published",CONSUME_PERMALINK_DRAFT:"consume_permalink_draft",CONSUME_PERMALINK_PUBLISHED_NOTE:"consume_permalink_published_note",CONSUME_PERMALINK_EXIT_DRAFT:"consume_permalink_exit_draft",CONSUME_PERMALINK_EXIT_PUBLISHED:"consume_permalink_exit_published",CONSUME_AS_INSTANT_ARTICLE:"consume_as_instant_article",COMPOSE_CREATE_DRAFT:"compose_create_draft",COMPOSE_EDIT_DRAFT:"compose_edit_draft",COMPOSE_DELETE_DRAFT:"compose_delete_draft",COMPOSE_PUBLISH_DRAFT:"compose_publish_draft",COMPOSE_EDIT_PUBLISHED_NOTE:"compose_edit_published_note",COMPOSE_UPDATE_PUBLISHED_NOTE:"compose_update_published_note",COMPOSE_DELETE_PUBLISHED_NOTE:"compose_delete_published_note",COMPOSE_EXIT_COMPOSER:"compose_exit_composer"};},null,{});
__d("CampfireLoggerNoteTypes",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={CAMPFIRE:"campfire",MOBILE_CAMPFIRE:"mobile_campfire",OLD:"old"};},null,{});
__d('CampfireTimeSpentMonitor',['BanzaiLogger','CampfireLoggerEvents','CampfireLoggerNoteTypes','Run'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();function l(m,n){this.$CampfireTimeSpentMonitor1=m;this.$CampfireTimeSpentMonitor2=n;k.onBeforeUnload(this.$CampfireTimeSpentMonitor3.bind(this));this.$CampfireTimeSpentMonitor4=Date.now();}l.prototype.$CampfireTimeSpentMonitor3=function(){var m=Date.now(),n=Math.round((m-this.$CampfireTimeSpentMonitor4)/1000);h.log('CampfireNotesLoggerConfig',{event:i.CONSUME_PERMALINK_EXIT_PUBLISHED,event_time:m,note_id:Number(this.$CampfireTimeSpentMonitor1),note_type:j.CAMPFIRE,author_id:Number(this.$CampfireTimeSpentMonitor2.ownerID),is_author_verified:this.$CampfireTimeSpentMonitor2.isAuthorVerified,is_author_page:this.$CampfireTimeSpentMonitor2.isAuthorPage,time_spent_reading_sec:n});};f.exports=l;},null);
__d('SpotlightViewerThumbnailMixin',['PhotoStore','Vector'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={_getInitialPhotoData:function(){var k=h.getIndexForID(this.props.setid,this.props.photoid),l=h.getByIndexImmediate(this.props.setid,k);return l?l:this._getThumbnailPhotoData();},_getThumbnailPhotoData:function(){if(!this.props.dimensions||!this.props.thumbsrc)return null;var k={id:this.props.photoid};for(var l=0;l<this.props.dimensions.length;++l){var m=i.deserialize(this.props.dimensions[l]);k['image'+l]={width:m.x,height:m.y,uri:this.props.thumbsrc};}return k;}};f.exports=j;},null);
__d('SpotlightSnowflakePhotoViewer',['ArbiterMixin','React','SpotlightViewer','SpotlightViewerAutoResize','SpotlightViewerBehaviorsMixin','SpotlightViewerClose','SpotlightViewerCoreMixin','SpotlightViewerDimensionMixin','SpotlightViewerPagers','SpotlightViewerPageWithKeys','SpotlightViewerThumbnailMixin','SpotlightViewport','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=i.createClass({displayName:'SpotlightSnowflakePhotoViewer',mixins:[h,l,n,r,o],behaviors:[q,k],getViewerID:function(){return 'photoviewer';},componentWillUnmount:function(){this._subscriptions&&this._subscriptions.release();this._subscriptions=null;},getInitialState:function(){this._subscriptions=new t();return {photoData:this._getInitialPhotoData(),open:true};},_enableSubscriptions:function(){this.props.useloadingindicator&&this._subscriptions.addSubscriptions(this.viewState.subscribe('photo_fetch',this.setState.bind(this,{photoData:null},null)));},render:function(){var v=this.getMedia(),w=this.getStageDimensions(),x=this.props.useloadingindicator&&!this.state.photoData;return (i.createElement(j,{open:this.state.open,onHide:this.close},i.createElement(s,{media:v,showLoadingIndicator:x,stageDimensions:w,onClick:this._onClickViewport},i.createElement(m,{onClick:this.close}),this.props.disablepaging?null:i.createElement(p,null))));}});f.exports=u;},null);
__d('CampfireImageViewer',['DOM','Event','React','ReactDOM','SpotlightSnowflakePhotoViewer','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n={registerPopup:function(o,p){i.listen(o,'click',function(q){n.bootstrap({src:p.src,fbid:p.id,dimensions:[p.width,p.height].join(','),disablePaging:true});});},bootstrap:function(o){var p=j.createElement(l,{dimensions:[o.dimensions],open:true,disablepaging:true,photoid:o.fbid,reverse:false,rootClassName:o.rootClassName,thumbsrc:o.src});n.render(p);},render:function(o){var p=m('campfire_viewer');if(!p){p=h.create('div',{id:'messages_viewer'});document.body.appendChild(p);}o=k.render(o,p);o.subscribeOnce('close',function(){k.unmountComponentAtNode(p);});}};f.exports=n;},null);