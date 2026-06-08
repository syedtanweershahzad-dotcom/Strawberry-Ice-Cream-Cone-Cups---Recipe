// Function to toggle direction steps completion state
function toggleStep(element) {
    element.classList.toggle('checked');
    const parentStep = element.closest('.direction-step');
    if (element.classList.contains('checked')) {
        parentStep.classList.add('completed');
    } else {
        parentStep.classList.remove('completed');
    }
}

// Bake Mode Screen WakeLock Toggle
document.addEventListener('DOMContentLoaded', function() {
    const bakeToggle = document.getElementById('bakeModeToggle');
    if (bakeToggle) {
        bakeToggle.addEventListener('change', function() {
            if (this.checked) {
                console.log("Bake Mode Activated: Requesting Virtual WakeLock...");
            } else {
                console.log("Bake Mode Deactivated.");
            }
        });
    }
});