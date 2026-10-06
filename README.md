# Romantic Birthday Surprise Web Application

A deeply personalized, cinematic, and interactive web-based birthday experience built for Birthday Girl. This application utilizes modern web animations and a carefully crafted sequential storyline to create an emotional and premium digital gift.

## 🌟 Key Features

- **Cinematic Storytelling:** Uses sequential phased rendering to guide the user through a meticulously timed emotional journey (Welcome -> Surprise -> Name Reveal -> Birthday Message -> Final Surprise).
- **Advanced Animations:** Fully powered by `framer-motion` to implement beautiful fade-ins, staggered text typography, scale transforms, and elegant micro-animations.
- **Cinematic Auto-Scroll:** Custom-built React `useEffect` hooks that calculate viewport sizes and automatically trigger a smooth, credit-style slow-scroll after specific reading intervals.
- **Responsive Photo Collage:** A beautifully gridded photo gallery featuring dynamic hover interactions.
- **Editorial Final Reveal:** A premium, two-column layout focusing on fluid typography, glowing ambient background elements, floating particles, and feathered portrait masking.
- **Seamless Background Audio:** Integrates an invisible ambient soundtrack (`remo.mpeg`) that gracefully handles browser autoplay policies by attaching to initial user interactions.
- **Fully Responsive Design:** Tailored with Tailwind CSS to ensure perfectly scaled typography and zero layout overflow across all devices, from ultrawide monitors to compact mobile screens.

## 🛠️ Tech Stack

- **Framework:** React.js powered by Vite
- **Styling:** Tailwind CSS (with custom theme extensions)
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed.

### Installation

1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure
- `src/App.jsx`: Central state machine routing between cinematic phases.
- `src/components/`: Modular UI components representing each phase of the journey.
- `src/data/birthdayConfig.js`: Centralized configuration for names, nicknames, and photo assets.
- `public/`: Static assets including background music and photography.

---

**Author**  
**Bharanidharan M**  
*Full Stack Developer*
