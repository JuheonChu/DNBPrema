/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							{
								num: "16",
								name : "AL.SPLINT 8A,8B",
								eng : "알루미늄 손가락 보호대 16",
								size : "8A,8B",
								color: "",
								img : "./images/finger/16.jpg"
							},
							
							{
								num: "16-1",
								name : "AL.SPLINT BRACE",
								eng: "알루미늄 손가락 보호대 16-1",
								size : "ONE SIZE",
								color: "",
								img : "./images/finger/16-1.jpg"
							},
							
							{
								num: "6",
								name : "손가락보호대",
								eng: "FINGER SUPPORT 6",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/finger/6.jpg"
							},
							
							{
								num : "6-1",
								name: "손가락보호대",
								eng: "FINGER SUPPORT 6-1",
								size : "ONE SIZE",
								color: "",
								img : "./images/finger/6-1.jpg"
							},
							
							{	
								num: "7",
								name : "썸보호대",
								eng: "THUMB SUPPORT 7",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "",
								img : "./images/finger/7.jpg"
							},
							
							{
								num: "8",
								name : "썸보호대 (좌,우 구분업음)",
								eng: "THUMB SUPPORT 8",  
								size : "S,M,L,XL",
								color: "",
								img : "./images/finger/8.jpg"
							},
							
							{
								num: "8-1",
								name : "썸보호대",
								eng: "THUMB SUPPORT 8-1",
								size : "FREE",
								color: "",
								img : "./images/finger/8-1.jpg"
							},
							
							{
								num : "8-2",
								name: "썸보호대",
								eng: "THUMB SUPPORT 8-2",
								size : "S,L",
								color: "",
								img : "./images/finger/8-2.jpg"
							},
							
							{
								num : "8-3",
								name: "썸보호대",
								eng: "THUMB SUPPORT 8-3",
								size : "S,M,L,XL",
								color: "",
								img : "./images/finger/8-3.jpg"
							},
							
							{
								num : "8-4",
								name: "썸보호대",
								eng: "THUMB SUPPORT 8-4",
								size : "FREE",
								color: "",
								img : "./images/finger/8-4.jpg"
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