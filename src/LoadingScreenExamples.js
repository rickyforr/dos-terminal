import { useEffect } from "react";
import { useOutputHandler, CommandScreen, Output } from "react-dos-terminal";

export const LoadingScreenExample1 = () => {
  return (
    <div style={{ margin: "8px" }}>
      <h1>Hello, Terminal!</h1>
      <h2>You can output anything</h2>
      <div> This is just a showcase! </div>
      <div> Loading...</div>
    </div>
  );
};

export const LoadingScreenExample2 = () => {
  const outputHandler = useOutputHandler({
    initialOutput: "<h1>Hello, Terminal!</h1>",
    shouldTypewrite: true
  });

  useEffect(() => {
    outputHandler.typewriter.changeTypeInterval(120);
    outputHandler.addToQueue([
      { action: "add", value: "<h2>You can output anything</h2>" },
      { action: "add", value: "This is just a showcase!" },
      { action: "remove", value: 2 }
    ]);
  }, []);

  return (
    <CommandScreen
      fullscreen={true}
      colors={{
        background: "#0000aa",
        color: "#ffffff"
      }}
    >
      <Output>
        <Output.Typewriter output={outputHandler} />
        {!outputHandler.typewriter.isTypewriting && (
          <Output.Print output={"Loading..."} flashing={true} />
        )}
      </Output>
    </CommandScreen>
  );
};
