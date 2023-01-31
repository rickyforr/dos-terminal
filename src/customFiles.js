import { hangman, Hangman } from "./Hangman/hangman";
import { fileSystemHelper } from "react-dos-terminal";

const customFiles = [
  {
    name: "readme.txt",
    type: "text/plain",
    content: "This is a one line README file.",
    attributes: "p"
  },
  {
    name: "readme2.txt",
    type: "text/plain",
    content: [
      "This is a multiline line README file.",
      "Test it!! ",
      "",
      "You can have empty lines...",
      "",
      "and <span style='color:white'>whatever</span> you want!!!"
    ],
    attributes: "p"
  },
  {
    name: "games",
    type: "directory",
    attributes: "p",
    content: [
      {
        name: "hangman.exe",
        type: "application/executable",
        content: {
          name: "hangman",
          action: hangman,
          help: ["Just a hangman game"]
        },
        attributes: "p",
        size: fileSystemHelper.getFakeFileSize([Hangman])
      }
    ]
  }
];

export default customFiles;
