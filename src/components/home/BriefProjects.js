import { useEffect, useState } from "react";

export default function BriefProjects() {
  const projects = [
    {
      img: "/assets/tanmay.png",
      text: `The href attribute is required for an anchor to be keyboard
          accessible. Provide a valid, navigable address as the href value. If
          you cannot provide an href, but still need the element to resemble a
          link, use a button and change it with appropriate styles. Learn more:
          https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md`,
    },
    {
      img: "/assets/project2.jpg",
      text: `We wrap our content first with <BrowserRouter>. Then we define our <Routes>. An application can have multiple <Routes>. Our basic example only uses one. <Route>s can be nested. The first <Route> has a path of / and renders the Layout component. The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.`,
    },
    {
      img: "/assets/project3.jpg",
      text: `Current version of React.JS is V18.0.0 (April 2022). Initial Release to the Public (V0.3.0) was in July 2013. React.JS was first used in 2011 for Facebook's Newsfeed feature. Facebook Software Engineer, Jordan Walke, created it. Current version of create-react-app is v5.0.1 (April 2022). create-react-app includes built tools such as webpack, Babel, and ESLint.`,
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("current index", currentProjectIndex);
      if (currentProjectIndex === 2) {
        setCurrentProjectIndex(0);
      } else {
        setCurrentProjectIndex(
          (currentProjectIndex) => currentProjectIndex + 1
        );
      }
    }, 5000);
    //Clearing the interval
    return () => clearInterval(interval);
  }, [currentProjectIndex]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "auto",
      }}
    >
      <div style={{ width: "60vw", padding: 10, margin: 10 }}>
        <img
          width={"100%"}
          src={projects[currentProjectIndex].img}
          alt="project"
        />
        <div>{projects[currentProjectIndex].text}</div>
      </div>
    </div>
  );
}
