from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def home():
    return "Backend Running Successfully on Render"

@app.route('/students')
def students():
    return jsonify([
        {"id":1,"name":"Akash","course":"DevOps"},
        {"id":2,"name":"Rahul","course":"Python"}
    ])

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)