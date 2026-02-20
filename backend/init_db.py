from app import app
from models import db, Puzzle

with app.app_context():
    db.create_all()

    puzzle = Puzzle(
        puzzle='530070000600195000098000060800060003400803001700020006060000280000419005000080079',
        solution='534678912672195348198342567859761423426853791713924856961537284287419635345286179'
    )
    db.session.add(puzzle)
    db.session.commit()
    print("✅ Puzzle added successfully!")
