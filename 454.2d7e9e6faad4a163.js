"use strict";(self.webpackChunkcrud_carros=self.webpackChunkcrud_carros||[]).push([[454],{1454:(k,d,s)=>{s.r(d),s.d(d,{ListaCarrosModule:()=>F});var l=s(177),t=s(540),p=s(1863),i=s(4341),_=s(9847);function m(o,c){1&o&&(t.j41(0,"div",10),t.EFF(1," Carro atualizado com sucesso! "),t.k0s())}function g(o,c){1&o&&(t.j41(0,"div",11),t.EFF(1," Carro deletado com sucesso! "),t.k0s())}function u(o,c){if(1&o){const e=t.RV6();t.qex(0),t.j41(1,"td"),t.EFF(2),t.k0s(),t.j41(3,"td"),t.EFF(4),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.EFF(8),t.k0s(),t.j41(9,"td"),t.EFF(10),t.k0s(),t.j41(11,"td"),t.EFF(12),t.k0s(),t.j41(13,"td",14)(14,"button",15),t.bIt("click",function(){t.eBV(e);const r=t.XpG().$implicit,a=t.XpG();return t.Njj(a.editarCarro(r))}),t.nrm(15,"i",16),t.k0s(),t.j41(16,"button",17),t.bIt("click",function(){t.eBV(e);const r=t.XpG().$implicit,a=t.XpG();return t.Njj(a.apagarCarro(r))}),t.nrm(17,"i",18),t.k0s()(),t.bVm()}if(2&o){const e=t.XpG().$implicit;t.R7$(2),t.JRh(e.placa),t.R7$(2),t.JRh(e.chassi),t.R7$(2),t.JRh(e.renavam),t.R7$(2),t.JRh(e.modelo),t.R7$(2),t.JRh(e.marca),t.R7$(2),t.JRh(e.ano)}}function C(o,c){if(1&o){const e=t.RV6();t.j41(0,"td")(1,"div")(2,"input",19),t.bIt("ngModelChange",function(r){t.eBV(e);const a=t.XpG().$implicit;return t.Njj(a.placa=r)}),t.k0s()()(),t.j41(3,"td")(4,"div")(5,"input",20),t.bIt("ngModelChange",function(r){t.eBV(e);const a=t.XpG().$implicit;return t.Njj(a.chassi=r)}),t.k0s()()(),t.j41(6,"td")(7,"div")(8,"input",21),t.bIt("ngModelChange",function(r){t.eBV(e);const a=t.XpG().$implicit;return t.Njj(a.renavam=r)}),t.k0s()()(),t.j41(9,"td")(10,"div")(11,"input",22),t.bIt("ngModelChange",function(r){t.eBV(e);const a=t.XpG().$implicit;return t.Njj(a.modelo=r)}),t.k0s()()(),t.j41(12,"td")(13,"div")(14,"input",23),t.bIt("ngModelChange",function(r){t.eBV(e);const a=t.XpG().$implicit;return t.Njj(a.marca=r)}),t.k0s()()(),t.j41(15,"td")(16,"div")(17,"input",24),t.bIt("ngModelChange",function(r){t.eBV(e);const a=t.XpG().$implicit;return t.Njj(a.ano=r)}),t.k0s()()(),t.j41(18,"td",25)(19,"button",26),t.bIt("click",function(){t.eBV(e);const r=t.XpG().$implicit,a=t.XpG();return t.Njj(a.salvarEdicao(r))}),t.EFF(20," Salvar "),t.k0s(),t.j41(21,"button",27),t.bIt("click",function(){t.eBV(e);const r=t.XpG().index,a=t.XpG();return t.Njj(a.cancelarEdicao(r))}),t.EFF(22," Cancelar "),t.k0s()()}if(2&o){const e=t.XpG().$implicit;t.R7$(2),t.Y8G("ngModel",e.placa),t.R7$(3),t.Y8G("ngModel",e.chassi),t.R7$(3),t.Y8G("ngModel",e.renavam),t.R7$(3),t.Y8G("ngModel",e.modelo),t.R7$(3),t.Y8G("ngModel",e.marca),t.R7$(3),t.Y8G("ngModel",e.ano)}}function h(o,c){if(1&o&&(t.j41(0,"tr"),t.DNE(1,u,18,6,"ng-container",12),t.DNE(2,C,23,6,"ng-template",null,13,t.C5r),t.k0s()),2&o){const e=c.$implicit,n=t.sdS(3);t.R7$(1),t.Y8G("ngIf",!e.editando)("ngIfElse",n)}}let f=(()=>{class o{constructor(e){this.service=e,this.carros=[],this.success=!1,this.delete=!1}ngOnInit(){this.service.getCarros().subscribe({next:e=>{this.carros=e,console.log(this.carros)},error:e=>{console.error(e)}})}editarCarro(e){e.editando=!0}cancelarEdicao(e){this.carros[e].editando=!1}salvarEdicao(e){e.editando=!1,this.service.atualizarCarro(e).subscribe({next:()=>{this.success=!0,window.location.reload()},error:n=>{console.error("Erro ao atualizar o carro:",n)}})}apagarCarro(e){this.service.apagarCarro(e.id).subscribe({next:()=>{this.carros=this.carros.filter(n=>n.id!==e.id),this.delete=!0,window.location.reload()},error:n=>{console.error("Erro ao apagar o carro:",n)}})}static#t=this.\u0275fac=function(n){return new(n||o)(t.rXU(p.R))};static#e=this.\u0275cmp=t.VBU({type:o,selectors:[["app-lista-carros"]],decls:27,vars:3,consts:[[1,"d-flex","flex-column","justify-content-start","align-items-center","background__page"],["class","alert alert-success","role","alert",4,"ngIf"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"d-flex","flex-column","justify-content-center","p-2","w-100"],[1,"card","d-flex",2,"width","100% !important"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-danger"],[4,"ngIf","ngIfElse"],["editMode",""],[1,"d-flex","gap-2",2,"padding","1.07rem !important"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],[1,"fas","fa-edit"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-trash"],["type","text","id","placa","maxlength","7",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","chassi","maxlength","17",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","renavam","maxlength","11",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","modelo",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","marca",1,"form-control",3,"ngModel","ngModelChange"],["type","text","id","ano","maxlength","4",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","gap-2","p-2",2,"padding","1.05rem !important"],["type","button",1,"btn","btn-success","btn-sm",3,"click"],["type","button",1,"btn","btn-secondary","btn-sm",3,"click"]],template:function(n,r){1&n&&(t.nrm(0,"app-navbar"),t.j41(1,"div",0),t.DNE(2,m,2,0,"div",1),t.DNE(3,g,2,0,"div",2),t.j41(4,"h1"),t.EFF(5,"Tabela de Carros"),t.k0s(),t.j41(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"table",7)(11,"thead")(12,"tr")(13,"th",8),t.EFF(14,"Placa"),t.k0s(),t.j41(15,"th",8),t.EFF(16,"Chassi"),t.k0s(),t.j41(17,"th",8),t.EFF(18,"Cod. Renavam"),t.k0s(),t.j41(19,"th",8),t.EFF(20,"Modelo"),t.k0s(),t.j41(21,"th",8),t.EFF(22,"Marca"),t.k0s(),t.j41(23,"th",8),t.EFF(24,"Ano"),t.k0s()()(),t.j41(25,"tbody"),t.DNE(26,h,4,2,"tr",9),t.k0s()()()()()()()),2&n&&(t.R7$(2),t.Y8G("ngIf",r.success),t.R7$(1),t.Y8G("ngIf",r.delete),t.R7$(23),t.Y8G("ngForOf",r.carros))},dependencies:[l.Sq,l.bT,i.me,i.BC,i.tU,i.vS,_._],styles:[".background__page[_ngcontent-%COMP%]{background-color:#8fa0bd;height:100vh;padding:7rem 2rem}h1[_ngcontent-%COMP%]{color:#fff;font-weight:700}"]})}return o})();var j=s(303),b=s(2953);const v=[{path:"",component:f}];let F=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.$C({type:o});static#n=this.\u0275inj=t.G2t({imports:[l.MD,j.iI.forChild(v),i.YN,b.f]})}return o})()}}]);