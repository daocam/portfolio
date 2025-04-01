"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { LuGithub } from "react-icons/lu";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Projects() {
  const projects = [
    {
      title: "QR Code Generator",
      description:
        "Application pour générer des QR codes personnalisés partageant liens, contacts ou infos en un scan.",
      technologies: ["TypeScript", "React", "Next.js"],
      image: "/qr-code-app.png",
      github: "https://github.com/daocam/qr-code-gen",
      demo: "https://qr-code-gen-blue.vercel.app/",
    },
    {
      title: "ExpenseTracker",
      description:
        "Application pour gérer efficacement par catégories les dépenses quotidiennes.",
      technologies: ["TypeScript", "React", "Next.js", "SQLite"],
      image: "/expense-tracker.png",
      github: "https://github.com/daocam/expense-tracker",
      demo: "https://expense-trackerr-v1.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container  mx-auto px-4 md:px-6">
        <AnimatedSectionHeader title="Projets" />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-gray-800 rounded-xl py-0 shadow-lg border-none transition-all duration-300 hover:shadow-2xl relative overflow-hidden group">
                <div className="relative -mb-6">
                  <Image
                    width={350}
                    height={200}
                    src={project?.image ?? "/placeholder.svg"}
                    alt={project?.title ?? "Image du projet"}
                    className="w-full h-60 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        className="p-2 rounded-full bg-blue-200 dark:bg-blue-700 backdrop-blur-sm transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <LuGithub
                          size={18}
                          className="text-gray-800 dark:text-gray-200"
                        />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        className="p-2 rounded-full bg-blue-200 dark:bg-blue-700 backdrop-blur-sm transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink
                          size={18}
                          className="text-gray-800 dark:text-gray-200"
                        />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-blue-200 dark:bg-blue-700 text-gray-800 dark:text-gray-200 border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div> */}
    </section>
  );
}
