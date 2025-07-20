function printPage() {
    const printBtn = document.querySelector('.print-section');
    if (printBtn) {
        printBtn.style.display = 'none';
    }
    showPrintMessage();
    window.print();
    setTimeout(() => {
        if (printBtn) {
            printBtn.style.display = 'block';
        }
        hidePrintMessage();
    }, 1000);

function showPrintMessage() {
    const message = document.createElement('div');
    message.id = 'print-message';
    message.innerHTML = '📄 Preparing for print...';
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-size: 14px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(message);
}

function hidePrintMessage() {
    const message = document.getElementById('print-message');
    if (message) {
        message.remove();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'p') {
        event.preventDefault(); 
        printPage(); 
    }
});


document.addEventListener('DOMContentLoaded', function() {
    console.log('Print functionality loaded');

})}