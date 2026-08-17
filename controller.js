const mongoose = require('mongoose');
const { blogModel } = require('./model');
const { getActiveResourcesInfo } = require('node:process');


const basePage = async (req, res) => {
    try {
        res.status(200).json({
            "success": "true!",
            "message": "All OK!",
            "body": "{}"
        })
    } catch (error) {
        res.status(500).json({
            "success": "failed",
            "message": "error occured"
        })
    }
}

// create blog api 

const createBlogs = async (req, res) => {
    try {
        const info = req.body;
        const result = await blogModel.create(info);
        res.status(200).json({
            "success": "true",
            "message": "blog created successfully...",
            "body": result
        })
    } catch (error) {
        res.status(500).json({
            "success": "false!",
            "message": "internal server error..."
        })
    }

}

//getall blogs

const getAllBlogs = async (req, res) => {
    try {
        const result = await blogModel.find();
        res.status(200).json({
            "success": "true",
            "message": "blogs found successfully...",
            "body": result
        })
    } catch (error) {
        res.status(500).json({
            "success": "false!",
            "message": "internal server error..."
        })
    }

}

const getSingleBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await blogModel.findById(id);
        res.status(200).json({
            "success": "true",
            "message": "blog found successfully...",
            "body": result
        })
    } catch (error) {
        res.status(500).json({
            "success": "false!",
            "message": "internal server error..."
        })
    }
}

module.exports = { basePage, createBlogs, getAllBlogs, getSingleBlog };