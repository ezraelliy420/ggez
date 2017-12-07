let process = {
	menu:function(){
		let content = <ul>
			<center><h1><a href='#' onClick={process.page1}><button>Click this!!!!</button></a></h1></center>
		</ul>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div><center>
				<font color="green"><h1>Honda FC50</h1></font><br/> <img src="img/1.jpg" height="400" width="400"></img><br/>
				
				
				<a href='#' onClick={process.page10}><button>prev</button></a>======
				<a href='#' onClick={process.page2}><button>next</button></a>
				
<h3>
The Honda FC50, also known as the Honda Beat, was a 50 cc (3.1 cu in) scooter manufactured by Honda in 1983. <br/>
It was produced mainly for the Japanese domestic market—although both new and used models were exported from <br/>
Japan—making it a fairly hard-to-find scooter. It was available in red, black, or white.<br/>
			</h3></center></div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<center>
				<font color="purple"><h1>Honda Super Cub</h1></font><br/> <img src="img/2.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page1}><button>prev</button></a>======
				<a href='#' onClick={process.page3}><button>next</button></a><br/>
				<h3>
				The Honda Super Cub is a Honda underbone motorcycle with a four stroke single<br/>
				 cylinder engine ranging in displacement from 49 to 124 cc (3.0 to 7.6 cu in).<br/>
<br/>
In continuous manufacture since 1958 with production surpassing 60 million in 2008, 87 million in 2014,<br/>
 and 100 million in 2017,[2] the Super Cub is the most produced motor vehicle* in history.[3] Variants <br/>
 include the C100, C50, C70, C90, C100EX and C70 Passport.<br/>
				</h3>
		</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<center>
				<font color="maroon"><h1>Honda CB50</h1></font><br/> <img src="img/3.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page2}><button>prev</button></a>======
				<a href='#' onClick={process.page4}><button>next</button></a><br/>
					<h3>
					The Honda CB50 is a 50 cc (3.1 cu in), single-cylinder, four-stroke,<br/>
					 SOHC street motorcycle manufactured by the Honda Motor Company, from 1971.[1]<br/>
					</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				<center>
				<font color="white "><h1>Honda Dio</h1></font><br/> <img src="img/4.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page3}><button>prev</button></a>======
				<a href='#' onClick={process.page5}><button>next</button></a><br/>
					<h3>
					The Honda Dio was introduced in Japan in January 1988. The name is derived from the son of Venus dyonisiac [clarify].
					 It is now manufactured and assembled in India by Hondas HMSI subsidiary, from where it is exported to UK as the Honda Lead.
					  The Dio is equipped with cushioned seats and an under-seat storage box.
<br/>
The Japanese Dio was equipped with the two-stroke 50 cc (3.1 cu in) AF18E single-cylinder engine with electric start. <br/>
It is superficially similar to the USA-only Honda Elite S.<br/>
					</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
				<center>
				<font color="black"><h1>Honda Racing Modified CB1100F (CB1100R)</h1></font><br/> <img src="img/5.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page4}><button>prev</button></a>======
				<a href='#' onClick={process.page6}><button>next</button></a><br/>
				<h3>
The Honda CB1100R was an exotic Honda model that was produced in limited numbers from 1981–1983. <br/>
It was a single-seat, fully faired sport bike based on the Honda CB900F.[1] The R suffix denotes a racing version,<br/>
 however the CB1100R was a road-legal machine produced by Honda and offered for sale to the public. <br/>
 It was produced only in numbers sufficient to meet the homologation requirements for the R to be classed as a production motorcycle<br/>
  in markets into which it was sold. It was Hondas first homologation special[1] and was raced in the production class racing in most <br/>
  major markets: including Europe, South Africa, Australia and New Zealand. It was not sold in the USA.<br/>
				</h3>
				
				
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
				<center>
				<font color="red"><h1>Honda AX11 (CB1100SF)</h1></font><br/> <img src="img/6.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page5}><button>prev</button></a>======
				<a href='#' onClick={process.page7}><button>next</button></a><br/>
				
				<h3>
The Honda X11 (also called CB1100SF) is a standard motorcycle produced by Honda with a 1,137 cc (69.4 cu in)<br/>
 liquid-cooled, inline-four engine and a 1990s-style cooling unit at its fore end.[citation needed] It is based on the<br/>
  CBR1100XX Super Blackbird.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div>
				<center>
				<font color="red"><h1>Honda CB1100 (CB1100A)</h1></font><br/> <img src="img/7.jpeg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page6}><button>prev</button></a>======
				<a href='#' onClick={process.page8}><button>next</button></a><br/>

				<h3>
The Honda CB1100 is a 1,140 cc (70 cu in) air-cooled inline four-cylinder naked bike that was introduced by Honda <br/>
				in 2010 as a modern successor to the CB750. At introduction the motorbike was available in Japan,<br/>
				 Australia and New Zealand; it was later introduced to Europe and the United States in 2013.[1]<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div>
				<center>
				<font color="red"><h1>Honda Pan-European (ST1300)</h1></font><br/> <img src="img/8.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page7}><button>prev</button></a>======
				<a href='#' onClick={process.page9}><button>next</button></a><br/>
				
				<h3>
The Honda ST1300, also marketed as the ST1300 Pan European, is a sport touring motorcycle[2][3] manufactured by Honda — <br/>
introduced to Europe in 2002 as the ST1300 Pan European and North America in 2003, as the ST1300.<br/>
<br/>
Superseding the ST1100, the bike features a standard riding posture, a liquid-cooled V4 engine and a fully <br/>
faired body with standard hard panniers.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div>
				<center>
				<font color="red"><h1>Honda Valkyrie (GL1500C/F6C)</h1></font><br/> <img src="img/9.jpg" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page8}><button>prev</button></a>======
				<a href='#' onClick={process.page10}><button>next</button></a><br/>
				<h3>
The Valkyrie engine is a 1,520 cubic centimetres (93 cu in) liquid cooled, horizontally opposed flat-six<br/>
 engine transplanted from Hondas Gold Wing model, unlike the V-twin engine commonly found on cruiser style motorcycles. <br/>
 In its transplant from the Goldwing, the most notable engine changes were the camshaft and the change to six individual 28 mm carburetors,<br/>
  one for each cylinder, changes which increased power and torque.<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div>
				<center>
				<font color="red"><h1>Honda Gold Wing (GL1800)</h1></font><br/> <img src="img/10.gif" height="400" width="400"></img><br/>
				
				<a href='#' onClick={process.page9}><button>prev</button></a>======
				<a href='#' onClick={process.page1}><button>next</button></a><br/>
				
				<h3>
The Honda Gold Wing (colloquially Goldwing or GoldWing) is a series of touring motorcycles manufactured by Honda. <br/>
It was introduced at the Cologne Motorcycle Show in October 1974,[5] and went on to become a popular model in North America,<br/>
 Western Europe and Australia, as well as Japan. Total sales are more than 640,000, most of them in the U.S. market.[6][7]<br/>
				</h3>
			</center>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div><center><h1>
					this is my app....
				</h1></center></div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},500);