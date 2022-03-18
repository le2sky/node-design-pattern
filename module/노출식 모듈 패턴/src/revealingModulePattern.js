//노출식 모듈 패턴(revealing module pattern)
const module = (() => {
  const privateFoo = () => {};
  const privateBar = [];

  const exported = {
    publicFoo: () => {},
    publicBar: () => {},
  };

  return exported;
})();

console.log(module);
console.log(module.privateFoo, module.privateBar); //undefined undefined
