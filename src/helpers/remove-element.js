const removeCurrentElement = (id) => {
    const nodesToRemove = document.getElementById(id).childNodes;
    nodesToRemove.forEach(node => node.remove());
};

export default removeCurrentElement;