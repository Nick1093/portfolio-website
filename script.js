const version = "NickShell [Version 0.0.0.2]";
const directory = "C:\\users\\guest";

const asciiArt =
  "███╗░░██╗██╗░█████╗░██╗░░██╗░█████╗░██╗░░░░░░█████╗░░██████╗  ██╗░░░░░░█████╗░███╗░░░███╗\n████╗░██║██║██╔══██╗██║░░██║██╔══██╗██║░░░░░██╔══██╗██╔════╝  ██║░░░░░██╔══██╗████╗░████║\n██╔██╗██║██║██║░░╚═╝███████║██║░░██║██║░░░░░███████║╚█████╗░  ██║░░░░░███████║██╔████╔██║\n██║╚████║██║██║░░██╗██╔══██║██║░░██║██║░░░░░██╔══██║░╚═══██╗  ██║░░░░░██╔══██║██║╚██╔╝██║\n██║░╚███║██║╚█████╔╝██║░░██║╚█████╔╝███████╗██║░░██║██████╔╝  ███████╗██║░░██║██║░╚═╝░██║\n╚═╝░░╚══╝╚═╝░╚════╝░╚═╝░░╚═╝░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝";

const intro =
  "Hi, I'm Nick Lam! Welcome to NickShell, my portfolio website. I am a dual degree student at Western University studying Computer Science and Business Administration from the Ivey School of Business. I'm passionate about building and learning, specifically within full-stack development and a recent interest in AI/ML. If you want to see my resume, type 'resume'.\n\nType 'help' or 'h' to see what other commands are available. Have fun exploring this site!";
var prevCommands = [];
var commandPlace = -1;

const projects = {
  ETFDB: {
    description:
      "My first project at my first co-op, it was a full stack application that focused on ETFs and providing smart financial data for investors. There were algorithms and predicted data systems that truly empowered investors on the platform. To this day, it still gets millions of visitors every month!",
    stack: ["Ruby on Rails", "Javascript", "MySQL", "AWS"],
  },
  Propelor: {
    description:
      "This project was a platform for investors to be able to track their stocks, bonds, and much more! It gave lots of overarching data analysis and was a great tool for investors to use. I worked on the frontend, backend, and devops of the project, and it was a great experience! It leveraged the React component system for tons of reusable code and consistent site elements.",
    stack: ["ReactJS", "NodeJS", "MySQL --> MongoDB (migrated)", "Docker"],
  },
  Atmos: {
    description:
      "I relocated to the United States to join Atmos as a SWE in 2022, and this was my favorite project yet! We built an enterprise level platform for VCs and startups to track their ESG data and make better decisions. I built every corner of this app with my team, from devops to the frontend and used industry standards and followed best practices! We raised millions of dollars!",
    stack: [
      "PERN Stack (PostgreSQL, Express, React, NodeJS --> with Typescript)",
      "Digital Ocean",
      "AWS",
    ],
    link: "Atmos.ai",
  },
  LOGO: {
    description: "Still in progress!",
    stack: ["VueJS", "NextJS", "ReactJS", "AWS"],
    link: "Logo.com",
  },
};

