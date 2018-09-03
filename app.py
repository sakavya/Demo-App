from flask import  Flask, render_template, flash, request
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
from src.sevice_init import *

# App config.
DEBUG = True
app = Flask(__name__, template_folder='template')
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'


class ReusableForm(Form):
    category = TextField('Category:', validators=[validators.DataRequired()])
    amount = TextField('Amount:', validators=[validators.DataRequired()])


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/startpayment', methods=['POST'])
def init():
    if request.method == 'POST':
        category = request.form['category']
        flash(str(category) + 'is being selected')
        amount = request.form['amount']
        amount = int(amount)*100
        result = service_init(category, amount)
        result = json.loads(result.content.decode("utf-8"))["data"]
        return render_template('output.html', result=json.dumps(result))


if __name__ == "__main__":
    transaction = {}
    response = {}
    app.run(host="172.17.59.86")
