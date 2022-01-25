class Movie
{
    constructor(title,studio,rating="PG")
    {
        this.title=title
        this.studio=studio
        this.rating=rating
    }
}
let m1=new Movie("Casino Royale","Eon Productions")
console.log(m1)