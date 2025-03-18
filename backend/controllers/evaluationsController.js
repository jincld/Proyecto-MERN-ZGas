const evaluationsController = {};
import evaluationsModel from "../models/evaluations.js";

//select
evaluationsController.getEvaluations = async (req, res) => {
    const evaluations = await evaluationsModel.find().populate("idEmployee")
    res.json(evaluations)
}

//insert
evaluationsController.insertEvaluations = async (req, res) => {
    const {comment, grade, role, idEmployee} = req.body;
    const newReview = new evaluationsModel ({comment, grade, role, idEmployee})
    await newReview.save()
    res.json({message: "Evaluation saved"})
}

//delete
evaluationsController.deleteEvaluations = async (req, res) => {
    await evaluationsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Evaluation deleted"})
}

//update
evaluationsController.updateEvaluations = async (req, res) => {
    const{comment, grade, role, idEmployee} = req.body;
    await evaluationsModel.findByIdAndUpdate(req.params.id,
        {comment, grade, role, idEmployee}, {new:true}
    );
    res.json({message: "Evaluation updated"});
};

export default evaluationsController;