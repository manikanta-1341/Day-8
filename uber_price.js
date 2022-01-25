class uber_price
{
    constructor(distance)
    {
        this.distance=distance
    }
    getprice()
    {
        return parseInt(this.distance)*18
    }
}
let ride1=new uber_price(10)
console.log(ride1.getprice())