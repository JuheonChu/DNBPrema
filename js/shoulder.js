/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							
							{
								num: "17",
								name : "울트라벨포밴드",
								eng: "ARM SLING 17",  
								size : "S,M,L,XL",
								color: "",
								img : "./images/shoulder/17.jpg"
							},
							
							{
								num: "18",
								name : "벨포밴드",
								eng : "ARM SLING 18",
								size : "S,M,L,XL",
								color: "GRAY",
								img : "./images/shoulder/18.jpg"
							},
							
							{
								num: "18-1",
								name : "벨포밴드",
								eng: "ARM SLING 18-1",
								size : "S,M,L,X,L",
								color: "DARK BLUE",
								img : "./images/shoulder/18-1.jpg"
							},
							
							{
								num: "19",
								name : "울트라슬링 (K슬링)",
								eng: "ULTRA ARM SLING 19",
								size : "S,M,L,XL",
								color: "",
								img : "./images/shoulder/19.jpg"
							},
							
							{
								num : "19-1",
								name: "울트라슬링 (K슬링)",
								eng: "ULTRA ARM SLING 19-1",
								size : "S,M,L,XL",
								color: "BLACK",
								img : "./images/shoulder/19-1.jpg"
							},
							
							{
								num: "19-2",
								name : "울트라슬링 (U슬링)",
								eng: "ULTRA ARM SLING 19-2",
								size : "S,M,L,XL",
								color: "",
								img : "./images/shoulder/19-2.jpg"
							},
							
							{
								num:"20",
								name: "팔걸이",
								eng: "ARM SLING 20",
								size: "S,L",
								color: "",
								img: "./images/shoulder/20.jpg"
								
							},
							
							{
								num:"49",
								name: "쇄골밴드",
								eng: "Clavicle 49",
								size: "S,M,L,XL",
								color: "",
								img: "./images/shoulder/49.jpg"
							},
							
							{
								num:"52",
								name: "어깨보호대",
								eng: "SHOULDER SUPPORT 52",
								size: "S,M,L,XL",
								color: "S,M,L",
								img: "./images/shoulder/52.jpg"
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