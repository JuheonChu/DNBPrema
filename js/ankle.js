/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							{
								num: "#",
								name : "족저근막염",
								eng : "PLANTAR FASCITIS",
								size : "좌 S,M,L/우 S,M,L",
								color: "NAVY,BLUE",
								img : "./images/ankle/plantarfascitis.jpg"
							},
							
							
							{
								num: "41",
								name : "발목보호대",
								eng : "ANKLE SUPPORT 41",
								size : "S,M,L,XL,XXL",
								color: "NAVY,BLUE",
								img : "./images/ankle/41.jpg"
							},
							
							{
								num: "42",
								name : "발목밴드",
								eng: "ANKLE BAND 42",
								size : "S,M,L,XL",
								color: "SKIN COLOR",
								img : "./images/ankle/42.jpg"
							},
							
							{
								num: "43",
								name : "발목보호대",
								eng: "ANKLE SUPPORT 43",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/ankle/43.jpg"
							},
							
							{
								num : "44",
								name: "발목보호대",
								eng: "ANKLE SUPPORT 44",
								size : "S,M,L,XL,XXL",
								color: "BLACK",
								img : "./images/ankle/44.jpg"
							},
							
							{
								num: "44-1",
								name : "발목보호대 (스프링)",
								eng: "ANKLE SUPPORT 44-1",
								size : "S,M,L,XL",
								color: "",
								img : "./images/ankle/44-1.jpg"
							},
							
							{
								num: "45",
								name : "발목밴드",
								eng: "ANKLE BAND 45",  
								size : "S,M,L,XL",
								color: "BLUE",
								img : "./images/ankle/45.jpg"
							},
							
							{
								num: "46",
								name : "발목밴드",
								eng: "ANKLE BAND 46",
								size : "S,M,L,XL",
								color: "BLACK",
								img : "./images/ankle/46.jpg"
							},
							
							{
								num : "47",
								name: "발목밴드",
								eng: "ANKLE BAND 47",
								size : "ONE SIZE",
								color: "",
								img : "./images/ankle/47.jpg"
							},
							
							{
								num : "47-1",
								name: "발목밴드",
								eng: "ANKLE BAND 47-1",
								size : "ONE SIZE",
								color: "",
								img : "./images/ankle/47.jpg"
							}
							
						]; // 상품 정보를 모아놓은 객체

						for (var i = 0; i < products.length; i++) { // i < products.length;

							var product = products[i];
							
							
							document
									.write("<div class = 'product'>");
							document.write("<img src = '" +  product.img + "'><br/>");
							
							document.write("<div class = 'product-info'><span class = 'product-num'>"
												+ product.num
												+ ".</span> <span class = 'product-name'>"+ product.name+"</span><br/></div>");
							
							
							document.write("<span class = 'product-eng' id = 'eng'>"
											+ product.eng
											+ "</span><br/>"
											+ "<span class = 'product-size'>"
											+ product.size + "</span><br/>");
											
							if(product.color.length != 0){
								document.write("<span class = 'product-color' id = 'color'>"+ product.color +"</span>");
							}else{
								document.write("<br/>");
							}
										
							document.write("</div>");
									
							


						}