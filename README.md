<div align="center">

  # 💻 macOS Portfolio & Interactive OS Simulator
  
  *A fully interactive, macOS-inspired portfolio web application built to bring a unique desktop experience directly to the browser.*

  [![Live Demo](https://img.shields.io/badge/Live-Website-blue?style=for-the-badge&logo=firebase)](http://harshit-portfolio-x.web.app/)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

---

## ✨ Overview

This project moves away from traditional, static portfolios by simulating a complete desktop operating system environment. Visitors can interact with draggable windows, explore project files in a custom Finder interface, read certifications through Safari, look through a personal photo gallery, and view an embedded resume.

---

## 🚀 Key Features

* **🖥️ Interactive macOS Desktop**: Dock navigation, draggable window wrappers, custom control buttons, and responsive grid layouts.
* **📂 Dynamic Finder**: Browse categories like *Work* and *About Me*, click into folders, and launch projects.
* **🌐 Safari Certificate Viewer**: Inspect professional certifications and badges with direct verification links.
* **📸 Photo Gallery**: An integrated gallery app that lets users click thumbnails to pop open a detailed image viewer.
* **📄 Integrated Resume Viewer**: A dedicated window layout for viewing and saving professional credentials.

---

## 🛠️ Tech Stack

* **Frontend Framework**: React, Vite
* **Styling**: Tailwind CSS, `clsx`
* **State Management**: Zustand
* **Deployment & Hosting**: Firebase Hosting

---

## 📁 Project Structure

```text
src/
├── components/   # Dock, Navbar, Window Controls, Welcome screen
├── constants/    # Centralized app data, window configurations, and project nodes
├── hoc/          # High-Order Components (Window wrappers & drag mechanics)
├── store/        # Zustand state stores (Window states & active Finder locations)
├── windows/      # Individual window content apps (Finder, Safari, Photos, Resume, Text, etc.)
├── App.jsx       # Root operating system environment controller
└── main.jsx      # Application entry point
