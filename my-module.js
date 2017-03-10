function private () {
  return 'this is my private function';
}

function public () {
  console.log('this is my public function');
  console.log("I'm invoking my private function now: " + private());
};

module.exports = {
  public_function: public
};
