"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Layout,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import { ElementType } from "react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const SkillIcon = ({
  icon: Icon,
  color,
}: {
  icon: ElementType;
  color: string;
}) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Code,
    name: "Frontend",
    tech: "React.js, Next.js",
    description:
      "Création d’interfaces utilisateur responsives et interactives pour des performances optimales.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Backend",
    tech: "Node.js, Express, Fastify",
    description:
      "Création d’applications côté serveur robustes avec un accent sur l’évolutivité et une architecture propre.",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Base de données",
    tech: "MongoDB, PostgreSQL",
    description:
      "Conception de schémas de base de données et de requêtes efficaces pour une gestion optimale.",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "UI/UX Design",
    tech: "Tailwind CSS",
    description:
      "Création d’interfaces utilisateur agréables et intuitives avec des principes de design modernes.",
    color: "text-pink-500",
  },
  // {
  //   icon: GitBranch,
  //   name: "Contrôle de version",
  //   tech: "Git, GitHub",
  //   description:
  //     "Gestion des versions de code de manière efficace avec Git et collaboration optimale via GitHub.",
  //   color: "text-orange-500",
  // },
  {
    icon: Terminal,
    name: "TypeScript",
    tech: "TypeScript, JavaScript",
    description:
      "Écriture de code sécurisé par types pour une meilleure maintenabilité et expérience développeur.",
    color: "text-yellow-500",
  },
  {
    icon: Layers,
    name: "Gestion de l’état",
    tech: "Redux, Context API",
    description:
      "Gestion de l’état des applications complexes avec des solutions modernes de gestion de l’état.",
    color: "text-indigo-500",
  },
  {
    icon: Cpu,
    name: "API",
    tech: "REST",
    description:
      "Conception et mise en œuvre d’API efficaces pour une communication de données fluide.",
    color: "text-red-500",
  },
  {
    icon: Globe,
    name: "Performance web",
    tech: "Optimisation, SEO",
    description:
      "Optimisation des applications web pour la rapidité, l’accessibilité et la visibilité sur les moteurs de recherche.",
    color: "text-teal-500",
  },
  {
    icon: Workflow,
    name: "Méthodologies Agile",
    tech: "Scrum, Kanban",
    description:
      "Travail efficace dans des environnements agiles avec un accent sur la livraison continue.",
    color: "text-cyan-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M50 30 L50 70 M30 50 L70 50"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#skill-pattern)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Compétences" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.tech}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
