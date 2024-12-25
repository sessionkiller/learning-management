import { Request, Response } from "express";
import Course from "../models/courseModel";


export const listCourses = async(req: Request, res: Response) => {
    const {category} = req.query;
    try {
        const courses = category && category !== 'all' 
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();

        res.json({message: 'Courses retrived successfully', data: courses});
    } catch (error) {
        res.status(500).json({message: 'Error retriving courses', error})
    }
}

export const getCourse = async (req: Request, res: Response) => {
    const {courseId} = req.params;
    try {
        const course = await Course.get(courseId);
        if(!course){
            res.status(404).json({message: 'Course not found'})
            return;
        }

        res.json({message: 'Course retrived successfully', data: course});
    } catch (error) {
        res.status(500).json({message: 'Error retriving course', error})
    }
}