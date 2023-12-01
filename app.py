from flask import Flask, render_template
 
app = Flask(__name__)
 
@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/hi")
def hi():
    return "Hello World"

@app.route("/hi2")
def hi2():
    return """
            <p>Hello World </p>

        """


app.run(debug=True)