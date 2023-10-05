const version = "NickShell [Version 0.0.0.2]";
const directory = "C:\\users\\guest";

const asciiArt =
  "███╗░░██╗██╗░█████╗░██╗░░██╗░█████╗░██╗░░░░░░█████╗░░██████╗  ██╗░░░░░░█████╗░███╗░░░███╗\n████╗░██║██║██╔══██╗██║░░██║██╔══██╗██║░░░░░██╔══██╗██╔════╝  ██║░░░░░██╔══██╗████╗░████║\n██╔██╗██║██║██║░░╚═╝███████║██║░░██║██║░░░░░███████║╚█████╗░  ██║░░░░░███████║██╔████╔██║\n██║╚████║██║██║░░██╗██╔══██║██║░░██║██║░░░░░██╔══██║░╚═══██╗  ██║░░░░░██╔══██║██║╚██╔╝██║\n██║░╚███║██║╚█████╔╝██║░░██║╚█████╔╝███████╗██║░░██║██████╔╝  ███████╗██║░░██║██║░╚═╝░██║\n╚═╝░░╚══╝╚═╝░╚════╝░╚═╝░░╚═╝░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░  ╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝";

const intro =
  "Hi, I'm Nick Lam! Welcome to NickShell, my portfolio website. I am a dual degree student at Western University studying Computer Science and Business Administration from the Ivey School of Business. I'm passionate about building and learning, specifically within full-stack development and a recent interest in AI/ML. If you want to see my resume, type 'resume'.\n\nType 'help' or 'h' to see what other commands are available. Have fun exploring this site!";
var prevCommands = [];
var commandPlace = -1;

const projects = {
  Room_Finder: {
    description:
      "I collaborated with a team of 5 as a director of the Projects team for the Western Founders Network Club. We built a full-stack web application to help students find available study rooms in their residences by floor. I helped design Arduino light sensors that communicate with RESTful back-end API and update the database in PostgreSQL with the current status of the room (if light is on, room is occupied, if off, room is free). Users can see availability per room of each floor, for each residence at UWO and the probability of the room being available in the next 24 hours.",
    stack: ["React", "MySQL", "Node.js", "C++", "Arduino"],
    link: "https://github.com/WFN-Projects/RoomFinder",
  },
  MedNow: {
    description:
      "I was able to win MapleHack's Best Health Hack award by developing a web conferencing platform using React and Socket.io. I utilized OpenAI’s ChatGPT API, and Agora.io to connect patients to doctors rendering video and audio in real time. Patients are placed in a waiting room (queue server) where they can communicate with ChatGPT about their symptoms while they wait. Doctors can log in and authenticate through Firebase OAuth, and see the list of patients in the queue. They meet with the first patient in the queue when they are ready to provide consultation and are placed in a private meeting room with the patient.",
    stack: ["React", "Node.js", "Firebase", "Socket.io", "Agora.io"],
    link: "https://devpost.com/software/mednow-puajqc",
  },
  Automail: {
    description:
      "I created an application enabling users to streamline networking by sending cold emails to professionals identified through LinkedIn search results. I implemented Firebase OAuth for user authentication and sessions. The backend framework was built on Flask with the bulk of the backend implementing a web-scraping algorithm via Selenium and BS4 that scraped user inputted LinkedIn search results. The algorithm scrapes all results on all pages and constructs the individuals email based on email formats found on RocketReach. I also integrated Stripe to manage user subscription payments and premium accounts/features. Launch of the app is postponed in the meantime.",
    stack: [
      "React",
      "Flask",
      "Python",
      "Stripe",
      "Selenium",
      "BS4",
      "Firebase",
    ],
  },
};

const commands = {
  contact: () => {
    window.open("mailto:nicholasalexanderlam@gmail.com", "_blank").focus();
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
