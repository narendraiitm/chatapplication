from flask import Flask, render_template, request
from flask_sse import sse

app = Flask(__name__)

app.config["REDIS_URL"] = "redis://localhost:6379/1"
app.register_blueprint(sse, url_prefix='/stream')


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/chat')
def index():
    return render_template("index.html")


@app.route('/score/<channel>', methods=['GET', 'POST'])
def publish_hello(channel):
    if request.method == 'POST':
        print(request.json)
        sse.publish(request.json,
                    type='score_update', channel=channel)
        return "Message sent!"
