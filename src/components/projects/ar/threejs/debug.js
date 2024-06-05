export const debugDiv = () => {

    const debugDiv = document.createElement('div');
    debugDiv.id = 'debug';
    debugDiv.style = 'font-size:10px;color:grey;width:100vw;height:50vh;top:50vh;display:none;position:absolute;overflow:auto';
    document.body.appendChild(debugDiv);


    // if (typeof console != "undefined")
    //     if (typeof console.log != 'undefined')
    //         console.olog = console.log;
    //     else
    //         console.olog = function () {};

    console.log = function (message) {
        //console.olog(message);
        add(message)
    };
    console.error = console.debug = console.info = console.warn = console.log


    const add = (text) => {
        if (text) debugDiv.innerHTML += `<p>${text}</p>`;

    }

    const clear = () => {
        debugDiv.innerHTML = '';
    }

    const hide = () => {
        debugDiv.style.display = 'none'
    }

    const show = () => {
        debugDiv.style.display = '';
    }

    const switchVisibility = () => {
        if (debugDiv.style.display !== 'none') {
            debugDiv.style.display = 'none';
        } else {
            debugDiv.style.display = '';
        }
    }

    console.log('Console initialized');

    return {
        clear, switchVisibility
    }
}
