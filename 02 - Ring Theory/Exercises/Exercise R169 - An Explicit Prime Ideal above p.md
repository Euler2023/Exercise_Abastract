---
title: "Exercise R169: An Explicit Prime Ideal above p"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - prime-ideals
  - ideal-lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 6, Prime Ideals and Prime Integers, Ex. 6.7, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R169: An Explicit Prime Ideal above p

## Problem Statement

> [!question] Exercise 6.7
> Suppose that $d\equiv2$ or $3$ modulo $4$, and that a prime $p\neq2$ does not remain prime in $R$. Let $a$ be an integer such that $a^2\equiv d$ modulo $p$. Prove that $(p,a+\delta)$ is a lattice basis for a prime ideal that divides $(p)$.

## Hints

> [!hint]- Hint 1
> Check stability under multiplication by $\delta$, using $(d-a^2)/p\in\mathbb Z$.

> [!hint]- Hint 2
> Identify the quotient by evaluating $\delta$ at $-a$ modulo $p$, and multiply by the conjugate ideal to see divisibility.

## Solution

> [!success]- Solution
> Let
>
> $$
> P=\mathbb Zp+\mathbb Z(a+\delta).
> $$
>
> The coefficient matrix of these two vectors in the basis $(1,\delta)$ is
>
> $$
> \begin{pmatrix}p&a\\0&1\end{pmatrix},
> $$
>
> whose determinant is $p$. Thus they are a lattice basis of an index-$p$ sublattice.
>
> It is an ideal because
>
> $$
> \delta p=-ap+p(a+\delta)
> $$
>
> and
>
> $$
> \delta(a+\delta)
> =a(a+\delta)+\frac{d-a^2}{p},p.
> $$
>
> The second coefficient is an integer by hypothesis. Hence the lattice is stable under multiplication by $\delta$.
>
> The homomorphism
>
> $$
> R\longrightarrow\mathbb F_p,
> \qquad
> r+s\delta\longmapsto r-as
> $$
>
> sends $\delta$ to $-a$ and has kernel $P$. Therefore $R/P\cong\mathbb F_p$, so $P$ is maximal and hence prime.
>
> Its conjugate is $\overline P=(p,a-\delta)$. If $p$ splits, then $a\not\equiv0\pmod p$, and the products of the two bases generate $(p)$ because $2a$ is invertible modulo $p$. If $p$ ramifies, then $p\mid d$ and square-freeness makes $(d-a^2)/p$ a unit modulo $p$ after choosing $a\equiv0$; the same product calculation again gives
>
> $$
> P\overline P=(p).
> $$
>
> Thus $P$ divides $(p)$, as required.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because the lattice is certified as an ideal, a residue-field kernel, and a divisor of $(p)$.
- **Sign convention:** The source uses $(p,a+\delta)$; its quotient sends $\delta$ to $-a$. Replacing $a$ by $-a$ gives the conjugate prime factor.
- **Source status:** The problem is from [S1, Ch. 13, §13.6, Ex. 6.7, printed p. 410, PDF p. 422]. The closure, quotient, and product computations are independent.
