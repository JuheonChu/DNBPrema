/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							{
								num: "53",
								name : "아이스팩 - 어깨 (GEL 팩 포함)",
								eng : "ARMS WRAP WITH GEL PACK 53",
								size : "S,L",
								color: "",
								img : "./images/cooling/53.jpg"
							},
							
							{
								num: "54",
								name : "아이스팩 - 무릎 (GEL 팩 포함)",
								eng : "KNEE WRAP WITH GEL PACK 54",
								size : "S,L",
								color: "",
								img : "./images/cooling/54.jpg"
							},
							
							{
								num: "71",
								name : "냉.온팩",
								eng: "COOL & HOT PACK 71",
								size : "ONE SIZE",
								color: "",
								img : "./images/cooling/71.jpg"
							},
							
							{
								num : "72",
								name: "PVC 핫팩",
								eng: "PVC HOT BAG 72",
								size : "ONE SIZE",
								color: "",
								img : "./images/cooling/72.jpg"
							},
							
							{
								num: "73",
								name : "면 핫팩 팔단",
								eng: "COTTON HOT BAG 73",
								size : "ONE SIZE",
								color: "",
								img : "./images/cooling/73.jpg"
							},
							
							{
								num: "74",
								name : "목, 경추 면 핫팩",
								eng: "COTTON HOT BAG 74",  
								size : "ONE SIZE",
								color: "",
								img : "./images/cooling/74.jpg"
							},
							
							{
								num: "75",
								name : "핫팩 커버",
								eng: "HOT BAG COVER 75",
								size : "ONE SIZE",
								color: "",
								img : "./images/cooling/75.jpg"
							},
							
							{
								num : "76",
								name: "냉온 찜질주머니",
								eng: "COOL & HOT BAG 76",
								size : "ONE SIZE",
								color: "",
								img : "./images/cooling/76.jpg"
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