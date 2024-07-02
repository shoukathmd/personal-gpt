import React from "react";
import { generateTourResponse } from "@/utils/actions";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

const NewTour = () => {
  const {
    mutate,
    isLoading,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const newTour = await generateTourResponse(destination);
      if (!newTour) {
        toast.error("No matching city found...");
        return null;
      }
      return newTour;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = {
      city: formData.get("city"),
      country: formData.get("country"),
    };
    console.log(destination);
    mutate(destination);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Tour"}
          </button>
        </div>
      </form>
      {tour && (
        <div>
          <h2>Tour for {tour.city}</h2>
          <ul>
            {tour.attractions.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NewTour;
