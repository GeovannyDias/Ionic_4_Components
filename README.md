# Ionic_4_Components
All Components Ionic 4


https://www.youtube.com/watch?v=RWCb_ARrSxM&list=PLCKuOXG0bPi2EGYmUq7eidFV8A95xTjEx&index=1

**01::01- Inicio del proyecto :: Componentes**

**01::02- Cambiando la pantalla principal de la aplicación**

**01::03- Navegación entre páginas**

**01::04- Back Button - Botón para regresar a la página anterior**

**01::05- Módulo de componentes - Header**

**--01::06- ion-list Listas en ionic - Parte 1**

**20- ion-menu**

* **ionic g c components/menu --spec=false**

**--23- ion-popover**


**Comandos:**
```
ionic g page pages/inicio --dry-run (Ve lo que hara la linea de comando al ejecutarse)
ionic g page pages/inicio
ionic g page pages/alert --spec=false
ionic g page pages/action-sheet --spec=false
ionic g module components
ionic g component components/header --spec=false

*ionic g page pages/modal --spec=false
*ionic g page pages/modal-info --spec=false

*ionic g page pages/popover --spec=false
*ionic g c components/popinfo --spec=false
```

**Codigo:**
```
  //<ion-tab-button (click)="openCamera()">
    //<ion-icon name="camera"></ion-icon>
    //<ion-label>Photo</ion-label>
  //</ion-tab-button>
```

# Accede a datos sin conexión
### Activar la persistencia de datos (Off-line) en AngularFireStore
En el fichero "app.module.ts" en el import agregamos " .enablePersistence() "
```
AngularFirestoreModule.enablePersistence()
```
Cloud Firestore permite conservar datos sin conexión. Esta función almacena en caché una copia de los datos de Cloud Firestore que usa la app de forma activa, de modo que la app pueda acceder a los datos sin conexión en el dispositivo. Puedes escribir, leer, escuchar y consultar los datos en caché. Cuando el dispositivo vuelve a estar en línea, Cloud Firestore sincroniza los cambios locales que tu app hizo en el backend de Cloud Firestore.

https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419

**Consultar tambien LOCAL STORAGE:**

Utilizar localstorage para guardar datos de forma persistente en tu aplicación, para que se mantengan ahí al volver a abrir la aplicación después de cerrarla, o al hacer un refresh cuando lo miramos a través del navegador.

# Ionic Realtime Chat with Socket.io

https://www.youtube.com/watch?v=MGjRiinm67o


