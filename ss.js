<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Quote Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        #quote-container {
            text-align: center;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        #quote {
            font-size: 1.5em;
            margin-bottom: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007BFF;
            color: white;
        }
    </style>
</head>
<body>
    <div id="quote-container">
        <div id="quote">Click the button to see a random quote!</div>
        <button onclick="displayRandomQuote()">New Quote</button>
    </div>

    <script>
        const quotes = [
            "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
            "The way to get started is to quit talking and begin doing. - Walt Disney",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
            "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
            "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
            "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
            "Life is what happens when you're busy making other plans. - John Lennon"
        ];

        function displayRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById('quote').innerText = quotes[randomIndex];
        }
    </script>
</body>
</html>
