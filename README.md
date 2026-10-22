# StudyMate AI – Smart Study Planner 🎓📱

An intelligent, stress-friendly AI-powered mobile application designed for college students to manage academic pressure, assignments, examinations, and study timetables effectively.

---

## 🌟 Key Features

### 1. 📅 AI Study Timetable Generator
- **Personalized Scheduling**: Generates realistic daily and weekly study blocks based on subjects, credit loads, assignment deadlines, and exam proximity.
- **Interleaving & Spaced Repetition**: Automatically alternates subjects to prevent mental exhaustion and cramming fatigue.
- **Restorative Breaks**: Incorporates 5–15 minute restorative breaks between focus blocks.
- **Stress-Adaptive Scheduling**: Automatically caps study blocks to prevent burnout when the student feels overwhelmed.

### 2. 🎯 Smart Task Prioritization
- **Multi-Factor Priority Scoring**: Automatically calculates an urgency score ($0 - 100+$) using:
  - Due date proximity (overdue, due today, due this week)
  - Stakes weighting (Exams > Projects > Assignments > Quizzes > Readings)
  - Subject difficulty & personal importance rating
  - Subtask completion progress
- **"Highest Priority Next Action"**: Prominently highlights the exact #1 task the student should focus on right now.
- **One-Click Task Actions**: Mark complete, start a focus session, or decompose with AI.

### 3. 💡 AI Subject Simplifier & Tutor
- **Feynman Technique Explanations**: Transforms complex university topics into plain, simple English.
- **Relatable College Analogies**: Illustrates concepts with intuitive real-world metaphors.
- **Formulas & Key Takeaways**: Bulleted cheat-sheet style essentials.
- **Interactive Practice Quiz**: Instant multiple-choice questions with real-time feedback and reasoning.
- **Speech Synthesis (Read Aloud 🔊)**: Text-to-speech option via Web Speech API for hands-free audio review.
- **One-Click Schedule Integration**: Adds a 45-minute active recall review session directly into the timetable.

### 4. ⏰ Assignment & Examination Reminders
- **Browser Push Notifications**: Desktop and mobile web notification alerts for upcoming tests and assignments.
- **Deadline Center**: Categorizes tasks by Overdue, Due Today, and Upcoming Exams (next 3–7 days).
- **In-App Notification Drawer**: Instant badge counter and actionable alerts.

### 5. 📈 Academic Progress & Analytics Tracker
- **Visual 7-Day Output Chart**: Daily study hours compared against the student's study target.
- **Study Streak Counter**: Celebrates consecutive study days (🔥).
- **Subject Balance Distribution**: Visual breakdown of time invested per course.
- **Auto-Rebalance Timetable Advisor**: Detects when a student falls behind or has overdue items, with 1-click intelligent rescheduling.

### 6. 🧘 Stress-Friendly Study Mode ("Focus & Zen")
- **Custom Pomodoro Timer**: 25m Focus / 5m Break or 45m Deep Work intervals.
- **Built-in Ambient Sound Synthesizer**: 100% client-side Web Audio API synthesizer for:
  - 🌧️ Gentle Rain & Thunder
  - 🌊 Pink / Brown Noise
  - 📻 Warm Lo-Fi Drone
  - 🧠 10Hz Binaural Alpha Waves
- **4-7-8 Breathing Guide**: Visual pulsing sphere to reset exam anxiety in 60 seconds.
- **AI Task Decomposition**: Divides overwhelming assignments into 4 micro-steps.
- **Stress Check-in**: Adapts timetable density based on student mood (Low, Moderate, High, Overwhelmed).

### 7. 🤖 Dual AI Engine Architecture (Live Gemini & Offline Engine)
- **Live Gemini AI Integration**: Supports Google Gemini 2.0 / 1.5 Flash by entering an optional free Gemini API key in Settings.
- **Transparent Offline Academic Mode**: If no API key is provided or offline, the app displays a clear notification banner and switches to a curated university reasoning engine without fabricating responses or breaking functionality.
- **Strict Privacy**: API keys, course data, and timetables are stored 100% locally on the student's device via `localStorage`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6 (ultra-fast HMR and optimized bundling)
- **Styling**: Tailwind CSS with custom glassmorphism, mobile notch shells, and responsive typography
- **Audio Engine**: Web Audio API (ambient synthesizers & sound chimes)
- **Icons**: Lucide React
- **Animations & Effects**: Canvas Confetti & CSS keyframe breathers
- **Speech Engine**: Web Speech API (`SpeechSynthesis`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd StudyMate

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
```

The production-ready static assets will be compiled into the `dist/` directory.

---

## 📱 Mobile App Experience

StudyMate AI is designed from the ground up as a mobile-first application:
- On desktop browsers, click the **Device Toggle** (`📱 / 💻`) in the top navigation bar to preview StudyMate AI inside a realistic iPhone frame with dynamic island and status indicators!
- On mobile devices, the app seamlessly expands to full native screen dimensions with bottom navigation, touch-friendly tap targets, and safe area padding.
