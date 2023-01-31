const customCommands = [
  {
    name: "hi",
    alias: ["hello"],
    action: () => {
      return {
        output: [{ action: "add", value: ["Hello!! How are you?", ""] }]
      };
    },
    help: "This command prints a hello message in terminal output"
  },
  {
    name: "get",
    action: async () => {
      const callAsync = async () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 3000);
        });
      };

      await callAsync().then();

      return {
        output: [
          { action: "remove", value: 1 },
          //{ action: 'clear' },
          {
            action: "add",
            value: ["Finished async command", "Outputing data..."]
          }
        ]
      };
    },
    async: { waitingMessage: ["Getting something that takes some time..."] },
    help: "This command is an example of an async command."
  }
];

export default customCommands;
