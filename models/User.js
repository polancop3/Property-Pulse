import { Schema, model, models } from "mongoose"; 

const userSchema = new Schema({
    email : {
        type: String,
        unique:[true,'Email already exist'],
        required:[true, 'email is requiered']
    },
    userName: {
        type: String,
        required:[true, 'Username is requiered']
    },
    image: {
        type: String

    },
    bookmarks:[{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }]
},
{
    timestamps:true
});

const User = models.User || model('User', userSchema);

export default User;