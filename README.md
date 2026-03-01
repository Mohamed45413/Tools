# 🛠 Tools Library

```html
<script src="https://raw.githack.com/Mohamed45413/Tools/refs/heads/main/tools.js"></script>
```
The Tools Library provides a collection of useful JavaScript utility functions that you can easily include in your project and share with others


---

# time Calculator

The Time Calculator includes two main functions:
time_I → Calculates elapsed time from a past date to now
time_D → Calculates remaining time from now to a future date
Both functions automatically use the current system date and time
## time_I
time_I calculates how much time has passed since a given date until the current moment.
Use case:
How long ago did this date happen?
Example Usage
```JavaScript
let { time_I } = tools;
//nodejs let {time_I} = require("./tools")
console.log(time_I('2016-03-10'));
Output

JavaScript
{
  years: 9,
  months: 11,
  week: 50,
  days: 354,
  hours: 20,
  minutes: 16,
  seconds: 3
}
```
This means the given date occurred 9 years ago, plus the remaining time shown.
## time_D
time_D calculates how much time is left from now until a future date.
Use case:
How much time remains until this date?
Example Usage
```JavaScript
let { time_D } = tools;
//nodejs const {time_D} = require("./tools");
console.log(time_D('2026-03-10'));
Output
{
  years: 0,
  months: 0,
  week: 1,
  days: 12,
  hours: 10,
  minutes: 47,
  seconds: 32
}
```
✅ This means there are 12 days and some hours remaining until the target date

## time_B
The time function_B calculates the time between two dates
Example Usage

```javascript
let { time_B } = tools;
// Node.js: let { time_B } = require("./tools");

console.log(time_B('2016-05-11', '2026-03-11'));

Output

{
  years: 10,
  months: 0,
  week: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}
```

This means the period from 2016-05-11 to 2026-03-10 spans 10 years exactly (with no remaining months, weeks, etc.). The function breaks down the total difference into years, months, weeks, days, hours, minutes, and seconds for easy interpretation.

# Copy text

When the button is clicked, the text within the selected item will be automatically copied to the clipboard
---
Any delimiter such as .class or #id can be used
```html
<div class="el1"> dolor.</div>
<button onclick="copy('.el1')">el1</button>
<div class="el2">Lorem ipsum dolor.</div>
<button onclick="copy('.el2')">el2</button>
<script src="tools.js"></script>
<script>
	let {copy}=tools
</script>
```
