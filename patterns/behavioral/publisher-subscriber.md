# El patrón Publicar-Suscribir

El patrón de mensajería publicar-suscribir (o pub/sub) es un patrón de diseño que proporciona un marco para intercambiar mensajes que permite un acoplamiento débil y la escalabilidad entre el emisor de mensajes (publicadores) y los receptores (suscriptores) en los temas a los que se suscriben.

Los mensajes se envían (empujan) de un publicador a los suscriptores a medida que están disponibles. El anfitrión (publicador) publica mensajes (eventos) en canales (temas). Los suscriptores pueden registrarse en los temas que les interesan.

Esto es diferente de los modelos estándar de solicitud/respuesta (extracción) en los que los publicadores comprueban si hay nuevos datos disponibles. Esto hace que el método pub/sub sea el marco más adecuado para la transmisión de datos en tiempo real.

También significa que se pueden construir redes dinámicas a escala de Internet. Sin embargo, construir una infraestructura de mensajería a tal escala puede ser problemático.

Esta introducción al patrón de mensajería pub/sub describe qué es, por qué los desarrolladores lo usan y analiza las dificultades que deben superarse al construir un sistema de mensajería a escala.

[Ejemplo](./publish-subscribe.ts)