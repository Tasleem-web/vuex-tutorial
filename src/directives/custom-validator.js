export default {
    mounted(el, binding) {
        el.addEventListener('blur', (event) => {
            commonErrorFunction(event, binding)
        });

        el.addEventListener('input', (event) => {
            commonErrorFunction(event, binding)
        });
    },
}

function commonErrorFunction(event, binding) {
    let errorGenerator = addNewNode(binding);
    let error = document.getElementsByClassName(`${binding.arg}Error`);

    if (!event.target.value && !error.length) {
        event.target.parentElement.insertAdjacentElement('beforeend', errorGenerator);
    } else if (event.target.value && error.length) {
        event.target.parentElement.removeChild(error[0])
    }
}

function addNewNode(binding) {
    let str = UpperCaseArray(binding.arg);

    function UpperCaseArray(input) {
        var result = input.replace(/([A-Z]+)/g, ",$1").replace(/^,/, "");
        return result.split(",").join(" ");
    }
    let fieldErrorText = capitalize(str);
    let newNode = document.createElement("div");
    newNode.style.color = "#ff4136";
    newNode.className = binding.arg + 'Error';
    newNode.textContent = fieldErrorText + ' is required.';
    return newNode;
}

function capitalize(str) {
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}