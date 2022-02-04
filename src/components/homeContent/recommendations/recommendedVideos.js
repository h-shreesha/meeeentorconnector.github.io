import React from "react";
import "./recommendedVideos.css";
import VideoCard from "./videoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <VideoCard
        courseTitle={"Web development"}
        imgSrc={"../Soori.jpeg"}
        instructor={"Sooryakanth"}
        rating={4.6}
        noOfStudents={"(1650)"}
        price={"₹5000"}
      />
      <VideoCard
        courseTitle={" machine learning"}
        imgSrc={"../Pritvi.jpeg"}
        instructor={"Pritviraj"}
        rating={4.4}
        noOfStudents={"(1110)"}
        price={"₹5000"}
      />
      <VideoCard
        courseTitle={
          "photography"
        }
        imgSrc={"../Nischit.jpeg"}
        instructor={"Nischit S Shetty"}
        rating={4.8}
        noOfStudents={"(499)"}
        price={"₹2000"}
      />
      <VideoCard
        courseTitle={
          "Placement training"
        }
        imgSrc={"../Allen.jpeg"}
        instructor={"Allen Peter"}
        rating={4.8}
        noOfStudents={"(2,548)"}
        price={"₹2000"}
      />
      
    </div>
  );
}

export default RecommendedVideos;
