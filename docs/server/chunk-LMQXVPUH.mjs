import './polyfills.server.mjs';
import{C as w,G as A,I as E,J as T,a as g,b,c as i,d as S,e as C,f as x,g as e,h as t,i as a,j as s,k as n,l,m as u,t as y,v as O,w as h,x as v,y as _,z as M}from"./chunk-I6EAZTOS.mjs";var I=(()=>{let o=class o{constructor(){this.title="AMSP"}};o.\u0275fac=function(m){return new(m||o)},o.\u0275cmp=g({type:o,selectors:[["app-root"]],standalone:!0,features:[u],decls:1,vars:0,template:function(m,c){m&1&&a(0,"router-outlet")},dependencies:[A]});let d=o;return d})();var F=(()=>{let o=class o{constructor(p){this.router=p}goToAddPage(){this.router.navigate(["order","add"])}goToChangePage(){this.router.navigate(["order","change"])}};o.\u0275fac=function(m){return new(m||o)(S(E))},o.\u0275cmp=g({type:o,selectors:[["app-order"]],standalone:!0,features:[u],decls:32,vars:0,consts:[[1,"header"],["src","../../assets/Avaya White Logo 600x300.jpg","alt","Avaya White Logo",1,"avaya-brand"],[1,"brand-name"],["src","../../assets/Bosch-Logo-2002-2018.png","alt","Bosch-Logo",1,"brand-logo"],[1,"main-menu","nav","nav-tabs"],["role","presentation",1,"dropdown"],["data-toggle","dropdown","href","#","role","button","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","order-dropdown"],[1,"glyphicon","glyphicon-chevron-down","dropdown-arrow"],[1,"dropdown-menu"],[3,"click"]],template:function(m,c){m&1&&(e(0,"div",0),a(1,"img",1),e(2,"h4",2),n(3,"AMSP"),t(),a(4,"img",3),t(),e(5,"ul",4)(6,"li",5)(7,"a",6),n(8," Order "),a(9,"span",7),t(),e(10,"ul",8)(11,"li",9),s("click",function(){return c.goToAddPage()}),n(12,"Add"),t(),e(13,"li",9),s("click",function(){return c.goToChangePage()}),n(14,"Change"),t()()(),e(15,"li"),n(16,"Reporting"),t(),e(17,"li"),n(18,"Pool Asset Control"),t(),e(19,"li"),n(20,"List View"),t(),e(21,"li",5)(22,"a",6),n(23," Data "),a(24,"span",7),t(),e(25,"ul",8)(26,"li"),n(27,"First Option"),t(),e(28,"li"),n(29,"Second Option"),t(),e(30,"li"),n(31,"Third Option"),t()()()())},dependencies:[h],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-right:10px}.brand-logo[_ngcontent-%COMP%], .avaya-brand[_ngcontent-%COMP%]{width:100px}.brand-name[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:#1b77b3}.main-menu[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border:1px solid lightgrey}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px;cursor:pointer}.container[_ngcontent-%COMP%]{width:98%}.location-menu[_ngcontent-%COMP%]{border:none;position:relative}.location-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;min-width:150px;border:1px solid grey;border-radius:4px;background:#f0f0f0;color:#44423b}.location-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover{background:#dcdcdc}.button-group[_ngcontent-%COMP%]{width:fit-content}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 15px;box-sizing:content-box}.btn-default[_ngcontent-%COMP%]{width:120px;border:1px solid grey;border-radius:4px}.button-left[_ngcontent-%COMP%]{margin-right:19px}.dropdown[_ngcontent-%COMP%]{position:relative;margin:15px}.order-label[_ngcontent-%COMP%]{position:absolute;top:-10px;left:10px;width:fit-content;background:#fff;z-index:1;padding:0 5px;color:#7a7d7e}.order-dropdown[_ngcontent-%COMP%]{margin:initial;border:none;display:flex;align-items:center;color:#333}.dropdown-arrow[_ngcontent-%COMP%]{margin-left:10px}@media (max-width: 390px){.location-menu[_ngcontent-%COMP%]{display:grid}}"]});let d=o;return d})();function z(d,o){if(d&1&&(e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),a(4,"img",23),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td"),n(14),t(),e(15,"td"),n(16),t(),e(17,"td"),n(18),t(),e(19,"td"),n(20),t()()),d&2){let r=o.$implicit;i(2),l(r.id),i(2),x("src",r.action,b),i(2),l(r.areaCode),i(2),l(r.phoneNo),i(2),l(r.subscriber),i(2),l(r.connection),i(2),l(r.department),i(2),l(r.costCenter),i(2),l(r.pbx),i(2),l(r.site)}}var R=(()=>{let o=class o{constructor(p){this.router=p,this.Users=[{id:1,action:"../../assets/delete icon.png",areaCode:"+4173(2)234",phoneNo:"5200",subscriber:"Nacca Gustavo",connection:"BCS IP (ACM)",department:"AA/SAR1",costCenter:"909360",pbx:"XMOBILE",site:"Bua"},{id:2,action:"../../assets/delete icon.png",areaCode:"+4173(2)876",phoneNo:"5201",subscriber:"John Newman",connection:"BCS IP (ACM)",department:"AA/SAR-CMS",costCenter:"9093879",pbx:"XMOBILE",site:"Bua"},{id:3,action:"../../assets/delete icon.png",areaCode:"+4173(2)672",phoneNo:"7004",subscriber:"Paul Scholes",connection:"BCS VDN (ACM)",department:"RBAR/CTG",costCenter:"909439",pbx:"FV Asterisk",site:"Bua"},{id:4,action:"../../assets/delete icon.png",areaCode:"+4173(2)7287",phoneNo:"7287",subscriber:"Rio Ferdinand",connection:"BCS IP (ACM)",department:"RBAR/COR",costCenter:"909200",pbx:"FV Asterisk",site:"Bua"}]}goToAddPage(){this.router.navigate(["order","add"])}goToChangePage(){this.router.navigate(["order","change"])}};o.\u0275fac=function(m){return new(m||o)(S(E))},o.\u0275cmp=g({type:o,selectors:[["app-change"]],standalone:!0,features:[u],decls:166,vars:1,consts:[[1,"header"],["src","../../assets/Avaya White Logo 600x300.jpg","alt","Avaya White Logo",1,"avaya-brand"],[1,"brand-name"],["src","../../assets/Bosch-Logo-2002-2018.png","alt","Bosch-Logo",1,"brand-logo"],[1,"main-menu","nav","nav-tabs"],["role","presentation",1,"dropdown"],["data-toggle","dropdown","href","#","role","button","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","order-dropdown"],[1,"glyphicon","glyphicon-chevron-down","dropdown-arrow"],[1,"dropdown-menu"],[3,"click"],[1,"container"],[1,"location-menu","nav","nav-tabs"],[1,"order-label"],["data-toggle","dropdown","href","#","role","button","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle"],[1,"glyphicon","glyphicon-chevron-down"],[1,"dropdown"],["role","group",1,"button-group"],["type","button",1,"btn","button-left","btn-default","btn-primary"],["type","button",1,"btn","btn-default","btn-primary"],[1,"table-responsive","table-responsive-sm"],[1,"table","table-bordered"],[1,"active"],[4,"ngFor","ngForOf"],[1,"delete",3,"src"]],template:function(m,c){m&1&&(e(0,"div",0),a(1,"img",1),e(2,"h4",2),n(3,"AMSP"),t(),a(4,"img",3),t(),e(5,"ul",4)(6,"li",5)(7,"a",6),n(8," Order "),a(9,"span",7),t(),e(10,"ul",8)(11,"li",9),s("click",function(){return c.goToAddPage()}),n(12,"Add"),t(),e(13,"li",9),s("click",function(){return c.goToChangePage()}),n(14,"Change"),t()()(),e(15,"li"),n(16,"Reporting"),t(),e(17,"li"),n(18,"Pool Asset Control"),t(),e(19,"li"),n(20,"List View"),t(),e(21,"li",5)(22,"a",6),n(23," Data "),a(24,"span",7),t(),e(25,"ul",8)(26,"li"),n(27,"First Option"),t(),e(28,"li"),n(29,"Second Option"),t(),e(30,"li"),n(31,"Third Option"),t()()()(),e(32,"div",10)(33,"h2"),n(34,"Order- change/move"),t(),e(35,"h6"),n(36,"Order Details"),t(),e(37,"ul",11)(38,"li",5)(39,"p",12),n(40,"Region Key"),t(),e(41,"a",13),n(42," APAC "),a(43,"span",14),t(),e(44,"ul",8)(45,"li"),n(46,"First Option"),t(),e(47,"li"),n(48,"Second Option"),t(),e(49,"li"),n(50,"Third Option"),t()()(),e(51,"li",5)(52,"p",12),n(53,"Cluster Key*"),t(),e(54,"a",13),n(55," Bosch AR Bua "),a(56,"span",14),t(),e(57,"ul",8)(58,"li"),n(59,"First Option"),t(),e(60,"li"),n(61,"Second Option"),t(),e(62,"li"),n(63,"Third Option"),t()()(),e(64,"li",5)(65,"p",12),n(66,"Area code"),t(),e(67,"a",13),n(68," +4173(2)234 "),a(69,"span",14),t(),e(70,"ul",8)(71,"li"),n(72,"First Option"),t(),e(73,"li"),n(74,"Second Option"),t(),e(75,"li"),n(76,"Third Option"),t()()(),e(77,"li",5)(78,"p",12),n(79,"PBX"),t(),e(80,"a",13),n(81," FV Asterisk "),a(82,"span",14),t(),e(83,"ul",8)(84,"li"),n(85,"First Option"),t(),e(86,"li"),n(87,"Second Option"),t(),e(88,"li"),n(89,"Third Option"),t()()(),e(90,"li",5)(91,"p",12),n(92,"Connection Type*"),t(),e(93,"a",13),n(94," BCS analog(ACM) "),a(95,"span",14),t(),e(96,"ul",8)(97,"li"),n(98,"First Option"),t(),e(99,"li"),n(100,"Second Option"),t(),e(101,"li"),n(102,"Third Option"),t()()(),e(103,"li",5)(104,"p",12),n(105,"Phone no. selection"),t(),e(106,"a",13),n(107," 5 "),t()(),e(108,"li",5)(109,"a",13),n(110," PBX New "),a(111,"span",14),t(),e(112,"ul",8)(113,"li"),n(114,"First Option"),t(),e(115,"li"),n(116,"Second Option"),t(),e(117,"li"),n(118,"Third Option"),t()()(),e(119,"li",5)(120,"a",13),n(121," New Connection Type* "),a(122,"span",14),t(),e(123,"ul",8)(124,"li"),n(125,"First Option"),t(),e(126,"li"),n(127,"Second Option"),t(),e(128,"li"),n(129,"Third Option"),t()()(),e(130,"li",15)(131,"div",16)(132,"button",17),n(133,"Next"),t()()(),e(134,"li",15)(135,"div",16)(136,"button",18),n(137,"Reset"),t()()()(),e(138,"h6"),n(139,"Selected Phone"),t(),e(140,"div",19)(141,"table",20)(142,"thead")(143,"tr")(144,"th",21),n(145,"#"),t(),e(146,"th",21),n(147,"Action"),t(),e(148,"th",21),n(149,"Area code"),t(),e(150,"th",21),n(151,"Phone no."),t(),e(152,"th",21),n(153,"Subscriber"),t(),e(154,"th",21),n(155,"Connection"),t(),e(156,"th",21),n(157,"Department"),t(),e(158,"th",21),n(159,"Cost center"),t(),e(160,"th",21),n(161,"PBX"),t(),e(162,"th",21),n(163,"Site"),t()()(),e(164,"tbody"),C(165,z,21,10,"tr",22),t()()()()),m&2&&(i(165),x("ngForOf",c.Users))},dependencies:[h,O],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-right:10px}.brand-logo[_ngcontent-%COMP%], .avaya-brand[_ngcontent-%COMP%]{width:100px}.brand-name[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:#1b77b3}.main-menu[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border:1px solid lightgrey}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px;cursor:pointer}.container[_ngcontent-%COMP%]{width:98%}.location-menu[_ngcontent-%COMP%]{border:none;position:relative}.location-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;min-width:150px;border:1px solid grey;border-radius:4px;background:#f0f0f0;color:#44423b}.location-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover{background:#dcdcdc}.button-group[_ngcontent-%COMP%]{width:fit-content}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 15px;box-sizing:content-box}.btn-default[_ngcontent-%COMP%]{width:120px;border:1px solid grey;border-radius:4px}.button-left[_ngcontent-%COMP%]{margin-right:19px}.delete[_ngcontent-%COMP%]{width:20px;cursor:pointer}.dropdown[_ngcontent-%COMP%]{position:relative;margin:15px}.order-label[_ngcontent-%COMP%]{position:absolute;top:-10px;left:10px;width:fit-content;background:#fff;z-index:1;padding:0 5px;color:#7a7d7e}.order-dropdown[_ngcontent-%COMP%]{margin:initial;border:none;display:flex;align-items:center;color:#333}.dropdown-arrow[_ngcontent-%COMP%]{margin-left:10px}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 390px){.location-menu[_ngcontent-%COMP%]{display:grid}}"]});let d=o;return d})();function W(d,o){if(d&1&&(e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),a(4,"img",24),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td"),n(14),t(),e(15,"td"),n(16),t(),e(17,"td"),n(18),t(),e(19,"td"),n(20),t(),e(21,"td"),n(22),t()()),d&2){let r=o.$implicit;i(2),l(r.id),i(2),x("src",r.action,b),i(2),l(r.connection),i(2),l(r.article),i(2),l(r.quantity),i(2),l(r.additionalInfo),i(2),l(r.type),i(2),l(r.saPrice),i(2),l(r.obligation),i(2),l(r.single),i(2),l(r.remarks)}}function q(d,o){if(d&1&&(e(0,"tr")(1,"td"),n(2),t(),e(3,"td"),a(4,"img",25),t(),e(5,"td"),n(6),t(),e(7,"td"),n(8),t(),e(9,"td"),n(10),t(),e(11,"td"),n(12),t(),e(13,"td"),n(14),t(),e(15,"td"),n(16),t(),e(17,"td"),n(18),t(),e(19,"td"),n(20),t()()),d&2){let r=o.$implicit;i(2),l(r.id),i(2),x("ngSrc",r.action),i(2),l(r.article),i(2),l(r.type),i(2),l(r.saPrice),i(2),l(r.install),i(2),l(r.change),i(2),l(r.reduction),i(2),l(r.single),i(2),l(r.remark)}}var B=(()=>{let o=class o{constructor(p){this.router=p,this.shoppingCart=[{id:1,action:"../../assets/delete icon.png",connection:"1",article:"Contact Center Agent Project Specific Solution",quantity:"1",additionalInfo:"",type:"monthly",saPrice:"42.20",obligation:"yes",single:"no",remarks:""},{id:2,action:"../../assets/delete icon.png",connection:"1",article:"Class Of Restriction class SWF4",quantity:"1",additionalInfo:"",type:"monthly",saPrice:"0.00",obligation:"yes",single:"no",remarks:""},{id:3,action:"../../assets/delete icon.png",connection:"2",article:"Contact Center Agent Project Specific Solution",quantity:"1",additionalInfo:"",type:"monthly",saPrice:"42.20",obligation:"yes",single:"no",remarks:""},{id:4,action:"../../assets/delete icon.png",connection:"2",article:"Class Of Restriction class SWF4",quantity:"1",additionalInfo:"",type:"monthly",saPrice:"0.00",obligation:"yes",single:"no",remarks:""}],this.articleList=[{id:1,action:"../../assets/add.png",article:"Additional fee for express order",type:"one-time",saPrice:"31.00",install:"",change:"",reduction:"",single:"no",remark:""},{id:2,action:"../../assets/add.png",article:"Call Diversion externally",type:"monthly",saPrice:"0.00",install:"11.90",change:"",reduction:"12.65",single:"no",remark:""}]}goToAddPage(){this.router.navigate(["order","add"])}goToChangePage(){this.router.navigate(["order","change"])}};o.\u0275fac=function(m){return new(m||o)(S(E))},o.\u0275cmp=g({type:o,selectors:[["app-add"]],standalone:!0,features:[u],decls:186,vars:2,consts:[[1,"header"],["src","../../assets/Avaya White Logo 600x300.jpg","alt","Avaya White Logo",1,"avaya-brand"],[1,"brand-name"],["src","../../assets/Bosch-Logo-2002-2018.png","alt","Bosch-Logo",1,"brand-logo"],[1,"main-menu","nav","nav-tabs"],["role","presentation",1,"dropdown"],["data-toggle","dropdown","href","#","role","button","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle","order-dropdown"],[1,"glyphicon","glyphicon-chevron-down","dropdown-arrow"],[1,"dropdown-menu"],[3,"click"],[1,"container"],[1,"location-menu","nav","nav-tabs"],[1,"order-label"],["data-toggle","dropdown","href","#","role","button","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle"],[1,"glyphicon","glyphicon-chevron-down"],[1,"dropdown"],["role","group",1,"button-group"],["type","button",1,"btn","button-left","btn-default","btn-primary"],["type","button",1,"btn","btn-default","btn-primary"],[1,"shopping-cart"],[1,"table-responsive","table-responsive-sm"],[1,"table","table-bordered"],[1,"active"],[4,"ngFor","ngForOf"],[1,"delete",3,"src"],[1,"delete",3,"ngSrc"]],template:function(m,c){m&1&&(e(0,"div",0),a(1,"img",1),e(2,"h4",2),n(3,"AMSP"),t(),a(4,"img",3),t(),e(5,"ul",4)(6,"li",5)(7,"a",6),n(8," Order "),a(9,"span",7),t(),e(10,"ul",8)(11,"li",9),s("click",function(){return c.goToAddPage()}),n(12,"Add"),t(),e(13,"li",9),s("click",function(){return c.goToChangePage()}),n(14,"Change"),t()()(),e(15,"li"),n(16,"Reporting"),t(),e(17,"li"),n(18,"Pool Asset Control"),t(),e(19,"li"),n(20,"List View"),t(),e(21,"li",5)(22,"a",6),n(23," Data "),a(24,"span",7),t(),e(25,"ul",8)(26,"li"),n(27,"First Option"),t(),e(28,"li"),n(29,"Second Option"),t(),e(30,"li"),n(31,"Third Option"),t()()()(),e(32,"div",10)(33,"h2"),n(34,"New Order"),t(),e(35,"h6"),n(36,"Order"),t(),e(37,"ul",11)(38,"li",5)(39,"p",12),n(40,"Region Key"),t(),e(41,"a",13),n(42," DE "),a(43,"span",14),t(),e(44,"ul",8)(45,"li"),n(46,"First Option"),t(),e(47,"li"),n(48,"Second Option"),t(),e(49,"li"),n(50,"Third Option"),t()()(),e(51,"li",5)(52,"p",12),n(53,"Cluster Key"),t(),e(54,"a",13),n(55," BOSCH ETAS SAK "),a(56,"span",14),t(),e(57,"ul",8)(58,"li"),n(59,"First Option"),t(),e(60,"li"),n(61,"Second Option"),t(),e(62,"li"),n(63,"Third Option"),t()()(),e(64,"li",5)(65,"p",12),n(66,"Connection Type*"),t(),e(67,"a",13),n(68," BCS SAK "),a(69,"span",14),t(),e(70,"ul",8)(71,"li"),n(72,"First Option"),t(),e(73,"li"),n(74,"Second Option"),t(),e(75,"li"),n(76,"Third Option"),t()()(),e(77,"li",5)(78,"p",12),n(79,"Quantity*"),t(),e(80,"a",13),n(81," 1 "),t()(),e(82,"li",5)(83,"p",12),n(84,"Remark"),t(),e(85,"a",13),n(86," test "),a(87,"span",14),t()(),e(88,"li",5)(89,"p",12),n(90,"Site Key"),t(),e(91,"a",13),n(92," qq "),a(93,"span",14),t(),e(94,"ul",8)(95,"li"),n(96,"First Option"),t(),e(97,"li"),n(98,"Second Option"),t(),e(99,"li"),n(100,"Third Option"),t()()(),e(101,"li",5)(102,"p",12),n(103,"Department"),t(),e(104,"a",13),n(105," Stalwart "),t()(),e(106,"li",5)(107,"p",12),n(108,"Cost center"),t(),e(109,"a",13),n(110," US "),t()(),e(111,"li",5)(112,"a",13),n(113," Monthly PU/SA Price "),t()(),e(114,"li",5)(115,"a",13),n(116," One-time PU/SA Price "),t()(),e(117,"li",15)(118,"div",16)(119,"button",17),n(120,"Cancel"),t()()(),e(121,"li",15)(122,"div",16)(123,"button",18),n(124,"Next"),t()()()(),e(125,"div",19)(126,"h6"),n(127,"Shopping Cart"),t(),e(128,"h6"),n(129,"File Attachment"),t()(),e(130,"div",20)(131,"table",21)(132,"thead")(133,"tr")(134,"th",22),n(135,"#"),t(),e(136,"th",22),n(137,"Action"),t(),e(138,"th",22),n(139,"Connection"),t(),e(140,"th",22),n(141,"Article"),t(),e(142,"th",22),n(143,"Quantity"),t(),e(144,"th",22),n(145,"Additional Info"),t(),e(146,"th",22),n(147,"Type"),t(),e(148,"th",22),n(149,"SA Price"),t(),e(150,"th",22),n(151,"Obligation"),t(),e(152,"th",22),n(153,"Single"),t(),e(154,"th",22),n(155,"Remarks"),t()()(),e(156,"tbody"),C(157,W,23,11,"tr",23),t()()(),e(158,"h6"),n(159,"Article List"),t(),e(160,"div",20)(161,"table",21)(162,"thead")(163,"tr")(164,"th",22),n(165,"#"),t(),e(166,"th",22),n(167,"Action"),t(),e(168,"th",22),n(169,"Article"),t(),e(170,"th",22),n(171,"Type"),t(),e(172,"th",22),n(173,"SA Price"),t(),e(174,"th",22),n(175,"Install"),t(),e(176,"th",22),n(177,"Change"),t(),e(178,"th",22),n(179,"Reduction"),t(),e(180,"th",22),n(181,"Single"),t(),e(182,"th",22),n(183,"Remarks"),t()()(),e(184,"tbody"),C(185,q,21,10,"tr",23),t()()()()),m&2&&(i(157),x("ngForOf",c.shoppingCart),i(28),x("ngForOf",c.articleList))},dependencies:[h,O,v],styles:[".header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-right:10px}.brand-logo[_ngcontent-%COMP%], .avaya-brand[_ngcontent-%COMP%]{width:100px}.brand-name[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{color:#1b77b3}.main-menu[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;border:1px solid lightgrey}.main-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:0 15px;cursor:pointer}.container[_ngcontent-%COMP%]{width:98%}.location-menu[_ngcontent-%COMP%]{border:none;position:relative}.location-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;min-width:150px;border:1px solid grey;border-radius:4px;background:#f0f0f0;color:#44423b}.location-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:hover{background:#dcdcdc}.button-group[_ngcontent-%COMP%]{width:fit-content}.button-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 15px;box-sizing:content-box}.btn-default[_ngcontent-%COMP%]{width:120px;border:1px solid grey;border-radius:4px}.button-left[_ngcontent-%COMP%]{margin-right:19px}.delete[_ngcontent-%COMP%]{width:20px;cursor:pointer}.dropdown[_ngcontent-%COMP%]{position:relative;margin:15px}.order-label[_ngcontent-%COMP%]{position:absolute;top:-10px;left:10px;width:fit-content;background:#fff;z-index:1;padding:0 5px;color:#7a7d7e}.order-dropdown[_ngcontent-%COMP%]{margin:initial;border:none;display:flex;align-items:center;color:#333}.dropdown-arrow[_ngcontent-%COMP%]{margin-left:10px}.shopping-cart[_ngcontent-%COMP%]{width:100%;max-width:200px;display:flex;justify-content:space-between}.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}@media (max-width: 770px){.article-label[_ngcontent-%COMP%]{margin-top:10px}}@media (max-width: 390px){.location-menu[_ngcontent-%COMP%]{display:grid}}"]});let d=o;return d})();var L=[{path:"",redirectTo:"/order",pathMatch:"full"},{path:"order",component:F},{path:"order/change",component:R},{path:"order/add",component:B}];var j={providers:[T(L),M()]};var K={providers:[w()]},N=y(j,K);var U=()=>_(I,N),ue=U;export{ue as a};
