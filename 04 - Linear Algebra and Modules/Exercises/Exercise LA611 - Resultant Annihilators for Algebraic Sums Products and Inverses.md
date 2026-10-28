---
title: "Exercise LA611: Resultant Annihilators for Algebraic Sums Products and Inverses"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.4, Exercise 6.4.1, printed pp. 236–237, PDF pp. 250–251"
source_refs:
  - "S7/ch-6/sec-4/ex-1"
created: 2026-10-28
---

# Exercise LA611: Resultant Annihilators for Algebraic Sums Products and Inverses

## Problem Statement

> [!question] Original Exercise 6.4.1
> Recall from algebra that if $f(x)=a_0x^m+a_1x^{n-1}+\cdots+a_m$ and $g(x)=b_0x^n+b_1x^{n-1}+\cdots+b_n$ then their resultant $R(f(x),g(x);x)$ is the determinant of their Sylvester matrix
> $$
> M=\begin{pmatrix}
> a_0&a_1&\cdots&a_m&&&\\
> &\ddots&\ddots&&\ddots&&\\
> &&a_0&a_1&\cdots&a_m&\\
> b_0&b_1&\cdots&b_n&&&\\
> &b_0&b_1&\cdots&b_n&&\\
> &&\ddots&\ddots&&\ddots&\\
> &&&b_0&b_1&\cdots&b_n
> \end{pmatrix}
> $$
> ($n$ staggered rows of $a_i$'s, $m$ staggered rows of $b_j$'s, all other entries $0$). The resultant eliminates $x$, leaving a polynomial in the coefficients that vanishes if and only if $f$ and $g$ share a root. Let $p(x)$ and $q(x)$ be monic polynomials in $\mathbb Q[x]$. Consider the resultants
> $$
> \widetilde q(t,u)=R(p(s),u-s-t;s),\qquad
> r(u)=R(\widetilde q(t,u),q(t);t).
> $$
> Show that if $\alpha$ and $\beta$ satisfy the polynomials $p$ and $q$ then $\alpha+\beta$ satisfies the polynomial $r$. Similarly, find polynomials satisfied by $\alpha\beta$ and $1/\alpha$ if $\alpha\ne0$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Evaluate $\widetilde q$ at $(t,u)=(\beta,\alpha+\beta)$. The two polynomials in $s$ share the root $\alpha$.

> [!hint]- Hint 2
> For products, clear the denominator in $q(u/s)$ before taking its resultant with $p(s)$. For an inverse, reverse the coefficients of $p$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $m=\deg p$ and $n=\deg q$, and denote their complex roots, with multiplicity, by $\alpha_1,\ldots,\alpha_m$ and $\beta_1,\ldots,\beta_n$. We use the resultant product formula for a monic first polynomial, $\operatorname{Res}(p,F)=\prod_iF(\alpha_i)$, together with the common-root criterion recalled in the problem.
>
> **Sum.** At $u=\alpha+\beta$ and $t=\beta$, the polynomials $p(s)$ and $u-s-t$ have the common root $s=\alpha$, so $\widetilde q(\beta,\alpha+\beta)=0$. Since $q(\beta)=0$, the outer resultant also vanishes:
> $$
> r(\alpha+\beta)=0.
> $$
> This is a nonzero rational polynomial, not a vacuous zero annihilator. In fact
> $$
> \widetilde q(t,u)=\prod_{i=1}^m(u-\alpha_i-t),\qquad
> r(u)=(-1)^{mn}\prod_{i=1}^m\prod_{j=1}^n(u-\alpha_i-\beta_j).
> $$
> The sign comes from viewing $\widetilde q$ as a degree-$m$ polynomial in $t$ with leading coefficient $(-1)^m$. Its leading coefficient in $u$ is therefore $(-1)^{mn}$, which is nonzero.
>
> **Product.** Define the polynomial
> $$
> F(s,u)=s^nq(u/s)=u^n+b_1u^{n-1}s+\cdots+b_ns^n\in\mathbb Q[s,u],
> $$
> where $q(x)=x^n+b_1x^{n-1}+\cdots+b_n$. Then
> $$
> P(u)=R(p(s),F(s,u);s)
> =\prod_{i,j}(u-\alpha_i\beta_j).
> $$
> The last identity is polynomial, so it remains valid when some $\alpha_i=0$: the corresponding factor $F(0,u)$ is $u^n$. Thus $P$ is monic and nonzero, and $P(\alpha\beta)=0$.
>
> **Inverse.** If $\alpha\ne0$, take
> $$
> Q(u)=u^mp(1/u)\in\mathbb Q[u].
> $$
> It is nonzero because its constant term is $1$, and
> $$
> Q(1/\alpha)=\alpha^{-m}p(\alpha)=0.
> $$
> If a monic annihilator is desired, first divide $p(x)$ by its highest factor $x^a$; the remaining polynomial still vanishes at $\alpha$ and has nonzero constant term. Reversing it and dividing by that constant normalizes its leading coefficient.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Polynomial Resultants|Polynomial Resultants]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Source issue:** The printed first polynomial has $a_1x^{n-1}$ after $a_0x^m$. Its degree-$m$ Sylvester rows require $a_1x^{m-1}$. The original wording is retained above; the solution uses the intended degree convention.
- **Input:** The resultant common-root and product formulas are named algebraic inputs recalled by the source, rather than newly proved here.
- **Boundary:** The constructed polynomials are annihilators; they need not be irreducible or minimal.
- **Routing:** Sylvester determinants and their elimination formulas are the principal tools.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
