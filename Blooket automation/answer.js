const one_down = new KeyboardEvent("keydown", {
    key: "1",
    code: "Numpad1",
    keyCode: 97,
    which: 97,
    bubbles: true
});

const one_up = new KeyboardEvent("keyup", {
    key: "1",
    code: "Numpad1",
    bubbles: true
});

const enter_down = new KeyboardEvent("keydown", {
    key: "Enter",
    code: "Enter",
    keyCode: 13,
    which: 13,
    bubbles: true
});

const enter_up = new KeyboardEvent("keyup", {
    key: "Enter",
    code: "Enter",
    bubbles: true
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function answer() {
    await delay(100);
    document.dispatchEvent(one_down);
    await delay(100);
    document.dispatchEvent(one_up);
    await delay(100);
    document.dispatchEvent(enter_down);
    await delay(100);
    document.dispatchEvent(enter_up);
    await delay(100);
}

while (true) {
    await answer()
}