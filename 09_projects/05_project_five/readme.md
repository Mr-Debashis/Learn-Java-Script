# 🎨 Change The Background Color Web-App

A simple, fun **Background Color Changer App** built using **HTML, CSS,
and Vanilla JavaScript**.
The app changes the background color every second using a randomly
generated HEX color --- and you can start or stop the effect anytime.

------------------------------------------------------------------------

## 🚀 Features

-   🌈 Random HEX color generation
-   ⏱️ Auto background color change every second
-   🧠 Start & Stop controls
-   ⚡ Uses `setInterval()` and `clearInterval()`
-   🎨 Minimal UI
-   📱 Fully browser compatible

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **HTML5** --- Structure + buttons
-   **CSS3** --- Optional styling support
-   **JavaScript (Vanilla)** --- Logic, events, intervals

------------------------------------------------------------------------

## 📂 Project Structure

    Change-BG-Color/
    │── index.html     # Start/Stop interface
    │── style.css      # (Optional) UI styling
    └── app.js         # Random color + interval logic

------------------------------------------------------------------------

## ⚙️ How It Works

### 🎨 Random Color Generator

A HEX color is generated using characters 0--9 and A--F:

    const randomColur = function () {
        const hexCode = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hexCode[Math.floor(Math.random() * 16)];
        }
        return color;
    };

### ⏱️ Start Background Change

On clicking **Start**, the background updates every second:

    intervalID = setInterval(changeBgColor, 1000);

### ⛔ Stop Background Change

On clicking **Stop**, the interval is cleared:

    clearInterval(intervalID);
    intervalID = null;

------------------------------------------------------------------------

## ▶️ How to Run

1.  Extract the project
2.  Open **index.html**
3.  Click **Start** → background starts changing
4.  Click **Stop** → background freezes

------------------------------------------------------------------------

## 📌 Learning Outcomes

-   Generating random HEX colors
-   DOM manipulation
-   Using timers with `setInterval()`
-   Stopping timers with `clearInterval()`
-   Event-driven JavaScript programming

------------------------------------------------------------------------

## 📌 Limitations

-   No color transitions
-   No UI feedback for current color

------------------------------------------------------------------------

## 💡 Future Enhancements

-   Transition fade effects
-   Adjustable speed slider
-   Show current HEX color
-   Color history
-   Theme presets

------------------------------------------------------------------------

## 📄 License

MIT License --- free to modify & reuse.

------------------------------------------------------------------------

## 👤 Author

**Debashis Patra**

Enjoy building and extending this creative JavaScript project! 🚀
