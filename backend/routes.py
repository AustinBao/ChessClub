from flask import Flask

app = Flask(__name__)

# home route
@app.route('/home')
def home():
    print("Hello")
    return "Hello, Flask!"


if __name__ == "__main__":
    app.run(debug=True)