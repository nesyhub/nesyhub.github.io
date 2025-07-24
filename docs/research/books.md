# Books

<!-- Book Shelf Layout -->

<div class="bookshelf">
  <!-- Example Book Entry -->
  <div class="book">
    <a href="https://www.iospress.com/catalog/books/neuro-symbolic-artificial-intelligence-the-state-of-the-art" target="_blank">
      <img src="/nesy_art.jpg" alt="Book Cover" class="book-cover" />
    </a>
    <div class="book-info">
      <h3 class="book-title">Neuro-Symbolic Artificial Intelligence: The State of the Art</h3>
    </div>
  </div>
  <!-- Add more book entries below by copying the .book block -->

  <div class="book">
    <a href="https://www.iospress.com/catalog/books/handbook-on-neurosymbolic-ai-and-knowledge-graphs" target="_blank">
      <img src="/nesy_kg.jpg" alt="Book Cover" class="book-cover" />
    </a>
    <div class="book-info">
      <h3 class="book-title">Handbook on Neurosymbolic AI and Knowledge Graphs</h3>
    </div>
  </div>

   
  <div class="book">
    <a href="https://link.springer.com/book/10.1007/978-981-97-8171-3" target="_blank">
      <img src="/nesy_bridge.jpg" alt="Book Cover" class="book-cover" />
    </a>
    <div class="book-info">
      <h3 class="book-title">Neuro-Symbolic Artificial Intelligence</h3>
    </div>
  </div>

</div>

<!-- Book Shelf Styles -->
<style>
.bookshelf {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* Increased space between books */
  margin-top: 2rem;
}
.book {
  width: 100%;
  /* remove fixed width, let grid handle it */
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, border 0.2s;
  border: 2px solid #e5e7eb; /* Light gray, matches theme card/sidebar border */
  text-decoration: none;
  cursor: pointer;
}
.book:hover {
  box-shadow: 0 6px 24px rgba(59,130,246,0.10);
  border-color: #a5b4fc; /* Subtle blue on hover */
}
.book-cover {
  width: 150px;
  height: 220px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
  background: #f3f3f3;
}
.book-info {
  text-align: center;
}
.book-title, .book-title a {
  font-size: 1rem!important;
  margin: 0.5rem 0 0.3rem 0;
  color: #222 !important;
  text-decoration: none !important;
}
.book-author, .book-isbn {
  font-size: 0.92rem;
  margin: 0.15rem 0;
  color: #6b7280;
  font-weight: 400;
  text-decoration: none !important;
}
.book-link {
  display: none;
}
</style>

<style>
/* Make the main content area wider for the books page only */
.vp-doc._research_books .content-container {
  max-width: 1600px !important; /* or any width you prefer */
  width: 100%;
}
</style> 