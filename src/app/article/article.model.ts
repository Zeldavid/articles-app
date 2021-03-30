// Here we are creating a new class that represents an Article. Note that this is a plain
// class and not an Angular component. In the Model-View-Controller pattern this
// would be the Model.

// voteUp and voteDown currently break the Law of Demeter²³ which says
// that a given object should assume as little as possible about the structure
// or properties of other objects

// Checkout our ArticleComponent component definition now: it’s so short!
// We’ve moved a lot of logic out of our component and into our models.
// The corresponding MVC guideline here might be Fat Models, Skinny
// Controllers. The idea is that we want to move most of our logic to our
// models so that our components do the minimum work possible.


export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    // domain() is a utility function that extracts
    // the domain from a URL, which wi'll explain shortly

    domain(): any {
        try {
            // e.g. http://foo.com/path/to/bar
            // const domainAndPath: string = this.link.split('//')[1];
            const domainAndPath: string = this.link.replace(/https?:\/\//i, "");
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}
