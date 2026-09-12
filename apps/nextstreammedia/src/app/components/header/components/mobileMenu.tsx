"use client";
import { Menu, X } from "@repo/ui/icons/";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<AnimatePresence mode="wait">
			{isOpen ? (
				<motion.div
					key="close"
					initial={{ opacity: 0, rotate: -90 }}
					animate={{ opacity: 1, rotate: 0 }}
					exit={{ opacity: 0, rotate: 90 }}
					transition={{ duration: 0.2 }}
					onClick={() => setIsOpen(false)}
				>
					<X />
				</motion.div>
			) : (
				<motion.div
					key="menu"
					initial={{ opacity: 0, rotate: 90 }}
					animate={{ opacity: 1, rotate: 0 }}
					exit={{ opacity: 0, rotate: -90 }}
					transition={{ duration: 0.2 }}
					onClick={() => setIsOpen(true)}
				>
					<Menu />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MobileMenu;
