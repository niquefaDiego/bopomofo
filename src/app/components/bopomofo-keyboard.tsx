"use client";
import { useEffect, useState } from "react";

type BopomofoKeybaordKeyProps = {
    character: string;
    code: string;
    isPressed: boolean;
}


function BopomofoKeybaordKey(props: BopomofoKeybaordKeyProps) {
  return (
    <div className={props.isPressed ? "keyboard-key keyboard-key-pressed": "keyboard-key"}>{props.character}</div>
  );
}

export default function BopomofoKeybaord() {


  var [pressedKeyCodes, setPressedKeyCodes] = useState<Set<string>> (() => new Set<string>());

  function createKeyProps(char: string, code: string): BopomofoKeybaordKeyProps {
    return { character: char, code: code, isPressed: pressedKeyCodes.has(code) };
  }

  var row1: BopomofoKeybaordKeyProps[] = [
    createKeyProps("`", "Backquote"),
    createKeyProps("ㄅ", "Digit1"),
    createKeyProps("ㄉ", "Digit2"),
    createKeyProps("ˇ", "Digit3"),
    createKeyProps("ˋ", "Digit4"),
    createKeyProps("ㄓ", "Digit5"),
    createKeyProps("ˊ", "Digit6"),
    createKeyProps("˙", "Digit7"),
    createKeyProps("ㄚ", "Digit8"),
    createKeyProps("ㄞ" , "Digit9"),
    createKeyProps("ㄢ", "Digit0"),
    createKeyProps("ㄦ", "Minus"),
    createKeyProps("=", "Equals"),
  ];
  var row2: BopomofoKeybaordKeyProps[] = [
    createKeyProps("ㄆ", "KeyQ"),
    createKeyProps("ㄊ", "KeyW"),
    createKeyProps("ㄍ", "KeyE"),
    createKeyProps("ㄐ", "KeyR"),
    createKeyProps("ㄔ", "KeyT"),
    createKeyProps("ㄗ", "KeyY"),
    createKeyProps("一", "KeyU"),
    createKeyProps("ㄛ", "KeyI"),
    createKeyProps("ㄟ", "KeyO"),
    createKeyProps("ㄣ", "KeyP"),
  ];
  var row3: BopomofoKeybaordKeyProps[] = [
    createKeyProps("ㄇ", "KeyA"),
    createKeyProps("ㄋ", "KeyS"),
    createKeyProps("ㄎ", "KeyD"),
    createKeyProps("ㄑ", "KeyF"),
    createKeyProps("ㄕ", "KeyG"),
    createKeyProps("ㄘ", "KeyH"),
    createKeyProps("ㄨ", "KeyJ"),
    createKeyProps("ㄜ", "KeyK"),
    createKeyProps("ㄠ", "KeyL"),
    createKeyProps("ㄤ", "Semicolon"),
  ];
  var row4: BopomofoKeybaordKeyProps[] = [
    createKeyProps("ㄈ", "KeyZ"),
    createKeyProps("ㄌ", "KeyX"),
    createKeyProps("ㄏ", "KeyC"),
    createKeyProps("ㄒ", "KeyV"),
    createKeyProps("ㄖ", "KeyB"),
    createKeyProps("ㄗ", "KeyN"),
    createKeyProps("ㄩ", "KeyM"),
    createKeyProps("ㄝ", "Comma"),
    createKeyProps("ㄡ", "Period"),
    createKeyProps("ㄥ", "Slash"),
  ];


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      var newPressedKeyCodes = new Set<string>(pressedKeyCodes);
      setPressedKeyCodes(newPressedKeyCodes.add(event.code));
    }
    
    function handleKeyUp(event: KeyboardEvent) {
      var newPressedKeyCodes = new Set<string>(pressedKeyCodes);
      newPressedKeyCodes.delete(event.code);
      setPressedKeyCodes(newPressedKeyCodes);
    }

    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
  });


  return (
    <div>
      <div className="keyboard-row-1">
        {row1.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (
          <BopomofoKeybaordKey
            character={characterProp.character}
            code={characterProp.code}
            key={characterProp.character}
            isPressed={characterProp.isPressed}/>))}
      </div>
      <div className="keyboard-row-2">
        {row2.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (
          <BopomofoKeybaordKey
            character={characterProp.character}
            code={characterProp.code}
            key={characterProp.character}
            isPressed={characterProp.isPressed}/>))}
      </div>
      <div className="keyboard-row-3">
        {row3.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (
          <BopomofoKeybaordKey
            character={characterProp.character}
            code={characterProp.code}
            key={characterProp.character}
            isPressed={characterProp.isPressed}/>))}
      </div>
      <div className="keyboard-row-4">
        {row4.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (
          <BopomofoKeybaordKey
            character={characterProp.character}
            code={characterProp.code}
            key={characterProp.character}
            isPressed={characterProp.isPressed}/>))}
      </div>

      <div>
        <textarea rows={4} cols={80}/>
      </div>
    </div>
  );
}