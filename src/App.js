import { useState } from "react";
import "./styles.css";

export default function App() {
  let interpretorStyle = {
    padding: "1rem",
    fontWeight: "bold"
  };
  let emojiBankStyle = {
    fontSize: "2rem",
    padding: "0.5rem",
    cursor: "pointer"
  };
  let emojiBank = {
    "😊": "Smiling",
    "😳": "Disbelief",
    "😔": "Sad",
    "🥡": "Takeout box",
    "❤️": "Love",
    "😑": "Annoyance",
    "😂": "Face with tears of joy",
    "🤣": "Rolling on the floor ",
    "😅": "Grinning face with sweat",
    "😆": "Grinning squinting face",
    "😇": "Smiling face with halo",
    "😉": "Winking face",
    "😍": "Smiling face with heart-eyes",
    "🤩": "Star-struck",
    "😘": "Face blowing a kiss",
    "😙": "kissing face with smiling eyes",
    "🤓": "Nerd",
    "😎": "cool",
    "🥳": "Party",
    "😲": "Astonised",
    "🙈": "See No evil",
    "🙉": "Hear No evil",
    "🙊": "Speak No evil",
    "💋": "Kiss",
    "💌": "Love letter",
    "👌": "Ok",
    "✌": "Victory",
    "🤟": "Love You",
    "🤘": "Horny Love",
    "🤙": "Call me",
    "🙏": "Namaste",
    "👏": "Clapping"
  };
  const [emojiMeaning, setemojiMeaning] = useState(
    "Interpretation will Appear Here..."
  );
  function emojiInputHandler(event) {
    let input = event.target.value;
    if (input in emojiBank) {
      setemojiMeaning(emojiBank[input]);
    } else {
      setemojiMeaning("Not Found");
    }
  }

  function emojiClickHandler(item) {
    setemojiMeaning(emojiBank[item]);
  }
  return (
    <div className="App">
      <h1>
        Emoji <span style={{ color: "hotpink" }}>App</span>
      </h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Paste an emoji here to know the name"
      />
      <div style={interpretorStyle}>{emojiMeaning}</div>

      {Object.keys(emojiBank).map((item) => {
        return (
          <span
            key={item}
            onClick={() => emojiClickHandler(item)}
            style={emojiBankStyle}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
