const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
for (let i = 0; i < document.getElementsByClassName("lib-lst").length; i++) {
    document.getElementsByClassName("lib-lst")[i].onmouseover = () => {
        document.getElementsByClassName("lib-lst")[i].classList.add("shadow");
    };
    document.getElementsByClassName("lib-lst")[i].onmouseout = () => {
        document.getElementsByClassName("lib-lst")[i].classList.remove("shadow");
    };
};
if (document.getElementsByClassName("mnu")[0] != undefined)
    for (let i = 0; i < document.getElementsByClassName("mnu")[0].children.length; i++)
        document.getElementsByClassName("mnu")[0].children[i].children[0].onclick = () => {
            console.log(i == 3);
            for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                document.getElementsByClassName("lib-lst")[x].style.display = "none";
            switch (i) {
                case 0:
                    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                        document.getElementsByClassName("lib-lst")[x].style.display = "block";
                    break;
                case 1:
                    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                        if (document.getElementsByClassName("lib-lst")[x].getAttribute("id")[9] == "0")
                            document.getElementsByClassName("lib-lst")[x].style.display = "block";
                    break;
                case 2:
                    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                        if (document.getElementsByClassName("lib-lst")[x].getAttribute("id")[9] == "1")
                            document.getElementsByClassName("lib-lst")[x].style.display = "block";
                    break;
                case 3:
                    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                        if (document.getElementsByClassName("lib-lst")[x].getAttribute("id")[11] == "0")
                            document.getElementsByClassName("lib-lst")[x].style.display = "block";
                    break;
                case 4:
                    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                        if (document.getElementsByClassName("lib-lst")[x].getAttribute("id")[11] == "1")
                            document.getElementsByClassName("lib-lst")[x].style.display = "block";
                    break;
                case 5:
                    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                        if (document.getElementsByClassName("lib-lst")[x].getAttribute("id")[13] == "0")
                            document.getElementsByClassName("lib-lst")[x].style.display = "block";
                    break;
                case 6:
                    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
                        if (document.getElementsByClassName("lib-lst")[x].getAttribute("id")[13] == "1")
                            document.getElementsByClassName("lib-lst")[x].style.display = "block";
                    break;

                default:
                    break;
            };
        };

