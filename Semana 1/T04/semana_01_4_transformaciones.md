
# Taller 0 - Transformaciones Básicas en Computación Visual

## Objetivo del Taller

Explorar los conceptos fundamentales de **transformaciones geométricas** (traslación, rotación y escala) en distintos entornos de programación visual. 
Cada estudiante debe crear un **"Hola Mundo Visual"** donde se muestre un objeto o escena básica y se le apliquen **transformaciones estáticas y animadas en función del tiempo**.

---

## Actividades por Entorno

Cada estudiante debe desarrollar el ejercicio en **todos los entornos** descritos a continuación y documentar brevemente los resultados en el `README.md` correspondiente.

---

### 1. Python (Colab o Jupyter Notebook)

**Herramientas:** `matplotlib`, `numpy`, `imageio`

- Crear una figura 2D con puntos o formas.
- Aplicar traslación, rotación y escala usando **matrices de transformación**.
- Generar una animación (usando bucles o interpolación).
- Animar la transformación en función del **tiempo (`t`)** o del **frame**.
- Exportar como **GIF animado** con `imageio`.
- **Opcional:** mostrar la matriz resultante de cada transformación y cómo cambia con el tiempo.

---

### 2. Unity (versión LTS) *(Opcional)*

**Escenario:**

- Crear un proyecto vacío en 3D.
- Agregar un **cubo o esfera** a la escena.
- Crear un script en C# que aplique:
 - Traslación aleatoria por eje X o Y cada ciertos segundos.
 - Rotación constante dependiente de `Time.deltaTime`.
 - Escalado oscilante en función de `Mathf.Sin(Time.time)`.

**Requisitos:** usar `transform.Translate()`, `transform.Rotate()`, `transform.localScale`.

---

### 3. Three.js con React Three Fiber

**Escenario:**

- Crear un proyecto con **Vite** y **React Three Fiber**.
- Agregar un objeto 3D (cubo o esfera).
- Aplicar animaciones con `useFrame` para:
 - Trasladar el objeto por una trayectoria **senoidal o circular**.
 - Rotarlo sobre su propio eje con incremento en cada frame.
 - Escalarlo suavemente con una función temporal (`Math.sin(clock.elapsedTime)`).

**Bonus:** incluir `OrbitControls` para navegar la escena.

---

### 4. 🎨 Processing (2D o 3D)

**Escenario:**

- Crear un **sketch simple** (2D o 3D).
- Dibujar una figura geométrica (`rect`, `ellipse` o `box`).
- Aplicar transformaciones usando:
 - `translate()`, `rotate()`, `scale()`.
 - `pushMatrix()` y `popMatrix()` para aislar transformaciones.
 - `frameCount`, `millis()` o `sin()` para animar con el tiempo.

**Ejemplo:** un cubo que gira, se traslada de forma ondulada y se escala cíclicamente en función del tiempo transcurrido.

---

## Entrega

Crear carpeta con el nombre: `semana_1_4_transformaciones` en tu repositorio de GitLab.

Dentro de la carpeta, crear la siguiente estructura:

```
semana_1_4_transformaciones/
├── python/
├── unity/
├── threejs/
├── media/ # Imágenes, videos, GIFs de resultados
└── README.md
```

### Requisitos del README.md

El archivo `README.md` debe contener obligatoriamente:

1. **Título del taller**: Taller Transformaciones
2. **Nombre del estudiante**
3. **Fecha de entrega**
4. **Descripción breve**: Explicación del objetivo y lo desarrollado
5. **Implementaciones**: Descripción de cada implementación realizada por entorno
6. **Resultados visuales**: 
 - **Imágenes, videos o GIFs** que muestren el funcionamiento
 - Deben estar en la carpeta `media/` y referenciados en el README
 - Mínimo 2 capturas/GIFs por implementación
7. **Código relevante**: Snippets importantes o enlaces al código
8. **Prompts utilizados**: Descripción de prompts usados (si aplicaron IA generativa)
9. **Aprendizajes y dificultades**: Reflexión personal sobre el proceso

### Estructura de carpetas

- Cada entorno de desarrollo debe tener su propia subcarpeta (`python/`, `unity/`, `threejs/`, etc.)
- La carpeta `media/` debe contener todos los recursos visuales (imágenes, GIFs, videos)
- Nombres de archivos en minúsculas, sin espacios (usar guiones bajos o guiones medios)

---

## Criterios de evaluación

- Cumplimiento de los objetivos del taller
- Código limpio, comentado y bien estructurado
- README.md completo con toda la información requerida
- Evidencias visuales claras (imágenes/GIFs/videos en carpeta `media/`)
- Repositorio organizado siguiendo la estructura especificada
- Commits descriptivos en inglés
- Nombre de carpeta correcto: `semana_1_4_transformaciones`

## 📄 Contenido del `README.md`

- Breve explicación de cada implementación.
- Capturas de pantalla o **GIFs animados obligatorios** para mostrar las transformaciones en movimiento.
- Código relevante o enlaces a cada entorno si no es posible cargarlo directamente.

---

## Criterios de Evaluación

 Transformaciones aplicadas correctamente 
 Transformaciones animadas en función del tiempo 
 Estructura del repositorio ordenada 
 Código documentado y limpio 
 Commits en inglés y descriptivos 
 `README.md` completo, claro y con GIFs en talleres que lo requieran

---