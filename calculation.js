document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event listener attached');
    document.getElementById('modifyButton').addEventListener('click', modify);
    document.getElementById('copyButton').addEventListener('click', copyHTMLToClipboard);
    document.getElementById('copyCssButton').addEventListener('click', copyCSSToClipboard);
});

// let modif ;
// function displayModifiedHTML() {
//     console.log('Modify button clicked');
//     var inputHTML = document.getElementById('inputHTML').value;
//     var modifiedHTML = addNumberToClasses(inputHTML);
//     console.log('Modified HTML:', modifiedHTML); // Log the modified HTML
//     modif = modifiedHTML
//     document.getElementById('outputBox').innerHTML = modifiedHTML;
// }

// function copyToClipboard() {
//     var textToCopy = modif; // Use the variable you want to copy

//     navigator.clipboard.writeText(textToCopy).then(function() {
//         console.log('Text copied to clipboard');
//         alert('Copied to clipboard!');
//     }, function(err) {
//         console.error('Could not copy text: ', err);
//     });
// }



// function addNumberToClasses(html) {
//     var tempDiv = document.createElement('div');
//     tempDiv.innerHTML = html;

//     var elements = tempDiv.querySelectorAll('*');

//     elements.forEach(function(element) {
//         var classes = element.getAttribute('class');

//         if (classes) {
//             var classList = classes.split(' ');

//             var updatedClasses = classList.map(function(className) {
//                 return className + '1';
//             });

//             element.setAttribute('class', updatedClasses.join(' '));
//         }
//     });

//     return tempDiv.innerHTML;
// }

let modifHTML;
let modifCSS;

function modifyClasses(css, html) {
    let cssClasses = css.replace(/(\.\w+)/g, '$11');


    let modifiedHTML = addNumberToClasses(html);

    modifHTML = modifiedHTML;
    modifCSS = cssClasses;

    document.getElementById('outputBox').innerHTML = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modified HTML</title>
    <style>
            ${cssClasses}
        </style>
</head>

        <body>
        ${modifiedHTML}
        </body>
    `;
}

function modify() {
    let css = document.getElementById('inputCSS').value;
    let html = document.getElementById('inputHTML').value;

    modifyClasses(css, html);
}


function copyHTMLToClipboard() {
    navigator.clipboard.writeText(modifHTML).then(function() {
        console.log('HTML copied to clipboard');
        alert('HTML Copied to clipboard!');
    }, function(err) {
        console.error('Could not copy HTML: ', err);
    });
}

function copyCSSToClipboard() {
    navigator.clipboard.writeText(modifCSS).then(function() {
        console.log('CSS copied to clipboard');
        alert('CSS Copied to clipboard!');
    }, function(err) {
        console.error('Could not copy CSS: ', err);
    });
}

function addNumberToClasses(html) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    var elements = tempDiv.querySelectorAll('*');

    elements.forEach(function(element) {
        var classes = element.getAttribute('class');

        if (classes) {
            var classList = classes.split(' ');

            var updatedClasses = classList.map(function(className) {
                return className + '1';
            });

            element.setAttribute('class', updatedClasses.join(' '));
        }
    });

    return tempDiv.outerHTML;
}

