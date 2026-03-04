import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { RxCross2 } from "react-icons/rx"
import ReactStars from "react-rating-stars-component"
import { useSelector } from "react-redux"

import { createRating } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "./../../common/IconBtn"
import Img from "./../../common/Img"

export default function CourseReviewModal({ setReviewModal }) {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const { courseEntireData } = useSelector((state) => state.viewCourse)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setValue("courseExperience", "")
    setValue("courseRating", 0)
  }, [setValue])

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating)
  }

  const onSubmit = async (data) => {
    if (!token) return

    const response = await createRating(
      {
        courseId: courseEntireData?._id,
        rating: data.courseRating,
        review: data.courseExperience,
      },
      token
    )

    // ✅ Only close modal if review successful
    if (response) {
      setReviewModal(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[1000] grid h-screen w-screen place-items-center bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
        
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-richblack-5">
            Add Review
          </p>
          <button onClick={() => setReviewModal(false)}>
            <RxCross2 className="text-2xl text-richblack-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-center justify-center gap-x-4">
            <Img
              src={user?.image}
              alt="profile"
              className="aspect-square w-[50px] rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-richblack-5 capitalize">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-sm text-richblack-5">
                Posting Publicly
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col items-center"
          >
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />

            <div className="flex w-11/12 flex-col space-y-2 mt-4">
              <label
                className="text-sm text-richblack-5"
                htmlFor="courseExperience"
              >
                Add Your Experience
              </label>

              <textarea
                id="courseExperience"
                placeholder="Add Your Experience"
                {...register("courseExperience", { required: true })}
                className="form-style min-h-[130px] w-full resize-none"
              />

              {errors.courseExperience && (
                <span className="text-xs text-pink-200">
                  Please Add Your Experience
                </span>
              )}
            </div>

            <div className="mt-6 flex w-11/12 justify-end gap-x-2">
              <button
                type="button"
                onClick={() => setReviewModal(false)}
                className="rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900 hover:bg-richblack-900 hover:text-richblack-300 duration-300"
              >
                Cancel
              </button>

              <IconBtn text="Save" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}