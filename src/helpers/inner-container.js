const removeCurrentElement = () => {
    const nodesToRemove = document.querySelector('#inner-container').childNodes;
    nodesToRemove.forEach(node => node.remove());
};

export default removeCurrentElement;