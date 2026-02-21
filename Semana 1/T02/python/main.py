import trimesh
import os
import matplotlib.pyplot as plt

# 1. Asegurar que trabajamos en la carpeta exacta del script
directorio_actual = os.path.dirname(os.path.abspath(__file__))
ruta_gltf = os.path.join(directorio_actual, 'modelo.gltf')
ruta_obj = os.path.join(directorio_actual, 'modelo.obj')
ruta_stl = os.path.join(directorio_actual, 'modelo.stl')

print(f"Buscando modelo en: {ruta_gltf}")

# 2. Cargar el modelo base
modelo_base = trimesh.load(ruta_gltf, force='mesh')

if isinstance(modelo_base, trimesh.Scene):
    malla = trimesh.util.concatenate(list(modelo_base.geometry.values()))
else:
    malla = modelo_base

# 3. Convertir y exportar a OBJ y STL
print(f"Guardando OBJ en: {ruta_obj}")
malla.export(ruta_obj)

print(f"Guardando STL en: {ruta_stl}")
malla.export(ruta_stl)

print("¡Archivos .obj y .stl generados con éxito!\n")

# 4. Comparación automatizada
formatos = [ruta_gltf, ruta_obj, ruta_stl]
nombres = ['GLTF', 'OBJ', 'STL']

for ruta, nombre in zip(formatos, nombres):
    m = trimesh.load(ruta, force='mesh')
    if isinstance(m, trimesh.Scene):
        m = trimesh.util.concatenate(list(m.geometry.values()))
    
    print(f"--- Análisis de {nombre} ---")
    print(f"Vértices: {len(m.vertices)}")
    print(f"Caras: {len(m.faces)}")
    print(f"¿Es hermético (Watertight)?: {m.is_watertight}\n")

# 5. Visualizar el modelo STL generado
x = malla.vertices[:, 0]
y = malla.vertices[:, 1]
z = malla.vertices[:, 2]

fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(111, projection='3d')
ax.scatter(x, y, z, c='#ff7f0e', s=1.0, alpha=0.5)

ax.set_facecolor('#1a1a1a') 
fig.patch.set_facecolor('#1a1a1a')
ax.tick_params(colors='white')
plt.title("Visualización del modelo convertido (STL)", color='white')
plt.show()
