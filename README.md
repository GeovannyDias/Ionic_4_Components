# Ionic_4_Components
All Components Ionic 4


https://www.youtube.com/watch?v=RWCb_ARrSxM&list=PLCKuOXG0bPi2EGYmUq7eidFV8A95xTjEx&index=1

**01::01- Inicio del proyecto :: Componentes**
```
ionic g page pages/inicio --dry-run (Ve lo que hara la linea de comando al ejecutarse)
ionic g page pages/inicio
ionic g page pages/alert --spec=false
ionic g page pages/action-sheet --spec=false
```

**01::02- Cambiando la pantalla principal de la aplicación**

**01::03- Navegación entre páginas**

**01::04- Back Button - Botón para regresar a la página anterior**

**01::05- Módulo de componentes - Header**
```
ionic g module components
ionic g component components/header --spec=false

**components.module.ts**
declarations:
HeaderComponent
exports: (exportar todos los componentes que se usen en otras páginas)
HeaderComponent
imports: (Para que funsione las etiquetas de ionic)
IonicModule

Si quiero utilizar este módulo de componentes, importarlo en "app.module.ts":
imports:
ComponentsModule

A cada page(componente) se debe declarar o importar en el fichero "page.module.ts":
imports:
ComponentsModule

header.component.ts
@Input() titulo: string;

header.component.html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/inicio">
      </ion-back-button>
    </ion-buttons>
    <ion-title class="ion-text-capitalize">{{ titulo }}</ion-title>
  </ion-toolbar>
</ion-header>

page.page.html
<app-header titulo="alert"></app-header>

```
**--01::06- ion-list Listas en ionic - Parte 1**

**08- ion-datetime**
```
variableFecha: Date = new Date();
fecha.ISOString()

<ion-datetime placeholder="Nacimiento"
                display-format="YYYY MM DD"
                cancelText="Cancelar..!!"
                [ngModel]="variableFecha.toISOString()"
                (ionChange)="cambioFecha( $ event )">
  </ion-datetime>
  
  cambioFecha(  event ){
  console.log('ionChange: ', event);
  console.log('Date: ', new( Date event.detail.value ));
  }
  
```
* **https://momentjs.com/**

**20- ion-menu**
```
ionic g c components/menu --spec=false
ionic g service services/data --spec=false
crear fichero:
assets/data-menu/menu.json
```
**--23- ion-popover**


**Comandos:**
```
*ionic g page pages/modal --spec=false
*ionic g page pages/modal-info --spec=false

*ionic g page pages/popover --spec=false
*ionic g c components/popinfo --spec=false
```
# Accede a datos sin conexión
### Activar la persistencia de datos (Off-line) en AngularFireStore
* **En el fichero "app.module.ts" en el import agregamos " .enablePersistence() "**
```
AngularFirestoreModule.enablePersistence()
```
Cloud Firestore permite conservar datos sin conexión. Esta función almacena en caché una copia de los datos de Cloud Firestore que usa la app de forma activa, de modo que la app pueda acceder a los datos sin conexión en el dispositivo. Puedes escribir, leer, escuchar y consultar los datos en caché. Cuando el dispositivo vuelve a estar en línea, Cloud Firestore sincroniza los cambios locales que tu app hizo en el backend de Cloud Firestore.

https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419

**Consultar tambien LOCAL STORAGE:**

Utilizar localstorage para guardar datos de forma persistente en tu aplicación, para que se mantengan ahí al volver a abrir la aplicación después de cerrarla, o al hacer un refresh cuando lo miramos a través del navegador.

# Ionic Realtime Chat with Socket.io
* **https://www.youtube.com/watch?v=MGjRiinm67o**
* **https://devdactic.com/ionic-4-socket-io/**



# Código útil:
```
  <ion-tab-button (click)="openCamera()">
    <ion-icon name="camera"></ion-icon>
    <ion-label>Photo</ion-label>
  </ion-tab-button>
  
  <!-- Multi-line sliding item with icon options on both sides -->
    <ion-item-sliding id="item100">
      <ion-item href="#">
        <ion-label>
          <h2>HubStruck Notifications</h2>
          <p>A new message in your network</p>
          <p>Oceanic Next has joined your network</p>
        </ion-label>
        <ion-note slot="end">
          10:45 AM
        </ion-note>
      </ion-item>

      <ion-item-options side="start">
        <ion-item-option>
          <ion-icon slot="icon-only" name="heart"></ion-icon>
        </ion-item-option>
      </ion-item-options>

      <ion-item-options side="end">
        <ion-item-option color="danger">
          <ion-icon slot="icon-only" name="trash"></ion-icon>
        </ion-item-option>
        <ion-item-option>
          <ion-icon slot="icon-only" name="star"></ion-icon>
        </ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
    
```
