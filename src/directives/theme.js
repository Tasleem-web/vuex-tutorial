export default {
    mounted(el, binding) {
        if (binding.value === 'light') {
            el.style.color = '#ffffff'
        } else if (binding.value === 'black') {
            el.style.color = '#000'
        }
    },
}