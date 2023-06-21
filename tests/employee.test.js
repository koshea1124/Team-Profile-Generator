const Employee = require("../lib/Employee");

test("Employee", () => {
    const employee = new Employee("Kevin", 1, "koshea@me.com");

    expect(employee.name).toEqual("Kevin");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("koshea@me.com");
    expect(employee.getRole()).toEqual("Employee");
})
