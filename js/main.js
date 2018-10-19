
let isConnected = navigator.onLine;
document.addEventListener('DOMContentLoaded', (event) => {
    if (!isConnected) {
        showToast(`Viewing content in offline!!`);
    }
});

/**
 * 
 * @description Checks for online presence
 * @param {object} event 
 * @author Istiaque Siddiqi
 */
const isOnline = (event) => {
    let toastMsg;
    if (event.type === "offline") {
        console.log(`You lost connection.`);
        toastMsg = `You lost connection.`
        isConnected = false;
    } else if (event.type === "online") {
        console.log(`You are now online.`);
        toastMsg = `You are now online.`;
        isConnected = true;
    }
    showToast(toastMsg);
}


/**
 * 
 * @param {string} toastMsg - Toast message
 * @author Istiaque Siddiqi
 */
const showToast = (toastMsg) => {
    Snackbar.show({
        text: toastMsg,
        actionText: 'OK',
        actionTextColor: '#f44336',
        textColor: '#fff',
        pos: 'bottom-center'
    });
}

window.addEventListener('online', isOnline);
window.addEventListener('offline', isOnline);

