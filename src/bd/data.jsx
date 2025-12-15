export const data = () => {
  const projets = [
    /* ================= WEB / MOBILE / WORDPRESS (10) ================= */
    {
      id: 1,
      title: "Portfolio React",
      type: "Web",
      image: "/src/assets/bakeli.png",
      description: "Portfolio moderne développé avec React et Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
      demo: "https://mon-site.com",
      github: "https://github.com/portfolio",
      year: 2025
    },
    {
      id: 2,
      title: "Site vitrine entreprise",
      type: "Web",
      image: "/projets/web-2.jpg",
      description: "Site vitrine professionnel pour une entreprise locale.",
      tech: ["HTML", "Tailwind"],
      demo: "https://entreprise.com",
      github: "",
      year: 2024
    },
    {
      id: 3,
      title: "Plateforme e-learning",
      type: "Web",
      image: "/projets/web-3.jpg",
      description: "Plateforme d’apprentissage en ligne avec gestion des cours.",
      tech: ["React", "API REST"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 4,
      title: "Application de réservation",
      type: "Mobile",
      image: "/projets/mobile-1.jpg",
      description: "Application mobile de réservation de services.",
      tech: ["React Native", "Expo"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 5,
      title: "Application de livraison",
      type: "Mobile",
      image: "/projets/mobile-2.jpg",
      description: "App mobile pour la gestion des livraisons.",
      tech: ["React Native"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 6,
      title: "Site Wordpress vitrine",
      type: "Wordpress",
      image: "/projets/wp-1.jpg",
      description: "Site vitrine réalisé avec Wordpress.",
      tech: ["Wordpress", "Elementor"],
      demo: "",
      github: "",
      year: 2023
    },
    {
      id: 7,
      title: "Blog personnel",
      type: "Wordpress",
      image: "/projets/wp-2.jpg",
      description: "Blog personnel optimisé SEO.",
      tech: ["Wordpress"],
      demo: "",
      github: "",
      year: 2023
    },
    {
      id: 8,
      title: "Site e-commerce",
      type: "Wordpress",
      image: "/projets/wp-3.jpg",
      description: "Boutique en ligne avec WooCommerce.",
      tech: ["Wordpress", "WooCommerce"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 9,
      title: "Dashboard admin",
      type: "Web",
      image: "/projets/web-4.jpg",
      description: "Interface d’administration moderne.",
      tech: ["React", "MUI"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 10,
      title: "Landing page SaaS",
      type: "Web",
      image: "/projets/web-5.jpg",
      description: "Landing page marketing pour un produit SaaS.",
      tech: ["HTML", "Tailwind"],
      demo: "",
      github: "",
      year: 2024
    },

    /* ================= MAINTENANCE (10) ================= */
    {
      id: 11,
      title: "Maintenance site e-commerce",
      type: "Maintenance",
      image: "/projets/maintenance-1.jpg",
      description: "Maintenance et mises à jour d’un site e-commerce.",
      tech: ["Wordpress"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 12,
      title: "Correction bugs React",
      type: "Maintenance",
      image: "/projets/maintenance-2.jpg",
      description: "Correction de bugs et amélioration de performance.",
      tech: ["React"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 13,
      title: "Optimisation performance web",
      type: "Maintenance",
      image: "/projets/maintenance-3.jpg",
      description: "Optimisation de la vitesse et du SEO.",
      tech: ["Lighthouse", "SEO"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 14,
      title: "Sécurisation site Wordpress",
      type: "Maintenance",
      image: "/projets/maintenance-4.jpg",
      description: "Renforcement de la sécurité d’un site Wordpress.",
      tech: ["Wordpress", "Security"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 15,
      title: "Migration hébergement",
      type: "Maintenance",
      image: "/projets/maintenance-5.jpg",
      description: "Migration de site vers un nouvel hébergeur.",
      tech: ["Hosting"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 16,
      title: "Sauvegarde & restauration",
      type: "Maintenance",
      image: "/projets/maintenance-6.jpg",
      description: "Mise en place de sauvegardes automatiques.",
      tech: ["Backup"],
      demo: "",
      github: "",
      year: 2023
    },
    {
      id: 17,
      title: "Support technique client",
      type: "Maintenance",
      image: "/projets/maintenance-7.jpg",
      description: "Assistance technique et support client.",
      tech: ["Support"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 18,
      title: "Refonte partielle site",
      type: "Maintenance",
      image: "/projets/maintenance-8.jpg",
      description: "Amélioration UI/UX d’un site existant.",
      tech: ["UI", "UX"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 19,
      title: "Mise à jour CMS",
      type: "Maintenance",
      image: "/projets/maintenance-9.jpg",
      description: "Mise à jour régulière du CMS.",
      tech: ["CMS"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 20,
      title: "Maintenance mensuelle",
      type: "Maintenance",
      image: "/projets/maintenance-10.jpg",
      description: "Contrat de maintenance mensuelle.",
      tech: ["Monitoring"],
      demo: "",
      github: "",
      year: 2025
    },

    /* ================= DESIGN (10) ================= */
    {
      id: 21,
      title: "Design UI Dashboard",
      type: "Design",
      image: "/projets/design-1.jpg",
      description: "Design UI moderne pour dashboard.",
      tech: ["Figma", "UI"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 22,
      title: "Maquette site web",
      type: "Design",
      image: "/projets/design-2.jpg",
      description: "Maquette complète de site web.",
      tech: ["Figma"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 23,
      title: "Design application mobile",
      type: "Design",
      image: "/projets/design-3.jpg",
      description: "Design UI d’application mobile.",
      tech: ["Figma", "Mobile UI"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 24,
      title: "Landing page design",
      type: "Design",
      image: "/projets/design-4.jpg",
      description: "Design moderne pour landing page.",
      tech: ["UI", "UX"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 25,
      title: "Design e-commerce",
      type: "Design",
      image: "/projets/design-5.jpg",
      description: "Design UI/UX pour boutique en ligne.",
      tech: ["UX", "UI"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 26,
      title: "Prototype Figma",
      type: "Design",
      image: "/projets/design-6.jpg",
      description: "Prototype interactif sous Figma.",
      tech: ["Figma"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 27,
      title: "Design portfolio",
      type: "Design",
      image: "/projets/design-7.jpg",
      description: "Design d’un portfolio développeur.",
      tech: ["UI"],
      demo: "",
      github: "",
      year: 2025
    },
    {
      id: 28,
      title: "UX Research",
      type: "Design",
      image: "/projets/design-8.jpg",
      description: "Étude UX et amélioration de parcours utilisateur.",
      tech: ["UX Research"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 29,
      title: "Branding UI",
      type: "Design",
      image: "/projets/design-9.jpg",
      description: "Création d’une identité visuelle digitale.",
      tech: ["Branding"],
      demo: "",
      github: "",
      year: 2024
    },
    {
      id: 30,
      title: "Design application école",
      type: "Design",
      image: "/projets/design-10.jpg",
      description: "Design UI d’une application scolaire.",
      tech: ["UI", "UX"],
      demo: "",
      github: "",
      year: 2025
    }
  ];

  return projets;
};