if (document.getElementsByClassName("calc-app").length > 0) {
    var ctg = "0000000";
    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + replacement.length);
    };
    function ctgry(ctg, mark = "0") {
        ctg = ctg.replaceAt(0, (document.getElementsByClassName("optn-gndr-inac")[0].children[0].checked) ? "1" : "0");
        ctg = ctg.replaceAt(1, (document.getElementsByClassName("optn-gndr-inac")[1].children[0].checked) ? "1" : "0");
        ctg = ctg.replaceAt(2, (document.getElementsByClassName("optn-lvl-inac")[0].children[0].checked) ? "1" : "0");
        ctg = ctg.replaceAt(3, (document.getElementsByClassName("optn-lvl-inac")[1].children[0].checked) ? "1" : "0");
        ctg = ctg.replaceAt(4, (document.getElementsByClassName("optn-sys-inac")[0].children[0].checked) ? "1" : "0");
        ctg = ctg.replaceAt(5, (document.getElementsByClassName("optn-sys-inac")[1].children[0].checked) ? "1" : "0");
        ctg = ctg.replaceAt(6, (document.getElementsByClassName("optn-sys-inac")[2].children[0].checked) ? "1" : "0");

        for (let z = 0; z < document.getElementsByClassName("calc-dgre").length - 1; z++) {
            document.getElementsByClassName("calc-dgre")[z].children[0].disabled = false;
        };

        if (ctg[2] == "1" && ctg[3] == "0") {
            mark = calc_func(ctg);
            document.getElementsByClassName("calc-dgre")[85].children[0].value = mark;
            for (let z = 0; z < document.getElementsByClassName("calc-dgre").length; z++) {
                    document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                    document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
        } else if (ctg[4] == "1" && (ctg[0] == "1" || ctg[1] == "1")) {
            mark = calc_func(ctg);
            document.getElementsByClassName("calc-dgre")[85].children[0].value = mark;
            for (let z = 30; z < 33; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            if (ctg[1] == "1")
                for (let z = 33; z < 35; z++) {
                    document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                    document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
                };
            for (let z = 35; z < 36; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 50; z < document.getElementsByClassName("calc-dgre").length - 2; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
        } else if (ctg[5] == "1" && (ctg[0] == "1" || ctg[1] == "1")) {
            mark = calc_func(ctg);
            document.getElementsByClassName("calc-dgre")[85].children[0].value = mark;
            for (let z = 11; z < 12; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 15; z < 18; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 22; z < 24; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 28; z < 30; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 31; z < 36; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 40; z < 42; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 44; z < 48; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 49; z < document.getElementsByClassName("calc-dgre").length - 2; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
        } else if (ctg[6] == "1" && (ctg[0] == "1" || ctg[1] == "1")) {
            mark = calc_func(ctg);
            document.getElementsByClassName("calc-dgre")[85].children[0].value = mark;
            document.getElementsByClassName("calc-app")[0].children[0].children[10].style.display = "flex";
            document.getElementsByClassName("calc-app")[0].children[0].children[11].style.display = "flex";
            for (let z = 2; z < 6; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 11; z < 12; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 13; z < 18; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 19; z < 24; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 25; z < 30; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 31; z < 36; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 44; z < 48; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 49; z < 54; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 55; z < 60; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
            for (let z = 61; z < document.getElementsByClassName("calc-dgre").length - 2; z++) {
                document.getElementsByClassName("calc-dgre")[z].children[0].disabled = true;
                document.getElementsByClassName("calc-dgre")[z].children[0].value    = "";
            };
        }

        document.getElementsByClassName("calc-rslt")[0].value = ctg + "&" + mark + "&" + document.getElementsByClassName("calc-rslt")[0].getAttribute("id");

        return ctg;
    };
    function calc_func(ctg) {
        let degree = 0;
        if (ctg[2] == "1" && ctg[3] == "0") {
            degree = (isNaN(parseFloat(document.getElementsByClassName("optn-lvl-inac")[0].parentElement.children[1].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("optn-lvl-inac")[0].parentElement.children[1].children[0].value)
            return degree;
        };
        if (ctg[4] == "1" && (ctg[0] == "1" || ctg[1] == "1")) {
            // 1
            for (let z = 0; z < 2; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 5;
            for (let z = 2; z < 6; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 6;
            // 2
            for (let z = 6; z < 12; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 4;
            // 3
            for (let z = 12; z < 14; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 2;
            for (let z = 14; z < 18; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 4;
            // 4
            for (let z = 18; z < 20; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 2;
            for (let z = 20; z < 24; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 4;
            // 5
            for (let z = 24; z < 26; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 2;
            for (let z = 26; z < 30; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 4;
            // 6
            if (ctg[0] == "1")
                for (let z = 33; z < 35; z++)
                    degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 2;
            // 7
            for (let z = 36; z < 38; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 6;
            for (let z = 38; z < 42; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 3;
            // 8
            for (let z = 42; z < 48; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 2;
            // 9
            for (let z = 48; z < 50; z++)
                degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value) * 3;
            
            if (ctg[0] == "1")
                degree /= 164;
            else
                degree /= 160;
        } else if (ctg[5] == "1" && (ctg[0] == "1" || ctg[1] == "1")) {
            // 1 - 9
            for (let z = 0; z < document.getElementsByClassName("calc-dgre").length - 2; z++)
                if (document.getElementsByClassName("calc-dgre")[z].children[0].disabled == false)
                    degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value);
            degree /= 30;
        } else if (ctg[6] == "1" && (ctg[0] == "1" || ctg[1] == "1")) {
            // 1 - 11
            for (let z = 0; z < document.getElementsByClassName("calc-dgre").length - 2; z++)
                if (document.getElementsByClassName("calc-dgre")[z].children[0].disabled == false)
                    degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[z].children[0].value);
            degree /= 22;
        }
        // qdrt
        degree += (isNaN(parseFloat(document.getElementsByClassName("calc-dgre")[84].children[0].value))) ? 0 : parseFloat(document.getElementsByClassName("calc-dgre")[84].children[0].value) * 1;
        // total
        degree = (degree / 200) * 410;
        return degree;
    };
    document.getElementsByClassName("optn-lvl-inac")[0].onclick = () => { // dgree direct
        // input ability
        document.getElementsByClassName("optn-lvl-inac")[0].parentElement.children[1].children[0].disabled = false;
        ctgry(ctg);
    };
    document.getElementsByClassName("optn-lvl-inac")[1].onclick = () => { // degree undirect
        // input ability
        document.getElementsByClassName("optn-lvl-inac")[0].parentElement.children[1].children[0].disabled = true;
        ctgry(ctg);
    };
    document.getElementsByClassName("optn-lvl-inac")[1].click();
    for (let i = 0; i < document.getElementsByClassName("optn-gndr-inac").length; i++)
        document.getElementsByClassName("optn-gndr-inac")[i].onclick = () => {
            ctgry(ctg);
        };
    for (let i = 0; i < document.getElementsByClassName("optn-sys-inac").length; i++)
        document.getElementsByClassName("optn-sys-inac")[i].onclick = () => {
            ctgry(ctg);
        };
    for (let i = 0; i < document.getElementsByClassName("calc-dgre").length; i++)
        document.getElementsByClassName("calc-dgre")[i].children[0].onkeyup = () => {
            if (parseFloat(document.getElementsByClassName("calc-dgre")[i].children[0].value) > 100)
                document.getElementsByClassName("calc-dgre")[i].children[0].value = "100";
            ctgry(ctg);
        };
    document.getElementsByClassName("optn-lvl-inac")[0].parentElement.children[1].children[0].onkeyup = () => {
        if (parseFloat(document.getElementsByClassName("optn-lvl-inac")[0].parentElement.children[1].children[0].value) > 410)
            document.getElementsByClassName("optn-lvl-inac")[0].parentElement.children[1].children[0].value = "410";
        ctgry(ctg);
    };
    document.getElementsByClassName("calc-tgl")[0].onclick = () => {
        if (document.getElementsByClassName("calc-tgl")[0].getAttribute("id") == "F") {
            for (let i = 0; i < document.getElementsByClassName("calc-dgre").length - 1; i++)
                if (document.getElementsByClassName("calc-dgre")[i].children[0].disabled == false)
                    document.getElementsByClassName("calc-dgre")[i].children[0].value = "100";
            document.getElementsByClassName("calc-tgl")[0].setAttribute("id", "T");
        } else {
            for (let i = 0; i < document.getElementsByClassName("calc-dgre").length - 1; i++)
                if (document.getElementsByClassName("calc-dgre")[i].children[0].disabled == false)
                    document.getElementsByClassName("calc-dgre")[i].children[0].value = "";
            document.getElementsByClassName("calc-tgl")[0].setAttribute("id", "F");
        };

        ctgry(ctg);
    };
};
if (document.getElementsByClassName("tnsk").length > 0) {
    for (let i = 0; i < document.getElementsByClassName("tnsk-colg").length; i++)
        if (parseFloat(document.getElementsByClassName("tnsk-dgre")[0].textContent) < parseFloat(document.getElementsByClassName("tnsk-colg")[i].textContent)) {
            document.getElementsByClassName("tnsk-colg")[i].parentElement.classList.add("bg-danger");
        } else {
            document.getElementsByClassName("tnsk-colg")[i].parentElement.classList.add("bg-success");
        };
};