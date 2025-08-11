import { AdminUser } from '../models/adminUserModel.mjs';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const  loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await AdminUser.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    // Validate password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate a JWT
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      "supersecrete", 
      { expiresIn: '24h' } 
    );

    res.status(200).json({ message: 'Login successful!', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

