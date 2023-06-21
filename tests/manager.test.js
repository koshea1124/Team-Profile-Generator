const Manager = require("../lib/manager");

test("Manager", () => {
    const employee = new Manager("Michael Scott", 1, "michaelscott@dundermifflin.com", 25);

    expect(employee.name).toEqual("Michael Scott");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("michaelscott@dundermifflin.com");
    expect(employee.getRole()).toEqual("Manager");
    expect(employee.getofficeNumber()).toEqual(25);
})