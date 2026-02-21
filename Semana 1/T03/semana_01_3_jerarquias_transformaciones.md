
# Taller - Jerarquías y Transformaciones: El Árbol del Movimiento

## Objetivo del taller

Aplicar estructuras jerárquicas y árboles de transformación para organizar escenas y simular movimiento relativo entre objetos. Se busca comprender cómo las transformaciones afectan a los nodos hijos en una estructura padre-hijo y cómo visualizar estos efectos en tiempo real.

---

## Actividades por entorno

Cada estudiante debe desarrollar el ejercicio y documentar los resultados en el `README.md`.

---

### 1. Three.js con React Three Fiber

**Escenario:**

- Crear un proyecto con Vite y React Three Fiber.
- Crear una estructura padre-hijo usando `<group>` y varios objetos (`<mesh>`).
- Aplicar transformaciones al nodo padre (rotación y traslación) y observar el comportamiento de los hijos.
- Usar `dat.GUI` o `leva` para controlar la rotación y traslación en tiempo real con sliders.
- Bonus: agregar un tercer nivel en la jerarquía para visualizar transformaciones encadenadas.

---

### 2. Unity (versión LTS)

**Escenario:**

- Crear una escena 3D con al menos 3 objetos anidados jerárquicamente (padre → hijo → nieto).
- Crear un script en C# para controlar las transformaciones del nodo padre con sliders (UI).
- Observar cómo los objetos hijos heredan las transformaciones.
- Mostrar los valores actuales de posición, rotación y escala en la interfaz o consola.
- Bonus: animar el movimiento del padre y permitir pausarlo/reiniciarlo desde la UI.

---

## Entrega

Crear carpeta con el nombre: `semana_1_3_jerarquias_transformaciones` en tu repositorio de GitLab.

Dentro de la carpeta, crear la siguiente estructura:

```
semana_1_3_jerarquias_transformaciones/
├── unity/
├── threejs/
├── media/ # Imágenes, videos, GIFs de resultados
└── README.md
```

### Requisitos del README.md

El archivo `README.md` debe contener obligatoriamente:

1. **Título del taller**: Taller Jerarquias Transformaciones
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
- Nombre de carpeta correcto: `semana_1_3_jerarquias_transformaciones`
