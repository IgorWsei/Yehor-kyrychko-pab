const mongooseRezerwacja = require("mongoose");
const SchemaRezerwacja = mongooseRezerwacja.Schema;

let ZezerwacjaSchema = new SchemaRezerwacja(
  {
    stolik: [
      {
        type: SchemaRezerwacja.Types.ObjectId,
        ref: "Stolik",
        required: true,
      },
    ],
    
    start: {
      type: Date,
      required: true,
      
    },
    koniec: {
      type: Date,
      required: true,
      
    },
    klient: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Rezerwacja = mongooseRezerwacja.model("Rezerwacja", ZezerwacjaSchema);
module.exports = Rezerwacja;