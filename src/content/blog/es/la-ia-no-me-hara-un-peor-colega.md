---
pubDatetime: 2026-11-12T05:00:00Z
title: La IA no me hará un peor colega
slug: la-ia-no-me-hara-un-peor-colega
featured: false
draft: false
tags:
  - ia
  - comunicación
  - trabajo remoto
description:
  Uso Claude todos los días para comunicarme en el trabajo, pero no le delego
  mi criterio. Por qué revisar lo que envío es respetar el tiempo de los demás.
---

Una de las claves para trabajar remoto es la colaboración asíncrona. Generalmente esta colaboración la tenemos a través de diferentes herramientas: correos, Slack, Discord, etc.

Algo que he notado es que la IA ha llegado a nuestros espacios de trabajo y que muchas veces no es utilizada con cuidado. No con mala intención, pero sí he recibido algunas [granadas](https://noslopgrenade.com/es/) (mensajes generados en segundos que terminan tomándole tiempo al que los recibe para entenderlos) que me han dejado mal herido.

## No estoy en contra de la IA

A mí me encanta usar Claude para comunicarme en el trabajo; realmente me ayuda mucho a "ahorrar" tiempo. Algunas formas en que los uso que son genuinamente buenas:

- Obtener resúmenes (TL;DR) de hilos de conversaciones muy largos para entender qué se requiere de mí si soy nombrado.
- Realizar investigaciones de bugs en base a lo que se dice en una conversación.
- Obtener una lista clara todas las mañanas de lo que debo completar ese día (aprobar PRs, responder hilos) y, al finalizar el día, qué cosas quedaron inconclusas para planear el día siguiente.

Pero lo que no le delego a Claude es mi criterio. Si necesito usar Claude (o cualquier agente) para responder una conversación, siempre dejo en claro qué quiero comunicar, qué decisiones estoy tomando, pido que me arme un borrador antes de enviar nada, lo reviso, lo edito y luego lo envío.

Este filtro que hago es importante porque, al hacerlo, estoy respetando el tiempo de los demás.

## Si vos no lo leés, ¿por qué lo haría yo?

Con los agentes de IA es fácil agarrar y decir: "contesta a esta conversación por mí". Es algo que no te toma ni 10 segundos y el agente generará una respuesta bastante rápido, lo cual es buenísimo. Pero eso que a vos no te tomó nada en generar le puede tomar varios minutos a las demás personas en leer, interpretar y responder.

Me parece que es una falta de consideración hacia tus colegas. Cuando te involucran en una conversación, ellos esperan leer una respuesta tuya; ellos quieren ver tu opinión, tu criterio, porque de lo contrario se lo habrían preguntado a su agente directamente.

Aclarar que no me refiero a que debamos tardar en escribir nuestros mensajes, sino a asegurarnos que lo que estamos enviando realmente representa lo que queremos comunicar.

Aquí un ejemplo de malas respuesta:

![Respuesta larga generada por IA a una pregunta simple sobre mover un deploy, con opciones, emojis y ninguna decisión](/assets/respuesta-sin-criterio.png)

Aquí uno de una buena respuesta:

![Respuesta corta y directa a la misma pregunta, tomando una decisión clara](/assets/respuesta-con-criterio.png)

## Delegar la escritura no es delegar el criterio

Es diferente pedirle a la IA que responda por vos, a pedirle que piense por vos. Esto es algo que he vivido de primera mano.

Hace un tiempo, alguien de un equipo interno reportó un bug: ciertos documentos no estaban apareciendo en la plataforma que usaban para revisarlos.

En el hilo de conversación donde se levantó este reporte, se le pidió a la IA averiguar dónde estaba el problema y resolverlo. Se levantó un PR con el "fix" para la situación y se me incluyó para hacer la aprobación del mismo.

Para ser honesto, me vi tentado a simplemente aprobar el cambio y continuar con mi día, pero decidí preguntarme y preguntarles: ¿esto era realmente un bug? Esta plataforma llevaba tiempo funcionando así y nadie se había quejado.

Entonces decidí averiguar un poco más sobre el flujo para este tipo de clientes y nos dimos cuenta que los documentos para ellos nunca son revisados por nuestro equipo interno: el flujo para ellos era diferente y los documentos eran aprobados automáticamente. Al final, le explicamos a la persona que reportó el problema que esto no era un bug, era lo esperado, y cerramos el PR sin mergear.

Este es el tipo de situaciones donde los agentes brillan, pero también fallan. Si le pedís que arregle algo, probablemente venga con una solución, pero sigue siendo tu responsabilidad preguntar si algo está realmente roto.

## La responsabilidad es mía

Mis colegas no trabajan con mi agente, trabajan conmigo. Si un mensaje es enviado a mi nombre, es mi responsabilidad, y la gente espera que yo pueda defender lo que escribí.

La IA me ayuda a organizarme mejor, no perder conversaciones y a no dejar temas inconclusos. Pero leer lo que escribo, ser consciente de las decisiones que estoy tomando sigue siendo mi trabajo, y mientras lo siga haciendo, la IA no me hará un peor colega.
