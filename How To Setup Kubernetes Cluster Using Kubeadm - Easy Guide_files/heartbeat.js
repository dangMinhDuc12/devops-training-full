(function(g){var window=this;'use strict';var crb=function(a,b){if(!Number.isFinite(a))return String(a);a=String(a);var c=a.indexOf(".");-1===c&&(c=a.length);var d="-"===a[0]?"-":"";d&&(a=a.substring(1));return d+(0,g.Qfb)("0",Math.max(0,b-c))+a},drb=function(){return{I:"svg",
Y:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",Y:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},erb=function(){return{I:"svg",
Y:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},V:[{I:"path",Y:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},grb=function(a){"number"===typeof a?(this.date=frb(a,0,1),y6(this,1)):g.ab(a)?(this.date=frb(a.getFullYear(),a.getMonth(),a.getDate()),y6(this,a.getDate())):(this.date=new Date(g.jb()),a=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),y6(this,a))},frb=function(a,b,c){b=new Date(a,b,c);
0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b},y6=function(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))},z6=function(a,b){g.OU.call(this,a,{I:"div",
S:"ytp-reminder-menu",Y:{role:"menu",tabindex:"-1"},V:[{I:"div",S:"ytp-reminder-menu-contents",V:[{I:"div",S:"ytp-reminder-menu-items"}]}]},100,!0);this.buttonElement=b;this.j=[];this.menuPopupRenderer=void 0;this.items=this.Ga("ytp-reminder-menu-items");this.hide()},irb=function(a){var b=hrb(a),c=0;
c=0;for(var d={};c<b.length;d={nX:void 0},c++){var e=a.j[c];e||(e=new g.S({I:"div",S:"ytp-reminder-menu-item",Y:{role:"menuitem",tabindex:"0"},V:[{I:"div",S:"ytp-reminder-menu-item-icon",ya:"{{icon}}"},{I:"div",S:"ytp-reminder-menu-item-label",ya:"{{text}}"}]}),d.nX=c,e.Qa("click",function(h){return function(){var l=h.nX;a.Pb();l=hrb(a)[l];a.oa("reminderMenuItemClicked",l.serviceEndpoint||l.command)}}(d)),e.Ja(a.items),a.j[c]=e);
var f=b[c];d=null;switch(f.icon&&f.icon.iconType){case "NOTIFICATIONS":d=drb();break;case "NOTIFICATIONS_NONE":d=erb();break;case "NOTIFICATIONS_ACTIVE":d=g.bwa()}f=f.text?g.xG(f.text):"";e.update({icon:d,text:f})}for(;c<a.j.length;)a.j.pop().dispose();0===c?a.Pb():a.pd(a.buttonElement)},hrb=function(a){return(a.menuPopupRenderer&&a.menuPopupRenderer.items||[]).reduce(function(b,c){c&&c.menuServiceItemRenderer&&b.push(c.menuServiceItemRenderer);
return b},[])},A6=function(a){g.S.call(this,{I:"div",
V:[{I:"button",Ma:["ytp-offline-slate-button","ytp-button"],V:[{I:"div",S:"ytp-offline-slate-button-icon",ya:"{{icon}}"},{I:"div",S:"ytp-offline-slate-button-text",ya:"{{text}}"}]}]});this.J=a;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.B=void 0;this.D=this.j=null;(this.buttonElement=this.Ga("ytp-offline-slate-button"))&&this.T(this.buttonElement,"click",this.G);this.hide()},krb=function(a,b,c){!a.toggleButtonRenderer&&b&&b.toggleButtonRenderer?a.toggleButtonRenderer=
b.toggleButtonRenderer:b&&b.toggleButtonRenderer||(a.toggleButtonRenderer=null);
!a.upcomingEventReminderButtonRenderer&&c&&g.R(c,jrb)?a.upcomingEventReminderButtonRenderer=g.R(c,jrb):c&&g.R(c,jrb)||(a.upcomingEventReminderButtonRenderer=null);B6(a)},B6=function(a){if(a.toggleButtonRenderer){var b=a.toggleButtonRenderer;
if(b.isToggled){var c=b.toggledText?g.xG(b.toggledText):"";a.update({text:c,icon:lrb(b.toggledIcon)})}else c=b.defaultText?g.xG(b.defaultText):"",a.update({text:c,icon:lrb(b.defaultIcon)});a.show()}else a.upcomingEventReminderButtonRenderer?(b=mrb(a))?(c=b.text?g.xG(b.text):"",a.update({text:c,icon:lrb(b.icon)}),a.show()):a.hide():a.hide()},orb=function(a,b,c){a.D||(a.D=new g.ME(a.J.U().Xk));
var d={context:g.Dra(a.D.config_||g.mE())};g.LF()&&(d.context.clientScreenNonce=g.LF());d.params=c;g.NE(a.D,b,d,{timeout:5E3,onSuccess:function(){a.upcomingEventReminderButtonRenderer&&a.B&&(a.upcomingEventReminderButtonRenderer.currentState=a.B,a.B=void 0)},
onError:function(){nrb(a)},
onTimeout:function(){nrb(a)}})},nrb=function(a){a.toggleButtonRenderer?(a.toggleButtonRenderer.isToggled=!a.toggleButtonRenderer.isToggled,B6(a)):a.upcomingEventReminderButtonRenderer&&(a.B=void 0,B6(a))},lrb=function(a){if(!a)return null;
switch(a.iconType){case "NOTIFICATIONS":return drb();case "NOTIFICATIONS_NONE":return erb();case "NOTIFICATIONS_ACTIVE":return g.bwa();default:return null}},mrb=function(a){if(!a.upcomingEventReminderButtonRenderer)return null;
var b=a.B||a.upcomingEventReminderButtonRenderer.currentState;a=g.u(a.upcomingEventReminderButtonRenderer.states||[]);for(var c=a.next();!c.done;c=a.next())if((c=g.R(c.value,prb))&&c.state===b&&c.button&&g.R(c.button,g.gN))return g.R(c.button,g.gN);return null},qrb=function(a){g.S.call(this,{I:"div",
S:"ytp-offline-slate",V:[{I:"div",S:"ytp-offline-slate-background"},{I:"div",S:"ytp-offline-slate-bar",V:[{I:"span",S:"ytp-offline-slate-icon",V:[{I:"svg",Y:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},V:[{I:"path",Y:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{I:"circle",Y:{cx:"12",cy:"12",r:"3"}}]}]},{I:"span",S:"ytp-offline-slate-messages",V:[{I:"div",S:"ytp-offline-slate-main-text",Y:{"aria-label":"{{label}}"},ya:"{{mainText}}"},{I:"div",S:"ytp-offline-slate-subtitle-text",ya:"{{subtitleText}}"}]},{I:"span",S:"ytp-offline-slate-buttons"}]},{I:"button",Ma:["ytp-offline-slate-close-button","ytp-button"],V:[g.AG()]},{I:"button",Ma:["ytp-offline-slate-open-button","ytp-button"],V:[g.zG()]}]});var b=this;this.api=a;this.j=this.B=null;this.background=this.Ga("ytp-offline-slate-background");
this.C=this.Ga("ytp-offline-slate-bar");this.G=new g.Qu(function(){g.dv(b.C,"ytp-offline-slate-bar-fade")},15E3);
this.K=!1;this.D=new g.Qu(function(){g.dv(b.element,"ytp-offline-slate-collapsed")},15E3);
g.J(this,this.D);g.J(this,this.G);this.countdownTimer=new g.Qu(this.m0,1E3,this);this.T(a,"presentingplayerstatechange",this.q0);this.T(a,"livestatedata",this.Ra);a=this.Ga("ytp-offline-slate-close-button");this.T(a,"click",function(){g.dv(b.element,"ytp-offline-slate-collapsed")});
a=this.Ga("ytp-offline-slate-open-button");this.T(a,"click",function(){g.fv(b.element,"ytp-offline-slate-collapsed")});
this.hide();a=this.getVideoData();a.getPlayerResponse()&&(a=a.getPlayerResponse().playabilityStatus)&&this.Ra(a);a=8===this.api.getPresentingPlayerType()&&!this.getVideoData().Kl;var c=8===this.api.getPresentingPlayerType();g.hv(this.element,"ytp-offline-slate-premiere-trailer",a);g.hv(this.element,"ytp-offline-slate-hide-background",c)},rrb=function(a,b,c){if(b){var d=null!=b.subtitleText?g.xG(b.subtitleText):"";
c=c?c:null!=b.mainText?g.xG(b.mainText):"";var e,f,h,l;b=null!=(l=null==(e=b.mainText)?void 0:null==(f=e.accessibility)?void 0:null==(h=f.accessibilityData)?void 0:h.label)?l:c;a.update({mainText:c,subtitleText:d,label:b});g.hv(a.element,"ytp-offline-slate-single-text-line",!d);g.hv(a.C,"ytp-offline-slate-bar-hidden",!c&&!d)}},C6=function(a,b){var c=(0,g.LD)();
this.module="heartbeat";this.trigger=a;this.j=b;this.C=c},zrb=function(a){g.UV.call(this,a);
var b=this;this.N=!1;this.Z=0;this.G=!1;this.B=new g.Qu(function(){var e=b.player.U(),f=b.getVideoData();D6(b)&&(srb(b)?trb(b,e,f):(urb(b),vrb(b,e,f)))},0);
this.j=this.heartbeatParams=null;this.D=!1;this.K=new g.El(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.ma=new g.ME(void 0);this.W=this.attestationResponse=void 0;this.utcOffsetMinutes=-(new grb).getTimezoneOffset();this.C=new g.kL(this);g.J(this,this.B);g.J(this,this.C);urb(this);wrb(this);this.C.T(a,"heartbeatparams",this.AE);this.C.T(a,"presentingplayerstatechange",this.T1);this.C.T(a,"videoplayerreset",this.U1);this.C.T(a,g.uK("heartbeat"),this.onCueRangeEnter);this.D&&this.j&&
xrb(this,void 0,this.j);var c=new g.tK(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),d=new g.tK(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});a.rf([c,d]);yrb(this)},yrb=function(a){var b=a.getVideoData();
b.Km&&(b=b.botguardData)&&g.iMa(b,a.player.U())},urb=function(a){var b=a.getVideoData();
if(b.Km&&(b=new g.eMa(b),g.AI.isInitialized()||3<=a.sequenceNumber)){var c=null;if(b.videoData.Gk){var d=g.fMa(b);if(d){c={};var e={};d=d.split("&");d=g.u(d);for(var f=d.next();!f.done;f=d.next())f=f.value.split("="),2===f.length&&(e[f[0]]=f[1]);e.r1a&&(c.webResponse=e.r1a);e.r1c&&(c.error=Arb[Number(e.r1c)]);c.challenge=b.videoData.Gk}}a.attestationResponse=c||void 0}},srb=function(a){var b=a.getVideoData();
if(!g.KT(a.getVideoData())||b.wY)return!1;if(b.useInnertubeDrmService()&&b.K){a="playready"===b.K.flavor&&b.L("html5_innertube_heartbeats_for_playready");var c="widevine"===b.K.flavor&&b.L("html5_innertube_heartbeats_for_widevine");b=g.NR(b.K)&&b.L("html5_innertube_heartbeats_for_fairplay");return!(a||c||b)}return!0},Brb=function(a){if(srb(a))return!!a.heartbeatParams;
var b=a.getVideoData();return g.KT(a.getVideoData())&&b.useInnertubeDrmService()&&!b.Cm&&!b.mC?!1:!!b.heartbeatToken},E6=function(a,b){if(!a.B.isActive()&&a.N){var c=a.getVideoData();
if(Brb(a)||c.isLivePlayback){if(void 0===b)if(a.G)if(a.D)b=7500;else{var d;b=(null==(d=a.heartbeatParams)?0:d.interval)?1E3*a.heartbeatParams.interval:a.getVideoData().EX||6E4}else b=1E3;a.B.start(b)}}},Frb=function(a,b,c){b.Mo&&(c=g.Ql(c,{internalipoverride:b.Mo}));
var d={cpn:b.clientPlaybackNonce};b.contextParams&&(d.context_params=b.contextParams);b.tb&&(d.kpt=b.tb);c=g.Ql(c,d);g.lC(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(e){if(!a.B.isActive()&&D6(a)){a.K.reset();a.sequenceNumber++;e=e.responseText;var f=Crb(e);if(f){a.player.ib("onHeartbeat",f);var h="ok"===f.status?f.stop_heartbeat?2:0:"stop"===f.status?1:"live_stream_offline"===f.status?0:-1}else h=(h=e.match(Drb))?"0"===h[1]?0:1:-1;Erb(a,void 0,f,e,h)}},
onError:function(e){D6(a)&&F6(a,!0,"net-"+e.status)},
onTimeout:function(){D6(a)&&F6(a,!0,"timeout")},
withCredentials:!0})},trb=function(a,b,c){var d;
if(null!=(d=a.heartbeatParams)&&d.url){var e=g.Ql(a.heartbeatParams.url,{request_id:g.ata()});c.ra&&(e=g.Ql(e,{vvt:c.ra}),c.mdxEnvironment&&(e=g.Ql(e,{mdx_environment:c.mdxEnvironment})));g.LS(b,c.oauthToken).then(function(f){f&&(e=g.Ql(e,{access_token:f}));Frb(a,c,e)})}},D6=function(a){var b=a.getVideoData();
return 3===a.player.getPresentingPlayerType()||g.cH(a.player.Vb(a.getPlayerType()),4)?!1:Brb(a)||b.isLivePlayback?!0:(G6(a),!1)},vrb=function(a,b,c){var d,e={videoId:c.videoId,
sequenceNumber:a.sequenceNumber,heartbeatServerData:null!=(d=a.ra)?d:c.heartbeatServerData};a.W=a.attestationResponse;c.Km&&(e.attestationResponse=a.W);var f=g.jU(c),h;d=null!=(h=f.client)?h:{};d.utcOffsetMinutes=a.utcOffsetMinutes;e.context=f;e.cpn=c.clientPlaybackNonce;if(h="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)d.timeZone=h;h={heartbeatChecks:[]};if(d=c.getPlayerResponse())c.heartbeatToken&&(e.heartbeatToken=c.heartbeatToken),(d=d.playabilityStatus)&&
(d=d.liveStreamability)&&d.liveStreamabilityRenderer&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");if(g.XJ(b)){h.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED");f=Grb(a);d={};null!==f&&(d.clientPlayerPositionUtcMillis=f);var l,m;f=(null==(m=null==(l=a.player.Bb())?void 0:g.hW(l))?void 0:m.freePreviewWatchedDuration)||0;0<f&&(d.freePreviewWatchedDuration={seconds:""+f});h.unpluggedParams=d}e.heartbeatRequestParams=
h;c.isLivePlayback?(l=Grb(a),null!==l&&(e.playbackState||(e.playbackState={}),e.playbackState.playbackPosition={utcTimeMillis:l})):b.L("enable_heartbeat_vod_playback_position")&&(l=Hrb(a),null!==l&&(e.playbackState||(e.playbackState={}),e.playbackState.playbackPosition={streamTimeMillis:l}));a.player.oa("heartbeatRequest",e);var n={timeout:3E4,onSuccess:function(p){if(!a.B.isActive()&&D6(a)){var q=a.getVideoData(),r=q.Km&&null==a.W,t;q.Km=!(null==(t=p.heartbeatAttestationConfig)||!t.requiresAttestation)||
r;r=p.playabilityStatus;t=JSON.stringify(r)||"{}";p.authenticationMismatch&&a.player.va("authshear",{});var v=-1;var x=p.playabilityStatus;x&&(a.player.ib("onHeartbeat",x),"OK"===x.status?v=p.stopHeartbeat?2:0:"UNPLAYABLE"===x.status?v=1:"LIVE_STREAM_OFFLINE"===x.status&&(v=0));a.sequenceNumber&&-1===v||a.K.reset();a.sequenceNumber++;p.heartbeatServerData&&(a.ra=p.heartbeatServerData);q.oC=p;(x=p.playerCueRangeSet)&&g.WRa(q,x);p.playerCueRanges&&0<p.playerCueRanges.length&&(q.cueRanges=p.playerCueRanges);
var B,F;(null==(B=p.progressBarConfig)?0:B.progressBarStartPosition)&&(null==(F=p.progressBarConfig)?0:F.progressBarEndPosition)&&(q.progressBarStartPosition=p.progressBarConfig.progressBarStartPosition,q.progressBarEndPosition=p.progressBarConfig.progressBarEndPosition);q.compositeLiveIngestionOffsetToken=p.compositeLiveIngestionOffsetToken;p.compositeLiveStatusToken!==q.compositeLiveStatusToken&&(q.compositeLiveStatusToken=p.compositeLiveStatusToken);q.oa("dataupdated");Erb(a,p,r,t,v)}},
onError:function(p){D6(a)&&F6(a,!0,"net-"+p.status)},
onTimeout:function(){D6(a)&&F6(a,!0,"timeout")}};
g.LS(b,g.bU(c)).then(function(p){p&&(n.VU="Bearer "+p);g.NE(a.ma,"player/heartbeat",e,n)})},Erb=function(a,b,c,d,e){-1===e?(c="decode "+g.qg(d,3),F6(a,!1,c)):2===e?(G6(a),a.G=!0):(a.Z=0,a.B.stop(),1===e?(a.G=!1,c&&"PLAYABILITY_ERROR_CODE_EMBARGOED"===c.errorCode&&a.player.Zn(!0),e="",a.player.U().L("html5_log_playability_reason")&&(e="pe."+(null==c?void 0:c.errorCode)+";ps."+(null==c?void 0:c.status)),a.player.wg("heartbeat.stop",2,a.sf(d),e),g.wD("heartbeatActionPlayerHalted",Irb(c)),(null==b?0:
b.videoTransitionEndpoint)&&c&&(b=b.videoTransitionEndpoint,(d=g.R(b,g.AT))&&Jrb(a,d,c,{itct:null==b?void 0:b.clickTrackingParams}))):(a.G=!0,d=0,a.D&&c&&(d=xrb(a,b,c),a.player.oa("livestatedata",c)),d?E6(a,d):E6(a)))},xrb=function(a,b,c){var d=c.liveStreamability&&c.liveStreamability.liveStreamabilityRenderer,e=!(!d||!(d.switchStreamsImmediately||d.transitionTiming&&"STREAM_TRANSITION_TIMING_IMMEDIATELY"===d.transitionTiming));
b=Krb(a,b,d);var f=a.getVideoData(),h=a.player.Vb(a.getPlayerType()),l=h.isPlaying()&&!g.PT(f)&&!a.player.isAtLiveHead(a.getPlayerType());if(f.U().Uc()){var m,n=(null==(m=a.player.mf())?void 0:m.qc())||{};n.status=c.status||"";n.dvr=""+ +l;n["switch"]=""+ +e;n.ended=""+ +!(!d||!d.displayEndscreen);a.player.va("heartbeat",n)}if(l&&!e)return b;e=d&&d.streamTransitionEndpoint&&g.R(d.streamTransitionEndpoint,g.AT);if("STREAM_TRANSITION_TIMING_AT_STREAM_END"===(d&&d.transitionTiming))a.getVideoData().transitionEndpointAtEndOfStream=
e;else if(e&&Jrb(a,e,c))return b;if("OK"===c.status.toUpperCase()){e=d&&d.broadcastId;m=a.j&&a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer&&a.j.liveStreamability.liveStreamabilityRenderer.broadcastId;l=e!==m&&null!=e;if(!g.NT(f)||l){var p={video_id:f.videoId};f.vC&&(p.is_live_destination="1");a.player.L("web_player_heartbeat_request_watch_next")||(p.disable_watch_next=!0,p.raw_watch_next_response=f.getWatchNextResponse());p.autonav_state=f.autonavState;p.oauth_token=f.oauthToken;
p.force_gvi=f.Lo;p.pm=f.pm;f.G&&(p.vss_credentials_token=f.G,p.vss_credentials_token_type=f.Hm);f.ra&&(p.vvt=f.ra);d=void 0;g.NT(f)?l&&(d=new C6("broadcastIdChanged",m+","+e),a.VI("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",c)):(e&&(d=new C6("formatsReceived",""+e)),a.VI("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",c));a.player.loadVideoByPlayerVars(p,void 0,void 0,void 0,d);return b}a.player.Ig("heartbeat",
a.getPlayerType())}d&&d.displayEndscreen&&(a.offlineSlate?(a=a.offlineSlate,a.K=!0,a.Ib&&a.api.oB()):g.dM(h)&&(f=(null==(p=a.player.mf())?void 0:p.qc())||{},a.player.va("hbse",f,!0),a.player.oB(),a.player.ib("onLiveMediaEnded",c)));return b},Krb=function(a,b,c){return a.player.L("web_player_use_heartbeat_poll_delay_ms")&&(a=Number(null==b?void 0:b.pollDelayMs))?a:(c=Number(null==c?void 0:c.pollDelayMs))?c:0},F6=function(a,b,c){var d=a.player.U();
if(!a.B.isActive()){a.B.stop();a.Z++;var e=b?"heartbeat.net":"heartbeat.servererror";var f=a.getVideoData();if(f.SX||b&&!g.KT(a.getVideoData())&&!Brb(a)&&f.isLivePlayback)f=!1;else{var h,l;(null==(l=a.heartbeatParams)?0:l.retries)?h=a.heartbeatParams.retries:h=f.FX||5;f=a.Z>=h}f?(g.wD("heartbeatActionPlayerHalted",b?{enforcedPolicyToHaltOnNetworkFailure:!0}:Irb()),(b=a.getVideoData())&&b.isLivePlayback?a.player.wg(e,1,"Ph\u00e1t l\u1ea1i video b\u1ecb gi\u00e1n \u0111o\u1ea1n. Vui l\u00f2ng th\u1eed l\u1ea1i.",
c):a.player.wg(e,1,"R\u1ea5t ti\u1ebfc, \u0111\u00e3 x\u1ea3y ra l\u1ed7i khi c\u1ea5p ph\u00e9p video n\u00e0y.",c)):(d.L("html5_report_non_fatal_heartbeat_error")&&a.player.Gr(e,{msg:c}),E6(a,a.K.getValue()),g.Fl(a.K))}},Irb=function(a){var b={enforcedPolicyToHaltOnNetworkFailure:!1};
a&&(b.serializedServerContext=a.additionalLoggingData);return b},G6=function(a){a.Z=0;
a.B.stop();a.G=!1;a.sequenceNumber=0},wrb=function(a){var b=a.getVideoData(),c=a.player.U();
if(b.isLivePlayback)if(g.GPa(c.G)){a.D=!0;a.N=!0;if(!g.ZJ(c)||g.XJ(c))a.offlineSlate=new qrb(a.player),g.J(a,a.offlineSlate),g.HU(a.player,a.offlineSlate.element,4);(b=b.getPlayerResponse())&&b.playabilityStatus&&(a.j=b.playabilityStatus);var d;"UNPLAYABLE"!==(null==(d=a.j)?void 0:d.status)&&(a.j?(d=Krb(a,void 0,a.j.liveStreamability&&a.j.liveStreamability.liveStreamabilityRenderer))?E6(a,d):E6(a,7500):E6(a,1E3))}else a.player.wg("html5.unsupportedlive",2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");
else g.Gb(b.Ea,"heartbeat")&&a.player.Ig("heartbeat",a.getPlayerType())},Jrb=function(a,b,c,d){var e=b&&b.videoId;
return e?(a.player.Ho(e,Object.assign({},{autonav:"1"},d||{}),void 0,!0,!0,b,g.bU(a.getVideoData())),a.VI("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",c),!0):!1},Grb=function(a){return(a=a.player.getProgressState(a.getPlayerType()).ingestionTime)&&isFinite(a)?""+Math.floor(1E3*a):null},Hrb=function(a){return(a=a.player.getCurrentTime(a.getPlayerType()))&&isFinite(a)?""+Math.floor(1E3*a):null},Crb=function(a){try{var b=JSON.parse(a);
return null!=b?b:void 0}catch(c){}},Lrb={ERAS:["BC",
"AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5};
Lrb={ERAS:["TCN","SCN"],ERANAMES:["Tr\u01b0\u1edbc Ch\u00faa Gi\u00e1ng Sinh","Sau C\u00f4ng Nguy\u00ean"],NARROWMONTHS:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),STANDALONENARROWMONTHS:"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),MONTHS:"th\u00e1ng 1;th\u00e1ng 2;th\u00e1ng 3;th\u00e1ng 4;th\u00e1ng 5;th\u00e1ng 6;th\u00e1ng 7;th\u00e1ng 8;th\u00e1ng 9;th\u00e1ng 10;th\u00e1ng 11;th\u00e1ng 12".split(";"),STANDALONEMONTHS:"Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(";"),
SHORTMONTHS:"thg 1;thg 2;thg 3;thg 4;thg 5;thg 6;thg 7;thg 8;thg 9;thg 10;thg 11;thg 12".split(";"),STANDALONESHORTMONTHS:"Th\u00e1ng 1;Th\u00e1ng 2;Th\u00e1ng 3;Th\u00e1ng 4;Th\u00e1ng 5;Th\u00e1ng 6;Th\u00e1ng 7;Th\u00e1ng 8;Th\u00e1ng 9;Th\u00e1ng 10;Th\u00e1ng 11;Th\u00e1ng 12".split(";"),WEEKDAYS:"Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),STANDALONEWEEKDAYS:"Ch\u1ee7 Nh\u1eadt;Th\u1ee9 Hai;Th\u1ee9 Ba;Th\u1ee9 T\u01b0;Th\u1ee9 N\u0103m;Th\u1ee9 S\u00e1u;Th\u1ee9 B\u1ea3y".split(";"),
SHORTWEEKDAYS:"CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),STANDALONESHORTWEEKDAYS:"CN;Th 2;Th 3;Th 4;Th 5;Th 6;Th 7".split(";"),NARROWWEEKDAYS:"CN T2 T3 T4 T5 T6 T7".split(" "),STANDALONENARROWWEEKDAYS:"CN T2 T3 T4 T5 T6 T7".split(" "),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["Qu\u00fd 1","Qu\u00fd 2","Qu\u00fd 3","Qu\u00fd 4"],AMPMS:["SA","CH"],DATEFORMATS:["EEEE, d MMMM, y","d MMMM, y","d MMM, y","d/M/yy"],TIMEFORMATS:["HH:mm:ss zzzz","HH:mm:ss z","HH:mm:ss","HH:mm"],DATETIMEFORMATS:["'l\u00fac' {0} {1}",
"'l\u00fac' {0} {1}","{0} {1}","{0} {1}"],FIRSTDAYOFWEEK:0,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:6};var Arb=["ATTESTATION_ERROR_UNKNOWN","ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"];g.k=grb.prototype;g.k.ZV=Lrb.FIRSTDAYOFWEEK;g.k.aW=Lrb.FIRSTWEEKCUTOFFDAY;g.k.clone=function(){var a=new grb(this.date);a.ZV=this.ZV;a.aW=this.aW;return a};
g.k.getFullYear=function(){return this.date.getFullYear()};
g.k.getYear=function(){return this.getFullYear()};
g.k.getMonth=function(){return this.date.getMonth()};
g.k.getDate=function(){return this.date.getDate()};
g.k.getTime=function(){return this.date.getTime()};
g.k.getDay=function(){return this.date.getDay()};
g.k.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.k.getUTCMonth=function(){return this.date.getUTCMonth()};
g.k.getUTCDate=function(){return this.date.getUTCDate()};
g.k.getUTCDay=function(){return this.date.getDay()};
g.k.getUTCHours=function(){return this.date.getUTCHours()};
g.k.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.k.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.k.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
g.k.setFullYear=function(a){this.date.setFullYear(a)};
g.k.setYear=function(a){this.setFullYear(a)};
g.k.setMonth=function(a){this.date.setMonth(a)};
g.k.setDate=function(a){this.date.setDate(a)};
g.k.setTime=function(a){this.date.setTime(a)};
g.k.setUTCFullYear=function(a){this.date.setUTCFullYear(a)};
g.k.setUTCMonth=function(a){this.date.setUTCMonth(a)};
g.k.setUTCDate=function(a){this.date.setUTCDate(a)};
g.k.add=function(a){if(a.years||a.months){var b=this.getMonth()+a.months+12*a.years,c=this.getYear()+Math.floor(b/12);b%=12;0>b&&(b+=12);a:{switch(b){case 1:var d=0!=c%4||0==c%100&&0!=c%400?28:29;break a;case 5:case 8:case 10:case 3:d=30;break a}d=31}d=Math.min(d,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(b);this.setDate(d)}a.days&&(c=this.getYear(),b=0<=c&&99>=c?-1900:0,a=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+864E5*a.days),this.setDate(1),this.setFullYear(a.getFullYear()+
b),this.setMonth(a.getMonth()),this.setDate(a.getDate()),y6(this,a.getDate()))};
g.k.equals=function(a){return!(!a||this.getYear()!=a.getYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
g.k.toString=function(){var a=this.getFullYear(),b=0>a?"-":1E4<=a?"+":"";return[b+crb(Math.abs(a),b?6:4),crb(this.getMonth()+1,2),crb(this.getDate(),2)].join("")+""};
g.k.valueOf=function(){return this.date.valueOf()};var Mrb=new g.Ew("addUpcomingEventReminderEndpoint");var Nrb=new g.Ew("removeUpcomingEventReminderEndpoint");var Orb=new g.Ew("updateUpcomingEventReminderButtonStateCommand");var jrb=new g.Ew("upcomingEventReminderButtonRenderer"),prb=new g.Ew("upcomingEventReminderButtonStateRenderer");g.w(z6,g.OU);z6.prototype.hide=function(){this.buttonElement&&this.buttonElement.removeAttribute("aria-haspopup");g.OU.prototype.hide.call(this)};
z6.prototype.show=function(){this.buttonElement&&this.buttonElement.setAttribute("aria-haspopup","true");g.OU.prototype.show.call(this)};
z6.prototype.xa=function(){g.wb(this.j);g.OU.prototype.xa.call(this)};g.w(A6,g.S);
A6.prototype.G=function(){if(this.toggleButtonRenderer){var a=this.toggleButtonRenderer;a.isToggled?this.C(a.toggledServiceEndpoint):this.C(a.defaultServiceEndpoint);a.isToggled=!a.isToggled;B6(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.j&&this.j.Ib)this.j.Pb();else{var b=mrb(this);b&&this.C(b.serviceEndpoint||b.command);b=(null==(a=g.R(null==b?void 0:b.command,g.gH))?void 0:a.commands)||[];a:{a=g.u(b);for(var c=a.next();!c.done;c=a.next()){var d=b=void 0;if(c=null==(b=g.R(c.value,
g.Ahb))?void 0:null==(d=b.popup)?void 0:d.menuPopupRenderer){a=c;break a}}a=void 0}this.j||(this.j=new z6(this.J,this.buttonElement),this.j.Ja(this.element),g.J(this,this.j),this.j.subscribe("reminderMenuItemClicked",this.C,this));b=this.j;b.menuPopupRenderer=a;irb(b)}};
A6.prototype.C=function(a){var b=g.R(a,Mrb),c=g.R(a,Nrb);if(a&&(b||c)){if(b){var d=b;var e="notification/add_upcoming_event_reminder"}else c&&(d=c,e="notification/remove_upcoming_event_reminder");if(e&&d&&d.params)for(orb(this,e,d.params),a=g.u(d.commands||[]),b=a.next();!b.done;b=a.next())if((b=b.value)&&g.R(b,Orb)){this.B=g.R(b,Orb).state;B6(this);break}}};g.w(qrb,g.S);g.k=qrb.prototype;g.k.getPlayerType=function(){if(8===this.api.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.k.Ra=function(a){var b,c,d=null==a?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:c.offlineSlate;if(d){this.B=a;b=d.liveStreamOfflineSlateRenderer;b.canShowCountdown?this.m0():rrb(this,b);var e,f,h,l;if(c=null==a?void 0:null==(e=a.liveStreamability)?void 0:null==(f=e.liveStreamabilityRenderer)?void 0:null==(h=f.offlineSlate)?void 0:null==(l=h.liveStreamOfflineSlateRenderer)?void 0:l.thumbnail){e=0;f=null;h=c.thumbnails;for(l=0;l<h.length;l++)h[l].width>
e&&(e=h[l].width||0,f=h[l].url);f&&(this.background.style.backgroundImage="url("+f+")")}else this.background.style.backgroundImage="";b.actionButtons||b.reminderButton?(this.j||(this.j=new A6(this.api),this.j.Ja(this.Ga("ytp-offline-slate-buttons")),g.J(this,this.j)),krb(this.j,b.actionButtons&&b.actionButtons[0],b.reminderButton)):this.j&&krb(this.j,null,null);this.B=a}else this.B=null;this.q0()};
g.k.q0=function(a){if(8===this.api.getPresentingPlayerType())var b=!0;else{var c=this.api.Vb(),d=this.getVideoData();b=d.isLivePlayback&&(g.dM(c)||g.cH(c,2)||g.cH(c,64));var e=2===d.autonavState&&g.cH(c,2);c=c.isPlaying()&&!g.PT(d)&&!this.api.isAtLiveHead(void 0,!0);b=b&&!c&&!e}b&&this.B?this.Ib?(null==a?0:g.eH(a,2))&&!this.getVideoData().Kl&&(g.fv(this.element,"ytp-offline-slate-collapsed"),this.D.stop(),g.fv(this.C,"ytp-offline-slate-bar-fade"),this.G.start()):(this.show(),this.D.start(),this.api.oa("offlineslatestatechange"),
this.K&&this.api.oB()):this.Ib&&(this.hide(),this.api.oa("offlineslatestatechange"))};
g.k.m0=function(){var a,b,c,d,e=null==(a=this.B)?void 0:null==(b=a.liveStreamability)?void 0:null==(c=b.liveStreamabilityRenderer)?void 0:null==(d=c.offlineSlate)?void 0:d.liveStreamOfflineSlateRenderer;e&&(a=Math.floor(g.jb()/1E3),b=e.canShowCountdown&&Number(e.scheduledStartTime),!b||b<=a?(rrb(this,e),this.countdownTimer.stop()):(rrb(this,e,g.mH(b-a)),g.Ru(this.countdownTimer)))};
g.k.xa=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.S.prototype.xa.call(this)};C6.prototype.B=function(a){return this.trigger&&a.trigger?this.module===a.module&&this.trigger===a.trigger&&this.j===a.j:!1};
C6.prototype.isExpired=function(){return 6E4<(0,g.LD)()-this.C};
C6.prototype.toString=function(){return this.module+":"+this.trigger+":"+this.j};g.w(zrb,g.UV);g.k=zrb.prototype;g.k.xa=function(){G6(this);this.player.zf("heartbeat");g.UV.prototype.xa.call(this)};
g.k.onCueRangeEnter=function(){this.N=!0;E6(this,2E3)};
g.k.AE=function(a){this.heartbeatParams=a;E6(this,2E3)};
g.k.T1=function(a){var b;8!==this.player.getPresentingPlayerType()&&"UNPLAYABLE"!==(null==(b=this.j)?void 0:b.status)&&(g.cH(a.state,2)||g.cH(a.state,64)?(G6(this),this.D&&(this.N=!0,E6(this,1E3))):(g.cH(a.state,1)||g.cH(a.state,8))&&E6(this,2E3))};
g.k.U1=function(){3!==this.player.getPresentingPlayerType()&&E6(this,2E3)};
g.k.getPlayerType=function(){if(8===this.player.getPresentingPlayerType())return 1};
g.k.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.k.xl=function(a){switch(a){case 4:case 3:return!1}return!0};
g.k.VI=function(a,b,c){a={trigger:a,reason:b};c&&(a.serializedServerContext=c.additionalLoggingData);g.wD("heartbeatActionPlayerTransitioned",a)};
g.k.sf=function(a){var b="LICENSE",c=Crb(a);if(c)return c.reason||g.qW[b]||"";(a=a.match(Drb))&&(a=Number(a[1]))&&(b=g.OBa(a));return g.qW[b]||""};
g.k.YD=function(){return!!this.offlineSlate&&this.offlineSlate.Ib};
var Drb=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.TV("heartbeat",zrb);})(_yt_player);