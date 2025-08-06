function getInputs(): [number, number] | null {
    const num1 = Number((document.getElementById("input1") as HTMLInputElement).value);
    const num2 = Number((document.getElementById("input2") as HTMLInputElement).value);

    if (isNaN(num1) || isNaN(num2)) {
        showResult("Invalid input");
        return null;
    }
    return [num1, num2];
}

function showResult(msg: string) {
    document.getElementById("result")!.innerText = `Kết quả: ${msg}`;
}

function add() {
    const nums = getInputs();
    if (!nums) return;
    showResult((nums[0] + nums[1]).toString());
}

function subtract() {
    const nums = getInputs();
    if (!nums) return;
    showResult((nums[0] - nums[1]).toString());
}

function multiply() {
    const nums = getInputs();
    if (!nums) return;
    showResult((nums[0] * nums[1]).toString());
}

function divide() {
    const nums = getInputs();
    if (!nums) return;
    if (nums[1] === 0) {
        showResult("Không thể chia cho 0");
        return;
    }
    showResult((nums[0] / nums[1]).toString());
}

function power() {
    const nums = getInputs();
    if (!nums) return;
    showResult(Math.pow(nums[0], nums[1]).toString());
}

function sqrt() {
    const nums = getInputs();
    if (!nums) return;
    if (nums[1] === 0) {
        showResult("Căn bậc 0 không hợp lệ");
        return;
    }
    showResult(Math.pow(nums[0], 1 / nums[1]).toString());
}

function factorial() {
    const num1 = Number((document.getElementById("input1") as HTMLInputElement).value);
    if (isNaN(num1) || num1 < 0 || !Number.isInteger(num1)) {
        showResult("Invalid input cho giai thừa");
        return;
    }
    let result = 1;
    for (let i = 1; i <= num1; i++) {
        result *= i;
    }
    showResult(result.toString());
}
