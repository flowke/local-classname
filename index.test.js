const localsName = require('./index')

let str1 = '  as1   as2   as3   as4  '
let str2 = '  as1 '
let str3 = 'as1 as5'
let str4 = 'as1 as5 dts'

let arr = [
  {
    as1: 'iam_sa1',
    as2: 'iam_as2',
    as5: 'iam_as5_0'
  },
  {
    as3: 'iam_sa3',
    as4: 'iam_as4',
    as5: 'iam_as5_1'
  },
]


test('str has more then one white space within names', ()=>{
  expect(localsName([arr[0]], str1)).toBe('iam_sa1 iam_as2 as3 as4')
})

test('have mutiple locals Object', ()=>{
  expect(localsName(arr, str1)).toBe('iam_sa1 iam_as2 iam_sa3 iam_as4')
})
test('last one locals Object matched', ()=>{
  expect(localsName(arr, str2)).toBe('iam_sa1')
})

test('the last locals Object priorly', ()=>{
  expect(localsName(arr, str3)).toBe('iam_sa1 iam_as5_1')
})
test('remain not local name', ()=>{
  expect(localsName(arr, str4)).toBe('iam_sa1 iam_as5_1 dts')
})