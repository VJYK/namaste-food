import { sum } from "../sum"

test("sum function should calculate of two number",()=>{

    const result =sum(2,3)

    //Assertion
    expect(result).toBe(5)
})
