# El patrón Observador

Con el patrón observador, podemos suscribir ciertos objetos, los observadores, a otro objeto, llamado el observable. ¡Cada vez que ocurre un evento, el observable notifica a todos sus observadores!

Un objeto observable generalmente contiene 3 partes importantes:

* `observers`: un array de observadores que serán notificados cada vez que ocurra un evento específico.
* `subscribe()`: un método para agregar observadores a la lista de observadores.
* `unsubscribe()`: un método para eliminar observadores de la lista de observadores.
* `notify()`: un método para notificar a todos los observadores cada vez que ocurre un evento específico.

[Ejemplo](./observer.ts)