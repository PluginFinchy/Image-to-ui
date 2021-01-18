figma.showUI(__html__);
let exportNode = figma.currentPage.selection[0];
exportNode.exportAsync({
    format: "PNG",
    constraint: {
        type: "SCALE",
        value: 2,
    }
}).then(resolved => {
    sendToUi(resolved);
}, rejected => {
    console.error(rejected);
    figma.notify('Promise was rejected');
});
function sendToUi(imagedata) {
    figma.ui.postMessage({ type: 'exportImage', data: imagedata });
}
