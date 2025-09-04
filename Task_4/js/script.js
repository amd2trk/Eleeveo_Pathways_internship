document.addEventListener("DOMContentLoaded", () => {
            const blogPosts = [
                {
                    id: 1,
                    title: "The Future of AI in Everyday Life",
                    image: "https://images.unsplash.com/photo-1511370235338-f46323a67d02?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Artificial intelligence is rapidly integrating into our daily routines, from smart assistants to predictive algorithms. Let's explore its current impact and what the future holds.",
                    date: "October 26, 2023",
                    category: "tech"
                },
                {
                    id: 2,
                    title: "Exploring the Ancient Wonders of Rome",
                    image: "https://images.unsplash.com/photo-1552832230-c0197ce0fa84?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "A journey through the Eternal City, uncovering the history and beauty of its iconic landmarks like the Colosseum, Roman Forum, and Vatican City.",
                    date: "October 20, 2023",
                    category: "travel"
                },
                {
                    id: 3,
                    title: "Mastering the Art of Sourdough Baking",
                    image: "https://images.unsplash.com/photo-1583337996504-061266ed715b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Tips and tricks for baking the perfect sourdough loaf at home, from starter maintenance to achieving that coveted crispy crust and airy interior.",
                    date: "October 15, 2023",
                    category: "food"
                },
                {
                    id: 4,
                    title: "Digital Nomad Life: Work-Life Balance",
                    image: "https://images.unsplash.com/photo-1524104523098-9366110f279d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Navigating the challenges and joys of being a digital nomad, focusing on how to maintain productivity and a healthy personal life while on the go.",
                    date: "October 10, 2023",
                    category: "lifestyle"
                },
                {
                    id: 5,
                    title: "Beginner's Guide to Quantum Computing",
                    image: "https://images.unsplash.com/photo-1627916666324-b15399580a80?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "An introduction to the fascinating world of quantum computing, explaining its basic principles and potential to revolutionize technology.",
                    date: "October 5, 2023",
                    category: "tech"
                },
                {
                    id: 6,
                    title: "Hiking the Scenic Trails of Patagonia",
                    image: "https://images.unsplash.com/photo-1543780336-397753c9e6cd?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "A breathtaking adventure through Patagonia's iconic landscapes, featuring majestic mountains, glaciers, and crystal-clear lakes.",
                    date: "September 28, 2023",
                    category: "travel"
                },
                {
                    id: 7,
                    title: "Delicious Vegan Recipes for Every Meal",
                    image: "https://images.unsplash.com/photo-1601050672709-a1b6067b84fe?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Explore a collection of easy and flavorful vegan recipes, proving that plant-based eating can be both healthy and incredibly satisfying.",
                    date: "September 22, 2023",
                    category: "food"
                },
                {
                    id: 8,
                    title: "Mindfulness Practices for Stress Reduction",
                    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Simple yet effective mindfulness techniques to incorporate into your daily routine to help manage stress and improve overall well-being.",
                    date: "September 18, 2023",
                    category: "lifestyle"
                },
                {
                    id: 9,
                    title: "The Rise of Web3 and Decentralized Applications",
                    image: "https://images.unsplash.com/photo-1639722303078-43093282b0f4?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Understanding Web3, blockchain technology, and the shift towards decentralized applications that are reshaping the internet.",
                    date: "September 12, 2023",
                    category: "tech"
                },
                 {
                    id: 10,
                    title: "A Culinary Tour of Southeast Asia",
                    image: "https://images.unsplash.com/photo-1582236319807-6b086e100f2e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Indulge in the vibrant flavors of Southeast Asian cuisine, from street food stalls in Bangkok to fine dining in Singapore.",
                    date: "September 5, 2023",
                    category: "food"
                },
                {
                    id: 11,
                    title: "Solo Travel Tips for First-Timers",
                    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Comprehensive guide for anyone embarking on their first solo adventure, covering safety, budgeting, and making the most of the experience.",
                    date: "August 28, 2023",
                    category: "travel"
                },
                {
                    id: 12,
                    title: "Sustainable Living: Small Changes, Big Impact",
                    image: "https://images.unsplash.com/photo-1532921868461-9c3f0b093322?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Discover practical ways to adopt a more sustainable lifestyle, reducing your environmental footprint with conscious choices.",
                    date: "August 20, 2023",
                    category: "lifestyle"
                }
            ];

            let currentPage = 1;
            const postsPerPage = 6; // Limit to 6 posts per page
            let currentFilter = 'all';
            let currentSearchTerm = '';
            let filteredPosts = [];

            const blogPostsGrid = document.querySelector(".blog-posts-grid");
            const filterButtons = document.querySelectorAll(".filter-btn");
            const searchInput = document.getElementById("search-input");
            const prevPageBtn = document.getElementById("prev-page");
            const nextPageBtn = document.getElementById("next-page");
            const pageInfoSpan = document.getElementById("page-info");
            const footerFilterLinks = document.querySelectorAll(".footer .filter-link");


            function renderPosts() {
                blogPostsGrid.innerHTML = ''; // Clear existing posts

                let postsToRender = blogPosts;

                // Apply category filter
                if (currentFilter !== 'all') {
                    postsToRender = postsToRender.filter(post => post.category === currentFilter);
                }

                // Apply search filter
                if (currentSearchTerm) {
                    postsToRender = postsToRender.filter(post =>
                        post.title.toLowerCase().includes(currentSearchTerm.toLowerCase())
                    );
                }
                
                filteredPosts = postsToRender; // Store the currently filtered and searched posts

                const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
                
                // Adjust current page if it's out of bounds after filtering/searching
                if (currentPage > totalPages && totalPages > 0) {
                    currentPage = totalPages;
                } else if (totalPages === 0) {
                    currentPage = 0; // No pages if no posts
                } else if (currentPage === 0 && totalPages > 0) {
                    currentPage = 1; // Default to first page if posts exist
                }


                const startIndex = (currentPage - 1) * postsPerPage;
                const endIndex = startIndex + postsPerPage;
                const postsForPage = filteredPosts.slice(startIndex, endIndex);

                if (postsForPage.length === 0 && filteredPosts.length > 0) {
                     // This can happen if currentPage was set to 0 and there are actual posts
                    currentPage = 1;
                    renderPosts(); // Re-render from page 1
                    return;
                } else if (postsForPage.length === 0 && filteredPosts.length === 0) {
                    blogPostsGrid.innerHTML = '<p class="no-posts-message">No posts found matching your criteria.</p>';
                }


                postsForPage.forEach(post => {
                    const postCard = `
                        <div class="blog-post-card">
                            <img src="${post.image}" alt="${post.title}">
                            <div class="card-content">
                                <h3>${post.title}</h3>
                                <p class="post-description">${post.description}</p>
                                <div class="card-meta">
                                    <span class="post-date"><i class="far fa-calendar"></i> ${post.date}</span>
                                    <span class="post-category"><i class="fas fa-tag"></i> ${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                                </div>
                            </div>
                        </div>
                    `;
                    blogPostsGrid.innerHTML += postCard;
                });

                updatePaginationControls(totalPages);
            }

            function updatePaginationControls(totalPages) {
                prevPageBtn.disabled = currentPage <= 1;
                nextPageBtn.disabled = currentPage >= totalPages || totalPages === 0;
                pageInfoSpan.textContent = `Page ${totalPages > 0 ? currentPage : 0} of ${totalPages}`;
            }

            // Event Listeners for Category Filters
            filterButtons.forEach(button => {
                button.addEventListener("click", () => {
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    button.classList.add("active");
                    currentFilter = button.dataset.category;
                    currentPage = 1; // Reset to first page on filter change
                    renderPosts();
                });
            });

            // Event Listener for Footer Category Links
            footerFilterLinks.forEach(link => {
                link.addEventListener("click", (e) => {
                    e.preventDefault(); // Prevent default link behavior
                    const category = link.dataset.category;
                    
                    // Update active state on main filter buttons
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


            // Event Listener for Search Input
            searchInput.addEventListener("keyup", (event) => {
                currentSearchTerm = event.target.value;
                currentPage = 1; // Reset to first page on search change
                renderPosts();
            });

            // Event Listeners for Pagination
            prevPageBtn.addEventListener("click", () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderPosts();
                }
            });

            nextPageBtn.addEventListener("click", () => {
                const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
                if (currentPage < totalPages) {
                    currentPage++;
                    renderPosts();
                }
            });

            // Initial render
            renderPosts();
        });