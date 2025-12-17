


function validatetitle(title){
    if(title.length < 1 && title.length < 50){
        return false
    }
    return true
}

test("title" , () => {
    expect(validatetitle("Harry Potter")).toBe(true);
    expect(validatetitle("")).toBe(false);
})
