const Engineer = require("../lib/engineer");

test("Engineer", () => {
    const employee = new Engineer("Dwight Schrute", 2, "dwightschrute@dundermifflin", "dwightschrute");

    expect(employee.name).toEqual("Dwight Schrute");
    expect(employee.id).toEqual(2);
    expect(employee.email).toEqual("dwightschrute@dundermifflin");
    expect(employee.getRole()).toEqual("Engineer");
    expect(employee.getGithub()).toEqual("dwightschrute");
})
