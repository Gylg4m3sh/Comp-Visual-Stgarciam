
# Taller - Importando el Mundo: Visualización y Conversión de Formatos 3D

## Objetivo del taller

Comparar y convertir entre distintos formatos de modelos 3D: `.OBJ`, `.STL` y `.GLTF`, y visualizar sus diferencias en geometría y materiales. El objetivo es entender la estructura interna de los archivos 3D, su compatibilidad entre entornos, y cómo se interpretan en distintas plataformas de visualización.

---

## Actividades por entorno

Se trabajará tanto en Python como en Three.js, utilizando herramientas de análisis, conversión y visualización.

---

### Python (Colab o Jupyter Notebook)

**Herramientas:** `trimesh`, `open3d`, `assimp`, `numpy`

- Cargar modelos en formatos `.OBJ`, `.STL`, `.GLTF` con `trimesh` o `open3d`.
- Comparar cantidad de vértices, caras, normales, y si hay duplicados.
- Visualizar cada modelo y sus propiedades.
- Realizar conversiones entre formatos usando `trimesh.exchange` o `assimp`.
- *Bonus:* Automatizar un script de comparación entre varios modelos.

---

### Three.js con React Three Fiber

**Escenario:**

- Cargar los tres modelos convertidos (`.OBJ`, `.STL`, `.GLTF`) en una escena.
- Permitir alternar entre ellos con botones o selectores.
- Observar diferencias en renderizado: suavidad, materiales, texturas.
- Agregar `OrbitControls` para explorar cada modelo.
- Bonus: mostrar información del modelo (número de vértices y formato) en pantalla.

---

## Entrega

Crear carpeta con el nombre: `semana_1_2_conversion_formatos_3d` en tu repositorio de GitLab.

Dentro de la carpeta, crear la siguiente estructura:

```
semana_1_2_conversion_formatos_3d/
├── python/
├── threejs/
├── media/ # Imágenes, videos, GIFs de resultados
└── README.md
```

### Requisitos del README.md

El archivo `README.md` debe contener obligatoriamente:

1. **Título del taller**: Taller Conversion Formatos 3D
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
- Nombre de carpeta correcto: `semana_1_2_conversion_formatos_3d`
