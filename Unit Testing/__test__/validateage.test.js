

function validateage(age){

    if((age < 18) || (age > 60)){
        throw new Error("Invalid age")
    }


    return true

}




test("age boundaries" , () => {
    expect(validateage(23)).toBe(true);
    expect(() => validateage(16)).toThrow("Invalid age");
})

