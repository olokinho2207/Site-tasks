function cambiarIcono(span) {
    if (span.textContent === 'radio_button_unchecked') {
        span.textContent = 'task_alt';
    } else {
        span.textContent = 'radio_button_unchecked';
    }
}