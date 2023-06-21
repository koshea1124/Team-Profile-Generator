const Intern = require("../lib/Intern");

test("Intern", () => {
    const employee = new Intern("Jim Halpert", 3, "jimhalpert@dundermifflin.com", "University of North Carolina");

    expect(employee.name).toEqual("Jim Halpert");
    expect(employee.id).toEqual(3);
    expect(employee.email).toEqual("jimhalpert@dundermifflin.com");
    expect(employee.getRole()).toEqual("Intern");
    expect(employee.getSchool()).toEqual("University of North Carolina");
})