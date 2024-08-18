type BopomofoKeybaordKeyProps = {
    character: string;
}


function BopomofoKeybaordKey(props: BopomofoKeybaordKeyProps) {
  return (
    <div className="keyboard-key">{props.character}</div>
  );
}

export default function BopomofoKeybaord() {

  var row1: BopomofoKeybaordKeyProps[] = [
    { character: "`" },
    { character: "ㄅ" },
    { character: "ㄉ" },
    { character: "ˇ" },
    { character: "ˋ" },
    { character: "ㄓ" },
    { character: "ˊ" },
    { character: "ㄚ" },
    { character: "ㄞ" }, 
    { character: "ㄢ" },
    { character: "ㄦ" },
    { character: "=" }
  ];
  var row2: BopomofoKeybaordKeyProps[] = [
    { character: "ㄆ" },
    { character: "ㄊ" },
    { character: "ㄍ" },
    { character: "ㄐ" },
    { character: "ㄔ" },
    { character: "ㄗ" },
    { character: "一" },
    { character: "ㄛ" },
    { character: "ㄟ" },
    { character: "ㄣ" },
  ];
  var row3: BopomofoKeybaordKeyProps[] = [
    { character: "ㄇ" },
    { character: "ㄋ" },
    { character: "ㄎ" },
    { character: "ㄑ" },
    { character: "ㄕ" },
    { character: "ㄘ" },
    { character: "ㄨ" },
    { character: "ㄜ" },
    { character: "ㄠ" },
    { character: "ㄤ" },
  ];
  var row4: BopomofoKeybaordKeyProps[] = [
    { character: "ㄈ" },
    { character: "ㄌ" },
    { character: "ㄏ" },
    { character: "ㄒ" },
    { character: "ㄖ" },
    { character: "ㄗ" },
    { character: "ㄩ" },
    { character: "ㄝ" },
    { character: "ㄡ" },
    { character: "ㄥ" },
  ];

  //var row1View = ;
  return (
    <div>
      <div>
        {row1.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} key={index}/>))}
      </div>
      <div className="keyboard-row-2">
        {row2.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} key={index}/>))}
      </div>
      <div className="keyboard-row-3">
        {row3.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} key={index}/>))}
      </div>
      <div className="keyboard-row-4">
        {row4.map((characterProp: BopomofoKeybaordKeyProps, index: number) => (<BopomofoKeybaordKey character={characterProp.character} key={index}/>))}
      </div>
    </div>
  );
}