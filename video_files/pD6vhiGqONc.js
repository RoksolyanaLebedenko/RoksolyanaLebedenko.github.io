/*!CK:850745624!*//*1448180759,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["rEj7k"]); }

__d('P2PPaymentRequestActionHelper',['MercuryIDs','P2PActions','P2PPaymentRequest','P2PPaymentRequestDeclineDialogContainer.react'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l={initDeclinePaymentRequestFlow:function(m){i.showDialog(k,{paymentRequest:m});},initPayForPaymentRequestFlow:function(m){i.chatSendViewOpened({amount:m.amount,memoText:m.memoText,paymentRequestID:m.id,threadID:h.getThreadIDFromUserID(m.requester.id),useModal:true});}};f.exports=l;},null);