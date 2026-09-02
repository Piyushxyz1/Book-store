
const images = [
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=500",
];

const getImage = (index) => images[index % images.length];

let bookId = 1;

const book = (
  name,
  description,
  price,
  imageIndex = 0,
  href = "#"
) => ({
  id: bookId++,
  name,
  description,
  price,
  image: getImage(imageIndex),
  href,
});

export const categoryData = {

  // =========================
  // BESTSELLERS
  // =========================

  "BW Bestsellers": {
    title: "BW Bestsellers",
    subtitle: "Our Most Popular Books",
    description: "Discover the books loved by readers everywhere.",
    books: [
      book("The Psychology of Money", "Morgan Housel", 399, 0),
      book("Atomic Habits", "James Clear", 449, 1),
      book("The Alchemist", "Paulo Coelho", 299, 2),
      book("Ikigai", "Héctor García", 349, 3),
    ],
  },

  "International Bestsellers": {
    title: "International Bestsellers",
    subtitle: "Books Loved Around the World",
    description: "Explore bestselling books from international authors.",
    books: [
      book("The Silent Patient", "Alex Michaelides", 399, 0),
      book("It Ends with Us", "Colleen Hoover", 449, 1),
      book("Rich Dad Poor Dad", "Robert Kiyosaki", 399, 2),
      book("The Kite Runner", "Khaled Hosseini", 349, 3),
    ],
  },

  "Min 40% Off Bestsellers": {
    title: "Min 40% Off Bestsellers",
    subtitle: "Bestsellers at Great Prices",
    description: "Grab popular books with discounts of 40% or more.",
    books: [
      book("Atomic Habits", "James Clear", 299, 0),
      book("The Psychology of Money", "Morgan Housel", 249, 1),
      book("Ikigai", "Héctor García", 199, 2),
      book("The Alchemist", "Paulo Coelho", 179, 3),
    ],
  },

  "Min 50% Off Bestsellers": {
    title: "Min 50% Off Bestsellers",
    subtitle: "Big Discounts on Bestsellers",
    description: "Get bestselling books at amazing prices.",
    books: [
      book("Rich Dad Poor Dad", "Robert Kiyosaki", 199, 0),
      book("Atomic Habits", "James Clear", 249, 1),
      book("The Alchemist", "Paulo Coelho", 149, 2),
      book("Ikigai", "Héctor García", 179, 3),
    ],
  },

  "Upto 45% Off on Bestsellers": {
    title: "Upto 45% Off on Bestsellers",
    subtitle: "Save More on Popular Books",
    description: "Shop bestselling titles with discounts up to 45%.",
    books: [
      book("The Psychology of Money", "Morgan Housel", 299, 0),
      book("The Kite Runner", "Khaled Hosseini", 349, 1),
      book("The Silent Patient", "Alex Michaelides", 299, 2),
      book("Ikigai", "Héctor García", 249, 3),
    ],
  },

  // =========================
  // SHOP BY AGE
  // =========================

  "0-2 Years": {
    title: "0-2 Years",
    subtitle: "Books for Babies",
    description: "Fun and engaging books for little readers.",
    books: [
      book("My First Picture Book", "Various Authors", 199, 0),
      book("First Words", "Various Authors", 149, 1),
      book("Baby Animals", "Various Authors", 179, 2),
      book("Colors for Babies", "Various Authors", 129, 3),
    ],
  },

  "3-5 Years": {
    title: "3-5 Years",
    subtitle: "Books for Young Children",
    description: "Colourful stories and learning books for young minds.",
    books: [
      book("The Very Hungry Caterpillar", "Eric Carle", 299, 0),
      book("Where the Wild Things Are", "Maurice Sendak", 349, 1),
      book("Brown Bear, Brown Bear", "Bill Martin Jr.", 249, 2),
      book("The Gruffalo", "Julia Donaldson", 299, 3),
    ],
  },

  "6-8 Years": {
    title: "6-8 Years",
    subtitle: "Books for Growing Readers",
    description: "Stories that make reading fun and exciting.",
    books: [
      book("Diary of a Wimpy Kid", "Jeff Kinney", 299, 0),
      book("Charlotte's Web", "E. B. White", 249, 1),
      book("Matilda", "Roald Dahl", 299, 2),
      book("The BFG", "Roald Dahl", 279, 3),
    ],
  },

  "9-12 Years": {
    title: "9-12 Years",
    subtitle: "Adventure & Imagination",
    description: "Exciting stories for curious young readers.",
    books: [
      book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 399, 0),
      book("Percy Jackson", "Rick Riordan", 349, 1),
      book("The Hobbit", "J.R.R. Tolkien", 399, 2),
      book("Wonder", "R.J. Palacio", 299, 3),
    ],
  },

  "Teen and Young Adults": {
    title: "Teen and Young Adults",
    subtitle: "Stories for Young Adults",
    description:
      "Discover popular fiction and inspiring books for young adults.",
    books: [
      book("The Fault in Our Stars", "John Green", 299, 0),
      book("It Ends with Us", "Colleen Hoover", 399, 1),
      book("Looking for Alaska", "John Green", 299, 2),
      book("The Hunger Games", "Suzanne Collins", 349, 3),
    ],
  },

  // =========================
  // RECOMMENDATIONS
  // =========================

  "Award Winners": {
    title: "Award Winners",
    subtitle: "Critically Acclaimed Books",
    description:
      "Explore books recognised for outstanding storytelling.",
    books: [
      book("The Book Thief", "Markus Zusak", 399, 0),
      book("A Gentleman in Moscow", "Amor Towles", 449, 1),
      book("The Road", "Cormac McCarthy", 349, 2),
      book("The Remains of the Day", "Kazuo Ishiguro", 399, 3),
    ],
  },

  "Best Books of 2025": {
    title: "Best Books of 2025",
    subtitle: "Top Picks",
    description:
      "A selection of books that readers loved in 2025.",
    books: [
      book(
        "Tomorrow, and Tomorrow, and Tomorrow",
        "Gabrielle Zevin",
        499,
        0
      ),
      book("Yellowface", "R.F. Kuang", 399, 1),
      book("Fourth Wing", "Rebecca Yarros", 449, 2),
      book("The Heaven & Earth Grocery Store", "James McBride", 399, 3),
    ],
  },

  "Best Summer Reads": {
    title: "Best Summer Reads",
    subtitle: "Perfect Books for Summer",
    description:
      "Relax with these entertaining summer reads.",
    books: [
      book("The Summer I Turned Pretty", "Jenny Han", 299, 0),
      book("People We Meet on Vacation", "Emily Henry", 399, 1),
      book("Beach Read", "Emily Henry", 349, 2),
      book("Malibu Rising", "Taylor Jenkins Reid", 399, 3),
    ],
  },

  "Best Winter Reads": {
    title: "Best Winter Reads",
    subtitle: "Cosy Books for Winter",
    description:
      "Curl up with these wonderful winter reads.",
    books: [
      book("Little Women", "Louisa May Alcott", 299, 0),
      book("The Night Circus", "Erin Morgenstern", 399, 1),
      book("A Christmas Carol", "Charles Dickens", 199, 2),
      book("The Snow Child", "Eowyn Ivey", 349, 3),
    ],
  },

  "BW Monthly Picks": {
    title: "BW Monthly Picks",
    subtitle: "Our Editors' Choices",
    description:
      "Handpicked books recommended by our team.",
    books: [
      book("The Midnight Library", "Matt Haig", 349, 0),
      book("Project Hail Mary", "Andy Weir", 449, 1),
      book("Educated", "Tara Westover", 399, 2),
      book("Sapiens", "Yuval Noah Harari", 499, 3),
    ],
  },

  // =========================
  // BUDGET
  // =========================

  "Above Rs. 499": {
    title: "Above Rs. 499",
    subtitle: "Premium Books",
    description:
      "Explore premium and special edition books.",
    books: [
      book("Sapiens", "Yuval Noah Harari", 599, 0),
      book("The Complete Works", "Various Authors", 699, 1),
      book("The Art of Thinking Clearly", "Rolf Dobelli", 549, 2),
      book("The Almanack of Naval Ravikant", "Eric Jorgenson", 599, 3),
    ],
  },

  "Rs. 300 - Rs. 499": {
    title: "Rs. 300 - Rs. 499",
    subtitle: "Books Within Your Budget",
    description:
      "Great books priced between ₹300 and ₹499.",
    books: [
      book("Atomic Habits", "James Clear", 399, 0),
      book("The Psychology of Money", "Morgan Housel", 349, 1),
      book("The Alchemist", "Paulo Coelho", 329, 2),
      book("Ikigai", "Héctor García", 399, 3),
    ],
  },

  "Rs. 99 - Rs. 299": {
    title: "Rs. 99 - Rs. 299",
    subtitle: "Affordable Reads",
    description:
      "Enjoy great books at affordable prices.",
    books: [
      book("The Alchemist", "Paulo Coelho", 199, 0),
      book("The Little Prince", "Antoine de Saint-Exupéry", 149, 1),
      book("Animal Farm", "George Orwell", 179, 2),
      book("The Old Man and the Sea", "Ernest Hemingway", 199, 3),
    ],
  },

  "Under Rs 100": {
    title: "Under Rs 100",
    subtitle: "Books Under ₹100",
    description:
      "Great reads at pocket-friendly prices.",
    books: [
      book("Pride and Prejudice", "Jane Austen", 99, 0),
      book("The Gift of the Magi", "O. Henry", 79, 1),
      book("The Tell-Tale Heart", "Edgar Allan Poe", 89, 2),
      book("The Happy Prince", "Oscar Wilde", 69, 3),
    ],
  },

  // =========================
  // BROWSE
  // =========================

  "Best Books of the Year": {
    title: "Best Books of the Year",
    subtitle: "Top Books of the Year",
    description:
      "Discover the most recommended books of the year.",
    books: [
      book("Atomic Habits", "James Clear", 399, 0),
      book("Sapiens", "Yuval Noah Harari", 499, 1),
      book("The Midnight Library", "Matt Haig", 349, 2),
      book("Project Hail Mary", "Andy Weir", 449, 3),
    ],
  },

  "Book Awards": {
    title: "Book Awards",
    subtitle: "Award Winning Titles",
    description:
      "Discover books that have won prestigious awards.",
    books: [
      book("The Road", "Cormac McCarthy", 349, 0),
      book("The Book Thief", "Markus Zusak", 399, 1),
      book("Life of Pi", "Yann Martel", 349, 2),
      book("The English Patient", "Michael Ondaatje", 399, 3),
    ],
  },

  "Books Box Sets": {
    title: "Books Box Sets",
    subtitle: "Complete Collections",
    description:
      "Find complete collections and box sets.",
    books: [
      book("Harry Potter Box Set", "J.K. Rowling", 1999, 0),
      book("The Hunger Games Box Set", "Suzanne Collins", 999, 1),
      book("Percy Jackson Box Set", "Rick Riordan", 1299, 2),
      book("Sherlock Holmes Collection", "Arthur Conan Doyle", 899, 3),
    ],
  },

  "Books in Foreign Languages": {
    title: "Books in Foreign Languages",
    subtitle: "Read Around the World",
    description:
      "Books available in different international languages.",
    books: [
      book("Le Petit Prince", "Antoine de Saint-Exupéry", 299, 0),
      book("Don Quixote", "Miguel de Cervantes", 399, 1),
      book("The Stranger", "Albert Camus", 349, 2),
      book("The Little Prince", "Antoine de Saint-Exupéry", 299, 3),
    ],
  },

  "Books in Indian Languages": {
    title: "Books in Indian Languages",
    subtitle: "Books from India",
    description:
      "Explore popular books available in Indian languages.",
    books: [
      book("Godaan", "Munshi Premchand", 199, 0),
      book("Madhushala", "Harivansh Rai Bachchan", 149, 1),
      book("Gunahon Ka Devta", "Dharamvir Bharati", 249, 2),
      book("Raag Darbari", "Shrilal Shukla", 299, 3),
    ],
  },

  "International Hardcovers": {
    title: "International Hardcovers",
    subtitle: "Premium Hardcover Editions",
    description:
      "Explore beautiful hardcover editions from around the world.",
    books: [
      book("The Great Gatsby", "F. Scott Fitzgerald", 599, 0),
      book("1984", "George Orwell", 549, 1),
      book("The Hobbit", "J.R.R. Tolkien", 699, 2),
      book("Pride and Prejudice", "Jane Austen", 599, 3),
    ],
  },

  "Large Print Books": {
    title: "Large Print Books",
    subtitle: "Easy-to-Read Editions",
    description:
      "Books with larger text for comfortable reading.",
    books: [
      book("Pride and Prejudice", "Jane Austen", 399, 0),
      book("Jane Eyre", "Charlotte Brontë", 449, 1),
      book("Little Women", "Louisa May Alcott", 399, 2),
      book("The Secret Garden", "Frances Hodgson Burnett", 349, 3),
    ],
  },

  "New Releases": {
    title: "New Releases",
    subtitle: "Fresh from the Press",
    description:
      "Check out the latest books and new releases.",
    books: [
      book("The Women", "Kristin Hannah", 499, 0),
      book("James", "Percival Everett", 449, 1),
      book("Intermezzo", "Sally Rooney", 499, 2),
      book("The God of the Woods", "Liz Moore", 449, 3),
    ],
  },

  "Paperbacks up to 45% Off": {
    title: "Paperbacks up to 45% Off",
    subtitle: "Paperback Deals",
    description:
      "Shop paperback editions at discounted prices.",
    books: [
      book("Atomic Habits", "James Clear", 299, 0),
      book("The Alchemist", "Paulo Coelho", 199, 1),
      book("The Psychology of Money", "Morgan Housel", 249, 2),
      book("Ikigai", "Héctor García", 229, 3),
    ],
  },

  "Special Editions for Gifts": {
    title: "Special Editions for Gifts",
    subtitle: "Books Worth Gifting",
    description:
      "Beautiful books perfect for friends and family.",
    books: [
      book("The Alchemist Gift Edition", "Paulo Coelho", 599, 0),
      book("The Little Prince Gift Edition", "Antoine de Saint-Exupéry", 499, 1),
      book("Harry Potter Gift Edition", "J.K. Rowling", 699, 2),
      book("Pride and Prejudice Gift Edition", "Jane Austen", 549, 3),
    ],
  },

  "Sprayed Edges": {
    title: "Sprayed Edges",
    subtitle: "Beautiful Special Editions",
    description:
      "Discover books featuring beautiful sprayed-edge designs.",
    books: [
      book("Fourth Wing Special Edition", "Rebecca Yarros", 799, 0),
      book("Iron Flame Special Edition", "Rebecca Yarros", 849, 1),
      book("The Night Circus Edition", "Erin Morgenstern", 699, 2),
      book("A Court of Thorns and Roses", "Sarah J. Maas", 749, 3),
    ],
  },

  // =========================
  // SUBJECTS
  // =========================

  "Modern & Contemporary Fiction": {
    title: "Modern & Contemporary Fiction",
    subtitle: "Contemporary Stories",
    description:
      "Explore modern stories from today's bestselling authors.",
    books: [
      book("Normal People", "Sally Rooney", 399, 0),
      book("The Goldfinch", "Donna Tartt", 499, 1),
      book("A Little Life", "Hanya Yanagihara", 549, 2),
      book(
        "Tomorrow, and Tomorrow, and Tomorrow",
        "Gabrielle Zevin",
        499,
        3
      ),
    ],
  },

  "General, Modern and Contemporary Fiction": {
    title: "General, Modern and Contemporary Fiction",
    subtitle: "Popular Fiction",
    description:
      "A collection of modern and contemporary fiction.",
    books: [
      book("The Kite Runner", "Khaled Hosseini", 399, 0),
      book("The Book Thief", "Markus Zusak", 399, 1),
      book("The Midnight Library", "Matt Haig", 349, 2),
      book(
        "The Seven Husbands of Evelyn Hugo",
        "Taylor Jenkins Reid",
        399,
        3
      ),
    ],
  },

  "Fiction: General and Literary": {
    title: "Fiction: General and Literary",
    subtitle: "Literary Fiction",
    description:
      "Thought-provoking fiction and literary classics.",
    books: [
      book("The Great Gatsby", "F. Scott Fitzgerald", 299, 0),
      book("The Remains of the Day", "Kazuo Ishiguro", 399, 1),
      book("Beloved", "Toni Morrison", 449, 2),
      book("The Road", "Cormac McCarthy", 349, 3),
    ],
  },

  "Thriller / Suspense Fiction": {
    title: "Thriller / Suspense Fiction",
    subtitle: "Thrilling Stories",
    description:
      "Suspenseful stories that keep you turning the pages.",
    books: [
      book("The Silent Patient", "Alex Michaelides", 399, 0),
      book("Gone Girl", "Gillian Flynn", 349, 1),
      book("The Girl on the Train", "Paula Hawkins", 299, 2),
      book("The Woman in the Window", "A.J. Finn", 349, 3),
    ],
  },

  "Christianity": {
    title: "Christianity",
    subtitle: "Christian Books",
    description:
      "Books exploring Christianity, faith and spirituality.",
    books: [
      book("The Purpose Driven Life", "Rick Warren", 399, 0),
      book("Mere Christianity", "C.S. Lewis", 299, 1),
      book("The Case for Christ", "Lee Strobel", 349, 2),
      book("The Problem of Pain", "C.S. Lewis", 249, 3),
    ],
  },

  "Advice on Careers and Achieving Success": {
    title: "Advice on Careers and Achieving Success",
    subtitle: "Career & Success",
    description:
      "Books to help you grow your career and achieve your goals.",
    books: [
      book(
        "The 7 Habits of Highly Effective People",
        "Stephen Covey",
        449,
        0
      ),
      book("Deep Work", "Cal Newport", 399, 1),
      book("Think and Grow Rich", "Napoleon Hill", 299, 2),
      book("The 4-Hour Workweek", "Tim Ferriss", 499, 3),
    ],
  },

  "History": {
    title: "History",
    subtitle: "Explore the Past",
    description:
      "Discover fascinating stories and events from history.",
    books: [
      book("Sapiens", "Yuval Noah Harari", 499, 0),
      book("Guns, Germs, and Steel", "Jared Diamond", 449, 1),
      book(
        "A People's History of the United States",
        "Howard Zinn",
        499,
        2
      ),
      book("India After Gandhi", "Ramachandra Guha", 599, 3),
    ],
  },

  "Self-help, Personal Development and Practical Advice": {
    title: "Self-help, Personal Development and Practical Advice",
    subtitle: "Improve Yourself",
    description:
      "Books for personal growth, productivity and self-development.",
    books: [
      book("Atomic Habits", "James Clear", 399, 0),
      book("The Power of Now", "Eckhart Tolle", 349, 1),
      book("The 5 AM Club", "Robin Sharma", 299, 2),
      book(
        "The Subtle Art of Not Giving a F*ck",
        "Mark Manson",
        399,
        3
      ),
    ],
  },

  "Classic Crime and Mystery Fiction": {
    title: "Classic Crime and Mystery Fiction",
    subtitle: "Classic Mysteries",
    description:
      "Timeless crime and mystery stories.",
    books: [
      book("The Hound of the Baskervilles", "Arthur Conan Doyle", 249, 0),
      book("Murder on the Orient Express", "Agatha Christie", 299, 1),
      book("The Murder of Roger Ackroyd", "Agatha Christie", 299, 2),
      book("The Big Sleep", "Raymond Chandler", 349, 3),
    ],
  },

  "Ancient Sagas and Epics": {
    title: "Ancient Sagas and Epics",
    subtitle: "Legends & Epics",
    description:
      "Explore timeless myths, sagas and ancient epics.",
    books: [
      book("The Mahabharata", "C. Rajagopalachari", 499, 0),
      book("The Ramayana", "R.K. Narayan", 399, 1),
      book("The Odyssey", "Homer", 349, 2),
      book("The Iliad", "Homer", 349, 3),
    ],
  },

  "Classic Fiction": {
    title: "Classic Fiction",
    subtitle: "Timeless Stories",
    description:
      "Discover some of the world's most loved classic novels.",
    books: [
      book("Pride and Prejudice", "Jane Austen", 299, 0),
      book("Jane Eyre", "Charlotte Brontë", 349, 1),
      book("Great Expectations", "Charles Dickens", 299, 2),
      book("Wuthering Heights", "Emily Brontë", 299, 3),
    ],
  },

  "Crime and Mystery Fiction": {
    title: "Crime and Mystery Fiction",
    subtitle: "Crime & Mystery",
    description:
      "Dive into gripping mysteries and crime stories.",
    books: [
      book("The Silent Patient", "Alex Michaelides", 399, 0),
      book("Gone Girl", "Gillian Flynn", 349, 1),
      book("And Then There Were None", "Agatha Christie", 299, 2),
      book(
        "The Girl with the Dragon Tattoo",
        "Stieg Larsson",
        399,
        3
      ),
    ],
  },

  "Action and Adventure Stories": {
    title: "Action and Adventure Stories",
    subtitle: "Adventure Awaits",
    description:
      "Exciting adventures filled with action and discovery.",
    books: [
      book("The Hobbit", "J.R.R. Tolkien", 399, 0),
      book("Treasure Island", "Robert Louis Stevenson", 249, 1),
      book("Around the World in 80 Days", "Jules Verne", 299, 2),
      book("The Three Musketeers", "Alexandre Dumas", 349, 3),
    ],
  },

  "Nature and Animal Stories": {
    title: "Nature and Animal Stories",
    subtitle: "Stories from Nature",
    description:
      "Heartwarming stories about animals and the natural world.",
    books: [
      book("The Call of the Wild", "Jack London", 249, 0),
      book("Black Beauty", "Anna Sewell", 199, 1),
      book("The Jungle Book", "Rudyard Kipling", 249, 2),
      book("Watership Down", "Richard Adams", 349, 3),
    ],
  },

  "Fantasy": {
    title: "Fantasy",
    subtitle: "Magical Worlds",
    description:
      "Escape into magical worlds filled with adventure and imagination.",
    books: [
      book(
        "Harry Potter and the Philosopher's Stone",
        "J.K. Rowling",
        399,
        0
      ),
      book("The Hobbit", "J.R.R. Tolkien", 399, 1),
      book("A Game of Thrones", "George R.R. Martin", 499, 2),
      book("The Name of the Wind", "Patrick Rothfuss", 449, 3),
    ],
  },
};

export default categoryData;
