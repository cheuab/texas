import React, { useState } from "react";
import Footer from "../components/Footer";
import { textbooks } from "./textdata";

const Textbooks = () => {
	const [search, setSearch] = useState("");

	const filteredBooks = textbooks.filter(
		(book) =>
			book.title.toLowerCase().includes(search.toLowerCase()) ||
			book.author.toLowerCase().includes(search.toLowerCase()) ||
			book.course.toLowerCase().includes(search.toLowerCase()) ||
			book.edition.toLowerCase().includes(search.toLowerCase()) ||
			book.description.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="flex flex-col min-h-screen bg-[#FFF8F0]">
			<main className="flex-grow container mx-auto px-4 py-12">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-3xl font-bold text-[#BF5700] mb-2">
						Textbook Catalog
					</h1>
					<p className="text-gray-700 mb-6">
						Browse available textbooks for Chemical Engineering courses. Search by
						title, author, course, or description. If you need any of the textbooks, please send us an email.
					</p>
					<div className="mb-8">
						<input
							type="text"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search textbooks..."
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BF5700]"
						/>
					</div>
					<div className="grid gap-4">
						{filteredBooks.map((book, idx) => (
							<div
								key={idx}
								className="bg-white rounded shadow p-4 flex flex-col md:flex-row md:items-center md:gap-6 border border-[#FFE5CC]"
							>
								<div className="flex-1">
									<h2 className="text-lg font-bold text-[#BF5700] mb-1">
										{book.title}
									</h2>
									<p className="text-gray-800 text-sm">
										Author: <span className="font-medium">{book.author}</span>
									</p>
									<p className="text-gray-600 text-sm">
										Edition: {book.edition}
									</p>
									<p className="text-gray-600 text-sm">
										Course: {book.course}
									</p>
									<p className="text-gray-700 text-xs mt-1 italic">
										{book.description}
									</p>
								</div>
							</div>
						))}
						{filteredBooks.length === 0 && (
							<div className="text-gray-500 text-center">
								No textbooks found.
							</div>
						)}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Textbooks;
