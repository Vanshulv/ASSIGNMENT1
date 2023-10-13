const router = require("express").Router();

const data = {
  about:
    "My name is Vanshul and I am a full time student enrolled in Computer Programming in Georgian College. Currently I am in my fourth semester. I am highly motivated to learn new technology and use it for better good.",
  projects: [
    {
      title:
        "Created a website (Juice Store) using html, css and basic JavaScript",
      image: "website.png",
    },
    {
      title: "Created projects in macOS using swift",
      image: "mac.png",
    },
    {
      title: "Created a small game using arduino functions",
      image: "game.png",
    },
  ],
  thanks: "Thank you for contacting me, I'll contact you back shorty :)",
};


router.get("/", (req, res) => {
    res.render("home", res.render("home", { msg: "hello" }));
  });
  router.get("/projects", (req, res) => {
    res.render("projects", res.render("projects", { projects: data.projects }));
  });
  router.get("/about", (req, res) => {
    res.render(
      "about",
      res.render("about", {
        about: data.about
      })
    );
  });
  router.get("/contact", (req, res) => {
    res.render("contact", res.render("contact", { msg: "hello" }));
  });
  router.post("/contact", (req, res) => {
    res.render(
      "thanks",
      res.render("thanks", {
        msg: data.thanks,
      })
    );
  });
  

module.exports = router;
