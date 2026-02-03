# 🎯 Guess The Number Web App

A fully interactive **Number Guessing Game** built using **HTML, CSS,
and Vanilla JavaScript**.\
This project teaches real-time validation, DOM manipulation, game logic,
and state management --- making it ideal for beginners and JavaScript
learners.

The goal is simple:\
Guess a random number between **1 and 100** in **10 attempts**.

------------------------------------------------------------------------

## 🚀 Features

-   🔢 Random number generation\
-   🎮 10-attempt gameplay\
-   ❗ Input validation\
-   📝 Shows previous guesses\
-   ⏳ Displays remaining attempts\
-   📣 Dynamic messaging\
-   🔄 "Start New Game" option\
-   🎨 Simple, responsive UI

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **HTML5** --- Structure & form layout\
-   **CSS3** --- Styling and layout\
-   **JavaScript (Vanilla)** --- Game logic & DOM manipulation

------------------------------------------------------------------------

## 📂 Project Structure

    Guess-The-Number/
    │── index.html     # UI structure
    │── style.css      # Styling & layout
    └── app.js         # Game logic & interactions

------------------------------------------------------------------------

## ⚙️ How It Works

### 1️⃣ Random Number Generation

A number between 1--100 is generated using:

    let randomNum = parseInt(Math.random() * 100 + 1);

### 2️⃣ User Guess Handling

Each guess is: - Checked for validity\
- Added to previous guess list\
- Compared with the random number\
- Used to update attempt count

### 3️⃣ Game Over

If attempts reach 10 or the guess is correct: - Input is disabled\
- A new game button appears

### 4️⃣ Game Restart

Resets: - Random number\
- Previous guesses\
- Attempt counter\
- Input field

------------------------------------------------------------------------

## ▶️ How to Run

1.  Download/extract the project\
2.  Open **index.html**\
3.  Enter a number & submit your guess\
4.  Try to win within 10 attempts!

*No installation required.*

------------------------------------------------------------------------

## 📌 Learning Outcomes

-   DOM manipulation\
-   Form validation\
-   Game-state management\
-   Using arrays for guess history\
-   Dynamic HTML updates\
-   JavaScript conditionals & loops

------------------------------------------------------------------------

## 📌 Limitations

-   Only one difficulty level\
-   Simple UI (by design)\
-   No animations or sound

------------------------------------------------------------------------

## 💡 Future Enhancements

-   Difficulty levels\
-   Sound effects\
-   Modern UI theme\
-   Timer mode\
-   Scoreboard (LocalStorage)\
-   Animations for success/failure

------------------------------------------------------------------------

## 📄 License

MIT License --- free to use, modify, and distribute.

------------------------------------------------------------------------

## 👤 Author

**Debashis Patra**

Enjoy enhancing this fun JavaScript project! 🚀
