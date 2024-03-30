export const obj = {
  name: "John",
  regularFunction: function () {
    console.log("Regular Function:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow Function:", this.name);
  },
};

const otherObj = { name: "Alice" };

obj.regularFunction();
obj.regularFunction.call(otherObj);

obj.arrowFunction();
