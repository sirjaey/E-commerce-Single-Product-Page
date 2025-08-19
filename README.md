# 🧢 E-commerce Product Page (React + TypeScript + TailwindCSS)

This is a responsive e-commerce product page built with **React**, and **TypeScript**.  
It is based on the *Frontend Mentor – E-commerce Product Page* challenge.

The application mimics a single-product store, allowing users to preview product images, open a lightbox gallery, and add / remove items from the cart.

---

## 📌 Features

- **Responsive Layout**  
  Optimized for both **mobile** and **desktop** screens.

- **Thumbnail Gallery**  
  Click on a thumbnail image to update the large product preview.

- **Lightbox Modal**  
  Clicking the large product image opens a full-screen lightbox with navigation controls.

- **Cart Functionality**
  - Add products to the cart using the “Add to cart” button  
  - Cart quantity updates dynamically  
  - View cart items via the dropdown in the top-right of the page  
  - Remove items from the cart

- **Hover / Focus States**  
  All interactive elements include visible hover states (buttons, thumbnails, cart icon, etc.).

---

## 💡 Expected Behaviour

```html
<ul>
  <li>Users should be able to <strong>view the optimal layout</strong> for the site depending on their device's screen size (mobile ↔ desktop).</li>
  <li>Users should be able to <strong>see hover states</strong> for all interactive elements on the page (buttons, thumbnails, cart icon, etc.).</li>
  <li>Users should be able to <strong>open a lightbox gallery</strong> by clicking on the large product image.</li>
  <li>Users should be able to <strong>switch the large product image</strong> by clicking on the small thumbnail images.</li>
  <li>Users should be able to <strong>add items to the cart</strong> by clicking the “Add to cart” button.</li>
  <li>Users should be able to <strong>view the cart</strong> by clicking on the cart icon and <strong>remove items</strong> from it.</li>
</ul>
```
---

## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)

---

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sirjaey/interactive-card-details
   cd interactive-card-details
   ```
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Start the development server**
   ```bash
   pnpm run dev
   ```
4. **Build for production**
   ```bash
   pnpm run build
   ```
5. **Preview the production build**
   ```bash
   pnpm run preview
   ```

---

## 🧰 Available Scripts & Commands

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `pnpm run dev`     | Start development server     |
| `pnpm run build`   | Build the app for production |
| `pnpm run preview` | Preview built app locally    |

---

## ⚙️ Technology stack and architecture decisions

**⚙️ Tech Stack**

- React (with Hooks)

- Vite — for fast bundling and development

**🏗️ Architecture Decisions**

- Components

  - Attribution.tsx
  - Cart.tsx - Displays the completed state
  - DescriptionSection.tsx
  - ErrorBoundry
  - Lightbox.tsx
  - Nav.tsx
  - ProductsGallery.tsx

- App.css
- App.tsx
- Index.css
- Main.tsx - main

---

## Screenshots of key features

![Home page screenshot](./public/images/screenshot.png)
![Error State screenshot](./public/images/errorstate.png)
![Filled State screenshot](./public/images/filled.png)
![Completed State screenshot](./public/images/completed.png)

---

## 👤 Author

Frontend Developer | AltSchool | React + TypeScript Enthusiast

- GitHub - https://github.com/sirjaey
- LinkedIn - https://www.linkedin.com/in/joshua-abu-3180b0284/
- X (Twitter) - https://x.com/sirjaey_

---

## 🔗 Links

- Live Site URL: https://joshua-abu-interactive-card-details.netlify.app/
