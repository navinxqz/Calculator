<!DOCTYPE html>
<html lang="en">
<head>
    <title>Nosto Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <div class="display">
            <input id="input-line" type="text" readonly placeholder="0"></input>
            <input id="output-line" type="text" readonly></input>
        </div>
        <div class="buttons">
            <div class="row">
                <button class="button clear">C</button>
                <button class="button operator">÷</button>
                <button class="button operator">x</button>
                <button class="button operator">-</button>
                <button class="button operator">+</button>
            </div>
            <div class="row">
                <button class="button">%</button>
                <button class="button">.</button>
                <button class="button">(</button>
                <button class="button">)</button>
                <button class="button operator">√</button>
            </div>
            <div class="row">
                <button class="button">sin</button>
                <button class="button">7</button>
                <button class="button">8</button>
                <button class="button">9</button>
                <button class="button operator">x²</button>
            </div>
            <div class="row">
                <button class="button">cos</button>
                <button class="button">4</button>
                <button class="button">5</button>
                <button class="button">6</button>
                <button class="button operator">π</button>
            </div>
            <div class="row">
                <button class="button">tan</button>
                <button class="button">1</button>
                <button class="button">2</button>
                <button class="button">3</button>
                <button class="button operator">!</button>
            </div>
            <div class="row">
                
                <button class="button">0</button>
                <button class="button equals">=</button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>