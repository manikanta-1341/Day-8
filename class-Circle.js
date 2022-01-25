class circle
{
    constructor(radius,colour)
    {
        this.radius=radius
        this.colour=colour
    }
    getRadius()
    {
        return this.radius
    }
    getColour()
    {
        return this.colour
    }
    getArea()
    {
        return (22/7)*Math.pow(this.radius,2)
    }
    getCircumference()
    {
        return 2*(22/7)*this.radius
    }
    setRadius(r)
    {
        this.radius=r
        return this.radius
    }
    setColour(c)
    {
        this.colour=c
        return this.colour
    }
    toString(r,c)
    {
        return String(r),c;
    }
    circle(r,c)
    {
        return r,c;
    }
    circle(r)
    {
        return r;
    }
    circle()
    {
        return this.radius,this.colour;
    }
}
