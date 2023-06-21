const Employee = require("../lib/Employee");

test("Employee", () => {
    const employee = new Employee("Kevin", B3, "koshea@me.com");

    expect(employee.name).toEqual("Kevin");
    expect(employee.id).toEqual(B3);
    expect(employee.email).toEqual("koshea@me.com");
    expect(employee.getRole()).toEqual("Employee");
})
