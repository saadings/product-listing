"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { notFound } from "next/navigation";
import React, { useState } from "react";

const Modal = ({
  productName,
  isOpen,
  setIsOpen,
}: {
  productName: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    rating: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleUserContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: any) => {
    if (user.name === "" || user.email === "" || user.rating === 0) {
      setIsOpen(false);
      return;
    }

    if (user.rating > 5 || user.rating < 0) {
      setIsOpen(false);
      return;
    }

    setLoading(true);

    const data = {
      name: user.name,
      email: user.email,
      rating: user.rating,
      productName,
    };

    try {
      const response = await fetch("http://localhost:3000/api/user-rating", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      notFound();
    } finally {
      setIsOpen(false);
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Give a Rating</DialogTitle>
          <DialogDescription>
            Provide a rating for this product. Click save to submit.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              value={user.name}
              className="col-span-3"
              onChange={handleUserContentChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="abc@xyz.com"
              value={user.email}
              className="col-span-3"
              type="email"
              onChange={handleUserContentChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              id="rating"
              placeholder="0"
              value={user.rating}
              className="col-span-3"
              type="number"
              min="0"
              max="5"
              onChange={handleUserContentChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} disabled={loading}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
