/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							{
								num: "1",
								name : "손목보호대",
								eng : "WRIST SUPPORT 1",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "BLUE,BLACK,NAVY",
								img : "./images/wrist/1.jpg"
							},
							
							{
								num: "1-1",
								name : "손목보호대 (BINDING)",
								eng: "WRIST SUPPORT 1-1",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "BLUE,BLACK,NAVY",
								img : "./images/wrist/1-1.jpg"
							},
							
							{
								num: "1-2",
								name : "손목보호대 (BINDING)",
								eng: "WRIST SUPPORT 1-2",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "BLUE,BLACK,NAVY",
								img : "./images/wrist/1-2.jpg"
							},
							
							{
								num : "13",
								name: "손목랩 (팔목)",
								eng: "WRIST SUPPORT 13",
								size : "S,M,L,XL",
								color: "",
								img : "./images/wrist/13.jpg"
							},
							
							{
								num: "13-1",
								name : "손목 랩",
								eng: "WRIST SUPPORT 13-1",
								size : "ONE SIZE",
								color: "",
								img : "./images/wrist/13-1.jpg"
							},
							
							{
								num: "2",
								name : "손목보호대",
								eng: "WRIST SUPPORT 2",  
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "SKIN COLOR",
								img : "./images/wrist/2.jpg"
							},
							
							{
								num: "3",
								name : "손목보호대",
								eng: "WRIST SUPPORT 3",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "GRAY",
								img : "./images/wrist/3.jpg"
							},
							
							{
								num : "3-1",
								name: "손목보호대 (에어매쉬)",
								eng: "WRIST SUPPORT 3-1",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "",
								img : "./images/wrist/3-1.jpg"
							},
							
							{
								num : "4",
								name: "손목랩",
								eng: "WRIST SUPPORT 4",
								size : "S,M,L,XL",
								color: "",
								img : "./images/wrist/4.jpg"
							},
							
							{
								num: "5",
								name : "손목밴드",
								eng: "WRIST BAND 5",
								size : "S,M,L",
								color:"",
								img : "./images/wrist/5.jpg"
							},
							
							{
								num: "5-1",
								name : "손목밴드",
								eng: "WRIST BAND 5-1",
								size : "ONE SIZE",
								color: "",
								img : "./images/wrist/5-1.jpg"
							},
							
							{
								num : "5-2",
								name : "손목밴드",
								eng: "WRIST BAND 5-2",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "",
								img : "./images/wrist/5-2.jpg"
							},
							
							{
								num : "5-3",
								name : "손목밴드", 
								eng: "WRIST SUPPORT 5-3",
								size : "ONE SIZE",
								color: "",
								img : "./images/wrist/5-3.jpg"
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
						
						