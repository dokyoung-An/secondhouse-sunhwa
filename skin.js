// Garden Gnome Software - Skin
// Pano2VR 7.0.10/20025
// Filename: ???? ?? VR ??.ggsk
// Generated 2024-11-01T15:21:55

function pano2vrSkin(player,base) {
	player.addVariable('vis_minimap_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_move_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_furniture_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_daynight_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_button', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_sidebar', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roomchoice', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapangle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_sidebar', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_m_type', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_bottom_menu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_move_button_1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_minimap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_notice', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__41=document.createElement('div');
		el.ggId="\uc67c\ucabd\uc0ac\uc774\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 87%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 10%;';
		hs+='pointer-events:none;';
		hs+='min-width:250px; min-height:650px; max-height:770px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__41.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_sidebar') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__41.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__41.ggCurrentLogicStateSize = newLogicStateSize;
				me.__41.style.transition='width 0s, height 0s';
				if (me.__41.ggCurrentLogicStateSize == 0) {
					me.__41.style.width='10%';
					me.__41.style.height='7%';
					skin.updateSize(me.__41);
				}
				else {
					me.__41.style.width='10%';
					me.__41.style.height='87%';
					skin.updateSize(me.__41);
				}
			}
		}
		me.__41.logicBlock_size();
		me.__41.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__41.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__41.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__41.style.transition='width 0s, height 0s';
				if (me.__41.ggCurrentLogicStateVisible == 0) {
					me.__41.style.visibility="hidden";
					me.__41.ggVisible=false;
				}
				else {
					me.__41.style.visibility=(Number(me.__41.style.opacity)>0||!me.__41.style.opacity)?'inherit':'hidden';
					me.__41.ggVisible=true;
				}
			}
		}
		me.__41.logicBlock_visible();
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__77=document.createElement('div');
		el.ggId="\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 12px 12px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__77.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__77.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_sidebar') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__77.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__77.ggCurrentLogicStateSize = newLogicStateSize;
				me.__77.style.transition='width 0s, height 0s';
				if (me.__77.ggCurrentLogicStateSize == 0) {
					me.__77.style.width='100%';
					me.__77.style.height='9%';
					skin.updateSize(me.__77);
				}
				else {
					me.__77.style.width='100%';
					me.__77.style.height='100%';
					skin.updateSize(me.__77);
				}
			}
		}
		me.__77.logicBlock_size();
		me.__77.ggUpdatePosition=function (useTransition) {
		}
		me.__41.appendChild(me.__77);
		el=me.__42=document.createElement('div');
		el.ggId="\uc717\ud22c\uc2dc\ub3c4 \ub4f1\ub4f1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me._logotop=document.createElement('div');
		el.ggId="logo-top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='position:relative;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logotop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logotop.onclick=function (e) {
			player.setVariableValue('vis_sidebar', !player.getVariableValue('vis_sidebar'));
		}
		me._logotop.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		me._logotop.appendChild(me._rectangle_7);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAOCAYAAAAfZO+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR2SURBVHgB7VlbSFRRFN0zjjqFaWEfRYRW2oselL1+6qOPonf0E330LnugFEFGfSRRUpZWBkX1KRQVfaRGQY8PMelLqAgijDJB6IGa42Q6Nk5rd8/F48yde851Bh/ggsW5c+8+++x77j5773OGQqFQh8RzpEBbW1uFJF8LJtvJ4/la8HvYOMxGcBZpArIZ4CfwN9gu6AN/CbaCzeAWqc9HJ+8GmTXgNwtbZfK7TBDyexWyKh4WetyyrX6//7yGreuFLZ1hfANOIk1AdjL4zsI2P5gPukxZDzhK6puoUu71ehOlPl6yN2QPmlJwrMXjyWAVT7jL5apW6FmG5i'+
			'44hRRoaWlJkH56JVsTFWPsR3Mxiq0yukFzAsPnzyk80nWypMtj10nYWgyOs3g8H3wEmR2Y1w8KPVloKsFoi5bnIxlypdAVcpNDJCUl9ahkxErZi8vLZD/508CHkF1oo4tf/h5pOIrZhRwA+j3gQVyWkNpRBh2wdSeaa2TtKCYWgU8hm2mjZx6a5xTdURi82DjKFXCEsfXg/qKjo2MBItBYt9tdZCO2HNwAjgcrYcxSeG+TLCDS1FLwOmnC4/G8JWfIAUeDyjQlwJGlRVy/Bk9ayEwHd1FvBLoDvreQqyUH8Pl8PGdp4Glxy1zs8gLeSsY7ZYDlXAZgXv2yHtybiWYJeCPaWN3d3RMTEhIO4Ruyw5wFG7mjjGJSADKPJfm68JqFPT8QCNQUFhaqQmm+pKeLc2fY8xzwC9jvMI++X+3eTdjwkuIM6FwB9khjr1fIcyRu'+
			'MIVRs1yykMnDIqwi9djl0rhcB40Je54pxsqw09PU1DQzGAy2S7oKHach6uvFshEucDsur5Ii56ogcimvxkzQyw6jQWW9Jenn1JOPS458/ZmDAQVs3YemBBHCSzEAemajeUFGvWiL1NRUjoou+R5/1FD4TdWYUe5vAm+Toug1UV9f787Ozo5UHgpNJaNGmSFuVZNeHfKAjI+vgx1kOPVwcJQDaMrIKIBj0cOp8T4ZdaKy7kxJSYnwCXYWzn+cd0dTbOCVqu352LVYOii25ivT0tJypFtzSQ81pA/+AEPeUQRyqX+OEiRjQZj1ympwDsUAN0IbF3a6xR3D0W5jBIOCLrAAvMlbXooTzNqCz0I6wQkafZQhTAfp6em6qY9DZ1BDro5GwGBHOQreitFRLGsWgtIAmivIa5tAzvt26WSBdP2Z9D5kBLKysnTTwG7Y94fiiw'+
			'ZwMRmTMQPvfCHsuZv6TpQ8cWxLMWxqp4EBz/H/cyiccU2DraWSPaZNQaktB1/FIaJY1iy9T12uCnFYc4rU4AOdXPT5S8MPXAckgZvBieAJB319ZJz7DJSz8F8CqeAqnHnwweSxKHL8HY5TfBzFElarm/f4R8hIS1bgNPQM3AajWmkYAna3oeHtKK/CIV2DwdafaPhIwq6A52h3BiyLo6NERJYIZ8FgnSAfJ7OXBiyU8MHQRsg0U2wY1N2IsJ93ReU0xAFbf6BZBz6xeMzfKA8sinNEiahZ/gG9TRLUcv054gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 12px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((12px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 126px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._logotop.appendChild(me._image_1);
		el=me.__76=document.createElement('div');
		els=me.__76__img=document.createElement('img');
		els.className='ggskin ggskin__76';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub85c\uace0 \ubaa8\ubc14\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 95px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__76.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__76.ggUpdatePosition=function (useTransition) {
		}
		me._logotop.appendChild(me.__76);
		el=me.__75=document.createElement('div');
		els=me.__75__img=document.createElement('img');
		els.className='ggskin ggskin__75';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub85c\uace0 \ub514\ud504\ub9ac\ub9c8";
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 200%;';
		hs+='left : -7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200% + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 73%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__75.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__75.ggUpdatePosition=function (useTransition) {
		}
		me._logotop.appendChild(me.__75);
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24iIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_sidebar') == false))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_6.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_6.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_6.style.transition='transform 0s';
				if (me._svg_6.ggCurrentLogicStateAngle == 0) {
					me._svg_6.ggParameter.a = 180;
					me._svg_6.style.transform=parameterToTransform(me._svg_6.ggParameter);
				}
				else {
					me._svg_6.ggParameter.a = 0;
					me._svg_6.style.transform=parameterToTransform(me._svg_6.ggParameter);
				}
			}
		}
		me._svg_6.logicBlock_angle();
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._logotop.appendChild(me._svg_6);
		me.__42.appendChild(me._logotop);
		el=me.__71=document.createElement('div');
		el.ggId="\ud22c\uc2dc\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 365px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		hs+='position:relative;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__71.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sidebar') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__71.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__71.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__71.style.transition='';
				if (me.__71.ggCurrentLogicStateVisible == 0) {
					me.__71.style.visibility="hidden";
					me.__71.ggVisible=false;
				}
				else {
					me.__71.style.visibility=(Number(me.__71.style.opacity)>0||!me.__71.style.opacity)?'inherit':'hidden';
					me.__71.ggVisible=true;
				}
			}
		}
		me.__71.logicBlock_visible();
		me.__71.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 2px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6d0\ud654\ub9ac \uc138\ucee8\ud558\uc6b0\uc2a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me._text_1);
		el=me.__74=document.createElement('div');
		el.ggId="\ud22c\uc2dc\ub3c4 \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 208px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__74.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__74.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me.__74.appendChild(me._image_3);
		me._rectangle_2.appendChild(me.__74);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 279px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1_1=document.createElement('div');
		el.ggId="Container 1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='height : 40px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__73=document.createElement('div');
		els=me.__73__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubd84\uc591\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 1px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__73.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac74\ucd95\uba74\uc801 : 51.24\u33a1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__73.ggUpdateText();
		el.appendChild(els);
		me.__73.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__73.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(player.getNodeUserdata('_master').description) == "33"))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "54"))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "28"))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__73.ggCurrentLogicStateText != newLogicStateText) {
				me.__73.ggCurrentLogicStateText = newLogicStateText;
				me.__73.style.transition='';
				if (me.__73.ggCurrentLogicStateText == 0) {
					if (me.__73.ggUpdateText) {
					me.__73.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc2e4\uc0ac\uc6a9 \uba74\uc801 33.30 \u33a1(10.07\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__73.ggUpdateText();
					} else {
						if (me.__73.ggUpdatePosition) me.__73.ggUpdatePosition();
					}
				}
				else if (me.__73.ggCurrentLogicStateText == 1) {
					if (me.__73.ggUpdateText) {
					me.__73.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc2e4\uc0ac\uc6a9 \uba74\uc801 54.52 \u33a1(16.58\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__73.ggUpdateText();
					} else {
						if (me.__73.ggUpdatePosition) me.__73.ggUpdatePosition();
					}
				}
				else if (me.__73.ggCurrentLogicStateText == 2) {
					if (me.__73.ggUpdateText) {
					me.__73.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc2e4\uc0ac\uc6a9 \uba74\uc801 28.21 \u33a1(8.53\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__73.ggUpdateText();
					} else {
						if (me.__73.ggUpdatePosition) me.__73.ggUpdatePosition();
					}
				}
				else {
					if (me.__73.ggUpdateText) {
					me.__73.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac74\ucd95\uba74\uc801 : 51.24\u33a1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__73.ggUpdateText();
					} else {
						if (me.__73.ggUpdatePosition) me.__73.ggUpdatePosition();
					}
				}
			}
		}
		me.__73.logicBlock_text();
		me.__73.ggUpdatePosition=function (useTransition) {
		}
		me._container_1_1.appendChild(me.__73);
		el=me.__72=document.createElement('div');
		els=me.__72__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\uc6a9\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__72.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc9c0\uba74\uc801 : 311.00\u33a1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__72.ggUpdateText();
		el.appendChild(els);
		me.__72.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__72.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(player.getNodeUserdata('_master').description) == "33"))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "54"))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "28"))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me.__72.ggCurrentLogicStateText != newLogicStateText) {
				me.__72.ggCurrentLogicStateText = newLogicStateText;
				me.__72.style.transition='';
				if (me.__72.ggCurrentLogicStateText == 0) {
					if (me.__72.ggUpdateText) {
					me.__72.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc804\uc6a9 \uba74\uc801 26.55 \u33a1(8.03\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__72.ggUpdateText();
					} else {
						if (me.__72.ggUpdatePosition) me.__72.ggUpdatePosition();
					}
				}
				else if (me.__72.ggCurrentLogicStateText == 1) {
					if (me.__72.ggUpdateText) {
					me.__72.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc804\uc6a9 \uba74\uc801 44.62 \u33a1(13.50\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__72.ggUpdateText();
					} else {
						if (me.__72.ggUpdatePosition) me.__72.ggUpdatePosition();
					}
				}
				else if (me.__72.ggCurrentLogicStateText == 2) {
					if (me.__72.ggUpdateText) {
					me.__72.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc804\uc6a9 \uba74\uc801 22.96 \u33a1(6.95\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__72.ggUpdateText();
					} else {
						if (me.__72.ggUpdatePosition) me.__72.ggUpdatePosition();
					}
				}
				else {
					if (me.__72.ggUpdateText) {
					me.__72.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub300\uc9c0\uba74\uc801 : 311.00\u33a1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me.__72.ggUpdateText();
					} else {
						if (me.__72.ggUpdatePosition) me.__72.ggUpdatePosition();
					}
				}
			}
		}
		me.__72.logicBlock_text();
		me.__72.ggUpdatePosition=function (useTransition) {
		}
		me._container_1_1.appendChild(me.__72);
		me._container_2.appendChild(me._container_1_1);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 6px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 103px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>%1<\/strong> TYPE<\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_2.ggUpdateText();
		});
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._text_2);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgBhZAxDoYgDIUpjP/OfwtWvZuznk1XboGzrugrSQ3BEps0Ke372heMQYQQPKf5iFpHXDjnlguRc55ijHsPqnVWBkT0t9bO2mWBUD4zl1I6vfcroJFh5ID3xv0WwrEkrkjbKoKyWYGKw54lFuI6aVBZWIOtbbR+GvQCWxjQ0fvpGwjkc1ayoG0XAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 8px;';
		hs+='position : absolute;';
		hs+='right : 14px;';
		hs+='top : calc(50% - ((8px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._image_4);
		me._container_2.appendChild(me._rectangle_3);
		me._rectangle_2.appendChild(me._container_2);
		me.__71.appendChild(me._rectangle_2);
		me.__42.appendChild(me.__71);
		el=me.__43=document.createElement('div');
		el.ggId="\uc2a4\uc704\uce58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 210px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		hs+='min-width:180px; position:absolute; bottmon:0px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sidebar') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__67=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__67.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__67.onclick=function (e) {
			player.setVariableValue('vis_minimap_button', !player.getVariableValue('vis_minimap_button'));
		}
		me.__67.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_47=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_47.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgBzVKxDcIwEHxDBghdyoxgNvAIMAFpqcgGpKSkpQI2IBtASeVsQMqUKenCvfRWXpECgoqTTv78/50dvw0JrLUpliMYg2VVVYWqOSwryV9IwUhDjmUr4oAaXIIZuJFcC4OZNogg3quGgBZMQT/Ix4Nvmigx73aVOAPP4STGGEcjmIRA/xsEfIJTMPDe3z4a/Io/MsA0+IZTjruuc7oJNTtmEKn4Qf2YCuonwuIwzprGTiBiFuXS6FSewe9lPjSYJkkSmnYY5bppmjtypeR4d34HC9QOqD3pG8i9vMULjrw9+v0SBuYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_47.appendChild(me._image_5);
		me.__70.appendChild(me._rectangle_47);
		me.__67.appendChild(me.__70);
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__67.appendChild(me._text_3);
		el=me.__68=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \uc2a4\uc704\uce58";
		el.ggDy=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 7px);';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__68.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__68.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_53=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_53.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_minimap_button') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_53.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_53.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_53.style.transition='background-color 500ms linear 300ms';
				if (me._rectangle_53.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_53.style.backgroundColor="rgba(48,48,48,0.392157)";
				}
				else {
					me._rectangle_53.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_53.logicBlock_backgroundcolor();
		me._rectangle_53.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me._rectangle_53);
		el=me.__69=document.createElement('div');
		el.ggId="\ubc84\ud2bc \uc6d0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__69.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__69.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_minimap_button') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__69.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__69.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__69.style.transition='right 200ms ease 0ms, top 200ms ease 0ms';
				if (me.__69.ggCurrentLogicStatePosition == 0) {
					me.__69.style.right='17px';
					me.__69.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__69.style.right='0px';
					me.__69.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__69.logicBlock_position();
		me.__69.ggUpdatePosition=function (useTransition) {
		}
		me.__68.appendChild(me.__69);
		me.__67.appendChild(me.__68);
		me.__43.appendChild(me.__67);
		el=me.__61=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.onclick=function (e) {
			player.setVariableValue('vis_move_button', !player.getVariableValue('vis_move_button'));
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		el=me.__65=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__65.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__65.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_46=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9-Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_46.ggUpdatePosition=function (useTransition) {
		}
		el=me.__66=document.createElement('div');
		els=me.__66__img=document.createElement('img');
		els.className='ggskin ggskin__66';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgBrVLRsUExEN28ef/vvQreVYHo4OqAClwV0AEd0IESUAEqcDtwO0AFnOVcMpE1zDgzZ5JsNmdPNhH5AJy14b3/xTAE/8E1uCzL8pDK/RYbWzDjvABLsJVK/JK0izwQCMKX+GsiFpxzp2TcOoCqeh0fhCr0pCFvOmmDY86nYvTDEtFX8XyJzcWucwuu1Vn2TEQPz8E9OJI0NL4DZ6FYLaKBugc52DVENN5nzoqFbyjAk0RW9cOxwTEyOh6ETpqg3rkKM9mHdkKkCsRuyOlkEltMQPenKeeKghbrxnXk/hqe6wlzlD2rSsbELSvF1AIjidyaP5aJP+'+
			'AfKx/l2rcHnAEGykMyE+bZ6AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc774\ub3d9 \uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__66.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__66.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_46.appendChild(me.__66);
		me.__65.appendChild(me._rectangle_46);
		me.__61.appendChild(me.__65);
		el=me.__64=document.createElement('div');
		els=me.__64__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uacf5\uac04\uc774\ub3d9 \ud0dd\uc2a4\ud2b8";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__64.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__64.ggUpdateText();
		el.appendChild(els);
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		me.__61.appendChild(me.__64);
		el=me.__62=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9 \uc2a4\uc704\uce58";
		el.ggDy=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 7px);';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_52=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9-Rectangle 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_52.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_move_button') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_52.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_52.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_52.style.transition='background-color 500ms linear 300ms';
				if (me._rectangle_52.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_52.style.backgroundColor="rgba(48,48,48,0.392157)";
				}
				else {
					me._rectangle_52.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_52.logicBlock_backgroundcolor();
		me._rectangle_52.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me._rectangle_52);
		el=me.__63=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9-\ubc84\ud2bc \uc6d0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_move_button') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__63.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__63.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__63.style.transition='right 200ms ease 0ms, top 200ms ease 0ms';
				if (me.__63.ggCurrentLogicStatePosition == 0) {
					me.__63.style.right='17px';
					me.__63.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__63.style.right='0px';
					me.__63.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__63.logicBlock_position();
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me.__62.appendChild(me.__63);
		me.__61.appendChild(me.__62);
		me.__43.appendChild(me.__61);
		el=me.__55=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uce58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\ud604\uad00"))
				)
			) {
				player.openNext("{node2}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node3}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e41"))
				)
			) {
				player.openNext("{node4}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e42"))
				)
			) {
				player.openNext("{node5}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uce68\uc2e4"))
				)
			) {
				player.openNext("{node6}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uc695\uc2e4"))
				)
			) {
				player.openNext("{node7}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\ud604\uad00"))
				)
			) {
				player.openNext("{node8}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node9}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e41"))
				)
			) {
				player.openNext("{node10}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e42"))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uce68\uc2e4"))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uc695\uc2e4"))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__59=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uce58 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_45=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uce58-Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		els=me.__60__img=document.createElement('img');
		els.className='ggskin ggskin__60';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADaSURBVHgBvVKxDcIwEHySFJQpU3qEeIKEDRghVNRMkBFYgTWoyAZOCRUpXVJSclYsZIw/FhHKSa+XTu/7+/cT/QGrEFmWpULKmTe7vu87l8gCAo1JxKNFdC6RMEVTqNGoZkWsC0FxtKwIxV0E3SQzXHw1dBdbIQaKQ9g6gcY5fupBvwIP71LKyuWyyIMt0tF0RscNVzcpQuPBCY+TSqmPEVLiXRiBPdnDK4riprW+Ip5+LXf2DY1j+Kd/Qhz8ZaYBAYF0QawpoG94uDm75Jyzb+yob3CLHWhpvAAGSTYXaNJTAwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uac00\uad6c\ubc30\uce58 \uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_45.appendChild(me.__60);
		me.__59.appendChild(me._rectangle_45);
		me.__55.appendChild(me.__59);
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\ubc30\uce58 \ud0dd\uc2a4\ud2b8";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c\ubc30\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
		el.appendChild(els);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__58);
		el=me.__56=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uce58 \uc2a4\uc704\uce58";
		el.ggDy=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 7px);';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_51=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uce58-Rectangle 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_51.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_furniture_button') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_51.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_51.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_51.style.transition='background-color 500ms linear 300ms';
				if (me._rectangle_51.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_51.style.backgroundColor="rgba(48,48,48,0.392157)";
				}
				else {
					me._rectangle_51.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_51.logicBlock_backgroundcolor();
		me._rectangle_51.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me._rectangle_51);
		el=me.__57=document.createElement('div');
		el.ggId="\uac00\uad6c\ubc30\uce58-\ubc84\ud2bc \uc6d0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_furniture_button') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__57.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__57.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__57.style.transition='right 200ms ease 0ms, top 200ms ease 0ms';
				if (me.__57.ggCurrentLogicStatePosition == 0) {
					me.__57.style.right='17px';
					me.__57.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__57.style.right='0px';
					me.__57.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__57.logicBlock_position();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__57);
		me.__55.appendChild(me.__56);
		me.__43.appendChild(me.__55);
		el=me.__49=document.createElement('div');
		el.ggId="\ub0ae\ubc24";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__53=document.createElement('div');
		el.ggId="\ub0ae\ubc24 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_44=document.createElement('div');
		el.ggId="\ub0ae\ubc24-Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__54=document.createElement('div');
		els=me.__54__img=document.createElement('img');
		els.className='ggskin ggskin__54';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7ZjbcdswEEWvPP6PUkGYDqQKQlWQuAJDFcSuwFQFUQeWK7BSQZgKxFQQdBCnAuXCXMYriAABPX48vjM7kIgHD567IPCmV6IRjtRkMhkzKWhjefREs03TPOEIHQRGmJLJNa0UqD41Yg+ErHFOMALdMLnDy+ikytIqAj6kVkgCI1DB5NH9xDBAEclf0RYEtBjQxVABQhkmmxQovvAjzXV2SpvTaq+Mof2QjkY1SoC6R5qewXramEgbumNuY8xYvgk1dhGB+oJ0qKCaVm4EK/XYrdHoyF0EoFyFbzihCLdAO71QcI/IAUO78wqcWIRbMblVj9xM3/'+
			'WV3QOT0TI4kwi3ZLJUj27kkI6DoR2tHNU0MxqNDF/g1s29HMAxuWntPIOD+uoX2NmVQv4HabIOZrPZ/JS6BZPfKn9Fuw25JpnCSv52G+S//BErkQhFm3VQARlEFjelvcBkOp1+QATsE9JUpZzeVClubE9S33b/t9ttiQjY0OnuZHN8HnrWj1Ktfhc6wwdLcc4N8lT406Sk11+hMw4By46zOE3vc9sadOI9yg15nCwy5YOlTFOJPMWiWb2mrc7wwSyGNeZOu0a6qkieBtsZFB/sF9K0TImp0B6cvTtY6hehd/tga6Qt7sGwRdqaRfK167P+ubgXKDp/h7x1tKJ9Rwvrprihq1rHvIJ0yL2nkEfGH9nLnnqLTDAj1hvBBqTDKkvb68TecSFXrTXOJHFRRj1a9bm30DnmgrmjLqwBKIPdyNhKZIskMOnBFU4L5UZK3yEs'+
			'IpsjePLLlM5xPFApG0qPlJuNq1iEcomIXIze3r6eG012RbLrPtPcTav0sq1ARb1Mzk1cb++Q7ECZmjZPieVyv10YHHaDqnm2VQMRLw4G60RAPU1FoJilrYcO25OCaXXfxwjwrgNi/PX32O9jb3o1+gfHWvq9sdciqgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub0ae\ubc24 \uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_44.appendChild(me.__54);
		me.__53.appendChild(me._rectangle_44);
		me.__49.appendChild(me.__53);
		el=me.__52=document.createElement('div');
		els=me.__52__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub0ae\ubc24 \ud0dd\uc2a4\ud2b8";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__52.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub0ae\/\ubc24", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__52.ggUpdateText();
		el.appendChild(els);
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me.__52);
		el=me.__50=document.createElement('div');
		el.ggId="\ub0ae\ubc24 \uc2a4\uc704\uce58";
		el.ggDy=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 7px);';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_50=document.createElement('div');
		el.ggId="\ub0ae\ubc24-Rectangle 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_50.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_daynight_button') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_50.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_50.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_50.style.transition='background-color 500ms linear 300ms';
				if (me._rectangle_50.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_50.style.backgroundColor="rgba(48,48,48,0.392157)";
				}
				else {
					me._rectangle_50.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_50.logicBlock_backgroundcolor();
		me._rectangle_50.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me._rectangle_50);
		el=me.__51=document.createElement('div');
		el.ggId="\ub0ae\ubc24-\ubc84\ud2bc \uc6d0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_daynight_button') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__51.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__51.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__51.style.transition='right 200ms ease 0ms, top 200ms ease 0ms';
				if (me.__51.ggCurrentLogicStatePosition == 0) {
					me.__51.style.right='17px';
					me.__51.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__51.style.right='0px';
					me.__51.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__51.logicBlock_position();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__51);
		me.__49.appendChild(me.__50);
		el=me._text_20=document.createElement('div');
		els=me._text_20__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 20";
		el.ggDy=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -96px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 7px);';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc774\ub3d9 X", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20.ggUpdateText();
		el.appendChild(els);
		me._text_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_daynight_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_20.style.transition='';
				if (me._text_20.ggCurrentLogicStateVisible == 0) {
					me._text_20.style.visibility=(Number(me._text_20.style.opacity)>0||!me._text_20.style.opacity)?'inherit':'hidden';
					me._text_20.ggVisible=true;
				}
				else {
					me._text_20.style.visibility="hidden";
					me._text_20.ggVisible=false;
				}
			}
		}
		me._text_20.logicBlock_visible();
		me._text_20.ggUpdatePosition=function (useTransition) {
		}
		me.__49.appendChild(me._text_20);
		me.__43.appendChild(me.__49);
		el=me.__44=document.createElement('div');
		el.ggId="\uc815\ubcf4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.onclick=function (e) {
			player.setVariableValue('vis_info_button', !player.getVariableValue('vis_info_button'));
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me.__48=document.createElement('div');
		el.ggId="\uc815\ubcf4 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_43=document.createElement('div');
		el.ggId="\uc815\ubcf4-Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_43.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>i<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_43.appendChild(me._text_4);
		me.__48.appendChild(me._rectangle_43);
		me.__44.appendChild(me.__48);
		el=me.__47=document.createElement('div');
		els=me.__47__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc815\ubcf4 \ud0dd\uc2a4\ud2b8";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__47.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__47.ggUpdateText();
		el.appendChild(els);
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me.__47);
		el=me.__45=document.createElement('div');
		el.ggId="\uc815\ubcf4 \uc2a4\uc704\uce58";
		el.ggDy=7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 7px);';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="\uc815\ubcf4-Rectangle 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_info_button') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_5.style.transition='background-color 500ms linear 300ms';
				if (me._rectangle_5.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_5.style.backgroundColor="rgba(48,48,48,0.392157)";
				}
				else {
					me._rectangle_5.style.backgroundColor="rgba(255,255,255,0.392157)";
				}
			}
		}
		me._rectangle_5.logicBlock_backgroundcolor();
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._rectangle_5);
		el=me.__46=document.createElement('div');
		el.ggId="\uc815\ubcf4-\ubc84\ud2bc \uc6d0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_info_button') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__46.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__46.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__46.style.transition='right 200ms ease 0ms, top 200ms ease 0ms';
				if (me.__46.ggCurrentLogicStatePosition == 0) {
					me.__46.style.right='17px';
					me.__46.style.top = 'calc(50% - (20px / 2))';
				}
				else {
					me.__46.style.right='0px';
					me.__46.style.top='calc(50% - ((20px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__46.logicBlock_position();
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__46);
		me.__44.appendChild(me.__45);
		me.__43.appendChild(me.__44);
		me.__42.appendChild(me.__43);
		me.__41.appendChild(me.__42);
		me.divSkin.appendChild(me.__41);
		el=me.__31=document.createElement('div');
		el.ggId="\uc544\ub798\ub2e8\ucd94\ub4e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 12px;';
		hs+='height : 45px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__31.style.transition='';
				if (me.__31.ggCurrentLogicStateVisible == 0) {
					me.__31.style.visibility="hidden";
					me.__31.ggVisible=false;
				}
				else {
					me.__31.style.visibility=(Number(me.__31.style.opacity)>0||!me.__31.style.opacity)?'inherit':'hidden';
					me.__31.ggVisible=true;
				}
			}
		}
		me.__31.logicBlock_visible();
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.ggId="\uc544\ub798\ub2e8\ucd94";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		hs+='display:flex; align-items:center; justify-content: space-between;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		el.ggId="\uc228\uae30\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.onclick=function (e) {
			me.__33.ggVisible = !me.__33.ggVisible;
			var flag=me.__33.ggVisible;
			me.__33.style.transition='none';
			me.__33.style.visibility=((flag)&&(Number(me.__33.style.opacity)>0||!me.__33.style.opacity))?'inherit':'hidden';
			me.__35.ggVisible = !me.__35.ggVisible;
			var flag=me.__35.ggVisible;
			me.__35.style.transition='none';
			me.__35.style.visibility=((flag)&&(Number(me.__35.style.opacity)>0||!me.__35.style.opacity))?'inherit':'hidden';
			me.__37.ggVisible = !me.__37.ggVisible;
			var flag=me.__37.ggVisible;
			me.__37.style.transition='none';
			me.__37.style.visibility=((flag)&&(Number(me.__37.style.opacity)>0||!me.__37.style.opacity))?'inherit':'hidden';
			me.__33.ggVisible = !me.__33.ggVisible;
			var flag=me.__33.ggVisible;
			me.__33.style.transition='none';
			me.__33.style.visibility=((flag)&&(Number(me.__33.style.opacity)>0||!me.__33.style.opacity))?'inherit':'hidden';
			me.__42.ggVisible = !me.__42.ggVisible;
			var flag=me.__42.ggVisible;
			me.__42.style.transition='none';
			me.__42.style.visibility=((flag)&&(Number(me.__42.style.opacity)>0||!me.__42.style.opacity))?'inherit':'hidden';
			me.__77.ggVisible = !me.__77.ggVisible;
			var flag=me.__77.ggVisible;
			me.__77.style.transition='none';
			me.__77.style.visibility=((flag)&&(Number(me.__77.style.opacity)>0||!me.__77.style.opacity))?'inherit':'hidden';
			me.__33.ggVisible = !me.__33.ggVisible;
			var flag=me.__33.ggVisible;
			me.__33.style.transition='none';
			me.__33.style.visibility=((flag)&&(Number(me.__33.style.opacity)>0||!me.__33.style.opacity))?'inherit':'hidden';
			me.__12.ggVisible = !me.__12.ggVisible;
			var flag=me.__12.ggVisible;
			me.__12.style.transition='none';
			me.__12.style.visibility=((flag)&&(Number(me.__12.style.opacity)>0||!me.__12.style.opacity))?'inherit':'hidden';
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_71=document.createElement('div');
		els=me._svg_71__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUtb2ZmIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBhdGggZD0iTTE3Ljk0IDE3Ljk0QTEwLjA3IDEwLjA3IDAgMCAxIDEyIDIwYy03IDAtMTEtOC0xMS04YTE4LjQ1IDE4LjQ1IDAgMCAxIDUuMDYtNS45NE05LjkgNC4yNEE5LjEyIDkuMT'+
			'IgMCAwIDEgMTIgNGM3IDAgMTEgOCAxMSA4YTE4LjUgMTguNSAwIDAgMS0yLjE2IDMuMTltLTYuNzItMS4wN2EzIDMgMCAxIDEtNC4yNC00LjI0Ii8+CiA8bGluZSB4Mj0iMjMiIHkyPSIyMyIgeDE9IjEiIHkxPSIxIi8+Cjwvc3ZnPgo=';
		me._svg_71__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_71.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._svg_71);
		me.__39.appendChild(me._rectangle_6);
		me.__32.appendChild(me.__39);
		el=me.__37=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 55px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.onclick=function (e) {
			player.toggleFullscreen();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		el.ggId="\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_111=document.createElement('div');
		els=me._svg_111__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leHRlcm5hbC1saW5rIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiLz4KIDxwb2x5bGluZSBwb2ludHM9IjE1IDMgMjEgMyAyMS'+
			'A5Ii8+CiA8bGluZSB4Mj0iMjEiIHkyPSIzIiB4MT0iMTAiIHkxPSIxNCIvPgo8L3N2Zz4K';
		me._svg_111__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1-11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_111.ggUpdatePosition=function (useTransition) {
		}
		me.__38.appendChild(me._svg_111);
		me.__37.appendChild(me.__38);
		me.__32.appendChild(me.__37);
		el=me.__35=document.createElement('div');
		el.ggId="\ud654\uba74\ud68c\uc804";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.onclick=function (e) {
			player.toggleAutorotate();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\ud654\uba74\ud68c\uc804\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_91=document.createElement('div');
		els=me._svg_91__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1yZWZyZXNoLWN3IiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBvbHlsaW5lIHBvaW50cz0iMjMgNCAyMyAxMCAxNyAxMCIvPgogPHBvbHlsaW5lIHBvaW50cz0iMSAyMCAxIDE0IDcgMTQiLz4KIDxwYXRoIGQ9Ik0zLjUxIDlhOSA5IDAgMCAxID'+
			'E0Ljg1LTMuMzZMMjMgMTBNMSAxNGw0LjY0IDQuMzZBOSA5IDAgMCAwIDIwLjQ5IDE1Ii8+Cjwvc3ZnPgo=';
		me._svg_91__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_91.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_91.ggUpdatePosition=function (useTransition) {
		}
		me.__36.appendChild(me._svg_91);
		me.__35.appendChild(me.__36);
		me.__32.appendChild(me.__35);
		el=me.__33=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 165px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me._text_18pc.style.transition='none';
			me._text_18pc.style.visibility=(Number(me._text_18pc.style.opacity)>0||!me._text_18pc.style.opacity)?'inherit':'hidden';
			me._text_18pc.ggVisible=true;
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_81=document.createElement('div');
		els=me._svg_81__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1saW5rIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiLz4KIDxwYXRoIGQ9Ik0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLT'+
			'MgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MSIvPgo8L3N2Zz4K';
		me._svg_81__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_81.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_81.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me._svg_81);
		me.__33.appendChild(me.__34);
		el=me._text_18pc=document.createElement('div');
		els=me._text_18pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 18-pc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((75px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -35px;';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_18pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_18pc.ggUpdateText();
		el.appendChild(els);
		me._text_18pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_18pc.ggUpdatePosition=function (useTransition) {
		}
		me.__33.appendChild(me._text_18pc);
		el=me._timer_1pc=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1-pc";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1pc.ggIsActive=function() {
			return (me._timer_1pc.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1pc.ggTimestamp) / me._timer_1pc.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1pc.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1pc.style.transition='';
				if (me._timer_1pc.ggCurrentLogicStateVisible == 0) {
					me._timer_1pc.style.visibility="hidden";
					me._timer_1pc.ggVisible=false;
				}
				else {
					me._timer_1pc.style.visibility=(Number(me._timer_1pc.style.opacity)>0||!me._timer_1pc.style.opacity)?'inherit':'hidden';
					me._timer_1pc.ggVisible=true;
				}
			}
		}
		me._timer_1pc.logicBlock_visible();
		me._timer_1pc.ggActivate=function () {
			me._text_18pc.style.transition='none';
			me._text_18pc.style.visibility='hidden';
			me._text_18pc.ggVisible=false;
		}
		me._timer_1pc.ggCurrentLogicStateVisible = -1;
		me._timer_1pc.ggUpdateConditionTimer=function () {
			me._timer_1pc.logicBlock_visible();
		}
		me._timer_1pc.ggUpdatePosition=function (useTransition) {
		}
		me.__33.appendChild(me._timer_1pc);
		me.__32.appendChild(me.__33);
		me.__31.appendChild(me.__32);
		me.divSkin.appendChild(me.__31);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__23=document.createElement('div');
		el.ggId="\uc9c0\ub3c4\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((800px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 800px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__23.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__23.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__23.ggCurrentLogicStateSize = newLogicStateSize;
				me.__23.style.transition='width 0s, height 0s';
				if (me.__23.ggCurrentLogicStateSize == 0) {
					me.__23.style.width='320px';
					me.__23.style.height='540px';
					me.__23.style.left = 'calc(50% - (320px / 2))';
					me.__23.style.top = 'calc(50% - (540px / 2))';
					skin.updateSize(me.__23);
				}
				else {
					me.__23.style.width='800px';
					me.__23.style.height='700px';
					me.__23.style.left = 'calc(50% - (800px / 2))';
					me.__23.style.top = 'calc(50% - (700px / 2))';
					skin.updateSize(me.__23);
				}
			}
		}
		me.__23.logicBlock_size();
		me.__23.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__23.style.transition='width 0s, height 0s';
				if (me.__23.ggCurrentLogicStateVisible == 0) {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
				else {
					me.__23.style.visibility="hidden";
					me.__23.ggVisible=false;
				}
			}
		}
		me.__23.logicBlock_visible();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_9=document.createElement('div');
		el.ggId="Rectangle 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_9.onclick=function (e) {
			me.__23.style.transition='none';
			me.__23.style.visibility='hidden';
			me.__23.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 540))
				)
			) {
				me._m18.style.transition='none';
				me._m18.style.visibility=(Number(me._m18.style.opacity)>0||!me._m18.style.opacity)?'inherit':'hidden';
				me._m18.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 540))
				)
			) {
				me._m11.style.transition='none';
				me._m11.style.visibility=(Number(me._m11.style.opacity)>0||!me._m11.style.opacity)?'inherit':'hidden';
				me._m11.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 540))
				)
			) {
				me._m.style.transition='none';
				me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
				me._m.ggVisible=true;
			}
		}
		me._rectangle_9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.ggId="\ud655\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_41=document.createElement('div');
		el.ggId="\ud655\ub300-Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_41.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgBzVKxDcIwEHxDBghdyoxgNvAIMAFpqcgGpKSkpQI2IBtASeVsQMqUKenCvfRWXpECgoqTTv78/50dvw0JrLUpliMYg2VVVYWqOSwryV9IwUhDjmUr4oAaXIIZuJFcC4OZNogg3quGgBZMQT/Ix4Nvmigx73aVOAPP4STGGEcjmIRA/xsEfIJTMPDe3z4a/Io/MsA0+IZTjruuc7oJNTtmEKn4Qf2YCuonwuIwzprGTiBiFuXS6FSewe9lPjSYJkkSmnYY5bppmjtypeR4d34HC9QOqD3pG8i9vMULjrw9+v0SBuYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((19px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_41.appendChild(me._image_8);
		me.__27.appendChild(me._rectangle_41);
		me._rectangle_9.appendChild(me.__27);
		el=me.__25=document.createElement('div');
		el.ggId="\ub2eb\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_40=document.createElement('div');
		el.ggId="\ub2eb\uae30-Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		els=me.__26__img=document.createElement('img');
		els.className='ggskin ggskin__26';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgBhVABEYAgDBwmsIFGMIoRjEADjWADzwRGMII2IAIR5nY3dSDg3z07/n6DPSCiE9aQAOkt0RNtJVpLXFJGKjuRBzV3J09mTJH5EP3QYocvrGiz3J28EEyxqmGR6j9G1TBiiB5ykP+jmlqXjE4ZGVvO/GxeSii5eSohFqfc5lFCHfxtrhLaDB0Da8aYFfIpsee8AJNzGlBx8CofAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub2eb\uae30\uc544\uc774\ucf58";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_40.appendChild(me.__26);
		me.__25.appendChild(me._rectangle_40);
		me._rectangle_9.appendChild(me.__25);
		el=me.__24=document.createElement('div');
		el.ggId="\uc9c0\ub3c4\ud655\ub300\ub9f5";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 15px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__24.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__24.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__24.style.transition='left 0s, top 0s';
				if (me.__24.ggCurrentLogicStatePosition == 0) {
					me.__24.style.left = 'calc(50% - (80% / 2))';
					me.__24.style.top = 'calc(50% - (80% / 2) + (0px / 2) + 100px)';
				}
				else {
					me.__24.style.left='calc(50% - ((80% + 0px) / 2) + 0px)';
					me.__24.style.top='calc(50% - ((80% + 0px) / 2) + 15px)';
				}
			}
		}
		me.__24.logicBlock_position();
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_3=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cON") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_3.style.transition='';
				if (me._map_3.ggCurrentLogicStateVisible == 0) {
					me._map_3.style.visibility=(Number(me._map_3.style.opacity)>0||!me._map_3.style.opacity)?'inherit':'hidden';
					if (me._map_3.ggMapNotLoaded && me._map_3.ggInitMap) {
						me._map_3.ggInitMap(false);
						me._map_3.ggInitMapMarkers(true);
					}
					me._map_3.ggVisible=true;
				}
				else {
					me._map_3.style.visibility=(Number(me._map_3.style.opacity)>0||!me._map_3.style.opacity)?'inherit':'hidden';
					if (me._map_3.ggMapNotLoaded && me._map_3.ggInitMap) {
						me._map_3.ggInitMap(false);
						me._map_3.ggInitMapMarkers(true);
					}
					me._map_3.ggVisible=true;
				}
			}
		}
		me._map_3.logicBlock_visible();
		me._map_3.ggCurrentLogicStateVisible = -1;
		me._map_3.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_3.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_3.ggCalculateFloorplanSize(mapDetails);
				me._map_3.ggShowSimpleFloorplan(mapDetails);
				me._map_3.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_3.ggRadar) me._map_3.ggRadar.update();
		}
		me._map_3.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_3.ggMarkerInstances.length; i++) {
				me._map_3.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_3.ggUpdateConditionResize();
		}
		me.__24.appendChild(me._map_3);
		el=me._map_4=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cOFF") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_4.style.transition='';
				if (me._map_4.ggCurrentLogicStateVisible == 0) {
					me._map_4.style.visibility=(Number(me._map_4.style.opacity)>0||!me._map_4.style.opacity)?'inherit':'hidden';
					if (me._map_4.ggMapNotLoaded && me._map_4.ggInitMap) {
						me._map_4.ggInitMap(false);
						me._map_4.ggInitMapMarkers(true);
					}
					me._map_4.ggVisible=true;
				}
				else {
					me._map_4.style.visibility="hidden";
					if (me._map_4.ggClearMap) me._map_4.ggClearMap();
					me._map_4.ggVisible=false;
				}
			}
		}
		me._map_4.logicBlock_visible();
		me._map_4.ggCurrentLogicStateVisible = -1;
		me._map_4.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_4.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_4.ggCalculateFloorplanSize(mapDetails);
				me._map_4.ggShowSimpleFloorplan(mapDetails);
				me._map_4.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_4.ggRadar) me._map_4.ggRadar.update();
		}
		me._map_4.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_4.ggMarkerInstances.length; i++) {
				me._map_4.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_4.ggUpdateConditionResize();
		}
		me.__24.appendChild(me._map_4);
		me._rectangle_9.appendChild(me.__24);
		me.__23.appendChild(me._rectangle_9);
		me.divSkin.appendChild(me.__23);
		el=me.__12=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd\uc0ac\uc774\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 87%;';
		hs+='position : absolute;';
		hs+='right : 34px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 10%;';
		hs+='pointer-events:none;';
		hs+='min-width:250x;min-height:650px; max-height:770px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__12.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__12.style.transition='';
				if (me.__12.ggCurrentLogicStateVisible == 0) {
					me.__12.style.visibility="hidden";
					me.__12.ggVisible=false;
				}
				else {
					me.__12.style.visibility=(Number(me.__12.style.opacity)>0||!me.__12.style.opacity)?'inherit':'hidden';
					me.__12.ggVisible=true;
				}
			}
		}
		me.__12.logicBlock_visible();
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 195px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:250px; max-width:250px; min-height:250px; max-height:250px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_minimap_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18.style.transition='';
				if (me.__18.ggCurrentLogicStateVisible == 0) {
					me.__18.style.visibility=(Number(me.__18.style.opacity)>0||!me.__18.style.opacity)?'inherit':'hidden';
					me.__18.ggVisible=true;
				}
				else {
					me.__18.style.visibility="hidden";
					me.__18.ggVisible=false;
				}
			}
		}
		me.__18.logicBlock_visible();
		me.__18.onclick=function (e) {
			me.__23.style.transition='none';
			me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
			me.__23.ggVisible=true;
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_8=document.createElement('div');
		el.ggId="Rectangle 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \uc544\uc774\ucf58-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_42=document.createElement('div');
		el.ggId="Rectangle 4-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_42.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_52=document.createElement('div');
		els=me._image_52__img=document.createElement('img');
		els.className='ggskin ggskin_image_52';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADhSURBVHgBzVKxDcIwEHxDBghdyoxgNvAIMAFpqcgGpKSkpQI2IBtASeVsQMqUKenCvfRWXpECgoqTTv78/50dvw0JrLUpliMYg2VVVYWqOSwryV9IwUhDjmUr4oAaXIIZuJFcC4OZNogg3quGgBZMQT/Ix4Nvmigx73aVOAPP4STGGEcjmIRA/xsEfIJTMPDe3z4a/Io/MsA0+IZTjruuc7oJNTtmEKn4Qf2YCuonwuIwzprGTiBiFuXS6FSewe9lPjSYJkkSmnYY5bppmjtypeR4d34HC9QOqD3pG8i9vMULjrw9+v0SBuYAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5-2";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_52.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_42.appendChild(me._image_52);
		me.__22.appendChild(me._rectangle_42);
		me._rectangle_8.appendChild(me.__22);
		el=me.__21=document.createElement('div');
		el.ggId="\ud06c\uac8c\ubcf4\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBzVMLCcMwED2moBIiYRIiYQ46B52DzkElRMIkZA4yB5UQCdkdvLJAL0lXKPTBo5D7vLvjlegopJQMs6N/wUVPZkw/zPK2pbBjBhRNzB50eAvViZAoalfS15GpXqViA5W+InBDjtWCo6hTe02ZYszfLvga5ofaeCN31WArVkdcGoi6pTYMaZPK5XGgR6mSY3fkmFLChCNZJWYRc1RRECN5qDjmAPrMkVHziTZqyKzs0Whxaiyu0ULWZE57fjQ0EdcOdBp8AVufCFvMtNzVAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me._image_7);
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me._text_5);
		me._rectangle_8.appendChild(me.__21);
		el=me.__19=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5\uc9c0\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((170px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cON") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style.transition='';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
				else {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
			}
		}
		me._map_1.logicBlock_visible();
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me.__19.appendChild(me._map_1);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cOFF") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2.style.transition='';
				if (me._map_2.ggCurrentLogicStateVisible == 0) {
					me._map_2.style.visibility=(Number(me._map_2.style.opacity)>0||!me._map_2.style.opacity)?'inherit':'hidden';
					if (me._map_2.ggMapNotLoaded && me._map_2.ggInitMap) {
						me._map_2.ggInitMap(false);
						me._map_2.ggInitMapMarkers(true);
					}
					me._map_2.ggVisible=true;
				}
				else {
					me._map_2.style.visibility="hidden";
					if (me._map_2.ggClearMap) me._map_2.ggClearMap();
					me._map_2.ggVisible=false;
				}
			}
		}
		me._map_2.logicBlock_visible();
		me._map_2.ggCurrentLogicStateVisible = -1;
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me.__19.appendChild(me._map_2);
		me._rectangle_8.appendChild(me.__19);
		me.__18.appendChild(me._rectangle_8);
		me.__12.appendChild(me.__18);
		el=me.__13=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 61.22%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='position:absolute; min-width:250px; max-width:250px; top:260px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_move_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__13.style.transition='';
				if (me.__13.ggCurrentLogicStateVisible == 0) {
					me.__13.style.visibility=(Number(me.__13.style.opacity)>0||!me.__13.style.opacity)?'inherit':'hidden';
					me.__13.ggVisible=true;
				}
				else {
					me.__13.style.visibility="hidden";
					me.__13.ggVisible=false;
				}
			}
		}
		me.__13.logicBlock_visible();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 12px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__17);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 199px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 174px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 1 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 1 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 1 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 1 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 1px; height: 488.94px; background-color: rgba(255,255,255,0.490196); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1px; height: 488.94px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 1px; height: 1px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 85%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 11%;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 1;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 1;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 160;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a2.ggUpdating == true) return;
			me.__18a2.ggUpdating = true;
			var el=me.__18a2;
			var curNumCols = 0;
			curNumCols = me.__18a2.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a2.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a2.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a2.getFilteredNodes(tourNodes, filter);
			me.__18a2.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a2.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a2.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a2.ggWidth) + 'px';
				parameter.width=me.__18a2.ggWidth + 'px';
				parameter.height=me.__18a2.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a2_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__18a2.ggNodeCount = me.__18a2.ggNumFilterPassed;
			me.__18a2.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a2.parentNode && me.__18a2.parentNode.classList.contains('ggskin_subelement') && me.__18a2.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a2.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "광주1안";
		el.ggId="\uac00\uad6c\uc788\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 160px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cON") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a2.style.transition='';
				if (me.__18a2.ggCurrentLogicStateVisible == 0) {
					me.__18a2.style.visibility=(Number(me.__18a2.style.opacity)>0||!me.__18a2.style.opacity)?'inherit':'hidden';
					me.__18a2.ggVisible=true;
				}
				else {
					me.__18a2.style.visibility=(Number(me.__18a2.style.opacity)>0||!me.__18a2.style.opacity)?'inherit':'hidden';
					me.__18a2.ggVisible=true;
				}
			}
		}
		me.__18a2.logicBlock_visible();
		me.__18a2.ggCurrentLogicStateVisible = -1;
		me.__18a2.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a2.childNodes.length; i++) {
				var child=me.__18a2.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a2.ggUpdatePosition=function (useTransition) {
			me.__18a2.ggUpdate();
		}
		me.__18a.appendChild(me.__18a2);
		el=me.__18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 160;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__18a0.ggUpdating == true) return;
			me.__18a0.ggUpdating = true;
			var el=me.__18a0;
			var curNumCols = 0;
			curNumCols = me.__18a0.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__18a0.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__18a0.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__18a0.getFilteredNodes(tourNodes, filter);
			me.__18a0.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__18a0.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__18a0.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__18a0.ggWidth) + 'px';
				parameter.width=me.__18a0.ggWidth + 'px';
				parameter.height=me.__18a0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__18a0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__18a0.ggNodeCount = me.__18a0.ggNumFilterPassed;
			me.__18a0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__18a0.parentNode && me.__18a0.parentNode.classList.contains('ggskin_subelement') && me.__18a0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__18a0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구OFF";
		el.ggId="\uac00\uad6c\uc5c6\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 160px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cOFF") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__18a0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__18a0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__18a0.style.transition='';
				if (me.__18a0.ggCurrentLogicStateVisible == 0) {
					me.__18a0.style.visibility=(Number(me.__18a0.style.opacity)>0||!me.__18a0.style.opacity)?'inherit':'hidden';
					me.__18a0.ggVisible=true;
				}
				else {
					me.__18a0.style.visibility="hidden";
					me.__18a0.ggVisible=false;
				}
			}
		}
		me.__18a0.logicBlock_visible();
		me.__18a0.ggCurrentLogicStateVisible = -1;
		me.__18a0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__18a0.childNodes.length; i++) {
				var child=me.__18a0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__18a0.ggUpdatePosition=function (useTransition) {
			me.__18a0.ggUpdate();
		}
		me.__18a.appendChild(me.__18a0);
		me._scrollarea_1__content.appendChild(me.__18a);
		me.__13.appendChild(me._scrollarea_1);
		el=me.__14=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd\uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd-\uacf5\uac04\uc774\ub3d9 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd-\uacf5\uac04\uc774\ub3d9-Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__16=document.createElement('div');
		els=me.__16__img=document.createElement('img');
		els.className='ggskin ggskin__16';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgBrVLRsUExEN28ef/vvQreVYHo4OqAClwV0AEd0IESUAEqcDtwO0AFnOVcMpE1zDgzZ5JsNmdPNhH5AJy14b3/xTAE/8E1uCzL8pDK/RYbWzDjvABLsJVK/JK0izwQCMKX+GsiFpxzp2TcOoCqeh0fhCr0pCFvOmmDY86nYvTDEtFX8XyJzcWucwuu1Vn2TEQPz8E9OJI0NL4DZ6FYLaKBugc52DVENN5nzoqFbyjAk0RW9cOxwTEyOh6ETpqg3rkKM9mHdkKkCsRuyOlkEltMQPenKeeKghbrxnXk/hqe6wlzlD2rSsbELSvF1AIjidyaP5aJP+'+
			'AfKx/l2rcHnAEGykMyE+bZ6AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uacf5\uac04\uc120\ud0dd-\uacf5\uac04\uc774\ub3d9 \uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me.__16);
		me.__15.appendChild(me._rectangle_4);
		me.__14.appendChild(me.__15);
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_6.ggUpdateText();
		});
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me.__14.appendChild(me._text_6);
		me.__13.appendChild(me.__14);
		me.__12.appendChild(me.__13);
		me.divSkin.appendChild(me.__12);
		el=me.__11=document.createElement('div');
		el.ggId="\uc911\uc559\uc870\uc808";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : 10px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((154px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__11.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__11.ggCurrentLogicStatePosition == 0) {
					me.__11.style.left = 'calc(50% - (154px / 2))';
					me.__11.style.bottom='0px';
				}
				else {
					me.__11.style.left='calc(50% - ((154px + 0px) / 2) + 0px)';
					me.__11.style.bottom='10px';
				}
			}
		}
		me.__11.logicBlock_position();
		me.__11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__11.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__11.ggCurrentLogicStateScaling == 0) {
					me.__11.ggParameter.sx = 0.7;
					me.__11.ggParameter.sy = 0.7;
					me.__11.style.transform=parameterToTransform(me.__11.ggParameter);
					skin.updateSize(me.__11);
				}
				else if (me.__11.ggCurrentLogicStateScaling == 1) {
					me.__11.ggParameter.sx = 0.9;
					me.__11.ggParameter.sy = 0.9;
					me.__11.style.transform=parameterToTransform(me.__11.ggParameter);
					skin.updateSize(me.__11);
				}
				else {
					me.__11.ggParameter.sx = 1;
					me.__11.ggParameter.sy = 1;
					me.__11.style.transform=parameterToTransform(me.__11.ggParameter);
					skin.updateSize(me.__11);
				}
			}
		}
		me.__11.logicBlock_scaling();
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_90=document.createElement('div');
		els=me._image_90__img=document.createElement('img');
		els.className='ggskin ggskin_image_90';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgB7ZPRCQAhDENTJ+kqN/mNcm6Si6Dgj1p/xUDoz0sohQILkfRiBMGv2tMM1HhljzaytZ4PVjgGSgk72lrjBrrA8M5mljUeOSMqdm/1A+O2GGMFeT05AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_90.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_90.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.author) == "\uc55e"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_90.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_90.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_90.style.transition='';
				if (me._image_90.ggCurrentLogicStateVisible == 0) {
					me._image_90.style.visibility="hidden";
					me._image_90.ggVisible=false;
				}
				else {
					me._image_90.style.visibility=(Number(me._image_90.style.opacity)>0||!me._image_90.style.opacity)?'inherit':'hidden';
					me._image_90.ggVisible=true;
				}
			}
		}
		me._image_90.logicBlock_visible();
		me._image_90.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._image_90.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._image_90);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABSSURBVHgB7ZPRCQAhDENTJ+kqN/mNcm6Si6Dgj1p/xUDoz0sohQILkfRiBMGv2tMM1HhljzaytZ4PVjgGSgk72lrjBrrA8M5mljUeOSMqdm/1A+O2GGMFeT05AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9-\uc5f0\ud558\uac8c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.author) == "\uc55e"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_9.style.transition='';
				if (me._image_9.ggCurrentLogicStateVisible == 0) {
					me._image_9.style.visibility=(Number(me._image_9.style.opacity)>0||!me._image_9.style.opacity)?'inherit':'hidden';
					me._image_9.ggVisible=true;
				}
				else {
					me._image_9.style.visibility="hidden";
					me._image_9.ggVisible=false;
				}
			}
		}
		me._image_9.logicBlock_visible();
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._image_9);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXBsdXMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPGxpbmUgeDI9IjEyIiB5Mj0iMTkiIHgxPSIxMiIgeTE9IjUiLz4KIDxsaW5lIHgyPSIxOSIgeTI9IjEyIiB4MT0iNSIgeTE9IjEyIi8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=-25;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) - 25px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.onclick=function (e) {
			player.changeFovLog(-0.5,true);
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._svg_1);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1pbnVzIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSIjZmZmZmZmIj4KIDxsaW5lIHgyPSIxOSIgeTI9IjEyIiB4MT0iNSIgeTE9IjEyIi8+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=25;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 25px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onclick=function (e) {
			player.changeFovLog(0.5,true);
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._svg_2);
		el=me._image_100=document.createElement('div');
		els=me._image_100__img=document.createElement('img');
		els.className='ggskin ggskin_image_100';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7VOxDQAgCCte4ite7in6SZXEQRdgcNMmDQwtZQBggmRWwsMStkXTkLZehdVN2KYzkvANWhNuILzGm0Kc99wni4h0WGDwrQa4PhhjUN2v0QAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_100.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_100.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.author) == "\ub4a4"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_100.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_100.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_100.style.transition='';
				if (me._image_100.ggCurrentLogicStateVisible == 0) {
					me._image_100.style.visibility="hidden";
					me._image_100.ggVisible=false;
				}
				else {
					me._image_100.style.visibility=(Number(me._image_100.style.opacity)>0||!me._image_100.style.opacity)?'inherit':'hidden';
					me._image_100.ggVisible=true;
				}
			}
		}
		me._image_100.logicBlock_visible();
		me._image_100.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._image_100.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._image_100);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7VOxDQAgCCte4ite7in6SZXEQRdgcNMmDQwtZQBggmRWwsMStkXTkLZehdVN2KYzkvANWhNuILzGm0Kc99wni4h0WGDwrQa4PhhjUN2v0QAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 10-\uc5f0\ud558\uac8c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.author) == "\ub4a4"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_10.style.transition='';
				if (me._image_10.ggCurrentLogicStateVisible == 0) {
					me._image_10.style.visibility=(Number(me._image_10.style.opacity)>0||!me._image_10.style.opacity)?'inherit':'hidden';
					me._image_10.ggVisible=true;
				}
				else {
					me._image_10.style.visibility="hidden";
					me._image_10.ggVisible=false;
				}
			}
		}
		me._image_10.logicBlock_visible();
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me.__11.appendChild(me._image_10);
		me.divSkin.appendChild(me.__11);
		el=me._m18=document.createElement('div');
		el.ggId="m-\uc0c1\ub2e8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 78px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:none;';
		hs+='min-width:200px; min-height:78px; max-height:400px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m18.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._m18.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_m_sidebar') == true)) && 
				((player.getVariableValue('vis_m_type') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('vis_m_sidebar') == true))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('vis_m_type') == true))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('vis_m_sidebar') == false)) && 
				((player.getVariableValue('vis_m_type') == false))
			)
			{
				newLogicStateSize = 3;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._m18.ggCurrentLogicStateSize != newLogicStateSize) {
				me._m18.ggCurrentLogicStateSize = newLogicStateSize;
				me._m18.style.transition='width 0s, height 0s';
				if (me._m18.ggCurrentLogicStateSize == 0) {
					me._m18.style.width='200px';
					me._m18.style.height='458px';
					skin.updateSize(me._m18);
				}
				else if (me._m18.ggCurrentLogicStateSize == 1) {
					me._m18.style.width='200px';
					me._m18.style.height='329px';
					skin.updateSize(me._m18);
				}
				else if (me._m18.ggCurrentLogicStateSize == 2) {
					me._m18.style.width='200px';
					me._m18.style.height='200px';
					skin.updateSize(me._m18);
				}
				else if (me._m18.ggCurrentLogicStateSize == 3) {
					me._m18.style.width='200px';
					me._m18.style.height='78px';
					skin.updateSize(me._m18);
				}
				else {
					me._m18.style.width='200px';
					me._m18.style.height='78px';
					skin.updateSize(me._m18);
				}
			}
		}
		me._m18.logicBlock_size();
		me._m18.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m18.style.transition='width 0s, height 0s';
				if (me._m18.ggCurrentLogicStateVisible == 0) {
					me._m18.style.visibility="hidden";
					me._m18.ggVisible=false;
				}
				else {
					me._m18.style.visibility=(Number(me._m18.style.opacity)>0||!me._m18.style.opacity)?'inherit':'hidden';
					me._m18.ggVisible=true;
				}
			}
		}
		me._m18.logicBlock_visible();
		me._m18.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 12px 12px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m25=document.createElement('div');
		el.ggId="m-\ub85c\uace0\ud558\ub2e8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((165px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:none;';
		hs+='position:absolute;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m25.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_m_type') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m25.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m25.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m25.style.transition='left 0s, bottom 0s';
				if (me._m25.ggCurrentLogicStatePosition == 0) {
					me._m25.style.left = 'calc(50% - (165px / 2))';
					me._m25.style.bottom='80px';
				}
				else {
					me._m25.style.left='calc(50% - ((165px + 0px) / 2) + 0px)';
					me._m25.style.bottom='6px';
				}
			}
		}
		me._m25.logicBlock_position();
		me._m25.onclick=function (e) {
			player.setVariableValue('vis_m_bottom_menu', false);
		}
		me._m25.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.470588);';
		hs+='border-style : solid;';
		hs+='border-width : 1px 0px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').description)));
			var hs = player._("%1A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_7.ggUpdateText();
		});
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7.ggUpdatePosition=function (useTransition) {
		}
		me._m25.appendChild(me._text_7);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24iIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_m_type') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_5.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_5.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_5.style.transition='transform 0s';
				if (me._svg_5.ggCurrentLogicStateAngle == 0) {
					me._svg_5.ggParameter.a = 0;
					me._svg_5.style.transform=parameterToTransform(me._svg_5.ggParameter);
				}
				else {
					me._svg_5.ggParameter.a = 0;
					me._svg_5.style.transform=parameterToTransform(me._svg_5.ggParameter);
				}
			}
		}
		me._svg_5.logicBlock_angle();
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._m25.appendChild(me._svg_5);
		me._rectangle_1.appendChild(me._m25);
		el=me.__10=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud22c\uc2dc\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='left : calc(50% - ((155px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 155px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_sidebar') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_1=document.createElement('div');
		el.ggId="m-\ud22c\uc2dc\ub3c4 \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._mimage_3=document.createElement('div');
		els=me._mimage_3__img=document.createElement('img');
		els.className='ggskin ggskin_mimage_3';
		hs=basePath + 'images/mimage_3.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mimage_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mimage_3.ggUpdatePosition=function (useTransition) {
		}
		me._m_1.appendChild(me._mimage_3);
		me.__10.appendChild(me._m_1);
		el=me._mtext_1=document.createElement('div');
		els=me._mtext_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 2px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mtext_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6d0\ud654\ub9ac \uc138\ucee8\ud558\uc6b0\uc2a4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mtext_1.ggUpdateText();
		el.appendChild(els);
		me._mtext_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mtext_1.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me._mtext_1);
		el=me._mcontainer_1=document.createElement('div');
		el.ggId="m-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -85px;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mcontainer_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mcontainer_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m24=document.createElement('div');
		els=me._m24__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\ubd84\uc591\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 1px;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m24.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac74\ucd95\uba74\uc801 : 51.24\u33a1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m24.ggUpdateText();
		el.appendChild(els);
		me._m24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m24.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(player.getNodeUserdata('_master').description) == "33"))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "54"))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "28"))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._m24.ggCurrentLogicStateText != newLogicStateText) {
				me._m24.ggCurrentLogicStateText = newLogicStateText;
				me._m24.style.transition='';
				if (me._m24.ggCurrentLogicStateText == 0) {
					if (me._m24.ggUpdateText) {
					me._m24.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc2e4\uc0ac\uc6a9 \uba74\uc801 33.30 \u33a1(10.07\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m24.ggUpdateText();
					} else {
						if (me._m24.ggUpdatePosition) me._m24.ggUpdatePosition();
					}
				}
				else if (me._m24.ggCurrentLogicStateText == 1) {
					if (me._m24.ggUpdateText) {
					me._m24.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc2e4\uc0ac\uc6a9 \uba74\uc801 54.52 \u33a1(16.58\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m24.ggUpdateText();
					} else {
						if (me._m24.ggUpdatePosition) me._m24.ggUpdatePosition();
					}
				}
				else if (me._m24.ggCurrentLogicStateText == 2) {
					if (me._m24.ggUpdateText) {
					me._m24.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc2e4\uc0ac\uc6a9 \uba74\uc801 28.21 \u33a1(8.53\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m24.ggUpdateText();
					} else {
						if (me._m24.ggUpdatePosition) me._m24.ggUpdatePosition();
					}
				}
				else {
					if (me._m24.ggUpdateText) {
					me._m24.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uac74\ucd95\uba74\uc801 : 51.24\u33a1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m24.ggUpdateText();
					} else {
						if (me._m24.ggUpdatePosition) me._m24.ggUpdatePosition();
					}
				}
			}
		}
		me._m24.logicBlock_text();
		me._m24.ggUpdatePosition=function (useTransition) {
		}
		me._mcontainer_1.appendChild(me._m24);
		el=me._m23=document.createElement('div');
		els=me._m23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uc804\uc6a9\uba74\uc801";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border-color : #ffffff;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub300\uc9c0\uba74\uc801 : 311.00\u33a1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m23.ggUpdateText();
		el.appendChild(els);
		me._m23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m23.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player._(player.getNodeUserdata('_master').description) == "33"))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "54"))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player._(player.getNodeUserdata('_master').description) == "28"))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._m23.ggCurrentLogicStateText != newLogicStateText) {
				me._m23.ggCurrentLogicStateText = newLogicStateText;
				me._m23.style.transition='';
				if (me._m23.ggCurrentLogicStateText == 0) {
					if (me._m23.ggUpdateText) {
					me._m23.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc804\uc6a9 \uba74\uc801 26.55 \u33a1(8.03\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m23.ggUpdateText();
					} else {
						if (me._m23.ggUpdatePosition) me._m23.ggUpdatePosition();
					}
				}
				else if (me._m23.ggCurrentLogicStateText == 1) {
					if (me._m23.ggUpdateText) {
					me._m23.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc804\uc6a9 \uba74\uc801 44.62 \u33a1(13.50\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m23.ggUpdateText();
					} else {
						if (me._m23.ggUpdatePosition) me._m23.ggUpdatePosition();
					}
				}
				else if (me._m23.ggCurrentLogicStateText == 2) {
					if (me._m23.ggUpdateText) {
					me._m23.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uc804\uc6a9 \uba74\uc801 22.96 \u33a1(6.95\ud3c9)", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m23.ggUpdateText();
					} else {
						if (me._m23.ggUpdatePosition) me._m23.ggUpdatePosition();
					}
				}
				else {
					if (me._m23.ggUpdateText) {
					me._m23.ggUpdateText=function() {
						var params = [];
						var hs = player._("\ub300\uc9c0\uba74\uc801 : 311.00\u33a1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._m23.ggUpdateText();
					} else {
						if (me._m23.ggUpdatePosition) me._m23.ggUpdatePosition();
					}
				}
			}
		}
		me._m23.logicBlock_text();
		me._m23.ggUpdatePosition=function (useTransition) {
		}
		me._mcontainer_1.appendChild(me._m23);
		me.__10.appendChild(me._mcontainer_1);
		me._rectangle_1.appendChild(me.__10);
		el=me.__9=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((155px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_type') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__9.style.transition='';
				if (me.__9.ggCurrentLogicStateVisible == 0) {
					me.__9.style.visibility="hidden";
					me.__9.ggVisible=false;
				}
				else {
					me.__9.style.visibility=(Number(me.__9.style.opacity)>0||!me.__9.style.opacity)?'inherit':'hidden';
					me.__9.ggVisible=true;
				}
			}
		}
		me.__9.logicBlock_visible();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1C TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_10.ggUpdateText();
		});
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._text_10);
		el=me._text_9=document.createElement('div');
		els=me._text_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_9.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1B TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_9.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_9.ggUpdateText();
		});
		el.appendChild(els);
		me._text_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_9.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._text_9);
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1A TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_8.ggUpdateText();
		});
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me._text_8);
		me._rectangle_1.appendChild(me.__9);
		el=me._m20=document.createElement('div');
		el.ggId="m-\ubbf8\ub2c8\ub9f5\ucee8\ud14c\uc774\ub108";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -136px;';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='min-width:200px; min-height:130px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_minimap') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m20.style.transition='';
				if (me._m20.ggCurrentLogicStateVisible == 0) {
					me._m20.style.visibility=(Number(me._m20.style.opacity)>0||!me._m20.style.opacity)?'inherit':'hidden';
					me._m20.ggVisible=true;
				}
				else {
					me._m20.style.visibility="hidden";
					me._m20.ggVisible=false;
				}
			}
		}
		me._m20.logicBlock_visible();
		me._m20.onclick=function (e) {
			me.__23.style.transition='none';
			me.__23.style.visibility=(Number(me.__23.style.opacity)>0||!me.__23.style.opacity)?'inherit':'hidden';
			me.__23.ggVisible=true;
			me._m18.style.transition='none';
			me._m18.style.visibility='hidden';
			me._m18.ggVisible=false;
			me._m11.style.transition='none';
			me._m11.style.visibility='hidden';
			me._m11.ggVisible=false;
			me._m.style.transition='none';
			me._m.style.visibility='hidden';
			me._m.ggVisible=false;
		}
		me._m20.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_8=document.createElement('div');
		el.ggId="m-Rectangle 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_2=document.createElement('div');
		el.ggId="m-\ubbf8\ub2c8\ub9f5 \uc544\uc774\ucf58-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_42=document.createElement('div');
		el.ggId="m-Rectangle 4-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_42.ggUpdatePosition=function (useTransition) {
		}
		el=me._mimage_52=document.createElement('div');
		els=me._mimage_52__img=document.createElement('img');
		els.className='ggskin ggskin_mimage_52';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgB7VVREYMwDC0oQAIScAAOhgNwUBwMB2MKKoFNQecACczB5iBLb+GWFkr52fZD7t5BwmvfA66JEP8MAGgRPUIh0o1rsiDXEBAa7BgR1cqaBNExfuMjNoiHsznPtesQ84IM8NAh1yeEpHuFqJ1NWnLdO+L1TACTkrk0m+RUn8iKmVAwD7NWsreZCWjmOmF1S4DVD+xtBmCfzBWInV9wiaLoKQKBnCtebpR2mN993Fh8OXaBXWAXWBGg4y8pNce/EIGgNlMGBeDdywdERqUUoWFl8JCBgUyZdnPmD6dmV4HdsntqyUdWG4mnKJdgd1g9MwHL0yt3OC'+
			'nY82BpKEnh+ySMaLVsD9fdXMPGOZyJDQGfwdN7Xf8qXjb4Mwm1tz/1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-Image 5-2";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mimage_52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mimage_52.ggUpdatePosition=function (useTransition) {
		}
		me._mrectangle_42.appendChild(me._mimage_52);
		me._m_2.appendChild(me._mrectangle_42);
		me._mrectangle_8.appendChild(me._m_2);
		el=me._m22=document.createElement('div');
		el.ggId="m-\ud06c\uac8c\ubcf4\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 74px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m22.ggUpdatePosition=function (useTransition) {
		}
		el=me._mimage_7=document.createElement('div');
		els=me._mimage_7__img=document.createElement('img');
		els.className='ggskin ggskin_mimage_7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBzVMLCcMwED2moBIiYRIiYQ46B52DzkElRMIkZA4yB5UQCdkdvLJAL0lXKPTBo5D7vLvjlegopJQMs6N/wUVPZkw/zPK2pbBjBhRNzB50eAvViZAoalfS15GpXqViA5W+InBDjtWCo6hTe02ZYszfLvga5ofaeCN31WArVkdcGoi6pTYMaZPK5XGgR6mSY3fkmFLChCNZJWYRc1RRECN5qDjmAPrMkVHziTZqyKzs0Whxaiyu0ULWZE57fjQ0EdcOdBp8AVufCFvMtNzVAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-Image 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mimage_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mimage_7.ggUpdatePosition=function (useTransition) {
		}
		me._m22.appendChild(me._mimage_7);
		el=me._mtext_5=document.createElement('div');
		els=me._mtext_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-Text 5";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._mtext_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mtext_5.ggUpdateText();
		el.appendChild(els);
		me._mtext_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mtext_5.ggUpdatePosition=function (useTransition) {
		}
		me._m22.appendChild(me._mtext_5);
		me._mrectangle_8.appendChild(me._m22);
		el=me._m21=document.createElement('div');
		el.ggId="m-\ubbf8\ub2c8\ub9f5\uc9c0\ub3c4";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 105px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((105px + 0px) / 2) + 20px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m21.ggUpdatePosition=function (useTransition) {
		}
		el=me._mmap_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="m-Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._mmap_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mmap_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cON") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mmap_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mmap_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mmap_1.style.transition='';
				if (me._mmap_1.ggCurrentLogicStateVisible == 0) {
					me._mmap_1.style.visibility=(Number(me._mmap_1.style.opacity)>0||!me._mmap_1.style.opacity)?'inherit':'hidden';
					if (me._mmap_1.ggMapNotLoaded && me._mmap_1.ggInitMap) {
						me._mmap_1.ggInitMap(false);
						me._mmap_1.ggInitMapMarkers(true);
					}
					me._mmap_1.ggVisible=true;
				}
				else {
					me._mmap_1.style.visibility=(Number(me._mmap_1.style.opacity)>0||!me._mmap_1.style.opacity)?'inherit':'hidden';
					if (me._mmap_1.ggMapNotLoaded && me._mmap_1.ggInitMap) {
						me._mmap_1.ggInitMap(false);
						me._mmap_1.ggInitMapMarkers(true);
					}
					me._mmap_1.ggVisible=true;
				}
			}
		}
		me._mmap_1.logicBlock_visible();
		me._mmap_1.ggCurrentLogicStateVisible = -1;
		me._mmap_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._mmap_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mmap_1.ggCalculateFloorplanSize(mapDetails);
				me._mmap_1.ggShowSimpleFloorplan(mapDetails);
				me._mmap_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._mmap_1.ggRadar) me._mmap_1.ggRadar.update();
		}
		me._mmap_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._mmap_1.ggMarkerInstances.length; i++) {
				me._mmap_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._mmap_1.ggUpdateConditionResize();
		}
		me._m21.appendChild(me._mmap_1);
		el=me._mmap_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="m-Map 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mmap_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mmap_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cOFF") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mmap_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mmap_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mmap_2.style.transition='';
				if (me._mmap_2.ggCurrentLogicStateVisible == 0) {
					me._mmap_2.style.visibility=(Number(me._mmap_2.style.opacity)>0||!me._mmap_2.style.opacity)?'inherit':'hidden';
					if (me._mmap_2.ggMapNotLoaded && me._mmap_2.ggInitMap) {
						me._mmap_2.ggInitMap(false);
						me._mmap_2.ggInitMapMarkers(true);
					}
					me._mmap_2.ggVisible=true;
				}
				else {
					me._mmap_2.style.visibility="hidden";
					if (me._mmap_2.ggClearMap) me._mmap_2.ggClearMap();
					me._mmap_2.ggVisible=false;
				}
			}
		}
		me._mmap_2.logicBlock_visible();
		me._mmap_2.ggCurrentLogicStateVisible = -1;
		me._mmap_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._mmap_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mmap_2.ggCalculateFloorplanSize(mapDetails);
				me._mmap_2.ggShowSimpleFloorplan(mapDetails);
				me._mmap_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._mmap_2.ggRadar) me._mmap_2.ggRadar.update();
		}
		me._mmap_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._mmap_2.ggMarkerInstances.length; i++) {
				me._mmap_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._mmap_2.ggUpdateConditionResize();
		}
		me._m21.appendChild(me._mmap_2);
		me._mrectangle_8.appendChild(me._m21);
		me._m20.appendChild(me._mrectangle_8);
		me._rectangle_1.appendChild(me._m20);
		el=me._m19=document.createElement('div');
		el.ggId="m-\uc0c1\ub2e8\ub85c\uace0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='position:absolute; top:5px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m19.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIsAAAAOCAYAAAAfZO+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR2SURBVHgB7VlbSFRRFN0zjjqFaWEfRYRW2oselL1+6qOPonf0E330LnugFEFGfSRRUpZWBkX1KRQVfaRGQY8PMelLqAgijDJB6IGa42Q6Nk5rd8/F48yde851Bh/ggsW5c+8+++x77j5773OGQqFQh8RzpEBbW1uFJF8LJtvJ4/la8HvYOMxGcBZpArIZ4CfwN9gu6AN/CbaCzeAWqc9HJ+8GmTXgNwtbZfK7TBDyexWyKh4WetyyrX6//7yGreuFLZ1hfANOIk1AdjL4zsI2P5gPukxZDzhK6puoUu71ehOlPl6yN2QPmlJwrMXjyWAVT7jL5apW6FmG5i'+
			'44hRRoaWlJkH56JVsTFWPsR3Mxiq0yukFzAsPnzyk80nWypMtj10nYWgyOs3g8H3wEmR2Y1w8KPVloKsFoi5bnIxlypdAVcpNDJCUl9ahkxErZi8vLZD/508CHkF1oo4tf/h5pOIrZhRwA+j3gQVyWkNpRBh2wdSeaa2TtKCYWgU8hm2mjZx6a5xTdURi82DjKFXCEsfXg/qKjo2MBItBYt9tdZCO2HNwAjgcrYcxSeG+TLCDS1FLwOmnC4/G8JWfIAUeDyjQlwJGlRVy/Bk9ayEwHd1FvBLoDvreQqyUH8Pl8PGdp4Glxy1zs8gLeSsY7ZYDlXAZgXv2yHtybiWYJeCPaWN3d3RMTEhIO4Ruyw5wFG7mjjGJSADKPJfm68JqFPT8QCNQUFhaqQmm+pKeLc2fY8xzwC9jvMI++X+3eTdjwkuIM6FwB9khjr1fIcyRu'+
			'MIVRs1yykMnDIqwi9djl0rhcB40Je54pxsqw09PU1DQzGAy2S7oKHach6uvFshEucDsur5Ii56ogcimvxkzQyw6jQWW9Jenn1JOPS458/ZmDAQVs3YemBBHCSzEAemajeUFGvWiL1NRUjoou+R5/1FD4TdWYUe5vAm+Toug1UV9f787Ozo5UHgpNJaNGmSFuVZNeHfKAjI+vgx1kOPVwcJQDaMrIKIBj0cOp8T4ZdaKy7kxJSYnwCXYWzn+cd0dTbOCVqu352LVYOii25ivT0tJypFtzSQ81pA/+AEPeUQRyqX+OEiRjQZj1ympwDsUAN0IbF3a6xR3D0W5jBIOCLrAAvMlbXooTzNqCz0I6wQkafZQhTAfp6em6qY9DZ1BDro5GwGBHOQreitFRLGsWgtIAmivIa5tAzvt26WSBdP2Z9D5kBLKysnTTwG7Y94fiiw'+
			'ZwMRmTMQPvfCHsuZv6TpQ8cWxLMWxqp4EBz/H/cyiccU2DraWSPaZNQaktB1/FIaJY1iy9T12uCnFYc4rU4AOdXPT5S8MPXAckgZvBieAJB319ZJz7DJSz8F8CqeAqnHnwweSxKHL8HY5TfBzFElarm/f4R8hIS1bgNPQM3AajWmkYAna3oeHtKK/CIV2DwdafaPhIwq6A52h3BiyLo6NERJYIZ8FgnSAfJ7OXBiyU8MHQRsg0U2wY1N2IsJ93ReU0xAFbf6BZBz6xeMzfKA8sinNEiahZ/gG9TRLUcv054gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 11";
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 9px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((9px + 0px) / 2) - 4px);';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._m19.appendChild(me._image_11);
		el=me.__20=document.createElement('div');
		els=me.__20__img=document.createElement('img');
		els.className='ggskin ggskin__20';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub85c\uace0 \ubaa8\ubc14\uc77c-2";
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 21px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((21px + 0px) / 2) - 6px);';
		hs+='visibility : hidden;';
		hs+='width : 95px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		me._m19.appendChild(me.__20);
		el=me.__m0=document.createElement('div');
		els=me.__m0__img=document.createElement('img');
		els.className='ggskin ggskin__m0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ub85c\uace0 \ub514\ud504\ub9ac\ub9c8-m";
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 62%;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((62% + 0px) / 2) - 3px);';
		hs+='visibility : hidden;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m0.ggUpdatePosition=function (useTransition) {
		}
		me._m19.appendChild(me.__m0);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24iIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) - 3px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_m_sidebar') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_4.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_4.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_4.style.transition='transform 0s';
				if (me._svg_4.ggCurrentLogicStateAngle == 0) {
					me._svg_4.ggParameter.a = 180;
					me._svg_4.style.transform=parameterToTransform(me._svg_4.ggParameter);
				}
				else {
					me._svg_4.ggParameter.a = 0;
					me._svg_4.style.transform=parameterToTransform(me._svg_4.ggParameter);
				}
			}
		}
		me._svg_4.logicBlock_angle();
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._m19.appendChild(me._svg_4);
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 10";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0.784314);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 1px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 72%;';
		hs+='left : calc(50% - ((82% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('vis_m_sidebar') == false))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_10.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_10.style.transition='border-color 0s';
				if (me._rectangle_10.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_10.style.borderColor="rgba(255,255,255,0)";
				}
				else {
					me._rectangle_10.style.borderColor="rgba(255,255,255,0.784314)";
				}
			}
		}
		me._rectangle_10.logicBlock_bordercolor();
		me._rectangle_10.onclick=function (e) {
			player.setVariableValue('vis_m_sidebar', !player.getVariableValue('vis_m_sidebar'));
			player.setVariableValue('vis_m_bottom_menu', false);
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._m19.appendChild(me._rectangle_10);
		me._rectangle_1.appendChild(me._m19);
		me._m18.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._m18);
		el=me._m11=document.createElement('div');
		el.ggId="m-\ud558\ub2e8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 1px;';
		hs+='left : calc(50% - ((95% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:none;';
		hs+='min-width:280px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._m11.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_m_bottom_menu') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._m11.ggCurrentLogicStateSize != newLogicStateSize) {
				me._m11.ggCurrentLogicStateSize = newLogicStateSize;
				me._m11.style.transition='width 0s, height 0s';
				if (me._m11.ggCurrentLogicStateSize == 0) {
					me._m11.style.width='95%';
					me._m11.style.height='165px';
					me._m11.style.left = 'calc(50% - (95% / 2))';
					skin.updateSize(me._m11);
				}
				else {
					me._m11.style.width='95%';
					me._m11.style.height='1px';
					me._m11.style.left = 'calc(50% - (95% / 2))';
					skin.updateSize(me._m11);
				}
			}
		}
		me._m11.logicBlock_size();
		me._m11.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_m_move_button_1') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m11.style.transition='width 0s, height 0s';
				if (me._m11.ggCurrentLogicStateVisible == 0) {
					me._m11.style.visibility="hidden";
					me._m11.ggVisible=false;
				}
				else if (me._m11.ggCurrentLogicStateVisible == 1) {
					me._m11.style.visibility="hidden";
					me._m11.ggVisible=false;
				}
				else {
					me._m11.style.visibility=(Number(me._m11.style.opacity)>0||!me._m11.style.opacity)?'inherit':'hidden';
					me._m11.ggVisible=true;
				}
			}
		}
		me._m11.logicBlock_visible();
		me._m11.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_11=document.createElement('div');
		el.ggId="Rectangle 11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 12px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(0px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._m12=document.createElement('div');
		el.ggId="m-\uc544\uc774\ucf58";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		hs+='min-width:240px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m12.ggUpdatePosition=function (useTransition) {
		}
		el=me._m17=document.createElement('div');
		el.ggId="m-\ubbf8\ub2c8\ub9f5";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m17.onclick=function (e) {
			player.setVariableValue('vis_m_minimap', !player.getVariableValue('vis_m_minimap'));
			player.setVariableValue('vis_m_sidebar', false);
			player.setVariableValue('vis_m_type', false);
		}
		me._m17.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_19=document.createElement('div');
		els=me._image_19__img=document.createElement('img');
		els.className='ggskin ggskin_image_19';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEbSURBVHgB7VVREYMwDC0oQAIScAAOhgNwUBwMB2MKKoFNQecACczB5iBLb+GWFkr52fZD7t5BwmvfA66JEP8MAGgRPUIh0o1rsiDXEBAa7BgR1cqaBNExfuMjNoiHsznPtesQ84IM8NAh1yeEpHuFqJ1NWnLdO+L1TACTkrk0m+RUn8iKmVAwD7NWsreZCWjmOmF1S4DVD+xtBmCfzBWInV9wiaLoKQKBnCtebpR2mN993Fh8OXaBXWAXWBGg4y8pNce/EIGgNlMGBeDdywdERqUUoWFl8JCBgUyZdnPmD6dmV4HdsntqyUdWG4mnKJdgd1g9MwHL0yt3OC'+
			'nY82BpKEnh+ySMaLVsD9fdXMPGOZyJDQGfwdN7Xf8qXjb4Mwm1tz/1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 19";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_19.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_minimap') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_19.style.transition='';
				if (me._image_19.ggCurrentLogicStateVisible == 0) {
					me._image_19.style.visibility=(Number(me._image_19.style.opacity)>0||!me._image_19.style.opacity)?'inherit':'hidden';
					me._image_19.ggVisible=true;
				}
				else {
					me._image_19.style.visibility="hidden";
					me._image_19.ggVisible=false;
				}
			}
		}
		me._image_19.logicBlock_visible();
		me._image_19.ggUpdatePosition=function (useTransition) {
		}
		me._m17.appendChild(me._image_19);
		el=me._image_141=document.createElement('div');
		els=me._image_141__img=document.createElement('img');
		els.className='ggskin ggskin_image_141';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFqSURBVHgB7VWhcgJBDM0yJ7buZB11xRVXXM8hyx+0f9Bvqqw8WQeOc63rqW4dsrhzx8uRhbBzuyhQl5lMJiHJS5abF6ILi0n92LZtAXMLbaBLY8w/nRHUdPk+10SScpgFdKzCXLBC4VekxsIU0EcJfSJ3bXoSZzBPUKvCjfIdtNTboOYO5hmaqxqHnPcsMfUauoXOobU0ZmBu9ob8JWwlNfcK/FvAOsmk+USCVp6CJ3SIT30iPw18DzKV5yjUhvwfVbINnQBAZtKcp+Z3bqhH5FlKNKllM956A/2IfQCjwK9jzQOgH5g/cavU1zWiC8sAMAAMAAkAIT9Pve'+
			'OQYyI1TDcTHcsiiSFlM9gL4syUvYcnoGymm6oPIEfiKx0pmzmnpD0ZMuCDbLNSNRb+Qn5jcaTuhRF03ZTlQNlqwm4LOh4VfYS831G2ih0AeMK5xJKUHbl4joIrdwKgJrRI2tAZkVwGuYH+hlNfVXaWVp/55uSPfQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 14-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_141.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_141.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_minimap') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_141.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_141.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_141.style.transition='';
				if (me._image_141.ggCurrentLogicStateVisible == 0) {
					me._image_141.style.visibility=(Number(me._image_141.style.opacity)>0||!me._image_141.style.opacity)?'inherit':'hidden';
					me._image_141.ggVisible=true;
				}
				else {
					me._image_141.style.visibility="hidden";
					me._image_141.ggVisible=false;
				}
			}
		}
		me._image_141.logicBlock_visible();
		me._image_141.ggUpdatePosition=function (useTransition) {
		}
		me._m17.appendChild(me._image_141);
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 11";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_11.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubbf8\ub2c8\ub9f5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_11.ggUpdateText();
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_11.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_m_minimap') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_11.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_11.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_11.style.transition='color 0s';
				if (me._text_11.ggCurrentLogicStateTextColor == 0) {
					me._text_11.style.color="rgba(255,255,255,0.470588)";
				}
				else {
					me._text_11.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._text_11.logicBlock_textcolor();
		me._text_11.ggUpdatePosition=function (useTransition) {
		}
		me._m17.appendChild(me._text_11);
		me._m12.appendChild(me._m17);
		el=me._m16=document.createElement('div');
		el.ggId="m-\uacf5\uac04\uc774\ub3d9";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 20%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m16.onclick=function (e) {
			player.setVariableValue('vis_m_move_button_1', !player.getVariableValue('vis_m_move_button_1'));
			player.setVariableValue('vis_m_bottom_menu', false);
			player.setVariableValue('vis_m_sidebar', false);
			player.setVariableValue('vis_m_type', false);
			player.setVariableValue('vis_m_minimap', false);
		}
		me._m16.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFeSURBVHgB7VXRccIwDJUzgUfwBmWDZgPaCcgI3SDZoCMwQtoJoBPABrQThA1c6aK0ItiWOZw/3p3OIZLfsyJLADyA8N7XaD3aCW2HtoElgMSdD2MLJYGEzqfRQikg2bsidsrhqSAPK8XvoKDY8U7/TWKfiv8DSoIuQaReO1gCSNygHaZLUbTPkMyygBXv2lBG+PuFWiTFVyVEOnykK01Nu9IOhUtP8dTkMdEqsJGID2jUqERy5jUF8n/zc8OiHSgnpEkxpGoS+4zse+Z9E95SYrL4NhITFRMx08QZgjz+cv65BFHDMckBLL7QJuSsJyVQwJk7JaZnujbktC'+
			'KzWiFyml/Ubq2dZuBbeTNY6K/2qUA7u01bLYvZ3k7U6urAJnQyGBu5Fq9pqu9h7KUf+O89sicYm17GU9yrMSbr32A+B3NB2bQ+0jYmQ9ThsuaTE4kT7jNnsUc7YiZf8MDS+AVTFjBKxKpUTgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 15";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
		}
		me._m16.appendChild(me._image_15);
		el=me._text_12=document.createElement('div');
		els=me._text_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 12";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_12.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_12.ggUpdateText();
		el.appendChild(els);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_12.ggUpdatePosition=function (useTransition) {
		}
		me._m16.appendChild(me._text_12);
		me._m12.appendChild(me._m16);
		el=me._m15=document.createElement('div');
		el.ggId="m-\uac00\uad6c\ubc30\uce58";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 40%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m15.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\ud604\uad00"))
				)
			) {
				player.openNext("{node2}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node3}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e41"))
				)
			) {
				player.openNext("{node4}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e42"))
				)
			) {
				player.openNext("{node5}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uce68\uc2e4"))
				)
			) {
				player.openNext("{node6}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == true)) && 
					((player._(me.ggUserdata.title) == "\uc695\uc2e4"))
				)
			) {
				player.openNext("{node7}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\ud604\uad00"))
				)
			) {
				player.openNext("{node8}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
				)
			) {
				player.openNext("{node9}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e41"))
				)
			) {
				player.openNext("{node10}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uac70\uc2e42"))
				)
			) {
				player.openNext("{node11}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uce68\uc2e4"))
				)
			) {
				player.openNext("{node12}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_furniture_button') == false)) && 
					((player._(me.ggUserdata.title) == "\uc695\uc2e4"))
				)
			) {
				player.openNext("{node13}","$(cur)");
			}
		}
		me._m15.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADpSURBVHgBxZUNDcIwEIVfFwTMAeBgDpgDkAAKmANwAhJwMFAADoYDQMFxy9YEmqW9azP4kkuzn969d2tXYGSM7yERFTwUCHMyxjyhhQs0JGMHLTxpTXIeHLm2QEM65C6U6vUuItTLXUSql7tIUB92kaje8uUic2oskU6bfGEvjONgxsMUeo4c7U6uOF68q2+IgQUUHGUv5PN+w1EPzZlAnrzkwSa5c8wl88QFAmzQtWicAtzzM1Lo+147S/HgfouYxLmTeIg9YhEkt1TQQj84D66kYzuUJ/PUkJzFwfd9y3SF7r8i5YJ/8AYFW8urJDXeIgAAAABJRU5Erk'+
			'Jggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_furniture_button') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_16.style.transition='';
				if (me._image_16.ggCurrentLogicStateVisible == 0) {
					me._image_16.style.visibility=(Number(me._image_16.style.opacity)>0||!me._image_16.style.opacity)?'inherit':'hidden';
					me._image_16.ggVisible=true;
				}
				else {
					me._image_16.style.visibility="hidden";
					me._image_16.ggVisible=false;
				}
			}
		}
		me._image_16.logicBlock_visible();
		me._image_16.ggUpdatePosition=function (useTransition) {
		}
		me._m15.appendChild(me._image_16);
		el=me._image_161=document.createElement('div');
		els=me._image_161__img=document.createElement('img');
		els.className='ggskin ggskin_image_161';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEiSURBVHgBvVWrEsIwELwyiDqQOJBIHHXtH4ADxzfxKUgc/QtkJbISV/aGHNNH0kvaKTuTyTSX7N4mvYRoYkR9waqqVuhWpOMZRdHbFpgrC09oS9KxQMttgZlrBbLfeZIzEsyPgwSAlPzB5HtvgcDsBVYXLgch2QusLjoCA7MXdFzYHAzJXtBx0RAYmb2g4aLtYEvjweQb+WhUMpQ5+yEODmhcyXfuUdUvCTQqGYESXeliMVcHZ1iauTJOhrhor9Guijr5Bt3FfDL51Wedt4CCG323aBoB29YI+u6iH8z2ZLWhGGNH81P0iyvEfKBntHXPtAcc5K6g5kAjZ2'+
			'RIJAkWMFWtkQvSIe/BnvzB5LtQAZ+3WJ3vPGRY5nspJn8U9er+Gz6blls6yXVVCAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 16-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_161.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_161.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_furniture_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_161.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_161.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_161.style.transition='';
				if (me._image_161.ggCurrentLogicStateVisible == 0) {
					me._image_161.style.visibility=(Number(me._image_161.style.opacity)>0||!me._image_161.style.opacity)?'inherit':'hidden';
					me._image_161.ggVisible=true;
				}
				else {
					me._image_161.style.visibility="hidden";
					me._image_161.ggVisible=false;
				}
			}
		}
		me._image_161.logicBlock_visible();
		me._image_161.ggUpdatePosition=function (useTransition) {
		}
		me._m15.appendChild(me._image_161);
		el=me._text_13=document.createElement('div');
		els=me._text_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 13";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_13.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac00\uad6c\ubc30\uce58", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_13.ggUpdateText();
		el.appendChild(els);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_13.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_furniture_button') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_13.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_13.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_13.style.transition='color 0s';
				if (me._text_13.ggCurrentLogicStateTextColor == 0) {
					me._text_13.style.color="rgba(255,255,255,0.470588)";
				}
				else {
					me._text_13.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._text_13.logicBlock_textcolor();
		me._text_13.ggUpdatePosition=function (useTransition) {
		}
		me._m15.appendChild(me._text_13);
		me._m12.appendChild(me._m15);
		el=me._m14=document.createElement('div');
		el.ggId="m-\ub0ae\ubc24";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 60%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m14.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_daynight_button') == false))
				)
			) {
				player.openNext("{node10}","$(cur)");
			}
			if (
				(
					((player.getVariableValue('vis_daynight_button') == true))
				)
			) {
				player.openNext("{node1}","$(cur)");
			}
		}
		me._m14.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFnSURBVHgB5VbRUcMwDHVYgIyQEbpBvUGzQdmgbNBsABuEDQoTFCZoN3CYoGECIV3twydsSTn+6LvT+So/6amuZNe5/4bGQgIAj8sGrUNboc3RzmhvTdO8u78ABXq0ADqIs3VLgUEt2ouQeIu2Qzsw/0ixS0ROgggwfhcFEk4mMRakCmVxdMyX9M00kQcwwBjfS0JB0aCK6XfxaF0lx1PkhpqIV0QoQRu5CUMhT5vte6mSEvaMm+OxkOuYinPCJkcocHNcgHUZXFufcEi+u2y/1pKTk0Fxa+b7iutqidDsdMyaPxc6V8ge9AH8ZJ/vJaHJlUEie1fHgJfqxH'+
			'w+rr+LB729h4ybmmBXyNNlMetSZZaBDbE7N7XjhJ8rrDywkdSDAcZ4+dkA+XmoCsH1nrNdqjFg6TNB/Ods2/ZMZMGjoEXV0/QfmX80ixSOI4AO4vRSLuufE2pTSkRXShuNZmRCe8U5+nA3h28mApP4h0P0/gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 17";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_daynight_button') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_17.style.transition='';
				if (me._image_17.ggCurrentLogicStateVisible == 0) {
					me._image_17.style.visibility=(Number(me._image_17.style.opacity)>0||!me._image_17.style.opacity)?'inherit':'hidden';
					me._image_17.ggVisible=true;
				}
				else {
					me._image_17.style.visibility="hidden";
					me._image_17.ggVisible=false;
				}
			}
		}
		me._image_17.logicBlock_visible();
		me._image_17.ggUpdatePosition=function (useTransition) {
		}
		me._m14.appendChild(me._image_17);
		el=me._image_171=document.createElement('div');
		els=me._image_171__img=document.createElement('img');
		els.className='ggskin ggskin_image_171';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzSURBVHgBnVU9U8JAEL0wzEhJJ1amg0466EiHnT/Bn+L4Uywt7UgnnSV2ocMOKinTxffCO+c87w4mb2bn5o7dt7vZDzKTQNM0OY4JZAi5htSSA6TKsmwXs80ihCRbijCFI2QNB5skMQgHIpxGiN4g1MkhY+f9E7KCg/ofsUgfIaMIqYHhs6PPbBZOEHvIiyXvOXb3KdKAkyOEGbya03en7dL+3pN3er0zHQDyCkep61T1+Y14ccaeEW3ZJfoEPjmL96FrG3VfLZWqPg1Y+Rq6T3zA+Y772tPjfU4ucjLiSYKUBKVbbaGA8dyLmjpfuo5JHCvYMRCVi4U6yU'+
			'Wlc0jiqxixScP2swub2agnhRBqcx4xnZrEh8iPeSBVH35WA5c4ljKVChMHC+vb5jr3JK4SxjNE7fc401/5hVV/2/2x7XP14ZGeY71caDKpw/HdBdqv1dPJbtrZyStNGnSac3xDpBpjuxLaTFpizfvGdICyedB1Y3dz39Fh1CNz4YZTxxSQmZ72xsm866Jn6rfOO6Msg4vec0BidsMlf02lPuUfZCkrbT620I05jT6j5UB9Q7apP9MfbVykyypiO0EAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 17-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_171.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_171.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_daynight_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_171.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_171.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_171.style.transition='';
				if (me._image_171.ggCurrentLogicStateVisible == 0) {
					me._image_171.style.visibility=(Number(me._image_171.style.opacity)>0||!me._image_171.style.opacity)?'inherit':'hidden';
					me._image_171.ggVisible=true;
				}
				else {
					me._image_171.style.visibility="hidden";
					me._image_171.ggVisible=false;
				}
			}
		}
		me._image_171.logicBlock_visible();
		me._image_171.ggUpdatePosition=function (useTransition) {
		}
		me._m14.appendChild(me._image_171);
		el=me._text_14=document.createElement('div');
		els=me._text_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 14";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,0.470588);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_14.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub0ae\ubc24", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_14.ggUpdateText();
		el.appendChild(els);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_14.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_daynight_button') == false))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_14.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_14.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_14.style.transition='color 0s';
				if (me._text_14.ggCurrentLogicStateTextColor == 0) {
					me._text_14.style.color="rgba(255,255,255,1)";
				}
				else {
					me._text_14.style.color="rgba(255,255,255,0.470588)";
				}
			}
		}
		me._text_14.logicBlock_textcolor();
		me._text_14.ggUpdatePosition=function (useTransition) {
		}
		me._m14.appendChild(me._text_14);
		el=me._text_20m=document.createElement('div');
		els=me._text_20m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 20-m";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc774\ub3d9 X", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20m.ggUpdateText();
		el.appendChild(els);
		me._text_20m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_daynight_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_20m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_20m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_20m.style.transition='';
				if (me._text_20m.ggCurrentLogicStateVisible == 0) {
					me._text_20m.style.visibility=(Number(me._text_20m.style.opacity)>0||!me._text_20m.style.opacity)?'inherit':'hidden';
					me._text_20m.ggVisible=true;
				}
				else {
					me._text_20m.style.visibility="hidden";
					me._text_20m.ggVisible=false;
				}
			}
		}
		me._text_20m.logicBlock_visible();
		me._text_20m.ggUpdatePosition=function (useTransition) {
		}
		me._m14.appendChild(me._text_20m);
		el=me._text_20md=document.createElement('div');
		els=me._text_20md__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 20-md";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((85px + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_20md.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e4\uc5d0\uc11c\uc0ac\uc6a9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_20md.ggUpdateText();
		el.appendChild(els);
		me._text_20md.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_20md.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_daynight_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_20md.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_20md.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_20md.style.transition='';
				if (me._text_20md.ggCurrentLogicStateVisible == 0) {
					me._text_20md.style.visibility="hidden";
					me._text_20md.ggVisible=false;
				}
				else {
					me._text_20md.style.visibility="hidden";
					me._text_20md.ggVisible=false;
				}
			}
		}
		me._text_20md.logicBlock_visible();
		me._text_20md.ggUpdatePosition=function (useTransition) {
		}
		me._m14.appendChild(me._text_20md);
		me._m12.appendChild(me._m14);
		el=me._m13=document.createElement('div');
		el.ggId="m-\uc815\ubcf4";
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 80%;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 30px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m13.onclick=function (e) {
			player.setVariableValue('vis_info_button', !player.getVariableValue('vis_info_button'));
			me._m18.style.transition='none';
			me._m18.style.visibility='hidden';
			me._m18.ggVisible=false;
			me._m11.style.transition='none';
			me._m11.style.visibility='hidden';
			me._m11.ggVisible=false;
			me._m.style.transition='none';
			me._m.style.visibility='hidden';
			me._m.ggVisible=false;
		}
		me._m13.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_12=document.createElement('div');
		el.ggId="Rectangle 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_12.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_info_button') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_12.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_12.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_12.style.transition='background-color 0s';
				if (me._rectangle_12.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_12.style.backgroundColor="rgba(255,255,255,0.470588)";
				}
				else {
					me._rectangle_12.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_12.logicBlock_backgroundcolor();
		me._rectangle_12.ggUpdatePosition=function (useTransition) {
		}
		me._m13.appendChild(me._rectangle_12);
		el=me._text_15=document.createElement('div');
		els=me._text_15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 15";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,0.470588);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_15.ggUpdateText=function() {
			var params = [];
			var hs = player._("i", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_15.ggUpdateText();
		el.appendChild(els);
		me._text_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_15.ggUpdatePosition=function (useTransition) {
		}
		me._m13.appendChild(me._text_15);
		el=me._text_16=document.createElement('div');
		els=me._text_16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 16";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_16.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc815\ubcf4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_16.ggUpdateText();
		el.appendChild(els);
		me._text_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_16.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getVariableValue('vis_info_button') == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_16.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_16.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_16.style.transition='color 0s';
				if (me._text_16.ggCurrentLogicStateTextColor == 0) {
					me._text_16.style.color="rgba(255,255,255,0.470588)";
				}
				else {
					me._text_16.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._text_16.logicBlock_textcolor();
		me._text_16.ggUpdatePosition=function (useTransition) {
		}
		me._m13.appendChild(me._text_16);
		me._m12.appendChild(me._m13);
		me._rectangle_11.appendChild(me._m12);
		me._m11.appendChild(me._rectangle_11);
		el=me.__8=document.createElement('div');
		el.ggId="\uc635\uc158\uae30\ub2a5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.onclick=function (e) {
			player.setVariableValue('vis_m_bottom_menu', !player.getVariableValue('vis_m_bottom_menu'));
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_13=document.createElement('div');
		el.ggId="Rectangle 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 12px 12px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(0px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_13.onclick=function (e) {
			player.setVariableValue('vis_m_sidebar', false);
			player.setVariableValue('vis_m_type', false);
		}
		me._rectangle_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_17=document.createElement('div');
		els=me._text_17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 17";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 75%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 10px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_17.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc635\uc158\uae30\ub2a5", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_17.ggUpdateText();
		el.appendChild(els);
		me._text_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_17.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_13.appendChild(me._text_17);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWRvd24iIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iI2ZmZmZmZiI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_m_bottom_menu') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_3.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_3.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_3.style.transition='transform 0s';
				if (me._svg_3.ggCurrentLogicStateAngle == 0) {
					me._svg_3.ggParameter.a = 0;
					me._svg_3.style.transform=parameterToTransform(me._svg_3.ggParameter);
				}
				else {
					me._svg_3.ggParameter.a = 180;
					me._svg_3.style.transform=parameterToTransform(me._svg_3.ggParameter);
				}
			}
		}
		me._svg_3.logicBlock_angle();
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_13.appendChild(me._svg_3);
		me.__8.appendChild(me._rectangle_13);
		me._m11.appendChild(me.__8);
		me.divSkin.appendChild(me._m11);
		el=me._m8=document.createElement('div');
		el.ggId="m-\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 150px;';
		hs+='left : 5%;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='position:absolute; bottom:13%; ;min-width:210px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._m8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_move_button_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m8.style.transition='';
				if (me._m8.ggCurrentLogicStateVisible == 0) {
					me._m8.style.visibility=(Number(me._m8.style.opacity)>0||!me._m8.style.opacity)?'inherit':'hidden';
					me._m8.ggVisible=true;
				}
				else {
					me._m8.style.visibility="hidden";
					me._m8.ggVisible=false;
				}
			}
		}
		me._m8.logicBlock_visible();
		me._m8.ggUpdatePosition=function (useTransition) {
		}
		el=me._m10=document.createElement('div');
		el.ggId="m-\uacf5\uac04\uc120\ud0dd\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m10.ggUpdatePosition=function (useTransition) {
		}
		me._m8.appendChild(me._m10);
		el=me._mscrollarea_1=document.createElement('div');
		els=me._mscrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 162.75px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 1535px;';
		hs+="";
		els.setAttribute('style',hs);
		me._mscrollarea_1.ggScrollByX = function(diffX) {
			if(!me._mscrollarea_1.ggHorScrollVisible || diffX == 0 || me._mscrollarea_1.ggHPercentVisible >= 1.0) return;
			me._mscrollarea_1.ggScrollPosX = (me._mscrollarea_1__horScrollFg.offsetLeft + diffX);
			me._mscrollarea_1.ggScrollPosX = Math.max(me._mscrollarea_1.ggScrollPosX, 0);
			me._mscrollarea_1.ggScrollPosX = Math.min(me._mscrollarea_1.ggScrollPosX, me._mscrollarea_1__horScrollBg.offsetWidth - me._mscrollarea_1__horScrollFg.offsetWidth);
			me._mscrollarea_1__horScrollFg.style.left = me._mscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._mscrollarea_1.ggScrollPosX / (me._mscrollarea_1__horScrollBg.offsetWidth - me._mscrollarea_1__horScrollFg.offsetWidth);
			me._mscrollarea_1__content.style.left = -(Math.round((me._mscrollarea_1.ggContentWidth * (1.0 - me._mscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._mscrollarea_1.ggContentLeftOffset + 'px';
			me._mscrollarea_1.ggScrollPosXPercent = (me._mscrollarea_1__horScrollFg.offsetLeft / me._mscrollarea_1__horScrollBg.offsetWidth);
		}
		me._mscrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._mscrollarea_1.ggHorScrollVisible || diffX == 0 || me._mscrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._mscrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._mscrollarea_1.ggScrollPosX >= me._mscrollarea_1__horScrollBg.offsetWidth - me._mscrollarea_1__horScrollFg.offsetWidth)) {
					me._mscrollarea_1.ggScrollPosX = Math.min(me._mscrollarea_1.ggScrollPosX, me._mscrollarea_1__horScrollBg.offsetWidth - me._mscrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._mscrollarea_1.ggScrollPosX <= 0)) {
					me._mscrollarea_1.ggScrollPosX = Math.max(me._mscrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._mscrollarea_1__horScrollFg.style.left = me._mscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._mscrollarea_1.ggScrollPosX / (me._mscrollarea_1__horScrollBg.offsetWidth - me._mscrollarea_1__horScrollFg.offsetWidth);
			me._mscrollarea_1__content.style.left = -(Math.round((me._mscrollarea_1.ggContentWidth * (1.0 - me._mscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._mscrollarea_1.ggContentLeftOffset + 'px';
			me._mscrollarea_1.ggScrollPosXPercent = (me._mscrollarea_1__horScrollFg.offsetLeft / me._mscrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._mscrollarea_1.ggScrollByY = function(diffY) {
			if(!me._mscrollarea_1.ggVertScrollVisible || diffY == 0 || me._mscrollarea_1.ggVPercentVisible >= 1.0) return;
			me._mscrollarea_1.ggScrollPosY = (me._mscrollarea_1__vertScrollFg.offsetTop + diffY);
			me._mscrollarea_1.ggScrollPosY = Math.max(me._mscrollarea_1.ggScrollPosY, 0);
			me._mscrollarea_1.ggScrollPosY = Math.min(me._mscrollarea_1.ggScrollPosY, me._mscrollarea_1__vertScrollBg.offsetHeight - me._mscrollarea_1__vertScrollFg.offsetHeight);
			me._mscrollarea_1__vertScrollFg.style.top = me._mscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._mscrollarea_1.ggScrollPosY / (me._mscrollarea_1__vertScrollBg.offsetHeight - me._mscrollarea_1__vertScrollFg.offsetHeight);
			me._mscrollarea_1__content.style.top = -(Math.round((me._mscrollarea_1.ggContentHeight * (1.0 - me._mscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._mscrollarea_1.ggContentTopOffset + 'px';
			me._mscrollarea_1.ggScrollPosYPercent = (me._mscrollarea_1__vertScrollFg.offsetTop / me._mscrollarea_1__vertScrollBg.offsetHeight);
		}
		me._mscrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._mscrollarea_1.ggVertScrollVisible || diffY == 0 || me._mscrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._mscrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._mscrollarea_1.ggScrollPosY >= me._mscrollarea_1__vertScrollBg.offsetHeight - me._mscrollarea_1__vertScrollFg.offsetHeight)) {
					me._mscrollarea_1.ggScrollPosY = Math.min(me._mscrollarea_1.ggScrollPosY, me._mscrollarea_1__vertScrollBg.offsetHeight - me._mscrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._mscrollarea_1.ggScrollPosY <= 0)) {
					me._mscrollarea_1.ggScrollPosY = Math.max(me._mscrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._mscrollarea_1__vertScrollFg.style.top = me._mscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._mscrollarea_1.ggScrollPosY / (me._mscrollarea_1__vertScrollBg.offsetHeight - me._mscrollarea_1__vertScrollFg.offsetHeight);
			me._mscrollarea_1__content.style.top = -(Math.round((me._mscrollarea_1.ggContentHeight * (1.0 - me._mscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._mscrollarea_1.ggContentTopOffset + 'px';
			me._mscrollarea_1.ggScrollPosYPercent = (me._mscrollarea_1__vertScrollFg.offsetTop / me._mscrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._mscrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._mscrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._mscrollarea_1.ggHPercentVisible);
					me._mscrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._mscrollarea_1.clientWidth - (me._mscrollarea_1.ggVertScrollVisible ? 1 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._mscrollarea_1.clientWidth - (me._mscrollarea_1.ggVertScrollVisible ? 1 : 0))) * me._mscrollarea_1.ggHPercentVisible);
					me._mscrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._mscrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._mscrollarea_1.ggVPercentVisible);
					me._mscrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._mscrollarea_1.clientHeight - (me._mscrollarea_1.ggHorScrollVisible ? 1 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._mscrollarea_1.clientHeight - (me._mscrollarea_1.ggHorScrollVisible ? 1 : 0))) * me._mscrollarea_1.ggVPercentVisible);
					me._mscrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._mscrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._mscrollarea_1.ggDragInertiaX *= 0.65;
				me._mscrollarea_1.ggDragInertiaY *= 0.65;
				me._mscrollarea_1.ggScrollByX(me._mscrollarea_1.ggDragInertiaX);
				me._mscrollarea_1.ggScrollByY(me._mscrollarea_1.ggDragInertiaY);
				if (Math.abs(me._mscrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._mscrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._mscrollarea_1__content.onmouseup = null;
			me._mscrollarea_1__content.onmousemove = null;
			me._mscrollarea_1__content.ontouchend = null;
			me._mscrollarea_1__content.ontouchmove = null;
			me._mscrollarea_1__content.onpointerup = null;
			me._mscrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._mscrollarea_1.ggIsDragging = false; }, 100);
		}
		me._mscrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._mscrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._mscrollarea_1.ggDragStartY) > 10) me._mscrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._mscrollarea_1.ggDragLastX) * me._mscrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._mscrollarea_1.ggDragLastY) * me._mscrollarea_1.ggVPercentVisible;
			me._mscrollarea_1.ggDragInertiaX = -diffX;
			me._mscrollarea_1.ggDragInertiaY = -diffY;
			me._mscrollarea_1.ggDragLastX = eventX;
			me._mscrollarea_1.ggDragLastY = eventY;
			me._mscrollarea_1.ggScrollByX(-diffX);
			me._mscrollarea_1.ggScrollByY(-diffY);
		}
		me._mscrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._mscrollarea_1.ggDragLastX = me._mscrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._mscrollarea_1.ggDragLastY = me._mscrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._mscrollarea_1__content.onmouseup = me._mscrollarea_1__content.mousetouchend;
			me._mscrollarea_1__content.ontouchend = me._mscrollarea_1__content.mousetouchend;
			me._mscrollarea_1__content.onmousemove = me._mscrollarea_1__content.mousetouchmove;
			me._mscrollarea_1__content.ontouchmove = me._mscrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._mscrollarea_1__content.onpointerup = me._mscrollarea_1__content.ontouchend;
				me._mscrollarea_1__content.onpointermove = me._mscrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._mscrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._mscrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._mscrollarea_1__content.mousetouchstart;
		}
		elHorScrollBg = me._mscrollarea_1__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1536px; height: 1px; background-color: rgba(255,255,255,0.490196); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._mscrollarea_1__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1536px; height: 1px; background-color: rgba(255,255,255,1); pointer-events: auto;');
		me._mscrollarea_1.ggScrollPosX = 0;
		me._mscrollarea_1.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._mscrollarea_1.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._mscrollarea_1.ggDragInertiaX *= 0.65;
					me._mscrollarea_1.ggScrollByX(me._mscrollarea_1.ggDragInertiaX);
					if (Math.abs(me._mscrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._mscrollarea_1.ggDragLastX;
				me._mscrollarea_1.ggDragInertiaX = diffX;
				me._mscrollarea_1.ggDragLastX = e.clientX;
				me._mscrollarea_1.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._mscrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._mscrollarea_1.ggDragInertiaX *= 0.65;
					me._mscrollarea_1.ggScrollByX(me._mscrollarea_1.ggDragInertiaX);
					if (Math.abs(me._mscrollarea_1.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._mscrollarea_1.ggDragLastX;
				me._mscrollarea_1.ggDragInertiaX = diffX;
				me._mscrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._mscrollarea_1.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._mscrollarea_1.ggScrollWidth;
			if (e.offsetX < me._mscrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._mscrollarea_1.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._mscrollarea_1__horScrollBg.getBoundingClientRect();
			var diffX = me._mscrollarea_1.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._mscrollarea_1.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._mscrollarea_1.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._mscrollarea_1.ggScrollByXSmooth(30 * me._mscrollarea_1.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._mscrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 1px; height: 1px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="m-Scrollarea 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 85%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0%);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mscrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mscrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._mscrollarea_1.ggScrollPosX / me._mscrollarea_1.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._mscrollarea_1__horScrollBg.style.visibility = 'inherit';
				me._mscrollarea_1__horScrollFg.style.visibility = 'inherit';
				me._mscrollarea_1.ggHorScrollVisible = true;
				if(me._mscrollarea_1.ggHorScrollVisible) {
					me._mscrollarea_1.ggAvailableHeight = me._mscrollarea_1.clientHeight - 1;
					if (me._mscrollarea_1.ggVertScrollVisible) {
						me._mscrollarea_1.ggAvailableWidth = me._mscrollarea_1.clientWidth - 1;
						me._mscrollarea_1.ggAvailableWidthWithScale = me._mscrollarea_1.getBoundingClientRect().width - me._mscrollarea_1__horScrollBg.getBoundingClientRect().height;
					} else {
						me._mscrollarea_1.ggAvailableWidth = me._mscrollarea_1.clientWidth;
						me._mscrollarea_1.ggAvailableWidthWithScale = me._mscrollarea_1.getBoundingClientRect().width;
					}
					me._mscrollarea_1__horScrollBg.style.width = me._mscrollarea_1.ggAvailableWidth + 'px';
					me._mscrollarea_1.ggHPercentVisible = contentWidth != 0 ? me._mscrollarea_1.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._mscrollarea_1.ggHPercentVisible > 1.0) me._mscrollarea_1.ggHPercentVisible = 1.0;
					me._mscrollarea_1.ggScrollWidth = Math.round(me._mscrollarea_1__horScrollBg.offsetWidth * me._mscrollarea_1.ggHPercentVisible);
					me._mscrollarea_1__horScrollFg.style.width = me._mscrollarea_1.ggScrollWidth + 'px';
					me._mscrollarea_1.ggScrollPosX = me._mscrollarea_1.ggScrollPosXPercent * me._mscrollarea_1.ggAvailableWidth;
					me._mscrollarea_1.ggScrollPosX = Math.min(me._mscrollarea_1.ggScrollPosX, me._mscrollarea_1__horScrollBg.offsetWidth - me._mscrollarea_1__horScrollFg.offsetWidth);
					me._mscrollarea_1__horScrollFg.style.left = me._mscrollarea_1.ggScrollPosX + 'px';
					if (me._mscrollarea_1.ggHPercentVisible < 1.0) {
						let percentScrolled = me._mscrollarea_1.ggScrollPosX / (me._mscrollarea_1__horScrollBg.offsetWidth - me._mscrollarea_1__horScrollFg.offsetWidth);
						me._mscrollarea_1__content.style.left = -(Math.round((me._mscrollarea_1.ggContentWidth * (1.0 - me._mscrollarea_1.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._mscrollarea_1.ggAvailableHeight = me._mscrollarea_1.clientHeight;
					me._mscrollarea_1.ggScrollPosX = 0;
					me._mscrollarea_1.ggScrollPosXPercent = 0.0;
					me._mscrollarea_1__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._mscrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._mscrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._mscrollarea_1);
					me._mscrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._m_18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m_18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="m-\uacf5\uac04\uc120\ud0dd \uc774\ubbf8\uc9c0-18A";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-width:420px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_18a.ggUpdatePosition=function (useTransition) {
		}
		el=me._m18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 160;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._m18a0.ggUpdating == true) return;
			me._m18a0.ggUpdating = true;
			var el=me._m18a0;
			var curNumRows = 0;
			curNumRows = me._m18a0.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._m18a0.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._m18a0.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._m18a0.getFilteredNodes(tourNodes, filter);
			me._m18a0.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._m18a0.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._m18a0.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._m18a0.ggWidth) + 'px';
				parameter.width=me._m18a0.ggWidth + 'px';
				parameter.height=me._m18a0.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_m18a0_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._m18a0.ggNodeCount = me._m18a0.ggNumFilterPassed;
			me._m18a0.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._m18a0.parentNode && me._m18a0.parentNode.classList.contains('ggskin_subelement') && me._m18a0.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._m18a0.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "광주1안";
		el.ggId="m-\uac00\uad6c\uc788\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 160px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m18a0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cON") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m18a0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m18a0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m18a0.style.transition='';
				if (me._m18a0.ggCurrentLogicStateVisible == 0) {
					me._m18a0.style.visibility=(Number(me._m18a0.style.opacity)>0||!me._m18a0.style.opacity)?'inherit':'hidden';
					me._m18a0.ggVisible=true;
				}
				else {
					me._m18a0.style.visibility=(Number(me._m18a0.style.opacity)>0||!me._m18a0.style.opacity)?'inherit':'hidden';
					me._m18a0.ggVisible=true;
				}
			}
		}
		me._m18a0.logicBlock_visible();
		me._m18a0.ggCurrentLogicStateVisible = -1;
		me._m18a0.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._m18a0.childNodes.length; i++) {
				var child=me._m18a0.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._m18a0.ggUpdatePosition=function (useTransition) {
			me._m18a0.ggUpdate();
		}
		me._m_18a.appendChild(me._m18a0);
		el=me._m18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 150;
		el.ggHeight = 160;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._m18a.ggUpdating == true) return;
			me._m18a.ggUpdating = true;
			var el=me._m18a;
			var curNumRows = 0;
			curNumRows = me._m18a.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._m18a.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._m18a.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._m18a.getFilteredNodes(tourNodes, filter);
			me._m18a.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._m18a.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._m18a.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._m18a.ggWidth) + 'px';
				parameter.width=me._m18a.ggWidth + 'px';
				parameter.height=me._m18a.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_m18a_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._m18a.ggNodeCount = me._m18a.ggNumFilterPassed;
			me._m18a.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._m18a.parentNode && me._m18a.parentNode.classList.contains('ggskin_subelement') && me._m18a.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._m18a.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "가구OFF";
		el.ggId="m-\uac00\uad6c\uc5c6\uc74c-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 160px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m18a.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\uac00\uad6cOFF") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m18a.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m18a.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m18a.style.transition='';
				if (me._m18a.ggCurrentLogicStateVisible == 0) {
					me._m18a.style.visibility=(Number(me._m18a.style.opacity)>0||!me._m18a.style.opacity)?'inherit':'hidden';
					me._m18a.ggVisible=true;
				}
				else {
					me._m18a.style.visibility="hidden";
					me._m18a.ggVisible=false;
				}
			}
		}
		me._m18a.logicBlock_visible();
		me._m18a.ggCurrentLogicStateVisible = -1;
		me._m18a.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._m18a.childNodes.length; i++) {
				var child=me._m18a.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._m18a.ggUpdatePosition=function (useTransition) {
			me._m18a.ggUpdate();
		}
		me._m_18a.appendChild(me._m18a);
		me._mscrollarea_1__content.appendChild(me._m_18a);
		me._m8.appendChild(me._mscrollarea_1);
		el=me._m9=document.createElement('div');
		el.ggId="m-\uacf5\uac04\uc120\ud0dd\uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m9.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_=document.createElement('div');
		el.ggId="m-\uacf5\uac04\uc120\ud0dd-\uacf5\uac04\uc774\ub3d9 \uc544\uc774\ucf58";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_4=document.createElement('div');
		el.ggId="m-\uacf5\uac04\uc120\ud0dd-\uacf5\uac04\uc774\ub3d9-Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_0=document.createElement('div');
		els=me._m_0__img=document.createElement('img');
		els.className='ggskin ggskin_m_0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgBrVLRsUExEN28ef/vvQreVYHo4OqAClwV0AEd0IESUAEqcDtwO0AFnOVcMpE1zDgzZ5JsNmdPNhH5AJy14b3/xTAE/8E1uCzL8pDK/RYbWzDjvABLsJVK/JK0izwQCMKX+GsiFpxzp2TcOoCqeh0fhCr0pCFvOmmDY86nYvTDEtFX8XyJzcWucwuu1Vn2TEQPz8E9OJI0NL4DZ6FYLaKBugc52DVENN5nzoqFbyjAk0RW9cOxwTEyOh6ETpqg3rkKM9mHdkKkCsRuyOlkEltMQPenKeeKghbrxnXk/hqe6wlzlD2rSsbELSvF1AIjidyaP5aJP+'+
			'AfKx/l2rcHnAEGykMyE+bZ6AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-\uacf5\uac04\uc120\ud0dd-\uacf5\uac04\uc774\ub3d9 \uc774\ubbf8\uc9c0";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((16px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_0.ggUpdatePosition=function (useTransition) {
		}
		me._mrectangle_4.appendChild(me._m_0);
		me._m_.appendChild(me._mrectangle_4);
		me._m9.appendChild(me._m_);
		el=me._mtext_6=document.createElement('div');
		els=me._mtext_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-Text 6";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._mtext_6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._mtext_6.ggUpdateText();
		player.addListener('changenode', function() {
			me._mtext_6.ggUpdateText();
		});
		el.appendChild(els);
		me._mtext_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mtext_6.ggUpdatePosition=function (useTransition) {
		}
		me._m9.appendChild(me._mtext_6);
		me._m8.appendChild(me._m9);
		me.divSkin.appendChild(me._m8);
		el=me._m=document.createElement('div');
		el.ggId="m-\uc544\ub798\ub2e8\ucd94\ub4e4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		hs+='position:absolute; bottom:-60px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m.style.transition='';
				if (me._m.ggCurrentLogicStateVisible == 0) {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
				else {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
			}
		}
		me._m.logicBlock_visible();
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._m0=document.createElement('div');
		el.ggId="m-\uc544\ub798\ub2e8\ucd94";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		hs+='display:flex; align-items:center; justify-content: space-between;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		el=me._m7=document.createElement('div');
		el.ggId="m-\uc228\uae30\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m7.onclick=function (e) {
			me._m18.ggVisible = !me._m18.ggVisible;
			var flag=me._m18.ggVisible;
			me._m18.style.transition='none';
			me._m18.style.visibility=((flag)&&(Number(me._m18.style.opacity)>0||!me._m18.style.opacity))?'inherit':'hidden';
			me._m11.ggVisible = !me._m11.ggVisible;
			var flag=me._m11.ggVisible;
			me._m11.style.transition='none';
			me._m11.style.visibility=((flag)&&(Number(me._m11.style.opacity)>0||!me._m11.style.opacity))?'inherit':'hidden';
			me._m1.ggVisible = !me._m1.ggVisible;
			var flag=me._m1.ggVisible;
			me._m1.style.transition='none';
			me._m1.style.visibility=((flag)&&(Number(me._m1.style.opacity)>0||!me._m1.style.opacity))?'inherit':'hidden';
			me._m5.ggVisible = !me._m5.ggVisible;
			var flag=me._m5.ggVisible;
			me._m5.style.transition='none';
			me._m5.style.visibility=((flag)&&(Number(me._m5.style.opacity)>0||!me._m5.style.opacity))?'inherit':'hidden';
			me._m3.ggVisible = !me._m3.ggVisible;
			var flag=me._m3.ggVisible;
			me._m3.style.transition='none';
			me._m3.style.visibility=((flag)&&(Number(me._m3.style.opacity)>0||!me._m3.style.opacity))?'inherit':'hidden';
		}
		me._m7.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_6=document.createElement('div');
		el.ggId="m-Rectangle 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUtb2ZmIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBhdGggZD0iTTE3Ljk0IDE3Ljk0QTEwLjA3IDEwLjA3IDAgMCAxIDEyIDIwYy03IDAtMTEtOC0xMS04YTE4LjQ1IDE4LjQ1IDAgMCAxIDUuMDYtNS45NE05LjkgNC4yNEE5LjEyIDkuMT'+
			'IgMCAwIDEgMTIgNGM3IDAgMTEgOCAxMSA4YTE4LjUgMTguNSAwIDAgMS0yLjE2IDMuMTltLTYuNzItMS4wN2EzIDMgMCAxIDEtNC4yNC00LjI0Ii8+CiA8bGluZSB4Mj0iMjMiIHkyPSIyMyIgeDE9IjEiIHkxPSIxIi8+Cjwvc3ZnPgo=';
		me._svg_7__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
		}
		me._mrectangle_6.appendChild(me._svg_7);
		me._m7.appendChild(me._mrectangle_6);
		me._m0.appendChild(me._m7);
		el=me._m5=document.createElement('div');
		el.ggId="m-\uc804\uccb4\ud654\uba74";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m5.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._m5.ggUpdatePosition=function (useTransition) {
		}
		el=me._m6=document.createElement('div');
		el.ggId="m-\uc804\uccb4\ud654\uba74\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leHRlcm5hbC1saW5rIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBhdGggZD0iTTE4IDEzdjZhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDYiLz4KIDxwb2x5bGluZSBwb2ludHM9IjE1IDMgMjEgMyAyMS'+
			'A5Ii8+CiA8bGluZSB4Mj0iMjEiIHkyPSIzIiB4MT0iMTAiIHkxPSIxNCIvPgo8L3N2Zz4K';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._m6.appendChild(me._svg_11);
		me._m5.appendChild(me._m6);
		me._m0.appendChild(me._m5);
		el=me._m3=document.createElement('div');
		el.ggId="m-\ud654\uba74\ud68c\uc804";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m3.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		el=me._m4=document.createElement('div');
		el.ggId="m-\ud654\uba74\ud68c\uc804\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1yZWZyZXNoLWN3IiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBvbHlsaW5lIHBvaW50cz0iMjMgNCAyMyAxMCAxNyAxMCIvPgogPHBvbHlsaW5lIHBvaW50cz0iMSAyMCAxIDE0IDcgMTQiLz4KIDxwYXRoIGQ9Ik0zLjUxIDlhOSA5IDAgMCAxID'+
			'E0Ljg1LTMuMzZMMjMgMTBNMSAxNGw0LjY0IDQuMzZBOSA5IDAgMCAwIDIwLjQ5IDE1Ii8+Cjwvc3ZnPgo=';
		me._svg_9__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._m4.appendChild(me._svg_9);
		me._m3.appendChild(me._m4);
		me._m0.appendChild(me._m3);
		el=me._m1=document.createElement('div');
		el.ggId="m-\ub9c1\ud06c\ubcf5\uc0ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 165px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.onclick=function (e) {
			"";
 let url = '';
  const textarea = document.createElement("textarea");
  document.body.appendChild(textarea);
  url = window.document.location.href;
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
			me._text_18.style.transition='none';
			me._text_18.style.visibility=(Number(me._text_18.style.opacity)>0||!me._text_18.style.opacity)?'inherit':'hidden';
			me._text_18.ggVisible=true;
		}
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m2=document.createElement('div');
		el.ggId="m-\ub9c1\ud06c\ubcf5\uc0ac\ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0IiBzdHJva2Utd2lkdGg9IjEuNSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1saW5rIiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9IiNmZmZmZmYiPgogPHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiLz4KIDxwYXRoIGQ9Ik0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLT'+
			'MgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MSIvPgo8L3N2Zz4K';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._m2.appendChild(me._svg_8);
		me._m1.appendChild(me._m2);
		el=me._text_18=document.createElement('div');
		els=me._text_18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 18";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='left : -93px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 84px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_18.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\uc0ac\uc644\ub8cc", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_18.ggUpdateText();
		el.appendChild(els);
		me._text_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_18.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me._text_18);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -1397px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			me._text_18.style.transition='none';
			me._text_18.style.visibility='hidden';
			me._text_18.ggVisible=false;
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me._timer_1);
		me._m0.appendChild(me._m1);
		me._m.appendChild(me._m0);
		me.divSkin.appendChild(me._m);
		el=me.__=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 600px;';
		hs+='left : calc(50% - ((800px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 800px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__.ggCurrentLogicStateSize = newLogicStateSize;
				me.__.style.transition='width 0s, height 0s';
				if (me.__.ggCurrentLogicStateSize == 0) {
					me.__.style.width='320px';
					me.__.style.height='540px';
					me.__.style.left = 'calc(50% - (320px / 2))';
					me.__.style.top = 'calc(50% - (540px / 2))';
					skin.updateSize(me.__);
				}
				else {
					me.__.style.width='800px';
					me.__.style.height='600px';
					me.__.style.left = 'calc(50% - (800px / 2))';
					me.__.style.top = 'calc(50% - (600px / 2))';
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_size();
		me.__.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_button') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__.style.transition='width 0s, height 0s';
				if (me.__.ggCurrentLogicStateVisible == 0) {
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				else {
					me.__.style.visibility="hidden";
					me.__.ggVisible=false;
				}
			}
		}
		me.__.logicBlock_visible();
		me.__.onclick=function (e) {
			player.setVariableValue('vis_info_button', false);
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background-color: rgba(0, 0, 0, 0.2); \/* \ubc18\ud22c\uba85 \ubc30\uacbd\uc0c9 *\/ backdrop-filter: blur(10px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.onclick=function (e) {
			me.__23.style.transition='none';
			me.__23.style.visibility='hidden';
			me.__23.ggVisible=false;
			if (
				(
					((player.getViewerSize().width <= 540))
				)
			) {
				me._m18.style.transition='none';
				me._m18.style.visibility=(Number(me._m18.style.opacity)>0||!me._m18.style.opacity)?'inherit':'hidden';
				me._m18.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 540))
				)
			) {
				me._m11.style.transition='none';
				me._m11.style.visibility=(Number(me._m11.style.opacity)>0||!me._m11.style.opacity)?'inherit':'hidden';
				me._m11.ggVisible=true;
			}
			if (
				(
					((player.getViewerSize().width <= 540))
				)
			) {
				me._m.style.transition='none';
				me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
				me._m.ggVisible=true;
			}
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8-6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__6.style.transition='left 0s, top 0s';
				if (me.__6.ggCurrentLogicStatePosition == 0) {
					me.__6.style.left = 'calc(50% - (40px / 2))';
					me.__6.style.top='60px';
				}
				else {
					me.__6.style.left='calc(50% - ((40px + 0px) / 2) + 0px)';
					me.__6.style.top='80px';
				}
			}
		}
		me.__6.logicBlock_position();
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__7=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8-7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.8);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_21=document.createElement('div');
		els=me._text_21__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 21";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_21.ggUpdateText=function() {
			var params = [];
			var hs = player._("i", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_21.ggUpdateText();
		el.appendChild(els);
		me._text_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_21.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._text_21);
		me.__6.appendChild(me.__7);
		el=me.__0=document.createElement('div');
		els=me.__0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 \uc81c\ubaa9";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ub0b4\uba58\ud2b8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__0.ggUpdateText();
		el.appendChild(els);
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__0);
		me.__1.appendChild(me.__6);
		el=me.__3=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__5=document.createElement('div');
		els=me.__5__img=document.createElement('img');
		els.className='ggskin ggskin__5';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACXSURBVHgBhVABEYAgDBwmsIFGMIoRjEADjWADzwRGMII2IAIR5nY3dSDg3z07/n6DPSCiE9aQAOkt0RNtJVpLXFJGKjuRBzV3J09mTJH5EP3QYocvrGiz3J28EEyxqmGR6j9G1TBiiB5ykP+jmlqXjE4ZGVvO/GxeSii5eSohFqfc5lFCHfxtrhLaDB0Da8aYFfIpsee8AJNzGlBx8CofAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8-5";
		el.ggDx=2;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 13px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me.__5);
		me.__3.appendChild(me.__4);
		me.__1.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		el.ggId="\uc548\ub0b4\uba58\ud2b8-2";
		el.ggDx=0;
		el.ggDy=15;
		el.ggParameter={ rx:0,ry:0,a:90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 15px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__2.style.transition='left 0s, top 0s';
				if (me.__2.ggCurrentLogicStatePosition == 0) {
					me.__2.style.left = 'calc(50% - (80% / 2) + (0px / 2) + -85px)';
					me.__2.style.top = 'calc(50% - (80% / 2))';
				}
				else {
					me.__2.style.left='calc(50% - ((80% + 0px) / 2) + 0px)';
					me.__2.style.top='calc(50% - ((80% + 0px) / 2) + 15px)';
				}
			}
		}
		me.__2.logicBlock_position();
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me.__2);
		el=me.__pc=document.createElement('div');
		els=me.__pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 - pc";
		el.ggDx=80;
		el.ggDy=70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(0px, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 80px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 70px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break: keep-all; line-height:50px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ud55c \uc138\ub300 VR\uc785\ub2c8\ub2e4., \n* \ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c\ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc0c9\uc0c1 \ubc0f \uc7ac\uc9c8\uc774 \uc2e4\uc81c \uc2dc\uacf5\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5c8\uace0, \uc2e4\uc81c \uc2dc\uacf5 \uc2dc \uc124\uce58\ub418\uc9c0 \uc54a\ub294 \uc804\uc2dc\ud488(\uac00\uad6c, \uc2e4\ub0b4\uc7a5\uc2dd\ud488 \ub4f1)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uae09\uc548\ub0b4\ubb38\uacfc \ub0b4\ubd80\ub9c8\uac10\uc7ac \ub0b4\uc5ed\uc744 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__pc.ggUpdateText();
		el.appendChild(els);
		me.__pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__pc.style.transition='color 0s';
				if (me.__pc.ggCurrentLogicStateVisible == 0) {
					me.__pc.style.visibility=(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity)?'inherit':'hidden';
					me.__pc.ggVisible=true;
				}
				else {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
			}
		}
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__pc.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__pc.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__pc__text.style.transition='color 0s';
				if (me.__pc.ggCurrentLogicStateTextColor == 0) {
					me.__pc.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__pc.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__pc.logicBlock_textcolor();
		me.__pc.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me.__pc);
		el=me.__m=document.createElement('div');
		els=me.__m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc548\ub0b4\uba58\ud2b8 - m";
		el.ggDx=30;
		el.ggDy=60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'translate(0px, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,0.901961);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 30px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 60px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='word-break: keep-all; line-height:30px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid rgba(0,0,0,0);';
		hs+='cursor : default;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__m.ggUpdateText=function() {
			var params = [];
			var hs = player._("* \ubcf8 \ucf58\ud150\uce20\ub294 PC \uc0ac\uc6a9\uc744 \uad8c\uc7a5\ud569\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac00\uc0c1\uc73c\ub85c \uad6c\ud604\ud55c \uc138\ub300 VR\uc774\uba70, \ucf58\ud150\uce20 \ud2b9\uc131\uc0c1 \uc65c\uace1\ub41c \uc774\ubbf8\uc9c0\ub85c \uc778\ud574 \uc2e4\uc81c\uc640 \ub2ec\ub77c\ubcf4\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc0c9\uc0c1 \ubc0f \uc7ac\uc9c8\uc774 \uc2e4\uc81c \uc2dc\uacf5\uacfc\ub294 \ucc28\uc774\uac00 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n* \ubcf8 \ucf58\ud150\uce20\ub294 \uc720\uc0c1\uc635\uc158 \ud488\ubaa9\uc774 \uc801\uc6a9\ub418\uc5c8\uace0, \uc2e4\uc81c \uc2dc\uacf5 \uc2dc \uc124\uce58\ub418\uc9c0 \uc54a\ub294 \uc804\uc2dc\ud488(\uac00\uad6c, \uc2e4\ub0b4\uc7a5\uc2dd\ud488 \ub4f1)\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \uacf5\uae09\uc548\ub0b4\ubb38\uacfc \ub0b4\ubd80\ub9c8\uac10\uc7ac \ub0b4\uc5ed\uc744 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__m.ggUpdateText();
		el.appendChild(els);
		me.__m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__m.style.transition='color 0s';
				if (me.__m.ggCurrentLogicStateVisible == 0) {
					me.__m.style.visibility=(Number(me.__m.style.opacity)>0||!me.__m.style.opacity)?'inherit':'hidden';
					me.__m.ggVisible=true;
				}
				else {
					me.__m.style.visibility="hidden";
					me.__m.ggVisible=false;
				}
			}
		}
		me.__m.logicBlock_visible();
		me.__m.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("opening") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__m.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__m.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__m__text.style.transition='color 0s';
				if (me.__m.ggCurrentLogicStateTextColor == 0) {
					me.__m.style.color="rgba(34,34,34,1)";
				}
				else {
					me.__m.style.color="rgba(255,255,255,0.901961)";
				}
			}
		}
		me.__m.logicBlock_textcolor();
		me.__m.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me.__m);
		me.__.appendChild(me.__1);
		me.divSkin.appendChild(me.__);
		me.__41.logicBlock_size();
		me.__41.logicBlock_visible();
		me.__77.logicBlock_size();
		me._svg_6.logicBlock_angle();
		me.__71.logicBlock_visible();
		me.__73.logicBlock_text();
		me.__72.logicBlock_text();
		me.__43.logicBlock_visible();
		me._rectangle_53.logicBlock_backgroundcolor();
		me.__69.logicBlock_position();
		me._rectangle_52.logicBlock_backgroundcolor();
		me.__63.logicBlock_position();
		me._rectangle_51.logicBlock_backgroundcolor();
		me.__57.logicBlock_position();
		me._rectangle_50.logicBlock_backgroundcolor();
		me.__51.logicBlock_position();
		me._text_20.logicBlock_visible();
		me._rectangle_5.logicBlock_backgroundcolor();
		me.__46.logicBlock_position();
		me.__31.logicBlock_visible();
		me._timer_1pc.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__23.logicBlock_size();
		me.__23.logicBlock_visible();
		me.__24.logicBlock_position();
		me._map_3.ggMarkerInstances=[];
		me._map_3.ggLastNodeId=null;
		me._map_3.ggSimpleFloorplanMarkerArray=[];
		me._map_3.ggFloorplanWidth=0;
		me._map_3.ggFloorplanHeight=0;
		me._map_3__mapdiv=document.createElement('div');
		me._map_3__mapdiv.className='ggskin ggskin_map';
		me._map_3.appendChild(me._map_3__mapdiv);
		me._map_3__img=document.createElement('img');
		me._map_3__img.className='ggskin ggskin_map';
		me._map_3__mapdiv.appendChild(me._map_3__img);
		me._map_3.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_3.ggRadar.update=function() {
			var radar=me._map_3.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_3.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_3.ggFilteredIds.length > 0 && me._map_3.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_3.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_3.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_3__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_3__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_3.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_3__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_3.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_3.clientWidth;
			var mapHeight = me._map_3.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_3.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_3__img.setAttribute('src', imageFilename);
		me._map_3__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_3.ggFloorplanWidth + 'px;height:' + me._map_3.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_3__img.setAttribute('style','width:' + me._map_3.ggFloorplanWidth + 'px;height:' + me._map_3.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_3.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_3.clientWidth / me._map_3.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_3.ggFloorplanHeight = me._map_3.clientHeight;
				me._map_3.ggFloorplanWidth = me._map_3.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_3.ggFloorplanWidth = me._map_3.clientWidth;
				me._map_3.ggFloorplanHeight = me._map_3.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_3.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_3.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_3.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_3.ggPermeableMap = true;
			} else {
				me._map_3.ggPermeableMap = false;
			}
			me._map_3.ggCalculateFloorplanSize(mapDetails);
			me._map_3.ggShowSimpleFloorplan(mapDetails);
			me._map_3.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_3.ggMapNotLoaded = false;
		}
		me._map_3.ggClearMap=function() {
			me._map_3.ggClearMapMarkers();
			me._map_3.ggMapNotLoaded = true;
		}
		me._map_3.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_3.ggMapId = mapId;
			if (!me._map_3.ggMapNotLoaded) {
				me._map_3.ggClearMap();
				me._map_3.ggInitMap();
				me._map_3.ggInitMapMarkers();
			}
		}
		me._map_3.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_3.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_3.ggMapId);
					var xPos = (me._map_3.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_3.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_3.ggHMarkerAnchorOffset;
					yPos -= me._map_3.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_3.style['z-index'] + 2;
				}
			}
		}
		me._map_3.ggInitMapMarkers=function() {
			me._map_3.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_3.ggFilteredIds = [];
			if (me._map_3.ggFilter != '') {
				var filter = me._map_3.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_3.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_3.ggFilteredIds.length > 0) ids = me._map_3.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_3.ggMapId);
				if (coords.length>=2) {
					me._map_3.ggHMarkerAnchorOffset = 12;
					me._map_3.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_3.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_3.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_3__mapdiv.appendChild(marker);
				}
			}
			me._map_3.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_3);
		}
		me._map_3.ggClearMapMarkers=function() {
			for (id in me._map_3.ggSimpleFloorplanMarkerArray) {
				if (me._map_3.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_3__mapdiv.removeChild(me._map_3.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_3.ggMarkerInstances=[];
			me._map_3.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_3.logicBlock_visible();
		me._map_4.ggMarkerInstances=[];
		me._map_4.ggLastNodeId=null;
		me._map_4.ggSimpleFloorplanMarkerArray=[];
		me._map_4.ggFloorplanWidth=0;
		me._map_4.ggFloorplanHeight=0;
		me._map_4__mapdiv=document.createElement('div');
		me._map_4__mapdiv.className='ggskin ggskin_map';
		me._map_4.appendChild(me._map_4__mapdiv);
		me._map_4__img=document.createElement('img');
		me._map_4__img.className='ggskin ggskin_map';
		me._map_4__mapdiv.appendChild(me._map_4__img);
		me._map_4.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_4.ggRadar.update=function() {
			var radar=me._map_4.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_4.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_4.ggFilteredIds.length > 0 && me._map_4.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_4.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_4.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_4__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_4__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_4.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_4__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_4.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_4.clientWidth;
			var mapHeight = me._map_4.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_4.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_4__img.setAttribute('src', imageFilename);
		me._map_4__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_4.ggFloorplanWidth + 'px;height:' + me._map_4.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_4__img.setAttribute('style','width:' + me._map_4.ggFloorplanWidth + 'px;height:' + me._map_4.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_4.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_4.clientWidth / me._map_4.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_4.ggFloorplanHeight = me._map_4.clientHeight;
				me._map_4.ggFloorplanWidth = me._map_4.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_4.ggFloorplanWidth = me._map_4.clientWidth;
				me._map_4.ggFloorplanHeight = me._map_4.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_4.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_4.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_4.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_4.ggPermeableMap = true;
			} else {
				me._map_4.ggPermeableMap = false;
			}
			me._map_4.ggCalculateFloorplanSize(mapDetails);
			me._map_4.ggShowSimpleFloorplan(mapDetails);
			me._map_4.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_4.ggMapNotLoaded = false;
		}
		me._map_4.ggClearMap=function() {
			me._map_4.ggClearMapMarkers();
			me._map_4.ggMapNotLoaded = true;
		}
		me._map_4.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_4.ggMapId = mapId;
			if (!me._map_4.ggMapNotLoaded) {
				me._map_4.ggClearMap();
				me._map_4.ggInitMap();
				me._map_4.ggInitMapMarkers();
			}
		}
		me._map_4.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_4.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_4.ggMapId);
					var xPos = (me._map_4.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_4.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_4.ggHMarkerAnchorOffset;
					yPos -= me._map_4.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_4.style['z-index'] + 2;
				}
			}
		}
		me._map_4.ggInitMapMarkers=function() {
			me._map_4.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_4.ggFilteredIds = [];
			if (me._map_4.ggFilter != '') {
				var filter = me._map_4.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_4.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_4.ggFilteredIds.length > 0) ids = me._map_4.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_4.ggMapId);
				if (coords.length>=2) {
					me._map_4.ggHMarkerAnchorOffset = 12;
					me._map_4.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_4.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_4.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_4__mapdiv.appendChild(marker);
				}
			}
			me._map_4.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_4);
		}
		me._map_4.ggClearMapMarkers=function() {
			for (id in me._map_4.ggSimpleFloorplanMarkerArray) {
				if (me._map_4.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_4__mapdiv.removeChild(me._map_4.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_4.ggMarkerInstances=[];
			me._map_4.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_4.logicBlock_visible();
		me.__12.logicBlock_visible();
		me.__18.logicBlock_visible();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2.logicBlock_visible();
		me.__13.logicBlock_visible();
		me.__18a2.logicBlock_visible();
		me.__18a0.logicBlock_visible();
		me.__11.logicBlock_position();
		me.__11.logicBlock_scaling();
		me._image_90.logicBlock_visible();
		me._image_9.logicBlock_visible();
		me._image_100.logicBlock_visible();
		me._image_10.logicBlock_visible();
		me._m18.logicBlock_size();
		me._m18.logicBlock_visible();
		me._m25.logicBlock_position();
		me._svg_5.logicBlock_angle();
		me.__10.logicBlock_visible();
		me._m24.logicBlock_text();
		me._m23.logicBlock_text();
		me.__9.logicBlock_visible();
		me._m20.logicBlock_visible();
		me._mmap_1.ggMarkerInstances=[];
		me._mmap_1.ggLastNodeId=null;
		me._mmap_1.ggSimpleFloorplanMarkerArray=[];
		me._mmap_1.ggFloorplanWidth=0;
		me._mmap_1.ggFloorplanHeight=0;
		me._mmap_1__mapdiv=document.createElement('div');
		me._mmap_1__mapdiv.className='ggskin ggskin_map';
		me._mmap_1.appendChild(me._mmap_1__mapdiv);
		me._mmap_1__img=document.createElement('img');
		me._mmap_1__img.className='ggskin ggskin_map';
		me._mmap_1__mapdiv.appendChild(me._mmap_1__img);
		me._mmap_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._mmap_1.ggRadar.update=function() {
			var radar=me._mmap_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._mmap_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._mmap_1.ggFilteredIds.length > 0 && me._mmap_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._mmap_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._mmap_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._mmap_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',40);
				radar.radarElement.setAttributeNS(null,'height',40);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 40 40');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 20 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 20 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 20 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 20 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 20;
				arcY1 += 20;
				arcX2 += 20;
				arcY2 += 20;
				var radarPathString = 'M20,20 L' + arcX1 + ',' + arcY1 + ' A 20 20 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._mmap_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 20;
				var radarYPos = activeMarker.radarYPos - 20;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._mmap_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._mmap_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._mmap_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._mmap_1.clientWidth;
			var mapHeight = me._mmap_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._mmap_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._mmap_1__img.setAttribute('src', imageFilename);
		me._mmap_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._mmap_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._mmap_1.ggFloorplanHeight / 2 + 'px;width:' + me._mmap_1.ggFloorplanWidth + 'px;height:' + me._mmap_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._mmap_1__img.setAttribute('style','width:' + me._mmap_1.ggFloorplanWidth + 'px;height:' + me._mmap_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._mmap_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._mmap_1.clientWidth / me._mmap_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._mmap_1.ggFloorplanHeight = me._mmap_1.clientHeight;
				me._mmap_1.ggFloorplanWidth = me._mmap_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._mmap_1.ggFloorplanWidth = me._mmap_1.clientWidth;
				me._mmap_1.ggFloorplanHeight = me._mmap_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._mmap_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._mmap_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._mmap_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._mmap_1.ggPermeableMap = true;
			} else {
				me._mmap_1.ggPermeableMap = false;
			}
			me._mmap_1.ggCalculateFloorplanSize(mapDetails);
			me._mmap_1.ggShowSimpleFloorplan(mapDetails);
			me._mmap_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._mmap_1.ggMapNotLoaded = false;
		}
		me._mmap_1.ggClearMap=function() {
			me._mmap_1.ggClearMapMarkers();
			me._mmap_1.ggMapNotLoaded = true;
		}
		me._mmap_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._mmap_1.ggMapId = mapId;
			if (!me._mmap_1.ggMapNotLoaded) {
				me._mmap_1.ggClearMap();
				me._mmap_1.ggInitMap();
				me._mmap_1.ggInitMapMarkers();
			}
		}
		me._mmap_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._mmap_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._mmap_1.ggMapId);
					var xPos = (me._mmap_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._mmap_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._mmap_1.ggHMarkerAnchorOffset;
					yPos -= me._mmap_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._mmap_1.style['z-index'] + 2;
				}
			}
		}
		me._mmap_1.ggInitMapMarkers=function() {
			me._mmap_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._mmap_1.ggFilteredIds = [];
			if (me._mmap_1.ggFilter != '') {
				var filter = me._mmap_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._mmap_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._mmap_1.ggFilteredIds.length > 0) ids = me._mmap_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._mmap_1.ggMapId);
				if (coords.length>=2) {
					me._mmap_1.ggHMarkerAnchorOffset = 12;
					me._mmap_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._mmap_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._mmap_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._mmap_1__mapdiv.appendChild(marker);
				}
			}
			me._mmap_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._mmap_1);
		}
		me._mmap_1.ggClearMapMarkers=function() {
			for (id in me._mmap_1.ggSimpleFloorplanMarkerArray) {
				if (me._mmap_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._mmap_1__mapdiv.removeChild(me._mmap_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._mmap_1.ggMarkerInstances=[];
			me._mmap_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._mmap_1.logicBlock_visible();
		me._mmap_2.ggMarkerInstances=[];
		me._mmap_2.ggLastNodeId=null;
		me._mmap_2.ggSimpleFloorplanMarkerArray=[];
		me._mmap_2.ggFloorplanWidth=0;
		me._mmap_2.ggFloorplanHeight=0;
		me._mmap_2__mapdiv=document.createElement('div');
		me._mmap_2__mapdiv.className='ggskin ggskin_map';
		me._mmap_2.appendChild(me._mmap_2__mapdiv);
		me._mmap_2__img=document.createElement('img');
		me._mmap_2__img.className='ggskin ggskin_map';
		me._mmap_2__mapdiv.appendChild(me._mmap_2__img);
		me._mmap_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._mmap_2.ggRadar.update=function() {
			var radar=me._mmap_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._mmap_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._mmap_2.ggFilteredIds.length > 0 && me._mmap_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._mmap_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._mmap_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._mmap_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',40);
				radar.radarElement.setAttributeNS(null,'height',40);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 40 40');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 20 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 20 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 20 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 20 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 20;
				arcY1 += 20;
				arcX2 += 20;
				arcY2 += 20;
				var radarPathString = 'M20,20 L' + arcX1 + ',' + arcY1 + ' A 20 20 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._mmap_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 20;
				var radarYPos = activeMarker.radarYPos - 20;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._mmap_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._mmap_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._mmap_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._mmap_2.clientWidth;
			var mapHeight = me._mmap_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._mmap_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._mmap_2__img.setAttribute('src', imageFilename);
		me._mmap_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._mmap_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._mmap_2.ggFloorplanHeight / 2 + 'px;width:' + me._mmap_2.ggFloorplanWidth + 'px;height:' + me._mmap_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._mmap_2__img.setAttribute('style','width:' + me._mmap_2.ggFloorplanWidth + 'px;height:' + me._mmap_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._mmap_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._mmap_2.clientWidth / me._mmap_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._mmap_2.ggFloorplanHeight = me._mmap_2.clientHeight;
				me._mmap_2.ggFloorplanWidth = me._mmap_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._mmap_2.ggFloorplanWidth = me._mmap_2.clientWidth;
				me._mmap_2.ggFloorplanHeight = me._mmap_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._mmap_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._mmap_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._mmap_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._mmap_2.ggPermeableMap = true;
			} else {
				me._mmap_2.ggPermeableMap = false;
			}
			me._mmap_2.ggCalculateFloorplanSize(mapDetails);
			me._mmap_2.ggShowSimpleFloorplan(mapDetails);
			me._mmap_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._mmap_2.ggMapNotLoaded = false;
		}
		me._mmap_2.ggClearMap=function() {
			me._mmap_2.ggClearMapMarkers();
			me._mmap_2.ggMapNotLoaded = true;
		}
		me._mmap_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._mmap_2.ggMapId = mapId;
			if (!me._mmap_2.ggMapNotLoaded) {
				me._mmap_2.ggClearMap();
				me._mmap_2.ggInitMap();
				me._mmap_2.ggInitMapMarkers();
			}
		}
		me._mmap_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._mmap_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._mmap_2.ggMapId);
					var xPos = (me._mmap_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._mmap_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._mmap_2.ggHMarkerAnchorOffset;
					yPos -= me._mmap_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._mmap_2.style['z-index'] + 2;
				}
			}
		}
		me._mmap_2.ggInitMapMarkers=function() {
			me._mmap_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._mmap_2.ggFilteredIds = [];
			if (me._mmap_2.ggFilter != '') {
				var filter = me._mmap_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._mmap_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._mmap_2.ggFilteredIds.length > 0) ids = me._mmap_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._mmap_2.ggMapId);
				if (coords.length>=2) {
					me._mmap_2.ggHMarkerAnchorOffset = 12;
					me._mmap_2.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._mmap_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._mmap_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._mmap_2__mapdiv.appendChild(marker);
				}
			}
			me._mmap_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._mmap_2);
		}
		me._mmap_2.ggClearMapMarkers=function() {
			for (id in me._mmap_2.ggSimpleFloorplanMarkerArray) {
				if (me._mmap_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._mmap_2__mapdiv.removeChild(me._mmap_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._mmap_2.ggMarkerInstances=[];
			me._mmap_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._mmap_2.logicBlock_visible();
		me._svg_4.logicBlock_angle();
		me._rectangle_10.logicBlock_bordercolor();
		me._m11.logicBlock_size();
		me._m11.logicBlock_visible();
		me._image_19.logicBlock_visible();
		me._image_141.logicBlock_visible();
		me._text_11.logicBlock_textcolor();
		me._image_16.logicBlock_visible();
		me._image_161.logicBlock_visible();
		me._text_13.logicBlock_textcolor();
		me._image_17.logicBlock_visible();
		me._image_171.logicBlock_visible();
		me._text_14.logicBlock_textcolor();
		me._text_20m.logicBlock_visible();
		me._text_20md.logicBlock_visible();
		me._rectangle_12.logicBlock_backgroundcolor();
		me._text_16.logicBlock_textcolor();
		me._svg_3.logicBlock_angle();
		me._m8.logicBlock_visible();
		me._m18a0.logicBlock_visible();
		me._m18a.logicBlock_visible();
		me._m.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me.__.logicBlock_size();
		me.__.logicBlock_visible();
		me.__6.logicBlock_position();
		me.__2.logicBlock_position();
		me.__pc.logicBlock_visible();
		me.__pc.logicBlock_textcolor();
		me.__m.logicBlock_visible();
		me.__m.logicBlock_textcolor();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			me.__73.logicBlock_text();
			me.__72.logicBlock_text();
			me._image_90.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me._image_100.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me._m24.logicBlock_text();
			me._m23.logicBlock_text();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__41.logicBlock_size();
			me.__77.logicBlock_size();
			me._svg_6.logicBlock_angle();
			me.__71.logicBlock_visible();
			me.__73.logicBlock_text();
			me.__72.logicBlock_text();
			me.__43.logicBlock_visible();
			me._rectangle_53.logicBlock_backgroundcolor();
			me.__69.logicBlock_position();
			me._rectangle_52.logicBlock_backgroundcolor();
			me.__63.logicBlock_position();
			me._rectangle_51.logicBlock_backgroundcolor();
			me.__57.logicBlock_position();
			me._rectangle_50.logicBlock_backgroundcolor();
			me.__51.logicBlock_position();
			me._text_20.logicBlock_visible();
			me._rectangle_5.logicBlock_backgroundcolor();
			me.__46.logicBlock_position();
			me._timer_1pc.logicBlock_visible();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me._map_3.logicBlock_visible();
			for (var i=0; i < me._map_3.ggMarkerInstances.length; i++) {
				me._map_3.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_3.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_3.ggCalculateFloorplanSize(mapDetails);
				me._map_3.ggShowSimpleFloorplan(mapDetails);
				me._map_3.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_3.ggRadar) me._map_3.ggRadar.update();
			if (me._map_3.ggLastNodeId) {
				var lastActiveMarker = me._map_3.ggSimpleFloorplanMarkerArray[me._map_3.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_3.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_3.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_3.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_3.ggChangeMap(mapId);
					}
				}
			}
			me._map_3.ggLastNodeId = id;
			me._map_3.ggRadar.update();
			me._map_4.logicBlock_visible();
			for (var i=0; i < me._map_4.ggMarkerInstances.length; i++) {
				me._map_4.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_4.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_4.ggCalculateFloorplanSize(mapDetails);
				me._map_4.ggShowSimpleFloorplan(mapDetails);
				me._map_4.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_4.ggRadar) me._map_4.ggRadar.update();
			if (me._map_4.ggLastNodeId) {
				var lastActiveMarker = me._map_4.ggSimpleFloorplanMarkerArray[me._map_4.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_4.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_4.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_4.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_4.ggChangeMap(mapId);
					}
				}
			}
			me._map_4.ggLastNodeId = id;
			me._map_4.ggRadar.update();
			me.__18.logicBlock_visible();
			me._map_1.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._map_2.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me.__13.logicBlock_visible();
			me.__18a2.logicBlock_visible();
			me.__18a2.ggUpdateConditionNodeChange();
			me.__18a0.logicBlock_visible();
			me.__18a0.ggUpdateConditionNodeChange();
			me._image_90.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me._image_100.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me._m18.logicBlock_size();
			me._m25.logicBlock_position();
			me._svg_5.logicBlock_angle();
			me.__10.logicBlock_visible();
			me._m24.logicBlock_text();
			me._m23.logicBlock_text();
			me.__9.logicBlock_visible();
			me._m20.logicBlock_visible();
			me._mmap_1.logicBlock_visible();
			for (var i=0; i < me._mmap_1.ggMarkerInstances.length; i++) {
				me._mmap_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._mmap_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mmap_1.ggCalculateFloorplanSize(mapDetails);
				me._mmap_1.ggShowSimpleFloorplan(mapDetails);
				me._mmap_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._mmap_1.ggRadar) me._mmap_1.ggRadar.update();
			if (me._mmap_1.ggLastNodeId) {
				var lastActiveMarker = me._mmap_1.ggSimpleFloorplanMarkerArray[me._mmap_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._mmap_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._mmap_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._mmap_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._mmap_1.ggChangeMap(mapId);
					}
				}
			}
			me._mmap_1.ggLastNodeId = id;
			me._mmap_1.ggRadar.update();
			me._mmap_2.logicBlock_visible();
			for (var i=0; i < me._mmap_2.ggMarkerInstances.length; i++) {
				me._mmap_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._mmap_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mmap_2.ggCalculateFloorplanSize(mapDetails);
				me._mmap_2.ggShowSimpleFloorplan(mapDetails);
				me._mmap_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._mmap_2.ggRadar) me._mmap_2.ggRadar.update();
			if (me._mmap_2.ggLastNodeId) {
				var lastActiveMarker = me._mmap_2.ggSimpleFloorplanMarkerArray[me._mmap_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._mmap_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._mmap_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._mmap_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._mmap_2.ggChangeMap(mapId);
					}
				}
			}
			me._mmap_2.ggLastNodeId = id;
			me._mmap_2.ggRadar.update();
			me._svg_4.logicBlock_angle();
			me._rectangle_10.logicBlock_bordercolor();
			me._m11.logicBlock_size();
			me._m11.logicBlock_visible();
			me._image_19.logicBlock_visible();
			me._image_141.logicBlock_visible();
			me._text_11.logicBlock_textcolor();
			me._image_16.logicBlock_visible();
			me._image_161.logicBlock_visible();
			me._text_13.logicBlock_textcolor();
			me._image_17.logicBlock_visible();
			me._image_171.logicBlock_visible();
			me._text_14.logicBlock_textcolor();
			me._text_20m.logicBlock_visible();
			me._text_20md.logicBlock_visible();
			me._rectangle_12.logicBlock_backgroundcolor();
			me._text_16.logicBlock_textcolor();
			me._svg_3.logicBlock_angle();
			me._m8.logicBlock_visible();
			me._m18a0.logicBlock_visible();
			me._m18a0.ggUpdateConditionNodeChange();
			me._m18a.logicBlock_visible();
			me._m18a.ggUpdateConditionNodeChange();
			me._timer_1.logicBlock_visible();
			me.__.logicBlock_visible();
			me.__pc.logicBlock_textcolor();
			me.__m.logicBlock_textcolor();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__41.logicBlock_size();
			me.__77.logicBlock_size();
			me._svg_6.logicBlock_angle();
			me.__71.logicBlock_visible();
			me.__73.logicBlock_text();
			me.__72.logicBlock_text();
			me.__43.logicBlock_visible();
			me._rectangle_53.logicBlock_backgroundcolor();
			me.__69.logicBlock_position();
			me._rectangle_52.logicBlock_backgroundcolor();
			me.__63.logicBlock_position();
			me._rectangle_51.logicBlock_backgroundcolor();
			me.__57.logicBlock_position();
			me._rectangle_50.logicBlock_backgroundcolor();
			me.__51.logicBlock_position();
			me._text_20.logicBlock_visible();
			me._rectangle_5.logicBlock_backgroundcolor();
			me.__46.logicBlock_position();
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			for (var i=0; i < me._map_3.ggMarkerInstances.length; i++) {
				me._map_3.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_3.ggClearMap();
			me._map_3.ggInitMap(false);
			me._map_3.ggInitMapMarkers(true);
			for (var i=0; i < me._map_4.ggMarkerInstances.length; i++) {
				me._map_4.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_4.ggVisible) {
				me._map_4.ggClearMap();
				me._map_4.ggInitMap(false);
				me._map_4.ggInitMapMarkers(true);
			}
			me.__18.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_2.ggVisible) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap(false);
				me._map_2.ggInitMapMarkers(true);
			}
			me.__13.logicBlock_visible();
			me._scrollarea_1.ggUpdatePosition();
			me._image_90.logicBlock_visible();
			me._image_9.logicBlock_visible();
			me._image_100.logicBlock_visible();
			me._image_10.logicBlock_visible();
			me._m18.logicBlock_size();
			me._m25.logicBlock_position();
			me._svg_5.logicBlock_angle();
			me.__10.logicBlock_visible();
			me._m24.logicBlock_text();
			me._m23.logicBlock_text();
			me.__9.logicBlock_visible();
			me._m20.logicBlock_visible();
			for (var i=0; i < me._mmap_1.ggMarkerInstances.length; i++) {
				me._mmap_1.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._mmap_1.ggClearMap();
			me._mmap_1.ggInitMap(false);
			me._mmap_1.ggInitMapMarkers(true);
			for (var i=0; i < me._mmap_2.ggMarkerInstances.length; i++) {
				me._mmap_2.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._mmap_2.ggVisible) {
				me._mmap_2.ggClearMap();
				me._mmap_2.ggInitMap(false);
				me._mmap_2.ggInitMapMarkers(true);
			}
			me._svg_4.logicBlock_angle();
			me._rectangle_10.logicBlock_bordercolor();
			me._m11.logicBlock_size();
			me._m11.logicBlock_visible();
			me._image_19.logicBlock_visible();
			me._image_141.logicBlock_visible();
			me._text_11.logicBlock_textcolor();
			me._image_16.logicBlock_visible();
			me._image_161.logicBlock_visible();
			me._text_13.logicBlock_textcolor();
			me._image_17.logicBlock_visible();
			me._image_171.logicBlock_visible();
			me._text_14.logicBlock_textcolor();
			me._text_20m.logicBlock_visible();
			me._text_20md.logicBlock_visible();
			me._rectangle_12.logicBlock_backgroundcolor();
			me._text_16.logicBlock_textcolor();
			me._svg_3.logicBlock_angle();
			me._m8.logicBlock_visible();
			me._mscrollarea_1.ggUpdatePosition();
			me.__.logicBlock_visible();
		});
		player.addListener('positionchanged', function(event) {
			me._map_3.ggRadar.update();
			me._map_4.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
			me._mmap_1.ggRadar.update();
			me._mmap_2.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__41.logicBlock_visible();
			me.__31.logicBlock_visible();
			me.__23.logicBlock_size();
			me.__23.logicBlock_visible();
			me.__24.logicBlock_position();
			me.__12.logicBlock_visible();
			me.__11.logicBlock_position();
			me.__11.logicBlock_scaling();
			me._m18.logicBlock_visible();
			me._m11.logicBlock_visible();
			me._m.logicBlock_visible();
			me.__.logicBlock_size();
			me.__6.logicBlock_position();
			me.__2.logicBlock_position();
			me.__pc.logicBlock_visible();
			me.__m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_daynight_button', function(event) {
			me._rectangle_50.logicBlock_backgroundcolor();
			me.__51.logicBlock_position();
			me._text_20.logicBlock_visible();
			me._image_17.logicBlock_visible();
			me._image_171.logicBlock_visible();
			me._text_14.logicBlock_textcolor();
			me._text_20m.logicBlock_visible();
			me._text_20md.logicBlock_visible();
		});
		player.addListener('varchanged_vis_furniture_button', function(event) {
			me._rectangle_51.logicBlock_backgroundcolor();
			me.__57.logicBlock_position();
			me._image_16.logicBlock_visible();
			me._image_161.logicBlock_visible();
			me._text_13.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_info_button', function(event) {
			me._rectangle_5.logicBlock_backgroundcolor();
			me.__46.logicBlock_position();
			me._rectangle_12.logicBlock_backgroundcolor();
			me._text_16.logicBlock_textcolor();
			me.__.logicBlock_visible();
		});
		player.addListener('varchanged_vis_m_bottom_menu', function(event) {
			me._m11.logicBlock_size();
			me._svg_3.logicBlock_angle();
		});
		player.addListener('varchanged_vis_m_minimap', function(event) {
			me._m20.logicBlock_visible();
			me._image_19.logicBlock_visible();
			me._image_141.logicBlock_visible();
			me._text_11.logicBlock_textcolor();
		});
		player.addListener('varchanged_vis_m_move_button_1', function(event) {
			me._m11.logicBlock_visible();
			me._m8.logicBlock_visible();
		});
		player.addListener('varchanged_vis_m_sidebar', function(event) {
			me._m18.logicBlock_size();
			me.__10.logicBlock_visible();
			me._svg_4.logicBlock_angle();
			me._rectangle_10.logicBlock_bordercolor();
		});
		player.addListener('varchanged_vis_m_type', function(event) {
			me._m18.logicBlock_size();
			me._m25.logicBlock_position();
			me._svg_5.logicBlock_angle();
			me.__9.logicBlock_visible();
		});
		player.addListener('varchanged_vis_minimap_button', function(event) {
			me._rectangle_53.logicBlock_backgroundcolor();
			me.__69.logicBlock_position();
			me.__18.logicBlock_visible();
		});
		player.addListener('varchanged_vis_move_button', function(event) {
			me._rectangle_52.logicBlock_backgroundcolor();
			me.__63.logicBlock_position();
			me.__13.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sidebar', function(event) {
			me.__41.logicBlock_size();
			me.__77.logicBlock_size();
			me._svg_6.logicBlock_angle();
			me.__71.logicBlock_visible();
			me.__43.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__18a2.ggUpdate();
			me.__18a0.ggUpdate();
			me._m18a0.ggUpdate();
			me._m18a.ggUpdate();
		});
	};
	function SkinCloner__18a0_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 113px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 175px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a1.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a1);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
	};
	function SkinCloner__18a2_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 113px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 175px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a0.onclick=function (e) {
			if (me._nodeimage_118a0.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_roomchoice', false);
		}
		me._nodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18a3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a3.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a3.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a0.appendChild(me.__18a3);
		me._nodeimage_118a0.appendChild(me._rectangle_118a0);
		me.__div.appendChild(me._nodeimage_118a0);
	};
	function SkinCloner_m18a_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._mnodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mnodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._mnodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/mnodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 77px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mnodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._mnodeimage_118a.onclick=function (e) {
			if (me._mnodeimage_118a.isDragging()) return;
			player.setVariableValue('vis_m_move_button_1', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._mnodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mrectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="m-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_18a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m_18a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m_18a0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_18a0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_18a0.ggUpdateText();
		player.addListener('changenode', function() {
			me._m_18a0.ggUpdateText();
		});
		el.appendChild(els);
		me._m_18a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_18a0.ggUpdatePosition=function (useTransition) {
		}
		me._mrectangle_118a.appendChild(me._m_18a0);
		me._mnodeimage_118a.appendChild(me._mrectangle_118a);
		me.__div.appendChild(me._mnodeimage_118a);
	};
	function SkinCloner_m18a0_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._mnodeimage_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mnodeimage_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._mnodeimage_118a0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/mnodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="m-NodeImage 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 77px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mnodeimage_118a0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._mnodeimage_118a0.onclick=function (e) {
			if (me._mnodeimage_118a0.isDragging()) return;
			player.setVariableValue('vis_m_move_button_1', false);
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._mnodeimage_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._mrectangle_118a0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._mrectangle_118a0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="m-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mrectangle_118a0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mrectangle_118a0.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_18a1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._m_18a1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._m_18a1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="m-\uac00\uad6c\uc788\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 1px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m_18a1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m_18a1.ggUpdateText();
		player.addListener('changenode', function() {
			me._m_18a1.ggUpdateText();
		});
		el.appendChild(els);
		me._m_18a1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_18a1.ggUpdatePosition=function (useTransition) {
		}
		me._mrectangle_118a0.appendChild(me._m_18a1);
		me._mnodeimage_118a0.appendChild(me._mrectangle_118a0);
		me.__div.appendChild(me._mnodeimage_118a0);
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : -122px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			var flag=me.__28.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__28.style.transition='none';
			} else {
				me.__28.style.transition='all 1000ms linear 0ms';
			}
			if (flag) {
				me.__28.ggParameter.sx=1.2;me.__28.ggParameter.sy=1.2;
			} else {
				me.__28.ggParameter.sx=1.2;me.__28.ggParameter.sy=1.2;
			}
			me.__28.ggScaleActive=!flag;
				me.__28.style.transform=parameterToTransform(me.__28.ggParameter);
			setTimeout(function() {skin.updateSize(me.__28);}, 1050);
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._timer_2);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__28=document.createElement('div');
		el.ggId="\uc6d0\ub4e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__28.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__28.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__28.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__28.style.transition='transform 0s';
				if (me.__28.ggCurrentLogicStateScaling == 0) {
					me.__28.ggParameter.sx = 1;
					me.__28.ggParameter.sy = 1;
					me.__28.style.transform=parameterToTransform(me.__28.ggParameter);
					skin.updateSize(me.__28);
				}
				else {
					me.__28.ggParameter.sx = 1.2;
					me.__28.ggParameter.sy = 1.2;
					me.__28.style.transform=parameterToTransform(me.__28.ggParameter);
					skin.updateSize(me.__28);
				}
			}
		}
		me.__28.logicBlock_scaling();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="4\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		hs+='::before { content: \"\"; position: absolute; top: -15px; left: -15px; right: -15px; bottom: -15px; background: inherit; \/* \ubd80\ubaa8\uc758 \ubc30\uacbd\uc744 \uc0c1\uc18d *\/ filter: blur(10px); \/* \ube14\ub7ec \ud6a8\uacfc *\/ z-index: -1; \/* \ubc30\uacbd \ub4a4\uc5d0 \uc704\uce58\ud558\ub3c4\ub85d *\/ }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__40);
		el=me._timer_31=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31.ggIsActive=function() {
			return (me._timer_31.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31.ggTimestamp) / me._timer_31.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31.style.transition='';
				if (me._timer_31.ggCurrentLogicStateVisible == 0) {
					me._timer_31.style.visibility="hidden";
					me._timer_31.ggVisible=false;
				}
				else {
					me._timer_31.style.visibility=(Number(me._timer_31.style.opacity)>0||!me._timer_31.style.opacity)?'inherit':'hidden';
					me._timer_31.ggVisible=true;
				}
			}
		}
		me._timer_31.logicBlock_visible();
		me._timer_31.ggActivate=function () {
			var flag=me.__40.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__40.style.transition='none';
			} else {
				me.__40.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__40.ggParameter.sx=1;me.__40.ggParameter.sy=1;
			} else {
				me.__40.ggParameter.sx=1.8;me.__40.ggParameter.sy=1.8;
			}
			me.__40.ggScaleActive=!flag;
				me.__40.style.transform=parameterToTransform(me.__40.ggParameter);
			setTimeout(function() {skin.updateSize(me.__40);}, 550);
		}
		me._timer_31.ggCurrentLogicStateVisible = -1;
		me._timer_31.ggUpdateConditionTimer=function () {
			me._timer_31.logicBlock_visible();
		}
		me._timer_31.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._timer_31);
		el=me.__30=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__30);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_3.ggTimestamp) / me._timer_3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggActivate=function () {
			var flag=me.__30.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__30.style.transition='none';
			} else {
				me.__30.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__30.ggParameter.sx=1;me.__30.ggParameter.sy=1;
			} else {
				me.__30.ggParameter.sx=1.4;me.__30.ggParameter.sy=1.4;
			}
			me.__30.ggScaleActive=!flag;
				me.__30.style.transform=parameterToTransform(me.__30.ggParameter);
			setTimeout(function() {skin.updateSize(me.__30);}, 550);
		}
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._timer_3);
		el=me.__210=document.createElement('div');
		el.ggId="2\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__210);
		el=me.__29=document.createElement('div');
		el.ggId="\uc911\uc559\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__29);
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 19";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.352941);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -33px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:13px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_19.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_19.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_19.ggUpdateText();
		});
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_19.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.comment) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_19.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_19.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_19.style.transition='width 0s, height 0s';
				if (me._text_19.ggCurrentLogicStateSize == 0) {
					me._text_19.style.width='88px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (88px / 2))';
					skin.updateSize(me._text_19);
				}
				else {
					me._text_19.style.width='65px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._text_19);
				}
			}
		}
		me._text_19.logicBlock_size();
		me._text_19.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._text_19);
		me._external_1.appendChild(me.__28);
		me._ht_node.appendChild(me._external_1);
		me._timer_2.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__28.logicBlock_scaling();
		me._timer_31.logicBlock_visible();
		me._timer_3.logicBlock_visible();
		me._text_19.logicBlock_size();
			me.ggEvent_activehotspotchanged=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_changenode=function() {
				me._timer_2.logicBlock_visible();
				me._timer_31.logicBlock_visible();
				me._timer_3.logicBlock_visible();
				me._text_19.logicBlock_size();
			};
			me.ggEvent_configloaded=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me.__28.logicBlock_scaling();
			};
			me.hotspotTimerEvent=function() {
				me._timer_2.ggUpdateConditionTimer();
				if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
					me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
					if (me._timer_2.ggLastIsActive) {
						var flag=me.__28.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__28.style.transition='none';
						} else {
							me.__28.style.transition='all 1000ms linear 0ms';
						}
						if (flag) {
							me.__28.ggParameter.sx=1.2;me.__28.ggParameter.sy=1.2;
						} else {
							me.__28.ggParameter.sx=1.2;me.__28.ggParameter.sy=1.2;
						}
						me.__28.ggScaleActive=!flag;
							me.__28.style.transform=parameterToTransform(me.__28.ggParameter);
						setTimeout(function() {skin.updateSize(me.__28);}, 1050);
					} else {
					}
				}
				me._timer_31.ggUpdateConditionTimer();
				if (me._timer_31.ggLastIsActive!=me._timer_31.ggIsActive()) {
					me._timer_31.ggLastIsActive=me._timer_31.ggIsActive();
					if (me._timer_31.ggLastIsActive) {
						var flag=me.__40.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__40.style.transition='none';
						} else {
							me.__40.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__40.ggParameter.sx=1;me.__40.ggParameter.sy=1;
						} else {
							me.__40.ggParameter.sx=1.8;me.__40.ggParameter.sy=1.8;
						}
						me.__40.ggScaleActive=!flag;
							me.__40.style.transform=parameterToTransform(me.__40.ggParameter);
						setTimeout(function() {skin.updateSize(me.__40);}, 550);
					} else {
					}
				}
				me._timer_3.ggUpdateConditionTimer();
				if (me._timer_3.ggLastIsActive!=me._timer_3.ggIsActive()) {
					me._timer_3.ggLastIsActive=me._timer_3.ggIsActive();
					if (me._timer_3.ggLastIsActive) {
						var flag=me.__30.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__30.style.transition='none';
						} else {
							me.__30.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__30.ggParameter.sx=1;me.__30.ggParameter.sy=1;
						} else {
							me.__30.ggParameter.sx=1.4;me.__30.ggParameter.sy=1.4;
						}
						me.__30.ggScaleActive=!flag;
							me.__30.style.transform=parameterToTransform(me.__30.ggParameter);
						setTimeout(function() {skin.updateSize(me.__30);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-679;
		el.ggDy=-300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) - 679px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) - 300px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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'+
			'YII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='10px';
					me._map_pin_active.style.height='10px';
					me._map_pin_active.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (10px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABSCAYAAAAWy4frAAAP30lEQVR4nN2bfYzlV1nHP+f8Xu/bzOy87U53ZrdtcFugFiwhrRKhDcY/uhL5x0b5xxDDHyZq1Eg0DUEgQqRGXpoK0WBM1ShgAikRTa0KVAi02KYYaLsF2i47szs7L3dm7vvv5ZzHP87vzu7s7tw7L3dq4rM5yeTe3z3n+Z7vc56381v1S7/5e/x/EH/UE16auGfeC0sntR/OCzKPyAJoDyWvKtSizdNFk3aXSpWtSxNLL5hRrTsSICuz992tPP9XgAcCpRbcp4ICUAoQ+p9pP0D7AbmM1VfnTn7ZWPP52F/+2mFBqYOa1qWJe+b9Uu13gQcULOycVRF4Hn4QEAZur9IsJ88yMmNAhGuer4vYL0uePzS7+vWXXhMgy9U3VSiN/6H2gj/QSpf6n5dKJW'+
			'qVMrValcDXA+fIjdBqd2i3OzRbre3PrdiuUvozSbv+sfnGM/UjA3Jp/J73+uXahxG7ABAGIccmxqnVqvje9cqLCLb4WwNKqeueMSK0Wh3W1+ukWdr/3ary/I8G6sIjezW5PZ2R82NviMqVm/7Ct/Y3sAalPWanp5gYr+1QOjNCkluMFXIrmGtMyCuARL4m8jSBr9DAWLXMWLXM5laTlbV1EDODyT+VyOwvLlfDB060vtcepuNQRhbH3jIZxtUvKeW9A2BsbJzZmSk87ZQyVuhm1gG41vb3IJGnqUbejvnW1utsbm4CYK35H5slZ+c2v7M4aJ6Bxrwyc++ZMB77Lqh3iFiOz85y/Pg0SiusQCsxrLUz2qkht4II+x693LLWztjq5hgrKK2YmZlibm4OAKXUnV5UfnZl9r67DwTk0sQ982j9TZBblfY4tXCKscKU0lRY'+
			'a6e0UoPASEY3t6x3MjqJOxLVapmF+Xm0F4DYGbT+2sXqXXfsC8hy9U0VHURfReyM9gJuOX2KOI5AoNnN2Uwy7P6taKhYgVZqaHQMCMRxxM2n5omCEKwp+eXxxxbH3jK5ZyCE1b/XYu/0EeZvmsP3fYwV6u2MTmoRy5GObmaotzOMFXzf58TcTSilUTa/NYyrX9o8+XpvKJDlmbd/RCn1bivC9PE5oih0IDoZqbHIa/QvNZZ6x4EJQ5+5uTmsCGLMO9J0+s8GAlmZufeMsvZBgMnpWSrVKlag0cvJzf4Ps6eVc7W+xtNq37/PjbDVzbHiAu7k9CwAYuV3VmbuPXO17jviiDXZx5VSXhxFTE46U+ykhm5m2YtoBZXQudJAa/S1fAtkuZCJpZPuzV33covq5YzFPpOTk3RaLXq9jidKPgmcvY6Rldn77kZ4t1jh2NSMWz'+
			'QTmj2zJ7cTac1UOaQceESeRhe5Ypam9Hrpdt4Y+Ipy4DFZDoh9vae5u6mLUwhMzcwgVpAsv3/5+H2/0Nd/mxHJep8CKJVrlMrOpJqJuS6/u1aUgmrkUwrcnmRZytbGBr0kIU26GJO757RHHEXEcZnK2BhRVKIW+YTa0kjyoes0e4agrImiEqXqGN3WJsraPwfetM3Iyux9dwvcAzA9ewKAJLP0jMXCrkMpmCwF2yCaW1ucf/VlNjbW6HaaO0CINXS7HTY21lg8/zL1+joiEAWa6UqI76mBa6VGtk18enrGbX6e3tkPlD6AFXNWRCiXKwRBiAg0knzwFuGY0FphTc7ypYt02g0ATk/XOPvmBd6wMM0dC1MEnuaFpTrPL23wn99f5Lnza9RXL9FtbDFz0zxBEFILfda72cD1WklO7IcEQUipVKbTaWOSzq8CT3ln3vqz'+
			'NLyZzyqlpmvHpimVyiTG0E0HH/DY96hGzp0vL52n026CUrznbWf4+Ht+jre+7gTzU1VC38P3NCcmKvz0qSne9ZZbqJUCvvvKOmnao91qMj4+ged5gJDlu68r4s6YrzVWhE6rgVhzrJZefERfrN51h9LebQDVag1rhV5uEVG7DoBKrLFW2Nqq02m3UFrzyHvfzu+ffTNRcF282hal4D1vO8Pnf+ud1OKAPEtZX13FWqHse2i1+7oiil5u3bPlqptPe7ddrN51h0bkLCJEUYznBQB0E8HK7qMceGhRGJOxvnIJRPj1nz/DPT91YiCLV8vNs2O8/10/AyJsbaySJi5Tr4X+wLW7ifMKnhcQRXE/6JzVyg9PAHhRGYDcuh8MkqAIEJvrq4gx3DxT433v3DWf21Xuv+sW7r3dga+vrADge9cXX1eLFSEtEr0odjoL3KKV59'+
			'8sYomL2tra4RG3v1jS6yBiefdbbx1oToPk197+ekQs3Z5jRCsK89p9/X7Z6fs+IhZgQdu05xoHngOS2cGH3NMKrVymmvS6ANxxavpAIABuu8llEGINed5zCg7Zk20dC52V0sc1yEmsJfB8rEC/ybF7/uRA5GkbKeLE60/eMLPek1TjgPnJClhLt9vFijPdQToY43QIPN+ZEHJSi7UVB8u5NCMgIrsOjXsuz1wBVAnUgc2qLxPlCACbZVgRtBqsgxF3VlDurIq1Fa08/6KIkOWug+GpwalPn9aoVEJEaPVyXl1pHBiECJy7tIWIEBQOp5fbgTpozx32LE8REZTnX9RizY8VgkkdkGEHrR+wRPmEYYhCeH5x/cBAzq82yNIEhRDFjplsSMngiWPCpCkKQaz5sQYuWCtkeYa1MKS35s5HLlgLQVTBWuGpc0sHBvLNF5ew'+
			'VgjCCCM+1rpUf5BoRfFchnWu+IJW8AoIaeI8kC7aMoN2JDVuodLYOCD88zMv88zLl/cNYqne4q/+7TlAKI85h7GXAq7v/p3OgoJXdN7rfBsgaW1hcueFAn+webVSd9BLlWOUx45hreWP/+FJkmzvfWgR+NDn/4tmJyGKS1QnXGBsJ3bg2oFfbLQVktYWAKbXfU6PndDfUlo3wQU4gMgb7IWyXGgXSeWx2dNoz2ep3uZ9n/nXPR38eqvH+x/9Ov/9I8fi1NzNKK1Ic6EzZDPiIsh0O83+lnRsRX/du/O218mmTNytlLpda01cGQcUnXTwhGkuRL7G15qwFNNpbLCy2eKfvv0Sge9xemaMUrizI9vqZTzx3Cv89uf+gxcvrALCsePzxJVjiMBaO0OGpEfjsY8CWvVl0l4LkCdOdZ7/Wx8gqEw8lnebv9xpbTJx/DS+dh'+
			'SmAw6diLDVy5gqB0SlCY7f/EY2l1+m12nx8Fee4uGvPMX89Bi3z89QiXx+cH6FH1/e3FbUCyIm524lLtcQYDNxncZBEvouqxCg03Jzic2/Cv1SV/EEgMkSep0mYalGyfNIssHFVZIJ9W7OROzjBTFTC2+gWV+iub6MWMPiWoPFtZ2mppSiOjHL+Mw8ojysuHPRSYY3OMqhyz7SbhOTJQAE1WNfYbMAMrf5ncXF6I3/Itbe39y8zFSpRhho6DG0lu4mll6aMhH7xKGmNnmS2uRJTNYj6XXIu02sGOJSlSCqbmfZgvNQG13XahomSkFUeKutjWUQi4g81m9uX2k+5OZhtLq/t7WGmTmN5weUIk2nN3ynRGCjm1MzPuXYdVC8IKYcxFC7Pg+zAp2epZkOL6f7UoucqibPSBsuACvhs/3vt4HUTqh/byyb88DpTmOFyrGT'+
			'lLRHW/bW0wJX5zcS0Bpiz8PXirBwl5kVslxIrSE/wG1h5LsbgHb9ImINoM6dMuce73+/Hccnll4wUiBsrju36PvKxRT21H7aHsZCOzNsJTmr7YzVdsZmN6edGbK9tcl2jChUrslhhdamK8BQPHw10B0JiS/qb4DEZl16rfp2WTsoE30tRsX3XJnbvIzNUwQaYRw/uiuQk3JuBcUXAZr1SyCOUq2GpMRHOHxPuZREoF2/XJDB3117HXddiqhEHgHI2ptkRf5VDrz/KxxU+yV42iLvtQCsUvpT1+p9HZAF88OngWcBOlsXHZBQo3De5rUcnlbEoXMWm+suwxZ4YiF/8UdDgQCI4pMA3Y3L26xUo5G/7TFUxqIirU+6V1wu6mM3evaGQMaPe/8I6gewkxWv/zbGazAC74rrbqy96hQT9Y1T5tyTewbiLunlg+BYMVnBSu'+
			'gPrRVGNfpnI+m2yVobFHR88Eb67goE4JR56UsUZ6VZX8SKEIcKT8NRX7uFgSIMXIOhXX/FkQGP78bGQCBuA/SDAGljlayoVWrR0bNSLroySbtJ3nFJp1X80SBdBwJZMC8+DnwLoLP5EwDHirf/aL/XEfqKOHBno7v1k2JH9WO35C89d2AgxSwPAmStjW1WxiP/yA553ztexYb14/IHhmk5FMgpc+5JgccBOhvnMQJB4KLtqONGWOR2RqBTnA3gCze1nv3+oYG4h5wHy9qb5EWtPB6PPq7UijmT5gbGXTNYpfSunmqnjnuQBfPDp1H6MXB2K9blQIGnRpYYxoHC1wqxkGxdcAuLevRGUfzAQAAKO7V5p0Hadn59fITRvl84pe1tNhKlbxzFbyR7BlLY6Rfgyo4FgSL0B3fO9zKiQG833Xob5/tLfm6vbOwLCEBhr9Yk'+
			'bdL2BtYW+dAhD/lY6HKq7tYK1mURSVCb/NP96LYvIAv5iz9C1KNwZed8T1EK9zXNDimFGs9TWISsWfSQRT0y7I25a2XfGgRjxz5IUUXm3Q1EHCsHMSlw50wEsuYqNush0PCEh/ar176BFDv1OXCsCIKnFeVo/6yUQo3WCkFIiyiu4NMn5dzKfuc6kE14Vn2EgpWstYogVIPB18rXDiiYREgay4jJEGjoSu266u/IgJyUcyuIciVx4wJi3d2ia1Tszaxi31WdYiEvzoaCT+/3xeVDAQHQ1erHBBo2T0lbywhQjTxu8I7ydaIUjMU+Au63JgNYCUuljx9Yn4P+cL7xTF3Bp+HKjvqe2hMr5cBDa7AmJ2+4mCTCJ/byovLIgQAUO7giJiNrLQPDWemzAZA1LxddQ1aicumRw+hyKCAnWt9ri/AJgLxxAWtytFJUwt1ZqY'+
			'SuaLImx3ZcPwClPnwYNg4NBKDYyRWxhqzpGmj915+ujeBXf5c1L/XZOC9l768Pq8ehgZxofa+NUh8G3A5LwUp0/fVdLfaKrmWO7ThTRKmHTjeeTw6rx6GBABQ7et6xcgkrQi0qXtDsL6SgErq3JpLNC9tsjB3XfzkKHUYC5HTj+QSlHgKwnWVMnqGuYaUSeSilMHmGdJ0JiuIDo/p/ViMBAuB2Vp0Ta7CtpR0HG9h2ALbVf7lAnXONwNHIyIBMLL1gRMmfAEj3MtYFOWqxRy3ue6orbIA8OMr/9TYyILCz1drf+UroXXG522zwbNEAHJmMFMjVrVbpXkby3nabR/LeVWzw0VGuCyMGAjtbrbZ95WWbq/4eORtwBEDgSquV3ho262CzDvTWdn43YjkSIFe3WqW9iLSLqlXUN4rvRi5HAsSJa7WSbrgBA68FDitHBuTq'+
			'Visw9FrgsHKEjFxptV7791HIkV4MLpgfPv0T//bHABbyF58+yrWO/IbTYD901GsA/C9GVYNNoq0j2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._timer_1pc.ggUpdateConditionTimer();
		if (me._timer_1pc.ggLastIsActive!=me._timer_1pc.ggIsActive()) {
			me._timer_1pc.ggLastIsActive=me._timer_1pc.ggIsActive();
			if (me._timer_1pc.ggLastIsActive) {
				me._text_18pc.style.transition='none';
				me._text_18pc.style.visibility='hidden';
				me._text_18pc.ggVisible=false;
			} else {
			}
		}
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				me._text_18.style.transition='none';
				me._text_18.style.visibility='hidden';
				me._text_18.ggVisible=false;
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};