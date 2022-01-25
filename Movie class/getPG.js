class Movie
{
    constructor(title,studio,rating="PG")
    {
        this.title=title
        this.studio=studio
        this.rating=rating
    }
    getPG(...resotp)
    {
        var result=[]
        for(var i=0;i<resotp.length;i++)
        {
          for(var key in resotp[i])
          {
            if(resotp[i][key]==="PG")
            {
                result.push(resotp[i].title)
            }
          }
        }
        return result;
    }
}
let m1=new Movie("abc","b","PG14")
let m2=new Movie("def","e","PG")
let m3=new Movie("ghi","h","PG")
let m4=new Movie()
console.log(m4.getPG(m1,m2,m3))