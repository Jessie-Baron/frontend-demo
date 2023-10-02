from .db import db, environment, SCHEMA, add_prefix_for_prod

class Furniture(db.Model):
    __tablename__ = 'furniture'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    label = db.Column(db.String(40), nullable=False, unique=True)
    Furniture_Type = db.Column(db.String, nullable=False)
    image_file = db.Column(db.String)





    def to_dict(self):
        return {
            'id': self.id,
            'label': self.label,
            'Furniture_Type': self.Furniture_Type,
            'image_file': self.image_file,
        }
