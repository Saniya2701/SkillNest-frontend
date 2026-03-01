import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";
import { getAllCategories } from "../../../services/operations/categoryAPI";
import { getCatalogPageData } from "../../../services/operations/pageAndComponentData";
import { useDispatch } from "react-redux";

const ExploreMore = () => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState([]);
  const [currentTab, setCurrentTab] = useState(null);
  const [courses, setCourses] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  // 🔥 Fetch categories on load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getAllCategories();

        console.log("CATEGORIES:", result);

        if (result && result.length > 0) {
          setCategories(result);

          const firstCategoryId = result[0]._id;
          setCurrentTab(firstCategoryId);

          const catalogData = await getCatalogPageData(
            firstCategoryId,
            dispatch
          );

          console.log("CATALOG DATA:", catalogData);

          // 🔥 Handle different response structures safely
          const categoryCourses =
            catalogData?.data?.selectedCategory?.courses ||
            catalogData?.selectedCategory?.courses ||
            [];

          setCourses(categoryCourses);
          setCurrentCard(categoryCourses[0]?._id);
        }
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  // 🔥 When user clicks another tab
  const handleTabChange = async (categoryId) => {
    try {
      setCurrentTab(categoryId);

      const catalogData = await getCatalogPageData(categoryId, dispatch);

      console.log("TAB DATA:", catalogData);

      const categoryCourses =
        catalogData?.data?.selectedCategory?.courses ||
        catalogData?.selectedCategory?.courses ||
        [];

      setCourses(categoryCourses);
      setCurrentCard(categoryCourses[0]?._id);
    } catch (error) {
      console.log("Error switching tab:", error);
    }
  };

  return (
    <div>
      {/* Title Section */}
      <div className="text-3xl lg:text-4xl font-semibold text-center my-10">
        Unlock the <HighlightText text={"Power of Code"} />
        <p className="text-center text-richblack-300 text-base lg:text-lg font-semibold mt-1">
          Learn to Build Anything You Can Imagine
        </p>
      </div>

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
        {categories.map((cat) => (
          <div
            key={cat._id}
            onClick={() => handleTabChange(cat._id)}
            className={`text-[16px] px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer ${
              currentTab === cat._id
                ? "bg-richblack-900 text-richblack-5 font-medium"
                : "hover:bg-richblack-900 hover:text-richblack-5"
            }`}
          >
            {cat.name}
          </div>
        ))}
      </div>

      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Course Cards */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            cardData={course}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;