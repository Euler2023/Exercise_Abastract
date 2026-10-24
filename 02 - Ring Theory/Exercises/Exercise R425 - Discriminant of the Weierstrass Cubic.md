---
title: "Exercise R425: Discriminant of the Weierstrass Cubic"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.4, Exercise 1.4.4, printed p. 37, PDF p. 52"
source_refs:
  - "S7/ch-1/sec-4/ex-4"
created: 2026-10-24
---

# Exercise R425: Discriminant of the Weierstrass Cubic

## Problem Statement

> [!question] Original Exercise 1.4.4
> For $\tau\in\mathcal H$ let $p_\tau(x)=4x^3-g_2(\tau)x-g_3(\tau)$. Show that the discriminant of $p_\tau$ equals $\Delta(\tau)$ up to constant multiple, where $\Delta$ is the cusp form from Section 1.1.
>
> **Source normalization:** On printed p. 6 / PDF p. 21, Diamond–Shurman defines
> $$
> g_2=60G_4,\qquad g_3=140G_6,\qquad
> \Delta_{\mathrm{DS}}=g_2^3-27g_3^2.
> $$
> The subscript distinguishes this from the normalized discriminant $\Delta_{\mathrm{norm}}=q+\cdots$ used in the vault's concept note.

> [!warning] Notation conflict: two discriminant normalizations
> The book's $\Delta$ is $\Delta_{\mathrm{DS}}=(2\pi)^{12}\Delta_{\mathrm{norm}}$. With the polynomial convention $\operatorname{disc}(a\prod_{j=1}^n(x-r_j))=a^{2n-2}\prod_{j<k}(r_j-r_k)^2$, the exact answer is $\operatorname{disc}(p_\tau)=16\Delta_{\mathrm{DS}}(\tau)$. Dividing $p_\tau$ by its leading coefficient before taking its discriminant changes this constant.

## Hints

> [!hint]- Hint 1
> First calculate the discriminant of a monic depressed cubic $F(x)=x^3+ux+v$ from its three roots and their elementary symmetric sums.

> [!hint]- Hint 2
> For degree three, multiplying a polynomial by a scalar $a$ multiplies its discriminant by $a^4$. Apply this with $p_\tau=4(x^3-g_2x/4-g_3/4)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $F(x)=x^3+ux+v$ have roots $r_1,r_2,r_3$, initially assumed distinct. Vieta's formulas give
> $$
> r_1+r_2+r_3=0,\quad
> r_1r_2+r_1r_3+r_2r_3=u,\quad
> r_1r_2r_3=-v.
> $$
> Consequently
> $$
> \sum_jr_j^2=-2u,\qquad
> \sum_{j<k}r_j^2r_k^2=u^2-2(r_1r_2r_3)(r_1+r_2+r_3)=u^2.
> $$
> Since $F'(r_j)=\prod_{k\ne j}(r_j-r_k)$, multiplying over the three roots gives one minus sign for each of the three unordered pairs:
> $$
> \prod_{j=1}^3F'(r_j)=-\prod_{j<k}(r_j-r_k)^2=-\operatorname{disc}(F).
> $$
> Expanding $F'(r_j)=3r_j^2+u$ and using the symmetric sums yields
> $$
> \begin{aligned}
> \prod_{j=1}^3(3r_j^2+u)
> &=27(r_1r_2r_3)^2+9u\sum_{j<k}r_j^2r_k^2
> +3u^2\sum_jr_j^2+u^3\\
> &=27v^2+9u^3-6u^3+u^3=27v^2+4u^3.
> \end{aligned}
> $$
> Therefore $\operatorname{disc}(F)=-4u^3-27v^2$. Both sides are polynomial expressions in the roots, so the identity remains valid when roots coincide, without any distinctness assumption.
>
> Now put $u=-g_2(\tau)/4$ and $v=-g_3(\tau)/4$. Multiplying a degree-three monic polynomial by $4$ leaves its roots unchanged and introduces the factor $4^{2\cdot3-2}=4^4$ in the discriminant. Hence
> $$
> \begin{aligned}
> \operatorname{disc}(p_\tau)
> &=4^4\left[-4\left(-\frac{g_2(\tau)}4\right)^3
> -27\left(-\frac{g_3(\tau)}4\right)^2\right]\\
> &=16\bigl(g_2(\tau)^3-27g_3(\tau)^2\bigr)
> =16\Delta_{\mathrm{DS}}(\tau).
> \end{aligned}
> $$
> In the normalized vault convention this is $16(2\pi)^{12}\Delta_{\mathrm{norm}}(\tau)$. The discriminant of the monic polynomial $p_\tau/4$ is instead $\Delta_{\mathrm{DS}}(\tau)/16$.
>
> A numerical-coefficient check fixes the leading-coefficient factor: for $p(x)=4x(x-1)(x+1)$, the squared root-difference product is $4$ and $\operatorname{disc}(p)=4^4\cdot4=1024$. Here $g_2=4$, $g_3=0$, so $16(g_2^3-27g_3^2)=16\cdot64=1024$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Discriminant Function|Discriminant Function]]
- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]

## Notes

- **Source status:** The exact exercise was visually checked at [Diamond–Shurman, Ch. 1, §1.4, printed p. 37, PDF p. 52]; the book's definitions of $g_2,g_3,\Delta$ at [§1.1, printed p. 6, PDF p. 21]. The source's use of this exercise in Corollary 1.4.2 was checked at [§1.4, printed p. 34, PDF p. 49]. The algebraic calculation above is independent.
- **Routing:** Symmetric polynomials, root differences and the leading-coefficient convention do the work. The modular-form interpretation is a cross-topic consequence, so this note is filed under ring theory.
- **Proof boundary:** No analytic nonvanishing theorem for $\Delta$ is used to calculate the discriminant. Combining the identity with Proposition 1.4.1(c), which gives distinct cubic roots, proves nonvanishing in the upper half plane.
- **Normalization boundary:** “Discriminant of the cubic polynomial,” “discriminant of an elliptic-curve equation,” and “normalized modular discriminant” may use different nonzero constants. The explicit conventions above prevent those constants from being silently identified.
