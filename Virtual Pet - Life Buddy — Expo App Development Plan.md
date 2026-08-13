# Virtual Pet / Life Buddy

A cross-platform mobile app built with **Expo + React Native + TypeScript**, developed primarily on Windows and released to both Google Play Store and Apple App Store.

## 1. Project Goal

Create an enjoyable virtual pet / life companion app where users can:

- Adopt and customize a virtual pet
- Interact with their pet
- Feed, play with, and care for the pet
- Build a relationship with the pet
- Complete daily activities
- Earn XP, coins, and rewards
- Chat with an AI-powered pet
- Develop the pet's personality over time
- Receive reminders and notifications
- Eventually purchase premium features

## 2. Technology Stack

### Frontend

- Expo
- React Native
- TypeScript
- Expo Router
- NativeWind or another lightweight styling system

### Backend

- Supabase
- PostgreSQL
- Supabase Authentication
- Supabase Storage
- Edge Functions/API where required

### AI

- AI API for pet conversations
- AI-generated responses
- Pet personality system
- Future AI-generated content

### Development

- Windows PC
- VS Code
- Node.js
- Git
- GitHub
- Android Studio
- Android Emulator
- Physical Android device
- Expo Go

### Production Build

- Expo EAS Build

### Publishing

- Google Play Console
- Apple App Store Connect

---

# 3. Development Environment

The development environment will be designed so that most development can happen on Windows.

```text
Windows PC
│
├── VS Code
├── Node.js
├── Expo
├── React Native
├── TypeScript
├── Git
├── GitHub
└── Android Studio
```

For iOS:

```text
Windows PC
      │
      ↓
Expo / React Native
      │
      ↓
Expo Go / iPhone testing
      │
      ↓
EAS Build
      │
      ↓
Apple App Store
```

A Mac is not required to begin development.

---

# 4. Development Roadmap

## Phase 1 — Project Setup

- [ ] Install Node.js
- [ ] Install Git
- [ ] Install VS Code
- [ ] Install Android Studio
- [ ] Install/configure Expo
- [ ] Configure Android SDK
- [ ] Create Expo project
- [ ] Configure TypeScript
- [ ] Initialize Git repository
- [ ] Create GitHub repository
- [ ] Run the app on Windows
- [ ] Run the app on Android
- [ ] Test with Expo Go

---

# 5. Project Architecture

Recommended structure:

```text
virtual-pet/
│
├── app/
│   ├── (auth)/
│   │   ├── login.tsx
│   │   └── register.tsx
│   │
│   ├── (tabs)/
│   │   ├── index.tsx
│   │   ├── pet.tsx
│   │   ├── activities.tsx
│   │   ├── shop.tsx
│   │   └── profile.tsx
│   │
│   ├── pet/
│   │   ├── customize.tsx
│   │   └── chat.tsx
│   │
│   └── _layout.tsx
│
├── components/
│   ├── Pet.tsx
│   ├── PetMood.tsx
│   ├── PetStats.tsx
│   ├── ActivityCard.tsx
│   ├── RewardCard.tsx
│   └── Button.tsx
│
├── hooks/
│   ├── usePet.ts
│   ├── useUser.ts
│   └── useActivities.ts
│
├── services/
│   ├── supabase.ts
│   └── ai.ts
│
├── types/
│   ├── pet.ts
│   ├── user.ts
│   └── activity.ts
│
├── constants/
│   ├── colors.ts
│   ├── pets.ts
│   └── activities.ts
│
├── assets/
│   ├── images/
│   ├── animations/
│   └── sounds/
│
└── package.json
```

---

# 6. Core App Screens

## Onboarding

The first-time user experience.

Features:

- Welcome screen
- App introduction
- Choose pet
- Choose pet name
- Choose personality
- Create account
- Start journey

---

## Home

The main dashboard.

Display:

- Pet
- Pet mood
- Pet level
- XP
- Coins
- Energy
- Hunger
- Happiness
- Daily streak
- Today's activities

Example:

```text
┌─────────────────────────┐
│        1,250 🪙         │
│                         │
│       🐶                │
│     Happy!              │
│                         │
│   ❤️ 85   ⚡ 72         │
│                         │
│   Hunger     ███████░    │
│   Happiness  ████████    │
│                         │
│ [ Feed ] [ Play ]       │
│                         │
│ Today's Goals           │
│ ✓ Drink water           │
│ ○ Take a walk           │
│ ○ Sleep early           │
└─────────────────────────┘
```

---

# 7. Virtual Pet System

Each pet has attributes.

### Basic Stats

- Hunger
- Happiness
- Energy
- Health
- Cleanliness
- Friendship
- XP
- Level

Example:

```text
Pet
├── Name
├── Species
├── Personality
├── Level
├── XP
├── Hunger
├── Happiness
├── Energy
├── Health
├── Cleanliness
└── Friendship
```

---

# 8. Pet Actions

Users can interact with their pet.

### Feed

Effects:

- Increase hunger
- Increase happiness
- Consume food

### Play

Effects:

- Increase happiness
- Increase friendship
- Consume energy

### Sleep

Effects:

- Restore energy
- Increase health

### Clean

Effects:

- Increase cleanliness
- Increase happiness

### Pet

Simple interaction that increases friendship.

---

# 9. Pet Personality

Users can choose a personality.

Possible personalities:

- Playful
- Shy
- Energetic
- Calm
- Funny
- Affectionate
- Mischievous
- Wise

Personality affects:

- Pet messages
- Pet reactions
- AI conversations
- Animation behavior
- Daily notifications

