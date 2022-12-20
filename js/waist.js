/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							{
								num: "36",
								name : '요통대 (9")',
								eng : "LUMBAR SUPPORT 36",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/waist/36.jpg"
							},
							
							{
								num: "37",
								name : '코르셋 (12")',
								eng : "LUMBAR SUPPORT 37",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/waist/37.jpg"
							},
							
							{
								num: "38",
								name : '코르셋',
								eng : "LUMBAR SUPPORT 38",
								size : "S,M,L,XL,XXL",
								color: "GRAY",
								img : "./images/waist/38.jpg"
							},
							
							{
								num: "38-1",
								name : '코르셋',
								eng : "LUMBAR SUPPORT 38-1",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/waist/38-1.jpg"
							},
							
							{
								num: "39",
								name : '요통대 (7")',
								eng : "LUMBAR SUPPORT 39",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/waist/39.jpg"
							},
							
							{
								num: "40",
								name : '요통대 (9")',
								eng : "LUMBAR SUPPORT 40",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/waist/40.jpg"
							},
							
							{
								num: "62",
								name : '복대',
								eng : "복대 062",
								size : "ONE SIZE",
								color: "",
								img : "./images/waist/62.jpg"
							},
							
							{
								num: "85",
								name : '스판복대 (9",12")',
								eng : "스판복대 85",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/waist/85.jpg"
							},
							
							{
								num: "86",
								name : 'OS 복대',
								eng : "OS 86",
								size : "ONE SIZE",
								color: "",
								img : "./images/waist/86.jpg"
							},
							
							{
								num: "87",
								name : '립밴드',
								eng : "RIB BAND 87",
								size : "S,M,L",
								color: "",
								img : "./images/waist/87.jpg"
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
						
						