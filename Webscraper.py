from pip._vendor import requests as requests
from requests import get
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

from flask import Flask, render_template
import requests
import json

app = Flask(__name__, template_folder='.')

@app.route('/')
def homepage():
    params = {
        'api_key': '{tzhuuTHbQscv}',
    }
    r = requests.get(
        'https://www.parsehub.com/api/v2/projects/{tzBTwYjeBvk5}/last_ready_run/data',
        params=params)
    return render_template('movies.html', movies=json.loads(r.text)['movies'])

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