---

# 10. AI Pet Chat

Users can talk to their virtual pet.

Example:

```text
User:
I'm tired today.

Pet:
Aww... come here 🥺
You worked hard today.
Let's take a little break together.
```

The AI should maintain the pet's personality.

Example:

```text
Playful pet:
"Come on! Let's do something fun! 🐾"

Calm pet:
"Take a breath. You don't have to do everything today."

Funny pet:
"Your battery is at 3%. Mine too. 😂"
```

---

# 11. Daily Activities

The app can encourage healthy/productive habits without becoming overly complicated.

Examples:

- Drink water
- Walk
- Read
- Study
- Clean your room
- Stretch
- Sleep on time
- Write a journal entry
- Take a break
- Spend time with family

Users complete activities to earn:

- XP
- Coins
- Pet happiness
- Streaks
- Achievements

---

# 12. Rewards

Create a simple progression system.

```text
Activity
   ↓
Complete
   ↓
Earn XP + Coins
   ↓
Level Up
   ↓
Unlock
├── Food
├── Clothes
├── Accessories
├── Rooms
├── Toys
└── Pet customization
```

---

# 13. Pet Customization

Users can customize their pet.

Possible options:

- Species
- Fur color
- Eyes
- Accessories
- Hats
- Clothes
- Expressions
- Background
- Room
- Toys

---

# 14. Shop

The shop can contain virtual items.

Categories:

- Food
- Toys
- Clothes
- Accessories
- Furniture
- Decorations
- Pet skins

Initial version should use earned coins.

Premium purchases can be added later.

---

# 15. Database

Recommended Supabase structure:

```text
users
pets
pet_stats
pet_inventory
items
user_items
activities
user_activities
rewards
achievements
user_achievements
chat_messages
subscriptions
```

Example `pets`:

```text
id
user_id
name
species
personality
level
xp
created_at
updated_at
```

---

# 16. Authentication

Support:

- Email/password
- Google
- Apple

Apple Sign In becomes especially important for iOS if other third-party login providers are offered.

---

# 17. Notifications

Use Expo Notifications.

Potential notifications:

```text
"Good morning! 🐾 Your pet is waiting for you!"

"Your pet misses you! ❤️"

"Don't forget today's challenge!"

"You've kept your streak for 7 days! 🔥"
```

Notifications should be configurable by the user.

---

# 18. Monetization

Start simple.

### Free

- Basic pet
- Basic interactions
- Daily activities
- Basic AI chat
- Basic customization

### Premium

Possible features:

- More pets
- Advanced AI personality
- Premium outfits
- Premium rooms
- Exclusive animations
- More customization
- AI-generated stories
- Advanced pet memory

Avoid implementing subscriptions until the core app is fun and stable.

---

# 19. Testing Strategy

## Android

Test:

- Android Emulator
- Physical Android phone
- Different screen sizes
- Slow network
- Offline behavior
- Notifications

## iOS

Test:

- Physical iPhone through Expo Go
- EAS development build
- Production build

## General

Test:

- Login
- Registration
- Pet creation
- Pet interactions
- Data synchronization
- AI chat
- Notifications
- Purchases
- Account deletion
- Logout

---

# 20. Version Strategy

### Version 0.1

Basic prototype:

- Home
- One pet
- Feed
- Play
- Sleep
- Basic stats

### Version 0.2

- Authentication
- Database
- Pet persistence
- XP
- Levels
- Coins

### Version 0.3

- Daily activities
- Rewards
- Streaks
- Achievements

### Version 0.4

- Pet customization
- Shop
- Inventory

### Version 0.5

- AI pet chat
- Personality
- Pet memory

### Version 0.6

- Notifications
- Analytics
- Crash reporting
- Performance optimization

### Version 1.0

- Production polish
- Privacy policy
- Terms
- Store assets
- App Store listing
- Google Play listing
- iOS production build
- Android production build
- Release

---

# 21. Release Workflow

```text
Development
     ↓
Local Testing
     ↓
Android Testing
     ↓
iPhone Testing
     ↓
Bug Fixes
     ↓
EAS Development Build
     ↓
Production Build
     ↓
Google Play Internal Testing
     ↓
Apple TestFlight
     ↓
Final Testing
     ↓
Google Play Release
     ↓
Apple App Store Release
```

---

# 22. Tools and Accounts

Required:

- GitHub account
- Expo account
- Google Play Console developer account
- Apple Developer account
- Supabase account
- AI provider account

Optional:

- Sentry
- PostHog
- RevenueCat
- Figma
- Canva

---

# 23. Development Principle

Build the **smallest fun version first**.

Do not start with:

- Complex AI
- Subscriptions
- 20 pet species
- Huge item shop
- Complex social features
- Multiplayer
- Advanced animations

Start with:

```text
ONE PET
   ↓
FEED
   ↓
PLAY
   ↓
SLEEP
   ↓
PET REACTS
   ↓
USER WANTS TO COME BACK
```

Once that loop is fun, add progression, customization, AI, monetization, and social features.

---

# 24. First Milestone

The first milestone is:

> **Get a virtual pet running on an Android phone from a Windows PC.**

The first development sequence should therefore be:

```text
1. Install Node.js
2. Install Git
3. Install VS Code
4. Install Android Studio
5. Install Expo
6. Create Expo project
7. Run the default app
8. Connect Android phone
9. Run app on phone
10. Replace default screen with Virtual Pet home screen
```

After that, we build the app feature-by-feature until it is ready for **Google Play and Apple App Store release**.