const commands = {
  contact: () => {
    window.open("mailto:nlam.hba2025@ivey.ca", "_blank").focus();
  },
  intro: () => {
    print(intro);
  },
  ls: () => {
    for (const project in projects) {
      print(project);
    }
  },
  cd: (project_name) => commands.project(project_name),
  projects: (project_name = "") => {
    if (project_name.length == 0) {
      commands.ls();
      return;
    }
    commands.project(project_name);
  },
  project: (project_name) => {
    if (!(project_name in projects)) {
      print(
        "Sorry, that project doesn't exist. If you think it's something I should work on, feel free to leave a suggestion for me using the contact command.\n\nTo get a list of all projects, type 'projects'."
      );
      return;
    }
    print(projects[project_name].description);
    print("Technologies used:");
    for (const tech of projects[project_name].stack) {
      print(` • ${tech}`);
    }
  },
  resume: () => {
    window.open("Nicholas_Lam_Resume.pdf", "_blank").focus();
    print("Opening in a new tab...");
  },
  git: (project_name) => {
    try {
      window.open(projects[project_name].link, "_blank").focus();
      print("Opening in a new tab...");
    } catch (e) {
      print("There is no GitHub or live link available for this project.");
    }
  },
  clear: () => {
    document.getElementById("terminal").innerText = "";
    print(version);
    print(asciiArt);
    print(intro);
  },
  echo: (text) => {
    print(text);
  },
  instagram: () => {
    window.open("https://www.instagram.com/nick._lam/", "_blank").focus();
  },
  linkedin: () => {
    window.open("https://www.linkedin.com/in/n-a-l/", "_blank").focus();
  },
  help: () => {
    print("Available commands:");
    print(" • resume (r) – Open my resume.");
    print(" • linkedin (l) - Open my LinkedIn.");
    print(
      " • projects (p) project_name - A list of my projects if no name is provided. Otherwise, gives a detailed description of the project, including technologies used."
    );
    print(
      " • git (g) project_name - Open the GitHub page for the project, if it exists."
    );
    print(" • instagram (n) - Follow..me..on..Instagram!");
    print(" • contact (c) - Reach me via email.");
    print(" • clear (cl) - Clear the terminal window.");
    print(" • intro (i) - See the intro message again.");
    print(" • ver (v) - Display the version of NickShell.");
    print(" • help (h) - Display available commands.");
  },
  ilysm: () => {
    print("I love you too :)");
  },
  ver: () => {
    print(version);
  },
  vim: () => {
    print("*screams with the fury of a thousand suns*");
  },
  nano: () => {
    print("vim better.");
  },
  emacs: () => {
    print("vim better.");
  },
  whoami: () => {
    print("Hello, Sir (are you Harrison?).");
  },
  helloworld: () => {
    print("Hello, World!");
  },
};

const aliases = {
  r: "resume",
  l: "linkedin",
  p: "projects",
  g: "git",
  n: "instagram",
  c: "contact",
  cl: "clear",
  i: "intro",
  v: "ver",
  h: "help",
};

function handleCommand(input) {
  const args = input.split(/\s+/);
  let cmd = args.shift().toLowerCase();

  if (aliases.hasOwnProperty(cmd)) {
    cmd = aliases[cmd];
  }

  if (commands.hasOwnProperty(cmd)) {
    commands[cmd](args);
  } else if (input.trim() === "") {
    // Do nothing
  } else {
    print(
      `'${cmd}' is not recognized as an internal or external command, operable program or batch file.`
    );
  }
}

function print(text, command = "") {
  const terminal = document.getElementById("terminal");
  const pre = document.createElement("pre");
  const span = document.createElement("span");

  pre.innerText = text;
  pre.style.whiteSpace = "pre-wrap";

  span.style.color = "#0f0";
  span.innerText = command;
  pre.appendChild(span);

  terminal.appendChild(pre);
  terminal.scrollTop = terminal.scrollHeight;
}

function resizeTerminal() {
  const windowHeight = window.innerHeight;
  const promptContainerHeight =
    document.getElementById("prompt-container").offsetHeight;
  const inputContainerHeight =
    document.getElementById("input-container").offsetHeight;
  const terminal = document.getElementById("terminal");
  const inputContainer = document.getElementById("input-container");

  terminal.style.height = `${
    windowHeight - promptContainerHeight - inputContainerHeight
  }px`;
  terminal.style.paddingBottom = `${promptContainerHeight - 10}px`;
  inputContainer.style.top = `${terminal.offsetHeight}px`;
}

resizeTerminal();
window.addEventListener("resize", resizeTerminal);

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const prompt = document.getElementById("prompt");
  print(version);
  print(asciiArt);
  print(intro);

  input.focus();
  prompt.innerText = `${directory}>`;

  document.addEventListener("click", (event) => {
    if (!prompt.contains(event.target)) {
      input.focus();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const command = input.innerText.trim();
      input.innerText = "";
      print(`${prompt.innerText}`, ` ${command}`);
      handleCommand(command);
      prevCommands.push(command);
      commandPlace = -1;
      prompt.innerText = `${directory}>`;
      input.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }

    if (event.key === "ArrowUp") {
      if (commandPlace <= 0) {
        commandPlace = prevCommands.length - 1;
      } else {
        commandPlace -= 1;
      }
      input.innerText = prevCommands[commandPlace];
    }

    if (event.key === "ArrowDown") {
      if (commandPlace >= prevCommands.length - 1) {
        commandPlace = 0;
      } else {
        commandPlace += 1;
      }
      input.innerText = prevCommands[commandPlace];
    }
  });
});
