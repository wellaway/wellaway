// ==UserScript==
// @name       try-to-comment
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://www.anwcl.com
// @copyright  2012+, You
// @require    http://code.jquery.com/jquery-1.8.2.min.js
// ==/UserScript==

document.writeln("<!DOCTYPE HTML>");
document.writeln("<html>");
document.writeln("<head>");
document.writeln("<title>jquery �Ҳ൯��������</title>");
document.writeln("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=gbk\">");
document.writeln("<script type=\"text/javascript\" src=\"http://code.jquery.com/jquery-1.8.2.min.js\"></script>");
document.writeln("");
document.writeln("<style type=\"text/css\">");
document.writeln("body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,table,th,td,section,article,aside,header,footer,nav,dialog,figure{margin:0;padding:0}");
document.writeln("body,button,input,select,textarea{font:12px/1.5 \"Microsoft YaHei\", \"\/\/5B8B\/\/4F53\",Tahoma, Geneva, sans-serif;color:#333}");
document.writeln("html{zoom:expression(function(ele){ele.style.zoom = \"1\";document.execCommand(\"BackgroundImageCache\", false, true);})(this);}");
document.writeln("body{ background:#FFF;}");
document.writeln("section,article,aside,header,footer,nav,dialog,figure{display:block}");
document.writeln("table{border-collapse:collapse;border-spacing:0}");
document.writeln("fieldset,img{border:0} ");
document.writeln("address,caption,cite,code,dfn,em,b,th,var,i{font-weight:normal;font-style:normal}");
document.writeln("code,kbd,pre,samp{font-family:courier new,courier,monospace}");
document.writeln("ol,ul,li{list-style:none} ");
document.writeln(".clear{overflow:hidden;clear:both}");
document.writeln(".clearfix:after{clear:both;overflow:hidden;content:\".\"}");
document.writeln(".cf:before, .cf:after {content:\"\";display:table;}");
document.writeln(".cf:after {clear:both;}");
document.writeln(".cf {zoom:1;}");
document.writeln("");
document.writeln("#showMsg{");
document.writeln("  background: #FFFFFF;");
document.writeln("  height: 500px;");
document.writeln("  width: inherit;");
document.writeln("  text-align: justify;");
document.writeln("}");
document.writeln("");
document.writeln("/*aSlide_tools*/");
document.writeln("#right_float{position: fixed; right: 0; top: 50px; z-index:999; _overflow-x:hidden;}");
document.writeln("#commentBoard{width: 500px; position: relative; height: 550px; right: -500px; line-height: 25px;border:1px solid #000000; border-right:0px;margin-top:-1px; background:#fff;}");
document.writeln("");
document.writeln("#boardLeft{");
document.writeln("position:absolute;top:40%;left:-31px;width:30px;border:0px solid #e0e0e0;background:#FFF000;font-size:20px;line-height:50px;text-align:center;");
document.writeln("}");
document.writeln("");
document.writeln("#boardDesc{height:100px;}");
document.writeln("#boardButton{height:50px;background:#AAAAAA;}");
document.writeln("");
document.writeln("</style>");
document.writeln("</head>");
document.writeln("<body>");
document.writeln("");
document.writeln("	<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1<br>1");
document.writeln("");
document.writeln("	<div id=\"right_float\">");
document.writeln("	<!-- <a id=\"float1\" href=\"#\" target=\"_blank\"></a> -->");
document.writeln("	<!-- <span><a href=\"#\" target=\"_blank\">��Ա����</a></span> -->");
document.writeln("	");
document.writeln("	<div id=\"commentBoard\">");
document.writeln("		<div id=\"boardLeft\">");
document.writeln("			<div id=\"boardDesc\">ͼ��</div>");
document.writeln("			<div id=\"boardButton\"><</div>");
document.writeln("		</div>");
document.writeln("		<div id=\"showMsg\"></div>");
document.writeln("		<form id=\"commentForm\">");
document.writeln("			����������:<input type=\"comment\" id=\"comment\" name=\"comment\" placeholder=\"������10-140����\">");
document.writeln("			<input type=\"button\" id=\"send\" name=\"send\" value=\"����\">");
document.writeln("			<input type=\"button\" id=\"remove\" name=\"remove\" value=\"ɾ��\">");
document.writeln("			<input type=\"button\" id=\"submitComment\" value=\"submitComment\">");
document.writeln("		</form>");
document.writeln("		<form id=\"loginForm\">");
document.writeln("			<label for=\"username\">Username</label>");
document.writeln("			<input type=\"text\" id=\"username\" placeholder=\"Username\" />");
document.writeln("");
document.writeln("			<label for=\"password\">Password</label>");
document.writeln("			<input type=\"text\" id=\"password\" placeholder=\"Password\" />");
document.writeln("");
document.writeln("			<input type=\"submit\" id=\"login\" value=\"Login\"/>");
document.writeln("		</form>");
document.writeln("		");
document.writeln("		<script type=\"text/javascript\">");
document.writeln("			function showMsg(){");
document.writeln("			var oText = document.getElementById(\"comment\");");
document.writeln("");
document.writeln("			var pNode  = document.createElement(\"p\");");
document.writeln("			var tNode  = document.createTextNode(oText.value);");
document.writeln("			  pNode.appendChild(tNode);");
document.writeln("			var dContent = document.getElementById(\"showMsg\");");
document.writeln("			dContent.insertBefore(pNode,dContent.firstChild);");
document.writeln("			oText.value=\'\';");
document.writeln("			}");
document.writeln("");
document.writeln("			function removeMsg(){");
document.writeln("			   var oDiv = document.getElementById(\"showMsg\");");
document.writeln("			 var oP = document.getElementsByTagName(\"p\");");
document.writeln("			 oDiv.removeChild(oP[0]);");
document.writeln("			}");
document.writeln("			document.getElementById(\"send\").onclick=showMsg;");
document.writeln("			document.getElementById(\"remove\").onclick=removeMsg;");
document.writeln("		</script>");
document.writeln("	</div></div>");
document.writeln("");
document.writeln("	<script type=\"text/javascript\">");
document.writeln("	$(document).ready(function(){");
document.writeln("	  $(\"#boardButton\").on(\'click\', function(){");
document.writeln("	    if (!$(this).attr(\'data-toggled\') || $(this).attr(\'data-toggled\') == \'off\') {");
document.writeln("		  $(\"#commentBoard\").animate({right:\'0px\'});");
document.writeln("		  $(this).attr(\'data-toggled\',\'on\');");
document.writeln("		  $(this).html(\">\");");
document.writeln("	    } else {");
document.writeln("		  $(\"#commentBoard\").animate({right:\'-500px\'});");
document.writeln("		  $(this).attr(\'data-toggled\',\'off\');");
document.writeln("		  $(this).html(\"<\");");
document.writeln("		}");
document.writeln("	  });");
document.writeln("	  $(\"#submitComment\").on(\'click\', function(){");
document.writeln("		var posting = $.post(\"http://127.0.0.1:8000/comment/\", {\'comment\': $(\'#comment\').val() });");
document.writeln("		posting.done(function(data) {");
document.writeln("		  $(\'#showMsg\').html(data);");
document.writeln("		});");
document.writeln("	  });");
document.writeln("	});");
document.writeln("	</script>");
document.writeln("");
document.writeln("</body>");
document.writeln("</html>");
document.writeln("");