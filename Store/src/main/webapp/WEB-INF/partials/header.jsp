<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!-- Header -->
<header id="header">
    <a href="${pageContext.request.contextPath}/index.jsp" class="logo"><strong>WONDER</strong></a>
    <div id="top_menu">
        <ul>
            <c:choose>
                <c:when test="${user ne null}">
                    <li><a href="${pageContext.request.contextPath}/log/in" class="button primary">Profile</a>
                    </li>
                </c:when>
                <c:otherwise>
                    <li><a href="${pageContext.request.contextPath}/log/in" class="button primary">Log
                        in</a></li>
                    <li><a href="${pageContext.request.contextPath}/sign/up"
                           class="button primary">Sign up</a></li>
                </c:otherwise>
            </c:choose>

            <li><a href="${pageContext.request.contextPath}/cart"
                   class="button primary" id="cart">
                <c:choose>
                    <c:when test="${sessionScope.productsInCartTotalNumber eq null or sessionScope.productsInCartTotalCost eq null}">
                        Cart: 0 items, 0$
                    </c:when>
                    <c:otherwise>
                        Cart: ${sessionScope.productsInCartTotalNumber} items, ${sessionScope.productsInCartTotalCost}$
                    </c:otherwise>
                </c:choose>
            </a></li>
        </ul>
    </div>
</header>


