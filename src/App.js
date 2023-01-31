import "./styles.css";
import { Terminal, colorsHelper } from "react-dos-terminal";
import customCommands from "./customCommands";
import customFiles from "./customFiles";
import {
  //LoadingScreenExample1,
  LoadingScreenExample2
} from "./LoadingScreenExamples";

export default function App() {
  const config = {
    loadingScreen: {
      showLoadingScreen: "first-time", // "always" | "never" | "first-time"
      //messageOrElement: <LoadingScreenExample1 />,
      messageOrElement: <LoadingScreenExample2 />,
      // messageOrElement: [
      //   "Installing IOS react-dos-terminal",
      //   "",
      //   "Please wait...",
      //   ""
      // ],
      loadingTime: 10000 //change this to fit your loading screen
    },
    terminal: {
      colors: {
        background: colorsHelper.getColorByName("black"),
        color: colorsHelper.getColorByName("green")
      },
      autoFocus: true,
      showOldScreenEffect: true,
      initialOutput: [
        "Welcome to my custom terminal",
        "",
        "Type &lt; help &gt; to get started",
        ""
      ],
      defaultPrompt: "$d - $t$_$p$g",
      shouldTypewrite: true
    },
    commands: {
      customCommands,
      // excludeInternalCommands: [] | "all" | "dev",
      shouldAllowHelp: true
      // messages: { // %n or %N -> command name, lowercase or uppercase
      //     toBeImplemented: `Error: "%n" command hasn't been implemented.`,
      //     notFound: `Error: "%n" is not a valid command.`,
      //     cantBeExecuted: `Error: "%n" can't be executed.`,
      //     helpNotAvailable: `Error: there isn't any help available for command "%n"`,
      //     isAlreadyRunning: `Error: "%n" is already running.`,
      // },
    },
    fileSystem: {
      customFiles,
      systemPaths: ["", "system"],
      initialDir: "",
      useFakeFileSystem: true,
      excludeInternalFiles: false
    },
    shouldPersisteUserData: false
  };

  return (
    <div className="App">
      <h1>Hello react-dos-terminal</h1>
      <div className="container">
        <Terminal config={config} id="codeSandBox" />
      </div>
    </div>
  );
}
