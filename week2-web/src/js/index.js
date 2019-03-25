(function() {
    const xhr = new XMLHttpRequest()
    let str;
    xhr.open('get', "/get", true)
    xhr.send()
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(JSON.parse(xhr.responseText))
                render(JSON.parse(xhr.responseText).data)
            }
        }
    }


    function render(data) {
        data.forEach(file => {
            str += `
                <div data-id="${file._id}">
                    <div>
                        <p>${file.user}</p>
                        <p></p>
                    </div>
                    <dl>
                        <dd>
                            <h5>${file.title}</h5>
                            <p>${file.tall}</p>
                        </dd>
                        <dt>
                
                        </dt>
                    </dl>
                </div>
            `
        })
        const div = document.querySelector('.cont')
        div.innerHTML = str
        let dls = [...document.querySelectorAll('.cont>div')]
        console.log(dls)
        dls.forEach(file => {
            file.onclick = function() {
                location.href = '../index1.html?id=' + file.getAttribute('data-id')
            }
        })
    }
})()