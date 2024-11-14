const app = Vue.createApp({
    data() {
        return {
            titulo: 'Tienda de Ropa para Mascotas',
            subtitulo: 'La mascota no sigue modas sino que impone modas',
            nombre: 'Anibal',
            mensaje: 'Vuelve Pronto',
            contador: 0,
            tallaMinima: 0,
            buscar: '',
            precioMaximo: 1000,
            disponibilidad: '',
            imagenActual: '',
            detalleProducto: {},
            carrito: [],
            productos: [
                { nombre: 'Camiseta para Perro', categoria: 'Ropa', talla: 3, imagen: 'img/camisetas-perro.jpg', precio: 150, descripcion: 'la mejor ropa para tus perros', marca:'liverdog', disponibilidad: 'disponible' },
                { nombre: 'Collar Elegante', categoria: 'Accesorio', talla: 1, imagen: 'img/collar-perro.jpg', precio:450, descripcion: 'que tu mascota resalte como las estrellas', marca:'shoopertop', disponibilidad: 'agotado' },
                { nombre: 'Abrigo para Gato', categoria: 'Ropa', talla: 2, imagen: 'img/abrigo-gato.jpeg', precio: 500, descripcion: 'haz que tu mascota imponga modas', marca:'CatDog', disponibilidad: 'disponible' },
                { nombre: 'Correa para Perro', categoria: 'Accesorio', talla: 4, imagen: 'img/correa-perro.jpg', precio: 150, descripcion: 'Correas elegantes y resisitentes', marca:'Shetozzos', disponibilidad: 'disponible' },
                { nombre: 'Sombrero de Mascota', categoria: 'Accesorio', talla: 3, imagen: 'img/sombrero.jpg', precio: 200, descripcion: 'Sombrero divertidos y graciosos para tu mascota', marca:'Slive', disponibilidad: 'agotado' },
                { nombre: 'Scobby Galletas', categoria: 'comida', imagen: 'img/scoby.jpg', precio: 400, descripcion: 'los mejores bocadillos', marca:'eatCanme', disponibilidad: 'disponible' },
                { nombre: 'Juguete Chillon', categoria: 'juguete', imagen: 'img/chilllon.jpeg', precio:100, descripcion: 'para que tu mascota siempre se divierta', marca:'shoopertop', disponibilidad: 'disponible' },
                { nombre: 'Dulce Cama', categoria: 'mueble', imagen: 'img/camaP.jpg', precio: 600, descripcion: 'es tan cómoda que tu mascota no querrá levantarse', marca:'PetsCop', disponibilidad: 'agotado' },
            ],
        };
    },
    computed: {
        productosFiltrados() {
            return this.productos.filter(producto => producto.talla >= this.tallaMinima);
        },
        productosBuscados() {
            return this.productos.filter(producto =>
                producto.nombre.toLowerCase().includes(this.buscar.toLowerCase()) ||
                producto.categoria.toLowerCase().includes(this.buscar.toLowerCase())
            );
        },
        productosCoinciden() {
            return this.productosBuscados.length;
        },
        productosFiltradosPorPrecio() {
            return this.productos.filter(producto => producto.precio <= this.precioMaximo);
        },
        productosFiltradosPorDisponibilidad() {
            return this.disponibilidad 
                ? this.productos.filter(producto => producto.disponibilidad === this.disponibilidad)
                : this.productos;
        }
    },
    methods: {
        incremento() {
            this.contador++;
        },
        actImagen(imagen) {
            this.imagenActual = imagen;
        },
        mostrarDetalle(producto) {
            this.detalleProducto = producto;
            const modal = new bootstrap.Modal(document.getElementById('modalDetalle'));
            modal.show();
        },
        agregarAlCarrito(producto) {
            this.carrito.push(producto);
            const modal = new bootstrap.Modal(document.getElementById('modalCarrito'));
            modal.show();
        },
        removerDelCarrito(item) {
            this.carrito = this.carrito.filter(producto => producto !== item);
        },
        realizarCompra() {
            alert('Compra realizada con éxito!');
            this.carrito = [];
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalCarrito'));
            modal.hide();
        }
    }
});

app.mount('#app');

