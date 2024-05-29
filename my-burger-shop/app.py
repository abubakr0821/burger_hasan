from flask import Flask, render_template, request, jsonify

app = Flask(name)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/order', methods=['POST'])
def order():
    data = request