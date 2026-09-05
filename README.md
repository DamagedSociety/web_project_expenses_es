# Gestor de Gastos

## Sobre mí

¡Hola! Soy Julián López, desarrollador junior, en proceso de formación en TripleTen, donde estoy adquiriendo habilidades en tecnologías clave como HTML, CSS, Git, React y Figma. Mi objetivo es dominar estas herramientas para convertirme en un desarrollador Full Stack aportando valor y soluciones en desarrollo de proyectos WEB.

## Descripción del proyecto

Este proyecto es un aplicativo interactivo para la gestión de finanzas personales, diseñado para llevar un control detallado de los ingresos y las salidas de dinero. La aplicación integra las siguientes funcionalidades principales:

- **Asignación de presupuesto:** Permite al usuario establecer un presupuesto inicial a través de la opción "Asignar".
- **Estadísticas generales:** Presenta un resumen del estado financiero en tiempo real, calculando los gastos totales, el gasto promedio y el saldo actual.
- **Indicador visual de saldo:** Para facilitar la comprensión financiera, el saldo cambia dinámicamente de color: se muestra verde en condiciones normales, pasa a naranja si el saldo es igual o menor al 25% del presupuesto, y cambia a rojo si el saldo es negativo.
- **Categoría más grande:** Identifica y resalta automáticamente la categoría en la que se concentra el mayor volumen de gastos (por ejemplo, "Hogar").
- **Estadísticas por categoría:** Agrupa y suma el total invertido en diferentes rubros, tales como Comida, Comer fuera, Transporte, Hogar y Suscripciones.
- **Lista de gastos:** Un registro visual detallado donde el usuario puede observar cada gasto individual ingresado en el sistema.
- **Ingreso de nuevos gastos:** Mediante el botón "Nuevo gasto", los usuarios pueden registrar transacciones y asignarlas a su categoría correspondiente.

Mi rol en este proyecto se centró en el desarrollo de la lógica matemática utilizando JavaScript dentro del archivo `calculations.js`. Para estructurar el procesamiento de datos y la actualización de la interfaz, implementé el uso de arrays, funciones modulares y llamadas entre funciones.

## Tecnologías utilizadas

- JavaScript (JS)
- Git y GitHub (Control de versiones)

## Instalación y uso

1. **Clona el repositorio:**
   Abre tu terminal y escribe el siguiente comando:

   ```bash
   git clone https://github.com/DamagedSociety/web_project_expenses_es.git
   ```

2. **Abre el archivo en tu navegador:**
   Navega hasta la carpeta del proyecto y abre el archivo `index.html` en tu navegador web de preferencia, o utiliza una extensión como "Live Server" en tu editor de código para una experiencia automática.

3. El proyecto también se encuentra desplegado y listo para su visualización en vivo en el siguiente enlace: https://damagedsociety.github.io/web_project_expenses_es/

## Planes de mejora

- Agregar fecha para cada entrada nueva de gastos (al clickear el botón "Nuevo gasto" y agregar un registro con su categoría, guardar y mostrar la fecha exacta de la transacción).

- Implementar persistencia de datos mediante una base de datos.

- Permitir la creación de categorías de gastos personalizadas por el usuario.
