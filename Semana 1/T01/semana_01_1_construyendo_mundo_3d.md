
# Taller - Construyendo el Mundo 3D: Vértices, Aristas y Caras

## Objetivo del taller

Comprender las estructuras gráficas básicas que forman los modelos 3D (mallas poligonales) y visualizar su estructura en distintas plataformas. Se explorará la diferencia entre vértice, arista y cara, así como el contenido de formatos de archivo estándar de malla como `.OBJ`, `.STL` y `.GLTF`.

---

## Actividades por entorno

Cada estudiante debe desarrollar el ejercicio y documentar los resultados en el `README.md`.

---

### 1. Three.js con React Three Fiber

**Escenario:**

- Crear un proyecto con Vite y React Three Fiber.
- Cargar un modelo 3D en formato `.OBJ`, `.STL` o `.GLTF` usando `@react-three/drei`.
- Visualizar el modelo con `OrbitControls`.
- Resaltar vértices, aristas o caras usando efectos visuales como líneas (`Edges`, `Wireframe`) o puntos (`Points`).
- Bonus: crear una pequeña interfaz para cambiar entre visualización de vértices/aristas/caras y mostrar información básica del modelo (número de vértices, etc.).

---

### 2. Unity (versión LTS) (Opcional)

**Escenario:**

- Crear una escena 3D e importar un archivo `.OBJ` o `.STL`.
- Usar un script en C# para:
 - Imprimir el número de vértices, triángulos y sub-mallas del modelo cargado.
 - Activar visualización en modo *wireframe* (aristas) desde el editor o mediante `Gizmos`.
- Opcional: implementar botones UI para alternar entre vista sólida y estructura.

---

### 3. Python (Colab o Jupyter Notebook)

**Herramientas:** `trimesh`, `vedo`, `numpy`, `matplotlib`

- Cargar modelos `.OBJ`, `.STL` o `.GLTF` usando `trimesh` o `vedo`.
- Visualizar malla 3D con colores distintos para vértices, aristas y caras.
- Mostrar información estructural del modelo: número de vértices, aristas y caras.
- *Opcional:* generar una animación rotando la malla y exportarla como GIF o video.

---

## Entrega

Crear carpeta con el nombre: `semana_1_1_construyendo_mundo_3d` en tu repositorio de GitLab.

Dentro de la carpeta, crear la siguiente estructura:

```
semana_1_1_construyendo_mundo_3d/
├── python/
├── unity/
├── threejs/
├── media/ # Imágenes, videos, GIFs de resultados
└── README.md
```

### Requisitos del README.md

El archivo `README.md` debe contener obligatoriamente:

1. **Título del taller**: Taller Construyendo Mundo 3D
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
- Nombre de carpeta correcto: `semana_1_1_construyendo_mundo_3d`
