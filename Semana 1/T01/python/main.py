import trimesh
import matplotlib.pyplot as plt

ruta_archivo = 'modelo.gltf'
modelo = trimesh.load(ruta_archivo, force='mesh')

if isinstance(modelo, trimesh.Scene):
    geometrias = list(modelo.geometry.values())
    malla = trimesh.util.concatenate(geometrias)
else:
    malla = modelo

print(f"Vértices: {len(malla.vertices)}")
print(f"Caras: {len(malla.faces)}")
print(f"Aristas: {len(malla.edges)}")

x = malla.vertices[:, 0]
y = malla.vertices[:, 1]
z = malla.vertices[:, 2]

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot(111, projection='3d')

ax.scatter(x, y, z, c='cyan', s=1.0, alpha=0.6)

ax.set_facecolor('#1a1a1a') 
fig.patch.set_facecolor('#1a1a1a')
ax.xaxis.label.set_color('white')
ax.yaxis.label.set_color('white')
ax.zaxis.label.set_color('white')
ax.tick_params(colors='white')

plt.show()