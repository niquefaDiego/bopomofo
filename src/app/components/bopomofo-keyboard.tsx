"use client";
import { useEffect } from "react";

type BopomofoKeybaordKeyProps = {
    character: string;
    code: string;
}


function BopomofoKeybaordKey(props: BopomofoKeybaordKeyProps) {
  return (
    <div className="keyboard-key">{props.character}</div>
  );
}

export default function BopomofoKeybaord() {
  var row1: BopomofoKeybaordKeyProps[] = [
    { character: "`", code: "Backquote" },
    { character: "ㄅ", code: "Digit1" },
    { character: "ㄉ", code: "Digit2" },
    { character: "ˇ", code: "Digit3" },
    { character: "ˋ", code: "Digit4" },
    { character: "ㄓ", code: "Digit5" },
    { character: "ˊ", code: "Digit6" },
    { character: "ㄚ", code: "Digit7" },
    { character: "ㄞ" , code: "Digit8"}, 
    { character: "ㄢ", code: "Digit9" },
    { character: "ㄦ", code: "Digit0" },
    { character: "=", code: "Minus" },
  ];
  var row2: BopomofoKeybaordKeyProps[] = [
    { character: "ㄆ", code: "KeyQ" },
    { character: "ㄊ", code: "KeyW" },
    { character: "ㄍ", code: "KeyE" },
    { character: "ㄐ", code: "KeyR" },
    { character: "ㄔ", code: "KeyT"},
    { character: "ㄗ", code: "KeyY" },
    { character: "一", code: "KeyU" },
    { character: "ㄛ", code: "KeyI" },
    { character: "ㄟ", code: "KeyO" },
    { character: "ㄣ", code: "KeyP" },
  ];
  var row3: BopomofoKeybaordKeyProps[] = [
    { character: "ㄇ", code: "KeyA" },
    { character: "ㄋ", code: "KeyS" },
    { character: "ㄎ", code: "KeyD" },
    { character: "ㄑ", code: "KeyF" },
    { character: "ㄕ", code: "KeyG" },
    { character: "ㄘ", code: "KeyH" },
    { character: "ㄨ", code: "KeyJ" },
    { character: "ㄜ", code: "KeyK" },
    { character: "ㄠ", code: "KeyL" },
    { character: "ㄤ", code: "Semicolon" },
  ];
  var row4: BopomofoKeybaordKeyProps[] = [
    { character: "ㄈ", code: "KeyZ" },
    { character: "ㄌ", code: "KeyX" },
    { character: "ㄏ", code: "KeyC" },
    { character: "ㄒ", code: "KeyV" },
    { character: "ㄖ", code: "KeyB" },
    { character: "ㄗ", code: "KeyN" },
    { character: "ㄩ", code: "KeyM" },
    { character: "ㄝ", code: "KeyM" },
    { character: "ㄡ", code: "Comma" },
    { character: "ㄥ", code: "Period" },
  ];

  function handleKeyDown(event: KeyboardEvent) {
    console.log(`Highlighting key with code ${event.code}`);
    // TODO
  }

  function handleKeyUp(event: KeyboardEvent) {
    console.log(`Unhighlighting key with code ${event.code}`);
    // TODO
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("keyup", handleKeyUp, true);
  }, []);


  return (
    <div>
      <div className="keyboard-row-1">
        {row1.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} code={characterProp.code} key={characterProp.character}/>))}
      </div>
      <div className="keyboard-row-2">
        {row2.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} code={characterProp.code} key={characterProp.character}/>))}
      </div>
      <div className="keyboard-row-3">
        {row3.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} code={characterProp.code} key={characterProp.character}/>))}
      </div>
      <div className="keyboard-row-4">
        {row4.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} code={characterProp.code} key={characterProp.character}/>))}
      </div>

      <div>
        <textarea rows={4} cols={80}/>
      </div>
    </div>
  );
}