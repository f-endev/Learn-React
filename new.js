        
        
        const heading = React.createElement("h1", {}, "Hello Wrold from React!");
        const subheading = React.createElement("p", {}, "Learn about CDNlinkd, Crossorigin, How to build logic in react")

        const root = ReactDOM.createRoot(document.getElementById("root"));


        const comb = React.createElement("div", {}, heading, subheading)

        console.log(comb)
        // comb this is a OBJECT!

        root.render(comb);
        