/*NOTA: La primera etiqueta de script debe estar en un archivo JS
independiente, pero debido a la forma en que funciona Codepen, tuve que ponerla
aquí para que se cargara antes que la otra etiqueta de script*/

/*IMPORTANTE: Para agregar efectos geniales, desplácese hacia abajo 
hasta la segunda etiqueta de script y edite las variables de instancia*/


class MarqueeKit {
    constructor(selector, options = {}) {
      // Default options with user overrides
      this.options = {
        images: [],
        speed: 100,
        height: 200,
        imageWidth: 250,
        gap: 20,
        pauseOnHover: false,
        reverse: false,
        imageScale: 1,
        borderRadius: 8,
        ...options
      };
      // Obtener el elemento contenedor
      this.container =
        typeof selector === "string" ?
        document.querySelector(selector) :
        selector;
      if (!this.container) {
        console.error("MarqueeKit: Container element not found");
        return;
      }
      // Variables de estado de la animación
      this.isAnimating = false;
      this.lastTimestamp = null;
      this.currentTranslate = 0;
      this.contentWidth = 0;
      this.animationFrame = null;
      this.targetSpeed = this.options.speed;
      this.currentSpeed = this.options.speed;
      // Controladores de eventos para limpieza
      this.boundAnimate = this.animate.bind(this);
      this.visibilityChangeHandler = this.handleVisibilityChange.bind(this);
      // Inicializar la marquesina
      this.init();
    }
    /**
     * Inicialice la marquesina configurando el contenedor,
     * creando el contenido, calculando las dimensiones e iniciando la animación.
     */
    init() {
      this.setupContainer();
      this.createContent();
    }
    /**
     * Configurar los estilos y clases del contenedor.
     */
    setupContainer() {
      // Agregar una clase para darle estilo
      this.container.classList.add("marquee-container");
      // Establecer la altura del contenedor
      this.container.style.height = `${this.options.height}px`;
      // Ocultar el desbordamiento para mantener la marquesina contenida
      this.container.style.overflow = "hidden";
      // Posición relativa para posicionamiento absoluto de la pista
      this.container.style.position = "relative";
      // **Crear superposición de carga**
      this.loadingOverlay = document.createElement("div");
      this.loadingOverlay.classList.add("marquee-loading");
      // **Añadir una superposición de carga al contenedor**
      this.container.appendChild(this.loadingOverlay);
    }
    /**
     * Cree el contenido principal duplicando imágenes para lograr un bucle sin interrupciones.
     */
    createContent() {
      // Crear el elemento de pista
      this.track = document.createElement("div");
      this.track.classList.add("marquee-track");
      // Crear elementos de imagen
      this.items = this.options.images.map((src) => {
        const item = document.createElement("div");
        item.classList.add("marquee-item");
        item.style.marginRight = `${this.options.gap}px`;
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("marquee-image");
        img.loading = "lazy";
        // Aplicar propiedades de ancho, radio del borde y transición de forma dinámica
        img.style.width = `${this.options.imageWidth}px`;
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.display = "block";
        img.style.backfaceVisibility = "hidden";
        img.style.transform = "translateZ(0)";
        img.style.transition = "transform 0.3s ease";
        img.style.borderRadius = `${this.options.borderRadius}px`; // Aplicar radio de borde
        item.appendChild(img);
        return item;
      });
      // Añadir efecto de desplazamiento dinámicamente
      this.container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("marquee-image")) {
          event.target.style.transform = `scale(${this.options.imageScale})`;
        }
      });
      this.container.addEventListener("mouseout", (event) => {
        if (event.target.classList.contains("marquee-image")) {
          event.target.style.transform = "scale(1)";
        }
      });
      // Añade elementos y clones al seguimiento para un desplazamiento sin interrupciones
      this.items.forEach((item) => this.track.appendChild(item));
      this.itemsClone = this.items.map((item) => item.cloneNode(true));
      this.itemsClone.forEach((item) => this.track.appendChild(item));
      // Añadir pista al contenedor
      this.container.appendChild(this.track);
      // Añade elementos y clones al seguimiento para un desplazamiento sin interrupciones
      this.items.forEach((item) => this.track.appendChild(item.cloneNode(true)));
      this.items.forEach((item) => this.track.appendChild(item.cloneNode(true)));
      this.items.forEach((item) => this.track.appendChild(item.cloneNode(true)));
      this.items.forEach((item) => this.track.appendChild(item.cloneNode(true)));
      // Espere a que se carguen las imágenes antes de comenzar la animación.
      this.waitForImages().then(() => {
        if (this.loadingOverlay) {
          this.container.removeChild(this.loadingOverlay);
          this.loadingOverlay = null;
        }
        this.calculateDimensions();
        this.setupIntersectionObserver();
        this.setupEventListeners();
        this.startAnimation();
      });
    }
    /**
     * Método público para establecer el radio del borde de las imágenes.
     * @param {number} radius - El valor del radio del borde en píxeles.
     */
    setBorderRadius(radius) {
      this.options.borderRadius = radius;
      const images = this.container.querySelectorAll(".marquee-image");
      images.forEach((img) => {
        img.style.borderRadius = `${radius}px`;
      });
    }
    /**
     * Espere a que se carguen las primeras 8 imágenes.
     */
    waitForImages() {
      const images = Array.from(this.container.querySelectorAll("img")).slice(
        0,
        7
      ); // Seleccione sólo las primeras 8 imágenes
      const promises = images.map((img) => {
        return new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = img.onerror = resolve;
          }
        });
      });
      return Promise.all(promises); // Resolver cuando se cargan las primeras 8 imágenes
    }
    /**
     * Calcular el ancho total del contenido a reproducir en bucle.
     */
    calculateDimensions() {
      // El ancho total es la suma de los anchos de los elementos originales.
      this.contentWidth = this.items.reduce((total, item) => {
        const style = window.getComputedStyle(item);
        const marginRight = parseFloat(style.marginRight);
        return total + item.offsetWidth + marginRight;
      }, 0);
      // Establezca el ancho de la pista para acomodar ambos conjuntos de elementos
      this.track.style.width = `${this.contentWidth * 4}px`;
      // Ajuste la corriente traducida para evitar el parpadeo inicial
      if (this.options.reverse) {
        this.currentTranslate = -this.contentWidth;
      }
    }
    /**
     * Función antirrebote para limitar la frecuencia con la que se puede ejecutar una función.
     */
    debounce(func, wait) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
      };
    }
    /**
     * El bucle de animación que mueve el marco.
     * Utiliza requestAnimationFrame para lograr animaciones fluidas.
     */
    animate(timestamp) {
      if (!this.isAnimating) return;
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
      }
      const elapsed = timestamp - this.lastTimestamp;
      this.lastTimestamp = timestamp;
      // Ajuste gradualmente la velocidad hacia la velocidad objetivo para una parada suave.
      const speedDiff = this.targetSpeed - this.currentSpeed;
      if (Math.abs(speedDiff) > 0.1) {
        this.currentSpeed += speedDiff * 0.03; // Ajuste este factor para una desaceleración más lenta/más rápida
      } else {
        this.currentSpeed = this.targetSpeed;
      }
      // Calcular movimiento en píxeles
      const distance = (this.currentSpeed * elapsed) / 1000;
      this.currentTranslate += this.options.reverse ? distance : -distance;
      // Ajuste la traducción actual para que se repita sin problemas mediante módulo
      const totalWidth = this.contentWidth;
      if (this.options.reverse) {
        this.currentTranslate =
          ((this.currentTranslate + totalWidth) % totalWidth) - totalWidth;
      } else {
        this.currentTranslate = this.currentTranslate % totalWidth;
      }
      // Aplicar la transformación a la pista para un movimiento suave.
      this.track.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
      this.animationFrame = requestAnimationFrame(this.boundAnimate);
    }
    /**
     * Configure un IntersectionObserver para pausar la animación cuando el marco no esté a la vista.
     */
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.startAnimation();
            } else {
              this.stopAnimation();
            }
          });
        }, {
          threshold: 0.1
        }
      );
      this.observer.observe(this.container);
    }
    /**
     * Configurar detectores de eventos para cambios de visibilidad y al pasar el mouse sobre el elemento.
     */
    setupEventListeners() {
      // Pausa suave al pasar el mouse si está habilitada
      if (this.options.pauseOnHover) {
        this.container.addEventListener("mouseenter", () => this.slowDown());
        this.container.addEventListener("mouseleave", () => {
          if (document.visibilityState === "visible") {
            this.speedUp();
          }
        });
      }
      // Pausar la animación cuando la página no esté visible
      document.addEventListener("visibilitychange", this.visibilityChangeHandler);
    }
    /**
     * Manejar eventos de cambio de visibilidad.
     */
    handleVisibilityChange() {
      if (document.visibilityState === "visible") {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    }
    /**
     * Iniciar el bucle de animación.
     */
    startAnimation() {
      if (!this.isAnimating) {
        this.isAnimating = true;
        this.lastTimestamp = null;
        this.animationFrame = requestAnimationFrame(this.boundAnimate);
      }
    }
    /**
     * Terminar el bucle de animación.
     */
    stopAnimation() {
      this.isAnimating = false;
      if (this.animationFrame) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
      }
    }
    /**
     * Disminuya la velocidad gradualmente hasta detener la carpa.
     */
    slowDown() {
      this.targetSpeed = 0;
    }
    /**
     * Aumente gradualmente la velocidad de la marquesina hasta alcanzar su velocidad original.
     */
    speedUp() {
      this.targetSpeed = this.options.speed;
      this.startAnimation();
    }
    /**
     * Método público para pausar la marquesina.
     */
    pause() {
      this.slowDown();
    }
    /**
     * Método público para reanudar la marquesina.
     */
    play() {
      this.speedUp();
    }
    /**
     * Método público para establecer la velocidad de la marquesina.
     * @param {number} speed - El nuevo valor de velocidad en píxeles por segundo.
     */
    setSpeed(speed) {
      this.options.speed = speed;
      this.targetSpeed = speed;
      this.currentSpeed = speed;
    }
    /**
     * Destruye la instancia de marquesina y limpia.
     */
    destroy() {
      this.stopAnimation();
      this.container.innerHTML = "";
      // Eliminar detectores de eventos
      if (this.observer) {
        this.observer.disconnect();
      }
      document.removeEventListener(
        "visibilitychange",
        this.visibilityChangeHandler
      );
      window.removeEventListener("resize", this.resetDimensions);
    }
  }
  // Compatibilidad con CommonJS y entornos de navegador
  if (typeof module !== "undefined" && module.exports) {
    module.exports = MarqueeKit;
  } else {
    window.MarqueeKit = MarqueeKit;
  }

  /**
   * Cada instancia puede tener configuraciones únicas.
   */
  const images1 = [
"https://github.com/juanmasemper/ojota-html/blob/main/agremiacionOdontologica1.PNG?raw=true", 
"https://github.com/juanmasemper/ojota-html/blob/main/foto2.png?raw=true", 
"https://github.com/juanmasemper/ojota-html/blob/main/brokerDeBancos.PNG?raw=true", 
"https://github.com/juanmasemper/ojota-html/blob/main/foto4.PNG?raw=true",
"https://github.com/juanmasemper/ojota-html/blob/main/ingsoft.png?raw=true",
"https://github.com/juanmasemper/ojota-html/blob/main/foto6.png?raw=true",
"https://github.com/juanmasemper/ojota-html/blob/main/foto7.png?raw=true",
"https://github.com/juanmasemper/ojota-html/blob/main/project.PNG?raw=true",
"https://github.com/juanmasemper/ojota-html/blob/main/foto5.png?raw=true",
  ];
  // Ejemplo de marquesina básica con configuración predeterminada
  new MarqueeKit("#basic-marquee", {
    images: images1,
    height: 200,
    imageWidth: 150,
    speed: 20,
    gap: 20,
    reverse: false,
    imageScale: 0.98,
    pauseOnHover: false,
    borderRadius: 8
  });