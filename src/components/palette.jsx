import { useRouter } from "next/navigation";
import { CommandMenu, CommandWrapper, useCommands, useKmenu } from "kmenu";
import { useEffect, useState } from "react";
import {
  FiHome,
  FiInfo,
  FiPaperclip,
  FiAlertCircle,
  FiCode,
  FiCommand,
  FiCopy,
  FiEdit2,
  FiGithub,
  FiGitPullRequest,
  FiGlobe,
  FiMessageSquare,
  FiPlus,
  FiSearch,
  FiSettings,
  FiTwitter,
  FiLinkedin,
  FiZap,
} from "react-icons/fi";
import useToggle from "@/hooks/useToggle";
import useInput from "@/hooks/useInput";

// actions
import { Copy } from "@/lib/copy";
import { saveFile } from "@/lib/save";

const Palette = () => {
  const { open, setOpen } = useKmenu();
  const router = useRouter();

  const { toggleState } = useToggle();
  const [inputValue] = useInput();

  const main = [
    {
      category: "Navigation",
      commands: [
        {
          icon: <FiHome />,
          text: "Preview",
          perform: toggleState,
        },
        {
          icon: <FiInfo />,
          text: "Copy text",
          perform: () => Copy(inputValue),
        },
        {
          icon: <FiCode />,
          text: "Save File",
          perform: () => saveFile(inputValue),
        },
        {
          icon: <FiPaperclip />,
          text: "Save as Photo",
          // perform: () => saveFile(inputValue),
        },
        // {
        //   icon: <FiBookOpen />,
        //   text: "Guestbook",
        //   perform: () => router.push("/guestbook"),
        // },
        // {
        //   icon: <FiBookmark />,
        //   text: "Bookmark",
        //   perform: () => router.push("/bookmark"),
        // },
      ],
    },
    {
      category: "Connect",
      commands: [
        {
          icon: <FiGlobe />,
          text: "Website",
          href: "https://prajnaprabhu.com",
          newTab: true,
        },
        {
          icon: <FiTwitter />,
          text: "Twitter",
          href: "https://twitter.com/prajnatwts",
          newTab: true,
        },
        {
          icon: <FiGithub />,
          text: "GitHub",
          href: "https://github.com/Prajnaprabhu3",
          newTab: true,
        },
        {
          icon: <FiLinkedin />,
          text: "Linkedin",
          href: "https://www.linkedin.com/in/prajna30/",
          newTab: true,
        },
      ],
    },
    {
      category: "Links",
      commands: [
        {
          icon: <FiGithub />,
          text: "Source Code",
          keywords: "GitHub",
          shortcuts: { keys: ["g", "h"] },
          href: "https://github.com/Prajnaprabhu3/portfolio-v2",
          newTab: true,
        },
        {
          icon: <FiAlertCircle />,
          text: "Issues",
          href: "https://github.com/Prajnaprabhu3/portfolio-v2/issues",
          newTab: true,
        },
        {
          icon: <FiCopy />,
          text: "Copy Current URL",
          keywords: "copy",
          perform: () => navigator.clipboard.writeText(window.location.href),
        },
      ],
    },
  ];

  const nested = [
    {
      category: "Navigation",
      commands: [
        {
          icon: <FiZap />,
          text: "Quickstart",
          href: "https://github.com/harshhhdev/kmenu#-quickstart",
          newTab: true,
        },
        {
          icon: <FiCommand />,
          text: "Using the Provider",
          href: "https://github.com/harshhhdev/kmenu/#using-the-provider",
          newTab: true,
        },
        {
          icon: <FiPlus />,
          text: "Adding Commands",
          href: "https://github.com/harshhhdev/kmenu#adding-commands",
          newTab: true,
        },
        {
          icon: <FiCode />,
          text: "useKmenu Hook",
          href: "https://github.com/harshhhdev/kmenu/#usekmenu-hook",
          newTab: true,
        },
        {
          icon: <FiCode />,
          text: "useCommands Hook",
          href: "https://github.com/harshhhdev/kmenu/#usecommands-hook",
          newTab: true,
        },
        {
          icon: <FiEdit2 />,
          text: "Customising the Menu",
          href: "https://github.com/harshhhdev/kmenu#customising-the-menu",
          newTab: true,
        },
        {
          icon: <FiSettings />,
          text: "Setting up the Menu",
          href: "https://github.com/harshhhdev/kmenu#setting-up-the-menu",
          newTab: true,
        },
        {
          icon: <FiCommand />,
          text: "Nested Menus",
          href: "https://github.com/harshhhdev/kmenu#nested-menus",
          newTab: true,
        },
        {
          icon: <FiCode />,
          text: "useShortcut Hook",
          href: "https://github.com/harshhhdev/kmenu#useshortcut-hook",
          newTab: true,
        },
      ],
    },
  ];

  const loading = [];

  const [mainCommands] = useCommands(main);
  const [loadingCommands, setLoadingCommands] = useCommands(loading);

  const [awaiting, setAwaiting] = useState(true);

  useEffect(() => {
    if (open !== 2) return;

    setAwaiting(true);

    setLoadingCommands(nested);
    setTimeout(() => setAwaiting(false), 1000);
  });

  return (
    <CommandWrapper>
      <CommandMenu
        commands={mainCommands}
        crumbs={["Home"]}
        index={1}
        placeholder="What do you need?"
      />
    </CommandWrapper>
  );
};

export default Palette;
