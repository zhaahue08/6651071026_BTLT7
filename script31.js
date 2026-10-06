function removecolor() {
    var selectBox = document.getElementById("colorSelect");

    if (selectBox.selectedIndex !== -1) {
        selectBox.remove(selectBox.selectedIndex);
    }
}