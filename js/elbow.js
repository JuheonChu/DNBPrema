/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							
							{
								num: "9",
								name : "테니스 엘보밴드 (PVC)",
								eng: "ELBOW BAND 9",  
								size : "S,M,L,XL",
								color: "",
								img : "./images/elbow/9.jpg"
							},
							
							{
								num: "10",
								name : "엘보브레이스",
								eng : "ELBOW SUPPORT 10",
								size : "S,M,L,XL",
								color: "",
								img : "./images/elbow/10.jpg"
							},
							
							{
								num: "11",
								name : "테니스 엘보밴드 (PVC)",
								eng: "ELBOW BAND 11",
								size : "ONE SIZE",
								color: "",
								img : "./images/elbow/11.jpg"
							},
							
							{
								num: "12",
								name : "테니스 엘보밴드",
								eng: "ELBOW BAND 12",
								size : "S,M,L,XL",
								color: "",
								img : "./images/elbow/12.jpg"
							},
							
							{
								num : "12-1",
								name: "테니스 엘보밴드",
								eng: "ELBOW BAND 12-1",
								size : "ONE SIZE",
								color: "BLUE,BLACK",
								img : "./images/elbow/12-1.jpg"
							},
							
							{
								num: "14",
								name : "팔꿈치밴드",
								eng: "ELBOW BAND 14",
								size : "S,M,L",
								color: "",
								img : "./images/elbow/14.jpg"
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