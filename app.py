from flask import Flask, render_template
 
app = Flask(__name__)
 
@app.route("/")
def hello():
    return render_template("login.html")

@app.route("/to_do_list")
def hi():
    return render_template("index.html")

@app.route("/hi2")
def hi2():
    return """
            <p>Hello World </p>

        """


app.run(debug=True)