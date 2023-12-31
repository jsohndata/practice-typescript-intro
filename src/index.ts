/* 
Two Ways for TS to add type
1. Implict
2. Explict
*/

/* IMPLICT */
let fName = "Matrix"; /* It is implictly typed as string */
// fName = 1337; /* Error: Type '10' is not assignable to type 'string'. */


/* EXPLICT */
let lName: string = "Neo"; /* It is explictly typed as string */
let mName: string | number | undefined = "Trinity"; /* It is explictly typed as string, number, or undefined */
mName = 1337;
mName = undefined;


import { twoSum } from './1-intro';
import { threeSum } from './2-interface';

twoSum(10, 20, "Hello Universe!");
threeSum( {num1:30, num2:40, message:"Hello Galaxy!"} );