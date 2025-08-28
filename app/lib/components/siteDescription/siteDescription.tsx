"use client";
import { motion } from "framer-motion";
import copywriting from "../../copywriting/copywriting";
import Monospaced from "../typography/monospaced";

export default function SiteDescription() {
  return (
    <motion.div
      initial={{ opacity: 0.125, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ stiffness: 100, damping: 30, type: "spring", delay: 0.125 }}
    >
      <Monospaced
        dangerouslySetInnerHTML={{ __html: copywriting.htmlSiteDescription }}
        className="max-w-prose-m text-neutral-500"
      ></Monospaced>
    </motion.div>
  );
}
