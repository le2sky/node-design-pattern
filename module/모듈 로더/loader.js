const originRequire = require;
const fs = originRequire("fs");

function loadModule(filename, module, require) {
  const wrappedSrc = `(function (module, exports, require)) {
        ${fs.readFileSync(filename, "utf8")}
    }(module, module.exports, require)`;

  eval(wrappedSrc);
}

//require() 함수 구현
function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName);
  if (require.cache[id]) {
    return require.cache[id].exports;
  }

  // module metadata
  const module = {
    exports: {},
    id,
  };

  // update cache
  require.cache[id] = module;

  // load module
  loadModule(id, module, require);

  return module.exports;
}
require.cache = {};
require.resolve = (moduleName) => {
  /* 모듈 이름으로 id로 불리게 되는 모듈의 전체경로를 찾아냅니다.(resolve)*/
  return originRequire.resolve(moduleName);
};

// Load the entry point using our homemade 'require'
require(process.argv[2]);
