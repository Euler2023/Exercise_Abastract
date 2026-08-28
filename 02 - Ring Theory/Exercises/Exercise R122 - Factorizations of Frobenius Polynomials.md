---
title: "Exercise R122: Factorizations of Frobenius Polynomials"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - finite-fields
  - polynomial-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.1, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R122: Factorizations of Frobenius Polynomials

## Problem Statement

> [!question] Exercise 4.1
> **(a)** Factor $x^9-x$ and $x^9-1$ in $\mathbb F_3[x]$.
>
> **(b)** Factor $x^{16}-x$ in $\mathbb F_2[x]$.

## Hints

> [!hint]- Hint 1
> The polynomial $x^{q^n}-x$ is the product of all monic irreducible polynomials over $\mathbb F_q$ whose degrees divide $n$.

> [!hint]- Hint 2
> In characteristic $3$, use the Frobenius identity on $x^9-1$.

## Solution

> [!success]- Solution
> **(a)** Since $9=3^2$, the factors of $x^9-x$ are precisely the monic irreducibles over $\mathbb F_3$ of degrees $1$ and $2$. The three linear factors are $x,x-1,x+1$, and the three monic irreducible quadratics are
>
> $$
> x^2+1,\qquad x^2+x+2,\qquad x^2-x+2.
> $$
>
> Hence
>
> $$
> x^9-x
> =x(x-1)(x+1)(x^2+1)(x^2+x+2)(x^2-x+2).
> $$
>
> In characteristic $3$,
>
> $$
> x^9-1=(x-1)^9
> $$
>
> by the Frobenius identity $(a-b)^9=a^9-b^9$.
>
> **(b)** Since $16=2^4$, the factors of $x^{16}-x$ are the monic irreducibles over $\mathbb F_2$ whose degrees divide $4$. Listing the degrees $1,2,4$ gives
>
> $$
> \begin{aligned}
> x^{16}-x={}&x(x+1)(x^2+x+1)\\
> &\cdot(x^4+x+1)(x^4+x^3+1)
> (x^4+x^3+x^2+x+1).
> \end{aligned}
> $$
>
> The degrees add to $16$, and the factors are distinct because the derivative of $x^{16}-x$ is $-1=1$ in $\mathbb F_2$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because the requested output is a complete irreducible factorization; finite-field Frobenius supplies the organizing theorem.
- **Source status:** The problem statement is from [S1, Ch. 12, §12.4, Ex. 4.1, printed p. 380, PDF p. 392]. The factor lists and verification are independent.

