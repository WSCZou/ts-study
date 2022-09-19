
type Join<T extends any[], U extends string | number, R extends string = ''> = 
  T extends [infer F, ...infer Rest] 
  ? F extends string 
    ? Join<Rest, U, `${R}${U}${F}`>  
    : never 
  : R extends `${U}${infer Final}` 
    ? Final 
    : R;

// T = ['Hello','World']
// U = ' '
// R = ''
// F = 'Hello'
// Rest = ['World']
// Join<['World'],' ',' Hello'>

// T = ['World']
// U = ' '
// R = ' Hello'
// F = 'World'
// Rest = []
// Join<[],' ',' Hello World'>