// JavaScript Document

function tabnav(){
	if(!document.getElementById) return false;
	if(!document.getElementsByName) return false;
	var li = document.getElementsByTagName("li");
	var contain = document.getElementById("container")
	for(var i=0; i<li.length; i++){
		li[i].onclick = function(){
			var idofli = this.getAttribute("id")
			var conitem = contain.getElementsByTagName("div")
			for(var j=0; j<conitem.length; j++){
				if(conitem[j].className==idofli){
					contain.innerHTMl = conitem[j].innerHTML;
					conitem[j].style.display = "block";
					}
				}
			}
		}
		
	}
	
	
addLoadEvent(tabnav);



/*在数字索引的位置插入节点的简单函数
// 将child 节点插入到parent 中，使其成为第n个子节点
function insertAt(parent,child,n){
	if(n < 0 || n > parent.childNodes.length) throw new Error("invalid index");
	else if(n == parent.chilidNodes.lenght) parent.appendChild(child);
	else parent.insertBefore(child, parent.childNodes[n]);
	}*/