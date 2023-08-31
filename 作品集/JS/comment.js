var txt = document.getElementById("txt")
        var btn = document.getElementById("btn")
        var utxt = document.getElementById("utxt")
        btn.onclick = function () {
            if (txt.value === "") { 
                alert("請輸入回應") 
            } 
            else { 
                var li = document.createElement("li")
                li.innerText = txt.value
                txt.value = ""
            }
            utxt.appendChild(li)
            var del = document.createElement("a")
            del.innerHTML = "Delete"
            del.onclick = function () {
                del.parentNode.remove()
                txt.value = ""
            }
            li.appendChild(del)
            var xg = document.createElement("a")
            xg.innerHTML = "Revise"
            xg.onclick = function () {
                var i = prompt("Please enter the modified content")
                this.parentNode.innerText = i
                li.appendChild(del)
                li.appendChild(xg)
            }
            li.appendChild(xg)
        }