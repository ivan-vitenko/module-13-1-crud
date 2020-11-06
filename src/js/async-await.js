const { resolve } = require('core-js/fn/promise');

function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

async function aMakeSmoothie() {
  try {
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');

    const fruits = await Promise.all([apple, kiwi]);
  } catch (error) {
    console.log(error);
  }
}
