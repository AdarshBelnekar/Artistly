"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "../components/Header";
import { motion } from "framer-motion";


// Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

const categories = ["Singer", "Dancer", "DJ", "Speaker"];
const languages = ["English", "Hindi", "Tamil", "Punjabi"];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function OnboardPage() {
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      category: [],
      languages: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Artist submitted:", data);
    alert(" Artist onboarded successfully!");
    reset();
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-white">
        <Header/>
     

      <main className="max-w-xl mx-auto p-6">
        {/* Home Symbol */}
        

        <motion.h1
          className="text-xl underline font-medium mb-6 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
         
          Artist Onboarding
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Name */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <Label htmlFor="name" >Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" {...register("bio")} />
            {errors.bio && <p className="text-sm text-red-500">{errors.bio.message}</p>}
          </motion.div>

          {/* Category */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <Label>Category</Label>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2">
                  <Controller
                    control={control}
                    name="category"
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value.includes(cat)}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...field.value, cat]
                            : field.value.filter((v) => v !== cat);
                          field.onChange(newValue);
                        }}
                      />
                    )}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
            {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
          </motion.div>

          {/* Languages */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <Label>Languages Spoken</Label>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <label key={lang} className="flex items-center gap-2">
                  <Controller
                    control={control}
                    name="languages"
                    render={({ field }) => (
                      <Checkbox
                        checked={field.value.includes(lang)}
                        onCheckedChange={(checked) => {
                          const newValue = checked
                            ? [...field.value, lang]
                            : field.value.filter((v) => v !== lang);
                          field.onChange(newValue);
                        }}
                      />
                    )}
                  />
                  <span>{lang}</span>
                </label>
              ))}
            </div>
            {errors.languages && (
              <p className="text-sm text-red-500">{errors.languages.message}</p>
            )}
          </motion.div>

          {/* Fee Dropdown */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <Label>Fee Range</Label>
            <Controller
              name="fee"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Fee Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="₹5k–₹10k">₹5k–₹10k</SelectItem>
                    <SelectItem value="₹10k–₹20k">₹10k–₹20k</SelectItem>
                    <SelectItem value="₹20k–₹30k">₹20k–₹30k</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.fee && <p className="text-sm text-red-500">{errors.fee.message}</p>}
          </motion.div>

          {/* Profile Image Upload & Preview */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <Label htmlFor="image">Profile Image</Label>
            <Input id="image" type="file" {...register("image")} onChange={handleImageChange} />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 rounded-md border shadow-md w-32 h-32 object-cover"
              />
            )}
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register("location")} />
            {errors.location && (
              <p className="text-sm text-red-500">{errors.location.message}</p>
            )}
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </motion.div>
        </motion.form>
      </main>
    </div>
  );
}
