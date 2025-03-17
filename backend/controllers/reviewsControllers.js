const reviewController = {};
import reviewModel from "../models/Reviews.js";

//select
reviewController.getReviews = async (req, res) => {
    const reviews = await reviewModel.find().populate("idClient")
    res.json(reviews)
}

//insert
reviewController.insertReview = async (req, res) => {
    const {comment, rating, idClient} = req.body;
    const newReview = new reviewModel ({comment, rating, idClient})
    await newReview.save()
    res.json({message: "review saved"})
}

//delete
reviewController.deleteReview = async (req, res) => {
    await reviewModel.findByIdAndDelete(req.params.id)
    res.json({message: "Review deleted"})
}

//update
reviewController.updateReview = async (req, res) => {
    const{comment, rating, idClient} = req.body;
    await reviewModel.findByIdAndUpdate(req.params.id,
        {comment, rating, idClient}, {new:true}
    );
    res.json({message: "Review updated"});
};

export default reviewController;