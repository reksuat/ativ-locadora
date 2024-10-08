import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://reksuat:pJqMvPVL2PP5ZlVA@cluster0.tou9m.mongodb.net/locadora`
          );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

export default connectDB; 
