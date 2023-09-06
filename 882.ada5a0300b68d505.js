"use strict";(self.webpackChunkValvTracAdmin=self.webpackChunkValvTracAdmin||[]).push([[882],{882:(M,p,s)=>{s.r(p),s.d(p,{AuthModule:()=>G});var d=s(6814),x=s(9441),m=s(1896),c=s(6379),t=s(5879),u=s(2296);const A=function(){return["/dashboards/dashboard1"]};let h=(()=>{var e;class i{}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-error"]],standalone:!0,features:[t.jDz],decls:10,vars:2,consts:[[1,"blank-layout-container","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["src","assets/images/backgrounds/errorimg.svg","alt","error-bg"],[1,"auth-title","f-w-600"],[1,"f-s-20","f-w-600","m-b-30"],["mat-flat-button","","color","primary",3,"routerLink"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2",4),t._uU(5,"Opps!!!"),t.qZA(),t.TgZ(6,"h6",5),t._uU(7," This page you are looking for could not be found. "),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Go back to Home"),t.qZA()()()()),2&a&&(t.xp6(8),t.Q6J("routerLink",t.DdM(1,A)))},dependencies:[m.Bz,m.rH,c.q,u.zs]}),i})();var o=s(6223),f=s(982),l=s(4170),g=s(2032);function q(e,i){1&e&&(t.TgZ(0,"div",21),t._uU(1," Email is required. "),t.qZA())}function y(e,i){if(1&e&&(t.TgZ(0,"mat-hint",19),t.YNc(1,q,2,0,"div",20),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.email.errors&&n.f.email.errors.required)}}const U=function(){return["/auth/login"]};let Z=(()=>{var e;class i{constructor(a,r){this.settings=a,this.router=r,this.options=this.settings.getOptions(),this.form=new o.cw({email:new o.NI("",[o.kI.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboards/dashboard1"])}}return(e=i).\u0275fac=function(a){return new(a||e)(t.Y36(f.p),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-password"]],standalone:!0,features:[t.jDz],decls:26,vars:5,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","assets/images/backgrounds/login-bg.svg","alt","login",2,"max-width","500px"],[1,"col-lg-5","col-xl-4","p-0","d-flex","justify-content-center"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9"],[1,"f-w-700","f-s-24","m-0"],[1,"f-s-14","d-block","mat-body-1","m-t-8"],[1,"m-t-30",3,"formGroup","ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","email","formControlName","email"],["class","m-b-16 error-msg",4,"ngIf"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],["mat-stroked-button","","color","primary",1,"w-100","m-t-8",3,"routerLink"],[1,"m-b-16","error-msg"],["class","text-error",4,"ngIf"],[1,"text-error"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t._uU(5,"JC Valves"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"img",5),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h4",10),t._uU(13,"Forgot your password?"),t.qZA(),t.TgZ(14,"span",11),t._uU(15,"Please enter the email address associated with your account and We will email you a link to reset your password."),t.qZA(),t.TgZ(16,"form",12),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(17,"mat-label",13),t._uU(18,"Email Adddress"),t.qZA(),t.TgZ(19,"mat-form-field",14),t._UZ(20,"input",15),t.YNc(21,y,2,1,"mat-hint",16),t.qZA(),t.TgZ(22,"button",17),t._uU(23," Forgot Password "),t.qZA(),t.TgZ(24,"a",18),t._uU(25," Back to Login "),t.qZA()()()()()()()()),2&a&&(t.xp6(16),t.Q6J("formGroup",r.form),t.xp6(5),t.Q6J("ngIf",r.f.email.touched&&r.f.email.invalid),t.xp6(1),t.Q6J("disabled",!r.form.valid),t.xp6(2),t.Q6J("routerLink",t.DdM(4,U)))},dependencies:[m.Bz,m.rH,c.q,l.KE,l.hX,l.bx,g.Nt,u.zs,u.lW,o.u5,o._Y,o.Fj,o.JJ,o.JL,o.UX,o.sg,o.u,d.O5]}),i})();var v=s(5986);function C(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Name is required. "),t.qZA())}function I(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Name should be 6 character. "),t.qZA())}function J(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,C,2,0,"div",24),t.YNc(2,I,2,0,"div",24),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.uname.errors&&n.f.uname.errors.required),t.xp6(1),t.Q6J("ngIf",n.f.uname.errors&&n.f.uname.errors.minlength)}}function N(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Password is required. "),t.qZA())}function k(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,N,2,0,"div",24),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.password.errors&&n.f.password.errors.required)}}const Q=function(){return["/auth/forgot-password"]};let _=(()=>{var e;class i{constructor(a,r){this.settings=a,this.router=r,this.options=this.settings.getOptions(),this.form=new o.cw({uname:new o.NI("",[o.kI.required,o.kI.minLength(6)]),password:new o.NI("",[o.kI.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboard/dashboard-view"])}}return(e=i).\u0275fac=function(a){return new(a||e)(t.Y36(f.p),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:36,vars:6,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","assets/images/backgrounds/login-bg.svg","alt","login",2,"max-width","500px"],[1,"col-lg-5","col-xl-4","p-0"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9","max-width-form"],[1,"f-w-700","f-s-24","m-0"],[1,"f-s-14","d-block","mat-body-1","m-t-8"],[1,"or-border","m-t-30"],[1,"m-t-30",3,"formGroup","ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","uname"],["class","m-b-16 error-msg",4,"ngIf"],["matInput","","type","password","formControlName","password"],[1,"d-flex","align-items-center","m-b-12"],["color","primary"],[1,"text-primary","f-w-600","text-decoration-none","m-l-auto","f-s-14",3,"routerLink"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"m-b-16","error-msg"],["class","text-error",4,"ngIf"],[1,"text-error"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t._uU(5,"JC Valves"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"img",5),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h4",10),t._uU(13,"Welcome to JC Valves"),t.qZA(),t.TgZ(14,"span",11),t._uU(15,"Your Admin Dashboard"),t.qZA(),t.TgZ(16,"div",12),t._uU(17,"Sign in with"),t.qZA(),t.TgZ(18,"form",13),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(19,"mat-label",14),t._uU(20,"Username"),t.qZA(),t.TgZ(21,"mat-form-field",15),t._UZ(22,"input",16),t.YNc(23,J,3,2,"mat-hint",17),t.qZA(),t.TgZ(24,"mat-label",14),t._uU(25,"Password"),t.qZA(),t.TgZ(26,"mat-form-field",15),t._UZ(27,"input",18),t.YNc(28,k,2,1,"mat-hint",17),t.qZA(),t.TgZ(29,"div",19)(30,"mat-checkbox",20),t._uU(31,"Remember this Device"),t.qZA(),t.TgZ(32,"a",21),t._uU(33,"Forgot Password ?"),t.qZA()(),t.TgZ(34,"button",22),t._uU(35," Sign In "),t.qZA()()()()()()()()),2&a&&(t.xp6(18),t.Q6J("formGroup",r.form),t.xp6(5),t.Q6J("ngIf",r.f.uname.touched&&r.f.uname.invalid),t.xp6(5),t.Q6J("ngIf",r.f.password.touched&&r.f.password.invalid),t.xp6(4),t.Q6J("routerLink",t.DdM(5,Q)),t.xp6(2),t.Q6J("disabled",!r.form.valid))},dependencies:[m.Bz,m.rH,c.q,v.oG,l.KE,l.hX,l.bx,g.Nt,u.lW,o.u5,o._Y,o.Fj,o.JJ,o.JL,o.UX,o.sg,o.u,d.O5]}),i})();function Y(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Name is required. "),t.qZA())}function L(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Name should be 6 character. "),t.qZA())}function j(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,Y,2,0,"div",24),t.YNc(2,L,2,0,"div",24),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.uname.errors&&n.f.uname.errors.required),t.xp6(1),t.Q6J("ngIf",n.f.uname.errors&&n.f.uname.errors.minlength)}}function F(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Email is required. "),t.qZA())}function P(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,F,2,0,"div",24),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.email.errors&&n.f.email.errors.required)}}function S(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Password is required. "),t.qZA())}function R(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,S,2,0,"div",24),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.f.password.errors&&n.f.password.errors.required)}}const z=function(){return["/auth/login"]};let b=(()=>{var e;class i{constructor(a,r){this.settings=a,this.router=r,this.options=this.settings.getOptions(),this.form=new o.cw({uname:new o.NI("",[o.kI.required,o.kI.minLength(6)]),email:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboards/dashboard1"])}}return(e=i).\u0275fac=function(a){return new(a||e)(t.Y36(f.p),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],standalone:!0,features:[t.jDz],decls:40,vars:7,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","assets/images/backgrounds/login-bg.svg","alt","login",2,"max-width","500px"],[1,"col-lg-5","col-xl-4","p-0"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9","max-width-form"],[1,"f-w-700","f-s-24","m-0"],[1,"f-s-14","d-block","mat-body-1","m-t-8"],[1,"or-border","m-t-30"],[1,"m-t-30",3,"formGroup","ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","uname"],["class","m-b-16 error-msg",4,"ngIf"],["matInput","","type","email","formControlName","email"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"d-block","f-w-500","d-block","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"],[1,"m-b-16","error-msg"],["class","text-error",4,"ngIf"],[1,"text-error"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t._uU(5,"JC Valves"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"img",5),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h4",10),t._uU(13,"Welcome to JC Valves"),t.qZA(),t.TgZ(14,"span",11),t._uU(15,"Your Admin Dashboard"),t.qZA(),t.TgZ(16,"div",12),t._uU(17,"Sign up with"),t.qZA(),t.TgZ(18,"form",13),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(19,"mat-label",14),t._uU(20,"Name"),t.qZA(),t.TgZ(21,"mat-form-field",15),t._UZ(22,"input",16),t.YNc(23,j,3,2,"mat-hint",17),t.qZA(),t.TgZ(24,"mat-label",14),t._uU(25,"Email Address"),t.qZA(),t.TgZ(26,"mat-form-field",15),t._UZ(27,"input",18),t.YNc(28,P,2,1,"mat-hint",17),t.qZA(),t.TgZ(29,"mat-label",14),t._uU(30,"Password"),t.qZA(),t.TgZ(31,"mat-form-field",15),t._UZ(32,"input",19),t.YNc(33,R,2,1,"mat-hint",17),t.qZA(),t.TgZ(34,"button",20),t._uU(35," Sign Up "),t.qZA()(),t.TgZ(36,"span",21),t._uU(37,"Already have an Account? "),t.TgZ(38,"a",22),t._uU(39," Sign In"),t.qZA()()()()()()()()),2&a&&(t.xp6(18),t.Q6J("formGroup",r.form),t.xp6(5),t.Q6J("ngIf",r.f.uname.touched&&r.f.uname.invalid),t.xp6(5),t.Q6J("ngIf",r.f.email.touched&&r.f.email.invalid),t.xp6(5),t.Q6J("ngIf",r.f.password.touched&&r.f.password.invalid),t.xp6(1),t.Q6J("disabled",!r.form.valid),t.xp6(4),t.Q6J("routerLink",t.DdM(6,z)))},dependencies:[m.Bz,m.rH,c.q,l.KE,l.hX,l.bx,g.Nt,u.lW,o.u5,o._Y,o.Fj,o.JJ,o.JL,o.UX,o.sg,o.u,d.O5]}),i})();const D=[{path:"",children:[{path:"error",component:h},{path:"forgot-password",component:Z},{path:"login",component:_},{path:"register",component:b}]}];var w=s(617),E=s(5195),X=s(9134);let G=(()=>{var e;class i{}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,m.Bz.forChild(D),w.Ps,E.QW,g.c,v.p9,u.ot,o.u5,o.UX,X.et.pick(x),_,b,Z,h]}),i})()}}]);