export default (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    userName: { type: String },
    password: { type: String },
  });

  userSchema.index({ userName: 1 });

  return mongoose.model('User', userSchema);
};
