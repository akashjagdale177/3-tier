from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
import time

app = Flask(__name__)
CORS(app)


def get_connection():
    for i in range(10):
        try:
            conn = mysql.connector.connect(
                host="mysql-db",
                user="root",
                password="root123",
                database="studentdb"
            )
            return conn
        except:
            time.sleep(2)
    return None


@app.route('/')
def home():
    return "Backend Running"


@app.route('/students')
def students():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM students")
    data = cursor.fetchall()
    conn.close()
    return jsonify(data)


@app.route('/addstudent', methods=['POST'])
def addstudent():
    data = request.json

    conn = get_connection()
    cursor = conn.cursor()

    sql = "INSERT INTO students (name, course, email) VALUES (%s, %s, %s)"
    values = (data['name'], data['course'], data['email'])

    cursor.execute(sql, values)
    conn.commit()
    conn.close()

    return jsonify({"message": "Student Added Successfully"})


app.run(host="0.0.0.0", port=5000)
