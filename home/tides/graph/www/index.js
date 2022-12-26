const Http = new XMLHttpRequest();
const Url = "https://tidesandcurrents.noaa.gov/cgi-bin/stationtideinfo.cgi?Stationid=9446583";
const TidePredictionURL = new URL("https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=predictions&datum=MLLW&station=9446583&time_zone=lst_ldt&units=english&interval=hilo&format=json&application=NOS.COOPS.TAC.TidePred");

// If you only use `npm` you can simply
// import { Chart } from "wasm-demo" and remove `setup` call from `bootstrap.js`.
class Chart { }

const canvas = document.getElementById("canvas");
const coord = document.getElementById("coord");
const plotType = document.getElementById("plot-type");
const status = document.getElementById("status");

let chart = null;

/** Main entry point */
export function main() {
    let hash = location.hash.substr(1);
    for (var i = 0; i < plotType.options.length; i++) {
        if (hash == plotType.options[i].value) {
            plotType.value = hash;
        }
    }
    setupUI();
    setupCanvas();
}

/** This function is used in `bootstrap.js` to setup imports. */
export function setup(WasmChart) {
    Chart = WasmChart;
}

/** Add event listeners. */
function setupUI() {
    status.innerText = "WebAssembly loaded!";
    plotType.addEventListener("change", updatePlot);
    window.addEventListener("resize", setupCanvas);
    //window.addEventListener("mousemove", onMouseMove);
}

/** Setup canvas to properly handle high DPI and redraw current plot. */
function setupCanvas() {
    const dpr = window.devicePixelRatio || 1.0;
    const aspectRatio = canvas.width / canvas.height;
    const size = canvas.parentNode.offsetWidth * 0.8;
    canvas.style.width = size + "px";
    canvas.style.height = size / aspectRatio + "px";
    canvas.width = size;
    canvas.height = size / aspectRatio;
    updatePlot();
}

/** Update displayed coordinates. */
function onMouseMove(event) {
    if (chart) {
        var text = "Mouse pointer is out of range";

        if (event.target == canvas) {
            let actualRect = canvas.getBoundingClientRect();
            let logicX = event.offsetX * canvas.width / actualRect.width;
            let logicY = event.offsetY * canvas.height / actualRect.height;
            const point = chart.coord(logicX, logicY);
            // TODO: Write the X coordinate in HH:mm
            text = (point)
                ? `Estimated sea level of mouse pointer: ${point.y.toFixed(3)} in hour: ${point.x.toFixed(0)}`
                : text;
            coord.innerText = text;
        }
        coord.innerText = text;
    }
}

/** Redraw currently selected plot. */
function updatePlot() {
    const selected = plotType.selectedOptions[0];
    status.innerText = `Rendering ${selected.innerText}...`;
    chart = null;
    const start = performance.now();

    // Derive search dates
    const day = 86400000;
    const ty = new Date();
    const tt = new Date();
    ty.setDate(ty.getDate() - 1);
    tt.setDate(tt.getDate() + 1);
    const today = new Date();

    // Format query parameters
    // funky date formatting explanation: https://masteringjs.io/tutorials/fundamentals/date-tostring-format-yyyy-mm-dd
    TidePredictionURL.searchParams.set("begin_date", ty.toLocaleDateString('en-GB').split('/').reverse().join(''));
    TidePredictionURL.searchParams.set("end_date", tt.toLocaleDateString('en-GB').split('/').reverse().join(''));
    console.log(TidePredictionURL.toString());

    switch (selected.value) {
        // Leave potential for selecting different tide stations
        case '9446583':
            // McMicken Island: station=9446583 
            TidePredictionURL.searchParams.set("station", 9446583);
            console.log(TidePredictionURL)
            Http.open("GET", TidePredictionURL);
            Http.send();
            Http.onreadystatechange = (e) => {
                var x = Http.responseText;
                console.log(Http.responseText)
                chart = Chart.tides("canvas", Http.responseText, true)
            }
            //chart = Chart.tides("canvas", JSON.stringify(j), true);
            break;

        default:
            TidePredictionURL.searchParams.set("station", selected.value);
            console.log(TidePredictionURL)
            Http.open("GET", TidePredictionURL);
            Http.send();
            Http.onreadystatechange = (e) => {
                var x = Http.responseText;
                console.log(Http.responseText)
                chart = Chart.tides("canvas", Http.responseText)
            }
            chart = Chart.tides("canvas", JSON.stringify(j), false);
    }

    const end = performance.now();
    status.innerText = `Rendered ${selected.innerText} in ${Math.ceil(end - start)}ms`;
}