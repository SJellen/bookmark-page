const documentationList = [
    {
        name: "Javascript",
        icon_url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
    },
    {
        name: "React",
        icon_url: "https://external-content.duckduckgo.com/ip3/reactjs.org.ico",
        link: "https://reactjs.org/docs/getting-started.html"
    },
    {
        name: "Python",
        icon_url: "https://external-content.duckduckgo.com/ip3/www.python.org.ico",
        link: "https://docs.python.org/3/index.html"
    },
    {
        name: "CSS",
        icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        name: "Sass",
        icon_url: "https://external-content.duckduckgo.com/ip3/sass-lang.com.ico",
        link: "https://sass-lang.com/documentation"
    },
      {
        name: "Bootstrap",
        icon_url: "https://external-content.duckduckgo.com/ip3/getbootstrap.com.ico",
        link: "https://getbootstrap.com/docs/4.2/getting-started/introduction/"
    },
    {
        name: "HTML",
        icon_url: "data:image/png;base64,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",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "React Router",
        icon_url: "https://external-content.duckduckgo.com/ip3/reacttraining.com.ico",
        link: "https://reacttraining.com/react-router/web/guides/philosophy"
    },
    {
        name: "Node",
        icon_url: "https://external-content.duckduckgo.com/ip3/nodejs.org.ico",
        link: "https://nodejs.org/api/"
    },
    {
        name: "Jquery",
        icon_url: "https://external-content.duckduckgo.com/ip3/jquery.com.ico",
        link: "https://learn.jquery.com/"
    },
    {
        name: "Seaborn",
        icon_url: "https://external-content.duckduckgo.com/ip3/seaborn.pydata.org.ico",
        link: "https://seaborn.pydata.org/tutorial/color_palettes.html?highlight=color"
    },
      {
        name: "Matplotlib",
        icon_url: "https://external-content.duckduckgo.com/ip3/matplotlib.org.ico",
        link: "https://matplotlib.org/index.html"
    },
    {
        name: "DevDocs",
        icon_url: "https://external-content.duckduckgo.com/ip3/devdocs.io.ico",
        link: "https://devdocs.io/"
    },
    {
        name: "Can I use?",
        icon_url: "https://external-content.duckduckgo.com/ip3/caniuse.com.ico",
        link: "https://caniuse.com/"
    }

]






export default documentationList