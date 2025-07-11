# Next.js Dashboard

Este es un proyecto de Dashboard construido con **Next.js App Router**, usando una base de datos **PostgreSQL** alojada en **Neon**, y desplegado en **Vercel**. El diseño ha sido completamente rediseñado utilizando componentes de **shadcn/ui**.

## ✨ Características

- ✔️ App Router de Next.js (`app/` directory)
- ✔️ Base de datos PostgreSQL con Neon
- ✔️ Autenticación con NextAuth (beta v5)
- ✔️ Componentes modernos con shadcn/ui (Radix UI + Tailwind)
- ✔️ Visualizaciones con Recharts
- ✔️ Tema oscuro/claro (usando `next-themes`)
- ✔️ Drag & Drop con `@dnd-kit`
- ✔️ Deploy listo en Vercel

## 🚀 Tecnologías

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Neon](https://neon.tech/)
- [NextAuth.js](https://next-auth.js.org/)
- [Recharts](https://recharts.org/)
- [@dnd-kit](https://dndkit.com/)
- [Zod](https://zod.dev/)

## 🔧 Instalación

Cloná el proyecto y seguí estos pasos:

```bash
pnpm install
pnpm dev

    ⚠️ Requiere Node.js v18+ y PNPM instalado globalmente.

⚙️ Variables de entorno

Crea un archivo .env.local basado en el .env.example y completalo con tus datos:

DATABASE_URL=postgres://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000

📦 Deploy

Este proyecto está desplegado en Vercel, con integración automática desde GitHub.
📁 Estructura del Proyecto

app/
 ├─ dashboard/       ← vistas protegidas
 ├─ api/             ← rutas de API (auth, data)
 └─ layout.tsx       ← layout principal

lib/
 └─ data.ts          ← funciones para acceder a la DB

components/
 ├─ ui/              ← componentes reutilizables (shadcn)
 └─ charts/          ← componentes de gráficas

🙌 Agradecimientos

    Next.js Learn Starter

    shadcn/ui

    Postgres.js

📜 Licencia

Este proyecto es de código abierto bajo la licencia MIT.
```
