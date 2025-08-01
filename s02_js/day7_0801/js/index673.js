document.addEventListener('DOMContentLoaded', function() {
    
    const checkbox = document.querySelector('#agree');
    const proceedButton = document.querySelector('#proceed');

    checkbox.addEventListener("change", function() {
        // if (this.checked) {
        //     proceedButton.classList.remove('disabled');
        //     proceedButton.classList.add('enabled');
        //     proceedButton.disabled = false;
        // }
        // else {
        //     proceedButton.classList.remove('enabled');
        //     proceedButton.classList.add('disabled');
        //     proceedButton.disabled = true;
        // }

        proceedButton.classList.toggle('enabled', this.checked);
        proceedButton.classList.toggle('disabled', !this.checked);
        proceedButton.disabled = !this.checked;
    });
});