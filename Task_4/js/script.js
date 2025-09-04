document.addEventListener("DOMContentLoaded", () => {
            let currentPage = 1;
            const postsPerPage = 6;
            let currentFilter = 'all';
            let currentSearchTerm = '';

            const blogPostsGrid = document.querySelector(".blog-posts-grid");
            const filterButtons = document.querySelectorAll(".filter-btn");
            const searchInput = document.getElementById("search-input");
            const prevPageBtn = document.getElementById("prev-page");
            const nextPageBtn = document.getElementById("next-page");
            const pageInfoSpan = document.getElementById("page-info");
            const footerFilterLinks = document.querySelectorAll(".footer .filter-link");

            // Get all blog post cards from the HTML
            const allBlogCards = Array.from(document.querySelectorAll(".blog-post-card"));

            function filterAndSearchPosts() {
                return allBlogCards.filter(card => {
                    const category = card.dataset.category;
                    const title = card.dataset.title.toLowerCase();
                    const matchesCategory = (currentFilter === 'all' || category === currentFilter);
                    const matchesSearch = title.includes(currentSearchTerm.toLowerCase());
                    return matchesCategory && matchesSearch;
                });
            }

            function renderPosts() {
                const filteredAndSearchedPosts = filterAndSearchPosts();
                const totalPages = Math.ceil(filteredAndSearchedPosts.length / postsPerPage);

                if (currentPage > totalPages && totalPages > 0) {
                    currentPage = totalPages;
                } else if (totalPages === 0) {
                    currentPage = 0; // No posts
                } else if (currentPage === 0 && totalPages > 0) {
                    currentPage = 1; // Reset to page 1 if there are posts
                }
                
                // Hide all posts first
                allBlogCards.forEach(card => card.style.display = 'none');
                blogPostsGrid.innerHTML = ''; // Clear the grid to re-append visible posts

                if (filteredAndSearchedPosts.length === 0) {
                    blogPostsGrid.innerHTML = '<p class="no-posts-message">No posts found matching your criteria.</p>';
                    updatePaginationControls(totalPages);
                    return;
                }

                const startIndex = (currentPage - 1) * postsPerPage;
                const endIndex = startIndex + postsPerPage;
                const postsForPage = filteredAndSearchedPosts.slice(startIndex, endIndex);

                // Append only the posts for the current page
                postsForPage.forEach(card => {
                    card.style.display = 'block'; // Make it visible
                    blogPostsGrid.appendChild(card);
                });
                
                updatePaginationControls(totalPages);
            }

            function updatePaginationControls(totalPages) {
                prevPageBtn.disabled = currentPage <= 1;
                nextPageBtn.disabled = currentPage >= totalPages || totalPages === 0;
                pageInfoSpan.textContent = `Page ${totalPages > 0 ? currentPage : 0} of ${totalPages}`;
            }

            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");
                    currentFilter = button.dataset.category;
                    currentPage = 1;
                    renderPosts();
                });
            });

            footerFilterLinks.forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    const category = link.dataset.category;
                    
                    filterButtons.forEach(btn => {
                        btn.classList.remove("active");
                        if (btn.dataset.category === category) {
                            btn.classList.add("active");
                        }
                    });

                    currentFilter = category;
                    currentPage = 1;
                    renderPosts();
                });
            });

            searchInput.addEventListener("keyup", (event) => {
                currentSearchTerm = event.target.value;
                currentPage = 1;
                renderPosts();
            });

            prevPageBtn.addEventListener("click", () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderPosts();
                }
            });

            nextPageBtn.addEventListener("click", () => {
                const filteredAndSearchedPosts = filterAndSearchPosts();
                const totalPages = Math.ceil(filteredAndSearchedPosts.length / postsPerPage);
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPosts();
                }
            });

            // Initial render
            renderPosts();
        });