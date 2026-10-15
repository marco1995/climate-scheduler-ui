/* Panel dialogs: promise-based replacements for blocking browser dialogs. */
(() => {
    let queue = Promise.resolve();
    const translate = message => window.climateSchedulerLocalize?.(message) ?? message;

    function openDialog(kind, message, initialValue = '') {
        return new Promise(resolve => {
            const root = window.climateSchedulerPanelRoot || document.body;
            const previousFocus = document.activeElement;
            const dialog = document.createElement('dialog');
            dialog.className = 'scheduler-dialog';
            dialog.setAttribute('aria-labelledby', 'scheduler-dialog-title');
            dialog.setAttribute('aria-describedby', 'scheduler-dialog-message');

            const form = document.createElement('form');
            form.method = 'dialog';
            const title = document.createElement('h2');
            title.id = 'scheduler-dialog-title';
            title.textContent = translate(kind === 'alert' ? 'Please note' : kind === 'prompt' ? 'Enter a name' : 'Confirm action');
            const description = document.createElement('p');
            description.id = 'scheduler-dialog-message';
            description.textContent = translate(message);
            form.append(title, description);

            let input;
            if (kind === 'prompt') {
                const label = document.createElement('label');
                label.textContent = translate('Name');
                input = document.createElement('input');
                input.type = 'text';
                input.value = initialValue;
                input.autofocus = true;
                label.append(input);
                form.append(label);
            }

            const actions = document.createElement('div');
            actions.className = 'scheduler-dialog-actions';
            if (kind !== 'alert') {
                const cancel = document.createElement('button');
                cancel.type = 'button';
                cancel.className = 'btn-secondary';
                cancel.textContent = translate('Cancel');
                cancel.autofocus = kind === 'confirm';
                cancel.addEventListener('click', () => dialog.close('cancel'));
                actions.append(cancel);
            }
            const accept = document.createElement('button');
            accept.type = 'submit';
            accept.className = 'btn-primary';
            accept.textContent = translate(kind === 'alert' ? 'Done' : kind === 'prompt' ? 'Save' : 'Continue');
            actions.append(accept);
            form.append(actions);
            form.addEventListener('submit', event => {
                event.preventDefault();
                dialog.close('accept');
            });
            // Native modal dialogs provide focus containment and Escape cancellation.
            dialog.addEventListener('close', () => {
                const result = dialog.returnValue === 'accept';
                dialog.remove();
                if (previousFocus?.isConnected) previousFocus.focus();
                resolve(kind === 'prompt' ? (result ? input.value : null) : result);
            }, { once: true });
            dialog.append(form);
            root.append(dialog);
            dialog.showModal();
            input?.select();
        });
    }

    function enqueue(kind, message, initialValue) {
        const result = queue.then(() => openDialog(kind, message, initialValue));
        queue = result.catch(() => {});
        return result;
    }
    window.schedulerConfirm = message => enqueue('confirm', message);
    window.schedulerPrompt = (message, value = '') => enqueue('prompt', message, value);
    window.schedulerAlert = message => enqueue('alert', message);
})();
