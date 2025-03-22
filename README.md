# React Task App

Este es un proyecto de una aplicación sencilla de gestión de tareas construido con **React** y los hook `useContext` para el manejo de estado global, `useState` para manejar los estados y `useEffect` para manejar la inicialización.

## 🚀 Características
- ✅ Agregar tareas a la lista
- ❌ Eliminar tareas de la lista
- 🔄 Persistencia del estado con `useContext`

## 📌 Tecnologías utilizadas
- React.js
- Hooks (`useState`, `useContext`, `useEffect`)
- Context API
- Tailwind CSS

## 📂 Estructura del proyecto
```
📁 src
│── 📄 App.js          # Componente principal
│── 📄 TaskContext.js  # Proveedor del contexto
│── 📄 TaskList.js     # Componente de la lista de tareas
│── 📄 index.js        # Punto de entrada de la app
```

## 📥 Instalación y ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/task-manager.git
   cd task-manager
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar la aplicación en modo desarrollo:
   ```bash
   npm start
   ```

## ✨ Uso
1. Escribe una tarea en el campo de entrada.
2. Haz clic en el botón "Agregar" para añadir la tarea.
3. Para eliminar una tarea, haz clic en el botón ❌ junto a ella.

## 📜 Código clave
Ejemplo de cómo se usa `useContext` para acceder y modificar el estado:
```jsx
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

function TaskList() {
  const { tasks, addTask, removeTask } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <span>{task}</span>
          <button onClick={() => removeTask(index)}>❌</button>
        </div>
      ))}
    </div>
  );
}
```

## 📌 Contribución
Si deseas contribuir a este proyecto:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz commit (`git commit -m "Agregada nueva funcionalidad"`).
4. Envía un pull request.

## 📃 Licencia
Este proyecto está bajo la licencia **MIT**.

---
📌 **Autor:** Tu Nombre  
💻 **Repositorio:** [GitHub](https://github.com/tuusuario/task-manager)

