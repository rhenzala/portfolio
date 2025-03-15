import picodrive from "../../src/assets/picodrive.png";
import members from "../../src/assets/members.png";
import network from "../../src/assets/network.png";
import readpi from "../../src/assets/readpi.png";

const projects = [
    {
      id: 1,
      title: "File Uploader",
      description:
        "A simple file uploader built with Express.js, PrismaORM, and Supabase. Upload file and create folder, view and download files, view folder contents.",
      sourceCode: "https://github.com/rhenzala/file-uploader",
      demo: "https://picodrive.onrender.com/",
      tags: ["express.js", "postgresql", "prisma"],
      imgSrc: picodrive,
    },
    {
        id: 2,
        title: "Members Only",
        description:
          "An exclusive clubhouse where the members can write anonymous posts.",
        sourceCode: "https://github.com/rhenzala/members-only",
        demo: "https://members-only-p2ns.onrender.com/",
        tags: ["express.js", "postgresql", "ejs"],
        imgSrc: members,
    },
    {
      id: 3,
      title: "Network Monitoring Tool",
      description:
        "Network monitoring dashboard built with Python and streamlit. Captures network traffic on the local machine inlcuding the ICMP, UDP, and TCP packets.",
      sourceCode: "https://github.com/rhenzala/network-monitoring",
      tags: ["python", "streamlit"],
      imgSrc: network,
    },
    {
      id: 4,
      title: "Capstone Project",
      description:
        "A reading assistive device using Raspberry Pi and with Magnificaiton, Text-to-Speech, and Voice Command features.",
      sourceCode: "https://github.com/rhenzala/readpi",
      tags: ["python", "raspberry pi"],
      imgSrc: readpi,
    },
  ]

  export default projects;