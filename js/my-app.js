// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Diseño Web II',
	dialog: {
		title: 'Diseño Web II',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/steam/',
    	url: 'steam.html',
    	name: 'steam',
  		},
		{
		path: '/Epic/',
    	url: 'steam.html',
    	name: 'Epic',
  		},
		{
		path: '/Origin/',
    	url: 'steam.html',
    	name: 'Origin',
  		},
		{
		path: '/Perfil/',
    	url: 'Perfil.html',
    	name: 'Perfil',
  		},
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'Productos',
  		},
		{
		path: '/fifa/',
    	url: 'fifa.html',
    	name: 'Fifa',
  		},
		{
		path: '/age/',
    	url: 'age.html',
    	name: 'age',
  		},
		{
		path: '/honor/',
    	url: 'honor.html',
    	name: 'honor',
  		},
		{
		path: '/forza/',
    	url: 'forza.html',
    	name: 'forza',
  		},
		{
		path: '/halo/',
    	url: 'halo.html',
    	name: 'halo',
  		},	
		{
		path: '/gears/',
    	url: 'gears.html',
    	name: 'gears',
  		},
		{
		path: '/god/',
    	url: 'god.html',
    	name: 'god',
  		},
		{
		path: '/gt/',
    	url: 'gt.html',
    	name: 'gt',
  		},
		{
		path: '/fall/',
    	url: 'fall.html',
    	name: 'fall',
  		},
		{
		path: '/ordenes/',
    	url: 'ordenes.html',
    	name: 'ordenes',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnComprar').on('click', function () {
  app.dialog.alert('!Tu compra fue realizada correctamente!');
});

$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Desea procesar su compra?', function () {
    app.dialog.alert('!Tu compra fue realizada correctamente!');
  });
});

$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		app.dialog.alert('¡ Bienvenido GX games, la mejor tienda para comprar videoJuegos !');
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});



 

