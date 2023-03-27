import userModel from "../userModel";
import adminModel from "../adminModel";
import walletModel from "../walletModel";
import historyModel from "../historyModel";
import { Request,Response } from "express";
import bcrypt from "bcrypt"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
export const RegisterAdmin= async(req:Request,res:Response)=>{
    try {
        const {name,email,password,username,phoneNumber} = req.body

        const salt= await bcrypt.genSalt(10)
        const hash= await bcrypt.hash(password,salt)
        const dater= Date.now()
     const numb = +234
        const generateToken = Math.floor(Math.random()* 78) + dater
        const regUser = await adminModel.create({
            name,
            email,
            username,
            password:hash,
            phoneNumber:numb + phoneNumber,
            verified:true,
            accountNumber:generateToken
        });
        const createWalllet= await walletModel.create({
            _id:regUser?._id,
            balance:0,
            credit:0,
            debit:0,
        })
        regUser?.wallet.push(new mongoose.Types.ObjectId(createWalllet?._id));
        regUser.save()
        res.status(200).json({
            message:"created user",
            data:regUser,
            token: jwt.sign({_id:regUser._id},"ddhrjd-jfjfndd-nehdjs")
        })
    } catch (error) {
       return res.status(404).json({
        message:"an error occured"
       })
    }
}
export const LoginAdmin = async(req:Request,res:Response)=>{
    try {
        const{email, password} = req.body
        const Admin = await adminModel.findOne({email})
        if(!Admin){
            return res.status(400).json({
                message:"you are not authorzed"
            })
        }else{
            return res.status(200).json({
                message:"welcome back boss",
                data:Admin
            })
        }
    } catch (error) {
        return res.status(400).json({
            message:"email or password not correct"
        })
    }
}
export const getAllHistory = async(req:Request,res:Response)=>{
try {
    const allHistory = await historyModel.find()
    return res.status(200).json({
        message:"here are all the user history",
        data:allHistory
    })
} catch (error) {
    return res.status(400).json({
        message:"an error occured"
    })
}
}