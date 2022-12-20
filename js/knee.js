/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							{
								num: "21",
								name : "무릎밴드",
								eng : "KNEE BAND 21",
								size : "S,M,L,XL",
								color: "",
								img : "./images/knee/21.jpg"
							},
							
							{
								num: "21-1",
								name : "무릎밴드",
								eng: "KNEE BAND 21-1",
								size : "Free",
								color: "",
								img : "./images/knee/21-1.jpg"
							},
							
							{
								num: "22",
								name : "무릎보호대 (MCL)",
								eng: "MCL 22",
								size : "S,M,L,XL,XXL,XXL",
								color: "",
								img : "./images/knee/22.jpg"
							},
							
							{
								num : "22-1",
								name: "무릎보호대 (MCL)",
								eng: "MCL 22-1",
								size : "S,M,L,XL",
								color: "",
								img : "./images/knee/22-1.jpg"
							},
							
							{
								num: "23",
								name : "무릎보호대 (MCL 좌,우)",
								eng: "MCL KNEE SUPPORT 23",
								size : "좌 S,M,L,XL, XXL/우 S,M,L,XL, XXL",
								color: "",
								img : "./images/knee/23.jpg"
							},
							
							{
								num: "23-1",
								name : "무릎보호대 (MCL 좌,우)",
								eng: "MCL KNEE SUPPORT 23-1",  
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "GREEN",
								img : "./images/knee/23-1.jpg"
							},
							
							{
								num: "23-2",
								name : "무릎보호대 (MCL 좌,우)",
								eng: "MCL KNEE SUPPORT 23-1",
								size : "좌 S,M,L,XL/우 S,M,L,XL",
								color: "NAVY",
								img : "./images/knee/23-2.jpg"
							},
							
							{
								num : "24",
								name: "무릎보호대 (ACL)",
								eng: "ACL 24",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/knee/24.jpg"
							},
							
							{
								num : "25",
								name: "무릎밴드",
								eng: "KNEE BAND 25",
								size : "S,M,L,XL",
								color: "",
								img : "./images/knee/25.jpg"
							},
							
							{
								num : "25-1",
								name: "무릎밴드",
								eng: "KNEE BAND 25-1",
								size : "FREE",
								color: "",
								img : "./images/knee/25-1.jpg"
							},
							
							{
								num : "26",
								name: "무릎보호대 (PCL)",
								eng: "PCL 26",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/knee/26.jpg"
							},
							
							{
								num : "27",
								name: "무릎보호대 (KNEE CAGE)",
								eng: "MCL 27",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/knee/27.jpg"
							},
							
							{
								num : "28",
								name: "무릎슬개골보호대",
								eng: "무릎슬개골보호대 28",
								size : "ONE SIZE",
								color: "",
								img : "./images/knee/28.jpg"
							},
							
							{
								num : "28-1",
								name: "무릎슬개골보호대",
								eng: "무릎슬개골보호대 28-1",
								size : "S,L",
								color: "",
								img : "./images/knee/28.jpg"
							},
							
							{
								num : "29",
								name: "니 이모빌라이저",
								eng: "KNEE IMMOBILIZER 29",
								size : "S,M,L,XL",
								color: "",
								img : "./images/knee/29.jpg"
							},
							
							{
								num : "30",
								name: "각도기 브레이스",
								eng: "KNEE CAGES 각도기 30",
								size : "S,M,L,XL",
								color: "",
								img : "./images/knee/30.jpg"
							},
							
							{
								num : "31",
								name: "무릎보호대",
								eng: "KNEE SUPPORT 31",
								size : "S,M,L,XL,XXL",
								color: "",
								img : "./images/knee/31.jpg"
							},
							
							{
								num : "35",
								name: "무릎밴드",
								eng: "KNEE BAND 35",
								size : "S,M,L",
								color: "SKIN COLOR",
								img : "./images/knee/35.jpg"
							},
							
							{
								num : "66",
								name: "KNEE CAGES (ACL 좌,우)",
								eng: "KNEE CAGES 각도기 ACL 66",
								size : "좌 S,M,L,XL,XXL/우 S,M,L,XL,XXL",
								color: "",
								img : "./images/knee/66.jpg"
							},
							
							{
								num : "67",
								name: "KNEE CAGES (PCL 좌,우)",
								eng: "KNEE CAGES 각도기 PCL 67",
								size : "좌 S,M,L,XL,XXL/우 S,M,L,XL,XXL",
								color: "",
								img : "./images/knee/66.jpg"
							},
							
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