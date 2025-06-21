const user = {
  name: "John",
  surname: "Smith",
};

user["name"] = "Pete";
// or user.name = "Pete";

delete user["name"];
// or delete user.name