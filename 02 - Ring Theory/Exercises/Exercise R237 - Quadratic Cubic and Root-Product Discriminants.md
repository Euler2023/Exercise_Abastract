---
title: "Exercise R237: Quadratic Cubic and Root-Product Discriminants"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 12, printed p. 215, PDF p. 230"
created: 2026-09-06
---

# Exercise R237: Quadratic Cubic and Root-Product Discriminants

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 12
>
> (a) If $f(X)=aX^2+bX+c$, show that its discriminant is $b^2-4ac$.
>
> (b) If $f(X)=a_0X^3+a_1X^2+a_2X+a_3$, show that its discriminant is
> $$
> a_1^2a_2^2-4a_0a_2^3-4a_1^3a_3-27a_0^2a_3^2+18a_0a_1a_2a_3.
> $$
>
> (c) Let $f(X)=(X-t_1)\cdots(X-t_n)$. Show that
> $$
> D_f=(-1)^{n(n-1)/2}\prod_{i=1}^n f'(t_i).
> $$

## Hints

> [!hint]- Hint 1
> In (a), use $a^2(t_1-t_2)^2$. In (c), pair the factors indexed by $(i,j)$ and $(j,i)$.

> [!hint]- Hint 2
> For (b), translate a monic cubic to $Y^3+pY+q$ and then restore the leading-coefficient factor.

## Solution

> [!success]- Solution
> ### Approach
> In (a), use $a^2(t_1-t_2)^2$. In (c), pair the factors indexed by $(i,j)$ and $(j,i)$.
>
> ### Proof
> For a degree-$n$ polynomial with leading coefficient $a\ne0$, the discriminant convention is $a^{2n-2}\prod_{i<j}(t_i-t_j)^2$ in a splitting field.
>
> **(a)** Vieta gives $t_1+t_2=-b/a$ and $t_1t_2=c/a$. Hence
> $$
> a^2(t_1-t_2)^2=a^2((t_1+t_2)^2-4t_1t_2)=b^2-4ac.
> $$
>
> **(c)** Evaluation of the product rule gives $f'(t_i)=\prod_{j\ne i}(t_i-t_j)$. Every unordered pair contributes $(t_i-t_j)(t_j-t_i)=-(t_i-t_j)^2$, giving
> $$
> \prod_i f'(t_i)=(-1)^{n(n-1)/2}\prod_{i<j}(t_i-t_j)^2.
> $$
> The identity also holds when roots coincide, because both sides then vanish.
>
> **(b)** First work with universal characteristic-zero coefficients and write $A=a_0,B=a_1,C=a_2,E=a_3$. On substituting $X=Y-B/(3A)$ and dividing by $A$, the polynomial becomes $Y^3+pY+q$, where
> $$
> p=\frac{3AC-B^2}{3A^2},\qquad q=\frac{2B^3-9ABC+27A^2E}{27A^3}.
> $$
> For $g=Y^3+pY+q$, multiplication by $g'=3Y^2+p$ modulo $g$, in the basis $1,Y,Y^2$, has matrix
> $$
> \begin{pmatrix}p&-3q&0\\0&-2p&-3q\\3&0&-2p\end{pmatrix}.
> $$
> For distinct generic roots, evaluation identifies this multiplication map with the diagonal map with entries $g'(t_i)$, so its determinant is $\prod_i g'(t_i)$. The determinant is $4p^3+27q^2$. By (c), $D_g=-4p^3-27q^2$. Being a polynomial identity, this also holds at repeated roots.
>
> Translation leaves root differences unchanged, and restoring $A$ multiplies the discriminant by $A^4$. Substituting the displayed $p,q$ and expanding gives
> $$
> A^4(-4p^3-27q^2)=B^2C^2-4AC^3-4B^3E-27A^2E^2+18ABCE.
> $$
> Both sides are universal integer polynomials in the coefficients. Equality over the characteristic-zero rational function field therefore proves the coefficient identity over $\mathbb Z$, and specialization proves it in every characteristic. Division by $3$ was only used to establish this universal identity, not to assume it is possible in the final coefficient field.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]

## Notes

- **Degree convention:** Parts (a) and (b) use $a\ne0$ and $a_0\ne0$ for the root definition. The coefficient formulas themselves specialize even when a leading coefficient becomes zero. The general resultant/discriminant convention is discussed in [S2, Ch. IV, §8, printed pp. 200-204, PDF pp. 215-219].
- **Computational check:** Exact symbolic expansion independently checked the displayed $3\times3$ determinant and the substitution restoring the cubic's leading coefficient. The proof of the general identity is given above.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 12, printed p. 215, PDF p. 230]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
