let testMap = new Map();

testMap.set(1, "val01");
testMap.set("key02", 2);
testMap.set(3, true);

for (let value of testMap.keys()){
    console.log(`Key - ${value},\t Value - ${testMap.get(value)}`);
}