from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Puzzle(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    puzzle = db.Column(db.String(81), nullable=False)
    solution = db.Column(db.String(81), nullable=False)
