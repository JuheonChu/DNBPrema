/**
 * 
 */
 
 var products = [
							// 08/13 상품 자료 오면 --> 가능
							{
								num: "32",
								name : "허벅지보호대",
								eng : "허벅지보호대 32",
								size : 'S,M,L,XL',
								color: "",
								img : "./images/others/32.jpg"
							},
							
							{
								num: "48",
								name : "종아리보호대",
								eng : "종아리보호대 48",
								size : 'S,M,L,XL',
								color: "",
								img : "./images/others/48.jpg"
							},
							
							{
								num: "50",
								name : "토마스칼라",
								eng : "Thomas Collar 50",
								size : 'S,M,L',
								color: "BLUE",
								img : "./images/others/50.jpg"
							},
							
							{
								num: "51",
								name : "도르래",
								eng : "도르래 51",
								size : 'ONE SIZE',
								color: "",
								img : "./images/others/51.jpg"
							},
							
							{
								num: "55",
								name : "T바",
								eng : "T-BAR 55",
								size : 'ONE SIZE',
								color: "",
								img : "./images/others/55.jpg"
							},
							
							{
								num: "56",
								name : "뒷꿈치 패드",
								eng : "HEEL CUP 56",
								size : 'ONE SIZE',
								color: "",
								img : "./images/others/56.jpg"
							},
							
							{
								num: "59",
								name : "실리콘 발가락 교정기",
								eng : "SILICONE TOE SPREADERS 발가락 패드 59",
								size : 'S,M,L',
								color: "",
								img : "./images/others/59.jpg"
							},
							
							{
								num: "60",
								name : "엄지발가락 교정기",
								eng : "GEL BUNION TOE SPREADERS 엄지발가락 보호패드 60",
								size : 'ONE SIZE',
								color: "",
								img : "./images/others/60.jpg"
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