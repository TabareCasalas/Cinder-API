# Proyecto - Cinder-API
 
## Descripción

En los últimos años se pusieron de moda las aplicaciones que permiten a las personas encontrar citas fácilmente. La idea es que una persona que usa la aplicación es presentada con una cantidad determinada de opciones de otros usuarios que coinciden en algunos intereses o simplemente están dentro del público objetivo del primero. 

 

Nuestro cliente nos pidió hacer un sistema en node que soporte la aplicación que está construyendo llamada Cinder. La aplicación tiene que soportar el registro de usuarios, vista de otros usuarios que tengan intereses comunes y seleccionar aquellos que les gustan y que no les gustan.

 

Un usuario tiene los siguientes datos: nombre de usuario, email, edad, sexo (M o F), frase personal (cosas como “La Kari re guachaaaa”), ciudad y país. Cada usuario tiene una lista de cosas que le gusta y una lista de cosas que no le gustan. También posee una lista de sexos en los que está interesado (M, F o ambos). 

 

Un usuario puede seleccionar a otro para agregarlo a sus personas favoritas o rechazadas.

 

La lista de posibles coincidencias se calcula a partir de usuarios que están en la misma ciudad y país, de sexo coincidente con los intereses del usuario que hace la consulta y se ordena por la cantidad de coincidencias que tienen entre las cosas que les gustan y no les gustan. No puede aparecer en esta lista ninguna persona que haya sido marcada por el usuario como favorita ni rechazada. El sistema debe limitar la cantidad de personas que devuelve a 20. 

 

El sistema debe implementar una API de tipo rest con la especificación según lo que se puede ver acá: https://app.swaggerhub.com/apis/rjulianialtimetrik/CinderAPI/1.0

 

NOTAS IMPORTANTES

 


Sólo deben construir la API. No es necesario construir ninguna interfaz gráfica de la aplicación.


La descripción de la API debe coincidir con la mostrada en el proyecto de SwaggerHub. Sólo se aceptarán cambios previa discusión de la justificación. 

 

Plazo de entrega

 

La fecha de entrega FINAL de este proyecto es el martes 27/11. 
