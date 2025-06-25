// components/ArtistForm.jsx
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Marathi", "Punjabi"];
const feeOptions = ["₹5k–₹10k", "₹10k–₹20k", "₹20k–₹30k"];

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().required("Bio is required"),
  categories: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  fee: Yup.string().required("Fee is required"),
  location: Yup.string().required("Location is required"),
});

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      fee: "",
      location: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Artist submitted successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded shadow">
      <div>
        <label className="block font-semibold mb-1">Name</label>
        <input {...register("name")} className="w-full border p-2 rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Bio</label>
        <textarea {...register("bio")} className="w-full border p-2 rounded" />
        {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Categories</label>
        {categories.map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              value={cat}
              {...register("categories")}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
        {errors.categories && <p className="text-red-500 text-sm">{errors.categories.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Languages Spoken</label>
        {languages.map((lang) => (
          <label key={lang} className="block">
            <input
              type="checkbox"
              value={lang}
              {...register("languages")}
              className="mr-2"
            />
            {lang}
          </label>
        ))}
        {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Fee Range</label>
        <select {...register("fee")} className="w-full border p-2 rounded">
          <option value="">Select Fee Range</option>
          {feeOptions.map((fee) => (
            <option key={fee} value={fee}>{fee}</option>
          ))}
        </select>
        {errors.fee && <p className="text-red-500 text-sm">{errors.fee.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Location</label>
        <input {...register("location")} className="w-full border p-2 rounded" />
        {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
      </div>

      <div>
        <label className="block font-semibold mb-1">Profile Image (Optional)</label>
        <input type="file" {...register("image")} />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
