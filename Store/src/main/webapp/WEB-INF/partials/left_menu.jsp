<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!-- Sidebar -->
<div id="sidebar">
    <div class="inner">

        <!-- Search -->
        <section id="search" class="alt">
            <form method="post" action="#">
                <input type="text" name="query" id="query" placeholder="Search"/>
            </form>
        </section>

        <!-- Menu -->
        <nav id="menu">
            <header class="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li><a href="${pageContext.request.contextPath}/index.jsp">Homepage</a></li>
                <li><a href="#">Library</a></li>
                <li>
                    <span class="opener">Store</span>
                    <ul>
                        <li><a href="${pageContext.request.contextPath}/products">All games</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Community recommendation</a></li>
                        <li><a href="#">Special offers</a></li>
                    </ul>
                </li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="${pageContext.request.contextPath}/jsp/about.jsp">About us</a></li>
            </ul>
        </nav>

        <!-- Section -->
        <section>
            <header class="major">
                <h2>Game news</h2>
            </header>
            <div class="mini-posts">
                <article>
                    <a href="#" class="image"><img src="${pageContext.request.contextPath}/assets/images/news/news_ps5_2.jpg" alt=""/>More PS4 Games
                        Could Come To PC</a>
                    <p>Sony said in a corporate report that it's exploring releasing more of its first-party games
                        on PC.</p>
                </article>
                <article>
                    <a href="#" class="image"><img src="${pageContext.request.contextPath}/assets/images/news/news_ps5.jpg" alt=""/>PS5 Pre-Order
                        Registration Is Open, But First Round Is Invite-Only</a>
                    <p>PlayStation 5 pre-orders are going to be extremely limited, so if you're in the market for a
                        PS5 this holiday season, you'll want to register quickly.</p>
                </article>
                <article>
                    <a href="#" class="image"><img src="${pageContext.request.contextPath}/assets/images/news/news_CoD.jpg" alt=""/>Here's
                        Everything We Know About Call Of Duty: Black Ops Cold War</a>
                    <p>Call of Duty is officially heading back to the Black Ops universe for a Cold War story in
                        2020. Here's what we know about Call of Duty: Black Ops Cold War.</p>
                </article>
            </div>
            <ul class="actions">
                <li><a href="#" class="button">More</a></li>
            </ul>
        </section>

        <!-- Section -->
        <section>
            <header class="major">
                <h2>Get in touch</h2>
            </header>
            <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem
                ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus
                aliquam.</p>
            <ul class="contact">
                <li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                <li class="icon solid fa-phone">(000) 000-0000</li>
                <li class="icon solid fa-home">1234 Somewhere Road #8254<br/>
                    Nashville, TN 00000-0000
                </li>
            </ul>
        </section>

        <%@ include file="footer.jsp"%>

    </div>
</div>