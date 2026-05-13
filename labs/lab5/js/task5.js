function labTask5ObjArray(){ 

    const tweets = [
        { id: "000", likes: 5, tags: ["js", "nodejs"]},
        { id: "001", likes: 2, tags: ["html", "css"] },
        { id: "002", likes: 17, tags: ["html", "js", "nodejs"]},
        { id: "003", likes: 8, tags: ["css", "react"]},
        { id: "004", likes: 0, tags: ["js", "nodejs", "react"]},
        ];

    const tagCounter = {};

    tweets.forEach(tweet => {
        tweet.tags.forEach(tag => {
            if (tagCounter[tag]) {
                tagCounter[tag] += 1;
            } else {
                tagCounter[tag] = 1;
            }
        });
    });

    console.log(tagCounter);

}