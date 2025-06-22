//js execution context
// when we run a code global execution context is created and stored into this variable 
//in browser window object is stored into this variable
//type of execution context
//-->global execution context
//-->function execution context
//javascript code runs on the two phases
//memory creation phase-->memory allocation of all the variable
//execution phase--> function and operations
let val1=1
let val2=2
function add(num1, num2){
    let total=num1+num2
    return total
} 
let result1=add(val1,val2)
let result=add(7,8)
/*Awesome Megha! You're diving into the **JavaScript Execution Context** — a super important topic to understand how JavaScript works behind the scenes. Let’s walk through both the **Memory Creation Phase** and the **Execution Phase** step-by-step for your code.

---

## ✅ Your Code:

```js
let val1 = 1;
let val2 = 2;

function add(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = add(val1, val2);
let result = add(7, 8);
```

---

## 🔵 **PHASE 1: Memory Creation Phase (a.k.a. Variable Environment)**

In this phase, JavaScript **allocates memory** and sets up the **global execution context**. Variables are **hoisted**, and functions are **fully stored**.

| Identifier | Memory (initial setup) |
| ---------- | ---------------------- |
| `val1`     | `undefined`            |
| `val2`     | `undefined`            |
| `add`      | Function definition    |
| `result1`  | `undefined`            |
| `result`   | `undefined`            |

✅ Note: `function add()` is hoisted completely with its code.

---

## 🔴 **PHASE 2: Code Execution Phase**

Now the code actually **runs line by line** and assigns real values.

---

### 1️⃣ `let val1 = 1;`

* `val1` is set to `1`.

### 2️⃣ `let val2 = 2;`

* `val2` is set to `2`.

### 3️⃣ Function Declaration `function add(num1, num2)`:

* Already in memory (from Phase 1)

---

### 4️⃣ `let result1 = add(val1, val2);`

* Enters **new execution context** for `add(1, 2)`:

  * `num1 = 1`
  * `num2 = 2`
  * `total = 3`
  * returns `3`
* `result1` is assigned `3`

---

### 5️⃣ `let result = add(7, 8);`

* New execution context again:

  * `num1 = 7`
  * `num2 = 8`
  * `total = 15`
  * returns `15`
* `result` is assigned `15`

---

## 🧠 Stack Structure:

1. Global Execution Context
2. `add(1, 2)` → gets popped off after return
3. `add(7, 8)` → gets popped off after return

---

## ✅ Final Variable Values

| Variable | Value |
| -------- | ----- |
| val1     | 1     |
| val2     | 2     |
| result1  | 3     |
| result   | 15    |

---

Would you like a visual call stack diagram or flowchart of this? I can create that too! 😊

Great follow-up Megha! 🌟 Let’s now break down **what happens when a new function is called** — specifically the **new execution context**, and its two phases: **Memory Phase** and **Code Execution Phase**.

---

## 💡 What is an Execution Context?

Whenever a function is called in JavaScript, a **new execution context** is created **on top of the call stack**.

Each function execution context has:

* **Memory phase (variable environment)**
* **Execution phase (code runs)**

---

## 🧠 Example:

```js
function add(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result = add(5, 10);
```

---

## 🔷 NEW EXECUTION CONTEXT: `add(5, 10)`

---

### 🟦 1. **Memory Creation Phase (inside `add`)**

JavaScript sets up memory space for all local variables and parameters:

| Identifier | Initial Value |
| ---------- | ------------- |
| `num1`     | `undefined`   |
| `num2`     | `undefined`   |
| `total`    | `undefined`   |

---

### 🟩 2. **Code Execution Phase**

Now, it runs the code **line by line** inside the function:

```js
num1 = 5
num2 = 10
total = num1 + num2 = 15
return 15
```

➡️ The result `15` is sent **back to the global context**
➡️ This execution context is now **popped off the stack**

---

## 🔁 Call Stack Overview

```
Global()            // base
  ↓
add(5, 10)          // pushed on call
  ↓
<returns 15>        // popped off
```

---

## ✅ Summary Table:

| Phase                | What happens                                        |
| -------------------- | --------------------------------------------------- |
| Memory Phase         | All local variables + parameters set to `undefined` |
| Code Execution Phase | Actual values assigned, code runs top to bottom     |

---

Let me know if you'd like a **diagram** showing the stack and phases — happy to draw it for you! 😊
///call stack follows last in 1st out for function 
for example to inspect source make new snippit pull the terminal and go to the call stack
// there is a run button in the terminal you can click and run one function
// you have to save here

 */
