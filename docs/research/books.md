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
      <p class="book-author"><strong>Editor:</strong> Md Kamruzzaman Sarker</p>
    </div>
  </div>
  <!-- Add more book entries below by copying the .book block -->
</div>

<!-- Book Shelf Styles -->
<style>
.bookshelf {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}
.book {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem;
  width: 270px;
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
  height: 210px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
  background: #f3f3f3;
}
.book-info {
  text-align: center;
}
.book-title, .book-title a {
  font-size: 1rem;
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