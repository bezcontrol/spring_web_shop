<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>

<html lang="en">
<head>
    <title>Wonder</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/main.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/sidebar.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/header.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/footer.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/banner.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/posts.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/mini-posts.css"/>
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
</head>
<body class="is-preload">

<!-- Wrapper -->
<div id="wrapper">

    <!-- Main -->
    <div id="main">
        <div class="inner">

            <jsp:include page="../partials/header.jsp"/>
            <!-- Banner -->
            <section id="banner">
                <div class="content">
                    <header>
                        <h1>Hi, I’m Wonder.<br/></h1>
                        <p><strong>The ultimate destination for playing, discussing, and creating games.</strong></p>
                    </header>

                    <ul class="actions">
                        <li><a href="jsp/about.jsp" class="button big">Learn More</a></li>
                    </ul>
                </div>
                <span class="image object">
                    <img src="${pageContext.request.contextPath}/assets/images/index_games.jpg" alt=""/>
                </span>
            </section>


            <!-- Section -->
            <section>
                <header class="major">
                    <h2>Popular</h2>
                </header>
                <div class="posts">
                    <article>
                        <a href="#" class="image">
                            <img src="${pageContext.request.contextPath}/assets/images/products/product_dragon_age_origins.jpg"
                                                       alt=""/></a>
                        <h3>Dragon Age: Origins</h3>
                        <p>When history tells the story of the Fifth Blight, what will be said about the hero who turned
                            the tide against the darkspawn? Determine your legacy and fight for Thedas as a noble dwarf,
                            an elf far from home, a mage apprentice, or a customized hero of your own design.</p>
                        <ul class="actions">
                            <li><a href="#" class="button">More</a></li>
                            <li><a href="#" class="button primary">Purchase 100$</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" class="image">
                            <img src="${pageContext.request.contextPath}/assets/images/products/product_f1_2020.jpg" alt=""/></a>
                        <h3>F1® 2020</h3>
                        <p>F1® 2020 allows you to create your F1® team for the very first time and race alongside the
                            official teams and drivers. Alternatively, challenge your friends in new split-screen with
                            casual race options for more relaxed racing. Compete on 22 circuits, with current and
                            classic content.</p>
                        <ul class="actions">
                            <li><a href="#" class="button">More</a></li>
                            <li><a href="#" class="button primary">Purchase 200$</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" class="image">
                            <img src="${pageContext.request.contextPath}/assets/images/products/product_skyrim_vr.jpg"
                                                       alt=""/></a>
                        <h3>The Elder Scrolls V: Skyrim VR</h3>
                        <p>A true, full-length open-world game for VR has arrived from Bethesda Game Studios. Skyrim VR
                            reimagines the complete epic fantasy masterpiece with an unparalleled sense of scale, depth,
                            and immersion. Skyrim VR also includes all official add-ons.</p>
                        <ul class="actions">
                            <li><a href="#" class="button">More</a></li>
                            <li><a href="#" class="button primary">Purchase 300$</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" class="image">
                            <img src="${pageContext.request.contextPath}/assets/images/products/product_desolate.jpg" alt=""/></a>
                        <h3>DESOLATE</h3>
                        <p>DESOLATE is a first person horror survival experience. Form a research team with up to 4
                            players and explore an open world filled with mysteries and unsolved questions, or do it all
                            on your own.</p>
                        <ul class="actions">
                            <li><a href="#" class="button">More</a></li>
                            <li><a href="#" class="button primary">Purchase 400$</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" class="image">
                            <img src="${pageContext.request.contextPath}/assets/images/products/product_insurgency_sandstorm.jpg"
                                                       alt=""/></a>
                        <h3>Insurgency: Sandstorm</h3>
                        <p>Insurgency: Sandstorm is a team-based, tactical FPS based on lethal close quarters combat and
                            objective-oriented multiplayer gameplay. Experience the intensity of modern combat where
                            skill is rewarded, and teamwork wins the fight.</p>
                        <ul class="actions">
                            <li><a href="#" class="button">More</a></li>
                            <li><a href="#" class="button primary">Purchase 500$</a></li>
                        </ul>
                    </article>
                    <article>
                        <a href="#" class="image">
                            <img src="${pageContext.request.contextPath}/assets/images/products/product_fishing_planet.jpg"
                                                       alt=""/></a>
                        <h3>Fishing Planet</h3>
                        <p>Fishing Planet is a FREE to play unique and highly realistic online first-person multiplayer
                            fishing simulator developed for anglers to bring you the full thrill of actual fishing!
                            Choose your lures, make your trophy catches, discover new possibilities and sharpen your
                            real angling skills anywhere, anytime...</p>
                        <ul class="actions">
                            <li><a href="#" class="button">More</a></li>
                            <li><a href="#" class="button primary">Purchase 600$</a></li>
                        </ul>
                    </article>
                </div>
            </section>

        </div>
    </div>

    <jsp:include page="../partials/left_menu.jsp"/>

</div>

<!-- Scripts -->
<script src="${pageContext.request.contextPath}/assets/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/js/browser.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/js/breakpoints.min.js"></script>
<script src="${pageContext.request.contextPath}/assets/js/util.js"></script>
<script src="${pageContext.request.contextPath}/assets/js/main.js"></script>
</body>
</html>
