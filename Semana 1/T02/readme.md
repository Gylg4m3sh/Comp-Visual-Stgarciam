# Taller Conversion Formatos 3D

Stephan A. R. Garcia M.
 21/02/26


En este taller se compararon y convirtieron distintos formatos de modelos 3D (`.GLTF`, `.OBJ` y `.STL`). El objetivo principal fue entender cómo se estructura internamente la geometría en cada tipo de archivo, realizar la conversión automatizada y visualizar las diferencias de renderizado, carga y conteo de vértices en distintos entornos.

## Implementaciones

### 1. Entorno de Análisis y Conversión (Python)
Se desarrolló un script utilizando `trimesh`, `os` y `matplotlib`. El script realiza lo siguiente:
- Carga el modelo base en formato `.GLTF`.
- Convierte y exporta automáticamente la malla a formatos `.OBJ` y `.STL`.
- Compara iterativamente los tres archivos resultantes, imprimiendo en consola la cantidad de vértices, caras y comprobando si la malla es hermética (watertight).
- Renderiza un gráfico de dispersión 3D del modelo convertido.

### 2. Entorno Web (Three.js / React Three Fiber)
Se implementó una escena interactiva utilizando Vite. En este entorno:
- Se cargaron los tres modelos (`.GLTF`, `.OBJ`, `.STL`) utilizando sus respectivos loaders (`GLTFLoader`, `OBJLoader`, `STLLoader`).
- Se construyó una interfaz gráfica con botones que permite alternar dinámicamente el formato renderizado.
- Se incluyó un panel de información (Bonus) que extrae y actualiza en tiempo real la cantidad de vértices y caras estimadas del formato activo.
- Se integraron `OrbitControls` para explorar los modelos en 360 grados.

## Dificultades

Al ejecutar el script de conversión inicial, los modelos generados (.obj y .stl) no aparecían en la carpeta del proyecto. Esto ocurrió porque la terminal ejecutaba el comando desde una ruta superior, guardándolos en otro lado. Se solucionó importando la librería os de Python para detectar el directorio exacto del script (__file__) y forzar el guardado allí.


## Código Relevante

**Conversión y exportación forzada en Python:**
```python
# Uso de os para forzar la ruta absoluta
ruta_gltf = os.path.join(directorio_actual, 'modelo.gltf')
modelo_base = trimesh.load(ruta_gltf, force='mesh')

# Exportación a nuevos formatos
malla.export(os.path.join(directorio_actual, 'modelo.obj'))
malla.export(os.path.join(directorio_actual, 'modelo.stl'))


